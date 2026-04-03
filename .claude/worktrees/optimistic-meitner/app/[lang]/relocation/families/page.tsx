import React from 'react';
import type { Metadata } from 'next';
import RelocationFamiliesContent from '@/components/pages/RelocationFamiliesContent';

export const metadata: Metadata = {
    title: 'Moving to Panama with Kids | The Expat Family Guide 2026',
    description: 'Relocating your family to Panama? Discover the best international schools, kid-friendly neighborhoods, and health insurance for expat families.',
    keywords: ['panama for families', 'international schools panama', 'moving to panama with kids', 'best neighborhoods for families panama', 'panama family visa'],
};

export default function Page() {
    return <RelocationFamiliesContent />;
}
