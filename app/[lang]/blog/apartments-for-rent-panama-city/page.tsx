import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Home, DollarSign, MapPin, Users, CheckCircle2, AlertCircle, Wifi, Zap, Droplet, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Apartments for Rent in Panama City 2026 | Expat Rental Guide + Prices',
  description:
    'Complete guide to apartments for rent in Panama City. Compare neighborhoods (El Cangrejo $800–1,400/mo, Costa del Este $2,000–4,000/mo, Miraflores $700–1,000/mo), furnished vs unfurnished, lease tips for expats, and utilities.',
  keywords: [
    'apartments for rent in panama city panama',
    'panama city apartments for rent',
    'rent apartment panama',
    'expat apartments panama city',
    'rental apartments panama city',
    'panama city apartments',
    'furnished apartments panama',
    'short term rental panama',
    'apartment rental panama',
  ].join(', '),
  alternates: {
    canonical: 'https://panamarealestatesale.com/en/blog/apartments-for-rent-panama-city',
  },
  openGraph: {
    title: 'Apartments for Rent in Panama City 2026 | Expat Rental Guide + Prices',
    description:
      'Find apartments for rent in Panama City. Pricing by neighborhood, furnished options, lease contracts, and utilities guide for expats.',
    type: 'article',
    url: 'https://panamarealestatesale.com/en/blog/apartments-for-rent-panama-city',
  },
};

const neighborhoods = [
  {
    name: 'El Cangrejo',
    tagline: 'Urban Living & Walkability',
    priceRange: '$800–$1,400/mo',
    furnished: '$900–$1,500/mo',
    description:
      'El Cangrejo is Panama City\'s most vibrant neighborhood — the heart of urban expat life. Walkable to restaurants, banks, supermarkets, and the Metro Panama. Perfect for professionals seeking city convenience without the premium price of Costa del Este.',
    pros: [
      'Walking distance to dining, shopping, and entertainment',
      'Metro Panama subway access for city transit',
      'Thriving expat community with social scene',
      'Multiple furnished apartment options',
      'Easy access to business district',
      'Diverse building types from old charm to modern towers',
    ],
    cons: [
      'Higher crime in some blocks — choose buildings carefully',
      'Noise and traffic from downtown activity',
      'Parking can be limited and costly',
      'Street safety varies by block',
    ],
    bestFor: 'Young professionals, expats seeking nightlife, students, city workers',
    utilities: '$100–$150/mo (A/C heavy in summer)',
  },
  {
    name: 'Costa del Este',
    tagline: 'Luxury & Waterfront Living',
    priceRange: '$2,000–$4,000/mo',
    furnished: '$2,000–$4,500/mo',
    description:
      'Panama\'s most modern and upscale neighborhood with waterfront parks, high-end restaurants, and new condominiums. Attracts wealthy expats and corporate relocations. Pristine infrastructure and strong security make it the premium choice.',
    pros: [
      'Modern amenities and pristine condition',
      'Waterfront parks and promenade access',
      'High-end dining and shopping venues',
      'Superior building maintenance and security',
      'International professional community',
      'Strong expat infrastructure and services',
    ],
    cons: [
      'Highest rental prices in Panama City',
      'Can feel corporate or impersonal',
      'Heavy traffic during rush hours',
      'Limited nightlife variety',
    ],
    bestFor: 'Corporate expats, wealthy individuals, families seeking premium lifestyle',
    utilities: '$120–$200/mo (modern HVAC systems)',
  },
  {
    name: 'Miraflores & Albrook',
    tagline: 'Affordable & Convenient',
    priceRange: '$700–$1,000/mo',
    furnished: '$800–$1,200/mo',
    description:
      'Located near the Panama Canal and Albrook Airport, these neighborhoods offer excellent value for budget-conscious renters. Residential, quieter than downtown, with emerging restaurants and local vibe. Perfect for remote workers and small families.',
    pros: [
      'Best price-to-value ratio in Panama City',
      'Quiet, residential neighborhood feel',
      'Close to Albrook Airport for travel',
      'Canal views and historic sites nearby',
      'Growing restaurant and café scene',
      'Good for families seeking lower costs',
    ],
    cons: [
      'Less walkable — may need taxi/car',
      'Smaller expat community than El Cangrejo',
      'Fewer high-end amenities',
      'Mixed building quality — inspect carefully',
    ],
    bestFor: 'Budget-conscious expats, remote workers, families, long-term renters',
    utilities: '$80–$120/mo',
  },
  {
    name: 'Casco Viejo',
    tagline: 'Historic & Cultural Hub',
    priceRange: '$1,200–$2,500/mo',
    furnished: '$1,200–$2,800/mo',
    description:
      'Panama\'s historic old town with colonial architecture, UNESCO designation, and vibrant cultural scene. High-ceiling apartments in restored colonial buildings with balconies overlooking the bay. Perfect for expats seeking character and history.',
    pros: [
      'Unique historic architecture and UNESCO heritage',
      'Excellent restaurants and nightlife',
      'Vibrant local and expat community',
      'Walking distance to waterfront',
      'Cultural attractions and galleries',
      'Charming bohemian atmosphere',
    ],
    cons: [
      'Higher crime rates — avoid certain blocks',
      'Aging infrastructure in some buildings',
      'Limited parking and narrow streets',
      'Can be noisy on weekends',
      'Mixed building conditions',
    ],
    bestFor: 'Artists, culture enthusiasts, couples, short-term renters on Airbnb',
    utilities: '$120–$150/mo',
  },
];

