'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, DollarSign, Shield, FileText, Globe, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Magnetic from '@/components/ui/Magnetic';

const PanamaRealEstateForExpatsContent = () => {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const content = {
    badge: isEn ? 'Expat Property Guide 2026' : 'Guía de Propiedades para Expats 2026',
    title: isEn ? 'Panama Real Estate for Expats' : 'Bienes Raíces en Panamá para Expats',
    subtitle: isEn
      ? 'Own property in one of Latin America\'s most stable markets. Full foreign ownership rights, USD-denominated prices, and a booming expat community await you.'
      : 'Sea propietario en uno de los mercados más estables de América Latina. Derechos plenos de propiedad extranjera, precios en dólares y una vibrante comunidad de expats.',
    intro: isEn
      ? 'Panama is one of the few countries in the world where foreigners enjoy the same property ownership rights as citizens. Whether you\'re a retiree seeking a beachfront retreat, a digital nomad investing in a city apartment, or a family relocating for a better quality of life, Panama real estate for expats offers unmatched value. With no restrictions on foreign ownership, a dollarized economy, and property prices well below comparable North American or European markets, Panama has attracted over 100,000 expat property owners in recent years.'
      : 'Panamá es uno de los pocos países del mundo donde los extranjeros tienen los mismos derechos de propiedad que los ciudadanos. Ya sea que sea un jubilado que busca un retiro en la playa, un nómada digital que invierte en un apartamento en la ciudad o una familia que se muda por una mejor calidad de vida, los bienes raíces en Panamá para expats ofrecen un valor incomparable.',
    whyTitle: isEn ? 'Why Expats Buy in Panama' : 'Por Qué los Expats Compran en Panamá',
    reasons: [
      {
        icon: Globe,
        title: isEn ? 'Equal Ownership Rights' : 'Derechos Igualitarios de Propiedad',
        desc: isEn
          ? 'Foreigners own titled property with identical legal rights as Panamanian citizens. No restrictions, no special permits required for most properties.'
          : 'Los extranjeros poseen propiedades con títulos con derechos legales idénticos a los ciudadanos panameños. Sin restricciones ni permisos especiales para la mayoría de propiedades.',
      },
      {
        icon: DollarSign,
        title: isEn ? 'USD Economy' : 'Economía en Dólares',
        desc: isEn
          ? 'Panama uses the US dollar, eliminating currency risk for American buyers and making financial planning simple and predictable.'
          : 'Panamá usa el dólar estadounidense, eliminando el riesgo cambiario para compradores americanos y haciendo la planificación financiera simple y predecible.',
      },
      {
        icon: TrendingUp,
        title: isEn ? 'Strong Appreciation' : 'Fuerte Apreciación',
        desc: isEn
          ? 'Panama City has seen consistent 5–8% annual appreciation in prime neighborhoods like Casco Viejo, Punta Pacifica, and Costa del Este.'
          : 'Ciudad de Panamá ha visto una apreciación anual consistente del 5–8% en vecindarios principales como Casco Viejo, Punta Pacífica y Costa del Este.',
      },
      {
        icon: Shield,
        title: isEn ? 'Legal Security' : 'Seguridad Legal',
        desc: isEn
          ? 'Panama\'s Torrens title system provides strong legal protection for property owners. Your deed is registered with the Public Registry and fully enforceable.'
          : 'El sistema de título Torrens de Panamá proporciona una fuerte protección legal para los propietarios. Su escritura está registrada en el Registro Público y es completamente ejecutable.',
      },
    ],
    marketsTitle: isEn ? 'Top Markets for Expat Buyers' : 'Principales Mercados para Compradores Expats',
    markets: [
      {
        name: 'Panama City',
        type: isEn ? 'Urban Investment' : 'Inversión Urbana',
        price: isEn ? '$150K – $800K' : '$150K – $800K',
        desc: isEn
          ? 'Condos, apartments, and penthouses in Punta Pacifica, El Cangrejo, Costa del Este. Hub of the Americas with world-class amenities.'
          : 'Condos, apartamentos y penthouses en Punta Pacífica, El Cangrejo, Costa del Este. Centro de las Américas con comodidades de clase mundial.',
      },
      {
        name: 'Boquete',
        type: isEn ? 'Mountain Retreat' : 'Retiro en la Montaña',
        price: isEn ? '$120K – $500K' : '$120K – $500K',
        desc: isEn
          ? 'Panama\'s top expat destination. Coffee farms, cool climate, and a thriving English-speaking community of retirees and remote workers.'
          : 'El principal destino expat de Panamá. Cafetales, clima fresco y una próspera comunidad de habla inglesa de jubilados y trabajadores remotos.',
      },
      {
        name: 'Coronado',
        type: isEn ? 'Beach Living' : 'Vida en la Playa',
        price: isEn ? '$100K – $400K' : '$100K – $400K',
        desc: isEn
          ? 'Panama\'s largest expat beach community. 90 minutes from Panama City, with golf courses, grocery stores, and a strong rental market.'
          : 'La comunidad de playa expat más grande de Panamá. A 90 minutos de Ciudad de Panamá, con campos de golf, supermercados y un fuerte mercado de alquileres.',
      },
      {
        name: 'Bocas del Toro',
        type: isEn ? 'Island Paradise' : 'Paraíso Isleño',
        price: isEn ? '$80K – $350K' : '$80K – $350K',
        desc: isEn
          ? 'Caribbean island living at an accessible price point. Popular with younger expats and investors seeking vacation rental income.'
          : 'Vida en isla caribeña a un precio accesible. Popular entre expats más jóvenes e inversores que buscan ingresos por alquiler vacacional.',
      },
    ],
    processTitle: isEn ? 'The Buying Process for Expats' : 'El Proceso de Compra para Expats',
    steps: [
      {
        step: '01',
        title: isEn ? 'Find Your Property' : 'Encuentre Su Propiedad',
        desc: isEn
          ? 'Work with a licensed Panamanian real estate agent. Browse listings via our platform or visit in person during a discovery tour.'
          : 'Trabaje con un agente inmobiliario panameño con licencia. Explore listados en nuestra plataforma o visite en persona durante un tour de descubrimiento.',
      },
      {
        step: '02',
        title: isEn ? 'Due Diligence' : 'Debida Diligencia',
        desc: isEn
          ? 'A Panamanian attorney verifies the title is clean and free of liens. This typically takes 1–2 weeks and costs $500–$1,500.'
          : 'Un abogado panameño verifica que el título esté limpio y libre de gravámenes. Esto generalmente toma 1–2 semanas y cuesta $500–$1,500.',
      },
      {
        step: '03',
        title: isEn ? 'Purchase Agreement' : 'Acuerdo de Compra',
        desc: isEn
          ? 'A promissory contract (Promesa de Compraventa) is signed, typically with a 10% deposit to secure the property.'
          : 'Se firma un contrato de promesa (Promesa de Compraventa), típicamente con un depósito del 10% para asegurar la propiedad.',
      },
      {
        step: '04',
        title: isEn ? 'Closing & Title Transfer' : 'Cierre y Transferencia de Título',
        desc: isEn
          ? 'The deed (escritura) is signed before a Panamanian notary and registered with the Public Registry. Closing costs run 2–4% of the purchase price.'
          : 'La escritura se firma ante un notario panameño y se registra en el Registro Público. Los costos de cierre rondan el 2–4% del precio de compra.',
      },
    ],
    taxTitle: isEn ? 'Tax Benefits for Foreign Property Owners' : 'Beneficios Fiscales para Propietarios Extranjeros',
    taxPoints: isEn
      ? [
          'New construction properties are exempt from property tax for up to 20 years.',
          'No capital gains tax on primary residences held more than 2 years.',
          'Panama taxes only locally-sourced income — foreign income is tax-free.',
          'Property transfer tax is just 2% of the registered value.',
        ]
      : [
          'Las propiedades de nueva construcción están exentas del impuesto sobre la propiedad por hasta 20 años.',
          'Sin impuesto sobre las ganancias de capital en residencias principales mantenidas más de 2 años.',
          'Panamá grava únicamente los ingresos de fuente local — los ingresos extranjeros están libres de impuestos.',
          'El impuesto de transferencia de propiedad es solo el 2% del valor registrado.',
        ],
    ctaTitle: isEn ? 'Find Your Panama Property' : 'Encuentre Su Propiedad en Panamá',
    ctaDesc: isEn
      ? 'Browse our curated listings of expat-friendly properties across Panama City, Boquete, Coronado, and Bocas del Toro.'
      : 'Explore nuestros listados curados de propiedades para expats en Ciudad de Panamá, Boquete, Coronado y Bocas del Toro.',
    ctaButton: isEn ? 'Browse Properties' : 'Ver Propiedades',
    ctaButton2: isEn ? 'Book a Discovery Tour' : 'Reserve un Tour de Descubrimiento',
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
              {isEn ? 'Panama Real Estate' : 'Bienes Raíces'} <br />
              <span className="text-brand-GOLD">{isEn ? 'For Expats' : 'Para Expats'}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed mb-16 italic">
              {content.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Magnetic strength={0.3}>
                <Link href={`/${lang}/propiedades`} className="btn-3d btn-3d-gold px-12 py-7 rounded-xl font-black uppercase tracking-widest text-[11px]">
                  {content.ctaButton}
                </Link>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Link href={`/${lang}/relocation/tours`} className="btn-3d btn-3d-navy px-12 py-7 rounded-xl font-black uppercase tracking-widest text-[11px] bg-white/5 backdrop-blur-3xl border border-brand-100">
                  {content.ctaButton2}
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </section>

        {/* INTRO */}
        <section className="py-24 border-t border-brand-100 max-w-4xl mx-auto">
          <p className="text-xl text-slate-600 leading-relaxed font-medium">{content.intro}</p>
        </section>

        {/* WHY BUY */}
        <section className="py-24 border-t border-brand-100">
          <div className="text-center mb-20">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">Key Advantages</span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-brand-950 tracking-tighter uppercase italic leading-[0.8]">{content.whyTitle}</h2>
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

        {/* TOP MARKETS */}
        <section className="py-24 border-t border-brand-100">
          <div className="text-center mb-20">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">Where to Buy</span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-brand-950 tracking-tighter uppercase italic leading-[0.8]">{content.marketsTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {content.markets.map((market, i) => (
              <div key={i} className="card-light p-10 rounded-3xl border-brand-100 hover:border-brand-GOLD/30 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-2">{market.type}</p>
                    <h3 className="text-3xl font-black text-brand-950 uppercase italic tracking-tighter">{market.name}</h3>
                  </div>
                  <span className="text-brand-GOLD font-black text-lg">{market.price}</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{market.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BUYING PROCESS */}
        <section className="py-24 border-t border-brand-100">
          <div className="text-center mb-20">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">Step by Step</span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-brand-950 tracking-tighter uppercase italic leading-[0.8]">{content.processTitle}</h2>
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
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">Tax Advantages</span>
            <h2 className="text-5xl md:text-6xl font-heading font-black text-brand-950 tracking-tighter uppercase italic leading-[0.8] mb-12">{content.taxTitle}</h2>
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

        {/* CTA */}
        <section className="py-24 bg-brand-GOLD text-brand-950 rounded-[6rem] text-center px-10">
          <Home className="mx-auto mb-12" size={72} />
          <h2 className="text-5xl md:text-8xl font-heading font-black mb-12 tracking-tighter uppercase italic leading-[0.8]">{content.ctaTitle}</h2>
          <p className="text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed italic opacity-80">{content.ctaDesc}</p>
          <div className="flex flex-wrap justify-center gap-8">
            <Magnetic strength={0.4}>
              <Link href={`/${lang}/propiedades`} className="btn-3d btn-3d-navy px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs shadow-2xl">
                {content.ctaButton} <ArrowRight className="inline ml-2" size={16} />
              </Link>
            </Magnetic>
            <Magnetic strength={0.4}>
              <Link href={`/${lang}/contacto`} className="btn-3d btn-3d-gold bg-white text-white px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs">
                {isEn ? 'Contact an Advisor' : 'Contactar un Asesor'}
              </Link>
            </Magnetic>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PanamaRealEstateForExpatsContent;
