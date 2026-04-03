'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useCMS } from '@/context/CMSContext';
import PropertyCard from '@/components/listings/PropertyCard';

interface FeaturedListingsProps {
  lang: 'en' | 'es';
}

export default function FeaturedListings({ lang }: FeaturedListingsProps) {
  const { listings } = useCMS();

  // Show featured first, then any, max 3
  const featured = listings
    .filter((l) => l.status === 'For Sale' || l.status === 'For Rent')
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    .slice(0, 3);

  // Don't render section if no listings yet
  if (featured.length === 0) return null;

  return (
    <section className="py-16 md:py-32 bg-white border-t border-brand-100 relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal-on-scroll">
          <div>
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-4 block italic">
              {lang === 'es' ? 'Propiedades Destacadas' : 'Featured Listings'}
            </span>
            <h2 className="font-heading text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight md:leading-[0.85]">
              {lang === 'es' ? (
                <>EN VENTA &<br /><span className="text-brand-GOLD">ALQUILER</span></>
              ) : (
                <>FOR SALE &<br /><span className="text-brand-GOLD">FOR RENT</span></>
              )}
            </h2>
          </div>
          <Link
            href={`/${lang}/propiedades`}
            className="flex items-center gap-3 text-brand-GOLD font-black text-[11px] uppercase tracking-widest border-b border-brand-GOLD/40 pb-2 hover:border-brand-GOLD transition-all group whitespace-nowrap"
          >
            {lang === 'es' ? 'Ver Todo el Inventario' : 'View All Properties'}
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
            className="btn-3d btn-3d-gold inline-flex items-center gap-3 px-12 py-5 rounded-xl font-black text-[11px] uppercase tracking-widest"
          >
            {lang === 'es' ? 'EXPLORAR TODAS LAS PROPIEDADES' : 'EXPLORE ALL PROPERTIES'}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
