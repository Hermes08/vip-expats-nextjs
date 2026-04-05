import type { Metadata } from 'next';
import SafestNeighborhoodsPanamaCityContent from '@/components/pages/SafestNeighborhoodsPanamaCityContent';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const domain = 'https://panamarealestatesale.com';
  const l = (lang === 'es' || lang === 'en') ? lang : 'en';

  const titles = {
    en: 'Safest Neighborhoods in Panama City, Panama 2026 | Expat Safety Guide',
    es: 'Vecindarios Más Seguros de Ciudad de Panamá 2026 | Guía de Seguridad',
  };
  const descriptions = {
    en: 'Discover the safest neighborhoods in Panama City, Panama for expats. Punta Pacifica, Costa del Este, Clayton & more. Crime data, gated communities, 24/7 security. Not Panama City, Florida.',
    es: 'Descubra los vecindarios más seguros de Ciudad de Panamá para expats. Punta Pacífica, Costa del Este, Clayton y más. Datos de seguridad, comunidades cerradas.',
  };

  return {
    title: titles[l],
    description: descriptions[l],
    keywords: [
      'safest neighborhoods panama city panama',
      'safe areas panama city',
      'panama city safety expats',
      'punta pacifica safety',
      'costa del este panama',
      'best neighborhoods panama city expats',
    ].join(', '),
    alternates: {
      canonical: `${domain}/${l}/guides/safest-neighborhoods-panama-city`,
      languages: {
        'en': `${domain}/en/guides/safest-neighborhoods-panama-city`,
        'es': `${domain}/es/guides/safest-neighborhoods-panama-city`,
      },
    },
    openGraph: {
      title: titles[l],
      description: descriptions[l],
      url: `${domain}/${l}/guides/safest-neighborhoods-panama-city`,
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

export default function SafestNeighborhoodsPanamaCityPage() {
  return (
    <>
      <SafestNeighborhoodsPanamaCityContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Safest Neighborhoods in Panama City, Panama 2026 | Expat Safety Guide',
            description: 'Discover the safest neighborhoods in Panama City, Panama for expats. Punta Pacifica, Costa del Este, Clayton & more. Crime data, gated communities, 24/7 security. Not Panama City, Florida.',
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
            datePublished: '2024-01-01',
            dateModified: new Date().toISOString().split('T')[0],
            mainEntity: {
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is the safest neighborhood in Panama City?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Punta Pacifica is consistently rated the safest neighborhood in Panama City. It is a gated peninsula with luxury high-rises, private security in every building, and 24/7 CCTV coverage.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is Panama City safe for expats?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Panama City is widely regarded as one of the safest capitals in Latin America for expatriates. The expat-popular neighborhoods feature 24/7 private security, gated residential towers, well-lit streets, and strong communities of international residents.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What neighborhoods should expats avoid in Panama City?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Neighborhoods to approach with caution include El Chorrillo, Curundú, San Miguelito, and Tocumen. These areas have higher crime rates and are not recommended for expat residents.',
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
