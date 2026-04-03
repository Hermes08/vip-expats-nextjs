import type { Metadata } from 'next';
import BuyingPropertyPanamaUSCitizensContent from '@/components/pages/BuyingPropertyPanamaUSCitizensContent';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const domain = 'https://panamarealestatesale.com';
  const l = (lang === 'es' || lang === 'en') ? lang : 'en';

  const titles = {
    en: 'Buying Property in Panama as a US Citizen: Step-by-Step Guide 2026',
    es: 'Comprar Propiedad en Panamá como Ciudadano Estadounidense: Guía Paso a Paso 2026',
  };
  const descriptions = {
    en: 'How to buy property in Panama as a US citizen. Full process, costs, legal requirements, title search, and financing options. No residency required.',
    es: 'Cómo comprar propiedad en Panamá como ciudadano estadounidense. Proceso completo, costos, requisitos legales, búsqueda de título y opciones de financiamiento.',
  };

  return {
    title: titles[l],
    description: descriptions[l],
    keywords: [
      'buying property panama',
      'buy property panama US citizen',
      'buying real estate panama',
      'panama property for americans',
      'panama real estate process',
      'panama closing costs',
      'panama property attorney',
    ].join(', '),
    alternates: {
      canonical: `${domain}/${l}/guides/buying-property-panama-us-citizens`,
      languages: {
        'en': `${domain}/en/guides/buying-property-panama-us-citizens`,
        'es': `${domain}/es/guides/buying-property-panama-us-citizens`,
      },
    },
    openGraph: {
      title: titles[l],
      description: descriptions[l],
      url: `${domain}/${l}/guides/buying-property-panama-us-citizens`,
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

export default function BuyingPropertyPanamaUSCitizensPage() {
  return (
    <>
      <BuyingPropertyPanamaUSCitizensContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Buying Property in Panama as a US Citizen: Step-by-Step Guide 2026',
            description: 'How to buy property in Panama as a US citizen. Full process, costs, legal requirements, title search, and financing options. No residency required.',
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
                  name: 'Do US citizens need residency to buy property in Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No. US citizens do not need to be residents, speak Spanish, or obtain special government approval to purchase titled property in Panama.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are the steps to buy property in Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The steps include: (1) Hire a Panamanian attorney, (2) Title search and due diligence, (3) Sign the promise-to-buy contract, and (4) Final deed registration and closing.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are the closing costs for buying property in Panama?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Closing costs typically run 5-8% of purchase price, including property transfer tax (2%), stamp tax (0.1%), real estate agent commission (3-5%), legal fees ($1,000-$2,500), notary fees ($200-$600), and public registry fees ($100-$300).',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I get residency through a Panama property purchase?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. US citizens can qualify for several residency visas tied to real estate investment, including the Pensionado Visa, Qualified Investor Visa, and Friendly Nations Visa.',
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
