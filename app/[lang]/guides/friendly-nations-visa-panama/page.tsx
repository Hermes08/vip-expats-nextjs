import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Globe } from 'lucide-react';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const l = lang === 'es' ? 'es' : 'en';
    const domain = 'https://panamarealestatesale.com';
    return {
        title: 'Friendly Nations Visa Panama 2026: The Fastest Path to Residency',
        description: "Panama's Friendly Nations Visa is the fastest residency path for Americans, Canadians, and EU citizens — often approved in 3–4 weeks. Full requirements and process guide.",
        keywords: 'friendly nations visa panama, panama residency visa, panama visa for americans, how to get residency in panama, friendly nations visa requirements 2026',
        alternates: {
            canonical: `${domain}/${l}/guides/friendly-nations-visa-panama`,
            languages: { en: `${domain}/en/guides/friendly-nations-visa-panama`, es: `${domain}/es/guides/friendly-nations-visa-panama` },
        },
        openGraph: {
            title: 'Friendly Nations Visa Panama 2026: The Fastest Path to Residency',
            description: "The fastest, simplest residency option for Americans and EU citizens moving to Panama.",
            type: 'article',
        },
    };
}

const eligibleCountries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Spain', 'Italy', 'Netherlands',
    'Belgium', 'Sweden', 'Norway', 'Denmark', 'Switzerland', 'Australia', 'New Zealand', 'Japan',
    'South Korea', 'Singapore', 'Argentina', 'Brazil', 'Chile', 'Colombia', 'Peru', 'Mexico',
    'Costa Rica', 'Uruguay', 'Portugal', 'Ireland', 'Austria', 'Israel',
];

const requirements = [
    { req: 'Passport from an eligible friendly nation', detail: '50 countries qualify. If you hold a US, Canadian, EU, UK, or Australian passport, you are eligible.' },
    { req: 'Clean criminal background check', detail: 'FBI background check (Americans) or national police clearance. Must be apostilled and issued within 6 months of application.' },
    { req: 'Economic ties to Panama', detail: 'You must show a genuine economic connection — this can be: employment in Panama, ownership of a Panama-registered company, or ownership of real estate in Panama.' },
    { req: 'Proof of economic solvency', detail: 'Bank statements showing $2,000/mo in stable income, or equivalent net worth. Not as strict as it sounds — your attorney will advise.' },
    { req: 'Standard identity documents', detail: 'Valid passport, birth certificate — both apostilled and translated to Spanish by a certified translator.' },
];

const economicTiesOptions = [
    { option: 'Own property in Panama', detail: 'Purchase any titled property — a condo, house, or lot. Even a $50,000 lot qualifies. This is the most popular route for buyers we work with.' },
    { option: 'Register a Panama company', detail: 'Form a Sociedad Anónima (S.A.) in Panama. Fast, inexpensive ($800–$1,200 through an attorney), and establishes your economic tie immediately.' },
    { option: 'Employment in Panama', detail: 'If you have a job offer from a Panamanian employer. Less common for expats unless you are being relocated by an international company.' },
    { option: 'Investment in Panama', detail: 'Portfolio investment, deposit accounts, or business investment in Panama can qualify. Your attorney will confirm what documentation is needed.' },
];

const processSteps = [
    { n: '1', t: 'Confirm eligibility', b: 'Verify your passport country is on the 50-nation list. US, Canada, UK, EU, Australia — all confirmed.' },
    { n: '2', t: 'Establish economic tie', b: 'Buy property or form a Panama company (most common). Your attorney and real estate agent can coordinate this in parallel with the visa.' },
    { n: '3', t: 'Gather and apostille documents', b: 'FBI background check, birth certificate. Allow 4–6 weeks for apostille from the US Department of State.' },
    { n: '4', t: 'Hire immigration attorney', b: 'File with a licensed Panama immigration attorney. All-in cost typically $1,500–$2,500 including government fees.' },
    { n: '5', t: 'Receive provisional residency', b: 'Issued almost immediately upon filing. You can live and work in Panama while the permanent residency processes.' },
    { n: '6', t: 'Permanent residency after 3 years', b: 'The Friendly Nations Visa grants temporary residency, automatically converting to permanent after 3 years of maintaining your economic tie.' },
];

