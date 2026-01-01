import React from 'react';
import type { Metadata } from 'next';
import RelocationLGBTQContent from '@/components/pages/RelocationLGBTQContent';

export const metadata: Metadata = {
    title: 'LGBTQ+ Expat Life in Panama | The Honest Guide 2026',
    description: 'Moving to Panama as an LGBTQ+ expat? Discover the most tolerant neighborhoods, legal landscape, and community hubs in Panama City.',
    keywords: ['lgbtq panama', 'gay friendly panama', 'moving to panama lgbtq', 'gay life panama city', 'panama same sex residency'],
};

export default function Page() {
    return <RelocationLGBTQContent />;
}
