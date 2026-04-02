import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS, IMAGES, CONTENT } from '@/lib/constants';
import ProjectCard from '@/components/ProjectCard';
import LeadMagnet from '@/components/LeadMagnet';
import { ArrowRight, Compass, ShieldCheck, Globe, TrendingUp, CheckCircle, Star } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import ClientSections from './ClientSections';
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

      {/* HERO */}
      <HeroSection lang={lang} />
      <TrustBar />

      {/* QUICK SEARCH + FEATURED LISTINGS (client-side, SSR disabled) */}
      <ClientSections lang={lang} />

      {/* MARKET STATS + VIDEO — compact 2-col */}
      <section className="py-14 bg-brand-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Stats column */}
            <div className="reveal-on-scroll">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">Panama Market 2026</span>
              <h2 className="text-2xl md:text-4xl font-heading font-black text-white mb-4 tracking-tight">{t.homepage.marketTitle}</h2>
              <p className="text-slate-400 text-base font-medium leading-relaxed mb-8 max-w-lg">{t.homepage.marketBody}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Rental Yield", val: "8–12%", icon: TrendingUp },
                  { label: "Safety Rank", val: "#1", icon: ShieldCheck },
                  { label: "Expat Community", val: "25k+", icon: Globe },
                  { label: "Tax Benefits", val: "Tier-1", icon: Star }
                ].map((stat, i) => (
                  <div key={i} className="glass-card p-5 rounded-2xl border-white/5 hover:border-brand-GOLD/30 transition-all group text-center">
                    <stat.icon className="mx-auto mb-2 text-brand-GOLD" size={20} />
                    <div className="text-2xl font-black text-white mb-1 tracking-tight">{stat.val}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-6 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-GOLD">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm tracking-tight uppercase">Appreciation</p>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">+12% Annualized</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-GOLD">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm tracking-tight uppercase">Currency</p>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Full USD</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video column */}
            <div className="reveal-on-scroll stagger-1">
              <VideoThumbnail
                videoUrl="https://youtu.be/sDW0cwto6aQ?t=681"
                title="Experience The VIP Expats Panama Lifestyle"
                className="w-full shadow-xl border border-brand-GOLD/20 rounded-2xl"
              />
              <VideoSchema
                videoUrl="https://youtu.be/sDW0cwto6aQ?t=681"
                name="VIP Expats: Panama Luxury Real Estate Experience"
                description="See why international investors choose VIP Expats for their Panama relocation and investment journey."
                uploadDate="2024-01-01"
              />
              <div className="sr-only">
                <h3>Video: Experience The VIP Expats Panama Lifestyle</h3>
                <p>This video showcases premium real estate and relocation services in Panama, including luxury beachfront properties, high-yield investment opportunities, and comprehensive support for international investors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP DEVELOPMENTS */}
      <section className="py-14 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 reveal-on-scroll">
            <div>
              <span className="text-brand-GOLD font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Curated Portfolio 2026</span>
              <h2 className="font-heading text-3xl md:text-5xl font-black text-white tracking-tight">VIP <span className="text-brand-GOLD">DEVELOPMENTS</span></h2>
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

      {/* NEIGHBORHOODS */}
      <section className="py-14 bg-brand-950 border-y border-white/5 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 reveal-on-scroll">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Top Areas</span>
            <h2 className="text-2xl md:text-4xl font-heading font-black text-white tracking-tight">{t.homepage.neighborhoodsTitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 reveal-on-scroll">
            {[
              { id: 'punta-pacifica', name: 'Punta Pacifica', level: 'Urban Luxury', yield: '6-8%' },
              { id: 'santa-maria', name: 'Santa Maria', level: 'Golf Exclusive', yield: '7-9%' },
              { id: 'coronado', name: 'Coronado Beach', level: 'Coastal Living', yield: '8-10%' },
              { id: 'boquete', name: 'Boquete', level: 'Mountain Retreat', yield: '5-7%' }
            ].map((area, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border-white/5 hover:border-brand-GOLD/40 transition-all group">
                <div className="text-brand-GOLD mb-4"><Compass size={28} /></div>
                <h4 className="text-lg font-black text-white mb-3 uppercase tracking-tight">{area.name}</h4>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <span>Profile</span>
                    <span className="text-white">{area.level}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <span>Avg ROI</span>
                    <span className="text-brand-GOLD">{area.yield}</span>
                  </div>
                </div>
                <Link href={`/${lang}/propiedades`} className="mt-5 block text-[10px] font-black uppercase tracking-widest text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all">
                  VIEW LISTINGS →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT ROI */}
      <section className="py-14 bg-brand-950 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center reveal-on-scroll">
            <div className="glass-card p-8 rounded-3xl border-white/5 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-GOLD/30 to-transparent"></div>
              <TrendingUp className="text-brand-GOLD mb-6" size={40} />
              <h3 className="text-2xl md:text-3xl font-heading font-black text-white mb-5 uppercase tracking-tight">{t.homepage.investmentTitle}</h3>
              <p className="text-slate-400 text-base font-medium leading-relaxed mb-8">{t.homepage.investmentBody}</p>
              <ul className="space-y-5">
                <li className="flex items-start gap-5">
                  <div className="bg-brand-GOLD text-brand-900 p-2 rounded-xl shadow-[0_8px_20px_-5px_theme(colors.brand.GOLD/0.5)] flex-shrink-0">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <p className="text-lg font-black text-white mb-1 uppercase tracking-tight">Tax Exemption 2026</p>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">New Panama beachfront condos qualify for accelerated fiscal incentives through Law 122.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="bg-brand-GOLD text-brand-900 p-2 rounded-xl shadow-[0_8px_20px_-5px_theme(colors.brand.GOLD/0.5)] flex-shrink-0">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <p className="text-lg font-black text-white mb-1 uppercase tracking-tight">Dollarized Stability</p>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">The only Latin American economy with full USD integration and no inflation risk.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative group overflow-hidden rounded-3xl shadow-xl h-[400px] border border-white/5 transition-transform duration-500 hover:scale-[1.01]">
              <Image src={IMAGES.heroSlides[3]} alt="Investment Quality Panama Real Estate" fill className="object-cover transition-transform duration-[5000ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-brand-GOLD font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Benchmark Performance</span>
                <h4 className="text-2xl font-black text-white uppercase tracking-tight leading-tight">SECURING THE CARIBBEAN FRONTIER</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <div className="reveal-on-scroll">
        <LeadMagnet />
      </div>

      {/* BUYING PROCESS */}
      <section className="py-14 bg-black relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start reveal-on-scroll">
            <div>
              <span className="text-brand-GOLD font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">How It Works</span>
              <h2 className="text-2xl md:text-4xl font-heading font-black text-white mb-4 tracking-tight">{t.homepage.buyingProcessTitle}</h2>
              <p className="text-lg text-slate-400 font-medium leading-relaxed border-l-4 border-brand-GOLD/30 pl-5">
                {t.homepage.buyingProcessBody}
              </p>
            </div>
            <div className="grid gap-6">
              {[
                { step: "01", title: "Asset Selection", desc: "Identify properties matching your ROI or lifestyle goals with full title verification." },
                { step: "02", title: "Purchase Commitment", desc: "Sign the Promise to Purchase and place 10% deposit into secure escrow." },
                { step: "03", title: "Legal Onboarding", desc: "Dedicated Panama attorney performs multi-layer due diligence and title search." },
                { step: "04", title: "Closing & Transfer", desc: "Final deed signing before Notary and registration with the National Public Registry." }
              ].map((stage, i) => (
                <div key={i} className="flex gap-5 reveal-on-scroll stagger-1">
                  <div className="text-brand-GOLD font-heading text-3xl font-black opacity-40 italic flex-shrink-0 w-12">{stage.step}</div>
                  <div>
                    <h4 className="text-white text-base font-black uppercase tracking-tight mb-1">{stage.title}</h4>
                    <p className="text-slate-500 text-sm font-medium">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14 bg-black text-white overflow-hidden relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-10 reveal-on-scroll">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">How We Help</span>
            <h2 className="text-2xl md:text-4xl font-heading font-black tracking-tight">{t.homepage.expatLifeTitle}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {[
              { icon: Compass, title: "Curated Tours", desc: "Private access to Panama relocation tours focused on your specific ROI goals and lifestyle requirements." },
              { icon: ShieldCheck, title: "Elite Ground Team", desc: "Legal concierges handling your residency visa and offshore banking setup in record time." },
              { icon: Globe, title: "Lifestyle Vetting", desc: "Connect with established expat leaders and HNWIs before you commit your capital." }
            ].map((item, i) => (
              <div key={i} className={`glass-card p-7 rounded-2xl border-white/5 hover:bg-brand-GOLD hover:text-brand-900 transition-all duration-500 group reveal-on-scroll stagger-${i + 1}`}>
                <item.icon className="text-brand-GOLD mb-5 group-hover:text-brand-900 transition-all" size={32} />
                <h4 className="text-xl font-black mb-3 uppercase tracking-tight">{item.title}</h4>
                <p className="text-slate-400 group-hover:text-brand-900 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-brand-950 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10 reveal-on-scroll">
          <div className="text-center mb-10">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Common Questions</span>
            <h2 className="text-2xl md:text-4xl font-heading font-black text-white tracking-tight">{t.homepage.faqTitle}</h2>
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
              <div key={i} className="glass-card p-6 rounded-2xl border-white/5 hover:border-brand-GOLD/30 transition-all">
                <h4 className="text-base font-black text-white mb-3 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-GOLD text-brand-900 flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">?</span>
                  {faq.q}
                </h4>
                <p className="text-slate-400 text-sm font-medium leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Link href={`/${lang}/guides/pensionado-visa-panama`} className="text-brand-GOLD font-bold uppercase tracking-widest text-[11px] border-b border-brand-GOLD/30 pb-1 hover:border-brand-GOLD transition-all">PENSIONADO GUIDE →</Link>
            <Link href={`/${lang}/guides/friendly-nations-visa-panama`} className="text-brand-GOLD font-bold uppercase tracking-widest text-[11px] border-b border-brand-GOLD/30 pb-1 hover:border-brand-GOLD transition-all">FRIENDLY NATIONS →</Link>
            <Link href={`/${lang}/locations/boquete-real-estate`} className="text-brand-GOLD font-bold uppercase tracking-widest text-[11px] border-b border-brand-GOLD/30 pb-1 hover:border-brand-GOLD transition-all">BOQUETE GUIDE →</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-brand-950 text-center relative overflow-hidden border-t border-white/5">
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <span className="text-brand-GOLD font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">Start Your Journey</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 tracking-tight">READY FOR THE <span className="text-brand-GOLD">UPGRADE?</span></h2>
          <p className="text-slate-400 text-base mb-8">Connect with our Panama advisors and start finding the right property for your lifestyle or investment goals.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${lang}/contacto`} className="btn-3d btn-3d-navy px-10 py-4 rounded-full font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center">CONTACT AN ADVISOR</Link>
            <Link href={`/${lang}/tours`} className="btn-3d btn-3d-gold px-10 py-4 rounded-full font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center">BOOK A DISCOVERY TOUR</Link>
          </div>
        </div>
      </section>
    </>
  );
}
