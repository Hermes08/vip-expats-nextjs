import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Home, DollarSign, TrendingUp, Users, CheckCircle2, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Condos for Sale in Panama 2026 | Complete Buyer\'s Guide | Real Estate Prices',
  description:
    'Discover available condos for sale in Panama. Compare neighborhoods (El Cangrejo, Costa del Este, Coronado), prices ($80K–$2M+), rental yields (8–14%), and investment strategies for expats and investors.',
  keywords: [
    'condos for sale in panama',
    'condos in panama',
    'panama city condos',
    'panama real estate for sale',
    'el cangrejo condos',
    'costa del este panama',
    'panama condo prices',
    'buy property panama',
    'panama real estate investment',
  ].join(', '),
  alternates: {
    canonical: 'https://panamarealestatesale.com/en/blog/condos-for-sale-panama-buyers-guide',
  },
  openGraph: {
    title: 'Condos for Sale in Panama 2026 — Complete Buyer\'s Guide',
    description:
      'Compare Panama condos by price, location, and rental potential. El Cangrejo, Costa del Este, Coronado, and more. Expert guide for expat investors.',
    type: 'article',
    url: 'https://panamarealestatesale.com/en/blog/condos-for-sale-panama-buyers-guide',
  },
};

const neighborhoods = [
  {
    name: 'El Cangrejo',
    tag: 'Best for City Living & Walkability',
    tagline: 'Panama City\'s Urban Core',
    description:
      'El Cangrejo is the heart of Panama City — a vibrant, walkable neighborhood with shops, restaurants, banks, and cultural attractions within walking distance. It\'s where young professionals, expats, and investors converge. Condos here range from renovated historic units to new high-rises with modern amenities.',
    priceRange: '$120K – $600K',
    pricePerSqm: '$1,800–$3,200',
    yield: '7–10%',
    pros: [
      'Walkable to restaurants, shops, Metro Panama (subway)',
      'Growing nightlife and expat social scene',
      'Close to banking district and business hubs',
      'Diverse inventory — vintage charm to new luxury towers',
      'Public transportation links throughout city',
    ],
    cons: [
      'Higher crime rates in some blocks — choose buildings carefully',
      'Parking can be limited and expensive ($50–$150/month)',
      'More noise and traffic than suburban areas',
      'Requires due diligence on building condition and HOA',
    ],
    properties: '2,000+ active listings',
    bestFor: 'Urban professionals, expats seeking walkability, rental investors',
  },
  {
    name: 'Costa del Este',
    tag: 'Best for Modern Luxury & Waterfront',
    tagline: 'Upscale Waterfront Living',
    description:
      'Costa del Este is Panama\'s most modern and affluent neighborhood — a carefully planned coastal district with tree-lined streets, waterfront parks, high-end restaurants, and luxury condominiums. It\'s the primary destination for wealthy expats and international investors seeking premium lifestyles.',
    priceRange: '$300K – $2M+',
    pricePerSqm: '$3,500–$6,500',
    yield: '5–8%',
    pros: [
      'Modern infrastructure and pristine condition',
      'Waterfront parks, marina, and recreation areas',
      'High-end restaurants, shopping, and cultural venues',
      'Security-conscious with gated communities',
      'Attracts international professionals — multilingual community',
      'Investment-grade: consistent appreciation',
    ],
    cons: [
      'Highest prices in Panama City',
      'Lower rental yields (buyers pay premium for lifestyle)',
      'Can feel sterile or corporate',
      'Heavy traffic during rush hours',
    ],
    properties: '800+ active listings',
    bestFor: 'Wealthy expats, corporate relocations, luxury-focused investors',
  },
  {
    name: 'Coronado Bay',
    tag: 'Best for Beachfront & Resort Living',
    tagline: 'Gated Coastal Community',
    description:
      'Coronado is a gated, master-planned beach community 80 km west of Panama City on the Pacific coast. It offers resort-style living with golf courses, private beach clubs, international schools, and hospitals. It\'s the #1 choice for retirees and expat families seeking a complete lifestyle package.',
    priceRange: '$180K – $800K',
    pricePerSqm: '$1,400–$2,200',
    yield: '8–12%',
    pros: [
      'Private beach access and resort amenities',
      'Golf course, tennis courts, and fitness facilities',
      'International schools and private hospitals',
      '5,000+ expat community with established social scene',
      'Lower crime — gated and secure',
      'Good rental demand for furnished units',
    ],
    cons: [
      '80 km from Panama City — 2-hour drive for city access',
      'Dependent on car ownership',
      'Less diverse dining/nightlife than city',
      'Community can feel insular',
    ],
    properties: '600+ active listings',
    bestFor: 'Retirees, families, expats seeking security and lifestyle',
  },
  {
    name: 'Amador Causeway',
    tag: 'Best for Expats & Investors',
    tagline: 'Island Living Near City',
    description:
      'Amador Causeway is a series of landfill islands connected to Panama City by a bridge. Condos range from mid-range to luxury with views of the Panama Canal, Panama Bay, and city skyline. It\'s an increasingly popular choice for expats seeking island living with easy city access.',
    priceRange: '$200K – $1.2M',
    pricePerSqm: '$2,500–$4,500',
    yield: '6–10%',
    pros: [
      '10-minute drive to downtown Panama City',
      'Stunning waterfront and canal views',
      'Modern developments with international standards',
      'Growing expat community',
      'Parks, promenades, and dining venues',
      'Strategic location for business travelers',
    ],
    cons: [
      'Medium-to-high prices (more than El Cangrejo)',
      'Limited historic charm — mostly new development',
      'Can feel quiet outside peak hours',
    ],
    properties: '400+ active listings',
    bestFor: 'Expats seeking views and access, international investors',
  },
];

