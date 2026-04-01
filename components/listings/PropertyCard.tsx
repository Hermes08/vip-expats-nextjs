'use client';

import React from 'react';
import Link from 'next/link';
import { Listing } from '@/lib/types';
import { Bed, Bath, Maximize2, MapPin, ArrowRight, Star } from 'lucide-react';

interface PropertyCardProps {
  listing: Listing;
  lang: 'en' | 'es';
}

const STATUS_LABELS: Record<string, Record<string, string>> = {
  'For Sale': { en: 'For Sale', es: 'En Venta' },
  'For Rent': { en: 'For Rent', es: 'En Alquiler' },
  'Sold':     { en: 'Sold',     es: 'Vendido' },
  'Rented':   { en: 'Rented',   es: 'Alquilado' },
};

const STATUS_COLORS: Record<string, string> = {
  'For Sale': 'bg-brand-GOLD/90 text-brand-950',
  'For Rent': 'bg-emerald-500/90 text-white',
  'Sold':     'bg-neutral-400/90 text-white',
  'Rented':   'bg-neutral-400/90 text-white',
};

function formatPrice(price: number, status: string, lang: string): string {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0,
  }).format(price);
  if (status === 'For Rent') return `${formatted}${lang === 'es' ? '/mes' : '/mo'}`;
  return formatted;
}

export default function PropertyCard({ listing, lang }: PropertyCardProps) {
  const title = listing.title[lang] ?? listing.title.en ?? '';
  const excerpt = listing.excerpt?.[lang] ?? listing.excerpt?.en ?? '';
  const image = listing.images?.[0] ?? 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80';
  const statusLabel = STATUS_LABELS[listing.status]?.[lang] ?? listing.status;
  const statusColor = STATUS_COLORS[listing.status] ?? 'bg-brand-GOLD/90 text-brand-950';

  const location = [listing.neighborhood, listing.city].filter(Boolean).join(', ');

  return (
    <article className="group bg-brand-900 rounded-2xl overflow-hidden border border-brand-800 hover:border-brand-GOLD/30 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-GOLD/5 flex flex-col">
      {/* Image */}
      <Link href={`/${lang}/propiedades/${listing.slug}`} className="block relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />

        {/* Status badge */}
        <span className={`absolute top-3 left-3 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-sm ${statusColor}`}>
          {statusLabel}
        </span>

        {/* Featured star */}
        {listing.featured && (
          <span className="absolute top-3 right-3 bg-brand-GOLD/90 backdrop-blur-sm text-brand-950 rounded-full p-1.5">
            <Star size={12} fill="currentColor" />
          </span>
        )}

        {/* Price overlay */}
        <div className="absolute bottom-3 left-3">
          <span className="text-white font-black text-lg drop-shadow-lg">
            {formatPrice(listing.price, listing.status, lang)}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-brand-GOLD/70 text-xs font-bold uppercase tracking-widest mb-2">
          <MapPin size={11} />
          <span>{location}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-white font-bold text-base leading-snug mb-3 group-hover:text-brand-GOLD transition-colors line-clamp-2">
          <Link href={`/${lang}/propiedades/${listing.slug}`}>{title}</Link>
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">
            {excerpt}
          </p>
        )}

        {/* Stats bar */}
        <div className="flex items-center gap-4 text-neutral-300 text-xs font-semibold border-t border-brand-800 pt-4 mt-auto">
          {listing.beds != null && (
            <span className="flex items-center gap-1.5">
              <Bed size={13} className="text-brand-GOLD/60" />
              {listing.beds} {lang === 'es' ? 'hab' : 'bd'}
            </span>
          )}
          {listing.baths != null && (
            <span className="flex items-center gap-1.5">
              <Bath size={13} className="text-brand-GOLD/60" />
              {listing.baths} {lang === 'es' ? 'baños' : 'ba'}
            </span>
          )}
          {listing.sqft != null && (
            <span className="flex items-center gap-1.5">
              <Maximize2 size={13} className="text-brand-GOLD/60" />
              {listing.sqft.toLocaleString()} {lang === 'es' ? 'm²' : 'sqft'}
            </span>
          )}
          <Link
            href={`/${lang}/propiedades/${listing.slug}`}
            className="ml-auto flex items-center gap-1 text-brand-GOLD/70 hover:text-brand-GOLD transition-colors"
          >
            {lang === 'es' ? 'Ver' : 'View'} <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </article>
  );
}
