import { Metadata } from 'next';
import Link from 'next/link';
import { PROJECTS } from '@/lib/constants';
import { CheckCircle, TrendingUp, ShieldCheck, Globe, MapPin, DollarSign, Home, Building, ArrowRight } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    en: "Panama Real Estate | Buy Property in Panama | Houses, Condos & Land",
    es: "Bienes Raíces en Panamá | Comprar Propiedades | Casas, Apartamentos y Terrenos"
  };

  const descriptions = {
    en: "Complete guide to Panama real estate. Find beachfront condos, luxury homes, investment properties, and land for sale in Panama. Expert advice for expats and investors.",
    es: "Guía completa de bienes raíces en Panamá. Encuentra condominios frente al mar, casas de lujo, propiedades de inversión y terrenos en venta. Asesoría experta para expatriados e inversionistas."
  };

  return {
    title: titles[lang as keyof typeof titles] || titles.en,
    description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://panamarealestatesale.com/${lang}/panama-real-estate`,
      languages: {
        'en-US': 'https://panamarealestatesale.com/en/panama-real-estate',
        'es-PA': 'https://panamarealestatesale.com/es/panama-real-estate',
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
      whyPanamaContent: "El mercado inmobiliario de Panamá destaca por varias razones convincentes que atraen a compradores internacionales:",
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
    <main className="bg-brand-950 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-GOLD/5 to-transparent" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 uppercase tracking-tighter">
            {t.h1}
          </h1>
          <p className="text-2xl md:text-3xl text-brand-GOLD font-bold mb-8">
            {t.subtitle}
          </p>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.intro}
          </p>
        </div>
      </section>

      {/* Why Panama Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6 text-center uppercase tracking-tighter">
            {t.whyPanama}
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-3xl mx-auto">
            {t.whyPanamaContent}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.map((benefit, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl border border-white/5 hover:border-brand-GOLD/30 transition-all">
                <benefit.icon className="text-brand-GOLD mb-6" size={40} />
                <h3 className="text-xl font-black text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-16 text-center uppercase tracking-tighter">
            {t.propertyTypes}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.types.map((type, i) => (
              <div key={i} className="flex gap-6 p-8 glass-card rounded-2xl border border-white/5 hover:border-brand-GOLD/30 transition-all">
                <type.icon className="text-brand-GOLD flex-shrink-0" size={48} />
                <div>
                  <h3 className="text-2xl font-black text-white mb-4">{type.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-16 text-center uppercase tracking-tighter">
            {t.featuredTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {PROJECTS.slice(0, 6).map((project) => (
              <Link
                key={project.id}
                href={`/${lang}/proyectos/${project.slug}`}
                className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-brand-GOLD/50 transition-all group"
              >
                <div className="aspect-video bg-brand-900 relative overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.name[lang as 'en' | 'es'] || project.name.en}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-white mb-2">
                    {project.name[lang as 'en' | 'es'] || project.name.en}
                  </h3>
                  <p className="text-brand-GOLD text-sm font-bold mb-3">
                    {project.location[lang as 'en' | 'es'] || project.location.en}
                  </p>
                  <p className="text-slate-400 text-sm line-clamp-2">
                    {project.description[lang as 'en' | 'es'] || project.description.en}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href={`/${lang}/proyectos`}
              className="inline-block px-10 py-5 bg-brand-GOLD text-brand-950 font-black uppercase tracking-wider rounded-full hover:bg-white transition-colors"
            >
              {t.exploreButton}
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Investment & Lifestyle Guides */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-16 text-center uppercase tracking-tighter">
            Investment & Lifestyle Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href={`/${lang}/blog/panama-investment-opportunities`}
              className="glass-card p-10 rounded-[2rem] border border-white/5 hover:border-brand-GOLD/50 transition-all group block"
            >
              <TrendingUp className="text-brand-GOLD mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter">
                2026 Investment Opportunities
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Why sophisticated investors are choosing Panama's stable, dollarized market for high-yield property assets.
              </p>
              <span className="text-brand-GOLD font-bold flex items-center gap-2">
                Read Guide <ArrowRight size={16} />
              </span>
            </Link>

            <Link
              href={`/${lang}/blog/panama-real-estate-beachfront-retirement`}
              className="glass-card p-10 rounded-[2rem] border border-white/5 hover:border-brand-GOLD/50 transition-all group block"
            >
              <Home className="text-brand-GOLD mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter">
                Beachfront & Retirement Guide
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Discover the ultimate lifestyle benefits of retiring or living beachfront in Panama's most exclusive communities.
              </p>
              <span className="text-brand-GOLD font-bold flex items-center gap-2">
                Explore Lifestyle <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-10 uppercase tracking-tighter">
            {t.ctaTitle}
          </h2>
          <Link
            href={`/${lang}/contacto`}
            className="inline-block px-12 py-6 bg-brand-GOLD text-brand-950 font-black uppercase tracking-widest rounded-full hover:bg-white transition-colors text-lg"
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
