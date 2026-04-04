import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Bus, Taxi, Zap, MapPin, AlertCircle, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Getting Around Panama City 2026: Metro, Uber, Bus & Taxi Guide',
    description: 'Transportation guide for Panama City. Metro, Metrobus, Uber, inDriver, taxis. How to navigate like a local.',
    keywords: 'Panama City transportation, metro Panama City, Uber Panama, taxi Panama, get around Panama',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/getting-around-panama-city-guide',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/getting-around-panama-city-guide',
            'es': 'https://panamarealestatesale.com/es/blog/getting-around-panama-city-guide',
            'pt': 'https://panamarealestatesale.com/pt/blog/getting-around-panama-city-guide',
            'de': 'https://panamarealestatesale.com/de/blog/getting-around-panama-city-guide',
        },
    },
    openGraph: {
        title: 'Getting Around Panama City 2026: Metro, Uber, Bus & Taxi Guide',
        description: 'Transportation guide for Panama City. Metro, Metrobus, Uber, inDriver, taxis. How to navigate like a local.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/getting-around-panama-city-guide',
        images: [{ url: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&q=80', width: 1200, height: 630, alt: 'Panama City transportation' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Getting Around Panama City 2026: Metro, Uber, Bus & Taxi Guide',
        description: 'Transportation guide for Panama City. Metro, Metrobus, Uber, inDriver, taxis. How to navigate like a local.',
        images: ['https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&q=80'],
    },
};

const metro = [
    { line: 'Line 1', route: 'Albrook to San Isidro', status: 'Operating', notes: 'Original metro line. Clean, fast, safe.' },
    { line: 'Line 2', route: 'Tocumen Airport to San Miguel', status: 'Operating', notes: 'Connects airport to city. Essential for arriving travelers.' },
    { line: 'Line 3', route: 'To Panamá Oeste', status: 'Under construction', notes: 'Coming 2026–2027. Will connect outer areas.' },
];

const rideshare = [
    {
        app: 'Uber',
        typical: '$3–8',
        notes: 'Widely available, safe. Prices surge during rush hour.',
        best: 'Most reliable option',
    },
    {
        app: 'inDriver',
        typical: '$2–6',
        notes: 'Lower than Uber. You negotiate price. Popular with locals.',
        best: 'Best prices',
    },
    {
        app: 'Bolt',
        typical: '$2.50–7',
        notes: 'Recently launched. Competitive pricing. Growing.',
        best: 'Alternative option',
    },
];

const intercityTransport = [
    {
        destination: 'Boquete',
        transport: 'Bus from Albrook Terminal',
        time: '7 hours',
        cost: '$15–20',
        alt: 'Fly Copa to David, then bus 45min',
    },
    {
        destination: 'Coronado',
        transport: 'Bus from Albrook',
        time: '90 minutes',
        cost: '$3–5',
        alt: 'Uber: $60–80',
    },
    {
        destination: 'Bocas del Toro',
        transport: 'Flight (Air Panama)',
        time: '1 hour',
        cost: '$50–80',
        alt: 'Bus + boat: 7+ hours, cheaper',
    },
    {
        destination: 'Colon',
        transport: 'Bus from Albrook',
        time: '1.5 hours',
        cost: '$3',
        alt: 'Train: $25 (scenic option)',
    },
];

const drivingTips = [
    { tip: 'Get a Panama license after 90 days', detail: 'US license valid first 90 days. Then you need a Panama license. Process takes 1–2 weeks.' },
    { tip: 'Traffic is INTENSE during rush hour', detail: '7–9am and 5–7pm are brutal. Plan around these times or use Uber.' },
    { tip: 'Speed limits: 80 km/h highway, 50 km/h city', detail: 'Police are active. Obeying limits saves money and accidents.' },
    { tip: 'Parking costs add up', detail: 'Most malls have free parking. Street parking is scarce. Parking meters in old neighborhoods.' },
    { tip: 'Seatbelts mandatory, cell phone hands-free', detail: 'Traffic police will stop you. Keep license + registration in car.' },
    { tip: 'Get vehicle insurance (SOAT)', detail: 'Third-party liability is mandatory. ~$100–200/year. Required at any police stop.' },
];

const airports = [
    { airport: 'Tocumen International (PTY)', route: 'Albrook to Airport', cost: '$0.35 + connection', notes: 'Cheapest but slow. Metro + bus required.' },
    { airport: 'Tocumen International (PTY)', route: 'Uber from City', cost: '$30–45', notes: 'Recommended. Direct, tracked, negotiable.' },
    { airport: 'Tocumen International (PTY)', route: 'Official Taxi Stand', cost: '~$30 to city', notes: 'Queue system. Slightly cheaper than Uber.' },
];

const taxiTips = [
    'No meters — negotiate BEFORE entering',
    'Typical in-city fare: $2–5',
    'Airport to Casco Viejo: $8–15',
    'Airport to Punta Pacifica: $10–20',
    'Show destination on Google Maps if language is barrier',
    'Use official taxis (yellow) or radio taxis (yellow + red stripe)',
    'Never take unofficial taxis at airport — major safety risk',
];

const neighborhoods = [
    { area: 'Casco Viejo', transit: 'Metro + walking', best: 'Historic, walkable, nightlife' },
    { area: 'Punta Pacifica', transit: 'Uber recommended', best: 'Modern condo towers, restaurants' },
    { area: 'Costa del Este', transit: 'Uber or car', best: 'Shopping, restaurants, parks' },
    { area: 'El Cangrejo', transit: 'Walking + Metro', best: 'Central, affordable, good food' },
    { area: 'Amador Causeway', transit: 'Uber', best: 'Parks, water views, restaurants' },
];

const faqs = [
    {
        q: 'Is Panama City public transportation safe?',
        a: 'Metro and Metrobus are very safe. Overcrowded at peak hours but well-policed. Ride-share apps (Uber, inDriver) are safer than street taxis. Avoid street taxis at night, especially alone.',
    },
    {
        q: 'How do I get a Metrobus card?',
        a: 'Buy at any Metro station or designated stops. Cost is $2–5 for the card (reusable). Then add credit ($0.35 per ride). Card works on both metro and buses. You cannot pay cash on buses.',
    },
    {
        q: 'Is it worth buying a car in Panama City?',
        a: 'For most newcomers: no. Uber is cheaper than car payments + insurance + parking + gas. Traffic is notorious. Wait 3–6 months and reconsider. Many long-term expats still use Uber instead of owning a car.',
    },
    {
        q: 'How do I get to Bocas del Toro from Panama City?',
        a: 'Fly Air Panama (1 hour, $50–80) or take bus from Albrook Terminal to Bocas town (6–8 hours + ferry, $20–30). Flights are faster and often cheaper when you factor in time.',
    },
    {
        q: 'Can I use a US credit card for Uber in Panama?',
        a: 'Yes. Visa and Mastercard work fine in the Uber app. Some drivers prefer cash, but all accept app payments. Download the app before landing.',
    },
];

export default async function PanamaCityTransportPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=1600&q=80"
                        alt="Transportation in Panama City"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        TRANSPORTATION GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Getting Around Panama City<br />2026 Guide
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Metro, buses, Uber, inDriver, taxis, driving, and how to navigate like a local.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Getting around Panama City is easy once you understand the options. The metro is clean and modern. Uber and inDriver are cheap and safe. Buses are crowded but effective. Taxis exist but require negotiation. This guide covers every option and how to pick the right one for each situation.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        Bottom line: Use Uber for daily trips. Use metro for rush-hour commutes. Use buses only if you want the local experience. Avoid driving your first month while you learn the city.
                    </p>
                </section>

                {/* The Metro */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Navigation className="inline text-brand-GOLD mr-2" size={28} />
                        Panama City Metro (Subway)
                    </h2>
                    <div className="space-y-5 mb-8">
                        {metro.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-white font-bold text-sm">{item.line}</h3>
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded ${
                                        item.status === 'Operating'
                                            ? 'bg-brand-TEAL/20 text-brand-TEAL'
                                            : 'bg-brand-GOLD/20 text-brand-GOLD'
                                    }`}>
                                        {item.status}
                                    </span>
                                </div>
                                <div className="text-slate-500 text-xs mb-2">{item.route}</div>
                                <div className="text-slate-500 text-xs border-t border-brand-100 pt-2">{item.notes}</div>
                            </div>
                        ))}
                    </div>

                    {/* Metro Stats */}
                    <div className="bg-brand-50 rounded-xl p-5 border border-brand-GOLD/20">
                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-4">Metro Fast Facts</div>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {[
                                { label: 'Cost per ride', value: '$0.35' },
                                { label: 'Hours', value: '5am–10pm weekdays, 6am–10pm weekends' },
                                { label: 'Speed', value: 'Fast — most reliable commute' },
                                { label: 'Safety', value: 'Very safe. Modern stations.' },
                                { label: 'Best for', value: 'Commuting to north/south areas' },
                                { label: 'Limitation', value: 'Does not reach Costa del Este or Punta Pacifica' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-lg p-3">
                                    <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-1">{item.label}</div>
                                    <div className="text-slate-500 text-xs">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Metrobus */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Bus className="inline text-brand-GOLD mr-2" size={28} />
                        Metrobus (City Bus System)
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        The modernized bus fleet has replaced the old "diablos rojos" (colorful old buses). Buses are clean, air-conditioned, and cover most of Panama City. However, they require a Metrobus card — no cash accepted.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {[
                            { label: 'Cost per ride', value: '$0.35 with card' },
                            { label: 'Coverage', value: 'Most neighborhoods in city' },
                            { label: 'Frequency', value: 'Main routes: 5–10 min, secondary: 20–30 min' },
                            { label: 'Best for', value: 'Budget commuting, local experience' },
                            { label: 'Limitation', value: 'Crowded at peak hours' },
                            { label: 'Safety', value: 'Safe during day. Avoid late night.' },
                        ].map((item, i) => (
                            <div key={i} className="card-light rounded-lg p-4 border border-brand-100">
                                <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-2">{item.label}</div>
                                <div className="text-slate-500 text-xs">{item.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-TEAL/10 rounded-xl p-5 border border-brand-TEAL/30">
                        <div className="text-brand-TEAL font-black uppercase tracking-widest text-[10px] mb-2">How to Use Metrobus</div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Buy a Metrobus card at any metro station for $2–5. Add credit ($0.35 per ride). The card works on both metro and buses. Tap at entry. No cash accepted on buses.
                        </p>
                    </div>
                </section>

                {/* Ride-Share Apps */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Taxi className="inline text-brand-GOLD mr-2" size={28} />
                        Uber, inDriver & Bolt
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Ride-sharing apps are safe, cheap, and used by expats daily. All three accept credit cards + cash. Prices vary depending on demand.
                    </p>
                    <div className="space-y-4 mb-6">
                        {rideshare.map((app, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-white font-bold text-sm">{app.app}</h3>
                                    <div className="text-brand-GOLD font-black text-sm">{app.typical}</div>
                                </div>
                                <p className="text-slate-500 text-xs mb-2">{app.notes}</p>
                                <div className="border-t border-brand-100 pt-2">
                                    <span className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest">Best for: </span>
                                    <span className="text-slate-500 text-xs">{app.best}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-TEAL/10 rounded-xl p-5 border border-brand-TEAL/30">
                        <div className="text-brand-TEAL font-black uppercase tracking-widest text-[10px] mb-2">Pro Tips for App-Based Rides</div>
                        <ul className="space-y-2 text-slate-500 text-xs">
                            <li className="flex items-start gap-2">
                                <span className="text-brand-TEAL mt-1">•</span>
                                <span>Surge pricing: Expect 2–3x multiplier during rush hour (7–9am, 5–7pm)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-brand-TEAL mt-1">•</span>
                                <span>inDriver lets you NEGOTIATE price — use this to get better rates</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-brand-TEAL mt-1">•</span>
                                <span>Track your ride in real-time. All apps show driver info and ETA</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-brand-TEAL mt-1">•</span>
                                <span>Drivers prefer cash for tips (not app-based), but not required</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Street Taxis */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Street Taxis (Yellow Cabs)
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Traditional taxis are available but lack meters. Negotiate BEFORE entering. Some tips for taxi use:
                    </p>
                    <div className="space-y-2 mb-6">
                        {taxiTips.map((tip, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3">
                                <span className="text-brand-GOLD mt-0.5">•</span>
                                <span className="text-slate-500 text-xs">{tip}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-GOLD/10 rounded-xl p-5 border border-brand-GOLD/30">
                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-2">When to Use Taxis</div>
                        <p className="text-slate-500 text-sm">
                            Use taxis only if Uber is unavailable (rare) or if you prefer dealing with humans. Uber is genuinely cheaper and safer. Radio taxis (yellow + red stripe) are slightly better than street taxis — try to call for one rather than hail.
                        </p>
                    </div>
                </section>

                {/* Driving Yourself */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Driving Yourself
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        You CAN drive in Panama City with a US license for the first 90 days. But should you? Here are the realities:
                    </p>
                    <div className="space-y-4 mb-6">
                        {drivingTips.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <h3 className="text-white font-bold text-sm mb-2">{item.tip}</h3>
                                <p className="text-slate-500 text-xs">{item.detail}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-TEAL/10 rounded-xl p-5 border border-brand-TEAL/30">
                        <div className="text-brand-TEAL font-black uppercase tracking-widest text-[10px] mb-2">Recommendation for Newcomers</div>
                        <p className="text-slate-500 text-sm">
                            Do NOT buy a car in your first month. Use Uber to learn the city, the neighborhoods, and the roads. After 3–6 months, reassess if you actually need a car. Many long-term expats find Uber cheaper + less stressful than owning a vehicle.
                        </p>
                    </div>
                </section>

                {/* By Neighborhood */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <MapPin className="inline text-brand-GOLD mr-2" size={28} />
                        Getting Around by Neighborhood
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {neighborhoods.map((nb, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <h3 className="text-white font-bold text-sm mb-3">{nb.area}</h3>
                                <div className="space-y-2">
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Best Transit</div>
                                        <div className="text-slate-500 text-xs">{nb.transit}</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Why This Area</div>
                                        <div className="text-slate-500 text-xs">{nb.best}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Intercity Travel */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Bus className="inline text-brand-GOLD mr-2" size={28} />
                        Getting Out of Panama City (Intercity)
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Leaving Panama City? Here is how to get to popular expat destinations:
                    </p>
                    <div className="space-y-4">
                        {intercityTransport.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <h3 className="text-white font-bold text-sm mb-3">{item.destination}</h3>
                                <div className="space-y-2">
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        <div>
                                            <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Transport</div>
                                            <div className="text-slate-500 text-xs">{item.transport}</div>
                                        </div>
                                        <div>
                                            <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Time</div>
                                            <div className="text-slate-500 text-xs">{item.time}</div>
                                        </div>
                                        <div>
                                            <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Cost</div>
                                            <div className="text-slate-500 text-xs">{item.cost}</div>
                                        </div>
                                        <div>
                                            <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Alternative</div>
                                            <div className="text-slate-500 text-xs">{item.alt}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 text-brand-GOLD text-[10px] font-black uppercase tracking-widest">Pro Tip: Bus Terminal</div>
                    <p className="text-slate-500 text-xs mt-2">
                        All long-distance buses depart from Albrook Terminal, in the west of Panama City. Use Uber to get there ($3–5 from downtown). Buses are comfortable and often cheaper than flying when you factor in time.
                    </p>
                </section>

                {/* Airport */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Getting to/from Tocumen International Airport
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Tocumen (PTY) is the main international airport. Here is how to get there:
                    </p>
                    <div className="space-y-3 mb-6">
                        {airports.map((opt, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-4">
                                <div className="flex-1">
                                    <div className="text-white font-bold text-sm">{opt.route}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{opt.notes}</div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <div className="text-brand-GOLD font-black text-sm">{opt.cost}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-TEAL/10 rounded-xl p-5 border border-brand-TEAL/30">
                        <div className="text-brand-TEAL font-black uppercase tracking-widest text-[10px] mb-2">Recommended: Uber to Airport</div>
                        <p className="text-slate-500 text-sm">
                            Use the Uber app. It is $30–45, direct, safe, and you know the price upfront. Have the driver meet you inside the terminal (not in taxi queue). Much less hassle than negotiating with taxis.
                        </p>
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
                                <h3 className="text-white font-bold text-sm mb-3">{faq.q}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Navigate Panama City Like a Local
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Getting around is just one part of settling into Panama. Our advisors help with housing, neighborhoods, visas, and every other practical detail. Let us be your guide.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/${lang}/contacto`}
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Schedule Consultation <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/blog/supermarkets-shopping-panama-expats`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Shopping Guide
                        </Link>
                    </div>
                </section>

            </div>
        </article>
    );
}
