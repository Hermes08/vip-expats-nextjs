import React from 'react';
import type { Metadata } from 'next';
import RelocationToursContent from '@/components/pages/RelocationToursContent';
import { SEO_KEYWORDS_LIST } from '@/lib/constants';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Panama Relocation & Discovery Tours | ExpatRockstars',
            description: 'Experience Panama first-hand before you move. Our expert-led discovery tours cover Boquete real estate, beach communities, and essential relocation logistics.',
            keywords: SEO_KEYWORDS_LIST
        },
        es: {
            title: 'Tours de Relocación y Descubrimiento en Panamá | ExpatRockstars',
            description: 'Experimente Panamá de primera mano antes de mudarse. Nuestros tours guiados cubren bienes raíces en Boquete, playas y logística de reubicación.',
            keywords: SEO_KEYWORDS_LIST
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords.join(', ')
    };
}

export default function DiscoveryToursPage() {
    return <RelocationToursContent />;
}
