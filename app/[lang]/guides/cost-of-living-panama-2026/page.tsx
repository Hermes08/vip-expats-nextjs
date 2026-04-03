import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Cost of Living in Panama 2026: Real Monthly Budgets for Expats',
    description:
        'What does it actually cost to live in Panama in 2026? Real monthly budgets for rent, groceries, healthcare, transport, and utilities — compared to the US.',
    keywords:
        'cost of living panama 2026, panama monthly expenses expat, how much to live in panama, panama budget retirement, panama vs usa cost of living',
    alternates: { canonical: 'https://panamarealestatesale.com/en/guides/cost-of-living-panama-2026' },
    openGraph: {
        title: 'Cost of Living in Panama 2026: Real Monthly Budgets for Expats',
        description: 'Real monthly expense breakdowns for expats in Panama City, Boquete, and Coronado in 2026.',
        type: 'article',
    },
};

const budgetTiers = [
    {
        label: 'Budget',
        monthly: '$1,500 – $2,000',
        location: 'El Cangrejo or smaller beach town',
        items: [
            { category: 'Rent (studio/1BR)', cost: '$650–$900' },
            { category: 'Groceries (local markets)', cost: '$200–$300' },
            { category: 'Utilities + internet', cost: '$80–$120' },
            { category: 'Transport (Metro + Uber)', cost: '$60–$100' },
            { category: 'Dining out (local)', cost: '$100–$150' },
            { category: 'Health insurance', cost: '$80–$100' },
        ],
    },
    {
        label: 'Comfortable',
        monthly: '$2,500 – $3,500',
        location: 'Punta Pacifica or Boquete',
        items: [
            { category: 'Rent (1–2BR furnished)', cost: '$1,200–$1,800' },
            { category: 'Groceries (mix local/imported)', cost: '$350–$500' },
            { category: 'Utilities + high-speed internet', cost: '$120–$180' },
            { category: 'Transport (car or Uber)', cost: '$150–$250' },
            { category: 'Dining + entertainment', cost: '$300–$450' },
            { category: 'Health insurance (comprehensive)', cost: '$200–$300' },
        ],
    },
    {
        label: 'Luxury',
        monthly: '$5,000 – $8,000',
        location: 'Costa del Este or Coronado estate',
        items: [
            { category: 'Rent (penthouse / house)', cost: '$2,500–$4,000' },
            { category: 'Groceries + premium imports', cost: '$600–$900' },
            { category: 'Utilities + housekeeper', cost: '$350–$550' },
            { category: 'Car ownership + fuel', cost: '$400–$700' },
            { category: 'Fine dining + social life', cost: '$700–$1,200' },
            { category: 'Private health insurance', cost: '$350–$600' },
        ],
    },
];

const usVsPanama = [
    { item: 'Specialist doctor visit', us: '$300–$500', panama: '$50–$80' },
    { item: '2BR apartment (city center)', us: '$2,500–$4,000', panama: '$1,000–$2,000' },
    { item: 'Monthly groceries (couple)', us: '$600–$900', panama: '$300–$500' },
    { item: 'Monthly health insurance (60yo)', us: '$700–$1,200', panama: '$200–$350' },
    { item: 'Dinner at mid-range restaurant', us: '$60–$90 for two', panama: '$25–$45 for two' },
    { item: 'Monthly electricity (2BR AC)', us: '$150–$200', panama: '$80–$140' },
    { item: 'Dental crown', us: '$1,200–$1,800', panama: '$300–$500' },
    { item: 'Monthly internet (fiber)', us: '$80–$120', panama: '$40–$70' },
];

const locationComparison = [
    { city: 'Panama City (Punta Pacifica)', tier: 'Most expensive', rent: '$1,200–$3,000', total: '$2,800–$5,500', note: 'Best hospital access, most English-friendly' },
    { city: 'Panama City (El Cangrejo)', tier: 'Mid-range', rent: '$700–$1,200', total: '$1,800–$2,800', note: 'Most walkable, great value' },
    { city: 'Boquete', tier: 'Budget–comfortable', rent: '$500–$1,200', total: '$1,500–$2,500', note: 'Cool mountain climate, expat hub' },
    { city: 'Coronado Beach', tier: 'Comfortable', rent: '$900–$2,000', total: '$2,200–$3,800', note: 'Pacific beach lifestyle, big expat community' },
    { city: 'Pedasi', tier: 'Budget', rent: '$400–$800', total: '$1,200–$1,800', note: 'Best value, rural Pacific' },
];

