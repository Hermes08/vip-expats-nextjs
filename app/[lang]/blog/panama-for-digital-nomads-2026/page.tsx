import type { Metadata } from 'next';
import Link from 'next/link';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';
import {
  Laptop,
  Globe,
  DollarSign,
  Wifi,
  Home,
  MapPin,
  TrendingUp,
  CheckCircle2,
  Users,
  Clock,
} from 'lucide-react';



export const metadata: Metadata = {
  title: 'Panama for Digital Nomads 2026: Visa, Tax, Internet & Where to Base',
  description: 'The complete guide to being a digital nomad in Panama. Visa options, tax implications, internet quality, co-working spaces, neighborhoods, and monthly budgets.',
  keywords: 'panama digital nomads, working remotely panama, panama expats, panama coworking, panama visa remote workers',
  alternates: {
    canonical: 'https://panamarealestatesale.com/blog/panama-for-digital-nomads-2026',
  },
  openGraph: {
    title: 'Panama for Digital Nomads 2026: Complete Guide',
    description: 'Why Panama is the ideal base for digital nomads: 0% foreign income tax, USD economy, 180-day visa, excellent internet, and low cost of living.',
    type: 'article',
    url: 'https://panamarealestatesale.com/blog/panama-for-digital-nomads-2026',
    siteName: 'VIP Expats Panama Real Estate',
  },
};

const budgetData = [
  { scenario: 'Budget Solo', cost: 1300, details: 'Shared housing, local food' },
  { scenario: 'Comfortable Solo', cost: 2100, details: '1BR apartment, mixed dining' },
  { scenario: 'Couple/Share', cost: 3000, details: 'Premium apartment, dining out' },
];

const neighborhoods = [
  {
    name: 'Casco Viejo',
    type: 'Historic/Trendy',
    rent: '$1,000–1,800/1BR',
    vibe: 'Walkable, restaurants, bars, Instagram-worthy. Expat hotspot. Good wifi.',
    best_for: 'Social nomads, those wanting urban nightlife',
    commute: '10–15 min to other areas by taxi',
  },
  {
    name: 'San Francisco',
    type: 'Residential/Professional',
    rent: '$1,100–1,700/1BR',
    vibe: 'Quieter than Casco Viejo, good restaurants, local feel. Growing co-working scene.',
    best_for: 'Those wanting balance of quiet + city access',
    commute: '5–10 min to co-working spaces',
  },
  {
    name: 'Miraflores',
    type: 'Expat Residential',
    rent: '$1,200–1,900/1BR',
    vibe: 'Upscale, modern, quiet. Expat-friendly. Slightly removed from city center.',
    best_for: 'Professionals wanting stability + comfort',
    commute: '15–20 min to coworking by car',
  },
  {
    name: 'El Cangrejo',
    type: 'Budget/Local',
    rent: '$700–1,100/1BR',
    vibe: 'Affordable, local Panamanian vibe, busy. More noise but authentic.',
    best_for: 'Budget-conscious nomads, those wanting local immersion',
    commute: 'Central location, walking distance to many things',
  },
  {
    name: 'Boquete',
    type: 'Mountain/Expat',
    rent: '$600–1,000/1BR',
    vibe: 'Slow internet (20–50 Mbps), mountain town, cool climate. Expat community. Good for non-urgent work.',
    best_for: 'Async workers, those valuing lifestyle over fast internet',
    commute: 'N/A (not ideal for constant video calls)',
  },
];

