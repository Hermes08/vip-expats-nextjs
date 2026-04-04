import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, DollarSign, TrendingUp, Home, AlertCircle, Zap } from 'lucide-react';
import { CostBarChart } from '@/components/three/ThreeComponents';


export const metadata: Metadata = {
    title: 'Panama vs Mexico Retirement 2026: Which is Better? Full Comparison',
    description: 'Compare Panama vs Mexico for retirement. Costs, lifestyle, visas, real estate, communities.',
    keywords: 'Panama vs Mexico retirement, Mexico vs Panama cost of living, retire in Panama or Mexico',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/panama-vs-mexico-retirement',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/panama-vs-mexico-retirement',
            'es': 'https://panamarealestatesale.com/es/blog/panama-vs-mexico-retirement',
            'pt': 'https://panamarealestatesale.com/pt/blog/panama-vs-mexico-retirement',
            'de': 'https://panamarealestatesale.com/de/blog/panama-vs-mexico-retirement',
        },
    },
    openGraph: {
        title: 'Panama vs Mexico Retirement 2026: Which is Better? Full Comparison',
        description: 'Compare Panama vs Mexico for retirement. Costs, lifestyle, visas, real estate, communities.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/panama-vs-mexico-retirement',
        images: [{ url: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80', width: 1200, height: 630, alt: 'Comparison' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Panama vs Mexico Retirement 2026: Which is Better? Full Comparison',
        description: 'Compare Panama vs Mexico for retirement. Costs, lifestyle, visas, real estate, communities.',
        images: ['https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80'],
    },
};

const costComparisonData = [
    ['Expense Category', 'Puerto Vallarta, Mexico', 'Cancun, Mexico', 'Boquete, Panama', 'Panama City, Panama'],
    ['Housing (2BR apt)', '$1,200–1,600', '$1,500–2,000', '$800–1,200', '$1,200–1,800'],
    ['Utilities (electric, water, internet)', '$150–250', '$180–300', '$80–120', '$120–200'],
    ['Groceries (monthly)', '$300–450', '$350–500', '$250–350', '$400–600'],
    ['Dining out (dinner for 2)', '$25–40', '$30–50', '$20–30', '$35–60'],
    ['Transportation', '$50–100', '$60–120', '$30–50', '$80–150'],
    ['Healthcare (avg annual)', '$2,000–4,000', '$2,500–5,000', '$1,500–3,000', '$2,000–4,000'],
    ['Total Monthly Budget', '$2,800–3,800', '$3,200–4,500', '$1,500–2,200', '$2,200–2,800'],
];

const visaComparisonData = [
    ['Criteria', 'Mexico', 'Panama'],
    ['Visa Name', 'Temporary/Permanent Resident', 'Pensionado Visa'],
    ['Minimum Income Required', '$2,700–3,500/month', '$1,350–1,500/month'],
    ['Processing Time', '6–12 months', '3–6 months'],
    ['Duration (First Issue)', 'Temporary: 4 years, then Permanent: 4 years', '5 years, renewable indefinitely'],
    ['Path to Citizenship', 'After 4 years permanent, eligible after 5 years', 'After 5 years, can apply'],
    ['Cost (all fees/processing)', '$1,500–3,000', '$1,000–2,000'],
    ['Spouse Included', 'Yes', 'Yes'],
    ['Dependent Children', 'Yes, with separate requirements', 'Yes, per dependent'],
    ['Proof Required', 'Income verification (bank statements, investment accounts)', 'Pension statement or investment income (IRS form 1042-S or similar)'],
];

const healthcareComparisonData = [
    ['Healthcare Metric', 'Mexico', 'Panama'],
    ['JCI-Accredited Hospitals', '25–30 major facilities', '15–20 major facilities (higher density in Panama City)'],
    ['Average Doctor Visit (private)', '$40–80', '$50–100'],
    ['Cost of Open Heart Surgery', '$25,000–35,000', '$30,000–45,000'],
    ['Cost of Hip Replacement', '$15,000–22,000', '$18,000–28,000'],
    ['Pharmacy Cost (typical medication)', '$5–15 (brand), $2–8 (generic)', '$6–18 (brand), $3–10 (generic)'],
    ['Dental Cleaning', '$50–100', '$60–120'],
    ['Expat Health Insurance (annual)', '$1,500–4,000', '$1,800–5,000'],
    ['Insurance Claim Processing', '2–4 weeks typical', '1–3 weeks typical'],
    ['English-Speaking Doctors', 'Good in tourist areas; limited outside', 'Excellent in Panama City; good in Boquete'],
];

const realEstateComparisonData = [
    ['Property Type', 'Puerto Vallarta', 'Boquete, Panama', 'Panama City'],
    ['2BR Apartment (city center)', '$250,000–400,000', '$120,000–180,000', '$200,000–350,000'],
    ['3BR House (residential area)', '$350,000–550,000', '$150,000–250,000', '$300,000–500,000'],
    ['Oceanfront 2BR Condo', '$400,000–700,000', '$180,000–300,000 (mountain views)', '$350,000–600,000'],
    ['Property Tax (annual, ~1%)', '~1.2% of assessed value', '0% (no property tax)', '0.5–1% of assessed value'],
    ['Rental Yield (annual %)', '4–6%', '5–8%', '5–7%'],
    ['Maintenance/HOA (monthly)', '$200–400', '$100–200', '$150–300'],
    ['Appreciation (5-year avg)', '2–4% annually', '3–5% annually', '4–6% annually'],
];

const chartData = [
    { label: 'Puerto Vallarta, Mexico', value: 3400, color: '#e05555' },
    { label: 'Cancun, Mexico', value: 3850, color: '#e07777' },
    { label: 'Boquete, Panama', value: 1750, color: '#D4A843' },
    { label: 'Panama City', value: 2500, color: '#00C5CB' },
];

const safetyStats = [
    { city: 'Puerto Vallarta, Mexico', murderRate: 23.5, notes: 'Tourist areas generally safe; cartel presence inland' },
    { city: 'Cancun, Mexico', murderRate: 25.8, notes: 'Heavy tourist presence; organized crime activity' },
    { city: 'Boquete, Panama', murderRate: 4.2, notes: 'Rural mountain town; very low crime' },
    { city: 'Panama City, Panama', murderRate: 13.5, notes: 'Modern neighborhoods like Coronado and Boquete suburbs very safe; avoid certain areas' },
];

export default async function PanamaVsMexicoPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="bg-brand-50 py-32 relative overflow-hidden"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1600&h=800&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/70 to-transparent" />
                <div className="max-w-4xl mx-auto px-4 text-left relative z-10 pt-8">
                    <span className="text-xs font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">RETIREMENT COMPARISON · 2026</span>
                    <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Panama vs Mexico for Retirement 2026
                    </h1>
                    <p className="text-xl text-gray-100 leading-relaxed font-medium max-w-2xl">
                        The honest data-driven comparison. Discover why Panama's territorial tax system, faster visas, superior healthcare, and stable economy make it the smarter choice for retirement.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <div className="flex items-center gap-2 text-brand-GOLD">
                            <CheckCircle size={20} />
                            <span className="font-semibold">0% Tax on Foreign Income</span>
                        </div>
                        <div className="flex items-center gap-2 text-brand-TEAL">
                            <Zap size={20} />
                            <span className="font-semibold">3–6 Month Visa</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-20 space-y-20">
                {/* Introduction Section */}
                <section className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h2 className="font-heading text-3xl font-bold text-brand-950 mb-4">
                                Why This Comparison Matters
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Mexico and Panama have long been the two most popular retirement destinations for North Americans. Both offer warm climates, affordable living, and rich culture. But beneath the surface, the differences are substantial—and Panama's advantages in taxation, visa processing, healthcare infrastructure, and currency stability are often overlooked.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                This guide presents real data across the categories that matter most to retirees: monthly costs, visa requirements, healthcare quality, real estate investment potential, and safety. We'll show you exactly where each country excels—and why Panama consistently comes out ahead for most retirement scenarios.
                            </p>
                        </div>
                        <div className="bg-brand-50 p-8 rounded-xl border border-brand-100">
                            <h3 className="font-heading text-2xl font-bold text-brand-950 mb-6">Quick Summary</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle className="text-brand-TEAL flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-brand-950">Panama: 0% Tax on Foreign Income</p>
                                        <p className="text-sm text-gray-600">Mexico taxes worldwide income at up to 35%</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-brand-TEAL flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-brand-950">Panama Pensionado: 3–6 Months</p>
                                        <p className="text-sm text-gray-600">Mexico takes 6–12 months minimum</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-brand-TEAL flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-brand-950">Panama City: Superior Healthcare</p>
                                        <p className="text-sm text-gray-600">More JCI-accredited hospitals; better English</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-brand-TEAL flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-brand-950">Panama: USD Stability</p>
                                        <p className="text-sm text-gray-600">No currency devaluation risk vs Mexican peso</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Cost Comparison Chart */}
                <section className="space-y-6">
                    <div>
                        <h2 className="font-heading text-3xl font-bold text-brand-950 mb-2">Monthly Retirement Budget: Where Your Money Goes</h2>
                        <p className="text-gray-600 mb-8">Comfortable lifestyle for a couple, including housing, food, utilities, healthcare, and leisure activities.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-brand-100">
                        <CostBarChart
                            data={chartData}
                            title="Monthly Retirement Budget Comparison"
                            subtitle="Average monthly expenses for comfortable couple lifestyle · USD"
                            height="320px"
                        />
                    </div>
                    <div className="bg-brand-GOLD/5 border-l-4 border-brand-GOLD p-6 rounded">
                        <p className="text-gray-800">
                            <strong>Key Insight:</strong> Boquete, Panama offers the lowest cost of living at $1,500–2,200/month, while Cancun, Mexico costs nearly 2.2× more. Even Panama City, a major modern city with superior amenities, costs 26–40% less than popular Mexican retirement destinations.
                        </p>
                    </div>
                </section>

                {/* Cost Breakdown Table */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Detailed Cost Breakdown by Category</h2>
                    <div className="overflow-x-auto border border-brand-100 rounded-lg">
                        <table className="w-full">
                            <thead className="bg-brand-950 text-white">
                                <tr>
                                    {costComparisonData[0].map((header, i) => (
                                        <th key={i} className="px-6 py-4 text-left text-sm font-semibold">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-brand-100">
                                {costComparisonData.slice(1).map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-50'}>
                                        {row.map((cell, i) => (
                                            <td
                                                key={i}
                                                className={`px-6 py-4 text-sm ${i === 0 ? 'font-semibold text-brand-950' : 'text-gray-700'}`}
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-600">
                        <strong>Data Sources:</strong> Numbeo cost of living database (Jan 2026), local expat surveys, immigration ministry data. Figures based on mid-range neighborhoods with good expat infrastructure.
                    </p>
                </section>

                {/* Visa & Residency Comparison */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Visa & Residency: Speed & Requirements</h2>
                    <p className="text-lg text-gray-700">
                        The visa process is critical. You want to move as quickly as possible with minimal bureaucratic friction. Panama's Pensionado visa is significantly faster and requires lower monthly income than Mexico's residency program.
                    </p>
                    <div className="overflow-x-auto border border-brand-100 rounded-lg">
                        <table className="w-full">
                            <thead className="bg-brand-950 text-white">
                                <tr>
                                    {visaComparisonData[0].map((header, i) => (
                                        <th key={i} className="px-6 py-4 text-left text-sm font-semibold">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-brand-100">
                                {visaComparisonData.slice(1).map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-50'}>
                                        {row.map((cell, i) => (
                                            <td
                                                key={i}
                                                className={`px-6 py-4 text-sm ${i === 0 ? 'font-semibold text-brand-950' : 'text-gray-700'}`}
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-brand-TEAL/10 border-l-4 border-brand-TEAL p-6 rounded">
                        <h4 className="font-semibold text-brand-950 mb-2">Panama Wins: 50% Faster Processing</h4>
                        <p className="text-gray-800">
                            Panama's Pensionado visa typically processes in 3–6 months, whereas Mexico's temporary resident visa takes 6–12 months. Additionally, Panama requires just $1,350–1,500/month in passive income versus Mexico's $2,700–3,500/month—making Panama more accessible for many retirees.
                        </p>
                    </div>
                </section>

                {/* Healthcare Comparison */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Healthcare Infrastructure & Quality</h2>
                    <p className="text-lg text-gray-700">
                        Healthcare quality is non-negotiable in retirement. Both countries have excellent medical services for international retirees, but Panama City's concentration of JCI-accredited hospitals and English-speaking doctors gives it an edge for critical procedures and continuity of care.
                    </p>
                    <div className="overflow-x-auto border border-brand-100 rounded-lg">
                        <table className="w-full">
                            <thead className="bg-brand-950 text-white">
                                <tr>
                                    {healthcareComparisonData[0].map((header, i) => (
                                        <th key={i} className="px-6 py-4 text-left text-sm font-semibold">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-brand-100">
                                {healthcareComparisonData.slice(1).map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-50'}>
                                        {row.map((cell, i) => (
                                            <td
                                                key={i}
                                                className={`px-6 py-4 text-sm ${i === 0 ? 'font-semibold text-brand-950' : 'text-gray-700'}`}
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-brand-50 p-6 rounded-lg border border-brand-100">
                            <h4 className="font-semibold text-brand-950 mb-3 flex items-center gap-2">
                                <CheckCircle className="text-brand-TEAL" size={20} />
                                Panama's Healthcare Strengths
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• 15–20 JCI-accredited hospitals in high density urban areas</li>
                                <li>• Panama City has 5–6 world-class tertiary care centers</li>
                                <li>• English-speaking doctors in 85%+ of medical facilities in Panama City</li>
                                <li>• Medical tourism hub with competitive pricing</li>
                                <li>• Faster insurance claim processing (1–3 weeks)</li>
                            </ul>
                        </div>
                        <div className="bg-brand-50 p-6 rounded-lg border border-brand-100">
                            <h4 className="font-semibold text-brand-950 mb-3 flex items-center gap-2">
                                <AlertCircle className="text-orange-500" size={20} />
                                Mexico's Healthcare Challenges
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• Wide variation in hospital quality outside major tourist zones</li>
                                <li>• English proficiency less consistent outside tourist areas</li>
                                <li>• Some regions have limited access to cutting-edge treatments</li>
                                <li>• Insurance claim processing slower (2–4 weeks typical)</li>
                                <li>• Larger geographic distances between quality facilities</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Real Estate Investment */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Real Estate: Investment Potential & Property Costs</h2>
                    <p className="text-lg text-gray-700">
                        Whether you're buying a retirement home or viewing property as an investment, Panama offers superior long-term appreciation, lower property taxes, and better rental yields.
                    </p>
                    <div className="overflow-x-auto border border-brand-100 rounded-lg">
                        <table className="w-full">
                            <thead className="bg-brand-950 text-white">
                                <tr>
                                    {realEstateComparisonData[0].map((header, i) => (
                                        <th key={i} className="px-6 py-4 text-left text-sm font-semibold">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-brand-100">
                                {realEstateComparisonData.slice(1).map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-50'}>
                                        {row.map((cell, i) => (
                                            <td
                                                key={i}
                                                className={`px-6 py-4 text-sm ${i === 0 ? 'font-semibold text-brand-950' : 'text-gray-700'}`}
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-brand-GOLD/5 border-l-4 border-brand-GOLD p-6 rounded">
                        <p className="text-gray-800">
                            <strong>Real Estate Advantage: Panama.</strong> A $300,000 property in Panama City with 5% annual appreciation generates $15,000/year in equity gains—plus 5–7% rental yield if rented out. Meanwhile, a similar $400,000 property in Puerto Vallarta faces slower appreciation (2–4%) and property tax at 1.2% annually ($4,800/year vs Panama's $0).
                        </p>
                    </div>
                </section>

                {/* Safety & Security */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Safety & Security: Where You'll Actually Live</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Safety perceptions often overstate the danger in both countries. The reality: expat neighborhoods in both nations are generally secure. However, Panama City's modern infrastructure and strict zoning of residential versus high-crime areas makes it objectively safer for retirees.
                    </p>
                    <div className="bg-brand-50 p-8 rounded-lg border border-brand-100">
                        <h4 className="font-heading text-xl font-bold text-brand-950 mb-6">Murder Rate Comparison (per 100,000)</h4>
                        <div className="space-y-4">
                            {safetyStats.map((stat, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="flex-1">
                                        <p className="font-semibold text-brand-950">{stat.city}</p>
                                        <p className="text-sm text-gray-600">{stat.notes}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-brand-TEAL">{stat.murderRate}</p>
                                        <p className="text-xs text-gray-500">per 100k</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white p-6 rounded-lg border-2 border-brand-TEAL">
                            <h4 className="font-semibold text-brand-950 mb-3 flex items-center gap-2">
                                <CheckCircle className="text-brand-TEAL" size={20} />
                                Panama City Safe Zones
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• Coronado: Modern beachfront with 24/7 security</li>
                                <li>• Boquete: Mountain town with virtually zero expat crime</li>
                                <li>• Punta Pacifica: High-rise luxury with gated entry</li>
                                <li>• Casco Viejo: Historic district with police presence</li>
                                <li>• Panama Viejo: Planned residential community</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg border-2 border-brand-TEAL">
                            <h4 className="font-semibold text-brand-950 mb-3 flex items-center gap-2">
                                <CheckCircle className="text-brand-TEAL" size={20} />
                                Mexico Safe Zones
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• Puerto Vallarta: Tourist-focused with good police coverage</li>
                                <li>• San Pancho: Small beach town near Vallarta</li>
                                <li>• Playa del Carmen: Major expat hub, heavily commercialized</li>
                                <li>• Oaxaca (central highlands): Cultural haven but less developed security</li>
                                <li>• Lake Chapala: Expat enclave with community watch</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-brand-TEAL/10 border-l-4 border-brand-TEAL p-6 rounded mt-8">
                        <p className="text-gray-800">
                            <strong>The Real Story:</strong> Both countries are safe in expat neighborhoods. Panama's advantage is that safety is more consistently high across multiple neighborhoods (Coronado, Boquete, Casco Viejo), whereas Mexico's safety varies dramatically by region. Expats in Boquete report virtually zero crime; those in inland Mexico face more variability.
                        </p>
                    </div>
                </section>

                {/* Why Panama Wins */}
                <section className="space-y-6 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white p-12 rounded-xl">
                    <h2 className="font-heading text-3xl font-bold mb-8">Why Panama Wins for Most Retirees</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand-GOLD">
                                        <span className="text-brand-950 font-bold">1</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">Territorial Tax System (0% Foreign Income)</h4>
                                    <p className="text-gray-100">
                                        If you earn rental income, dividends, or pension payments from outside Panama, you pay zero tax. Mexico taxes worldwide income. For a retiree with $2,000/month in U.S. pension income and $1,000/month in investment dividends, this alone saves $36,000+ annually in taxes.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand-GOLD">
                                        <span className="text-brand-950 font-bold">2</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">50% Faster Visa Processing</h4>
                                    <p className="text-gray-100">
                                        Get permanent residency in 3–6 months instead of 6–12 months. Panama's bureaucracy is more efficient, and you can start living in country while your visa processes.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand-GOLD">
                                        <span className="text-brand-950 font-bold">3</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">Lower Income Requirement</h4>
                                    <p className="text-gray-100">
                                        Pensionado visa requires $1,350–1,500/month vs Mexico's $2,700–3,500/month. More retirees qualify, and your cost of living buffer is larger.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand-GOLD">
                                        <span className="text-brand-950 font-bold">4</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">USD Economy (No Currency Risk)</h4>
                                    <p className="text-gray-100">
                                        Panama uses the U.S. dollar. Your retirement savings maintain consistent purchasing power. The Mexican peso devalues 4–6% annually on average, eroding your savings over time.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand-GOLD">
                                        <span className="text-brand-950 font-bold">5</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">World-Class Healthcare Infrastructure</h4>
                                    <p className="text-gray-100">
                                        Panama City has higher-density JCI-accredited hospitals and better English-speaking medical professionals. Critical for aging retirees requiring regular specialist access.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand-GOLD">
                                        <span className="text-brand-950 font-bold">6</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">Superior Long-Term Real Estate Appreciation</h4>
                                    <p className="text-gray-100">
                                        Panama appreciates 4–6% annually vs Mexico's 2–4%. Over 10 years, a $300,000 property becomes $580,000 in Panama vs $438,000 in Mexico—a $142,000 difference.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Where Mexico Still Wins */}
                <section className="space-y-6 bg-gray-50 p-8 rounded-xl border border-brand-100">
                    <h2 className="font-heading text-2xl font-bold text-brand-950 mb-6">Mexico's Genuine Advantages (Be Fair)</h2>
                    <p className="text-gray-700 mb-6">
                        Panama isn't perfect. Mexico genuinely excels in some categories:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                <MapPin className="text-brand-GOLD" size={20} />
                                Larger Expat Community
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Mexico has 1+ million expats. You'll find established social circles, English-language support groups, and services tailored to English speakers everywhere. Panama's expat community is growing but smaller, especially outside Panama City.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                <Home className="text-brand-GOLD" size={20} />
                                Proximity to USA
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Mexico is closer (4–6 hours from southern U.S.). Panama requires a flight. If you plan frequent U.S. visits or have family obligations, Mexico's geography matters.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                <TrendingUp className="text-brand-GOLD" size={20} />
                                Richer Cultural Offerings
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Mexico's food, art, and cultural depth is unmatched. Pre-Columbian archaeology, colonial cities, regional cuisine variety—Mexico offers cultural immersion that Panama cannot replicate.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                <DollarSign className="text-brand-GOLD" size={20} />
                                Rock-Bottom Costs in Some Areas
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Lake Chapala and San Miguel de Allende offer costs as low as $1,200–1,500/month. If cost is your absolute priority, Mexico's cheapest zones match Boquete.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="space-y-8">
                    <h2 className="font-heading text-3xl font-bold text-brand-950 mb-12">Frequently Asked Questions</h2>

                    <div className="space-y-6">
                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>Can I get a Mexico visa with less than $2,700/month income?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Mexico technically requires $2,700–3,500/month demonstrated income for temporary resident status. However, some applicants with significantly lower amounts have been approved, especially if they show substantial assets. Panama's Pensionado visa is more flexible and more consistently enforced at $1,350–1,500/month minimum. If your income is borderline, Panama is the safer choice.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>Do I need to report my foreign income to the IRS if I'm in Panama?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                <strong>Yes, absolutely.</strong> You are a U.S. citizen/green card holder with ongoing IRS obligations regardless of where you live. Panama's 0% tax applies only to Panama-source income. Your U.S. pension, Social Security, and investment income must still be reported to the IRS. However, you may qualify for the Foreign Earned Income Exclusion (FEIE) or Foreign Tax Credit if applicable to your situation. Consult a CPA familiar with expat taxation.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>Is healthcare quality really better in Panama City than Puerto Vallarta?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                For routine care and common procedures, both are excellent. However, Panama City's concentration of JCI-accredited hospitals (CIMA, Paitilla, ABC, Metropolitan) means better access to specialized care, organ transplant surgery, and cutting-edge treatments. Puerto Vallarta's medical facilities are very good but smaller and more tourism-focused. For serious or rare conditions, Panama City has a meaningful advantage in facility density and English-speaking specialists.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>What about natural disasters? Is one country safer than the other?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Panama experiences hurricane season (June–November) but is south of the main hurricane belt, meaning fewer direct hits. Boquete sits at 5,000 ft elevation and is hurricane-safe. Mexico's Caribbean coast faces similar hurricane risk. Both countries experience occasional earthquakes, though Panama's are generally milder. Neither country poses exceptional disaster risk compared to U.S. coastal regions or earthquake zones. Choose based on lifestyle, not disaster risk.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>Can I retire on Social Security alone in either country?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                If your Social Security is $2,000+/month, yes. In Panama's Boquete, you can live comfortably on $1,500–1,800/month. In Panama City, you'll want $2,200+. Similar math applies to Mexico. The real issue is that Panama's Pensionado visa officially requires $1,350–1,500/month in passive income, whereas many Social Security recipients qualify. Check with an immigration attorney to confirm your specific situation before planning your move.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>What if I'm married? Do both spouses need separate Pensionado applications in Panama?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                No. One spouse can apply for the Pensionado visa and include the other spouse as a dependent. Both spouses must demonstrate the income requirement (it's per-person: one main applicant at $1,350–1,500 + spouse at same amount). Children under 25 can be added. The process is streamlined and faster than applying individually. Mexico follows a similar approach with its temporary/permanent resident visa.
                            </p>
                        </details>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-brand-950 to-brand-900 rounded-xl p-12 text-white text-center space-y-8 my-16">
                    <h2 className="font-heading text-4xl font-bold">Ready to Start Your Panama Retirement Journey?</h2>
                    <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
                        Schedule a consultation with our Panama real estate and residency experts. We'll review your specific situation, answer your visa questions, and show you properties in Coronado, Boquete, and Panama City that match your retirement vision.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link
                            href={`/${lang}/contacto`}
                            className="bg-brand-GOLD text-brand-950 px-8 py-4 rounded-lg font-semibold hover:bg-brand-GOLD/90 transition flex items-center justify-center gap-2 group"
                        >
                            Schedule Free Consultation
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                        </Link>
                        <Link
                            href={`/${lang}/properties`}
                            className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border border-white hover:bg-white/30 transition"
                        >
                            Browse Panama Properties
                        </Link>
                    </div>
                </section>

                {/* Closing Paragraph */}
                <section className="prose prose-lg max-w-none mb-12">
                    <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">The Bottom Line</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Panama and Mexico are both excellent retirement destinations. But if you prioritize tax efficiency, fast visa processing, healthcare infrastructure, currency stability, and long-term real estate appreciation, Panama consistently outperforms Mexico.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        The numbers don't lie: A retiree with $3,000/month in foreign income saves $36,000+ annually in taxes by choosing Panama. You receive your Pensionado visa 50% faster. Your healthcare access is superior. Your real estate appreciates 2–3× faster. Your purchasing power never erodes because you're using the U.S. dollar.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        For most North American retirees, Panama is the rational choice. Mexico remains excellent for those prioritizing culture, large expat networks, or maximum geographic proximity to the United States.
                    </p>
                </section>
            </div>
        </article>
    );
}
