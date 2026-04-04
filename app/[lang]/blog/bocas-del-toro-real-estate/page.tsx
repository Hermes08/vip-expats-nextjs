import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, DollarSign, TrendingUp, Home, Waves, AlertCircle } from 'lucide-react';
import { CostBarChart, BocasScene } from '@/components/three/ThreeComponents';


const bocasPriceData = [
    { label: 'Island Land (ROP)', value: 85000, color: '#00C5CB' },
    { label: 'Condos', value: 165000, color: '#00a8ae' },
    { label: 'Beachfront Homes', value: 375000, color: '#D4A843' },
    { label: 'Overwater Bungalows', value: 600000, color: '#b8902e' },
];

export const metadata: Metadata = {
    title: 'Bocas del Toro Real Estate 2026: Property Prices, Guide, Investment',
    description: 'Bocas del Toro real estate. Island properties, prices, investment opportunities, lifestyle, buying guide.',
    keywords: 'Bocas del Toro real estate, property Bocas del Toro, investment Bocas, houses for sale Bocas',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/bocas-del-toro-real-estate',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/bocas-del-toro-real-estate',
            'es': 'https://panamarealestatesale.com/es/blog/bocas-del-toro-real-estate',
            'pt': 'https://panamarealestatesale.com/pt/blog/bocas-del-toro-real-estate',
            'de': 'https://panamarealestatesale.com/de/blog/bocas-del-toro-real-estate',
        },
    },
    openGraph: {
        title: 'Bocas del Toro Real Estate 2026: Property Prices, Guide, Investment',
        description: 'Bocas del Toro real estate. Island properties, prices, investment opportunities, lifestyle, buying guide.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/bocas-del-toro-real-estate',
        images: [{ url: 'https://images.unsplash.com/photo-1473093295203-cad00010cb78?w=1200&q=80', width: 1200, height: 630, alt: 'Bocas del Toro' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bocas del Toro Real Estate 2026: Property Prices, Guide, Investment',
        description: 'Bocas del Toro real estate. Island properties, prices, investment opportunities, lifestyle, buying guide.',
        images: ['https://images.unsplash.com/photo-1473093295203-cad00010cb78?w=1200&q=80'],
    },
};

const propertyTypes = [
    {
        type: 'Island Land (ROP)',
        priceRange: '$50 – $300/sqm',
        rentYield: 'Long-term appreciation',
        desc: 'Rights of Possession (ROP) land is Panama\'s agricultural tenure system. Most Bocas island property is ROP, not titled. Advantages: cheap entry, good for development. Risk: ROP is not true ownership — buyer has use rights but no deed. Requires understanding of ROP mechanics and title verification.',
        best: 'Developers, adventurous investors, experienced buyers',
    },
    {
        type: 'Beachfront Homes',
        priceRange: '$150K – $600K',
        rentYield: '10–13%',
        desc: 'Oceanfront single-family homes on Isla Colón, Isla Carenero, or Isla Bastimentos. Direct beach/water access, premium location. High Airbnb demand from dive tourists and eco-travelers. Most popular with investors targeting short-term rental income.',
        best: 'Airbnb investors, vacation homeowners',
    },
    {
        type: 'Overwater Bungalows',
        priceRange: '$200K – $1M+',
        rentYield: '12–15%',
        desc: 'Houses built directly over the water with dock access. Extremely rare and premium. Attract high-end eco-tourists and honeymooners. Nightly rates $150–$300+. Exceptional rental yield but requires specialized maintenance and infrastructure. Status symbol among Bocas properties.',
        best: 'Luxury investors, high-yield seekers',
    },
    {
        type: 'Condos & Town Properties',
        priceRange: '$80K – $250K',
        rentYield: '8–12%',
        desc: 'Condos in central Bocas town or smaller island communities. Lower entry price, easier management than large homes. Urban conveniences (restaurants, shops, services). Popular with investors building diversified portfolios.',
        best: 'Budget-conscious investors, part-time residents',
    },
];

const islands = [
    {
        name: 'Isla Colón (Bocas Town)',
        desc: 'The main island and commercial hub. Bocas town has restaurants, bars, dive shops, supermarkets, ATMs, and water taxi service. Most developed infrastructure. Expat community is largest here. Property is most expensive, but convenience is unmatched. Best for first-time island buyers or those wanting walkable services.',
        priceIndex: '$$$$',
        vibe: 'Bustling, touristy, expat-friendly',
    },
    {
        name: 'Isla Carenero',
        desc: 'Just offshore from Bocas town, accessible by water taxi (5 min). Quieter than central Bocas but not remote. Beachfront homes and small communities. Growing expat population. Good balance of isolation and accessibility. Excellent for retirees who want peace but won\'t miss meals in town.',
        priceIndex: '$$$',
        vibe: 'Quiet village, water-based lifestyle',
    },
    {
        name: 'Isla Bastimentos',
        desc: 'The second-largest island, mostly undeveloped. Home to Red Frog Beach (famous tourist spot), Wizard Beach (popular with surfers), and jungle interior. More adventurous vibe. Property is cheaper but requires full off-grid mentality (boat transportation, generator power, water tanks). Eco-lodges and adventure tourism drive demand.',
        priceIndex: '$$',
        vibe: 'Adventure, eco-tourism, isolated',
    },
    {
        name: 'Isla Solarte & Others',
        desc: 'Even more remote islands with minimal services. Purchase here only if seeking true isolation and willing to live off-grid or invest heavily in infrastructure. Rarely available for sale. Prices are cheapest but logistical challenges are severe.',
        priceIndex: '$',
        vibe: 'Ultra-remote, pioneering spirit',
    },
];

const whyInvest = [
    { title: 'Caribbean Ecosystem with UNESCO Protection', body: 'Bocas is part of the La Amistad Biosphere Reserve. Development is restricted — no new resorts or mega-projects allowed. This scarcity increases property value. Limited new supply = rising prices over time.' },
    { title: 'Exceptional Airbnb Yields', body: 'Nightly rates: $80–$150 for standard homes, $150–$300+ for overwater bungalows. Occupancy 65–80% year-round, peaking 90%+ in season. Highest rental yields in Panama. Dive tourists and eco-travelers book constantly.' },
    { title: 'Gateway to Costa Rica', body: 'Bocas is a water-taxi hop from Almirante, Panama\'s northernmost port. Easy overland connection to Costa Rica\'s Caribbean coast. Investors see Bocas as more affordable than Costa Rican Caribbean (which is expensive and fully developed).' },
    { title: 'Boom in Eco-Tourism & Diving', body: 'Bocas Del Toro is the Caribbean diving capital of Central America. PADI certifications, daily dive boats, marine conservation tourism. Eco-lodges and adventure tours are booming. More income-generating uses for property.' },
    { title: 'Lifestyle Appeal = Long-term Value', body: 'Bocas attracts a specific breed: adventurers, surfers, conservationists, digital nomads. Strong cultural identity and community. Properties held 10+ years typically appreciate steadily as demand grows.' },
    { title: 'Lower Entry Price Than Caribbean Properties', body: 'Bocas beachfront homes start at $150K. Comparable Caribbean properties (Belize, Costa Rica, Caribbean islands) start at $350K+. 40–50% cheaper with similar or better rental yield.' },
];

const propertyComparison = [
    { item: 'Beachfront home (3BR)', bocas: '$200K–$400K', coronado: '$350K–$800K', costRica: '$400K–$900K' },
    { item: 'Island land per sqm', bocas: '$50–$150', coronado: '$60–$200', costRica: '$200–$600' },
    { item: 'Monthly Airbnb revenue (2BR)', bocas: '$2,400–$4,000', coronado: '$1,200–$2,200', costrica: '$1,800–$3,500' },
    { item: 'Annual rental yield', bocas: '10–13%', coronado: '7–9%', costRica: '6–8%' },
    { item: 'Occupancy rate', bocas: '70%+', coronado: '60–70%', costRica: '55–65%' },
];

const faqItems = [
    {
        q: 'What is Rights of Possession (ROP) land? Should I buy it?',
        a: 'ROP is Panama\'s agricultural tenure system where users have rights to cultivate/build on land but no title deed. Common in Bocas because much land is protected forest. Advantages: cheap ($30–$80/sqm vs. $200+/sqm for titled land). Disadvantages: not true ownership, cannot mortgage easily, harder to sell, legal disputes can happen. Buy ROP only if experienced or willing to pay attorney heavily to verify. Most investment-grade Bocas property is titled.',
    },
    {
        q: 'Is Bocas infrastructure reliable for year-round living?',
        a: 'Isla Colón (Bocas town): yes. Good water system, reliable electricity, internet from Cable Onda (30–80 Mbps). Other islands: variable. Isla Carenero has basics. Isla Bastimentos requires generator + water tanks. Decide based on your island choice. Test internet and water before committing.',
    },
    {
        q: 'What is the hurricane risk?',
        a: 'Bocas is in the Caribbean hurricane corridor but outside the main belt. Cat 3+ hurricanes are rare. However, tropical storms and heavy rain occur seasonally (Aug–Oct). Buildings are hurricane-resistant. Insurance is available but expensive ($3K–$8K/year for $250K home). Factor into investment return calculations.',
    },
    {
        q: 'Can I get a mortgage in Bocas?',
        a: 'Difficult. Panamanian banks are reluctant to finance Bocas property due to insurance costs and ROP land prevalence. Most buyers pay cash. Some developers offer seller financing. International lenders sometimes available but rates are 7–10%. Budget accordingly.',
    },
    {
        q: 'How accessible is healthcare in Bocas?',
        a: 'Bocas has a basic public hospital and several private clinics. For serious conditions, you fly to Panama City (1 hour) or Costa Rica. Not ideal for retirees with complex health needs. Best for healthy, independent expats.',
    },
];

export default async function BocasDelToroRealEstateGuidePage({ params }: { params: Promise<{ lang: string }> }) {
    await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80"
                        alt="Bocas del Toro Caribbean Islands"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        REAL ESTATE GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Bocas del Toro Real Estate:<br />Caribbean Island Property Guide
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        The Caribbean archipelago unlike anywhere else in Panama — beachfront homes, island land, overwater bungalows, and the highest rental yields in Central America.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Bocas del Toro is Panama&apos;s Caribbean gateway — 9 main islands, pristine coral reefs, tropical jungle, and the Caribbean lifestyle that doesn&apos;t exist anywhere else in Panama.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        Located off Panama&apos;s northwestern Caribbean coast (accessible by plane from Panama City or overland via Almirante), Bocas is fundamentally different from Coronado (beach resort) or Boquete (mountain town). This is an island archipelago with a strong eco-tourism culture, diverse expat population, and an adventure-friendly vibe. Property prices range from $80K for modest condos to $1M+ for luxury overwater bungalows. The islands offer the highest rental yields in Panama — 10–13% annually — attracting investors worldwide. However, buying in Bocas requires navigating Rights of Possession land, island logistics, and specific market knowledge.
                    </p>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        {[
                            { stat: '10–13%', label: 'Airbnb rental yield (highest in Panama)' },
                            { stat: '9', label: 'Main islands in archipelago' },
                            { stat: '$150K+', label: 'Beachfront home entry price' },
                            { stat: '1 hr', label: 'Flight to Panama City' },
                        ].map((s, i) => (
                            <div key={i} className="bg-brand-50 rounded-2xl p-5 text-center border border-brand-100">
                                <div className="text-2xl font-black text-brand-GOLD mb-1">{s.stat}</div>
                                <div className="text-slate-500 text-xs leading-relaxed">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3D Bocas Scene */}
                <BocasScene />

                {/* Property Price Chart */}
                <CostBarChart
                    data={bocasPriceData}
                    title="Bocas del Toro — Average Property Prices by Type"
                    subtitle="2026 market data · Caribbean Panama"
                    height="260px"
                />

                {/* What Makes Bocas Special */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Waves className="inline text-brand-GOLD mr-2" size={28} />
                        What Makes Bocas Different From Panama City & Coronado
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { title: 'Island Lifestyle', desc: 'No roads. Transportation is by water taxi or private boat. Authentic Caribbean village feel. Slower pace, adventure mindset required.' },
                            { title: 'UNESCO Biosphere Reserve', desc: 'Development is restricted — no mega-resorts, no urban sprawl. This protection increases scarcity value and property appreciation long-term.' },
                            { title: 'Eco-Tourism Boom', body: 'Diving, snorkeling, bird-watching, surfing. Bocas is the diving capital of Central America. Constant tourist demand drives 10–13% Airbnb yields.' },
                        ].map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <div className="text-white font-bold mb-2">{item.title}</div>
                                <div className="text-slate-500 text-xs leading-relaxed">{item.desc || item.body}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Property Types */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Home className="inline text-brand-GOLD mr-2" size={28} />
                        Property Types & Prices in Bocas 2026
                    </h2>
                    <div className="space-y-5">
                        {propertyTypes.map((p, i) => (
                            <div key={i} className="card-light rounded-2xl p-7 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                                    <h3 className="text-xl font-heading font-black text-brand-950">{p.type}</h3>
                                    <div className="flex gap-4 text-right">
                                        <div>
                                            <div className="text-white font-black text-sm">{p.priceRange}</div>
                                            <div className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Price</div>
                                        </div>
                                        <div>
                                            <div className="text-brand-GOLD font-black text-sm">{p.rentYield}</div>
                                            <div className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Yield</div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed mb-3">{p.desc}</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-brand-GOLD font-bold text-xs uppercase tracking-widest">Best for:</span>
                                    <span className="text-slate-500 text-xs">{p.best}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Islands to Buy In */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <MapPin className="inline text-brand-GOLD mr-2" size={28} />
                        Which Islands to Buy In
                    </h2>
                    <div className="space-y-5">
                        {islands.map((island, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="text-white font-heading font-bold text-lg">{island.name}</h3>
                                        <p className="text-brand-GOLD text-xs font-semibold mt-1 italic">{island.vibe}</p>
                                    </div>
                                    <span className="text-brand-GOLD font-black text-sm">{island.priceIndex}</span>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">{island.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ROP Land Deep Dive */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <AlertCircle className="inline text-brand-GOLD mr-2" size={28} />
                        Rights of Possession (ROP) Land Explained
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed mb-6">
                        Most Bocas island land is ROP, not titled. Understanding this is critical before buying:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <div className="text-brand-GOLD font-black uppercase tracking-widest text-xs mb-4">What ROP Is</div>
                            <ul className="space-y-2">
                                {[
                                    'Use rights for agricultural/residential land',
                                    'Buyer has possession, not title deed',
                                    'Renewable, transferable, and inheritable',
                                    'Costs 30–80% less than titled land',
                                    'Can be formalized with government',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-500 text-xs">
                                        <CheckCircle size={12} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <div className="text-slate-500 font-black uppercase tracking-widest text-xs mb-4">Risks to Know</div>
                            <ul className="space-y-2">
                                {[
                                    'Government could theoretically reclaim land',
                                    'Cannot mortgage easily (banks avoid it)',
                                    'Resale can be slower and harder',
                                    'Title disputes are possible without verification',
                                    'Insurance complications in some cases',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-500 text-xs">
                                        <span className="text-slate-600 mt-0.5 flex-shrink-0 font-bold">—</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 card-light rounded-2xl p-6 border border-brand-100">
                        <div className="text-white font-bold mb-3">Best Practice:</div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            If buying ROP land, hire a local attorney to verify your rights are properly registered with the government and not in dispute. Investment-grade buyers focus on titled property or formalized ROP with clean documentation. Casual buyers (looking for a cheap cabin) can accept ROP risk. Choose based on your experience level and risk tolerance.
                        </p>
                    </div>
                </section>

                {/* Investment Potential */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <TrendingUp className="inline text-brand-GOLD mr-2" size={28} />
                        Investment Potential: Why Bocas Outperforms
                    </h2>
                    <div className="space-y-6">
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <h3 className="text-white font-bold text-lg mb-4">Rental Yield Comparison</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center pb-3 border-b border-brand-100">
                                    <span className="text-slate-500 text-sm">Bocas (Airbnb)</span>
                                    <span className="text-brand-GOLD font-black">10–13%</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-brand-100">
                                    <span className="text-slate-500 text-sm">Coronado (Airbnb)</span>
                                    <span className="text-white font-black">7–9%</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-brand-100">
                                    <span className="text-slate-500 text-sm">Boquete (Airbnb)</span>
                                    <span className="text-white font-black">8–12%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-500 text-sm">Costa Rica Caribbean</span>
                                    <span className="text-white font-black">6–8%</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            A $250K beachfront home in Bocas, rented at $120/night with 70% occupancy, generates ~$30,600/year = 12.2% gross yield. After 25% property management, taxes, and repairs: ~8–9% net. This beats Coronado and rivals or exceeds Costa Rican properties — with lower entry price.
                        </p>
                    </div>
                </section>

                {/* Buying Process */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        The Buying Process in Bocas (More Complex)
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed mb-6">
                        Bocas buying is more complex than Panama City or Coronado due to ROP land prevalence and island logistics:
                    </p>
                    <div className="space-y-3">
                        {[
                            { n: '1', t: 'Work with local agent familiar with ROP', b: 'Find an agent who specializes in Bocas island property and understands ROP mechanics. Avoid agents from Panama City — they don\'t understand Caribbean land systems.' },
                            { n: '2', t: 'If ROP land: verify government registration', b: 'Your attorney must search government records to confirm ROP is properly registered and not disputed. This takes longer than titled land verification (2–4 weeks).' },
                            { n: '3', t: 'If titled land: standard title estudio', b: 'For the minority of titled Bocas property, follow normal Panama procedures: title search at Public Registry, attorney review, lien checks.' },
                            { n: '4', t: 'Hire experienced attorney — non-negotiable', b: 'Bocas property law is different. You need an attorney experienced in island property AND ROP land if applicable. Budget $2,000–$3,500 (higher than mainland).' },
                            { n: '5', t: 'Sign Promesa de Compraventa', b: 'Standard sales contract. Price, closing date (45–90 days typical), deposit (10–20%). Get this in writing even for ROP land.' },
                            { n: '6', t: 'Close with Notary Public', b: 'Transfer executed before notary. For ROP land, formal transfer of possession rights occurs. Entire process takes 60–120 days (longer than mainland due to ROP complexity).' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-start gap-4 card-light rounded-xl p-5 border border-brand-100">
                                <div className="w-8 h-8 rounded-full bg-brand-GOLD/10 border border-brand-GOLD/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-GOLD font-black text-xs">{s.n}</span>
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm mb-1">{s.t}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{s.b}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bocas vs Others */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Bocas vs Coronado vs Costa Rica
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4"></th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Bocas</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Coronado</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Costa Rica Caribbean</th>
                                </tr>
                            </thead>
                            <tbody>
                                {propertyComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.item}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3 font-bold">{row.bocas}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.coronado}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.costRica}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Why Expats */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Waves className="inline text-brand-GOLD mr-2" size={28} />
                        Why Expats Are Investing in Bocas
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {whyInvest.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 card-light rounded-xl p-5 border border-brand-100">
                                <CheckCircle size={16} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                <div>
                                    <div className="text-white font-bold text-sm mb-1">{item.title}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{item.body}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Perfect For / Not For */}
                <section className="reveal-on-scroll grid md:grid-cols-2 gap-6">
                    <div className="card-light rounded-2xl p-6 border border-brand-100">
                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-xs mb-4">Bocas is Perfect For</div>
                        <ul className="space-y-2">
                            {[
                                'High-yield Airbnb investors (10–13% returns)',
                                'Adventure-minded buyers seeking island lifestyle',
                                'Eco-tourism entrepreneurs & dive shop owners',
                                'Investors with capital to hold 5–10 years',
                                'Digital nomads seeking tropical work base',
                                'Experienced real estate investors (ROP knowledge)',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-500 text-xs">
                                    <CheckCircle size={12} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="card-light rounded-2xl p-6 border border-brand-100">
                        <div className="text-slate-500 font-black uppercase tracking-widest text-xs mb-4">Consider Elsewhere If You</div>
                        <ul className="space-y-2">
                            {[
                                'Want reliable mainland infrastructure',
                                'Need easy medical care access',
                                'Prefer to avoid ROP land complexity',
                                'Want straight property management (no boat)',
                                'Are risk-averse with new real estate',
                                'Prefer cooler climate year-round',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-500 text-xs">
                                    <span className="text-slate-600 mt-0.5 flex-shrink-0 font-bold">—</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* FAQ */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqItems.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <details className="group cursor-pointer">
                                    <summary className="flex items-start justify-between font-bold text-white hover:text-brand-GOLD transition-colors">
                                        <span className="text-sm">{item.q}</span>
                                        <span className="text-brand-GOLD group-open:rotate-180 transition-transform">+</span>
                                    </summary>
                                    <p className="text-slate-500 text-xs leading-relaxed mt-4">{item.a}</p>
                                </details>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Ready to Explore Bocas Properties?
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Our team has deep experience with Bocas island property, ROP land, and Airbnb management. We'll guide you through the process and help identify investment-grade properties. Book a consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Book Bocas Consultation <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/en/propiedades"
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            View All Properties
                        </Link>
                    </div>
                </section>

                {/* Internal links */}
                <section className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
                    {[
                        { label: 'High-Yield Real Estate Investment', href: '/en/blog/panama-real-estate-investment-yields' },
                        { label: 'How to Buy Property in Panama', href: '/en/blog/how-to-buy-property-in-panama-2026-guide' },
                        { label: 'Coronado Real Estate Guide', href: '/en/blog/coronado-real-estate-guide' },
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
