import React from 'react';
import type { Metadata } from 'next';
import RelocationToursContent from '@/components/pages/RelocationToursContent';
import { SEO_KEYWORDS_LIST } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'Panama Relocation Tours | Private Discovery Tours for Expats | Panama Real Estate Sale',
    description:
        'Book a private Panama Relocation Tour with ExpatRockstars. Explore top neighborhoods, meet local attorneys, and find your ideal property — all in one curated on-the-ground experience.',
    keywords: ['panama relocation tours', 'private relocation tour panama', 'retire in panama tour', 'panama city real estate discovery tour', ...SEO_KEYWORDS_LIST].join(', '),
    openGraph: {
        title: 'Panama Relocation Tours | Private Discovery Tours for Expats',
        description:
            'Book a private Panama Relocation Tour with ExpatRockstars. Explore neighborhoods, meet attorneys, and find your property — all in one curated experience.',
        url: 'https://www.panamarealestatesale.com/en/tours',
        type: 'website',
    },
};

// JSON-LD Structured Data for the service
const toursJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Panama Relocation Tours',
    provider: {
        '@type': 'Organization',
        name: 'ExpatRockstars Panama Real Estate',
        url: 'https://www.panamarealestatesale.com',
    },
    serviceType: 'Relocation Consulting',
    description:
        'Private, curated Panama relocation tours designed for US and international expats looking to retire, invest, or relocate to Panama. Includes real estate viewings, legal introductions, and neighborhood explorations.',
    areaServed: {
        '@type': 'Country',
        name: 'Panama',
    },
    offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
    },
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(toursJsonLd) }}
            />
            <RelocationToursContent />
        </>
    );
}

