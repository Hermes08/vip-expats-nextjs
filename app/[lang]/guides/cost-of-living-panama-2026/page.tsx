'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Home, Utensils, Car, Wifi, Heart, ShoppingCart, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Magnetic from '@/components/ui/Magnetic';
import HeroTilt from '@/components/ui/HeroTilt';

const CostOfLivingPanamaPage = () => {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const content = {
    badge: isEn ? 'Expat Budget Guide 2026' : 'Guía de Presupuesto para Expats 2026',
    title: isEn ? 'Cost of Living Panama 2026' : 'Costo de Vida en Panamá 2026',
    titleAccent: isEn ? 'Expat Budget Guide' : 'Guía de Presupuesto',
    subtitle: isEn
      ? 'Everything you need to know about monthly expenses, housing costs, and how far your money goes as an expat in Panama in 2026.'
      : 'Todo lo que necesita saber sobre los gastos mensuales, los costos de vivienda y cuánto rinde su dinero como expat en Panamá en 2026.',

    introTitle: isEn ? 'Why Panama Tops Every Expat Budget List' : 'Por Qué Panamá Encabeza Cada Lista de Presupuesto Expat',
    intro: isEn
      ? "Panama consistently ranks among the most affordable developed-infrastructure destinations in the Americas. In 2026, a couple can live comfortably in Panama City for $2,500–$3,500/month, or as low as $1,800/month in smaller towns like Boquete or Coronado. The country uses the US Dollar, eliminating currency risk, and offers world-class healthcare, fiber-optic internet, and modern infrastructure at a fraction of North American prices."
      : "Panamá se clasifica consistentemente entre los destinos con mejor infraestructura desarrollada y más asequibles de las Américas. En 2026, una pareja puede vivir cómodamente en Ciudad de Panamá por $2,500–$3,500/mes, o tan bajo como $1,800/mes en ciudades más pequeñas como Boquete o Coronado. El país usa el Dólar Americano, eliminando el riesgo cambiario.",

    categoriesTitle: isEn ? 'Monthly Cost Breakdown' : 'Desglose de Costos Mensuales',
    categories: [
      {
        icon: Home,
        title: isEn ? 'Housing & Rent' : 'Vivienda y Alquiler',
        range: '$600 – $2,500',
        detail: isEn
          ? 'A furnished 1-bed apartment in Panama City runs $700–$1,200/month. Modern 2-bed condos in Casco Viejo or Punta Pacifica reach $1,500–$2,500. Outside the city, quality rentals start at $500–$800/month. Property owners benefit from even lower monthly costs once mortgages on Panama real estate are factored in.'
          : 'Un apartamento amueblado de 1 habitación en Ciudad de Panamá cuesta $700–$1,200/mes. Condos modernos de 2 habitaciones en Casco Viejo o Punta Pacífica alcanzan $1,500–$2,500. Fuera de la ciudad, los alquileres de calidad comienzan en $500–$800/mes.',
      },
      {
        icon: Utensils,
        title: isEn ? 'Food & Groceries' : 'Alimentación y Supermercado',
        range: '$400 – $900',
        detail: isEn
          ? "Groceries at supermarkets like El Rey or Super 99 cost 20–40% less than comparable US stores. A couple spending on local produce, meats, and imports typically budgets $400–$600/month. Dining out ranges from $3–$8 at local fondas to $15–$40 at Panama City's fine dining scene."
          : 'Los víveres en supermercados como El Rey o Super 99 cuestan 20–40% menos que en tiendas comparables de EE.UU. Una pareja que compra en mercados locales presupuesta típicamente $400–$600/mes.',
      },
      {
        icon: Heart,
        title: isEn ? 'Healthcare' : 'Salud y Medicina',
        range: '$150 – $600',
        detail: isEn
          ? "Panama's healthcare is world-class and US Dollar-priced. A GP consultation costs $30–$60. Private health insurance for a couple typically runs $150–$400/month. Panama City is home to Hospital Nacional and Punta Pacifica Hospital (affiliated with Johns Hopkins), providing care on par with top US facilities at 40–70% lower cost."
          : 'La atención médica en Panamá es de clase mundial. Una consulta con médico general cuesta $30–$60. El seguro médico privado para una pareja cuesta $150–$400/mes. Los hospitales afiliados a Johns Hopkins ofrecen atención comparable a las mejores instalaciones de EE.UU.',
      },
      {
        icon: Car,
        title: isEn ? 'Transportation' : 'Transporte',
        range: '$50 – $500',
        detail: isEn
          ? "Panama City's Metro and bus system (Metrobús) allows car-free living for $30–$50/month. Uber and taxis are affordable — a cross-city trip rarely exceeds $10. Car owners pay $300–$500/month when accounting for gas (~$3.50/gallon), insurance, and parking. Many expats find they need no car at all in urban areas."
          : 'El Metro y el sistema de buses (Metrobús) de Ciudad de Panamá permiten vivir sin carro por $30–$50/mes. Uber y taxis son económicos — un viaje por la ciudad raramente supera los $10.',
      },
      {
        icon: Wifi,
        title: isEn ? 'Utilities & Internet' : 'Servicios e Internet',
        range: '$80 – $250',
        detail: isEn
          ? 'Electricity is the largest utility expense, averaging $60–$150/month depending on AC use. Water runs $15–$30/month. Fiber-optic internet (100–500 Mbps) from providers like Cable Onda or Claro costs $40–$70/month. Panama City has among the fastest internet infrastructure in Central America, making it ideal for remote workers.'
          : 'La electricidad es el mayor gasto de servicios, promediando $60–$150/mes según el uso de A/C. El internet de fibra óptica (100–500 Mbps) cuesta $40–$70/mes.',
      },
      {
        icon: ShoppingCart,
        title: isEn ? 'Entertainment & Lifestyle' : 'Entretenimiento y Estilo de Vida',
        range: '$200 – $600',
        detail: isEn
          ? "Panama punches above its weight on lifestyle. Gym memberships run $30–$80/month. A couple dining out 3x/week budgets $200–$400/month. Movies cost $5–$8 (50% off with a Pensionado Visa). Weekend trips to Bocas del Toro, the Pearl Islands, or Boquete add $100–$300/month to an active lifestyle budget."
          : 'La membresía al gimnasio cuesta $30–$80/mes. Una pareja que sale a cenar 3 veces/semana presupuesta $200–$400/mes. Con la Visa de Pensionado, los descuentos del 50% en entretenimiento reducen significativamente estos costos.',
      },
    ],

    budgetTitle: isEn ? 'Sample Monthly Budgets' : 'Presupuestos Mensuales de Ejemplo',
    budgets: [
      {
        label: isEn ? 'Budget Expat' : 'Expat Económico',
        total: '$1,800 – $2,200',
        location: isEn ? 'Smaller towns (Boquete, El Valle, Coronado)' : 'Ciudades pequeñas (Boquete, El Valle, Coronado)',
        items: isEn
          ? ['Simple apartment: $600–$800', 'Groceries (local focus): $350–$500', 'Healthcare: $150–$200', 'Utilities: $100–$150', 'Transport: $50–$100', 'Entertainment: $150–$250']
          : ['Apartamento simple: $600–$800', 'Víveres (local): $350–$500', 'Salud: $150–$200', 'Servicios: $100–$150', 'Transporte: $50–$100', 'Entretenimiento: $150–$250'],
      },
      {
        label: isEn ? 'Comfortable Couple' : 'Pareja Cómoda',
        total: '$2,800 – $3,800',
        location: isEn ? 'Panama City (San Francisco, El Cangrejo, Costa del Este)' : 'Ciudad de Panamá (San Francisco, El Cangrejo, Costa del Este)',
        items: isEn
          ? ['Modern 2-bed apartment: $1,200–$1,800', 'Groceries + dining out: $600–$900', 'Healthcare + insurance: $300–$450', 'Utilities: $150–$250', 'Car or Uber: $200–$400', 'Entertainment: $300–$500']
          : ['Apartamento 2 hab. moderno: $1,200–$1,800', 'Víveres + restaurantes: $600–$900', 'Salud + seguro: $300–$450', 'Servicios: $150–$250', 'Carro o Uber: $200–$400', 'Entretenimiento: $300–$500'],
      },
      {
        label: isEn ? 'Luxury Lifestyle' : 'Estilo de Vida de Lujo',
        total: '$5,000 – $9,000+',
        location: isEn ? 'Punta Pacifica, Costa del Este, Santa Maria Golf' : 'Punta Pacífica, Costa del Este, Santa Maria Golf',
        items: isEn
          ? ['Premium condo or golf community: $2,500–$4,500', 'Fine dining + premium groceries: $1,200–$2,000', 'Concierge healthcare: $500–$800', 'Utilities (luxury): $300–$500', 'Private vehicle: $500–$900', 'Golf + clubs + travel: $700–$1,500']
          : ['Condo premium o comunidad de golf: $2,500–$4,500', 'Restaurantes finos + víveres premium: $1,200–$2,000', 'Salud de conserjería: $500–$800', 'Servicios (lujo): $300–$500', 'Vehículo privado: $500–$900', 'Golf + clubes + viajes: $700–$1,500'],
      },
    ],

    tipsTitle: isEn ? 'Top Money-Saving Tips for Panama Expats' : 'Principales Consejos para Ahorrar Dinero en Panamá',
    tips: isEn
      ? [
          'Apply for the Pensionado Visa — 50% off entertainment, 30% off public transit, 25% off utility bills, 20% off medical consultations.',
          'Shop at local markets (mercados) for produce — 60–70% cheaper than supermarkets.',
          'Use the Metro for daily commuting — the cheapest transit system in the region.',
          'Negotiate annual lease contracts — landlords often discount 10–15% for 12-month commitments.',
          'Choose a condo with a rooftop pool and gym — eliminates costly club memberships.',
          'Use Panama-based private healthcare for routine care, not premium expat insurance plans.',
        ]
      : [
          'Solicite la Visa de Pensionado — 50% de descuento en entretenimiento, 30% en transporte público, 25% en facturas de servicios, 20% en consultas médicas.',
          'Compre en mercados locales — 60–70% más barato que los supermercados.',
          'Use el Metro para el transporte diario — el sistema de tránsito más económico de la región.',
          'Negocie contratos de arrendamiento anual — los propietarios suelen dar 10–15% de descuento.',
          'Elija un condo con piscina y gimnasio en la azotea — elimina membresías costosas.',
          'Use la atención médica privada panameña para cuidados de rutina.',
        ],

    breadcrumb: {
      home: isEn ? 'Home' : 'Inicio',
      guides: isEn ? 'Guides' : 'Guías',
      page: isEn ? 'Cost of Living Panama 2026' : 'Costo de Vida en Panamá 2026',
    },

    ctaTitle: isEn ? 'Ready to Make the Move?' : '¿Listo para Mudarse?',
    ctaDesc: isEn
      ? 'Our expat relocation specialists will show you the best properties that fit your lifestyle and budget — including options that cost less than renting long-term.'
      : 'Nuestros especialistas en reubicación de expats le mostrarán las mejores propiedades que se adapten a su estilo de vida y presupuesto.',
    ctaWhatsApp: isEn ? 'Chat on WhatsApp' : 'Chatea en WhatsApp',
    ctaProperties: isEn ? 'Browse Properties' : 'Ver Propiedades',
  };

  return (
    <div className="bg-brand-950 min-h-screen pt-24 pb-40 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] bg-brand-GOLD/5 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-16 pt-4">
          <Link href={`/${lang}`} className="hover:text-brand-GOLD transition-colors">{content.breadcrumb.home}</Link>
          <span className="text-slate-700">/</span>
          <Link href={`/${lang}/guides`} className="hover:text-brand-GOLD transition-colors">{content.breadcrumb.guides}</Link>
          <span className="text-slate-700">/</span>
          <span className="text-brand-GOLD">{content.breadcrumb.page}</span>
        </nav>

        {/* HERO */}
        <section className="py-16 text-center">
          <HeroTilt intensity={3} className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
                {content.badge}
              </span>
              <h1 className="text-5xl md:text-9xl font-heading font-black text-white mb-10 tracking-tighter uppercase italic leading-[0.85]">
                {content.title} <br />
                <span className="text-brand-GOLD">{content.titleAccent}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed mb-16 italic">
                {content.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <Magnetic strength={0.3}>
                  <a
                    href="https://wa.me/50767610315"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-3d btn-3d-gold px-12 py-6 rounded-xl font-black uppercase tracking-widest text-[11px]"
                  >
                    {content.ctaWhatsApp}
                  </a>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <Link
                    href={`/${lang}/propiedades`}
                    className="btn-3d btn-3d-navy px-12 py-6 rounded-xl font-black uppercase tracking-widest text-[11px] bg-white/5 backdrop-blur-3xl border border-white/10"
                  >
                    {content.ctaProperties}
                  </Link>
                </Magnetic>
              </div>
            </motion.div>
          </HeroTilt>
        </section>

        {/* INTRO */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
              {isEn ? 'The Big Picture' : 'El Panorama General'}
            </span>
            <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-12 tracking-tighter uppercase italic leading-[0.85]">
              {content.introTitle}
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
              {content.intro}
            </p>
          </div>
        </section>

        {/* COST CATEGORIES */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-20 reveal-on-scroll">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
              {isEn ? 'What You\'ll Actually Spend' : 'En Qué Realmente Gastará'}
            </span>
            <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.85]">
              {content.categoriesTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 rounded-[3rem] border border-white/5 hover:border-brand-GOLD/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-8">
                  <cat.icon className="text-brand-GOLD group-hover:scale-110 transition-transform" size={40} />
                  <span className="text-brand-GOLD font-black text-lg italic">{cat.range}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter">{cat.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm italic group-hover:text-slate-400 transition-colors">{cat.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SAMPLE BUDGETS */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-20 reveal-on-scroll">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
              {isEn ? 'Real Numbers' : 'Números Reales'}
            </span>
            <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.85]">
              {content.budgetTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {content.budgets.map((budget, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`glass-card p-12 rounded-[3rem] border transition-all ${i === 1 ? 'border-brand-GOLD/40 bg-brand-GOLD/5' : 'border-white/5 hover:border-brand-GOLD/20'}`}
              >
                {i === 1 && (
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-950 bg-brand-GOLD px-4 py-1.5 rounded-full mb-8 inline-block">
                    {isEn ? 'Most Popular' : 'Más Popular'}
                  </span>
                )}
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-3">{budget.label}</h3>
                <p className="text-brand-GOLD font-black text-3xl md:text-4xl italic mb-4">{budget.total}</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-8 italic">{budget.location}</p>
                <ul className="space-y-3">
                  {budget.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-400 font-medium italic">
                      <CheckCircle size={14} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MONEY-SAVING TIPS */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal-on-scroll">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
                {isEn ? 'Insider Knowledge' : 'Conocimiento Insider'}
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.85]">
                {content.tipsTitle}
              </h2>
            </div>
            <div className="space-y-6">
              {content.tips.map((tip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-6 glass-card p-8 rounded-3xl border border-white/5 hover:border-brand-GOLD/30 transition-all group"
                >
                  <span className="text-brand-GOLD font-black text-3xl italic leading-none min-w-[2rem]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-slate-300 font-medium leading-relaxed group-hover:text-white transition-colors">{tip}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-32 bg-brand-GOLD text-brand-950 rounded-[6rem] text-center px-10 reveal-on-scroll shadow-[0_0_100px_rgba(201,168,76,0.15)]">
          <DollarSign className="mx-auto mb-12 animate-pulse" size={72} />
          <h2 className="text-4xl md:text-8xl font-heading font-black mb-10 tracking-tighter uppercase italic leading-[0.85]">
            {content.ctaTitle}
          </h2>
          <p className="text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed italic opacity-80">
            {content.ctaDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Magnetic strength={0.4}>
              <a
                href="https://wa.me/50767610315"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d btn-3d-navy px-14 py-7 rounded-full font-black uppercase tracking-[0.3em] text-xs shadow-2xl"
              >
                {content.ctaWhatsApp}
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <Link
                href={`/${lang}/propiedades`}
                className="btn-3d btn-3d-gold bg-brand-950 text-white px-14 py-7 rounded-full font-black uppercase tracking-[0.3em] text-xs"
              >
                {content.ctaProperties} <ArrowRight className="inline ml-2" size={14} />
              </Link>
            </Magnetic>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CostOfLivingPanamaPage;
