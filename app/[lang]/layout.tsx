import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { CMSProvider } from "@/context/CMSContext";
import { LanguageProvider } from "@/context/LanguageContext";
import MainLayout from "@/components/MainLayout";
import ScrollAnimationObserver from "@/components/ScrollAnimationObserver";
import ZeroGravityWrapper from '@/components/GoldParticles/ZeroGravityWrapper';

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
    es: "panamarealestatesale | Portal de Bienes Raíces e Inversiones en Panamá",
    en: "panamarealestatesale | Panama Real Estate & Investment Portal"
  };

  const descriptions = {
    es: "panamarealestatesale - Portal profesional de bienes raíces para pre-construcción, resorts de playa de lujo y propiedades de inversión en montaña en Panamá.",
    en: "panamarealestatesale - Professional real estate portal for pre-construction, luxury beach resorts and mountain investment properties in Panama."
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
        google: 'your-google-verification-code',
      }
    },
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
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-90BHGEJ5KD"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-90BHGEJ5KD');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased overflow-x-hidden selection:bg-brand-GOLD selection:text-brand-900 bg-brand-950`}
      >
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
