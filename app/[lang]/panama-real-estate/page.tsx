import { Metadata } from 'next';
import Link from 'next/link';
import { PROJECTS } from '@/lib/constants';
import { CheckCircle, TrendingUp, ShieldCheck, Globe, MapPin, DollarSign, Home, Building, ArrowRight } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    en: "Panama Real Estate | Buy Property in Panama | Houses, Condos & Land",
    es: "Bienes Raíces en Panamá | Comprar Propiedades | Casas, Apartamentos y Terrenos",
    pt: "Imóveis no Panamá | Comprar Propriedades | Casas, Apartamentos e Terrenos",
    de: "Panama Immobilien | Immobilien in Panama kaufen | Häuser, Apartments & Grundstücke"
  };

  const descriptions = {
    en: "Complete guide to Panama real estate. Find beachfront condos, luxury homes, investment properties, and land for sale in Panama. Expert advice for expats and investors.",
    es: "Guía completa de bienes raíces en Panamá. Encuentra condominios frente al mar, casas de lujo, propiedades de inversión y terrenos en venta. Asesoría experta para expatriados e inversionistas.",
    pt: "Guia completo de imóveis no Panamá. Encontre condomínios frente ao mar, casas de luxo, propriedades de investimento e terrenos à venda. Assessoria especializada para expatriados e investidores.",
    de: "Vollständiger Leitfaden før Panama-Immobilien. Finden Sie Strandwohnungen, Luxushäuser, Anlageobjekte und Grundstücke in Panama. Expertenberatung für Expats und Investoren."
  };

  return {
    title: titles[lang as keyof typeof titles] || titles.en,
    description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://panamarealestatesale.com/${lang}/panama-real-estate`,
      languages: {
        'en-US': 'https://panamarealestatesale.com/en/panama-real-estate',
        'es-PA': 'https://panamarealestatesale.com/es/panama-real-estate',
        'pt-BR': 'https://panamarealestatesale.com/pt/panama-real-estate',
        'de-DE': 'https://panamarealestatesale.com/de/panama-real-estate',
        'x-default': 'https://panamarealestatesale.com/en/panama-real-estate',
      },
    },
    openGraph: {
      title: titles[lang as keyof typeof titles] || titles.en,
      description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
      type: 'website',
    },
  };
}

export default async function PanamaRealEstatePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const content = {
    en: {
      h1: "Panama Real Estate",
      subtitle: "Your Complete Guide to Buying Property in Panama",
      intro: "Panama offers some of the most attractive real estate opportunities in Latin America. From stunning beachfront condos on the Pacific coast to mountain retreats in Boquete, the Panama real estate market provides options for every investor, retiree, and expat looking to own property in this tropical paradise.",
      whyPanama: "Why Buy Real Estate in Panama?",
      whyPanamaContent: "Panama's real estate market stands out for several compelling reasons that attract international buyers:",
      benefits: [
        { icon: DollarSign, title: "Dollarized Economy", desc: "Panama uses the US dollar, eliminating currency risk and providing financial stability for international investors." },
        { icon: ShieldCheck, title: "Strong Property Rights", desc: "Foreign nationals can own property with the same rights as Panamanian citizens. Title insurance is available." },
        { icon: TrendingUp, title: "Tax Benefits", desc: "Property tax exemptions for new construction, no capital gains tax on primary residence, and territorial tax system." },
        { icon: Globe, title: "Strategic Location", desc: "Hub of the Americas with direct flights to major cities. The Panama Canal makes it a global commerce center." },
      ],
      propertyTypes: "Types of Panama Real Estate",
      types: [
        { icon: Building, title: "Beachfront Condos", desc: "Luxury oceanfront condominiums on the Pacific and Caribbean coasts. Popular areas include Playa Bonita, Coronado, and Bocas del Toro." },
        { icon: Home, title: "Mountain Properties", desc: "Cool climate homes and estates in Boquete and the Chiriquí highlands. Perfect for retirees seeking year-round spring weather." },
        { icon: MapPin, title: "Panama City Apartments", desc: "Modern high-rise living in neighborhoods like Punta Pacífica, Costa del Este, and the historic Casco Viejo." },
        { icon: Globe, title: "Investment Properties", desc: "Pre-construction opportunities, branded residences, and rental income properties with 8-12% yields." },
      ],
      featuredTitle: "Featured Panama Properties",
      ctaTitle: "Ready to Find Your Panama Property?",
      ctaButton: "Contact Our Advisors",
      exploreButton: "View All Properties",
    },
    es: {
      h1: "Bienes Raíces en Panamá",
      subtitle: "Guía Completa para Comprar Propiedades en Panamá",
      intro: "Panamá ofrece algunas de las oportunidades inmobiliarias más atractivas de América Latina. Desde impresionantes condominios frente al mar en la costa del Pacífico hasta retiros en las montañas de Boquete, el mercado inmobiliario panameño ofrece opciones para cada inversionista, jubilado y expatriado.",
      whyPanama: "¿Por Qué Comprar Bienes Raíces en Panamá?",
      whyPanamaContent: "El mercado inmobiliario de Panamá destaca por severas razones convincentes que atraen a compradores internacionales:",
      benefits: [
        { icon: DollarSign, title: "Economía Dolarizada", desc: "Panamá usa el dólar estadounidense, eliminando el riesgo cambiario y proporcionando estabilidad financiera." },
        { icon: ShieldCheck, title: "Derechos de Propiedad Sólidos", desc: "Los extranjeros pueden poseer propiedades con los mismos derechos que los ciudadanos panameños." },
        { icon: TrendingUp, title: "Beneficios Fiscales", desc: "Exenciones de impuestos para nuevas construcciones, sin impuesto sobre ganancias de capital en residencia principal." },
        { icon: Globe, title: "Ubicación Estratégica", desc: "Hub de las Américas con vuelos directos a ciudades principales. El Canal de Panamá lo convierte en centro del comercio global." },
      ],
      propertyTypes: "Tipos de Bienes Raíces en Panamá",
      types: [
        { icon: Building, title: "Condominios Frente al Mar", desc: "Condominios de lujo frente al océano en las costas del Pacífico y Caribe. Áreas populares incluyen Playa Bonita, Coronado y Bocas del Toro." },
        { icon: Home, title: "Propiedades de Montaña", desc: "Casas y fincas de clima fresco en Boquete y las tierras altas de Chiriquí. Perfecto para jubilados." },
        { icon: MapPin, title: "Apartamentos en Ciudad de Panamá", desc: "Vida moderna en rascacielos en vecindarios como Punta Pacífica, Costa del Este y el histórico Casco Viejo." },
        { icon: Globe, title: "Propiedades de Inversión", desc: "Oportunidades de pre-construcción, residencias de marca y propiedades de alquiler con rendimientos del 8-12%." },
      ],
      featuredTitle: "Propiedades Destacadas en Panamá",
      ctaTitle: "¿Listo para Encontrar Tu Propiedad en Panamá?",
      ctaButton: "Contactar Asesores",
      exploreButton: "Ver Todas las Propiedades",
    },
  };

  const t = content[lang as keyof typeof content] || content.en;

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div class