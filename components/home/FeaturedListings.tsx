'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useCMS } from '@/context/CMSContext';
import PropertyCard from '@/components/listings/PropertyCard';

interface FeaturedListingsProps {
  lang: string;
}

const FEATURED_TEXT: Record<string, {
  badge: string;
  titleLine1: string;
  titleLine2Gold: string;
  viewAll: string;
  exploreAll: string;
}> = {
  en: {
    badge: 'Featured Listings',
    titleLine1: 'FOR SALE &',
    titleLine2Gold: 'FOR RENT',
    viewAll: 'View All Properties',
    exploreAll: 'EXPLORE ALL PROPERTIES',
  },
  es: {
    badge: 'Propiedades Destacadas',
    titleLine1: 'EN VENTA &',
    titleLine2Gold: 'ALQUILER',
    viewAll: 'Ver Todo el Inventario',
    exploreAll: 'EXPLORAR TODAS LAS PROPIEDADES',
  },
  pt: {
    badge: 'Imóveis em Destaque',
    titleLine1: 'À VENDA &',
    titleLine2Gold: 'PARA ALUGAR',
    viewAll: 'Ver Todos os Imóveis',
    exploreAll: 'EXPLORAR TODOS OS IMÓVEIS',
  },
  de: {
    badge: 'Ausgewählte Objekte',
    titleLine1: 'ZU VERKAUFEN &',
    titleLine2Gold: 'ZU VERMIETEN',
    viewAll: 'Alle Objekte Ansehen',
    exploreAll: 'ALLE IMMOBILIEN ERKUNDEN',
  },
};

export default function FeaturedListings({ lang }: FeaturedListingsProps) {
  const { listings } = useCMS();
  const ft = FEATURED_TEXT[lang] || FEATURED_TEXT['en'];

  // Show featured first, then any, max 3
  const featured = listings
    .filter((l) => l.status === 'For Sale' || l.status === 'For Rent')
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    .slice(0, 3);

  // Don't render section if no listings yet
  if (featured.length === 0) return null;

  return (
    <section className="py-16 md:py-32 bg-[color:var(--color-cream-soft)] border-t border-[color:rgba(14,42,43,0.08)] relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal-on-scroll">
          <div>
            <span className="eyebrow !text-[color:var(--color-brass)] mb-5 block">
              {ft.badge}
            </span>
            <h2 className="display-serif text-5xl md:text-7xl text-[color:var(--color-ink)] leading-[0.95]">
              {ft.titleLine1}<br /><span className="italic text-brand-GOLD">{ft.titleLine2Gold}</span>
            </h2>
          </div>
          <Link
            href={`/${lang}/propiedades`}
            className="eyebrow !text-[color:var(--color-teal-edit)] flex items-center gap-3 border-b border-[color:var(--color-teal-edit)]/40 pb-2 hover:border-[color:var(--color-teal-edit)] transition-all group whitespace-nowrap"
          >
            {ft.viewAll}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Property grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((listing, idx) => (
            <div key={listing.id} className={`reveal-on-scroll stagger-${(idx % 3) + 1}`}>
              <PropertyCard listing={listing} lang={lang} priority={idx === 0} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center reveal-on-scroll">
          <Link
            href={`/${lang}/propiedades`}
            className="btn-editorial btn-editorial-teal inline-flex items-center gap-3 uppercase tracking-[0.18em]"
          >
            {ft.exploreAll}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