export default function CondosForSalePanamaGuide() {
  return (
    <article className="bg-white min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="mb-12 reveal-on-scroll">
          <span className="text-brand-TEAL font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
            Real Estate Buyer's Guide · 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-brand-950 mb-6 tracking-tight leading-tight">
            Condos for Sale in Panama
          </h1>
          <p className="text-slate-500 text-lg font-medium leading-relaxed border-l-2 border-brand-GOLD/30 pl-5">
            Panama has explosive condo demand from expats, retirees, and investors. This guide covers 2,000+ active listings across prime neighborhoods, with pricing, rental yields, and expert investment insights.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 reveal-on-scroll">
          {[
            { icon: Home, label: 'Avg Price', value: '$250K–$450K', sub: '2-bed, city center' },
            { icon: TrendingUp, label: 'Avg Yield', value: '8–10%', sub: 'Furnished rentals' },
            { icon: Users, label: 'Expat Buyers', value: '65%+', sub: 'Of all purchases' },
            { icon: DollarSign, label: 'Price Growth', value: '+18% YoY', sub: '2024-2026' },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="card-light p-5 rounded-xl border-brand-100 reveal-on-scroll">
                <Icon size={18} className="text-brand-GOLD mb-3" />
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-slate-700 text-lg font-black mb-1">{stat.value}</p>
                <p className="text-slate-600 text-[9px]">{stat.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Introduction Section */}
        <div className="card-light p-8 rounded-2xl border-brand-100 mb-12 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-4 tracking-tight">Why Buy Condos in Panama?</h2>
          <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
            <p>
              Panama's real estate market has attracted over 165,000 expats seeking affordable living, visa pathways, and strong rental yields. Condos offer several advantages:
            </p>
            <ul className="space-y-2">
              {[
                'Low barrier to entry: condos from $80K–$200K in emerging neighborhoods',
                'Rental income: 8–14% annual yields on furnished short-term rentals',
                'Visa eligibility: Friendly Nations Visa requires $120K property purchase',
                'Appreciation: 15–20% growth in premium neighborhoods over 3–5 years',
                'Property management: Many buildings offer concierge and rental services',
                'Expat community: established support networks and services',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-brand-GOLD flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Neighborhood Cards */}
        <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-8 tracking-tight reveal-on-scroll">Where to Buy: Prime Neighborhoods</h2>
        <div className="space-y-10">
          {neighborhoods.map((area, i) => (
            <div key={i} className="card-light rounded-2xl border-brand-100 overflow-hidden reveal-on-scroll">
              <div className="p-7 md:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Home size={14} className="text-brand-GOLD" />
                      <span className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest">{area.tagline}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-black text-brand-950 tracking-tight">{area.name}</h3>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">{area.tag}</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <p className="text-brand-GOLD font-black text-sm">{area.yield}</p>
                      <p className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Avg Yield</p>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-700 font-black text-sm">{area.priceRange}</p>
                      <p className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Price Range</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{area.description}</p>

                {/* Price per sqm */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6 pb-6 border-b border-brand-100">
                  <div>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1">Price per Sqm</p>
                    <p className="text-slate-700 font-black text-sm">{area.pricePerSqm}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1">Active Listings</p>
                    <p className="text-slate-700 font-black text-sm">{area.properties}</p>
                  </div>
                </div>

                {/* Pros */}
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-green-400 text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                      <CheckCircle2 size={12} /> Advantages
                    </p>
                    <ul className="space-y-2">
                      {area.pros.map((pro, j) => (
                        <li key={j} className="text-slate-500 text-sm leading-snug">{pro}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <p className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                      <AlertCircle size={12} /> Considerations
                    </p>
                    <ul className="space-y-2">
                      {area.cons.map((con, j) => (
                        <li key={j} className="text-slate-500 text-sm leading-snug">{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Best For */}
                <div className="pt-4 border-t border-brand-100">
                  <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Best For: </span>
                  <span className="text-slate-500 text-sm">{area.bestFor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Investment Strategy Section */}
        <div className="mt-14 space-y-8 reveal-on-scroll">
          <div className="card-light p-8 rounded-2xl border-brand-100">
            <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-6 tracking-tight">Investment Strategies for Condo Buyers</h2>

            <div className="space-y-6">
              <div className="border-b border-brand-100 pb-6">
                <h3 className="text-lg font-heading font-black text-brand-GOLD mb-3">Buy & Hold for Appreciation</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  Purchase in emerging neighborhoods (Amador, developing areas of El Cangrejo) where land scarcity and expat migration drive 15–20% appreciation over 3–5 years. Combine modest rental income (5–7%) with capital gains.
                </p>
                <p className="text-slate-500 text-xs font-bold">Best neighborhoods: Costa del Este, Amador Causeway</p>
              </div>

              <div className="border-b border-brand-100 pb-6">
                <h3 className="text-lg font-heading font-black text-brand-GOLD mb-3">High-Yield Rental Strategy</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  Buy furnished condos in high-tourism areas (near Canal, Amador, Casco Viejo) and rent short-term on Airbnb. 75%+ occupancy during peak season generates 10–14% annual yields.
                </p>
                <p className="text-slate-500 text-xs font-bold">Best neighborhoods: El Cangrejo, Amador Causeway, Costa del Este (boutique hotels)</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-black text-brand-GOLD mb-3">Buy for Visa & Lifestyle</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  The Friendly Nations Visa requires a $120K property investment. Many expats buy a modest condo to qualify for the visa, then rent it to cover costs while living in a house elsewhere.
                </p>
                <p className="text-slate-500 text-xs font-bold">Learn more: Friendly Nations Visa requirements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing & Market Trends */}
        <div className="mt-14 card-light p-8 rounded-2xl border-brand-100 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-6 tracking-tight">Condo Pricing by Size & Location</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-100">
                  <th className="text-left py-3 px-3 text-slate-500 font-black uppercase text-[10px] tracking-widest">Unit Type</th>
                  <th className="text-center py-3 px-3 text-slate-500 font-black uppercase text-[10px] tracking-widest">El Cangrejo</th>
                  <th className="text-center py-3 px-3 text-slate-500 font-black uppercase text-[10px] tracking-widest">Costa del Este</th>
                  <th className="text-center py-3 px-3 text-slate-500 font-black uppercase text-[10px] tracking-widest">Coronado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { type: '1-bed / 50 sqm', el: '$120K–$180K', costa: '$300K–$450K', coronado: '$150K–$250K' },
                  { type: '2-bed / 80 sqm', el: '$180K–$280K', costa: '$450K–$700K', coronado: '$250K–$400K' },
                  { type: '3-bed / 120 sqm', el: '$280K–$420K', costa: '$700K–$1.2M', coronado: '$400K–$650K' },
                  { type: 'Penthouse / 200+ sqm', el: '$500K–$800K', costa: '$1.2M–$2M+', coronado: '$700K–$1.2M' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="py-3 px-3 text-slate-500 font-bold">{row.type}</td>
                    <td className="text-center py-3 px-3 text-slate-500">{row.el}</td>
                    <td className="text-center py-3 px-3 text-slate-500">{row.costa}</td>
                    <td className="text-center py-3 px-3 text-slate-500">{row.coronado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-4 font-medium">
            Prices fluctuate based on building reputation, renovation, views, and floor level. Furnished units command 15–25% premiums.
          </p>
        </div>

        {/* Due Diligence */}
        <div className="mt-14 card-light p-8 rounded-2xl border-brand-100 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-6 tracking-tight">Critical Due Diligence Checklist</h2>

          <div className="space-y-4">
            {[
              { title: 'Building Condition', details: 'Inspect structural integrity, plumbing, electrical. High-rise condos should have recent engineering surveys.' },
              { title: 'HOA Fees & Reserves', details: 'Verify monthly HOA costs ($200–$800). Check reserve fund status — many buildings underfund maintenance.' },
              { title: 'Title Clarity', details: 'Use a local lawyer to verify clean title. Some properties have ownership disputes or liens.' },
              { title: 'Rental Policy', details: 'Confirm building allows short-term rentals (some restrict to 180 days/year).' },
              { title: 'Security & Management', details: 'Visit the building. Assess 24/7 security, concierge, common area upkeep.' },
              { title: 'Market Comps', details: 'Research 5–10 comparable recent sales in the same building and neighborhood.' },
            ].map((item, i) => (
              <div key={i} className="border-b border-brand-100 pb-4">
                <h4 className="text-brand-GOLD font-black text-sm uppercase tracking-wider mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Financing */}
        <div className="mt-14 card-light p-8 rounded-2xl border-brand-100 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-6 tracking-tight">Financing Options</h2>

          <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
            <div className="border-b border-brand-100 pb-4">
              <h3 className="text-brand-GOLD font-black text-sm uppercase tracking-wider mb-2">Cash Purchases (Most Common)</h3>
              <p>65%+ of condo sales are all-cash. International buyers often wire funds directly. Process takes 30–60 days.</p>
            </div>

            <div className="border-b border-brand-100 pb-4">
              <h3 className="text-brand-GOLD font-black text-sm uppercase tracking-wider mb-2">Panama Bank Mortgages</h3>
              <p>Local banks (Banco General, Banistmo) offer mortgages to expats with 30% down, 15-year terms, 6–8% interest. Requires visa, bank account, and proof of income.</p>
            </div>

            <div>
              <h3 className="text-brand-GOLD font-black text-sm uppercase tracking-wider mb-2">Developer Financing</h3>
              <p>New projects often offer 20% down, pay-out-over-construction terms (2–3 years). Best for off-plan purchases.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 card-light p-8 rounded-2xl border-brand-GOLD/20 text-center reveal-on-scroll">
          <h3 className="text-xl font-heading font-black text-brand-950 mb-3 tracking-tight">Ready to Find Your Ideal Panama Condo?</h3>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            We specialize in sourcing investment-grade condos for expats. Our team has personally inspected every property we list. Get a free 30-minute consultation to discuss your goals, budget, and neighborhood preferences.
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
            { label: 'Browse Available Condos', href: '/en/propiedades' },
            { label: 'Friendly Nations Visa Guide', href: '/en/guides/friendly-nations-visa-panama' },
            { label: 'Best Beaches for Expats', href: '/en/blog/best-beaches-panama-expats' },
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