const pricingTable = [
  { type: '1-Bedroom, 50 sqm', elCangrejo: '$800–$1,100', costaDel: '$2,000–$2,500', miraflores: '$650–$850', cascoViejo: '$1,000–$1,500' },
  { type: '2-Bedroom, 80 sqm', elCangrejo: '$1,100–$1,400', costaDel: '$2,500–$3,500', miraflores: '$850–$1,100', cascoViejo: '$1,300–$2,000' },
  { type: '3-Bedroom, 120 sqm', elCangrejo: '$1,400–$1,800', costaDel: '$3,500–$4,000', miraflores: '$1,000–$1,500', cascoViejo: '$1,800–$2,500' },
  { type: 'Studio / Studio + Den', elCangrejo: '$700–$950', costaDel: '$1,500–$2,200', miraflores: '$550–$750', cascoViejo: '$900–$1,300' },
];

export default function ApartmentsForRentPanamaGuide() {
  return (
    <article className="bg-brand-950 min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="mb-12 reveal-on-scroll">
          <span className="text-brand-GOLD font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
            Rental Guide · Expat Edition · 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white mb-6 tracking-tight leading-tight">
            Apartments for Rent in Panama City
          </h1>
          <p className="text-slate-400 text-lg font-medium leading-relaxed border-l-2 border-brand-GOLD/30 pl-5">
            Renting in Panama City is affordable, straightforward, and expat-friendly. This guide covers pricing by neighborhood, lease agreements, utilities, and insider tips for finding your ideal apartment.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 reveal-on-scroll">
          {[
            { icon: Home, label: 'Avg 2-Bed Rent', value: '$800–$1,200/mo', sub: 'El Cangrejo unfurnished' },
            { icon: DollarSign, label: 'Budget Range', value: '$500–$3,500/mo', sub: 'Studio to luxury 3-bed' },
            { icon: Users, label: 'Expat Renters', value: '40%+ of market', sub: 'Growing rental demand' },
            { icon: MapPin, label: 'Neighborhoods', value: '6+ rentable areas', sub: 'From budget to luxury' },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="glass-card p-5 rounded-xl border-white/5 reveal-on-scroll">
                <Icon size={18} className="text-brand-GOLD mb-3" />
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-white text-lg font-black mb-1">{stat.value}</p>
                <p className="text-slate-600 text-[9px]">{stat.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Introduction Section */}
        <div className="glass-card p-8 rounded-2xl border-white/5 mb-12 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-4 tracking-tight">Why Rent in Panama City?</h2>
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>
              Panama City attracts expats worldwide for its affordability, expat-friendly infrastructure, and proximity to the Canal. Rental apartments range from $500/month studios to $3,500+ luxury units. Whether you're relocating temporarily or settling long-term, the rental market offers flexibility and value.
            </p>
            <ul className="space-y-2">
              {[
                'Affordable rents: $800–$1,400/mo for quality 2-bedrooms in prime areas',
                'Low visa requirements: Temporary Resident Visa (TRV) with just proof of monthly income ($1,000+)',
                'Furnished options: Many buildings offer furnished apartments ready to move in',
                'Flexible leases: Month-to-month, 6-month, or annual options available',
                'Utilities included: Some apartments include internet, cable, and water',
                'Established expat community: 165,000+ expats with support networks and services',
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
        <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-8 tracking-tight reveal-on-scroll">Neighborhoods: Pricing & Vibes</h2>
        <div className="space-y-10">
          {neighborhoods.map((area, i) => (
            <div key={i} className="glass-card rounded-2xl border-white/5 overflow-hidden reveal-on-scroll">
              <div className="p-7 md:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={14} className="text-brand-GOLD" />
                      <span className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest">{area.tagline}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-black text-white tracking-tight">{area.name}</h3>
                  </div>
                  <div className="flex gap-4 text-right">
                    <div>
                      <p className="text-brand-GOLD font-black text-sm">{area.priceRange}</p>
                      <p className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Unfurnished</p>
                    </div>
                    <div>
                      <p className="text-white font-black text-sm">{area.furnished}</p>
                      <p className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Furnished</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{area.description}</p>

                {/* Utilities */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6 pb-6 border-b border-white/5">
                  <div>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1">Monthly Utilities</p>
                    <p className="text-white font-black text-sm">{area.utilities}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1">Best For</p>
                    <p className="text-slate-300 text-sm">{area.bestFor}</p>
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
                        <li key={j} className="text-slate-300 text-sm leading-snug">{pro}</li>
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
                        <li key={j} className="text-slate-300 text-sm leading-snug">{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="mt-14 glass-card p-8 rounded-2xl border-white/5 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-6 tracking-tight">Apartment Rental Prices by Neighborhood</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-3 text-slate-400 font-black uppercase text-[10px] tracking-widest">Unit Type</th>
                  <th className="text-center py-3 px-3 text-slate-400 font-black uppercase text-[10px] tracking-widest">El Cangrejo</th>
                  <th className="text-center py-3 px-3 text-slate-400 font-black uppercase text-[10px] tracking-widest">Costa del Este</th>
                  <th className="text-center py-3 px-3 text-slate-400 font-black uppercase text-[10px] tracking-widest">Miraflores</th>
                  <th className="text-center py-3 px-3 text-slate-400 font-black uppercase text-[10px] tracking-widest">Casco Viejo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {pricingTable.map((row, i) => (
                  <tr key={i}>
                    <td className="py-3 px-3 text-slate-300 font-bold">{row.type}</td>
                    <td className="text-center py-3 px-3 text-slate-400">{row.elCangrejo}</td>
                    <td className="text-center py-3 px-3 text-slate-400">{row.costaDel}</td>
                    <td className="text-center py-3 px-3 text-slate-400">{row.miraflores}</td>
                    <td className="text-center py-3 px-3 text-slate-400">{row.cascoViejo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-4 font-medium">
            Prices listed are monthly rent in USD. Furnished units typically cost 25–40% more. Prices vary by building amenities, floor level, and views.
          </p>
        </div>

        {/* Furnished vs Unfurnished */}
        <div className="mt-14 glass-card p-8 rounded-2xl border-white/5 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-6 tracking-tight">Furnished vs Unfurnished Apartments</h2>

          <div className="space-y-6">
            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-heading font-black text-brand-GOLD mb-3 flex items-center gap-2">
                <Home size={16} /> Furnished Apartments
              </h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <p><span className="font-bold text-white">Price Premium:</span> 25–40% more than unfurnished</p>
                <p><span className="font-bold text-white">What's Included:</span> Furniture, kitchen appliances, linens, some electronics</p>
                <p><span className="font-bold text-white">Best For:</span> Short-term renters (1–12 months), relocating professionals, those avoiding furniture shopping</p>
                <p><span className="font-bold text-white">Lease Terms:</span> Flexible — often month-to-month or 3-month minimums</p>
                <p className="text-xs text-slate-500 italic mt-3">Most furnished units in El Cangrejo and Casco Viejo target short-term Airbnb rentals. Verify building policy allows residential use.</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-heading font-black text-brand-GOLD mb-3 flex items-center gap-2">
                <Home size={16} /> Unfurnished Apartments
              </h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <p><span className="font-bold text-white">Price Range:</span> Standard rental market rates (30–40% cheaper)</p>
                <p><span className="font-bold text-white">What's Included:</span> Walls, flooring, kitchen with basic appliances, A/C, hot water</p>
                <p><span className="font-bold text-white">Best For:</span> Long-term residents (1+ years), families, those seeking affordability</p>
                <p><span className="font-bold text-white">Lease Terms:</span> Usually 1-year minimum, with annual renewal option</p>
                <p className="text-xs text-slate-500 italic mt-3">Furniture sourcing: IKEA, local retailers (Battan, Sony), Facebook Marketplace expat groups, and used imports.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Short-Term vs Long-Term */}
        <div className="mt-14 glass-card p-8 rounded-2xl border-white/5 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-6 tracking-tight">Short-Term vs Long-Term Leases</h2>

          <div className="space-y-6">
            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-heading font-black text-brand-GOLD mb-3">Short-Term Rentals (1–6 months)</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-brand-GOLD flex-shrink-0 mt-1" />
                  <span><span className="font-bold text-white">Premium:</span> Expect 15–25% higher monthly rent</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-brand-GOLD flex-shrink-0 mt-1" />
                  <span><span className="font-bold text-white">Furnished:</span> Most short-term units are fully furnished</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-brand-GOLD flex-shrink-0 mt-1" />
                  <span><span className="font-bold text-white">Flexibility:</span> Month-to-month available in many buildings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-brand-GOLD flex-shrink-0 mt-1" />
                  <span><span className="font-bold text-white">Platforms:</span> Airbnb, Booking.com, Furnished Finder, local Facebook groups</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-heading font-black text-brand-GOLD mb-3">Long-Term Rentals (1+ years)</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-brand-GOLD flex-shrink-0 mt-1" />
                  <span><span className="font-bold text-white">Best Value:</span> Standard market rates, best price-to-value ratio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-brand-GOLD flex-shrink-0 mt-1" />
                  <span><span className="font-bold text-white">Unfurnished:</span> Most long-term units are unfurnished (you provide furniture)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-brand-GOLD flex-shrink-0 mt-1" />
                  <span><span className="font-bold text-white">Commitment:</span> 1-year lease standard, with security deposit (1 month's rent)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-brand-GOLD flex-shrink-0 mt-1" />
                  <span><span className="font-bold text-white">Platforms:</span> Real estate agents, MLS Panama, Facebook groups, local word-of-mouth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Find Rentals */}
        <div className="mt-14 glass-card p-8 rounded-2xl border-white/5 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-6 tracking-tight">How to Find Apartments in Panama City</h2>

          <div className="space-y-6">
            {[
              {
                title: 'Facebook Groups (Best for Long-Term Rentals)',
                details: 'Search "Apartments Panama City," "Expats in Panama," "Housing in Panama City." Most landlords post here. Direct contact, no agent fees. Rent ranges $500–$2,000+/mo.',
              },
              {
                title: 'MLS Panama (Real Estate Agents)',
                details: 'Professional listing platform with photos, descriptions, and agent contacts. Commission: typically 3–5% of annual rent. Best for 1+ year leases in verified properties.',
              },
              {
                title: 'Real Estate Agents & Brokers',
                details: 'Walk-ins to agencies in El Cangrejo or Costa del Este. Agents know inventory and can negotiate on your behalf. Expect 3–5% commission on long-term rentals.',
              },
              {
                title: 'Furnished Finder & Airbnb (Short-Term)',
                details: 'Best for 1–6 month rentals. Furnished Finder specializes in expat rentals globally. Airbnb offers flexibility but at 15–25% premium.',
              },
              {
                title: 'Direct Landlord Negotiations',
                details: 'Many building owners post signs or accept walk-in inquiries. Avoid agent commission (3–5% savings). Get references and inspect carefully.',
              },
              {
                title: 'Expat Services & Relocation Companies',
                details: 'Companies like Expat Relocations Panama, ACI Relocation, and others specialize in housing for incoming expats. Higher cost but streamlined process.',
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-white/5 pb-6 last:border-0">
                <h4 className="text-brand-GOLD font-black text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Search size={14} /> {item.title}
                </h4>
                <p className="text-slate-400 text-sm">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included in Rent */}
        <div className="mt-14 glass-card p-8 rounded-2xl border-white/5 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-6 tracking-tight">What's Included in Rent? Utilities & HOA</h2>

          <div className="space-y-6">
            <div className="border-b border-white/5 pb-6">
              <h3 className="text-lg font-heading font-black text-brand-GOLD mb-3 flex items-center gap-2">
                <Zap size={16} /> Typical Utilities (Monthly)
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-slate-400 text-sm">
                <div>
                  <p className="font-bold text-white mb-2">Usually Separate:</p>
                  <ul className="space-y-1">
                    <li>• Electricity: $50–$200+ (A/C heavy in summer)</li>
                    <li>• Water: $20–$40</li>
                    <li>• Internet/TV: $30–$70</li>
                    <li>• Gas (hot water): $5–$15</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-white mb-2">Sometimes Included:</p>
                  <ul className="space-y-1">
                    <li>• HOA/Maintenance: $100–$300/mo</li>
                    <li>• Water (some buildings)</li>
                    <li>• Internet (premium buildings)</li>
                    <li>• Trash collection</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-heading font-black text-brand-GOLD mb-3 flex items-center gap-2">
                <Droplet size={16} /> HOA Fees & Building Costs
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Most apartment buildings charge HOA (condominium fees) covering maintenance, security, cleaning, and amenities.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-brand-GOLD flex-shrink-0 mt-1" />
                  <span><span className="font-bold text-white">Budget Buildings:</span> $50–$150/mo (basic security, cleaning)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-brand-GOLD flex-shrink-0 mt-1" />
                  <span><span className="font-bold text-white">Mid-Range:</span> $150–$250/mo (gym, pool, 24/7 security)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-brand-GOLD flex-shrink-0 mt-1" />
                  <span><span className="font-bold text-white">Luxury:</span> $250–$500+/mo (concierge, valet, amenities)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lease Agreements for Expats */}
        <div className="mt-14 glass-card p-8 rounded-2xl border-white/5 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-6 tracking-tight">Lease Agreements for Expats: What You Need to Know</h2>

          <div className="space-y-6">
            {[
              {
                title: 'Language & Translations',
                details: 'Leases are typically in Spanish. Request English translation or hire a local lawyer ($200–$400) to review. Never sign without understanding terms.',
              },
              {
                title: 'Security Deposit',
                details: 'Standard: 1 month\'s rent held by landlord. Refundable upon lease end if unit is undamaged. Request written receipt. Verify return process before signing.',
              },
              {
                title: 'Lease Duration',
                details: 'Long-term: 1-year standard (some allow 6-month). Short-term: 1–6 months (furnished units). Early termination usually costs 1–2 months\' rent penalty.',
              },
              {
                title: 'Payment Methods',
                details: 'Common: ACH transfer (Corriente), cash in person (less recommended), or check. Get written receipt for all payments. Automatic transfers are safest.',
              },
              {
                title: 'Maintenance & Repairs',
                details: 'Clarify who pays for repairs: landlord (structural) vs tenant (fixtures). Document unit condition before move-in with photos. Address concerns in writing.',
              },
              {
                title: 'Renewal & Exit',
                details: 'Specify notice period for non-renewal (typically 30–60 days). Agree on move-out date and inspection process. Get landlord approval before major renovations.',
              },
              {
                title: 'Pet Policy',
                details: 'Many buildings restrict pets or charge deposits ($200–$500). Confirm in writing. Some buildings ban large dogs entirely. Verify before committing.',
              },
              {
                title: 'Rental Registration (Optional)',
                details: 'Panama doesn\'t require formal rental registration, but record all payments and correspondence. Consider rental insurance ($15–$30/mo) for belongings.',
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-white/5 pb-6 last:border-0">
                <h4 className="text-brand-GOLD font-black text-sm uppercase tracking-wider mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Breakdown Example */}
        <div className="mt-14 glass-card p-8 rounded-2xl border-white/5 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-6 tracking-tight">Sample Monthly Budget (2-Bed Apartment, El Cangrejo)</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-white/5 pb-3">
              <span className="text-slate-400">Rent (unfurnished)</span>
              <span className="text-white font-bold">$900</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-3">
              <span className="text-slate-400">HOA/Building fee</span>
              <span className="text-white font-bold">$100</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-3">
              <span className="text-slate-400">Electricity (A/C heavy)</span>
              <span className="text-white font-bold">$120</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-3">
              <span className="text-slate-400">Water</span>
              <span className="text-white font-bold">$30</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-3">
              <span className="text-slate-400">Internet / Cable TV</span>
              <span className="text-white font-bold">$50</span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-brand-GOLD font-black">TOTAL</span>
              <span className="text-brand-GOLD font-black text-lg">$1,200/month</span>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-6 italic">
            This estimate is for unfurnished rental only. Furnished apartments cost 25–40% more but often include internet and some utilities. Personal expenses (food, transport, dining) separate.
          </p>
        </div>

        {/* Red Flags & Safety Tips */}
        <div className="mt-14 glass-card p-8 rounded-2xl border-white/5 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-6 tracking-tight">Red Flags & Safety Tips When Renting</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-orange-400 text-sm font-black uppercase tracking-wider mb-3 flex items-center gap-2">
                <AlertCircle size={14} /> Red Flags to Avoid
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                {[
                  'Landlord refuses written lease — always get it in writing',
                  'Wants cash-only payments with no receipts — use traceable transfers',
                  'Building has visible structural damage or plumbing issues',
                  'No security or safety measures (broken locks, dark stairwells)',
                  'Unusually cheap rent for the area — verify legitimacy',
                  'Landlord refuses inspection or move-out walkthrough',
                  'Building allows illegal short-term Airbnb rentals in residential zone',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertCircle size={14} className="text-orange-400 flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/5 pt-6">
              <h3 className="text-green-400 text-sm font-black uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 size={14} /> Safety Checklist
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                {[
                  'Visit the neighborhood at different times (day & evening) to assess safety',
                  'Test water pressure, A/C, hot water, and appliances before signing',
                  'Request landlord references from previous tenants',
                  'Take move-in photos documenting all damage, stains, wear',
                  'Verify all utilities are functional and registered to you',
                  'Check building security: guards, locked doors, emergency exits',
                  'Confirm internet speed before paying deposit',
                  'Get landlord contact info and emergency maintenance line in writing',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-green-400 flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Visa Requirements */}
        <div className="mt-14 glass-card p-8 rounded-2xl border-white/5 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-6 tracking-tight">Visa Requirements for Renting in Panama</h2>

          <div className="space-y-4 text-slate-400 text-sm">
            <p>
              <span className="font-bold text-white">Temporary Resident Visa (TRV):</span> Most expat renters use this visa. Requires proof of monthly income ($1,000+ USD) from pension, salary, or passive income. Processing: 1–2 months. Cost: ~$500.
            </p>
            <p>
              <span className="font-bold text-white">Friendly Nations Visa:</span> Requires $120K property purchase or $500K bank deposit. Not required for rentals, but popular for expat residents. Allows permanent residency.
            </p>
            <p>
              <span className="font-bold text-white">Pensioner Visa:</span> Requires $1,000+ monthly passive income from pension. No employment allowed. Cost: ~$250.
            </p>
            <p>
              <span className="font-bold text-white">Tourist Permit:</span> 180 days visa-free for many nationalities (US, EU, Canada). Can be renewed. Some expats skip formal visas and renew this instead — less common now.
            </p>
            <p className="text-xs text-slate-500 italic border-t border-white/5 pt-4">
              Rental agreements can help support visa applications by showing proof of residence. Request a certified copy from your landlord.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 glass-card p-8 rounded-2xl border-brand-GOLD/20 text-center reveal-on-scroll">
          <h3 className="text-xl font-heading font-black text-white mb-3 tracking-tight">Ready to Find Your Perfect Apartment in Panama City?</h3>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Our team specializes in helping expats find ideal rental apartments across Panama City neighborhoods. Get personalized recommendations, lease negotiation support, and expert guidance. Contact us for a free 30-minute rental consultation.
          </p>
          <Link
            href="/en/contacto"
            className="inline-flex items-center gap-2 btn-3d btn-3d-gold px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[11px]"
          >
            Start Your Rental Search <ArrowRight size={14} />
          </Link>
        </div>

        {/* Internal links */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4 reveal-on-scroll">
          {[
            { label: 'Browse Available Properties', href: '/en/propiedades' },
            { label: 'Best Areas to Retire in Panama', href: '/en/guides/best-areas-retire-panama' },
            { label: 'Cost of Living Panama 2026', href: '/en/guides/cost-of-living-panama-2026' },
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
