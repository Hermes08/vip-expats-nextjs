'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Briefcase, Building, ShieldCheck, CheckCircle, ArrowRight, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Magnetic from '@/components/ui/Magnetic';
import HeroTilt from '@/components/ui/HeroTilt';

const FriendlyNationsVisaPage = () => {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const content = {
    title: isEn ? "Friendly Nations Visa Panama 2026: Fast-Track to Residency" : "Visa de Naciones Amigas Panamá 2026: Vía Rápida a la Residencia",
    subtitle: isEn ? "The most efficient way for professionals and investors to gain permanent residency in Panama." : "La forma más eficiente para profesionales e inversores de obtener residencia permanente en Panamá.",
    intro: isEn 
      ? "The Friendly Nations Visa is one of the most powerful residency programs for citizens of over 50 qualifying nations. In 2026, it offers a streamlined path to permanent residency through labor ties, professional activities, or real estate investment, allowing global citizens to enjoy Panama's tax advantages and vibrant economy."
      : "La Visa de Naciones Amigas es uno de los programas de residencia más poderosos para ciudadanos de más de 50 naciones que califican. En 2026, ofrece un camino simplificado hacia la residencia permanente a través de vínculos laborales, actividades profesionales o inversión inmobiliaria.",
    investmentTitle: isEn ? "Residency Through Real Estate" : "Residencia Mediante Bienes Raíces",
    investmentDesc: isEn 
      ? "In 2026, investing $200,000 USD or more in Panama real estate qualifies you and your family for the Friendly Nations Visa. This asset-based path is the preferred choice for Rockstar investors seeking high-yield property and a secure jurisdictional exit."
      : "En 2026, invertir $200,000 USD o más en bienes raíces en Panamá lo califica a usted y a su familia para la Visa de Naciones Amigas.",
    benefits: [
      { 
        icon: ShieldCheck, 
        title: isEn ? "Permanent Residency" : "Residencia Permanente", 
        desc: isEn ? "A clear path to permanent status and eventually Panamanian citizenship." : "Un camino claro hacia el estatus permanente y eventualmente la ciudadanía panameña." 
      },
      { 
        icon: Briefcase, 
        title: isEn ? "Work Permit" : "Permiso de Trabajo", 
        desc: isEn ? "Full rights to seek employment or establish a business in the Hub of the Americas." : "Plenos derechos para buscar empleo o establecer un negocio en el Hub de las Américas." 
      },
      { 
        icon: Building, 
        title: isEn ? "Tax Optimization" : "Optimización Fiscal", 
        desc: isEn ? "Panama's territorial tax system means your offshore income may be 100% tax-exempt." : "El sistema fiscal territorial de Panamá significa que sus ingresos extranjeros pueden estar 100% exentos." 
      },
      { 
        icon: Globe, 
        title: isEn ? "50+ Countries" : "Más de 50 Países", 
        desc: isEn ? "Includes USA, Canada, UK, Australia, EU member states, and more." : "Incluye EE. UU., Canadá, Reino Unido, Australia, estados miembros de la UE y más." 
      }
    ],
    ctaTitle: isEn ? "Start Your Professional Transition" : "Inicie su Transición Profesional",
    ctaDesc: isEn ? "Our legal partners and real estate advisors are ready to handle your full residency application." : "Nuestra equipo legal y asesores inmobiliarios están listos para tramitar su solicitud de residencia."
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-40 overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-GOLD/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-brand-GOLD/5 rounded-full blur-[140px] -mr-[450px] -mb-[450px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HERO SECTION */}
        <section className="py-20 text-center">
          <HeroTilt intensity={3} className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Jurisdictional Strategy 2026</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-brand-950 mb-10 tracking-tighter uppercase italic leading-[0.8]">
                {content.title.split(': ')[0]} <br />
                <span className="text-brand-GOLD">{content.title.split(': ')[1]}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed mb-16 italic">
                {content.subtitle}
              </p>
              
              <div className="flex flex-wrap justify-center gap-12">
                <Magnetic strength={0.3}>
                  <Link href={`/${lang}/relocation`} className="btn-3d btn-3d-gold px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[11px]">
                    RESIDENCY PORTAL
                  </Link>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <Link href={`/${lang}/proyectos`} className="btn-3d btn-3d-navy px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[11px] bg-white/5 backdrop-blur-3xl border border-brand-100">
                    INVESTMENT ASSETS
                  </Link>
                </Magnetic>
              </div>
            </motion.div>
          </HeroTilt>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-16 border-t border-brand-100">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {content.benefits.map((benefit, i) => (
              <div key={i} className="card-light p-6 rounded-[3.5rem] border-brand-100 hover:bg-brand-50 transition-all group reveal-on-scroll stagger-1">
                <div className="w-20 h-20 rounded-3xl bg-brand-GOLD/10 flex items-center justify-center text-brand-GOLD mb-10 group-hover:scale-110 transition-transform">
                  <benefit.icon size={44} />
                </div>
                <h4 className="text-2xl font-black text-brand-950 mb-6 uppercase italic tracking-tighter">{benefit.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INVESTMENT FOCUS */}
        <section className="py-14 relative">
          <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-brand-50/50 border border-brand-100 p-20 lg:p-32 relative reveal-on-scroll">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-GOLD/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
            
            <div className="grid lg:grid-cols-12 gap-24 items-center relative z-10">
               <div className="lg:col-span-7">
                  <TrendingUp className="text-brand-GOLD mb-10" size={64} />
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-brand-950 mb-12 tracking-tighter uppercase italic leading-[0.8]">{content.investmentTitle}</h2>
                  <div className="prose prose-invert prose-2xl text-slate-500 font-medium leading-relaxed mb-16">
                    <p>{content.investmentDesc}</p>
                    <ul className="space-y-6 mt-12 italic">
                      <li className="flex items-center gap-6"><CheckCircle size={24} className="text-brand-GOLD" /> $200,000 Asset Threshold</li>
                      <li className="flex items-center gap-6"><CheckCircle size={24} className="text-brand-GOLD" /> Spouse & Dependents Included</li>
                      <li className="flex items-center gap-6"><CheckCircle size={24} className="text-brand-GOLD" /> Rapid processing (4-6 months)</li>
                    </ul>
                  </div>
                  <Link href={`/${lang}/proyectos`} className="btn-3d btn-3d-gold px-12 py-6 rounded-xl font-black uppercase tracking-widest text-[11px] inline-flex items-center gap-4">
                    BROWSE QUALIFYING ASSETS <ArrowRight size={16} />
                  </Link>
               </div>
               <div className="lg:col-span-5 relative group h-[700px] rounded-[3.5rem] overflow-hidden border-8 border-brand-100 shadow-2xl transition-transform hover:scale-[1.02] duration-700">
                  <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1000&q=80" alt="Luxury Panama Office" className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-16 left-16 right-16">
                    <p className="text-white font-black text-2xl uppercase tracking-tighter italic">GLOBAL HQ STRATEGY</p>
                    <p className="text-brand-GOLD font-bold uppercase tracking-widest text-xs mt-4 italic">Efficiency Meets Lujo</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 text-center bg-brand-50 rounded-[6rem] border border-brand-100 reveal-on-scroll">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-brand-950 mb-16 tracking-tighter uppercase italic leading-[0.8]">{content.ctaTitle}</h2>
            <p className="text-2xl text-slate-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed italic">{content.ctaDesc}</p>
            <div className="flex flex-wrap justify-center gap-10">
              <Magnetic strength={0.4}>
                <Link href={`/${lang}/contacto`} className="btn-3d btn-3d-navy px-8 py-4 rounded-full font-black uppercase tracking-[0.3em] text-xs shadow-2xl">
                  CONSULT RESIDENCY EXPERT
                </Link>
              </Magnetic>
              <Magnetic strength={0.4}>
                <Link href={`/${lang}/relocation`} className="btn-3d btn-3d-gold px-8 py-4 rounded-full font-black uppercase tracking-[0.3em] text-xs">
                  RELOCATION OVERVIEW
                </Link>
              </Magnetic>
            </div>
        </section>
      </div>
    </div>
  );
};

export default FriendlyNationsVisaPage;
