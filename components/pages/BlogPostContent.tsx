'use client';

import React from 'react';
import Link from 'next/link';
import { CONTENT, PROJECTS } from '@/lib/constants';
import { useCMS } from '@/context/CMSContext';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft, Calendar, User, Share2, ArrowRight, BookOpen } from 'lucide-react';
import BlogPostSchema from '@/components/seo/BlogPostSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const BlogPostContent: React.FC<{ slug: string }> = ({ slug }) => {
    const { lang } = useLanguage();
    const { blogPosts } = useCMS();
    const post = blogPosts.find(p => p.slug === slug);
    const t = CONTENT[lang] || CONTENT['en'];

    if (!post) {
        return (
            <div className="pt-32 text-center bg-brand-950 min-h-screen">
                <h1 className="text-2xl font-bold text-white">Post not found</h1>
                <Link href={`/${lang}/blog`} className="text-brand-TEAL hover:underline mt-4 block">Back to Blog</Link>
            </div>
        );
    }

    const project = post.projectId ? PROJECTS.find(p => p.id === post.projectId) : null;

    const title = post.title[lang] || post.title.en;
    const excerpt = post.excerpt[lang] || post.excerpt.en;
    const content = post.content[lang] || post.content.en;

    return (
        <div className="pt-24 min-h-screen bg-brand-950">
            <BreadcrumbSchema
                items={[
                    { name: 'Blog', item: `https://panamarealestatesale.com/${lang}/blog` },
                    { name: title, item: `https://panamarealestatesale.com/${lang}/blog/${slug}` }
                ]}
            />
            <BlogPostSchema post={post} lang={lang as 'es' | 'en'} />

            <div className="max-w-3xl mx-auto px-4 py-12">
                <Link
                    href={`/${lang}/blog`}
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-TEAL font-bold uppercase tracking-widest text-[10px] mb-8 transition-colors"
                >
                    <ArrowLeft size={12} /> {lang === 'es' ? 'Volver al Blog' : 'Back to Blog'}
                </Link>

                <span className="tag-teal mb-5 inline-block">
                    {post.category}
                </span>

                <h1 className="font-heading text-3xl md:text-5xl font-black text-white mb-8 leading-tight uppercase italic tracking-tighter mt-4">
                    {title}
                </h1>

                <div className="flex items-center justify-between border-y border-white/8 py-5 mb-12">
                    <div className="flex items-center gap-6 text-slate-500 text-[11px] font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <Calendar size={13} className="text-brand-TEAL" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={13} className="text-brand-TEAL" />
                            Panama Real Estate Advisor
                        </div>
                    </div>
                    <button className="text-slate-600 hover:text-white transition-colors">
                        <Share2 size={16} />
                    </button>
                </div>

                {/* Hero image */}
                <div className="rounded-2xl overflow-hidden mb-14 border border-white/5">
                    <img src={post.image} alt={title} className="w-full h-auto object-cover max-h-[480px]" loading="eager" />
                </div>

                {/* Article content */}
                <article className="mb-20">
                    <p className="text-lg text-white leading-relaxed mb-10 font-semibold border-l-4 border-brand-TEAL pl-5">
                        {excerpt}
                    </p>
                    <div
                        className="text-slate-400 leading-[1.85] font-sans text-base prose-headings:text-white prose-strong:text-white prose-a:text-brand-TEAL prose-a:no-underline hover:prose-a:underline"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </article>

                {/* Linked project CTA */}
                {project && (
                    <div className="mb-16 glass-card p-8 rounded-2xl border border-brand-GOLD/20 flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-56 h-40 rounded-xl overflow-hidden flex-shrink-0 border border-white/5">
                            <img src={project.images[0]} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex-grow">
                            <span className="tag-gold mb-3 inline-block">Featured Opportunity</span>
                            <h3 className="text-xl font-black text-white mb-2 uppercase italic tracking-tighter">
                                {project.name[lang] || project.name.en}
                            </h3>
                            <p className="text-sm text-slate-400 mb-5 leading-relaxed line-clamp-2">
                                {project.description[lang] || project.description.en}
                            </p>
                            <Link
                                href={`/${lang}/proyectos/${project.slug}`}
                                className="inline-flex items-center gap-2 btn-3d btn-3d-gold px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest"
                            >
                                View Development <ArrowRight size={12} />
                            </Link>
                        </div>
                    </div>
                )}

                {/* Lead magnet CTA */}
                <div className="mb-16 bg-brand-900 border border-brand-GOLD/30 p-10 rounded-2xl text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-brand-GOLD/5 rounded-full blur-3xl pointer-events-none" />
                    <BookOpen className="mx-auto mb-5 text-brand-GOLD/40" size={40} />
                    <h3 className="font-heading text-2xl font-black text-white mb-3 uppercase italic tracking-tighter">
                        Want the full picture?
                    </h3>
                    <p className="text-slate-400 text-sm mb-7 max-w-md mx-auto leading-relaxed">
                        Download our Panama Investment Guide. Covers residency, taxes, and hidden market opportunities.
                    </p>
                    <Link
                        href={`/${lang}`}
                        className="inline-block btn-3d btn-3d-gold px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs"
                    >
                        Download Free Guide
                    </Link>
                </div>

                {/* Advisor CTA */}
                <div className="glass-card rounded-2xl p-10 text-center border border-brand-TEAL/20 mb-10">
                    <h3 className="font-heading text-xl font-black text-white mb-3 uppercase italic tracking-tighter">
                        Need personalized advice?
                    </h3>
                    <p className="text-slate-400 text-sm mb-7 max-w-md mx-auto">
                        Our senior advisors can build a custom portfolio for your specific ROI and residency goals.
                    </p>
                    <Link
                        href={`/${lang}/contacto`}
                        className="inline-flex items-center gap-2 btn-3d btn-3d-teal px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs"
                    >
                        Speak with an Advisor <ArrowRight size={12} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPostContent;
