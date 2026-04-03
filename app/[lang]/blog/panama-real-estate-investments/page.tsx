import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, MapPin, Palmtree, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Investing in Panama: Expat Lifestyle, Beachfront Properties & Retirement Guide 2026',
    description:
        'Discover why thousands of expats are choosing Panama for real estate investment, beachfront properties, and retirement. Full 2026 guide covering lifestyle, ROI, and visa pathways.',
    keywords:
        'panama real estate, panama investment, expat lifestyle panama, panama beachfront properties, retiring in panama, panama property investment 2026',
};

const investmentHighlights = [
    { stat: '$1,200–$1,800', label: 'Monthly luxury condo rent in Panama City', icon: MapPin },
    { stat: '$300k', label: 'Minimum real estate investment for residency visa', icon: TrendingUp },
    { stat: '5–8%', label: 'Gross annual rental yield in prime locations', icon: Globe },
    { stat: '2.5 hrs', label: 'Flight time from Miami — closer than Europe', icon: Palmtree },
];

const topLocations = [
    {
        name: 'Panama City (Punta Pacifica / Costa del Este)',
        description:
            'The financial hub of Latin America. Luxury high-rises, world-class healthcare, and a thriving expat community. Ideal for investors seeking urban convenience with ocean views.',
        bestFor: 'Long-term rentals, international business, urban lifestyle',
    },
    {
        name: 'Coronado (Pacific Riviera)',
        description:
            'Panama\'s premier Pacific beach town. 1.5 hours west of the capital, Coronado offers gated communities, golf courses, and a cooler ocean breeze. Hugely popular with American retirees.',
        bestFor: 'Vacation homes, retirement communities, weekend escapes',
    },
    {
        name: 'Bocas del Toro (Caribbean)',
        description:
            'Overwater bungalows, untouched reefs, and a laid-back Caribbean pace. Bocas is one of the fastest-growing eco-tourism markets in Central America, with strong short-term rental demand.',
        bestFor: 'Airbnb/vacation rentals, eco-tourism investment, expat retreats',
    },
    {
        name: 'Boquete (Chiriquí Highlands)',
        description:
            'Cool mountain air, coffee farms, and a vibrant expat village. Named one of the best places to retire in the world by International Living multiple times. Lower cost, higher quality of life.',
        bestFor: 'Retirement living, boutique B&Bs, sustainable farming investment',
    },
];

