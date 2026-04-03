import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, DollarSign, TrendingUp, Home } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Coronado Real Estate Guide 2026 | Panama Beach Property & Investment',
    description:
        'The definitive guide to Coronado real estate in Panama. Property prices, rental yields, neighborhoods, and why Coronado is Panama\'s premier expat beach community for investors and retirees.',
    keywords:
        'coronado real estate panama, coronado beach property, buy property coronado panama, coronado panama investment, coronado expat community, panama beach real estate 2026',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/coronado-real-estate-guide',
    },
    openGraph: {
        title: 'Coronado Real Estate Guide 2026 | Panama Beach Property & Investment',
        description:
            'Everything you need to know about buying or investing in Coronado, Panama — prices, yields, neighborhoods, and the expat lifestyle.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/coronado-real-estate-guide',
    },
};

const propertyTypes = [
    {
        type: 'Oceanfront Condos',
        priceRange: '$180K – $450K',
        rentYield: '7–9%',
        desc: 'High-rise and mid-rise condos directly on the Pacific beachfront. Most include pools, gym, 24-hour security. Top short-term rental performers — Airbnb occupancy of 75–85% during peak season (Dec–Apr).',
        best: 'Short-term rental investors & vacation homeowners',
    },
    {
        type: 'Gated Community Homes',
        priceRange: '$250K – $900K',
        rentYield: '5–7%',
        desc: 'Single-family homes in gated communities like Coronado Golf Club Estates, Hacienda del Mar, and Playa Coronado. Private pools, garden space, and the full suburban-luxury lifestyle. Most popular with families and long-term retirees.',
        best: 'Full-time residents & long-term retirees',
    },
    {
        type: 'Townhouses & Villas',
        priceRange: '$200K – $500K',
        rentYield: '6–8%',
        desc: 'Two-story townhomes in gated complexes — the middle ground between condo convenience and house space. Easy to maintain for part-time residents. Common in communities like Playa Blanca and Las Olas.',
        best: 'Part-time residents & buy-to-let investors',
    },
    {
        type: 'Lots & Land',
        priceRange: '$60 – $200/sqm',
        rentYield: 'Capital gain play',
        desc: 'Undeveloped lots in Coronado\'s outskirts and neighboring communities like Chame and Punta Chame. Still priced well below regional averages despite consistent appreciation of 8–12% annually over the past decade.',
        best: 'Long-term value investors & custom home builders',
    },
];

const neighborhoods = [
    {
        name: 'Coronado Golf Club',
        desc: 'The original and most prestigious address in Coronado. Homes overlooking the golf course, close to the beach club, surrounded by the longest-established expat community. Premium pricing but maximum lifestyle.',
        priceIndex: '$$$$',
    },
    {
        name: 'Playa Coronado (Beachfront)',
        desc: 'The strip along the beach itself. Condos and low-rise buildings with direct beach access. Best for short-term rental investors. Walking distance to restaurants, supermarkets, and the main commercial zone.',
        priceIndex: '$$$',
    },
    {
        name: 'Hacienda del Mar',
        desc: 'A gated community east of the main Coronado hub. More spacious lots, quieter setting, still within 10 minutes of the beach. Popular with younger families who want space over density.',
        priceIndex: '$$$',
    },
    {
        name: 'Punta Barco / Gorgona (neighboring)',
        desc: 'Just 15–20 minutes from central Coronado. Still within the Pacific Riviera corridor. Prices are 20–30% lower than Coronado proper, with similar access to infrastructure. The smart play for value-oriented buyers.',
        priceIndex: '$$',
    },
];

const whyInvest = [
    { title: 'Proven Expat Infrastructure', body: '5,000+ North American expats already living in Coronado. English-speaking doctors, lawyers, property managers, and neighbors. You are never navigating this alone.' },
    { title: 'Private Hospital On-Site', body: 'Hospital Chame is located directly in Coronado — an internationally accredited private hospital used extensively by the expat community. Panama City\'s Johns Hopkins affiliate is 1.5 hours away.' },
    { title: 'International Schools Nearby', body: 'Families in Coronado have access to bilingual private schools in the Panama City metro within commuting distance, and several smaller bilingual schools locally.' },
    { title: 'Consistent Appreciation', body: 'Coronado property has appreciated at 6–10% annually over the past decade — slower and steadier than Panama City, but more predictable. Lower volatility, consistent demand.' },
    { title: 'Golf + Beach + Nature', body: 'Coronado offers what almost no other location in the Americas can: world-class golf, Pacific beach access, and Altos de Campana National Park all within 20 minutes of each other.' },
    { title: '90 Minutes from the Capital', body: 'Close enough to Panama City for day trips to the hospital, airport, or business meetings — far enough to feel genuinely disconnected from urban pace.' },
];

