import type { Metadata } from 'next';
import Link from 'next/link';
import { Luggage, Heart, AlertTriangle, Package, ShoppingCart, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'What to Pack When Moving to Panama 2026: The Complete Expat Packing List',
    description:
        'Complete packing list for moving to Panama. What to bring, what to leave behind, clothing, medications, electronics, documents, financial prep. Smart packing for tropical climate.',
    keywords:
        'moving to panama what to bring, packing list panama expat, what to pack panama, relocation panama checklist, panama moving guide',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/what-to-pack-moving-to-panama',
    },
    openGraph: {
        title: 'What to Pack When Moving to Panama 2026: The Complete Expat Packing List',
        description:
            'Everything you need to know about what to pack when moving to Panama — clothing, documents, electronics, medications, and what you don\'t need to bring.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/what-to-pack-moving-to-panama',
    },
};

const clothingDos = [
    'Light cotton/linen shirts (5–7 pieces)',
    'Shorts (3–4 pairs, comfortable)',
    'Lightweight dresses/skirts',
    'Swimsuits (2–3, you\'ll use them)',
    'Rain jacket or lightweight poncho (waterproof)',
    'Comfortable walking shoes (broken in)',
    'Flip-flops or sandals (multiple pairs)',
    'Wide-brimmed hat (sun protection)',
    'Sunglasses (UV protection critical)',
    'Light cardigan or fleece (for AC in malls/offices)',
    'Smart-casual outfit (restaurants, business)',
    'One or two long-sleeve shirts (sun protection)',
    'Moisture-wicking underwear and socks',
    'Lightweight pajamas',
];

const clothingDonts = [
    'Winter coats (useless in tropical climate)',
    'Heavy sweaters or fleece',
    'Snow boots or heavy shoes',
    'Wool clothing (too hot, holds odor)',
    'Thick denim jeans (uncomfortable, unworn)',
    'Long sleeves as daily wear (too warm)',
    'Formal suit jackets (office culture is smart-casual)',
    'Thermal underwear',
    'Down jackets or insulated anything',
    'Leather jackets',
];

const medicationsAndHealth = [
    {
        item: 'Prescription Medications',
        bring: '3–6 month supply recommended',
        why: 'Most US prescriptions available in Panama, but easier to have stock. Many brands may differ locally.',
        tips: 'Get international prescription letter from US doctor. Keep in original bottles with labels.',
    },
    {
        item: 'OTC Medications (personal favorites)',
        bring: 'Full stock for first month',
        why: 'Many available in Panama pharmacies (Arrocha, Super Fármacias), but your preferred brands/dosages may differ.',
        tips: 'Bring: Ibuprofen, acetaminophen, antacids, cold meds, allergy meds, pain relief.',
    },
    {
        item: 'Sunscreen',
        bring: 'FULL stock — buy before moving',
        why: 'Much more expensive in Panama than USA. Tropical sun is intense.',
        tips: 'SPF 50+ recommended. Bring 3–6 months\' worth. Double what you think you\'ll need.',
    },
    {
        item: 'Mosquito Repellent',
        bring: 'Personal preference brand (DEET-based)',
        why: 'Available locally, but your preferred brand may differ. DEET 20%+ recommended.',
        tips: 'Bring your favorite. Dengue is present (though manageable). Repellent is important.',
    },
    {
        item: 'Vitamins & Supplements',
        bring: 'Full supply (6 months+)',
        why: 'Less variety and higher prices in Panama.',
        tips: 'Bring: Multivitamins, vitamin D (less sun vitamin D synthesis in tropical areas), probiotics.',
    },
    {
        item: 'Water Filter Pitcher',
        bring: 'Brita-style pitcher if you prefer filtered water',
        why: 'Tap water is technically safe in Panama City, but many expats prefer filtered for drinking/cooking.',
        tips: 'Not essential, but convenient. Reduces bottled water purchases.',
    },
];

