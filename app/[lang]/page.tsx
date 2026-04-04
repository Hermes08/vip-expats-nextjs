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
  const lang = (resolvedParams?.lang || 'en') as 'en' | 'es' | 'pt' | 'de';
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
        ] : lang === 'pt' ? [
          { question: "Estrangeiros podem comprar imóveis no Panamá?", answer: "Sim. Os estrangeiros têm os mesmos direitos que os cidadãos panamenhos em relação à propriedade imobiliária. Você pode registrar o título em seu nome pessoal ou por meio de uma corporação/fundação panamenha." },
          { question: "O que é o Visto Pensionado do Panamá?", answer: "É um dos programas de aposentadoria mais populares do mundo. Oferece residência permanente a qualquer pessoa com uma pensão vitalícia de $1.000 ou mais por mês, com benefícios como 25% de desconto em serviços públicos e 50% em cinema." },
          { question: "Há impostos sobre propriedades no Panamá?", answer: "Sim, mas são relativamente baixos. Muitos novos empreendimentos se qualificam para isenções fiscais sobre o valor da construção por vários anos. A residência principal também tem uma isenção significativa nos primeiros $120.000." },
          { question: "É seguro investir em imóveis no Panamá?", answer: "Sim, desde que você conduza a devida diligência. O Panamá usa um sistema de Registro Público centralizado onde cada título é registrado, proporcionando alto nível de segurança." }
        ] : lang === 'de' ? [
          { question: "Können Ausländer Immobilien in Panama kaufen?", answer: "Ja. Ausländer haben dieselben Rechte wie panamaische Staatsbürger in Bezug auf Immobilieneigentum. Sie können den Titel auf Ihren persönlichen Namen oder über eine panamaische Gesellschaft/Stiftung halten." },
          { question: "Was ist das Panama Pensionado Visum?", answer: "Es ist eines der beliebtesten Rentenprogramme der Welt. Es gewährt dauerhafte Aufenthaltsgenehmigung für jeden mit einer lebenslangen Rente von $1.000 oder mehr pro Monat, mit Vorteilen wie 25% Rabatt auf Nebenkosten und 50% auf Kinotickets." },
          { question: "Gibt es Grundsteuern in Panama?", answer: "Ja, aber sie sind relativ niedrig. Viele Neubauten qualifizieren sich für Grundsteuerbefreiungen auf den Bauwert für mehrere Jahre. Der Hauptwohnsitz genießt auch eine erhebliche Befreiung auf die ersten $120.000." },
          { question: "Ist es sicher, in panamaische Immobilien zu investieren?", answer: "Ja, vorausgesetzt Sie führen eine ordnungsgemäße Due-Diligence durch. Panama verwendet ein zentralisiertes öffentliches Registerssystem, in dem jeder Titel erfasst wird, was ein hohes Sicherheitsniveau bietet." }
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
      <TrustBar lang={lang} />

      {/* 2b — QUIZ TEASER */}
      <QuizTeaser lang={lang} />

      {/* 3 — QUICK SEARCH + FEATURED LISTINGS */}
      <ClientSections lang={lang} />

      {/* 4 — VIP DEVELOPMENTS */}
      <section className="py-14 bg-brand-50 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 reveal-on-scroll">
            <div>
              <span className="text-brand-TEAL font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">
                {lang === 'es' ? 'Portafolio Seleccionado 2026' : lang === 'pt' ? 'Portfólio Selecionado 2026' : lang === 'de' ? 'Kuratiertes Portfolio 2026' : 'Curated Portfolio 2026'}
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-black text-brand-950 tracking-tight">
                {lang === 'es' ? 'DESARROLLOS' : lang === 'pt' ? 'EMPREENDIMENTOS' : lang === 'de' ? 'ENTWICKLUNGEN' : 'VIP'} <span className="text-brand-TEAL">
                  {lang === 'es' ? 'VIP' : lang === 'pt' ? 'VIP' : lang === 'de' ? 'VIP' : 'DEVELOPMENTS'}
                </span>
              </h2>
            </div>
            <Link href={`/${lang}/proyectos`} className="btn-3d btn-3d-gold px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center gap-2 whitespace-nowrap">
              {lang === 'es' ? 'VER TODOS' : lang === 'pt' ? 'VER TODOS' : lang === 'de' ? 'ALLE ANZEIGEN' : 'VIEW ALL'} <ArrowRight size={14} />
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
            <span className="text-brand-TEAL font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">
              {lang === 'es' ? 'Por Qué Elegirnos' : lang === 'pt' ? 'Por Que Nos Escolher' : lang === 'de' ? 'Warum Uns Wählen' : 'Why Choose Us'}
            </span>
            <h2 className="text-2xl md:text-4xl font-heading font-black text-brand-950 tracking-tight">{t.homepage.expatLifeTitle}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {(lang === 'es' ? [
              { icon: Compass, title: "Tours Curados", desc: "Acceso privado a tours de relocación en Panamá enfocados en sus objetivos específicos de ROI y estilo de vida." },
              { icon: ShieldCheck, title: "Equipo Elite en Tierra", desc: "Concierges legales que gestionan su visa de residencia y configuración bancaria offshore en tiempo récord." },
              { icon: Globe, title: "Validación de Estilo de Vida", desc: "Conéctese con líderes expatriados establecidos y personas de alto patrimonio antes de comprometer su capital." }
            ] : lang === 'pt' ? [
              { icon: Compass, title: "Tours Curados", desc: "Acesso privado a tours de relocação no Panamá focados nos seus objetivos específicos de ROI e estilo de vida." },
              { icon: ShieldCheck, title: "Equipe Elite em Campo", desc: "Concierges jurídicos que gerenciam seu visto de residência e configuração bancária offshore em tempo recorde." },
              { icon: Globe, title: "Validação de Estilo de Vida", desc: "Conecte-se com líderes expatriados estabelecidos e pessoas de alto patrimônio antes de comprometer seu capital." }
            ] : lang === 'de' ? [
              { icon: Compass, title: "Kuratierte Touren", desc: "Privater Zugang zu Panama-Relocation-Touren, ausgerichtet auf Ihre spezifischen ROI-Ziele und Lifestyle-Anforderungen." },
              { icon: ShieldCheck, title: "Elite-Bodenteam", desc: "Juristische Concierges, die Ihr Aufenthaltsvisum und die Offshore-Banking-Einrichtung in Rekordzeit abwickeln." },
              { icon: Globe, title: "Lebensstil-Überprüfung", desc: "Vernetzen Sie sich mit etablierten Expat-Führern und HNWI, bevor Sie Ihr Kapital einsetzen." }
            ] : [
              { icon: Compass, title: "Curated Tours", desc: "Private access to Panama relocation tours focused on your specific ROI goals and lifestyle requirements." },
              { icon: ShieldCheck, title: "Elite Ground Team", desc: "Legal concierges handling your residency visa and offshore banking setup in record time." },
              { icon: Globe, title: "Lifestyle Vetting", desc: "Connect with established expat leaders and HNWIs before you commit your capital." }
            ]).map((item, i) => (
              <div key={i} className={`card-light p-7 rounded-2xl hover:border-brand-TEAL/40 transition-all duration-500 group reveal-on-scroll stagger-${i + 1}`}>
                <item.icon className="text-brand-TEAL mb-5" size={32} />
                <h4 className="text-xl font-black mb-3 uppercase tracking-tight text-brand-950">{item.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust bullets */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4 reveal-on-scroll">
            {(lang === 'es' ? [
              "8–12% de rendimiento promedio de alquiler en Ciudad de Panamá",
              "Economía 100% USD — cero riesgo cambiario",
              "Los extranjeros poseen propiedades con derechos idénticos a los nacionales"
            ] : lang === 'pt' ? [
              "8–12% de rendimento médio de aluguel na Cidade do Panamá",
              "Economia 100% USD — zero risco cambial",
              "Estrangeiros possuem propriedades com direitos idênticos aos nacionais"
            ] : lang === 'de' ? [
              "8–12% durchschnittliche Mietrendite in Panama City",
              "Vollständige USD-Wirtschaft — kein Währungsrisiko",
              "Ausländer besitzen Immobilien mit identischen Rechten wie Einheimische"
            ] : [
              "8–12% average rental yield in Panama City",
              "Full USD economy — zero currency risk",
              "Foreigners own property with identical rights to nationals"
            ]).map((point, i) => (
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
            <span className="text-brand-TEAL font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">
              {lang === 'es' ? 'Preguntas Frecuentes' : lang === 'pt' ? 'Perguntas Frequentes' : lang === 'de' ? 'Häufige Fragen' : 'Common Questions'}
            </span>
            <h2 className="text-2xl md:text-4xl font-heading font-black text-brand-950 tracking-tight">{t.homepage.faqTitle}</h2>
          </div>

          <div className="grid gap-4">
            {(lang === 'es' ? [
              { q: "¿Pueden los extranjeros comprar propiedades en Panamá?", a: "Sí. Los extranjeros tienen los mismos derechos que los ciudadanos panameños cuando se trata de la propiedad de bienes raíces. Puede titular a su nombre personal o a través de una corporación/fundación panameña." },
              { q: "¿Qué es la Visa de Pensionado de Panamá?", a: "Es uno de los programas de jubilación más populares del mundo. Proporciona residencia permanente a cualquier persona con una pensión vitalicia de $1,000 o más al mes, con beneficios como 25% de descuento en servicios públicos y 50% en cine." },
              { q: "¿Hay impuestos sobre la propiedad en Panamá?", a: "Sí, pero son bajos. Muchos nuevos desarrollos califican para exenciones de impuestos de construcción por varios años. La residencia principal también disfruta de una exención significativa sobre los primeros $120,000 del valor registrado." },
              { q: "¿Es seguro invertir en bienes raíces en Panamá?", a: "Sí, siempre que realice una debida diligencia adecuada. Panamá utiliza un sistema de Registro Público centralizado donde se registra cada título, proporcionando un alto nivel de seguridad." }
            ] : lang === 'pt' ? [
              { q: "Estrangeiros podem comprar imóveis no Panamá?", a: "Sim. Os estrangeiros têm os mesmos direitos que os cidadãos panamenhos em relação à propriedade imobiliária. Você pode registrar o título em seu nome pessoal ou por meio de uma corporação/fundação panamenha." },
              { q: "O que é o Visto Pensionado do Panamá?", a: "É um dos programas de aposentadoria mais populares do mundo. Oferece residência permanente a qualquer pessoa com uma pensão vitalícia de $1.000 ou mais por mês, com 25% de desconto em serviços públicos e 50% em cinema." },
              { q: "Há impostos sobre propriedades no Panamá?", a: "Sim, mas são relativamente baixos. Muitos novos empreendimentos se qualificam para isenções fiscais sobre o valor da construção. A residência principal também tem isenção nos primeiros $120.000." },
              { q: "É seguro investir em imóveis no Panamá?", a: "Sim, desde que você conduza a devida diligência. O Panamá usa um sistema de Registro Público centralizado onde cada título é registrado, proporcionando alto nível de segurança." }
            ] : lang === 'de' ? [
              { q: "Können Ausländer Immobilien in Panama kaufen?", a: "Ja. Ausländer haben dieselben Rechte wie panamaische Staatsbürger bezüglich Immobilieneigentum. Sie können den Titel auf Ihren persönlichen Namen oder über eine panamaische Gesellschaft halten." },
              { q: "Was ist das Panama Pensionado Visum?", a: "Es ist eines der beliebtesten Rentenprogramme der Welt. Es gewährt dauerhafte Aufenthaltsgenehmigung für jeden mit einer Rente von $1.000 oder mehr pro Monat, mit 25% Rabatt auf Nebenkosten und 50% auf Kinotickets." },
              { q: "Gibt es Grundsteuern in Panama?", a: "Ja, aber sie sind relativ niedrig. Viele Neubauten qualifizieren sich für Grundsteuerbefreiungen auf den Bauwert. Der Hauptwohnsitz genießt auch eine erhebliche Befreiung auf die ersten $120.000." },
              { q: "Ist es sicher, in panamaische Immobilien zu investieren?", a: "Ja, vorausgesetzt Sie führen eine ordnungsgemäße Due-Diligence durch. Panama verwendet ein zentralisiertes öffentliches Registersystem, in dem jeder Titel erfasst wird, was ein hohes Sicherheitsniveau bietet." }
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
            <Link href={`/${lang}/guides/pensionado-visa-panama`} className="text-brand-TEAL font-bold uppercase tracking-widest text-[11px] border-b border-brand-TEAL/30 pb-1 hover:border-brand-TEAL transition-all">
              {lang === 'es' ? 'GUÍA PENSIONADO →' : lang === 'pt' ? 'GUIA PENSIONADO →' : lang === 'de' ? 'PENSIONADO-LEITFADEN →' : 'PENSIONADO GUIDE →'}
            </Link>
            <Link href={`/${lang}/guides/friendly-nations-visa-panama`} className="text-brand-TEAL font-bold uppercase tracking-widest text-[11px] border-b border-brand-TEAL/30 pb-1 hover:border-brand-TEAL transition-all">
              {lang === 'es' ? 'NACIONES AMIGAS →' : lang === 'pt' ? 'NAÇÕES AMIGAS →' : lang === 'de' ? 'FRIENDLY NATIONS →' : 'FRIENDLY NATIONS →'}
            </Link>
            <Link href={`/${lang}/locations/boquete-real-estate`} className="text-brand-TEAL font-bold uppercase tracking-widest text-[11px] border-b border-brand-TEAL/30 pb-1 hover:border-brand-TEAL transition-all">
              {lang === 'es' ? 'GUÍA BOQUETE →' : lang === 'pt' ? 'GUIA BOQUETE →' : lang === 'de' ? 'BOQUETE-LEITFADEN →' : 'BOQUETE GUIDE →'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
