'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { BlogPost, Project, QuizSubmission } from '@/lib/types';
import { BLOG_POSTS, PROJECTS } from '@/lib/constants';
import { supabase } from '@/lib/supabase';
import {
    fetchWPBlogPosts,
    fetchWPProjects,
    mergeWPBlogPosts,
    mergeWPProjects,
    isWordPressConfigured,
} from '@/lib/wordpress';

interface CMSContextType {
    blogPosts: BlogPost[];
    projects: Project[];
    quizSubmissions: QuizSubmission[];
    refreshData: () => Promise<void>;
    uploadImage: (file: File, bucket: string) => Promise<string | null>;
    addBlogPost: (post: BlogPost) => Promise<boolean>;
    updateBlogPost: (post: BlogPost) => Promise<boolean>;
    deleteBlogPost: (id: string) => Promise<boolean>;
    addProject: (project: Project) => Promise<boolean>;
    updateProject: (project: Project) => Promise<boolean>;
    deleteProject: (id: string) => Promise<boolean>;
    saveQuizSubmission: (submission: QuizSubmission) => Promise<void>;
    deleteQuizSubmission: (id: string) => Promise<void>;
    getImages: (bucket: string) => Promise<string[]>;
    isAuthenticated: boolean;
    isSupabaseConfigured: boolean;
    login: (password: string) => void;
    logout: () => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);
    const [projects, setProjects] = useState<Project[]>(PROJECTS);
    const [quizSubmissions, setQuizSubmissions] = useState<QuizSubmission[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check if supabase is configured (url not default)
    const isSupabaseConfigured = !!(process.env.NEXT_PUBLIC_SUPABASE_URL &&
        process.env.NEXT_PUBLIC_SUPABASE_URL.length > 0 &&
        !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('tu-proyecto'));

    const refreshData = async () => {
        // ── Step 1: Local/static fallback if Supabase not configured ────────────
        if (!isSupabaseConfigured) {
            console.warn("Supabase not configured. Using static data.");
            if (typeof window !== 'undefined') {
                const localLeads = window.localStorage.getItem('pres_leads');
                if (localLeads) {
                    try { setQuizSubmissions(JSON.parse(localLeads)); } catch (e) { console.error(e); }
                }
            }
            // Still try to pull from WordPress even without Supabase
            if (isWordPressConfigured()) {
                const [wpPosts, wpProjects] = await Promise.all([
                    fetchWPBlogPosts(),
                    fetchWPProjects(),
                ]);
                if (wpPosts.length) setBlogPosts(mergeWPBlogPosts(BLOG_POSTS, wpPosts));
                if (wpProjects.length) setProjects(mergeWPProjects(PROJECTS, wpProjects));
            }
            return;
        }

        try {
            // ── Step 2: Load from Supabase ───────────────────────────────────────
            const [pResult, bResult, qResult] = await Promise.all([
                supabase.from('projects').select('*'),
                supabase.from('blog_posts').select('*').order('created_at', { ascending: false }),
                supabase.from('quiz_submissions').select('*').order('timestamp', { ascending: false }),
            ]);

            // Merge projects: static → Supabase overrides
            let mergedProjects = PROJECTS;
            if (pResult.data) {
                const dbProjects = pResult.data as Project[];
                const staticWithOverrides = PROJECTS.map(staticP => {
                    const dbVersion = dbProjects.find(p => p.id === staticP.id);
                    return dbVersion || staticP;
                });
                const newDbProjects = dbProjects.filter(dbP => !PROJECTS.some(p => p.id === dbP.id));
                mergedProjects = [...staticWithOverrides, ...newDbProjects];
            }

            // Merge blog posts: static → Supabase overrides
            let mergedPosts = BLOG_POSTS;
            if (bResult.data) {
                const dbPosts = bResult.data as BlogPost[];
                const staticWithOverrides = BLOG_POSTS.map(staticP => {
                    const dbVersion = dbPosts.find(p => p.id === staticP.id);
                    return dbVersion || staticP;
                });
                const newDbPosts = dbPosts.filter(dbP => !BLOG_POSTS.some(p => p.id === dbP.id));
                mergedPosts = [...staticWithOverrides, ...newDbPosts];
            }

            if (qResult.data) setQuizSubmissions(qResult.data);

            // ── Step 3: Layer WordPress posts on top (new content only) ──────────
            // WordPress adds NEW posts that aren't in Supabase/static.
            // Supabase always takes priority for overlapping slugs.
            if (isWordPressConfigured()) {
                const [wpPosts, wpProjects] = await Promise.all([
                    fetchWPBlogPosts(),
                    fetchWPProjects(),
                ]);
                if (wpPosts.length) mergedPosts = mergeWPBlogPosts(mergedPosts, wpPosts);
                if (wpProjects.length) mergedProjects = mergeWPProjects(mergedProjects, wpProjects);
            }

            setBlogPosts(mergedPosts);
            setProjects(mergedProjects);

        } catch (e) {
            console.error("Data refresh error:", e);
        }
    };

    // Initial load and auth check
    useEffect(() => {
        if (typeof window !== 'undefined') {
            refreshData();
            const auth = window.localStorage.getItem('cms_auth');
            if (auth === 'true') setIsAuthenticated(true);
        }
    }, []);

    const saveQuizSubmission = async (submission: QuizSubmission) => {
        if (!isSupabaseConfigured) {
            const updated = [submission, ...quizSubmissions];
            setQuizSubmissions(updated);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem('pres_leads', JSON.stringify(updated));
            }
            return;
        }
        await supabase.from('quiz_submissions').insert([submission]);
        await refreshData();
    };

    const deleteQuizSubmission = async (id: string) => {
        if (!isSupabaseConfigured) {
            const updated = quizSubmissions.filter(s => s.id !== id);
            setQuizSubmissions(updated);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem('pres_leads', JSON.stringify(updated));
            }
            return;
        }
        await supabase.from('quiz_submissions').delete().eq('id', id);
        await refreshData();
    };

    const uploadImage = async (file: File, bucket: string): Promise<string | null> => {
        if (!isSupabaseConfigured) {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result as string);
                reader.readAsDataURL(file);
            });
        }
        try {
            const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
            const { error } = await supabase.storage.from(bucket).upload(fileName, file);
            if (error) throw error;
            const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
            return data.publicUrl;
        } catch (e) {
            console.error("Upload error:", e);
            return null;
        }
    };

    const getImages = async (bucket: string): Promise<string[]> => {
        if (!isSupabaseConfigured) return [];
        try {
            const { data, error } = await supabase.storage.from(bucket).list('', {
                limit: 100,
                offset: 0,
                sortBy: { column: 'created_at', order: 'desc' },
            });
            if (error) throw error;
            return data.map(file => {
                const { data: publicUrlData } = supabase.storage.from(bucket).getPublicUrl(file.name);
                return publicUrlData.publicUrl;
            });
        } catch (e) {
            console.error("List images error:", e);
            return [];
        }
    };

    const addBlogPost = async (post: BlogPost): Promise<boolean> => {
        if (!isSupabaseConfigured) {
            setBlogPosts([post, ...blogPosts]);
            return true;
        }
        const { error } = await supabase.from('blog_posts').upsert(post);
        if (!error) { await refreshData(); return true; }
        console.error("Add blog error:", error);
        alert(`Error saving blog: ${error.message}`);
        return false;
    };

    const updateBlogPost = async (post: BlogPost): Promise<boolean> => {
        if (!isSupabaseConfigured) {
            setBlogPosts(blogPosts.map(p => p.id === post.id ? post : p));
            return true;
        }
        const { error } = await supabase.from('blog_posts').upsert(post);
        if (!error) { await refreshData(); return true; }
        console.error("Update blog error:", error);
        alert(`Error updating blog: ${error.message}`);
        return false;
    };

    const deleteBlogPost = async (id: string): Promise<boolean> => {
        if (!isSupabaseConfigured) {
            setBlogPosts(blogPosts.filter(p => p.id !== id));
            return true;
        }
        const { error } = await supabase.from('blog_posts').delete().eq('id', id);
        if (!error) { await refreshData(); return true; }
        console.error("Delete blog error:", error);
        return false;
    };

    const addProject = async (project: Project): Promise<boolean> => {
        if (!isSupabaseConfigured) {
            setProjects([project, ...projects]);
            return true;
        }
        const { error } = await supabase.from('projects').upsert(project);
        if (!error) { await refreshData(); return true; }
        console.error("Add project error:", error);
        alert(`Error saving project: ${error.message}`);
        return false;
    };

    const updateProject = async (project: Project): Promise<boolean> => {
        if (!isSupabaseConfigured) {
            setProjects(projects.map(p => p.id === project.id ? project : p));
            return true;
        }
        const { error } = await supabase.from('projects').upsert(project);
        if (!error) { await refreshData(); return true; }
        console.error("Update project error:", error);
        alert(`Error updating project: ${error.message}`);
        return false;
    };

    const deleteProject = async (id: string): Promise<boolean> => {
        if (!isSupabaseConfigured) {
            setProjects(projects.filter(p => p.id !== id));
            return true;
        }
        const { error } = await supabase.from('projects').delete().eq('id', id);
        if (!error) { await refreshData(); return true; }
        console.error("Delete project error:", error);
        return false;
    };

    const login = (password: string) => {
        if (password === '1234') {
            setIsAuthenticated(true);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem('cms_auth', 'true');
            }
        } else {
            alert('PIN Incorrecto');
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        if (typeof window !== 'undefined') {
            window.localStorage.removeItem('cms_auth');
        }
    };

    return (
        <CMSContext.Provider value={{
            blogPosts, projects, quizSubmissions, refreshData, uploadImage, addBlogPost, updateBlogPost, deleteBlogPost,
            addProject, updateProject, deleteProject, saveQuizSubmission, deleteQuizSubmission, getImages, isAuthenticated, isSupabaseConfigured, login, logout
        }}>
            {children}
        </CMSContext.Provider>
    );
};

export const useCMS = () => {
    const context = useContext(CMSContext);
    if (context === undefined) throw new Error('useCMS must be used within a CMSProvider');
    return context;
};
