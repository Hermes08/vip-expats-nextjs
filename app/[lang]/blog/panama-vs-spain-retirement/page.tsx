import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, DollarSign, TrendingUp, Home, AlertCircle, Globe } from 'lucide-react';
import { CostBarChart } from '@/components/three/ThreeComponents';


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const slug = 'panama-vs-spain-retirement';
  const domain = 'https://panamarealestatesale.com';
  const canonical = `${domain}/${lang}/blog/${slug}`;

  return {
    title: 'Panama vs Spain Retirement 2026: Comparison, Costs, Lifestyle',
    description: 'Compare Panama vs Spain for retirement. Golden Visa, costs, lifestyle, healthcare, communities.',
    keywords: 'Panama vs Spain, retire Panama vs Spain, cost of living Panama Spain, Spain retirement visa',
    alternates: {
        canonical,
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/panama-vs-spain-retirement',
            'es': 'https://panamarealestatesale.com/es/blog/panama-vs-spain-retirement',
            'pt': 'https://panamarealestatesale.com/pt/blog/panama-vs-spain-retirement',
            'de': 'https://panamarealestatesale.com/de/blog/panama-vs-spain-retirement',
        },
    },
    openGraph: {
        title: 'Panama vs Spain Retirement 2026: Comparison, Costs, Lifestyle',
        description: 'Compare Panama vs Spain for retirement. Golden Visa, costs, lifestyle, healthcare, communities.',
        type: 'article',
        url: canonical,
        images: [{ url: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80', width: 1200, height: 630, alt: 'Comparison' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Panama vs Spain Retirement 2026: Comparison, Costs, Lifestyle',
        description: 'Compare Panama vs Spain for retirement. Golden Visa, costs, lifestyle, healthcare, communities.',
        images: ['https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80'],
    },
};
}

const costComparisonData = [
    ['Expense Category', 'Madrid, Spain', 'Barcelona, Spain', 'Valencia, Spain', 'Panama City', 'Boquete'],
    ['Housing (2BR apt)', '$1,000–1,600', '$1,100–1,800', '$700–1,100', '$1,200–1,800', '$800–1,200'],
    ['Utilities (electric, water, internet)', '$100–180', '$120–200', '$80–150', '$120–200', '$80–120'],
    ['Groceries (monthly)', '$350–500', '$380–550', '$280–400', '$400–600', '$250–350'],
    ['Dining out (dinner for 2)', '$30–50', '$35–60', '$20–35', '$35–60', '$20–30'],
    ['Transportation', '$50–100', '$60–120', '$40–80', '$80–150', '$30–50'],
    ['Healthcare (avg annual)', '$2,000–4,000', '$2,500–5,000', '$1,500–3,500', '$2,000–4,000', '$1,500–3,000'],
    ['Total Monthly Budget', '$3,800–5,200', '$4,000–5,500', '$2,800–3,800', '$2,200–2,800', '$1,500–2,200'],
];

const taxComparisonData = [
    ['Tax Category', 'Spain', 'Panama'],
    ['Income Tax (Personal)', '10–45% (progressive)', '0% (foreign income)'],
    ['Capital Gains Tax', '24% flat', '0%'],
    ['Dividend Tax', '19–24%', '0%'],
    ['Real Estate Tax (annual)', '0.4–1.1% of value', '0% (none)'],
    ['Wealth Tax', 'Varies by region (abolished 2024, some regions reinstating)', 'None'],
    ['Social Security (employed)', '28–35%', 'Not required for retirees'],
    ['Inheritance Tax', '7.65–34% (varies by region)', 'Minimal (depends on residency)'],
    ['Tax Treaties with USA', 'Yes (benefits some retirees)', 'Yes'],
];

const visaComparisonData = [
    ['Criteria', 'Spain (Non-Lucrative/Long-Stay)', 'Panama (Pensionado)'],
    ['Income Requirement', '€2,300/month (€27,600/year)', '$1,350–1,500/month'],
    ['Processing Time', '8–12 weeks', '3–6 months'],
    ['Duration (First Issue)', '1 year (renewable for 2 years, then 5 years)', '5 years (renewable indefinitely)'],
    ['Path to Citizenship', '10 years residency, then eligible', '5 years residency, then eligible'],
    ['Cost (all fees/processing)', '$1,500–2,500', '$1,000–2,000'],
    ['Spouse Included', 'Yes', 'Yes'],
    ['Dependent Children', 'Yes, with separate requirements', 'Yes, per dependent'],
    ['EU/Schengen Travel', 'Yes (full rights)', 'No'],
    ['EU Citizenship Path', 'Yes (after 10 years)', 'No (but residency permanent)'],
];

