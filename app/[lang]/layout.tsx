import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
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
    es: "ExpatRockstars | Portal de Bienes Raíces e Inversiones en Panamá",
    en: "ExpatRockstars | Panama Real Estate & Investment Portal"
  };

  const descriptions = {
    es: "ExpatRockstars - Portal profesional de bienes raíces para pre-construcción, resorts de playa de lujo y propiedades de inversión en montaña en Panamá.",
    en: "ExpatRockstars - Professional real estate portal for pre-construction, luxury beach resorts and mountain investment properties in Panama."
  };

  const domain = "https://expatrockstars.com"; // User should update this if different

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
