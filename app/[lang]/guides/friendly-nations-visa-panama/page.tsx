import type { Metadata } from 'next';
import FriendlyNationsVisaContent from '@/components/pages/FriendlyNationsVisaContent';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const domain = 'https://panamarealestatesale.com';
  const l = (lang === 'es' || lang === 'en') ? lang : 'en';

  const titles = {
    en: 'Panama Friendly Nations Visa 2026: Requirements, Cost & How to Apply',
    es: 'Visa de Países Amigos Panamá 2026: Requisitos, Costo y Cómo Aplicar',
  };
  const descriptions = {
    en: "Complete guide to Panama's Friendly Nations Visa in 2026. 50+ eligible countries, $200K investment requirement, processing timeline, and how to get permanent residency fast.",
    es: 'Guía completa de la Visa de Países Amigos de Panamá 2026. Más de 50 países elegibles, requisito de inversión de $200K, y cómo obtener residencia permanente rápidamente.',
  };

  return {
    title: titles[l],
    description: descriptions[l],
    keywords: [
      'friendly nations visa panama',
      'panama friendly nations visa 2026',
      'panama permanent residency friendly nations',
      'friendly nations visa requirements',
      'panama residency visa investment',
      'how to get friendly nations visa panama',
    ].join(', '),
    alternates: {
      canonical: `${domain}/${l}/guides/friendly-nations-visa-panama`,
      languages: {
        'en': `${domain}/en/guides/friendly-nations-visa-panama`,
        'es': `${domain}/es/guides/friendly-nations-visa-panama`,
      },
    },
    openGraph: {
      title: titles[l],
      description: descriptions[l],
      url: `${domain}/${l}/guides/friendly-nations-visa-panama`,
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

export default function FriendlyNationsVisaPage() {
  return <FriendlyNationsVisaContent />;
}
