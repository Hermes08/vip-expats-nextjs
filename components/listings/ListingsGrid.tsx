'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Listing } from '@/lib/types';
import PropertyCard from './PropertyCard';
import PropertySearchFilters, { FilterState, DEFAULT_FILTERS } from './PropertySearchFilters';
import { useCMS } from '@/context/CMSContext';
import { Building2, MessageCircle, ArrowRight } from 'lucide-react';

interface Props {
  lang: 'en' | 'es';
  initialListings?: Listing[];
}

export default function ListingsGrid({ lang, initialListings }: Props) {
  const { listings } = useCMS();
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  // Use listings from CMS context (Supabase), fallback to initialListings prop
  const allListings: Listing[] = listings.length > 0 ? listings : (initialListings ?? []);

  const filtered = useMemo(() => {
    return allListings.filter((l) => {
      if (filters.zone && l.zone !== filters.zone) return false;
      if (filters.type && l.property_type !== filters.type) return false;
      if (filters.status && l.status !== filters.status) return false;
      if (filters.city && l.city !== filters.city) return false;
      if (filters.minPrice > 0 && l.price < filters.minPrice) return false;
      if (filters.maxPrice > 0 && l.price > filters.maxPrice) return false;
      if (filters.query) {
        const q = filters.query.toLowerCase();
        const title = (l.title[lang] ?? l.title.en ?? '').toLowerCase();
        const city = (l.city ?? '').toLowerCase();
        const neighborhood = (l.neighborhood ?? '').toLowerCase();
        const zone = (l.zone ?? '').toLowerCase();
        if (!title.includes(q) && !city.includes(q) && !neighborhood.includes(q) && !zone.includes(q)) return false;
      }
      return true;
    });
  }, [allListings, filters, lang]);

  const labels = {
    en: {
      heading: 'Panama Properties',
      sub: 'Existing homes, condos, and land — ready to buy or rent today.',
      empty: 'No properties match your filters.',
      emptyHint: 'Try adjusting the zone, type, or price range.',
    },
    es: {
      heading: 'Propiedades en Panamá',
      sub: 'Casas, apartamentos y terrenos disponibles — listas para comprar o alquilar hoy.',
      empty: 'Ninguna propiedad coincide con tus filtros.',
      emptyHint: 'Intenta ajustar la zona, tipo o rango de precio.',
    },
  };
  const t = labels[lang];

  const contactLabels = {
    en: { msg: "Can't find what you're looking for?", cta: "Talk to an agent" },
    es: { msg: "¿No encuentras lo que buscas?", cta: "Habla con un agente" },
  };
  const ct = contactLabels[lang];

  return (
    <div className="min-h-screen bg-brand-950 pt-24 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 text-brand-GOLD/70 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Building2 size={13} /> {lang === 'es' ? 'Propiedades Disponibles' : 'Available Properties'}
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-black text-white mb-4">
            {t.heading}
          </h1>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm leading-relaxed">{t.sub}</p>
        </div>

        {/* Filters */}
        <PropertySearchFilters
          filters={filters}
          onChange={setFilters}
          total={allListings.length}
          filtered={filtered.length}
          lang={lang}
        />

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-white text-xl font-semibold mb-2">{t.empty}</p>
            <p className="text-neutral-400 text-sm">{t.emptyHint}</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(listing => (
              <PropertyCard key={listing.id} listing={listing} lang={lang} />
            ))}
          </div>
        )}
      </div>

      {/* Sticky bottom CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-900/95 backdrop-blur-md border-t border-white/10 py-3 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2">
            <MessageCircle size={15} className="text-brand-GOLD flex-shrink-0" />
            <span className="text-slate-300 text-xs sm:text-sm font-medium">{ct.msg}</span>
          </div>
          <Link
            href={`/${lang}/contacto`}
            className="inline-flex items-center gap-1.5 btn-3d btn-3d-gold px-4 py-2 rounded-lg font-black uppercase tracking-widest text-[10px] sm:text-xs whitespace-nowrap"
          >
            {ct.cta} <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
