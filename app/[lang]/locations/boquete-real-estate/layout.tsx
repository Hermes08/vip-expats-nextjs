import type { Metadata } from 'next';

const domain = 'https://panamarealestatesale.com';
const slug = '/locations/boquete-real-estate';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const canonical = `${domain}/${lang}${slug}`;

  return {
    title: 'Boquete Real Estate 2026 | Mountain Homes & Investment Properties',
    description:
      "Discover Boquete real estate in 2026 — Panama's highland gem with eternal spring climate. Browse luxury homes, coffee farm estates, and investment properties in Chiriquí Province starting from $150K.",
    keywords: 'boquete real estate, boquete panama property for sale, boquete homes 2026, chiriqui province real estate, boquete investment property expat',
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
      title: "Boquete Real Estate 2026 | Panama's Highland Investment Destination",
      description: 'Luxury homes, mountain retreats, and high-yield investment properties in Boquete, Panama.',
      type: 'article',
      url: canonical,
      images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'Boquete Real Estate 2026', description: 'Mountain property and investment opportunities in Boquete, Panama.' },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
