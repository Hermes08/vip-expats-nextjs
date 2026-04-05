'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, MapPin, Home, Users, CheckCircle, AlertCircle, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Magnetic from '@/components/ui/Magnetic';

const SafestNeighborhoodsPanamaCityContent = () => {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const content = {
    badge: isEn ? 'Safety & Neighborhoods Guide 2026' : 'Guía de Seguridad y Vecindarios 2026',
    title: isEn ? 'Safest Neighborhoods in Panama City' : 'Vecindarios Más Seguros de Ciudad de Panamá',
    subtitle: isEn
      ? 'Panama City, Panama offers some of the most secure, expat-friendly neighborhoods in Central America — with world-class amenities and a welcoming international community.'
      : 'Ciudad de Panamá ofrece algunos de los vecindarios más seguros y amigables para expats en América Central, con comodidades de clase mundial y una comunidad internacional acogedora.',
    intro: isEn
      ? 'Panama City, Panama (not Panama City, Florida) is widely regarded as one of the safest capitals in Latin America for expatriates. While no city is without risk, the expat-popular neighborhoods of Panama City feature 24/7 private security, gated residential towers, well-lit streets, and strong communities of international residents. Understanding which neighborhoods offer the best safety record, infrastructure, and lifestyle for your needs is the first step to a successful relocation.'
      : 'Ciudad de Panamá (no confundir con Panama City, Florida) es ampliamente considerada una de las capitales más seguras de América Latina para los expatriados. Si bien ninguna ciudad está exenta de riesgos, los vecindarios populares entre los expats cuentan con seguridad privada 24/7, torres residenciales con acceso controlado y calles bien iluminadas.',
    neighborhoodsTitle: isEn ? 'Safest Neighborhoods for Expats' : 'Vecindarios Más Seguros para Expats',
    neighborhoods: [
      {
        rank: '01',
        name: 'Punta Pacifica',
        safety: isEn ? 'Excellent' : 'Excelente',
        desc: isEn
          ? 'Consistently rated the safest neighborhood in Panama City. A gated peninsula with luxury high-rises, private security in every building, and 24/7 CCTV coverage. Home to Johns Hopkins-affiliated Hospital Punta Pacifica, high-end malls, and international restaurants. Virtually zero street crime.'
          : 'Calificado consistentemente como el vecindario más seguro de Ciudad de Panamá. Una península cerrada con rascacielos de lujo, seguridad privada en cada edificio y cobertura CCTV 24/7. Alberga el Hospital Punta Pacífica afiliado a Johns Hopkins.',
        forWho: isEn ? 'Families, retirees, executives' : 'Familias, jubilados, ejecutivos',
      },
      {
        rank: '02',
        name: 'Costa del Este',
        safety: isEn ? 'Excellent' : 'Excelente',
        desc: isEn
          ? 'A master-planned business and residential district in eastern Panama City. Wide, well-lit boulevards, private residential communities, international schools, and corporate office towers. One of the fastest-growing neighborhoods, attracting Panama\'s upper-middle and upper classes alongside expat families.'
          : 'Un distrito empresarial y residencial planificado en el este de Ciudad de Panamá. Amplios bulevares bien iluminados, comunidades residenciales privadas, escuelas internacionales y torres de oficinas corporativas.',
        forWho: isEn ? 'Families, corporate expats' : 'Familias, expats corporativos',
      },
      {
        rank: '03',
        name: 'Santa María',
        safety: isEn ? 'Excellent' : 'Excelente',
        desc: isEn
          ? 'One of Panama\'s newest master-planned communities, featuring a championship golf course, luxury homes, and condos within a fully gated perimeter. High-end, family-oriented, and extremely secure. Preferred by diplomats and senior executives.'
          : 'Una de las comunidades planificadas más nuevas de Panamá, con un campo de golf de campeonato, casas de lujo y condos dentro de un perímetro totalmente cerrado. Orientada a familias y extremadamente segura.',
        forWho: isEn ? 'Luxury buyers, diplomats' : 'Compradores de lujo, diplomáticos',
      },
      {
        rank: '04',
        name: 'El Cangrejo',
        safety: isEn ? 'Good' : 'Buena',
        desc: isEn
          ? 'The most walkable, urban expat neighborhood in Panama City. Generally safe during daylight hours with a vibrant street scene, restaurants, and cafés. Standard urban precautions apply at night. Very popular with digital nomads and younger expats for its convenience and social life.'
          : 'El vecindario expat urbano más caminable de Ciudad de Panamá. Generalmente seguro durante el día con una vibrante escena callejera, restaurantes y cafés. Se aplican precauciones urbanas estándar por la noche.',
        forWho: isEn ? 'Digital nomads, young expats' : 'Nómadas digitales, expats jóvenes',
      },
      {
        rank: '05',
        name: 'San Francisco',
        safety: isEn ? 'Good' : 'Buena',
        desc: isEn
          ? 'A large, established residential district popular with middle-class Panamanians and expats alike. Close to Cinta Costera and Multiplaza. Generally safe, especially in the newer high-rise condo buildings with gated lobbies and security personnel.'
          : 'Un gran distrito residencial establecido, popular entre panameños de clase media y expats. Cercano a la Cinta Costera y Multiplaza. Generalmente seguro, especialmente en los nuevos edificios de condos de gran altura.',
        forWho: isEn ? 'All expats, value buyers' : 'Todos los expats, compradores de valor',
      },
      {
        rank: '06',
        name: 'Casco Viejo',
        safety: isEn ? 'Improving' : 'En Mejora',
        desc: isEn
          ? 'Panama\'s UNESCO World Heritage historic district has undergone major gentrification. The core tourist and expat area around Plaza Bolívar and Calle Uruguay is safe and lively. However, exercise caution near the borders with El Chorrillo neighborhood. Ideal for investors and urban culture enthusiasts.'
          : 'El distrito histórico Patrimonio de la Humanidad de la UNESCO de Panamá ha experimentado una importante gentrificación. La zona central turística y de expats es segura y animada. Sin embargo, tenga precaución cerca de los límites con El Chorrillo.',
        forWho: isEn ? 'Investors, urban explorers' : 'Inversores, exploradores urbanos',
      },
    ],
    avoidTitle: isEn ? 'Areas to Approach with Caution' : 'Áreas que Requieren Precaución',
    avoidAreas: isEn
      ? [
          'El Chorrillo: Adjacent to Casco Viejo. High crime rates, avoid at night.',
          'Curundú: One of the city\'s most impoverished areas. Not recommended for expats.',
          'San Miguelito: A large suburban municipality north of the city. Some areas are safe; others require local knowledge.',
          'Tocumen: Area around the international airport — budget hotels, not a residential recommendation.',
        ]
      : [
          'El Chorrillo: Adyacente a Casco Viejo. Altas tasas de criminalidad, evitar de noche.',
          'Curundú: Una de las zonas más empobrecidas de la ciudad. No recomendado para expats.',
          'San Miguelito: Gran municipio suburbano al norte de la ciudad. Algunas zonas son seguras; otras requieren conocimiento local.',
        ],
    tipsTitle: isEn ? 'Safety Tips for Expats in Panama City' : 'Consejos de Seguridad para Expats en Ciudad de Panamá',
    tips: isEn
      ? [
          'Live in buildings with 24/7 security and access control — most mid-to-high-end condos offer this.',
          'Use Uber or InDriver for transportation — taxis hailed on the street carry more risk.',
          'Be discreet with valuables, laptops, and smartphones in public spaces.',
          'Join local expat Facebook groups (Panama Expats, Panama City Social Club) for real-time safety updates.',
          'Register with the US Embassy in Panama for travel alerts and emergency assistance.',
          'Trust your instincts — if a street or situation feels off, move on.',
        ]
      : [
          'Viva en edificios con seguridad 24/7 y control de acceso.',
          'Use Uber o InDriver para transporte — los taxis en la calle conllevan más riesgo.',
          'Sea discreto con artículos de valor, laptops y smartphones en espacios públicos.',
          'Únase a grupos de expats en Facebook para actualizaciones de seguridad en tiempo real.',
          'Regístrese en la Embajada de EE. UU. en Panamá para alertas de viaje.',
        ],
    ctaTitle: isEn ? 'Find Your Safe Panama City Home' : 'Encuentre Su Hogar Seguro en Ciudad de Panamá',
    ctaDesc: isEn
      ? 'Browse properties in Panama City\'s safest, most expat-friendly neighborhoods — curated for international buyers and renters.'
      : 'Explore propiedades en los vecindarios más seguros y amigables para expats de Ciudad de Panamá.',
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-40 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] bg-brand-GOLD/5 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HERO */}
        <section className="py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">{content.badge}</span>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-brand-950 mb-10 tracking-tighter uppercase italic leading-[0.85]">
              {isEn ? 'Safest Neighborhoods' : 'Vecindarios Más Seguros'} <br />
              <span className="text-brand-GOLD">{isEn ? 'Panama City' : 'Ciudad de Panamá'}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed mb-16 italic">{content.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-8">
              <Magnetic strength={0.3}>
                <Link href={`/${lang}/propiedades`} className="btn-3d btn-3d-gold px-12 py-7 rounded-xl font-black uppercase tracking-widest text-[11px]">
                  {isEn ? 'Browse Properties' : 'Ver Propiedades'}
                </Link>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Link href={`/${lang}/relocation/tours`} className="btn-3d btn-3d-navy px-12 py-7 rounded-xl font-black uppercase tracking-widest text-[11px] bg-white/5 backdrop-blur-3xl border border-brand-100">
                  {isEn ? 'Neighborhood Tour' : 'Tour de Vecindarios'}
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </section>

        {/* INTRO */}
        <section className="py-24 border-t border-brand-100 max-w-4xl mx-auto">
          <p className="text-xl text-slate-600 leading-relaxed font-medium">{content.intro}</p>
        </section>

        {/* NEIGHBORHOODS */}
        <section className="py-24 border-t border-brand-100">
          <div className="text-center mb-20">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">Ranked by Safety</span>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-brand-950 tracking-tighter uppercase italic leading-[0.8]">{content.neighborhoodsTitle}</h2>
          </div>
          <div className="space-y-6">
            {content.neighborhoods.map((n, i) => (
              <div key={i} className="card-light p-10 md:p-12 rounded-3xl border-brand-100 hover:border-brand-GOLD/20 transition-all grid md:grid-cols-[auto_1fr_auto] gap-8 items-start">
                <span className="text-6xl font-black text-brand-GOLD/20">{n.rank}</span>
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-2xl font-black text-brand-950 uppercase italic tracking-tighter">{n.name}</h3>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD border border-brand-GOLD/30 px-3 py-1 rounded-full">{n.safety}</span>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed">{n.desc}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-1">{isEn ? 'Best For' : 'Ideal Para'}</p>
                  <p className="text-slate-500 font-medium text-sm">{n.forWho}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AREAS TO AVOID */}
        <section className="py-24 border-t border-brand-100 max-w-4xl mx-auto">
          <div className="mb-10">
            <AlertCircle className="text-amber-400 mb-6" size={36} />
            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-950 tracking-tighter uppercase italic leading-[0.85] mb-10">{content.avoidTitle}</h2>
          </div>
          <div className="space-y-5">
            {content.avoidAreas.map((area, i) => (
              <div key={i} className="flex items-start gap-5">
                <AlertCircle className="text-amber-400 mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-500 font-medium leading-relaxed">{area}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SAFETY TIPS */}
        <section className="py-24 border-t border-brand-100 max-w-4xl mx-auto">
          <div className="mb-12">
            <Shield className="text-brand-GOLD mb-6" size={36} />
            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-950 tracking-tighter uppercase italic leading-[0.85] mb-10">{content.tipsTitle}</h2>
          </div>
          <div className="space-y-5">
            {content.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-5">
                <CheckCircle className="text-brand-GOLD mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-500 font-medium leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-brand-GOLD text-brand-950 rounded-[6rem] text-center px-10">
          <Shield className="mx-auto mb-12" size={72} />
          <h2 className="text-5xl md:text-8xl font-heading font-black mb-12 tracking-tighter uppercase italic leading-[0.8]">{content.ctaTitle}</h2>
          <p className="text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed italic opacity-80">{content.ctaDesc}</p>
          <div className="flex flex-wrap justify-center gap-8">
            <Magnetic strength={0.4}>
              <Link href={`/${lang}/propiedades`} className="btn-3d btn-3d-navy px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs shadow-2xl">
                {isEn ? 'Browse Properties' : 'Ver Propiedades'} <ArrowRight className="inline ml-2" size={16} />
              </Link>
            </Magnetic>
            <Magnetic strength={0.4}>
              <Link href={`/${lang}/guides/panama-city-condos-for-sale`} className="btn-3d btn-3d-gold px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs">
                {isEn ? 'Condo Buyer Guide' : 'Guía de Compra de Condos'}
              </Link>
            </Magnetic>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SafestNeighborhoodsPanamaCityContent;
