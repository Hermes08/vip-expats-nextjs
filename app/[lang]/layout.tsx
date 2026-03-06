import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { CMSProvider } from "@/context/CMSContext";
import { LanguageProvider } from "@/context/LanguageContext";
import MainLayout from "@/components/MainLayout";
import ScrollAnimationObserver from "@/components/ScrollAnimationObserver";
import ZeroGravityWrapper from '@/components/GoldParticles/ZeroGravityWrapper';
import OrganizationSchema from '@/components/seo/OrganizationSchema';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    es: "Bienes Raíces en Panamá | Propiedades de Lujo & Inversión | panamarealestatesale",
    en: "Real Estate in Panama | Luxury Property & Investment | panamarealestatesale"
  };

  const descriptions = {
    es: "Encuentre bienes raíces en Panamá: condominios de lujo, casas de playa y oportunidades de inversión. Guía experta para expatriados e inversionistas.",
    en: "Find real estate in Panama: luxury beachfront condos, homes and investment properties. Expert guidance for expats and investors buying property in Panama."
  };

  const domain = "https://panamarealestatesale.com"; // User should update this if different

  return {
    title: titles[lang as keyof typeof titles] || titles.es,
    description: descriptions[lang as keyof typeof descriptions] || descriptions.es,
    alternates: {
      canonical: `${domain}/${lang}`,
      languages: {
        'en-US': `${domain}/en`,
        'es-PA': `${domain}/es`,
        'x-default': `${domain}/es`,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'es' ? 'es_PA' : 'en_US',
      url: `${domain}/${lang}`,
      siteName: titles[lang as keyof typeof titles] || titles.es,
      title: titles[lang as keyof typeof titles] || titles.es,
      description: descriptions[lang as keyof typeof descriptions] || descriptions.es,
      images: [
        {
          url: `${domain}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: titles[lang as keyof typeof titles] || titles.es,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[lang as keyof typeof titles] || titles.es,
      description: descriptions[lang as keyof typeof descriptions] || descriptions.es,
      images: [`${domain}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'C5dDcwN7RBp9fhyc_KFAlYYd9mW8-wdMUw9aOIim4Us',
    }
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} suppressHydrationWarning>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-90BHGEJ5KD"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-90BHGEJ5KD');
          `}
      </Script>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased overflow-x-hidden selection:bg-brand-GOLD selection:text-brand-900 bg-brand-950`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-6 py-3 bg-brand-GOLD text-brand-950 font-bold rounded-lg shadow-xl ring-2 ring-white">
          Skip to content
        </a>
        <OrganizationSchema lang={lang as 'es' | 'en'} />
        <LanguageProvider initialLang={lang as 'es' | 'en'}>
          <ScrollAnimationObserver />
          <ZeroGravityWrapper />
          <CMSProvider>
            <MainLayout>
              {children}
            </MainLayout>
          </CMSProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
