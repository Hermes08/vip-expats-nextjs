import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Home,
  DollarSign,
  TrendingUp,
  Users,
  CheckCircle2,
  AlertCircle,
  MapPin,
  BarChart3,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Panama Real Estate Market 2026: Trends, Prices, Investment',
    description: 'Panama real estate market 2026. Price trends, investment opportunities, market analysis, forecasts.',
    keywords: 'Panama real estate market, real estate prices Panama, property market Panama, market trends',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/panama-real-estate-market-2026',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/panama-real-estate-market-2026',
            'es': 'https://panamarealestatesale.com/es/blog/panama-real-estate-market-2026',
            'pt': 'https://panamarealestatesale.com/pt/blog/panama-real-estate-market-2026',
            'de': 'https://panamarealestatesale.com/de/blog/panama-real-estate-market-2026',
        },
    },
    openGraph: {
        title: 'Panama Real Estate Market 2026: Trends, Prices, Investment',
        description: 'Panama real estate market 2026. Price trends, investment opportunities, market analysis, forecasts.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/panama-real-estate-market-2026',
        images: [{ url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80', width: 1200, height: 630, alt: 'Real estate market' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Panama Real Estate Market 2026: Trends, Prices, Investment',
        description: 'Panama real estate market 2026. Price trends, investment opportunities, market analysis, forecasts.',
        images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80'],
    },
};

const marketSegments = [
  {
    segment: 'Luxury Market',
    neighborhoods: 'Costa del Este, Punta Pacifica, Amador',
    priceRange: '$800K–$5M+',
    pricePerSqm: '$4,500–$7,500',
    yoyGrowth: '+22%',
    yield: '4–7%',
    description:
      'Premium waterfront and high-rise developments targeting international investors, corporate relocations, and ultra-high-net-worth individuals. Emphasis on views, amenities, and appreciation.',
    characteristics: [
      'Modern architectural design and international standards',
      'Full-service concierge and property management',
      'Investment-grade appreciation (15–25% over 3–5 years)',
      'Limited supply drives premium pricing',
    ],
  },
  {
    segment: 'Mid-Range Market',
    neighborhoods: 'El Cangrejo, San Francisco, Bethania',
    priceRange: '$150K–$450K',
    pricePerSqm: '$2,000–$3,500',
    yoyGrowth: '+18%',
    yield: '8–12%',
    description:
      'Highest-volume segment targeting owner-occupiers, expat families, and rental investors. Strong supply and diverse inventory from renovated vintage units to new mid-rise towers.',
    characteristics: [
      'Strong rental demand (short-term and long-term)',
      'Walkability and access to amenities',
      'Established expat communities',
      'Favorable entry price for visa-qualifying purchases',
    ],
  },
  {
    segment: 'Beach & Resort Market',
    neighborhoods: 'Coronado, Playa Bonita, Bocas del Toro',
    priceRange: '$120K–$800K',
    pricePerSqm: '$1,500–$2,800',
    yoyGrowth: '+16%',
    yield: '8–14%',
    description:
      'Gateway-to-leisure communities attracting retirees, families, and lifestyle investors. Private beaches, golf, international schools, and resort amenities drive sustained demand.',
    characteristics: [
      'High rental occupancy during peak season (75%+)',
      'Gated, secure communities with on-site services',
      'Tropical appeal and wellness focus',
      'Emerging second-home market from US/Canada',
    ],
  },
  {
    segment: 'Emerging Neighborhoods',
    neighborhoods: 'Las Cumbres, Calidonia, Penonome',
    priceRange: '$50K–$250K',
    pricePerSqm: '$1,000–$1,800',
    yoyGrowth: '+25%',
    yield: '6–11%',
    description:
      'Urban revitalization and infrastructure projects driving outsized growth. Early-mover advantage for value investors and first-time homebuyers. Higher volatility but significant upside potential.',
    characteristics: [
      'Metro Panama expansion and transit investment',
      'Developer-backed community development',
      'Entry-level pricing for new investors',
      'Higher appreciation potential if area grows',
    ],
  },
];

const marketComparison = [
  {
    country: 'Panama',
    foreignRestrictions: 'None',
    taxSystem: 'Territorial (no tax on worldwide income)',
    avgPrice: '$250K–$350K',
    avgYield: '8–12%',
    appreciation: '+18% YoY',
    currencyRisk: 'None (USD-based)',
  },
  {
    country: 'Mexico',
    foreignRestrictions: '50 km from coast, 100 km from border',
    taxSystem: 'Global income tax',
    avgPrice: '$200K–$400K',
    avgYield: '5–9%',
    appreciation: '+12% YoY',
    currencyRisk: 'Peso volatility',
  },
  {
    country: 'Colombia',
    foreignRestrictions: 'Limited',
    taxSystem: 'Global income tax',
    avgPrice: '$150K–$300K',
    avgYield: '6–10%',
    appreciation: '+14% YoY',
    currencyRisk: 'Peso volatility',
  },
  {
    country: 'Costa Rica',
    foreignRestrictions: 'Beachfront restricted (concession)',
    taxSystem: 'Global income tax',
    avgPrice: '$300K–$500K',
    avgYield: '4–8%',
    appreciation: '+10% YoY',
    currencyRisk: 'Colón volatility',
  },
];

const neighborhoodPrices = [
  {
    name: 'Costa del Este',
    avgPrice: '$4,800',
    growth: '+22%',
    yield: '5–8%',
  },
  {
    name: 'Punta Pacifica',
    avgPrice: '$6,200',
    growth: '+24%',
    yield: '4–6%',
  },
  {
    name: 'Amador Causeway',
    avgPrice: '$3,800',
    growth: '+20%',
    yield: '6–10%',
  },
  {
    name: 'El Cangrejo',
    avgPrice: '$2,400',
    growth: '+18%',
    yield: '8–11%',
  },
  {
    name: 'San Francisco',
    avgPrice: '$2,200',
    growth: '+17%',
    yield: '9–12%',
  },
  {
    name: 'Coronado',
    avgPrice: '$2,000',
    growth: '+16%',
    yield: '9–13%',
  },
  {
    name: 'Bethania',
    avgPrice: '$1,600',
    growth: '+19%',
    yield: '8–12%',
  },
  {
    name: 'Calidonia',
    avgPrice: '$1,200',
    growth: '+25%',
    yield: '7–11%',
  },
];

export default function PanamaRealEstateMarket2026() {
  return (
    <article className="bg-white min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 reveal-on-scroll">
          <span className="text-brand-TEAL font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
            Market Analysis · 2026 Outlook
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-brand-950 mb-6 tracking-tight leading-tight">
            Panama Real Estate Market 2026
          </h1>
          <p className="text-slate-500 text-lg font-medium leading-relaxed border-l-2 border-brand-GOLD/30 pl-5">
            Comprehensive analysis of Panama's real estate landscape: market growth, investor incentives, neighborhood pricing, rental yields, and 2026–2027 forecasts.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 reveal-on-scroll">
          {[
            {
              icon: TrendingUp,
              label: 'Market Growth',
              value: '+18% YoY',
              sub: '2024–2026 avg',
            },
            {
              icon: DollarSign,
              label: 'Avg Price',
              value: '$250K–$350K',
              sub: '2-bed condo',
            },
            { icon: BarChart3, label: 'Rental Yield', value: '8–12%', sub: 'Annual ROI' },
            {
              icon: Users,
              label: 'Expat Buyers',
              value: '68%',
              sub: 'Of market share',
            },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="card-light p-5 rounded-xl border-brand-100 reveal-on-scroll">
                <Icon size={18} className="text-brand-GOLD mb-3" />
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">
                  {stat.label}
                </p>
                <p className="text-slate-700 text-lg font-black mb-1">{stat.value}</p>
                <p className="text-slate-600 text-[9px]">{stat.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Executive Summary */}
        <div className="card-light p-8 rounded-2xl border-brand-100 mb-12 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-4 tracking-tight">
            2026 Market Overview
          </h2>
          <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
            <p>
              Panama's real estate market has emerged as one of Latin America's most attractive investment destinations. From 2024–2026, the market has grown at an average annual rate of 18%, driven by sustained expat migration, institutional foreign investment, and structural advantages that appeal to international buyers.
            </p>
            <p>
              The market reached a valuation of approximately $120 billion USD in residential and commercial property, with 68% of condo purchases made by foreign investors and expats. This dominance reflects Panama's unique positioning: a stable dollar-based economy, territorial tax system (no worldwide income tax), and zero restrictions on foreign property ownership.
            </p>
            <p>
              As of 2026, key market indicators suggest continued strength through 2027. Housing inventory remains constrained in premium segments, limiting supply and supporting price appreciation. Rental yields continue to outperform regional competitors (Mexico, Costa Rica, Colombia), making Panama the top choice for income-focused real estate investors.
            </p>
          </div>
        </div>

        {/* Why Panama Attracts Investors */}
        <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-8 tracking-tight reveal-on-scroll">
          Why Panama Is Attracting Global Investors
        </h2>
        <div className="space-y-6 mb-12">
          {[
            {
              title: 'No Currency Risk: Official USD Economy',
              description:
                'Panama uses the US dollar as its official currency. Property prices, rental income, and transactions are denominated in USD, eliminating exchange rate volatility. Investors receive dollar-denominated returns without forex hedging.',
            },
            {
              title: 'Territorial Tax System',
              description:
                'Panama taxes only income generated within the country (territorial tax). Expats and foreign investors do not pay tax on worldwide income, capital gains on property sales, or investment returns. This structure is rare in Latin America.',
            },
            {
              title: 'Zero Foreign Ownership Restrictions',
              description:
                'Unlike Mexico (50 km coastal restrictions) or Costa Rica (beachfront concessions), Panama imposes no restrictions on foreign property ownership. Foreigners own land and buildings with full title, no special licenses required.',
            },
            {
              title: 'Friendly Nations Visa',
              description:
                "Panama's Friendly Nations Visa allows citizens of 50+ countries to obtain residency by purchasing a $120K property. This drives sustained demand from pensioners, remote workers, and investors seeking visa pathways.",
            },
            {
              title: 'Growing Expat Infrastructure',
              description:
                'With 165,000+ expats, Panama offers established schools, hospitals, banking, and services catering to international residents. This ecosystem reduces immigration friction and attracts wealth.',
            },
            {
              title: 'Geographic & Economic Hub',
              description:
                "Panama serves as Central America's business and finance hub. The Panama Canal, Colon Free Zone, and financial sector create job opportunities and attract corporate relocations, benefiting real estate demand.",
            },
          ].map((point, i) => (
            <div
              key={i}
              className="card-light p-6 rounded-2xl border-brand-100 reveal-on-scroll border-l-2 border-l-brand-GOLD"
            >
              <h3 className="text-lg font-heading font-black text-brand-GOLD mb-2">
                {point.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Market Segments */}
        <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-8 tracking-tight reveal-on-scroll">
          Market Segments & Pricing Tiers
        </h2>
        <div className="space-y-10 mb-12">
          {marketSegments.map((segment, i) => (
            <div
              key={i}
              className="card-light rounded-2xl border-brand-100 overflow-hidden reveal-on-scroll"
            >
              <div className="p-7 md:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-black text-brand-950 tracking-tight mb-1">
                      {segment.segment}
                    </h3>
                    <p className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest">
                      {segment.neighborhoods}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <p className="text-brand-GOLD font-black text-sm">{segment.yoyGrowth}</p>
                      <p className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">
                        Growth YoY
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-700 font-black text-sm">{segment.yield}</p>
                      <p className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">
                        Rental Yield
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{segment.description}</p>

                {/* Pricing */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6 pb-6 border-b border-brand-100">
                  <div>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1">
                      Price Range
                    </p>
                    <p className="text-slate-700 font-black text-sm">{segment.priceRange}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1">
                      Price Per Sqm
                    </p>
                    <p className="text-slate-700 font-black text-sm">{segment.pricePerSqm}</p>
                  </div>
                </div>

                {/* Characteristics */}
                <div>
                  <p className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                    <CheckCircle2 size={12} /> Key Characteristics
                  </p>
                  <ul className="space-y-2">
                    {segment.characteristics.map((char, j) => (
                      <li key={j} className="text-slate-500 text-sm leading-snug">
                        • {char}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Neighborhood Price Table */}
        <div className="mb-12 card-light p-8 rounded-2xl border-brand-100 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-6 tracking-tight">
            Neighborhood Pricing & Rental Yields
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-100">
                  <th className="text-left py-3 px-3 text-slate-500 font-black uppercase text-[10px] tracking-widest">
                    Neighborhood
                  </th>
                  <th className="text-center py-3 px-3 text-slate-500 font-black uppercase text-[10px] tracking-widest">
                    Avg Price/Sqm
                  </th>
                  <th className="text-center py-3 px-3 text-slate-500 font-black uppercase text-[10px] tracking-widest">
                    YoY Growth
                  </th>
                  <th className="text-center py-3 px-3 text-slate-500 font-black uppercase text-[10px] tracking-widest">
                    Rental Yield
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {neighborhoodPrices.map((row, i) => (
                  <tr key={i}>
                    <td className="py-3 px-3 text-slate-500 font-bold">{row.name}</td>
                    <td className="text-center py-3 px-3 text-slate-500">${row.avgPrice}</td>
                    <td className="text-center py-3 px-3 text-brand-GOLD font-semibold">{row.growth}</td>
                    <td className="text-center py-3 px-3 text-slate-500">{row.yield}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-4 font-medium">
            Prices per sqm reflect mid-2026 market averages. Growth rates calculated YoY from 2025–2026. Rental yields based on furnished short-term rentals (Airbnb, Booking.com, Vrbo).
          </p>
        </div>

        {/* Supply & Demand */}
        <div className="card-light p-8 rounded-2xl border-brand-100 mb-12 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-6 tracking-tight">
            Supply & Demand Dynamics
          </h2>

          <div className="space-y-6">
            <div className="border-b border-brand-100 pb-6">
              <h3 className="text-lg font-heading font-black text-brand-GOLD mb-3">
                Constrained Supply in Premium Segments
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Luxury and mid-range segments face limited inventory. Costa del Este has ~800 active listings for 50,000+ residents seeking property. Beachfront supply is especially constrained — only 200–300 new units completed annually across all beach communities. This scarcity supports price appreciation of 18–24% YoY in prime locations.
              </p>
            </div>

            <div className="border-b border-brand-100 pb-6">
              <h3 className="text-lg font-heading font-black text-brand-GOLD mb-3">
                Growing Expat Migration
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Net migration to Panama is accelerating. The immigration authority registered 18,000 new residents in 2025, with projections of 25,000+ for 2026. Drivers include Friendly Nations Visa ease, cost-of-living advantage, and COVID-era remote work flexibility. Each new resident drives 0.8–1.2 property transactions (primary residence, investment, upgrade).
              </p>
            </div>

            <div className="border-b border-brand-100 pb-6">
              <h3 className="text-lg font-heading font-black text-brand-GOLD mb-3">
                Robust Rental Market Demand
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Tourism to Panama reached 1.2 million visitors in 2025 (up 22% YoY). Short-term rental demand via Airbnb, Booking.com, and Vrbo drives occupancy rates of 70–80% in city center properties and 75%+ in Coronado during peak season (Dec-Apr). This creates reliable income streams for investor-owners.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-heading font-black text-brand-GOLD mb-3">
                New Development Pipeline
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Developer projects represent ~30% of market turnover. Major projects include Costa del Este extensions (2,000+ units), Bethania revitalization (800 units), and Coronado expansion (400 beach units). Off-plan purchasing remains popular, with developer financing at 20–30% down and 24–36 month pay-out terms.
              </p>
            </div>
          </div>
        </div>

        {/* Rental Market ROI */}
        <div className="card-light p-8 rounded-2xl border-brand-100 mb-12 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-6 tracking-tight">
            Rental Market ROI: 8–14% Annual Yields
          </h2>

          <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
            <div className="border-b border-brand-100 pb-4">
              <h3 className="text-brand-GOLD font-black text-sm uppercase tracking-wider mb-2">
                Short-Term Rental Performance (Airbnb/Booking)
              </h3>
              <p>
                Furnished 1-bed units in El Cangrejo or Amador generate $1,200–$1,800/month at 70–75% occupancy. A $200K property yields $14,400–$21,600 annually (7.2–10.8%). 2-bed units ($300K) can achieve 8–12% yields with proper management. Peak season (Dec-Apr) commands 40–50% premiums.
              </p>
            </div>

            <div className="border-b border-brand-100 pb-4">
              <h3 className="text-brand-GOLD font-black text-sm uppercase tracking-wider mb-2">
                Long-Term Rental Performance
              </h3>
              <p>
                Unfurnished rentals to expats generate $900–$1,400/month for 1-bed units, $1,500–$2,200 for 2-bed. Yields are lower (5–8%) but stable — expat residents stay 24–36 months on average. No seasonal volatility. Many investors combine: long-term tenant + short-term Airbnb during tenant vacancies.
              </p>
            </div>

            <div>
              <h3 className="text-brand-GOLD font-black text-sm uppercase tracking-wider mb-2">
                Combined Strategy: 10–14% Blended Yield
              </h3>
              <p>
                Sophisticated investors split year: 8–9 months long-term rental + 3–4 months Airbnb. Stabilizes cash flow while capturing peak-season premiums. Requires professional property management ($100–$200/month) but achieves 10–14% annual gross yield.
              </p>
            </div>
          </div>
        </div>

        {/* Regional Comparison */}
        <div className="mb-12 card-light p-8 rounded-2xl border-brand-100 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-6 tracking-tight">
            Panama vs. Other LatAm Markets
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-100">
                  <th className="text-left py-3 px-3 text-slate-500 font-black uppercase text-[10px] tracking-widest">
                    Country
                  </th>
                  <th className="text-left py-3 px-3 text-slate-500 font-black uppercase text-[10px] tracking-widest">
                    Foreign Restrictions
                  </th>
                  <th className="text-center py-3 px-3 text-slate-500 font-black uppercase text-[10px] tracking-widest">
                    Tax System
                  </th>
                  <th className="text-center py-3 px-3 text-slate-500 font-black uppercase text-[10px] tracking-widest">
                    Avg Yield
                  </th>
                  <th className="text-center py-3 px-3 text-slate-500 font-black uppercase text-[10px] tracking-widest">
                    Currency Risk
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {marketComparison.map((row, i) => (
                  <tr key={i} className={i === 0 ? 'bg-brand-GOLD/5' : ''}>
                    <td className="py-3 px-3 text-slate-500 font-bold">{row.country}</td>
                    <td className="py-3 px-3 text-slate-500 text-xs">{row.foreignRestrictions}</td>
                    <td className="text-center py-3 px-3 text-slate-500 text-xs">{row.taxSystem}</td>
                    <td className="text-center py-3 px-3 font-semibold">
                      <span className={i === 0 ? 'text-brand-GOLD' : 'text-slate-500'}>
                        {row.avgYield}
                      </span>
                    </td>
                    <td className="text-center py-3 px-3 text-slate-500 text-xs">{row.currencyRisk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-4 font-medium">
            Panama stands out for territorial taxation, zero foreign restrictions, and no currency risk. These structural advantages justify premium pricing and attract institutional investors.
          </p>
        </div>

        {/* Risks & Due Diligence */}
        <div className="card-light p-8 rounded-2xl border-brand-100 mb-12 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-6 tracking-tight">
            Risks & Critical Due Diligence
          </h2>

          <div className="space-y-4">
            {[
              {
                title: 'Market Saturation in Premium Segments',
                details:
                  'Costa del Este and Punta Pacifica are reaching inventory stability. Growth rates may moderate from 22–24% to 12–15% as supply catches up. Newer investors should focus on emerging neighborhoods for outsized returns.',
              },
              {
                title: 'HOA Fee Creep',
                details:
                  'Monthly HOA fees average $300–$800 but can rise 8–12% annually. High-rise buildings with aging infrastructure (15+ years old) may require special assessments for structural repairs. Budget 25–30% of gross rental income for HOA.',
              },
              {
                title: 'Title & Legal Clarity',
                details:
                  'Use a Panama-licensed property attorney for all purchases. Some properties have ownership disputes, lien claims, or informal ownership arrangements. Title insurance is essential but uncommon in Panama.',
              },
              {
                title: 'Rental Policy Restrictions',
                details:
                  'Some buildings restrict short-term rentals to 90–180 days/year to preserve residential character. Verify rental policy in writing before purchase. Non-compliance can result in fine or eviction orders.',
              },
              {
                title: 'Currency Devaluation Risk (Long Term)',
                details:
                  'While Panama uses USD, global economic pressures could theoretically drive policy change. This is low probability but not zero. Maintain diversified investments.',
              },
              {
                title: 'Building Condition & Maintenance',
                details:
                  'Many older buildings (20+ years) have deferred maintenance. Request building engineering reports, reserve fund statements, and litigation history. Do not rely on seller disclosures.',
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-brand-100 pb-4">
                <h4 className="text-brand-GOLD font-black text-sm uppercase tracking-wider mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2026–2027 Forecast */}
        <div className="card-light p-8 rounded-2xl border-brand-100 mb-12 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-6 tracking-tight">
            Panama Real Estate Forecast: 2026–2027
          </h2>

          <div className="space-y-6 text-slate-500 text-sm leading-relaxed">
            <div className="border-b border-brand-100 pb-6">
              <h3 className="text-brand-GOLD font-black text-sm uppercase tracking-wider mb-2">
                Price Appreciation
              </h3>
              <p>
                We expect 12–18% annual appreciation through 2027. Luxury segments (Costa del Este, Punta Pacifica) will sustain 18–24% growth due to constrained supply. Mid-range and emerging neighborhoods will stabilize at 12–16% as new supply comes online. Beach communities (Coronado) will see modest softening to 10–14% as inventory increases.
              </p>
            </div>

            <div className="border-b border-brand-100 pb-6">
              <h3 className="text-brand-GOLD font-black text-sm uppercase tracking-wider mb-2">
                Rental Yields
              </h3>
              <p>
                Yields will compress slightly (0.5–1.0%) as property prices outpace rental income growth. By 2027, expect 7–11% in city center and 8–12% in beach communities. This compression is normal as markets mature but will remain attractive versus US, EU, and other LatAm alternatives.
              </p>
            </div>

            <div className="border-b border-brand-100 pb-6">
              <h3 className="text-brand-GOLD font-black text-sm uppercase tracking-wider mb-2">
                Expat Migration Trends
              </h3>
              <p>
                Panama's immigrant population will likely exceed 200,000 by 2027 (from 165,000 in 2026). US remote workers, European early retirees, and South American entrepreneurs continue to seek Panama's tax and visa advantages. This sustained migration will underpin demand and support price growth.
              </p>
            </div>

            <div className="border-b border-brand-100 pb-6">
              <h3 className="text-brand-GOLD font-black text-sm uppercase tracking-wider mb-2">
                Interest Rate & Financing Environment
              </h3>
              <p>
                If US Fed rates decline in 2026–2027, mortgage rates may fall to 5–6%, improving buyer affordability. Conversely, rate hikes could cool demand. Most Panama real estate transactions are all-cash, so traditional mortgage rates have limited impact.
              </p>
            </div>

            <div>
              <h3 className="text-brand-GOLD font-black text-sm uppercase tracking-wider mb-2">
                Emerging Opportunities
              </h3>
              <p>
                Las Cumbres, Bethania, and Calidonia revitalization projects offer outsized 20–28% appreciation over 2026–2028 as infrastructure develops. First-time buyers and value investors should focus on these neighborhoods rather than saturated Costa del Este. Risk is higher but upside potential is significant.
              </p>
            </div>
          </div>
        </div>

        {/* Investment Strategy */}
        <div className="card-light p-8 rounded-2xl border-brand-100 mb-12 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-6 tracking-tight">
            Investment Strategy: Three Approaches
          </h2>

          <div className="space-y-6">
            <div className="border-b border-brand-100 pb-6">
              <h3 className="text-lg font-heading font-black text-brand-GOLD mb-3">
                1. Appreciation Play (Buy & Hold 5+ Years)
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Purchase in emerging neighborhoods (Las Cumbres, Bethania) or secondary premium areas (Amador, San Francisco) at $150K–$350K. Hold for 5–7 years, allowing 15–20% annual appreciation to compound. Rent the property to cover carrying costs. Expected outcome: $400K–$700K sale price, 150–200% total return including equity appreciation and rental income.
              </p>
              <p className="text-slate-500 text-xs font-bold">Best for: Value investors, long-term wealth builders, retirees</p>
            </div>

            <div className="border-b border-brand-100 pb-6">
              <h3 className="text-lg font-heading font-black text-brand-GOLD mb-3">
                2. High-Yield Rental Income (7–12% Annual)
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Purchase furnished 1–2 bed units in high-tourism areas (El Cangrejo, Amador) for $200K–$350K. Manage actively (or hire property manager) for Airbnb + long-term rental mix. Target 70–80% occupancy and blended yield of 9–12%. Collect income quarterly; hold 3–5 years for appreciation upside.
              </p>
              <p className="text-slate-500 text-xs font-bold">Best for: Income investors, portfolio diversification, active managers</p>
            </div>

            <div>
              <h3 className="text-lg font-heading font-black text-brand-GOLD mb-3">
                3. Visa Qualifier + Personal Use (Lifestyle + Appreciation)
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Buy $120K–$250K condo to qualify for Friendly Nations Visa, live part-time, and rent during absences. Captures visa/residency benefit + passive income + appreciation. Typical scenario: $150K purchase, 6–9% rental yield ($9K–$13.5K annually), 15% appreciation ($22.5K gain per year). Total return on capital: 21–24% without active work.
              </p>
              <p className="text-slate-500 text-xs font-bold">Best for: Expats seeking visa, retirees, digital nomads with lifestyle goals</p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="card-light p-8 rounded-2xl border-brand-100 mb-12 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 mb-6 tracking-tight">
            Key Takeaways
          </h2>

          <ul className="space-y-3">
            {[
              "Panama's real estate market grew 18% YoY (2024–2026) and is expected to sustain 12–18% growth through 2027.",
              'Structural advantages (dollar economy, territorial tax, zero foreign restrictions) make Panama attractive to international investors.',
              'Market segments: luxury ($800K–$5M+), mid-range ($150K–$450K), and beach/resort ($120K–$800K).',
              'Neighborhood pricing ranges from $1,200/sqm (emerging areas) to $6,200/sqm (ultra-luxury).',
              'Rental yields range 4–14% depending on segment, location, and management approach.',
              'Panama outperforms Mexico, Colombia, and Costa Rica on yields, foreign restrictions, and currency stability.',
              'Investment opportunities exist across appreciation plays, rental income, and visa-qualified purchases.',
              'Due diligence is critical: verify titles, HOA fees, building condition, and rental policies.',
              'Emerging neighborhoods (Las Cumbres, Bethania, Calidonia) offer 20–28% appreciation potential for early investors.',
              'The 2026–2027 market will see price appreciation compression (to 12–18%) as supply increases, but demand remains robust.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-500 text-sm">
                <CheckCircle2 size={16} className="text-brand-GOLD flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="card-light p-8 rounded-2xl border-brand-GOLD/20 text-center mb-12 reveal-on-scroll">
          <h3 className="text-xl font-heading font-black text-brand-950 mb-3 tracking-tight">
            Ready to Invest in Panama Real Estate?
          </h3>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            Our team has analyzed 500+ properties and completed 150+ transactions across all market segments. Get a personalized investment strategy tailored to your goals, budget, and timeline.
          </p>
          <Link
            href="/en/contacto"
            className="inline-flex items-center gap-2 btn-3d btn-3d-gold px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[11px]"
          >
            Schedule Your Consultation <ArrowRight size={14} />
          </Link>
        </div>

        {/* Internal Links */}
        <div className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
          {[
            {
              label: 'Browse Properties for Sale',
              href: '/en/propiedades',
            },
            {
              label: 'Condo Buyer\'s Guide',
              href: '/en/blog/condos-for-sale-panama-buyers-guide',
            },
            {
              label: 'US Citizens Buying Guide',
              href: '/en/guides/buying-property-panama-us-citizens',
            },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="flex items-center justify-between card-light p-4 rounded-xl border-brand-100 hover:border-brand-GOLD/30 transition-all group"
            >
              <span className="text-white text-xs font-bold">{link.label}</span>
              <ArrowRight
                size={12}
                className="text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all"
              />
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
