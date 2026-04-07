import type { Metadata } from 'next';

const domain = 'https://panamarealestatesale.com';
const slug = '/locations/bocas-del-toro';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const canonical = `${domain}/${lang}${slug}`;

  return {
    title: 'Bocas del Toro Real Estate 2026 | Caribbean Island Properties',
    description:
      "Explore Bocas del Toro real estate in 2026 — Panama's Caribbean archipelago with turquoise waters and a thriving expat community. Find beachfront properties, overwater bungalows, and island investment opportunities.",
    keywords: 'bocas del toro real estate, bocas del toro property for sale, bocas del toro investment 2026, caribbean panama property, bocas del toro expat',
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
      title: 'Bocas del Toro Real Estate 2026 | Caribbean Panama Investment',
      description: "Beachfront homes and island investment properties in Bocas del Toro, Panama's Caribbean paradise.",
      type: 'article',
      url: canonical,
      images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'Bocas del Toro Real Estate 2026', description: 'Caribbean island property and investment in Bocas del Toro, Panama.' },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
