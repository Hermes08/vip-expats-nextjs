import type { Metadata } from 'next';
import PensionadoVisaContent from '@/components/pages/PensionadoVisaContent';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const domain = 'https://panamarealestatesale.com';
  const l = (lang === 'es' || lang === 'en') ? lang : 'en';

  const titles = {
    en: 'Panama Pensionado Visa 2026: Requirements, Benefits & How to Apply',
    es: 'Visa de Pensionado Panamá 2026: Requisitos, Beneficios y Cómo Aplicar',
  };
  const descriptions = {
    en: 'Complete guide to Panama\'s Pensionado Visa in 2026. Eligibility, documents, discounts (50% off entertainment, 25% off utilities), processing timeline, and how VIP Expats can help you qualify.',
    es: 'Guía completa de la Visa de Pensionado de Panamá en 2026. Requisitos, documentos, descuentos y cómo aplicar para residencia permanente con $1,000/mes de pensión.',
  };

  return {
    title: titles[l],
    description: descriptions[l],
    keywords: [
      'pensionado visa panama',
      'panama pensionado visa 2026',
      'retire in panama visa',
      'panama retirement visa requirements',
      'pensionado visa benefits panama',
      'how to get pensionado visa panama',
      'panama permanent residency pensionado',
    ].join(', '),
    alternates: {
      canonical: `${domain}/${l}/guides/pensionado-visa-panama`,
      languages: {
        'en': `${domain}/en/guides/pensionado-visa-panama`,
        'es': `${domain}/es/guides/pensionado-visa-panama`,
      },
    },
    openGraph: {
      title: titles[l],
      description: descriptions[l],
      url: `${domain}/${l}/guides/pensionado-visa-panama`,
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

export default function PensionadoVisaPage() {
  return <PensionadoVisaContent />;
}
