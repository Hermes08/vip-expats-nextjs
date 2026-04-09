'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Calendar, DollarSign, Home, Users, Plane, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Magnetic from '@/components/ui/Magnetic';
import HeroTilt from '@/components/ui/HeroTilt';

const PanamaRelocationTourContent = () => {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const content = {
    title: isEn
      ? "Panama Relocation Tour 2026: Your Complete Guide"
      : "Tour de Reubicación a Panamá 2026: Su Guía Completa",
    subtitle: isEn
      ? "Experience Panama firsthand before making the move — neighborhoods, real estate, visa guidance, and lifestyle immersion in one trip."
      : "Experimente Panamá de primera mano antes de mudarse — vecindarios, bienes raíces, orientación sobre visas e inmersión en el estilo de vida en un solo viaje.",
    intro: isEn
      ? "A Panama relocation tour is the smartest first step for anyone seriously considering a move to Panama. These guided, all-inclusive trips let you explore Panama City neighborhoods, visit Boquete's mountain communities, tour beach towns like Coronado, meet immigration attorneys, tour hospitals, and view real estate — all in under a week. In 2026, relocation tours are more popular than ever as expat interest surges."
      : "Un tour de reubicación a Panamá es el primer paso más inteligente para cualquiera que esté considerando seriamente mudarse a Panamá. Estos viajes guiados e inclusivos le permiten explorar los vecindarios de la Ciudad de Panamá, visitar las comunidades montañosas de Boquete, recorrer pueblos de playa como Coronado, reunirse con abogados de inmigración, visitar hospitales y ver bienes raíces — todo en menos de una semana.",
    whatIsTitle: isEn ? "What Is a Panama Relocation Tour?" : "¿Qué Es un Tour de Reubicación a Panamá?",
    whatIsText: isEn
      ? "A relocation tour is a structured, multi-day trip designed specifically for people who want to evaluate Panama as a permanent or part-time home. Unlike a vacation, these tours focus on the practical side of life: cost of living, banking, healthcare, residency visas, real estate, safety, and daily logistics. Most tours last 6 to 7 days, include lodging, meals, ground transportation, and expert-led sessions on immigration and property buying."
      : "Un tour de reubicación es un viaje estructurado de varios días diseñado específicamente para personas que quieren evaluar Panamá como hogar permanente o parcial. A diferencia de unas vacaciones, estos tours se centran en el lado práctico de la vida: costo de vida, banca, atención médica, visas de residencia, bienes raíces, seguridad y logística diaria.",
    typicalItineraryTitle: isEn ? "Typical 7-Day Relocation Tour Itinerary" : "Itinerario Típico de 7 Días",
    itinerary: [
      {
        day: isEn ? "Day 1" : "Día 1",
        title: isEn ? "Arrival & Panama City Orientation" : "Llegada y Orientación en Ciudad de Panamá",
        desc: isEn ? "Airport pickup, welcome dinner, overview of Panama's economy, dollar-based system, and safety landscape." : "Recogida en el aeropuerto, cena de bienvenida, panorama de la economía de Panamá y sistema basado en dólares.",
      },
      {
        day: isEn ? "Day 2" : "Día 2",
        title: isEn ? "Panama City Neighborhoods Tour" : "Tour de Vecindarios de Ciudad de Panamá",
        desc: isEn ? "Visit Punta Pacifica, Costa del Este, San Francisco, Clayton, and Casco Viejo. Meet local agents, see condos and homes." : "Visite Punta Pacifica, Costa del Este, San Francisco, Clayton y Casco Viejo. Conozca agentes locales.",
      },
      {
        day: isEn ? "Day 3" : "Día 3",
        title: isEn ? "Healthcare & Banking" : "Salud y Banca",
        desc: isEn ? "Tour of Johns Hopkins-affiliated hospitals, private clinics. Visit banks for account setup options." : "Recorrido por hospitales afiliados a Johns Hopkins y clínicas privadas. Visite bancos para opciones de apertura de cuenta.",
      },
      {
        day: isEn ? "Day 4" : "Día 4",
        title: isEn ? "Immigration & Legal Sessions" : "Sesiones de Inmigración y Legal",
        desc: isEn ? "Meet immigration attorneys. Learn about the Pensionado Visa, Friendly Nations Visa, and property-investment residency paths." : "Reúnase con abogados de inmigración. Conozca la Visa Pensionado, Visa de Naciones Amigas y residencia por inversión inmobiliaria.",
      },
      {
        day: isEn ? "Day 5" : "Día 5",
        title: isEn ? "Boquete Highland Experience" : "Experiencia en las Tierras Altas de Boquete",
        desc: isEn ? "Travel to Boquete. Tour coffee farms, homes, expat community centers, and mountain real estate." : "Viaje a Boquete. Recorra fincas de café, casas, centros comunitarios de expats e inmuebles de montaña.",
      },
      {
        day: isEn ? "Day 6" : "Día 6",
        title: isEn ? "Beach Communities — Coronado & Pacific Riviera" : "Comunidades de Playa — Coronado y Riviera del Pacífico",
        desc: isEn ? "Explore Coronado, Playa Blanca, and Gorgona. See beach condos, gated communities, and grocery options." : "Explore Coronado, Playa Blanca y Gorgona. Vea condominios de playa, comunidades cerradas y opciones de supermercados.",
      },
      {
        day: isEn ? "Day 7" : "Día 7",
        title: isEn ? "Wrap-Up & Next Steps" : "Cierre y Próximos Pasos",
        desc: isEn ? "Final Q&A, personalized recommendations, airport transfer. Many tours include a post-trip consultation." : "Preguntas y respuestas finales, recomendaciones personalizadas, traslado al aeropuerto.",
      },
    ],
    costTitle: isEn ? "How Much Does a Panama Relocation Tour Cost?" : "¿Cuánto Cuesta un Tour de Reubicación a Panamá?",
    costText: isEn
      ? "Group relocation tours typically cost between $2,500 and $3,500 per person, with couple pricing around $4,000 to $5,000 total. Private tours run higher — $4,000 to $6,000 — but offer a fully customized schedule. Most tours include 6–7 nights of accommodation, all meals, ground transport, expert sessions, and real estate viewings. International airfare is typically not included."
      : "Los tours grupales de reubicación generalmente cuestan entre $2,500 y $3,500 por persona, con precios para parejas de alrededor de $4,000 a $5,000 en total. Los tours privados son más costosos — $4,000 a $6,000 — pero ofrecen un itinerario completamente personalizado. La mayoría incluyen 6–7 noches de alojamiento, todas las comidas, transporte terrestre, sesiones con expertos y visitas a propiedades.",
    whyTitle: isEn ? "Why Take a Relocation Tour Before Moving?" : "¿Por Qué Tomar un Tour de Reubicación Antes de Mudarse?",
    whyPoints: [
      {
        icon: Home,
        title: isEn ? "See Real Estate in Person" : "Ver Bienes Raíces en Persona",
        desc: isEn ? "Photos never tell the full story. Walk through neighborhoods, feel the vibe, and understand pricing firsthand." : "Las fotos nunca cuentan toda la historia. Recorra los vecindarios, sienta el ambiente y comprenda los precios de primera mano.",
      },
      {
        icon: Users,
        title: isEn ? "Meet the Expat Community" : "Conozca la Comunidad Expat",
        desc: isEn ? "Connect with people who have already made the move. Hear real stories, not just marketing." : "Conéctese con personas que ya dieron el paso. Escuche historias reales, no solo marketing.",
      },
      {
        icon: CheckCircle,
        title: isEn ? "Understand Visa Options" : "Comprenda las Opciones de Visa",
        desc: isEn ? "Immigration attorneys explain the Pensionado, Friendly Nations, and investment visa paths tailored to your situation." : "Abogados de inmigración explican las vías Pensionado, Naciones Amigas e inversión adaptadas a su situación.",
      },
      {
        icon: DollarSign,
        title: isEn ? "Validate Cost of Living" : "Valide el Costo de Vida",
        desc: isEn ? "Shop at local supermarkets, eat at restaurants, and see actual utility and rent costs before committing." : "Compre en supermercados locales, coma en restaurantes y vea los costos reales de servicios y alquiler antes de comprometerse.",
      },
    ],
    tipsTitle: isEn ? "Tips for Choosing the Right Tour" : "Consejos para Elegir el Tour Adecuado",
    tips: [
      isEn ? "Look for tours that include immigration attorney sessions — not all do." : "Busque tours que incluyan sesiones con abogados de inmigración — no todos lo hacen.",
      isEn ? "Ask if real estate viewings cover multiple regions (city, mountains, beach)." : "Pregunte si las visitas inmobiliarias cubren múltiples regiones (ciudad, montañas, playa).",
      isEn ? "Check reviews on TripAdvisor and Facebook groups for unfiltered feedback." : "Revise reseñas en TripAdvisor y grupos de Facebook para comentarios sin filtro.",
      isEn ? "Choose a tour with small group sizes (under 20) for a more personal experience." : "Elija un tour con grupos pequeños (menos de 20) para una experiencia más personal.",
      isEn ? "Confirm what is included: meals, lodging, transport, and whether flights are separate." : "Confirme qué está incluido: comidas, alojamiento, transporte, y si los vuelos son por separado.",
    ],
    ctaTitle: isEn ? "Ready to Explore Panama?" : "¿Listo para Explorar Panamá?",
    ctaText: isEn
      ? "Browse our curated Panama property listings, explore neighborhood guides, and start planning your relocation journey today."
      : "Explore nuestros listados de propiedades en Panamá, guías de vecindarios, y comience a planificar su viaje de reubicación hoy.",
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent"
          >
            {content.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {content.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed">{content.intro}</p>
        </div>
      </section>

      {/* What Is a Relocation Tour */}
      <section className="py-16 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-amber-300">{content.whatIsTitle}</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{content.whatIsText}</p>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-amber-300">{content.typicalItineraryTitle}</h2>
          <div className="space-y-6">
            {content.itinerary.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-amber-400/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-amber-400" />
                  <span className="sr-only">{item.day}</span>
                </div>
                <div>
                  <span className="text-amber-400 text-sm font-semibold">{item.day}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-16 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-amber-300">{content.costTitle}</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{content.costText}</p>
        </div>
      </section>

      {/* Why Take a Tour */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-amber-300">{content.whyTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.whyPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <item.icon className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-amber-300">{content.tipsTitle}</h2>
          <ul className="space-y-4">
            {content.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-lg">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-amber-300">{content.ctaTitle}</h2>
          <p className="text-gray-300 text-lg mb-8">{content.ctaText}</p>
          <Link href={`/${lang}/propiedades`}>
            <Magnetic>
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-full text-lg hover:scale-105 transition-transform inline-flex items-center gap-2">
                {isEn ? 'Browse Properties' : 'Ver Propiedades'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </Magnetic>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PanamaRelocationTourContent;
