import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, FileText, AlertCircle, MapPin, Zap } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const slug = 'panama-drivers-license-foreigners';
  const domain = 'https://panamarealestatesale.com';
  const canonical = `${domain}/${lang}/blog/${slug}`;

  return {
    title: 'Get Driver License in Panama 2026: Foreigners Guide, Cost & Process',
    description: 'How to get a Panama driver license. Requirements, cost, DMV process, written test. Drive legally in Panama.',
    keywords: 'Panama driver license, driver license Panama foreigners, DMV Panama, driving permit Panama',
    alternates: {
        canonical,
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/panama-drivers-license-foreigners',
            'es': 'https://panamarealestatesale.com/es/blog/panama-drivers-license-foreigners',
            'pt': 'https://panamarealestatesale.com/pt/blog/panama-drivers-license-foreigners',
            'de': 'https://panamarealestatesale.com/de/blog/panama-drivers-license-foreigners',
        },
    },
    openGraph: {
        title: 'Get Driver License in Panama 2026: Foreigners Guide, Cost & Process',
        description: 'How to get a Panama driver license. Requirements, cost, DMV process, written test. Drive legally in Panama.',
        type: 'article',
        url: canonical,
        images: [{ url: 'https://images.unsplash.com/photo-1555949519-bb6e7a9c8e4f?w=1200&q=80', width: 1200, height: 630, alt: 'Panama driver license' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Get Driver License in Panama 2026: Foreigners Guide, Cost & Process',
        description: 'How to get a Panama driver license. Requirements, cost, DMV process, written test. Drive legally in Panama.',
        images: ['https://images.unsplash.com/photo-1555949519-bb6e7a9c8e4f?w=1200&q=80'],
    },
};
}

const reciprocityCountries = [
    'USA (all states)',
    'Canada',
    'UK',
    'Germany',
    'Spain',
    'France',
    'Italy',
    'Netherlands',
    'Belgium',
    'Sweden',
    'Colombia',
    'Venezuela',
    'Argentina',
    'Chile',
    'Peru',
    'Uruguay',
    'Brazil',
];

const exchangeProcess = [
    {
        step: '1',
        title: 'Get official driving record from your home country DMV',
        detail: 'Request a "certified abstract" or "driving record" from your state\'s DMV (USA). Include certified copy showing clean record.',
    },
    {
        step: '2',
        title: 'Get it apostilled',
        detail: 'An apostille is an official certification. Get from Secretary of State office (USA) or equivalent. Cost: $10–20. Takes 1–2 weeks.',
    },
    {
        step: '3',
        title: 'Get medical certificate from Panama doctor',
        detail: 'Visit any clinic in Panama for basic health check + eye test. Cost: $20–50. Same-day usually.',
    },
    {
        step: '4',
        title: 'Visit ATTT office with all documents',
        detail: 'Main office: Via Ricardo J. Alfaro, Panama City. Also offices in Chorrera, David, and other cities.',
    },
    {
        step: '5',
        title: 'Pay license fee',
        detail: 'Fee: $25–40. Pay at ATTT office or designated bank.',
    },
    {
        step: '6',
        title: 'Receive license',
        detail: 'Processing: same day to 2 weeks (depends on queue). Laminated card mailed or picked up.',
    },
];

const requiredDocuments = [
    { doc: 'Valid foreign driver\'s license', status: 'REQUIRED', notes: 'Original (not copy)' },
    { doc: 'Passport', status: 'REQUIRED', notes: 'Valid, original' },
    { doc: 'Panama residency ID (cedula or cedula de extranjeria)', status: 'REQUIRED', notes: 'Proof of residency' },
    { doc: 'Apostilled driving record', status: 'REQUIRED', notes: 'From home country DMV' },
    { doc: 'Medical certificate', status: 'REQUIRED', notes: 'From licensed Panama doctor. Shows eye test + health' },
    { doc: 'Proof of SOAT insurance', status: 'REQUIRED', notes: 'Third-party liability insurance (see below)' },
];

