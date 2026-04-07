import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, DollarSign, TrendingUp, Home, Shield, Globe } from 'lucide-react';
import { CostBarChart } from '@/components/three/ThreeComponents';


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const slug = 'panama-vs-portugal-retirement';
  const domain = 'https://panamarealestatesale.com';
  const canonical = `${domain}/${lang}/blog/${slug}`;

  return {
    title: 'Panama vs Portugal Retirement 2026: Comparison, Costs, Visas',
    description: 'Compare Panama vs Portugal for retirement. D7 visa, costs, lifestyle, healthcare, real estate.',
    keywords: 'Panama vs Portugal, retire Panama vs Portugal, cost of living Panama Portugal, D7 visa',
    alternates: {
        canonical,
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/panama-vs-portugal-retirement',
            'es': 'https://panamarealestatesale.com/es/blog/panama-vs-portugal-retirement',
            'pt': 'https://panamarealestatesale.com/pt/blog/panama-vs-portugal-retirement',
            'de': 'https://panamarealestatesale.com/de/blog/panama-vs-portugal-retirement',
        },
    },
    openGraph: {
        title: 'Panama vs Portugal Retirement 2026: Comparison, Costs, Visas',
        description: 'Compare Panama vs Portugal for retirement. D7 visa, costs, lifestyle, healthcare, real estate.',
        type: 'article',
        url: canonical,
        images: [{ url: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80', width: 1200, height: 630, alt: 'Comparison' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Panama vs Portugal Retirement 2026: Comparison, Costs, Visas',
        description: 'Compare Panama vs Portugal for retirement. D7 visa, costs, lifestyle, healthcare, real estate.',
        images: ['https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80'],
    },
};
}

const costComparisonData = [
    ['Expense Category', 'Lisbon, Portugal', 'Porto, Portugal', 'Boquete, Panama', 'Panama City, Panama'],
    ['Housing (2BR apt)', '$1,000–1,500', '$800–1,200', '$800–1,200', '$1,200–1,800'],
    ['Utilities (electric, water, internet)', '$80–150', '$70–130', '$80–120', '$120–200'],
    ['Groceries (monthly)', '$300–450', '$250–380', '$250–350', '$400–600'],
    ['Dining out (dinner for 2)', '$25–40', '$20–30', '$20–30', '$35–60'],
    ['Transportation', '$40–80', '$35–70', '$30–50', '$80–150'],
    ['Healthcare (avg annual)', '$1,500–3,000', '$1,200–2,500', '$1,500–3,000', '$2,000–4,000'],
    ['Total Monthly Budget', '$3,000–4,500', '$2,500–3,500', '$1,500–2,200', '$2,200–2,800'],
];

const taxComparisonData = [
    ['Tax Category', 'Portugal (NHR/Regular)', 'Panama (Territorial)'],
    ['Tax Rate on Foreign Pensions', 'NHR: 0% (10 years); Regular: 10–14%', '0% (indefinite)'],
    ['Tax Rate on Foreign Investment Income', 'NHR: 0% (10 years); Regular: 24%', '0% (indefinite)'],
    ['Tax Rate on Foreign Rental Income', 'NHR: 0% (10 years); Regular: 28%', '0% (indefinite)'],
    ['Dividends (foreign source)', 'NHR: 0%; Regular: 24%', '0%'],
    ['Capital Gains Tax', 'NHR: 0%; Regular: 10–20%', '0% (long-term)'],
    ['Social Security Contributions', 'Required; ~11–34% on employment', 'Not required for retirees'],
    ['Wealth Tax', 'Abolished (2023)', 'No wealth tax'],
    ['Real Estate Annual Tax', '0.4–0.8% of value', 'None (0%)'],
    ['Duration of Benefits', 'NHR: 10 years; then full Portuguese tax applies', 'Indefinite (permanent)'],
];

