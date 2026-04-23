'use client';

import React from 'react';
import Link from 'next/link';
import { CONTENT } from '@/lib/constants';
import { useCMS } from '@/context/CMSContext';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const BLOG_TEXT: Record<string, { badge: string; subtitle: string; readArticle: string }> = {
    en: {
        badge: 'ARTICLES & GUIDES',
        subtitle: 'The latest trends in the Panamanian property market, investment guides, and lifestyle tips for the modern expat.',
        readArticle: 'Read Article',
    },
    es: {
        badge: 'ARTÍCULOS & GUÍAS',
        subtitle: 'Las últimas tendencias del mercado inmobiliario panameño, guías de inversión y consejos de vida para el expatriado moderno.',
        readArticle: 'Leer artículo',
    },
    pt: {
        badge: 'ARTIGOS & GUIAS',
        subtitle: 'As últimas tendências do mercado imobiliário panamenho, guias de investimento e dicas de estilo de vida para o expat moderno.',
        readArticle: 'Ler artigo',
    },
    de: {
        badge: 'ARTIKEL & RATGEBER',
        subtitle: 'Die neuesten Trends auf dem panamaischen Immobilienmarkt, Investitionsratgeber und Lifestyle-Tipps für den modernen Expat.',
        readArticle: 'Artikel lesen',
    },
};

const BlogPageContent: React.FC<{ lang?: string }> = ({ lang: propLang }) => {
    const { lang: contextLang } = useLanguage();
    const lang = propLang || contextLang || 'en';
    const t = CONTENT[lang] || CONTENT['en'];
    const bt = BLOG_TEXT[lang] || BLOG_TEXT['en'];
    const { blogPosts } = useCMS();

    // Sort posts newest → oldest. Posts without a valid date go to the end.
    const sortedPosts = [...blogPosts].sort((a, b) => {
        const da = a.date ? new Date(a.date).getTime() : 0;
        const db = b.date ? new Date(b.date).getTime() : 0;
        return db - da;
    });

    return (
        <div className="pt-24 min-h-screen bg-[color:var(--color-cream)]">
            <BreadcrumbSchema
                items={[
                    { name: 'Blog', item: `https://panamarealestatesale.com/${lang}/blog` }
                ]}
            />

            {/* Page header — editorial paper surface */}
            <div className="bg-[color:var(--color-paper)] border-b border-[color:rgba(14,42,43,0.08)] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="eyebrow !text-[color:var(--color-teal-edit)] mb-5 inline-block">
                        {bt.badge}
                    </span>
                    <h1 className="display-serif text-5xl md:text-7xl text-[color:var(--color-ink)] mb-6 leading-[0.98]">
                        <span className="italic">{t.nav.blog}</span>
                    </h1>
                    <p className="lede mx-auto">
                        {bt.subtitle}
                    </p>
                </div>
            </div>

            {/* Post grid — editorial cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-[color:var(--color-paper)] border border-[color:rgba(14,42,43,0.08)] rounded-2xl overflow-hidden flex flex-col group hover:shadow-[0_20px_50px_-20px_rgba(14,42,43,0.22)] hover:border-[color:var(--color-teal-edit)]/30 transition-all duration-500"
                        >
                            <Link href={`/${lang}/blog/${post.slug}`} className="block h-52 overflow-hidden relative flex-shrink-0">
                                <img
                                    src={post.image}
                                    alt={post.title[lang] || post.title.en}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/45 via-[color:var(--color-ink)]/5 to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span className="tag-mono tag-mono-brass">
                                        {post.category}
                                    </span>
                                </div>
                            </Link>

                            <div className="p-7 flex flex-col flex-grow">
                                <div className="eyebrow !text-[color:var(--color-teal-edit)] mb-3">{post.date}</div>
                                <h2 className="display-serif italic text-2xl text-[color:var(--color-ink)] mb-4 group-hover:text-[color:var(--color-teal-edit)] transition-colors leading-snug">
                                    <Link href={`/${lang}/blog/${post.slug}`}>
                                        {post.title[lang] || post.title.en}
                                    </Link>
                                </h2>
                                <p className="text-[color:var(--color-ink-soft)] mb-6 leading-relaxed flex-grow line-clamp-3 text-sm">
                                    {post.excerpt[lang] || post.excerpt.en}
                                </p>
                                <Link
                                    href={`/${lang}/blog/${post.slug}`}
                                    className="inline-flex items-center gap-2 eyebrow !text-[color:var(--color-teal-edit)] border-b border-[color:var(--color-teal-edit)]/40 pb-1.5 hover:border-[color:var(--color-teal-edit)] transition-all self-start"
                                >
                                    {bt.readArticle} <ArrowRight size={12} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPageContent;
