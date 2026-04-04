import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, CheckCircle, MapPin, DollarSign, TrendingUp, Home, Cloud, Leaf } from 'lucide-react';

const BoqueteScene = dynamic(() => import('@/components/three/BoqueteScene').then(m => m.BoqueteScene), { ssr: false });
const CostBarChart = dynamic(() => import('@/components/three/CostBarChart').then(m => m.CostBarChart), { ssr: false });

const boquetePriceData = [
    { label: 'Condos', value: 235000, color: '#00C5CB' },
    { label: 'Mountain Homes', value: 525000, color: '#00a8ae' },
    { label: 'Fincas (land)', value: 120000, color: '#D4A843' },
    { label: 'Commercial', value: 400000, color: '#b8902e' },
];

export const metadata: Metadata = {
    title: 'Boquete Panama Real Estate 2026 | Prices, Neighborhoods & Buyer\'s Guide',
    description:
        'Complete guide to buying real estate in Boquete, Panama in 2026. Explore property prices ($120K–$800K), best neighborhoods, rental yields, and why Boquete is the #1 expat mountain town.',
    keywords:
        'boquete panama real estate, boquete property prices, buy property boquete, boquete expat community, boquete panama homes for sale, boquete real estate investment 2026',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/boquete-panama-real-estate',
    },
    openGraph: {
        title: 'Boquete Panama Real Estate 2026 | Prices, Neighborhoods & Buyer\'s Guide',
        description:
            'The definitive guide to Boquete real estate. Property prices, best neighborhoods, rental yields, and expat lifestyle in Panama\'s premier mountain community.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/boquete-panama-real-estate',
    },
};

const propertyTypes = [
    {
        type: 'Mountain Homes',
        priceRange: '$250K – $800K',
        rentYield: '5–7%',
        desc: 'Single-family homes on hillsides with views of the Baru volcano and valley. Most feature large gardens, coffee trees, and outdoor space. Highly prized by retirees and remote workers seeking space. Long-term rental demand is strong among eco-tourists and digital nomads.',
        best: 'Retirees seeking space & views, remote workers',
    },
    {
        type: 'Condominiums',
        priceRange: '$120K – $350K',
        rentYield: '6–8%',
        desc: 'Mid-rise and low-rise condos in gated communities in central Boquete. Lower maintenance, shared amenities (pools, gyms, common areas). Perfect for part-time residents. Excellent Airbnb occupancy during North American winter months.',
        best: 'Part-time residents & Airbnb investors',
    },
    {
        type: 'Fincas & Land',
        priceRange: '$60 – $180/sqm',
        rentYield: 'Long-term appreciation',
        desc: 'Undeveloped land and working coffee fincas in the Boquete countryside. Some include infrastructure and existing coffee cultivation. Strong appreciation as Boquete develops. Ideal for agricultural investors or custom home builders.',
        best: 'Developers, coffee farmers, land investors',
    },
    {
        type: 'Commercial Properties',
        priceRange: '$200K – $600K',
        rentYield: '6–10%',
        desc: 'Restaurants, hotels, tour offices, and coffee shops in central Boquete. The town attracts 100,000+ tourists annually. Strong seasonal occupancy and consistent foot traffic from expat residents.',
        best: 'Business entrepreneurs & passive investors',
    },
];

const neighborhoods = [
    {
        name: 'Jaramillo',
        desc: 'The epicenter of Boquete expat life. Central location with restaurants, shops, and services within walking distance. Most developed neighborhood with infrastructure. Premium pricing but unmatched convenience. Home to many established expat businesses.',
        priceIndex: '$$$$',
    },
    {
        name: 'Bajo Boquete',
        desc: 'Lower elevation, slightly warmer, and more tropical feel. Quieter than Jaramillo but still accessible. Good for families who want proximity to town but with more greenery and space. Growing expat population.',
        priceIndex: '$$$',
    },
    {
        name: 'Alto Boquete',
        desc: 'Higher elevation (4,500+ feet), cooler climate, more secluded. Cloudier and rainier — ideal for those seeking authentic mountain experience. Fewer tourists, closer to nature, and significantly less developed. Prices are 20–30% lower than Jaramillo.',
        priceIndex: '$$',
    },
    {
        name: 'Volcancito',
        desc: 'East of central Boquete, with sweeping volcano views. More rural, requiring a car for daily activities. Popular with expats seeking peace and isolation. Beautiful property sites with large acreage available. 15 minutes from town services.',
        priceIndex: '$$',
    },
    {
        name: 'Palmira',
        desc: 'South of Boquete toward the coffee plantations. Ultra-rural, agricultural character. Ideal for investors interested in coffee fincas or agritourism. Significantly cheaper land. Requires commitment to rural living.',
        priceIndex: '$',
    },
];

