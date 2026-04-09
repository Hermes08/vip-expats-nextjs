import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Globe, DollarSign, Heart, Shield, Sun } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const canonical = `https://panamarealestatesale.com/${lang}/guides/panama-vs-costa-rica`;

    return {
        title: 'Panama vs Costa Rica for Expats 2026 — Honest Side-by-Side Comparison',
        description:
            'Panama or Costa Rica? Compare cost of living, visas, healthcare, taxes, safety, and quality of life for expats and retirees in 2026 with real numbers.',
        keywords:
            'panama vs costa rica expat living, panama vs costa rica retirement, costa rica or panama 2026, best country retire central america, panama costa rica comparison expats',
        alternates: { canonical },
        openGraph: {
            title: 'Panama vs Costa Rica for Expats 2026 — Honest Side-by-Side Comparison',
            description: 'Real cost, visa, healthcare, and lifestyle comparison for expats choosing between Panama and Costa Rica in 2026.',
            type: 'article',
        },
    };
}

const costComparison = [
    { item: '1BR apartment (city center)', panama: '$800–$1,400', costaRica: '$700–$1,200', winner: 'tie' },
    { item: '2BR apartment (city center)', panama: '$1,200–$2,200', costaRica: '$1,000–$1,800', winner: 'costaRica' },
    { item: 'Monthly groceries (couple)', panama: '$300–$500', costaRica: '$400–$650', winner: 'panama' },
    { item: 'Private health insurance (60yo)', panama: '$200–$350/mo', costaRica: '$80–$150/mo (CAJA)', winner: 'costaRica' },
    { item: 'Specialist doctor visit', panama: '$50–$80', costaRica: '$60–$120', winner: 'panama' },
    { item: 'Electricity (2BR with AC)', panama: '$80–$140', costaRica: '$60–$100', winner: 'costaRica' },
    { item: 'Internet (fiber)', panama: '$40–$70', costaRica: '$45–$70', winner: 'tie' },
    { item: 'Dinner for two (mid-range)', panama: '$25–$45', costaRica: '$30–$55', winner: 'panama' },
    { item: 'Monthly total (couple, comfortable)', panama: '$2,500–$3,500', costaRica: '$2,800–$4,200', winner: 'panama' },
];

const visaComparison = [
    {
        country: 'Panama',
        programs: [
            { name: 'Pensionado Visa', req: '$1,000/mo pension income', timeline: '3–6 months', note: 'Best retiree visa in the Americas — massive discounts on flights, dining, utilities, healthcare' },
            { name: 'Friendly Nations Visa', req: '$5,000 bank deposit + economic tie', timeline: '4–8 months', note: 'Open to 50+ countries including US, UK, Canada, EU — leads to permanent residency' },
            { name: 'Qualified Investor Visa', req: '$300,000 real estate investment', timeline: '3–6 months', note: 'Immediate permanent residency through property purchase' },
        ],
    },
    {
        country: 'Costa Rica',
        programs: [
            { name: 'Pensionado', req: '$1,000/mo pension income', timeline: '6–12 months', note: 'Temporary residency (2 years, renewable) — no work permit included' },
            { name: 'Rentista', req: '$2,500/mo passive income for 2 years', timeline: '6–12 months', note: 'Must prove $60,000 in deposits or income stream' },
            { name: 'Inversionista', req: '$150,000 investment', timeline: '6–12 months', note: 'Lower threshold than Panama but slower processing and temporary status' },
        ],
    },
];

