import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, CheckCircle, MapPin, DollarSign, TrendingUp, Plane, Home } from 'lucide-react';

const CostBarChart = dynamic(() => import('@/components/three/CostBarChart').then(m => m.CostBarChart), { ssr: false });
const PanamaCityScene = dynamic(() => import('@/components/three/PanamaCityScene').then(m => m.PanamaCityScene), { ssr: false });

const texasVsPanamaData = [
    { label: 'Austin (TX)', value: 4800, color: '#e05555' },
    { label: 'Dallas (TX)', value: 4400, color: '#e07744' },
    { label: 'Houston (TX)', value: 4200, color: '#d4884a' },
    { label: 'San Antonio', value: 3600, color: '#c47c40' },
    { label: 'Panama City', value: 2200, color: '#00C5CB' },
    { label: 'Coronado', value: 2000, color: '#00b0b6' },
    { label: 'Boquete', value: 1750, color: '#D4A843' },
];

export const metadata: Metadata = {
    title: 'Moving to Panama from Texas 2026: Relocation Guide for Texans',
    description:
        'Texas retirees and expats: discover why Panama is a top choice. Direct flights from Houston, cost savings, visas, healthcare, and where Texas expats love to live in Panama.',
    keywords:
        'moving to panama from texas, relocate panama from texas, texas to panama expat, panama vs texas cost of living, retire panama from texas, houston to panama flights',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/moving-to-panama-from-texas',
    },
    openGraph: {
        title: 'Moving to Panama from Texas 2026: Relocation Guide for Texans',
        description:
            'Texas retirees and expats: discover why Panama is a top choice. Direct flights, cost savings, visas, healthcare, and where Texas expats love to live.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/moving-to-panama-from-texas',
    },
};

const texasToPanamaFlights = [
    { route: 'Houston (IAH) → Panama City (PTY)', airline: 'Copa Airlines (nonstop)', duration: '3h 30m', price: '$250–$550' },
    { route: 'Dallas/Fort Worth (DFW) → PTY', airline: 'Copa via Houston', duration: '4h 15m (connecting)', price: '$280–$600' },
    { route: 'Austin (AUS) → PTY', airline: 'Copa via Houston', duration: '4h 30m (connecting)', price: '$300–$650' },
    { route: 'San Antonio (SAT) → PTY', airline: 'Copa via Houston', duration: '4h 45m (connecting)', price: '$300–$650' },
];

const costComparison = [
    { item: '1BR Apartment (City Center)', texas: '$1,200–$1,900', panama: '$900–$1,400', savings: '35%' },
    { item: 'Groceries (Monthly)', texas: '$450–$650', panama: '$300–$450', savings: '35%' },
    { item: 'Utilities (AC, Water, Gas)', texas: '$150–$300', panama: '$80–$150', savings: '55%' },
    { item: 'Property Tax (1BR Condo, Annual)', texas: '$1,200–$2,500', panama: '$300–$700', savings: '70%' },
    { item: 'Car Insurance (Annual)', texas: '$1,000–$1,800', panama: '$600–$1,000', savings: '40%' },
    { item: 'Restaurant Meal (Nice Dinner)', texas: '$20–$40', panama: '$12–$20', savings: '50%' },
    { item: 'Monthly Living (Couple, Comfortable)', texas: '$3,200–$4,500', panama: '$2,000–$3,000', savings: '35%' },
];

const taxComparison = [
    { category: 'State Income Tax', texas: 'None (0%)', panama: 'N/A — No tax on foreign income' },
    { category: 'Federal Income Tax', texas: 'Yes (Up to 37%)', panama: 'Not applicable for foreign-earned income' },
    { category: 'Property Tax', texas: '0.6–1.8% of home value (HIGH)', panama: '~0.5% of registered value (LOW)' },
    { category: 'Sales Tax', texas: '8.25%', panama: 'ITBMS 5%' },
    { category: 'Healthcare Cost (Age 65+)', texas: 'High insurance premiums', panama: 'Flat 25% discount on hospital care' },
];