const healthcareComparisonData = [
    ['Metric', 'Spain', 'Panama'],
    ['Public Healthcare System', 'Yes (SNS): excellent, universal', 'No public system for retirees'],
    ['Annual Insurance Cost (private)', '$2,000–4,500', '$1,800–5,000'],
    ['Doctor Visit (public/private avg)', 'Free (public); $40–80 (private)', '$50–100'],
    ['Cost of Open Heart Surgery', 'Free (public); $25,000–35,000 (private)', '$30,000–45,000'],
    ['Cost of Hip Replacement', 'Free (public); $15,000–22,000 (private)', '$18,000–28,000'],
    ['JCI-Accredited Hospitals', '40+ across Spain', '15–20 in Panama'],
    ['English-Speaking Doctors', 'Limited outside major cities', 'Excellent in Panama City; good in Boquete'],
    ['Prescription Drug Cost (generic)', '€3–9 (subsidized)', '$3–10'],
    ['Healthcare Quality (WHO ranking)', 'Top 15 worldwide', 'Top 50 in region'],
];

const realEstateComparisonData = [
    ['Property Type', 'Madrid', 'Barcelona', 'Valencia', 'Panama City', 'Boquete'],
    ['2BR Apartment (city center)', '$350,000–500,000', '$400,000–600,000', '$200,000–320,000', '$200,000–350,000', '$120,000–180,000'],
    ['3BR House (residential)', '$450,000–700,000', '$500,000–800,000', '$280,000–450,000', '$300,000–500,000', '$150,000–250,000'],
    ['Annual Property Tax', '0.4–1.1% of value', '0.4–1.1% of value', '0.4–1.1% of value', '0.5–1%', '0%'],
    ['Rental Yield (annual %)', '2–3%', '2–3%', '2–3%', '5–7%', '5–8%'],
    ['Appreciation (5-year avg)', '1–2% annually', '1–2% annually', '1–2% annually', '4–6% annually', '3–5% annually'],
    ['Maintenance/HOA (monthly)', '$250–400', '$300–500', '$150–250', '$150–300', '$100–200'],
];

const chartData = [
    { label: 'Madrid, Spain', value: 4500, color: '#e05555' },
    { label: 'Barcelona, Spain', value: 4750, color: '#e07777' },
    { label: 'Valencia, Spain', value: 3300, color: '#ffaaaa' },
    { label: 'Panama City', value: 2500, color: '#00C5CB' },
    { label: 'Boquete, Panama', value: 1750, color: '#D4A843' },
];

const taxSavingsScenario = [
    { income: 'Pension Income', amount: 2000 },
    { income: 'Dividends/Investment Income', amount: 1200 },
    { income: 'Rental Income (from abroad)', amount: 800 },
    { income: 'Total Annual Foreign Income', amount: 4000 },
];

const annualIncome = 4000 * 12; // $48,000/year
const spainCapGainsTax = annualIncome * 0.24; // 24% on dividends/capital gains
const panamaTax = 0;
const monthlyIncome = annualIncome / 12;