const electronicsAndTech = [
    {
        item: 'Laptop & Charger',
        why: 'Essential for work, communication, banking.',
        notes: 'Panama uses 110V US-style outlets — no adapter needed.',
    },
    {
        item: 'Phone & Charging Cable',
        why: 'Essential. Get local SIM card for cellular data.',
        notes: 'US-style outlets — chargers work as-is.',
    },
    {
        item: 'Tablet (optional)',
        why: 'Good for reading, browsing, entertainment.',
        notes: 'Works with US charger, no adapters needed.',
    },
    {
        item: 'Surge Protector (3–4 outlet)',
        why: 'Recommended. Power fluctuations can occur in Panama.',
        notes: 'Protects against brief outages and voltage spikes. $10–20 investment, worthwhile.',
    },
    {
        item: 'UPS (Uninterruptible Power Supply)',
        why: 'For desktop computers or home office — protects during brief outages.',
        notes: 'Optional but recommended if remote working. Keeps WiFi/modem running during outages.',
    },
    {
        item: 'External Hard Drive / Cloud Backup',
        why: 'Critical for photos, documents, important files.',
        notes: 'Don\'t risk losing memories or documents. Back everything up before/after moving.',
    },
    {
        item: 'USB Cable & Adapter Set',
        why: 'Multiple charging ports, data transfer.',
        notes: 'Bring extras — you\'ll use them.',
    },
    {
        item: 'HDMI Cable',
        why: 'If you plan to connect to TV for streaming.',
        notes: 'Optional but handy for entertainment.',
    },
];

const householdAndComfort = [
    {
        category: 'DO NOT Ship',
        items: ['Large appliances (refrigerators, ovens, washers)', 'Bulky furniture (sofas, beds)', 'Heavy electronics (TVs, desktop computers)'],
        why: 'Prohibitively expensive to ship. Local prices are competitive. Not worth the logistics.',
    },
    {
        category: 'DO Bring',
        items: [
            'Quality kitchen knives (cheap options locally are low quality)',
            'Sentimental items (photos, family heirlooms)',
            'Quality bed linens (if you care about thread count)',
            'Books (if you\'re a big reader — limited English bookstore selection)',
            'Coffee maker (if specific type)',
            'Preferred cooking utensils/gadgets',
        ],
        why: 'Personal comfort items. Local quality varies. Worth the luggage space.',
    },
];

const documentsAndLegal = [
    { doc: 'Passport', copies: '2 certified copies', apostille: 'No' },
    { doc: 'Birth Certificate', copies: '2 copies', apostille: 'YES (if needed for residency)' },
    { doc: 'Marriage Certificate', copies: '1–2 copies', apostille: 'YES (if applicable)' },
    { doc: 'Divorce Decree', copies: '1–2 copies', apostille: 'YES (if applicable)' },
    { doc: 'Driver\'s License', copies: '1 copy', apostille: 'No' },
    { doc: 'Social Security Card', copies: '1 copy', apostille: 'No' },
    { doc: 'Medical Records & Vaccination Records', copies: '1 copy', apostille: 'No' },
    { doc: 'Proof of Income (pension letter, bank statements)', copies: '3–6 months', apostille: 'No' },
    { doc: 'Insurance Documents', copies: '1 copy', apostille: 'No' },
    { doc: 'Property Deeds (if applicable)', copies: '1 copy', apostille: 'YES (if international transaction)' },
];

const financialPrep = [
    {
        step: 'Get Charles Schwab Debit Card',
        why: 'Reimburses ALL ATM fees worldwide. Saves hundreds in Panama.',
        when: 'BEFORE moving (takes 5–10 days to arrive)',
    },
    {
        step: 'Get Wise Card as Backup',
        why: 'Alternative debit card, low fees, multi-currency support.',
        when: 'Create Wise account before moving. Order card (can be shipped to Panama).',
    },
    {
        step: 'Notify US Bank of Move',
        why: 'Prevents card blocks when using in Panama.',
        when: 'Call before moving. Tell them Panama address.',
    },
    {
        step: 'Carry $200–300 USD Cash',
        why: 'For first days until bank account open and ATM access confirmed.',
        when: 'Bring in your bag. Not in checked luggage.',
    },
    {
        step: 'Get Tax ID Letter (if receiving income)',
        why: 'Proof of income for Panama bank account opening, housing applications.',
        when: 'Get from US bank before moving.',
    },
];

const locallyAvailable = [
    'Furniture (beds, sofas, tables — buy locally or used)',
    'Most appliances (TVs, refrigerators, microwaves)',
    'Personal care items (shampoo, soap, toothpaste — all brands available)',
    'Baby items (Pampers, formula — all available)',
    'Clothing (if you need extras in Panama)',
    'Kitchen basics (pots, pans, utensils)',
    'Bedding basics (sheets, pillows)',
    'Towels',
];

