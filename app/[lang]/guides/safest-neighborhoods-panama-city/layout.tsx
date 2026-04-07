import type { Metadata } from 'next';

const domain = 'https://panamarealestatesale.com';
const slug = '/guides/safest-neighborhoods-panama-city';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const canonical = `${domain}/${lang}${slug}`;

  return {
    title: 'Safest Neighborhoods in Panama City 2026 | Expat Guide',
    description:
      'Discover the safest neighborhoods in Panama City for expats in 2026. From Punta Pacifica and San Francisco to Costa del Este — compare security, amenities, and property values.',
    keywords: 'safest neighborhoods panama city, safe areas panama city expats, best areas to live panama city 2026, punta pacifica panama, san francisco panama city',
    alternates: {
      canonical,
      languages: {
        'en-US': `${domain}/en${slug}`,
        'es-PA': `${domain}/es${slug}`,
        'pt-BR': `${domain}/pt${slug}`,
        'de-DE': `${domain}/de${slug}`,
        'x-default': `${domain}/es${slug}`,
      },
    },
    openGraph: {
      title: 'Safest Neighborhoods in Panama City 2026 | Expat Security Guide',
      description: 'Complete neighborhood-by-neighborhood safety breakdown for expats choosing where to live in Panama City.',
      type: 'article',
      url: canonical,
      images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'Safest Panama City Neighborhoods 2026', description: 'Security and lifestyle guide for expats in Panama City.' },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
