import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, DollarSign, Heart, Sun, Globe, TrendingUp } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const slug = 'retire-in-panama';
  const domain = 'https://panamarealestatesale.com';
  const canonical = `${domain}/${lang}/blog/${slug}`;

  return {
    title: 'Retire in Panama 2026: Complete Guide, Visas, Costs, Lifestyle',
    description: 'Complete retirement guide to Panama. Pensionado visa, costs, healthcare, lifestyle, real estate.',
    keywords: 'retire in Panama, Panama retirement guide, pensionado visa Panama, retirement in Panama',
    alternates: {
        canonical,
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/retire-in-panama',
            'es': 'https://panamarealestatesale.com/es/blog/retire-in-panama',
            'pt': 'https://panamarealestatesale.com/pt/blog/retire-in-panama',
            'de': 'https://panamarealestatesale.com/de/blog/retire-in-panama',
        },
    },
    openGraph: {
        title: 'Retire in Panama 2026: Complete Guide, Visas, Costs, Lifestyle',
        description: 'Complete retirement guide to Panama. Pensionado visa, costs, healthcare, lifestyle, real estate.',
        type: 'article',
        url: canonical,
        images: [{ url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80', width: 1200, height: 630, alt: 'Retirement in Panama' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Retire in Panama 2026: Complete Guide, Visas, Costs, Lifestyle',
        description: 'Complete retirement guide to Panama. Pensionado visa, costs, healthcare, lifestyle, real estate.',
        images: ['https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80'],
    },
};
}

const retirementBudgets = [
    {
        style: 'Simple & Comfortable',
        monthly: '$1,500 – $2,200',
        desc: 'Smaller city or beach town (Boquete, Coronado), local dining, public transport, modest apartment.',
        best: 'Those on Social Security or smaller pension',
    },
    {
        style: 'Mid-Level Expat',
        monthly: '$2,500 – $3,500',
        desc: 'Nice 2BR condo in Panama City or Coronado, mix of local and Western dining, occasional travel.',
        best: 'Couples with moderate retirement income',
    },
    {
        style: 'Comfortable Luxury',
        monthly: '$4,000 – $6,000',
        desc: 'Premium neighborhood, housekeeper, private healthcare, regular international travel, car.',
        best: 'Higher pension income or investment portfolio draw',
    },
];

const pensionadoDiscounts = [
    { benefit: 'Utility bills', discount: '25% off' },
    { benefit: 'Airline tickets departing Panama', discount: '25% off' },
    { benefit: 'Medical consultations', discount: '20% off' },
    { benefit: 'Hospital bills', discount: '15% off' },
    { benefit: 'Dental and eye exams', discount: '15% off' },
    { benefit: 'Entertainment (movies, concerts, sports)', discount: '50% off' },
    { benefit: 'Restaurant meals', discount: '25% off' },
    { benefit: 'Hotels (Monday–Thursday)', discount: '50% off' },
    { benefit: 'Public transport', discount: '25% off' },
];

const locations = [
    {
        name: 'Boquete',
        tag: 'Best Overall for Retirees',
        why: 'Cool mountain climate (65–80°F year-round), thriving English-speaking expat community, lower cost of living than Panama City, world-class coffee farms and hiking. Named one of the top retirement destinations in the world by International Living — multiple times.',
        cost: '$1,500 – $2,500/mo',
        vibe: 'Highland village charm',
    },
    {
        name: 'Coronado Beach',
        tag: 'Best for Beach Retirees',
        why: 'Gated communities, golf courses, private hospitals, and over 5,000 expats already there. One hour 40 minutes from Panama City. The infrastructure is already built — you just move in.',
        cost: '$2,000 – $3,500/mo',
        vibe: 'Pacific beach lifestyle',
    },
    {
        name: 'Panama City (Punta Pacifica / El Cangrejo)',
        tag: 'Best for Urban Retirees',
        why: 'Everything within reach — Johns Hopkins-affiliated hospital, international cuisine, cultural events, direct flights home. Best choice if healthcare access is your top priority or you want maximum connectivity.',
        cost: '$2,500 – $5,000/mo',
        vibe: 'Cosmopolitan city living',
    },
    {
        name: 'Pedasi (Azuero Peninsula)',
        tag: 'Best for Authentic Off-the-Beaten-Path',
        why: 'Small fishing village on the Pacific coast. Pristine beaches, authentic Panamanian culture, very low cost of living. Land and property prices are a fraction of Coronado or Boquete. Best for adventurous retirees who want value and solitude.',
        cost: '$1,200 – $2,000/mo',
        vibe: 'Rural Pacific authenticity',
    },
];

