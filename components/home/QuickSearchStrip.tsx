'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Key, Building2, Map, ArrowRight } from 'lucide-react';

interface QuickSearchStripProps {
  lang: string;
}

const categories = [
  {
    icon: Home,
    labels: {
      en: 'Buy Property',
      es: 'Comprar',
      pt: 'Comprar',
      de: 'Kaufen',
    },
    descs: {
      en: 'Homes, condos & land',
      es: 'Casas, condos y terrenos',
      pt: 'Casas, apartamentos e terrenos',
      de: 'Häuser, Apartments & Grundstücke',
    },
    href: '/propiedades',
    params: '?status=For+Sale',
  },
  {
    icon: Key,
    labels: {
      en: 'For Rent',
      es: 'Alquilar',
      pt: 'Para Alugar',
      de: 'Zur Miete',
    },
    descs: {
      en: 'Apartments & homes',
      es: 'Apartamentos y casas',
      pt: 'Apartamentos e casas',
      de: 'Apartments & Häuser',
    },
    href: '/propiedades',
    params: '?status=For+Rent',
  },
  {
    icon: Building2,
    labels: {
      en: 'New Developments',
      es: 'Proyectos Nuevos',
      pt: 'Novos Empreendimentos',
      de: 'Neue Projekte',
    },
    descs: {
      en: 'Presale & under construction',
      es: 'Preventa y en construcción',
      pt: 'Pré-venda e em construção',
      de: 'Vorverkauf & im Bau',
    },
    href: '/proyectos',
    params: '',
  },
  {
    icon: Map,
    labels: {
      en: 'Relocation Tour',
      es: 'Tour de Relocación',
      pt: 'Tour de Relocação',
      de: 'Relocation Tour',
    },
    descs: {
      en: 'Discover Panama in person',
      es: 'Conoce Panamá en persona',
      pt: 'Conheça o Panamá pessoalmente',
      de: 'Panama persönlich entdecken',
    },
    href: '/relocation/tours',
    params: '',
  },
];

export default function QuickSearchStrip({ lang }: QuickSearchStripProps) {
  return (
    <section className="bg-white border-b border-brand-100 relative z-10">
      {/* Top divider line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-GOLD/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const label = (cat.labels as Record<string, string>)[lang] || cat.labels.en;
            const desc = (cat.descs as Record<string, string>)[lang] || cat.descs.en;
            const href = `/${lang}${cat.href}${cat.params}`;

            return (
              <Link
                key={i}
                href={href}
                className="group flex items-center gap-5 px-8 py-7 hover:bg-white/3 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-white/5 border border-brand-100 flex items-center justify-center flex-shrink-0 group-hover:border-brand-GOLD/30 group-hover:bg-brand-GOLD/10 transition-all">
                  <Icon size={20} className="text-brand-GOLD" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-700 font-black text-[11px] uppercase tracking-[0.15em] group-hover:text-brand-GOLD transition-colors truncate">
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
