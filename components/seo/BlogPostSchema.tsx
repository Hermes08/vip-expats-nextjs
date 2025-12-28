import React from 'react';
import { BlogPost } from '@/lib/types';

interface BlogPostSchemaProps {
    post: BlogPost;
    lang: 'es' | 'en';
}

export default function BlogPostSchema({ post, lang }: BlogPostSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title[lang],
        "description": post.excerpt[lang],
        "image": post.image,
        "author": {
            "@type": "Organization",
            "name": "panamarealestatesale",
            "url": "https://panamarealestatesale.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "panamarealestatesale",
            "logo": {
                "@type": "ImageObject",
                "url": "https://panamarealestatesale.com/logo.png"
            }
        },
        "datePublished": post.date,
        "dateModified": post.date,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://panamarealestatesale.com/${lang}/blog/${post.slug}`
        },
        "articleSection": "Real Estate",
        "inLanguage": lang === 'es' ? 'es-PA' : 'en-US'
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
