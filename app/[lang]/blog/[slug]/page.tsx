import React from 'react';
import type { Metadata } from 'next';
import BlogPostContent from '@/components/pages/BlogPostContent';
import { BLOG_POSTS } from '@/lib/constants';
import { fetchWPPostBySlug, isWordPressConfigured } from '@/lib/wordpress';

type Props = {
    params: Promise<{ slug: string; lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug, lang } = await params;
    const currentLang = (lang === 'es' || lang === 'en') ? lang : 'en';

    // 1. Check static posts first (fastest)
    const staticPost = BLOG_POSTS.find(p => p.slug === slug);
    if (staticPost) {
        return {
            title: `${staticPost.title[currentLang] ?? staticPost.title.en} | Panama Real Estate Sale Insights`,
            description: staticPost.excerpt[currentLang] ?? staticPost.excerpt.en,
            openGraph: {
                images: staticPost.image ? [{ url: staticPost.image }] : [],
            },
        };
    }

    // 2. Try WordPress REST API for WP-managed posts
    if (isWordPressConfigured()) {
        const wpPost = await fetchWPPostBySlug(slug);
        if (wpPost) {
            return {
                title: `${wpPost.title[currentLang] ?? wpPost.title.en} | Panama Real Estate Sale Insights`,
                description: wpPost.excerpt[currentLang] ?? wpPost.excerpt.en,
                openGraph: {
                    images: wpPost.image ? [{ url: wpPost.image }] : [],
                },
            };
        }
    }

    return {
        title: 'Post Not Found | Panama Real Estate Sale Insights',
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    return <BlogPostContent slug={slug} />;
}
