import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, Smartphone, Globe, AlertCircle, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Buy SIM Card Panama 2026: Claro vs Movistar vs Cable Onda',
    description: 'Compare SIM card providers in Panama: Claro, Movistar, Cable Onda. eSIM options, pricing, coverage, data speeds. Where to buy.',
    keywords: 'SIM card Panama, Panama phone plan, eSIM Panama, Claro Panama, Movistar Panama, Cable Onda',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/panama-sim-card-guide',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/panama-sim-card-guide',
            'es': 'https://panamarealestatesale.com/es/blog/panama-sim-card-guide',
            'pt': 'https://panamarealestatesale.com/pt/blog/panama-sim-card-guide',
            'de': 'https://panamarealestatesale.com/de/blog/panama-sim-card-guide',
        },
    },
    openGraph: {
        title: 'Buy SIM Card Panama 2026: Claro vs Movistar vs Cable Onda',
        description: 'Compare SIM card providers in Panama: Claro, Movistar, Cable Onda. eSIM options, pricing, coverage, data speeds.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/panama-sim-card-guide',
        images: [{ url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80', width: 1200, height: 630, alt: 'SIM card in Panama' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Buy SIM Card Panama 2026: Claro vs Movistar vs Cable Onda',
        description: 'Compare SIM card providers in Panama: Claro, Movistar, Cable Onda. eSIM options, pricing, coverage, data speeds.',
        images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80'],
    },
};

const carriers = [
    {
        name: 'Claro',
        tag: 'Best for Rural & Traveling',
        pros: [
            'Best coverage nationwide (even in Boquete, Bocas, Coronado)',
            '4G LTE across most of the country',
            'Available at any supermarket or Claro store',
            'Most reliable outside Panama City',
        ],
        cons: ['Customer service can be frustrating'],
        prepaid: '$3–5 for SIM card',
        monthlyPlans: [
            { data: '5GB', price: '$20/mo' },
            { data: '15GB', price: '$30/mo' },
            { data: 'Unlimited', price: '$45/mo' },
        ],
    },
    {
        name: 'Movistar',
        tag: 'Good Urban Coverage',
        pros: [
            'Strong in Panama City and Coronado',
            'Solid 4G LTE',
            'Competitive pricing',
            'Good customer service reputation',
        ],
        cons: ['Weaker coverage in rural areas'],
        prepaid: '$3–5 for SIM card',
        monthlyPlans: [
            { data: '5GB', price: '$18/mo' },
            { data: '12GB', price: '$28/mo' },
            { data: 'Unlimited', price: '$40/mo' },
        ],
    },
    {
        name: 'Cable Onda Mobile',
        tag: 'Best Bundle Value',
        pros: [
            'Excellent if you have Cable Onda home internet',
            'Bundle discounts available',
            'Competitive pricing for city dwellers',
            'Good for Panama City and Coronado',
        ],
        cons: ['Limited rural presence'],
        prepaid: '$3–5 for SIM card',
        monthlyPlans: [
            { data: 'Various', price: '$15–35/mo' },
        ],
    },
];

const wheretobuy = [
    {
        location: 'Claro Store',
        locations: 'Albrook Mall, Multiplaza, Altaplaza',
        hours: '9am–9pm daily',
        docs: 'Passport required',
        time: '15–30 min activation',
    },
    {
        location: 'Supermarket Kiosk',
        locations: 'El Rey, Riba Smith, Súper 99',
        hours: 'Store hours',
        docs: 'Passport required',
        time: '5–15 min',
    },
    {
        location: 'Tocumen Airport',
        locations: 'Arrivals level (all 3 carriers)',
        hours: 'Open 24/7',
        docs: 'Passport required',
        time: '10–20 min',
    },
];

const esimOptions = [
    {
        provider: 'Airalo',
        plans: 'Starting $15/week',
        coverage: 'Worldwide eSIM',
        bestfor: 'First week before local SIM',
    },
    {
        provider: 'Holafly',
        plans: 'Starting $19/week',
        coverage: 'Worldwide eSIM',
        bestfor: 'Travelers with multiple destinations',
    },
    {
        provider: 'Nomad',
        plans: 'Starting $15/week',
        coverage: 'Global coverage',
        bestfor: 'Budget travelers',
    },
    {
        provider: 'Claro Panama eSIM',
        plans: 'Same as physical SIM',
        coverage: 'Local Panama only',
        bestfor: 'Modern unlocked phones',
    },
];

const stepByStep = [
    {
        step: '1',
        title: 'Go to Claro store or supermarket',
        desc: 'Claro kiosks are easiest — found in malls or supermarkets. Or go to any Claro store.',
    },
    {
        step: '2',
        title: 'Show your passport',
        desc: 'Panama requires ID registration for all SIM cards by law (biometric registration).',
    },
    {
        step: '3',
        title: 'Choose prepaid or plan',
        desc: 'Prepaid SIM ($3–5) lets you pay-as-you-go. Or commit to a monthly plan.',
    },
    {
        step: '4',
        title: 'SIM activated',
        desc: 'Activation takes 5–30 minutes. You will get your phone number immediately.',
    },
    {
        step: '5',
        title: 'Top up credit (prepaid option)',
        desc: 'Buy recharge cards at any supermarket checkout ($5–50 denominations).',
    },
];

const faqs = [
    {
        q: 'Can I use my US phone in Panama?',
        a: 'Yes! Most US phones work fine in Panama. Just make sure your phone is unlocked (not carrier-locked to AT&T, Verizon, etc.). Unlocked phones work with any SIM card worldwide.',
    },
    {
        q: 'Do I need a passport to buy a SIM card?',
        a: 'Yes. Panama requires biometric SIM registration by law. You must show a valid passport or cedula (Panama ID).',
    },
    {
        q: 'Can I call the USA for free?',
        a: 'Use WhatsApp calls — they are completely free with wifi or data. Regular international calls are $0.10–$0.50/minute from any carrier. Google Voice (free to US) is also great.',
    },
    {
        q: 'What is an eSIM and do I need it?',
        a: 'An eSIM is a digital SIM that downloads directly to compatible phones (iPhone 14+, most newer Android). You can activate it before arriving in Panama. Great for the first week before getting a local physical SIM.',
    },
    {
        q: 'Should I keep my US phone number?',
        a: 'Many expats keep their US number via Google Voice (free) while getting a local Panama number. Dual SIM phones let you do this. Others get a local number and forward their US number to Google Voice.',
    },
];

export default async function PanamaSIMCardPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1523961131990-5ea066df4cb5?w=1600&q=80"
                        alt="SIM Card in Panama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        PRACTICAL GUIDE · MOBILE & CONNECTIVITY
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        How to Get a SIM Card<br />in Panama 2026
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Everything you need to know about Claro, Movistar, Cable Onda, eSIMs, and where to buy before you leave the airport.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Getting a local phone number in Panama is one of the first things every expat needs to do — and it is shockingly simple. You can walk out of the airport with a working SIM card, a local number, and data within 20 minutes. This guide covers every option: the three main carriers, where to buy, eSIM for travelers, international calling, and dual SIM setup for keeping your US number.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        Bottom line: Get a Claro SIM card at Tocumen Airport before you leave baggage claim. You will have cell service for your entire journey from the airport. Here is why, and all the other options available.
                    </p>
                </section>

                {/* The 3 Carriers */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Smartphone className="inline text-brand-GOLD mr-2" size={28} />
                        The 3 Main Carriers in Panama
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        Panama has three nationwide mobile carriers: Claro, Movistar, and Cable Onda Mobile. Each has different strengths depending on where you are living and what you need. Here is the breakdown:
                    </p>
                    <div className="space-y-5">
                        {carriers.map((carrier, i) => (
                            <div key={i} className="card-light rounded-2xl p-7 border border-brand-100">
                                <div className="flex justify-between items-start mb-5">
                                    <div>
                                        <div className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-1">{carrier.tag}</div>
                                        <h3 className="text-2xl font-heading font-black text-brand-950">{carrier.name}</h3>
                                    </div>
                                </div>

                                {/* Pros */}
                                <div className="mb-5">
                                    <div className="text-brand-950 font-bold text-sm mb-2 flex items-center gap-2">
                                        <CheckCircle size={16} className="text-brand-GOLD" />
                                        Key Advantages
                                    </div>
                                    <ul className="space-y-1">
                                        {carrier.pros.map((pro, j) => (
                                            <li key={j} className="text-slate-500 text-xs leading-relaxed flex items-start gap-2">
                                                <span className="text-brand-GOLD mt-1">•</span>
                                                <span>{pro}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Cons */}
                                <div className="mb-5">
                                    <div className="text-slate-600 font-bold text-sm mb-2 flex items-center gap-2">
                                        <AlertCircle size={16} className="text-brand-GOLD" />
                                        Considerations
                                    </div>
                                    <ul className="space-y-1">
                                        {carrier.cons.map((con, j) => (
                                            <li key={j} className="text-slate-500 text-xs leading-relaxed flex items-start gap-2">
                                                <span className="text-brand-GOLD">•</span>
                                                <span>{con}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Pricing */}
                                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-brand-100">
                                    <div>
                                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-2">Prepaid SIM</div>
                                        <div className="text-brand-950 font-black text-lg">{carrier.prepaid}</div>
                                        <div className="text-slate-500 text-[10px] uppercase tracking-widest">One-time purchase</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-2">Monthly Plans</div>
                                        <div className="space-y-1">
                                            {carrier.monthlyPlans.map((plan, j) => (
                                                <div key={j} className="flex justify-between text-xs">
                                                    <span className="text-slate-500">{plan.data}</span>
                                                    <span className="text-brand-950 font-bold">{plan.price}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Winner */}
                    <div className="mt-6 bg-brand-GOLD/10 rounded-xl p-5 border border-brand-GOLD/30">
                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-2">THE WINNER FOR YOU</div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            <span className="text-white font-bold">For traveling & rural areas:</span> Claro has the best nationwide coverage. If you are splitting time between Panama City and Boquete, Coronado, or Bocas — choose Claro. <br /><br />
                            <span className="text-white font-bold">For Panama City + home internet bundle:</span> Cable Onda Mobile wins if you already have Cable Onda home internet. Bundle discounts make it the best value. <br /><br />
                            <span className="text-white font-bold">Solid second choice:</span> Movistar is a great option if Claro is sold out or if you prefer their customer service.
                        </p>
                    </div>
                </section>

                {/* Where to Buy */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <MapPin className="inline text-brand-GOLD mr-2" size={28} />
                        Where to Buy a SIM Card in Panama
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        You can buy a SIM card at Claro stores, supermarket kiosks, or — best option — at Tocumen International Airport when you land. Here are all your options:
                    </p>
                    <div className="space-y-4">
                        {wheretobuy.map((venue, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <h3 className="text-brand-950 font-bold text-sm mb-4 flex items-center gap-2">
                                    <MapPin size={16} className="text-brand-GOLD" />
                                    {venue.location}
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    <div>
                                        <div className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-1">Locations</div>
                                        <div className="text-slate-500 text-xs">{venue.locations}</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-1">Hours</div>
                                        <div className="text-slate-500 text-xs">{venue.hours}</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-1">What to Bring</div>
                                        <div className="text-slate-500 text-xs">{venue.docs}</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-1">Activation Time</div>
                                        <div className="text-slate-500 text-xs">{venue.time}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pro Tip */}
                    <div className="mt-6 bg-brand-TEAL/10 rounded-xl p-5 border border-brand-TEAL/30">
                        <div className="text-brand-TEAL font-black uppercase tracking-widest text-[10px] mb-2">Pro Tip: Buy at the Airport</div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            All three carriers have kiosks at Tocumen International Airport in the arrivals area. They are open 24/7. Buy your SIM here — it is the same price as the stores, you avoid lines, and you have data the moment you walk out. Your phone will connect to Claro's network automatically and you can start using WhatsApp, Google Maps, and Uber before you even leave the airport.
                        </p>
                    </div>
                </section>

                {/* eSIM Options */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Globe className="inline text-brand-GOLD mr-2" size={28} />
                        eSIM Options for Travelers
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        If you have a modern unlocked phone (iPhone 14+, most newer Android), you can use an eSIM — a digital SIM that downloads directly to your phone. This is perfect for the first week before getting a local physical SIM. You can activate it before you even board your flight.
                    </p>
                    <div className="grid md:grid-cols-2 gap-5">
                        {esimOptions.map((option, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <h3 className="text-brand-950 font-bold text-sm mb-3">{option.provider}</h3>
                                <div className="space-y-2">
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Plans</div>
                                        <div className="text-slate-500 text-xs">{option.plans}</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Coverage</div>
                                        <div className="text-slate-500 text-xs">{option.coverage}</div>
                                    </div>
                                    <div className="pt-2 border-t border-brand-100">
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-1">Best For</div>
                                        <div className="text-slate-500 text-xs">{option.bestfor}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* eSIM Advantage */}
                    <div className="mt-6 bg-brand-TEAL/10 rounded-xl p-5 border border-brand-TEAL/30">
                        <div className="text-brand-TEAL font-black uppercase tracking-widest text-[10px] mb-2">Why Get an eSIM?</div>
                        <ul className="space-y-2 text-slate-500 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-brand-TEAL mt-1">•</span>
                                <span>Activate before you leave for Panama — data is live when you land</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-brand-TEAL mt-1">•</span>
                                <span>No physical SIM card to lose or lose</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-brand-TEAL mt-1">•</span>
                                <span>Perfect for the first week while you settle in</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-brand-TEAL mt-1">•</span>
                                <span>Then switch to local Claro SIM for better long-term rates</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Step by Step */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        How to Buy a SIM Card: Step by Step
                    </h2>
                    <div className="space-y-4">
                        {stepByStep.map((s, i) => (
                            <div key={i} className="flex items-start gap-5 card-light rounded-xl p-5 border border-brand-100">
                                <div className="w-10 h-10 rounded-full bg-brand-GOLD/10 border border-brand-GOLD/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-GOLD font-black text-sm">{s.step}</span>
                                </div>
                                <div>
                                    <div className="text-brand-950 font-bold text-sm mb-1">{s.title}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{s.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Calling USA */}
                <section className="reveal-on-scroll card-light rounded-2xl p-8 border border-brand-100">
                    <h2 className="text-white text-2xl font-heading font-bold mb-5 uppercase tracking-tighter italic">
                        <Phone className="inline text-brand-GOLD mr-2" size={24} />
                        Calling & Texting the USA from Panama
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-6">
                        One of the first questions expats ask: How do I call the United States without going broke? Here are your options, ranked by cost and convenience:
                    </p>
                    <div className="space-y-3">
                        {[
                            { method: 'WhatsApp Calls', cost: 'FREE', notes: 'Free calls to anyone on WhatsApp with wifi or data. Best option. Works perfectly.' },
                            { method: 'Google Voice', cost: 'FREE to USA', notes: 'Call any US number from your phone. Download the app or activate before arriving. Completely free.' },
                            { method: 'FaceTime', cost: 'FREE (data only)', notes: 'Works over wifi or data to any iPhone. No cost beyond your data plan.' },
                            { method: 'Skype', cost: 'Paid plans', notes: 'Reasonable monthly plans, but not cheaper than the above.' },
                            { method: 'Traditional International Call', cost: '$0.10–0.50/min', notes: 'From Claro/Movistar. Only use if you must — expensive!' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-4">
                                <div className="flex-1">
                                    <div className="text-brand-950 font-bold text-sm">{item.method}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{item.notes}</div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <div className="text-brand-GOLD font-black text-sm">{item.cost}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Data Speeds & Coverage */}
                <section className="reveal-on-scroll mt-8">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Data Speeds & Coverage by Location
                    </h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {[
                            { location: 'Panama City', speeds: '20–50 Mbps', notes: 'Excellent. Fast enough for streaming and video calls.' },
                            { location: 'Coronado', speeds: '10–30 Mbps', notes: 'Very good for a beach town. Fine for most tasks.' },
                            { location: 'Boquete', speeds: '5–20 Mbps', notes: 'Decent. Improving every year. Works for most needs.' },
                            { location: 'Bocas del Toro', speeds: '2–10 Mbps', notes: 'Slowest option (island signal). Starlink recommended for reliability.' },
                        ].map((loc, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <h3 className="text-brand-950 font-bold text-sm mb-2">{loc.location}</h3>
                                <div className="text-brand-GOLD font-black text-lg mb-2">{loc.speeds}</div>
                                <p className="text-slate-500 text-xs leading-relaxed">{loc.notes}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 bg-brand-TEAL/10 rounded-xl p-5 border border-brand-TEAL/30">
                        <div className="text-brand-TEAL font-black uppercase tracking-widest text-[10px] mb-2">5G Rolling Out</div>
                        <p className="text-slate-500 text-sm">5G is rolling out in Panama City in 2025–2026. It will be available in select neighborhoods first. For now, 4G LTE is more than fast enough.</p>
                    </div>
                </section>

                {/* Roaming */}
                <section className="reveal-on-scroll mt-8">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        International Roaming
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        If you are keeping your US phone number for the first few weeks or months while you settle in:
                    </p>
                    <div className="space-y-3">
                        {[
                            { carrier: 'T-Mobile Magenta/Go5G', cost: 'Included', coverage: 'Free in Mexico, Canada, Panama. Roaming data included.' },
                            { carrier: 'AT&T', cost: '$12/day', coverage: 'International Day Pass. Enables data/calls in 200+ destinations.' },
                            { carrier: 'Verizon', cost: 'Varies', coverage: 'TravelPass ($12/day) or Monthly plans. Check your current plan.' },
                            { carrier: 'Pro Tip', cost: 'Switch Early', coverage: 'Get your Panama SIM immediately and forward your US number to Google Voice. Cheaper long-term.' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-4">
                                <div className="flex-1">
                                    <div className="text-brand-950 font-bold text-sm">{item.carrier}</div>
                                    <div className="text-slate-500 text-xs">{item.coverage}</div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <div className="text-brand-GOLD font-black text-sm">{item.cost}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Dual SIM Setup */}
                <section className="reveal-on-scroll mt-8 card-light rounded-2xl p-8 border border-brand-100">
                    <h2 className="text-white text-2xl font-heading font-bold mb-5 uppercase tracking-tighter italic">
                        Dual SIM Setup: Keep Your US Number + Get a Panama Number
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-4">
                        The smartest setup for expats: a dual SIM phone lets you keep your US number AND have a local Panama number.
                    </p>
                    <div className="space-y-3">
                        {[
                            'iPhone 14 and newer models support Dual SIM (physical SIM + eSIM)',
                            'Most modern Android phones support dual physical SIMs or physical + eSIM',
                            'Keep your US number for online accounts, bank verification, and family calls (via Google Voice)',
                            'Use your Panama number for local shopping, restaurants, doctors, and expat friends',
                            'Each number has its own plan — manage them separately in your phone settings',
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4">
                                <CheckCircle size={14} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                                <span className="text-slate-500 text-xs leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="reveal-on-scroll mt-8">
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
                        Ready to Move to Panama?
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Getting connected is the first step. Our team can help you navigate mobile plans, home internet setup, and every other practical question about settling in Panama. Let us guide you through the move.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/${lang}/contacto`}
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Schedule Free Consultation <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/blog/internet-providers-panama-expats`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Home Internet Guide
                        </Link>
                    </div>
                </section>

            </div>
        </article>
    );
}
