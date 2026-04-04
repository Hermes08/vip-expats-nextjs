import React from 'react';
import type { Metadata } from 'next';
import BlogPageContent from '@/components/pages/BlogPageContent';

export const metadata: Metadata = {
    title: 'Panama Real Estate Blog 2026 | Expat & Investment Insights',
    description: 'Latest insights on Panama real estate 2026. Investment trends, relocation guides, visa info. Expert advice for expats and retirees.',
    keywords: 'Panama real estate blog, Panama expat guide, Panama investment, Panama relocation, Panama living guides',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog',
            'es': 'https://panamarealestatesale.com/es/blog',
            'pt': 'https://panamarealestatesale.com/pt/blog',
            'de': 'https://panamarealestatesale.com/de/blog',
        },
    },
    openGraph: {
        title: 'Panama Real Estate Blog 2026 | Expat & Investment Insights',
        description: 'Latest insights on Panama real estate 2026. Investment trends, relocation guides, visa info. Expert advice for expats and retirees.',
        type: 'website',
        url: 'https://panamarealestatesale.com/en/blog',
        images: [{ url: 'https://images.unsplash.com/photo-1527457519507-7b8f4641342d?w=1200&q=80', width: 1200, height: 630, alt: 'Panama real estate blog' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Panama Real Estate Blog 2026 | Expat & Investment Insights',
        description: 'Latest insights on Panama real estate 2026. Investment trends, relocation guides, visa info.',
        images: ['https://images.unsplash.com/photo-1527457519507-7b8f4641342d?w=1200&q=80'],
    },
};

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return <BlogPageContent lang={lang as 'en' | 'es' | 'pt' | 'de'} />;
}
