import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShoppingCart, DollarSign, MapPin, AlertCircle, TrendingDown } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Supermarkets & Shopping in Panama 2026: Where Expats Buy Groceries',
    description: 'Guide to supermarkets in Panama. El Rey, Riba Smith, Súper 99, organic stores. Prices, locations, shopping tips.',
    keywords: 'supermarkets Panama, grocery stores Panama, El Rey Panama, Riba Smith, shopping Panama',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/supermarkets-shopping-panama-expats',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/supermarkets-shopping-panama-expats',
            'es': 'https://panamarealestatesale.com/es/blog/supermarkets-shopping-panama-expats',
            'pt': 'https://panamarealestatesale.com/pt/blog/supermarkets-shopping-panama-expats',
            'de': 'https://panamarealestatesale.com/de/blog/supermarkets-shopping-panama-expats',
        },
    },
    openGraph: {
        title: 'Supermarkets & Shopping in Panama 2026: Where Expats Buy Groceries',
        description: 'Guide to supermarkets in Panama. El Rey, Riba Smith, Súper 99, organic stores. Prices, locations, shopping tips.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/supermarkets-shopping-panama-expats',
        images: [{ url: 'https://images.unsplash.com/photo-1537427564867-f4ef3ce7c827?w=1200&q=80', width: 1200, height: 630, alt: 'Supermarket in Panama' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Supermarkets & Shopping in Panama 2026: Where Expats Buy Groceries',
        description: 'Guide to supermarkets in Panama. El Rey, Riba Smith, Súper 99, organic stores. Prices, locations, shopping tips.',
        images: ['https://images.unsplash.com/photo-1537427564867-f4ef3ce7c827?w=1200&q=80'],
    },
};

const supermarkets = [
    {
        name: 'El Rey',
        tag: 'Largest Chain',
        locations: 'El Dorado, Tocumen, multiple Panama City locations, David, Boquete',
        hours: '24-hour at select locations',
        pros: [
            'Largest national chain',
            'Good produce section',
            'Many imported American brands',
            'Mid-range prices',
            'Available nationwide',
        ],
        best: 'General shopping, good variety',
    },
    {
        name: 'Riba Smith',
        tag: 'Most Expat-Friendly',
        locations: 'El Cangrejo, Costa del Este, Marbella',
        hours: '8am–8pm daily',
        pros: [
            'Best selection of US/European imports',
            'Deli counter, cheese selection',
            'Organic section',
            'Wine cellar (best selection in Panama)',
            'Higher prices, Whole Foods-level',
        ],
        best: 'Quality imports, gourmet items',
    },
    {
        name: 'PriceSmart',
        tag: 'Costco Equivalent',
        locations: 'Panama City (multiple), David',
        hours: 'Store hours vary',
        pros: [
            'Bulk buying saves money',
            'Best per-unit prices',
            '$30/year membership',
            'Large selection of staples',
            'Great for stocking up',
        ],
        best: 'Bulk pantry items, household supplies',
    },
    {
        name: 'Machetazo',
        tag: 'Budget Option',
        locations: 'Multiple Panama City locations',
        hours: 'Variable',
        pros: [
            'Cheapest local prices',
            'Basic staples focus',
            'Very local feel',
            'No frills, no-nonsense',
        ],
        best: 'Budget shoppers, locals',
    },
    {
        name: 'Rey Plus',
        tag: 'Upscale El Rey',
        locations: 'Select Panama City areas',
        hours: 'Store hours',
        pros: [
            'Newer, cleaner presentation',
            'Better produce quality',
            'More imported brands than El Rey',
        ],
        best: 'Quality local shopping',
    },
];

const localCheap = [
    {
        item: 'Tropical Fruits',
        localPrice: '$0.50–2/lb',
        usaPrice: '$3–6/lb',
        savings: '70% cheaper',
        where: 'Local markets, Mercado de Abastos',
    },
    {
        item: 'Rice, Beans, Lentils',
        localPrice: '$1–3/lb',
        usaPrice: '$4–8/lb',
        savings: '50–60% cheaper',
        where: 'Any supermarket',
    },
    {
        item: 'Fresh Fish & Seafood',
        localPrice: '$5–10/lb',
        usaPrice: '$12–20/lb',
        savings: '50% cheaper',
        where: 'Pescadería (fish shops), markets',
    },
    {
        item: 'Boquete Coffee',
        localPrice: '$5–15/bag',
        usaPrice: '$20–40/bag',
        savings: '60% cheaper',
        where: 'Boquete markets, origin roasters',
    },
    {
        item: 'Vegetables',
        localPrice: '50–70% less',
        usaPrice: 'Full retail',
        savings: 'Significant',
        where: 'Local markets, not supermarkets',
    },
    {
        item: 'Eggs',
        localPrice: '$1–1.50/doz',
        usaPrice: '$3–4/doz',
        savings: '50% cheaper',
        where: 'Any supermarket',
    },
    {
        item: 'Fresh Bread',
        localPrice: '$0.50–1 each',
        usaPrice: '$2–3 each',
        savings: '50–60% cheaper',
        where: 'Panadería (bakery), markets',
    },
];

const importedExpensive = [
    { item: 'US Cereals & Snacks', markup: '30–60% more', reason: 'Import tariffs' },
    { item: 'Dairy (cheese, yogurt, butter)', markup: '30–50% more', reason: 'Limited local production' },
    { item: 'Wine', markup: '30–50% more', reason: 'Import tax is high' },
    { item: 'Electronics', markup: '40–80% more', reason: 'No Amazon shipping, local taxes' },
    { item: 'Clothing (brand names)', markup: 'Similar to US', reason: 'Same global pricing' },
    { item: 'Imported spirits', markup: '30–50% more', reason: 'Heavy liquor tax' },
];

const localMarkets = [
    {
        market: 'Mercado de Abastos',
        location: 'Curundú, Panama City',
        what: 'Produce, meat, seafood — wholesale',
        vibe: 'Very local, early morning (5–10am best)',
        parking: 'Difficult, go early',
    },
    {
        market: 'Diablo Rosso Markets',
        location: 'Various Panama City areas',
        what: 'Organic, artisanal, local producers',
        vibe: 'Trendy, expat-friendly',
        parking: 'Better than Abastos',
    },
    {
        market: 'Boquete Saturday Market',
        location: 'Boquete town center',
        what: 'Coffee, local produce, crafts',
        vibe: 'Weekly, social, expat hangout',
        parking: 'Street parking available',
    },
];

const onlineOrdering = [
    { service: 'El Rey Delivery', what: 'Supermarket delivery', time: '2–4 hour window', apps: 'App + website' },
    { service: 'Riba Smith Delivery', what: 'Supermarket delivery', time: '2–4 hour window', apps: 'App + website' },
    { service: 'PedidosYa', what: 'Restaurant + grocery', time: 'Varies', apps: 'App' },
    { service: 'Glovo', what: 'Restaurant + grocery', time: 'Varies', apps: 'App' },
    { service: 'Uber Eats', what: 'Restaurant delivery', time: 'Varies', apps: 'App' },
    { service: 'Amazon.com.mx', what: 'Select items to Panama', time: '1–3 weeks', apps: 'Website' },
    { service: 'Forward Mail (AeroPost, MBE)', what: 'US packages forwarded', time: 'Varies', apps: '$3–8/lb' },
];

const alcohol = [
    { item: 'Balboa Beer', price: '$0.75–1 can', local: 'Yes', notes: 'Panama\'s lager, very cheap in stores' },
    { item: 'Seco Herrerano', price: '$5–8/bottle', local: 'Yes', notes: 'Panama national spirit' },
    { item: 'Wine (imported)', price: '$10–25', local: 'No', notes: 'Limited selection vs USA' },
    { item: 'Rum (imported)', price: '$15–40', local: 'No', notes: '30–50% markup due to tax' },
];

const payment = [
    { method: 'Credit Cards', widely: 'Universal', notes: 'VISA/Mastercard everywhere' },
    { method: 'Amex', widely: 'Less common', notes: 'Some stores don\'t accept' },
    { method: 'Yappy', widely: 'Local shops', notes: 'Panama\'s Venmo equivalent' },
    { method: 'Cash (USD)', widely: 'Always accepted', notes: 'ATMs everywhere' },
];

const faqs = [
    {
        q: 'Is grocery shopping expensive in Panama?',
        a: 'It depends what you buy. Local items (fruits, beans, rice, eggs, fresh fish) are 30–70% CHEAPER than USA. Imported items are 30–50% MORE expensive. Mixed diet: probably similar to US overall.',
    },
    {
        q: 'Which supermarket is best for expats?',
        a: 'Riba Smith if you want quality imports and gourmet items (and don\'t mind paying Whole Foods prices). El Rey for general shopping. PriceSmart for bulk buying. Machetazo if you are budget-conscious.',
    },
    {
        q: 'Should I get a PriceSmart membership?',
        a: 'Yes, if you plan to stay in Panama. $30/year pays for itself in a month or two if you buy staples in bulk. Highly recommended for long-term expats.',
    },
    {
        q: 'Can I order groceries online in Panama?',
        a: 'Yes. El Rey and Riba Smith deliver within 2–4 hours. Restaurant apps (Glovo, PedidosYa) also deliver some grocery items. Prices are same as in-store, no premium.',
    },
    {
        q: 'Where do I buy wine in Panama?',
        a: 'Riba Smith has the best selection in Panama (still limited vs USA). El Rey has basic options. Expect to pay 30–50% more than US prices due to import tax.',
    },
];

export default async function SupermarketsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1534723452862-4c874018701d?w=1600&q=80"
                        alt="Shopping in Panama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        SHOPPING GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Supermarkets in Panama<br />2026 Shopping Guide
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Where to shop, what\'s cheap local vs. expensive imported, and how to get the best prices as an expat.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Grocery shopping in Panama is a mix of great deals and expensive surprises. Local tropical fruits, fresh seafood, and staples like rice and beans are strikingly cheap. Imported US brands, wine, and dairy cost significantly more. This guide breaks down every supermarket chain, what to buy local vs. import, and how expats actually save money at the checkout.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        Bottom line: Shop for local items everywhere. Shop for imports at Riba Smith. Buy staples in bulk at PriceSmart. Your overall cost of living will be lower than the US if you eat local.
                    </p>
                </section>

                {/* The Supermarkets */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <ShoppingCart className="inline text-brand-GOLD mr-2" size={28} />
                        The Supermarkets: Where to Shop
                    </h2>
                    <div className="space-y-5">
                        {supermarkets.map((store, i) => (
                            <div key={i} className="card-light rounded-2xl p-7 border border-brand-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <div className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-1">{store.tag}</div>
                                        <h3 className="text-2xl font-heading font-black text-brand-950">{store.name}</h3>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-5 pb-5 border-b border-brand-100">
                                    <div>
                                        <div className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-1">Locations</div>
                                        <div className="text-slate-500 text-xs">{store.locations}</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-1">Hours</div>
                                        <div className="text-slate-500 text-xs">{store.hours}</div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                                        <CheckCircle size={16} className="text-brand-GOLD" />
                                        What Makes It Good
                                    </div>
                                    <ul className="space-y-1">
                                        {store.pros.map((pro, j) => (
                                            <li key={j} className="text-slate-500 text-xs flex items-start gap-2">
                                                <span className="text-brand-GOLD mt-0.5">•</span>
                                                <span>{pro}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-3">
                                    <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-1">Best For</div>
                                    <div className="text-slate-500 text-xs">{store.best}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What To Buy Local */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <TrendingDown className="inline text-brand-GOLD mr-2" size={28} />
                        What to Buy Local (Cheap & Fresh)
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Local items in Panama are dramatically cheaper than the US. This is where you actually save money on your grocery budget:
                    </p>
                    <div className="overflow-x-auto mb-6">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4">Item</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Panama Price</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">USA Price</th>
                                    <th className="text-left text-brand-TEAL text-[10px] uppercase tracking-widest py-3 px-3">You Save</th>
                                </tr>
                            </thead>
                            <tbody>
                                {localCheap.map((item, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{item.item}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3 font-bold">{item.localPrice}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{item.usaPrice}</td>
                                        <td className="text-brand-TEAL text-xs py-3 px-3 font-bold">{item.savings}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-brand-TEAL/10 rounded-xl p-5 border border-brand-TEAL/30">
                        <div className="text-brand-TEAL font-black uppercase tracking-widest text-[10px] mb-2">Pro Tip: Shop Twice</div>
                        <p className="text-slate-500 text-sm">
                            Smart expats shop at local markets for fresh produce + fish, then hit Riba Smith for imported items they can\'t find elsewhere. This splits the budget and gets you the best of both worlds.
                        </p>
                    </div>
                </section>

                {/* What\'s Expensive */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        What to Import or Avoid (Expensive)
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        These items cost significantly more in Panama. If you can\'t live without them, budget accordingly:
                    </p>
                    <div className="space-y-3">
                        {importedExpensive.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-4">
                                <div className="flex-1">
                                    <div className="text-brand-950 font-bold text-sm">{item.item}</div>
                                    <div className="text-slate-500 text-xs">{item.reason}</div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <div className="text-brand-GOLD font-black text-sm">{item.markup}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Local Markets */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <MapPin className="inline text-brand-GOLD mr-2" size={28} />
                        Local Markets (Better Prices Than Supermarkets)
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        For the best prices on fresh items, skip the supermarket and go to local markets. Produce is 50–70% cheaper:
                    </p>
                    <div className="space-y-4">
                        {localMarkets.map((market, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <h3 className="text-brand-950 font-bold text-sm mb-3">{market.market}</h3>
                                <div className="space-y-2 text-xs">
                                    <div>
                                        <span className="text-brand-GOLD font-black uppercase tracking-widest">Location: </span>
                                        <span className="text-slate-500">{market.location}</span>
                                    </div>
                                    <div>
                                        <span className="text-brand-GOLD font-black uppercase tracking-widest">What: </span>
                                        <span className="text-slate-500">{market.what}</span>
                                    </div>
                                    <div>
                                        <span className="text-brand-GOLD font-black uppercase tracking-widest">Vibe: </span>
                                        <span className="text-slate-500">{market.vibe}</span>
                                    </div>
                                    <div>
                                        <span className="text-brand-GOLD font-black uppercase tracking-widest">Parking: </span>
                                        <span className="text-slate-500">{market.parking}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Online Ordering */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Ordering Online & Delivery Options
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Not feeling the crowds? These services deliver groceries and food to your home:
                    </p>
                    <div className="space-y-3">
                        {onlineOrdering.map((service, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-4">
                                <div className="flex-1">
                                    <div className="text-brand-950 font-bold text-sm">{service.service}</div>
                                    <div className="text-slate-500 text-xs">{service.what}</div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <div className="text-brand-GOLD font-black text-xs">{service.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 bg-brand-TEAL/10 rounded-xl p-5 border border-brand-TEAL/30">
                        <div className="text-brand-TEAL font-black uppercase tracking-widest text-[10px] mb-2">Amazon to Panama?</div>
                        <p className="text-slate-500 text-sm">
                            Amazon.com.mx ships to Panama (select items only). Expect 1–3 week delivery. Alternative: Forward mail services like AeroPost or MBE let you ship US purchases to a US address, then forward to Panama ($3–8/lb).
                        </p>
                    </div>
                </section>

                {/* Alcohol */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Alcohol Prices & Where to Buy
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {alcohol.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <h3 className="text-brand-950 font-bold text-sm mb-3">{item.item}</h3>
                                <div className="space-y-2">
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Price</div>
                                        <div className="text-slate-500 text-xs font-bold">{item.price}</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Local?</div>
                                        <div className="text-slate-500 text-xs">{item.local === 'Yes' ? 'Produced in Panama' : 'Imported'}</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Notes</div>
                                        <div className="text-slate-500 text-xs">{item.notes}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-GOLD/10 rounded-xl p-5 border border-brand-GOLD/30">
                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-2">Wine Shopping Tip</div>
                        <p className="text-slate-500 text-sm">
                            Riba Smith has the best wine selection in Panama (still limited vs USA). Import tax is high on all spirits. Budget accordingly. Many expats accept paying 30–50% more for wine as part of the cost of living abroad.
                        </p>
                    </div>
                </section>

                {/* Payment */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Payment Methods at Checkout
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {payment.map((method, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <h3 className="text-brand-950 font-bold text-sm mb-3">{method.method}</h3>
                                <div>
                                    <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-1">Acceptance</div>
                                    <div className="text-slate-500 text-xs mb-2">{method.widely}</div>
                                    <div className="text-slate-500 text-xs border-t border-brand-100 pt-2">{method.notes}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <h3 className="text-brand-950 font-bold text-sm mb-3">{faq.q}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Eat Well on Your Budget in Panama
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Food costs are just one piece of your budget. Our advisors help with overall financial planning, housing costs, utilities, and every other expense line item so you can live comfortably in Panama. Let us help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/${lang}/contacto`}
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Plan Your Budget <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/blog/getting-around-panama-city-guide`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Transportation Guide
                        </Link>
                    </div>
                </section>

            </div>
        </article>
    );
}