const comparisonData = [
    { factor: 'Monthly Budget (couple)', panama: '$2,000 – $3,500', mexico: '$1,800 – $3,000', costaRica: '$2,500 – $4,000' },
    { factor: 'Currency', panama: 'US Dollar', mexico: 'Mexican Peso', costaRica: 'Costa Rican Colón' },
    { factor: 'Exchange Rate Risk', panama: 'None', mexico: 'Yes', costaRica: 'Yes' },
    { factor: 'Flight to Miami', panama: '2.5 hrs', mexico: '3–4 hrs', costaRica: '3 hrs' },
    { factor: 'Pensionado Program', panama: 'Yes (best in region)', mexico: 'No comparable', costaRica: 'Yes (similar)' },
    { factor: 'Tax on Foreign Income', panama: '0%', mexico: 'Varies (complex)', costaRica: '0% (new rules apply)' },
    { factor: 'Healthcare Quality', panama: 'Excellent (JH affiliate)', mexico: 'Good (varies)', costaRica: 'Good (CAJA system)' },
];

const steps = [
    { step: '1', title: 'Get your finances clear', body: 'Calculate your monthly income from Social Security, pension, investments, or rental income. Panama requires at least $1,000/mo for the Pensionado Visa — most retirees have considerably more.' },
    { step: '2', title: 'Do a reconnaissance trip', body: 'Visit for 2–4 weeks. Stay in different neighborhoods. Eat local. Rent a car and drive to Boquete and Coronado. Panama is small — you can see a lot in 3 weeks.' },
    { step: '3', title: 'Hire a Panama immigration attorney', body: 'The Pensionado Visa process requires a local attorney. Fees typically run $1,500–$2,500 all-in. Do not attempt this DIY — the paperwork requirements change regularly.' },
    { step: '4', title: 'Open a local bank account', body: 'This has become more complex since 2019. You will likely need a local attorney or referral from an established Panama bank client. Budget 2–3 months for this process.' },
    { step: '5', title: 'Find your property or rental', body: 'Rent for 6–12 months before buying — even if you are fairly certain where you want to land. Panama rewards patience. The right property will present itself.' },
    { step: '6', title: 'Build your expat network', body: 'Join expat Facebook groups, attend local meetups, connect with the chamber of commerce. Panama has an incredibly welcoming expat community — use it.' },
];