const hardToFind = [
    'Specific US craft beers (limited selection locally)',
    'Specialty US foods (gluten-free niche items, regional brands)',
    'Specialty cheeses (limited beyond basic types)',
    'Specific supplement brands (limited variety)',
    'Large size clothing (US Large = Panama XL — limited selection for tall people)',
    'Specific makeup brands (availability varies)',
    'Niche health products',
];

const boqueteAddons = [
    {
        item: '2–3 long-sleeve shirts',
        why: 'Boquete is cool (65–75°F). Need layers in mornings/evenings.',
        wear: 'Light long-sleeves, not winter wear.',
    },
    {
        item: 'Light fleece or cardigan',
        why: 'Morning/evening chill. Also useful for AC in Boquete offices.',
        wear: 'Lightweight fleece, not heavy winter fleece.',
    },
    {
        item: 'Closed-toe hiking/walking shoes',
        why: 'Cool climate means more outdoor activity. Trails around Boquete.',
        wear: 'Comfortable hiking-style shoes.',
    },
    {
        item: 'Rain gear (essential)',
        why: 'Boquete is cloud forest. More rain/mist than city.',
        wear: 'Waterproof jacket, not just rain poncho.',
    },
];

const faqs = [
    {
        q: 'Should I ship my furniture to Panama?',
        a: 'No. Not worth the cost and logistics. Furniture is affordable locally. IKEA-style options available. Used furniture markets active. Buying locally saves money and headaches. Only exception: highly sentimental furniture. Even then, consider just replacing it.',
    },
    {
        q: 'Can I use my US appliances in Panama?',
        a: 'Yes, Panama uses 110V US-style outlets (same as USA). All US appliances work plug-and-play. No adapters needed. However, don\'t ship appliances — buy locally. Cost/logistics don\'t justify shipping.',
    },
    {
        q: 'What\'s the best way to bring lots of items?',
        a: 'Option 1: Ship a container (expensive, $3,000–8,000+ for shipping). Option 2: Bring suitcases (limited, 2–3 per person). Option 3: Ship boxes via international postal service (cheaper but slow — 2–4 weeks). Option 4: Buy locally after arrival. Most expats use Options 3 and 4 combined.',
    },
    {
        q: 'Do I need international plug adapters?',
        a: 'No! Panama uses US-style 110V outlets. Bring your chargers, they work directly. This is a huge advantage — no adapters needed for US electronics.',
    },
    {
        q: 'What medications are hard to find in Panama?',
        a: 'Most common US medications are available. Harder to find: very specific supplement brands, niche ADHD meds (some restrictions), certain pain medications (prescription only). Bring 3–6 months supply of any chronic meds to be safe.',
    },
    {
        q: 'Should I bring my car?',
        a: 'Most expats don\'t. Import costs are high (taxes, fees). Buying a used car locally is easier and cheaper. Public transportation + Uber sufficient for many. If you want a car, buy in Panama or import with attorney help (expensive).',
    },
    {
        q: 'What documents do I absolutely need to bring?',
        a: 'Passport (original + 2 copies), birth certificate (with apostille if applying for residency), driver\'s license, Social Security card. Bank statements proving income (last 3–6 months). Insurance documents. Medical records. Anything else useful for visas/residency applications. Store scans in cloud (Google Drive, Dropbox) as backup.',
    },
    {
        q: 'How much luggage can I bring?',
        a: 'Depends on airline. Typically 2 checked bags (50 lbs each) + 1 carry-on. Some international flights allow 3 checked. Check your airline. If bringing lots, ship additional boxes separately.',
    },
];

