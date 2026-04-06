'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, DollarSign, MapPin, TrendingUp, Shield, Sun, Mountain, Waves, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Magnetic from '@/components/ui/Magnetic';

const HomesForSalePanamaContent = () => {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const content = {
    badge: isEn ? 'Property Buyer Guide 2026' : 'Guía del Comprador 2026',
    title: isEn ? 'Homes for Sale in Panama' : 'Casas en Venta en Panamá',
    subtitle: isEn
      ? 'From modern Panama City villas to mountain retreats in Boquete and beachfront escapes on the Pacific coast — discover why thousands of foreigners buy homes in Panama every year.'
      : 'Desde villas modernas en Ciudad de Panamá hasta retiros de montaña en Boquete y escapes frente al mar en la costa del Pacífico — descubra por qué miles de extranjeros compran casas en Panamá cada año.',
    intro: isEn
      ? 'Panama is one of the few countries in the world where foreigners can buy property with the same legal rights as citizens. There are no restrictions on foreign ownership, no special permits required, and the buying process is straightforward with the right legal guidance. Whether you are looking for a retirement home, a rental investment, a family residence, or a vacation property, Panama offers homes across every price point and lifestyle — from $85,000 starter houses in the interior to multi-million-dollar oceanfront estates in Panama City. The country\'s territorial tax system, pensionado visa discounts, and US-dollar economy make it one of the most attractive destinations for international home buyers in 2026.'
      : 'Panamá es uno de los pocos países del mundo donde los extranjeros pueden comprar propiedades con los mismos derechos legales que los ciudadanos. No hay restricciones a la propiedad extranjera, no se requieren permisos especiales, y el proceso de compra es sencillo con la orientación legal adecuada. Ya sea que busque una casa para jubilarse, una inversión de alquiler, una residencia familiar o una propiedad vacacional, Panamá ofrece hogares en todos los rangos de precios y estilos de vida — desde casas iniciales de $85,000 en el interior hasta propiedades de lujo frente al mar de millones de dólares en Ciudad de Panamá. El sistema tributario territorial del país, los descuentos de la visa de pensionado y la economía dolarizada lo convierten en uno de los destinos más atractivos para compradores internacionales de vivienda en 2026.',

    whyBuyTitle: isEn ? 'Why Buy a Home in Panama?' : '¿Por Qué Comprar Casa en Panamá?',
    whyBuyItems: [
      {
        icon: Shield,
        title: isEn ? 'Full Foreign Ownership Rights' : 'Derechos Plenos de Propiedad Extranjera',
        desc: isEn
          ? 'Foreigners enjoy the same property rights as Panamanian citizens. You can own titled property outright — no trusts, no local partner required, no restrictions on the number of properties you hold. Panama\'s constitution protects private property rights, giving international buyers a level of legal security uncommon in Central America.'
          : 'Los extranjeros disfrutan de los mismos derechos de propiedad que los ciudadanos panameños. Puede poseer propiedad titulada directamente — sin fideicomisos, sin socio local requerido, sin restricciones en la cantidad de propiedades. La constitución de Panamá protege los derechos de propiedad privada.',
      },
      {
        icon: DollarSign,
        title: isEn ? 'US Dollar Economy — No Currency Risk' : 'Economía en Dólares — Sin Riesgo Cambiario',
        desc: isEn
          ? 'Panama uses the US dollar as its official currency. Your mortgage payments, property taxes, rental income, and resale proceeds are all in dollars. This eliminates the foreign exchange risk that affects real estate investments in countries like Mexico, Colombia, or Costa Rica, where currency fluctuations can erode returns.'
          : 'Panamá usa el dólar estadounidense como moneda oficial. Sus pagos de hipoteca, impuestos de propiedad, ingresos por alquiler y ganancias de reventa están todos en dólares. Esto elimina el riesgo cambiario que afecta las inversiones inmobiliarias en países como México, Colombia o Costa Rica.',
      },
      {
        icon: TrendingUp,
        title: isEn ? 'Property Tax Exemptions up to 20 Years' : 'Exenciones de Impuestos de Propiedad hasta 20 Años',
        desc: isEn
          ? 'New construction homes in Panama qualify for property tax exemptions of up to 20 years under Panama\'s Law 66. Even after the exemption period ends, property taxes are extremely low — ranging from 0% to 1% based on registered value. Homestead exemptions apply for primary residences valued under $120,000, which means many homes in the interior pay zero property tax indefinitely.'
          : 'Las casas de nueva construcción en Panamá califican para exenciones de impuestos de propiedad de hasta 20 años bajo la Ley 66 de Panamá. Incluso después del período de exención, los impuestos de propiedad son extremadamente bajos — oscilando entre 0% y 1% basado en el valor registrado.',
      },
      {
        icon: Sun,
        title: isEn ? 'Territorial Tax System' : 'Sistema Tributario Territorial',
        desc: isEn
          ? 'Panama only taxes income earned within its borders. Pension income, Social Security payments, investment returns, and other foreign-sourced income are not taxed in Panama. This makes Panama exceptionally attractive for retirees who want to stretch their income while owning a home in a tropical country with modern infrastructure.'
          : 'Panamá solo grava los ingresos generados dentro de sus fronteras. Los ingresos de pensión, pagos del Seguro Social, rendimientos de inversión y otros ingresos de fuente extranjera no se gravan en Panamá. Esto hace que Panamá sea excepcionalmente atractivo para jubilados.',
      },
    ],

    regionsTitle: isEn ? 'Where to Buy: Top Regions for Homes in Panama' : 'Dónde Comprar: Principales Regiones para Casas en Panamá',
    regions: [
      {
        name: isEn ? 'Panama City & Suburbs' : 'Ciudad de Panamá y Suburbios',
        icon: Home,
        price: '$120K – $2M+',
        climate: isEn ? 'Tropical, warm year-round' : 'Tropical, cálido todo el año',
        bestFor: isEn ? 'Urban lifestyle, business, short-term rental income' : 'Vida urbana, negocios, ingresos por alquiler a corto plazo',
        desc: isEn
          ? 'Panama City offers everything from modern high-rise condos in Punta Pacifica and Costa del Este to standalone houses in quieter suburbs like Clayton, Albrook, and Arraiján. The city\'s international airport, world-class hospitals (including Johns Hopkins-affiliated Punta Pacífica Hospital), and thriving restaurant scene make it a complete urban base. Single-family homes in gated communities around Clayton and Albrook range from $250K to $800K, while houses in Arraiján and Panamá Oeste start as low as $120K for new developments. For buyers who want city convenience with the feel of a residential neighborhood, Costa del Este\'s townhouses and Altos de Panama\'s hillside lots deliver the best of both worlds.'
          : 'Ciudad de Panamá ofrece de todo, desde condos modernos de gran altura en Punta Pacífica y Costa del Este hasta casas independientes en suburbios más tranquilos como Clayton, Albrook y Arraiján. El aeropuerto internacional, hospitales de clase mundial y una próspera escena gastronómica la convierten en una base urbana completa. Las casas unifamiliares en comunidades cerradas alrededor de Clayton y Albrook oscilan entre $250K y $800K, mientras que las casas en Arraiján y Panamá Oeste comienzan desde $120K.',
      },
      {
        name: 'Boquete',
        icon: Mountain,
        price: '$85K – $600K',
        climate: isEn ? 'Spring-like, 60–80°F year-round' : 'Primaveral, 15–27°C todo el año',
        bestFor: isEn ? 'Retirement, nature lovers, coffee culture' : 'Jubilación, amantes de la naturaleza, cultura del café',
        desc: isEn
          ? 'Boquete is Panama\'s premier mountain town and the single most popular retirement destination for North American and European expats. Nestled in the Chiriquí Highlands at 3,900 feet, Boquete enjoys a permanent spring climate with no need for air conditioning or heating. Homes for sale in Boquete range from modest $85K casitas near downtown to architecturally striking mountain estates with panoramic volcano views priced at $400K–$600K. The town has a mature expat community, English-friendly services, an active social calendar, weekly farmers\' markets, and easy access to hiking trails, hot springs, and world-renowned coffee farms. David, the nearest regional city with hospitals and a domestic airport, is just 45 minutes away.'
          : 'Boquete es el principal pueblo de montaña de Panamá y el destino de jubilación más popular para expats norteamericanos y europeos. Ubicado en las tierras altas de Chiriquí a 1,200 metros, Boquete disfruta de un clima primaveral permanente. Las casas en venta en Boquete van desde modestas casitas de $85K cerca del centro hasta espectaculares propiedades de montaña con vistas panorámicas al volcán por $400K–$600K. El pueblo tiene una madura comunidad de expats, servicios en inglés, un calendario social activo y acceso a senderos de montaña, aguas termales y fincas de café de renombre mundial.',
      },
      {
        name: 'Coronado & Pacific Beaches',
        icon: Waves,
        price: '$95K – $500K',
        climate: isEn ? 'Tropical dry, beach breezes' : 'Tropical seco, brisas de playa',
        bestFor: isEn ? 'Beach lifestyle, weekend getaway, rental investment' : 'Vida de playa, escapada de fin de semana, inversión de alquiler',
        desc: isEn
          ? 'The Pacific beach corridor stretching from Coronado to Pedasí is Panama\'s most popular coastal market. Coronado, just 75 minutes from Panama City, is the most established beach community with golf courses, an international school, supermarkets, and beachfront homes starting around $150K. Further west, Playa Blanca and San Carlos offer newer developments with resort-style amenities. For buyers seeking a quieter, more authentic coastal experience, Pedasí on the Azuero Peninsula delivers Pacific surf-town charm with homes from $95K to $350K. The entire Pacific coast benefits from strong short-term rental demand during Panama\'s dry season (December through April), making beach homes attractive dual-purpose assets.'
          : 'El corredor de playas del Pacífico que se extiende desde Coronado hasta Pedasí es el mercado costero más popular de Panamá. Coronado, a solo 75 minutos de Ciudad de Panamá, es la comunidad de playa más consolidada con campos de golf, escuela internacional, supermercados y casas frente al mar desde $150K. Más al oeste, Playa Blanca y San Carlos ofrecen desarrollos más nuevos. Para compradores que buscan una experiencia costera más auténtica, Pedasí ofrece encanto de pueblo surfero con casas desde $95K a $350K.',
      },
      {
        name: 'Bocas del Toro',
        icon: Sun,
        price: '$110K – $800K',
        climate: isEn ? 'Caribbean tropical, lush and green' : 'Tropical caribeño, exuberante y verde',
        bestFor: isEn ? 'Caribbean island living, vacation rental, eco-lifestyle' : 'Vida en isla caribeña, alquiler vacacional, ecoestilo de vida',
        desc: isEn
          ? 'Bocas del Toro is Panama\'s Caribbean archipelago — a chain of islands with turquoise waters, coral reefs, and a laid-back island culture that has attracted an international community of surfers, divers, and remote workers. Homes in Bocas range from over-water bungalows and island lots starting at $110K to fully-equipped vacation villas priced $300K–$800K. The area is particularly strong for vacation rental income, as Bocas draws international tourists year-round. Note that many Bocas properties are on "right of possession" land (derechos posesorios) rather than titled land, so working with an experienced local attorney is essential. Direct flights connect Bocas to Panama City in under an hour.'
          : 'Bocas del Toro es el archipiélago caribeño de Panamá — una cadena de islas con aguas turquesas, arrecifes de coral y una cultura relajada que ha atraído a una comunidad internacional. Las casas en Bocas van desde bungalows sobre el agua y lotes en islas desde $110K hasta villas vacacionales completamente equipadas por $300K–$800K. El área es particularmente fuerte para ingresos por alquiler vacacional.',
      },
    ],

    buyingProcessTitle: isEn ? 'How to Buy a Home in Panama as a Foreigner' : 'Cómo Comprar una Casa en Panamá como Extranjero',
    buyingSteps: [
      {
        step: '1',
        title: isEn ? 'Explore Areas and Define Your Budget' : 'Explore Áreas y Defina su Presupuesto',
        desc: isEn
          ? 'Start by deciding what lifestyle you want — city, mountain, or beach — and set a realistic budget that includes closing costs (typically 5–8% of purchase price). Our team can arrange property tours across multiple regions in a single trip.'
          : 'Comience decidiendo qué estilo de vida desea — ciudad, montaña o playa — y establezca un presupuesto realista que incluya costos de cierre (típicamente 5–8% del precio de compra).',
      },
      {
        step: '2',
        title: isEn ? 'Hire a Panamanian Real Estate Attorney' : 'Contrate un Abogado Inmobiliario Panameño',
        desc: isEn
          ? 'An independent attorney will verify the title at Panama\'s Public Registry, confirm there are no liens or encumbrances, and ensure the property has proper permits. This is the most important step in the process — never skip title due diligence.'
          : 'Un abogado independiente verificará el título en el Registro Público de Panamá, confirmará que no hay gravámenes y asegurará que la propiedad tenga los permisos adecuados. Este es el paso más importante del proceso.',
      },
      {
        step: '3',
        title: isEn ? 'Make an Offer and Sign a Promise-to-Purchase' : 'Haga una Oferta y Firme una Promesa de Compra-Venta',
        desc: isEn
          ? 'Once your attorney clears the title, you submit a formal offer. If accepted, both parties sign a Promesa de Compra-Venta (promise to purchase) and you deposit typically 10% of the purchase price into escrow. This contract locks in the price and terms while your attorney completes final due diligence.'
          : 'Una vez que su abogado aprueba el título, usted presenta una oferta formal. Si es aceptada, ambas partes firman una Promesa de Compra-Venta y usted deposita típicamente el 10% del precio de compra en una cuenta de custodia.',
      },
      {
        step: '4',
        title: isEn ? 'Transfer at Notary and Register the Title' : 'Transferencia en Notaría y Registro del Título',
        desc: isEn
          ? 'The sale is formalized at a Panamanian notary public. The deed (escritura pública) is signed, remaining funds are transferred, and the title is registered in your name at the Public Registry. The entire process from offer to keys typically takes 30–60 days.'
          : 'La venta se formaliza ante un notario público panameño. Se firma la escritura pública, se transfieren los fondos restantes y el título se registra a su nombre en el Registro Público. El proceso completo desde la oferta hasta las llaves suele tomar 30–60 días.',
      },
    ],

    costsTitle: isEn ? 'Costs of Buying a Home in Panama' : 'Costos de Comprar una Casa en Panamá',
    costs: [
      { item: isEn ? 'Transfer Tax' : 'Impuesto de Transferencia', value: '2%', note: isEn ? 'of registered sale price' : 'del precio registrado de venta' },
      { item: isEn ? 'Notary Fees' : 'Honorarios Notariales', value: '~$600–$1,500', note: isEn ? 'depending on property value' : 'dependiendo del valor de la propiedad' },
      { item: isEn ? 'Registration Fee' : 'Tarifa de Registro', value: '~$300–$800', note: isEn ? 'Public Registry filing' : 'inscripción en el Registro Público' },
      { item: isEn ? 'Legal Fees' : 'Honorarios Legales', value: '1–2%', note: isEn ? 'attorney due diligence and closing' : 'diligencia legal y cierre' },
      { item: isEn ? 'Property Tax (annual)' : 'Impuesto de Propiedad (anual)', value: '0–1%', note: isEn ? 'often $0 with exemptions' : 'a menudo $0 con exenciones' },
    ],

    ctaTitle: isEn ? 'Ready to Find Your Home in Panama?' : '¿Listo para Encontrar su Casa en Panamá?',
    ctaText: isEn
      ? 'Our bilingual team helps foreign buyers navigate every step — from choosing the right area to closing at the notary. Browse our current listings or talk to an advisor today.'
      : 'Nuestro equipo bilingüe ayuda a compradores extranjeros en cada paso — desde elegir la zona correcta hasta el cierre en notaría. Explore nuestros listados actuales o hable con un asesor hoy.',
    ctaBrowse: isEn ? 'Browse Properties' : 'Ver Propiedades',
    ctaWhatsApp: isEn ? 'Talk to an Advisor' : 'Hablar con un Asesor',
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <nav className="text-sm text-gray-500 flex items-center gap-2">
          <Link href={`/${lang}`} className="hover:text-[#C9A84C] transition-colors">
            {isEn ? 'Home' : 'Inicio'}
          </Link>
          <span>/</span>
          <Link href={`/${lang}/guides/panama-real-estate`} className="hover:text-[#C9A84C] transition-colors">
            {isEn ? 'Guides' : 'Guías'}
          </Link>
          <span>/</span>
          <span className="text-[#1B2A4A] font-medium">{isEn ? 'Homes for Sale' : 'Casas en Venta'}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] to-[#0f1a30]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A84C] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C9A84C] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-[#C9A84C]/20 text-[#C9A84C] rounded-full text-sm font-medium mb-6 border border-[#C9A84C]/30">
              {content.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {content.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-lg text-gray-700 leading-relaxed">
            {content.intro}
          </motion.p>
        </div>
      </section>

      {/* Why Buy */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-12 text-center">{content.whyBuyTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.whyBuyItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1B2A4A]">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-12 text-center">{content.regionsTitle}</h2>
          <div className="space-y-8">
            {content.regions.map((region, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-14 h-14 bg-[#1B2A4A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <region.icon className="w-7 h-7 text-[#C9A84C]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-[#1B2A4A]">{region.name}</h3>
                      <span className="inline-block px-3 py-1 bg-[#C9A84C]/10 text-[#C9A84C] rounded-full text-sm font-semibold">
                        {region.price}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Sun className="w-4 h-4" /> {region.climate}</span>
                      <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> {region.bestFor}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{region.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Process */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-12 text-center">{content.buyingProcessTitle}</h2>
          <div className="space-y-6">
            {content.buyingSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 bg-[#1B2A4A] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B2A4A] mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-8 text-center">{content.costsTitle}</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-3 bg-[#1B2A4A] text-white font-semibold text-sm">
              <div className="p-4">{isEn ? 'Cost Item' : 'Concepto'}</div>
              <div className="p-4 text-center">{isEn ? 'Amount' : 'Monto'}</div>
              <div className="p-4">{isEn ? 'Notes' : 'Notas'}</div>
            </div>
            {content.costs.map((cost, i) => (
              <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <div className="p-4 font-medium text-[#1B2A4A]">{cost.item}</div>
                <div className="p-4 text-center text-[#C9A84C] font-semibold">{cost.value}</div>
                <div className="p-4 text-gray-500">{cost.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1B2A4A] to-[#0f1a30]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{content.ctaTitle}</h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">{content.ctaText}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Magnetic>
                <Link
                  href={`/${lang}/propiedades`}
                  className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8963f] text-white font-semibold py-4 px-8 rounded-xl transition-colors"
                >
                  <Home className="w-5 h-5" />
                  {content.ctaBrowse}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://wa.me/50769855544?text=Hi%2C%20I%27m%20interested%20in%20homes%20for%20sale%20in%20Panama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl border border-white/20 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  {content.ctaWhatsApp}
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomesForSalePanamaContent;