export default async function RetireInPanamaPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1514565131-fce0801e6785?w=1600&q=80"
                        alt="Retiring in Panama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        RETIREMENT GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Retire in Panama:<br />The Complete Guide
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Why thousands of Americans and Europeans are choosing Panama over Mexico, Costa Rica, and Portugal — and how to do it the right way.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Panama has ranked among the top retirement destinations in the world for over a decade — and the fundamentals that made it compelling in 2015 are even stronger in 2026. A dollarized economy, zero tax on foreign income, one of the hemisphere&apos;s best pensioner programs, and a modern healthcare system make it uniquely suited for American retirees.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        This guide covers everything: what it costs, the Pensionado Visa, the best locations, how Panama compares to other destinations, and the practical steps to make the move happen.
                    </p>
                </section>

                {/* Why Panama */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Globe className="inline text-brand-GOLD mr-2" size={28} />
                        Why Panama Specifically?
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: 'US Dollar Economy', body: 'Panama has used the US Dollar since 1904. Your Social Security payment arrives in dollars and you spend it in dollars. No currency devaluation risk — ever.' },
                            { title: 'Zero Tax on Foreign Income', body: 'US Social Security, pension income, IRA distributions, and foreign rental income are all 100% tax-free under Panama\'s territorial tax system.' },
                            { title: 'Best Pensionado Program in the World', body: 'Panama\'s retiree discount program is the most comprehensive in Latin America — covering utilities, flights, healthcare, dining, and entertainment.' },
                            { title: '2.5 Hours from Miami', body: 'You are never more than a short flight from family. Tocumen International is the most connected hub in Central America with direct flights to 80+ destinations.' },
                            { title: 'Johns Hopkins-Affiliated Hospital', body: 'Hospital Punta Pacifica in Panama City is a Johns Hopkins Medicine International affiliate. Specialists cost $50–$80 per visit.' },
                            { title: 'Massive Expat Community', body: 'Tens of thousands of North Americans live in Panama. In Boquete and Coronado, you will be surrounded by English speakers who have already figured it all out.' },
                        ].map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100 flex items-start gap-3">
                                <CheckCircle size={16} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                <div>
                                    <div className="text-brand-950 font-bold text-sm mb-1">{item.title}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{item.body}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pensionado Visa */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Sun className="inline text-brand-GOLD mr-2" size={28} />
                        The Pensionado Visa: Your Fast Track to Panama
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        The Pensionado Visa is Panama&apos;s retiree residency program — and it is one of the most generous in the world. Any foreigner with a verifiable lifetime income of at least $1,000/month qualifies. That includes US Social Security, a government or corporate pension, or military retirement pay.
                    </p>
                    <div className="bg-brand-50 rounded-2xl p-6 mb-6 border border-brand-GOLD/20">
                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-xs mb-4">Pensionado Discount Card — What You Actually Get</div>
                        <div className="grid sm:grid-cols-2 gap-2">
                            {pensionadoDiscounts.map((item, i) => (
                                <div key={i} className="flex items-center justify-between bg-white rounded-lg px-4 py-2.5">
                                    <span className="text-slate-500 text-xs">{item.benefit}</span>
                                    <span className="text-brand-GOLD font-black text-xs ml-3">{item.discount}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">
                        Once granted, the Pensionado Visa is permanent residency. You do not need to renew it. After 5 years, you are eligible to apply for Panamanian citizenship and passport.
                    </p>
                </section>

                {/* Budgets */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        What Does Retirement in Panama Actually Cost?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {retirementBudgets.map((b, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-2">{b.style}</div>
                                <div className="text-brand-950 font-black text-xl mb-3">{b.monthly}<span className="text-slate-500 font-normal text-sm">/mo</span></div>
                                <p className="text-slate-500 text-xs leading-relaxed mb-3">{b.desc}</p>
                                <div className="border-t border-brand-100 pt-3">
                                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Best for: </span>
                                    <span className="text-slate-500 text-[10px]">{b.best}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Best Locations */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Best Places to Retire in Panama
                    </h2>
                    <div className="space-y-5">
                        {locations.map((loc, i) => (
                            <div key={i} className="card-light rounded-2xl p-7 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                                    <div>
                                        <div className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-1">{loc.tag}</div>
                                        <h3 className="text-xl font-heading font-black text-brand-950">{loc.name}</h3>
                                        <span className="text-slate-500 text-[10px] font-bold">{loc.vibe}</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-brand-GOLD font-black text-sm">{loc.cost}</div>
                                        <div className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Typical monthly budget</div>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">{loc.why}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Comparison */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <TrendingUp className="inline text-brand-GOLD mr-2" size={28} />
                        Panama vs Mexico vs Costa Rica
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Most American retirees are choosing between Panama, Mexico (Cancun/Puerto Vallarta/Lake Chapala), and Costa Rica. Here is how they compare on the metrics that matter most:
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4">Factor</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Panama</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Mexico</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Costa Rica</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.factor}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3 font-bold">{row.panama}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.mexico}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.costaRica}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Healthcare */}
                <section className="reveal-on-scroll card-light rounded-2xl p-8 border border-brand-100">
                    <h2 className="text-white text-2xl font-heading font-bold mb-5 uppercase tracking-tighter italic">
                        <Heart className="inline text-brand-GOLD mr-2" size={24} />
                        Healthcare for Retirees
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-4">
                        Healthcare quality and cost are the top two concerns for most retirees considering a move abroad. Panama addresses both exceptionally well.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {[
                            'Hospital Punta Pacifica — Johns Hopkins Medicine International affiliate, Panama City',
                            'Hospital Nacional — Internationally accredited, cardiac and oncology center of excellence',
                            'Centro Médico Paitilla — Major specialist hospital, highly regarded by the expat community',
                            'Private health insurance for a 65-year-old: typically $200–$400/month',
                            'Specialist consultation: $50–$80 (vs $300–$500+ in the US)',
                            'Pensionado cardholders receive 15–20% off all medical services',
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4">
                                <CheckCircle size={14} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                                <span className="text-slate-500 text-xs leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Steps */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        How to Actually Retire in Panama: 6 Steps
                    </h2>
                    <div className="space-y-4">
                        {steps.map((s, i) => (
                            <div key={i} className="flex items-start gap-5 card-light rounded-xl p-5 border border-brand-100">
                                <div className="w-10 h-10 rounded-full bg-brand-GOLD/10 border border-brand-GOLD/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-GOLD font-black text-sm">{s.step}</span>
                                </div>
                                <div>
                                    <div className="text-brand-950 font-bold text-sm mb-1">{s.title}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{s.body}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Start Your Panama Retirement Plan
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Our advisors have helped hundreds of American and European retirees make the move. We will walk you through visa options, the best neighborhoods for your lifestyle, and real properties that fit your budget — at no obligation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Book Free Retirement Consultation <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/blog/living-in-panama-city`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Panama City Living Guide
                        </Link>
                    </div>
                </section>

                {/* Internal links */}
                <section className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Pensionado Visa Guide', href: '/en/guides/pensionado-visa-panama' },
                        { label: 'Best Areas to Retire in Panama', href: '/en/guides/best-areas-retire-panama' },
                        { label: 'Cost of Living: Panama vs US', href: '/en/blog/cost-of-living-panama-vs-us' },
                    ].map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="flex items-center justify-between card-light p-4 rounded-xl border border-brand-100 hover:border-brand-GOLD/30 transition-all group"
                        >
                            <span className="text-brand-950 text-xs font-bold">{link.label}</span>
                            <ArrowRight size={12} className="text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                    ))}
                </section>

            </div>
        </article>
    );
}
