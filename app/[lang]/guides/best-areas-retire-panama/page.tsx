'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sun, Waves, Mountain, Building2, Trees, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Magnetic from '@/components/ui/Magnetic';
import HeroTilt from '@/components/ui/HeroTilt';

const BestAreasRetirePanamaPage = () => {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const content = {
    badge: isEn ? 'Retirement Destination Guide 2026' : 'Guía de Destino para Jubilados 2026',
    title: isEn ? 'Best Places to Retire in Panama' : 'Mejores Lugares para Jubilarse en Panamá',
    titleAccent: isEn ? '2026 Guide' : 'Guía 2026',
    subtitle: isEn
      ? 'From Pacific beach towns to cool mountain villages and cosmopolitan Panama City — discover which part of Panama fits your retirement vision, budget, and lifestyle.'
      : 'Desde pueblos costeros del Pacífico hasta aldeas de montaña y la cosmopolita Ciudad de Panamá — descubra qué parte de Panamá se adapta a su visión de retiro, presupuesto y estilo de vida.',

    introTitle: isEn ? 'Why Panama is the Top Retirement Destination in the Americas' : 'Por Qué Panamá es el Principal Destino de Jubilación en las Américas',
    intro: isEn
      ? "For over a decade, Panama has consistently ranked #1 or #2 on every major expat retirement index — from International Living to Forbes. The reasons are compelling: the US Dollar is the national currency (eliminating exchange-rate risk), the Pensionado Visa is one of the world's most generous retirement visas, healthcare rivals the US at 40–70% lower cost, and the country sits just 3 hours from Miami. But Panama is not one experience — it's five distinct retirement worlds, each with its own climate, pace, and price point. This guide breaks down the top locations so you can find your perfect match."
      : "Durante más de una década, Panamá ha ocupado consistentemente el primer o segundo lugar en todos los principales índices de jubilación para expats — desde International Living hasta Forbes. Las razones son convincentes: el Dólar Americano es la moneda nacional (eliminando el riesgo cambiario), la Visa de Pensionado es una de las más generosas del mundo, la atención médica rivaliza con EE.UU. a un costo 40–70% menor, y el país está a solo 3 horas de Miami. Pero Panamá no es una sola experiencia — es cinco mundos distintos para jubilarse, cada uno con su propio clima, ritmo y precio.",

    areasTitle: isEn ? 'The 5 Best Retirement Areas in Panama' : 'Las 5 Mejores Zonas para Jubilarse en Panamá',
    areas: [
      {
        icon: Building2,
        name: isEn ? 'Panama City' : 'Ciudad de Panamá',
        tagline: isEn ? 'World-class urban living' : 'Vida urbana de clase mundial',
        climate: isEn ? 'Tropical (26–32°C / 79–90°F)' : 'Tropical (26–32°C)',
        costRange: '$2,500 – $5,000+/mo',
        idealFor: isEn ? 'Urban professionals, medical tourists, cosmopolitan retirees' : 'Profesionales urbanos, turistas médicos, jubilados cosmopolitas',
        pros: isEn
          ? [
              'Best hospitals in Central America (Johns Hopkins-affiliated Punta Pacifica)',
              'World-class restaurants, malls, casinos, and arts scene',
              'Direct flights to major US cities — Miami, Houston, NYC',
              'Largest expat community in Panama — active social networks',
              'Modern condos with rooftop pools, gyms, and 24/7 security',
              'Metro and Uber make car-free living easy',
            ]
          : [
              'Mejores hospitales en Centroamérica (Punta Pacífica afiliado a Johns Hopkins)',
              'Restaurantes, centros comerciales, casinos y vida cultural de clase mundial',
              'Vuelos directos a las principales ciudades de EE.UU.',
              'La mayor comunidad expat de Panamá — redes sociales activas',
              'Condos modernos con piscinas en azotea, gimnasios y seguridad 24/7',
            ],
        cons: isEn
          ? ['Traffic congestion during rush hours', 'Higher cost of living vs. smaller towns', 'Intense heat and humidity year-round']
          : ['Congestión de tráfico en horas pico', 'Mayor costo de vida vs. ciudades pequeñas', 'Calor e humedad intensa todo el año'],
        highlight: isEn ? 'Best for medical access & city lifestyle' : 'Mejor para acceso médico y vida urbana',
        slug: 'panama-city',
      },
      {
        icon: Mountain,
        name: 'Boquete',
        tagline: isEn ? 'The cool mountain paradise' : 'El paraíso fresco de montaña',
        climate: isEn ? 'Highland (16–24°C / 61–75°F) — "eternal spring"' : 'Montañoso (16–24°C) — "primavera eterna"',
        costRange: '$1,400 – $2,800/mo',
        idealFor: isEn ? 'Nature lovers, hikers, coffee aficionados, those who hate the heat' : 'Amantes de la naturaleza, senderistas, amantes del café',
        pros: isEn
          ? [
              'Perfect year-round weather — no AC or heating required',
              'Vibrant, established expat community (thousands of North Americans)',
              'World-famous coffee region — Geisha coffee tours and farms',
              'Outdoor activities: hiking Volcán Barú, zip-lining, white-water rafting',
              'Growing medical infrastructure — clinics and visiting specialists',
              'Real estate 40–60% cheaper than Panama City for comparable quality',
            ]
          : [
              'Clima perfecto todo el año — no requiere A/C ni calefacción',
              'Comunidad expat vibrante y consolidada (miles de norteamericanos)',
              'Región cafetalera de fama mundial — tours y granjas de café Geisha',
              'Actividades al aire libre: senderismo al Volcán Barú, tirolesa, rafting',
              'Bienes raíces 40–60% más baratos que Ciudad de Panamá',
            ],
        cons: isEn
          ? ['2-hour drive from Panama City hospitals', 'Can be rainy in "green season" (May–Nov)', 'Limited nightlife and urban amenities']
          : ['2 horas en carro de los hospitales de Ciudad de Panamá', 'Puede ser lluvioso en temporada verde (may-nov)', 'Vida nocturna y amenidades urbanas limitadas'],
        highlight: isEn ? 'Best for climate & outdoor lifestyle' : 'Mejor para clima y estilo de vida al aire libre',
        slug: 'boquete',
      },
      {
        icon: Waves,
        name: 'Coronado',
        tagline: isEn ? 'Pacific beach living, 1 hour from the city' : 'Vida en la playa del Pacífico, a 1 hora de la ciudad',
        climate: isEn ? 'Pacific coast (25–33°C / 77–91°F)' : 'Costa Pacífica (25–33°C)',
        costRange: '$1,600 – $3,200/mo',
        idealFor: isEn ? 'Beach lovers, golfers, weekend escape seekers who want city proximity' : 'Amantes de la playa, golfistas, quienes buscan escapadas con proximidad a la ciudad',
        pros: isEn
          ? [
              'Large, established expat community with strong social infrastructure',
              'Golf clubs, beach clubs, international restaurants and supermarkets',
              'Gated communities with world-class security and amenities',
              '90-minute drive from Panama City for hospital visits or airport runs',
              'Consistently affordable real estate — beachfront villas from $280K',
              'Dry season (Dec–Apr) brings perfect beach weather',
            ]
          : [
              'Gran comunidad expat consolidada con sólida infraestructura social',
              'Clubes de golf, clubes de playa, restaurantes internacionales y supermercados',
              'Comunidades cerradas con seguridad y amenidades de clase mundial',
              '90 minutos de Ciudad de Panamá para visitas hospitalarias o el aeropuerto',
              'Bienes raíces consistentemente asequibles — villas frente al mar desde $280K',
            ],
        cons: isEn
          ? ['Hot and humid in wet season', 'Not ideal without a car', 'Beach conditions vary — Pacific coast has strong waves']
          : ['Caluroso y húmedo en temporada de lluvias', 'No es ideal sin carro', 'Las condiciones de playa varían — olas fuertes en la costa Pacífica'],
        highlight: isEn ? 'Best for beach + city balance' : 'Mejor para equilibrio playa + ciudad',
        slug: 'coronado',
      },
      {
        icon: Trees,
        name: isEn ? 'El Valle de Antón' : 'El Valle de Antón',
        tagline: isEn ? 'Hidden gem inside a volcanic crater' : 'Joya escondida dentro de un cráter volcánico',
        climate: isEn ? 'Valley microclimate (18–26°C / 64–79°F)' : 'Microclima de valle (18–26°C)',
        costRange: '$1,200 – $2,400/mo',
        idealFor: isEn ? 'Artists, nature lovers, those seeking authentic village life' : 'Artistas, amantes de la naturaleza, quienes buscan vida de pueblo auténtico',
        pros: isEn
          ? [
              'Unique volcanic crater setting — cooler microclimate than the coast',
              'Weekly indigenous artisan market — one of the most vibrant in Panama',
              'Less developed than Boquete — more affordable, less crowded',
              'Thermal springs, waterfalls, hiking trails, and birdwatching',
              '2-hour drive from Panama City — manageable for medical trips',
              'Very low crime rate — extremely safe community atmosphere',
            ]
          : [
              'Entorno único en cráter volcánico — microclima más fresco que la costa',
              'Mercado artesanal indígena semanal — uno de los más vibrantes de Panamá',
              'Menos desarrollado que Boquete — más asequible, menos concurrido',
              'Aguas termales, cascadas, senderos y observación de aves',
              '2 horas de Ciudad de Panamá — manejable para viajes médicos',
            ],
        cons: isEn
          ? ['Smaller expat community than Boquete or Coronado', 'Limited specialist medical care on-site', 'Fewer direct flight connections']
          : ['Comunidad expat más pequeña que Boquete o Coronado', 'Atención médica especializada limitada en el sitio', 'Menos conexiones de vuelo directas'],
        highlight: isEn ? 'Best hidden gem for budget retirees' : 'La mejor joya escondida para jubilados con presupuesto',
        slug: 'el-valle',
      },
      {
        icon: Sun,
        name: isEn ? 'Bocas del Toro' : 'Bocas del Toro',
        tagline: isEn ? 'Caribbean island living for the adventurous' : 'Vida en isla caribeña para los aventureros',
        climate: isEn ? 'Caribbean (26–30°C / 79–86°F), tropical rain year-round' : 'Caribeño (26–30°C), lluvias tropicales todo el año',
        costRange: '$1,300 – $2,600/mo',
        idealFor: isEn ? 'Water sports lovers, digital nomads, free spirits seeking paradise' : 'Amantes de deportes acuáticos, nómadas digitales, espíritus libres',
        pros: isEn
          ? [
              'Stunning Caribbean archipelago — snorkeling, surfing, kayaking in your backyard',
              'Vibrant international expat and traveler community',
              'Very low real estate prices — beachfront lots still available under $150K',
              'Laid-back, bohemian island culture unlike anywhere else in Panama',
              'Growing tourism industry creating real estate appreciation potential',
              'Direct flights from Panama City (35 minutes) or scenic 4-hour drive',
            ]
          : [
              'Impresionante archipiélago caribeño — snorkel, surf y kayak a la vuelta de la esquina',
              'Comunidad expat internacional vibrante',
              'Precios de bienes raíces muy bajos — terrenos frente al mar bajo $150K',
              'Cultura isleña bohemia y relajada, única en Panamá',
              'Industria turística en crecimiento con potencial de valorización',
            ],
        cons: isEn
          ? ['Most isolated location — medical care is limited', 'Can be very rainy (one of the wettest areas in Panama)', 'Infrastructure less developed than mainland areas']
          : ['Ubicación más aislada — atención médica limitada', 'Puede ser muy lluvioso (una de las zonas más húmedas de Panamá)', 'Infraestructura menos desarrollada que en el continente'],
        highlight: isEn ? 'Best for Caribbean lifestyle & adventure' : 'Mejor para estilo de vida caribeño y aventura',
        slug: 'bocas',
      },
    ],

    comparisonTitle: isEn ? 'How to Choose: Your Retirement Personality' : 'Cómo Elegir: Su Personalidad de Jubilación',
    comparisons: isEn
      ? [
          { type: 'You want the best hospitals nearby', answer: '→ Panama City' },
          { type: 'You hate heat and love fresh air', answer: '→ Boquete or El Valle' },
          { type: 'You want beach life + city access', answer: '→ Coronado' },
          { type: 'You want maximum authenticity & lowest prices', answer: '→ El Valle or Bocas del Toro' },
          { type: 'You want an established expat community', answer: '→ Boquete or Coronado' },
          { type: 'You love surfing, snorkeling, island vibes', answer: '→ Bocas del Toro' },
          { type: 'You plan to invest in real estate with upside', answer: '→ Panama City or Bocas del Toro' },
          { type: 'You want the best value for couples on $2K/month', answer: '→ El Valle or Boquete' },
        ]
      : [
          { type: 'Quiere los mejores hospitales cerca', answer: '→ Ciudad de Panamá' },
          { type: 'Odia el calor y ama el aire fresco', answer: '→ Boquete o El Valle' },
          { type: 'Quiere vida de playa + acceso a la ciudad', answer: '→ Coronado' },
          { type: 'Busca máxima autenticidad y precios más bajos', answer: '→ El Valle o Bocas del Toro' },
          { type: 'Quiere una comunidad expat consolidada', answer: '→ Boquete o Coronado' },
          { type: 'Ama el surf, snorkel y el ambiente isleño', answer: '→ Bocas del Toro' },
          { type: 'Planea invertir en bienes raíces con potencial', answer: '→ Ciudad de Panamá o Bocas del Toro' },
          { type: 'Busca el mejor valor para parejas con $2K/mes', answer: '→ El Valle o Boquete' },
        ],

    pensionadoTitle: isEn ? "Don't Forget: The Pensionado Visa Changes Everything" : 'No Olvide: La Visa de Pensionado lo Cambia Todo',
    pensionadoText: isEn
      ? "No matter which area you choose, Panama's Pensionado Visa is your financial superpower as a retiree. With a guaranteed pension income of just $1,000/month (any government or private pension), you qualify for 50% off entertainment nationwide, 30% off public transit, 25% off utility bills, 20% off medical consultations and procedures, and 15% off hospital bills. These discounts alone can save a couple $300–$600/month vs. what they'd pay without the visa — making Panama dramatically more affordable than even the cheapest US retirement destinations."
      : "Sin importar qué área elija, la Visa de Pensionado de Panamá es su superpoder financiero como jubilado. Con un ingreso de pensión garantizado de solo $1,000/mes (cualquier pensión gubernamental o privada), califica para 50% de descuento en entretenimiento, 30% en transporte público, 25% en facturas de servicios, 20% en consultas y procedimientos médicos, y 15% en facturas hospitalarias. Solo estos descuentos pueden ahorrarle a una pareja $300–$600/mes — haciendo a Panamá dramáticamente más asequible que incluso los destinos de retiro más baratos de EE.UU.",

    nextStepsTitle: isEn ? '5 Next Steps to Start Your Panama Retirement' : '5 Próximos Pasos para Comenzar su Jubilación en Panamá',
    nextSteps: isEn
      ? [
          "Visit each area that interests you — ideally for 2–4 weeks each to get a real feel for the lifestyle, neighbors, and daily practicalities.",
          "Connect with local expat Facebook groups for each area: 'Expats in Boquete', 'Coronado Expat Community', 'Panama City Expats' — these give unfiltered real-world insight.",
          "Consult a Panama immigration attorney about the Pensionado Visa — the process takes 3–6 months and is straightforward if documents are prepared correctly.",
          "Research property ownership rules — foreigners have the same property rights as Panamanians under Article 293 of the Constitution, making Panama one of the most foreigner-friendly ownership environments in the world.",
          "Work with a local real estate advisor to identify whether buying vs. renting makes sense for your timeline and financial situation.",
        ]
      : [
          "Visite cada área que le interese — idealmente por 2–4 semanas cada una para tener una idea real del estilo de vida, vecinos y practicidades diarias.",
          "Conéctese con grupos de expats en Facebook para cada área: 'Expats in Boquete', 'Coronado Expat Community', 'Panama City Expats' — ofrecen perspectiva sin filtros del mundo real.",
          "Consulte a un abogado de inmigración de Panamá sobre la Visa de Pensionado — el proceso toma 3–6 meses y es directo si los documentos se preparan correctamente.",
          "Investigue las reglas de propiedad — los extranjeros tienen los mismos derechos que los panameños bajo el Artículo 293 de la Constitución.",
          "Trabaje con un asesor inmobiliario local para identificar si comprar vs. alquilar tiene sentido para su cronograma y situación financiera.",
        ],

    breadcrumb: {
      home: isEn ? 'Home' : 'Inicio',
      guides: isEn ? 'Guides' : 'Guías',
      page: isEn ? 'Best Places to Retire in Panama 2026' : 'Mejores Lugares para Jubilarse en Panamá 2026',
    },

    ctaTitle: isEn ? 'Find Your Perfect Retirement Home in Panama' : 'Encuentre su Hogar de Jubilación Perfecto en Panamá',
    ctaDesc: isEn
      ? "Our expat relocation specialists live and work in Panama's top retirement areas. We'll match you with the right location and the right property — at no charge to you as a buyer."
      : "Nuestros especialistas en reubicación de expats viven y trabajan en las principales zonas de jubilación de Panamá. Lo conectamos con la ubicación y propiedad correcta — sin costo para usted como comprador.",
    ctaWhatsApp: isEn ? 'Chat with a Relocation Specialist' : 'Habla con un Especialista en Reubicación',
    ctaProperties: isEn ? 'View Properties' : 'Ver Propiedades',
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
              {isEn ? 'Why Panama' : 'Por Qué Panamá'}
            </span>
            <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-12 tracking-tighter uppercase italic leading-[0.85]">
              {content.introTitle}
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
              {content.intro}
            </p>
          </div>
        </section>

        {/* AREAS */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-20 reveal-on-scroll">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
              {isEn ? 'Location Deep Dives' : 'Análisis por Ubicación'}
            </span>
            <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.85]">
              {content.areasTitle}
            </h2>
          </div>

          <div className="space-y-16">
            {content.areas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-[3rem] border border-white/5 hover:border-brand-GOLD/30 transition-all overflow-hidden"
              >
                <div className="p-10 md:p-14">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-brand-GOLD/10 border border-brand-GOLD/20 flex items-center justify-center flex-shrink-0">
                        <area.icon className="text-brand-GOLD" size={32} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-brand-GOLD font-black text-[9px] uppercase tracking-[0.4em] italic">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="text-slate-600 font-black text-[9px] uppercase tracking-[0.3em]">
                            {area.highlight}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase italic tracking-tighter leading-none">
                          {area.name}
                        </h3>
                        <p className="text-brand-GOLD font-bold italic mt-2 text-lg">{area.tagline}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-right">
                      <span className="text-brand-GOLD font-black text-2xl italic">{area.costRange}</span>
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{isEn ? 'per month' : 'por mes'}</span>
                      <span className="text-slate-400 text-sm font-medium italic mt-2">{area.climate}</span>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-8 p-6 rounded-2xl bg-brand-GOLD/5 border border-brand-GOLD/10">
                    <span className="text-brand-GOLD font-black text-[9px] uppercase tracking-[0.4em] italic block mb-2">
                      {isEn ? 'Ideal For' : 'Ideal Para'}
                    </span>
                    <p className="text-slate-300 font-medium italic">{area.idealFor}</p>
                  </div>

                  {/* Pros & Cons */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-5 flex items-center gap-2">
                        <Star size={12} className="text-brand-GOLD" />
                        {isEn ? 'Top Reasons to Choose It' : 'Principales Razones para Elegirlo'}
                      </h4>
                      <ul className="space-y-3">
                        {area.pros.map((pro, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-slate-400 font-medium italic">
                            <CheckCircle size={13} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-5 flex items-center gap-2">
                        <MapPin size={12} className="text-slate-400" />
                        {isEn ? 'Things to Consider' : 'Cosas a Considerar'}
                      </h4>
                      <ul className="space-y-3">
                        {area.cons.map((con, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-slate-500 font-medium italic">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal-on-scroll">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
                {isEn ? 'Match Yourself' : 'Encuéntrese'}
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.85]">
                {content.comparisonTitle}
              </h2>
            </div>
            <div className="space-y-4">
              {content.comparisons.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 glass-card p-7 rounded-3xl border border-white/5 hover:border-brand-GOLD/30 transition-all group"
                >
                  <p className="text-slate-300 font-medium italic group-hover:text-white transition-colors">{item.type}</p>
                  <span className="text-brand-GOLD font-black italic text-sm whitespace-nowrap">{item.answer}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PENSIONADO VISA CALLOUT */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto glass-card rounded-[3rem] border border-brand-GOLD/20 bg-brand-GOLD/5 p-12 md:p-16 text-center reveal-on-scroll">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
              {isEn ? 'Key Advantage' : 'Ventaja Clave'}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.85]">
              {content.pensionadoTitle}
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed italic">
              {content.pensionadoText}
            </p>
            <div className="mt-10">
              <Link
                href={`/${lang}/guides/pensionado-visa-panama`}
                className="inline-flex items-center gap-2 text-brand-GOLD font-black text-[11px] uppercase tracking-[0.3em] hover:gap-4 transition-all italic"
              >
                {isEn ? 'Full Pensionado Visa Guide' : 'Guía Completa de la Visa de Pensionado'}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* NEXT STEPS */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal-on-scroll">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
                {isEn ? 'Action Plan' : 'Plan de Acción'}
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.85]">
                {content.nextStepsTitle}
              </h2>
            </div>
            <div className="space-y-6">
              {content.nextSteps.map((step, i) => (
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
                  <p className="text-slate-300 font-medium leading-relaxed group-hover:text-white transition-colors">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-32 bg-brand-GOLD text-brand-950 rounded-[6rem] text-center px-10 reveal-on-scroll shadow-[0_0_100px_rgba(201,168,76,0.15)]">
          <MapPin className="mx-auto mb-12 animate-pulse" size={72} />
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

export default BestAreasRetirePanamaPage;
