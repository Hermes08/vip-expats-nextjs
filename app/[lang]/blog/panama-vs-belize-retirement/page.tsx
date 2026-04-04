import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, AlertCircle, MapPin, Shield, Globe, Heart } from 'lucide-react';
import { CostBarChart } from '@/components/three/ThreeComponents';


export const metadata: Metadata = {
    title: 'Panama vs Belize for Retirement 2026: Why Panama Wins on Every Key Factor',
    description:
        'Comparing Panama vs Belize for retirement: healthcare, visa requirements, cost of living, crime rates, real estate market, and why Panama dominates. Complete 2026 guide.',
    keywords:
        'panama vs belize retirement, retire panama or belize, panama vs belize expats, belize pensionado visa, panama retirement advantages, belize retirement costs',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/panama-vs-belize-retirement',
    },
    openGraph: {
        title: 'Panama vs Belize for Retirement 2026: Why Panama Wins',
        description: 'Complete comparison of Panama and Belize for retirement — visa costs, healthcare, crime, real estate, and actual monthly expenses.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/panama-vs-belize-retirement',
    },
};

const visaComparison = [
    {
        country: 'Panama',
        program: 'Pensionado Visa',
        minIncome: '$1,000/month',
        minAnnual: '$12,000/year',
        processingTime: '30-60 days',
        permanence: 'Permanent (no renewal)',
        discounts: 'Extensive (utilities, flights, healthcare)',
    },
    {
        country: 'Belize',
        program: 'Qualified Retiree Program (QRP)',
        minIncome: '$2,000/month',
        minAnnual: '$24,000/year',
        processingTime: '45-90 days',
        permanence: 'Permanent (but reviewed annually)',
        discounts: 'Minimal',
    },
];

const healthcareComparison = [
    {
        aspect: 'JCI-Accredited Hospitals',
        panama: '3 in Panama City',
        belize: 'None',
        winner: 'Panama',
    },
    {
        aspect: 'Johns Hopkins Affiliate',
        panama: 'Hospital Punta Pacifica',
        belize: 'N/A',
        winner: 'Panama',
    },
    {
        aspect: 'Specialist Consultation Cost',
        panama: '$50-$80',
        belize: '$80-$150+ (if available)',
        winner: 'Panama',
    },
    {
        aspect: 'Medical Tourism Required',
        panama: 'Rarely',
        belize: 'Often (Guatemala, Mexico)',
        winner: 'Panama',
    },
    {
        aspect: 'Pharmacy Options',
        panama: 'Extensive (brand + generic)',
        belize: 'Limited, expensive',
        winner: 'Panama',
    },
];

const costComparison = [
    {
        category: 'Budget Couple',
        panama: '$1,500-$2,500/mo',
        belize: '$2,000-$3,000/mo',
        notes: 'Basic apartment, local dining',
    },
    {
        category: 'Mid-Level Expat',
        panama: '$2,500-$3,500/mo',
        belize: '$3,000-$4,500/mo',
        notes: 'Nice rental, mix of dining',
    },
    {
        category: 'Comfortable Lifestyle',
        panama: '$4,000-$6,000/mo',
        belize: '$4,500-$7,000/mo',
        notes: 'Premium rental, car, travel',
    },
];

const crimeComparison = [
    {
        area: 'Panama City (safe zones)',
        rate: 'Moderate (12-15 per 100k)',
        safety: 'Good with awareness',
    },
    {
        area: 'Boquete',
        rate: 'Very low (2-3 per 100k)',
        safety: 'Excellent',
    },
    {
        area: 'Coronado',
        rate: 'Very low (2-3 per 100k)',
        safety: 'Excellent',
    },
    {
        area: 'Belize City',
        rate: 'Very high (41+ per 100k)',
        safety: 'Unsafe — avoid',
    },
    {
        area: 'Belmopan (capital)',
        rate: 'Moderate (18-22 per 100k)',
        safety: 'Fair',
    },
    {
        area: 'Caye Caulker / Ambergris',
        rate: 'Low (5-8 per 100k)',
        safety: 'Good',
    },
];

