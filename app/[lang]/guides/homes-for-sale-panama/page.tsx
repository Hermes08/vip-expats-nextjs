import type { Metadata } from 'next';
import HomesForSalePanamaContent from '@/components/pages/HomesForSalePanamaContent';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const domain = 'https://panamarealestatesale.com';
  const l = (lang === 'es' || lang === 'en') ? lang : 'en';

  const titles = {
    en: 'Homes for Sale in Panama 2026: Houses, Villas & Property Listings',
    es: 'Casas en Venta en Panamá 2026: Casas, Villas y Listados de Propiedades',
  };
  const descriptions = {
    en: 'Browse homes for sale in Panama. Houses, villas, and beachfront properties from $85K. Top areas: Panama City, Boquete, Coronado, Pedasi, Bocas del Toro. Foreign buyers welcome — no restrictions.',
    es: 'Explore casas en venta en Panamá. Casas, villas y propiedades frente al mar desde $85K. Mejores zonas: Ciudad de Panamá, Boquete, Coronado, Pedasí, Bocas del Toro.',
  };

  return {
    title: titles[l],
    description: descriptions[l],
    keywords: [
      'homes for sale panama',
      'houses for sale in panama',
      'panama homes for sale',
      'panama property for sale',
      'homes for sale in panama city panama',
      'beachfront homes panama',
      'panama houses',
      'buy a house in panama',
      'panama villas for sale',
      'panama real estate listings',
    ].join(', '),
    alternates: {
      canonical: `${domain}/${l}/guides/homes-for-sale-panama`,
      languages: {
        'en': `${domain}/en/guides/homes-for-sale-panama`,
        'es': `${domain}/es/guides/homes-for-sale-panama`,
      },
    },
    openGraph: {
      title: titles[l],
      description: descriptions[l],
      url: `${domain}/${l}/guides/homes-for-sale-panama`,
      type: 'article',
      images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630, alt: titles[l] }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[l],
      description: descriptions[l],
    },
    robots: { index: true, follow: true },
  };
}

export default function HomesForSalePanamaPage() {
  return (
    <>
      <HomesForSalePanamaContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Homes for Sale in Panama 2026: Houses, Villas & Property Listings',
            description: 'Browse homes for sale in Panama. Houses, villas, and beachfront properties from $85K. Top areas: Panama City, Boquete, Coronado, Pedasi, Bocas del Toro.',
            image: 'https://panamarealestatesale.com/og-image.jpg',
            author: {
              '@type': 'Organization',
              name: 'Panama Real Estate Sale',
              url: 'https://panamarealestatesale.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Panama Real Estate Sale',
              logo: {
                '@type': 'ImageObject',
                url: 'https://panamarealestatesale.com/logo.jpg',
              },
            },
            datePublished: '2026-04-06',
            dateModified: '2026-04-06',
          }),
        }}
      />
    </>
  );
}
