'use client';

/**
 * ThreeComponents.tsx
 *
 * Central client-component wrapper for all Three.js / R3F dynamic imports.
 * Import from here in Server Component pages — the 'use client' boundary
 * lives here, keeping SSR metadata exports working in the page files.
 */

import dynamic from 'next/dynamic';

export const CostBarChart = dynamic(
  () => import('@/components/three/CostBarChart').then(m => m.CostBarChart),
  { ssr: false }
);

export const PanamaCityScene = dynamic(
  () => import('@/components/three/PanamaCityScene').then(m => m.PanamaCityScene),
  { ssr: false }
);

export const BoqueteScene = dynamic(
  () => import('@/components/three/BoqueteScene').then(m => m.BoqueteScene),
  { ssr: false }
);

export const BocasScene = dynamic(
  () => import('@/components/three/BocasScene').then(m => m.BocasScene),
  { ssr: false }
);