const coworkingSpaces = [
  {
    name: 'Selina Casco Viejo',
    price: '$15–25/day, $250–400/month',
    amenities: 'High-speed wifi, social events, bar, residents, kitchen',
    vibe: 'Vibrant, social, backpacker-meets-professional',
    best_for: 'First-time nomads, social types',
  },
  {
    name: 'IQ Flex',
    price: '$300–500/month',
    amenities: '200+ Mbps, private desks, meeting rooms, premium location',
    vibe: 'Professional, quieter, modern',
    best_for: 'Professionals needing focused work',
  },
  {
    name: 'WeWork Panama City',
    price: '$350–600/month',
    amenities: 'Global network, premium facilities, events, business services',
    vibe: 'Corporate, professional, high-end',
    best_for: 'Those wanting enterprise-grade setup',
  },
  {
    name: 'Spaces (Multiplaza)',
    price: '$300–500/month',
    amenities: 'Premium location, modern, high-speed internet, retail center',
    vibe: 'Upscale, professional',
    best_for: 'Professionals in premium neighborhoods',
  },
  {
    name: 'Café-Based Co-working',
    price: 'Free (with coffee purchases)',
    amenities: 'Wifi, casual atmosphere, food/drinks',
    vibe: 'Relaxed, casual',
    best_for: 'Light work, social meetings. Good options: Café Unido, Crepes & Waffles',
  },
];

const visaOptions = [
  {
    name: 'Tourist Stay',
    duration: '180 days',
    cost: '$0',
    requirements: 'Valid passport, return ticket',
    pros: 'Free, automatic, no paperwork',
    cons: 'Not renewable in-country, must exit and re-enter',
    best_for: 'First-time visitors, testing out Panama',
  },
  {
    name: 'Short Stay Visa',
    duration: '90 days (renewable)',
    cost: '$50–150 per renewal',
    requirements: 'Proof of funds, proof of accommodation',
    pros: 'Renewable multiple times, official status',
    cons: 'Requires renewal every 90 days',
    best_for: 'Those planning 6–12 months',
  },
  {
    name: 'Friendly Nations Visa',
    duration: 'Permanent residency',
    cost: '$1,500–3,000 (attorney + processing)',
    requirements: '$200K economic link (property, job offer, investment)',
    pros: 'Permanent residency, can stay indefinitely, 50% hospital discount',
    cons: 'Higher upfront cost',
    best_for: 'Those planning multi-year stay, property investment',
  },
  {
    name: 'Pensionado Visa',
    duration: 'Permanent residency',
    cost: '$1,500–2,500 (attorney + processing)',
    requirements: '$1,000/month passive income',
    pros: 'Permanent residency, 50% hospital discount, lower barrier than Friendly Nations',
    cons: 'Requires proof of income',
    best_for: 'Retirees, those with passive income',
  },
];