const licenseTypes = [
    { type: 'B', category: 'Private Vehicle', for: 'Most common for expats' },
    { type: 'C', category: 'Motorcycle', for: 'If you ride' },
    { type: 'D', category: 'Bus/Public Transport', for: 'Professional only' },
    { type: 'E', category: 'Heavy Trucks', for: 'Professional only' },
];

const drivingLaws = [
    { law: 'Drive on right side', detail: 'Same as USA/Canada' },
    { law: 'Speed limits', detail: '80 km/h highway, 50 km/h city, 30 km/h school zones' },
    { law: 'Cell phone', detail: 'Hands-free only (Bluetooth OK)' },
    { law: 'Seatbelts', detail: 'Mandatory for all passengers' },
    { law: 'Blood alcohol limit', detail: '0.05% (lower than USA 0.08%)' },
    { law: 'Vehicle insurance', detail: 'SOAT (third-party) mandatory' },
    { law: 'Vehicle inspection', detail: 'Annual revisado (inspection) required' },
    { law: 'License type', detail: 'Type B for private cars, C for motorcycles' },
];

const insurance = [
    {
        type: 'SOAT (Mandatory)',
        cost: '$100–200/year',
        coverage: 'Third-party liability only',
        where: 'Any bank or ATTT office',
        notes: 'Legal minimum. Covers damage you do to others.',
    },
    {
        type: 'Comprehensive',
        cost: '$300–800/year',
        coverage: 'Full coverage (theft, accident, etc)',
        where: 'Insurance companies (ASSA, La Nacional, Mapfre, Ancon)',
        notes: 'Recommended if you own the car. Covers you.',
    },
];

const timeline = [
    { step: 'Get apostille from home country', time: '1–2 weeks before leaving' },
    { step: 'Arrive in Panama', time: 'Day 1' },
    { step: 'Get medical certificate (optional before visit)', time: 'Day 1–2 in Panama' },
    { step: 'Visit ATTT office', time: 'Day 3–5' },
    { step: 'License processing', time: 'Same day to 2 weeks' },
    { step: 'License ready', time: 'Total: 2–4 weeks from arriving' },
];

const faqs = [
    {
        q: 'Do I need a Panama license if I have a US license?',
        a: 'Your US license is valid for the first 90 days. After 90 days, you must get a Panama license. You cannot renew your US license in Panama — it must be done from the USA.',
    },
    {
        q: 'How much does it cost to get a Panama license?',
        a: 'License fee: $25–40. Medical certificate: $20–50. Getting apostille in home country: $10–20. Total: $55–110 (plus any shipping for apostille). No hidden fees.',
    },
    {
        q: 'How long does it take?',
        a: 'If you already have the apostille: 1–2 weeks from ATTT office visit. Total from arriving in Panama: 2–4 weeks. You can drive on your US license during this time.',
    },
    {
        q: 'What if my country is NOT on the reciprocity list?',
        a: 'You must take a written test (available in English or Spanish — request English). You still need to pass an eye test and driving test. Same documents required. Plan for 3–4 weeks.',
    },
    {
        q: 'Is the driving test hard?',
        a: 'Not really. It is designed for locals, not expats. Test is in Spanish or English (your choice). Common sense questions. Driving test is basic. Most people pass first try.',
    },
];

