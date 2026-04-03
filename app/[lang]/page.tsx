import React from 'react';
import Link from 'next/link';
import { PROJECTS, CONTENT } from '@/lib/constants';
import ProjectCard from '@/components/ProjectCard';
import LeadMagnet from '@/components/LeadMagnet';
import { ArrowRight, Compass, ShieldCheck, Globe, CheckCircle } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import QuizTeaser from '@/components/home/QuizTeaser';
import ClientSections from './ClientSections';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = (resolvedParams?.lang || 'es') as 'en' | 'es';
  const t = CONTENT[lang] || CONTENT['en'];

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'RealEstateAgent',
          name: 'VIP Expats Panama',
          url: 'https://panamarealestatesale.com',
          telephone: '+50767610315',
        }) }}
      />

      {/* 1 — HERO */}
      <HeroSection lang={lang} />

      {/* 2 — TRUST BAR */}
      <TrustBar />

      {/* 2b — QUIZ TEASER */}
      <QuizTeaser lang={lang} />

      {/* 3 — QUICK SEARCH + FEATURED LISTINGS */}
      <ClientSections lang={lang} />

      {/* 4 — VIP DEVELOPMENTS */}
      <section className="py-14 bg-brand-50 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 reveal-on-scroll">
            <div>
              <span className="text-brand-TEAL font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Curated Portfolio 2026</span>
              <h2 className="font-heading text-3xl md:text-5xl font-black text-brand-950 tracking-tight">VIP <span className="text-brand-TEAL">DEVELOPMENTS</span></h2>
            </div>
            <Link href={`/${lang}/proyectos`} className="btn-3d btn-3d-gold px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center gap-2 whitespace-nowrap">
              VIEW ALL <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project, idx) => (
              <div key={project.id} className={`reveal-on-scroll stagger-${(idx % 3) + 1}`}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — TESTIMONIALS */}
      <TestimonialsSection />

      {/* 6 — WHY VIP EXPATS */}
      <section className="py-14 bg-white overflow-hidden relative border-t border-brand-100">
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-10 reveal-on-scroll">
            <span className="text-brand-TEAL font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Why Choose Us</span>
            <h2 className="text-2xl md:text-4xl font-heading font-black text-brand-950 tracking-tight">{t.homepage.expatLifeTitle}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {[
              { icon: Compass, title: "Curated Tours", desc: "Private access to Panama relocation tours focused on your specific ROI goals and lifestyle requirements." },
              { icon: ShieldCheck, title: "Elite Ground Team", desc: "Legal concierges handling your residency visa and offshore banking setup in record time." },
              { icon: Globe, title: "Lifestyle Vetting", desc: "Connect with established expat leaders and HNWIs before you commit your capital." }
            ].map((item, i) => (
              <div key={i} className={`card-light p-7 rounded-2xl hover:border-brand-TEAL/40 transition-all duration-500 group reveal-on-scroll stagger-${i + 1}`}>
                <item.icon className="text-brand-TEAL mb-5" size={32} />
                <h4 className="text-xl font-black mb-3 uppercase tracking-tight text-brand-950">{item.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust bullets */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4 reveal-on-scroll">
            {[
              "8–12% average rental yield in Panama City",
              "Full USD economy — zero currency risk",
              "Foreigners own property with identical rights to nationals"
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 card-light p-4 rounded-xl">
                <CheckCircle size={16} className="text-brand-TEAL mt-0.5 flex-shrink-0" />
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — LEAD MAGNET */}
      <div className="reveal-on-scroll">
        <LeadMagnet />
      </div>

      {/* 8 — FAQ */}
      <section className="py-14 bg-brand-50 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10 reveal-on-scroll">
          <div className="text-center mb-10">
            <span className="text-brand-TEAL font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Common Questions</span>
            <h2 className="text-2xl md:text-4xl font-heading font-black text-brand-950 tracking-tight">{t.homepage.faqTitle}</h2>
          </div>

          <div className="grid gap-4">
            {(lang === 'es' ? [
              { q: "¿Pueden los extranjeros comprar propiedades en Panamá?", a: "Sí. Los extranjeros tienen los mismos derechos que los ciudadanos panameños cuando se trata de la propiedad de bienes raíces. Puede titular a su nombre personal o a través de una corporación/fundación panameña." },
              { q: "¿Qué es la Visa de Pensionado de Panamá?", a: "Es uno de los programas de jubilación más populares del mundo. Proporciona residencia permanente a cualquier persona con una pensión vitalicia de $1,000 o más al mes, con beneficios como 25% de descuento en servicios públicos y 50% en cine." },
              { q: "¿Hay impuestos sobre la propiedad en Panamá?", a: "Sí, pero son bajos. Muchos nuevos desarrollos califican para exenciones de impuestos de construcción por varios años. La residencia principal también disfruta de una exención significativa sobre los primeros $120,000 del valor registrado." },
              { q: "¿Es seguro invertir en bienes raíces en Panamá?", a: "Sí, siempre que realice una debida diligencia adecuada. Panamá utiliza un sistema de Registro Público centralizado donde se registra cada título, proporcionando un alto nivel de seguridad." }
            ] : [
              { q: "Can foreigners buy property in Panama?", a: "Yes. Foreigners have the same rights as Panamanian citizens when it comes to property ownership. You can hold title in your personal name or through a Panamanian corporation or foundation." },
              { q: "What is the Panama Pensionado Visa?", a: "It is one of the world's most popular retirement programs. It provides permanent residency to anyone with a lifetime pension of $1,000 or more per month, with benefits like 25% off utility bills and 50% off movie tickets." },
              { q: "Are there property taxes in Panama?", a: "Yes, but they are relatively low. Many new developments qualify for property tax exemptions on the construction value for several years. Primary residences also enjoy significant exemptions on the first $120,000." },
              { q: "Is it safe to invest in Panama real estate?", a: "Yes, provided you conduct proper due diligence. Panama uses a centralized Public Registry system where every title is recorded, providing a high level of security for investors." }
            ]).map((faq, i) => (
              <div key={i} className="card-light p-6 rounded-2xl hover:border-brand-TEAL/30 transition-all">
                <h4 className="text-base font-black text-brand-950 mb-3 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-TEAL text-white flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">?</span>
                  {faq.q}
                </h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Link href={`/${lang}/guides/pensionado-visa-panama`} className="text-brand-TEAL font-bold uppercase tracking-widest text-[11px] border-b border-brand-TEAL/30 pb-1 hover:border-brand-TEAL transition-all">PENSIONADO GUIDE →</Link>
            <Link href={`/${lang}/guides/friendly-nations-visa-panama`} className="text-brand-TEAL font-bold uppercase tracking-widest text-[11px] border-b border-brand-TEAL/30 pb-1 hover:border-brand-TEAL transition-all">FRIENDLY NATIONS →</Link>
            <Link href={`/${lang}/locations/boquete-real-estate`} className="text-brand-TEAL font-bold uppercase tracking-widest text-[11px] border-b border-brand-TEAL/30 pb-1 hover:border-brand-TEAL transition-all">BOQUETE GUIDE →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
