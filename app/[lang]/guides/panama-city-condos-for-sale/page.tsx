import type { Metadata } from 'next';
import PanamaCityCondosForSaleContent from '@/components/pages/PanamaCityCondosForSaleContent';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const domain = 'https://panamarealestatesale.com';
  const l = (lang === 'es' || lang === 'en') ? lang : 'en';

  const titles = {
    en: 'Panama City, Panama Condos for Sale — Prices from $80K (Not Florida)',
    es: 'Condos en Venta Ciudad de Panamá — Precios desde $80K',
  };
  const descriptions = {
    en: 'Panama City, PANAMA condos for sale (not Panama City Beach, FL). Ocean-view apartments from $80K in Punta Pacifica, Costa del Este, El Cangrejo & Casco Viejo. Compare prices, HOA fees, amenities & neighborhoods. Expat buying guide included.',
    es: 'Condos en venta en Ciudad de Panamá (no Florida). Apartamentos con vista al mar desde $80K en Punta Pacífica, Costa del Este, El Cangrejo y Casco Viejo. Compare precios, cuotas HOA y vecindarios. Guía para expats incluida.',
  };

  return {
    title: titles[l],
    description: descriptions[l],
    keywords: [
      'panama city condos for sale',
      'panama city panama apartments',
      'condos panama city panama',
      'punta pacifica condos',
      'costa del este panama',
      'casco viejo condos',
      'panama city real estate',
    ].join(', '),
    alternates: {
      canonical: `${domain}/${l}/guides/panama-city-condos-for-sale`,
      languages: {
        'en': `${domain}/en/guides/panama-city-condos-for-sale`,
        'es': `${domain}/es/guides/panama-city-condos-for-sale`,
      },
    },
    openGraph: {
      title: titles[l],
      description: descriptions[l],
      url: `${domain}/${l}/guides/panama-city-condos-for-sale`,
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

export default function PanamaCityCondosForSalePage() {
  return (
    <>
      <PanamaCityCondosForSaleContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Panama City Condos for Sale 2026: Prices, Neighborhoods & Listings',
            description: 'Find Panama City Panama condos for sale. Compare Punta Pacifica, Costa del Este, El Cangrejo, Casco Viejo. Prices from $100K, expat buying guide.',
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
                  name: 'What are the best neighborhoods for Panama City condos?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Top neighborhoods include Punta Pacifica (ultra-premium, $250K-$2M+), Costa del Este (business district, $180K-$800K), El Cangrejo (walkable hub, $120K-$350K), San Francisco (mid-range, $100K-$300K), Casco Viejo (heritage investment, $150K-$600K), and Avenida Balboa (oceanfront, $140K-$500K).',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are HOA fees for Panama City condos?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'HOA (monthly maintenance) fees typically run $200-$600/month depending on building amenities and location.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are there restrictions on foreign ownership of Panama City condos?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No. There are no restrictions on foreign ownership of titled condos in Panama City.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I rent out my Panama City condo short-term?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Many buildings allow short-term (Airbnb-style) rentals, but you should confirm with the HOA before purchasing as an investment.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are the best neighborhoods for condos in Panama City, Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Top neighborhoods include Punta Pacifica (luxury high-rises, ocean views, $200K–$800K), Costa del Este (modern family-friendly, $150K–$500K), El Cangrejo (central, walkable, $80K–$250K), and Casco Viejo (historic charm, boutique condos, $120K–$400K). Each offers different lifestyles and price points for expat buyers.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much are HOA fees for Panama City condos?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'HOA fees in Panama City typically range from $0.50–$1.50 per square meter per month. For a 100m² (1,076 sq ft) condo, expect $50–$150/month. Luxury buildings with pools, gyms, and concierge services charge $150–$300/month. These fees are significantly lower than comparable US buildings.',
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
