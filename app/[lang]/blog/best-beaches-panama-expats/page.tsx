import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Beaches in Panama for Expats 2026 | Beachfront Property Guide',
  description:
    'Discover the top beaches in Panama for expats — Coronado, Bocas del Toro, and Pedasi. Compare costs, lifestyle, real estate prices, and which beach town is right for your retirement or investment.',
  keywords: [
    'best beaches panama expats',
    'panama beachfront property',
    'coronado beach panama',
    'bocas del toro real estate',
    'pedasi panama expats',
    'retire near beach panama',
    'panama beach towns',
  ].join(', '),
  alternates: {
    canonical: 'https://panamarealestatesale.com/en/blog/best-beaches-panama-expats',
  },
  openGraph: {
    title: 'Best Beaches in Panama for Expats 2026',
    description:
      'Coronado vs Bocas del Toro vs Pedasi — compare Panama beach towns for expat living, real estate prices, and investment yield.',
    type: 'article',
    url: 'https://panamarealestatesale.com/en/blog/best-beaches-panama-expats',
  },
};

const beaches = [
  {
    name: 'Coronado Beach',
    tag: 'Best for Retirees & Full-Time Residents',
    tagline: 'The Premier Expat Hub',
    description:
      'Coronado is the undisputed capital of Panama expat beach living — a gated coastal community 80 km west of Panama City with world-class infrastructure, private hospitals, international schools, and a thriving English-speaking community of over 5,000 expats.',
    pros: [
      '2-hour drive to Panama City for medical, banking, and airports',
      'Established expat community with golf clubs, tennis courts, and social scene',
      'Condos from $150K–$400K, houses from $250K–$900K',
      'Average rental yield: 6–9% on furnished short-term units',
    ],
    priceRange: '$150K – $900K',
    yield: '6–9%',
    climate: 'Pacific dry season Dec–Apr',
  },
  {
    name: 'Bocas del Toro',
    tag: 'Best for Digital Nomads & Adventure Investors',
    tagline: 'Caribbean Island Paradise',
    description:
      'Bocas del Toro is an archipelago of Caribbean islands in northwest Panama — think turquoise water, jungle-covered islands, and a laid-back surf culture. It\'s the fastest-growing real estate market in Panama, with strong short-term rental demand from eco-tourism.',
    pros: [
      'Caribbean climate — warm year-round with no dry season',
      'High tourist demand drives 85%+ occupancy on Airbnb during peak season',
      'Entry prices starting at $80K for lots, $150K for furnished bungalows',
      'Official Bocas International Airport (BOC) with flights to Panama City daily',
    ],
    priceRange: '$80K – $600K',
    yield: '10–13% (short-term)',
    climate: 'Warm tropical year-round',
  },
  {
    name: 'Pedasi',
    tag: 'Best for Early-Stage Investors & Quiet Living',
    tagline: 'Panama\'s Emerging Secret',
    description:
      'Pedasi is a small fishing village in the Azuero Peninsula — still largely undiscovered, with pristine beaches, world-class surfing at Playa Venao nearby, and land prices that haven\'t yet caught up with its potential. It\'s the play for buyers who want to get in early.',
    pros: [
      'Land from $30–$80/sqm — significantly cheaper than Coronado or Bocas',
      'Playa Venao is ranked among the top surfing breaks in Latin America',
      'Growing boutique hotel and eco-lodge scene',
      'Authentic Panamanian culture — far less expat saturation',
    ],
    priceRange: '$50K – $400K',
    yield: '6–9% (growing)',
    climate: 'Pacific dry season Dec–Apr',
  },
];

export default function BestBeachesPanamaExpats() {
  return (
    <article className="bg-brand-950 min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="mb-12 reveal-on-scroll">
          <span className="text-brand-GOLD font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
            Beach Living Guide · 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white mb-6 tracking-tight leading-tight">
            Best Beaches in Panama for Expats
          </h1>
          <p className="text-slate-400 text-lg font-medium leading-relaxed border-l-2 border-brand-GOLD/30 pl-5">
            Panama has three very different beach experiences for expats — each with distinct price points, lifestyles, and investment profiles. Here is how to choose the right one for you.
          </p>
        </div>

        {/* Beach cards */}
        <div className="space-y-10">
          {beaches.map((beach, i) => (
            <div key={i} className="glass-card rounded-2xl border-white/5 overflow-hidden reveal-on-scroll">
              <div className="p-7 md:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={14} className="text-brand-GOLD" />
                      <span className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest">{beach.tagline}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-black text-white tracking-tight">{beach.name}</h2>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">{beach.tag}</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <p className="text-brand-GOLD font-black text-sm">{beach.yield}</p>
                      <p className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Avg Yield</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white font-black text-sm">{beach.priceRange}</p>
                      <p className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Price Range</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{beach.description}</p>

                {/* Pros */}
                <ul className="space-y-2">
                  {beach.pros.map((pro, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="text-brand-GOLD font-black mt-0.5 flex-shrink-0">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>

                {/* Climate */}
                <div className="mt-5 pt-5 border-t border-white/5">
                  <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Climate: </span>
                  <span className="text-slate-400 text-[10px] font-bold">{beach.climate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 glass-card p-8 rounded-2xl border-brand-GOLD/20 text-center reveal-on-scroll">
          <h3 className="text-xl font-heading font-black text-white mb-3 tracking-tight">Not Sure Which Beach Is Right for You?</h3>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Our Panama advisors have personally visited every property we list. Book a free 30-minute call and we will match you to the right location based on your budget, lifestyle, and investment goals.
          </p>
          <Link
            href="/en/contacto"
            className="inline-flex items-center gap-2 btn-3d btn-3d-gold px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[11px]"
          >
            Book Free Consultation <ArrowRight size={14} />
          </Link>
        </div>

        {/* Internal links */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4 reveal-on-scroll">
          {[
            { label: 'Coronado Beach Properties', href: '/en/propiedades' },
            { label: 'Bocas del Toro Guide', href: '/en/locations/bocas-del-toro' },
            { label: 'Pensionado Visa for Retirees', href: '/en/guides/pensionado-visa-panama' },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="flex items-center justify-between glass-card p-4 rounded-xl border-white/5 hover:border-brand-GOLD/30 transition-all group"
            >
              <span className="text-white text-xs font-bold">{link.label}</span>
              <ArrowRight size={12} className="text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
