import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Waves, MapPin, TrendingUp, Fish } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Santa Catalina Panama: Surf, Real Estate & Investment Guide 2026',
  description:
    'Santa Catalina Panama is a world-class surf destination with rapidly appreciating real estate. Complete guide to surfing, accommodation, property investment, and getting there.',
  keywords: [
    'santa catalina panama',
    'santa catalina surf panama',
    'panama real estate santa catalina',
    'coiba national park panama',
    'best surf spots panama',
    'panama property investment',
    'santa catalina accommodation',
  ].join(', '),
  alternates: {
    canonical: 'https://panamarealestatesale.com/en/blog/santa-catalina-panama',
  },
  openGraph: {
    title: 'Santa Catalina Panama: Surf, Real Estate & Investment Guide 2026',
    description:
      'World-class point break, UNESCO national park gateway, and early-stage property investment opportunity in Panama.',
    type: 'article',
    url: 'https://panamarealestatesale.com/en/blog/santa-catalina-panama',
  },
};

const sections = [
  {
    title: 'Why Santa Catalina?',
    icon: Waves,
    content: 'Santa Catalina is home to the best point break in Panama — a consistent, long-period south Pacific swell that attracts surfers from around the world. But this remote fishing village offers far more than just waves. It\'s the gateway to Coiba National Park, one of the most pristine marine ecosystems on Earth and a UNESCO World Heritage Site. The town remains authentically Panamanian, undeveloped compared to Costa Rica\'s crowded surf towns, and positioned perfectly for investors who understand that first-mover advantage compounds.',
    highlights: [
      'World-class point break with consistent 4–8 ft waves',
      'Gateway to Coiba National Park (UNESCO)',
      'Still undiscovered vs. Costa Rican equivalents',
      'Small, authentic community with rapid infrastructure growth',
    ],
  },
  {
    title: 'Surf Conditions & Best Times to Visit',
    icon: Waves,
    content: 'Santa Catalina works year-round, but the optimal window is April through October when consistent south Pacific swell pushes through. The break is best for intermediate to advanced surfers — expect shoulder-high to overhead waves during peak season. Winter months (Nov–Mar) are smaller and more variable. The bay is protected, so even on big days the paddle out is manageable. Water temperature stays warm at 78–82°F, so a light spring suit is sufficient.',
    highlights: [
      'Best season: April–October (consistent south Pacific swell)',
      'Wave size: 4–8 ft during peak season',
      'Skill level: Intermediate to advanced',
      'Water temp: 78–82°F year-round',
      'Wind: Early morning glass, afternoon crosswind',
    ],
  },
  {
    title: 'Getting There',
    icon: MapPin,
    content: 'Santa Catalina is remote but not unreachable. From Panama City, you have two main options: the budget route (7–8 hours) via bus to Sona, then shuttle service to Santa Catalina, or the comfort route (self-drive, 6–7 hours) by renting a car. A rental car gives you flexibility to explore the Azuero Peninsula and day-trip to Coiba. The road has improved significantly over the last three years as tourism has grown.',
    highlights: [
      'From Panama City: 6–8 hours depending on route',
      'Option 1: Bus to Sona + shuttle (budget, ~$30)',
      'Option 2: Rent car + drive (flexibility, ~$50/day)',
      'Road condition: Mostly paved, improving annually',
      'Domestic flights from Panama City (35 min) available but expensive',
    ],
  },
  {
    title: 'Accommodation Options',
    icon: MapPin,
    content: 'Accommodation has exploded over the past five years. You can find everything from backpacker surf camps at $20–60/night to boutique beachfront hotels and vacation rentals at $80–150/night. Several properties offer Airbnb-ready furnished units. This diversity is a green light for investors — there\'s demand across all price points.',
    highlights: [
      'Surf camps: $20–60/night (hostels, basic rooms)',
      'Boutique hotels & cabinas: $80–150/night',
      'Vacation rentals: $100–200/night (Airbnb/VRBO)',
      'Monthly rentals: $400–1,200 for furnished units',
      'Growing boutique hotel pipeline (2–3 new properties Q2–Q3 2026)',
    ],
  },
  {
    title: 'Coiba National Park: Gateway to One of the World\'s Best Dive Sites',
    icon: Fish,
    content: 'Coiba National Park is a 100-island archipelago and UNESCO World Heritage Site located just 12–15 km offshore from Santa Catalina. It\'s one of the most biodiverse marine ecosystems in the world, with pristine coral reefs, rare sea creatures, and some of the best diving and snorkeling in Central America. Day trips are easy and affordable — local boat operators run regular tours from Santa Catalina ($80–120 per person, 6–8 hours). This attraction alone drives premium tourism demand and justifies higher nightly rental rates.',
    highlights: [
      'UNESCO World Heritage Site with world-class reefs',
      'Day trips: $80–120 per person from Santa Catalina',
      'Best for diving & snorkeling (Jun–Dec)',
      'Marine megafauna: sharks, rays, grouper, snapper',
      'Draws premium ecotourism market ($150–300/night stay average)',
    ],
  },
  {
    title: 'Real Estate Opportunity: The Pre-Development Play',
    icon: TrendingUp,
    content: 'Santa Catalina is where Bocas del Toro was 15 years ago — underdeveloped, affordable, and poised for appreciation. Beachfront and near-beach lots trade in the $30K–100K range, while finished small homes (800–1,200 sqft) sell for $80K–200K. This is 40–60% cheaper than equivalent properties in Costa Rica\'s Tamarindo or Nosara. Infrastructure is improving: roads are being paved, electricity is stable, water systems are being upgraded. Early investors who buy now at current prices will capture significant upside when the next wave of tourism and international attention hits.',
    highlights: [
      'Beachfront lots: $30K–100K (unheard of in Costa Rica)',
      'Small houses (800–1,200 sqft): $80K–200K',
      'Mixed-use potential: long-term rental + owner use',
      'Price appreciation: 8–12% annually expected',
      'Comparison: Costa Rican equivalents cost $150K–350K+',
    ],
  },
];

