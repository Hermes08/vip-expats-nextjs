import React from 'react';
import type { Metadata } from 'next';
import QuizPageContent from '@/components/pages/QuizPageContent';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const slug = '/quiz';
  const domain = 'https://panamarealestatesale.com';
  const canonical = `${domain}/${lang}${slug}`;

  return {
    title: 'Panama Property Match Quiz 2026 | Find Your Perfect Investment',
    description:
        'Answer 5 questions and get a personalized Panama property recommendation. Our AI-powered quiz matches your lifestyle, budget, and goals to the best developments in Panama City, Boquete, and Coronado.',
    keywords: 'panama property quiz, find best area retire panama, panama real estate recommendation, panama investment match, where to live panama expat',
    alternates: {
      canonical,
      languages: {
        'en-US': `${domain}/en${slug}`,
        'es-PA': `${domain}/es${slug}`,
        'pt-BR': `${domain}/pt${slug}`,
        'de-DE': `${domain}/de${slug}`,
        'x-default': `${domain}/en${slug}`,
      },
    },
    openGraph: {
        title: 'Panama Property Match Quiz 2026 | Find Your Perfect Investment',
        description: 'Take the 5-question quiz and discover which Panama property matches your lifestyle and investment goals.',
        type: 'website',
        images: [{ url: 'https://panamarealestatesale.com/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Panama Property Match Quiz 2026',
        description: 'Find your ideal Panama property in 60 seconds with our personalized quiz.',
    },
};
}

export default function Page() {
    return <QuizPageContent />;
}
