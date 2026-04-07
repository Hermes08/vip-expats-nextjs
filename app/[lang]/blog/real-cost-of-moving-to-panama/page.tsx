import type { Metadata } from 'next';
import Link from 'next/link';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';
import {
  DollarSign,
  Plane,
  Home,
  Heart,
  Briefcase,
  Phone,
  Calendar,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';



export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const slug = 'real-cost-of-moving-to-panama';
  const domain = 'https://panamarealestatesale.com';
  const canonical = `${domain}/${lang}/blog/${slug}`;

  return {
    title: 'Real Cost of Moving to Panama 2026: Budget Breakdown Guide',
    description: 'Real cost of moving to Panama. Shipping, visa, housing, setup, monthly expenses breakdown.',
    keywords: 'cost of moving to Panama, moving expenses Panama, budget moving to Panama, cost of living Panama',
    alternates: {
        canonical,
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/real-cost-of-moving-to-panama',
            'es': 'https://panamarealestatesale.com/es/blog/real-cost-of-moving-to-panama',
            'pt': 'https://panamarealestatesale.com/pt/blog/real-cost-of-moving-to-panama',
            'de': 'https://panamarealestatesale.com/de/blog/real-cost-of-moving-to-panama',
        },
    },
    openGraph: {
        title: 'Real Cost of Moving to Panama 2026: Budget Breakdown Guide',
        description: 'Real cost of moving to Panama. Shipping, visa, housing, setup, monthly expenses breakdown.',
        type: 'article',
        url: canonical,
        images: [{ url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80', width: 1200, height: 630, alt: 'Moving costs' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Real Cost of Moving to Panama 2026: Budget Breakdown Guide',
        description: 'Real cost of moving to Panama. Shipping, visa, housing, setup, monthly expenses breakdown.',
        images: ['https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80'],
    },
};
}

const costBreakdownData = [
  { category: 'Budget Move', cost: 12000, details: 'Minimal belongings, shared housing' },
  { category: 'Comfortable Move', cost: 22000, details: '1BR apartment, quality belongings' },
  { category: 'Full Relocation', cost: 38000, details: 'Complete household, vehicle alternative' },
];

const costChartData = [
  { label: 'Budget Move', value: 12000, color: '#00C5CB' },
  { label: 'Comfortable', value: 22000, color: '#D4A843' },
  { label: 'Full Relocation', value: 38000, color: '#8b5cf6' },
];

const shippingCosts = [
  { type: '20ft Container (USA)', range: '$3,500–6,000', avgDoor: '$4,200' },
  { type: '40ft Container (USA)', range: '$5,500–9,000', avgDoor: '$6,800' },
  { type: 'Air Freight/lb', range: '$4–8', avgDoor: 'Typical: $1,200–2,800' },
];

const visaCosts = [
  { type: 'Pensionado Visa Attorney', cost: '$1,500–2,500' },
  { type: 'Friendly Nations Visa Attorney', cost: '$1,500–3,000' },
  { type: 'Government Visa Fee', cost: '$250–800' },
  { type: 'Apostille Services (per doc)', cost: '$75–200' },
];

const housingSetupCosts = [
  { item: 'Security Deposit', cost: '1–2 months rent ($600–2,800)' },
  { item: 'First Month Rent', cost: '$600–1,400' },
  { item: 'Utilities Connection', cost: '$200–400' },
  { item: 'Internet Installation', cost: '$50–100' },
];

const monthlyServiceCosts = [
  { service: 'Private Health Insurance', cost: '$80–200/person' },
  { service: 'Internet (fiber)', cost: '$40–80' },
  { service: 'Mobile Phone Plan', cost: '$25–60' },
  { service: 'Basic Utilities', cost: '$100–200' },
];

const bankingAndOther = [
  { item: 'Bank Account Opening Fee', cost: '$150–300', deposit: '$500–1,000 min' },
  { item: 'Phone/SIM Card', cost: '$20–50', deposit: 'Plan: $25–60/mo' },
  { item: 'Vehicle (used, local)', cost: '$8,000–25,000', deposit: 'Import NOT recommended' },
];

const faqData = [
  {
    question: 'Can I bring my car to Panama?',
    answer: 'Technically yes, but it\'s not recommended financially. Vehicle import duty is 30–50% of the car\'s value, making it extremely expensive. For example, a $20,000 car incurs $6,000–10,000 in duties alone. Most expats sell their vehicle and buy a used Japanese car locally (Honda, Toyota) for $8,000–25,000. This is far more economical.',
  },
  {
    question: 'What can I bring duty-free to Panama?',
    answer: 'Personal effects and household items that are over 5 years old are generally duty-free when establishing residency. This includes clothing, furniture, electronics (if used), and appliances. However, new items, new electronics, and appliances may incur 5–30% import duty. Always consult with a customs broker—they cost $300–500 but save thousands on duties by properly classifying items.',
  },
  {
    question: 'How long does shipping take from the USA?',
    answer: 'Ocean freight from Miami or Fort Lauderdale typically takes 4–7 days to reach Colón, Panama. Total door-to-door including customs clearance: 10–14 days. Air freight is much faster (3–4 days) but costs significantly more ($4–8/lb). Plan for 2–3 weeks total from pickup to delivery at your new home.',
  },
  {
    question: 'Do I need a lawyer to move to Panama?',
    answer: 'Not for the physical move, but yes for visa processing. Hiring a lawyer ($1,500–3,000) ensures your visa application is correct and avoids costly delays or rejections. They also handle document apostille, residency permits, and can advise on tax implications. Many also help with banking and property purchases. Well worth the investment.',
  },
  {
    question: 'What about pets—shipping costs?',
    answer: 'Pets require health certificates ($100–200), airline pet fees ($100–500 depending on size/airline), and quarantine is generally not required if properly documented. Door-to-door pet shipping services cost $1,500–3,500. Plan for vet visits and health requirements 4–6 weeks before travel.',
  },
  {
    question: 'Is it cheaper to ship or buy new furniture in Panama?',
    answer: 'For most bulk items (beds, couches, dining tables), it\'s cheaper to buy new in Panama. Furniture costs 20–40% less than the USA for quality pieces. Shipping vintage or sentimental items makes sense; shipping standard furniture rarely does. Rent furnished short-term first, then buy locally once you know your space.',
  },
];

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Real Cost of Moving to Panama 2026: Budget Breakdown Guide',
            description: 'Real cost of moving to Panama. Shipping, visa, housing, setup, monthly expenses breakdown.',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
            datePublished: '2026-01-20',
            dateModified: '2026-04-04',
            author: { '@type': 'Organization', name: 'VIP Expats Panama', url: 'https://panamarealestatesale.com' },
            publisher: { '@type': 'Organization', name: 'VIP Expats Panama', logo: { '@type': 'ImageObject', url: 'https://panamarealestatesale.com/og-image.jpg' } },
          }),
        }}
      />
    <article className="bg-brand-950 min-h-screen pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-white border-b-2 border-brand-100 mb-16">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-8 h-8 text-brand-TEAL" />
            <span className="text-sm font-semibold text-brand-TEAL tracking-wider uppercase">
              Complete Cost Breakdown
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-950 mb-6 leading-tight">
            Real Cost of Moving to Panama 2026
          </h1>
          <p className="text-xl text-brand-700 mb-8 max-w-2xl leading-relaxed">
            Every fee. Every dollar. No surprises. This is the transparency article nobody else has written—complete breakdown of moving costs to Panama with real figures across all categories.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white border-2 border-brand-TEAL rounded-lg px-6 py-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0" />
              <span className="text-brand-950 font-semibold">International Shipping Costs</span>
            </div>
            <div className="bg-white border-2 border-brand-TEAL rounded-lg px-6 py-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0" />
              <span className="text-brand-950 font-semibold">Visa & Legal Fees</span>
            </div>
            <div className="bg-white border-2 border-brand-TEAL rounded-lg px-6 py-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0" />
              <span className="text-brand-950 font-semibold">First-Month Setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Moving to Panama doesn't have to be a financial mystery. Unlike other countries that keep costs opaque, we're laying everything out: every shipping fee, every visa cost, every first-month expense. Whether you're budgeting $12,000 or $38,000, this guide has your numbers.
          </p>
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Panama is the most cost-effective country in Central America for relocation, especially compared to Costa Rica or Belize. The transparent tax system, dollar-based economy, and well-established expat infrastructure mean your money goes further and stays predictable.
          </p>
          <p className="text-lg text-brand-700 leading-relaxed">
            Let's break this down by phase: Planning & Preparation → International Transport → Legal & Visa → First-Month Housing & Setup → Ongoing Monthly Costs.
          </p>
        </div>
      </section>

      {/* Three-Tier Cost Overview */}
      <section className="bg-brand-50 border-2 border-brand-100 rounded-xl p-8 max-w-4xl mx-auto mb-16 mx-4">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-12 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-brand-TEAL" />
          Three Relocation Scenarios: What You'll Actually Spend
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {costBreakdownData.map((scenario, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-brand-100 rounded-lg p-6 hover:border-brand-TEAL transition-colors"
            >
              <h3 className="font-heading font-bold text-xl text-brand-950 mb-2">
                {scenario.category}
              </h3>
              <p className="text-3xl font-bold text-brand-TEAL mb-3">
                ${scenario.cost.toLocaleString()}
              </p>
              <p className="text-sm text-brand-700">
                {scenario.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Three.js Chart - Costs */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-2">First Year Relocation Costs by Scenario</h2>
        <p className="text-brand-700 mb-8">Interactive visualization of three relocation paths to Panama:</p>
        <div className="bg-brand-50 border-2 border-brand-100 rounded-xl p-8 h-96">
          <CostBarChart data={costChartData} />
        </div>
      </section>

      {/* International Shipping */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <Plane className="w-8 h-8 text-brand-TEAL" />
          International Shipping: Ocean & Air Freight
        </h2>
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            The biggest cost in a move is shipping your belongings. Panama has three primary ports (Colón, Balboa, Amador) making it a shipping hub. This drives competition and keeps costs lower than many alternatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-xl text-brand-950 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL" />
              Ocean Freight (Recommended)
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold text-brand-950">20ft Container</p>
                <p className="text-brand-700">$3,500–6,000 from USA (terminal to terminal)</p>
                <p className="text-sm text-brand-600 mt-1">Holds ~10,000 lbs, typical household</p>
              </li>
              <li>
                <p className="font-semibold text-brand-950">40ft Container</p>
                <p className="text-brand-700">$5,500–9,000 from USA</p>
                <p className="text-sm text-brand-600 mt-1">Holds ~20,000 lbs, full household + office</p>
              </li>
              <li>
                <p className="font-semibold text-brand-950">Door-to-Door Average</p>
                <p className="text-brand-700">$4,200 (includes inland transport, customs clearance)</p>
                <p className="text-sm text-brand-600 mt-1">Most expats choose this for convenience</p>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-xl text-brand-950 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL" />
              Air Freight (For Valuables)
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold text-brand-950">Cost per Pound</p>
                <p className="text-brand-700">$4–8/lb</p>
                <p className="text-sm text-brand-600 mt-1">Slower freight: $3–5/lb; Express: $6–12/lb</p>
              </li>
              <li>
                <p className="font-semibold text-brand-950">Typical Household Items</p>
                <p className="text-brand-700">$1,200–2,800 total</p>
                <p className="text-sm text-brand-600 mt-1">Jewelry, electronics, valuable antiques</p>
              </li>
              <li>
                <p className="font-semibold text-brand-950">Timeline</p>
                <p className="text-brand-700">3–4 days to Panama Pacifica (hub)</p>
                <p className="text-sm text-brand-600 mt-1">Door-to-door: 5–7 days total</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-brand-50 border-l-4 border-brand-TEAL p-6 rounded mb-8">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-brand-TEAL flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-brand-950 mb-2">Pro Tip: Hire a Customs Broker</p>
              <p className="text-brand-700">A customs broker costs $300–500 but can save thousands in duties by properly classifying items. They know which items qualify as personal effects (duty-free if 5+ years old) vs. new goods (5–30% duty).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Panama Customs & Import Duties */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8">Panama Customs & Import Duties: What's Taxed?</h2>

        <div className="bg-white border-2 border-brand-100 rounded-lg p-8 mb-8">
          <h3 className="font-heading font-bold text-xl text-brand-950 mb-6">Duty-Free Items (Personal Effects)</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <span className="text-brand-700"><strong>Household furniture & décor</strong> (if over 5 years old)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <span className="text-brand-700"><strong>Clothing & personal items</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <span className="text-brand-700"><strong>Used electronics</strong> (if clearly used, not new)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <span className="text-brand-700"><strong>Tools & professional equipment</strong> for personal use</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-brand-100 rounded-lg p-8 mb-8">
          <h3 className="font-heading font-bold text-xl text-brand-950 mb-6">Items Subject to Duty (5–30%)</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-brand-GOLD flex-shrink-0 mt-1" />
              <span className="text-brand-700"><strong>New appliances & electronics</strong> (5–30% depending on item)</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-brand-GOLD flex-shrink-0 mt-1" />
              <span className="text-brand-700"><strong>New furniture</strong> (10–25% duty)</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-brand-GOLD flex-shrink-0 mt-1" />
              <span className="text-brand-700"><strong>Vehicles</strong> (30–50% of declared value) — NOT recommended</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-brand-GOLD flex-shrink-0 mt-1" />
              <span className="text-brand-700"><strong>Books & media</strong> (variable, sometimes duty-free)</span>
            </li>
          </ul>
        </div>

        <p className="text-brand-700 leading-relaxed mb-6">
          The key to minimizing duties: ship used/older items (5+ years) and buy new items in Panama. This is especially true for appliances and furniture, which are competitively priced locally.
        </p>
      </section>

      {/* Visa & Legal Costs */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-brand-TEAL" />
          Visa & Legal Fees: Residency Pathways
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-brand-700 leading-relaxed">
            Most expats pursue one of three visa paths: Pensionado (passive income/retirement), Friendly Nations (self-employed/property owner), or Tourist Stay (temporary). Each has different costs and benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-lg text-brand-950 mb-4">Pensionado Visa</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-brand-700"><strong>Attorney Fee:</strong> $1,500–2,500</li>
              <li className="text-brand-700"><strong>Government Fee:</strong> $250–500</li>
              <li className="text-brand-700"><strong>Apostilles:</strong> $150–300 (3–5 documents)</li>
              <li className="text-brand-700"><strong>Total:</strong> $1,900–3,300</li>
            </ul>
            <p className="text-sm text-brand-600">Requires $1,000/month pension income minimum. Best for retirees with fixed income.</p>
          </div>

          <div className="bg-white border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-lg text-brand-950 mb-4">Friendly Nations Visa</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-brand-700"><strong>Attorney Fee:</strong> $1,500–3,000</li>
              <li className="text-brand-700"><strong>Government Fee:</strong> $300–800</li>
              <li className="text-brand-700"><strong>Economic Link (varies):</strong> $0–50,000</li>
              <li className="text-brand-700"><strong>Total:</strong> $1,800–53,800+</li>
            </ul>
            <p className="text-sm text-brand-600">Requires economic contribution: property purchase, job offer, or $200K investment. Most flexible for digital nomads.</p>
          </div>
        </div>

        <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-6">
          <h3 className="font-heading font-bold text-lg text-brand-950 mb-4">Tourist Visa (Temporary)</h3>
          <p className="text-brand-700 mb-3">
            <strong>Cost:</strong> $0 (automatically granted on arrival for 180 days)<br/>
            <strong>Timeline:</strong> 6 months renewable
          </p>
          <p className="text-sm text-brand-600">
            Perfect for first year. No lawyer needed, no fees. Use this time to explore neighborhoods, rent short-term, and decide if Panama is right for you. Transition to residency visa in Year 2 if satisfied.
          </p>
        </div>
      </section>

      {/* Housing Setup Costs */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <Home className="w-8 h-8 text-brand-TEAL" />
          First-Month Housing & Setup Costs
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-brand-700 leading-relaxed">
            Once you arrive in Panama, expect these one-time and first-month housing costs. Panama's rental market is competitive, especially in Casco Viejo, San Francisco, and Amador. Plan to arrive with cash or credit for deposits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {housingSetupCosts.map((cost, idx) => (
            <div key={idx} className="bg-white border-2 border-brand-100 rounded-lg p-6">
              <h3 className="font-heading font-bold text-brand-950 mb-2">{cost.item}</h3>
              <p className="text-2xl font-bold text-brand-TEAL">{cost.cost}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border-l-4 border-brand-TEAL p-6 rounded-lg mb-8">
          <h3 className="font-heading font-bold text-brand-950 mb-4 flex items-center gap-2">
            <Home className="w-5 h-5 text-brand-TEAL" />
            Monthly Rent Ranges by Neighborhood
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-brand-950 mb-2">Premium Neighborhoods</p>
              <ul className="text-brand-700 space-y-1 text-sm">
                <li>Casco Viejo (1BR): $1,000–1,800</li>
                <li>Amador (1BR): $1,200–2,000</li>
                <li>San Francisco (1BR): $1,100–1,700</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-brand-950 mb-2">Affordable/Local</p>
              <ul className="text-brand-700 space-y-1 text-sm">
                <li>El Cangrejo (1BR): $700–1,100</li>
                <li>Paitilla (1BR): $800–1,300</li>
                <li>Los Rios (1BR): $600–900</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Service & Insurance Costs */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <Heart className="w-8 h-8 text-brand-TEAL" />
          Monthly Services & Insurance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {monthlyServiceCosts.map((service, idx) => (
            <div key={idx} className="bg-white border-2 border-brand-100 rounded-lg p-6">
              <h3 className="font-heading font-bold text-brand-950 mb-2">{service.service}</h3>
              <p className="text-2xl font-bold text-brand-TEAL">{service.cost}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-8">
          <h3 className="font-heading font-bold text-xl text-brand-950 mb-6">Health Insurance for Expats</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-brand-950">Basic Plan (Under 60)</p>
                <p className="text-brand-700">$80–150/month covers major illnesses, hospital stays, outpatient care at network providers</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-brand-950">Comprehensive (Under 60)</p>
                <p className="text-brand-700">$150–280/month includes preventive care, maternity, dental and vision options</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-brand-950">Over 65</p>
                <p className="text-brand-700">$250–500/month plans specifically designed for older expats with pre-existing conditions</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-brand-950">Pensionado Benefit</p>
                <p className="text-brand-700">Pensionado visa holders receive 50% discount on hospital services. This is huge long-term savings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking & Other Setup */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <Phone className="w-8 h-8 text-brand-TEAL" />
          Banking, Phone & Vehicle Costs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {bankingAndOther.map((item, idx) => (
            <div key={idx} className="bg-white border-2 border-brand-100 rounded-lg p-6">
              <h3 className="font-heading font-bold text-brand-950 mb-3">{item.item}</h3>
              <p className="text-lg font-bold text-brand-TEAL mb-2">{item.cost}</p>
              <p className="text-sm text-brand-600">{item.deposit}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border-2 border-brand-100 rounded-lg p-8">
          <h3 className="font-heading font-bold text-xl text-brand-950 mb-6">Why NOT to Import a Vehicle</h3>
          <div className="space-y-4">
            <p className="text-brand-700">
              A $20,000 vehicle from the USA incurs 30–50% import duty ($6,000–10,000), making your total cost $26,000–30,000. Plus insurance, registration, and maintenance. By contrast, you can buy a reliable used Japanese car (Honda, Toyota) in Panama for $8,000–15,000, already registered and ready to go.
            </p>
            <p className="text-brand-700">
              <strong>The math:</strong> Import your car = $26,000+. Buy locally = $10,000. Save $16,000+ by purchasing in Panama. This applies to almost everyone.
            </p>
            <p className="text-brand-700">
              <strong>Exception:</strong> If you have a specialty or collector's vehicle, that's different. But for daily transport, buy local.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Chart */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8 flex items-center gap-3">
          <Calendar className="w-8 h-8 text-brand-TEAL" />
          12-Month Timeline: From Decision to Settled
        </h2>

        <div className="space-y-4">
          <div className="bg-white border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-2">Month 0–1: Research & Planning</h3>
            <p className="text-brand-700 mb-3">Budget: $500–2,000 (visa consultation, website research, exploratory trip optional)</p>
            <ul className="text-sm text-brand-600 space-y-1">
              <li>• Consult with immigration lawyer</li>
              <li>• Decide visa pathway (Pensionado vs Friendly Nations)</li>
              <li>• Get documents apostilled</li>
              <li>• Research shipping companies and get quotes</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-2">Month 2–3: Preparation & Shipment</h3>
            <p className="text-brand-700 mb-3">Budget: $5,000–15,000 (shipping, visa fees, initial logistics)</p>
            <ul className="text-sm text-brand-600 space-y-1">
              <li>• Submit visa application</li>
              <li>• Schedule shipment (4–6 week lead time recommended)</li>
              <li>• Prepare inventory and obtain insurance quotes</li>
              <li>• Book flights and arrange temporary housing</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-2">Month 3–4: Arrival & Settlement</h3>
            <p className="text-brand-700 mb-3">Budget: $2,000–6,000 (housing deposit, utilities, first services)</p>
            <ul className="text-sm text-brand-600 space-y-1">
              <li>• Arrive in Panama (within 180-day tourist window)</li>
              <li>• Receive shipment, clear customs</li>
              <li>• Secure permanent housing</li>
              <li>• Open bank account, get phone SIM, arrange insurance</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-2">Month 5–12: Integration & Optimization</h3>
            <p className="text-brand-700 mb-3">Budget: Ongoing monthly costs ($1,500–3,500/month depending on lifestyle)</p>
            <ul className="text-sm text-brand-600 space-y-1">
              <li>• Explore neighborhoods, build community</li>
              <li>• Buy vehicle locally or arrange alternative transport</li>
              <li>• Process residency visa (if pursuing)</li>
              <li>• Optimize housing, finalize healthcare plan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Panama vs Regional Comparison */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8">Why Panama Wins: Cost Comparison vs Regional Alternatives</h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-brand-50 border-2 border-brand-100">
                <th className="border-2 border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">Metric</th>
                <th className="border-2 border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">Panama</th>
                <th className="border-2 border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">Costa Rica</th>
                <th className="border-2 border-brand-100 px-4 py-3 text-left font-heading font-bold text-brand-950">Belize</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-2 border-brand-100">
                <td className="border-2 border-brand-100 px-4 py-3 font-semibold text-brand-950">Currency Stability</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">USD (no exchange risk)</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">Colón (volatile)</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">USD (stable)</td>
              </tr>
              <tr className="border-2 border-brand-100 bg-brand-50">
                <td className="border-2 border-brand-100 px-4 py-3 font-semibold text-brand-950">Visa Cost</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">$1,900–3,300</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">$3,000–6,000</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">$2,500–5,000</td>
              </tr>
              <tr className="border-2 border-brand-100">
                <td className="border-2 border-brand-100 px-4 py-3 font-semibold text-brand-950">Shipping Cost (20ft)</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">$3,500–6,000</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">$4,000–7,000</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">$5,000–8,500</td>
              </tr>
              <tr className="border-2 border-brand-100 bg-brand-50">
                <td className="border-2 border-brand-100 px-4 py-3 font-semibold text-brand-950">1BR Rent (Expat Zone)</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">$800–1,500</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">$1,000–1,800</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">$900–1,600</td>
              </tr>
              <tr className="border-2 border-brand-100">
                <td className="border-2 border-brand-100 px-4 py-3 font-semibold text-brand-950">Foreign Income Tax</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700 font-bold text-brand-TEAL">0%</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">0% (residency-dependent)</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">0%</td>
              </tr>
              <tr className="border-2 border-brand-100 bg-brand-50">
                <td className="border-2 border-brand-100 px-4 py-3 font-semibold text-brand-950">Healthcare (Private Visit)</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">$40–70</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">$60–100</td>
                <td className="border-2 border-brand-100 px-4 py-3 text-brand-700">$50–90</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-brand-700 leading-relaxed bg-brand-50 border-l-4 border-brand-TEAL p-6 rounded">
          <strong>Panama's Edge:</strong> Zero tax on foreign-sourced income, USD economy (zero currency exchange risk), most competitive shipping costs due to Panama being a global shipping hub, and lower visa/legal fees than Costa Rica. For digital nomads and retirees, Panama is the most cost-effective Central American option.
        </p>
      </section>

      {/* Three.js City Scene */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8">Your New Home Awaits: Panama City Scene</h2>
        <div className="bg-brand-50 border-2 border-brand-100 rounded-xl p-8 h-96">
          <PanamaCityScene />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-12">Frequently Asked Questions About Moving Costs</h2>

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

      {/* Moving Companies & Services */}
      <section className="bg-brand-50 border border-brand-100 rounded-2xl p-8 my-12">
        <h2 className="font-heading text-2xl font-bold text-brand-950 mb-2">Trusted Moving Companies & Relocation Services</h2>
        <p className="text-brand-700 mb-6">Getting your belongings to Panama is one of the biggest costs in your relocation budget. We've vetted these professional movers and service providers to help you get the real, transparent pricing shown above.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl border border-brand-100 p-5">
            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">International Movers (US to Panama)</h3>
            <ul className="text-brand-700 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>AGS Worldwide Movers</strong> – Full-service international moving, door-to-door, specializes in Panama relocations</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Bekins</strong> – LCL (Less Than Container Load) and FCL (Full Container Load) options, direct to Panama ports</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Arpin International Group</strong> – Specializes in expat relocations with flat-rate quotes and tracking</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Stevens Worldwide Moving</strong> – Multiple service levels, transparent pricing, 70+ years in business</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-brand-100 p-5">
            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">Panama-Side Receiving & Customs Clearance</h3>
            <ul className="text-brand-700 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Panama Customs Brokers Association</strong> – Official brokers for duty calculations and port clearance</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Logística Integral de Panamá</strong> – Local receiving agent, warehouse storage, delivery coordination</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Colón Free Zone Services</strong> – For temporary storage and bonded warehouse options</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Direct Panama Shipping</strong> – Destination management and door delivery in Panama City and suburbs</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-brand-100 p-5">
            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">Shipping Containers & Vehicle Transport</h3>
            <ul className="text-brand-700 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>SHIP (Shipping & Handling International Partners)</strong> – Container rental and auto shipping specialization</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>uShip</strong> – Compare multiple carrier quotes for containers and vehicles in one place</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Auto Transport Review</strong> – Vetted vehicle shipping companies with real customer reviews</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Panama Vehicle Importers Association</strong> – Guides on import duty, taxes, and local vehicle purchase alternatives</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-brand-100 p-5">
            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">Relocation Consultants & Banking Setup</h3>
            <ul className="text-brand-700 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Global Citizen Solutions</strong> – Visa processing, residence setup, financial planning for expats</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Panama Immigration Specialists</strong> – Friendly Nations, Pensionado, and Investor visa applications</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Banco Panamericano & Casco Viejo Bank</strong> – Open non-resident accounts for incoming expats</span></li>
              <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>CAJA de Seguro Social (CSS)</strong> – Healthcare registration and voluntary insurance enrollment</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-xl border border-brand-100">
          <p className="text-sm text-brand-700"><strong className="text-brand-TEAL">💡 Pro Tip:</strong> Get 3+ quotes from international movers before committing. Prices vary dramatically based on weight, distance, and current fuel surcharges. Most offer free virtual in-home estimates. For vehicles, buying used in Panama almost always costs less than importing after duties—often saving $15K+.</p>
        </div>
      </section>

      {/* Final Summary & CTA */}
      <section className="bg-gradient-to-br from-brand-TEAL to-brand-950 text-white rounded-2xl max-w-4xl mx-auto px-8 py-16 mb-16">
        <h2 className="text-4xl font-heading font-bold mb-6">Ready to Move to Panama?</h2>
        <p className="text-xl mb-8 opacity-95 leading-relaxed max-w-2xl">
          Now that you have the real numbers, the next step is connecting with our team to discuss your specific situation. Whether you're planning a budget move or a full relocation with property investment, we'll guide you through every cost and every step.
        </p>
        <p className="text-lg mb-8 opacity-90">
          <strong>Start your Panama relocation journey with confidence. Let's make it happen.</strong>
        </p>
        <Link
          href={`/${lang}/contacto`}
          className="inline-block bg-white text-brand-TEAL font-bold py-4 px-8 rounded-lg hover:bg-brand-50 transition-colors text-lg"
        >
          Get a Free Relocation Consultation
        </Link>
      </section>

      {/* Key Takeaways */}
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-brand-950 mb-8">Key Takeaways</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL" />
              Budget Relocation
            </h3>
            <p className="text-brand-700 text-sm">
              A no-frills move with minimal belongings costs $12,000–15,000. This is the cheapest entry point and perfect for testing your fit with Panama.
            </p>
          </div>
          <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL" />
              Comfortable Move
            </h3>
            <p className="text-brand-700 text-sm">
              Moving with a full household and 1BR apartment setup costs $20,000–25,000. This is most expats' target.
            </p>
          </div>
          <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL" />
              Don't Import Vehicles
            </h3>
            <p className="text-brand-700 text-sm">
              A $20K car costs $26K–30K after duty. Buy locally for $10K–15K and save $15K+.
            </p>
          </div>
          <div className="bg-brand-50 border-2 border-brand-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-brand-950 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-TEAL" />
              Pensionado Benefit
            </h3>
            <p className="text-brand-700 text-sm">
              Pensionado visa holders receive 50% off hospital services—major long-term savings. Worth the upfront visa cost.
            </p>
          </div>
        </div>
      </section>
    </article>
  </>
  );
}
