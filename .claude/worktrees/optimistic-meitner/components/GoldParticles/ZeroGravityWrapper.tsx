'use client';

import dynamic from 'next/dynamic';

const GoldParticles = dynamic(
    () => import('./GoldParticles').then((mod) => mod.GoldParticles),
    { ssr: false }
);

export default function ZeroGravityWrapper() {
    return <GoldParticles />;
}
