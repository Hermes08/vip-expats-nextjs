import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Calendar, DollarSign, FileText, Plane, Heart, Home } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const canonical = `https://panamarealestatesale.com/${lang}/guides/how-to-move-to-panama`;

  return {
    title: 'How to Move to Panama from the USA: Step-by-Step Guide 2026',
    description:
        'The complete guide to relocating to Panama in 2026 — visa options, banking, healthcare, shipping, and your first 30 days. Written for Americans making the move.',
    keywords:
        'how to move to panama, relocate to panama from usa, moving to panama guide, panama relocation 2026, expat panama move, panama residency visa',
    alternates: { canonical },
    openGraph: {
        title: 'How to Move to Panama from the USA: Step-by-Step Guide 2026',
        description: 'Visa options, banking, healthcare, and everything you need to relocate to Panama successfully.',
        type: 'article',
        url: canonical,
    },
};
}

const visas = [
    {
        name: 'Pensionado Visa',
        req: '$1,000/mo lifetime pension (Social Security qualifies)',
        time: '4–6 months',
        benefit: 'Permanent residency + the best retiree discount card in the hemisphere',
        tag: 'Most Popular',
        tagColor: 'text-brand-TEAL',
    },
    {
        name: 'Friendly Nations Visa',
        req: 'Passport from USA, Canada, EU + economic ties to Panama',
        time: '3–4 weeks',
        benefit: 'Fastest path to residency for Americans — simple, affordable',
        tag: 'Fastest',
        tagColor: 'text-brand-GOLD',
    },
    {
        name: 'Qualified Investor Visa',
        req: '$300,000 investment in Panama real estate or business',
        time: '2–3 months',
        benefit: 'Permanent residency + path to citizenship after 5 years',
        tag: 'Investors',
        tagColor: 'text-brand-CORAL',
    },
];

const timeline = [
    {
        phase: '6 Months Before',
        icon: Calendar,
        tasks: [
            'Choose your visa pathway — consult an immigration attorney ($1,000–$2,000)',
            'Gather documents: passport, birth certificate, police clearance, proof of income',
            'Visit Panama for 2–4 weeks — stay in Boquete, Coronado, and Panama City',
            'Research shipping companies and get quotes for your belongings',
        ],
    },
    {
        phase: '3 Months Before',
        icon: FileText,
        tasks: [
            'Submit visa application with local attorney',
            'Open a Panamanian bank account (Banistmo, BAC, or Banco Nacional)',
            'Arrange pet health certificates and USDA endorsement if bringing animals',
            'Sell, donate, or ship belongings — only bring what you truly use',
        ],
    },
    {
        phase: '1 Month Before',
        icon: Plane,
        tasks: [
            'Book your one-way flight (or multi-entry if testing the waters)',
            'Secure short-term rental for months 1–3 before committing to long-term',
            'Set up mail forwarding and notify US bank, SSA, and brokerage',
            'Transfer 3–6 months of expenses to your Panama account',
        ],
    },
    {
        phase: 'First 30 Days',
        icon: Home,
        tasks: [
            'Register with the nearest immigration office if visa is pending',
            'Get a Panamanian cell SIM (Claro or +Móvil) — $10–$20/mo',
            'Find your doctor and dentist — ask the expat Facebook groups for referrals',
            'Join local expat meetups — the community is your fastest learning curve',
        ],
    },
];

const costs = [
    { item: 'Immigration attorney fees', range: '$1,000 – $2,000' },
    { item: 'Visa application government fees', range: '$300 – $500' },
    { item: 'First + last month rent deposit', range: '$2,000 – $5,000' },
    { item: 'Shipping container (US → Panama)', range: '$3,000 – $8,000' },
    { item: 'Banking setup + initial funds', range: '$5,000 min recommended' },
    { item: 'Health insurance (first year)', range: '$1,200 – $3,600' },
    { item: 'Vehicle (if bringing from US)', range: '$3,000 – $5,000 in duties' },
    { item: 'Total move budget (conservative)', range: '$15,000 – $25,000' },
];

const bankingFacts = [
    'Panama uses the US Dollar — no exchange required',
    'Recommended banks: Banistmo, BAC International, Banco Nacional',
    'Opening requirements: passport, visa/immigration docs, proof of income, reference letter',
    'Process takes 4–8 weeks — start early, it is the most frustrating step',
    'Keep your US account active — some vendors and platforms still require it',
    'Wise or Charles Schwab debit card useful for the transition period',
];

