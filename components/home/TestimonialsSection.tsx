import React from 'react';
import { Star, Quote } from 'lucide-react';

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
  return (
    <section className="py-14 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Subtle gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-GOLD/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10 reveal-on-scroll">
          <span className="text-brand-GOLD font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Client Stories</span>
          <h2 className="text-2xl md:text-4xl font-heading font-black text-white tracking-tight">
            Real People. <span className="text-brand-GOLD">Real Moves.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`glass-card p-7 rounded-2xl border-white/5 hover:border-brand-GOLD/30 transition-all flex flex-col reveal-on-scroll stagger-${i + 1}`}
            >
              {/* Quote icon + stars */}
              <div className="flex items-start justify-between mb-5">
                <Quote size={28} className="text-brand-GOLD/40" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={12} className="text-brand-GOLD fill-brand-GOLD" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm font-medium leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Person */}
              <div className="border-t border-white/5 pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-black text-sm tracking-tight">{t.name}</p>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-0.5">
                      {t.from}
                    </p>
                    <p className="text-brand-GOLD text-[10px] font-bold uppercase tracking-widest mt-0.5">
                      {t.location}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-brand-GOLD/10 border border-brand-GOLD/20 rounded-full text-brand-GOLD text-[9px] font-black uppercase tracking-widest">
                    {t.tag}
                  </span>
                </div>
                <p className="text-slate-600 text-[9px] font-black uppercase tracking-widest mt-2">
                  via {t.visa}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust line */}
        <div className="mt-10 text-center reveal-on-scroll">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            Verified client results · All relocation services managed end-to-end by VIP Expats Panama
          </p>
        </div>
      </div>
    </section>
  );
}