const whyInvest = [
    { title: 'Spring Climate Year-Round', body: 'Boquete\'s elevation (1,200–1,600m) creates an eternal spring with temperatures 65–75°F. No air conditioning needed. No hurricane risk. Simply perfect if you dislike tropical heat.' },
    { title: 'Largest Expat Community in Mountains', body: '14,000+ expat residents from North America, Europe, and South America. English widely spoken. Expat-run services, restaurants, churches, clubs, and social groups. You will never feel isolated.' },
    { title: 'World-Class Coffee Culture', body: 'Boquete coffee is internationally awarded. Many expats have invested in coffee farms or agritourism. Coffee tours and finca stays are a major tourism draw, creating rental income opportunity.' },
    { title: 'Lower Entry Prices Than Coronado', body: 'Mountain properties start at $120K for condos vs. $180K+ for beach condos. Land is cheaper. Monthly living costs are 30–40% lower. Best value in Panama for long-term expat residence.' },
    { title: 'Strong Rental Demand', body: 'Airbnb occupancy 60–75% year-round, peaking 85%+ in winter. Eco-tourists, bird watchers, coffee lovers, and digital nomads drive consistent bookings. Managed properties average $1,200–$1,800/month.' },
    { title: 'Direct Democracy & Expat Involvement', body: 'Boquete has a strong municipal government with significant expat participation. Unlike Panama City, residents have real voice in community decisions. Development is managed for livability, not just profit.' },
];

const costComparison = [
    { item: 'Mountain home (3BR)', boquete: '$250K–$500K', coronado: '$350K–$800K', panamaCity: '$400K–$1.2M' },
    { item: 'Condo (1BR)', boquete: '$120K–$250K', coronado: '$180K–$450K', panamaCity: '$250K–$600K' },
    { item: 'Monthly rent (2BR furnished)', boquete: '$1,000–$1,800', coronado: '$1,200–$2,200', panamaCity: '$1,500–$3,000' },
    { item: 'Monthly living (couple)', boquete: '$1,500–$2,300', coronado: '$2,000–$3,000', panamaCity: '$2,500–$4,500' },
    { item: 'Average temp (°F)', boquete: '65–75', coronado: '75–88', panamaCity: '78–88' },
];

const faqItems = [
    {
        q: 'Is Boquete safe for expats?',
        a: 'Yes. Boquete is one of the safest towns in Panama with a strong, organized expat community. Property crime is minimal. Like any town, use common sense (don\'t leave valuables unattended, avoid walking alone late at night). Hospital Boquete is accredited and well-equipped. Most expats feel safer here than in Panama City.',
    },
    {
        q: 'Can foreigners buy property freely in Boquete?',
        a: 'Yes. Foreigners have identical property rights to Panamanian citizens. No restrictions on purchase. Titled land is clean and transferable. Always hire an attorney to verify title, survey, and registration. Most closings occur within 60–90 days.',
    },
    {
        q: 'What is the best altitude for living in Boquete?',
        a: 'Jaramillo and Bajo Boquete (1,200–1,400m) offer the best balance of weather, accessibility, and infrastructure. Alto Boquete (1,600m+) is cooler but cloudier and rainier. Volcancito offers isolation with beautiful views. Personal preference determines the best choice.',
    },
    {
        q: 'What internet speeds can I expect?',
        a: 'Boquete has reliable broadband from providers like Cable Onda (25–100 Mbps) and cellular 4G LTE. Not as fast as Panama City, but adequate for video calls, streaming, and remote work. Many accommodations have fiber or dedicated connections. Test speeds before committing long-term.',
    },
    {
        q: 'Is Boquete good for retirement on a fixed income?',
        a: 'Excellent. The Pensionado visa (minimum $1,000/month income) is easy to qualify for. Monthly living costs average $1,500–$2,000 for comfortable living. Healthcare is affordable and quality. Many retirees live well on $2,000–$2,500/month including housing.',
    },
];

