'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import HeroCarousel from './HeroCarousel';
import HeroTilt from '@/components/ui/HeroTilt';
import Magnetic from '@/components/ui/Magnetic';

interface HeroSectionProps {
  lang: string;
}

const HERO_TEXT: Record<string, {
  title: string;
  titleGold: string;
  tagline: string;
  subtitle: string;
  statsLabels: string[];
  ctaBrowse: string;
  ctaConsult: string;
  scroll: string;
  badge: string;
}> = {
  en: {
    title: 'Panama Real Estate',
    titleGold: 'for Sale 2026',
    tagline: 'USD Economy · Pensionado Visa · Johns Hopkins-Affiliated Healthcare',
    subtitle: 'The #1 Plan-B destination for US & Canadian retirees and LATAM investors hedging in dollars. Permanent residency in 4–8 months, no currency risk, world-class medical care, and titled beachfront from $250K.',
    statsLabels: ['Verified Listings', 'Years in Panama', 'USD · No FX Risk'],
    ctaBrowse: 'BROWSE PROPERTIES',
    ctaConsult: 'FREE CONSULTATION',
    scroll: 'Scroll to Discover',
    badge: 'Market Intelligence',
  },
  es: {
    title: 'Bienes Raíces',
    titleGold: 'en Venta 2026',
    tagline: 'Economía en USD · Visa Pensionado · Salud de Clase Mundial',
    subtitle: 'El destino #1 Plan B para inversionistas latinoamericanos que buscan dolarizar su patrimonio. Residencia permanente en 4–8 meses, cero riesgo cambiario, propiedad titulada frente al mar desde $250,000 USD.',
    statsLabels: ['Propiedades Verificadas', 'Años en Panamá', 'USD · Sin Riesgo FX'],
    ctaBrowse: 'VER PROPIEDADES',
    ctaConsult: 'CONSULTA GRATIS',
    scroll: 'Desplázate para Descubrir',
    badge: 'Inteligencia de Mercado',
  },
  pt: {
    title: 'Imóveis no Panamá',
    titleGold: 'à Venda 2026',
    tagline: 'Economia em USD · Visto de Residência · Saúde Padrão Global',
    subtitle: 'O destino #1 Plano B para brasileiros que querem proteger patrimônio em dólar. Residência permanente em 4–8 meses, sem risco cambial, imóveis beira-mar titulados a partir de US$ 250.000.',
    statsLabels: ['Imóveis Verificados', 'Anos no Panamá', 'USD · Sem Risco Cambial'],
    ctaBrowse: 'VER IMÓVEIS',
    ctaConsult: 'CONSULTA GRÁTIS',
    scroll: 'Role para Descobrir',
    badge: 'Inteligência de Mercado',
  },
  de: {
    title: 'Panama Immobilien',
    titleGold: 'zum Verkauf 2026',
    tagline: 'USD-Wirtschaft · Permanente Aufenthaltsgenehmigung · Erstklassige Gesundheitsversorgung',
    subtitle: 'Das #1 Plan-B-Ziel für internationale Investoren. Permanente Aufenthaltsgenehmigung in 4–8 Monaten, kein Währungsrisiko, Strandimmobilien mit Eigentumstitel ab 250.000 USD.',
    statsLabels: ['Verifizierte Immobilien', 'Jahre in Panama', 'USD · Kein FX-Risiko'],
    ctaBrowse: 'IMMOBILIEN ANSEHEN',
    ctaConsult: 'KOSTENLOSE BERATUNG',
    scroll: 'Scrollen zum Entdecken',
    badge: 'Marktintelligenz',
  },
};

const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const h = HERO_TEXT[lang] || HERO_TEXT['en'];

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      <HeroCarousel />

      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full pt-20 perspective-1000">
        <HeroTilt intensity={3} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full mb-6 shadow-xl"
            style={{ transform: 'translateZ(40px)' }}
          >
            <div className="w-2 h-2 bg-brand-GOLD rounded-full animate-pulse shadow-[0_0_10px_theme(colors.brand.GOLD)]"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90">{h.badge} <span className="text-brand-GOLD">2026</span></span>
          </motion.div>

          <div style={{ transform: 'translateZ(60px)' }}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-4xl sm:text-6xl md:text-7xl font-black text-white mb-5 leading-tight tracking-tight uppercase"
            >
              {h.title} <br />
              <span className="text-brand-GOLD">
                {h.titleGold}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="text-xs md:text-sm text-white/80 font-bold mb-5 uppercase tracking-[0.25em]"
            >
              {h.tagline}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-white/70 mb-8 leading-relaxed max-w-xl mx-auto font-medium"
            style={{ transform: 'translateZ(30px)' }}
          >
            {h.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.4, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ transform: 'translateZ(50px)' }}
          >
            <Magnetic strength={0.3}>
              <Link href={`/${lang}/propiedades`} className="btn-3d btn-3d-gold px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center">
                {h.ctaBrowse}
              </Link>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Link href={`/${lang}/contacto`} className="btn-3d btn-3d-navy px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] bg-white/10 backdrop-blur-3xl border border-white/30 text-white flex items-center justify-center gap-3">
                {h.ctaConsult}
              </Link>
            </Magnetic>
          </motion.div>

          {/* Above-fold social proof stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-wrap justify-center gap-8 mt-8"
            style={{ transform: 'translateZ(20px)' }}
          >
            {[
              { val: '200+', label: h.statsLabels[0] },
              { val: '7+', label: h.statsLabels[1] },
              { val: '100%', label: h.statsLabels[2] },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80">
                <span className="text-brand-GOLD font-black text-lg">{stat.val}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">{stat.label}</span>
                {i < 2 && <span className="ml-4 w-px h-4 bg-white/20 hidden sm:block" />}
              </div>
            ))}
          </motion.div>
        </HeroTilt>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
        <span className="text-[9px] font-black uppercase tracking-widest text-white">{h.scroll}</span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-GOLD to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