export default async function HowToMoveToPanamaPage({ params }: { params: Promise<{ lang: string }> }) {
    await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="section-teal-soft py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80" alt="Moving to Panama" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                    <span className="tag-teal mb-5 inline-block">RELOCATION GUIDE · 2026</span>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mb-6 leading-tight mt-4">
                        How to Move to Panama<br />from the USA
                    </h1>
                    <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
                        The complete step-by-step guide — visa, banking, healthcare, shipping, and your first 30 days on the ground.
                    </p>
                </div>
            </section>

            <div className="max-w-3xl mx-auto px-4 py-14 space-y-14">

                {/* Why now */}
                <section className="reveal-on-scroll">
                    <p className="text-xl font-semibold text-white border-l-4 border-brand-TEAL pl-5 leading-relaxed">
                        Panama is the easiest country in Latin America to move to as an American. Dollarized economy, English widely spoken, Johns Hopkins-affiliated hospital, 2.5 hours from Miami — and the most generous retiree discount program in the hemisphere.
                    </p>
                    <p className="text-slate-500 mt-5 leading-relaxed">
                        This guide covers the practical mechanics of the move — not the theory. Every section is based on what our clients actually do when they relocate.
                    </p>
                </section>

                {/* Visa options */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        Step 1 — Choose Your Visa Pathway
                    </h2>
                    <div className="space-y-4">
                        {visas.map((v, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                                    <div>
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${v.tagColor}`}>{v.tag}</span>
                                        <h3 className="text-brand-950 font-bold text-lg">{v.name}</h3>
                                    </div>
                                    <span className="text-slate-500 text-xs font-bold">{v.time}</span>
                                </div>
                                <p className="text-slate-500 text-sm mb-1"><span className="text-slate-500 font-bold">Requires: </span>{v.req}</p>
                                <p className="text-slate-500 text-sm"><span className="text-slate-500 font-bold">Gets you: </span>{v.benefit}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex gap-4">
                        <Link href="/en/guides/pensionado-visa-panama" className="text-brand-TEAL text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1">
                            Pensionado Visa Full Guide <ArrowRight size={12} />
                        </Link>
                        <Link href="/en/guides/friendly-nations-visa-panama" className="text-brand-GOLD text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1">
                            Friendly Nations Visa <ArrowRight size={12} />
                        </Link>
                    </div>
                </section>

                {/* Timeline */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        Step 2 — Your 6-Month Timeline
                    </h2>
                    <div className="space-y-4">
                        {timeline.map((phase, i) => {
                            const Icon = phase.icon;
                            return (
                                <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-9 h-9 rounded-full bg-brand-TEAL/10 border border-brand-TEAL/30 flex items-center justify-center flex-shrink-0">
                                            <Icon size={15} className="text-brand-TEAL" />
                                        </div>
                                        <h3 className="text-brand-950 font-bold">{phase.phase}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {phase.tasks.map((task, j) => (
                                            <li key={j} className="flex items-start gap-3 text-slate-500 text-sm">
                                                <CheckCircle size={13} className="text-brand-TEAL mt-0.5 flex-shrink-0" />
                                                {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Move budget */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        <DollarSign className="inline text-brand-GOLD mr-1" size={22} />
                        Step 3 — Budget Your Move
                    </h2>
                    <div className="space-y-2">
                        {costs.map((item, i) => (
                            <div key={i} className={`flex justify-between items-center px-5 py-3 rounded-xl ${i === costs.length - 1 ? 'bg-brand-GOLD/10 border border-brand-GOLD/20' : 'bg-brand-50 border border-brand-100'}`}>
                                <span className={`text-sm ${i === costs.length - 1 ? 'text-white font-bold' : 'text-slate-500'}`}>{item.item}</span>
                                <span className={`font-black text-sm ${i === costs.length - 1 ? 'text-brand-GOLD' : 'text-white'}`}>{item.range}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Banking */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        Step 4 — Banking in Panama
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Banking is the most frustrating part of the move. Panama tightened its financial regulations post-FATF, making account opening harder for foreigners. Start early and use a local attorney.
                    </p>
                    <div className="space-y-2">
                        {bankingFacts.map((fact, i) => (
                            <div key={i} className="flex items-start gap-3 bg-brand-50 rounded-xl px-5 py-3 border border-brand-100">
                                <CheckCircle size={13} className="text-brand-TEAL mt-0.5 flex-shrink-0" />
                                <span className="text-slate-500 text-sm">{fact}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Healthcare */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-4 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        <Heart className="inline text-brand-CORAL mr-1" size={22} />
                        Step 5 — Healthcare Setup
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Panama City has Johns Hopkins-affiliated Hospital Punta Pacifica — the best private hospital in Central America. Specialist visits cost $50–$80. Private health insurance for a 60-year-old runs $200–$350/month.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-3">
                        {[
                            { label: 'Get a policy on arrival', detail: 'INS or Mapfre offer expat-friendly plans' },
                            { label: 'Find your GP first week', detail: 'Ask expat groups for English-speaking doctors' },
                            { label: 'Bring 6-month prescription supply', detail: 'Most US medications available but plan ahead' },
                        ].map((item, i) => (
                            <div key={i} className="bg-brand-50 rounded-xl p-4 border border-brand-100">
                                <div className="text-brand-950 font-bold text-xs mb-1">{item.label}</div>
                                <div className="text-slate-500 text-[11px] leading-relaxed">{item.detail}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-brand-50 p-8 rounded-2xl border-t-4 border-brand-TEAL text-center">
                    <h3 className="text-white font-heading text-2xl font-bold mb-3 uppercase italic tracking-tighter">
                        Ready to Make the Move?
                    </h3>
                    <p className="text-slate-500 mb-6 max-w-md mx-auto text-sm leading-relaxed">
                        We have helped hundreds of Americans relocate to Panama. One free call can save you months of research — and expensive mistakes.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-3 btn-3d btn-3d-teal px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs"
                    >
                        Book Free Relocation Call <ArrowRight size={14} />
                    </Link>
                </section>

                {/* Internal links */}
                <section className="grid sm:grid-cols-2 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Pensionado Visa — Full Guide', href: '/en/guides/pensionado-visa-panama' },
                        { label: 'Cost of Living Panama 2026', href: '/en/guides/cost-of-living-panama-2026' },
                        { label: 'Best Areas to Live in Panama', href: '/en/guides/best-areas-retire-panama' },
                        { label: 'Living in Panama City Guide', href: '/en/blog/living-in-panama-city' },
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