export default async function PanamaVsSpainPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="bg-brand-50 py-32 relative overflow-hidden"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1499856871957-5b8620a14eb0?w=1600&h=800&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/70 to-transparent" />
                <div className="max-w-4xl mx-auto px-4 text-left relative z-10 pt-8">
                    <span className="text-xs font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">EUROPA VS CARIBE · 2026</span>
                    <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Panama vs Spain for Retirement 2026
                    </h1>
                    <p className="text-xl text-gray-100 leading-relaxed font-medium max-w-2xl">
                        Jubilarse en España vs Panamá. El análisis completo de impuestos, costos y estilo de vida. Descubre por qué Panamá es 70% más barato.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <div className="flex items-center gap-2 text-brand-TEAL">
                            <CheckCircle size={20} />
                            <span className="font-semibold">0% Tax on Income</span>
                        </div>
                        <div className="flex items-center gap-2 text-brand-GOLD">
                            <Globe size={20} />
                            <span className="font-semibold">70% Lower Costs</span>
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
                                The Spanish Retiree's Dilemma
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Spain has become increasingly popular with European and American retirees. Its healthcare system (SNS) is world-class, EU citizenship is attainable, and the lifestyle is enviable. However, Spain's tax burden has become crushing: capital gains at 24%, wealth taxes reinstated in some regions, and annual property taxes of 0.4–1.1%.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Meanwhile, Panama remains Europe's best-kept secret. Zero tax on foreign income indefinitely, 70% lower living costs, zero property tax, and faster residency. For Spanish-speaking expats and Americans who speak Spanish, Panama offers the same culture with vastly better economics.
                            </p>
                        </div>
                        <div className="bg-brand-50 p-8 rounded-xl border border-brand-100">
                            <h3 className="font-heading text-2xl font-bold text-brand-950 mb-6">Quick Summary</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle className="text-brand-TEAL flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-brand-950">Panama: 0% Tax on Foreign Income</p>
                                        <p className="text-sm text-gray-600">Spain taxes capital gains at 24%</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-brand-TEAL flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-brand-950">Panama: 70% Cheaper Living</p>
                                        <p className="text-sm text-gray-600">Boquete $1,750/mo vs Madrid $4,500/mo</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-brand-TEAL flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-brand-950">Panama: Zero Property Tax</p>
                                        <p className="text-sm text-gray-600">vs Spain's 0.4–1.1% annually</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-brand-TEAL flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-brand-950">Spain: EU Citizenship & Healthcare</p>
                                        <p className="text-sm text-gray-600">World-class SNS system (real advantage)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Cost Comparison Chart */}
                <section className="space-y-6">
                    <div>
                        <h2 className="font-heading text-3xl font-bold text-brand-950 mb-2">Monthly Living Costs: The Massive Difference</h2>
                        <p className="text-gray-600 mb-8">Spain has become expensive. Panama remains a fraction of the cost.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-brand-100">
                        <CostBarChart
                            data={chartData}
                            title="Monthly Retirement Budget Comparison"
                            subtitle="Average monthly expenses for comfortable couple lifestyle · USD"
                            height="320px"
                        />
                    </div>
                    <div className="bg-brand-TEAL/10 border-l-4 border-brand-TEAL p-6 rounded">
                        <p className="text-gray-800">
                            <strong>Stark Reality:</strong> Madrid costs $4,500/month. Boquete, Panama costs $1,750/month. That's 2.6× more expensive. Over a 20-year retirement, this difference amounts to $660,000 in total spending. In Panama, you live better on 38% of what you'd spend in Spain.
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
                    <p className="text-sm text-gray-600 mt-4">
                        <strong>Key Insight:</strong> Even Valencia (Spain's cheapest major city) at $2,800–3,800/mo costs 60–120% more than Boquete or Panama City. The cost gap is undeniable.
                    </p>
                </section>

                {/* Tax Comparison Section */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Tax System Comparison: Spain's 24% Problem</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Spain's tax code is complex and punitive for retirees with foreign income. Capital gains are flat-taxed at 24%, dividends at 19–24%, and property at 0.4–1.1% annually. Panama's territorial system is zero on all foreign-source income.
                    </p>
                    <div className="overflow-x-auto border border-brand-100 rounded-lg mb-6">
                        <table className="w-full">
                            <thead className="bg-brand-950 text-white">
                                <tr>
                                    {taxComparisonData[0].map((header, i) => (
                                        <th key={i} className="px-6 py-4 text-left text-sm font-semibold">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-brand-100">
                                {taxComparisonData.slice(1).map((row, idx) => (
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
                </section>

                {/* Real Tax Savings Scenario */}
                <section className="space-y-6 bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border-2 border-orange-300">
                    <h2 className="font-heading text-2xl font-bold text-brand-950 mb-4">Real Tax Impact: A Practical Example</h2>
                    <p className="text-lg text-gray-800 leading-relaxed mb-6">
                        Let's calculate the actual tax burden for a retiree with diversified foreign income:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white p-6 rounded-lg border border-orange-300">
                            <h4 className="font-semibold text-brand-950 mb-4">Annual Foreign Income</h4>
                            <div className="space-y-3">
                                {taxSavingsScenario.map((item, idx) => (
                                    <div key={idx} className="flex justify-between pb-2 border-b border-gray-200">
                                        <span className="text-sm text-gray-600">{item.income}</span>
                                        <span className="font-semibold text-gray-800">${(item.amount * 12).toLocaleString()}</span>
                                    </div>
                                ))}
                                <div className="flex justify-between pt-2 border-t border-brand-200 font-bold">
                                    <span className="text-gray-800">Total Annual</span>
                                    <span className="text-brand-TEAL">${annualIncome.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg border-2 border-brand-GOLD">
                            <h4 className="font-semibold text-brand-950 mb-4">Annual Tax Burden</h4>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Spain (24% on dividends/capital gains)</p>
                                    <p className="text-2xl font-bold text-orange-600">${spainCapGainsTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                                    <p className="text-xs text-gray-500">~24% effective rate</p>
                                </div>
                                <div className="h-px bg-gray-300" />
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Panama (Territorial)</p>
                                    <p className="text-2xl font-bold text-brand-TEAL">$0</p>
                                    <p className="text-xs text-gray-500">0% on foreign income</p>
                                </div>
                                <div className="h-px bg-brand-GOLD" />
                                <div className="bg-brand-GOLD/10 p-3 rounded">
                                    <p className="text-sm text-gray-600 mb-1">Annual Savings in Panama</p>
                                    <p className="text-2xl font-bold text-brand-TEAL">${spainCapGainsTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                                    <p className="text-xs text-gray-500">Every year, indefinitely</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                        <p className="text-gray-800 mb-3">
                            <strong className="text-red-700">20-Year Impact:</strong> ${(spainCapGainsTax * 20).toLocaleString(undefined, { maximumFractionDigits: 0 })} in tax savings. Plus, zero property tax saves additional thousands.
                        </p>
                        <p className="text-gray-800">
                            A retiree with $48,000/year in foreign income pays approximately ${spainCapGainsTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}/year in Spain taxes. In Panama, they pay $0. Over 20 years, that's ${(spainCapGainsTax * 20).toLocaleString(undefined, { maximumFractionDigits: 0 })} difference—enough to buy a $300,000 property.
                        </p>
                    </div>
                </section>

                {/* Visa & Residency */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Visa & Residency Requirements</h2>
                    <div className="overflow-x-auto border border-brand-100 rounded-lg mb-6">
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
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-brand-TEAL/10 border-l-4 border-brand-TEAL p-6 rounded">
                            <h4 className="font-semibold text-brand-950 mb-2">Panama Wins: Speed & Simplicity</h4>
                            <p className="text-gray-800 text-sm">
                                Pensionado visa: 3–6 months to permanent residency. Show $1,350–1,500/month income, done. Renewable indefinitely with zero bureaucracy. Perfect for retirees wanting stability.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border-2 border-orange-400">
                            <h4 className="font-semibold text-brand-950 mb-2">Spain: Longer Process, More Bureaucracy</h4>
                            <p className="text-gray-800 text-sm">
                                Non-Lucrative visa: 8–12 weeks initial, then 1-year renewable periods. Annual income verification required. Higher initial requirement at €2,300/month. More documentation and compliance burden.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Healthcare Section */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Healthcare: Spain's Legitimate Advantage</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Spain's SNS (public healthcare) is world-class and essentially free for residents. This is Spain's strongest card against Panama. However, the retiree tax burden offsets much of this advantage.
                    </p>
                    <div className="overflow-x-auto border border-brand-100 rounded-lg mb-6">
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
                    <div className="bg-white p-6 rounded-lg border-2 border-orange-400">
                        <h4 className="font-semibold text-brand-950 mb-3">Spain's Healthcare Advantage</h4>
                        <p className="text-gray-800 text-sm mb-3">
                            Spain's SNS is genuinely exceptional. Free or nearly-free access to all healthcare, ranked top 15 globally. For retirees prioritizing healthcare, Spain is hard to beat. You can receive world-class medical care without insurance costs.
                        </p>
                        <p className="text-gray-800 text-sm">
                            However, this advantage must be weighed against spending $2,700+/month extra on living costs and paying 24% capital gains tax annually. The math: better healthcare doesn't offset $660,000+ in lifetime cost differences.
                        </p>
                    </div>
                </section>

                {/* Real Estate */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Real Estate Investment & Property Costs</h2>
                    <div className="overflow-x-auto border border-brand-100 rounded-lg mb-6">
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
                        <p className="text-gray-800 mb-3">
                            <strong>Real Estate Winner: Panama.</strong> A $300,000 property in Madrid appreciates 1–2% annually to $365,000 over 10 years. You pay 0.4–1.1% property tax annually (cumulative: $18,000–33,000). A $250,000 property in Panama appreciates 4–6% to $450,000, with $0 in property tax.
                        </p>
                        <p className="text-gray-800">
                            The $250,000 Panama property nets $200,000 more in appreciation AND saves $18,000–33,000 in taxes over the decade. Spanish real estate is a poor investment for retirees compared to Panama.
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
                                    <h4 className="font-semibold text-lg mb-2">Zero Tax on Foreign Income (Indefinite)</h4>
                                    <p className="text-gray-100">
                                        Spain taxes capital gains at 24%. Panama: 0%. Save ${spainCapGainsTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}/year on $48,000 foreign income. Over 20 years: ${(spainCapGainsTax * 20).toLocaleString(undefined, { maximumFractionDigits: 0 })} in savings.
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
                                    <h4 className="font-semibold text-lg mb-2">70% Lower Cost of Living</h4>
                                    <p className="text-gray-100">
                                        Boquete at $1,750/mo vs Madrid at $4,500/mo. Over 20 years: $660,000 in savings. You retire with 3× the comfort on the same budget.
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
                                    <h4 className="font-semibold text-lg mb-2">Zero Property Tax</h4>
                                    <p className="text-gray-100">
                                        Spain charges 0.4–1.1% annually. Panama: $0. On a $300,000 property, that's $2,400+ saved per year in Panama.
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
                                    <h4 className="font-semibold text-lg mb-2">Better Real Estate Appreciation</h4>
                                    <p className="text-gray-100">
                                        Panama: 4–6% annually vs Spain: 1–2%. A $250,000 property gains $200,000 more in Panama over 10 years.
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
                                    <h4 className="font-semibold text-lg mb-2">Faster Visa Processing</h4>
                                    <p className="text-gray-100">
                                        Panama Pensionado: 3–6 months. Spain Non-Lucrative: 8–12 weeks plus annual compliance. Panama is simpler.
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
                                    <h4 className="font-semibold text-lg mb-2">Spanish-Speaking Culture</h4>
                                    <p className="text-gray-100">
                                        For Spanish speakers, Panama feels like Spain economically but costs 70% less. Best of both worlds.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Spain's Legitimate Advantages */}
                <section className="space-y-6 bg-gray-50 p-8 rounded-xl border border-brand-100">
                    <h2 className="font-heading text-2xl font-bold text-brand-950 mb-6">Spain's Genuine Advantages</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                <Home className="text-orange-500" size={20} />
                                World-Class Public Healthcare (SNS)
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Spain's healthcare system is top 15 globally. Free or nearly-free. For health-priority retirees, this is legitimate gold. Panama requires private insurance.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                <Globe className="text-orange-500" size={20} />
                                EU Citizenship & Schengen Travel
                            </h4>
                            <p className="text-gray-700 text-sm">
                                After 10 years, Spanish citizenship eligible. Visa-free travel to 27 EU countries. Invaluable for European retirees. Panama offers no such path.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                <MapPin className="text-orange-500" size={20} />
                                European Culture & Lifestyle
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Spain is culturally rich, historically deep, architecturally stunning. If culture and European lifestyle matter, Spain is incomparable. Panama is more transactional.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                <TrendingUp className="text-orange-500" size={20} />
                                Proximity to Europe
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Easy travel to France, Portugal, Italy. For retirees valuing European base, Spain's geography is perfect. Panama is far from Europe.
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
                                <span>Can I access Spain's SNS healthcare as a retiree?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Yes. After establishing residency on Non-Lucrative visa, you typically become eligible for SNS after 3–6 months. You register with a local health center and gain access to the entire public healthcare system. This is a major advantage if staying long-term. However, you must still navigate Spanish healthcare bureaucracy and may face language barriers outside major cities.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>How are capital gains taxed in Spain for retirees?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Capital gains are flat-taxed at 24% regardless of amount. Dividends: 19–24%. Interest income: varies. This applies to all non-residents and Spanish tax residents. There's no break for long-term holdings or retiree status. Panama's 0% rate is dramatically superior for retirees with investment income.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>Is Panama as culturally rich as Spain for Spanish speakers?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                No. Spain has 3,000 years of European history, world-class architecture, art, cuisine, and cultural depth. Panama's culture is more Latin American and less historically layered. However, Panama's cost is 70% lower, so you're choosing: Do you want centuries of European culture, or financial security and wealth preservation? Most retirees choose the latter over the former.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>Can I get Spanish citizenship if I retire in Panama?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Not through the residency route. Spanish citizenship requires residency in Spain. However, Spain does offer citizenship by descent if you have Spanish ancestors. Additionally, you could maintain both Panama residency AND obtain Spain residency separately (after 10 years, pursue citizenship). This dual-residency strategy is increasingly common: live primarily in Panama (for tax/cost), maintain Spain residency for healthcare/EU access, and pursue citizenship after 10 years.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>What if I need first-world healthcare and want to retire?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Spain's SNS is objectively superior to Panama's private system. If you have chronic conditions or require ongoing specialist care, Spain's healthcare access is a legitimate advantage worth the extra cost. However, Panama City has excellent private hospitals (CIMA, Paitilla) and many retirees manage complex conditions successfully. The decision depends on health status and whether you value European healthcare infrastructure enough to justify $2,700+/month extra spending and 24% capital gains taxes.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>Should I choose Panama or Spain?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                <strong>Choose Panama if:</strong> You prioritize financial efficiency, lower costs, zero taxation on foreign income, and better real estate appreciation. You want to maximize retirement purchasing power and minimize living expenses. You're willing to trade some cultural depth for financial security.
                            </p>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                <strong>Choose Spain if:</strong> You prioritize European healthcare, EU citizenship, Schengen travel, and cultural/historical immersion. You can afford $4,000–5,500/month living costs and don't mind paying 24% capital gains tax. You want to retire in Europe, not Latin America.
                            </p>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                <strong>Best Strategy:</strong> Dual-residency. Maintain Panama Pensionado for tax/cost advantages, then spend 6–8 months yearly in Spain. After 10 years, pursue Spanish citizenship. This hybrid approach gives you tax efficiency, cultural immersion, EU citizenship, AND financial security. It requires managing two visas but offers maximum flexibility.
                            </p>
                        </details>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-brand-950 to-brand-900 rounded-xl p-12 text-white text-center space-y-8 my-16">
                    <h2 className="font-heading text-4xl font-bold">¿Listo para Explorar Panamá?</h2>
                    <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
                        Programa una consulta con nuestros expertos en residencia y bienes raíces de Panamá. Te ayudaremos a evaluar si Panamá, España, o ambos tienen sentido para tu jubilación.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link
                            href={`/${lang}/contacto`}
                            className="bg-brand-GOLD text-brand-950 px-8 py-4 rounded-lg font-semibold hover:bg-brand-GOLD/90 transition flex items-center justify-center gap-2 group"
                        >
                            Agendar Consulta
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                        </Link>
                        <Link
                            href={`/${lang}/properties`}
                            className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border border-white hover:bg-white/30 transition"
                        >
                            Ver Propiedades
                        </Link>
                    </div>
                </section>

                {/* Closing */}
                <section className="prose prose-lg max-w-none">
                    <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">La Conclusión Final</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        España es una opción excelente para jubilados que buscan cultura europea, sanidad de primer mundo, y ciudadanía de la UE. Sin embargo, es cara, cada vez más gravada, y requiere más burocracia.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Panamá ofrece resultados financieros superiores: 70% menos caro, impuestos 0% sobre ingresos extranjeros (indefinidamente), residencia más rápida, y mejor apreciación inmobiliaria. Para jubilados enfocados en eficiencia financiera y preservación de riqueza a largo plazo, Panamá es objetivamente superior.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        La estrategia más inteligente: Obtén residencia en España para acceso a la UE y sanidad, luego basa tu residencia principal en Panamá. Esta estrategia híbrida te da ahorros fiscales, ventajas de costo, apreciación inmobiliaria, Y ciudadanía europea. No estás eligiendo entre ellos—estás usándolos estratégicamente juntos.
                    </p>
                </section>
            </div>
        </article>
    );
}
