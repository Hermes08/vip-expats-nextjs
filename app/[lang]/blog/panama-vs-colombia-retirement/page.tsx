import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, CheckCircle, MapPin, DollarSign, TrendingUp, Home, Shield, Zap } from 'lucide-react';

const CostBarChart = dynamic(() => import('@/components/three/CostBarChart').then(m => m.CostBarChart), { ssr: false });

export const metadata: Metadata = {
    title: 'Panama vs Colombia for Expats 2026: Which Is Really Better?',
    description: 'Compare Panama and Colombia for expat retirement. Analyze safety, visas, cost of living, currency stability, and healthcare. Discover why Panama\'s USD economy and superior infrastructure make it the safer choice.',
    keywords: 'panama vs colombia retirement, panama vs medellin expat, retire in panama, retire in colombia, expat retirement comparison',
    alternates: { canonical: 'https://panamarealestatesale.com/en/blog/panama-vs-colombia-retirement' },
    openGraph: {
        title: 'Panama vs Colombia for Expats 2026: Which Is Really Better?',
        description: 'Panama vs Colombia retirement comparison: safety, visas, costs, currency, and healthcare analysis.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/panama-vs-colombia-retirement',
        images: [{ url: 'https://images.unsplash.com/photo-1583407566-cd81dea2bba4?w=1200&h=630', width: 1200, height: 630 }],
    },
};

const costComparisonData = [
    ['Expense Category', 'Medellin, Colombia', 'Bogota, Colombia', 'Cartagena, Colombia', 'Panama City, Panama'],
    ['Housing (2BR apt)', '$600–900', '$650–950', '$700–1,100', '$1,200–1,800'],
    ['Utilities (electric, water, internet)', '$40–80', '$50–90', '$60–100', '$120–200'],
    ['Groceries (monthly)', '$180–280', '$200–320', '$220–350', '$400–600'],
    ['Dining out (dinner for 2)', '$15–25', '$15–25', '$20–35', '$35–60'],
    ['Transportation (local)', '$20–40', '$25–45', '$30–50', '$80–150'],
    ['Healthcare (avg annual)', '$800–2,000', '$1,000–2,500', '$900–2,200', '$2,000–4,000'],
    ['Total Monthly Budget', '$1,400–2,200', '$1,600–2,500', '$1,700–2,700', '$2,200–2,800'],
];

const visaComparisonData = [
    ['Criteria', 'Colombia', 'Panama'],
    ['Visa Name', 'V (Visitor) / R (Resident)', 'Pensionado Visa'],
    ['Minimum Income Required', 'Varies: ~$1,350 for R visa; Visitor has no requirement', '$1,350–1,500/month'],
    ['Processing Time', '5–10 weeks (R visa)', '3–6 months'],
    ['Duration (First Issue)', 'V: 90 days; R: 2 years (renewable)', '5 years, renewable indefinitely'],
    ['Path to Citizenship', 'After 5 years as resident, eligible', 'After 5 years, can apply'],
    ['Cost (all fees/processing)', '$600–1,200', '$1,000–2,000'],
    ['Spouse Included', 'Yes (R visa)', 'Yes'],
    ['Dependent Children', 'Yes, per dependent', 'Yes, per dependent'],
    ['Proof Required', 'Bank balance ~$2,500+; notarized documents', 'Pension statement or investment income'],
];

const safetyDataColombia = [
    ['City/Region', 'Murder Rate per 100k', 'Expat Safety Assessment', 'Key Notes'],
    ['Medellin', '18–22', 'Safe (specific neighborhoods)', 'Transformation in last decade; stay in Poblado/Laureles'],
    ['Bogota', '15–18', 'Moderate (varies by area)', 'Chapinero and Usaquen safe; avoid south zones'],
    ['Cartagena', '12–16', 'Safe (tourist areas)', 'Walled city heavily patrolled; outside areas less safe'],
    ['Cali', '25–35', 'Higher risk', 'Gang violence; not recommended for expats'],
    ['Boquete, Panama', '4–6', 'Very Safe', 'Mountain town with minimal crime'],
    ['Panama City', '13–15', 'Safe (specific neighborhoods)', 'Coronado, Boquete suburbs, Casco Viejo very safe'],
];