const bestAreasForTexans = [
    {
        name: 'Boquete',
        desc: 'Think Texas Hill Country but with year-round spring weather. A mountain town (5,000 feet elevation) with 60–75°F temperatures, a thriving expat community of 3,000+, excellent restaurants, and affordable property ($200K–$600K for a house). Very popular with Texas couples escaping the heat.',
        vibe: 'Mountain village, spring weather',
    },
    {
        name: 'Coronado',
        desc: 'A beach resort town 80 km west of Panama City. If you love the Texas coast (Galveston, Corpus Christi vibe), Coronado has beachfront property, golf, restaurants, and a 5,000+ expat community. More developed and more expensive than Boquete.',
        vibe: 'Beach lifestyle, expat hub',
    },
    {
        name: 'Panama City (El Cangrejo)',
        desc: 'The capital offers urban living, cosmopolitan dining, and world-class healthcare. Many Texas business owners and traders choose to domicile in Panama City for tax optimization while maintaining income-generating business interests.',
        vibe: 'Urban, professional, cosmopolitan',
    },
    {
        name: 'Pedasi',
        desc: 'A smaller beach town on the Pacific coast with a tight-knit expat community. Lower cost of living than Coronado, slower pace, excellent for surf lovers and those seeking a quieter retirement.',
        vibe: 'Quiet beach town, rural',
    },
];

const visaSteps = [
    { step: '1', title: 'Prove monthly pension income', desc: 'Need $1,000/month from pension, Social Security, or retirement account. Get a bank statement or letter from your retirement provider.' },
    { step: '2', title: 'Gather documents', desc: 'Birth certificate (English certified), police clearance from Texas, medical exam, proof of funds in a Panama bank account.' },
    { step: '3', title: 'Open Panama bank account', desc: 'Banco del Istmo or Banistmo accept remote applications. Some require a visit; some allow online setup. This step is optional but recommended.' },
    { step: '4', title: 'File Pensionado visa application', desc: 'Submit to Panama Immigration (Migración). Requires a lawyer (~$1,500–$2,500). Processing takes 3–6 months.' },
    { step: '5', title: 'Wait for approval', desc: 'Immigration will review and approve. You can visit Panama while waiting. No need to stay in-country during processing.' },
    { step: '6', title: 'Receive visa & stamp', desc: 'Once approved, enter Panama on your visa. Receive your Pensionado visa card (5-year validity, renewable indefinitely).' },
];

const timelineMonths = [
    { month: 'Month 1–2', task: 'Research Panama areas (Boquete, Coronado, Pedasi). Join Texas expat Facebook groups, watch YouTube, take a 2-week scouting trip.' },
    { month: 'Month 2–3', task: 'Hire a Panama real estate agent and immigration lawyer. Gather visa documents: birth certificate, police clearance, medical exam.' },
    { month: 'Month 3–4', task: 'Open Panama bank account (remote or visit). Submit Pensionado visa application.' },
    { month: 'Month 4–6', task: 'Wait for visa approval. Sell or rent Texas property if desired. Plan shipping of belongings (6-week lead time).' },
    { month: 'Month 6–9', task: 'Receive visa approval. Finalize property purchase or rental. Arrange healthcare and bank details. Book shipping company.' },
    { month: 'Month 9–12', task: 'Final month: Ship belongings (4–6 week transit). Arrange flights. Visit Panama 2–3 times to finalize housing and settle in.' },
];

const faqItems = [
    {
        q: 'Why is Boquete so popular with Texans?',
        a: 'Boquete offers cool mountain air (no Texas summer heat of 110°F+). It's reminiscent of Hill Country but cheaper. Property prices range from $200K–$600K for a nice house. Many Texans feel at home in the small-town vibe and tight expat community. Plus, it's only a 45-minute flight from Panama City.',
    },
    {
        q: 'Do I pay property tax in both Texas and Panama if I own property in both?',
        a: 'Yes. If you own Texas property (whether renting it out or leaving it vacant), you pay Texas property tax. If you buy property in Panama, you pay Panama property tax (~0.5% of declared value, much lower). You may also owe capital gains tax in both countries when you sell. Consult a CPA familiar with expat tax law.',
    },
    {
        q: 'Can I keep my Texas business and operate it from Panama?',
        a: 'Absolutely. Many Texans run businesses remotely from Panama. If you're a US citizen, you still owe US federal taxes on business income. But Panama offers no tax on foreign-sourced income, so if your business operates in the US and you're just running it from Panama (living expenses paid from retirement), this is a clean tax situation. Hire a CPA to structure it correctly.',
    },
    {
        q: 'What is Copa Airlines and why is it important for Texans?',
        a: 'Copa Airlines operates a major hub in Panama City. They offer nonstop flights from Houston (3h 30m) and connecting flights from DFW, Austin, and San Antonio via Houston. This makes Panama very accessible for Texans. Round-trip fares are typically $250–$550. You can visit family in Texas 2–3 times per year without much expense or hassle.',
    },
    {
        q: 'Is the climate really that different from Texas?',
        a: 'Yes. Texas summers hit 100–110°F with low humidity. Panama City is 80–90°F year-round but humid. Boquete is 60–75°F year-round (like eternal spring). Many Texans love Boquete for this reason — no AC bills, no sweating, just pleasant weather all year.',
    },
];

