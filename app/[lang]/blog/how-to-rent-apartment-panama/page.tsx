import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, MapPin, DollarSign, CheckCircle, AlertTriangle, Search, HelpCircle } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const slug = 'how-to-rent-apartment-panama';
  const domain = 'https://panamarealestatesale.com';
  const canonical = `${domain}/${lang}/blog/${slug}`;

  return {
    title: 'Rent Apartment in Panama 2026: Complete Process, Costs, Neighborhoods',
    description: 'How to rent an apartment in Panama. Finding rentals, neighborhoods, costs, lease terms, landlord tips.',
    keywords: 'rent apartment Panama, apartment rental Panama, apartments Panama City, lease Panama',
    alternates: {
        canonical,
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/how-to-rent-apartment-panama',
            'es': 'https://panamarealestatesale.com/es/blog/how-to-rent-apartment-panama',
            'pt': 'https://panamarealestatesale.com/pt/blog/how-to-rent-apartment-panama',
            'de': 'https://panamarealestatesale.com/de/blog/how-to-rent-apartment-panama',
        },
    },
    openGraph: {
        title: 'Rent Apartment in Panama 2026: Complete Process, Costs, Neighborhoods',
        description: 'How to rent an apartment in Panama. Finding rentals, neighborhoods, costs, lease terms, landlord tips.',
        type: 'article',
        url: canonical,
        images: [{ url: 'https://images.unsplash.com/photo-1430077592969-5dbbbfddb1cd?w=1200&q=80', width: 1200, height: 630, alt: 'Apartment in Panama' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rent Apartment in Panama 2026: Complete Process, Costs, Neighborhoods',
        description: 'How to rent an apartment in Panama. Finding rentals, neighborhoods, costs, lease terms, landlord tips.',
        images: ['https://images.unsplash.com/photo-1430077592969-5dbbbfddb1cd?w=1200&q=80'],
    },
};
}

const searchPlatforms = [
    {
        platform: 'CompraVenta.com',
        audience: 'Local Panamanian landlords',
        language: 'Mostly Spanish (but you can navigate)',
        database: 'Large, diverse inventory',
        bestFor: 'Cheapest unfurnished apartments, local market feel',
        tips: 'Expect to negotiate. Many landlords are flexible. Takes patience to wade through listings.',
    },
    {
        platform: 'Encuentra24.com',
        audience: 'Expat-friendly',
        language: 'English-friendly interface',
        database: 'Large, curated for expats',
        bestFor: 'Best overall balance of selection, price, and ease of use. Many furnished units.',
        tips: 'Trust badges on landlords. Filter by neighborhood. Most listings have good descriptions.',
    },
    {
        platform: 'Facebook Groups',
        audience: 'Direct landlords + expat networks',
        language: 'English (mostly)',
        database: 'Community-driven, updated daily',
        bestFor: '"Expats Panama Rentals", "Panama Real Estate & Rentals", "Boquete Expat Community" — direct landlord listings, often lower fees.',
        tips: 'Message sellers directly. Verify identity. No middleman means better prices. Community recommendations available.',
    },
    {
        platform: 'Real Estate Agents',
        audience: 'Professional agents',
        language: 'English available',
        database: 'Curated listings, professional service',
        bestFor: 'Premium apartments, neighborhoods, full service. Commission usually paid by landlord (FREE for tenant).',
        tips: 'Get an agent familiar with expat rentals. Can help with negotiations, lease review, follow-up.',
    },
    {
        platform: 'Airbnb',
        audience: 'Short-term furnishings',
        language: 'English',
        database: 'Furnished 1–3 month units',
        bestFor: 'First 1–3 months while apartment hunting. $800–1,500/month for 1BR furnished.',
        tips: 'Use as temporary base. Then move to permanent rental after exploring neighborhoods.',
    },
    {
        platform: 'Walk-In Building Reception',
        audience: 'Building administration',
        language: 'Spanish/English mixed',
        database: 'Direct building availability',
        bestFor: 'Specific buildings you like. Sometimes landlords advertise at reception desk first.',
        tips: 'Walk the neighborhood, find buildings you like, ask at reception if units available. No platform fee.',
    },
    {
        platform: 'PanaHome',
        audience: 'Newer expat platform',
        language: 'English',
        database: 'Growing inventory',
        bestFor: 'Emerging expat-focused rental platform. Easier than Spanish sites.',
        tips: 'Newer platform, smaller database, but growing. Good for expat-friendly landlords.',
    },
];

