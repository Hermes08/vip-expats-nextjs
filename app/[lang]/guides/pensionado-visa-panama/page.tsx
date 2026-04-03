import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const l = lang === 'es' ? 'es' : 'en';
    const domain = 'https://panamarealestatesale.com';
    const titles = {
        en: 'Panama Pensionado Visa 2026: Requirements, Benefits & How to Apply',
        es: 'Visa de Pensionado Panamá 2026: Requisitos, Beneficios y Cómo Aplicar',
    };
    const descriptions = {
        en: "Complete guide to Panama's Pensionado Visa in 2026. Eligibility, documents, discounts (50% off entertainment, 25% off utilities), processing timeline, and how to qualify.",
        es: 'Guía completa de la Visa de Pensionado de Panamá en 2026. Requisitos, documentos, descuentos y cómo aplicar para residencia permanente con $1,000/mes de pensión.',
    };
    return {
        title: titles[l],
        description: descriptions[l],
        keywords: 'pensionado visa panama, panama pensionado visa 2026, retire in panama visa, panama retirement visa requirements, pensionado visa benefits panama',
        alternates: {
            canonical: `${domain}/${l}/guides/pensionado-visa-panama`,
            languages: { en: `${domain}/en/guides/pensionado-visa-panama`, es: `${domain}/es/guides/pensionado-visa-panama` },
        },
        openGraph: {
            title: titles[l],
            description: descriptions[l],
            url: `${domain}/${l}/guides/pensionado-visa-panama`,
            type: 'article',
            images: [{ url: `${domain}/og-image.jpg`, width: 1200, height: 630 }],
        },
    };
}

const benefits = [
    { discount: '50% off', category: 'Entertainment', detail: 'Movies, concerts, professional sports events — nationwide' },
    { discount: '25% off', category: 'Utility Bills', detail: 'Electricity, water, and telephone services' },
    { discount: '25% off', category: 'Airline Tickets', detail: 'Flights departing Panama — domestic and international' },
    { discount: '20% off', category: 'Medical Consultations', detail: 'Doctor visits, specialist fees at all participating clinics' },
    { discount: '15% off', category: 'Hospital Bills', detail: 'Inpatient and outpatient care at participating hospitals' },
    { discount: '15% off', category: 'Dental & Eye Care', detail: 'Exams, procedures, glasses at participating providers' },
    { discount: '50% off', category: 'Hotels (Mon–Thu)', detail: 'Weekday hotel rates — great for traveling within Panama' },
    { discount: '25% off', category: 'Restaurant Meals', detail: 'At participating restaurants nationwide' },
    { discount: '$10,000', category: 'Duty-Free Import', detail: 'One-time exemption on household goods when you move in' },
];

const requirements = [
    { req: 'Lifetime pension of $1,000/mo minimum', detail: 'US Social Security, military retirement, government pension, or corporate pension — all qualify. Add $250/mo per dependent family member.' },
    { req: 'Clean criminal record', detail: 'FBI background check (or local equivalent for non-Americans) apostilled and notarized. Must be recent (typically within 6 months of application).' },
    { req: 'Health certificate', detail: 'Physical exam by a Panamanian-licensed physician. Confirms you are in good health and do not have communicable diseases.' },
    { req: 'Proof of pension income', detail: 'Official letter from the pension-issuing institution (SSA, DoD, pension fund) confirming permanent, lifetime monthly amount.' },
    { req: 'Standard identity documents', detail: 'Valid passport, birth certificate, marriage certificate (if applicable) — all apostilled and translated to Spanish by certified translator.' },
];

const processSteps = [
    { n: '1', t: 'Gather documents in the US', b: 'Apostille your FBI background check, birth certificate, and marriage certificate. Get the official SSA or pension verification letter. Allow 4–6 weeks for this step.' },
    { n: '2', t: 'Hire a Panama immigration attorney', b: 'This is not optional — a qualified attorney ensures documents are in order, handles translation, and navigates the immigration office. Cost: $1,500–$2,500 all-in.' },
    { n: '3', t: 'Get health certificate in Panama', b: 'See a Panamanian doctor for the required health exam. Easy to schedule, costs $80–$120, takes one appointment.' },
    { n: '4', t: 'Submit application at immigration office', b: 'Your attorney files the complete package with Servicio Nacional de Migración. You receive a provisional residency card that allows you to live and work while the full visa processes.' },
    { n: '5', t: 'Receive permanent residency card', b: 'Full processing time: typically 4–6 months. Once issued, your Pensionado residency is permanent — no renewal ever required.' },
    { n: '6', t: 'Apply for Jubilado ID card', b: 'This is your discount card. Issued separately by the Ministry of Social Development (MIDES). Present it everywhere to claim your benefits.' },
];