export default function SantaCatalinaPanama() {
  return (
    <article className="bg-white min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 reveal-on-scroll">
          <span className="text-brand-TEAL font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
            Surf & Investment Guide · 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-brand-950 mb-6 tracking-tight leading-tight">
            Santa Catalina Panama
          </h1>
          <p className="text-slate-500 text-lg font-medium leading-relaxed border-l-2 border-brand-GOLD/30 pl-5">
            World-class point break, gateway to a UNESCO national park, and one of the last undiscovered investment opportunities in Central America.
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16 reveal-on-scroll">
          {[
            { label: 'Best Wave Size', value: '4–8 ft', icon: '🌊' },
            { label: 'Prime Season', value: 'Apr–Oct', icon: '📅' },
            { label: 'Entry Price', value: '$30K–100K', icon: '💰' },
          ].map((stat, i) => (
            <div key={i} className="card-light p-5 rounded-xl border-brand-100">
              <p className="text-brand-GOLD text-2xl mb-1">{stat.icon}</p>
              <p className="text-white font-black text-sm">{stat.value}</p>
              <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Content sections */}
        <div className="space-y-10">
          {sections.map((section, i) => {
            const IconComponent = section.icon;
            return (
              <div key={i} className="card-light rounded-2xl border-brand-100 overflow-hidden reveal-on-scroll">
                <div className="p-7 md:p-8">
                  {/* Section header */}
                  <div className="flex items-start gap-3 mb-5">
                    <IconComponent size={24} className="text-brand-GOLD flex-shrink-0 mt-1" />
                    <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 tracking-tight">{section.title}</h2>
                  </div>

                  {/* Content */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{section.content}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {section.highlights.map((highlight, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-500">
                        <span className="text-brand-GOLD font-black mt-0.5 flex-shrink-0">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Investment thesis */}
        <div className="mt-14 card-light p-8 rounded-2xl border-brand-GOLD/20 reveal-on-scroll">
          <h3 className="text-xl font-heading font-black text-brand-950 mb-4 tracking-tight flex items-center gap-2">
            <TrendingUp size={20} className="text-brand-GOLD" />
            Why Invest in Santa Catalina Now?
          </h3>
          <ul className="space-y-3">
            {[
              'Surf tourism is accelerating across Central America — Santa Catalina will capture a growing share',
              'Coiba UNESCO designation drives premium eco-tourism — higher nightly rates justify investment in accommodation',
              'Infrastructure improvements (roads, water, electricity) reduce development risk and raise property values',
              'Prices are 40–60% below Costa Rican equivalents — early-stage appreciation curve is steep',
              'First-mover advantage is still available — buy now before international attention and prices spike',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                <span className="text-brand-GOLD font-black flex-shrink-0">→</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-14 card-light p-8 rounded-2xl border-brand-GOLD/20 text-center reveal-on-scroll">
          <h3 className="text-xl font-heading font-black text-brand-950 mb-3 tracking-tight">Ready to Explore Santa Catalina?</h3>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            Our Panama team has personally visited Santa Catalina multiple times and sourced off-market properties in the area. See available listings and connect with our investment advisors.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/en/propiedades"
              className="inline-flex items-center justify-center gap-2 btn-3d btn-3d-gold px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[11px]"
            >
              View Santa Catalina Properties <ArrowRight size={14} />
            </Link>
            <Link
              href="/en/contacto"
              className="inline-flex items-center justify-center gap-2 card-light px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] text-brand-GOLD border-brand-GOLD/30 hover:border-brand-GOLD/60 transition-all"
            >
              Talk to an Advisor <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Internal links */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4 reveal-on-scroll">
          {[
            { label: 'Playa Venao Guide', href: '/en/blog/playa-venao-panama' },
            { label: 'Panama Surf Towns', href: '/en/blog/best-beaches-panama-expats' },
            { label: 'Contact Our Advisors', href: '/en/contacto' },
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
