import React from 'react';
import type { Metadata } from 'next';
import RelocationEarlyRetirementContent from '@/components/pages/RelocationEarlyRetirementContent';

export const metadata: Metadata = {
    title: 'Early Retirement in Panama (<50) | The Rockstar FIRE Guide',
    description: 'Can you retire in Panama before 50? Yes. Discover the best visas, investment strategies, and communities for early retirees in 2026.',
    keywords: ['early retirement panama', 'FIRE panama', 'retire under 50 panama', 'panama investor visa', 'cost of living panama for families'],
};

export default function Page() {
    return <RelocationEarlyRetirementContent />;
}
