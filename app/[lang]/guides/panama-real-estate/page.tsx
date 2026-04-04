'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, DollarSign, MapPin, TrendingUp, Shield, Users, ArrowRight, CheckCircle, Building2 } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Magnetic from '@/components/ui/Magnetic';


const PanamaRealEstatePage = () => {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const content = {
    badge: isEn ? 'Panama Real Estate Guide 2026' : 'Guía de Bienes Raíces en Panamá 2026',
    title: isEn ? 'Panama Real Estate' : 'Bienes Raíces en Panamá',
    subtitle: isEn
      ? "Buy property in one of Latin America's most stable, expat-friendly markets. USD-denominated, legally secure, and open to foreign buyers with full ownership rights."
      : 'Compre propiedades en uno de los mercados más estables y amigables para expats de América Latina. En dólares, legalmente seguro y abierto a compradores extranjeros con plenos derechos de propiedad.',
    intro: isEn
      ? "Panama's real estate market stands apart in Latin America. Foreigners enjoy the same property ownership rights as Panamanian citizens — no restrictions, no special permits, no minimum investment thresholds for most property types. The market uses the US dollar, eliminating currency risk for North American buyers. With a stable GDP growing at 4–6% annually, a booming financial sector, and a growing expat population exceeding 100,000, Panama real estate offers both lifestyle value and investment upside that few markets in the region can match."
      : 'El mercado inmobiliario de Panamá se destaca en América Latina. Los extranjeros tienen los mismos derechos de propiedad que los ciudadanos panameños: sin restricciones, sin permisos especiales, sin umbrales de inversión mínimos para la mayoría de tipos de propiedades. El mercado utiliza el dólar estadounidense, eliminando el riesgo cambiario para compradores norteamericanos.',
    marketsTitle: isEn ? 'Top Real Estate Markets in Panama' : 'Principales Mercados Inmobiliarios en Panamá',
    markets: [
      {
        icon: Building2,
        name: isEn ? 'Panama City' : 'Ciudad de Panamá',
        type: isEn ? 'Urban & Investment' : 'Urbano e Inversión',
        price: '$120K – $1.2M+',
        desc: isEn
          ? 'The financial hub of the Americas. High-rise condos in Punta Pacifica, Costa del Este, San Francisco, and El Cangrejo. Strong rental demand from expats and business travelers. 5–8% annual appreciation in prime zones.'
          : 'El centro financiero de las Américas. Condominios de gran altura en Punta Pacífica, Costa del Este, San Francisco y El Cangrejo. Fuerte demanda de alquiler de expats y viajeros de negocios.',
      },
      {
        icon: MapPin,
        name: 'Boquete',
        type: isEn ? 'Mountain Retreat' : 'Retiro en la Montaña',
        price: '$100K – $600K',
        desc: isEn
          ? "Panama's premier highland expat destination. Cooler climate, coffee farms, English-speaking community. Houses, fincas, and condos starting at $100K. Highest concentration of North American retirees in Panama."
          : 'El principal destino expat de las tierras altas de Panamá. Clima más fresco, cafetales, comunidad de habla inglesa. Casas, fincas y condos desde $100K.',
      },
      {
        icon: Home,
        name: 'Coronado',
        type: isEn ? 'Beach Community' : 'Comunidad Playera',
        price: '$80K – $450K',
        desc: isEn
          ? "Panama's largest expat beach community, 90 minutes from Panama City. Golf, restaurants, supermarkets, and a strong vacation rental market. Most affordable beachfront access in the country."
          : 'La comunidad de playa expat más grande de Panamá, a 90 minutos de Ciudad de Panamá. Golf, restaurantes, supermercados y un sólido mercado de alquiler vacacional.',
      },
      {
        icon: MapPin,
        name: 'Bocas del Toro',
        type: isEn ? 'Caribbean Islands' : 'Islas del Caribe',
        price: '$60K – $400K',
        desc: isEn
          ? 'Caribbean island lifestyle at an accessible price. Water taxis, coral reefs, and a laid-back expat scene. Strong vacation rental income potential. Rights-of-possession land available from $60K.'
          : 'Estilo de vida caribeño a un precio accesible. Taxis acuáticos, arrecifes de coral y un ambiente expat relajado. Fuerte potencial de ingresos por alquiler vacacional.',
      },
      {
        icon: Home,
        name: 'Chiriquí Highlands',
        type: isEn ? 'Rural & Agricultural' : 'Rural y Agrícola',
        price: '$50K – $300K',
        desc: isEn
          ? 'Land, farms, and homes in the western highlands. David is the regional capital with growing infrastructure. Lower price points for buyers seeking space and nature. Strong value appreciation expected as infrastructure improves.'
          : 'Terrenos, fincas y casas en las tierras altas del occidente. David es la capital regional con infraestructura en crecimiento.',
      },
      {
        icon: MapPin,
        name: 'Casco Viejo',
        type: isEn ? 'Historic District' : 'Distrito Histórico',
        price: '$150K – $800K',
        desc: isEn
          ? "Panama City's UNESCO-listed colonial quarter. Boutique apartments and restored colonial buildings. Rapidly gentrifying — strong appreciation and rental yields for short-term rental investors. Walking distance to the financial district."
          : 'El barrio colonial de Ciudad de Panamá en la lista de la UNESCO. Apartamentos boutique y edificios coloniales restaurados. Rápida gentrificación.',
      },
    ],
    whyTitle: isEn ? 'Why Buy Panama Real Estate' : 'Por Qué Comprar Bienes Raíces en Panamá',
    reasons: [
      {
        icon: Shield,
        title: isEn ? 'Full Foreign Ownership' : 'Propiedad Extranjera Total',
        desc: isEn
          ? 'Foreigners own titled property with identical legal rights as Panamanian citizens. Registered in the Public Registry via the Torrens system.'
          : 'Los extranjeros poseen propiedades tituladas con derechos legales idénticos a los ciudadanos panameños.',
      },
      {
        icon: DollarSign,
        title: isEn ? 'USD Economy' : 'Economía en Dólares',
        desc: isEn
          ? 'Panama has used the US dollar since 1904. No currency exchange risk for American buyers. Prices, mortgages, and contracts all in USD.'
          : 'Panamá usa el dólar desde 1904. Sin riesgo cambiario para compradores americanos.',
      },
      {
        icon: TrendingUp,
        title: isEn ? 'Strong Appreciation' : 'Fuerte Apreciación',
        desc: isEn
          ? 'Prime Panama City neighborhoods have seen 5–8% annual appreciation. Growing expat demand and limited prime inventory support continued growth.'
          : 'Los vecindarios principales de Ciudad de Panamá han visto una apreciación anual del 5–8%.',
      },
      {
        icon: Users,
        title: isEn ? 'Residency Pathways' : 'Vías de Residencia',
        desc: isEn
          ? 'A $300K+ property purchase qualifies for the Qualified Investor Visa. A $100K+ purchase paired with $750/month pension qualifies for the Pensionado Visa.'
          : 'Una compra de propiedad de $300K+ califica para la Visa de Inversionista Calificado.',
      },
    ],
    processTitle: isEn ? 'How to Buy Real Estate in Panama' : 'Cómo Comprar Bienes Raíces en Panamá',
    steps: [
      {
        step: '01',
        title: isEn ? 'Choose Your Location' : 'Elija Su Ubicación',
        desc: isEn
          ? 'Panama City for investment and urban living. Boquete for mountain retirement. Coronado for beach community. Bocas del Toro for island lifestyle. Visit first — we offer discovery tours.'
          : 'Ciudad de Panamá para inversión y vida urbana. Boquete para retiro en la montaña. Coronado para comunidad de playa.',
      },
      {
        step: '02',
        title: isEn ? 'Engage an Attorney' : 'Contrate un Abogado',
        desc: isEn
          ? 'A Panamanian attorney checks the title for liens, encumbrances, and legal issues. Cost: $500–$1,500. Essential — do not skip this step.'
          : 'Un abogado panameño verifica el título. Costo: $500–$1,500. Esencial — no omita este paso.',
      },
      {
        step: '03',
        title: isEn ? 'Sign Promissory Contract' : 'Firme el Contrato de Promesa',
        desc: isEn
          ? 'A Promesa de Compraventa is signed with typically a 10% deposit. This locks the property and sets closing conditions and timeline.'
          : 'Se firma una Promesa de Compraventa con un depósito del 10%. Esto asegura la propiedad.',
      },
      {
        step: '04',
        title: isEn ? 'Close & Register' : 'Cierre y Registre',
        desc: isEn
          ? 'The escritura (deed) is signed before a Panamanian notary and registered with the Public Registry. Closing costs: 2–4% of purchase price. Process takes 1–3 months.'
          : 'La escritura se firma ante notario panameño y se registra en el Registro Público. Costos de cierre: 2–4% del precio de compra.',
      },
    ],
    taxTitle: isEn ? 'Tax Benefits for Property Owners' : 'Beneficios Fiscales para Propietarios',
    taxPoints: isEn
      ? [
          'New construction properties exempt from property tax for up to 20 years.',
          'No capital gains tax on primary residences held over 2 years.',
          'Panama taxes only locally-sourced income — foreign-earned income is completely tax-free.',
          'Property transfer tax: just 2% of the registered value.',
          '$300K+ real estate investment qualifies for the Qualified Investor permanent residency visa.',
        ]
      : [
          'Propiedades nuevas exentas del impuesto predial por hasta 20 años.',
          'Sin impuesto sobre ganancias de capital en residencias principales mantenidas más de 2 años.',
          'Panamá solo grava ingresos de fuente local — los ingresos extranjeros están completamente libres de impuestos.',
          'Impuesto de transferencia de propiedad: solo el 2% del valor registrado.',
          'Una inversión inmobiliaria de $300K+ califica para la visa de residencia permanente de Inversionista Calificado.',
        ],
    guidesTitle: isEn ? 'Related Guides' : 'Guías Relacionadas',
    guides: [
      { href: 'panama-real-estate-for-expats', label: isEn ? 'Panama Real Estate for Expats' : 'Bienes Raíces para Expats' },
      { href: 'buying-property-panama-us-citizens', label: isEn ? 'Buying Property as a US Citizen' : 'Comprar Propiedad como Ciudadano Estadounidense' },
      { href: 'panama-city-condos-for-sale', label: isEn ? 'Panama City Condos for Sale' : 'Condos en Venta en Ciudad de Panamá' },
      { href: 'pensionado-visa-panama', label: isEn ? 'Pensionado Visa + Real Estate' : 'Visa Pensionado + Bienes Raíces' },
      { href: 'safest-neighborhoods-panama-city', label: isEn ? 'Safest Neighborhoods in Panama City' : 'Vecindarios Más Seguros en Ciudad de Panamá' },
    ],
    ctaTitle: isEn ? 'Browse Panama Properties' : 'Explorar Propiedades en Panamá',
    ctaDesc: isEn
      ? 'View curated listings across Panama City, Boquete, Coronado, and more. Our advisors specialize in expat buyers.'
      : 'Vea listados seleccionados en Ciudad de Panamá, Boquete, Coronado y más. Nuestros asesores se especializan en compradores expats.',
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-40 overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] bg-brand-GOLD/5 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HERO */}
        <section className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">{content.badge}</span>
            <h1 className="text-6xl md:text-9xl font-heading font-black text-brand-950 mb-10 tracking-tighter uppercase italic leading-[0.8]">
              {isEn ? 'Panama' : 'Panamá'} <br />
              <span className="text-brand-GOLD">{isEn ? 'Real Estate' : 'Bienes Raíces'}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed mb-16 italic">
              {content.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Magnetic strength={0.3}>
                <Link
                  href={`/${lang}/propiedades`}
                  className="btn-3d btn-3d-gold px-12 py-7 rounded-xl font-black uppercase tracking-widest text-[11px]"
                >
                  {isEn ? 'Browse Properties' : 'Ver Propiedades'}
                </Link>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Link
                  href={`/${lang}/relocation/tours`}
                  className="btn-3d btn-3d-navy px-12 py-7 rounded-xl font-black uppercase tracking-widest text-[11px] bg-white/5 backdrop-blur-3xl border border-brand-100"
                >
                  {isEn ? 'Explore on a Tour' : 'Explorar en un Tour'}
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </section>

        {/* INTRO */}
        <section className="py-24 border-t border-brand-100 max-w-4xl mx-auto">
          <p className="text-xl text-slate-600 leading-relaxed font-medium">{content.intro}</p>
        </section>

        {/* TOP MARKETS */}
        <section className="py-24 border-t border-brand-100">
          <div className="text-center mb-20">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
              {isEn ? 'Where to Buy' : 'Dónde Comprar'}
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-brand-950 tracking-tighter uppercase italic leading-[0.8]">
              {content.marketsTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.markets.map((market, i) => (
              <div key={i} className="card-light p-10 rounded-3xl border-brand-100 hover:border-brand-GOLD/30 transition-all group">
                <market.icon className="text-brand-GOLD mb-6 group-hover:scale-110 transition-transform" size={36} />
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-1">{market.type}</p>
                    <h3 className="text-2xl font-black text-brand-950 uppercase italic tracking-tighter">{market.name}</h3>
                  </div>
                  <span className="text-brand-GOLD font-black text-sm whitespace-nowrap ml-4">{market.price}</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{market.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY BUY */}
        <section className="py-24 border-t border-brand-100">
          <div className="text-center mb-20">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
              {isEn ? 'Key Advantages' : 'Ventajas Clave'}
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-brand-950 tracking-tighter uppercase italic leading-[0.8]">
              {content.whyTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.reasons.map((reason, i) => (
              <div key={i} className="card-light p-10 rounded-[3rem] border-brand-100 hover:border-brand-GOLD/40 transition-all group">
                <reason.icon className="text-brand-GOLD mb-8 group-hover:scale-125 transition-transform" size={40} />
                <h3 className="text-xl font-black text-brand-950 mb-4 uppercase italic tracking-tighter">{reason.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BUYING PROCESS */}
        <section className="py-24 border-t border-brand-100">
          <div className="text-center mb-20">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
              {isEn ? 'Step by Step' : 'Paso a Paso'}
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-brand-950 tracking-tighter uppercase italic leading-[0.8]">
              {content.processTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.steps.map((step, i) => (
              <div key={i} className="card-light p-10 rounded-3xl border-brand-100">
                <span className="text-6xl font-black text-brand-GOLD/20 block mb-4">{step.step}</span>
                <h3 className="text-xl font-black text-brand-950 mb-4 uppercase italic tracking-tighter">{step.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TAX BENEFITS */}
        <section className="py-24 border-t border-brand-100 max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
              {isEn ? 'Tax Advantages' : 'Ventajas Fiscales'}
            </span>
            <h2 className="text-5xl md:text-6xl font-heading font-black text-brand-950 tracking-tighter uppercase italic leading-[0.8] mb-12">
              {content.taxTitle}
            </h2>
          </div>
          <div className="space-y-6">
            {content.taxPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-5">
                <CheckCircle className="text-brand-GOLD mt-1 flex-shrink-0" size={22} />
                <p className="text-slate-500 font-medium leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RELATED GUIDES */}
        <section className="py-24 border-t border-brand-100">
          <div className="text-center mb-16">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
              {isEn ? 'Go Deeper' : 'Profundice'}
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-brand-950 tracking-tighter uppercase italic leading-[0.8]">
              {content.guidesTitle}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.guides.map((guide, i) => (
              <Link
                key={i}
                href={`/${lang}/guides/${guide.href}`}
                className="card-light p-8 rounded-3xl border-brand-100 hover:border-brand-GOLD/40 transition-all group flex items-center justify-between"
              >
                <span className="text-white font-black uppercase italic tracking-tight text-sm group-hover:text-brand-GOLD transition-colors">{guide.label}</span>
                <ArrowRight className="text-brand-GOLD flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-brand-GOLD text-brand-950 rounded-[6rem] text-center px-10">
          <Home className="mx-auto mb-12" size={72} />
          <h2 className="text-5xl md:text-8xl font-heading font-black mb-12 tracking-tighter uppercase italic leading-[0.8]">
            {content.ctaTitle}
          </h2>
          <p className="text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed italic opacity-80">{content.ctaDesc}</p>
          <div className="flex flex-wrap justify-center gap-8">
            <Magnetic strength={0.4}>
              <Link
                href={`/${lang}/propiedades`}
                className="btn-3d btn-3d-navy px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs shadow-2xl"
              >
                {isEn ? 'Browse Properties' : 'Ver Propiedades'} <ArrowRight className="inline ml-2" size={16} />
              </Link>
            </Magnetic>
            <Magnetic strength={0.4}>
              <Link
                href={`/${lang}/contacto`}
                className="btn-3d btn-3d-gold px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs"
              >
                {isEn ? 'Speak to an Advisor' : 'Hablar con un Asesor'}
              </Link>
            </Magnetic>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PanamaRealEstatePage;
