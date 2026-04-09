import type { Metadata } from 'next';
import PanamaRealEstateGuideContent from '@/components/pages/PanamaRealEstateGuideContent';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const domain = 'https://panamarealestatesale.com';
  const l = (lang === 'es' || lang === 'en') ? lang : 'en';

  const titles = {
    en: 'Panama Real Estate — Homes, Condos & Land for Sale 2026',
    es: 'Bienes Raíces Panamá — Casas, Condos y Terrenos 2026',
  };
  const descriptions = {
    en: 'Panama real estate for sale — condos from $80K, beachfront homes, investment land. Compare Panama City, Boquete, Coronado & Bocas del Toro. Equal foreign ownership rights. Search properties now.',
    es: 'Bienes raíces en Panamá — condos desde $80K, casas frente al mar, terrenos. Compare Ciudad de Panamá, Boquete, Coronado y Bocas. Mismos derechos para extranjeros. Busque ahora.',
  };

  return {
    title: titles[l],
    description: descriptions[l],
    keywords: [
      'panama real estate',
      'panama real estate market 2026',
      'buy property panama',
      'panama property prices',
      'panama real estate investment',
      'panama city real estate',
      'boquete real estate',
      'coronado panama',
    ].join(', '),
    alternates: {
      canonical: `${domain}/${l}/guides/panama-real-estate`,
      languages: {
        'en': `${domain}/en/guides/panama-real-estate`,
        'es': `${domain}/es/guides/panama-real-estate`,
      },
    },
    openGraph: {
      title: titles[l],
      description: descriptions[l],
      url: `${domain}/${l}/guides/panama-real-estate`,
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

export default function PanamaRealEstateGuidePage() {
  return (
    <>
      <PanamaRealEstateGuideContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Panama Real Estate 2026: Market Guide, Prices & Investment Opportunities',
            description: 'Complete Panama real estate guide. Market trends, property prices from $100K, top areas (Panama City, Boquete, Coronado), buying process, and investment ROI. Foreign buyers welcome.',
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
                  name: 'Can foreigners buy property in Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Panama is one of the few countries where foreigners enjoy the same property ownership rights as citizens. There are no restrictions on foreign ownership of titled property for most locations.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are the best neighborhoods for real estate in Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Top neighborhoods include Panama City (urban investment, $120K-$1.2M+), Boquete (mountain retreat, $100K-$600K), Coronado (beach community, $80K-$450K), and Bocas del Toro (Caribbean islands, $60K-$400K).',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are Panama real estate investment returns?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Prime Panama City neighborhoods have seen 5–8% annual appreciation. Growing expat demand and limited prime inventory support continued growth. Tax benefits include exemptions on new construction for up to 20 years.',
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