const healthcareComparisonData = [
    ['Metric', 'Colombia', 'Panama'],
    ['JCI-Accredited Hospitals (major cities)', '8–12 major facilities', '15–20 major facilities'],
    ['Average Doctor Visit (private)', '$20–40', '$50–100'],
    ['Cost of Open Heart Surgery', '$15,000–25,000', '$30,000–45,000'],
    ['Cost of Hip Replacement', '$10,000–15,000', '$18,000–28,000'],
    ['Pharmacy Cost (generic medication)', '$2–5', '$3–10'],
    ['Dental Cleaning', '$20–40', '$60–120'],
    ['Expat Health Insurance (annual)', '$800–2,500', '$1,800–5,000'],
    ['English-Speaking Doctors', 'Limited outside major cities', 'Excellent in Panama City; good in Boquete'],
    ['Insurance Claim Processing', '2–4 weeks', '1–3 weeks'],
];

const realEstateComparisonData = [
    ['Property Type', 'Medellin', 'Bogota', 'Cartagena', 'Panama City'],
    ['2BR Apartment (city center)', '$120,000–180,000', '$150,000–220,000', '$160,000–240,000', '$200,000–350,000'],
    ['3BR House (residential)', '$150,000–250,000', '$180,000–300,000', '$200,000–320,000', '$300,000–500,000'],
    ['Oceanfront/Special (2BR)', '$180,000–300,000', 'N/A (landlocked)', '$250,000–400,000', '$350,000–600,000'],
    ['Property Tax (annual)', '~0.8% of cadastral value', '~0.8% of cadastral value', '~0.8% of cadastral value', '0.5–1%'],
    ['Rental Yield (annual %)', '4–6%', '3–5%', '5–7%', '5–7%'],
    ['Maintenance/HOA (monthly)', '$50–150', '$70–180', '$80–200', '$150–300'],
    ['Appreciation (5-year avg)', '3–5% annually', '2–4% annually', '3–5% annually', '4–6% annually'],
];

const chartData = [
    { label: 'Medellin, Colombia', value: 1800, color: '#ff6b6b' },
    { label: 'Bogota, Colombia', value: 2050, color: '#ff8787' },
    { label: 'Cartagena, Colombia', value: 2200, color: '#ffaaaa' },
    { label: 'Panama City', value: 2500, color: '#00C5CB' },
];

const currencyRisk = [
    { year: 2020, copToUsd: 3500, description: 'Colombian Peso at 3,500 COP/USD' },
    { year: 2021, copToUsd: 3900, description: 'Devaluation; 3,900 COP/USD' },
    { year: 2022, copToUsd: 4200, description: 'Further decline; 4,200 COP/USD' },
    { year: 2023, copToUsd: 4600, description: 'Continued pressure; 4,600 COP/USD' },
    { year: 2024, copToUsd: 4800, description: 'Recent levels; 4,800 COP/USD' },
    { year: 2025, copToUsd: 5000, description: 'Current (estimated); 5,000 COP/USD' },
];