const apartmentTypes = [
    {
        type: 'Unfurnished',
        price: 'Cheapest option',
        description: 'Empty shell. No furniture, appliances, or fixtures. You buy everything.',
        termLength: 'Usually 6–12 month leases (landlords prefer longer commitments)',
        bestFor: 'Those planning to stay 12+ months, those with shipping household items, budget-conscious tenants',
        notes: 'Requires upfront furniture investment ($1,000–$5,000+ for apartment basics). More complex move-in.',
    },
    {
        type: 'Furnished',
        price: '20–30% premium over unfurnished',
        description: 'Includes beds, sofas, kitchen table, appliances (fridge, stove, AC). Ready to move in.',
        termLength: 'Flexible: 6 months, 12 months, or longer',
        bestFor: 'Most expats. Short-notice moves. Those without household items. Popular choice.',
        notes: 'Standard for expat rentals. You just bring clothes and personal items.',
    },
    {
        type: 'Short-Term Furnished',
        price: '30–50% premium over unfurnished',
        description: 'Month-to-month fully furnished. Like Airbnb but with long-term discount rates.',
        termLength: 'Month-to-month, flexible cancellation',
        bestFor: 'First 1–3 months while exploring neighborhoods. Flexibility priority.',
        notes: 'More expensive but no long-term commitment. Perfect for reconnaissance.',
    },
];

const pricingGuide = [
    {
        area: 'Panama City (Mid-Range)',
        oneBedroomUnfurnished: '$600–$1,000/mo',
        oneBedroomFurnished: '$800–$1,400/mo',
        twoBedroomUnfurnished: '$900–$1,500/mo',
        twoBedroomFurnished: '$1,200–$2,000/mo',
        notes: 'El Cangrejo, Paitilla, Pereira — popular expat neighborhoods.',
    },
    {
        area: 'Panama City (Luxury)',
        oneBedroomUnfurnished: '$1,200–$2,000/mo',
        oneBedroomFurnished: '$1,500–$2,500/mo',
        twoBedroomUnfurnished: '$1,800–$3,000/mo',
        twoBedroomFurnished: '$2,200–$4,000/mo',
        notes: 'Punta Pacifica, Casco Viejo, Amador — premium locations.',
    },
    {
        area: 'Boquete',
        oneBedroomUnfurnished: '$400–$700/mo',
        oneBedroomFurnished: '$500–$900/mo',
        twoBedroomUnfurnished: '$600–$1,000/mo',
        twoBedroomFurnished: '$800–$1,200/mo',
        notes: 'Cool climate, expat community, much cheaper than city.',
    },
    {
        area: 'Coronado',
        oneBedroomUnfurnished: '$500–$850/mo',
        oneBedroomFurnished: '$600–$1,000/mo',
        twoBedroomUnfurnished: '$800–$1,400/mo',
        twoBedroomFurnished: '$1,000–$1,800/mo',
        notes: 'Beach lifestyle, gated communities, 1h40m from city.',
    },
];

const landlordRequirements = [
    { requirement: 'Security Deposit', typical: '1–2 months of rent', purpose: 'Covers damages or lease violations' },
    { requirement: 'First Month Rent', typical: 'Due before move-in', purpose: 'Obvious — first month of occupancy' },
    { requirement: 'Passport Copy', typical: 'Certified or notarized', purpose: 'Identity verification' },
    { requirement: 'Proof of Income', typical: 'Bank statements (3–6 months) or pension statement', purpose: 'Verify ability to pay' },
    { requirement: 'Reference Letter', typical: 'Sometimes, not always', purpose: 'Previous landlord or employer reference' },
];

