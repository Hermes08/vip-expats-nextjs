import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safest Neighborhoods in Panama City 2026 | Expat Guide',
  description:
    'Discover the safest neighborhoods in Panama City for expats in 2026. From Punta Pacifica and San Francisco to Costa del Este — compare security, amenities, and property values.',
  keywords: 'safest neighborhoods panama city, safe areas panama city expats, best areas to live panama city 2026, punta pacifica panama, san francisco panama city',
  alternates: { canonical: 'https://panamarealestatesale.com/en/guides/safest-neighborhoods-panama-city' },
  openGraph: {
    title: 'Safest Neighborhoods in Panama City 2026 | Expat Security Guide',
    description: 'Complete neighborhood-by-neighborhood safety breakdown for expats choosing where to live in Panama City.',
    type: 'article',
    images: [{ url: 'https://panamarealestatesale.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Safest Panama City Neighborhoods 2026', description: 'Security and lifestyle guide for expats in Panama City.' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
