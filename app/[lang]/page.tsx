import React from 'react';
import Link from 'next/link';
import { PROJECTS, IMAGES, CONTENT } from '@/lib/constants';
import ProjectCard from '@/components/ProjectCard';
import LeadMagnet from '@/components/LeadMagnet';
import { ArrowRight, Compass, ShieldCheck, Globe, TrendingUp, CheckCircle, Star } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import VideoThumbnail from '@/components/ui/VideoThumbnail';
import VideoSchema from '@/components/seo/VideoSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import FAQSchema from '@/components/seo/FAQSchema';

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
      
      {/* HERO EXPERIENCE (CLIENT COMPONENT) */}
      <HeroSection lang={lang} />

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
                <div key={i} className={`glass-card p-12 rounded-[2.5rem] text-center border-white/5 hover:border-brand-GOLD/30 transition-all group ${i % 2 === 1 ? 'mt-12' : 'mb-0'}`}>
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

      {/* MARKET OVERVIEW: DATA DRIVEN LUXURY */}
      <section className="py-48 bg-black relative">
        <div className="absolute inset-0 bg-mesh-glow opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 reveal-on-scroll">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Economic Foresight 2026</span>
              <h2 className="text-5xl md:text-8xl font-heading font-black text-white mb-12 tracking-tighter uppercase italic leading-[0.8]">{t.homepage.marketTitle}</h2>
              <div className="prose prose-invert prose-2xl text-slate-400 font-medium leading-relaxed mb-16 whitespace-pre-line">
                {t.homepage.marketBody}
              </div>
              <div className="flex flex-wrap gap-12">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-GOLD">
                    <TrendingUp size={28} />
                  </div>
                  <div>
                    <p className="text-white font-black text-xl tracking-tighter uppercase italic">Appreciation</p>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">+12% Annualized</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-GOLD">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <p className="text-white font-black text-xl tracking-tighter uppercase italic">Currency</p>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Full USD Dollarization</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 reveal-on-scroll stagger-2">
              <div className="relative group rounded-[4rem] overflow-hidden border-8 border-white/5 aspect-[4/5] shadow-2xl">
                <img src={IMAGES.heroSlides[2]} alt="Panama Real Estate Market Trends" className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-16 left-16 right-16">
                  <div className="glass-card p-10 rounded-3xl border-white/10 backdrop-blur-3xl">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-GOLD mb-4">Investment Insight</p>
                    <p className="text-white text-xl font-bold leading-tight uppercase italic tracking-tighter">"Panama remains the only safe-haven asset class in Latin America for true capital preservation."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* NEIGHBORHOOD GUIDE: THE MATRIX */}
      <section className="py-48 bg-brand-950 border-y border-white/5 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-32 reveal-on-scroll">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">Strategic Geography</span>
            <h2 className="text-5xl md:text-9xl font-heading font-black text-white mb-12 tracking-tighter uppercase italic leading-[0.8]">{t.homepage.neighborhoodsTitle}</h2>
            <div className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed whitespace-pre-line opacity-80">
              {t.homepage.neighborhoodBody}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 reveal-on-scroll">
            {[
              { id: 'punta-pacifica', name: 'Punta Pacifica', level: 'Urban Luxury', yield: '6-8%' },
              { id: 'santa-maria', name: 'Santa Maria', level: 'Golf Exclusive', yield: '7-9%' },
              { id: 'coronado', name: 'Coronado Beach', level: 'Coastal Living', yield: '8-10%' },
              { id: 'boquete', name: 'Boquete', level: 'Mountain Retreat', yield: '5-7%' }
            ].map((area, idx) => (
              <div key={idx} className="glass-card p-12 rounded-[3.5rem] border-white/5 hover:border-brand-GOLD/40 transition-all group reveal-on-scroll stagger-1">
                <div className="text-brand-GOLD mb-8 group-hover:scale-110 transition-transform"><Compass size={40} /></div>
                <h4 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter">{area.name}</h4>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <span>Profile</span>
                    <span className="text-white">{area.level}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <span>Avg ROI</span>
                    <span className="text-brand-GOLD">{area.yield}</span>
                  </div>
                </div>
                <Link href={`/${lang}/locations`} className="mt-10 block text-[9px] font-black uppercase tracking-[0.4em] text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all hover:translate-x-2">VIEW INVENTORY →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* BUYING PROCESS: THE EXPAT ROADMAP */}
      <section className="py-48 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-32 items-center mb-40 reveal-on-scroll">
            <div className="lg:w-1/2">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Acquisition Framework</span>
              <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-12 tracking-tighter uppercase italic leading-[0.8]">{t.homepage.buyingProcessTitle}</h2>
              <div className="text-2xl text-slate-400 font-medium leading-relaxed italic border-l-4 border-brand-GOLD/20 pl-12">
                {t.homepage.buyingProcessBody}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="grid gap-12">
                 {[
                   { step: "01", title: "Asset Selection", desc: "Identification of properties matching your ROI or lifestyle goals with full title verification." },
                   { step: "02", title: "Purchase Commitment", desc: "Signing of the Promise to Purchase and 10% deposit into secure escrow." },
                   { step: "03", title: "Legal Onboarding", desc: "Dedicated Panama attorney performs multi-layer due diligence and title search." },
                   { step: "04", title: "Closing & Transfer", desc: "Final deed signing before Notary and registration with the National Public Registry." }
                 ].map((stage, i) => (
                   <div key={i} className="flex gap-10 reveal-on-scroll stagger-1">
                     <div className="text-brand-GOLD font-heading text-5xl font-black opacity-30 italic">{stage.step}</div>
                     <div>
                       <h4 className="text-white text-2xl font-black uppercase italic tracking-tighter mb-2">{stage.title}</h4>
                       <p className="text-slate-500 font-medium">{stage.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* FAQ SECTION: ENHANCED UX */}
      <section className="py-48 bg-brand-950 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10 reveal-on-scroll">
          <div className="text-center mb-32">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">Intelligence Base</span>
            <h2 className="text-5xl md:text-8xl font-heading font-black text-white mb-12 tracking-tighter uppercase italic leading-[0.8]">{t.homepage.faqTitle}</h2>
          </div>
          
          <div className="grid gap-8">
            {(lang === 'es' ? [
              { q: "¿Pueden los extranjeros comprar propiedades en Panamá?", a: "Sí. Los extranjeros tienen los mismos derechos que los ciudadanos panameños cuando se trata de la propiedad de bienes raíces. Puede titular a su nombre personal o a través de una corporación/fundación panameña." },
              { q: "¿Qué es la Visa de Pensionado de Panamá?", a: "Es uno de los programas de jubilación más populares del mundo. Proporciona residencia permanente a cualquier persona con una pensión vitalicia de $1,000 o más al mes, con beneficios como 25% de descuento en servicios públicos y 50% en cine." },
              { q: "¿Hay impuestos sobre la propiedad en Panamá?", a: "Sí, pero son bajos. Muchos nuevos desarrollos califican para exenciones de impuestos de construcción por varios años. La residencia principal también disfruta de una exención significativa sobre los primeros $120,000 del valor registrado." },
              { q: "¿Es seguro invertir en bienes raíces en Panamá?", a: "Sí, siempre que realice una debida diligencia adecuada. Panamá utiliza un sistema de Registro Público centralizado donde se registra cada título, proporcionando un alto nivel de seguridad." }
            ] : [
              { q: "Can foreigners buy property in Panama?", answer: "Yes. Foreigners have the same rights as Panamanian citizens when it comes to property ownership. You can hold title in your personal name or through a Panamanian corporation or foundation." },
              { q: "What is the Panama Pensionado Visa?", answer: "It is one of the world's most popular retirement programs. It provides permanent residency to anyone with a lifetime pension of $1,000 or more per month, with benefits like 25% off utility bills and 50% off movie tickets." },
              { q: "Are there property taxes in Panama?", answer: "Yes, but they are relatively low. Many new developments qualify for property tax exemptions on the construction value for several years. Primary residences also enjoy significant exemptions on the first $120,000." },
              { q: "Is it safe to invest in Panama real estate?", answer: "Yes, provided you conduct proper due diligence. Panama uses a centralized Public Registry system where every title is recorded, providing a high level of security for investors." }
            ]).map((faq, i) => (
              <div key={i} className="glass-card p-12 rounded-3xl border-white/5 hover:border-brand-GOLD/30 transition-all reveal-on-scroll stagger-1">
                <h4 className="text-xl font-black text-white mb-6 uppercase italic tracking-tighter flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-GOLD text-brand-900 flex items-center justify-center text-xs font-black not-italic">?</div>
                  {faq.q || faq.question}
                </h4>
                <p className="text-slate-400 font-medium leading-relaxed pl-12 opacity-80">{faq.a || faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-32 text-center">
             <p className="text-slate-500 font-black uppercase tracking-[0.4em] text-[10px] mb-10">Deep Dive into {lang === 'es' ? 'el Mercado' : 'the Market'}</p>
             <div className="flex flex-wrap justify-center gap-8">
               <Link href={`/${lang}/guides/pensionado-visa-panama`} className="text-brand-GOLD font-bold uppercase tracking-widest text-[11px] border-b border-brand-GOLD/30 pb-2 hover:border-brand-GOLD transition-all">PENSIONADO GUIDE →</Link>
               <Link href={`/${lang}/guides/friendly-nations-visa-panama`} className="text-brand-GOLD font-bold uppercase tracking-widest text-[11px] border-b border-brand-GOLD/30 pb-2 hover:border-brand-GOLD transition-all">FRIENDLY NATIONS GUIDE →</Link>
               <Link href={`/${lang}/locations/boquete-real-estate`} className="text-brand-GOLD font-bold uppercase tracking-widest text-[11px] border-b border-brand-GOLD/30 pb-2 hover:border-brand-GOLD transition-all">BOQUETE ANALYSIS →</Link>
             </div>
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