const realEstateComparison = [
    {
        aspect: 'Foreign Ownership Rights',
        panama: 'Full ownership, same as Panamanians',
        belize: 'Can own freehold, but market is illiquid',
        winner: 'Panama',
    },
    {
        aspect: 'Titled Property Availability',
        panama: 'Majority of sales are titled',
        belize: 'Many properties are cash-only or ROP (rights of possession)',
        winner: 'Panama',
    },
    {
        aspect: 'Mortgage Market',
        panama: 'Established, foreigners can qualify (20-30% down)',
        belize: 'Very limited, mostly cash only',
        winner: 'Panama',
    },
    {
        aspect: 'Property Tax Below $120K',
        panama: 'ZERO (major advantage)',
        belize: 'Yes (typically 1.5-2%)',
        winner: 'Panama',
    },
    {
        aspect: 'Market Liquidity',
        panama: 'Active, many agents and buyers',
        belize: 'Low, limited buyer pool',
        winner: 'Panama',
    },
    {
        aspect: 'New Construction Incentives',
        panama: 'Tax exonerations up to 20 years',
        belize: 'Limited programs',
        winner: 'Panama',
    },
];

const faqData = [
    {
        q: 'Which country has better internet for remote work?',
        a: 'Panama by a wide margin. Fiber-optic internet is widely available in Panama City, Boquete, and Coronado at $50-80/month for 300+ Mbps. Belize has spotty coverage with most areas limited to 10-30 Mbps satellite or DSL at $60-100/month. If remote work is important, Panama is significantly better.',
    },
    {
        q: 'Can I visit the USA easily from both countries?',
        a: 'Panama is better positioned. Copa Airlines operates a hub in Panama City with direct flights to major US cities (Miami, Houston, Orlando, New York). Flight time to Miami is 2.5 hours. From Belize, you must connect through Miami or Houston, adding 2-3 hours. Direct flights from Belize City are very limited.',
    },
    {
        q: 'Is English widely spoken in both countries?',
        a: 'Belize is better here — English is the official language. However, in Panama\'s expat zones (Panama City, Boquete, Coronado), you will find plenty of English speakers. If avoiding Spanish entirely is critical, Belize has the advantage, but Panama\'s expat communities are very accessible.',
    },
    {
        q: 'Which country has better beaches?',
        a: 'Belize wins decisively. The Belize Barrier Reef is world-famous for snorkeling and diving. Caye Caulker and Ambergris Caye have stunning Caribbean beaches. Panama has nice beaches in Bocas del Toro and the San Blas Islands, but they require more travel and are less developed for tourism. If beach life is non-negotiable, Belize is superior.',
    },
    {
        q: 'What about the cost of food and dining?',
        a: 'Panama is cheaper. A meal at a local comedor in Panama costs $3-5. Belize is significantly more expensive — local meals run $8-15+, and imported goods (common in tourist areas) are 30-50% pricier than Panama. If food costs matter to your budget, Panama wins.',
    },
    {
        q: 'Which country has a larger expat community?',
        a: 'Panama has roughly 100,000+ expats from North America and Europe. Belize has only about 10,000-15,000 expats. If community, social opportunities, and established expat infrastructure matter, Panama offers vastly more options. Boquete and Coronado have strong English-speaking social scenes.',
    },
    {
        q: 'Can I retire on Social Security in either country?',
        a: 'In Panama, yes — if you qualify for Pensionado with $1,000/month. Many retirees live on $1,500-2,500/month in Panama City or mountain towns. In Belize, you need $2,000/month minimum for QRP and that does not go as far. Most Belize retirees spend $2,500-4,000+/month for a comfortable lifestyle.',
    },
    {
        q: 'Which country is politically more stable?',
        a: 'Both are stable, but Panama is more developed economically. Panama has the Panama Canal, a major international business hub, and a diversified economy. Belize is smaller and more dependent on tourism and agriculture. Panama\'s institutions and financial systems are more mature and less prone to disruption.',
    },
];

export default async function PanamaBelizeRetirementPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
                        alt="Panama vs Belize"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        RETIREMENT COMPARISON · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Panama vs Belize:<br />The Real Retirement Story
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Both Caribbean nations attract budget retirees, but Panama wins on visa requirements, healthcare, crime, and real estate. Here is why — with data.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Belize and Panama are frequently compared by retirement-minded expatriates. Both use the US Dollar, have English-speaking populations (Belize entirely, Panama increasingly), and offer residency programs for foreign retirees. But the similarities end there.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        Panama is a nation of 4+ million with a diversified economy, world-class healthcare, and established expat infrastructure. Belize is a country of 400,000 with limited healthcare options and a smaller expatriate community. On nearly every metric that matters to retirees — visa costs, healthcare access, property rights, internet quality, and safety in residential areas — Panama wins decisively. This guide compares them across every dimension retirees care about.
                    </p>
                </section>

                {/* Quick Win */}
                <section className="reveal-on-scroll bg-brand-TEAL/10 rounded-2xl p-8 border border-brand-TEAL/30">
                    <div className="flex items-start gap-4">
                        <AlertCircle size={32} className="text-brand-TEAL flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-white font-heading font-bold text-xl mb-3 uppercase tracking-tight">The Big Win: Visa Costs</h3>
                            <p className="text-slate-500 mb-4">Belize requires $24,000/year in guaranteed pension income. Panama requires only $1,000/month ($12,000/year) — exactly HALF. For a couple living on $2,000/month Social Security, Panama works. Belize, mathematically, does not. This alone eliminates Belize for thousands of potential retirees.</p>
                            <p className="text-slate-400 text-sm font-mono bg-brand-950/50 px-4 py-2 rounded inline-block">Panama Pensionado = $1,000/mo min | Belize QRP = $2,000/mo min</p>
                        </div>
                    </div>
                </section>

                {/* Visa Deep Dive */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Globe className="inline text-brand-GOLD mr-2" size={28} />
                        Visa Requirements: Panama Wins 2-0
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {visaComparison.map((v, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-4">{v.country}</div>
                                <div className="space-y-3">
                                    <div>
                                        <div className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Program</div>
                                        <div className="text-white font-bold text-lg">{v.program}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Minimum Income</div>
                                        <div className="text-slate-300 font-semibold">{v.minIncome}</div>
                                        <div className="text-slate-500 text-xs">({v.minAnnual}/year)</div>
                                    </div>
                                    <div className="pt-2 border-t border-brand-100">
                                        <div className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Processing Time</div>
                                        <div className="text-slate-300 text-sm">{v.processingTime}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Status</div>
                                        <div className="text-slate-300 text-sm">{v.permanence}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Discounts</div>
                                        <div className="text-slate-300 text-sm">{v.discounts}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 mt-6 leading-relaxed">
                        Panama&apos;s Pensionado visa is a straight path: prove $1,000/month income (Social Security counts fully), deposit it in a local bank, and get permanent residency. No renewal required. Belize&apos;s Qualified Retiree Program (QRP) requires double the income with an annual review. Over a 30-year retirement, Panama is not only cheaper — it is simpler and more secure.
                    </p>
                </section>

                {/* Healthcare */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Heart className="inline text-brand-GOLD mr-2" size={28} />
                        Healthcare: Panama's Unfair Advantage
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        Healthcare is the #1 concern for retirees. Panama has Johns Hopkins-affiliated hospitals. Belize has no JCI-accredited hospitals. Period. Let that sink in.
                    </p>
                    <div className="overflow-x-auto mb-8">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4">Aspect</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Panama</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Belize</th>
                                    <th className="text-left text-brand-TEAL text-[10px] uppercase tracking-widest py-3 px-3">Winner</th>
                                </tr>
                            </thead>
                            <tbody>
                                {healthcareComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.aspect}</td>
                                        <td className="text-slate-300 text-xs py-3 px-3">{row.panama}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.belize}</td>
                                        <td className="text-slate-300 text-xs py-3 px-3 font-bold">{row.winner}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-brand-50 rounded-2xl p-6 border border-brand-GOLD/20">
                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-xs mb-4">Real-World Scenario: You Need a Hip Replacement</div>
                        <div className="space-y-4">
                            <div>
                                <div className="text-white font-bold text-sm mb-2">In Panama:</div>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    You walk into Hospital Punta Pacifica in Panama City. They have orthopedic surgeons, imaging, and OR facilities. The surgery costs $15,000-$22,000. You are home in 2 weeks.
                                </p>
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm mb-2">In Belize:</div>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Belize has no orthopedic surgeon. You are referred to Guatemala City or Mexico City for surgery. You travel, stay in a hotel for recovery, and costs are higher ($18,000-$25,000). Logistics are complex. Return flights + hotel = additional $2,000+.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Crime & Safety */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Shield className="inline text-brand-GOLD mr-2" size={28} />
                        Crime & Safety: Data Matters
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Belize City is one of the most dangerous cities in the Caribbean. But most retirement discussions ignore data and focus on anecdotes. Here are the numbers:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {crimeComparison.map((c, i) => (
                            <div key={i} className="card-light rounded-xl p-4 border border-brand-100">
                                <div className="text-white font-bold text-sm mb-2">{c.area}</div>
                                <div className="space-y-1">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-500 text-xs">Homicide rate (per 100k):</span>
                                        <span className="text-brand-GOLD text-xs font-bold">{c.rate}</span>
                                    </div>
                                    <div className="pt-2 border-t border-brand-100">
                                        <span className="text-slate-400 text-xs">Safety: {c.safety}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-brand-CORAL/10 rounded-2xl p-6 border border-brand-CORAL/30">
                        <p className="text-slate-400 text-sm leading-relaxed">
                            <strong className="text-white">Key Insight:</strong> Belize City is off-limits for tourists and retirees. Belmopan (the capital) is safer but bland. Caye Caulker and Ambergris Caye are tourist-focused and relatively safe, but prices are inflated. Panama City has specific safe zones (Punta Pacifica, Casco Viejo, El Cangrejo) where crime rates are comparable to Miami. Boquete and Coronado are mountain and beach havens with very low crime. Winner: Panama across the board.
                        </p>
                    </div>
                </section>

                {/* Cost of Living */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Actual Monthly Costs: Panama is Cheaper
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {costComparison.map((c, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-3">{c.category}</div>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">Panama</div>
                                        <div className="text-white font-black text-lg">{c.panama}</div>
                                    </div>
                                    <div className="border-t border-brand-100 pt-3">
                                        <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">Belize</div>
                                        <div className="text-slate-300 font-semibold text-lg">{c.belize}</div>
                                    </div>
                                    <div className="pt-2 border-t border-brand-100">
                                        <span className="text-slate-500 text-[10px] leading-relaxed">{c.notes}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 leading-relaxed">
                        At every lifestyle level, Panama is $300-500/month cheaper. Imported goods in Belize are expensive, utilities cost more, and tourist-area dining inflates local prices. Panama has a larger economy with more competition on prices. Pensionado discounts in Panama (25% off utilities, 25% off flights, 25% off restaurants, 50% off hotels Mon-Thu) further reduce costs.
                    </p>
                </section>

                {/* Real Estate */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <MapPin className="inline text-brand-GOLD mr-2" size={28} />
                        Real Estate & Property Rights
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        If you plan to buy property — and most serious retirees do — Panama has a vastly superior market.
                    </p>
                    <div className="space-y-4">
                        {realEstateComparison.map((r, i) => (
                            <div key={i} className="flex items-start gap-4 card-light rounded-xl p-5 border border-brand-100">
                                <div className="flex-shrink-0 w-24">
                                    <div className="text-brand-GOLD font-black text-[10px] uppercase tracking-widest mb-1">Aspect</div>
                                    <div className="font-bold text-white text-sm">{r.aspect}</div>
                                </div>
                                <div className="flex-grow space-y-2">
                                    <div>
                                        <span className="text-brand-TEAL text-[10px] font-bold uppercase">Panama:</span>
                                        <p className="text-slate-500 text-xs leading-relaxed mt-1">{r.panama}</p>
                                    </div>
                                    <div>
                                        <span className="text-slate-400 text-[10px] font-bold uppercase">Belize:</span>
                                        <p className="text-slate-500 text-xs leading-relaxed mt-1">{r.belize}</p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 text-brand-GOLD font-black text-lg">{r.winner}</div>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 mt-8 leading-relaxed">
                        Panama properties under $120,000 pay ZERO property tax. New construction in Panama receives tax exonerations up to 20 years. Mortgages are available to foreigners (20-30% down, 6-9% rates). The Belize real estate market is mostly cash transactions with limited liquidity. If retirement planning includes a property purchase, Panama is the clear winner.
                    </p>
                </section>

                {/* Internet & Connectivity */}
                <section className="reveal-on-scroll bg-brand-50 rounded-2xl p-8 border border-brand-GOLD/20">
                    <div className="text-brand-GOLD font-black uppercase tracking-widest text-xs mb-4">Digital Nomads & Remote Work</div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-white font-bold text-lg mb-3">Panama</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={14} className="text-brand-TEAL mt-1 flex-shrink-0" />
                                    <span className="text-slate-500 text-sm">Fiber-optic widely available in Panama City, Boquete, Coronado</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={14} className="text-brand-TEAL mt-1 flex-shrink-0" />
                                    <span className="text-slate-500 text-sm">300+ Mbps at $50-80/month</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={14} className="text-brand-TEAL mt-1 flex-shrink-0" />
                                    <span className="text-slate-500 text-sm">Multiple providers = competition and reliability</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-3">Belize</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <AlertCircle size={14} className="text-brand-CORAL mt-1 flex-shrink-0" />
                                    <span className="text-slate-500 text-sm">Spotty fiber; most areas use satellite/DSL</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertCircle size={14} className="text-brand-CORAL mt-1 flex-shrink-0" />
                                    <span className="text-slate-500 text-sm">10-30 Mbps typical at $60-100/month</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertCircle size={14} className="text-brand-CORAL mt-1 flex-shrink-0" />
                                    <span className="text-slate-500 text-sm">Limited provider options = higher prices</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* The Belize Advantages */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Where Belize Actually Wins
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        To be fair, Belize does excel in a few areas:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            {
                                title: 'English is Official Language',
                                desc: 'No language barrier. Spanish is not necessary, though learning it helps. All government and legal documents are in English.',
                            },
                            {
                                title: 'Stunning Coral Reef',
                                desc: 'The Belize Barrier Reef is world-class. Snorkeling and diving are incredible. Panama has reefs too (Bocas, San Blas), but Belize\'s reef is more accessible.',
                            },
                            {
                                title: 'Caribbean Island Lifestyle',
                                desc: 'Caye Caulker and Ambergris Caye offer island living. If you want sea, palm trees, and no mainland feel, Belize delivers.',
                            },
                            {
                                title: 'Smaller, Quieter Country',
                                desc: 'Belize is intimate. No big city energy. If you want to escape to a small, quiet place, Belize is it. Panama City is urban and busy.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3D Chart */}
                <section className="reveal-on-scroll bg-brand-50 rounded-2xl p-8 border border-brand-100">
                    <h3 className="text-white font-heading font-bold text-2xl mb-4 uppercase tracking-tight">Monthly Cost Comparison Visualization</h3>
                    <p className="text-slate-500 text-sm mb-6">See how retirement budgets stack up between Panama and Belize at different lifestyle levels.</p>
                    <div className="rounded-xl overflow-hidden bg-white border border-brand-100" style={{ height: '400px' }}>
                        <CostBarChart />
                    </div>
                </section>

                {/* FAQ */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-5">
                        {faqData.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <details className="cursor-pointer group">
                                    <summary className="flex items-center justify-between font-bold text-white text-sm hover:text-brand-GOLD transition-colors">
                                        <span>{item.q}</span>
                                        <span className="text-brand-GOLD group-open:rotate-180 transition-transform">+</span>
                                    </summary>
                                    <div className="mt-4 pt-4 border-t border-brand-100">
                                        <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Verdict */}
                <section className="reveal-on-scroll bg-brand-TEAL/10 rounded-2xl p-8 border border-brand-TEAL/30">
                    <h3 className="text-white font-heading text-2xl font-bold mb-4 uppercase tracking-tight">The Verdict</h3>
                    <p className="text-slate-500 mb-4 leading-relaxed">
                        Panama is the superior retirement destination for the vast majority of retirees. Here is why:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Visa costs half as much</strong> — $1,000/month vs $2,000/month</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Healthcare is world-class</strong> — Johns Hopkins affiliate vs no accredited hospitals in Belize</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Real estate is transparent and liquid</strong> — titled property, mortgages available, zero property tax under $120K</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Internet is modern</strong> — fiber-optic in all expat zones vs satellite/DSL in Belize</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Safe residential zones abound</strong> — Boquete, Coronado, Panama City vs limited safe options in Belize</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Larger expat community</strong> — 100K+ expats vs 10K in Belize</span>
                        </li>
                    </ul>
                    <p className="text-slate-500 mt-6 leading-relaxed">
                        Choose Belize if: You want island life, the Caribbean reef, and a very small country. You speak no Spanish and want zero language learning curve. You are wealthy and immune to healthcare limitations.
                    </p>
                    <p className="text-slate-500 mt-4 leading-relaxed">
                        Choose Panama if: You need affordable healthcare, a low visa income requirement, property rights, good internet, and a mature expat community. In other words, choose Panama for a worry-free retirement.
                    </p>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Ready to Explore Panama?
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Our team specializes in helping retirees compare destinations and find the perfect Panama neighborhood for their lifestyle. We will walk you through visa options, real estate opportunities, and visa advantages — at no cost.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/${lang}/contacto`}
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Start Your Comparison <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/blog/retire-in-panama`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Full Panama Retirement Guide
                        </Link>
                    </div>
                </section>

            </div>
        </article>
    );
}