const faqData = [
  {
    question: 'Do I have to pay taxes on my remote income in Panama?',
    answer: 'No. Panama has a territorial tax system: only income earned within Panama is taxed. Your remote income earned from clients/companies in the USA (or other countries) is NOT taxed by Panama, even if you\'re a resident. This is the biggest advantage for digital nomads. However, you still owe taxes to your home country (USA, UK, etc.). Panama doesn\'t eliminate your home country taxes, but it doesn\'t add new ones.',
  },
  {
    question: 'How\'s the internet quality for video calls and streaming?',
    answer: 'In Panama City, fiber internet is excellent (100–500 Mbps available for $40–80/month). Reliable for video calls, streaming, uploads. In Boquete (popular alt for slower pace), expect 20–50 Mbps, which is fine for basic video but slower for uploads. Co-working spaces have 200+ Mbps and backup internet. Test with an AirBnB first, or choose Casco Viejo/San Francisco for guaranteed solid internet.',
  },
  {
    question: 'What\'s the cost of living as a nomad in Panama?',
    answer: 'Solo budget: $1,200–1,600/month (shared housing, local restaurants, basic co-working). Solo comfortable: $1,800–2,500/month (1BR apartment, mixed dining, co-working membership). Couple sharing: $2,500–3,500/month. Panama City is 40–50% cheaper than US major cities (NYC, SF, LA). This beats Medellin, Mexico City, and Lisbon for value.',
  },
  {
    question: 'Can I get a visa as a remote worker without a local job?',
    answer: 'Yes, multiple options. Tourist visa (180 days free), Short Stay (90 days renewable for ~$100 each), or Friendly Nations if you have $200K to invest/link economically. You don\'t need a Panama employer. Many nomads use tourist visas (180 days), exit/re-enter, and repeat. Some stay on back-to-back tourist visas indefinitely. For longer commitment, Friendly Nations is cleaner legally.',
  },
  {
    question: 'Which neighborhood is best for digital nomads?',
    answer: 'Casco Viejo if you want social + co-working + nightlife. San Francisco if you want balance of quiet + city access + good food. El Cangrejo if you\'re budget-conscious. Boquete if you don\'t need fast internet and prefer mountain lifestyle. Test for 1–2 weeks in AirBnB in each before committing to a lease.',
  },
  {
    question: 'Is Panama safe for foreign remote workers?',
    answer: 'Panama City expat areas (Casco Viejo, San Francisco, Miraflores) are safe. Like any city, use common sense: don\'t flash jewelry, avoid certain areas after dark, use registered taxis (Uber/Easy Taxi work). Expat community is large and welcoming. Crime exists but rarely affects tourists/expats in main areas. Ask locals and other nomads for neighborhood specifics.',
  },
];

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <article className="bg-white min-h-screen pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-white border-b-2 border-brand-100 mb-16">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="flex items-center gap-3 mb-6">
            <Laptop className="w-8 h-8 text-brand-TEAL" />
            <span className="text-sm font-semibold text-brand-TEAL tracking-wider uppercase">
              The Nomad's Guide
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-950 mb-6 leading-tight">
            Panama for Digital Nomads 2026
          </h1>
          <p className="text-xl text-brand-700 mb-8 max-w-2xl leading-relaxed">
            Visa options, tax implications, internet quality, co-working spaces, and where to base yourself. The first comprehensive guide for remote workers considering Panama.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white border-2 border-brand-TEAL rounded-lg px-6 py-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0" />
              <span className="text-brand-950 font-semibold">0% Foreign Income Tax</span>
            </div>
            <div className="bg-white border-2 border-brand-TEAL rounded-lg px-6 py-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0" />
              <span className="text-brand-950 font-semibold">180-Day Tourist Visa</span>
            </div>
            <div className="bg-white border-2 border-brand-TEAL rounded-lg px-6 py-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0" />
              <span className="text-brand-950 font-semibold">EST Timezone Alignment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Panama */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8">Why Panama is the Ideal Digital Nomad Hub</h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Panama ticks every box for digital nomads: no tax on foreign income, USD currency (no exchange volatility), 180-day tourist visa with no paperwork, same timezone as US East Coast, excellent internet in the city, and cost of living 40–50% below major US cities.
          </p>
          <p className="text-lg text-brand-700 leading-relaxed">
            Unlike other "digital nomad hotspots" that market aggressively but lack infrastructure, Panama has a mature expat ecosystem, stable banking, real hospitals, and a large remote work community. You're not pioneering—you're joining an established network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-brand-TEAL" />
              Tax Advantage
            </h3>
            <p className="text-brand-700 text-sm">
              0% tax on foreign-sourced income. Your remote clients/income stays exempt from Panama tax, even as a resident.
            </p>
          </div>
          <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3 flex items-center gap-2">
              <Wifi className="w-5 h-5 text-brand-TEAL" />
              Internet Quality
            </h3>
            <p className="text-brand-700 text-sm">
              Panama City: 100–500 Mbps fiber available. Co-working spaces: 200+ Mbps. Reliable for all video work.
            </p>
          </div>
          <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-TEAL" />
              Timezone Advantage
            </h3>
            <p className="text-brand-700 text-sm">
              EST -5: same as US East Coast. Perfect for US clients. No awkward call times.
            </p>
          </div>
        </div>
      </section>

      {/* Visa Comparison */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <Globe className="w-8 h-8 text-brand-TEAL" />
          Visa Options for Digital Nomads
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-brand-700 leading-relaxed">
            Panama offers multiple visa paths for remote workers. Choose based on how long you want to stay and whether you want official residency status.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {visaOptions.map((visa, idx) => (
            <div key={idx} className="bg-white border-2 border-brand-100 rounded-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-brand-950">
                    {visa.name}
                  </h3>
                  <p className="text-brand-TEAL font-semibold mt-1">{visa.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-brand-TEAL">{visa.cost}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="font-semibold text-brand-950 mb-2 text-sm uppercase text-brand-700">Requirements</p>
                  <p className="text-brand-700 text-sm">{visa.requirements}</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-950 mb-2 text-sm uppercase text-brand-700">Best For</p>
                  <p className="text-brand-700 text-sm">{visa.best_for}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="font-semibold text-green-900 text-xs mb-1 uppercase">Pros</p>
                  <p className="text-green-800 text-sm">{visa.pros}</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded p-3">
                  <p className="font-semibold text-red-900 text-xs mb-1 uppercase">Cons</p>
                  <p className="text-red-800 text-sm">{visa.cons}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-50 border-l-4 border-brand-TEAL p-6 rounded">
          <p className="font-semibold text-brand-950 mb-2">Nomad Strategy: Tourist Visa Loop</p>
          <p className="text-brand-700 text-sm mb-3">
            Most digital nomads use the 180-day tourist visa. When it expires, take a weekend trip to Costa Rica or Colombia, re-enter Panama, and get a fresh 180 days. This works indefinitely with no visa cost. Legally grey but widely practiced by the nomad community.
          </p>
          <p className="text-brand-700 text-sm">
            <strong>Cleaner option:</strong> Get Friendly Nations visa ($1,500–3,000 total) after first year if you like Panama long-term.
          </p>
        </div>
      </section>

      {/* Internet & Co-working */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <Wifi className="w-8 h-8 text-brand-TEAL" />
          Internet Quality & Co-Working Spaces
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Internet is critical for remote work. Panama City has excellent fiber (100–500 Mbps for $40–80/month). Co-working spaces offer backup connectivity and professional environment.
          </p>
        </div>

        <div className="bg-white border-2 border-brand-100 rounded-lg p-8 mb-8">
          <h3 className="font-heading font-bold text-xl text-brand-950 mb-6">Internet Providers & Speeds</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-brand-950">Cable Onda (Residential)</p>
                <p className="text-brand-700 text-sm">100–500 Mbps, $40–80/month, most common for apartments</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-brand-950">Claro (Mixed)</p>
                <p className="text-brand-700 text-sm">50–200 Mbps in some areas, cheaper option, variable reliability</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-brand-950">Movistar (Backup)</p>
                <p className="text-brand-700 text-sm">Mobile hotspot option, 4G LTE reliable as backup to home internet</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-heading font-bold text-xl text-brand-950 mb-6">Co-Working Spaces: Panama City</h3>
          <div className="space-y-4">
            {coworkingSpaces.map((space, idx) => (
              <div key={idx} className="bg-white border-2 border-brand-100 rounded-lg p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-heading font-bold text-brand-950">{space.name}</h4>
                  <p className="text-brand-TEAL font-bold text-sm">{space.price}</p>
                </div>
                <p className="text-brand-700 text-sm mb-3"><strong>Amenities:</strong> {space.amenities}</p>
                <p className="text-brand-700 text-sm mb-2"><strong>Vibe:</strong> {space.vibe}</p>
                <p className="text-brand-600 text-sm italic">Best for: {space.best_for}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-50 border-l-4 border-brand-TEAL p-6 rounded">
          <p className="font-semibold text-brand-950 mb-2">Pro Tips for Internet Reliability</p>
          <ul className="space-y-2 text-brand-700 text-sm">
            <li>• Get home internet + co-working membership. Home for async work, co-working for video calls (better backup)</li>
            <li>• Keep Movistar 4G hotspot as backup ($30–50/month mobile plan). Lifesaver during outages.</li>
            <li>• Test internet at your AirBnB before committing to long-term lease. Speeds vary by location.</li>
            <li>• Casco Viejo and San Francisco have most reliable cable internet. Avoid older buildings in El Cangrejo.</li>
          </ul>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <MapPin className="w-8 h-8 text-brand-TEAL" />
          Neighborhoods: Where to Base Yourself
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-brand-700 leading-relaxed">
            Panama City has distinct neighborhoods. Each suits different nomad types. Start with a short-term AirBnB (2–4 weeks) in each area to find your fit before committing to a lease.
          </p>
        </div>

        <div className="space-y-6">
          {neighborhoods.map((neighborhood, idx) => (
            <div key={idx} className="bg-white border-2 border-brand-100 rounded-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-brand-950">
                    {neighborhood.name}
                  </h3>
                  <p className="text-brand-TEAL font-semibold text-sm mt-1">{neighborhood.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-brand-700 font-bold">{neighborhood.rent}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-brand-950 text-sm uppercase text-brand-700">Vibe</p>
                  <p className="text-brand-700">{neighborhood.vibe}</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-950 text-sm uppercase text-brand-700">Best For</p>
                  <p className="text-brand-700">{neighborhood.best_for}</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-950 text-sm uppercase text-brand-700">Commute</p>
                  <p className="text-brand-700">{neighborhood.commute}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Monthly Budget */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-brand-TEAL" />
          Monthly Nomad Budget: What You'll Actually Spend
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-brand-700 leading-relaxed">
            Panama is 40–50% cheaper than US major cities. A nomad spending $3,000/month in NYC or SF can live very comfortably here for $1,800–2,500.
          </p>
        </div>

        {/* Three.js Budget Chart */}
        <div className="bg-brand-50 border-2 border-brand-100 rounded-xl p-8 h-96 mb-8">
          <CostBarChart data={budgetData} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {budgetData.map((budget, idx) => (
            <div key={idx} className="bg-white border-2 border-brand-100 rounded-lg p-6">
              <h3 className="font-heading font-bold text-brand-950 mb-2">{budget.scenario}</h3>
              <p className="text-3xl font-bold text-brand-TEAL mb-3">${budget.cost}</p>
              <p className="text-sm text-brand-700">{budget.details}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border-2 border-brand-100 rounded-lg p-8 mb-8">
          <h3 className="font-heading font-bold text-xl text-brand-950 mb-6">Detailed Budget Breakdown (Comfortable Solo)</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-brand-100 pb-3">
              <span className="text-brand-700">1BR Apartment (Casco Viejo/San Francisco)</span>
              <span className="font-bold text-brand-950">$1,300</span>
            </div>
            <div className="flex justify-between items-center border-b border-brand-100 pb-3">
              <span className="text-brand-700">Co-Working Membership (or Café)</span>
              <span className="font-bold text-brand-950">$200–300</span>
            </div>
            <div className="flex justify-between items-center border-b border-brand-100 pb-3">
              <span className="text-brand-700">Internet (Home + Mobile Backup)</span>
              <span className="font-bold text-brand-950">$60–80</span>
            </div>
            <div className="flex justify-between items-center border-b border-brand-100 pb-3">
              <span className="text-brand-700">Food (Mix of Restaurants + Groceries)</span>
              <span className="font-bold text-brand-950">$400–500</span>
            </div>
            <div className="flex justify-between items-center border-b border-brand-100 pb-3">
              <span className="text-brand-700">Transportation (Uber/Taxi/Metro)</span>
              <span className="font-bold text-brand-950">$50–80</span>
            </div>
            <div className="flex justify-between items-center border-b border-brand-100 pb-3">
              <span className="text-brand-700">Health Insurance (Optional)</span>
              <span className="font-bold text-brand-950">$80–150</span>
            </div>
            <div className="flex justify-between items-center border-b border-brand-100 pb-3">
              <span className="text-brand-700">Entertainment/Social</span>
              <span className="font-bold text-brand-950">$200–300</span>
            </div>
            <div className="flex justify-between items-center pt-3 bg-brand-50 -mx-8 px-8 py-3">
              <span className="font-bold text-brand-950">Total Monthly</span>
              <span className="font-heading font-bold text-2xl text-brand-TEAL">$2,280</span>
            </div>
          </div>
        </div>

        <div className="bg-brand-50 border-l-4 border-brand-TEAL p-6 rounded">
          <p className="font-semibold text-brand-950 mb-2">Budget Hacks for Nomads</p>
          <ul className="space-y-2 text-brand-700 text-sm">
            <li>• Eat where locals eat. A great meal in Panama costs $4–8. Tourist restaurants cost $12–20.</li>
            <li>• Use Uber/Easy Taxi instead of rental car. Much cheaper, no insurance hassle.</li>
            <li>• Book AirBnB monthly for 20–30% discount vs nightly rates.</li>
            <li>• Gym membership: ~$20–30/month at local gyms. Great for routine + community.</li>
            <li>• Happy hours: Casco Viejo has tons of 4–7pm drink specials ($2–4 beers).</li>
          </ul>
        </div>
      </section>

      {/* Panama City Scene */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8">Your Base: Panama City's Urban Nomad Hub</h2>
        <p className="text-brand-700 mb-8">
          Panama City is a dynamic, fast-paced metropolis with skyscrapers, waterfront views, and a thriving expat/nomad community. Explore all its neighborhoods with this interactive visualization:
        </p>
        <div className="bg-brand-50 border-2 border-brand-100 rounded-xl p-8 h-96">
          <PanamaCityScene />
        </div>
      </section>

      {/* Community */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <Users className="w-8 h-8 text-brand-TEAL" />
          The Nomad Community in Panama
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-brand-700 leading-relaxed">
            Panama has a vibrant, welcoming remote work community. Unlike emerging nomad destinations, Panama's infrastructure and community are mature and established.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-4">Community Groups</h3>
            <ul className="space-y-3 text-brand-700 text-sm">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-TEAL flex-shrink-0 mt-1" />
                <span><strong>Expats in Panama</strong> (Facebook): 28,000+ members, daily discussions</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-TEAL flex-shrink-0 mt-1" />
                <span><strong>Nomad List:</strong> Panama rated 3.5/5, 500+ nomads</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-TEAL flex-shrink-0 mt-1" />
                <span><strong>Meetup.com:</strong> Weekly tech, entrepreneur, digital nomad events</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-TEAL flex-shrink-0 mt-1" />
                <span><strong>Selina Events:</strong> Regular social meetups, networking dinners</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-4">Annual Events</h3>
            <ul className="space-y-3 text-brand-700 text-sm">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-TEAL flex-shrink-0 mt-1" />
                <span><strong>Panama Tech Summit:</strong> Annual conference for entrepreneurs</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-TEAL flex-shrink-0 mt-1" />
                <span><strong>Global Entrepreneur Summit:</strong> Connects founders & investors</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-TEAL flex-shrink-0 mt-1" />
                <span><strong>Coworking Month:</strong> May celebration of remote work community</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-TEAL flex-shrink-0 mt-1" />
                <span><strong>Fiestas de Casco Viejo:</strong> Monthly street party in the old town</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-8">
          <h3 className="font-heading font-bold text-xl text-brand-950 mb-4">Why the Community Works Here</h3>
          <ul className="space-y-3 text-brand-700">
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <span><strong>Mature infrastructure:</strong> No "pioneering" nonsense—hospitals, banks, coworking all work.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <span><strong>Stable currency:</strong> USD means predictable costs, no daily peso/colón volatility stress.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <span><strong>Diverse community:</strong> 150+ nationalities in Panama, expat-friendly government policies.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <span><strong>Real city:</strong> Not just tourists—Panama is a living, working city with depth.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Comparison */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8">Panama vs Other Nomad Destinations</h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-brand-50 border-2 border-brand-100">
                <th className="border-2 border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">Factor</th>
                <th className="border-2 border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">Panama</th>
                <th className="border-2 border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">Medellin (Colombia)</th>
                <th className="border-2 border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">Mexico City</th>
                <th className="border-2 border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">Lisbon (Portugal)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-2 border-brand-100">
                <td className="border-2 border-brand-100 px-4 py-3 font-semibold text-brand-950">Cost of Living</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">$1,500–2,500</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">$1,200–2,000</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">$1,800–2,800</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">$2,500–3,500</td>
              </tr>
              <tr className="border-2 border-brand-100 bg-brand-50">
                <td className="border-2 border-brand-100 px-4 py-3 font-semibold text-brand-950">Visa Ease</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">180 days free</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">90 days free</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">180 days free</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">90 days (EU visa issues)</td>
              </tr>
              <tr className="border-2 border-brand-100">
                <td className="border-2 border-brand-100 px-4 py-3 font-semibold text-brand-950">Internet Quality</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-TEAL font-bold">100–500 Mbps</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">50–200 Mbps</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">100–500 Mbps</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">100–300 Mbps</td>
              </tr>
              <tr className="border-2 border-brand-100 bg-brand-50">
                <td className="border-2 border-brand-100 px-4 py-3 font-semibold text-brand-950">Tax on Foreign Income</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-TEAL font-bold">0%</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">0% (residency-dependent)</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">0–15%</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">10–48%</td>
              </tr>
              <tr className="border-2 border-brand-100">
                <td className="border-2 border-brand-100 px-4 py-3 font-semibold text-brand-950">Timezone Match (US ET)</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-TEAL font-bold">Same (-5)</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">-5 (same)</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">-5 (same in winter)</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">+5 (5 hours ahead)</td>
              </tr>
              <tr className="border-2 border-brand-100 bg-brand-50">
                <td className="border-2 border-brand-100 px-4 py-3 font-semibold text-brand-950">Community Size</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-TEAL font-bold">10,000+ nomads</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">8,000+ nomads</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">50,000+ nomads</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">30,000+ nomads</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-brand-50 border-l-4 border-brand-TEAL p-6 rounded">
          <p className="font-semibold text-brand-950 mb-2">Panama's Unique Advantage</p>
          <p className="text-brand-700">
            Panama combines the affordability of Medellin, the tax benefits of many countries, the timezone alignment of Mexico City, and the stability of a USD-based economy. It's the sweet spot: good internet, low cost, no foreign income tax, easy visa, same timezone as your clients, and a mature infrastructure that actually works.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-12">Frequently Asked Questions: Digital Nomads in Panama</h2>

        <div className="space-y-6">
          {faqData.map((faq, idx) => (
            <details
              key={idx}
              className="bg-white border-2 border-brand-100 rounded-lg p-6 cursor-pointer group"
            >
              <summary className="font-heading font-bold text-lg text-brand-950 flex items-center gap-3 select-none">
                <span className="text-2xl text-brand-TEAL group-open:rotate-180 transition-transform">
                  ▶
                </span>
                {faq.question}
              </summary>
              <p className="text-brand-700 mt-4 ml-8 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-brand-TEAL to-brand-950 text-white rounded-2xl max-w-4xl mx-auto px-8 py-16 mb-16">
        <h2 className="text-4xl font-heading font-bold mb-6">Ready to Make Panama Your Base?</h2>
        <p className="text-xl mb-8 opacity-95 leading-relaxed max-w-2xl">
          We've covered the visa, tax, internet, neighborhoods, and budget. The next step is connecting with our community, booking an AirBnB, and experiencing Panama firsthand.
        </p>
        <p className="text-lg mb-8 opacity-90">
          <strong>Join thousands of successful digital nomads building their best life in Panama.</strong>
        </p>
        <Link
          href={`/${lang}/contacto`}
          className="inline-block bg-white text-brand-TEAL font-bold py-4 px-8 rounded-lg hover:bg-brand-50 transition-colors text-lg"
        >
          Connect with Our Nomad Community
        </Link>
      </section>

      {/* Key Takeaways */}
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8">Digital Nomad Guide: Key Takeaways</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL" />
              0% Foreign Tax
            </h3>
            <p className="text-brand-700 text-sm">
              Your remote income is never taxed by Panama. Keep more of what you earn.
            </p>
          </div>
          <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL" />
              180-Day Visa
            </h3>
            <p className="text-brand-700 text-sm">
              Free 180-day tourist visa. No paperwork, automatic on arrival. Loop after 6 months.
            </p>
          </div>
          <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL" />
              $1,500–2,500/month
            </h3>
            <p className="text-brand-700 text-sm">
              Live comfortably in Panama City for what US city co-working costs. Great value.
            </p>
          </div>
          <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL" />
              EST Timezone
            </h3>
            <p className="text-brand-700 text-sm">
              Same timezone as US East Coast. Perfect for US clients. No schedule friction.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
