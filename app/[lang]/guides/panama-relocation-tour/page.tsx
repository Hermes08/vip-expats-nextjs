import type { Metadata } from 'next';
import PanamaRelocationTourContent from '@/components/pages/PanamaRelocationTourContent';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const domain = 'https://panamarealestatesale.com';
  const l = (lang === 'es' || lang === 'en') ? lang : 'en';

  const titles = {
    en: 'Panama Relocation Tour — Costs, Itineraries & Reviews 2026',
    es: 'Tour de Reubicación a Panamá — Costos y Reseñas 2026',
  };
  const descriptions = {
    en: 'Panama relocation tour guide — compare operators from $2,600, 6-day itineraries, neighborhoods visited, real estate previews & visa guidance. Read reviews and book your exploratory trip.',
    es: 'Guía de tours de reubicación a Panamá — compare operadores desde $2,600, itinerarios de 6 días, vecindarios, bienes raíces y visas. Lea reseñas y reserve.',
  };

  return {
    title: titles[l],
    description: descriptions[l],
    keywords: [
      'panama relocation tour',
      'panama relocation tours',
      'panama relocation trip',
      'move to panama tour',
      'panama retirement tour',
      'panama expat tour',
      'panama relocation tour cost',
      'panama relocation tour itinerary',
    ].join(', '),
    alternates: {
      canonical: `${domain}/${l}/guides/panama-relocation-tour`,
      languages: {
        'en': `${domain}/en/guides/panama-relocation-tour`,
        'es': `${domain}/es/guides/panama-relocation-tour`,
      },
    },
    openGraph: {
      title: titles[l],
      description: descriptions[l],
      url: `${domain}/${l}/guides/panama-relocation-tour`,
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

export default function PanamaRelocationTourPage() {
  return (
    <>
      <PanamaRelocationTourContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Panama Relocation Tour 2026: What to Expect, Costs & Itineraries',
            description: 'Planning a Panama relocation tour? Compare top tour operators, itineraries, costs from $2,600, and what you will experience — neighborhoods, real estate, visa guidance & more.',
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
            datePublished: '2026-04-07',
            dateModified: '2026-04-07',
          }),
        }}
      />
    </>
  );
}
