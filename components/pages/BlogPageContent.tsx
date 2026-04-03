'use client';

import React from 'react';
import Link from 'next/link';
import { CONTENT } from '@/lib/constants';
import { useCMS } from '@/context/CMSContext';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const BlogPageContent: React.FC<{ lang?: 'en' | 'es' }> = ({ lang: propLang }) => {
    const { lang: contextLang } = useLanguage();
    const lang = propLang || contextLang || 'en';
    const t = CONTENT[lang] || CONTENT['en'];
    const { blogPosts } = useCMS();

    return (
        <div className="pt-24 min-h-screen bg-white">
            <BreadcrumbSchema
                items={[
                    { name: 'Blog', item: `https://panamarealestatesale.com/${lang}/blog` }
                ]}
            />

            {/* Page header — light teal tinted */}
            <div className="bg-brand-50 border-b border-brand-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="tag-teal-light mb-4 inline-block">
                        {lang === 'es' ? 'ARTÍCULOS & GUÍAS' : 'ARTICLES & GUIDES'}
                    </span>
                    <h1 className="font-heading text-4xl md:text-5xl font-black text-brand-950 uppercase italic tracking-tighter mb-4 mt-3">
                        {t.nav.blog}
                    </h1>
                    <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
                        {lang === 'es'
                            ? 'Las últimas tendencias del mercado inmobiliario panameño, guías de inversión y consejos de vida para el expatriado moderno.'
                            : 'The latest trends in the Panamanian property market, investment guides, and lifestyle tips for the modern expat.'}
                    </p>
                </div>
            </div>

            {/* Post grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="card-light rounded-2xl overflow-hidden flex flex-col group"
                        >
                            <Link href={`/${lang}/blog/${post.slug}`} className="block h-52 overflow-hidden relative flex-shrink-0">
                                <img
                                    src={post.image}
                                    alt={post.title[lang] || post.title.en}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 to-transparent" />
                                <div className="absolute top-3 left-3">
                                    <span className="tag-teal text-[10px]">
                                        {post.category}
                                    </span>
                                </div>
                            </Link>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-brand-TEAL text-[11px] font-bold uppercase tracking-widest mb-2">{post.date}</div>
                                <h2 className="font-heading text-lg font-black text-brand-950 mb-3 group-hover:text-brand-TEAL transition-colors leading-tight">
                                    <Link href={`/${lang}/blog/${post.slug}`}>
                                        {post.title[lang] || post.title.en}
                                    </Link>
                                </h2>
                                <p className="text-slate-500 mb-5 leading-relaxed flex-grow line-clamp-3 text-sm">
                                    {post.excerpt[lang] || post.excerpt.en}
                                </p>
                                <Link
                                    href={`/${lang}/blog/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-brand-TEAL font-black hover:gap-3 transition-all text-xs uppercase tracking-widest"
                                >
                                    {lang === 'es' ? 'Leer artículo' : 'Read Article'} <ArrowRight size={12} />
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
