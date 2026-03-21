import React from 'react';
import type { Metadata } from 'next';
import BlogPageContent from '@/components/pages/BlogPageContent';

export const metadata: Metadata = {
    title: 'Panama Real Estate Blog | 2026 Investment & Expat Insights',
    description: 'Get the latest 2026 insights on Panama real estate, luxury investment trends, and expert relocation advice for expats and retirees.',
};

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return <BlogPageContent lang={lang as 'en' | 'es'} />;
}