const visaComparisonData = [
    ['Criteria', 'Portugal (D7 Visa)', 'Panama (Pensionado)'],
    ['Income Requirement', '€1,062/month (€12,744/year)', '$1,350–1,500/month'],
    ['Processing Time', '8–16 weeks', '3–6 months'],
    ['Duration (First Issue)', '1 year (renewable)', '5 years (renewable)'],
    ['Path to Citizenship', '5 years residency, then eligible', '5 years residency, then eligible'],
    ['Cost (all fees/processing)', '$1,500–3,000', '$1,000–2,000'],
    ['Spouse Included', 'Yes', 'Yes'],
    ['Dependent Children', 'Yes, with separate requirements', 'Yes, per dependent'],
    ['EU/Schengen Travel', 'Yes (Schengen area)', 'No'],
    ['Renewability After Initial Term', 'Yes, if income verified', 'Yes, renewable indefinitely'],
];

const healthcareComparisonData = [
    ['Healthcare Metric', 'Portugal', 'Panama'],
    ['Public Healthcare System', 'Yes (SNS): excellent, affordable', 'No public system for retirees'],
    ['Private Insurance Cost (annual)', '$1,200–2,500', '$1,800–5,000'],
    ['Average Doctor Visit (public)', 'Free–$20', '$50–100'],
    ['Average Doctor Visit (private)', '$40–80', '$50–100'],
    ['Cost of Open Heart Surgery (public)', 'Free (public system)', '$30,000–45,000 (private)'],
    ['Cost of Hip Replacement (public)', 'Free (public system)', '$18,000–28,000 (private)'],
    ['JCI-Accredited Hospitals', '8–10 major facilities', '15–20 major facilities'],
    ['English-Speaking Doctors', 'Limited outside major cities', 'Excellent in Panama City; good in Boquete'],
    ['Healthcare Quality (WHO ranking)', 'Top 20 worldwide', 'Top 50 Latin America'],
];

const realEstateComparisonData = [
    ['Property Type', 'Lisbon', 'Porto', 'Boquete, Panama', 'Panama City'],
    ['2BR Apartment (city center)', '$280,000–450,000', '$180,000–300,000', '$120,000–180,000', '$200,000–350,000'],
    ['3BR House (residential)', '$350,000–600,000', '$250,000–400,000', '$150,000–250,000', '$300,000–500,000'],
    ['Oceanfront/Special (2BR)', '$450,000–700,000', '$300,000–500,000', '$180,000–300,000', '$350,000–600,000'],
    ['Annual Property Tax', '0.4–0.8%', '0.4–0.8%', '0%', '0.5–1%'],
    ['Rental Yield (annual %)', '3–4%', '3–4%', '5–8%', '5–7%'],
    ['Appreciation (5-year avg)', '2–3% annually', '2–3% annually', '3–5% annually', '4–6% annually'],
    ['Maintenance/HOA (monthly)', '$200–400', '$150–300', '$100–200', '$150–300'],
];

const chartData = [
    { label: 'Lisbon, Portugal', value: 3750, color: '#e05555' },
    { label: 'Porto, Portugal', value: 3000, color: '#e07777' },
    { label: 'Boquete, Panama', value: 1750, color: '#D4A843' },
    { label: 'Panama City', value: 2500, color: '#00C5CB' },
];

const taxSavingsScenario = [
    { source: 'Social Security (U.S.)', monthly: 2000, annual: 24000 },
    { source: 'Pension Income', monthly: 1500, annual: 18000 },
    { source: 'Investment Dividends', monthly: 800, annual: 9600 },
    { source: 'Rental Income', monthly: 500, annual: 6000 },
    { source: 'Total Foreign Income', monthly: 4800, annual: 57600 },
];

