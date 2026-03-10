import React from 'react';
import type { Metadata } from 'next';
import BlogPageContent from '@/components/pages/BlogPageContent';

export const metadata: Metadata = {
    title: 'Blog | Panama Real Estate Sale',
    description: 'Read our latest insights on Panama real estate, investment trends, and how to live with style as an expat.',
};

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return <BlogPageContent lang={lang as 'en' | 'es'} />;
}
