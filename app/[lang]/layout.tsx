import type { Metadata } from "next";
import { Inter, Montserrat, Manrope, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { CMSProvider } from "@/context/CMSContext";
import { LanguageProvider } from "@/context/LanguageContext";
import MainLayout from "@/components/MainLayout";
import ScrollAnimationObserver from "@/components/ScrollAnimationObserver";
import ZeroGravityWrapper from '@/components/GoldParticles/ZeroGravityWrapper';
import SmoothScroll from "@/components/providers/SmoothScroll";
import OrganizationSchema from '@/components/seo/OrganizationSchema';
// WhatsAppFloat removed — WA button is rendered inside MainLayout at bottom-left to avoid overlap with StickyCTA

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    es: "Bienes Raíces en Panamá 2026 | Propiedades de Lujo e Inversión VIP",
    en: "Panama Real Estate for Sale 2026 | Luxury Beachfront & City Investment",
    pt: "Imóveis no Panamá 2026 | Propriedades de Luxo e Investimento de Alto Rendimento",
    de: "Panama Immobilien 2026 | Luxus Meerblick & Stadt Investitionen"
  };

  const descriptions = {
    es: "Descubra las mejores propiedades en Panamá para 2026. Lujo frente al mar, inversiones de alto rendimiento y asesoría experta para su próximo activo inmobiliario.",
    en: "Explore the best Panama real estate for sale in 2026. From luxury beachfront condos to high-yield city investments, secure your dream home or ROI asset with us.",
    pt: "Explore os melhores imóveis no Panamá para 2026. De condomínios frente ao mar de luxo a investimentos imobiliários de alto rendimento.",
    de: "Entdecken Sie die besten Panama-Immobilien 2026. Von luxuriösen Strandwohnungen bis zu hochrentablen Stadtinvestitionen."
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
        'pt-BR': `${domain}/pt`,
        'de-DE': `${domain}/de`,
        'x-default': `${domain}/es`,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'es' ? 'es_PA' : lang === 'pt' ? 'pt_BR' : lang === 'de' ? 'de_DE' : 'en_US',
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
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'es';

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
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
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${manrope.variable} ${cormorant.variable} antialiased overflow-x-hidden selection:bg-brand-GOLD selection:text-brand-900 bg-white`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-6 py-3 bg-brand-GOLD text-brand-950 font-bold rounded-lg shadow-xl ring-2 ring-white">
          Skip to content
        </a>
        <OrganizationSchema lang={lang as 'es' | 'en' | 'pt' | 'de'} />
        <LanguageProvider initialLang={lang as 'es' | 'en' | 'pt' | 'de'}>
          <SmoothScroll>
            <ScrollAnimationObserver />
            <ZeroGravityWrapper />
            <CMSProvider>
              <MainLayout>
                {children}
              </MainLayout>
            </CMSProvider>
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
