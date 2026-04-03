'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Coffee, Mountain, Sun, Cloud, Thermometer, Wind, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { PROJECTS } from '@/lib/constants';
import ProjectCard from '@/components/ProjectCard';
import Magnetic from '@/components/ui/Magnetic';
import HeroTilt from '@/components/ui/HeroTilt';

const BoqueteLocationPage = () => {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const content = {
    title: isEn ? "Boquete Real Estate 2026: Investment in Eternal Spring" : "Bienes Raíces en Boquete 2026: Inversión en la Eterna Primavera",
    subtitle: isEn ? "Experience Panama's premier mountain luxury destination with world-class coffee and cooler climates." : "Experimente el principal destino de lujo de montaña de Panamá con café de clase mundial.",
    intro: isEn 
      ? "Boquete is the jewel of Panama's Highlands. At 1,200 meters above sea level, it offers a refreshing microclimate, a sophisticated community of international expatriates, and some of the most stable real estate appreciation in the region. In 2026, Boquete continues to lead the mountain luxury market for both lifestyle and high-yield rentals."
      : "Boquete es la joya de las tierras altas de Panamá. A 1,200 metros sobre el nivel del mar, ofrece un microclima refrescante y una comunidad sofisticada de expatriados internacionales.",
    stats: [
      { label: isEn ? "Elevation" : "Elevación", value: "1,200m", icon: Mountain },
      { label: isEn ? "Avg Temp" : "Temp Prom", value: "20°C / 68°F", icon: Thermometer },
      { label: isEn ? "Annual Yield" : "Rendimiento Anual", value: "6-8%", icon: TrendingUp },
      { label: isEn ? "Coffee Status" : "Estado del Café", value: "World Record #1", icon: Coffee }
    ],
    featuresTitle: isEn ? "The Boquete Edge" : "La Ventaja de Boquete",
    features: [
      { title: isEn ? "Gated Luxury" : "Lujo Privado", desc: isEn ? "Home to some of Latin America's most exclusive golf and mountain communities like Valle Escondido and Lucero." : "Sede de algunas de las comunidades de golf y montaña más exclusivas de Latinoamérica." },
      { title: isEn ? "Adventure & Wellness" : "Aventura y Bienestar", desc: isEn ? "Hiking the Baru Volcano, world-class bird watching, and a focus on holistic health and longevity." : "Senderismo al Volcán Barú, observación de aves y enfoque en salud holística." },
      { title: isEn ? "Strategic Lifestyle" : "Estilo de Vida Estratégico", desc: isEn ? "Connected by the modern Enrique Malek airport in David, only 45 minutes away." : "Conectado por el moderno aeropuerto Enrique Malek en David, a solo 45 minutos." }
    ],
    ctaTitle: isEn ? "Find Your Mountain Retreat" : "Encuentre su Refugio en la Montaña",
    ctaDesc: isEn ? "Browse our curated portfolio of luxury estates and high-yield condos in the Boquete highlands." : "Explore nuestro portafolio de fincas de lujo y condominios de alto rendimiento."
  };

  // Filter Boquete projects if any exist, otherwise show featured
  const boqueteProjects = PROJECTS.filter(p => p.location.toLowerCase().includes('boquete')).slice(0, 3);
  const displayProjects = boqueteProjects.length > 0 ? boqueteProjects : PROJECTS.slice(0, 3);

  return (
    <div className="bg-brand-950 min-h-screen pt-24 pb-40 overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-brand-GOLD/5 rounded-full blur-[180px] -mr-[600px] -mt-[600px]" />
        <div className="absolute bottom-1/2 left-0 w-[800px] h-[800px] bg-brand-GOLD/10 rounded-full blur-[150px] -ml-[400px] pointer-events-none opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HERO SECTION */}
        <section className="py-20 text-center">
          <HeroTilt intensity={3} className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Highlands Portfolio 2026</span>
              <h1 className="text-6xl md:text-9xl font-heading font-black text-white mb-10 tracking-tighter uppercase italic leading-[0.8]">
                {content.title.split(': ')[0]} <br />
                <span className="text-brand-GOLD">{content.title.split(': ')[1]}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed mb-16 italic font-serif">
                {content.subtitle}
              </p>
              
              <div className="flex flex-wrap justify-center gap-12">
                <Magnetic strength={0.3}>
                  <Link href={`/${lang}/proyectos`} className="btn-3d btn-3d-gold px-12 py-7 rounded-xl font-black uppercase tracking-widest text-[11px]">
                    VIEW BOQUETE INVENTORY
                  </Link>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <Link href={`/${lang}/tours`} className="btn-3d btn-3d-navy px-12 py-7 rounded-xl font-black uppercase tracking-widest text-[11px] bg-white/5 backdrop-blur-3xl border border-white/10">
                    BOOK MOUNTAIN TOUR
                  </Link>
                </Magnetic>
              </div>
            </motion.div>
          </HeroTilt>
        </section>

        {/* CLIMATE & DATA STATS */}
        <section className="py-32 border-t border-white/5">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {content.stats.map((stat, i) => (
                <div key={i} className="glass-card p-12 rounded-[4rem] text-center border-white/5 reveal-on-scroll stagger-1 group">
                   <div className="text-brand-GOLD mb-8 group-hover:scale-125 transition-transform"><stat.icon size={44} /></div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">{stat.label}</p>
                   <p className="text-white text-3xl font-black italic tracking-tighter uppercase">{stat.value}</p>
                </div>
              ))}
           </div>
        </section>

        {/* INTRO CONTENT WITH IMAGE */}
        <section className="py-32">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative h-[700px] rounded-[5rem] overflow-hidden border-8 border-white/5 shadow-2xl reveal-on-scroll">
              <Image src="https://images.unsplash.com/photo-1549420958-370146059d4c?w=1200&q=80" alt="Luxury Boquete Estate" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent opacity-60" />
              <div className="absolute top-10 right-10 bg-brand-GOLD text-brand-900 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest">Featured District</div>
            </div>
            <div className="reveal-on-scroll stagger-2">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">Strategic Geography</span>
              <h2 className="text-5xl md:text-8xl font-heading font-black text-white mb-10 tracking-tighter uppercase italic leading-[0.8]">{isEn ? "The Eternal Spring Advantage" : "La Ventaja de la Eterna Primavera"}</h2>
              <div className="prose prose-invert prose-2xl text-slate-400 font-medium leading-relaxed italic space-y-10 mb-16">
                <p>{content.intro}</p>
                <p>{isEn ? "Boquete offers a lifestyle that combines European charm with tropical luxury. From the legendary Geisha coffee farms to the premier gated golf communities, your investment here is backed by established demand." : "Boquete ofrece un estilo de vida que combina el encanto europeo con el lujo tropical."}</p>
              </div>
              <div className="grid gap-10">
                {content.features.map((feature, i) => (
                   <div key={i} className="flex gap-10 items-start">
                     <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-GOLD flex-shrink-0"><ShieldCheck size={24} /></div>
                     <div>
                       <h4 className="text-white font-black uppercase italic tracking-tighter text-xl mb-2">{feature.title}</h4>
                       <p className="text-slate-500 font-medium leading-relaxed italic">{feature.description || feature.desc}</p>
                     </div>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED INVENTORY FOR LOCATION */}
        <section className="py-48 bg-black relative rounded-[6rem] border border-white/5 px-10">
           <div className="text-center mb-32 reveal-on-scroll">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">Curated highland assets</span>
              <h2 className="text-5xl md:text-8xl font-heading font-black text-white mb-12 tracking-tighter uppercase italic leading-[0.8]">{isEn ? "Featured Boquete Units" : "Unidades Destacadas en Boquete"}</h2>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {displayProjects.map((project, idx) => (
                <div key={project.id} className="reveal-on-scroll stagger-1">
                   <ProjectCard project={project} />
                </div>
              ))}
           </div>
           
           <div className="mt-24 text-center">
             <Link href={`/${lang}/proyectos`} className="btn-3d btn-3d-navy px-12 py-6 rounded-xl font-black uppercase tracking-widest text-[11px] inline-flex items-center gap-4">
                EXPLORE ALL BOQUETE LISTINGS <ArrowRight size={16} />
             </Link>
           </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-48 text-center px-4 reveal-on-scroll">
            <h2 className="text-5xl md:text-9xl font-heading font-black text-white mb-16 tracking-tighter uppercase italic leading-[0.8]">{content.ctaTitle}</h2>
            <p className="text-2xl text-slate-400 font-medium mb-20 max-w-2xl mx-auto leading-relaxed font-serif italic">{content.ctaDesc}</p>
            <div className="flex flex-wrap justify-center gap-10">
              <Magnetic strength={0.4}>
                <Link href={`/${lang}/contacto`} className="btn-3d btn-3d-navy px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs shadow-2xl">
                  CONSULT HIGHLANDS EXPERT
                </Link>
              </Magnetic>
              <Magnetic strength={0.4}>
                <Link href={`/${lang}/tours`} className="btn-3d btn-3d-gold px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs">
                  BOOK MOUNTAIN TOUR
                </Link>
              </Magnetic>
            </div>
        </section>
      </div>
    </div>
  );
};

export default BoqueteLocationPage;
