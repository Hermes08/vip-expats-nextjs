import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, Globe, MapPin, AlertCircle, Wifi } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Internet Providers Panama 2026: Speed, Reliability, Cost Comparison',
    description: 'Compare internet providers in Panama. Cable Onda, Claro, Movistar, Digicel. Speed, pricing, customer service.',
    keywords: 'internet Panama, Cable Onda Panama, internet providers Panama, best internet Panama',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/internet-providers-panama-expats',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/internet-providers-panama-expats',
            'es': 'https://panamarealestatesale.com/es/blog/internet-providers-panama-expats',
            'pt': 'https://panamarealestatesale.com/pt/blog/internet-providers-panama-expats',
            'de': 'https://panamarealestatesale.com/de/blog/internet-providers-panama-expats',
        },
    },
    openGraph: {
        title: 'Internet Providers Panama 2026: Speed, Reliability, Cost Comparison',
        description: 'Compare internet providers in Panama. Cable Onda, Claro, Movistar, Digicel. Speed, pricing, customer service.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/internet-providers-panama-expats',
        images: [{ url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80', width: 1200, height: 630, alt: 'Internet connection' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Internet Providers Panama 2026: Speed, Reliability, Cost Comparison',
        description: 'Compare internet providers in Panama. Cable Onda, Claro, Movistar, Digicel. Speed, pricing, customer service.',
        images: ['https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80'],
    },
};

const providers = [
    {
        name: 'Cable Onda (Millicom)',
        tag: 'Best Infrastructure',
        tech: 'Coaxial cable + fiber (select areas)',
        coverage: 'Panama City dominant, urban areas',
        pros: [
            'Best internet speeds in Panama City',
            'Most reliable infrastructure',
            'Fiber available in newer neighborhoods',
            'Bundle with mobile saves money',
            'Stable for remote work',
        ],
        cons: ['Customer service frustrating', 'Weakest rural coverage'],
        plans: [
            { speed: '100 Mbps', price: '$35/mo' },
            { speed: '200 Mbps', price: '$45/mo' },
            { speed: '500 Mbps', price: '$60/mo' },
            { speed: '1 Gbps', price: '$80/mo' },
        ],
    },
    {
        name: 'Claro',
        tag: 'Best Rural Coverage',
        tech: 'DSL + Fiber + 4G Home Internet',
        coverage: 'Nationwide, including rural',
        pros: [
            'Best rural coverage in Panama',
            '4G home internet as backup/option',
            'Good customer service reputation',
            'Available in Boquete, smaller towns',
            'Competitive pricing',
        ],
        cons: ['Speeds slower than Cable Onda in city', 'DSL less reliable than fiber'],
        plans: [
            { speed: '100 Mbps', price: '$30/mo' },
            { speed: '200 Mbps', price: '$42/mo' },
            { speed: '4G Home', price: '$40–60/mo' },
        ],
    },
    {
        name: 'Movistar',
        tag: 'Good Urban Option',
        tech: 'Fiber (select areas)',
        coverage: 'Panama City, select neighborhoods',
        pros: [
            'Good speeds in fiber areas',
            'Competitive pricing',
            'Expanding fiber network',
        ],
        cons: ['Limited coverage compared to Cable Onda', 'Smallest network footprint'],
        plans: [
            { speed: '100 Mbps', price: '$28/mo' },
            { speed: '200 Mbps', price: '$40/mo' },
            { speed: '500 Mbps', price: '$55/mo' },
        ],
    },
    {
        name: 'Starlink',
        tag: 'Best for Rural & Remote',
        tech: 'Satellite internet',
        coverage: 'Nationwide (anywhere with sky view)',
        pros: [
            'Works ANYWHERE in Panama',
            'Fast (100–300 Mbps)',
            'Game-changer for rural expats',
            'Available since 2022',
            'Low latency for satellite',
        ],
        cons: ['Expensive ($240/mo total)', 'Initial hardware cost (~$500)', 'Weather can affect signal'],
        plans: [
            { speed: '100–300 Mbps', price: '$120 hardware + $120/mo' },
        ],
    },
];

const locations = [
    {
        name: 'Panama City',
        best: 'Cable Onda (or Movistar fiber areas)',
        typical: '200–500 Mbps',
        notes: 'Excellent coverage. Fiber increasingly common in Costa del Este, Punta Pacifica, El Cangrejo.',
    },
    {
        name: 'Boquete',
        best: 'Cable Onda town center, Claro 4G',
        typical: '20–100 Mbps',
        notes: 'Improving slowly. Cable Onda available in town. Claro 4G home internet solid option. Starlink great for outside town.',
    },
    {
        name: 'Coronado',
        best: 'Cable Onda or Claro',
        typical: '50–150 Mbps',
        notes: 'Good coverage. Growing area with improving infrastructure. Cable Onda dominant.',
    },
    {
        name: 'Bocas del Toro',
        best: 'Claro 4G or Starlink',
        typical: '10–40 Mbps',
        notes: 'Weakest option on this list. Island location limits cable. Claro 4G most reliable. Starlink best for remote properties.',
    },
    {
        name: 'Santa Catalina & Remote',
        best: 'Starlink only',
        typical: '100–300 Mbps',
        notes: 'Starlink is the only real option for truly remote properties.',
    },
];

const installation = [
    { step: 'Contract minimum', detail: 'Usually 12 months (negotiate month-to-month at higher price)' },
    { step: 'Installation fee', detail: '$50–100 (sometimes waived with 12-month contract)' },
    { step: 'Setup time', detail: '3–10 business days after signing' },
    { step: 'Required documents', detail: 'Lease agreement or property title (address verification), passport' },
];

const coworking = [
    { name: 'Selina Panama', speed: '200 Mbps', location: 'Panama City' },
    { name: 'WeWork', speed: '500 Mbps dedicated', location: 'Panama City' },
    { name: 'Café Unido', speed: '20–50 Mbps', location: 'Multiple locations' },
    { name: 'Starbucks', speed: '20–50 Mbps', location: 'Various locations' },
];

const tips = [
    {
        tip: 'Do not sign a contract until housing is confirmed',
        why: 'Your first month in Panama, you might move 2–3 times. Wait until you have a locked-in address.',
    },
    {
        tip: 'Check if furnished rental includes internet',
        why: 'Many furnished apartments and houses include internet. Ask before paying separately.',
    },
    {
        tip: 'Get a portable 4G router as backup',
        why: 'Buy an unlocked router + Claro data SIM. If your home internet fails, you have instant backup.',
    },
    {
        tip: 'Run a speed test before signing',
        why: 'Use app.speedtest.net to verify speeds at the property during peak hours (not just at installation).',
    },
    {
        tip: 'Invest in a UPS for your router',
        why: 'Panama has occasional power outages. A battery backup keeps your router and one device running during outages.',
    },
];

const faqs = [
    {
        q: 'Is internet in Panama fast enough for remote work?',
        a: 'In Panama City: absolutely yes. 200+ Mbps is common and perfect for video calls, Zoom, and cloud work. In Boquete, Coronado: yes, but expect 50–100 Mbps, which is still fine. In Bocas: slower, but workable if you are careful about peak hours.',
    },
    {
        q: 'How long does it take to install internet?',
        a: 'Usually 3–10 business days after signing the contract. In emergencies, some providers can install in 1–2 days. Always ask. For Starlink, installation is same-day after hardware arrives.',
    },
    {
        q: 'What is the contract length?',
        a: 'Standard is 12 months. You can negotiate month-to-month, but they charge 20–30% more. Starlink is month-to-month with no long-term contract.',
    },
    {
        q: 'Can I get a month-to-month contract?',
        a: 'Yes, but at a premium. Cable Onda and Claro will offer month-to-month at higher monthly rates. Starlink is month-to-month by default.',
    },
    {
        q: 'Should I get Starlink?',
        a: 'If you are in Boquete, Bocas, or any rural property: yes, seriously consider it. It is expensive ($240/mo) but more reliable than overloaded local infrastructure. For Panama City: no, local providers are cheaper and faster.',
    },
];

export default async function InternetProvidersPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1600&q=80"
                        alt="Internet in Panama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        CONNECTIVITY GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Internet Providers in Panama<br />2026 Guide
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Compare Cable Onda, Claro, Movistar, and Starlink. Fiber, cable, satellite, and everything you need to work remotely from Panama.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Panama has good internet infrastructure in urban areas and increasingly solid options in rural locations thanks to Starlink. Getting connected is straightforward: most providers install within a week, speeds are competitive with North American standards, and remote work is entirely feasible. This guide breaks down every provider, where they work best, and how to set up your connection.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        Bottom line: In Panama City, you will not compromise on internet speed. In Boquete and Coronado, you will get reliable 50–150 Mbps. In remote areas, Starlink is the game-changer.
                    </p>
                </section>

                {/* The Providers */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Wifi className="inline text-brand-GOLD mr-2" size={28} />
                        The 4 Home Internet Providers in Panama
                    </h2>
                    <div className="space-y-6">
                        {providers.map((provider, i) => (
                            <div key={i} className="card-light rounded-2xl p-7 border border-brand-100">
                                <div className="flex justify-between items-start mb-5">
                                    <div>
                                        <div className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-1">{provider.tag}</div>
                                        <h3 className="text-2xl font-heading font-black text-brand-950 mb-1">{provider.name}</h3>
                                        <div className="text-slate-500 text-xs">{provider.tech}</div>
                                    </div>
                                    <div className="text-right text-xs">
                                        <div className="text-brand-GOLD font-black uppercase tracking-widest mb-1">Coverage</div>
                                        <div className="text-slate-500">{provider.coverage}</div>
                                    </div>
                                </div>

                                {/* Pros */}
                                <div className="grid md:grid-cols-2 gap-6 mb-6 pb-6 border-b border-brand-100">
                                    <div>
                                        <div className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                                            <CheckCircle size={16} className="text-brand-GOLD" />
                                            Pros
                                        </div>
                                        <ul className="space-y-1">
                                            {provider.pros.map((pro, j) => (
                                                <li key={j} className="text-slate-500 text-xs flex items-start gap-2">
                                                    <span className="text-brand-GOLD mt-0.5">•</span>
                                                    <span>{pro}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                                            <AlertCircle size={16} className="text-brand-GOLD" />
                                            Considerations
                                        </div>
                                        <ul className="space-y-1">
                                            {provider.cons.map((con, j) => (
                                                <li key={j} className="text-slate-500 text-xs flex items-start gap-2">
                                                    <span className="text-brand-GOLD">•</span>
                                                    <span>{con}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                                    {provider.plans.map((plan, j) => (
                                        <div key={j} className="bg-white rounded-lg p-3 text-center">
                                            <div className="text-brand-950 font-bold text-sm">{plan.speed}</div>
                                            <div className="text-brand-GOLD font-black text-lg">{plan.price}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* By Location */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <MapPin className="inline text-brand-GOLD mr-2" size={28} />
                        Internet by Location: What You Will Actually Get
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        Internet quality varies dramatically by neighborhood. Here is what to expect in popular expat locations:
                    </p>
                    <div className="space-y-4">
                        {locations.map((loc, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-heading font-black text-brand-950">{loc.name}</h3>
                                    <div className="text-right">
                                        <div className="text-brand-GOLD font-black text-sm">{loc.typical}</div>
                                        <div className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Typical speed</div>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-xs mb-3 leading-relaxed">{loc.notes}</p>
                                <div className="border-t border-brand-100 pt-2">
                                    <span className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest">Best option: </span>
                                    <span className="text-slate-500 text-xs">{loc.best}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Installation Process */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        The Installation Process
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        Getting internet installed in Panama is straightforward. Here is the typical timeline and requirements:
                    </p>
                    <div className="space-y-4">
                        {installation.map((item, i) => (
                            <div key={i} className="flex items-start gap-5 card-light rounded-xl p-5 border border-brand-100">
                                <div className="w-10 h-10 rounded-full bg-brand-GOLD/10 border border-brand-GOLD/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-GOLD font-black text-sm">{i + 1}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="text-brand-950 font-bold text-sm">{item.step}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed mt-1">{item.detail}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contract Note */}
                    <div className="mt-6 bg-brand-TEAL/10 rounded-xl p-5 border border-brand-TEAL/30">
                        <div className="text-brand-TEAL font-black uppercase tracking-widest text-[10px] mb-2">Important: Contract Timing</div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Do NOT sign a long-term internet contract until your housing is completely confirmed. Your first month in Panama, you might move 2–3 times while finding the right place. Most furnished rentals include internet, so ask about this before paying separately.
                        </p>
                    </div>
                </section>

                {/* Co-working Option */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Globe className="inline text-brand-GOLD mr-2" size={28} />
                        Co-working Spaces (Internet Included)
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        If you are still settling in or need super-fast internet for important calls, these co-working spaces have excellent connections:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {coworking.map((space, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <h3 className="text-brand-950 font-bold text-sm mb-3">{space.name}</h3>
                                <div className="space-y-2">
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Internet Speed</div>
                                        <div className="text-slate-500 text-xs">{space.speed}</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Location</div>
                                        <div className="text-slate-500 text-xs">{space.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tips for Expats */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Zap className="inline text-brand-GOLD mr-2" size={28} />
                        5 Tips for Getting Internet as an Expat
                    </h2>
                    <div className="space-y-4">
                        {tips.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <h3 className="text-brand-950 font-bold text-sm mb-2">{item.tip}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{item.why}</p>
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
                        Stay Connected in Panama
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Internet setup is one of many logistics when moving. Our team handles this and dozens of other practical details so you can focus on your new life. Let us guide you through the move.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/${lang}/contacto`}
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Talk to Our Advisors <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/blog/panama-sim-card-guide`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Mobile SIM Card Guide
                        </Link>
                    </div>
                </section>

            </div>
        </article>
    );
}
