import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Places to Retire in Panama 2026 | Beach, City & Mountain',
  description:
    'Find the best place to retire in Panama in 2026. Compare Panama City, Boquete, Coronado, and Bocas del Toro by cost, climate, healthcare, and expat community size.',
  keywords: 'best places retire panama, retire in panama 2026, panama retirement destinations, boquete retirement, coronado panama retirement, panama city retirement',
  alternates: { canonical: 'https://panamarealestatesale.com/en/guides/best-areas-retire-panama' },
  openGraph: {
    title: 'Best Places to Retire in Panama 2026',
    description: 'Compare Panama\'s top retirement destinations — beach towns, mountain villages, and cosmopolitan Panama City.',
    type: 'article',
    images: [{ url: 'https://panamarealestatesale.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Best Places to Retire in Panama 2026', description: 'Beach, mountain, or city — find your perfect Panama retirement spot.' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