const rentalProcess = [
    {
        step: '1. Visit apartments in person',
        details: 'Never send money without seeing the apartment. Walk the neighborhood. Check water pressure, AC function, hot water. Look for mold, odors, cockroaches.',
    },
    {
        step: '2. Negotiate the price',
        details: 'ALWAYS negotiate. This is normal in Panama. A 5–15% reduction is reasonable. Say: "This is my budget" or "What\'s your best price?" Landlords expect this.',
    },
    {
        step: '3. Review the lease carefully',
        details: 'If in Spanish, get a translation (many expat groups can help). Confirm: lease term, rent amount, due date, utilities included, late fees, termination clause.',
    },
    {
        step: '4. Confirm what\'s included',
        details: 'Ask explicitly: "Are utilities included?" "Is WiFi included?" "What about HOA fees?" "Is parking included?" Get it in writing.',
    },
    {
        step: '5. Get receipts for ALL payments',
        details: 'Every deposit, rent payment, fee — insist on written receipt. Keep all documentation for your records.',
    },
    {
        step: '6. Document apartment condition on move-in',
        details: 'Take photos and video of every room. Document existing damage, stains, broken fixtures. Send list to landlord before final move-in approval. Protects your deposit.',
    },
];

const redFlags = [
    { flag: 'Landlord refuses to show apartment in person', why: 'Major scam risk. Never send money unseen.' },
    { flag: 'Pressure to sign immediately ("someone else is interested")', why: 'Classic pressure tactic. Walk away. Better apartments exist.' },
    { flag: 'No written lease (verbal agreement only)', why: 'Leaves you unprotected. Disputes are your word vs theirs.' },
    { flag: 'Requesting full year rent upfront', why: 'Unusual. Standard is 2–3 months upfront (deposit + first month).' },
    { flag: 'Inconsistent maintenance (water pressure issues, broken AC, no hot water)', why: 'Signals neglectful landlord. Problems won\'t be fixed during your lease.' },
    { flag: 'No gate/security in building', why: 'Safety consideration. Condo buildings should have 24/7 security.' },
    { flag: 'Landlord is evasive about lease terms or costs', why: 'If they won\'t explain clearly, they\'re hiding something.' },
    { flag: 'Apartment smells musty or shows signs of mold', why: 'Tropical humidity problem. Can cause respiratory issues. Avoid.' },
    { flag: 'Building without backup generator', why: 'Panama has rare outages, but when they occur, backup power is crucial.' },
];

const expat_tips = [
    {
        title: 'First 1–3 Months: Stay in Furnished Short-Term',
        description: 'Get a month-to-month furnished apartment via Airbnb or short-term rental. This lets you explore neighborhoods, test commutes, meet other expats, and see where you actually want to live long-term. Only THEN sign a 12-month lease.',
    },
    {
        title: 'Air Conditioning is Essential',
        description: 'In Panama City and coastal areas, AC is non-negotiable. Check that it works properly, not just "present." Test it. Listen for strange noises. Ask landlord when it was serviced last.',
    },
    {
        title: 'Generator/Backup Power Matters',
        description: 'Premium buildings have backup generators. When rare outages occur (Panama is stable, but it happens), generators mean lights, AC, and water pumps keep working. Worth the premium in a building with backup power.',
    },
    {
        title: 'Parking is Extra (and Essential if You Drive)',
        description: 'If you plan to own a car, confirm parking is included or know the cost ($50–$150/month typical). Street parking is risky in Panama City neighborhoods.',
    },
    {
        title: 'Ask About HOA Fees — Common Surprise',
        description: 'Most condos have monthly HOA (homeowners association) fees: $100–$400/month typical. Sometimes included in advertised rent, sometimes separate. ASK before signing. This can add 20% to your monthly housing cost.',
    },
    {
        title: 'Furnished ≠ Equipped',
        description: 'Furnished means beds and sofas, but you may need to buy: bedding, towels, kitchen pots/pans, hangers, cleaning supplies, etc. Budget $200–$500 for basic move-in supplies.',
    },
    {
        title: 'Negotiate Lease Term',
        description: 'If you want flexibility, offer a higher monthly rent for a shorter lease. Example: Pay $1,100/mo for 6 months instead of $1,000/mo for 12 months. Landlords often accept this.',
    },
    {
        title: 'Join Expat Facebook Groups BEFORE Searching',
        description: 'Groups like "Expats Panama Rentals" have community knowledge. People post current listings, neighborhood advice, landlord warnings. Get the inside scoop before committing.',
    },
];

