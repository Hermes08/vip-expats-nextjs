import type { Metadata } from 'next';
import PanamaRealEstateForExpatsContent from '@/components/pages/PanamaRealEstateForExpatsContent';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const domain = 'https://panamarealestatesale.com';
  const l = (lang === 'es' || lang === 'en') ? lang : 'en';

  const titles = {
    en: 'Panama Real Estate for Expats 2026: Complete Buying Guide',
    es: 'Bienes Raíces en Panamá para Expats 2026: Guía Completa de Compra',
  };
  const descriptions = {
    en: 'Complete guide to buying Panama real estate as an expat. Equal ownership rights, USD economy, top neighborhoods, prices from $100K. Expert expat property guide.',
    es: 'Guía completa para comprar bienes raíces en Panamá como expat. Derechos de propiedad iguales, economía en dólares, principales vecindarios, precios desde $100K.',
  };

  return {
    title: titles[l],
    description: descriptions[l],
    keywords: [
      'panama real estate for expats',
      'panama real estate expats',
      'expat property panama',
      'buy property panama',
      'panama property market',
      'panama city condos',
      'panama investment property',
    ].join(', '),
    alternates: {
      canonical: `${domain}/${l}/guides/panama-real-estate-for-expats`,
      languages: {
        'en': `${domain}/en/guides/panama-real-estate-for-expats`,
        'es': `${domain}/es/guides/panama-real-estate-for-expats`,
      },
    },
    openGraph: {
      title: titles[l],
      description: descriptions[l],
      url: `${domain}/${l}/guides/panama-real-estate-for-expats`,
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

export default function PanamaRealEstateForExpatsPage() {
  return (
    <>
      <PanamaRealEstateForExpatsContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Panama Real Estate for Expats 2026: Complete Buying Guide',
            description: 'Complete guide to buying Panama real estate as an expat. Equal ownership rights, USD economy, top neighborhoods, prices from $100K. Expert expat property guide.',
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
                  name: 'Can foreigners own property in Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Panama is one of the few countries where foreigners enjoy the same property ownership rights as citizens. There are no restrictions on foreign ownership of titled property for most expat-popular locations.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are the best neighborhoods for expats in Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Top neighborhoods include Panama City (urban investment, $150K-$800K), Boquete (mountain retreat, $120K-$500K), Coronado (beach living, $100K-$400K), and Bocas del Toro (island paradise, $80K-$350K).',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are the property tax benefits in Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'New construction properties are exempt from property tax for up to 20 years. There is no capital gains tax on primary residences held more than 2 years. Panama taxes only locally-sourced income — foreign income is tax-free. Property transfer tax is just 2%.',
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
