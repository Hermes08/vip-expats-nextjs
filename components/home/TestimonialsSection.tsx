'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const TESTIMONIALS_HEADING: Record<string, { badge: string; title: string; titleGold: string; trust: string }> = {
  en: { badge: 'Client Stories', title: 'Real People.', titleGold: 'Real Moves.', trust: 'Verified client results · All relocation services managed end-to-end by VIP Expats Panama' },
  es: { badge: 'Historias de Clientes', title: 'Personas Reales.', titleGold: 'Movidas Reales.', trust: 'Resultados verificados · Todos los servicios de reubicación gestionados de principio a fin por VIP Expats Panama' },
  pt: { badge: 'Histórias de Clientes', title: 'Pessoas Reais.', titleGold: 'Mudanças Reais.', trust: 'Resultados verificados · Todos os serviços de relocação gerenciados de ponta a ponta pela VIP Expats Panama' },
  de: { badge: 'Kundengeschichten', title: 'Echte Menschen.', titleGold: 'Echte Züge.', trust: 'Verifizierte Kundenergebnisse · Alle Relocation-Dienste von VIP Expats Panama von Anfang bis Ende verwaltet' },
};

const testimonials = [
  {
    name: 'Robert & Linda M.',
    from: 'Retired from Chicago, IL',
    location: 'Now in Coronado Beach',
    visa: 'Pensionado Visa',
    quote:
      'We looked at Costa Rica and Portugal for two years. VIP Expats showed us Coronado in a single weekend and we closed on a beachfront unit 30 days later. Our rental income covers all our expenses.',
    stars: 5,
    tag: 'Retirees',
  },
  {
    name: 'James T.',
    from: 'Software Engineer, Toronto',
    location: 'Now in Panama City',
    visa: 'Friendly Nations Visa',
    quote:
      'I was paying $4,200/month in rent in Toronto. My Punta Pacifica condo — with an ocean view — is $1,800. The Friendly Nations process took 6 months and the team handled every document. Best financial decision I ever made.',
    stars: 5,
    tag: 'Digital Nomad',
  },
  {
    name: 'David & Sarah K.',
    from: 'Business Owners, Miami',
    location: 'Now split between Boquete & Panama City',
    visa: 'Qualified Investor Visa',
    quote:
      "We purchased two properties through VIP Expats — one as a primary residence in Boquete and one as a short-term rental in the city. The rental already covers our mortgage. It's the best hedge against inflation we have.",
    stars: 5,
    tag: 'Investors',
  },
  {
    name: 'Catherine B.',
    from: 'Attorney, London, UK',
    location: 'Now in Punta Pacifica, Panama City',
    visa: 'Friendly Nations Visa',
    quote:
      "I was skeptical about buying abroad, but the VIP Expats team walked me through every legal step. My beachside apartment is now generating 9% annual yield on Airbnb. I wish I'd done it a decade earlier.",
    stars: 5,
    tag: 'Investor',
  },
  {
    name: 'Mark & Diane F.',
    from: 'Retired Physicians, Arizona',
    location: 'Now in Boquete, Chiriquí',
    visa: 'Pensionado Visa',
    quote:
      "Boquete feels like Colorado at a fraction of the cost. The team found us a mountain coffee-farm home with a full guest suite. Our total cost of living dropped by 60%. Panama was the right call.",
    stars: 5,
    tag: 'Retirees',
  },
];

export default function TestimonialsSection() {
  const { lang } = useLanguage();
  const h = TESTIMONIALS_HEADING[lang] || TESTIMONIALS_HEADING['en'];

  return (
    <section className="py-20 bg-[color:var(--color-cream)] border-t border-[color:rgba(14,42,43,0.08)] relative overflow-hidden">
      {/* Subtle gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-GOLD/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14 reveal-on-scroll">
          <span className="eyebrow !text-[color:var(--color-teal-edit)] mb-4 block">{h.badge}</span>
          <h2 className="display-serif text-4xl md:text-6xl text-[color:var(--color-ink)]">
            {h.title} <span className="italic text-brand-GOLD">{h.titleGold}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-[color:var(--color-paper)] border border-[color:rgba(14,42,43,0.08)] p-7 rounded-2xl hover:border-brand-GOLD/40 hover:shadow-[0_20px_40px_-20px_rgba(14,42,43,0.2)] transition-all flex flex-col reveal-on-scroll stagger-${i + 1}`}
            >
              {/* Quote icon + stars */}
              <div className="flex items-start justify-between mb-5">
                <Quote size={28} className="text-brand-GOLD/50" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={12} className="text-brand-GOLD fill-brand-GOLD" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-[color:var(--color-ink-soft)] text-sm font-normal leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Person */}
              <div className="border-t border-[color:rgba(14,42,43,0.08)] pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="display-serif italic text-[color:var(--color-ink)] text-lg leading-tight">{t.name}</p>
                    <p className="eyebrow !text-[10px] !text-[color:var(--color-ink-mute)] mt-1">
                      {t.from}
                    </p>
                    <p className="eyebrow !text-[10px] !text-brand-GOLD mt-1">
                      {t.location}
                    </p>
                  </div>
                  <span className="tag-mono tag-mono-brass">
                    {t.tag}
                  </span>
                </div>
                <p className="eyebrow !text-[9px] !text-[color:var(--color-ink-mute)] mt-2">
                  via {t.visa}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust line */}
        <div className="mt-12 text-center reveal-on-scroll">
          <p className="eyebrow !text-[color:var(--color-ink-mute)]">
            {h.trust}
          </p>
        </div>
      </div>
    </section>
  );
}
