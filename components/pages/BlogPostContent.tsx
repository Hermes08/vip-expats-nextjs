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
            <div className="pt-32 text-center bg-white min-h-screen">
                <h1 className="text-2xl font-bold text-brand-950">Post not found</h1>
                <Link href={`/${lang}/blog`} className="text-brand-TEAL-dark hover:underline mt-4 block">Back to Blog</Link>
            </div>
        );
    }

    const project = post.projectId ? PROJECTS.find(p => p.id === post.projectId) : null;
    const title = post.title[lang] || post.title.en;
    const excerpt = post.excerpt[lang] || post.excerpt.en;
    const content = post.content[lang] || post.content.en;

    return (
        <div className="pt-24 min-h-screen bg-white">
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
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-TEAL-dark font-bold uppercase tracking-widest text-[10px] mb-8 transition-colors"
                >
                    <ArrowLeft size={12} /> {lang === 'es' ? 'Volver al Blog' : 'Back to Blog'}
                </Link>

                <span className="tag-teal-light mb-4 inline-block">
                    {post.category}
                </span>

                <h1 className="font-heading text-3xl md:text-5xl font-black text-brand-950 mb-6 leading-tight uppercase italic tracking-tighter mt-3">
                    {title}
                </h1>

                <div className="flex items-center justify-between border-y border-brand-100 py-4 mb-10">
                    <div className="flex items-center gap-5 text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <Calendar size={13} className="text-brand-TEAL-dark" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={13} className="text-brand-TEAL-dark" />
                            Panama Real Estate Advisor
                        </div>
                    </div>
                    <button className="text-slate-300 hover:text-brand-TEAL-dark transition-colors">
                        <Share2 size={16} />
                    </button>
                </div>

                {/* Hero image */}
                <div className="rounded-2xl overflow-hidden mb-12 border border-brand-100">
                    <img src={post.image} alt={title} className="w-full h-auto object-cover max-h-[480px]" loading="eager" />
                </div>

                {/* Article content */}
                <article className="mb-16">
                    <p className="text-lg text-brand-950 leading-relaxed mb-8 font-semibold border-l-4 border-brand-TEAL pl-5">
                        {excerpt}
                    </p>
                    <div
                        className="text-slate-600 leading-[1.85] font-sans text-base"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </article>

                {/* Linked project CTA */}
                {project && (
                    <div className="mb-14 card-light p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-52 h-36 rounded-xl overflow-hidden flex-shrink-0 border border-brand-100">
                            <img src={project.images[0]} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex-grow">
                            <span className="tag-teal-light mb-3 inline-block">Featured Opportunity</span>
                            <h3 className="text-xl font-black text-brand-950 mb-2 uppercase italic tracking-tighter">
                                {project.name[lang] || project.name.en}
                            </h3>
                            <p className="text-sm text-slate-500 mb-5 leading-relaxed line-clamp-2">
                                {project.description[lang] || project.description.en}
                            </p>
                            <Link
                                href={`/${lang}/proyectos/${project.slug}`}
                                className="inline-flex items-center gap-2 btn-3d btn-3d-teal px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest"
                            >
                                View Development <ArrowRight size={12} />
                            </Link>
                        </div>
                    </div>
                )}

                {/* Lead magnet — dark CTA section */}
                <div className="mb-14 section-dark p-10 rounded-2xl text-center relative overflow-hidden border border-brand-800">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-brand-GOLD/5 rounded-full blur-3xl pointer-events-none" />
                    <BookOpen className="mx-auto mb-5 text-brand-GOLD/50" size={36} />
                    <h3 className="font-heading text-2xl font-black text-white mb-3 uppercase italic tracking-tighter">
                        Want the full picture?
                    </h3>
                    <p className="text-slate-400 text-sm mb-7 max-w-md mx-auto leading-relaxed">
                        Download our Panama Investment Guide — residency, taxes, and hidden market opportunities.
                    </p>
                    <Link
                        href={`/${lang}`}
                        className="inline-block btn-3d btn-3d-gold px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs"
                    >
                        Download Free Guide
                    </Link>
                </div>

                {/* Advisor CTA — light */}
                <div className="card-light rounded-2xl p-10 text-center mb-10">
                    <h3 className="font-heading text-xl font-black text-brand-950 mb-3 uppercase italic tracking-tighter">
                        Need personalized advice?
                    </h3>
                    <p className="text-slate-500 text-sm mb-7 max-w-md mx-auto">
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
