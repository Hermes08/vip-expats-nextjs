import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, DollarSign, TrendingUp, Home, AlertCircle, Heart } from 'lucide-react';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';


const monthlyCostData = [
    { label: 'San José (CR)', value: 3200, color: '#e05555' },
    { label: 'Guanacaste (CR)', value: 2800, color: '#e07744' },
    { label: 'Panama City', value: 2200, color: '#00C5CB' },
    { label: 'Coronado', value: 2000, color: '#00b8be' },
    { label: 'Boquete', value: 1800, color: '#D4A843' },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const slug = 'panama-vs-costa-rica-retirement';
  const domain = 'https://panamarealestatesale.com';
  const canonical = `${domain}/${lang}/blog/${slug}`;

  return {
    title: 'Panama vs Costa Rica Retirement 2026: Which is Better? Comparison',
    description: 'Compare Panama vs Costa Rica for retirement. Costs, lifestyle, visas, real estate, climate.',
    keywords: 'Panama vs Costa Rica, retirement Panama Costa Rica, Panama vs Costa Rica cost of living',
    alternates: {
        canonical,
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/panama-vs-costa-rica-retirement',
            'es': 'https://panamarealestatesale.com/es/blog/panama-vs-costa-rica-retirement',
            'pt': 'https://panamarealestatesale.com/pt/blog/panama-vs-costa-rica-retirement',
            'de': 'https://panamarealestatesale.com/de/blog/panama-vs-costa-rica-retirement',
        },
    },
    openGraph: {
        title: 'Panama vs Costa Rica Retirement 2026: Which is Better? Comparison',
        description: 'Compare Panama vs Costa Rica for retirement. Costs, lifestyle, visas, real estate, climate.',
        type: 'article',
        url: canonical,
        images: [{ url: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80', width: 1200, height: 630, alt: 'Comparison' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Panama vs Costa Rica Retirement 2026: Which is Better? Comparison',
        description: 'Compare Panama vs Costa Rica for retirement. Costs, lifestyle, visas, real estate, climate.',
        images: ['https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80'],
    },
};
}

const costComparisonTable = [
    { category: 'Monthly Rent (2BR apartment)', panama: '$800–$1,500', costaRica: '$1,000–$2,000' },
    { category: 'Groceries (weekly)', panama: '$50–$80', costaRica: '$70–$120' },
    { category: 'Utilities (electric, water, internet)', panama: '$100–$150', costaRica: '$120–$180' },
    { category: 'Gym membership', panama: '$35–$60', costaRica: '$45–$80' },
    { category: 'Dinner for two (local restaurant)', panama: '$20–$35', costaRica: '$25–$45' },
    { category: 'Carpool taxi ride (5km)', panama: '$3–$5', costaRica: '$4–$8' },
    { category: 'Monthly couple budget (comfortable)', panama: '$1,500–$2,500', costaRica: '$2,000–$3,500' },
];

const visaComparison = [
    { aspect: 'Entry Requirement', panama: 'Tourist visa: 180 days free (citizens of most countries)', costaRica: 'Tourist visa: 90 days free' },
    { aspect: 'Pensionado Visa', panama: '$1,000/month guaranteed income (PERMANENT residency immediately)', costaRica: '✗ No direct pensionado visa' },
    { aspect: 'Temporary Residency (CR)', panama: 'N/A', costaRica: 'Pensionado: $1,000/mo for 2 yrs, then permanent' },
    { aspect: 'Qualified Investor', panama: '$200,000 investment (permanent + discounts)', costaRica: '$200,000 investment (~2 years to permanent)' },
    { aspect: 'Residency Timeline', panama: 'Permanent = 3–6 months with proper visa', costaRica: 'Temporary = 2 yrs, Permanent = 4+ yrs total' },
    { aspect: 'Friendly Nations Visa', panama: 'Yes (USA, Canada, Spain, Chile, Argentina)', costaRica: 'No' },
];

const healthcareComparison = [
    { metric: 'Private Hospital Quality', panama: 'JCI-accredited, US-trained doctors, world-class in Panama City', costaRica: 'Good in San José, excellent private options' },
    { metric: 'Cost of Major Surgery', panama: '$8,000–$15,000 (50–60% US cost)', costaRica: '$10,000–$18,000 (50–60% US cost)' },
    { metric: 'Doctor Visit (private)', panama: '$40–$80', costaRica: '$50–$100' },
    { metric: 'Public System (CCSS)', panama: 'Included with Pensionado visa, basic but functional', costaRica: 'World-renowned, good coverage, long wait times' },
    { metric: 'Expat Health Coverage', panama: 'Private insurance $50–$150/mo', costaRica: 'Private insurance $60–$180/mo' },
];

const retireetypeComparison = [
    { profile: 'Beach Lover', panama: 'Coronado, Bocas, San Blas → All excellent', costaRica: 'Guanacaste, Manuel Antonio → Tropical paradise' },
    { profile: 'Mountain/Cool Climate', panama: 'Boquete (65°F year-round) → Clear winner', costaRica: 'San Isidro, Uvita highlands → Also excellent' },
    { profile: 'Budget Retiree (<$1,500/mo)', panama: 'Yes, very doable', costaRica: 'Tight but possible in rural areas' },
    { profile: 'Urban/Amenity-Focused', panama: 'Panama City → Modern, cosmopolitan', costaRica: 'San José → Better public transit' },
    { profile: 'Healthcare Priority', panama: 'Panama City → Excellent private care', costaRica: 'San José or Uvita → CCSS + private' },
    { profile: 'Real Estate Investor', panama: 'Better appreciation potential, Pensionado discounts', costaRica: 'Established market, less volatility' },
];

const pros = [
    { title: 'Pensionado Visa = Instant Permanent Residency', desc: '$1,000/month guaranteed income = permanent residency in 3–6 months. Costa Rica requires 4+ years total to reach permanent status. Plus 22+ government discounts.' },
    { title: '20–30% Lower Cost of Living', desc: 'Couples comfortably retire on $1,500–$2,500/month. Costa Rica: $2,000–$3,500/month. The difference compounds significantly over decades.' },
    { title: 'Zero Tax on Foreign Income', desc: 'Pensions, 401k withdrawals, Social Security, rental income — all tax-free if earned abroad. Costa Rica taxes foreign income over $100K.' },
    { title: 'Modern Infrastructure & Connectivity', desc: 'Panama City ranks top 5 in Latin America for infrastructure. Internet quality excellent. Roads reliable, especially on Pacific Riviera and toward Boquete.' },
    { title: 'Boquete: Perfect Mountain Retreat (65°F Year-Round)', desc: 'Cool, spring-like climate in highlands. Costa Rica mountains are beautiful but wetter. Boquete is genuinely unique.' },
    { title: 'USD Economy = No Currency Risk', desc: "Uses US dollars. Zero exchange rate worry. Costa Rica's colón fluctuates; adds financial complexity for retirees." },
    { title: 'World-Class Private Healthcare', desc: 'JCI-accredited hospitals with US-trained doctors at 50–60% of US costs. Excellence concentrated in Panama City (not just metro areas).' },
    { title: 'Direct Flights to Major US Cities', desc: 'Miami 3 hrs, Houston 3.5 hrs, NYC 5 hrs, LA 6 hrs. Easy visits to family without 9+ hour odysseys.' },
    { title: 'Property Rights = Same as Citizens', desc: 'Foreigners own freehold property. No restrictions, no time limits, no local ownership requirements. Simpler than many countries.' },
    { title: 'Growing English-Speaking Expat Community', desc: 'Coronado, Boquete, Bocas, Panama City all have active expat networks. Less isolation than typical Central American moves.' },
];

const cons = [
    { title: 'Bureaucracy Moves at Panama Time', desc: 'Government processes, property transfers, visa approvals — all move slower than expected. Patience and a local lawyer are non-negotiable.' },
    { title: 'Panama City Traffic & Heat Are Real', desc: 'Peak hour traffic rivals major US cities. Heat and humidity are intense (85–95°F, 80–90% humidity). Air conditioning essential.' },
    { title: 'Language Barrier Outside Expat Zones', desc: 'English-speaking expat bubbles exist, but daily life outside them requires Spanish. Schools, services, rentals — Spanish is essential.' },
    { title: 'Healthcare Outside Panama City Is Limited', desc: 'Excellent private care concentrated in the capital. Boquete and Bocas have clinics but not comprehensive facilities. Complex issues = travel to city.' },
    { title: 'Rainy Season (May–November) Is Intense', desc: '9 months of afternoon downpours. Not always a dealbreaker (Boquete stays cool), but affects outdoor lifestyle and can cause flooding in some areas.' },
    { title: 'Quality Inconsistency Across Services', desc: 'World-class restaurant next to mediocre one. Reliable contractor next to unreliable. Requires vetting and local connections.' },
    { title: 'Culture Shock & "Panama Time" Adjustment', desc: 'Things work differently. Customer service expectations, timelines, business culture — all take adjustment. Not every retiree adapts well.' },
    { title: 'Distance from Family (for US-Based Retirees)', desc: 'Panama flights are convenient but still 3–6+ hours depending on origin. Not a weekend trip from midwest or northeast US.' },
    { title: 'Political Uncertainty (Minor)', desc: 'Generally stable but occasional corruption perceptions, minor labor disputes, strike activity. Costa Rica perceived as more politically stable.' },
    { title: 'Darién Region Reputation (Overblown)', desc: 'Crime is real in Darién, but irrelevant to expat areas. That said, news coverage scares retirees unnecessarily. Requires nuance in conversation.' },
];

export default async function PanamaVsCostaRicaRetirementPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
    <>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Panama vs Costa Rica Retirement 2026: Which is Better? Comparison',
            description: 'Compare Panama vs Costa Rica for retirement. Costs, lifestyle, visas, real estate, climate.',
            image: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80',
            datePublished: '2026-02-01',
            dateModified: '2026-04-04',
            author: { '@type': 'Organization', name: 'VIP Expats Panama', url: 'https://panamarealestatesale.com' },
            publisher: { '@type': 'Organization', name: 'VIP Expats Panama', logo: { '@type': 'ImageObject', url: 'https://panamarealestatesale.com/og-image.jpg' } },
          }),
        }}
      />
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1600&q=80"
                        alt="Panama vs Costa Rica"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        RETIREMENT GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Panama vs Costa Rica:<br />Which Is Better for Retirement in 2026?
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        A frank, data-driven comparison of cost, visas, healthcare, safety, and lifestyle. From expats who have lived in both.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Both Panama and Costa Rica are exceptional retirement destinations — and the "best" choice depends entirely on your priorities. This is not about ranking one over the other. It is about matching YOU to the right country.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        We have worked with dozens of retirees who have lived in both countries, and the pattern is clear: the decision comes down to visa timeline, cost tolerance, lifestyle preference, and healthcare confidence. Let us walk through each factor honestly so you can decide which country aligns with your retirement vision.
                    </p>

                    {/* Quick comparison box */}
                    <div className="bg-brand-50 rounded-2xl p-6 mt-10 border border-brand-100">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-white font-heading font-black text-lg mb-3">Panama Wins On</h3>
                                <ul className="space-y-2">
                                    {['Pensionado visa (instant permanent)', 'Cost of living (20–30% cheaper)', 'Tax benefits (0% foreign income)', 'Residency timeline (3–6 months)'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-500 text-sm">
                                            <CheckCircle size={14} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-white font-heading font-black text-lg mb-3">Costa Rica Wins On</h3>
                                <ul className="space-y-2">
                                    {['Political stability perception', 'No army (peaceful culture)', 'CCSS public healthcare reputation', 'Established gringo community'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-500 text-sm">
                                            <CheckCircle size={14} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3D Cost Comparison */}
                <CostBarChart
                    data={monthlyCostData}
                    title="Monthly Budget Comparison: Panama vs Costa Rica"
                    subtitle="Comfortable couple retirement lifestyle · USD/month"
                    height="270px"
                />

                {/* Panama City Scene */}
                <PanamaCityScene />

                {/* Cost of Living */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Cost of Living: The 20–30% Difference
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        This is where Panama makes the strongest case. A comfortable couple retirement in Panama runs $1,500–$2,500/month. The same lifestyle in Costa Rica is $2,000–$3,500/month. Over 30 years, that is $180,000–$360,000 difference. Real money.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4"></th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Panama</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Costa Rica</th>
                                </tr>
                            </thead>
                            <tbody>
                                {costComparisonTable.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.category}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3 font-bold">{row.panama}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.costaRica}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-slate-500 mt-6 text-sm leading-relaxed italic">
                        Note: Panama City and San José (CR) cost more; Boquete and smaller towns cost less in both. These are averages for expat-friendly areas.
                    </p>
                </section>

                {/* Visa & Residency */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Home className="inline text-brand-GOLD mr-2" size={28} />
                        Visa & Residency: The Game Changer
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        This is where Panama is objectively superior for retirees. Panama's Pensionado visa offers PERMANENT residency immediately upon approval. Costa Rica has no direct pensionado visa; temporary residency is 2 years, then you must wait another 2+ years for permanent status.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4"></th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Panama</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Costa Rica</th>
                                </tr>
                            </thead>
                            <tbody>
                                {visaComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.aspect}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3 font-bold">{row.panama}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.costaRica}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-brand-50 rounded-xl p-5 mt-6 border-l-4 border-brand-GOLD">
                        <p className="text-slate-600 text-sm"><strong>Panama Pensionado Details:</strong> Requires $1,000/month guaranteed income (pension, annuity, or fixed deposit). Approval takes 3–6 months. Once approved, you get permanent residency PLUS 22+ discounts: 25% utility bills, 50% cinema, 10–25% restaurants/hotels, free airport parking, and more. Total first-year cost: $2,000–$3,000 in legal fees.</p>
                    </div>
                </section>

                {/* Healthcare */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Heart className="inline text-brand-GOLD mr-2" size={28} />
                        Healthcare: Both Strong, Different Models
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Both countries have excellent healthcare by Latin American standards. Panama emphasizes private care; Costa Rica emphasizes public (CCSS). For retirees, both models work — it is a matter of preference.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4"></th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Panama</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Costa Rica</th>
                                </tr>
                            </thead>
                            <tbody>
                                {healthcareComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.metric}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3">{row.panama}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.costaRica}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-slate-500 mt-6 text-sm leading-relaxed">
                        <strong>Panama model:</strong> Private insurance ($50–$150/mo) + Pensionado public access. Faster appointments, modern facilities, US-trained doctors in Panama City.
                    </p>
                    <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                        <strong>Costa Rica model:</strong> CCSS public system is world-famous and comprehensive, but wait times can be 2–4 weeks for non-urgent care. Most retirees supplement with private insurance for faster access.
                    </p>
                </section>

                {/* Safety */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <AlertCircle className="inline text-brand-GOLD mr-2" size={28} />
                        Safety: The Perception vs Reality Gap
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Costa Rica is perceived as safer. Panama is perceived as dangerous. Neither perception is fully accurate. The truth: both are safe for expats in the right areas.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <h3 className="text-brand-GOLD font-heading font-black mb-4 uppercase text-sm tracking-widest">Panama Reality</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={14} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                    <span className="text-slate-500 text-sm"><strong>Expat areas:</strong> Coronado, Boquete, Bocas, Casco Viejo, Punta Pacifica = very safe. Comparable to suburban US neighborhoods.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={14} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                    <span className="text-slate-500 text-sm"><strong>Crime:</strong> Concentrated in Darién, urban squatter areas, and specific neighborhoods outside expat zones.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={14} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                    <span className="text-slate-500 text-sm"><strong>Petty theft:</strong> Common in crowded areas (markets, buses). Use normal big-city precautions.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <h3 className="text-brand-GOLD font-heading font-black mb-4 uppercase text-sm tracking-widest">Costa Rica Reality</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={14} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                    <span className="text-slate-500 text-sm"><strong>Overall reputation:</strong> Safer perception, more stable political culture, no army (historical advantage).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={14} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                    <span className="text-slate-500 text-sm"><strong>Rising petty crime:</strong> Tourist areas (San José, beach towns) see increasing robbery and scams, especially after dark.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={14} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                    <span className="text-slate-500 text-sm"><strong>Drug corridor issue:</strong> Like Panama, drug trafficking affects some regions; avoid them and you are fine.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-slate-500 mt-6 text-sm leading-relaxed">
                        <strong>Verdict:</strong> Both are safe for informed expats. If safety is your #1 concern, stay in established expat communities in either country. The difference is marginal.
                    </p>
                </section>

                {/* Infrastructure */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <TrendingUp className="inline text-brand-GOLD mr-2" size={28} />
                        Infrastructure & Connectivity
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Panama City is modern and world-class by Latin American standards. Costa Rica's infrastructure is solid but roads and utilities are less reliable outside San José.
                    </p>
                    <div className="space-y-4">
                        {[
                            { label: 'Roads & Transportation', panama: 'Panama City has modern highways, reliable public transport. Pacific Riviera and Boquete roads well-maintained. Coronado 90 min to airport via good highway.', costaRica: 'San José has decent metro system. Rural roads notorious for potholes. Beach towns require 5–8 hour drives from capital.' },
                            { label: 'Internet Speed', panama: 'Excellent in cities (100+ Mbps common). Fiber widely available. Reliable for remote work.', costaRica: 'Good in cities, spotty in rural areas. Still workable for most but less reliable than Panama.' },
                            { label: 'Power & Utilities', panama: 'Reliable in cities and expat zones. Occasional outages in rural areas.', costaRica: 'Seasonal rain causes flooding and outages in some regions. Utilities less predictable.' },
                            { label: 'Supermarkets & Modern Amenities', panama: 'Panama City rivals Miami for options. Coronado has good supermarkets, restaurants, gyms. Full modern infrastructure.', costaRica: 'San José excellent. Beach towns and rural areas have basic options but less choice.' },
                        ].map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <div className="font-heading font-black text-brand-950 mb-3 uppercase text-sm">{item.label}</div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-brand-GOLD text-xs font-bold uppercase mb-1 tracking-widest">Panama</div>
                                        <p className="text-slate-500 text-xs leading-relaxed">{item.panama}</p>
                                    </div>
                                    <div>
                                        <div className="text-slate-500 text-xs font-bold uppercase mb-1 tracking-widest">Costa Rica</div>
                                        <p className="text-slate-500 text-xs leading-relaxed">{item.costaRica}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tax Benefits */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Tax Benefits for Retirees
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="card-light rounded-2xl p-6 border border-brand-GOLD/30 bg-brand-50/50">
                            <h3 className="text-brand-GOLD font-heading font-black mb-4 uppercase text-sm tracking-widest">Panama (Clear Winner)</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="font-black text-brand-GOLD text-lg">✓</span>
                                    <span className="text-slate-600 text-sm"><strong>Zero tax on foreign income:</strong> Pensions, 401k withdrawals, Social Security, rental income from abroad — all tax-free.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-black text-brand-GOLD text-lg">✓</span>
                                    <span className="text-slate-600 text-sm"><strong>Pensionado discounts:</strong> 25% utilities, 50% cinema, 10–25% restaurants/hotels, free airport parking.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-black text-brand-GOLD text-lg">✓</span>
                                    <span className="text-slate-600 text-sm"><strong>Territorial income tax:</strong> Only local income taxed. Foreign-earned money is yours.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <h3 className="text-slate-500 font-heading font-black mb-4 uppercase text-sm tracking-widest">Costa Rica (Good but Limited)</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="font-black text-slate-600 text-lg">•</span>
                                    <span className="text-slate-500 text-sm"><strong>Pensionado discounts:</strong> 25% utilities, bus passes, hotel/restaurant discounts similar to Panama.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-black text-slate-600 text-lg">•</span>
                                    <span className="text-slate-500 text-sm"><strong>Foreign income tax:</strong> If foreign income exceeds ~$100K/year, you pay tax. Most retirees below that threshold are exempt.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-black text-slate-600 text-lg">•</span>
                                    <span className="text-slate-500 text-sm"><strong>Local income taxed:</strong> Business income or rental income from CR property is taxed.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-slate-500 mt-6 text-sm leading-relaxed">
                        <strong>For retirees on fixed pensions:</strong> Panama's zero foreign income tax saves thousands per year. This alone is worth serious consideration if you are retiring on $3,000+/month.
                    </p>
                </section>

                {/* Real Estate */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Home className="inline text-brand-GOLD mr-2" size={28} />
                        Real Estate Prices
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <h3 className="text-brand-GOLD font-heading font-black mb-4 uppercase text-sm">Panama</h3>
                            <ul className="space-y-2 text-slate-500 text-sm">
                                <li><strong>Panama City condo:</strong> $120K–$400K</li>
                                <li><strong>Coronado oceanfront:</strong> $180K–$450K</li>
                                <li><strong>Boquete home:</strong> $150K–$350K</li>
                                <li><strong>Bocas condo:</strong> $120K–$300K</li>
                                <li><strong>Appreciation:</strong> 5–10% annually (stable)</li>
                            </ul>
                        </div>
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <h3 className="text-slate-500 font-heading font-black mb-4 uppercase text-sm">Costa Rica</h3>
                            <ul className="space-y-2 text-slate-500 text-sm">
                                <li><strong>San José condo:</strong> $200K–$600K</li>
                                <li><strong>Central Valley home:</strong> $250K–$500K</li>
                                <li><strong>Guanacaste beachfront:</strong> $300K–$900K</li>
                                <li><strong>Uvita highlands:</strong> $180K–$400K</li>
                                <li><strong>Appreciation:</strong> 3–7% annually (slower)</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-slate-500 mt-6 text-sm leading-relaxed">
                        Panama property offers better value and appreciation potential. Costa Rica is more established (less volatility). Both have freehold ownership rights for foreigners. Real estate is a good long-term play in either country for retirees planning to stay 10+ years.
                    </p>
                </section>

                {/* Lifestyle */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Heart className="inline text-brand-GOLD mr-2" size={28} />
                        Lifestyle & Culture
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <h3 className="text-brand-GOLD font-heading font-black mb-4 uppercase text-sm">Panama Vibe</h3>
                            <ul className="space-y-3 text-slate-500 text-sm">
                                <li><strong>Pace:</strong> Cosmopolitan, business-focused. Modern energy.</li>
                                <li><strong>Language:</strong> English widely spoken in expat areas. Less pressure to speak Spanish.</li>
                                <li><strong>Culture:</strong> Mix of Latin, Caribbean, US influence. Feel: Miami meets Central America.</li>
                                <li><strong>Food:</strong> Diverse cuisine. Good restaurants, international options abundant.</li>
                                <li><strong>Activities:</strong> Golf (Coronado), diving (Bocas), hiking (Boquete), nature (San Blas Islands).</li>
                                <li><strong>Weather:</strong> Hot & humid in lowlands (Dec–Apr dry season). Cool in Boquete year-round.</li>
                            </ul>
                        </div>
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <h3 className="text-slate-500 font-heading font-black mb-4 uppercase text-sm">Costa Rica Vibe</h3>
                            <ul className="space-y-3 text-slate-500 text-sm">
                                <li><strong>Pace:</strong> "Pura Vida" — slower, more relaxed. Nature-focused.</li>
                                <li><strong>Language:</strong> Spanish more essential. English in tourist zones only.</li>
                                <li><strong>Culture:</strong> Eco-conscious, outdoorsy, community-oriented. Feel: Caribbean island lifestyle.</li>
                                <li><strong>Food:</strong> Fresh, natural, local focus. More farm-to-table aesthetic.</li>
                                <li><strong>Activities:</strong> Hiking, eco-tourism, beaches, wildlife, yoga retreats.</li>
                                <li><strong>Weather:</strong> Tropical (hot & humid). Highlands offer cooler climate. Rainy season intense.</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-slate-500 mt-6 text-sm leading-relaxed">
                        <strong>In short:</strong> Choose Panama if you want urban conveniences with expat infrastructure. Choose Costa Rica if you prioritize natural beauty and a slower pace. Both cultures are welcoming, but they feel very different.
                    </p>
                </section>

                {/* Retiree Type Comparison */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <MapPin className="inline text-brand-GOLD mr-2" size={28} />
                        Which Country for Your Retirement Type?
                    </h2>
                    <div className="space-y-3">
                        {retireetypeComparison.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="font-heading font-black text-brand-950 uppercase text-sm">{item.profile}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed text-right">{item.panama}</div>
                                </div>
                                <div className="text-slate-500 text-xs mt-2 italic">vs {item.costaRica}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Verdict */}
                <section className="reveal-on-scroll bg-brand-50 rounded-3xl p-8 border-l-4 border-brand-GOLD">
                    <h2 className="text-white font-heading text-2xl font-bold mb-6 uppercase tracking-tighter">The Verdict: Our Honest Recommendation</h2>
                    <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                        <p>
                            <strong>Choose Panama if:</strong> You want permanent residency in 3–6 months, are cost-conscious (want to retire on $1,500–$2,000/mo), prioritize tax efficiency, value modern infrastructure, and want an English-speaking expat community. Panama's Pensionado visa is world-class for retirees.
                        </p>
                        <p>
                            <strong>Choose Costa Rica if:</strong> You prefer a slower pace, prioritize natural beauty and eco-tourism, want the security of an established expat community (larger and longer-established than Panama), and can tolerate a slightly higher cost of living. Costa Rica's "Pura Vida" culture is genuinely different and appeals to certain personality types.
                        </p>
                        <p>
                            <strong>Consider both if:</strong> You have time to explore. Many retirees spend 2–3 months in each country before deciding. Airfare between Panama and Costa Rica is cheap ($100–$200). Try each for a season. Your gut will tell you which feels like home.
                        </p>
                        <p>
                            <strong>The data says Panama</strong> for pure retirement optimization (cost, visa, taxes). The heart says Costa Rica for lifestyle and culture. There is no objectively "better" choice — only the choice that is better for you.
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Common Questions
                    </h2>
                    <div className="space-y-4">
                        {[
                            { q: 'Can I retire in both countries?', a: 'Yes. Many retirees have residency in both and split time. Maintain a residence in each, manage two visa processes. It is complicated but possible for serious dual-livers.' },
                            { q: 'Which country is actually cheaper?', a: 'Panama by 20–30%. A couple lives comfortably on $1,500–$2,500/mo in Panama; $2,000–$3,500/mo in Costa Rica. Boquete and Bocas are cheapest in Panama; rural areas in Costa Rica are cheapest there.' },
                            { q: 'Which has better weather?', a: 'Depends on preference. Boquete (Panama) is 65°F year-round — like eternal spring. Both lowland areas are hot & humid with a dry season (Dec–Apr). Costa Rica highlands are similar but wetter.' },
                            { q: 'What if I don\'t have a pension for the Pensionado visa?', a: 'Panama offers Qualified Investor ($200K investment) and Friendly Nations visas. Costa Rica offers pensionado, investor, and income visas. Talk to an immigration lawyer about your specific situation.' },
                            { q: 'Do I need to speak Spanish?', a: 'Helpful everywhere. More essential in Costa Rica (English limited outside tourist areas). Panama has larger English-speaking expat infrastructure. Both are learnable within a year of immersion.' },
                        ].map((item, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <h3 className="text-brand-950 font-heading font-bold mb-3">{item.q}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Ready to Explore Retirement in Panama?
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Our advisors have worked with retirees in both Panama and Costa Rica. We can help you evaluate which country is right for your goals, budget, and lifestyle — and guide you through visas, healthcare, and property investment.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Book Retirement Consultation <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/blog/pros-cons-retiring-panama`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Read: Pros & Cons of Panama
                        </Link>
                    </div>
                </section>

                {/* Internal links */}
                <section className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Pros & Cons of Retiring in Panama', href: '/en/blog/pros-cons-retiring-panama' },
                        { label: 'Panama Pensionado Visa Guide', href: '/en/blog/panama-pensionado-visa-2026-complete-guide' },
                        { label: 'Best Neighborhoods for Expats in Panama', href: '/en/blog/best-neighborhoods-panama-expats' },
                    ].map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="flex items-center justify-between card-light p-4 rounded-xl border border-brand-100 hover:border-brand-GOLD/30 transition-all group"
                        >
                            <span className="text-brand-950 text-xs font-bold">{link.label}</span>
                            <ArrowRight size={12} className="text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                    ))}
                </section>

            </div>
        </article>
    </>
    );
}