const faqs = [
    {
        q: 'How much should I negotiate on rent?',
        a: 'A 5–15% reduction is standard and expected. Start at 10–15% below asking price. Landlords anticipate this. Negotiate in person, not via email. Be friendly — you\'re going to be neighbors for a year.',
    },
    {
        q: 'What if I break the lease early?',
        a: 'Most leases require 30–60 days notice and forfeit of one month\'s rent or your deposit. Some landlords are flexible if you find a replacement tenant. Discuss this BEFORE signing. Get it in writing if negotiated.',
    },
    {
        q: 'Are utilities (electricity, water, internet) usually included?',
        a: 'Usually NOT included in the advertised rent. Electricity: $60–$150/month typical. Water: $10–$30/month. Internet: $50–$100/month for good service. Always ask explicitly.',
    },
    {
        q: 'How long does it take to find an apartment?',
        a: 'If you\'re searching remotely: 2–4 weeks of emails/video calls. If you\'re in Panama: 3–7 days of in-person visits. Best strategy: Arrive on Airbnb (1–3 months), explore, then sign a lease once you know your neighborhood.',
    },
    {
        q: 'Can I rent as a foreigner without a Panama ID?',
        a: 'Yes. Passport + proof of income is typically enough. Some landlords prefer renting to foreigners (often more reliable than local tenants). You do NOT need permanent residency to rent.',
    },
];

