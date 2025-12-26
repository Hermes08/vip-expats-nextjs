import React from 'react';
import type { Metadata } from 'next';
import ProjectsPageContent from '@/components/pages/ProjectsPageContent';
import { SEO_KEYWORDS_LIST } from '@/lib/constants';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles = {
        es: 'Nuevos Desarrollos Panamá | Condos de Playa de Lujo y Proyectos de Inversión',
        en: 'New Developments Panama | Luxury Beachfront Condos & Investment Projects'
    };
    const descriptions = {
        es: 'Explora condos en pre-construcción, comunidades cerradas y resorts de lujo en Panamá. Desde la Ciudad de Panamá hasta Boquete y bienes raíces en Coronado.',
        en: 'Explore pre-construction condos, gated communities, and luxury resorts in Panama. From Panama City to Boquete and Coronado real estate.'
    };
    return {
        title: titles[lang as keyof typeof titles] || titles.es,
        description: descriptions[lang as keyof typeof descriptions] || descriptions.es,
        keywords: SEO_KEYWORDS_LIST.join(', '),
    };
}

export default function Page() {
    return <ProjectsPageContent />;
}
