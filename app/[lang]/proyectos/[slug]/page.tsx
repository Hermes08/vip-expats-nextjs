import React from 'react';
import type { Metadata } from 'next';
import ProjectDetailContent from '@/components/pages/ProjectDetailContent';
import { PROJECTS } from '@/lib/constants';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string; lang: string }> }
): Promise<Metadata> {
    const { slug, lang } = await params;
    const project = PROJECTS.find(p => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found | ExpatRockstars',
            description: 'The requested project could not be found.',
        };
    }

    const currentLang = (lang === 'es' || lang === 'en') ? lang : 'en';

    return {
        title: project.h1Title[currentLang] || project.h1Title.en,
        description: project.description[currentLang] || project.description.en,
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    return <ProjectDetailContent slug={slug} />;
}