export default async function PanamaDriversLicensePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80"
                        alt="Driving in Panama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        DRIVING GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        How to Get a Panama<br />Driver\'s License 2026
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        License exchange process, required documents, vehicle insurance, driving laws, and step-by-step guide for foreigners.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Getting a Panama driver\'s license as a foreigner is straightforward if your home country has a reciprocity agreement with Panama — which most do. If so, you exchange your foreign license for a Panama license WITHOUT taking a written test. It takes 1–2 weeks and costs under $100. This guide covers the entire process, required documents, driving laws, and vehicle insurance.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        Important: You can drive on your US/foreign license for the first 90 days. After that, you must have a Panama license.
                    </p>
                </section>

                {/* Timeline */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Timeline: From Arriving to Having a License
                    </h2>
                    <div className="space-y-3 mb-6">
                        {timeline.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-4">
                                <div className="flex-1">
                                    <div className="text-brand-950 font-bold text-sm">{item.step}</div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <div className="text-brand-GOLD font-black text-xs">{item.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-TEAL/10 rounded-xl p-5 border border-brand-TEAL/30">
                        <div className="text-brand-TEAL font-black uppercase tracking-widest text-[10px] mb-2">Pro Tip: Get Apostille Before Arriving</div>
                        <p className="text-slate-500 text-sm">
                            The apostille takes 1–2 weeks. Request it from your home country BEFORE you leave. That way, you can visit ATTT within days of arriving in Panama and have your license within 1–2 weeks.
                        </p>
                    </div>
                </section>

                {/* Reciprocity */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <CheckCircle className="inline text-brand-GOLD mr-2" size={28} />
                        License Exchange (No Test Required)
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        If your country has a reciprocity agreement with Panama, you can EXCHANGE your license for a Panama license WITHOUT taking a written or driving test. These countries qualify:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2 mb-8">
                        {reciprocityCountries.map((country, i) => (
                            <div key={i} className="flex items-center gap-2 text-white text-sm">
                                <CheckCircle size={14} className="text-brand-GOLD flex-shrink-0" />
                                <span>{country}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-GOLD/10 rounded-xl p-5 border border-brand-GOLD/30">
                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-2">Not on This List?</div>
                        <p className="text-slate-500 text-sm">
                            If your country is NOT on the reciprocity list, you must take a written test (available in English) and a driving test. Same documents required. Plan for 3–4 weeks instead of 1–2.
                        </p>
                    </div>
                </section>

                {/* Step by Step */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <FileText className="inline text-brand-GOLD mr-2" size={28} />
                        Step-by-Step Exchange Process (USA Citizens)
                    </h2>
                    <div className="space-y-4 mb-8">
                        {exchangeProcess.map((item, i) => (
                            <div key={i} className="flex items-start gap-5 card-light rounded-xl p-5 border border-brand-100">
                                <div className="w-10 h-10 rounded-full bg-brand-GOLD/10 border border-brand-GOLD/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-GOLD font-black text-sm">{item.step}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="text-brand-950 font-bold text-sm mb-1">{item.title}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{item.detail}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-TEAL/10 rounded-xl p-5 border border-brand-TEAL/30">
                        <div className="text-brand-TEAL font-black uppercase tracking-widest text-[10px] mb-2">ATTT Office Locations</div>
                        <p className="text-slate-500 text-sm">
                            Main office: Via Ricardo J. Alfaro, Panama City. Other offices: Chorrera, David, and regional locations. Hours: 8am–4pm weekdays. Bring your documents and passport — no appointment needed, but go early for shorter lines.
                        </p>
                    </div>
                </section>

                {/* Documents */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <AlertCircle className="inline text-brand-GOLD mr-2" size={28} />
                        Required Documents Checklist
                    </h2>
                    <div className="space-y-3 mb-6">
                        {requiredDocuments.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-4 border border-brand-100">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="text-brand-950 font-bold text-sm">{item.doc}</div>
                                        <div className="text-slate-500 text-xs mt-1">{item.notes}</div>
                                    </div>
                                    <div className={`flex-shrink-0 px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest ${
                                        item.status === 'REQUIRED'
                                            ? 'bg-brand-GOLD/20 text-brand-GOLD'
                                            : 'bg-brand-TEAL/20 text-brand-TEAL'
                                    }`}>
                                        {item.status}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-GOLD/10 rounded-xl p-5 border border-brand-GOLD/30">
                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-2">Pro Tip: Get Originals</div>
                        <p className="text-slate-500 text-sm">
                            ATTT wants originals, not photocopies. Bring the actual apostilled driving record, passport, and original foreign license. ATTT will make copies if needed.
                        </p>
                    </div>
                </section>

                {/* License Types */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Types of Licenses
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Panama issues different license types depending on the vehicle. Most expats need Type B (private vehicle):
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {licenseTypes.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-brand-950 font-bold text-sm">Type {item.type}</h3>
                                    {item.type === 'B' && (
                                        <span className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-brand-GOLD/20 rounded">
                                            Most Common
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-1">Category</div>
                                    <div className="text-slate-500 text-xs mb-3">{item.category}</div>
                                </div>
                                <div>
                                    <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-1">For</div>
                                    <div className="text-slate-500 text-xs">{item.for}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Driving Laws */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Zap className="inline text-brand-GOLD mr-2" size={28} />
                        Driving Laws You Must Know
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Traffic police in Panama actively enforce these rules. Violations result in fines, confiscation of license, or vehicle impound:
                    </p>
                    <div className="space-y-3">
                        {drivingLaws.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-4">
                                <span className="text-brand-GOLD font-black text-sm flex-shrink-0 mt-0.5">•</span>
                                <div className="flex-1">
                                    <div className="text-brand-950 font-bold text-sm">{item.law}</div>
                                    <div className="text-slate-500 text-xs">{item.detail}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Insurance */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Vehicle Insurance (SOAT & Comprehensive)
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Vehicle insurance is mandatory in Panama. You need at minimum third-party liability (SOAT). Comprehensive is optional but recommended if you own the car:
                    </p>
                    <div className="space-y-4 mb-6">
                        {insurance.map((ins, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <h3 className="text-brand-950 font-bold text-sm mb-4">{ins.type}</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-1">Cost</div>
                                        <div className="text-slate-500 text-xs font-bold">{ins.cost}</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-1">Coverage</div>
                                        <div className="text-slate-500 text-xs">{ins.coverage}</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-1">Where to Get</div>
                                        <div className="text-slate-500 text-xs">{ins.where}</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-1">Notes</div>
                                        <div className="text-slate-500 text-xs">{ins.notes}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-TEAL/10 rounded-xl p-5 border border-brand-TEAL/30">
                        <div className="text-brand-TEAL font-black uppercase tracking-widest text-[10px] mb-2">Get SOAT Immediately</div>
                        <p className="text-slate-500 text-sm">
                            Buy SOAT (third-party liability) at ANY bank or ATTT office. It takes 15 minutes and costs $100–200/year. You must have proof of insurance in your vehicle at all times. Police will ask for it.
                        </p>
                    </div>
                </section>

                {/* Tips */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Expat Driving Tips
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                title: 'Get an International Driving Permit (IDP) before leaving home',
                                detail: 'AAA issues these for $20 and they are valid globally for 1 year. Useful as backup to show police.',
                            },
                            {
                                title: 'Always carry your original license, registration, and insurance proof',
                                detail: 'Copies are okay for daily driving, but originals are required if stopped by police.',
                            },
                            {
                                title: 'Traffic is worse than you think during rush hour',
                                detail: '7–9am and 5–7pm are brutal in Panama City. Plan around these times. Uber beats driving.',
                            },
                            {
                                title: 'Parking costs add up fast',
                                detail: 'Malls have free parking. Street parking is scarce. Parking meters are common in old neighborhoods. Budget for parking.',
                            },
                            {
                                title: 'Do NOT drive in your first month',
                                detail: 'Use Uber to learn the city, neighborhoods, and roads. After 3–6 months, reassess if you actually need a car.',
                            },
                        ].map((tip, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <h3 className="text-brand-950 font-bold text-sm mb-2">{tip.title}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{tip.detail}</p>
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
                        Navigate Panama's Driving Laws with Confidence
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Getting your license is just one of many logistics. Our team guides you through every step of relocation — housing, visas, driving, and all the practical details. Let us help you settle in smoothly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/${lang}/contacto`}
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Get Expert Guidance <ArrowRight size={16} />
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