export default async function PanamaVsColombiaPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                className="bg-brand-50 py-32 relative overflow-hidden"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1583407566-cd81dea2bba4?w=1600&h=800&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/70 to-transparent" />
                <div className="max-w-4xl mx-auto px-4 text-left relative z-10 pt-8">
                    <span className="text-xs font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">EXPAT RETIREMENT GUIDE · 2026</span>
                    <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Panama vs Colombia for Expats 2026
                    </h1>
                    <p className="text-xl text-gray-100 leading-relaxed font-medium max-w-2xl">
                        The unfiltered comparison. Both nations attract expats, but Panama's safety record, USD currency, and superior infrastructure give it a decisive edge.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <div className="flex items-center gap-2 text-brand-TEAL">
                            <Shield size={20} />
                            <span className="font-semibold">Superior Safety</span>
                        </div>
                        <div className="flex items-center gap-2 text-brand-GOLD">
                            <Zap size={20} />
                            <span className="font-semibold">USD Currency</span>
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
                                The Colombia vs Panama Choice
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Colombia has exploded as an expat destination in the last 5 years. Medellin's cultural renaissance, affordable living, and warm climate have attracted thousands of digital nomads and retirees. Panama, meanwhile, remains the stable choice: a global financial hub with transparent institutions, USD currency, and proven safety.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                But choosing between them isn't straightforward. Colombia offers lower costs and richer cultural immersion. Panama offers superior safety, currency stability, and healthcare infrastructure. This guide cuts through the romance and gives you the real numbers.
                            </p>
                        </div>
                        <div className="bg-brand-50 p-8 rounded-xl border border-brand-100">
                            <h3 className="font-heading text-2xl font-bold text-brand-950 mb-6">Quick Summary</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle className="text-brand-TEAL flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-brand-950">Colombia: 27% Cheaper Living</p>
                                        <p className="text-sm text-gray-600">Medellin $1,800/mo vs Panama City $2,500/mo</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-brand-TEAL flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-brand-950">Panama: Superior Safety</p>
                                        <p className="text-sm text-gray-600">Panama City murder rate 13–15 vs Medellin 18–22</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-brand-TEAL flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-brand-950">Panama: No Currency Risk</p>
                                        <p className="text-sm text-gray-600">USD economy vs Colombian Peso (-37% in 5 years)</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="text-brand-TEAL flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-brand-950">Colombia: Richer Culture & Food</p>
                                        <p className="text-sm text-gray-600">Unmatched cuisine, art, and nightlife scene</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Cost Comparison Chart */}
                <section className="space-y-6">
                    <div>
                        <h2 className="font-heading text-3xl font-bold text-brand-950 mb-2">Monthly Living Costs: Where Your Money Stretches Further</h2>
                        <p className="text-gray-600 mb-8">Colombia's advantage here is real. But read the currency section before celebrating savings.</p>
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
                            <strong>Critical Insight:</strong> Medellin costs 28% less than Panama City ($1,800 vs $2,500/month). However, this advantage evaporates when you factor in Colombian Peso devaluation. A retiree with USD savings loses 4–6% purchasing power annually in Colombia, negating 5+ years of cost savings. Panama's higher nominal costs are offset by currency stability.
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

                {/* Currency Risk Section */}
                <section className="space-y-6 bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border-2 border-orange-200">
                    <h2 className="font-heading text-2xl font-bold text-brand-950 mb-4">The Hidden Cost: Colombian Peso Devaluation</h2>
                    <p className="text-lg text-gray-800 leading-relaxed mb-6">
                        Colombia's cost advantage evaporates when you account for currency risk. The Colombian Peso (COP) has devalued 37% against the USD in just 5 years. This means:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white p-6 rounded-lg border border-orange-200">
                            <h4 className="font-semibold text-brand-950 mb-4">Currency Deterioration: 2020–2025</h4>
                            <div className="space-y-3">
                                {currencyRisk.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center pb-3 border-b border-gray-200">
                                        <span className="text-sm text-gray-600">{item.year}</span>
                                        <span className="font-semibold text-gray-800">{item.copToUsd.toLocaleString()} COP/USD</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-orange-200">
                            <h4 className="font-semibold text-brand-950 mb-4">What This Means for Retirees</h4>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li>• In 2020, you needed 3,500 COP to buy $1 USD</li>
                                <li>• Today, you need 5,000 COP for the same $1</li>
                                <li>• A $2,000 monthly budget in 2020 required 7M COP</li>
                                <li>• Today, that same lifestyle costs 10M COP</li>
                                <li>• Your USD savings purchase less locally every year</li>
                                <li>• Trend shows no signs of reversal</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                        <p className="text-gray-800">
                            <strong className="text-red-700">Real-World Impact:</strong> A retiree with $30,000 USD in annual income in Colombia will see that purchasing power erode by ~$1,800 per year due to devaluation alone. Over a 20-year retirement, that's $36,000 of lost purchasing power—completely negating Colombia's cost advantage.
                        </p>
                    </div>
                </section>

                {/* Visa & Residency Comparison */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Visa & Residency Process</h2>
                    <p className="text-lg text-gray-700">
                        Colombia's V (Visitor) visa is famous for its simplicity: 90 days visa-free, extendable once for another 90 days. The R (Resident) visa requires demonstrating ~$1,350/month income. Panama's Pensionado visa follows a similar income requirement but processes faster and offers permanent status.
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
                    <div className="bg-brand-GOLD/5 border-l-4 border-brand-GOLD p-6 rounded mt-6">
                        <h4 className="font-semibold text-brand-950 mb-2">Colombia's Visa Appeal</h4>
                        <p className="text-gray-800 mb-3">
                            Colombia's 90-day visa-free entry is unbeatable for testing the country. You can arrive, live for 3 months, and decide with zero bureaucracy. Panama requires visa planning upfront.
                        </p>
                        <p className="text-gray-800">
                            However, once you commit to long-term residency, Panama's 3–6 month Pensionado process beats Colombia's 5–10 week R visa process slightly in finality. Panama's permanent status (renewed every 5 years) is more definitive than Colombia's 2-year R visa renewal.
                        </p>
                    </div>
                </section>

                {/* Safety Section */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Safety: The Reality Behind the Headlines</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Colombia's safety reputation has improved dramatically. Medellin is genuinely safer than it was 10–20 years ago. But Panama still edges it out—and the difference matters for retirees prioritizing security.
                    </p>
                    <div className="overflow-x-auto border border-brand-100 rounded-lg mb-6">
                        <table className="w-full">
                            <thead className="bg-brand-950 text-white">
                                <tr>
                                    {safetyDataColombia[0].map((header, i) => (
                                        <th key={i} className="px-6 py-4 text-left text-sm font-semibold">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-brand-100">
                                {safetyDataColombia.slice(1).map((row, idx) => (
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
                        <div className="bg-white p-6 rounded-lg border-2 border-brand-TEAL">
                            <h4 className="font-semibold text-brand-950 mb-3 flex items-center gap-2">
                                <Shield className="text-brand-TEAL" size={20} />
                                Panama's Safety Profile
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• Murder rate 13–15 per 100k (lower than U.S. average)</li>
                                <li>• Consistent across multiple safe neighborhoods</li>
                                <li>• Minimal gang violence in expat areas</li>
                                <li>• Strong policing in Coronado, Casco Viejo, Boquete</li>
                                <li>• Expat community reports high sense of security</li>
                                <li>• Less organized crime visibility</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg border-2 border-orange-400">
                            <h4 className="font-semibold text-brand-950 mb-3 flex items-center gap-2">
                                <Shield className="text-orange-400" size={20} />
                                Colombia's Safety Profile
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• Murder rate 18–22 per 100k (varies by city)</li>
                                <li>• Medellin much safer than Bogota or Cali</li>
                                <li>• Gang presence in certain neighborhoods</li>
                                <li>• Safe zones (Poblado, Laureles) well-established</li>
                                <li>• Expats report good safety in tourist areas</li>
                                <li>• Historical gang violence perception persists</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-brand-TEAL/10 border-l-4 border-brand-TEAL p-6 rounded mt-6">
                        <p className="text-gray-800">
                            <strong>The Nuance:</strong> Colombia has made incredible progress. Medellin in 2025 is genuinely safe for expats who follow common-sense rules. However, Panama City maintains a slight safety edge, and Boquete (Panama) is objectively safer than any Colombian city. For risk-averse retirees, Panama wins on this metric.
                        </p>
                    </div>
                </section>

                {/* Healthcare Comparison */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Healthcare: Quality & Cost</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Colombia offers world-class healthcare at a fraction of U.S. costs. Panama offers similar quality at higher cost. For routine care, Colombia wins. For complex procedures, both are excellent.
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
                    <div className="bg-gray-50 p-6 rounded-lg border border-brand-100">
                        <h4 className="font-semibold text-brand-950 mb-3">Healthcare Winner: Colombia for Cost, Panama for Infrastructure</h4>
                        <p className="text-gray-800 mb-3">
                            Colombia offers dramatically cheaper healthcare. A doctor visit costs $20–40 vs Panama's $50–100. Open-heart surgery costs $15,000–25,000 vs Panama's $30,000–45,000. However, Panama City has higher-density JCI-accredited facilities and more English-speaking doctors, making complex care logistics easier.
                        </p>
                        <p className="text-gray-800">
                            For a healthy retiree doing routine checkups, Colombia saves money. For someone with chronic conditions requiring specialist access, Panama's infrastructure is superior.
                        </p>
                    </div>
                </section>

                {/* Real Estate */}
                <section className="space-y-6">
                    <h2 className="font-heading text-3xl font-bold text-brand-950">Real Estate Investment</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Colombia's property market is booming. Medellin's appreciation is real. However, Panama's appreciation is faster, and property taxes are lower.
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
                    <div className="bg-brand-GOLD/5 border-l-4 border-brand-GOLD p-6 rounded mt-6">
                        <p className="text-gray-800">
                            <strong>Real Estate Verdict: Panama.</strong> A $200,000 property in Medellin appreciates 4–5% annually to $400,000 over 10 years. The same $200,000 in Panama appreciates 4–6% to $435,000. Panama also has zero property taxes, saving $1,600–2,000 annually. However, property values in Medellin are lower upfront, so your capital goes further if you're buying with limited funds.
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
                                    <h4 className="font-semibold text-lg mb-2">USD Currency (No Devaluation Risk)</h4>
                                    <p className="text-gray-100">
                                        Your savings maintain purchasing power. The Colombian Peso devalues 4–6% annually. Over 10 years, your USD savings are worth 50% more in Panama than Colombia.
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
                                    <h4 className="font-semibold text-lg mb-2">Superior Safety Consistency</h4>
                                    <p className="text-gray-100">
                                        Multiple safe neighborhoods across Panama City and Boquete. Colombia's safety is concentrated in Medellin; other cities are riskier.
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
                                    <h4 className="font-semibold text-lg mb-2">Better Healthcare Infrastructure</h4>
                                    <p className="text-gray-100">
                                        More JCI-accredited hospitals, better English-speaking doctors, faster insurance claim processing.
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
                                    <h4 className="font-semibold text-lg mb-2">Faster Real Estate Appreciation</h4>
                                    <p className="text-gray-100">
                                        4–6% annually in Panama vs 3–5% in Colombia. Over 10 years, a $250,000 property gains $150,000+ more in Panama.
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
                                    <h4 className="font-semibold text-lg mb-2">Zero Property Tax</h4>
                                    <p className="text-gray-100">
                                        Panama charges no property tax. Colombia charges ~0.8% annually. That's $2,000+ per year saved on a $250,000 property.
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
                                    <h4 className="font-semibold text-lg mb-2">More Stable Government & Institutions</h4>
                                    <p className="text-gray-100">
                                        Panama is a transparent financial hub with proven stability. Colombia has stronger culture but less institutional predictability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Colombia's Wins */}
                <section className="space-y-6 bg-gray-50 p-8 rounded-xl border border-brand-100">
                    <h2 className="font-heading text-2xl font-bold text-brand-950 mb-6">Where Colombia Wins (Honestly)</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                <DollarSign className="text-brand-GOLD" size={20} />
                                27% Lower Cost of Living
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Medellin at $1,800/mo vs Panama City at $2,500/mo. If currency devaluation didn't exist, Colombia would be unbeatable on cost.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                <Home className="text-brand-GOLD" size={20} />
                                Richer Cultural Experience
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Food, nightlife, art, music—Colombia's cultural scene is vibrant and authentic. Medellin is a living, breathing city with energy.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                <TrendingUp className="text-brand-GOLD" size={20} />
                                Growing Expat Community
                            </h4>
                            <p className="text-gray-700 text-sm">
                                More digital nomads, younger expat crowd, established English-language support. Feels less touristy than Panama.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-brand-950 mb-2 flex items-center gap-2">
                                <MapPin className="text-brand-GOLD" size={20} />
                                Easier Visa Testing
                            </h4>
                            <p className="text-gray-700 text-sm">
                                90-day visa-free entry lets you try Medellin risk-free. No commitment needed. Perfect for testing before deciding.
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
                                <span>Is Medellin really safe for expats in 2025?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Yes, genuinely. The transformation over the last 10 years is real. Neighborhoods like Poblado, Laureles, and Envigado are safe for expats. Murder rates have fallen significantly. However, you must still follow common sense: avoid certain areas, don't display wealth, don't go out alone late at night. Panama City's safe neighborhoods have similar restrictions, making it roughly equivalent in practical safety.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>How bad is Colombian Peso devaluation really?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                It's severe for retirees with USD savings. The COP has lost 37% against the USD in 5 years (3,500 to 5,000 COP/USD). A retiree with $1,000/month in USD income has seen their local purchasing power fall from 3.5M COP to 5M COP required for the same lifestyle. This 37% devaluation wipes out Colombia's cost advantage over several years. If you plan to earn and spend in COP (pension from Colombian sources), it's not an issue. If you have USD savings, Panama's currency stability is a major advantage.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>Which country has better long-term residency prospects?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Panama edges Colombia. Panama's Pensionado visa is permanent and renewable every 5 years with minimal hassle. Colombia's R (Resident) visa is 2 years and must be renewed, requiring ongoing documentation. Both countries offer citizenship after 5 years, but Panama's permanent residency path is clearer and less bureaucratic. If stability matters to you, Panama's residency framework is more reliable long-term.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>Can I easily move between both countries?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Absolutely. Flights between Medellin and Panama City cost $150–300 and take 1.5 hours. Many expats split time between both countries. You could live 6 months in Colombia (testing with 90-day visa renewals) and 6 months in Panama (on Pensionado visa). This hybrid approach lets you enjoy Colombia's culture and cost while maintaining Panama's stability and currency protection. Neither country restricts this.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>What's the real estate investment time horizon?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                If you're buying for 10+ year hold, Panama wins. A $250,000 property appreciates to $450,000+ in Panama vs $400,000 in Colombia over 10 years. Plus, zero property tax saves you $25,000+. However, if you're buying for 3–5 years, Colombia's market is hotter right now—you might capture rapid appreciation during Medellin's current real estate boom. For long-term retirement purchase and hold, Panama is superior.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-lg border border-brand-100 p-6 cursor-pointer hover:bg-brand-50 transition">
                            <summary className="flex items-center justify-between font-semibold text-brand-950 text-lg">
                                <span>Which country is better for digital nomads vs retirees?</span>
                                <span className="text-brand-TEAL group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                <strong>Digital Nomads:</strong> Colombia wins. Medellin has younger vibe, better nightlife, cheaper cost, less "retirement community" feel. The 90-day visa is perfect for nomads moving between countries.
                            </p>
                            <p className="mt-2 text-gray-700 leading-relaxed">
                                <strong>Retirees:</strong> Panama wins. More stability, healthcare infrastructure, currency protection, and permanent residency path matter more to retirees. You want to settle in, not constantly move. Panama's infrastructure supports that.
                            </p>
                            <p className="mt-2 text-gray-700 leading-relaxed">
                                If you're a young professional earning in USD, Colombia is excellent. If you're a retiree living off savings/pensions, Panama is safer.
                            </p>
                        </details>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-brand-950 to-brand-900 rounded-xl p-12 text-white text-center space-y-8 my-16">
                    <h2 className="font-heading text-4xl font-bold">Ready to Explore Panama Retirement?</h2>
                    <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
                        Schedule a consultation with our team. We'll discuss your specific situation, visa strategy, and find properties that match your retirement vision in Panama City, Coronado, or Boquete.
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
                        Colombia is an excellent destination for cost-conscious expats and cultural explorers. Medellin's transformation is real, and you can live exceptionally well on $1,500–1,800/month.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        But for retirees with USD savings and a 10–20 year horizon, Panama's advantages compound: currency stability, safety consistency, healthcare infrastructure, faster real estate appreciation, and zero property tax add up to significant long-term savings.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        The real play? Many successful expats live in both. You can maintain residency in Panama (stability, healthcare, real estate) while spending 3–6 months yearly in Medellin (culture, cost, energy). Best of both worlds.
                    </p>
                </section>
            </div>
        </article>
    );
}
