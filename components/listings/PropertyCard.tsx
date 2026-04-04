'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Listing } from '@/lib/types';
import { Bed, Bath, Maximize2, MapPin, ArrowRight, Star } from 'lucide-react';

const BLUR_PLACEHOLDER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

interface PropertyCardProps {
  listing: Listing;
  lang: string;
  priority?: boolean;
}

const STATUS_LABELS: Record<string, Record<string, string>> = {
  'For Sale': { en: 'For Sale', es: 'En Venta',    pt: 'À Venda',    de: 'Zu Verkaufen' },
  'For Rent': { en: 'For Rent', es: 'En Alquiler', pt: 'Para Alugar', de: 'Zu Vermieten' },
  'Sold':     { en: 'Sold',     es: 'Vendido',     pt: 'Vendido',     de: 'Verkauft' },
  'Rented':   { en: 'Rented',   es: 'Alquilado',   pt: 'Alugado',     de: 'Vermietet' },
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
  if (status === 'For Rent') return `${formatted}${lang === 'es' || lang === 'pt' ? '/mês' : lang === 'de' ? '/Mo.' : '/mo'}`;
  return formatted;
}

export default function PropertyCard({ listing, lang, priority = false }: PropertyCardProps) {
  const title = listing.title[lang] ?? listing.title.en ?? '';
  const excerpt = listing.excerpt?.[lang] ?? listing.excerpt?.en ?? '';
  const image = listing.images?.[0] ?? 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80';
  const statusLabel = STATUS_LABELS[listing.status]?.[lang] ?? listing.status;
  const statusColor = STATUS_COLORS[listing.status] ?? 'bg-brand-GOLD/90 text-brand-950';

  const location = [listing.neighborhood, listing.city].filter(Boolean).join(', ');

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-brand-100 hover:border-brand-TEAL/40 transition-all duration-300 hover:shadow-xl hover:shadow-brand-TEAL/8 flex flex-col">
      {/* Image */}
      <Link href={`/${lang}/propiedades/${listing.slug}`} className="block relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
        />
        {/* Gradient overlay — dark at bottom so price text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

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
        <div className="flex items-center gap-1.5 text-brand-TEAL text-xs font-bold uppercase tracking-widest mb-2">
          <MapPin size={11} />
          <span>{location}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-brand-950 font-bold text-base leading-snug mb-3 group-hover:text-brand-TEAL transition-colors line-clamp-2">
          <Link href={`/${lang}/propiedades/${listing.slug}`}>{title}</Link>
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">
            {excerpt}
          </p>
        )}

        {/* Stats bar */}
        <div className="flex items-center gap-4 text-slate-500 text-xs font-semibold border-t border-brand-100 pt-4 mt-auto">
          {listing.beds != null && (
            <span className="flex items-center gap-1.5">
              <Bed size={13} className="text-brand-TEAL/70" />
              {listing.beds} {lang === 'es' ? 'hab' : 'bd'}
            </span>
          )}
          {listing.baths != null && (
            <span className="flex items-center gap-1.5">
              <Bath size={13} className="text-brand-TEAL/70" />
              {listing.baths} {lang === 'es' ? 'baños' : 'ba'}
            </span>
          )}
          {listing.sqft != null && (
            <span className="flex items-center gap-1.5">
              <Maximize2 size={13} className="text-brand-TEAL/70" />
              {listing.sqft.toLocaleString()} {lang === 'es' ? 'm²' : 'sqft'}
            </span>
          )}
          <Link
            href={`/${lang}/propiedades/${listing.slug}`}
            className="ml-auto flex items-center gap-1 text-brand-TEAL/70 hover:text-brand-TEAL transition-colors font-bold"
          >
            {lang === 'es' ? 'Ver' : 'View'} <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </article>
  );
}