export default async function PensionadoVisaPage({ params }: Props) {
    await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="section-teal-soft py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1549420958-370146059d4c?w=1600&q=80" alt="Panama Retirement" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                    <span className="tag-gold mb-5 inline-block">VISA GUIDE · 2026</span>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight mt-4">
                        Panama Pensionado Visa:<br />The Complete 2026 Guide
                    </h1>
                    <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
                        The world&apos;s most generous retiree residency program — requirements, benefits, discounts, and the exact steps to get it approved.
                    </p>
                </div>
            </section>

            <div className="max-w-3xl mx-auto px-4 py-14 space-y-14">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-xl font-semibold text-white border-l-4 border-brand-GOLD pl-5 leading-relaxed">
                        The Pensionado Visa is Panama&apos;s permanent residency program for retirees. Require just $1,000/month in lifetime pension income — and it comes with the most generous discount card in the Western Hemisphere.
                    </p>
                    <p className="text-slate-500 mt-5 leading-relaxed">
                        Unlike Costa Rica&apos;s Pensionado program (which requires annual renewal), Panama&apos;s is truly permanent. Get it once, keep it forever. After 5 years of residency, you qualify for Panamanian citizenship.
                    </p>
                </section>

                {/* The discount card */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        The Jubilado Discount Card — What You Actually Get
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">
                        Every approved Pensionado receives a Jubilado ID card issued by MIDES. Present it at the point of sale. The discounts are legally mandated — businesses are required to honor them.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-3">
                        {benefits.map((b, i) => (
                            <div key={i} className="glass-card rounded-xl p-4 border border-brand-100">
                                <div className="text-brand-GOLD font-black text-xl mb-1">{b.discount}</div>
                                <div className="text-brand-950 font-bold text-xs mb-1">{b.category}</div>
                                <div className="text-slate-500 text-[11px] leading-relaxed">{b.detail}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Requirements */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        <ShieldCheck className="inline text-brand-TEAL mr-1" size={22} />
                        Requirements
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
                    <div className="mt-4 bg-brand-900 rounded-xl px-5 py-4 border border-brand-GOLD/20">
                        <p className="text-slate-500 text-xs leading-relaxed">
                            <span className="text-brand-GOLD font-bold">Social Security note: </span>
                            A single person&apos;s full Social Security benefit — the average in 2026 is $1,907/mo — qualifies comfortably. Many retirees apply the same week they file for SS.
                        </p>
                    </div>
                </section>

                {/* Process */}
                <section className="reveal-on-scroll">
                    <h2 className="text-brand-950 text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        The Application Process: 6 Steps
                    </h2>
                    <div className="space-y-3">
                        {processSteps.map((s, i) => (
                            <div key={i} className="flex items-start gap-4 glass-card rounded-xl p-5 border border-brand-100">
                                <div className="w-8 h-8 rounded-full bg-brand-GOLD/10 border border-brand-GOLD/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-GOLD font-black text-xs">{s.n}</span>
                                </div>
                                <div>
                                    <div className="text-brand-950 font-bold text-sm mb-1">{s.t}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{s.b}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Comparison */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-5 uppercase tracking-tighter italic border-b border-brand-100 pb-3">
                        Pensionado vs Other Panama Visa Options
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4">Factor</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Pensionado</th>
                                    <th className="text-left text-brand-TEAL text-[10px] uppercase tracking-widest py-3 px-3">Friendly Nations</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Investor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { f: 'Income requirement', p: '$1,000/mo pension', fn: '$2,000/mo + econ. ties', inv: '$300K investment' },
                                    { f: 'Processing time', p: '4–6 months', fn: '3–4 weeks', inv: '2–3 months' },
                                    { f: 'Residency type', p: 'Permanent (immediate)', fn: 'Temp → Permanent (3yr)', inv: 'Permanent' },
                                    { f: 'Discount card', p: 'Yes — Jubilado card', fn: 'No', inv: 'No' },
                                    { f: 'Citizenship eligibility', p: 'After 5 years', fn: 'After 5 years', inv: 'After 5 years' },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.f}</td>
                                        <td className="text-white text-xs py-3 px-3 font-bold">{row.p}</td>
                                        <td className="text-slate-300 text-xs py-3 px-3">{row.fn}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.inv}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-brand-900 p-8 rounded-2xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-2xl font-bold mb-3 uppercase italic tracking-tighter">
                        Ready to Start Your Pensionado Application?
                    </h3>
                    <p className="text-slate-500 mb-6 max-w-md mx-auto text-sm leading-relaxed">
                        We work with licensed Panama immigration attorneys. Book a free 30-minute call — we will confirm if you qualify and outline the next steps.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-3 btn-3d btn-3d-gold px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs"
                    >
                        Book Free Visa Consultation <ArrowRight size={14} />
                    </Link>
                </section>

                {/* Internal links */}
                <section className="grid sm:grid-cols-2 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Retire in Panama — Full Guide', href: '/en/blog/retire-in-panama' },
                        { label: 'Friendly Nations Visa', href: '/en/guides/friendly-nations-visa-panama' },
                        { label: 'How to Move to Panama', href: '/en/guides/how-to-move-to-panama' },
                        { label: 'Cost of Living Panama 2026', href: '/en/guides/cost-of-living-panama-2026' },
                    ].map((link, i) => (
                        <Link key={i} href={link.href} className="flex items-center justify-between glass-card p-4 rounded-xl border border-brand-100 hover:border-brand-GOLD/30 transition-all group">
                            <span className="text-white text-xs font-bold">{link.label}</span>
                            <ArrowRight size={12} className="text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                    ))}
                </section>

            </div>
        </article>
    );
}
