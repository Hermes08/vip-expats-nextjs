'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Listing } from '@/lib/types';
import PropertyCard from './PropertyCard';
import PropertySearchFilters, { FilterState, DEFAULT_FILTERS } from './PropertySearchFilters';
import { useCMS } from '@/context/CMSContext';
import { MessageCircle, ArrowRight, TrendingUp, MapPin, ShieldCheck, Info } from 'lucide-react';
import HeroTilt from '@/components/ui/HeroTilt';

interface Props {
  lang: 'en' | 'es';
  initialListings?: Listing[];
}

const LISTINGS_TEXT: Record<string, {
  badge: string;
  title: string;
  titleGold: string;
  subtitle: string;
  showingCounter: (n: number) => string;
  empty: string;
  emptyHint: string;
  marketTitle: string;
  marketBody: string;
  contactMsg: string;
  contactCta: string;
}> = {
  en: {
    badge: 'Resale Inventory 2026',
    title: 'Every listing',
    titleGold: 'visited in person.',
    subtitle: 'Titled homes, condos, and land across Panama — vetted by our ground team before they reach this page. Filter by region, price, or tempo of life.',
    showingCounter: (n) => `Showing ${n} verified properties`,
    empty: 'No properties match your filters.',
    emptyHint: 'Try broadening the zone, type, or price range.',
    marketTitle: 'The Panama Resale Market in 2026',
    marketBody: 'Our resale inventory complements our VIP Developments catalog. While pre-construction offers early-stage pricing and capital appreciation, resale provides immediate move-in and rental potential — often at a discount to replacement cost.',
    contactMsg: "Can't find what you're looking for?",
    contactCta: 'Talk to an agent',
  },
  es: {
    badge: 'Inventario de Reventa 2026',
    title: 'Cada propiedad',
    titleGold: 'visitada en persona.',
    subtitle: 'Casas, apartamentos y terrenos titulados en Panamá — revisados por nuestro equipo local antes de publicarlos. Filtra por región, precio o ritmo de vida.',
    showingCounter: (n) => `Mostrando ${n} propiedades verificadas`,
    empty: 'Ninguna propiedad coincide con tus filtros.',
    emptyHint: 'Intenta ampliar la zona, tipo o rango de precio.',
    marketTitle: 'El mercado de reventa panameño en 2026',
    marketBody: 'Nuestro inventario de reventa complementa el catálogo de desarrollos VIP. Mientras las preconstrucciones ofrecen precios tempranos y apreciación de capital, la reventa permite mudarse de inmediato y generar renta — usualmente por debajo del costo de reposición.',
    contactMsg: '¿No encuentras lo que buscas?',
    contactCta: 'Habla con un agente',
  },
};

