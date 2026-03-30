'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import HeroCarousel from './HeroCarousel';
import HeroTilt from '@/components/ui/HeroTilt';
import Magnetic from '@/components/ui/Magnetic';

interface HeroSectionProps {
  lang: 'en' | 'es';
}

const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      <HeroCarousel />

      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full pt-20 perspective-1000">
        <HeroTilt intensity={3} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 px-6 py-2 glass-card rounded-full mb-12 shadow-2xl"
            style={{ transform: 'translateZ(40px)' }}
          >
            <div className="w-2 h-2 bg-brand-GOLD rounded-full animate-pulse shadow-[0_0_10px_theme(colors.brand.GOLD)]"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Market Intelligence <span className="text-brand-GOLD">2026</span></span>
          </motion.div>

          <div style={{ transform: 'translateZ(60px)' }}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-7xl md:text-9xl font-black text-white mb-8 leading-[0.8] tracking-tighter uppercase italic"
            >
              {lang === 'es' ? "Bienes Raíces" : "Panama Real Estate"} <br />
              <span className="text-brand-GOLD">
                {lang === 'es' ? "en Venta 2026" : "for Sale 2026"}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="text-xl md:text-2xl text-white/90 font-black mb-12 uppercase tracking-[0.4em] font-serif-luxury"
            >
              Luxury Beachfront & City Portfolio
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-slate-300 mb-16 leading-relaxed max-w-2xl mx-auto font-medium opacity-80"
            style={{ transform: 'translateZ(30px)' }}
          >
            Your trusted guide to buying property in Panama. From beachfront condos to mountain retreats, we connect international investors with the best real estate opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.4, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row gap-12 justify-center"
            style={{ transform: 'translateZ(50px)' }}
          >
            <Magnetic strength={0.4}>
              <Link href={`/${lang}/proyectos`} className="btn-3d btn-3d-gold px-12 py-7 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center">
                EXPLORE ASSETS
              </Link>
            </Magnetic>
            <Magnetic strength={0.4}>
              <Link href={`/${lang}/tours`} className="btn-3d btn-3d-navy px-12 py-7 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] bg-white/5 backdrop-blur-3xl border border-white/10 flex items-center justify-center gap-3">
                <PlayCircle size={20} className="text-brand-GOLD" /> DISCOVERY TOURS
              </Link>
            </Magnetic>
          </motion.div>
        </HeroTilt>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
        <span className="text-[9px] font-black uppercase tracking-widest text-white">Scroll to Discover</span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-GOLD to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
