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
                <Link href={`/${lang}/blog`} className="text-brand-TEAL hover:underline mt-4 block">Back to Blog</Link>
            </div>
        );
    }

    const project = post.projectId ? PROJECTS.find(p => p.id === post.projectId) : null;
    const title = post.title[lang] || post.title.en;
    const excerpt = post.excerpt[lang] || post.excerpt.en;
    const content = post.content[lang] || post.content.en;

    return (
        <div className="pt-24 min-h-screen bg-[color:var(--color-cream)]">
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
                    className="inline-flex items-center gap-2 eyebrow !text-[color:var(--color-ink-mute)] hover:!text-[color:var(--color-teal-edit)] mb-8 transition-colors"
                >
                    <ArrowLeft size={12} /> {lang === 'es' ? 'Volver al Blog' : 'Back to Blog'}
                </Link>

                <span className="tag-mono tag-mono-brass mb-5 inline-flex">
                    {post.category}
                </span>

                <h1 className="font-heading text-3xl md:text-5xl font-black text-brand-950 mb-6 leading-tight uppercase italic tracking-tighter mt-3">
                    {title}
                </h1>

                <div className="flex items-center justify-between border-y border-[color:rgba(14,42,43,0.08)] py-4 mb-10">
                    <div className="flex items-center gap-5 eyebrow !text-[color:var(--color-ink-mute)]">
                        <div className="flex items-center gap-2">
                            <Calendar size={13} className="text-[color:var(--color-teal-edit)]" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={13} className="text-[color:var(--color-teal-edit)]" />
                            Panama Real Estate Advisor
                        </div>
                    </div>
                    <button className="text-[color:var(--color-ink-mute)] hover:text-[color:var(--color-teal-edit)] transition-colors">
                        <Share2 size={16} />
                    </button>
                </div>

                {/* Hero image */}
                <div className="rounded-2xl overflow-hidden mb-12 border border-[color:rgba(14,42,43,0.08)]">
                    <img src={post.image} alt={title} className="w-full h-auto object-cover max-h-[480px]" loading="eager" />
                </div>

                {/* Article content */}
                <article className="mb-16">
                    <p className="text-lg text-[color:var(--color-ink)] leading-relaxed mb-8 font-medium border-l-2 border-[color:var(--color-teal-edit)] pl-5 italic">
                        {excerpt}
                    </p>
                    <div
                        className="text-[color:var(--color-ink-soft)] leading-[1.85] font-sans text-base"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </article>

                {/* Linked project CTA */}
                {project && (
                    <div className="mb-14 bg-[color:var(--color-paper)] border border-[color:rgba(14,42,43,0.08)] p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 shadow-[0_20px_50px_-20px_rgba(14,42,43,0.22)]">
                        <div className="w-full md:w-52 h-36 rounded-xl overflow-hidden flex-shrink-0 border border-[color:rgba(14,42,43,0.08)]">
                            <img src={project.images[0]} alt={project.name[lang] || project.name['en']} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex-grow">
                            <span className="eyebrow !text-[color:var(--color-brass)] mb-3 inline-block">Featured Opportunity</span>
                            <h3 className="display-serif italic text-2xl text-[color:var(--color-ink)] mb-2">
                                {project.name[lang] || project.name.en}
                            </h3>
                            <p className="text-sm text-[color:var(--color-ink-soft)] mb-5 leading-relaxed line-clamp-2">
                                {project.description[lang] || project.description.en}
                            </p>
                            <Link
                                href={`/${lang}/proyectos/${project.slug}`}
                                className="btn-editorial btn-editorial-teal !py-2.5 !px-5 !text-xs uppercase tracking-[0.16em]"
                            >
                                View Development <ArrowRight size={12} />
                            </Link>
                        </div>
                    </div>
                )}

                {/* Lead magnet — editorial surface */}
                <div className="mb-14 bg-[color:var(--color-cream-soft)] border border-[color:rgba(14,42,43,0.08)] p-10 rounded-2xl text-center relative overflow-hidden">
                    <BookOpen className="mx-auto mb-5 text-[color:var(--color-teal-edit)]" size={36} />
                    <h3 className="display-serif italic text-3xl text-[color:var(--color-ink)] mb-3">
                        Want the full picture?
                    </h3>
                    <p className="text-[color:var(--color-ink-soft)] text-sm mb-7 max-w-md mx-auto leading-relaxed">
                        Download our Panama Investment Guide — residency, taxes, and hidden market opportunities.
                    </p>
                    <Link
                        href={`/${lang}`}
                        className="btn-editorial btn-editorial-teal uppercase tracking-[0.18em]"
                    >
                        Download Free Guide
                    </Link>
                </div>

                {/* Advisor CTA */}
                <div className="bg-[color:var(--color-paper)] border border-[color:rgba(14,42,43,0.08)] rounded-2xl p-10 text-center mb-10">
                    <h3 className="display-serif italic text-2xl text-[color:var(--color-ink)] mb-3">
                        Need personalized advice?
                    </h3>
                    <p className="text-[color:var(--color-ink-soft)] text-sm mb-7 max-w-md mx-auto">
                        Our senior advisors can build a custom portfolio for your specific ROI and residency goals.
                    </p>
                    <Link
                        href={`/${lang}/contacto`}
                        className="btn-editorial btn-editorial-teal uppercase tracking-[0.18em]"
                    >
                        Speak with an Advisor <ArrowRight size={12} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPostContent;