export default async function CostOfLivingPage({ params }: { params: Promise<{ lang: string }> }) {
    await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            <section className="section-teal-soft py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1600&q=80" alt="Panama cost of living" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                    <span className="tag-teal mb-5 inline-block">COST OF LIVING GUIDE · 2026</span>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mb-6 leading-tight mt-4">
                        Cost of Living in Panama:<br />Real Budgets for 2026
                    </h1>
                    <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
                        What it actually costs — not blog estimates. Real monthly breakdowns for three lifestyle tiers, with a side-by-side US comparison.
                    </p>
                </div>
            </section>

            <div className="max-w-3xl mx-auto px-4 py-14 space-y-14">

                <section className="reveal-on-scroll">
                    <p className="text-xl font-semibold text-white border-l-4 border-brand-TEAL pl-5 leading-relaxed">
                        A couple can live comfortably in Panama — with private healthcare — for $2,500–$3,500/month. The same lifestyle in Florida or California costs $6,000–$9,000. That gap is why Panama keeps growing.
                    </p>
                </section>

                {/* Budget tiers */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        <DollarSign className="inline text-brand-GOLD mr-1" size={22} />
                        Monthly Budget Tiers
                    </h2>
                    <div className="space-y-6">
                        {budgetTiers.map((tier, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                                    <div>
                                        <span className="text-brand-GOLD font-black uppercase tracking-widest text-[10px]">{tier.label} lifestyle</span>
                                        <div className="text-white font-black text-2xl">{tier.monthly}<span className="text-slate-500 font-normal text-sm">/mo</span></div>
                                    </div>
                                    <span className="text-slate-500 text-xs">{tier.location}</span>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-2">
                                    {tier.items.map((item, j) => (
                                        <div key={j} className="flex justify-between items-center bg-white rounded-lg px-4 py-2.5">
                                            <span className="text-slate-500 text-xs">{item.category}</span>
                                            <span className="text-white font-bold text-xs">{item.cost}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* US vs Panama */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        Panama vs the US — Side by Side
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4">Expense</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">USA</th>
                                    <th className="text-left text-brand-TEAL text-[10px] uppercase tracking-widest py-3 px-3">Panama</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usVsPanama.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.item}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.us}</td>
                                        <td className="text-brand-TEAL font-bold text-xs py-3 px-3">{row.panama}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Location comparison */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        Cost by Location
                    </h2>
                    <div className="space-y-3">
                        {locationComparison.map((loc, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-3 mb-1">
                                    <div>
                                        <div className="text-brand-950 font-bold text-sm">{loc.city}</div>
                                        <div className="text-slate-500 text-[11px]">{loc.tier}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-brand-GOLD font-black text-sm">{loc.total}</div>
                                        <div className="text-slate-600 text-[10px]">total/mo (couple)</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <CheckCircle size={11} className="text-brand-TEAL flex-shrink-0" />
                                    <span className="text-slate-500 text-[11px]">{loc.note}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What costs more */}
                <section className="reveal-on-scroll card-light rounded-2xl p-6 border border-brand-100">
                    <h2 className="text-white text-xl font-heading font-bold mb-4 uppercase tracking-tighter italic">
                        What Costs MORE in Panama (Honest)
                    </h2>
                    <div className="space-y-2">
                        {[
                            { item: 'Imported goods & US brands', note: 'Tariffs make imported food 30–50% pricier than in the US. Shop local instead.' },
                            { item: 'Electricity if you run AC all day', note: 'Humid climate means high AC usage. Budget $80–$180/mo depending on unit size.' },
                            { item: 'Reliable car', note: 'Vehicles are imported and carry duties. A basic car costs 20–30% more than in the US.' },
                            { item: 'Banking delays', note: 'Not a cost but a time cost — opening accounts takes weeks. Factor this into your move plan.' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white rounded-xl px-4 py-3">
                                <span className="text-brand-CORAL font-black flex-shrink-0">↑</span>
                                <div>
                                    <span className="text-white font-bold text-xs">{item.item}: </span>
                                    <span className="text-slate-500 text-xs">{item.note}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-brand-50 p-8 rounded-2xl border-t-4 border-brand-TEAL text-center">
                    <h3 className="text-white font-heading text-2xl font-bold mb-3 uppercase italic tracking-tighter">
                        Want a Personalized Budget Breakdown?
                    </h3>
                    <p className="text-slate-500 mb-6 max-w-md mx-auto text-sm leading-relaxed">
                        Our advisors will build you a real monthly budget based on your target neighborhood and lifestyle — before you commit to anything.
                    </p>
                    <Link href="/contacto" className="inline-flex items-center gap-3 btn-3d btn-3d-teal px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs">
                        Book Free Budget Call <ArrowRight size={14} />
                    </Link>
                </section>

                <section className="grid sm:grid-cols-2 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Living in Panama City Guide', href: '/en/blog/living-in-panama-city' },
                        { label: 'Retire in Panama Guide', href: '/en/blog/retire-in-panama' },
                        { label: 'Apartments for Rent — Panama City', href: '/en/blog/apartments-for-rent-panama-city' },
                        { label: 'Pensionado Visa Guide', href: '/en/guides/pensionado-visa-panama' },
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
