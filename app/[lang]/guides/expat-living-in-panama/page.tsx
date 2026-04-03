'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Globe, Heart, Shield, DollarSign, Utensils, Hospital, Coffee, Sun } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Magnetic from '@/components/ui/Magnetic';
import HeroTilt from '@/components/ui/HeroTilt';

const ExpatLivingPage = () => {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const content = {
    title: isEn ? "Expat Living in Panama 2026: The Ultimate Lifestyle Guide" : "Vivir en Panamá 2026: La Guía Definitiva de Estilo de Vida",
    subtitle: isEn ? "Experience the perfect blend of modern infrastructure and tropical tranquility." : "Experimente la combinación perfecta de infraestructura moderna y tranquilidad tropical.",
    intro: isEn 
      ? "Panama has consistently ranked as the #1 destination for expatriates worldwide. In 2026, with its world-class fiber optic internet, modern healthcare, and use of the US Dollar, it provides an unparalleled quality of life for digital nomads, families, and retirees."
      : "Panamá se ha clasificado consistentemente como el destino #1 para expatriados en todo el mundo. En 2026, con su internet de fibra óptica de clase mundial, atención médica moderna y el uso del dólar estadounidense, ofrece una calidad de vida incomparable.",
    factorsTitle: isEn ? "Why Expats Choose Panama" : "Por Qué los Expats Eligen Panamá",
    factors: [
      { 
        icon: DollarSign,
        title: isEn ? "Cost of Living" : "Costo de Vida",
        desc: isEn ? "Enjoy a high-end lifestyle for significantly less than North American or European cities." : "Disfrute de un estilo de vida de alta gama por mucho menos que en las ciudades norteamericanas o europeas."
      },
      { 
        icon: Hospital,
        title: isEn ? "Premium Healthcare" : "Salud Premium",
        desc: isEn ? "Affiliated with top US institutions (Johns Hopkins), providing top-tier care at lower costs." : "Afiliado a las mejores instituciones de EE. UU. (Johns Hopkins), brindando atención de primer nivel."
      },
      { 
        icon: Globe,
        title: isEn ? "Connected Hub" : "Hub Conectado",
        desc: isEn ? "Known as the Hub of the Americas, Tocumen Airport offers direct flights globally." : "Conocido como el Hub de las Américas, el Aeropuerto de Tocumen ofrece vuelos directos a nivel mundial."
      },
      { 
        icon: Shield,
        title: isEn ? "Safety & Stability" : "Seguridad y Estabilidad",
        desc: isEn ? "A stable democracy with a dollarized economy and one of the lowest crime rates in the region." : "Una democracia estable con una economía dolarizada y una de las tasas de criminalidad más bajas."
      }
    ],
    communitiesTitle: isEn ? "Premier Expat Communities" : "Principales Comunidades de Expats",
    communities: [
      { name: "Boquete", type: isEn ? "Mountain Paradise" : "Paraíso de Montaña", vibe: "High-end Highlands" },
      { name: "Santa Maria", type: isEn ? "Golf Luxury" : "Lujo de Golf", vibe: "Urban Sophistication" },
      { name: "Coronado", type: isEn ? "Beachfront Hub" : "Hub de Playa", vibe: "Coastal Convenience" },
      { name: "Bocas del Toro", type: isEn ? "Island Adventure" : "Aventura Isleña", vibe: "Bohemian Luxury" }
    ],
    ctaTitle: isEn ? "Design Your Rockstar Lifestyle" : "Diseñe su Estilo de Vida Rockstar",
    ctaDesc: isEn ? "Connect with our lifestyle advisors to find the perfect community for your needs." : "Conéctese con nuestros asesores de estilo de vida para encontrar la comunidad perfecta."
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-40 overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] bg-brand-GOLD/5 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HERO SECTION */}
        <section className="py-20 text-center">
          <HeroTilt intensity={3} className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">International Living 2026</span>
              <h1 className="text-6xl md:text-9xl font-heading font-black text-brand-950 mb-10 tracking-tighter uppercase italic leading-[0.8]">
                {content.title.split(': ')[0]} <br />
                <span className="text-brand-GOLD">{content.title.split(': ')[1]}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed mb-16 italic">
                {content.subtitle}
              </p>
              
              <div className="flex flex-wrap justify-center gap-12">
                <Magnetic strength={0.3}>
                  <Link href={`/${lang}/relocation`} className="btn-3d btn-3d-gold px-12 py-7 rounded-xl font-black uppercase tracking-widest text-[11px]">
                    RELOCATION HUB
                  </Link>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <Link href={`/${lang}/tours`} className="btn-3d btn-3d-navy px-12 py-7 rounded-xl font-black uppercase tracking-widest text-[11px] bg-white/5 backdrop-blur-3xl border border-brand-100">
                    DISCOVERY TOURS
                  </Link>
                </Magnetic>
              </div>
            </motion.div>
          </HeroTilt>
        </section>

        {/* LIFESTYLE FACTORS */}
        <section className="py-48 border-t border-brand-100">
          <div className="text-center mb-32 reveal-on-scroll">
             <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">Quality of Life Benchmarks</span>
             <h2 className="text-5xl md:text-8xl font-heading font-black text-brand-950 mb-12 tracking-tighter uppercase italic leading-[0.8]">{content.factorsTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {content.factors.map((factor, i) => (
              <div key={i} className="card-light p-12 rounded-[3.5rem] border-brand-100 hover:border-brand-GOLD/40 transition-all group reveal-on-scroll stagger-1">
                <factor.icon className="text-brand-GOLD mb-10 group-hover:scale-125 transition-transform" size={48} />
                <h4 className="text-2xl font-black text-brand-950 mb-6 uppercase italic tracking-tighter">{factor.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed opacity-80 group-hover:opacity-100 italic">{factor.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMMUNITIES SHOWCASE */}
        <section className="py-32">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="reveal-on-scroll">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">Curation of Hotspots</span>
              <h2 className="text-5xl md:text-7xl font-heading font-black text-brand-950 mb-10 tracking-tighter uppercase italic leading-[0.8]">{content.communitiesTitle}</h2>
              <div className="prose prose-invert prose-xl text-slate-500 font-medium leading-relaxed mb-16">
                <p>{content.intro}</p>
                <Link href={`/${lang}/quiz`} className="inline-flex items-center gap-4 text-brand-GOLD font-black uppercase tracking-[0.3em] text-xs hover:gap-6 transition-all mt-10 italic">
                  Take the Neighborhood Quiz <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 reveal-on-scroll stagger-2">
              {content.communities.map((community, i) => (
                <div key={i} className="card-light p-10 rounded-3xl border-brand-100 hover:bg-brand-50 transition-all group">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-4">{community.type}</p>
                  <h4 className="text-2xl font-black text-brand-950 mb-2 uppercase italic tracking-tighter">{community.name}</h4>
                  <p className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">{community.vibe}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMAGE GALLERY / VIBE CHECK */}
        <section className="py-48 overflow-hidden">
          <div className="flex gap-12 animate-marquee inline-flex whitespace-nowrap">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-[500px] h-[350px] rounded-[3rem] overflow-hidden border-4 border-brand-100 shadow-2xl relative group">
                 <Image
                  src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1589405709121-081e7d23d8c5' : '1554469384-e58fac16e23a'}?w=1000&q=80`}
                  alt="Panama Rockstar Life"
                  fill
                  className="object-cover transition-transform duration-[5000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-48 bg-brand-GOLD text-brand-950 rounded-[6rem] text-center px-10 reveal-on-scroll shadow-[0_0_100px_rgba(212,175,55,0.1)]">
            <Heart className="mx-auto mb-16 animate-pulse" size={80} fill="currentColor" />
            <h2 className="text-5xl md:text-9xl font-heading font-black mb-16 tracking-tighter uppercase italic leading-[0.8]">{content.ctaTitle}</h2>
            <p className="text-2xl font-medium mb-20 max-w-2xl mx-auto leading-relaxed italic opacity-80">{content.ctaDesc}</p>
            <div className="flex flex-wrap justify-center gap-10">
              <Magnetic strength={0.4}>
                <Link href={`/${lang}/contacto`} className="btn-3d btn-3d-navy px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs shadow-2xl">
                  START YOUR JOURNEY
                </Link>
              </Magnetic>
              <Magnetic strength={0.4}>
                <Link href={`/${lang}/quiz`} className="btn-3d btn-3d-gold bg-white text-white px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs">
                  FIND MY NEIGHBORHOOD
                </Link>
              </Magnetic>
            </div>
        </section>
      </div>
    </div>
  );
};

export default ExpatLivingPage;