export default async function HowToRentApartmentPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1570129477492-45b003d3dba6?w=1600&q=80"
                        alt="Finding apartment in Panama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        HOUSING GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        How to Find & Rent<br />an Apartment in Panama
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Complete guide to searching platforms, prices, landlord requirements, negotiation tactics, red flags, and insider tips for expat apartment hunting.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Finding an apartment in Panama is straightforward if you know where to look, what prices are realistic, and how to negotiate with landlords. Most expats succeed in 3–7 days of in-person visits (or 2–4 weeks if searching remotely).
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        This guide covers the best platforms (CompraVenta, Encuentra24, Facebook groups), what landlords require, the rental process step-by-step, pricing by neighborhood, and critical red flags to avoid. Plus insider tips from seasoned expat renters.
                    </p>
                </section>

                {/* Where to Search */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Search className="inline text-brand-GOLD mr-2" size={28} />
                        Where to Search for Apartments
                    </h2>
                    <div className="space-y-6">
                        {searchPlatforms.map((platform, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-8 border-l-4 border-brand-GOLD">
                                <h3 className="text-2xl font-heading font-bold text-brand-950 mb-2">{platform.platform}</h3>
                                <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                                    <div>
                                        <p className="font-bold text-brand-950 text-xs uppercase mb-1">Audience</p>
                                        <p className="text-slate-700">{platform.audience}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-950 text-xs uppercase mb-1">Language</p>
                                        <p className="text-slate-700">{platform.language}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-950 text-xs uppercase mb-1">Database Size</p>
                                        <p className="text-slate-700">{platform.database}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-950 text-xs uppercase mb-1">Best For</p>
                                        <p className="text-slate-700">{platform.bestFor}</p>
                                    </div>
                                </div>
                                <p className="text-slate-700"><strong>Tips:</strong> {platform.tips}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Types of Rentals */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Home className="inline text-brand-GOLD mr-2" size={28} />
                        Types of Rentals: Unfurnished, Furnished, Short-Term
                    </h2>
                    <div className="space-y-6">
                        {apartmentTypes.map((type, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                                <h3 className="text-2xl font-heading font-bold text-brand-950 mb-2">{type.type}</h3>
                                <p className="text-brand-600 font-semibold mb-4">{type.price}</p>
                                <p className="text-slate-700 mb-4">{type.description}</p>
                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="text-sm font-bold text-brand-950 uppercase mb-1">Lease Length</p>
                                        <p className="text-slate-700">{type.termLength}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-brand-950 uppercase mb-1">Best For</p>
                                        <p className="text-slate-700">{type.bestFor}</p>
                                    </div>
                                </div>
                                <p className="text-slate-700"><strong>Notes:</strong> {type.notes}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing Guide */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Pricing by Location & Type (2026)
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-brand-950 text-white">
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Area</th>
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">1BR Unfurnished</th>
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">1BR Furnished</th>
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">2BR Unfurnished</th>
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">2BR Furnished</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricingGuide.map((guide, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-50'}>
                                        <td className="border border-brand-100 px-4 py-3 font-semibold text-brand-950">{guide.area}</td>
                                        <td className="border border-brand-100 px-4 py-3 text-slate-700">{guide.oneBedroomUnfurnished}</td>
                                        <td className="border border-brand-100 px-4 py-3 text-slate-700">{guide.oneBedroomFurnished}</td>
                                        <td className="border border-brand-100 px-4 py-3 text-slate-700">{guide.twoBedroomUnfurnished}</td>
                                        <td className="border border-brand-100 px-4 py-3 text-slate-700">{guide.twoBedroomFurnished}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-slate-600 text-sm mt-4 italic">
                        Note: Prices fluctuate based on building amenities, neighborhood popularity, and market conditions. These are typical ranges for 2026.
                    </p>
                </section>

                {/* Landlord Requirements */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <CheckCircle className="inline text-brand-GOLD mr-2" size={28} />
                        What Landlords Require
                    </h2>
                    <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                        <p className="text-slate-700 mb-6 text-lg">
                            Before signing, landlords typically ask for these items. Total upfront usually equals 2–3 months of rent:
                        </p>
                        <div className="space-y-4">
                            {landlordRequirements.map((item, idx) => (
                                <div key={idx} className="flex gap-4 pb-4 border-b border-brand-100 last:border-b-0">
                                    <div className="flex-shrink-0">
                                        <div className="text-lg font-bold text-brand-GOLD">{idx + 1}</div>
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-bold text-brand-950 mb-1">{item.requirement}</h4>
                                        <p className="text-slate-700 mb-1"><strong>Typical:</strong> {item.typical}</p>
                                        <p className="text-slate-600 text-sm"><strong>Purpose:</strong> {item.purpose}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 bg-white rounded p-4 border-l-4 border-brand-GOLD">
                            <p className="text-slate-700"><strong>Total Upfront Cost:</strong> Typically 2–3 months of rent (security deposit + first month + sometimes last month or admin fees).</p>
                        </div>
                    </div>
                </section>

                {/* The Rental Process */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        The Step-by-Step Rental Process
                    </h2>
                    <div className="space-y-6">
                        {rentalProcess.map((process, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                                <h3 className="text-xl font-heading font-bold text-brand-950 mb-3">{process.step}</h3>
                                <p className="text-slate-700 leading-relaxed">{process.details}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Red Flags */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <AlertTriangle className="inline text-brand-GOLD mr-2" size={28} />
                        Red Flags to Avoid
                    </h2>
                    <div className="space-y-4">
                        {redFlags.map((item, idx) => (
                            <div key={idx} className="bg-red-50 rounded-lg p-6 border-l-4 border-red-400">
                                <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                                    <span className="text-xl">⚠️</span>
                                    {item.flag}
                                </h3>
                                <p className="text-red-800"><strong>Why:</strong> {item.why}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Expat Tips */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Insider Tips for Expat Renters
                    </h2>
                    <div className="space-y-6">
                        {expat_tips.map((tip, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                                <h3 className="text-xl font-heading font-bold text-brand-950 mb-3">{tip.title}</h3>
                                <p className="text-slate-700 leading-relaxed">{tip.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQs */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <HelpCircle className="inline text-brand-GOLD mr-2" size={28} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                                <h3 className="text-lg font-heading font-bold text-brand-950 mb-3">{faq.q}</h3>
                                <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-brand-950 rounded-lg p-12 text-center">
                    <h2 className="text-white text-3xl font-heading font-bold mb-4">Ready to Find Your Panama Home?</h2>
                    <p className="text-brand-300 text-lg mb-8">
                        Our team can help guide you through the rental process and connect you with vetted landlords and neighborhoods.
                    </p>
                    <Link
                        href={`/${lang}/contacto`}
                        className="inline-block bg-brand-GOLD text-brand-950 font-heading font-bold py-4 px-8 rounded-lg hover:bg-brand-GOLD/90 transition"
                    >
                        Get Rental Guidance
                    </Link>
                </section>

            </div>
        </article>
    );
}
