import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, Briefcase, Home, Users, Calendar, DollarSign, BookOpen } from 'lucide-react';
import { PanamaCityScene } from '@/components/three/ThreeComponents';


export const metadata: Metadata = {
    title: 'How to Move to Panama 2026: Step-by-Step Complete Guide',
    description: 'Step-by-step guide to move to Panama. Visa, shipping, housing, banking, residency, costs.',
    keywords: 'how to move to Panama, moving to Panama, Panama relocation guide, Panama visa requirements',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/how-to-move-to-panama-step-by-step-2026',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/how-to-move-to-panama-step-by-step-2026',
            'es': 'https://panamarealestatesale.com/es/blog/how-to-move-to-panama-step-by-step-2026',
            'pt': 'https://panamarealestatesale.com/pt/blog/how-to-move-to-panama-step-by-step-2026',
            'de': 'https://panamarealestatesale.com/de/blog/how-to-move-to-panama-step-by-step-2026',
        },
    },
    openGraph: {
        title: 'How to Move to Panama 2026: Step-by-Step Complete Guide',
        description: 'Step-by-step guide to move to Panama. Visa, shipping, housing, banking, residency, costs.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/how-to-move-to-panama-step-by-step-2026',
        images: [{ url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80', width: 1200, height: 630, alt: 'Moving to Panama' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'How to Move to Panama 2026: Step-by-Step Complete Guide',
        description: 'Step-by-step guide to move to Panama. Visa, shipping, housing, banking, residency, costs.',
        images: ['https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80'],
    },
};

const phases = [
    {
        phase: 'Phase 1',
        title: 'PLANNING',
        duration: 'Months 1–3',
        color: 'brand-TEAL',
        tasks: [
            'Do a scouting trip: Visit Panama City, Boquete, and Coronado for 10-14 days minimum. Stay in different neighborhoods, eat at local restaurants, rent a car, and explore.',
            'Choose your visa pathway: Pensionado Visa ($1,000/mo), Friendly Nations (if eligible), or Investor Visa ($500K real estate). Most retirees use Pensionado.',
            'Decide on location: Urban (Panama City), Mountain (Boquete), or Beach (Coronado, Pedasi). Climate, healthcare access, and community vibe matter.',
            'Research schools (if family): Elite International School, Balboa Academy, Casco Viejo Academy. Tuition ranges $8K-20K/year.',
            'Set realistic budget: Include one-time costs (flight $600-1,200, deposit on apartment $1,000-2,000, furniture/setup $2,000-5,000) plus 3-month runway.',
            'Gather documents early: Birth certificate, marriage certificate (apostilled), passport copies, police clearance. Apostille takes 4-8 weeks per document.',
            'Review financial situation: Calculate monthly income from Social Security, pension, rental income. Panama Pensionado requires $1,000/month minimum.',
        ],
    },
    {
        phase: 'Phase 2',
        title: 'PREPARATION',
        duration: 'Months 3–6',
        color: 'brand-GOLD',
        tasks: [
            'Hire Panama immigration lawyer: Cost $1,500-3,000 for Pensionado visa. Do not DIY — paperwork changes yearly. Ask for referrals from expat Facebook groups.',
            'Start apostille process: Contact your vital records office. Mail documents to Secretary of State. Process: 4-8 weeks per document. Do this NOW.',
            'Get international health insurance: Many US policies do not cover abroad. Look into Allianz, IMG, or local Panama insurers. Budget $200-400/month for 65+.',
            'Notify your US/home banks: Tell them you are moving internationally. Arrange wire transfer capabilities. This takes time.',
            'Set up tax planning: Consult a CPA on FEIE (Foreign Earned Income Exclusion) if self-employed. Panama has 0% tax on foreign income, but US citizens still file.',
            'Start language learning: If not Spanish-fluent, begin now. Apps: Duolingo (free), Babbel ($15/mo), iTalki tutors ($15-25/hr). You will not be fluent in 3 months, but basics help.',
            'Decide what to ship vs sell: International shipping container costs $8,000-15,000. Often cheaper to sell furniture and repurchase in Panama.',
            'Get international driver\'s license: Visit AAA, pay $20, get IDP. Valid in Panama for 12 months. Arrange this before you leave.',
            'Research neighborhoods: Shortlist 3 apartments in your preferred locations. Contact rental agencies, Airbnb long-term rentals, or Facebook groups.',
        ],
    },
    {
        phase: 'Phase 3',
        title: 'EXECUTION',
        duration: 'Months 6–9',
        color: 'brand-CORAL',
        tasks: [
            'Book one-way flight: Copa Airlines (best hub in Panama City), American, United. Most US cities have direct flights. Budget $600-1,200 depending on season.',
            'Ship household goods (if applicable): Book container 6-8 weeks before sail date. Coordinate with shipping company on timing.',
            'Arrive and secure short-term housing: Rent furnished apartment first (1-3 months, $800-1,500/mo via Airbnb or furnished rentals). Do NOT commit to a year-long lease on day 1.',
            'Get Panamanian SIM card: Day 1: Visit Claro or Movistar store. Get phone number, data plan ($30-50/mo for 20GB). Now family can reach you.',
            'Open bank account: Bring: Passport, visa letter from immigration lawyer, proof of income, proof of address. This takes 2-4 weeks and requires multiple visits.',
            'Submit visa application: Work with your immigration lawyer. Submit with bank statements, income verification, and all apostilled documents.',
            'Find permanent rental or property: After 30-60 days in short-term housing, you have a feel for neighborhoods. Search for 6-12 month rental ($1,000-2,000/mo) or property to purchase.',
            'Register with your country\'s embassy: Email your embassy with your new address. They will add you to their citizen registry and alert system.',
        ],
    },
    {
        phase: 'Phase 4',
        title: 'SETTLING',
        duration: 'Months 9–12',
        color: 'brand-TEAL',
        tasks: [
            'Visa approved: Receive your Pensionado card. It includes 22+ government discounts on utilities, flights, dining, hotels, healthcare.',
            'Get Panama driver\'s license: Visa holders must obtain local license within 90 days. Take the written test (Spanish or English), pay $50. Done in one visit.',
            'Join expat community: Facebook groups (Panama Expats, Boquete Living, Coronado Retirees). Meet-ups, book clubs, sports groups. Community makes transition smooth.',
            'Find local services: Dentist, GP, gym, accountant (CPA Panama). Ask other expats for recommendations. Quality is high in Panama City, good in Boquete/Coronado.',
            'Explore your region: Panama is small. Spend weekends driving. From Panama City: 30 min to Gatun Lake, 1 hr to Coronado, 2 hrs to Boquete, 3 hrs to Bocas del Toro.',
            'Consider property purchase (optional): If you want to buy, wait 6-12 months. Do not rush. Rent first. When ready, hire local real estate lawyer, verify title, inspect property.',
        ],
    },
];

const costPhases = [
    { phase: 'Phase 1 (Planning)', costs: '$300-700', items: 'Scouting trip (flights, hotel, meals)' },
    { phase: 'Phase 2 (Preparation)', costs: '$1,500-3,000', items: 'Immigration lawyer, apostilles, health insurance setup' },
    { phase: 'Phase 3 (Execution)', costs: '$4,000-12,000', items: 'Flight, shipping (optional), first month rent, setup' },
    { phase: 'Phase 4 (Settling)', costs: '$2,000-5,000', items: 'Driver\'s license, furnishings, local service setup' },
];

const faqData = [
    {
        q: 'How much should I save before moving to Panama?',
        a: 'Budget a minimum of $15,000-20,000 for the full 12-month process plus first 3 months of living expenses. This includes visa lawyer fees ($1,500-3,000), one scouting trip ($2,000-3,000), flights ($600-1,200), initial rent deposits ($2,000-3,000), and a 3-month runway ($4,500-7,500 depending on lifestyle). If you are shipping goods, add $8,000-15,000. Most successful relocators save $25,000-35,000.',
    },
    {
        q: 'Do I need to speak Spanish to move to Panama?',
        a: 'No, but it helps significantly. English is widely spoken in expat zones (Panama City, Boquete, Coronado). Banks, hospitals, and government offices have English speakers. However, local neighborhoods, markets, and daily interactions often require Spanish. Budget 3-6 months to become conversational using apps and tutors. Many expats live 10+ years speaking minimal Spanish — not recommended, but possible.',
    },
    {
        q: 'Can I keep my US driver\'s license?',
        a: 'Your US license is valid in Panama for 90 days. After that, you must get a Panama driver\'s license. The test is offered in English. Process: written test ($50), vision test, photo. Done in one visit. Your US license does not expire, so keep it as a backup ID.',
    },
    {
        q: 'What if my visa application is rejected?',
        a: 'Rejection is rare if you have proper documentation and income verification. Most rejections happen when applicants try DIY or use bad lawyers. Work with an established immigration law firm. If rejected, you can appeal or reapply. The process costs $1,500-3,000, but rejection is uncommon.',
    },
    {
        q: 'Should I buy property immediately or rent first?',
        a: 'RENT FIRST for 6-12 months. Do not buy on day 1. Panama\'s neighborhoods vary wildly. Coronado might be perfect for you, or you might hate the hourly traffic. Boquete might be idyllic, or you might find it too small. Rent, live in your chosen area, then decide. Many expats regret rushing into property purchase.',
    },
    {
        q: 'How long does the visa approval take?',
        a: 'Typically 30-60 days from submission with a lawyer. If you gather documents correctly and use an established lawyer, you will hit the 30-45 day mark. Delays happen if documents are missing, apostilles are incorrect, or immigration is backlogged. Your lawyer will expedite.',
    },
    {
        q: 'Can I work remotely while on a Pensionado visa?',
        a: 'Yes. Pensionado visa allows you to live in Panama. It does not restrict employment or remote work. You can run a business, be self-employed, or work for a US company. Your income must come from outside Panama (Social Security, pension, investments, US business). If you want to work locally (employ Panamanians), you need work permits and business registration — more complex.',
    },
    {
        q: 'What is the easiest visa path for most people?',
        a: 'Pensionado Visa. Requirement: $1,000/month verifiable income (Social Security counts 100%). Process: lawyer handles it, 30-60 days, costs $1,500-3,000. No investment required. No business start-up needed. Most expats use this. Friendly Nations Visa is faster (15-30 days) if you are from eligible countries (Spain, Italy, UK, Canada, etc.), but requires the same $1,000/month income.',
    },
];

export default async function HowToMovePanamaPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
    <>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How to Move to Panama 2026: Step-by-Step Complete Guide',
            description: 'Step-by-step guide to move to Panama. Visa, shipping, housing, banking, residency, costs.',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
            datePublished: '2026-01-15',
            dateModified: '2026-04-04',
            author: { '@type': 'Organization', name: 'VIP Expats Panama', url: 'https://panamarealestatesale.com' },
            publisher: { '@type': 'Organization', name: 'VIP Expats Panama', logo: { '@type': 'ImageObject', url: 'https://panamarealestatesale.com/og-image.jpg' } },
          }),
        }}
      />
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80"
                        alt="Moving to Panama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        RELOCATION GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        How to Move to Panama<br />in 12 Months
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        A complete, phase-by-phase timeline for planning your move, preparing documents, executing the relocation, and settling into Panama life.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Moving to Panama is not complicated, but it does require planning. This guide breaks the process into 4 phases over 12 months. Follow it, and your relocation will be smooth. Skip steps, and you will face delays, rejections, and frustration.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        Each phase has clear objectives, specific tasks, and realistic timelines. Whether you are a retiree, remote worker, or entrepreneur, this roadmap applies to you.
                    </p>
                </section>

                {/* Overview */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Calendar className="inline text-brand-GOLD mr-2" size={28} />
                        The 12-Month Timeline at a Glance
                    </h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {phases.map((p, i) => (
                            <div key={i} className="card-light rounded-xl p-4 border border-brand-100">
                                <div className={`text-[10px] font-black uppercase tracking-widest mb-2 text-brand-${p.color}`}>{p.phase}</div>
                                <h3 className="text-white font-bold text-lg mb-1">{p.title}</h3>
                                <p className="text-slate-400 text-xs font-semibold">{p.duration}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Phase 1 */}
                <section className="reveal-on-scroll">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-full bg-brand-TEAL/10 border border-brand-TEAL flex items-center justify-center flex-shrink-0">
                            <MapPin className="text-brand-TEAL" size={20} />
                        </div>
                        <div>
                            <div className="text-brand-TEAL text-[10px] font-black uppercase tracking-widest">Phase 1</div>
                            <h2 className="text-white text-3xl font-heading font-bold uppercase tracking-tighter">Planning (Months 1–3)</h2>
                        </div>
                    </div>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Phase 1 is about gathering information and testing your decision. Do not skip the scouting trip. Imagining Panama and living in Panama are different.
                    </p>
                    <div className="space-y-4">
                        {phases[0].tasks.map((task, i) => (
                            <div key={i} className="flex items-start gap-4 card-light rounded-xl p-5 border border-brand-100">
                                <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                                <p className="text-slate-500 text-sm leading-relaxed">{task}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Phase 2 */}
                <section className="reveal-on-scroll">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-full bg-brand-GOLD/10 border border-brand-GOLD flex items-center justify-center flex-shrink-0">
                            <Briefcase className="text-brand-GOLD" size={20} />
                        </div>
                        <div>
                            <div className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest">Phase 2</div>
                            <h2 className="text-white text-3xl font-heading font-bold uppercase tracking-tighter">Preparation (Months 3–6)</h2>
                        </div>
                    </div>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Phase 2 is where most expats stall. Apostilles are slow. Lawyers require follow-up. Banks need verification. Stay organized. This phase is foundational to your success.
                    </p>
                    <div className="space-y-4">
                        {phases[1].tasks.map((task, i) => (
                            <div key={i} className="flex items-start gap-4 card-light rounded-xl p-5 border border-brand-100">
                                <CheckCircle size={16} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                <p className="text-slate-500 text-sm leading-relaxed">{task}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Phase 3 */}
                <section className="reveal-on-scroll">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-full bg-brand-CORAL/10 border border-brand-CORAL flex items-center justify-center flex-shrink-0">
                            <Home className="text-brand-CORAL" size={20} />
                        </div>
                        <div>
                            <div className="text-brand-CORAL text-[10px] font-black uppercase tracking-widest">Phase 3</div>
                            <h2 className="text-white text-3xl font-heading font-bold uppercase tracking-tighter">Execution (Months 6–9)</h2>
                        </div>
                    </div>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Phase 3 is the move itself. You arrive in Panama. This is exciting, disorienting, and critical for early success. The first 90 days determine whether you thrive or struggle.
                    </p>
                    <div className="space-y-4">
                        {phases[2].tasks.map((task, i) => (
                            <div key={i} className="flex items-start gap-4 card-light rounded-xl p-5 border border-brand-100">
                                <CheckCircle size={16} className="text-brand-CORAL mt-1 flex-shrink-0" />
                                <p className="text-slate-500 text-sm leading-relaxed">{task}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Phase 4 */}
                <section className="reveal-on-scroll">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-full bg-brand-TEAL/10 border border-brand-TEAL flex items-center justify-center flex-shrink-0">
                            <Users className="text-brand-TEAL" size={20} />
                        </div>
                        <div>
                            <div className="text-brand-TEAL text-[10px] font-black uppercase tracking-widest">Phase 4</div>
                            <h2 className="text-white text-3xl font-heading font-bold uppercase tracking-tighter">Settling (Months 9–12)</h2>
                        </div>
                    </div>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Phase 4 is integration. Your visa is approved. You have a home. Now you build a life. This phase determines whether Panama becomes home or a failed experiment.
                    </p>
                    <div className="space-y-4">
                        {phases[3].tasks.map((task, i) => (
                            <div key={i} className="flex items-start gap-4 card-light rounded-xl p-5 border border-brand-100">
                                <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                                <p className="text-slate-500 text-sm leading-relaxed">{task}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3D Scene */}
                <section className="reveal-on-scroll bg-brand-50 rounded-2xl p-8 border border-brand-100">
                    <h3 className="text-white font-heading font-bold text-2xl mb-4 uppercase tracking-tight">Explore Panama City 3D</h3>
                    <p className="text-slate-500 text-sm mb-6">Get a visual feel for the capital where most expats begin their journey.</p>
                    <div className="rounded-xl overflow-hidden bg-white border border-brand-100" style={{ height: '400px' }}>
                        <PanamaCityScene />
                    </div>
                </section>

                {/* Budget Timeline */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Budget by Phase
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Here is what to expect to spend across the 12-month relocation process:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {costPhases.map((c, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <div className="text-brand-950 font-bold text-sm mb-2">{c.phase}</div>
                                <div className="text-brand-GOLD font-black text-xl mb-2">{c.costs}</div>
                                <p className="text-slate-500 text-xs leading-relaxed">{c.items}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-brand-50 rounded-2xl p-6 border border-brand-GOLD/20">
                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-xs mb-4">Total Investment Range</div>
                        <div className="text-white font-black text-3xl mb-2">$7,800 – $20,700</div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            This does not include your 3+ months of living expenses after arrival ($4,500-$7,500). Most expats budget $20,000-35,000 total for the entire transition including first quarters living costs.
                        </p>
                    </div>
                </section>

                {/* Visa Checklist */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <BookOpen className="inline text-brand-GOLD mr-2" size={28} />
                        Visa Documentation Checklist
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        For Pensionado Visa, you will need these documents. Collect them in Phase 1-2, have them apostilled by month 5, submit by month 6-7:
                    </p>
                    <div className="space-y-3">
                        {[
                            'Valid passport (must be valid for 6+ months)',
                            'Birth certificate (apostilled)',
                            'Marriage certificate (if married, apostilled)',
                            'Divorce decree (if applicable, apostilled)',
                            'Police clearance from your country (apostilled)',
                            'Income verification: Social Security statement, pension letter, or bank statements showing income deposits',
                            'Last 12 months of bank statements (showing $1,000/month average)',
                            'Proof of good health (letter from doctor or medical exam)',
                            'Signed permission letter if you have dependents',
                            'Passport copies (2-3 sets)',
                            'Passport-sized photos (4-6)',
                            'Panama address or temporary address on arrival',
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 card-light rounded-xl p-4 border border-brand-100">
                                <div className="w-5 h-5 rounded border-2 border-brand-GOLD flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <div className="w-2 h-2 bg-brand-GOLD rounded-full"></div>
                                </div>
                                <span className="text-slate-500 text-sm leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Critical Mistakes */}
                <section className="reveal-on-scroll bg-brand-CORAL/10 rounded-2xl p-8 border border-brand-CORAL/30">
                    <h3 className="text-white font-heading text-2xl font-bold mb-6 uppercase tracking-tight">Common Mistakes (Avoid These)</h3>
                    <div className="space-y-4">
                        {[
                            {
                                mistake: 'Trying to DIY the visa',
                                why: 'Immigration requirements change yearly. Form errors = rejections. Hiring a lawyer costs $1,500-3,000. Rejection costs $3,000+ in re-applications. Hire a lawyer.',
                            },
                            {
                                mistake: 'Not apostillating documents early',
                                why: 'Apostille takes 4-8 weeks per document. If you wait until month 5, you will miss deadlines. Start month 1.',
                            },
                            {
                                mistake: 'Skipping the scouting trip',
                                why: 'You might love Boquete online but hate it in person. Or Coronado is perfect but too expensive. The $2,000-3,000 scouting trip saves $50,000+ mistakes.',
                            },
                            {
                                mistake: 'Buying property immediately',
                                why: 'Wait 6-12 months. Many expats regret their first property choice. Rent, explore, then commit to buying.',
                            },
                            {
                                mistake: 'Not learning Spanish',
                                why: 'You can survive without it, but you will miss 80% of local life. Invest 3-6 months in basics. Your quality of life improves dramatically.',
                            },
                            {
                                mistake: 'Underestimating the first 90 days',
                                why: 'It is disorienting. You do not know the city, you are jet-lagged, your bank account is not set up. Expect stress. Build a support network immediately.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <div className="text-brand-CORAL font-black uppercase tracking-widest text-[10px] mb-2">{item.mistake}</div>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.why}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-5">
                        {faqData.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <details className="cursor-pointer group">
                                    <summary className="flex items-center justify-between font-bold text-white text-sm hover:text-brand-GOLD transition-colors">
                                        <span>{item.q}</span>
                                        <span className="text-brand-GOLD group-open:rotate-180 transition-transform">+</span>
                                    </summary>
                                    <div className="mt-4 pt-4 border-t border-brand-100">
                                        <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Key Takeaways */}
                <section className="reveal-on-scroll bg-brand-TEAL/10 rounded-2xl p-8 border border-brand-TEAL/30">
                    <h3 className="text-white font-heading text-2xl font-bold mb-6 uppercase tracking-tight">Key Takeaways</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">12 months is realistic.</strong> Do not rush. Each phase builds on the previous one.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Do the scouting trip.</strong> It is the cheapest insurance against making a $50,000 mistake.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Hire a lawyer.</strong> Immigration is not DIY. $1,500-3,000 now saves $10,000+ in rejections and redo fees.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Rent before buying.</strong> 6-12 months of renting teaches you what you actually want in Panama.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Build your network early.</strong> Expats who join communities thrive. Those who isolate struggle.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-brand-TEAL mt-1 flex-shrink-0" />
                            <span className="text-slate-500 text-sm"><strong className="text-white">Budget $20,000-35,000</strong> for the full relocation including first quarter living costs.</span>
                        </li>
                    </ul>
                </section>

                {/* Moving Companies & Services */}
                <section className="bg-brand-50 border border-brand-100 rounded-2xl p-8 my-12">
                  <h2 className="font-heading text-2xl font-bold text-brand-950 mb-2">Trusted Moving Companies & Relocation Services</h2>
                  <p className="text-brand-700 mb-6">Moving to Panama is a big step. Here are vetted services that cover every part of the journey, from packing your home to getting settled in your new neighborhood.</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-brand-TEAL mb-3">🚛 International Movers (Door-to-Door)</h3>
                      <ul className="space-y-2 text-sm text-brand-700">
                        <li><strong className="text-brand-950">International Van Lines</strong> — Top-rated US international mover serving Panama. Avg $4,000–$8,000 for a 1BR apartment. Free quote at internationalvanlines.com</li>
                        <li><strong className="text-brand-950">Schumacher Cargo Logistics</strong> — Specializes in Panama shipments including vehicles. Port: Colón Free Zone.</li>
                        <li><strong className="text-brand-950">Allied Van Lines International</strong> — Full-service door-to-door from any US/Canada city to Panama City.</li>
                        <li><strong className="text-brand-950">Moveboxer.com</strong> — Compare quotes from multiple international movers instantly.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-brand-TEAL mb-3">🏠 Panama-Side Receiving & Local Services</h3>
                      <ul className="space-y-2 text-sm text-brand-700">
                        <li><strong className="text-brand-950">Relocate Panama</strong> — Full white-glove relocation: airport pickup, temporary housing, school search, and banking setup.</li>
                        <li><strong className="text-brand-950">Moving Panama</strong> — English-speaking local movers for in-country moves and container receiving.</li>
                        <li><strong className="text-brand-950">Panama Relocation Tours</strong> — The famous 5-day tours showing you exactly where to live before you commit. panamarelocationtours.com</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-brand-TEAL mb-3">🚗 Vehicle Shipping to Panama</h3>
                      <ul className="space-y-2 text-sm text-brand-700">
                        <li><strong className="text-brand-950">Schumacher Cargo</strong> — Ship your car to Colón, Panama. RoRo (roll-on/roll-off) avg $1,200–$2,000 from US East Coast.</li>
                        <li><strong className="text-brand-950">Montway Auto Transport</strong> — Door-to-port service across the US before international shipping.</li>
                        <li><em className="text-brand-600">Note: Panama charges 5–30% import tax on vehicles over 3 years old. Many expats buy locally instead.</em></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-brand-TEAL mb-3">💳 Financial Setup for New Arrivals</h3>
                      <ul className="space-y-2 text-sm text-brand-700">
                        <li><strong className="text-brand-950">Charles Schwab International Debit</strong> — Reimburses ALL ATM fees worldwide. Essential for Panama.</li>
                        <li><strong className="text-brand-950">Wise (formerly TransferWise)</strong> — Best exchange rates for sending money to Panama. Saves avg $200/year vs bank wires.</li>
                        <li><strong className="text-brand-950">Banistmo / BAC Credomatic / Global Bank</strong> — Main Panama banks for opening a local USD account as a new resident.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white rounded-xl border border-brand-100">
                    <p className="text-sm text-brand-700"><strong className="text-brand-950">💡 Pro Tip from VIP Expats:</strong> Book a Panama Relocation Tour BEFORE hiring movers. Seeing the country firsthand — Boquete vs. Panama City vs. Coronado — saves most expats from choosing the wrong location.</p>
                  </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Ready to Start Your Panama Journey?
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Our team specializes in guiding expats through each phase of relocation. We can help with lawyer referrals, apartment searches, visa guidance, and community introductions. Book a free consultation to discuss your specific situation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/${lang}/contacto`}
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Book Relocation Consultation <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/blog/panama-property-buying-process-guide`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Property Buying Guide
                        </Link>
                    </div>
                </section>

            </div>
        </article>
    </>
    );
}
