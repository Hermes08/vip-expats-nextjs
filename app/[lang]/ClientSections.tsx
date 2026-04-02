'use client';

import dynamic from 'next/dynamic';

const QuickSearchStrip = dynamic(() => import('@/components/home/QuickSearchStrip'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 h-20 w-full rounded" />,
});

const FeaturedListings = dynamic(() => import('@/components/home/FeaturedListings'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 h-48 w-full rounded" />,
});

interface ClientSectionsProps {
  lang: 'en' | 'es';
}

export default function ClientSections({ lang }: ClientSectionsProps) {
  return (
    <>
      <QuickSearchStrip lang={lang} />
      <FeaturedListings lang={lang} />
    </>
  );
}
