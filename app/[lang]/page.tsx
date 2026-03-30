'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PROJECTS, IMAGES, CONTENT } from '@/lib/constants';
import ProjectCard from '@/components/ProjectCard';
import LeadMagnet from '@/components/LeadMagnet';
import { ArrowRight, Compass, ShieldCheck, Globe, TrendingUp, CheckCircle, PlayCircle, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import HeroTilt from '@/components/ui/HeroTilt';
import SplitText from '@/components/ui/SplitText';
import VideoThumbnail from '@/components/ui/VideoThumbnail';
import Magnetic from '@/components/ui/Magnetic';
import { motion } from 'framer-motion';
import VideoSchema from '@/components/seo/VideoSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import FAQSchema from '@/components/seo/FAQSchema';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % IMAGES.heroSlides.length), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-brand-950 overflow-hidden bg-mesh-glow">
      {IMAGES.heroSlides.map((slide, index) => (
        <div key={index} className={`absolute inset-0 transition-all duration-[3000ms] ease-in-out ${index === currentSlide ? 'opacity-40 scale-100' : 'opacity-0 scale-105'}`}>
          <img src={slide} alt={`Luxury Panama Real Estate Experience - Slide ${index + 1}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/95 via-brand-950/20 to-brand-950" />
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT['en'];

  useEffect(() => {
    // Only run intersection observer on client
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]); // Re-run if lang changes (content might shift)

  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema
        questions={lang === 'es' ? [
          { question: "¿Pueden los extranjeros comprar propiedades en Panamá?", answer: "Sí. Los extranjeros tienen los mismos derechos que los ciudadanos panameños cuando se trata de la propiedad de bienes raíces. Puede titular a su nombre personal o a través de una corporación/fundación panameña." },
          { question: "¿Qué es la Visa de Pensionado de Panamá?", answer: "Es uno de los programas de jubilación más populares del mundo. Proporciona residencia permanente a cualquier persona con una pensión vitalicia de $1,000 o más al mes, con beneficios como 25% de descuento en servicios públicos y 50% en cine." },
          { question: "¿Hay impuestos sobre la propiedad en Panamá?", answer: "Sí, pero son bajos. Muchos nuevos desarrollos califican para exenciones de impuestos de construcción por varios años. La residencia principal también disfruta de una exención significativa sobre los primeros $120,000 del valor registrado." },
          { question: "¿Es seguro invertir en bienes raíces en Panamá?", answer: "Sí, siempre que realice una debida diligencia adecuada. Panamá utiliza un sistema de Registro Público centralizado donde se registra cada título, proporcionando un alto nivel de seguridad." }
        ] : [
          { question: "Can foreigners buy property in Panama?", answer: "Yes. Foreigners have the same rights as Panamanian citizens when it comes to property ownership. You can hold title in your personal name or through a Panamanian corporation or foundation." },
          { question: "What is the Panama Pensionado Visa?", answer: "It is one of the world's most popular retirement programs. It provides permanent residency to anyone with a lifetime pension of $1,000 or more per month, with benefits like 25% off utility bills and 50% off movie tickets." },
          { question: "Are there property taxes in Panama?", answer: "Yes, but they are relatively low. Many new developments qualify for property tax exemptions on the construction value for several years. Primary residences also enjoy significant exemptions on the first $120,000." },
          { question: "Is it safe to invest in Panama real estate?", answer: "Yes, provided you conduct proper due diligence. Panama uses a centralized Public Registry system where every title is recorded, providing a high level of security for investors." }
        ]}
      />
      {/* HERO EXPERIENCE */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <HeroCarousel />

        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full pt-20 perspective-1000">
          <HeroTilt intensity={3} className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 px-6 py-2 glass-card rounded-full mb-12 shadow-2xl"
              style={{ transform: 'translateZ(40px)' }}
            >
              <div className="w-2 h-2 bg-brand-GOLD rounded-full animate-pulse shadow-[0_0_10px_theme(colors.brand.GOLD)]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Market Intelligence <span className="text-brand-GOLD">2026</span></span>
            </motion.div>

            <div style={{ transform: 'translateZ(60px)' }}>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading text-7xl md:text-9xl font-black text-white mb-8 leading-[0.8] tracking-tighter uppercase italic"
              >
                {lang === 'es' ? "Bienes Raíces" : "Panama Real Estate"} <br />
                <span className="text-brand-GOLD">
                  {lang === 'es' ? "en Venta 2026" : "for Sale 2026"}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="text-xl md:text-2xl text-white/90 font-black mb-12 uppercase tracking-[0.4em] font-serif-luxury"
              >
                Luxury Beachfront & City Portfolio
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-slate-300 mb-16 leading-relaxed max-w-2xl mx-auto font-medium opacity-80"
              style={{ transform: 'translateZ(30px)' }}
            >
              Your trusted guide to buying property in Panama. From beachfront condos to mountain retreats, we connect international investors with the best real estate opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.4, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col sm:flex-row gap-12 justify-center"
              style={{ transform: 'translateZ(50px)' }}
            >
              <Magnetic strength={0.4}>
                <Link href={`/${lang}/proyectos`} className="btn-3d btn-3d-gold px-12 py-7 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center">
                  EXPLORE ASSETS
                </Link>
              </Magnetic>
              <Magnetic strength={0.4}>
                <Link href={`/${lang}/tours`} className="btn-3d btn-3d-navy px-12 py-7 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] bg-white/5 backdrop-blur-3xl border border-white/10 flex items-center justify-center gap-3">
                  <PlayCircle size={20} className="text-brand-GOLD" /> DISCOVERY TOURS
                </Link>
              </Magnetic>
            </motion.div>
          </HeroTilt>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
          <span className="text-[9px] font-black uppercase tracking-widest text-white">Scroll to Discover</span>
          <div className="w-px h-10 bg-gradient-to-b from-brand-GOLD to-transparent"></div>
        </div>
      </section>

      {/* SEO INTELLIGENCE WALL */}
      <section className="py-32 bg-brand-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-GOLD/10 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 reveal-on-scroll">
          <div className="text-center mb-24">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Rockstar Intelligence</span>
            <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-10 tracking-tighter uppercase italic">{t.homepage.introTitle}</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="prose prose-invert prose-2xl text-slate-400 space-y-12 leading-[1.4] font-medium max-w-xl">
              <p className="border-l-8 border-brand-GOLD pl-12 italic text-white text-3xl md:text-5xl font-black tracking-tighter leading-[1.1]">"In Panama, we don't just sell property; we engineer lifestyle exits for the savvy global elite."</p>
              <p className="text-xl opacity-80">{t.homepage.introBody}</p>
            </div>
            <div className="grid grid-cols-2 gap-8 reveal-on-scroll stagger-1 items-start">
              {[
                { label: "Rental Yield", val: "8-12%", icon: TrendingUp },
                { label: "Safety Rank", val: "#1", icon: ShieldCheck },
                { label: "Community", val: "25k+", icon: Globe },
                { label: "Tax Benefits", val: "Tier-1", icon: Star }
              ].map((stat, i) => (
                <div key={i} className={`glass-card p-12 rounded-[2.5rem] text-center border-white/5 hover:border-brand-GOLD/30 transition-all group ${i % 2 === 1 ? 'mt-12' : ''}`}>
                  <stat.icon className="mx-auto mb-6 text-brand-GOLD group-hover:scale-125 transition-transform" size={32} />
                  <div className="text-4xl font-black text-white mb-3 tracking-tighter">{stat.val}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* HOMEPAGE VIDEO INSERTION */}
          <div className="mt-20 max-w-4xl mx-auto px-4 reveal-on-scroll">
            <VideoThumbnail
              videoUrl="https://youtu.be/sDW0cwto6aQ?t=681"
              title="Experience The ExpatRockstars Lifestyle"
              className="w-full max-w-lg mx-auto shadow-2xl border-2 border-brand-GOLD/30 rounded-3xl"
            />
            <VideoSchema
              videoUrl="https://youtu.be/sDW0cwto6aQ?t=681"
              name="ExpatRockstars: Panama Luxury Real Estate Experience"
              description="See why international investors choose ExpatRockstars for their Panama relocation and investment journey."
              uploadDate="2024-01-01"
            />
            {/* Screen Reader Summary / Transcript for SEO & Accessibility */}
            <div className="sr-only">
              <h3>Video Summary: Experience The ExpatRockstars Lifestyle</h3>
              <p>
                This video showcases the premium real estate and relocation services provided by ExpatRockstars in Panama.
                It highlights luxury beachfront properties, high-yield investment opportunities in the tropics, and the
                comprehensive support for international investors, including relocation tours, legal assistance, and
                lifestyle integration.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* FEATURED ASSETS: FLOATING CARDS */}
      < section className="py-32 bg-black relative" >
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10 reveal-on-scroll">
            <div className="max-w-3xl">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-6 block italic">Curated Portfolio 2026</span>
              <h2 className="font-heading text-5xl md:text-9xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.8]">VIP <br /><span className="text-brand-GOLD">DEVELOPMENTS</span></h2>
              <p className="text-slate-400 text-xl font-medium max-w-xl">High-liquidity <strong>Panama branded residences</strong> and beachfront assets engineered for the modern Rockstar investor.</p>
            </div>
            <Link href={`/${lang}/proyectos`} className="btn-3d btn-3d-gold px-12 py-6 rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center">VIEW ENTIRE INVENTORY</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROJECTS.slice(0, 3).map((project, idx) => (
              <div key={project.id} className={`reveal-on-scroll stagger-${(idx % 3) + 1} animate-float`} style={{ animationDelay: `${idx * 0.5}s` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* INVESTMENT ROI: PREMIUM DARK EXPERIENCE */}
      <section className="py-48 bg-brand-950 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-GOLD/5 rounded-full -mr-[400px] -mt-[400px] blur-[150px]"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-32 items-center reveal-on-scroll">
            <div className="relative p-16 lg:p-24 glass-card rounded-[4rem] border-white/5 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-GOLD/30 to-transparent"></div>
              <TrendingUp className="text-brand-GOLD mb-12" size={72} />
              <h3 className="text-4xl md:text-6xl font-heading font-black text-white mb-12 uppercase tracking-tighter italic leading-[0.9]">{t.homepage.investmentTitle}</h3>
              <div className="prose prose-invert prose-xl text-slate-400 font-medium leading-[1.5] mb-16 opacity-80">
                {t.homepage.investmentBody}
              </div>
              <ul className="space-y-12">
                <li className="flex items-start gap-8 reveal-on-scroll stagger-1">
                  <div className="bg-brand-GOLD text-brand-900 p-3.5 rounded-2xl shadow-[0_10px_30px_-5px_theme(colors.brand.GOLD/0.5)]"><CheckCircle size={28} /></div>
                  <div>
                    <p className="text-2xl font-black text-white mb-3 uppercase italic tracking-tighter">Tax Exemption 2026</p>
                    <p className="text-base text-slate-500 font-medium leading-relaxed">New <strong>Panama beachfront condos</strong> qualify for accelerated fiscal incentives through the Law 122 extension.</p>
                  </div>
                </li>
                <li className="flex items-start gap-8 reveal-on-scroll stagger-2">
                  <div className="bg-brand-GOLD text-brand-900 p-3.5 rounded-2xl shadow-[0_10px_30px_-5px_theme(colors.brand.GOLD/0.5)]"><CheckCircle size={28} /></div>
                  <div>
                    <p className="text-2xl font-black text-white mb-3 uppercase italic tracking-tighter">Dollarized Stability</p>
                    <p className="text-base text-slate-500 font-medium leading-relaxed">Secure your generational wealth in the only Latin American economy with full USD integration and no inflation risk.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative group overflow-hidden rounded-[4rem] shadow-2xl h-[750px] border-8 border-white/5 transition-transform duration-700 hover:scale-[1.02]">
              <img src={IMAGES.heroSlides[3]} alt="Investment Quality Panama Real Estate" className="w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/20 to-transparent"></div>
              <div className="absolute bottom-16 left-16 right-16">
                <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Benchmark Performance</span>
                <h4 className="text-4xl font-black text-white uppercase tracking-tighter italic leading-none">SECURING THE <br /> CARIBBEAN FRONTIER</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="reveal-on-scroll">
        <LeadMagnet />
      </div>

      {/* THE JOURNEY: ASYMMETRIC MINIMALISM */}
      <section className="py-48 bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-GOLD/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row gap-20 items-end mb-32 reveal-on-scroll">
            <div className="lg:w-2/3">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Discovery System</span>
              <h2 className="text-5xl md:text-9xl font-heading font-black mb-12 tracking-tighter uppercase italic leading-[0.8]">{t.homepage.expatLifeTitle}</h2>
            </div>
            <div className="lg:w-1/3 text-2xl text-slate-400 font-medium leading-relaxed italic border-l-4 border-brand-GOLD/20 pl-12 pb-4">
              {t.homepage.expatLifeBody}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {[
              { icon: Compass, title: "Curated Tours", desc: "Private access to <strong>Panama relocation tours</strong> focused on your specific ROI goals and lifestyle requirements.", offset: false },
              { icon: ShieldCheck, title: "Elite Ground Team", desc: "Legal concierges handling your <strong>residency visa</strong> and offshore banking setup in record time.", offset: true },
              { icon: Globe, title: "Lifestyle Vetting", desc: "Connect with established <strong>expat leaders</strong> and HNWIs before you commit your capital.", offset: false }
            ].map((item, i) => (
              <div key={i} className={`glass-card p-16 rounded-[4rem] border-white/5 hover:bg-brand-GOLD hover:text-brand-900 transition-all duration-700 group reveal-on-scroll stagger-${i+1} ${item.offset ? 'md:mt-24' : ''}`}>
                <item.icon className="text-brand-GOLD mb-12 group-hover:text-brand-900 transition-all transform group-hover:scale-110 group-hover:-rotate-12" size={56} />
                <h4 className="text-3xl font-black mb-8 uppercase tracking-tighter italic">{item.title}</h4>
                <p className="text-slate-400 group-hover:text-brand-900 text-lg font-medium leading-relaxed opacity-80 group-hover:opacity-100" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL WALL OF CONVERSION */}
      <section className="py-40 bg-brand-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none animate-spin-slow">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-GOLD rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-brand-GOLD/30 rounded-full"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-9xl font-heading font-black text-white mb-16 tracking-tighter uppercase italic leading-[0.8]">READY FOR THE <br /> <span className="text-brand-GOLD">UPGRADE?</span></h2>
          <div className="flex flex-wrap justify-center gap-10">
            <Link href={`/${lang}/contacto`} className="btn-3d btn-3d-navy px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs transition-all shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex items-center justify-center">CONTACT A SENIOR ADVISOR</Link>
            <Link href={`/${lang}/tours`} className="btn-3d btn-3d-gold px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center">BOOK DISCOVERY JOURNEY</Link>
          </div>
        </div>
      </section>
    </>
  );
}
