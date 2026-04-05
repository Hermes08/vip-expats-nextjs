import React from 'react';
import type { Metadata } from 'next';
import RelocationToursContent from '@/components/pages/RelocationToursContent';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const l = (lang === 'es' || lang === 'en') ? lang : 'en';
    const domain = 'https://panamarealestatesale.com';

    const titles = {
        en: 'Panama Relocation Tour 2026: Guided Discovery Trips for Expats',
        es: 'Tour de Reubicación a Panamá 2026: Viajes Guiados para Expats',
    };
    const descriptions = {
        en: 'Explore Panama before you move. Expert-led relocation tours covering Panama City, Boquete, Coronado, beach communities, real estate viewings, visa guidance & expat life.',
        es: 'Explore Panamá antes de mudarse. Tours de reubicación guiados que cubren Ciudad de Panamá, Boquete, Coronado, comunidades de playa, visitas inmobiliarias y vida expat.',
    };

    return {
        title: titles[l],
        description: descriptions[l],
        keywords: [
            'panama relocation tour',
            'panama discovery tour',
            'panama relocation tour 2026',
            'panama expat tour',
            'move to panama tour',
            'panama real estate tour',
            'boquete relocation tour',
            'retire in panama tour',
        ].join(', '),
        alternates: {
            canonical: `${domain}/${l}/relocation/tours`,
            languages: {
                en: `${domain}/en/relocation/tours`,
                es: `${domain}/es/relocation/tours`,
            },
        },
        openGraph: {
            title: titles[l],
            description: descriptions[l],
            url: `${domain}/${l}/relocation/tours`,
            siteName: 'Panama Real Estate Sale',
            type: 'website',
        },
    };
}

export default function DiscoveryToursPage() {
    return <RelocationToursContent />;
}
