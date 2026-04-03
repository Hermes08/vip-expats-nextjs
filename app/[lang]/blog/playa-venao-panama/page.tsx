import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Waves, MapPin, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Playa Venao Panama: Latin America\'s Best Surf Investment 2026',
  description:
    'Playa Venao is Panama\'s premier surf destination — consistent left-hander, growing real estate market, and a digital nomad community discovering paradise on the Azuero Peninsula.',
  keywords: [
    'playa venao panama',
    'playa venao surf',
    'panama azuero peninsula real estate',
    'pedasi panama',
    'panama surf investment',
    'panama beachfront property',
    'playa venao property',
  ].join(', '),
  alternates: {
    canonical: 'https://panamarealestatesale.com/en/blog/playa-venao-panama',
  },
  openGraph: {
    title: 'Playa Venao Panama: Latin America\'s Best Surf Investment 2026',
    description:
      'Consistent left-hand break, emerging digital nomad hub, and real estate opportunity 40–60% cheaper than Costa Rica\'s Nosara.',
    type: 'article',
    url: 'https://panamarealestatesale.com/en/blog/playa-venao-panama',
  },
};

const highlights = [
  {
    title: 'The Wave: Consistent Left-Hand Break',
    description:
      'Playa Venao is home to a world-class left-hand break that works year-round with the best conditions April through October. The wave is more accessible than Santa Catalina — suitable for all levels from intermediate to advanced. Expect waist to shoulder-high waves most days, with overhead sets during peak swell. The beach break is forgiving and consistent.',
    points: [
      'Consistent left-hander suitable for all skill levels',
      'Year-round rideable, best Apr–Oct',
      'Wave size: 2–6 ft average, 6–8 ft during peak swells',
      'Friendly beach break — easier paddle out than point breaks',
      '15–20 local surfers + growing seasonal community',
    ],
  },
  {
    title: 'Location: Heart of the Azuero Peninsula',
    description:
      'Playa Venao sits near Pedasi, a charming fishing village in the Azuero Peninsula — Panama\'s cultural heartland. It\'s 4–5 hours from Panama City, making it a weekend trip for expats but far enough away to feel like paradise. The peninsula is known for authentic Panamanian culture, festival traditions (Las Tablas Carnival is legendary), and increasingly, premium eco-tourism.',
    points: [
      'Pedasi village: Charming fishing community, 10 min drive',
      'Las Tablas: Panama\'s carnival capital, 45 min away',
      'Panama City: 4–5 hours by car',
      'Isla Iguana: Snorkeling and day trips (20 min boat)',
      'Accessible but still remote — ideal for digital nomads',
    ],
  },
  {
    title: 'The Community: Surf, Yoga & Digital Nomads',
    description:
      'Playa Venao is experiencing rapid growth as a digital nomad and wellness destination. Yoga retreats, surf camps, and boutique accommodations are popping up. Unlike Tamarindo (Costa Rica) which is saturated with international chains, Playa Venao remains authentically Panamanian with a tight-knit community of surfers, expats, and adventure entrepreneurs. This is still the "undiscovered" phase.',
    points: [
      'Growing number of surf camps (5–8 operators)',
      'Yoga retreat boom — 3–4 established facilities',
      'Digital nomad community expanding',
      'Mix of backpackers, expats, and adventure travelers',
      'Still far less crowded than Tamarindo or Nosara',
    ],
  },
  {
    title: 'Real Estate Now: Beachfront Lots to Boutique Hotels',
    description:
      'Beachfront lots in the Playa Venao / Pedasi area trade at $50K–150K, while small furnished surf houses go for $100K–250K. The yield opportunity is significant — boutique hotels and Airbnb-optimized properties average 10–12% occupancy yield during peak season. Compared to Costa Rica\'s Nosara or Tamarindo, you\'re getting the same swell exposure and community vibe for 40–60% less investment.',
    points: [
      'Beachfront lots: $50K–150K',
      'Small surf houses (800–1,200 sqft): $100K–250K',
      'Boutique hotel opportunities: $200K–500K (3–8 room properties)',
      'Airbnb yield potential: 10–12% during peak season',
      'Monthly rental income: $1,500–3,000 for furnished units',
    ],
  },
  {
    title: 'Why Invest Now: 5–10 Years Behind Costa Rica',
    description:
      'Playa Venao is undergoing the exact transformation that made Nosara and Tamarindo valuable real estate markets a decade ago. Infrastructure is improving, tourism is accelerating, and international attention is starting to arrive. If you bought in Nosara in 2008, your property would have appreciated 300%+ by 2025. Playa Venao is at that 2008 stage now — early enough to capture the full cycle.',
    points: [
      'Infrastructure: Roads paved, electricity stable, water systems improving',
      'Tourism: +40% year-over-year visitor growth (2024–2026)',
      'Price trajectory: Following Nosara / Tamarindo playbook 5–10 years earlier',
      'Dollar pricing: All properties priced in USD, no currency volatility',
      'Gateway to Coiba & Caribbean: Multiple income streams (tourism, eco-retreats)',
    ],
  },
  {
    title: 'Playa Venao vs. Costa Rica\'s Nosara & Tamarindo',
    description:
      'Direct comparison shows why Playa Venao is the move for smart investors. Both have consistent Pacific swells, digital nomad communities, and growing tourism. But Playa Venao offers the same experience at a fraction of Costa Rican prices. Nosara beachfront runs $200K–800K for raw land. Tamarindo is even more expensive. In Playa Venao, you get equivalent properties for $50K–250K.',
    points: [
      'Beachfront land (per sqm): Panama $300–500/sqm vs Costa Rica $800–1,500/sqm',
      'Small house: Panama $100K–200K vs Costa Rica $250K–600K',
      'Monthly rental yield: Panama 10–12% vs Costa Rica 6–8%',
      'Cost of living: Panama 25% lower than Costa Rica',
      'Swell quality: Identical (same south Pacific swell basin)',
    ],
  },
];

