import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bocas del Toro Real Estate 2026 | Caribbean Island Properties',
  description:
    'Explore Bocas del Toro real estate in 2026 — Panama\'s Caribbean archipelago with turquoise waters and a thriving expat community. Find beachfront properties, overwater bungalows, and island investment opportunities.',
  keywords: 'bocas del toro real estate, bocas del toro property for sale, bocas del toro investment 2026, caribbean panama property, bocas del toro expat',
  alternates: { canonical: 'https://panamarealestatesale.com/en/locations/bocas-del-toro' },
  openGraph: {
    title: 'Bocas del Toro Real Estate 2026 | Caribbean Panama Investment',
    description: 'Beachfront homes and island investment properties in Bocas del Toro, Panama\'s Caribbean paradise.',
    type: 'article',
    images: [{ url: 'https://panamarealestatesale.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Bocas del Toro Real Estate 2026', description: 'Caribbean island property and investment in Bocas del Toro, Panama.' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
