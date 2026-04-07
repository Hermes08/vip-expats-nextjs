import type { Metadata } from 'next';

const domain = 'https://panamarealestatesale.com';
const slug = '/guides/panama-real-estate';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const canonical = `${domain}/${lang}${slug}`;

  return {
    title: 'Panama Real Estate Guide 2026 | Buy Property as a Foreigner',
    description:
      'Complete guide to buying real estate in Panama in 2026. USD-denominated market, full foreign ownership rights, no capital gains tax. Learn how to invest in condos, beachfront homes, and commercial property.',
    keywords: 'panama real estate guide, buying property panama foreigner, panama real estate investment 2026, panama property market, how to buy real estate panama',
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
      title: "Panama Real Estate Guide 2026 | Complete Buyer's Handbook",
      description: 'Everything foreign investors need to know about buying property in Panama — legal process, costs, top markets, and ROI potential.',
      type: 'article',
      url: canonical,
      images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'Panama Real Estate Guide 2026', description: 'How to buy property in Panama as a foreigner.' },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