export default async function PanamaRealEstateInvestments({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang || 'en';
    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=1600&q=80"
                        alt="Panama Beachfront Properties"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        THE EXPAT INVESTOR'S GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Investing in Panama: The Definitive Guide to Real Estate, Expat Lifestyle & Retirement
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        From beachfront properties in Bocas del Toro to Panama City penthouses — discover why high-net-worth expats and retirees are choosing Panama as their financial and lifestyle headquarters.
                    </p>
                </div>
            </section>

            <section className="py-12 max-w-4xl mx-auto px-4 reveal-on-scroll">
                <div className="space-y-10">

                    <p className="lead text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6">
                        <strong>Panama real estate investment</strong> has quietly become one of the most compelling opportunities in the Western Hemisphere. A dollarized economy, zero tax on foreign income, permanent residency pathways from $300,000, and a location that puts you equidistant between North and South America — the fundamentals have never been stronger.
                    </p>

                    {/* Investment Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 not-prose my-16 reveal-on-scroll">
                        {investmentHighlights.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="bg-white rounded-2xl p-6 text-center">
                                    <Icon size={20} className="text-brand-GOLD mx-auto mb-3" />
                                    <div className="text-2xl font-black text-brand-950 mb-1">{item.stat}</div>
                                    <div className="text-brand-400 text-xs leading-relaxed">{item.label}</div>
                                </div>
                            );
                        })}
                    </div>

                    <h2 className="text-white text-3xl font-heading font-bold mt-16 mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Why Panama? The Structural Advantages
                    </h2>
                    <p>
                        Most investment destinations offer one or two compelling advantages. Panama offers a convergence of factors that, taken together, are difficult to replicate elsewhere:
                    </p>
                    <ul className="space-y-4 not-prose">
                        {[
                            { title: 'Territorial Tax System', body: 'Panama taxes only income earned within Panama. US dividends, foreign pensions, rental income from overseas, and capital gains on foreign assets are all 100% tax-free.' },
                            { title: 'Dollarized Economy', body: 'Panama has used the US Dollar as its official currency since 1904. There is no exchange rate risk for American investors, and no risk of a devaluation event eroding your property value.' },
                            { title: 'Canal-Anchored Stability', body: 'The Panama Canal generates over $5 billion annually, providing a government revenue base that is entirely independent of commodity cycles, tourism, or manufacturing — making Panama structurally more resilient than most of its neighbors.' },
                            { title: 'Residency by Investment', body: "A $300,000 real estate purchase in a restricted zone unlocks permanent residency. After 5 years, you qualify to apply for citizenship and a Panamanian passport — one of the more accessible \"second passport\" pathways in the world." },
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <CheckCircle size={20} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                <span className="text-slate-500">
                                    <strong className="text-slate-900">{item.title}:</strong> {item.body}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <h2 className="text-white text-3xl font-heading font-bold mt-16 mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Top Locations for Panama Real Estate Investment
                    </h2>

                    <div className="space-y-6 not-prose reveal-on-scroll">
                        {topLocations.map((loc, i) => (
                            <div key={i} className="card-light rounded-2xl p-8 border border-brand-100">
                                <h3 className="font-heading font-bold text-white text-xl mb-3">{loc.name}</h3>
                                <p className="text-slate-500 mb-4 leading-relaxed">{loc.description}</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-brand-GOLD font-bold text-xs uppercase tracking-widest">Best For:</span>
                                    <span className="text-slate-500 text-sm">{loc.bestFor}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-white text-2xl font-heading font-bold mt-12 mb-6 flex items-center gap-3">
                        <TrendingUp className="text-brand-GOLD" /> The Expat Lifestyle Premium
                    </h2>
                    <p>
                        Beyond the investment mechanics, the <strong>expat lifestyle in Panama</strong> represents an enormous quality-of-life upgrade for most North Americans. A household that spent $8,000/month maintaining an upper-middle-class lifestyle in a US metro can typically recreate — or surpass — that standard of living in Panama for $3,500–$4,500/month.
                    </p>
                    <p>
                        That differential, compounded over 10–20 years of retirement, represents life-changing wealth preservation. Many expats reinvest the savings directly into additional <strong>Panama beachfront properties</strong>, creating their own micro-portfolio of short-term rental assets.
                    </p>

                    <h2 className="text-white text-2xl font-heading font-bold mt-12 mb-6 flex items-center gap-3">
                        <Palmtree className="text-brand-GOLD" /> Retiring in Panama: The Pensionado Advantage
                    </h2>
                    <p>
                        <strong>Retiring in Panama</strong> comes with an extraordinary government incentive: the Pensionado Visa. Any foreigner with a provable lifetime pension of at least $1,000/month (e.g., US Social Security) qualifies. Benefits include:
                    </p>
                    <ul className="space-y-3 not-prose">
                        {[
                            '25% off utility bills',
                            '25% off airline tickets departing Panama',
                            '20% off medical consultations',
                            '15% off hospital bills',
                            '50% off entertainment (movies, concerts, sports events)',
                            '25% off restaurant meals',
                        ].map((b, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-500">
                                <CheckCircle size={16} className="text-brand-GOLD flex-shrink-0" />
                                {b}
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className="bg-white p-10 rounded-3xl mt-16 not-prose text-center border-t-4 border-brand-GOLD">
                        <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                            Your Panama Investment Starts Here
                        </h3>
                        <p className="text-brand-300 mb-8 max-w-xl mx-auto">
                            Work with our Panama advisors to see the properties, neighborhoods, and lifestyle firsthand — before you commit a single dollar.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contacto"
                                className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                            >
                                Schedule a Consultation <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/contacto"
                                className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                            >
                                Book a Private Consultation
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </article>
    );
}