export default async function WhatToPackPanamaPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
                        alt="Packing for Panama move"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        MOVING CHECKLIST · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        What to Pack<br />When Moving to Panama
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Complete packing list for your Panama relocation: what to bring, what to leave behind, financial prep, documents, and smart packing for tropical climate.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Panama is tropical (hot and humid in city, cool in highlands). Think lightweight. You don't need winter clothes, heavy shoes, or bulky furniture. Most things are available locally — often cheaper than shipping.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        This guide covers what to pack, what to skip, financial preparation, essential documents, and how to minimize shipping costs. Whether you're moving with 3 suitcases or shipping a container, you'll find practical details here.
                    </p>
                </section>

                {/* Climate First */}
                <section className="reveal-on-scroll bg-brand-50 rounded-lg p-8 border-l-4 border-brand-GOLD">
                    <h2 className="text-white text-2xl font-heading font-bold mb-4">Climate First: Tropical vs. Highlands</h2>
                    <div className="space-y-4 text-slate-700">
                        <div>
                            <p className="font-bold text-brand-950 mb-2">Panama City & Coastal Areas (Hot & Humid)</p>
                            <p>85–95°F year-round. Humidity 50–90%. Think lightweight cotton, shorts, breathable fabrics. Air conditioning is essential. No winter clothes needed.</p>
                        </div>
                        <div>
                            <p className="font-bold text-brand-950 mb-2">Boquete & Highlands (Cool Year-Round)</p>
                            <p>65–78°F even in warm months. May need a light jacket for mornings/evenings. Bring 2–3 long-sleeve shirts and light fleece. No heavy winter gear — still tropical.</p>
                        </div>
                    </div>
                </section>

                {/* Clothing */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Luggage className="inline text-brand-GOLD mr-2" size={28} />
                        Clothing: DO & DON'T
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                            <h3 className="text-xl font-heading font-bold text-brand-950 mb-6 text-green-700">DO Bring</h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                {clothingDos.map((item, idx) => (
                                    <li key={idx}>✓ {item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                            <h3 className="text-xl font-heading font-bold text-brand-950 mb-6 text-red-700">DON'T Bring</h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                {clothingDonts.map((item, idx) => (
                                    <li key={idx}>✗ {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 bg-brand-50 rounded-lg p-8 border border-brand-100">
                        <h4 className="text-lg font-heading font-bold text-brand-950 mb-3">Business Dress Code (if applicable)</h4>
                        <p className="text-slate-700 mb-3">
                            Panama office culture is <strong>smart-casual</strong>. Bring 1–2 collared shirts, business casual pants/skirts, and comfortable dress shoes. No need for full formal suits unless working in banking/law (even then, smart-casual is norm).
                        </p>
                        <p className="text-slate-700">
                            <strong>Key:</strong> Light fabric suits if needed (linen or cotton blends). Air-conditioned offices run cold, so a light blazer is useful.
                        </p>
                    </div>
                </section>

                {/* Medications & Health */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Package className="inline text-brand-GOLD mr-2" size={28} />
                        Medications & Health Items
                    </h2>
                    <div className="space-y-6">
                        {medicationsAndHealth.map((item, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                                <h3 className="text-xl font-heading font-bold text-brand-950 mb-3">{item.item}</h3>
                                <p className="text-brand-600 font-semibold mb-3">Bring: {item.bring}</p>
                                <p className="text-slate-700 mb-3"><strong>Why:</strong> {item.why}</p>
                                <p className="text-slate-700"><strong>Tips:</strong> {item.tips}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Electronics & Tech */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Package className="inline text-brand-GOLD mr-2" size={28} />
                        Electronics & Technology
                    </h2>
                    <div className="bg-brand-50 rounded-lg p-8 border border-brand-100 mb-6">
                        <p className="text-slate-700 text-lg font-semibold mb-4">
                            🎉 HUGE ADVANTAGE: Panama uses US-style 110V outlets. No adapters needed for US electronics!
                        </p>
                        <p className="text-slate-700">
                            Your US chargers, laptops, phones, and appliances work directly. This alone saves luggage space and money compared to other countries.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {electronicsAndTech.map((item, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-6 border border-brand-100">
                                <h3 className="font-bold text-brand-950 mb-2">{item.item}</h3>
                                <p className="text-slate-700 text-sm mb-2"><strong>Why:</strong> {item.why}</p>
                                <p className="text-slate-700 text-sm"><strong>Notes:</strong> {item.notes}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Household & Furniture */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Home className="inline text-brand-GOLD mr-2" size={28} />
                        Household Items & Furniture
                    </h2>
                    <div className="space-y-6">
                        {householdAndComfort.map((section, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                                <h3 className="text-xl font-heading font-bold text-brand-950 mb-3">{section.category}</h3>
                                <ul className="space-y-2 text-slate-700 mb-4">
                                    {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="flex gap-3">
                                            <span className="text-brand-GOLD font-bold">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-slate-700"><strong>Why:</strong> {section.why}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Documents & Legal */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Luggage className="inline text-brand-GOLD mr-2" size={28} />
                        Essential Documents
                    </h2>
                    <div className="overflow-x-auto mb-6">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-brand-950 text-white">
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Document</th>
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Copies to Bring</th>
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Apostille?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {documentsAndLegal.map((item, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-50'}>
                                        <td className="border border-brand-100 px-4 py-3 font-semibold text-brand-950">{item.doc}</td>
                                        <td className="border border-brand-100 px-4 py-3 text-slate-700">{item.copies}</td>
                                        <td className="border border-brand-100 px-4 py-3 text-slate-700">{item.apostille}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                        <h4 className="text-lg font-heading font-bold text-brand-950 mb-3">Critical Tips</h4>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex gap-3">
                                <span className="text-brand-GOLD font-bold">•</span>
                                <span><strong>Store everything in cloud:</strong> Upload scans to Google Drive or Dropbox as backup. If originals lost, you have digital copies.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-GOLD font-bold">•</span>
                                <span><strong>Get apostilles BEFORE moving:</strong> If applying for residency or visas, some documents need official apostille certification. Do this in US — it's harder in Panama.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-GOLD font-bold">•</span>
                                <span><strong>Keep originals safe:</strong> Lock documents in safe deposit box or home safe in Panama.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Financial Prep */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Financial Preparation
                    </h2>
                    <div className="space-y-6">
                        {financialPrep.map((item, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-8 border-l-4 border-brand-GOLD">
                                <h3 className="text-xl font-heading font-bold text-brand-950 mb-3">{item.step}</h3>
                                <p className="text-slate-700 mb-3"><strong>Why:</strong> {item.why}</p>
                                <p className="text-slate-700"><strong>When:</strong> {item.when}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What's Available Locally */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <ShoppingCart className="inline text-brand-GOLD mr-2" size={28} />
                        What You Can Buy Locally (Don't Pack)
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                        <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                            <h3 className="text-lg font-heading font-bold text-brand-950 mb-4">Easy to Find & Affordable</h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                {locallyAvailable.map((item, idx) => (
                                    <li key={idx} className="flex gap-2">
                                        <span className="text-brand-GOLD">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-red-50 rounded-lg p-8 border border-red-200">
                            <h3 className="text-lg font-heading font-bold text-red-900 mb-4">Hard to Find / Expensive</h3>
                            <ul className="space-y-2 text-red-800 text-sm">
                                {hardToFind.map((item, idx) => (
                                    <li key={idx} className="flex gap-2">
                                        <span className="text-red-500">✗</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                        <p className="text-slate-700 text-lg">
                            <strong>Strategy:</strong> Bring special items (favorite supplements, specific brand electronics, sentimental things). Buy everything else locally. Saves luggage space, shipping cost, and you get familiar with local shopping.
                        </p>
                    </div>
                </section>

                {/* Boquete Specific */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Heart className="inline text-brand-GOLD mr-2" size={28} />
                        If You're Moving to Boquete (Highlands)
                    </h2>
                    <p className="text-slate-700 text-lg mb-6">
                        Boquete's cool climate (65–78°F) is different from Panama City's heat. You'll need slightly different packing:
                    </p>
                    <div className="space-y-4">
                        {boqueteAddons.map((item, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-6 border border-brand-100">
                                <h3 className="font-bold text-brand-950 mb-2">{item.item}</h3>
                                <p className="text-slate-700 text-sm mb-2"><strong>Why:</strong> {item.why}</p>
                                <p className="text-slate-700 text-sm"><strong>Style:</strong> {item.wear}</p>
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

                {/* Final Checklist */}
                <section className="reveal-on-scroll bg-brand-50 rounded-lg p-12 border border-brand-100">
                    <h2 className="text-white text-2xl font-heading font-bold mb-6">Pre-Move Checklist</h2>
                    <div className="space-y-3 text-slate-700">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded" />
                            <span>Get Charles Schwab debit card (or Wise) — order before moving</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded" />
                            <span>Notify US bank of Panama move</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded" />
                            <span>Get apostilles on documents (if needed for residency)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded" />
                            <span>Gather all document copies; scan & upload to cloud</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded" />
                            <span>Get 3–6 month supply of prescription medications</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded" />
                            <span>Stock up on sunscreen (it's expensive in Panama)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded" />
                            <span>Pack lightweight, breathable clothing (leave winter coats)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded" />
                            <span>Carry $200–300 USD cash (not in checked luggage)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded" />
                            <span>Back up all important files to cloud before leaving</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded" />
                            <span>Research neighborhoods/view apartments remotely</span>
                        </label>
                    </div>
                </section>

                {/* Moving Companies & Services */}
                <section className="reveal-on-scroll bg-brand-50 border border-brand-100 rounded-2xl p-8 my-12">
                    <h2 className="font-heading text-2xl font-bold text-brand-950 mb-2">Professional Movers & Packing Services</h2>
                    <p className="text-brand-700 mb-6">Whether you're minimizing what you bring or shipping a full household, professional movers can handle the logistics. These services specialize in international relocations and can help you pack strategically, manage customs, and get everything to Panama safely.</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white rounded-xl border border-brand-100 p-5">
                            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">International Movers & Packing</h3>
                            <ul className="text-brand-700 space-y-2 text-sm">
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>AGS Worldwide Movers</strong> – Full packing service, handles fragile items, disassembly/reassembly included</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Bekins</strong> – Professional packing teams, partial or full loads, door-to-door service</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Stevens Worldwide Moving</strong> – Custom packing, storage options, climate-controlled facilities</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>United Van Lines</strong> – Flexible packing services, can pack only what you choose to move</span></li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl border border-brand-100 p-5">
                            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">Shipping & Delivery in Panama</h3>
                            <ul className="text-brand-700 space-y-2 text-sm">
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Logística Integral de Panamá</strong> – Warehouse storage, local delivery, unpacking and setup</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Direct Panama Shipping</strong> – Door-to-door delivery in Panama City, suburbs, and inland</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Panama Customs Brokers Association</strong> – Handles customs clearance for your shipped goods</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Local Couriers (DHL, FedEx Panama)</strong> – Great for shipping specific items separately or in batches</span></li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl border border-brand-100 p-5">
                            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">Storage & Warehousing</h3>
                            <ul className="text-brand-700 space-y-2 text-sm">
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>SHIP Container Solutions</strong> – Rent containers for storage or slow shipment, cost-effective option</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Colón Free Zone</strong> – Temporary bonded storage while you arrange your Panama home</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Panama Storage Facilities</strong> – Monthly rental, climate-controlled options, flexible terms</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>uShip</strong> – Compare quotes for containers, partial loads, and flexible shipping timelines</span></li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl border border-brand-100 p-5">
                            <h3 className="font-heading font-bold text-brand-950 mb-2 text-lg">Specialized Services</h3>
                            <ul className="text-brand-700 space-y-2 text-sm">
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Furniture Shipping Specialists</strong> – For large items like sofas, beds, and appliances</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Electronics & Appliances Movers</strong> – Safe handling of TVs, computers, and kitchen equipment</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Pet Transport Services</strong> – IATA-certified, handles veterinary paperwork and quarantine requirements</span></li>
                                <li className="flex gap-2"><span className="text-brand-TEAL font-bold">•</span> <span><strong>Art & Collectibles Movers</strong> – Climate-controlled, specialized insurance for valuable items</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-white rounded-xl border border-brand-100">
                        <p className="text-sm text-brand-700"><strong className="text-brand-TEAL">💡 Pro Tip:</strong> Before hiring a mover, inventory what you actually need in Panama. Many successful expats ship 20-30% less than planned and save thousands. Get 3-5 quotes based on actual weight/volume. Professional packing costs more upfront but protects valuable items and reduces damage claims. For minimal moves (just suitcases), you may not need a mover—ship individual boxes via courier instead to save money.</p>
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-brand-950 rounded-lg p-12 text-center">
                    <h2 className="text-white text-3xl font-heading font-bold mb-4">Ready for Your Panama Move?</h2>
                    <p className="text-brand-300 text-lg mb-8">
                        Our team can help guide your relocation logistics, housing search, and settling-in process.
                    </p>
                    <Link
                        href={`/${lang}/contacto`}
                        className="inline-block bg-brand-GOLD text-brand-950 font-heading font-bold py-4 px-8 rounded-lg hover:bg-brand-GOLD/90 transition"
                    >
                        Get Relocation Support
                    </Link>
                </section>

            </div>
        </article>
    );
}