const categories = [
    {
        icon: DollarSign,
        title: 'Cost of Living',
        winner: 'Panama',
        summary: 'Panama is 15–25% cheaper overall. Groceries, dining, and imported goods cost significantly less thanks to the Colón Free Zone and no sales tax on basic goods. Costa Rica has a 13% VAT (IVA) on most purchases. The biggest Panama advantage: the US dollar is the currency, so no exchange-rate risk.',
    },
    {
        icon: Shield,
        title: 'Visa & Residency',
        winner: 'Panama',
        summary: 'Panama offers more visa pathways, faster processing, and a direct route to permanent residency. The Pensionado visa includes real discounts (25% off flights, 25% off restaurants, 20% off medical). Costa Rica\'s visas are temporary (2-year renewable) and processing times regularly exceed 6 months.',
    },
    {
        icon: Heart,
        title: 'Healthcare',
        winner: 'Tie',
        summary: 'Both countries offer high-quality private healthcare at a fraction of US prices. Panama City has Johns Hopkins-affiliated Punta Pacífica Hospital and world-class dental tourism. Costa Rica\'s CAJA public system covers residents for $80–$150/month — unbeatable value if you qualify. Private care quality is comparable in both capitals.',
    },
    {
        icon: Globe,
        title: 'Taxes',
        winner: 'Panama',
        summary: 'Panama uses a territorial tax system — foreign-sourced income (US pensions, Social Security, overseas investments) is not taxed. Costa Rica also uses territorial taxation, but has been tightening enforcement and adding reporting requirements. Panama has no capital gains tax on primary residences and no inheritance tax.',
    },
    {
        icon: Sun,
        title: 'Climate & Nature',
        winner: 'Costa Rica',
        summary: 'Costa Rica has more biodiversity per square mile than almost any country on Earth. Its Pacific and Caribbean coasts, cloud forests, and volcano regions offer stunning variety. Panama has similar geography but Costa Rica\'s national park system (covering 25% of the country) and eco-tourism infrastructure are more developed.',
    },
];

const prosConsPanama = {
    pros: [
        'US dollar economy — no currency risk',
        'Lower cost of living (15–25% cheaper)',
        'Pensionado visa with real discounts on daily life',
        'Territorial tax system — foreign income untaxed',
        'Modern infrastructure (Panama City skyline, metro system)',
        'Hub of the Americas — direct flights to 80+ cities',
        'Colón Free Zone keeps imported goods affordable',
        'No hurricanes (below the hurricane belt)',
    ],
    cons: [
        'Less eco-tourism infrastructure than Costa Rica',
        'Banking system can be slow and bureaucratic for newcomers',
        'Rainy season (May–December) is intense in some areas',
        'Less English spoken outside Panama City',
    ],
};

const prosConsCostaRica = {
    pros: [
        'World-class nature and biodiversity',
        'Strong eco-tourism and outdoor lifestyle',
        'CAJA public healthcare is affordable and comprehensive',
        'Large established expat communities (Central Valley, Guanacaste)',
        'Pura Vida culture — relaxed, welcoming atmosphere',
        'Better developed beach towns for surfing and coastal living',
    ],
    cons: [
        'Higher cost of living (13% IVA on most goods)',
        'Visa processing is slower (6–12 months typical)',
        'Colón (currency) fluctuates — exchange rate risk',
        'Road infrastructure is worse than Panama',
        'Property title issues in coastal zones (maritime zone restrictions)',
        'Higher crime rates in certain tourist areas (petty theft)',
        'No direct path to permanent residency for most visa types',
    ],
};

export default async function PanamaVsCostaRicaPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="section-teal-soft py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1600&q=80" alt="Panama vs Costa Rica comparison" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                    <span className="tag-teal mb-5 inline-block">EXPAT COMPARISON GUIDE · 2026</span>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mb-6 leading-tight mt-4">
                        Panama vs Costa Rica:<br />Which Is Better for Expats in 2026?
                    </h1>
                    <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
                        Two of Central America's top expat destinations compared on cost, visas, healthcare, taxes, safety, and lifestyle — with real numbers, not blog opinions.
                    </p>
                </div>
            </section>

            <div className="max-w-3xl mx-auto px-4 py-14 space-y-14">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-xl font-semibold text-white border-l-4 border-brand-TEAL pl-5 leading-relaxed">
                        Panama and Costa Rica share a border, but the expat experience in each country is surprisingly different. Panama wins on cost, taxes, and visa options. Costa Rica wins on nature and public healthcare. Here's how they compare in 2026.
                    </p>
                </section>

                {/* The Quick Verdict */}
                <section className="reveal-on-scroll card-light rounded-2xl p-6 border border-brand-100">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-5 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        The Quick Verdict
                    </h2>
                    <div className="space-y-4 text-sm text-slate-500 leading-relaxed">
                        <p>
                            <strong className="text-white">Choose Panama if</strong> you want lower costs, the US dollar, a faster path to residency, territorial taxation with minimal enforcement friction, modern city infrastructure, and the best retiree visa program in the Americas.
                        </p>
                        <p>
                            <strong className="text-white">Choose Costa Rica if</strong> you prioritize nature and eco-tourism above everything else, want access to a low-cost public healthcare system (CAJA), prefer a beach-town or mountain-village lifestyle over city living, and don't mind a slower visa process.
                        </p>
                        <p>
                            <strong className="text-white">The bottom line:</strong> For retirees and investors focused on financial optimization, Panama is the stronger choice. For nature lovers who want a simpler, rural lifestyle and don't mind paying more, Costa Rica delivers an unmatched environment.
                        </p>
                    </div>
                </section>

                {/* Category-by-Category Winner */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        Category-by-Category Breakdown
                    </h2>
                    <div className="space-y-4">
                        {categories.map((cat, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <cat.icon size={18} className="text-brand-GOLD flex-shrink-0" />
                                    <h3 className="text-white font-bold text-sm">{cat.title}</h3>
                                    <span className={`ml-auto text-[10px] font-black uppercase tracking-widest ${cat.winner === 'Tie' ? 'text-slate-400' : 'text-brand-TEAL'}`}>
                                        {cat.winner === 'Tie' ? '— TIE —' : `Winner: ${cat.winner}`}
                                    </span>
                                </div>
                                <p className="text-slate-500 text-xs leading-relaxed">{cat.summary}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Cost Comparison Table */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        <DollarSign className="inline text-brand-GOLD mr-1" size={22} />
                        Cost of Living — Side by Side
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4">Expense</th>
                                    <th className="text-left text-brand-TEAL text-[10px] uppercase tracking-widest py-3 px-3">Panama</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Costa Rica</th>
                                </tr>
                            </thead>
                            <tbody>
                                {costComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.item}</td>
                                        <td className={`text-xs py-3 px-3 ${row.winner === 'panama' ? 'text-brand-TEAL font-bold' : 'text-slate-500'}`}>{row.panama}</td>
                                        <td className={`text-xs py-3 px-3 ${row.winner === 'costaRica' ? 'text-brand-TEAL font-bold' : 'text-slate-500'}`}>{row.costaRica}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-slate-400 text-[11px] mt-3 italic">Prices reflect mid-2026 estimates for comfortable expat lifestyle. Panama City vs San José metro areas.</p>
                </section>

                {/* Visa Comparison */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        Visa &amp; Residency Programs Compared
                    </h2>
                    <div className="space-y-6">
                        {visaComparison.map((country, i) => (
                            <div key={i}>
                                <h3 className="text-brand-GOLD font-black uppercase tracking-widest text-[11px] mb-3">{country.country}</h3>
                                <div className="space-y-3">
                                    {country.programs.map((prog, j) => (
                                        <div key={j} className="card-light rounded-xl p-4 border border-brand-100">
                                            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                                <span className="text-white font-bold text-sm">{prog.name}</span>
                                                <span className="text-slate-400 text-[10px]">{prog.timeline}</span>
                                            </div>
                                            <div className="text-brand-TEAL text-xs font-semibold mb-1">Requirement: {prog.req}</div>
                                            <p className="text-slate-500 text-xs">{prog.note}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Real Estate */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-5 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        Real Estate: Buying Property as a Foreigner
                    </h2>
                    <div className="space-y-4 text-sm text-slate-500 leading-relaxed">
                        <p>
                            <strong className="text-white">Panama</strong> allows foreigners to own property with the same rights as citizens — including titled beachfront land. There are no restrictions on foreign ownership, no special permits required, and property taxes are among the lowest in the Americas (0.5–0.7% of registered value). New construction gets a tax exemption for up to 20 years depending on the property value. Closing costs run 2–5% of purchase price.
                        </p>
                        <p>
                            <strong className="text-white">Costa Rica</strong> also allows foreign ownership, but with a major caveat: the Maritime Zone Law restricts ownership within 200 meters of the high-tide line. The first 50 meters is public land (no building allowed), and the next 150 meters is a "restricted zone" where foreigners cannot own directly — they need a Costa Rican corporation with majority local ownership. This affects many popular beach areas. Property taxes are low (0.25% of registered value), but transfer taxes and legal fees push closing costs to 3–5%.
                        </p>
                        <p>
                            <strong className="text-white">Winner: Panama.</strong> Full foreign ownership rights, lower property taxes, generous tax exemptions on new builds, and no coastal restrictions. If beachfront property is part of your plan, Panama is significantly easier.
                        </p>
                    </div>
                </section>

                {/* Safety */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-5 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        Safety &amp; Security
                    </h2>
                    <div className="space-y-4 text-sm text-slate-500 leading-relaxed">
                        <p>
                            Both countries are among the safest in Latin America for expats, but the profile differs. Panama City's expat neighborhoods (Punta Pacifica, Costa del Este, Clayton) are very safe with modern security infrastructure. Rural and indigenous areas like Boquete and Pedasi have extremely low crime rates.
                        </p>
                        <p>
                            Costa Rica has higher rates of petty theft and property crime, particularly in tourist-heavy areas like San José, Jacó, and Tamarindo. The country's overall homicide rate is slightly higher than Panama's, though both are well below the regional average. Costa Rica does not have a military, relying entirely on police forces.
                        </p>
                        <p>
                            Both countries sit below the hurricane belt, so neither faces hurricane risk. Panama has a slight edge in natural disaster safety — Costa Rica has more seismic and volcanic activity (though major incidents are rare).
                        </p>
                    </div>
                </section>

                {/* Infrastructure & Daily Life */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-5 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        Infrastructure &amp; Daily Life
                    </h2>
                    <div className="space-y-4 text-sm text-slate-500 leading-relaxed">
                        <p>
                            <strong className="text-white">Panama</strong> has the most modern infrastructure in Central America. Panama City has a metro system, Uber operates widely, roads between major cities are well-maintained, and the Tocumen International Airport connects to 80+ destinations. Fiber internet is available in most urban areas ($40–$70/month). Banking is well-developed (though opening accounts takes patience). The Colón Free Zone means electronics, appliances, and imported goods are cheaper than anywhere else in the region.
                        </p>
                        <p>
                            <strong className="text-white">Costa Rica</strong> has decent infrastructure in the Central Valley (San José, Escazú, Santa Ana) but road quality drops significantly outside the metro area. The country is investing in road improvements, but potholes and single-lane highways between popular areas remain common. Internet is reliable in urban areas but spotty in beach towns. The Juan Santamaría Airport in San José has fewer international connections than Tocumen.
                        </p>
                        <p>
                            For daily convenience, modern amenities, and international connectivity, Panama is ahead. For a slower-paced, nature-first lifestyle where infrastructure matters less, Costa Rica delivers.
                        </p>
                    </div>
                </section>

                {/* Pros and Cons */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        Pros &amp; Cons at a Glance
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {/* Panama */}
                        <div className="card-light rounded-2xl p-5 border border-brand-100">
                            <h3 className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-4">Panama</h3>
                            <div className="space-y-2 mb-4">
                                {prosConsPanama.pros.map((pro, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <CheckCircle size={12} className="text-brand-TEAL flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-500 text-[11px]">{pro}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-2">
                                {prosConsPanama.cons.map((con, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <span className="text-brand-CORAL font-black flex-shrink-0 text-xs">↓</span>
                                        <span className="text-slate-500 text-[11px]">{con}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Costa Rica */}
                        <div className="card-light rounded-2xl p-5 border border-brand-100">
                            <h3 className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-4">Costa Rica</h3>
                            <div className="space-y-2 mb-4">
                                {prosConsCostaRica.pros.map((pro, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <CheckCircle size={12} className="text-brand-TEAL flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-500 text-[11px]">{pro}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-2">
                                {prosConsCostaRica.cons.map((con, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <span className="text-brand-CORAL font-black flex-shrink-0 text-xs">↓</span>
                                        <span className="text-slate-500 text-[11px]">{con}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Should Pick Which */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-5 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        Who Should Pick Which Country?
                    </h2>
                    <div className="space-y-4 text-sm text-slate-500 leading-relaxed">
                        <p>
                            <strong className="text-white">Retirees on a fixed pension:</strong> Panama. The Pensionado visa discounts alone save hundreds per month, and the US dollar eliminates exchange-rate anxiety. A couple can live well on $2,500/month.
                        </p>
                        <p>
                            <strong className="text-white">Remote workers and digital nomads:</strong> Panama for infrastructure and timezone (EST), Costa Rica if you want to work from a surf town and don't mind slower internet.
                        </p>
                        <p>
                            <strong className="text-white">Real estate investors:</strong> Panama. Full foreign ownership, property tax exemptions, no coastal restrictions, and a growing rental market driven by business travelers and canal logistics.
                        </p>
                        <p>
                            <strong className="text-white">Nature enthusiasts and eco-lifestyle seekers:</strong> Costa Rica. The national park system, wildlife diversity, and outdoor culture are world-class.
                        </p>
                        <p>
                            <strong className="text-white">Families with children:</strong> Both work well. Panama City has more international schools and urban amenities. Costa Rica offers a more outdoor-oriented childhood.
                        </p>
                    </div>
                </section>

                {/* Breadcrumb */}
                <nav className="reveal-on-scroll text-[11px] text-slate-400">
                    <Link href={`/${lang}`} className="hover:text-brand-TEAL transition-colors">Home</Link>
                    <span className="mx-2">›</span>
                    <Link href={`/${lang}/guides/expat-living-in-panama`} className="hover:text-brand-TEAL transition-colors">Guides</Link>
                    <span className="mx-2">›</span>
                    <span className="text-white">Panama vs Costa Rica for Expats 2026</span>
                </nav>

                {/* CTA */}
                <section className="reveal-on-scroll bg-brand-50 p-8 rounded-2xl border-t-4 border-brand-TEAL text-center">
                    <h3 className="text-white font-heading text-2xl font-bold mb-3 uppercase italic tracking-tighter">
                        Ready to Explore Panama?
                    </h3>
                    <p className="text-slate-500 mb-6 max-w-md mx-auto text-sm leading-relaxed">
                        Talk to our team about neighborhoods, properties, and visa options. We'll help you figure out if Panama is the right move — no pressure, no sales pitch.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://wa.me/50767610315?text=Hi%2C%20I'm%20comparing%20Panama%20and%20Costa%20Rica%20and%20would%20like%20to%20learn%20more"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 btn-3d btn-3d-teal px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs"
                        >
                            WhatsApp Us <ArrowRight size={14} />
                        </a>
                        <Link
                            href={`/${lang}/propiedades`}
                            className="inline-flex items-center gap-3 border-2 border-brand-TEAL text-brand-TEAL hover:bg-brand-TEAL hover:text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-colors"
                        >
                            Browse Properties <ArrowRight size={14} />
                        </Link>
                    </div>
                </section>

                {/* Related Links */}
                <section className="grid sm:grid-cols-2 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Cost of Living Panama 2026', href: `/${lang}/guides/cost-of-living-panama-2026` },
                        { label: 'Pensionado Visa Guide', href: `/${lang}/guides/pensionado-visa-panama` },
                        { label: 'Best Areas to Retire in Panama', href: `/${lang}/guides/best-areas-retire-panama` },
                        { label: 'Buying Property as a US Citizen', href: `/${lang}/guides/buying-property-panama-us-citizens` },
                    ].map((link, i) => (
                        <Link key={i} href={link.href} className="flex items-center justify-between card-light p-4 rounded-xl border border-brand-100 hover:border-brand-TEAL/30 transition-all group">
                            <span className="text-white text-xs font-bold">{link.label}</span>
                            <ArrowRight size={12} className="text-brand-TEAL opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                    ))}
                </section>

            </div>
        </article>
    );
}
