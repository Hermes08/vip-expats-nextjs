import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, DollarSign, TrendingUp, Plane, Home } from 'lucide-react';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';


const floridaVsPanamaData = [
    { label: 'Miami (Florida)', value: 5800, color: '#e05555' },
    { label: 'Orlando', value: 4200, color: '#e07744' },
    { label: 'Tampa', value: 3800, color: '#d4884a' },
    { label: 'Jacksonville', value: 3400, color: '#c47c40' },
    { label: 'Panama City', value: 2200, color: '#00C5CB' },
    { label: 'Coronado', value: 2000, color: '#00b0b6' },
    { label: 'Boquete', value: 1750, color: '#D4A843' },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const slug = 'moving-to-panama-from-florida';
  const domain = 'https://panamarealestatesale.com';
  const canonical = `${domain}/${lang}/blog/${slug}`;

  return {
    title: 'Move from Florida to Panama 2026: Visa, Costs, Relocation Guide',
    description: 'Floridians moving to Panama. Visa options, residency, costs, healthcare, taxes, relocation tips.',
    keywords: 'Florida to Panama, moving from Florida to Panama, Panama pensionado visa, expats from Florida',
    alternates: {
        canonical,
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/moving-to-panama-from-florida',
            'es': 'https://panamarealestatesale.com/es/blog/moving-to-panama-from-florida',
            'pt': 'https://panamarealestatesale.com/pt/blog/moving-to-panama-from-florida',
            'de': 'https://panamarealestatesale.com/de/blog/moving-to-panama-from-florida',
        },
    },
    openGraph: {
        title: 'Move from Florida to Panama 2026: Visa, Costs, Relocation Guide',
        description: 'Floridians moving to Panama. Visa options, residency, costs, healthcare, taxes, relocation tips.',
        type: 'article',
        url: canonical,
        images: [{ url: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80', width: 1200, height: 630, alt: 'Moving from Florida' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Move from Florida to Panama 2026: Visa, Costs, Relocation Guide',
        description: 'Floridians moving to Panama. Visa options, residency, costs, healthcare, taxes, relocation tips.',
        images: ['https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80'],
    },
};
}

const floridaToPanamaFlights = [
    { route: 'Miami (MIA) → Panama City (PTY)', airline: 'Copa Airlines, American, United, Delta', duration: '2h 40m nonstop', price: '$200–$500' },
    { route: 'Fort Lauderdale (FLL) → PTY', airline: 'Copa, United, American', duration: '3h nonstop', price: '$220–$520' },
    { route: 'Orlando (MCO) → PTY', airline: 'Copa via Miami', duration: '3h 30m (connecting)', price: '$250–$550' },
    { route: 'Tampa (TPA) → PTY', airline: 'Copa via Miami', duration: '4h 15m (connecting)', price: '$280–$580' },
];

const costComparison = [
    { item: '1BR Apartment (City Center)', florida: '$1,500–$2,200', panama: '$900–$1,400', savings: '40%' },
    { item: 'Groceries (Monthly)', florida: '$500–$700', panama: '$300–$450', savings: '35%' },
    { item: 'Utilities (Electric, Water, Gas)', florida: '$250–$400', panama: '$80–$150', savings: '60%' },
    { item: 'Healthcare (Annual)', florida: '$2,500–$5,000', panama: '$800–$1,500', savings: '65%' },
    { item: 'Car Insurance (Annual)', florida: '$1,200–$2,000', panama: '$600–$1,000', savings: '50%' },
    { item: 'Restaurant Meal (Nice Dinner)', florida: '$25–$50', panama: '$12–$20', savings: '55%' },
    { item: 'Monthly Living (Couple, Comfortable)', florida: '$3,500–$5,000', panama: '$2,000–$3,000', savings: '40%' },
];

const taxComparison = [
    { category: 'State Income Tax', florida: 'None (0%)', panama: 'N/A — No tax on foreign income' },
    { category: 'Federal Income Tax', florida: 'Yes (Up to 37%)', panama: 'Not applicable for foreign-earned income' },
    { category: 'Property Tax', florida: '~0.9% of assessed value', panama: '~0.5% of registered value (much lower)' },
    { category: 'Capital Gains Tax', florida: 'Federal 15–20%', panama: 'No capital gains tax' },
    { category: 'Sales Tax', florida: '6–7.5%', panama: 'ITBMS 5%' },
];

const bestAreasForFloridians = [
    {
        name: 'Coronado',
        desc: 'If you love Siesta Key or Sanibel Island, Coronado is your match. A thriving beach town 80 km west of Panama City with 5,000+ North American expats, beachfront properties, golf course, and restaurants catering to the expat palate. Most like Florida beach towns.',
        vibe: 'Beach resort lifestyle',
    },
    {
        name: 'Punta Pacifica',
        desc: 'Think Miami Brickell but with better infrastructure and lower cost. Luxury high-rises, world-class restaurants, shopping, and nightlife. Perfect for urban-minded retirees who want city amenities without the Miami traffic.',
        vibe: 'Urban, cosmopolitan',
    },
    {
        name: 'Boquete',
        desc: 'A mountain town 6 hours west (or 45 min by small plane). Spring-like weather year-round (60–75°F), expat community of 3,000+, zero humidity, and the cost of living is even lower than Coronado. Perfect if you want to escape the heat.',
        vibe: 'Cool mountain village',
    },
    {
        name: 'El Cangrejo (Panama City)',
        desc: 'The safest, most cosmopolitan neighborhood in the capital. Walking distance to restaurants, museums, and the banking district. Great for retirees who want city life and easy access to healthcare and services.',
        vibe: 'Urban neighborhood',
    },
];

const visaSteps = [
    { step: '1', title: 'Secure an invitation letter', desc: 'From a Panamanian sponsor or employer (or a real estate company). This is a formality.' },
    { step: '2', title: 'Gather required documents', desc: 'Birth certificate (English translation), police clearance, medical exam, proof of funds ($1,000/month pension or retirement income).' },
    { step: '3', title: 'Open a bank account', desc: 'Many pensioners open a Panama bank account (Banco del Istmo, Banistmo) before visa application. This helps demonstrate financial standing.' },
    { step: '4', title: 'Apply at Panamanian Immigration', desc: 'Submit application + documents. Processing takes 3–6 months. You can visit Panama while awaiting approval.' },
    { step: '5', title: 'Arrive and receive visa stamp', desc: 'Once approved, you arrive in Panama and receive your Pensionado visa (5-year renewable, very easy to renew).' },
];

const timelineMonths = [
    { month: 'Month 1–2', task: 'Research areas: Coronado, Punta Pacifica, Boquete. Watch YouTube videos, join Facebook expat groups, take a 1-week reconnaissance trip.' },
    { month: 'Month 2–3', task: 'Hire a real estate agent and/or lawyer in Panama. Start visa paperwork: gather birth certificate, police clearance, medical exam.' },
    { month: 'Month 3–4', task: 'Open a Panama bank account (remote or visit in person). Finalize visa application.' },
    { month: 'Month 4–6', task: 'Wait for visa approval (3–6 months). Use this time to sell or rent your Florida home, arrange ship movers for belongings.' },
    { month: 'Month 6–9', task: 'Receive visa approval. Schedule your move. Arrange healthcare in Panama. Start learning Spanish (apps like Duolingo help).' },
    { month: 'Month 9–12', task: 'Final month: visit Panama 2–3 times to finalize rental/purchase, meet neighbors, and prepare for move-in.' },
];

const faqItems = [
    {
        q: 'Can I keep my Florida home?',
        a: 'Yes. Many Panama expats keep a Florida property and visit 2–3 times per year. You can rent it out for income. However, you must file US taxes on rental income. Some retirees take a "snowbird" approach: 6 months Panama, 6 months Florida (though this has visa residency implications — consult an immigration lawyer).',
    },
    {
        q: 'What about currency risk — is the dollar stable in Panama?',
        a: 'Panama uses the US dollar as official currency (alongside the balboa). Zero currency risk. You earn in USD, spend in USD, save in USD. No forex conversion needed.',
    },
    {
        q: 'Do I need to speak Spanish?',
        a: 'Not required to move, but highly recommended for quality of life. English is widely spoken in Panama City and tourist areas. In smaller towns like Boquete, many expats speak English. However, learning basic Spanish (3–6 months of classes) transforms your experience.',
    },
    {
        q: 'What about healthcare quality?',
        a: 'Panama has world-class private healthcare. Hospitals like CIMA and Hospital Punta Pacifica are JCI-accredited (same standard as US hospitals). Most doctors speak English and are US-trained. Cost is 60–80% cheaper than Florida. Pensionado visa includes 25% discount on hospital services.',
    },
    {
        q: 'Is it easy to import my car or furniture?',
        a: 'Yes. Non-residents get a one-time duty-free import allowance for household goods and one vehicle. This covers most personal items, furniture, and one car. Hire a customs broker to handle paperwork (~$500–$1,000 fee). Shipping typically takes 4–6 weeks from Florida ports.',
    },
];

export default async function MovingToPanamaFromFloridaPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
                        alt="Florida to Panama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        RELOCATION GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Moving to Panama<br />from Florida
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Direct flights under 3 hours, 40% lower cost of living, and a thriving Florida expat community. Everything you need to know before you move.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Florida residents are uniquely positioned to move to Panama. Three-hour flights from Miami and Fort Lauderdale, a thriving community of 50,000+ expats, and a cost of living that is 30–50% lower than Florida.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        Panama is not a distant frontier. It's a modern, stable, dollar-based economy with excellent infrastructure, JCI-accredited hospitals, and direct flights every day from your home state. This guide walks Floridians through everything: visas, cost comparisons, where to live, how to bring your belongings, and the step-by-step timeline to make your move.
                    </p>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        {[
                            { stat: '2h 40m', label: 'Direct flight Miami → Panama' },
                            { stat: '40%', label: 'Cost savings vs Florida' },
                            { stat: '50K+', label: 'Expats in Panama' },
                            { stat: '$1,000/mo', label: 'Pensionado visa requirement' },
                        ].map((s, i) => (
                            <div key={i} className="bg-brand-50 rounded-2xl p-5 text-center border border-brand-100">
                                <div className="text-2xl font-black text-brand-GOLD mb-1">{s.stat}</div>
                                <div className="text-slate-500 text-xs leading-relaxed">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Direct Flights */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Plane className="inline text-brand-GOLD mr-2" size={28} />
                        Direct Flights from Florida to Panama
                    </h2>
                    <div className="space-y-4">
                        {floridaToPanamaFlights.map((flight, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                                    <div>
                                        <h3 className="text-lg font-heading font-bold text-brand-950 mb-1">{flight.route}</h3>
                                        <p className="text-slate-500 text-xs">{flight.airline}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-brand-950 font-black text-sm">{flight.duration}</div>
                                        <div className="text-brand-GOLD font-bold text-xs">{flight.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                        Copa Airlines operates a hub in Panama City and offers daily flights from Miami and Fort Lauderdale. American, United, and Delta also serve this route. Round-trip fares are typically $200–$500 depending on season. Direct flights mean you can make quick trips back to Florida to visit family, close business, or check on property.
                    </p>
                </section>

                {/* 3D Florida vs Panama Chart */}
                <CostBarChart
                    data={floridaVsPanamaData}
                    title="Monthly Cost of Living: Florida Cities vs Panama"
                    subtitle="Comfortable couple lifestyle · USD/month"
                    height="270px"
                />

                {/* Panama City Scene */}
                <PanamaCityScene />

                {/* Cost Comparison */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Panama vs Florida: Cost of Living
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4"></th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Florida</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Panama</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Savings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {costComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.item}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3">{row.florida}</td>
                                        <td className="text-white text-xs py-3 px-3 font-bold">{row.panama}</td>
                                        <td className="text-brand-GOLD text-xs py-3 px-3 font-bold">{row.savings}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                        A comfortable couple's lifestyle in Panama costs $2,000–$3,000 per month. In Florida, the same lifestyle costs $3,500–$5,000. The largest savings come from utilities (air conditioning isn't needed in Panama's climate), healthcare, and dining out. Rent is cheaper but property prices in prime areas are comparable.
                    </p>
                </section>

                {/* Tax Comparison */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Panama vs Florida: Tax Comparison
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4"></th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Florida</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Panama</th>
                                </tr>
                            </thead>
                            <tbody>
                                {taxComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.category}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3">{row.florida}</td>
                                        <td className="text-brand-GOLD text-xs py-3 px-3 font-bold">{row.panama}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                        Florida has no state income tax, but Panama is a game-changer: Panama taxes only income earned within Panama. Foreign-sourced income (US Social Security, pensions, dividends, retirement account distributions) is NOT taxed in Panama. This is massive for retirees. However, as a US citizen, you still owe US federal taxes. Consult a tax advisor familiar with expat law to optimize your filing strategy.
                    </p>
                </section>

                {/* Healthcare */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Healthcare: Panama vs Florida
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <div className="text-slate-500 font-black uppercase tracking-widest text-xs mb-4">Florida Healthcare</div>
                            <ul className="space-y-3">
                                {[
                                    'Long wait times in emergency rooms',
                                    'High out-of-pocket costs (deductibles, copays)',
                                    'Medication prices among world\'s highest',
                                    'Medicare/insurance required (can be expensive)',
                                    'Quality is excellent but access is crowded',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-500 text-xs">
                                        <span className="text-slate-600 mt-0.5 flex-shrink-0 font-bold">—</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <div className="text-brand-GOLD font-black uppercase tracking-widest text-xs mb-4">Panama Healthcare</div>
                            <ul className="space-y-3">
                                {[
                                    'JCI-accredited hospitals (US standard)',
                                    'US-trained doctors, many bilingual',
                                    '60–80% lower costs than US',
                                    'Private insurance very affordable ($100–$200/mo)',
                                    'Same-day or next-day appointments',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-500 text-xs">
                                        <CheckCircle size={12} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                        Panama's healthcare system is world-class. CIMA San Blas, Hospital Punta Pacifica, and others are fully accredited and modern. A routine doctor's visit costs $50–$100. A hip replacement that costs $35,000 in the US costs $12,000 in Panama. Pensionado visa holders get a 25% discount on hospital services and medicines. Many expats pay out of pocket because it's still cheaper than their US insurance premiums.
                    </p>
                </section>

                {/* Best Places */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <MapPin className="inline text-brand-GOLD mr-2" size={28} />
                        Best Places in Panama for Floridians
                    </h2>
                    <div className="space-y-5">
                        {bestAreasForFloridians.map((area, i) => (
                            <div key={i} className="card-light rounded-2xl p-7 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                                    <h3 className="text-xl font-heading font-bold text-brand-950">{area.name}</h3>
                                    <div className="text-right">
                                        <div className="text-brand-GOLD font-black text-xs uppercase tracking-widest">{area.vibe}</div>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">{area.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Visa Process */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Pensionado Visa: Step-by-Step
                    </h2>
                    <div className="space-y-3">
                        {visaSteps.map((s, i) => (
                            <div key={i} className="flex items-start gap-4 card-light rounded-xl p-5 border border-brand-100">
                                <div className="w-8 h-8 rounded-full bg-brand-GOLD/10 border border-brand-GOLD/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-GOLD font-black text-xs">{s.step}</span>
                                </div>
                                <div>
                                    <div className="text-brand-950 font-bold text-sm mb-1">{s.title}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{s.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100 mt-6">
                        <p className="text-slate-600 text-sm leading-relaxed">
                            <strong>Timeline:</strong> 3–6 months from application to approval. Legal fees typically range from $1,500–$3,000 (covers lawyer's work, government fees, and translations). Once approved, your Pensionado visa is valid for 5 years and is renewable indefinitely with minimal effort. You also gain the right to bring a spouse or parent on the same visa.
                        </p>
                    </div>
                </section>

                {/* What to Do with FL Home */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        What to Do with Your Florida Home
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <div className="text-brand-GOLD font-bold uppercase tracking-widest text-xs mb-4">SELL</div>
                            <p className="text-slate-500 text-xs leading-relaxed mb-4">Clean break. No more property taxes, maintenance, or management headaches. Proceeds fund your Panama life or provide a cash buffer. Tax note: If you've lived there 2 of the last 5 years, you can exclude up to $250K in gains (or $500K for couples).</p>
                            <p className="text-brand-GOLD text-xs font-bold">Best if: You want a fresh start and no attachment to Florida.</p>
                        </div>
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <div className="text-brand-GOLD font-bold uppercase tracking-widest text-xs mb-4">RENT IT OUT</div>
                            <p className="text-slate-500 text-xs leading-relaxed mb-4">Generate passive income. Florida short-term rental markets are strong. However, you must file US taxes on rental income, manage tenants remotely, and pay property taxes. Hire a property manager ($100–$200/mo). Net yield: 4–6% after expenses.</p>
                            <p className="text-brand-GOLD text-xs font-bold">Best if: You want income and plan to return occasionally.</p>
                        </div>
                    </div>
                    <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                        Some Floridians use a "snowbird" strategy: spend 6 months in Panama, 6 months in Florida. This affects visa residency status — consult an immigration lawyer if you pursue this path. Many expats simply sell the home and invest the proceeds in Panama real estate, which offers better appreciation and a lifestyle component.
                    </p>
                </section>

                {/* Moving Belongings */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Moving Your Belongings to Panama
                    </h2>
                    <div className="card-light rounded-2xl p-6 border border-brand-100 mb-6">
                        <p className="text-slate-500 text-sm leading-relaxed">
                            <strong>Duty-free import:</strong> Panama offers a one-time duty-free import allowance for first-time residents. This covers household goods (furniture, appliances, electronics), one vehicle, and personal effects. No duty or tax — just pay shipping. You can bring almost everything: your bed, couch, dishes, electronics, tools, even your car if it's under 10 years old.
                        </p>
                    </div>
                    <div className="space-y-3">
                        {[
                            { label: 'Hire a shipping company', desc: 'Major movers: North American Van Lines, United Van Lines, or specialized Panama shippers. Get 3 quotes.' },
                            { label: 'Box and label everything', desc: 'Clearly mark each box with contents. Take photos for your customs broker.' },
                            { label: 'Hire a Panamanian customs broker', desc: 'They handle all paperwork and clearance (~$500–$1,000 fee). Essential. Do not skip this.' },
                            { label: 'Ship to a Panama port', desc: 'Shipping takes 4–6 weeks from Florida. Costs typically $5,000–$12,000 for a full home shipment (25+ cubic feet).' },
                            { label: 'Arrange vehicle import', desc: 'If bringing a car: hire a broker, budget 2–3 weeks for clearance. No import duty. Monthly insurance is ~$50–$100.' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-start gap-4 card-light rounded-xl p-5 border border-brand-100">
                                <div className="w-1 h-1 rounded-full bg-brand-GOLD mt-2 flex-shrink-0"></div>
                                <div>
                                    <div className="text-brand-950 font-bold text-sm mb-1">{s.label}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{s.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Expat Community */}
                <section className="reveal-on-scroll bg-brand-50 rounded-2xl p-8 border border-brand-100">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-6">Florida Expat Community in Panama</h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        Panama's expat community is predominantly North American, with large populations from Florida, California, Texas, and Canada. Facebook groups like "Expats in Panama," "Coronado Expat Community," and "Boquete Social Club" have thousands of members sharing advice, organizing meetups, and selling secondhand goods.
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        Weekly meetups happen in Coronado, Boquete, and Panama City. English-speaking doctors, lawyers, and property managers cater directly to this community. You will never feel alone. Most expats say the toughest part is the first month; after that, they feel at home.
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        <strong>Direct flights make family visits easy:</strong> Many retirees fly back to Florida 2–3 times per year to see grandchildren, attend family events, or check on business. A round-trip from Miami costs $200–$400 and takes under 3 hours. You're not moving to the moon — you're moving to a three-hour flight away.
                    </p>
                </section>

                {/* Timeline */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        12-Month Relocation Timeline
                    </h2>
                    <div className="space-y-3">
                        {timelineMonths.map((t, i) => (
                            <div key={i} className="flex items-start gap-4 card-light rounded-xl p-5 border border-brand-100">
                                <div className="w-24 flex-shrink-0">
                                    <div className="text-brand-GOLD font-bold text-xs uppercase">{t.month}</div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-slate-500 text-xs leading-relaxed">{t.task}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqItems.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <h3 className="text-brand-950 font-bold text-sm mb-3">{item.q}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Moving Companies & Services */}
                <section className="bg-brand-50 border border-brand-100 rounded-2xl p-8 my-12">
                  <h2 className="font-heading text-2xl font-bold text-brand-950 mb-2">Trusted Moving Companies & Relocation Services</h2>
                  <p className="text-brand-700 mb-6">Moving to Panama from Florida is straightforward. Here are vetted services that cover everything: direct shipping from Florida ports, local Panama receiving, and financial setup.</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-brand-TEAL mb-3">🚛 International Movers (Florida to Panama)</h3>
                      <ul className="space-y-2 text-sm text-brand-700">
                        <li><strong className="text-brand-950">International Van Lines</strong> — Top-rated US mover. Ships direct from Miami/Fort Lauderdale to Panama. Avg $4,000–$8,000 for 1BR.</li>
                        <li><strong className="text-brand-950">Schumacher Cargo Logistics</strong> — Specializes in Florida-Panama routes. Fast shipping from Port Miami.</li>
                        <li><strong className="text-brand-950">North American Van Lines</strong> — Florida-based, excellent Panama partnerships.</li>
                        <li><strong className="text-brand-950">Moveboxer.com</strong> — Get 3+ free quotes from major movers in minutes.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-brand-TEAL mb-3">🏠 Panama-Side Receiving & Setup</h3>
                      <ul className="space-y-2 text-sm text-brand-700">
                        <li><strong className="text-brand-950">Relocate Panama</strong> — White-glove service: container receiving, customs clearance, airport pickup, temporary housing.</li>
                        <li><strong className="text-brand-950">Moving Panama</strong> — English-speaking local movers. Partner with most international shippers.</li>
                        <li><strong className="text-brand-950">Panama Relocation Tours</strong> — 5-day tours through Coronado, Panama City, Boquete. Helps Floridians choose their neighborhood. panamarelocationtours.com</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-brand-TEAL mb-3">🚗 Vehicle & Auto Transport</h3>
                      <ul className="space-y-2 text-sm text-brand-700">
                        <li><strong className="text-brand-950">Montway Auto Transport</strong> — Ship cars from Florida to Colón port. Door-to-port service.</li>
                        <li><strong className="text-brand-950">Schumacher Cargo</strong> — Direct vehicle shipping. RoRo service from Florida ports.</li>
                        <li><em className="text-brand-600">Tip: Import duty on vehicles is 30%+. Many Floridians buy used Honda/Toyota locally instead ($8K–$20K).</em></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-brand-TEAL mb-3">💳 Banking & Money Transfer</h3>
                      <ul className="space-y-2 text-sm text-brand-700">
                        <li><strong className="text-brand-950">Charles Schwab International Debit</strong> — Zero ATM fees worldwide. Essential for expats.</li>
                        <li><strong className="text-brand-950">Wise (TransferWise)</strong> — Low-cost transfers to Panama banks. Great exchange rates.</li>
                        <li><strong className="text-brand-950">Global Bank / Banistmo</strong> — Easy account opening for new Panama residents with Pensionado visa.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white rounded-xl border border-brand-100">
                    <p className="text-sm text-brand-700"><strong className="text-brand-950">💡 Pro Tip from VIP Expats:</strong> Direct flights from Miami/Fort Lauderdale make it easy to visit home. Many Floridians test-drive Panama with a 2-week trip before committing to shipping belongings.</p>
                  </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Ready to Move to Panama?
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Our team specializes in helping Florida residents relocate to Panama. We handle visa guidance, property matching, and can connect you with lawyers, doctors, and movers. Let's find your Panama home.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Schedule Free Relocation Consultation <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/relocation`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Relocation Resources
                        </Link>
                    </div>
                </section>

                {/* Internal links */}
                <section className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Pensionado Visa Guide', href: '/en/relocation/visas/pensionado' },
                        { label: 'Panama Cost of Living', href: '/en/blog/panama-cost-of-living' },
                        { label: 'Best Places to Live in Panama', href: '/en/quiz' },
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
    );
}