export default function ListingsGrid({ lang, initialListings }: Props) {
  const { listings } = useCMS();
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const lt = LISTINGS_TEXT[lang] || LISTINGS_TEXT['en'];

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

  return (
    <div className="pt-24 min-h-screen bg-[color:var(--color-cream)]">
      {/* Hero header — matches Projects hub cinematic treatment */}
      <div className="relative pt-20 pb-16 px-4 overflow-hidden border-b border-[color:rgba(14,42,43,0.08)] bg-[color:var(--color-ink)]">
        <div className="absolute inset-0 z-0 scale-105 overflow-hidden">
          <motion.img
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.22, scale: 1 }}
            transition={{ duration: 3, ease: 'easeOut' }}
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/60 via-[color:var(--color-ink)]/50 to-[color:var(--color-ink)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <HeroTilt intensity={2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow eyebrow-light !text-brand-GOLD mb-6 block">
                {lt.badge}
              </span>
              <h1 className="display-serif text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-[0.98]">
                {lt.title} <span className="italic text-brand-GOLD">{lt.titleGold}</span>
              </h1>
              <p className="lede lede-light max-w-2xl italic border-l-2 border-brand-GOLD/40 pl-5">
                {lt.subtitle}
              </p>
            </motion.div>
          </HeroTilt>
        </div>
      </div>

      {/* Sticky filter bar — PropertySearchFilters already pill-styled */}
      <div className="relative lg:sticky lg:top-[72px] z-40 bg-[color:var(--color-paper)] border-b border-[color:rgba(14,42,43,0.08)] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PropertySearchFilters
            filters={filters}
            onChange={setFilters}
            total={allListings.length}
            filtered={filtered.length}
            lang={lang}
          />
        </div>
      </div>

      {/* Main grid content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14">
        <div className="flex justify-between items-center mb-12">
          <p className="eyebrow !text-[color:var(--color-ink-mute)]">
            {lt.showingCounter(filtered.length)}
          </p>
        </div>

        {/* Property grid — same PropertyCard, same data binding */}
        <div className="container mx-auto py-6 relative z-20">
          {filtered.length === 0 ? (
            <div className="text-center py-24 bg-[color:var(--color-paper)] border border-[color:rgba(14,42,43,0.08)] rounded-[3rem]">
              <p className="display-serif italic text-3xl text-[color:var(--color-ink)] mb-4">{lt.empty}</p>
              <p className="lede mx-auto mb-10">{lt.emptyHint}</p>
              <button
                onClick={() => setFilters(DEFAULT_FILTERS)}
                className="btn-editorial btn-editorial-teal uppercase tracking-[0.18em]"
              >
                {lang === 'es' ? 'Limpiar filtros' : 'Reset filters'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((listing, index) => (
                <motion.div
                  key={listing.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
                >
                  <PropertyCard listing={listing} lang={lang} priority={index === 0} />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Market Intelligence — mirror of the Projects hub neighborhood section */}
        <div className="mt-32 pt-20 border-t border-[color:rgba(14,42,43,0.08)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="tag-mono tag-mono-brass mb-5 inline-flex">Market Intelligence</span>
              <h2 className="display-serif italic text-4xl md:text-6xl text-[color:var(--color-ink)] mb-8">{lt.marketTitle}</h2>
              <p className="lede mx-auto text-left leading-relaxed">
                {lt.marketBody}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 mt-20">
              <div className="space-y-10">
                <div>
                  <h3 className="display-serif italic text-2xl text-[color:var(--color-ink)] mb-4 flex items-center gap-3"><TrendingUp className="text-[color:var(--color-teal-edit)]" /> {lang === 'es' ? 'Ciudad — Liquidez y Renta' : 'Panama City — Liquidity & Yields'}</h3>
                  <p className="text-sm leading-relaxed text-[color:var(--color-ink-soft)]">{lang === 'es' ? 'Los apartamentos en Punta Pacífica, Costa del Este y San Francisco mantienen la mayor liquidez del país. Para inversores que priorizan ingreso pasivo vía Airbnb o alquileres corporativos, la ciudad ofrece yields de 6-9% netos. La reventa aquí se mueve rápido — inventario de calidad dura menos de 45 días en el mercado.' : 'Condos in Punta Pacifica, Costa del Este, and San Francisco hold the highest liquidity in the country. For investors who prioritize passive income via Airbnb or corporate rentals, the city delivers 6–9% net yields. Quality resale inventory here clears in under 45 days.'}</p>
                </div>
                <div>
                  <h3 className="display-serif italic text-2xl text-[color:var(--color-ink)] mb-4 flex items-center gap-3"><MapPin className="text-[color:var(--color-teal-edit)]" /> {lang === 'es' ? 'Montañas — Retiro y Valor Defensivo' : 'Highlands — Retirement & Defensive Value'}</h3>
                  <p className="text-sm leading-relaxed text-[color:var(--color-ink-soft)]">{lang === 'es' ? 'Boquete y El Valle de Antón concentran la comunidad expatriada retirada. El clima eterno de primavera y el ecosistema médico-wellness sostienen el mercado incluso en ciclos bajistas. Ideal para el titular de la Visa Pensionado que busca estabilidad y comunidad internacional consolidada.' : 'Boquete and El Valle de Antón concentrate the retired expat community. Year-round spring weather and a mature medical-wellness ecosystem sustain the market through down cycles. Ideal for Pensionado Visa holders who want stability and an established international community.'}</p>
                </div>
              </div>
              <div className="space-y-10">
                <div>
                  <h3 className="display-serif italic text-2xl text-[color:var(--color-ink)] mb-4 flex items-center gap-3"><Info className="text-[color:var(--color-teal-edit)]" /> {lang === 'es' ? 'Playa — Estilo de Vida & Alquiler Vacacional' : 'Beach — Lifestyle & Vacation Rental'}</h3>
                  <p className="text-sm leading-relaxed text-[color:var(--color-ink-soft)]">{lang === 'es' ? 'Coronado, Playa Blanca y Playa Bonita ofrecen la relación precio-calidad más atractiva para segundas residencias. Las propiedades frente al mar bajo $500K son cada vez más escasas — el inventario se renueva pero no crece. Excelente para dueños que quieren usar la casa 2-3 meses y alquilar el resto del año.' : 'Coronado, Playa Blanca, and Playa Bonita offer the most attractive price-to-quality ratio for second homes. Beachfront property under $500K is increasingly scarce — inventory turns over but does not grow. Great for owners who want to use the home 2–3 months a year and rent out the balance.'}</p>
                </div>
                <div>
                  <h3 className="display-serif italic text-2xl text-[color:var(--color-ink)] mb-4 flex items-center gap-3"><ShieldCheck className="text-[color:var(--color-teal-edit)]" /> {lang === 'es' ? 'Checklist del Comprador en Reventa' : 'Resale Buyer Checklist'}</h3>
                  <p className="text-sm leading-relaxed text-[color:var(--color-ink-soft)]">{lang === 'es' ? 'Al comprar reventa siempre verifica: título registrado ante el Registro Público, certificación de impuestos inmobiliarios al día, historial de cuotas PH, y cualquier hipoteca o gravamen existente. Nuestro equipo legal realiza el due-diligence completo antes de cualquier oferta formal, sin costo para el comprador representado.' : 'When buying resale always verify: title recorded at the Public Registry, property-tax certification up to date, HOA/PH fee history, and any existing mortgage or lien. Our legal team runs full due diligence before any formal offer — no cost to the represented buyer.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Grounding Wall — mirror of Projects hub */}
      <section className="bg-[color:var(--color-paper)] py-20 border-t border-[color:rgba(14,42,43,0.08)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="eyebrow !text-[color:var(--color-ink-mute)] mb-10 text-center">Panama Resale Property Search Hub</h2>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 opacity-60 text-xs font-medium text-[color:var(--color-ink-mute)] italic hover:opacity-100 transition-all">
            <span>panama condos for sale</span>
            <span>panama houses for sale</span>
            <span>panama apartments for rent</span>
            <span>panama city real estate</span>
            <span>coronado real estate</span>
            <span>boquete homes for sale</span>
            <span>bocas del toro real estate</span>
            <span>panama beachfront resale</span>
            <span>panama investment property</span>
            <span>panama gated communities resale</span>
            <span>panama foreign buyer real estate</span>
          </div>
        </div>
      </section>

      {/* Sticky bottom CTA bar — editorialized */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[color:var(--color-paper)]/95 backdrop-blur-md border-t border-[color:rgba(14,42,43,0.08)] py-3 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2">
            <MessageCircle size={15} className="text-[color:var(--color-teal-edit)] flex-shrink-0" />
            <span className="text-[color:var(--color-ink-soft)] text-xs sm:text-sm font-medium">{lt.contactMsg}</span>
          </div>
          <Link
            href={`/${lang}/contacto`}
            className="btn-editorial btn-editorial-teal !py-2.5 !px-5 !text-xs uppercase tracking-[0.16em] whitespace-nowrap"
          >
            {lt.contactCta} <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