export default async function BoqueteRealEstateGuidePage({ params }: { params: Promise<{ lang: string }> }) {
    await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
                        alt="Boquete Mountain Landscape"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        REAL ESTATE GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Boquete Real Estate:<br />The Complete Buyer&apos;s Guide
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Panama&apos;s premier mountain community — climate, prices, neighborhoods, and everything you need to know before buying.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Boquete is Panama&apos;s most developed mountain town and the #1 choice for expats seeking a cooler climate, lower costs, and a genuine community lifestyle rather than a resort experience.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        Located 3.5 hours northwest of Panama City at 1,200–1,600 meters elevation, Boquete has attracted 14,000+ expat residents from across North America, Europe, and beyond. The town offers something rare in Latin America: a thriving English-speaking, organized expat community with infrastructure that rivals North American small towns — alongside a rich coffee culture, nearby cloud forests, and genuine mountain hospitality. Property prices range from $120K for modest condos to $800K+ for luxury mountain estates. Unlike Coronado (pure beach/resort) or Panama City (urban), Boquete is about lifestyle and community.
                    </p>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        {[
                            { stat: '65–75°F', label: 'Spring climate year-round' },
                            { stat: '14,000+', label: 'Expats living in Boquete' },
                            { stat: '$120K+', label: 'Entry price for condo' },
                            { stat: '2 hrs', label: 'Drive from Panama City' },
                        ].map((s, i) => (
                            <div key={i} className="bg-brand-50 rounded-2xl p-5 text-center border border-brand-100">
                                <div className="text-2xl font-black text-brand-GOLD mb-1">{s.stat}</div>
                                <div className="text-slate-500 text-xs leading-relaxed">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3D Boquete Scene */}
                <BoqueteScene />

                {/* Property Price Chart */}
                <CostBarChart
                    data={boquetePriceData}
                    title="Boquete Property Prices by Type (avg. USD)"
                    subtitle="2026 market data · Boquete, Chiriquí"
                    height="260px"
                />

                {/* Why Boquete */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Cloud className="inline text-brand-GOLD mr-2" size={28} />
                        Why Boquete is Exploding in 2026
                    </h2>
                    <div className="space-y-5">
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Boquete has experienced steady growth over 30+ years, but 2026 marks an inflection point. Here's why:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { title: 'Pensionado Boom', desc: 'Panama\'s pensionado program ($1,000/month minimum) is attracting retirees worldwide. Boquete\'s living costs + spring climate make it the #1 destination.' },
                                { title: 'Digital Nomad Hotspot', desc: 'Remote workers are fleeing high-tax countries and finding Boquete\'s cool weather, internet, and coffee culture perfect for year-round base. No digital nomad visa needed.' },
                                { title: 'Coffee Tourism Surge', desc: 'Global interest in coffee origin experiences is driving Airbnb bookings and agritourism. Finca stays and coffee tours occupy 70%+ of Boquete\'s short-term rental inventory.' },
                                { title: 'Climate Refuge', desc: 'As global temps rise, temperate-climate towns are becoming premium destinations. Boquete\'s 65–75°F feels like southern California — increasingly rare in 2026.' },
                            ].map((item, i) => (
                                <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                    <div className="text-white font-bold mb-2">{item.title}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Property Types */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Home className="inline text-brand-GOLD mr-2" size={28} />
                        Property Prices in Boquete 2026
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

                {/* Neighborhoods */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <MapPin className="inline text-brand-GOLD mr-2" size={28} />
                        Neighborhoods Explained
                    </h2>
                    <div className="space-y-5">
                        {neighborhoods.map((n, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-white font-heading font-bold text-lg">{n.name}</h3>
                                    <span className="text-brand-GOLD font-black text-sm">{n.priceIndex}</span>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">{n.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Rental Yields */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <TrendingUp className="inline text-brand-GOLD mr-2" size={28} />
                        Rental Yields & Investment Returns
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <div className="text-brand-GOLD font-black uppercase tracking-widest text-xs mb-4">Long-Term Rental (12+ months)</div>
                            <div className="space-y-3">
                                <div>
                                    <div className="text-white font-bold text-lg mb-1">5–7% Annual Yield</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">Renting to expat residents, remote workers, or families seeking 6–12 month leases. Reliable tenants, minimal turnover. Mountain homes and condos in central Boquete command $1,500–$2,000/month.</div>
                                </div>
                                <div className="flex items-center gap-2 pt-3 border-t border-brand-100">
                                    <CheckCircle size={12} className="text-brand-GOLD flex-shrink-0" />
                                    <span className="text-slate-500 text-xs">Most stable income, least management</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-light rounded-2xl p-6 border border-brand-100">
                            <div className="text-brand-GOLD font-black uppercase tracking-widest text-xs mb-4">Short-Term Rental (Airbnb)</div>
                            <div className="space-y-3">
                                <div>
                                    <div className="text-white font-bold text-lg mb-1">8–12% Annual Yield</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">Peak season (Nov–Apr): $100–$200/night. Off-season: $60–$100/night. Occupancy averages 60–75% year-round, spiking 85%+ in winter. Coffee tourists and eco-travelers drive bookings.</div>
                                </div>
                                <div className="flex items-center gap-2 pt-3 border-t border-brand-100">
                                    <CheckCircle size={12} className="text-brand-GOLD flex-shrink-0" />
                                    <span className="text-slate-500 text-xs">Higher income, requires active management</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 card-light rounded-2xl p-6 border border-brand-100">
                        <div className="text-white font-bold mb-3">Investment Example:</div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            A $250K mountain home rented at $1,500/month = $18,000/year = 7.2% yield. Airbnb-managed at $120/night with 65% occupancy = $28,470/year = 11.4% yield. After 25% property management, taxes, HOA, repairs: net 8–9%. Boquete consistently outperforms Panama City on yield while offering better quality of life.
                        </p>
                    </div>
                </section>

                {/* Buying Process */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Can Foreigners Buy? Legal Process Explained
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed mb-6">
                        Yes, foreigners have identical rights to Panamanian citizens. Boquete property is titled (unlike Rights of Possession land in Bocas). The process is straightforward:
                    </p>
                    <div className="space-y-3">
                        {[
                            { n: '1', t: 'Find property via local agent', b: 'Boquete has dozens of real estate agents. Most properties are listed on local MLS. International portals miss many opportunities. Work with a licensed agent who knows neighborhoods and price history.' },
                            { n: '2', t: 'Hire Panama real estate attorney', b: 'Non-negotiable. Attorney verifies title at Public Registry, checks for liens, surveys boundaries, confirms RUC registration. Cost: $1,500–$2,500. This protects you completely.' },
                            { n: '3', t: 'Conduct title estudio', b: 'Your attorney searches the Public Registry to confirm clean title and no competing claims. This takes 1–2 weeks. Zero risk of title disputes if done properly.' },
                            { n: '4', t: 'Sign Promesa de Compraventa', b: 'Binding sales contract. Locks the price, sets closing date (usually 30–60 days out), specifies deposit (typically 10%). Buyer can withdraw only by forfeiting deposit.' },
                            { n: '5', t: 'Wire deposit & arrange financing', b: 'Most foreign buyers pay cash. Panamanian mortgages for non-residents exist but are rare. Some developers offer seller financing. ACH or wire transfer to escrow account (held by attorney).' },
                            { n: '6', t: 'Close at Notary Public', b: 'Final deed executed and signed before a Panama Notary Public (attorney usually arranges). Title is transferred and registered at Public Registry. Funds released. Entire closing takes 1–2 hours. Property is legally yours.' },
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

                {/* Boquete vs Others */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Boquete vs Coronado vs Panama City
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4"></th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Boquete</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Coronado</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Panama City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {costComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.item}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3 font-bold">{row.boquete}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.coronado}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.panamaCity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Why Choose Boquete */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Leaf className="inline text-brand-GOLD mr-2" size={28} />
                        Why Expats Are Choosing Boquete in 2026
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
                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-xs mb-4">Boquete is Perfect For</div>
                        <ul className="space-y-2">
                            {[
                                'Retirees on fixed income seeking cool climate & low cost',
                                'Remote workers wanting year-round 65°F weather',
                                'Pensionado visa seekers with $1,000+/month income',
                                'Investors targeting 8–10% Airbnb rental yield',
                                'Coffee lovers & agritourism entrepreneurs',
                                'Expats seeking community over isolation',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-500 text-xs">
                                    <CheckCircle size={12} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="card-light rounded-2xl p-6 border border-brand-100">
                        <div className="text-slate-500 font-black uppercase tracking-widest text-xs mb-4">Consider Elsewhere If You Want</div>
                        <ul className="space-y-2">
                            {[
                                'Beach lifestyle — Coronado or Bocas offer ocean access',
                                'Urban amenities & nightlife — Panama City is the answer',
                                'Constant sunshine — Boquete is cloudier, especially Apr–May',
                                'Zero rain — annual rainfall is 3,000mm (monsoon)',
                                'Guaranteed fast internet — some neighborhoods have spotty service',
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
                        Ready to Explore Boquete?
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Our advisors have boots on the ground in Boquete. We know every neighborhood, current market prices, and can connect you with vetted attorneys, agents, and property managers. Schedule a free consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Book Boquete Consultation <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/en/propiedades"
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            View Boquete Properties
                        </Link>
                    </div>
                </section>

                {/* Internal links */}
                <section className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Panama Pensionado Visa Guide', href: '/en/blog/panama-pensionado-visa' },
                        { label: 'How to Buy Property in Panama', href: '/en/blog/how-to-buy-property-in-panama-2026-guide' },
                        { label: 'Panama Retirement Communities', href: '/en/blog/panama-retirement-communities' },
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