export default async function PanamaVsPortugalPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    const portugueseRegularTax = 57600 * 0.14; // approximate 14% on foreign pension income
    const panamaTax = 0;
    const taxSavingsAnnually = portugueseRegularTax - panamaTax;

    return (
        <article className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="bg-brand-50 py-32 relative overflow-hidden"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1555993539-1732b0258235?w=1600&h=800&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/70 to-transparent" />
                <div className="max-w-4xl mx-auto px-4 text-left relative z-10 pt-8">
                    <span className="text-xs font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">EUROPEAN vs CARIBBEAN · 2026</span>
                    <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Panama vs Portugal for Retirement 2026
                    </h1>
                    <p className="text-xl text-gray-100 leading-relaxed font-medium max-w-2xl">
                        Tax, cost & lifestyle showdown. Discover why Panama's territorial tax system and 60% lower costs make it the smarter financial choice.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <div className="flex items-center gap-2 text-brand-TEAL">
                            <CheckCircle size={20} />
                            <span className="font-semibold">0% Foreign Income Tax</span>
                        </div>
                        <div className="flex items-center gap-2 text-brand-GOLD">
                            <Globe size={20} />
                            <span className="font-semibold">$8,050 Cheaper Monthly</span>
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
                                European Retirees Looking South
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Portugal has become Europe's darling for retirement. Lisbon's booming real estate market, affordable living compared to Northern Europe, and the now-defunct NHR (Non-Habitual Resident) tax regime attracted hundreds of thousands of expats. However, Portugal's NHR ended in 2023, and regular Portuguese taxes are now 10–28% on foreign income.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Meanwhile, Panama remains virtually unknown to Europeans—a massive advantage. Retirees comparing Panama to Portugal typically don't realize that Panama's zero-tax territorial system, 60% lower cost of living, and 2.5-hour flight from U.S. East Coast make it objectively superior for most retirement profiles.
                            </p>
                        </div>
                        <div className="bg-brand-50 p-8 rounded-xl border border-brand-100">
                            <h3 className="font-heading text-2xl font-bold text-brand-950 mb-6">Quick Summary</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle className="text-brand-TEAL flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-brand-950">Panama: 0% Foreign Income Tax</p>
                                        <p className="text-sm text-gray-600">Portugal taxes foreign income at 10–28% (NHR ended)</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-brand-TEAL flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-brand-950">Panama: 50% Lower Costs</p>
                                        <p className="text-sm text-gray-600">$1,500–2,200/mo vs Lisbon's $3,000–4,500/mo</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-brand-TEAL flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-brand-950">Panama: Faster Visa</p>
                                        <p className="text-sm text-gray-600">3–6 months vs Portugal's 8–16 weeks + long processing</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-brand-TEAL flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-brand-950">Portugal: EU Access</p>
                                        <p className="text-sm text-gray-600">Schengen travel, EU citizenship path (valuable)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Cost Comparison Chart */}
                <section className="space-y-6">
                    <div>
                        <h2 className="font-heading text-3xl font-bold text-brand-950 mb-2">Monthly Living Costs: The Stark Difference</h2>
                        <p className="text-gray-600 mb-8">Europe's cost inflation has hit Portugal hard. Panama remains a value play.</p>
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
                            <strong>Stark Reality:</strong> Lisbon costs 2.1× more than Boquete and 1.5× more than Panama City. A comfortable retirement in Panama costs $1,500–2,200/month. The same lifestyle in Lisbon costs $3,000–4,500/month. Over 20 years, that's a $360,000–$660,000 difference in total spending.
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
                </section>

                {/* The NHR Collapse */}
                <section className="space-y-6 bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border-2 border-orange-300">
                    <h2 className="font-heading text-2xl font-bold text-brand-950 mb-4">Portugal's NHR Tax Regime: What Changed in 2023</h2>
                    <p className="text-lg text-gray-800 leading-relaxed mb-6">
                        Portugal's NHR (Non-Habitual Resident) program was legendary: 0% tax on foreign income for 10 years. It attracted wealthy retirees from around the world. However, in October 2023, Portugal phased it out under EU pressure. Now, foreign pensions and investment income are taxed at 10–14% for non-residents and up to 28% for residents on certain categories.
                    </p>
                    <div className="bg-white p-6 rounded-lg border border-orange-300 mb-6">
                        <h4 className="font-semibold text-brand-950 mb-4">Portugal's New Tax Reality (Post-2023):</h4>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li>• Foreign pensions: 10–14% tax</li>
                            <li>• Foreign investment income: 24% tax</li>
                            <li>• Foreign rental income: 28% tax</li>
                            <li>• Dividends: 24% tax</li>
                            <li>• Capital gains: 10–20% tax</li>
                            <li>• Plus real estate tax: 0.4–0.8% annually</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                        <p className="text-gray-800">
                            <strong className="text-red-700">Panama's Equivalent:</strong> 0% on all of the above, indefinitely. No expiration date. No phase-out. No EU pressure. This is the single biggest advantage Panama holds over Portugal for retirees with foreign income.
                        </p>
                    </div>
                </section>

                {/* Tax Comparison Table */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Comprehensive Tax Comparison</h2>
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

                {/* Real Tax Savings Calculation */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Real Tax Savings: Scenario Example</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Consider a retiree with mixed income from multiple sources. Here's the real-world tax impact:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-50 p-6 rounded-lg border border-brand-100">
                            <h4 className="font-semibold text-brand-950 mb-4">Annual Income Breakdown</h4>
                            <div className="space-y-3">
                                {taxSavingsScenario.map((item, idx) => (
                                    <div key={idx} className="flex justify-between pb-2 border-b border-gray-200">
                                        <span className="text-sm text-gray-600">{item.source}</span>
                                        <span className="font-semibold text-gray-800">${item.annual.toLocaleString()}</span>
                                    </div>
                                ))}
                                <div className="flex justify-between pt-2 border-t border-brand-200 font-bold">
                                    <span className="text-gray-800">Total Annual Foreign Income</span>
                                    <span className="text-brand-TEAL">$57,600</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg border-2 border-brand-GOLD">
                            <h4 className="font-semibold text-brand-950 mb-4">Annual Tax Bill Comparison</h4>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Portugal (Post-2023)</p>
                                    <p className="text-2xl font-bold text-orange-600">${portugueseRegularTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                                    <p className="text-xs text-gray-500">~14% avg on foreign income</p>
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
                                    <p className="text-2xl font-bold text-brand-TEAL">${taxSavingsAnnually.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                                    <p className="text-xs text-gray-500">Every single year</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-brand-TEAL/10 border-l-4 border-brand-TEAL p-6 rounded">
                        <p className="text-gray-800 mb-3">
                            <strong>20-Year Impact:</strong> ${(taxSavingsAnnually * 20).toLocaleString(undefined, { maximumFractionDigits: 0 })} in tax savings. This is the compounding advantage of Panama's territorial tax system.
                        </p>
                        <p className="text-gray-800">
                            If you have $57,600/year in foreign income (a realistic scenario), Panama saves you approximately ${taxSavingsAnnually.toLocaleString(undefined, { maximumFractionDigits: 0 })}/year in taxes. Over a 20-year retirement, that's ${(taxSavingsAnnually * 20).toLocaleString(undefined, { maximumFractionDigits: 0 })} that stays in your pocket.
                        </p>
                    </div>
                </section>

                {/* Visa & Residency */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Visa & Residency: Speed & Stability</h2>
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
                            <h4 className="font-semibold text-brand-950 mb-2">Panama Wins: Simplicity</h4>
                            <p className="text-gray-800 text-sm">
                                Panama's Pensionado visa is straightforward: show $1,350–1,500/month in passive income, get permanent residency in 3–6 months. Renewable indefinitely. One-time commitment with minimal ongoing compliance.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border-2 border-orange-400">
                            <h4 className="font-semibold text-brand-950 mb-2">Portugal's Complexity</h4>
                            <p className="text-gray-800 text-sm">
                                Portugal's D7 visa requires proving €1,062/month income, plus extensive documentation. Processing takes 8–16 weeks. The visa is renewable after 1 year, but you must re-verify income each renewal. More bureaucratic overhead.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Healthcare */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Healthcare: Portugal's One Real Advantage</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Portugal's public healthcare system (SNS) is exceptional. It's free or nearly-free, and ranked in the top 20 globally. This is Portugal's legitimate advantage over Panama.
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
                        <h4 className="font-semibold text-brand-950 mb-3">Portugal's Healthcare Excellence</h4>
                        <p className="text-gray-800 text-sm mb-3">
                            Portugal's SNS gives retirees access to world-class public healthcare essentially free. Open-heart surgery, hip replacements, cancer treatment—all covered. This is enormous. If you're healthy and can access SNS, your lifetime healthcare costs are minimal.
                        </p>
                        <p className="text-gray-800 text-sm">
                            Panama's private healthcare is excellent but expensive. You'll pay $1,800–5,000/year for insurance plus out-of-pocket costs. However, for most routine care, Panama's costs are comparable to Portugal's private insurance costs.
                        </p>
                    </div>
                </section>

                {/* Real Estate */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Real Estate: Investment Comparison</h2>
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
                        <p className="text-gray-800">
                            <strong>Real Estate Verdict: Panama.</strong> Portugal's real estate has appreciated 2–3% annually recently, but valuations are stretched. A $400,000 property in Lisbon appreciates to $550,000 over 10 years. A $250,000 property in Panama appreciates to $450,000. Panama offers better value, zero property tax, and higher rental yields (5–8% vs 3–4% in Portugal).
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
                                        Portugal's NHR is gone. Panama's territorial tax system is permanent. Save ${taxSavingsAnnually.toLocaleString(undefined, { maximumFractionDigits: 0 })}/year with $57,600/year income—compounding over a 20-year retirement to ${(taxSavingsAnnually * 20).toLocaleString(undefined, { maximumFractionDigits: 0 })}.
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
                                    <h4 className="font-semibold text-lg mb-2">60% Lower Cost of Living</h4>
                                    <p className="text-gray-100">
                                        $1,500–2,200/mo in Panama vs $3,000–4,500/mo in Lisbon. Over 20 years, that's $360,000–$660,000 in lifetime savings.
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
                                    <h4 className="font-semibold text-lg mb-2">Permanent Residency in 3–6 Months</h4>
                                    <p className="text-gray-100">
                                        Fast, simple Pensionado visa. Renewable indefinitely. No annual re-verification or bureaucratic renewal. Set it and forget it.
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
                                    <h4 className="font-semibold text-lg mb-2">Zero Property Tax</h4>
                                    <p className="text-gray-100">
                                        Portugal taxes property at 0.4–0.8% annually. Panama: 0%. On a $300,000 property, that's $2,400/year saved in Panama.
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
                                    <h4 className="font-semibold text-lg mb-2">Better Real Estate Appreciation</h4>
                                    <p className="text-gray-100">
                                        Panama: 4–6% annually vs Portugal: 2–3%. A $250,000 property gains $150,000 more in Panama over 10 years.
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
                                    <h4 className="font-semibold text-lg mb-2">Closer to North America</h4>
                                    <p className="text-gray-100">
                                        2.5 hours from U.S. East Coast vs 8+ hours from Portugal. Easier access to U.S. family, doctors, and resources.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Portugal's Legitimate Advantages */}
                <section className="space-y-6 bg-gray-50 p-8 rounded-xl border border-brand-100">
                    <h2 className="font-heading text-2xl font-bold text-brand-950 mb-6">Portugal's Legitimate Advantages</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                <Home className="text-orange-500" size={20} />
                                World-Class Public Healthcare
                            </h4>
                            <p className="text-gray-700 text-sm">
                                SNS is genuinely excellent and nearly-free. For retirees prioritizing healthcare, this is unbeatable. Panama requires private insurance.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                <Globe className="text-orange-500" size={20} />
                                EU & Schengen Travel
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Visa-free travel to 27 EU countries + Switzerland, Norway, Iceland. Invaluable for European retirees. Panama offers no travel advantages.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                <MapPin className="text-orange-500" size={20} />
                                EU Citizenship Path
                            </h4>
                            <p className="text-gray-700 text-sm">
                                After 5 years residency, eligible for Portuguese (and EU) citizenship. This is valuable for EU citizenship seekers. Panama offers no such path.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                <TrendingUp className="text-orange-500" size={20} />
                                Richer Culture & History
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Portugal offers European culture, ancient history, fine wine, and arts. Panama is more transactional. If culture matters, Portugal wins.
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
                                <span>Can I access Portugal's SNS (public healthcare) as a retiree?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Yes, after residency is established. Retirees on D7 visas are typically eligible for SNS after 3–6 months. You register with a local health center, and gain access to the entire public healthcare system essentially free. This is a major advantage if you plan to stay long-term. However, initial registration and ongoing compliance require patience with Portuguese bureaucracy.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>Is Portugal's NHR tax regime completely dead?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Yes, for new applicants. Portugal officially ended NHR in October 2023. Anyone applying for Portuguese residency now is ineligible for NHR benefits. However, individuals who obtained NHR status before October 2023 grandfathered in to continue benefits through their 10-year term. If you had NHR status before October 2023, you can maintain it. If not, you'll face regular Portuguese taxation on foreign income.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>Can I hold both Portugal and Panama residency?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Yes, legally. Many expats maintain multiple residencies. However, tax residency rules are complex. If you spend more than 183 days in Portugal, you become tax-resident and must file Portuguese taxes. Panama taxes only Panama-sourced income, so as long as your foreign income stays foreign-sourced, you maintain the 0% tax advantage. Consult a tax advisor before establishing dual residency.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>How much does it cost to set up residency in each country?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                <strong>Panama:</strong> Pensionado visa fees are approximately $1,000–2,000 total (government fees + document processing). Additional costs for bank account setup and notarization.
                            </p>
                            <p className="mt-2 text-gray-700 leading-relaxed">
                                <strong>Portugal:</strong> D7 visa fees run $1,500–3,000 (government fees + professional documentation). You'll typically need a lawyer to navigate the process, adding cost. Post-visa, you must register with local authorities, police, and health services.
                            </p>
                            <p className="mt-2 text-gray-700 leading-relaxed">
                                Both are comparable in upfront cost. However, Panama's ongoing compliance is lighter.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>Should I choose Panama or Portugal?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                <strong>Choose Panama if:</strong> You prioritize tax efficiency, lower costs, stability, and long-term real estate appreciation. You have foreign-sourced income (pensions, investments). You want residency processed quickly with minimal ongoing bureaucracy.
                            </p>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                <strong>Choose Portugal if:</strong> You want free public healthcare (SNS), EU citizenship, Schengen travel rights, or European culture. You can live on lower absolute costs and don't mind Portuguese bureaucracy. You're willing to pay 10–28% taxes on foreign income for the privilege of being in Europe.
                            </p>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                <strong>Best Strategy:</strong> Many retirees do both. Get Portugal residency for EU access, then spend 6–8 months yearly in Panama maintaining Pensionado status and enjoying the tax and cost advantages. This hybrid approach gives you the best of both worlds.
                            </p>
                        </details>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-brand-950 to-brand-900 rounded-xl p-12 text-white text-center space-y-8 my-16">
                    <h2 className="font-heading text-4xl font-bold">Ready to Explore Panama Retirement?</h2>
                    <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
                        Schedule a consultation with our Panama residency and real estate experts. We'll help you evaluate whether Panama, Portugal, or both makes sense for your retirement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link
                            href={`/${lang}/contacto`}
                            className="bg-brand-GOLD text-brand-950 px-8 py-4 rounded-lg font-semibold hover:bg-brand-GOLD/90 transition flex items-center justify-center gap-2 group"
                        >
                            Schedule Consultation
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                        </Link>
                        <Link
                            href={`/${lang}/properties`}
                            className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border border-white hover:bg-white/30 transition"
                        >
                            Browse Properties
                        </Link>
                    </div>
                </section>

                {/* Closing */}
                <section className="prose prose-lg max-w-none">
                    <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">The Bottom Line</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Portugal is an excellent choice for retirees seeking European culture, public healthcare, and EU citizenship. However, it's expensive, increasingly taxed, and requires more bureaucratic navigation than before.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Panama offers superior financial outcomes: 60% lower costs, 0% tax on foreign income (indefinitely), faster residency, and better real estate appreciation. For retirees focused on financial efficiency and long-term wealth preservation, Panama is objectively superior.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        The wisest approach: Get Portugal residency for EU access and healthcare, then base your primary residence in Panama. This hybrid strategy gives you tax savings, cost advantages, real estate appreciation, AND European citizenship. You're not choosing between them—you're using both strategically.
                    </p>
                </section>
            </div>
        </article>
    );
}