export default async function MovingToPanamaFromTexasPage({ params }: { params: Promise<{ lang: string }> }) {
    await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
                        alt="Texas to Panama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        RELOCATION GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Moving to Panama<br />from Texas
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Escape the Texas heat. Direct flights from Houston, Boquete's spring-like climate, and a thriving Texan expat community. Your complete relocation guide.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Texas is the second-largest feeder state for Panama expats. High-income retirees, business owners, and couples are flocking to Panama to escape Texas heat, high property taxes, and rising costs — while maintaining easy access to family and business back home.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        Copa Airlines offers a nonstop flight from Houston to Panama City in just 3.5 hours. Boquete, a mountain town with eternal spring weather, has become wildly popular with Texans seeking cooler climates. And Panama's tax advantages for retirees and business owners are significant. This guide walks Texans through everything: visa options, cost comparisons, where Texans are moving, and your relocation timeline.
                    </p>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        {[
                            { stat: '3h 30m', label: 'Houston to Panama nonstop' },
                            { stat: '35%', label: 'Cost savings vs Texas' },
                            { stat: '60–75°F', label: 'Boquete year-round temp' },
                            { stat: '70%', label: 'Property tax savings' },
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
                        Direct Flights from Texas to Panama
                    </h2>
                    <div className="space-y-4">
                        {texasToPanamaFlights.map((flight, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                                    <div>
                                        <h3 className="text-lg font-heading font-bold text-brand-950 mb-1">{flight.route}</h3>
                                        <p className="text-slate-500 text-xs">{flight.airline}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white font-black text-sm">{flight.duration}</div>
                                        <div className="text-brand-GOLD font-bold text-xs">{flight.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                        Copa Airlines is the dominant carrier from Houston, with a major hub in Panama City. Houston expats benefit from direct flights year-round. Dallas and Austin residents connect through Houston with minimal hassle. This accessibility makes Panama ideal for Texans who want to maintain ties to the US — you can visit family, attend events, or check on business with a quick 3.5-hour flight.
                    </p>
                </section>

                {/* 3D Texas vs Panama Cost Chart */}
                <CostBarChart
                    data={texasVsPanamaData}
                    title="Monthly Cost of Living: Texas Cities vs Panama"
                    subtitle="Comfortable couple lifestyle · USD/month"
                    height="270px"
                />

                {/* Panama City Scene */}
                <PanamaCityScene />

                {/* Cost Comparison */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Panama vs Texas: Cost of Living
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4"></th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Texas</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Panama</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Savings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {costComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.item}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3">{row.texas}</td>
                                        <td className="text-white text-xs py-3 px-3 font-bold">{row.panama}</td>
                                        <td className="text-brand-GOLD text-xs py-3 px-3 font-bold">{row.savings}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                        A comfortable couple's lifestyle in Panama costs $2,000–$3,000 per month. In Texas (especially major metros like Austin, Dallas, Houston), the same lifestyle costs $3,200–$4,500. The biggest win for Texans is property tax: Texas levies 0.6–1.8% on home value annually. Panama taxes only 0.5% on declared property value. If you own a $500K home in Texas, you pay $3,000–$9,000/year in property tax. In Panama, the same home costs $2,500/year. Over a decade, that's $25,000–$70,000 in savings.
                    </p>
                </section>

                {/* Tax Comparison */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Panama vs Texas: Tax Advantages for Texans
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4"></th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Texas</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Panama</th>
                                </tr>
                            </thead>
                            <tbody>
                                {taxComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.category}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3">{row.texas}</td>
                                        <td className="text-brand-GOLD text-xs py-3 px-3 font-bold">{row.panama}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                        Texas has no state income tax (major advantage), but Panama offers something even better: no tax on foreign-sourced income. If you're a retiree with US Social Security, pensions, or retirement account distributions, Panama does not tax any of it. As a US citizen, you still owe federal taxes, but the Panama advantage is massive for retirees. Business owners can also structure operations to maximize this benefit — consult a tax advisor familiar with expat law.
                    </p>
                </section>

                {/* Climate & Lifestyle */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Climate: Texas Heat vs Boquete's Spring Weather
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <div className="text-slate-500 font-black uppercase tracking-widest text-xs mb-4">Texas Summer</div>
                            <ul className="space-y-3">
                                {[
                                    '100–110°F average high',
                                    'Humidity 40–70%',
                                    'AC bills $300–$600/month',
                                    'Heat index 115–120°F',
                                    'Outdoor activities limited to early morning',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-500 text-xs">
                                        <span className="text-slate-600 mt-0.5 flex-shrink-0 font-bold">—</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <div className="text-brand-GOLD font-black uppercase tracking-widest text-xs mb-4">Boquete Year-Round</div>
                            <ul className="space-y-3">
                                {[
                                    '60–75°F year-round',
                                    'Humidity 60–70% (manageable)',
                                    'No AC needed (saves $300+/month)',
                                    'Comfortable all day',
                                    'Outdoor activities every day',
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
                        Boquete, located in the western highlands of Panama, has become famous among Texans for one reason: you never sweat. While Panama City can be hot and humid, Boquete's elevation (5,000 feet) provides spring-like weather year-round. No air conditioning needed. No crushing summer heat. Many Texans say this alone justifies the move.
                    </p>
                </section>

                {/* Best Places */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <MapPin className="inline text-brand-GOLD mr-2" size={28} />
                        Best Places in Panama for Texans
                    </h2>
                    <div className="space-y-5">
                        {bestAreasForTexans.map((area, i) => (
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
                        Pensionado Visa for Texans: Step-by-Step
                    </h2>
                    <div className="space-y-3">
                        {visaSteps.map((s, i) => (
                            <div key={i} className="flex items-start gap-4 card-light rounded-xl p-5 border border-brand-100">
                                <div className="w-8 h-8 rounded-full bg-brand-GOLD/10 border border-brand-GOLD/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-GOLD font-black text-xs">{s.step}</span>
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm mb-1">{s.title}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{s.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100 mt-6">
                        <p className="text-slate-600 text-sm leading-relaxed">
                            <strong>Key advantage for Texans:</strong> Panama allows US Social Security to count toward the Pensionado requirement. If you receive $1,000/month in Social Security, you qualify. No need to have a pension from an employer. Legal fees range from $1,500–$2,500. Once approved, your visa is valid for 5 years and renewable indefinitely with minimal paperwork.
                        </p>
                    </div>
                </section>

                {/* Keeping Texas Property */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Keeping Your Texas Property (or Selling It)
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <div className="text-brand-GOLD font-bold uppercase tracking-widest text-xs mb-4">SELL IT</div>
                            <p className="text-slate-500 text-xs leading-relaxed mb-4">Clean break. No property taxes, maintenance, or management headaches in two countries. Capital gains tax may apply on the sale, but if you've lived there 2 of the last 5 years, you can exclude up to $250K in gains (or $500K for couples).</p>
                            <p className="text-brand-GOLD text-xs font-bold">Best if: You want a fresh start and no Texas ties.</p>
                        </div>
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <div className="text-brand-GOLD font-bold uppercase tracking-widest text-xs mb-4">RENT IT OUT</div>
                            <p className="text-slate-500 text-xs leading-relaxed mb-4">Generate Texas income. However, you pay property taxes annually, plus capital gains and rental income taxes. Hire a property manager ($150–$300/mo). Typical net yield after all expenses: 3–5%. Many retirees find Panama rental property more attractive.</p>
                            <p className="text-brand-GOLD text-xs font-bold">Best if: You want US income and plan frequent visits.</p>
                        </div>
                    </div>
                </section>

                {/* Texas Business */}
                <section className="reveal-on-scroll bg-brand-50 rounded-2xl p-8 border border-brand-100">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-6">Operating a Texas Business from Panama</h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        Many Texans maintain their businesses while relocating to Panama. This is perfectly legal. You operate your business remotely (online, consulting, oil & gas, real estate, etc.) and manage it from Panama. As a US citizen, you still owe US federal taxes on business income.
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        However, if you structure your domicile as Panama and your business income is US-sourced, you may be able to optimize your tax situation. Some Texans incorporate a Panama business entity to take advantage of low corporate taxes. Consult a CPA and international tax attorney before making this move.
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        <strong>Oil & gas workers:</strong> Many Texas oil executives and engineers relocate to Panama to take advantage of tax incentives while consulting for US companies. The time zone difference is minimal (Panama is 1 hour ahead of Central Time).
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
                                <h3 className="text-white font-bold text-sm mb-3">{item.q}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Moving Companies & Services */}
                <section className="bg-brand-50 border border-brand-100 rounded-2xl p-8 my-12">
                  <h2 className="font-heading text-2xl font-bold text-brand-950 mb-2">Trusted Moving Companies & Relocation Services</h2>
                  <p className="text-brand-700 mb-6">Relocating from Texas to Panama is manageable. Here are vetted services for shipping, local setup, and banking — everything from packing to settling in Boquete or Coronado.</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-brand-TEAL mb-3">🚛 International Movers (Texas to Panama)</h3>
                      <ul className="space-y-2 text-sm text-brand-700">
                        <li><strong className="text-brand-950">International Van Lines</strong> — Top-rated. Ships from Texas to Panama ports. Avg $4,000–$8,000 for 1BR.</li>
                        <li><strong className="text-brand-950">Schumacher Cargo Logistics</strong> — Texas-based, specializes in Panama shipments. Handles vehicles + household goods.</li>
                        <li><strong className="text-brand-950">Allied Van Lines International</strong> — Door-to-door from Houston, Dallas, Austin to Panama City.</li>
                        <li><strong className="text-brand-950">Moveboxer.com</strong> — Compare quotes from multiple movers. Free estimates.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-brand-TEAL mb-3">🏠 Panama-Side Services</h3>
                      <ul className="space-y-2 text-sm text-brand-700">
                        <li><strong className="text-brand-950">Relocate Panama</strong> — Full relocation support: airport pickup, temporary housing, banking setup, house hunting in Boquete/Coronado.</li>
                        <li><strong className="text-brand-950">Moving Panama</strong> — English-speaking local movers. Fast customs clearance and delivery.</li>
                        <li><strong className="text-brand-950">Panama Relocation Tours</strong> — Famous 5-day scouting tours. Essential before committing to Boquete vs Coronado. panamarelocationtours.com</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-brand-TEAL mb-3">🚗 Vehicle Shipping</h3>
                      <ul className="space-y-2 text-sm text-brand-700">
                        <li><strong className="text-brand-950">Montway Auto Transport</strong> — Door-to-port from Texas to Colón Free Zone.</li>
                        <li><strong className="text-brand-950">Schumacher Cargo</strong> — RoRo vehicle shipping from Texas Gulf ports.</li>
                        <li><em className="text-brand-600">Note: Vehicle import duty = 30-50%. Most Texans buy used cars locally (Honda, Toyota $8K–$20K).</em></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-brand-TEAL mb-3">💳 Financial & Banking Setup</h3>
                      <ul className="space-y-2 text-sm text-brand-700">
                        <li><strong className="text-brand-950">Charles Schwab International Debit</strong> — Zero ATM fees worldwide. Perfect for Panama expats.</li>
                        <li><strong className="text-brand-950">Wise (TransferWise)</strong> — Best rates for USD transfers to Panama banks.</li>
                        <li><strong className="text-brand-950">Banistmo / Global Bank / BAC</strong> — Open Panama USD accounts for Pensionado visa holders easily.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white rounded-xl border border-brand-100">
                    <p className="text-sm text-brand-700"><strong className="text-brand-950">💡 Pro Tip from VIP Expats:</strong> Take a Panama Relocation Tour BEFORE shipping your belongings. Boquete's mountain climate vs Coronado's beach lifestyle are very different. A 5-day tour saves most Texans from regret.</p>
                  </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Ready to Escape the Texas Heat?
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Our team specializes in helping Texans relocate to Panama. We handle visa guidance, tax structuring advice, and property matching in Boquete, Coronado, and beyond. Let's find your Panama home.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Schedule Free Relocation Consultation <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/en/relocation"
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Relocation Resources
                        </Link>
                    </div>
                </section>

                {/* Internal links */}
                <section className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Boquete Living Guide', href: '/en/blog/boquete-relocation-guide' },
                        { label: 'Panama Tax Strategy', href: '/en/relocation/visas/pensionado' },
                        { label: 'Find Your Panama Home', href: '/en/quiz' },
                    ].map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="flex items-center justify-between card-light p-4 rounded-xl border border-brand-100 hover:border-brand-GOLD/30 transition-all group"
                        >
                            <span className="text-white text-xs font-bold">{link.label}</span>
                            <ArrowRight size={12} className="text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                    ))}
                </section>

            </div>
        </article>
    );
}