const costComparison = [
    { item: 'Oceanfront condo (1BR)', coronado: '$180K–$280K', puntaPacifica: '$350K–$600K', bocas: '$150K–$300K' },
    { item: 'Monthly HOA fees', coronado: '$200–$450', puntaPacifica: '$350–$700', bocas: '$150–$350' },
    { item: 'Monthly rent (2BR furnished)', coronado: '$1,200–$2,200', puntaPacifica: '$2,000–$3,500', bocas: '$900–$1,800' },
    { item: 'Short-term rental yield', coronado: '7–9%', puntaPacifica: '5–7%', bocas: '10–13%' },
    { item: 'Monthly living (couple)', coronado: '$2,000–$3,000', puntaPacifica: '$3,000–$5,000', bocas: '$1,800–$2,800' },
];

export default async function CoronadoRealEstateGuidePage({ params }: { params: Promise<{ lang: string }> }) {
    await params;

    return (
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-900 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80"
                        alt="Coronado Beach Panama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        REAL ESTATE GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        Coronado Real Estate:<br />The Complete Buyer&apos;s Guide
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Panama&apos;s premier Pacific beach community — prices, yields, neighborhoods, and everything you need to know before you invest.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Coronado is the undisputed capital of expat beach living in Panama. Located 80 km west of Panama City on the Pacific coast, it combines the infrastructure of a modern resort town with an established international community that has been growing for over 30 years.
                    </p>
                    <p className="text-slate-400 mt-6 text-lg leading-relaxed">
                        This is not a speculative emerging market. Coronado is Panama&apos;s most proven expat destination — fully built out, deeply liquid, and consistently appreciating. The question is not whether it is a good investment. The question is whether it is the right investment for your specific goals.
                    </p>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        {[
                            { stat: '$180K+', label: 'Entry price for oceanfront condo' },
                            { stat: '7–9%', label: 'Gross rental yield (short-term)' },
                            { stat: '5,000+', label: 'Expats already living here' },
                            { stat: '90 min', label: 'Drive to Panama City airport' },
                        ].map((s, i) => (
                            <div key={i} className="bg-brand-900 rounded-2xl p-5 text-center border border-white/5">
                                <div className="text-2xl font-black text-brand-GOLD mb-1">{s.stat}</div>
                                <div className="text-slate-400 text-xs leading-relaxed">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Property Types */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Home className="inline text-brand-GOLD mr-2" size={28} />
                        What Can You Buy in Coronado?
                    </h2>
                    <div className="space-y-5">
                        {propertyTypes.map((p, i) => (
                            <div key={i} className="glass-card rounded-2xl p-7 border border-white/5">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                                    <h3 className="text-xl font-heading font-black text-white">{p.type}</h3>
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
                                <p className="text-slate-400 text-sm leading-relaxed mb-3">{p.desc}</p>
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
                        Coronado Neighborhoods Explained
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {neighborhoods.map((n, i) => (
                            <div key={i} className="glass-card rounded-2xl p-6 border border-white/5">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-white font-heading font-bold text-lg">{n.name}</h3>
                                    <span className="text-brand-GOLD font-black text-sm">{n.priceIndex}</span>
                                </div>
                                <p className="text-slate-400 text-xs leading-relaxed">{n.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Invest */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <TrendingUp className="inline text-brand-GOLD mr-2" size={28} />
                        Why Investors Choose Coronado
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {whyInvest.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 glass-card rounded-xl p-5 border border-white/5">
                                <CheckCircle size={16} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                <div>
                                    <div className="text-white font-bold text-sm mb-1">{item.title}</div>
                                    <div className="text-slate-400 text-xs leading-relaxed">{item.body}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Price Comparison */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Coronado vs Other Panama Locations
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4"></th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Coronado</th>
                                    <th className="text-left text-slate-400 text-[10px] uppercase tracking-widest py-3 px-3">Punta Pacifica</th>
                                    <th className="text-left text-slate-400 text-[10px] uppercase tracking-widest py-3 px-3">Bocas del Toro</th>
                                </tr>
                            </thead>
                            <tbody>
                                {costComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="text-slate-400 text-xs py-3 pr-4 font-medium">{row.item}</td>
                                        <td className="text-white text-xs py-3 px-3 font-bold">{row.coronado}</td>
                                        <td className="text-slate-400 text-xs py-3 px-3">{row.puntaPacifica}</td>
                                        <td className="text-slate-400 text-xs py-3 px-3">{row.bocas}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Who it is for / not for */}
                <section className="reveal-on-scroll grid md:grid-cols-2 gap-6">
                    <div className="glass-card rounded-2xl p-6 border border-white/5">
                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-xs mb-4">Coronado is Perfect For</div>
                        <ul className="space-y-2">
                            {[
                                'American retirees wanting a full-service expat community',
                                'Part-time residents wanting a vacation rental when away',
                                'Investors targeting 7–9% rental yield on Pacific beach property',
                                'Families wanting a weekend escape from Panama City (90 min)',
                                'Golfers — Coronado Golf Club is one of the top courses in Central America',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                    <CheckCircle size={12} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="glass-card rounded-2xl p-6 border border-white/5">
                        <div className="text-slate-500 font-black uppercase tracking-widest text-xs mb-4">Consider Elsewhere If You Want</div>
                        <ul className="space-y-2">
                            {[
                                'Maximum rental yield — Bocas del Toro (10–13%) beats Coronado on yield',
                                'Cool mountain climate — Boquete averages 10°F cooler year-round',
                                'Urban amenities without driving — Panama City wins that one',
                                'Entry-level prices — Pedasi or Gorgona offer similar lifestyle at lower cost',
                                'Pure adventure / off-grid experience — Santa Catalina or Bocas',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-400 text-xs">
                                    <span className="text-slate-600 mt-0.5 flex-shrink-0 font-bold">—</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Buying Process */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        How to Buy Property in Coronado
                    </h2>
                    <div className="space-y-3">
                        {[
                            { n: '1', t: 'Engage a local real estate agent', b: 'Coronado has many listings that never appear on international portals. A local agent with an active MLS network will surface the best opportunities before they go to market.' },
                            { n: '2', t: 'Hire a Panama real estate attorney', b: 'Property law in Panama is straightforward — but due diligence on title, RUC registration, and HOA status requires a local lawyer. Budget $1,500–$2,500 for legal fees.' },
                            { n: '3', t: 'Conduct title search (estudio de título)', b: 'Panama maintains a Public Registry of all titled property. Your attorney verifies clean title, no liens, and correct boundaries. This step is non-negotiable.' },
                            { n: '4', t: 'Sign Promise of Sale (Promesa de Compraventa)', b: 'A legally binding contract that locks the price and sets a closing timeline. Typically requires 10–20% deposit.' },
                            { n: '5', t: 'Arrange financing or wire transfer', b: 'Most foreign buyers pay cash. Panamanian mortgages for non-residents are available but limited. Some developers offer direct financing on new builds.' },
                            { n: '6', t: 'Close at a Notary Public', b: 'Panama property transfers are executed through a Notary Public. Once registered in the Public Registry, the property is yours. The entire process takes 30–90 days.' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-start gap-4 glass-card rounded-xl p-5 border border-white/5">
                                <div className="w-8 h-8 rounded-full bg-brand-GOLD/10 border border-brand-GOLD/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-GOLD font-black text-xs">{s.n}</span>
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm mb-1">{s.t}</div>
                                    <div className="text-slate-400 text-xs leading-relaxed">{s.b}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-brand-950 p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        See Coronado Properties Now
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Our advisors are based in Panama and have access to both listed and off-market Coronado properties. Book a call and we will match you to properties that fit your budget, goals, and lifestyle.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Book Free Property Consultation <ArrowRight size={16} />
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
                        { label: 'Best Beaches in Panama for Expats', href: '/en/blog/best-beaches-panama-expats' },
                        { label: 'How to Buy Property in Panama', href: '/en/blog/how-to-buy-property-in-panama-2026-guide' },
                        { label: 'Retire in Panama Guide', href: '/en/blog/retire-in-panama' },
                    ].map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="flex items-center justify-between glass-card p-4 rounded-xl border border-white/5 hover:border-brand-GOLD/30 transition-all group"
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
