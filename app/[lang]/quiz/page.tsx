import React from 'react';
import type { Metadata } from 'next';
import QuizPageContent from '@/components/pages/QuizPageContent';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const canonical = `https://panamarealestatesale.com/${lang}/quiz`;

  return {
    title: 'Panama Property Match Quiz 2026 | Find Your Perfect Investment',
    description:
        'Answer 5 questions and get a personalized Panama property recommendation. Our AI-powered quiz matches your lifestyle, budget, and goals to the best developments in Panama City, Boquete, and Coronado.',
    keywords: 'panama property quiz, find best area retire panama, panama real estate recommendation, panama investment match, where to live panama expat',
    alternates: { canonical },
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
