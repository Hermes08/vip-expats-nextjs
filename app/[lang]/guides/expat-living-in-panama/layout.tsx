import type { Metadata } from 'next';

const domain = 'https://panamarealestatesale.com';
const slug = '/guides/expat-living-in-panama';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const canonical = `${domain}/${lang}${slug}`;

  return {
    title: 'Expat Living in Panama 2026: The Ultimate Lifestyle Guide',
    description:
      'Panama is the #1 expat destination in 2026. Explore life in Panama City, Boquete, and Coronado — cost of living, healthcare, internet, safety, and why thousands of Americans move here every year.',
    keywords: 'expat living panama 2026, living in panama as american, panama expat lifestyle, move to panama guide, panama city expat neighborhoods',
    alternates: {
      canonical,
      languages: {
        'en-US': `${domain}/en${slug}`,
        'es-PA': `${domain}/es${slug}`,
        'pt-BR': `${domain}/pt${slug}`,
        'de-DE': `${domain}/de${slug}`,
        'x-default': `${domain}/es${slug}`,
      },
    },
    openGraph: {
      title: 'Expat Living in Panama 2026: The Ultimate Lifestyle Guide',
      description: 'Everything you need to know about living in Panama as an expat — from neighborhoods to healthcare and cost of living.',
      type: 'article',
      url: canonical,
      images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'Expat Living in Panama 2026', description: 'The ultimate guide to expat life in Panama.' },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
