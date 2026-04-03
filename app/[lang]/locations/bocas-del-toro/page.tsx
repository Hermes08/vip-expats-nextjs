'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Ship, Anchor, Sun, Waves, Palmtree, Map, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';
import { Compass, Shell, Fish } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { PROJECTS } from '@/lib/constants';
import ProjectCard from '@/components/ProjectCard';
import Magnetic from '@/components/ui/Magnetic';
import HeroTilt from '@/components/ui/HeroTilt';

const BocasLocationPage = () => {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const content = {
    title: isEn ? "Bocas del Toro 2026: The Caribbean Frontier" : "Bocas del Toro 2026: La Frontera del Caribe",
    subtitle: isEn ? "Crystal clear waters, high-yield beachfront assets, and an unparalleled island lifestyle." : "Aguas cristalinas, activos frente al mar de alto rendimiento y un estilo de vida isleño incomparable.",
    intro: isEn 
      ? "Bocas del Toro is Panama's most popular Caribbean destination. In 2026, it has transformed into a hub for luxury sustainable living and offshore investments. Whether it's the vibrant energy of Isla Colon or the secluded prestige of private island retreats, Bocas offers a unique appreciation potential driven by skyrocketing international tourism."
      : "Bocas del Toro es el destino caribeño más popular de Panamá. En 2026, se ha transformado en un centro de vida sostenible de lujo e inversiones extranjeras.",
    stats: [
      { label: isEn ? "Island Count" : "Número de Islas", value: "9 Main Islands", icon: Map },
      { label: isEn ? "Water Color" : "Color del Agua", value: "Turquoise Blue", icon: Waves },
      { label: isEn ? "Rental Yield" : "Rendimiento", value: "9-12% ROI", icon: TrendingUp },
      { label: isEn ? "Vibe" : "Ambiente", value: "Boho-Luxury", icon: Palmtree }
    ],
    featuresTitle: isEn ? "The Bocas Investment Case" : "El Caso de Inversión en Bocas",
    features: [
      { title: isEn ? "Skyrocketing ROI" : "ROI por las Nubes", desc: isEn ? "Short-term rental yields in Bocas outpace mainland cities due to limited beachfront supply and high tourist demand." : "Los rendimientos de los alquileres a corto plazo en Bocas superan a las ciudades del continente." },
      { title: isEn ? "Sustainable Luxury" : "Lujo Sostenible", desc: isEn ? "Leading the region in solar-powered estates and eco-conscious developments that attract premium travelers." : "Liderando la región en fincas impulsadas por energía solar y desarrollos ecológicos." },
      { title: isEn ? "Logistics 2026" : "Logística 2026", desc: isEn ? "Consistent flights from Panama City and San Jose, Costa Rica, make Bocas a connected island paradise." : "Vuelos constantes desde la Ciudad de Panamá y San José, Costa Rica." }
    ],
    ctaTitle: isEn ? "Secure Your Island Asset" : "Asegure su Activo Isleño",
    ctaDesc: isEn ? "Discover oceanfront villas and high-liquidity beach condos in Panama's most sought-after archipelago." : "Descubra villas frente al mar y condominios de alta liquidez en el archipiélago más buscado de Panamá."
  };

  // Filter Bocas projects
  const bocasProjects = PROJECTS.filter(p => p.location.toLowerCase().includes('bocas')).slice(0, 3);
  const displayProjects = bocasProjects.length > 0 ? bocasProjects : PROJECTS.slice(0, 3);

  return (
    <div className="bg-white min-h-screen pt-24 pb-40 overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-cyan-500/5 rounded-full blur-[200px] -mr-[600px] -mt-[600px] opacity-40" />
        <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-brand-GOLD/5 rounded-full blur-[150px] -ml-[500px] -mb-[500px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HERO SECTION */}
        <section className="py-20 text-center">
          <HeroTilt intensity={3} className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block font-serif">Caribbean Portfolio 2026</span>
              <h1 className="text-6xl md:text-9xl font-heading font-black text-brand-950 mb-10 tracking-tighter uppercase italic leading-[0.8]">
                {content.title.split(': ')[0]} <br />
                <span className="text-brand-GOLD">{content.title.split(': ')[1]}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed mb-16 italic opacity-80">
                {content.subtitle}
              </p>
              
              <div className="flex flex-wrap justify-center gap-12">
                <Magnetic strength={0.3}>
                  <Link href={`/${lang}/proyectos`} className="btn-3d btn-3d-gold px-12 py-7 rounded-xl font-black uppercase tracking-widest text-[11px]">
                    VIEW BOCAS INVENTORY
                  </Link>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <Link href={`/${lang}/contacto`} className="btn-3d btn-3d-navy px-12 py-7 rounded-xl font-black uppercase tracking-widest text-[11px] bg-white/5 backdrop-blur-3xl border border-brand-100">
                    ISLAND CONSULTATION
                  </Link>
                </Magnetic>
              </div>
            </motion.div>
          </HeroTilt>
        </section>

        {/* BOCAS DATA GRID */}
        <section className="py-32 border-t border-brand-100">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {content.stats.map((stat, i) => (
                <div key={i} className="card-light p-12 rounded-[4rem] text-center border-brand-100 reveal-on-scroll stagger-1 group hover:border-cyan-500/30 transition-all">
                   <div className="text-cyan-400 mb-8 group-hover:scale-125 transition-transform"><stat.icon size={44} /></div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">{stat.label}</p>
                   <p className="text-white text-3xl font-black italic tracking-tighter uppercase">{stat.value}</p>
                </div>
              ))}
           </div>
        </section>

        {/* ARCHIPELAGO INTRO */}
        <section className="py-32 relative">
          <div className="grid lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-12 reveal-on-scroll mb-20">
               <div className="text-center max-w-4xl mx-auto">
                 <h2 className="text-5xl md:text-8xl font-heading font-black text-brand-950 mb-10 tracking-tighter uppercase italic leading-[0.8]">{isEn ? "The Panama Archipelago Advantage" : "La Ventaja del Archipiélago de Panamá"}</h2>
                 <p className="text-2xl text-slate-500 font-medium leading-relaxed italic opacity-80">{content.intro}</p>
               </div>
            </div>
            
            <div className="lg:col-span-6 relative h-[600px] rounded-[5rem] overflow-hidden border-8 border-brand-100 shadow-2xl reveal-on-scroll">
               <Image src="https://images.unsplash.com/photo-1589405709121-081e7d23d8c5?w=1200&q=80" alt="Beautiful Bocas del Toro Island" fill className="object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent" />
            </div>
            
            <div className="lg:col-span-6 space-y-12">
               {content.features.map((feature, i) => (
                 <div key={i} className="flex gap-12 items-start reveal-on-scroll stagger-1 group">
                   <div className="w-16 h-16 rounded-3xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                      <ShieldCheck size={32} />
                   </div>
                   <div>
                     <h4 className="text-white font-black uppercase italic tracking-tighter text-2xl mb-4">{feature.title}</h4>
                     <p className="text-slate-500 font-medium leading-relaxed italic opacity-80">{feature.desc || feature.description}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* INVENTORY FOCUS */}
        <section className="py-48 bg-brand-50 rounded-[6rem] border border-brand-100 relative overflow-hidden text-center px-4">
           <div className="reveal-on-scroll">
             <Shell className="text-brand-GOLD mx-auto mb-12 animate-float" size={80} />
             <h2 className="text-5xl md:text-9xl font-heading font-black text-brand-950 mb-16 tracking-tighter uppercase italic leading-[0.8]">{isEn ? "Luxury Island Assets" : "Activos de Lujo en la Isla"}</h2>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-16 max-w-7xl mx-auto mb-32 reveal-on-scroll">
              {displayProjects.map((project, idx) => (
                <div key={project.id} className="reveal-on-scroll stagger-1">
                   <ProjectCard project={project} />
                </div>
              ))}
           </div>
           
           <Link href={`/${lang}/proyectos`} className="btn-3d btn-3d-gold px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs">
              BROWSE ALL CARIBBEAN UNITS
           </Link>
        </section>

        {/* FINAL CTA */}
        <section className="py-48 text-center px-4 reveal-on-scroll">
            <Fish className="text-cyan-400 mx-auto mb-16 opacity-50" size={64} />
            <h2 className="text-5xl md:text-9xl font-heading font-black text-brand-950 mb-16 tracking-tighter uppercase italic leading-[0.8]">{content.ctaTitle}</h2>
            <p className="text-2xl text-slate-500 font-medium mb-20 max-w-2xl mx-auto leading-relaxed font-serif italic">{content.ctaDesc}</p>
            <div className="flex flex-wrap justify-center gap-10">
              <Magnetic strength={0.4}>
                <Link href={`/${lang}/contacto`} className="btn-3d btn-3d-gold px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs shadow-2xl">
                  REQUEST ISLAND PORTFOLIO
                </Link>
              </Magnetic>
              <Magnetic strength={0.4}>
                <Link href={`/${lang}/tours`} className="btn-3d btn-3d-navy px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs">
                  BOOK CARIBBEAN TOUR
                </Link>
              </Magnetic>
            </div>
        </section>
      </div>
    </div>
  );
};

export default BocasLocationPage;
