'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Key, Building2, Map, ArrowRight } from 'lucide-react';

interface QuickSearchStripProps {
  lang: 'en' | 'es';
}

const categories = [
  {
    icon: Home,
    labelEs: 'Comprar',
    labelEn: 'Buy Property',
    descEs: 'Casas, condos y terrenos',
    descEn: 'Homes, condos & land',
    href: '/propiedades',
    params: '?status=For+Sale',
    accent: 'brand-GOLD',
  },
  {
    icon: Key,
    labelEs: 'Alquilar',
    labelEn: 'For Rent',
    descEs: 'Apartamentos y casas',
    descEn: 'Apartments & homes',
    href: '/propiedades',
    params: '?status=For+Rent',
    accent: 'emerald-400',
  },
  {
    icon: Building2,
    labelEs: 'Proyectos Nuevos',
    labelEn: 'New Developments',
    descEs: 'Preventa y en construcción',
    descEn: 'Presale & under construction',
    href: '/proyectos',
    params: '',
    accent: 'sky-400',
  },
  {
    icon: Map,
    labelEs: 'Tour de Relocación',
    labelEn: 'Relocation Tour',
    descEs: 'Conoce Panamá en persona',
    descEn: 'Discover Panama in person',
    href: '/relocation/tours',
    params: '',
    accent: 'violet-400',
  },
];

export default function QuickSearchStrip({ lang }: QuickSearchStripProps) {
  return (
    <section className="bg-brand-950 border-b border-white/5 relative z-10">
      {/* Top divider line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-GOLD/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const label = lang === 'es' ? cat.labelEs : cat.labelEn;
            const desc = lang === 'es' ? cat.descEs : cat.descEn;
            const href = `/${lang}${cat.href}${cat.params}`;

            return (
              <Link
                key={i}
                href={href}
                className="group flex items-center gap-5 px-8 py-7 hover:bg-white/3 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-brand-GOLD/30 group-hover:bg-brand-GOLD/10 transition-all">
                  <Icon size={20} className="text-brand-GOLD" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-black text-[11px] uppercase tracking-[0.15em] group-hover:text-brand-GOLD transition-colors truncate">
                    {label}
                  </p>
                  <p className="text-slate-500 text-[10px] font-medium mt-0.5 truncate">{desc}</p>
                </div>
                <ArrowRight
                  size={14}
                  className="text-slate-600 group-hover:text-brand-GOLD group-hover:translate-x-1 transition-all flex-shrink-0"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
