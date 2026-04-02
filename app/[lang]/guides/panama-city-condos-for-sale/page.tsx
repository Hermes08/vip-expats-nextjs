'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building, DollarSign, MapPin, TrendingUp, Wifi, Car, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Magnetic from '@/components/ui/Magnetic';

const PanamaCityCondosForSalePage = () => {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const content = {
    badge: isEn ? 'Condo Buyer Guide 2026' : 'Guía de Compradores de Condos 2026',
    title: isEn ? 'Panama City Condos for Sale' : 'Condos en Venta en Ciudad de Panamá',
    subtitle: isEn
      ? 'Modern high-rise condos in one of Latin America\'s most vibrant skylines — at prices 40–60% below comparable US or European cities.'
      : 'Condos modernos de gran altura en uno de los horizontes más vibrantes de América Latina, a precios un 40–60% por debajo de ciudades comparables de EE. UU. o Europa.',
    intro: isEn
      ? 'Panama City, Panama — not to be confused with Panama City, Florida — is a modern, cosmopolitan capital with a dramatic skyline, world-class amenities, and one of the most dynamic condo markets in Latin America. For expats, retirees, and international investors, Panama City condos for sale represent an extraordinary combination of value, lifestyle, and long-term appreciation. With neighborhoods like Punta Pacifica, Costa del Este, El Cangrejo, and San Francisco offering everything from oceanfront penthouses to affordable entry-level investments, Panama City has something for every type of buyer.'
      : 'Ciudad de Panamá — no confundir con Panama City, Florida — es una capital moderna y cosmopolita con un dramático horizonte, comodidades de clase mundial y uno de los mercados de condos más dinámicos de América Latina.',
    neighborhoodsTitle: isEn ? 'Top Neighborhoods for Condo Buyers' : 'Principales Vecindarios para Compradores de Condos',
    neighborhoods: [
      {
        name: 'Punta Pacifica',
        type: isEn ? 'Ultra-Premium' : 'Ultra-Premium',
        price: isEn ? '$250K – $2M+' : '$250K – $2M+',
        desc: isEn
          ? 'Panama\'s most prestigious address. Oceanfront towers, Hospital Punta Pacifica (Johns Hopkins affiliate), luxury malls, and panoramic Bay of Panama views. Popular with executives, diplomats, and high-net-worth expats.'
          : 'La dirección más prestigiosa de Panamá. Torres frente al mar, Hospital Punta Pacífica (afiliado de Johns Hopkins), centros comerciales de lujo y vistas panorámicas de la Bahía de Panamá.',
      },
      {
        name: 'Costa del Este',
        type: isEn ? 'Business District' : 'Distrito de Negocios',
        price: isEn ? '$180K – $800K' : '$180K – $800K',
        desc: isEn
          ? 'Panama\'s financial hub and fastest-growing condo market. Master-planned community with wide boulevards, international schools, and premium shopping. Ideal for families and corporate expats.'
          : 'El centro financiero de Panamá y el mercado de condos de más rápido crecimiento. Comunidad planificada con amplios bulevares, escuelas internacionales y compras de primera.',
      },
      {
        name: 'El Cangrejo',
        type: isEn ? 'Walkable Expat Hub' : 'Centro Expat Caminable',
        price: isEn ? '$120K – $350K' : '$120K – $350K',
        desc: isEn
          ? 'The most walkable neighborhood in Panama City. Dense with restaurants, cafés, supermarkets, and cultural venues. Highly popular with younger expats and digital nomads seeking urban convenience at accessible prices.'
          : 'El vecindario más caminable de Ciudad de Panamá. Lleno de restaurantes, cafés, supermercados y lugares culturales. Muy popular entre expats jóvenes y nómadas digitales.',
      },
      {
        name: 'San Francisco',
        type: isEn ? 'Mid-Range Value' : 'Valor Intermedio',
        price: isEn ? '$100K – $300K' : '$100K – $300K',
        desc: isEn
          ? 'A large, established neighborhood with a mix of older and new construction condos. Close to Cinta Costera (ocean boulevard), Multiplaza, and major hospitals. Strong rental demand from locals and expats.'
          : 'Un vecindario grande y consolidado con una mezcla de condos antiguos y de nueva construcción. Cerca de la Cinta Costera, Multiplaza y los principales hospitales.',
      },
      {
        name: 'Casco Viejo',
        type: isEn ? 'Heritage Investment' : 'Inversión Patrimonial',
        price: isEn ? '$150K – $600K' : '$150K – $600K',
        desc: isEn
          ? 'Panama\'s UNESCO World Heritage historic district is undergoing rapid gentrification. Boutique condo renovations in 19th-century buildings. Strong Airbnb and short-term rental income potential.'
          : 'El distrito histórico Patrimonio de la Humanidad de la UNESCO de Panamá está experimentando una rápida gentrificación. Renovaciones de condos boutique en edificios del siglo XIX.',
      },
      {
        name: 'Avenida Balboa',
        type: isEn ? 'Oceanfront Living' : 'Vida Frente al Océano',
        price: isEn ? '$140K – $500K' : '$140K – $500K',
        desc: isEn
          ? 'Iconic Panama City boulevard running along the Bay of Panama. High-rise condos with sweeping ocean views, walking access to the Cinta Costera promenade and Casco Viejo.'
          : 'Icónico bulevar de Ciudad de Panamá a lo largo de la Bahía de Panamá. Condos de gran altura con amplias vistas al océano y acceso a pie al paseo de la Cinta Costera.',
      },
    ],
    featuresTitle: isEn ? 'What to Expect in a Panama City Condo' : 'Qué Esperar de un Condo en Ciudad de Panamá',
    features: [
      {
        icon: Building,
        title: isEn ? 'High-Rise Living' : 'Vida en Rascacielos',
        desc: isEn ? 'Most premium condos are in towers of 20–70 floors with panoramic city and ocean views.' : 'La mayoría de los condos premium están en torres de 20–70 pisos con vistas panorámicas.',
      },
      {
        icon: Wifi,
        title: isEn ? 'Fiber Optic Internet' : 'Internet de Fibra Óptica',
        desc: isEn ? 'Panama City has excellent fiber coverage — 300Mbps+ plans widely available at $40–$80/month.' : 'Ciudad de Panamá tiene excelente cobertura de fibra — planes de más de 300Mbps disponibles ampliamente.',
      },
      {
        icon: Car,
        title: isEn ? 'Covered Parking' : 'Estacionamiento Cubierto',
        desc: isEn ? 'Most buildings include 1–2 assigned parking spaces and 24-hour security.' : 'La mayoría de los edificios incluyen 1–2 espacios de estacionamiento asignados y seguridad 24 horas.',
      },
      {
        icon: TrendingUp,
        title: isEn ? 'Appreciation Potential' : 'Potencial de Apreciación',
        desc: isEn ? 'Prime zones like Punta Pacifica have seen 5–8% annual appreciation over the past decade.' : 'Las zonas principales como Punta Pacífica han visto una apreciación anual del 5–8% en la última década.',
      },
    ],
    buyingTitle: isEn ? 'Buying a Condo in Panama City: Key Facts' : 'Comprar un Condo en Ciudad de Panamá: Datos Clave',
    facts: isEn
      ? [
          'No restrictions on foreign ownership of titled condos in Panama City.',
          'New construction condos often offer 20-year property tax exemptions.',
          'HOA (monthly maintenance) fees typically run $200–$600/month depending on building amenities.',
          'Closing costs run approximately 5–8% of the purchase price.',
          'Panama uses the US dollar — no currency risk for American buyers.',
          'A Panamanian attorney should handle title due diligence before any purchase.',
          'Many buildings allow short-term (Airbnb-style) rentals — confirm with the HOA before purchasing as an investment.',
        ]
      : [
          'Sin restricciones a la propiedad extranjera de condos con título en Ciudad de Panamá.',
          'Los condos de nueva construcción suelen ofrecer exenciones de impuesto predial de 20 años.',
          'Las cuotas de HOA (mantenimiento mensual) suelen ser de $200–$600/mes dependiendo de las amenidades.',
          'Los costos de cierre rondan el 5–8% del precio de compra.',
          'Panamá usa el dólar estadounidense — sin riesgo cambiario para compradores americanos.',
        ],
    ctaTitle: isEn ? 'Browse Panama City Condos' : 'Explorar Condos en Ciudad de Panamá',
    ctaDesc: isEn
      ? 'View our curated selection of condos for sale across Panama City\'s most sought-after neighborhoods.'
      : 'Vea nuestra selección curada de condos en venta en los vecindarios más buscados de Ciudad de Panamá.',
  };

  return (
    <div className="bg-brand-950 min-h-screen pt-24 pb-40 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] bg-brand-GOLD/5 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HERO */}
        <section className="py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">{content.badge}</span>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-10 tracking-tighter uppercase italic leading-[0.85]">
              {isEn ? 'Panama City' : 'Ciudad de Panamá'} <br />
              <span className="text-brand-GOLD">{isEn ? 'Condos For Sale' : 'Condos en Venta'}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed mb-16 italic">{content.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-8">
              <Magnetic strength={0.3}>
                <Link href={`/${lang}/propiedades`} className="btn-3d btn-3d-gold px-12 py-7 rounded-xl font-black uppercase tracking-widest text-[11px]">
                  {isEn ? 'Browse Condos' : 'Ver Condos'}
                </Link>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Link href={`/${lang}/contacto`} className="btn-3d btn-3d-navy px-12 py-7 rounded-xl font-black uppercase tracking-widest text-[11px] bg-white/5 backdrop-blur-3xl border border-white/10">
                  {isEn ? 'Get Expert Advice' : 'Obtener Consejo Experto'}
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </section>

        {/* INTRO */}
        <section className="py-24 border-t border-white/5 max-w-4xl mx-auto">
          <p className="text-xl text-slate-300 leading-relaxed font-medium">{content.intro}</p>
        </section>

        {/* NEIGHBORHOODS */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-20">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">Where to Buy</span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter uppercase italic leading-[0.8]">{content.neighborhoodsTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.neighborhoods.map((n, i) => (
              <div key={i} className="glass-card p-10 rounded-3xl border-white/5 hover:border-brand-GOLD/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">{n.type}</p>
                  <span className="text-brand-GOLD font-black text-sm">{n.price}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter">{n.name}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-20">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">What's Included</span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter uppercase italic leading-[0.8]">{content.featuresTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.features.map((feature, i) => (
              <div key={i} className="glass-card p-10 rounded-[3rem] border-white/5 hover:border-brand-GOLD/30 transition-all group">
                <feature.icon className="text-brand-GOLD mb-8 group-hover:scale-125 transition-transform" size={40} />
                <h3 className="text-xl font-black text-white mb-4 uppercase italic tracking-tighter">{feature.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* KEY FACTS */}
        <section className="py-24 border-t border-white/5 max-w-4xl mx-auto">
          <div className="mb-12">
            <MapPin className="text-brand-GOLD mb-6" size={36} />
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-10">{content.buyingTitle}</h2>
          </div>
          <div className="space-y-5">
            {content.facts.map((fact, i) => (
              <div key={i} className="flex items-start gap-5">
                <CheckCircle className="text-brand-GOLD mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-300 font-medium leading-relaxed">{fact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-brand-GOLD text-brand-950 rounded-[6rem] text-center px-10">
          <Building className="mx-auto mb-12" size={72} />
          <h2 className="text-5xl md:text-8xl font-heading font-black mb-12 tracking-tighter uppercase italic leading-[0.8]">{content.ctaTitle}</h2>
          <p className="text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed italic opacity-80">{content.ctaDesc}</p>
          <div className="flex flex-wrap justify-center gap-8">
            <Magnetic strength={0.4}>
              <Link href={`/${lang}/propiedades`} className="btn-3d btn-3d-navy px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs shadow-2xl">
                {isEn ? 'Browse Condos' : 'Ver Condos'} <ArrowRight className="inline ml-2" size={16} />
              </Link>
            </Magnetic>
            <Magnetic strength={0.4}>
              <Link href={`/${lang}/guides/buying-property-panama-us-citizens`} className="btn-3d btn-3d-gold bg-brand-950 text-white px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs">
                {isEn ? 'Buyer\'s Guide' : 'Guía del Comprador'}
              </Link>
            </Magnetic>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PanamaCityCondosForSalePage;
