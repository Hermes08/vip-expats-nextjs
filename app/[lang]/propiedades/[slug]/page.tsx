'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCMS } from '@/context/CMSContext';
import { useLanguage } from '@/context/LanguageContext';
import {
  Bed, Bath, Maximize2, MapPin, Phone, Mail, ArrowLeft,
  Star, CheckCircle, Home, Building2, Tag, Calendar
} from 'lucide-react';

function formatPrice(price: number, status: string, lang: string): string {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0,
  }).format(price);
  if (status === 'For Rent') return `${formatted}${lang === 'es' ? '/mes' : '/mo'}`;
  return formatted;
}

const STATUS_LABELS: Record<string, Record<string, string>> = {
  'For Sale': { en: 'For Sale', es: 'En Venta' },
  'For Rent': { en: 'For Rent', es: 'En Alquiler' },
  'Sold':     { en: 'Sold',     es: 'Vendido' },
  'Rented':   { en: 'Rented',   es: 'Alquilado' },
};

export default function PropertyDetailPage() {
  const params = useParams();
  const { lang } = useLanguage();
  const { listings } = useCMS();

  const slug = params?.slug as string;
  const listing = listings.find((l) => l.slug === slug);

  if (!listing) {
    return (
      <div className="min-h-screen bg-brand-950 flex flex-col items-center justify-center px-4 text-center pt-32">
        <Home size={48} className="text-brand-GOLD mb-6 opacity-50" />
        <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4">
          {lang === 'es' ? 'Propiedad no encontrada' : 'Property not found'}
        </h1>
        <p className="text-slate-400 mb-10">
          {lang === 'es'
            ? 'Esta propiedad ya no está disponible o el enlace es incorrecto.'
            : 'This property is no longer available or the link is incorrect.'}
        </p>
        <Link href={`/${lang}/propiedades`} className="btn-3d btn-3d-gold px-10 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest inline-flex items-center gap-2">
          <ArrowLeft size={14} /> {lang === 'es' ? 'Ver todas las propiedades' : 'View all properties'}
        </Link>
      </div>
    );
  }

  const title = listing.title[lang] ?? listing.title.en ?? '';
  const description = listing.description[lang] ?? listing.description.en ?? '';
  const images = listing.images?.length ? listing.images : ['https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80'];
  const statusLabel = STATUS_LABELS[listing.status]?.[lang] ?? listing.status;
  const whatsappMsg = encodeURIComponent(
    lang === 'es'
      ? `Hola, me interesa la propiedad: ${title} (${listing.slug}). ¿Está disponible?`
      : `Hi, I'm interested in the property: ${title} (${listing.slug}). Is it available?`
  );
  const whatsappHref = listing.agentWhatsapp
    ? `https://wa.me/${listing.agentWhatsapp.replace(/\D/g, '')}?text=${whatsappMsg}`
    : `https://wa.me/50767610315?text=${whatsappMsg}`;

  const locationStr = [listing.neighborhood, listing.city, listing.province].filter(Boolean).join(', ') || 'Panama';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: title,
    description: description,
    price: listing.price,
    priceCurrency: 'USD',
    url: `https://panamarealestatesale.com/${lang}/propiedades/${listing.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: locationStr,
      addressCountry: 'PA',
    },
    identifier: listing.slug,
  };

  return (
    <main className="min-h-screen bg-brand-950 pt-24 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-10">
          <Link href={`/${lang}`} className="hover:text-brand-GOLD transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/${lang}/propiedades`} className="hover:text-brand-GOLD transition-colors">
            {lang === 'es' ? 'Propiedades' : 'Properties'}
          </Link>
          <span>/</span>
          <span className="text-slate-300 truncate max-w-xs">{title}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* LEFT: Images + Details */}
          <div className="lg:col-span-2 space-y-8">

            {/* Hero image */}
            <div className="relative rounded-[3rem] overflow-hidden aspect-[16/9] border border-white/5 shadow-2xl group">
              <img
                src={images[0]}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent" />
              {/* Status badge */}
              <div className={`absolute top-6 left-6 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${listing.status === 'For Sale' ? 'bg-brand-GOLD text-brand-950' : listing.status === 'For Rent' ? 'bg-emerald-500 text-white' : 'bg-neutral-500 text-white'}`}>
                {statusLabel}
              </div>
              {listing.featured && (
                <div className="absolute top-6 right-6 flex items-center gap-1.5 px-4 py-2 bg-brand-950/80 backdrop-blur rounded-full border border-brand-GOLD/30">
                  <Star size={10} className="text-brand-GOLD fill-brand-GOLD" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-brand-GOLD">Featured</span>
                </div>
              )}
            </div>

            {/* Thumbnail row */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.slice(1, 5).map((img, i) => (
                  <div key={i} className="w-28 h-20 flex-shrink-0 rounded-2xl overflow-hidden border border-white/10">
                    <img src={img} alt={`${title} ${i + 2}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}

            {/* Title + Location */}
            <div>
              <div className="flex items-center gap-2 text-slate-500 text-[11px] font-black uppercase tracking-widest mb-3">
                <MapPin size={12} className="text-brand-GOLD" />
                {[listing.neighborhood, listing.city, listing.province].filter(Boolean).join(', ')}
              </div>
              <h1 className="font-heading text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-6">
                {title}
              </h1>
              <div className="text-4xl md:text-5xl font-black text-brand-GOLD tracking-tighter">
                {formatPrice(listing.price, listing.status, lang)}
              </div>
              {listing.pricePerSqft && (
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">
                  ${listing.pricePerSqft.toLocaleString()} {lang === 'es' ? 'por m²' : 'per sqft'}
                </p>
              )}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {listing.beds != null && (
                <div className="glass-card p-6 rounded-2xl border-white/5 flex items-center gap-3">
                  <Bed size={18} className="text-brand-GOLD flex-shrink-0" />
                  <div>
                    <p className="text-white font-black text-lg">{listing.beds}</p>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest">{lang === 'es' ? 'Hab.' : 'Beds'}</p>
                  </div>
                </div>
              )}
              {listing.baths != null && (
                <div className="glass-card p-6 rounded-2xl border-white/5 flex items-center gap-3">
                  <Bath size={18} className="text-brand-GOLD flex-shrink-0" />
                  <div>
                    <p className="text-white font-black text-lg">{listing.baths}</p>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest">{lang === 'es' ? 'Baños' : 'Baths'}</p>
                  </div>
                </div>
              )}
              {listing.sqft != null && (
                <div className="glass-card p-6 rounded-2xl border-white/5 flex items-center gap-3">
                  <Maximize2 size={18} className="text-brand-GOLD flex-shrink-0" />
                  <div>
                    <p className="text-white font-black text-lg">{listing.sqft.toLocaleString()}</p>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest">m²</p>
                  </div>
                </div>
              )}
              {listing.yearBuilt != null && (
                <div className="glass-card p-6 rounded-2xl border-white/5 flex items-center gap-3">
                  <Calendar size={18} className="text-brand-GOLD flex-shrink-0" />
                  <div>
                    <p className="text-white font-black text-lg">{listing.yearBuilt}</p>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest">{lang === 'es' ? 'Año' : 'Year'}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Tags row */}
            <div className="flex flex-wrap gap-3">
              {listing.zone && (
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-300 flex items-center gap-2">
                  <MapPin size={10} className="text-brand-GOLD" /> {listing.zone}
                </span>
              )}
              {listing.property_type && (
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-300 flex items-center gap-2">
                  <Building2 size={10} className="text-brand-GOLD" /> {listing.property_type}
                </span>
              )}
              {listing.ref && (
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Tag size={10} /> Ref: {listing.ref}
                </span>
              )}
            </div>

            {/* Description */}
            <div className="glass-card p-10 rounded-3xl border-white/5">
              <h2 className="text-lg font-black text-white uppercase italic tracking-tighter mb-6">
                {lang === 'es' ? 'Descripción' : 'Description'}
              </h2>
              <p className="text-slate-400 leading-relaxed font-medium whitespace-pre-line">{description}</p>
            </div>

            {/* Amenities */}
            {listing.amenities && listing.amenities.length > 0 && (
              <div className="glass-card p-10 rounded-3xl border-white/5">
                <h2 className="text-lg font-black text-white uppercase italic tracking-tighter mb-8">
                  {lang === 'es' ? 'Amenidades' : 'Amenities'}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {listing.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                      <CheckCircle size={14} className="text-brand-GOLD flex-shrink-0" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Contact sidebar */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-28">

            {/* Price card */}
            <div className="glass-card p-8 rounded-3xl border border-brand-GOLD/20 bg-gradient-to-b from-brand-GOLD/5 to-transparent">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-GOLD mb-2">
                {statusLabel}
              </p>
              <p className="text-3xl font-black text-white tracking-tighter mb-1">
                {formatPrice(listing.price, listing.status, lang)}
              </p>
              {listing.sqft && listing.price && (
                <p className="text-slate-500 text-xs font-medium">
                  ${Math.round(listing.price / listing.sqft).toLocaleString()} {lang === 'es' ? '/m²' : '/sqft'}
                </p>
              )}
            </div>

            {/* Agent card */}
            <div className="glass-card p-8 rounded-3xl border-white/5 space-y-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-1">
                  {lang === 'es' ? 'Agente' : 'Agent'}
                </p>
                <p className="text-white font-black text-lg tracking-tighter">
                  {listing.agentName ?? 'Panama Sale Team'}
                </p>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d btn-3d-gold w-full px-6 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3"
              >
                <Phone size={16} />
                {lang === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
              </a>

              {listing.agentEmail && (
                <a
                  href={`mailto:${listing.agentEmail}?subject=${encodeURIComponent(title)}`}
                  className="w-full px-6 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 border border-white/10 text-slate-300 hover:border-brand-GOLD/30 hover:text-brand-GOLD transition-all"
                >
                  <Mail size={16} />
                  {lang === 'es' ? 'Enviar Email' : 'Send Email'}
                </a>
              )}
            </div>

            {/* Back to listings */}
            <Link
              href={`/${lang}/propiedades`}
              className="flex items-center gap-2 text-slate-500 hover:text-brand-GOLD transition-colors text-[10px] font-black uppercase tracking-widest"
            >
              <ArrowLeft size={12} />
              {lang === 'es' ? 'Volver a propiedades' : 'Back to properties'}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
