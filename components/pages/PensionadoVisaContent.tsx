'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, CreditCard, Home, MapPin, Users, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT } from '@/lib/constants';
import Magnetic from '@/components/ui/Magnetic';
import HeroTilt from '@/components/ui/HeroTilt';

const PensionadoVisaPage = () => {
  const { lang} = useLanguage();
  const isEn = lang === 'en';

  const content = {
    title: isEn ? "Pensionado Visa Panama 2026: The Ultimate Retirement Program" : "Visa de Pensionado Panamá 2026: El Programa de Jubilación Definitivo",
    subtitle: isEn ? "Unlock the world's best retirement benefits through Panama real estate." : "Desbloquee los mejores beneficios de jubilación del mundo a través de bienes raíces en Panamá.",
    intro: isEn 
      ? "Panama's Pensionado Visa is globally recognized as the gold standard for retirees. In 2026, it remains the most sought-after residency program for North Americans and Europeans seeking to relocate to a tropical paradise with lower living costs and high-quality healthcare."
      : "La Visa de Pensionado de Panamá es reconocida mundialmente como el estándar de oro para los jubilados. En 2026, sigue siendo el programa de residencia más solicitado por norteamericanos y europeos que buscan reubicarse en un paraíso tropical con menores costos de vida y atención médica de alta calidad.",
    benefitsTitle: isEn ? "Elite Benefits & Discounts" : "Beneficios y Descuentos de Élite",
    benefits: [
      { 
        icon: CreditCard,
        title: isEn ? "50% Off Entertainment" : "50% de Descuento en Entretenimiento",
        desc: isEn ? "Half price for movies, concerts, and professional sporting events nationwide." : "Precio medio para cine, conciertos y eventos deportivos profesionales en todo el país."
      },
      { 
        icon: ShieldCheck,
        title: isEn ? "25% Off Utility Bills" : "25% de Descuento en Servicios",
        desc: isEn ? "Significant discounts on electricity, water, and telephone services." : "Descuentos significativos en electricidad, agua y servicios telefónicos."
      },
      { 
        icon: MapPin,
        title: isEn ? "25% Off Domestic Flights" : "25% de Descuento en Vuelos",
        desc: isEn ? "Travel across Panama's beautiful provinces for less, including Boquete and Bocas del Toro." : "Viaje por las hermosas provincias de Panamá por menos, incluyendo Boquete y Bocas del Toro."
      },
      { 
        icon: Users,
        title: isEn ? "Duty-Free Importation" : "Importación Libre de Impuestos",
        desc: isEn ? "One-time tax exemption for household goods up to $10,000." : "Exención de impuestos por única vez para artículos del hogar hasta $10,000."
      }
    ],
    requirementsTitle: isEn ? "Program Requirements" : "Requisitos del Programa",
    requirements: [
      isEn ? "Lifetime monthly pension of at least $1,000 USD (plus $250 for spouse)." : "Pensión vitalicia mensual de al menos $1,000 USD (más $250 por cónyuge).",
      isEn ? "Clean criminal record (FBI or equivalent report from home country)." : "Antecedentes penales limpios (reporte del FBI o equivalente del país de origen).",
      isEn ? "Health certificate issued by a Panamanian doctor." : "Certificado de salud emitido por un médico panameño.",
      isEn ? "Proof of residency and utility bills." : "Prueba de residencia y facturas de servicios públicos."
    ],
    ctaTitle: isEn ? "Ready to Claim Your Rockstar Retirement?" : "¿Listo para Reclamar su Jubilación de Rockstar?",
    ctaDesc: isEn ? "Book a private discovery tour and see why Boquete and Panama City are the top destinations for expats." : "Reserve un tour de descubrimiento privado y vea por qué Boquete y la Ciudad de Panamá son los principales destinos para expatriados."
  };

  return (
    <div className="bg-brand-950 min-h-screen pt-24 pb-40 overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-GOLD/5 rounded-full blur-[150px] -mr-[500px] -mt-[500px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-GOLD/10 rounded-full blur-[150px] -ml-[400px] -mb-[400px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HERO SECTION */}
        <section className="py-20 text-center">
          <HeroTilt intensity={3} className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Relocation Guide 2026</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white mb-10 tracking-tighter uppercase italic leading-[0.8]">
                {content.title.split(': ')[0]} <br />
                <span className="text-brand-GOLD">{content.title.split(': ')[1]}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed mb-16">
                {content.subtitle}
              </p>
              
              <div className="flex flex-wrap justify-center gap-12">
                <Magnetic strength={0.3}>
                  <Link href={`/${lang}/tours`} className="btn-3d btn-3d-gold px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[11px]">
                    BOOK RELOCATION TOUR
                  </Link>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <Link href={`/${lang}/proyectos`} className="btn-3d btn-3d-navy px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[11px] bg-white/5 backdrop-blur-3xl border border-white/10">
                    VIEW INVESTMENT ASSETS
                  </Link>
                </Magnetic>
              </div>
            </motion.div>
          </HeroTilt>
        </section>

        {/* INTRO CONTENT */}
        <section className="py-14 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="reveal-on-scroll">
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-12 uppercase italic tracking-tighter leading-[0.9]">
                {isEn ? "The Gold Standard of Residency" : "El Estándar de Oro de la Residencia"}
              </h2>
              <div className="prose prose-invert prose-2xl text-slate-400 font-medium leading-relaxed space-y-10">
                <p>{content.intro}</p>
                <p>
                  {isEn 
                    ? "In 2026, Panama real estate prices still offer exceptional value compared to Florida, Portugal, or the Caribbean, making your retirement income go much further."
                    : "En 2026, los precios de los bienes raíces en Panamá todavía ofrecen un valor excepcional en comparación con Florida, Portugal o el Caribe."}
                </p>
              </div>
            </div>
            <div className="relative reveal-on-scroll stagger-2">
              <div className="glass-card p-8 rounded-2xl border-white/5 shadow-2xl relative overflow-hidden backdrop-blur-3xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-GOLD/30 to-transparent" />
                <Star className="text-brand-GOLD mb-10" size={64} fill="currentColor" />
                <h3 className="text-3xl font-black text-white mb-8 uppercase italic tracking-tighter">Market Watch 2026</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12 italic">
                  "ExpatRockstars has identified Boquete and Panama City as the premier hubs for Pensionado visa holders seeking high-end amenities and established expat communities."
                </p>
                <div className="pt-10 border-t border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Expat Satisfaction</span>
                    <span className="text-brand-GOLD font-bold text-xl">98.4%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[98.4%] h-full bg-brand-GOLD animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS GRID */}
        <section className="py-14">
          <div className="text-center mb-32 reveal-on-scroll">
             <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">Exclusive Privileges</span>
             <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white mb-12 tracking-tighter uppercase italic leading-[0.8]">{content.benefitsTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {content.benefits.map((benefit, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl border-white/5 hover:bg-brand-GOLD hover:text-brand-900 transition-all duration-700 reveal-on-scroll group">
                <benefit.icon className="text-brand-GOLD mb-12 group-hover:text-brand-900 transition-all transform group-hover:scale-110 group-hover:-rotate-12" size={64} />
                <h4 className="text-3xl font-black mb-6 uppercase italic tracking-tighter">{benefit.title}</h4>
                <p className="text-slate-400 group-hover:text-brand-900 text-xl font-medium leading-relaxed opacity-80 group-hover:opacity-100 italic">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REQUIREMENTS SECTION */}
        <section className="py-16 bg-brand-900/40 rounded-[6rem] border border-white/5 px-20 reveal-on-scroll">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">Eligibility Benchmarks</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white mb-12 tracking-tighter uppercase italic leading-[0.8]">{content.requirementsTitle}</h2>
              <div className="space-y-12 mt-20">
                {content.requirements.map((req, i) => (
                  <div key={i} className="flex gap-8 items-start reveal-on-scroll stagger-1">
                    <div className="bg-brand-GOLD text-brand-900 p-3 rounded-2xl shadow-[0_10px_30px_-5px_theme(colors.brand.GOLD/0.5)]">
                      <CheckCircle size={28} />
                    </div>
                    <p className="text-2xl text-slate-300 font-medium leading-relaxed">{req}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden border-8 border-white/5 transform rotate-3">
              <img src="https://images.unsplash.com/photo-1549420958-370146059d4c?w=1200&q=80" alt="Relaxing Panama Lifestyle" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="py-16 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white mb-16 tracking-tighter uppercase italic leading-[0.8]">{content.ctaTitle}</h2>
            <p className="text-2xl text-slate-400 font-medium mb-20 max-w-2xl mx-auto leading-relaxed">{content.ctaDesc}</p>
            <div className="flex flex-wrap justify-center gap-10">
              <Magnetic strength={0.4}>
                <Link href={`/${lang}/contacto`} className="btn-3d btn-3d-navy px-8 py-4 rounded-full font-black uppercase tracking-[0.3em] text-xs transition-all shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                  SPEAK WITH A SPECIALIST
                </Link>
              </Magnetic>
              <Magnetic strength={0.4}>
                <Link href={`/${lang}/tours`} className="btn-3d btn-3d-gold px-8 py-4 rounded-full font-black uppercase tracking-[0.3em] text-xs transition-all">
                  BOOK DISCOVERY TOUR
                </Link>
              </Magnetic>
            </div>
        </section>
      </div>
    </div>
  );
};

export default PensionadoVisaPage;