export default function PlayaVenaoPanama() {
  return (
    <article className="bg-white min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 reveal-on-scroll">
          <span className="text-brand-TEAL font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
            Emerging Destination · 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-brand-950 mb-6 tracking-tight leading-tight">
            Playa Venao Panama
          </h1>
          <p className="text-slate-500 text-lg font-medium leading-relaxed border-l-2 border-brand-GOLD/30 pl-5">
            A consistent left-hand break, growing digital nomad hub, and a 40–60% cheaper alternative to Costa Rica's Nosara and Tamarindo.
          </p>
        </div>

        {/* Quick comparison */}
        <div className="card-light p-8 rounded-2xl border-brand-GOLD/20 mb-16 reveal-on-scroll">
          <h3 className="text-lg font-heading font-black text-brand-950 mb-5 tracking-tight flex items-center gap-2">
            <TrendingUp size={20} className="text-brand-GOLD" />
            Playa Venao at a Glance
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { label: 'Best Wave Season', value: 'Apr–Oct (year-round rideable)' },
              { label: 'Wave Type & Size', value: 'Left-hand beach break, 2–6 ft avg' },
              { label: 'From Panama City', value: '4–5 hours by car' },
              { label: 'Entry Price', value: '$50K–150K (beachfront lots)' },
              { label: 'Airbnb Yield', value: '10–12% during peak season' },
              { label: 'vs Costa Rica', value: '40–60% cheaper for equivalent properties' },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-white font-bold text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-10">
          {highlights.map((section, i) => (
            <div key={i} className="card-light rounded-2xl border-brand-100 overflow-hidden reveal-on-scroll">
              <div className="p-7 md:p-8">
                {/* Section header */}
                <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 tracking-tight mb-5">{section.title}</h2>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{section.description}</p>

                {/* Points */}
                <ul className="space-y-2">
                  {section.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-500">
                      <span className="text-brand-GOLD font-black mt-0.5 flex-shrink-0">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Getting there */}
        <div className="mt-14 card-light p-8 rounded-2xl border-brand-GOLD/20 reveal-on-scroll">
          <h3 className="text-xl font-heading font-black text-brand-950 mb-4 tracking-tight flex items-center gap-2">
            <MapPin size={20} className="text-brand-GOLD" />
            How to Get to Playa Venao
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-brand-GOLD text-sm font-black uppercase tracking-widest mb-2">Option 1: Rent a Car (Recommended)</p>
              <p className="text-slate-500 text-sm mb-3">This is the best option for exploring the Azuero Peninsula, day-tripping to nearby attractions (Isla Iguana, Las Tablas), and maintaining flexibility. The Pan-American Highway to Divisa, then the paved road to Pedasi is straightforward.</p>
              <ul className="space-y-1 pl-4 border-l-2 border-brand-GOLD/30">
                <li className="text-slate-500 text-sm">• Time: 4.5–5 hours from Panama City</li>
                <li className="text-slate-500 text-sm">• Cost: ~$50–70/day car rental</li>
                <li className="text-slate-500 text-sm">• Gas: ~$25–30 round trip</li>
              </ul>
            </div>
            <div>
              <p className="text-brand-GOLD text-sm font-black uppercase tracking-widest mb-2">Option 2: Bus + Shuttle</p>
              <p className="text-slate-500 text-sm">Budget option for backpackers and repeated visitors. Take a bus from Albrook Bus Station to Pedasi (~4.5 hours, $15–20), then arrange a local shuttle to Playa Venao (30 min, $5–10).</p>
              <ul className="space-y-1 pl-4 border-l-2 border-brand-GOLD/30">
                <li className="text-slate-500 text-sm">• Total time: 5–6 hours</li>
                <li className="text-slate-500 text-sm">• Cost: $25–35</li>
                <li className="text-slate-500 text-sm">• Less flexible but budget-friendly</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nearby attractions */}
        <div className="mt-14 card-light p-8 rounded-2xl border-brand-GOLD/20 reveal-on-scroll">
          <h3 className="text-xl font-heading font-black text-brand-950 mb-4 tracking-tight">Nearby Attractions & Day Trips</h3>
          <ul className="space-y-3">
            {[
              {
                name: 'Isla Iguana National Park',
                desc: 'World-class snorkeling and diving 20 minutes by boat. Pristine reefs, tropical fish, and sea turtles. Highly recommended.',
              },
              {
                name: 'Pedasi Village',
                desc: 'Charming fishing village 10 minutes away. Fresh seafood, local markets, authentic Panamanian culture. Great weekend exploration.',
              },
              {
                name: 'Las Tablas',
                desc: 'Panama\'s carnival capital, 45 minutes away. Home to iconic street celebrations, colonial architecture, and local festivals. Visit Feb–Mar for Carnival.',
              },
              {
                name: 'Coiba National Park',
                desc: 'UNESCO World Heritage marine site accessible from Pedasi. Day trips available for diving and snorkeling (1.5–2 hour boat ride).',
              },
            ].map((attraction, i) => (
              <div key={i} className="border-b border-brand-100 pb-3 last:border-0">
                <p className="text-brand-GOLD text-sm font-black uppercase tracking-widest mb-1">{attraction.name}</p>
                <p className="text-slate-500 text-sm">{attraction.desc}</p>
              </div>
            ))}
          </ul>
        </div>

        {/* Investment thesis */}
        <div className="mt-14 card-light p-8 rounded-2xl border-brand-GOLD/20 text-center reveal-on-scroll">
          <h3 className="text-xl font-heading font-black text-brand-950 mb-3 tracking-tight">Invest in Playa Venao Before the Crowds Arrive</h3>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            The Azuero Peninsula is at an inflection point. Infrastructure is improving, international tourism is accelerating, and property prices are still accessible. Early investors are capturing the cycle that took Costa Rica from a backwater to a $1B+ real estate market. The window is now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/en/propiedades"
              className="inline-flex items-center justify-center gap-2 btn-3d btn-3d-gold px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[11px]"
            >
              See Available Properties <ArrowRight size={14} />
            </Link>
            <Link
              href="/en/contacto"
              className="inline-flex items-center justify-center gap-2 card-light px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] text-brand-GOLD border-brand-GOLD/30 hover:border-brand-GOLD/60 transition-all"
            >
              Talk to Our Advisors <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Internal links */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4 reveal-on-scroll">
          {[
            { label: 'Santa Catalina Guide', href: '/en/blog/santa-catalina-panama' },
            { label: 'Panama Beaches', href: '/en/blog/best-beaches-panama-expats' },
            { label: 'Contact Our Team', href: '/en/contacto' },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="flex items-center justify-between card-light p-4 rounded-xl border-brand-100 hover:border-brand-GOLD/30 transition-all group"
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