export default async function FriendlyNationsVisaPage({ params }: Props) {
    await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            <section className="section-teal-soft py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80" alt="Panama Friendly Nations Visa" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                    <span className="tag-teal mb-5 inline-block">VISA GUIDE · 2026</span>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight mt-4">
                        Friendly Nations Visa:<br />The Fastest Path to Panama Residency
                    </h1>
                    <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
                        For citizens of 50 countries including the US, Canada, and all of the EU — residency in as little as 3–4 weeks.
                    </p>
                </div>
            </section>

            <div className="max-w-3xl mx-auto px-4 py-14 space-y-14">

                <section className="reveal-on-scroll">
                    <p className="text-xl font-semibold text-white border-l-4 border-brand-TEAL pl-5 leading-relaxed">
                        The Friendly Nations Visa is the fastest residency option Panama offers. While the Pensionado Visa takes 4–6 months, the Friendly Nations Visa can be approved in 3–4 weeks — and it does not require retirement income.
                    </p>
                    <p className="text-slate-500 mt-5 leading-relaxed">
                        It is the go-to option for working expats, digital nomads, entrepreneurs, and anyone who does not yet qualify for the Pensionado program. The only real requirement: show a legitimate economic connection to Panama.
                    </p>
                </section>

                {/* Eligible countries */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-5 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        <Globe className="inline text-brand-TEAL mr-1" size={22} />
                        Are You Eligible? — 50 Countries Qualify
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {eligibleCountries.map((country, i) => (
                            <span key={i} className="bg-brand-900 border border-brand-100 text-slate-300 text-[11px] font-bold px-3 py-1.5 rounded-lg">
                                {country}
                            </span>
                        ))}
                        <span className="bg-brand-900 border border-brand-TEAL/20 text-brand-TEAL text-[11px] font-bold px-3 py-1.5 rounded-lg">+ 20 more</span>
                    </div>
                </section>

                {/* Requirements */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-5 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        What You Need
                    </h2>
                    <div className="space-y-3">
                        {requirements.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 glass-card rounded-xl p-5 border border-brand-100">
                                <CheckCircle size={15} className="text-brand-TEAL mt-0.5 flex-shrink-0" />
                                <div>
                                    <div className="text-brand-950 font-bold text-sm mb-1">{item.req}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{item.detail}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Economic ties */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-3 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        Establishing Economic Ties — Your 4 Options
                    </h2>
                    <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                        You need one of these. Owning property is by far the most popular because it serves double duty — it qualifies you for the visa AND builds your Panama asset base.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {economicTiesOptions.map((item, i) => (
                            <div key={i} className="glass-card rounded-xl p-5 border border-brand-100">
                                <div className="text-brand-TEAL font-black text-[10px] uppercase tracking-widest mb-2">Option {i + 1}</div>
                                <div className="text-brand-950 font-bold text-sm mb-2">{item.option}</div>
                                <div className="text-slate-500 text-xs leading-relaxed">{item.detail}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-5 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        The Application Process
                    </h2>
                    <div className="space-y-3">
                        {processSteps.map((s, i) => (
                            <div key={i} className="flex items-start gap-4 glass-card rounded-xl p-5 border border-brand-100">
                                <div className="w-8 h-8 rounded-full bg-brand-TEAL/10 border border-brand-TEAL/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-TEAL font-black text-xs">{s.n}</span>
                                </div>
                                <div>
                                    <div className="text-brand-950 font-bold text-sm mb-1">{s.t}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{s.b}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FN vs Pensionado */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-5 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        Friendly Nations vs Pensionado — Which is Right for You?
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="glass-card rounded-xl p-5 border border-brand-TEAL/20">
                            <div className="text-brand-TEAL font-black text-xs uppercase tracking-widest mb-3">Choose Friendly Nations if…</div>
                            <ul className="space-y-2">
                                {[
                                    'You are under 65 and still working',
                                    'You do not yet receive a pension',
                                    'You want residency in weeks, not months',
                                    'You are buying property in Panama anyway',
                                    'You are a digital nomad or entrepreneur',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                        <CheckCircle size={12} className="text-brand-TEAL mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="glass-card rounded-xl p-5 border border-brand-GOLD/20">
                            <div className="text-brand-GOLD font-black text-xs uppercase tracking-widest mb-3">Choose Pensionado if…</div>
                            <ul className="space-y-2">
                                {[
                                    'You receive Social Security or a pension',
                                    'You want permanent residency immediately',
                                    'You want the Jubilado discount card',
                                    'You are retired and income-focused',
                                    'You want the fastest path to citizenship eligibility',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                                        <CheckCircle size={12} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-brand-900 p-8 rounded-2xl border-t-4 border-brand-TEAL text-center">
                    <h3 className="text-white font-heading text-2xl font-bold mb-3 uppercase italic tracking-tighter">
                        Ready to Start Your Visa Application?
                    </h3>
                    <p className="text-slate-500 mb-6 max-w-md mx-auto text-sm leading-relaxed">
                        We connect you with licensed Panama immigration attorneys and can coordinate property purchase and visa application simultaneously.
                    </p>
                    <Link href="/contacto" className="inline-flex items-center gap-3 btn-3d btn-3d-teal px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs">
                        Book Free Visa Consultation <ArrowRight size={14} />
                    </Link>
                </section>

                <section className="grid sm:grid-cols-2 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Pensionado Visa Guide', href: '/en/guides/pensionado-visa-panama' },
                        { label: 'How to Move to Panama', href: '/en/guides/how-to-move-to-panama' },
                        { label: 'Panama Real Estate Investment', href: '/en/blog/panama-real-estate-investments' },
                        { label: 'Condos for Sale — Buyer\'s Guide', href: '/en/blog/condos-for-sale-panama-buyers-guide' },
                    ].map((link, i) => (
                        <Link key={i} href={link.href} className="flex items-center justify-between glass-card p-4 rounded-xl border border-brand-100 hover:border-brand-TEAL/30 transition-all group">
                            <span className="text-white text-xs font-bold">{link.label}</span>
                            <ArrowRight size={12} className="text-brand-TEAL opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                    ))}
                </section>

            </div>
        </article>
    );
}
