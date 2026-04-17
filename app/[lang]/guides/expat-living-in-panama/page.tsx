import type { Metadata } from 'next';
import ExpatLivingInPanamaContent from '@/components/pages/ExpatLivingInPanamaContent';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const domain = 'https://panamarealestatesale.com';
  const l = (lang === 'es' || lang === 'en') ? lang : 'en';

  const titles = {
    en: 'Expat Living in Panama 2026: Cost of Living, Safety & Where to Live',
    es: 'Vida Expat en Panamá 2026: Costo de Vida, Seguridad y Dónde Vivir',
  };
  const descriptions = {
    en: 'Everything about expat living in Panama: $1,200-$2,000/mo costs, USD economy, no tax on foreign income, excellent healthcare & easy visa paths. Best areas ranked — Boquete, Coronado, Panama City. 30,000+ expats already here. Read honest pros, cons & real estate options.',
    es: 'Todo sobre la vida expat en Panamá: $1,200-$2,000/mes, economía USD, sin impuestos a ingresos extranjeros, salud excelente y visas fáciles. Mejores zonas — Boquete, Coronado, Ciudad de Panamá. 30,000+ expats aquí. Pros, contras y opciones inmobiliarias.',
  };

  return {
    title: titles[l],
    description: descriptions[l],
    keywords: [
      'expat living panama',
      'expat life panama',
      'living in panama as an expat',
      'panama expat community',
      'cost of living panama expats',
      'panama lifestyle expats',
    ].join(', '),
    alternates: {
      canonical: `${domain}/${l}/guides/expat-living-in-panama`,
      languages: {
        'en': `${domain}/en/guides/expat-living-in-panama`,
        'es': `${domain}/es/guides/expat-living-in-panama`,
      },
    },
    openGraph: {
      title: titles[l],
      description: descriptions[l],
      url: `${domain}/${l}/guides/expat-living-in-panama`,
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

export default function ExpatLivingInPanamaPage() {
  return (
    <>
      <ExpatLivingInPanamaContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Expat Living in Panama 2026: Cost, Lifestyle, Safety & Neighborhoods',
            description: 'Everything you need to know about expat living in Panama. Cost of living from $1,500/mo, USD economy, world-class healthcare, best neighborhoods, visa options, and community life.',
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
                  name: 'What is the cost of living for expats in Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Expats can live comfortably in Panama from $1,500-$2,500 USD per month, covering rent, utilities, food, and entertainment. High-end lifestyles range $3,000-$5,000+ monthly.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Why do expats choose Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Panama attracts expats due to its USD economy, world-class healthcare affiliated with institutions like Johns Hopkins, stable democracy, low crime rates compared to the region, high-speed internet, and vibrant international community.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are the best neighborhoods for expats in Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Top neighborhoods include Panama City (urban sophistication), Boquete (mountain tranquility), Coronado (beach lifestyle), and Bocas del Toro (island paradise). Each offers distinct advantages for different lifestyle preferences.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What visa options are available for expats in Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Panama offers the Pensioner Visa (requiring $1,000/month income), the Investor Visa (requiring $120,000 investment), the Friendly Nations Visa (simplified for certain nationalities), and work visas for employment.',
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
