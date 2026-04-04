'use client';

import React from 'react';
import { Landmark, Check, ArrowRight, ShieldCheck, Zap, Globe, Briefcase, FileText, AlertCircle, BarChart3, HelpingHand, MapPin, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ServiceSchema from '@/components/seo/ServiceSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import FAQSchema from '@/components/seo/FAQSchema';

import { useLanguage } from '@/context/LanguageContext';

const RelocationQualifiedInvestorContent: React.FC = () => {
    const { lang } = useLanguage();
    const breadcrumbItems = [
        { name: "Relocation", item: `https://panamarealestatesale.com/${lang}/relocation` },
        { name: "Visas", item: `https://panamarealestatesale.com/${lang}/relocation/visas` },
        { name: "Qualified Investor", item: `https://panamarealestatesale.com/${lang}/relocation/visas/qualified-investor` }
    ];

    const faqs = [
        {
            question: "Is the 30-day timeline guaranteed?",
            answer: "Under Law 189, the Ministry of Immigration is mandated to provide a response within 30 business days for Qualified Investor applications. This is why it's known as the 'VIP' path."
        },
        {
            question: "Can I use a mortgage for the $300,000 investment?",
            answer: "No. The first $300,000 must be paid in liquid cash and free of any liens or encumbrances. Any amount *above* $300,000 can be financed through a local Panamanian bank if desired."
        },
        {
            question: "What happens if I sell the property?",
            answer: "To maintain your permanent residency card, you must hold the investment for a minimum of five (5) years. If you sell before then, your residency may be revoked unless you immediately purchase another qualifying property."
        },
        {
            question: "Can I invest through a corporation?",
            answer: "Yes. You can purchase the property through a Panamanian corporation or a Private Interest Foundation, provided you are the ultimate beneficial owner of the shares or the founder."
        },
        {
            question: "Do I need to live in Panama?",
            answer: "No. There is no physical stay requirement to keep your Qualified Investor PR status. You only need to visit once every two years to keep the card active."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: `https://panamarealestatesale.com/${lang}` }, ...breadcrumbItems]} />
            <ServiceSchema
                name="Panama Qualified Investor Visa VIP Services"
                description="The ultimate fast-track residency program in Panama. Direct permanent residency in 30 days via $300,000 real estate investment."
                serviceType="Golden Visa / Immigration Service"
            />
            <LocalBusinessSchema />
            <FAQSchema questions={faqs} />

            <div className="max-w-7xl mx-auto px-4 mt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Hero Section */}
            <section className="py-14 bg-white text-brand-950 relative overflow-hidden rounded-b-[4rem]">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-GOLD rounded-full blur-[150px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        The Elite Golden Visa
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter leading-[0.85]">
                        Qualified <span className="text-brand-GOLD italic">Investor</span> <br /> Visa 2026
                    </h1>
                    <p className="text-base md:text-lg text-slate-500 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
                        Permanent residency in <strong>30 days</strong>. The <strong>panama qualified investor visa</strong> is the fastest and most prestigious residency program in the Americas, designed for the high-net-worth individual who values speed, efficiency, and ROI.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href={`/${lang}/contacto`} className="px-12 py-6 bg-brand-GOLD text-brand-950 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white transition-all shadow-2xl">
                            Request Private Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Value Proposition: Speed vs. Cost */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD">VIP</span> Lane</h2>
                        <div className="space-y-8 text-lg text-slate-500 font-medium leading-[1.8]">
                            <p>
                                In 2026, time is the scarcest resource. While the <strong>friendly nations visa</strong> takes 2-3 years to reach permanent status, the **Qualified Investor path** grants you a permanent resident card (E-Cedula) almost immediately after your initial filing.
                            </p>
                            <p>
                                Established under Executive Decree 722, this "Golden Visa" was created to attract elite capital. By investing $300,000 into Panama's burgeoning real estate market, you are not just buying a property; you are securing a **sovereign exit strategy** that is protected by law.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-brand-100">
                                <div>
                                    <h4 className="text-brand-GOLD font-black text-3xl mb-1">30 Days</h4>
                                    <p className="text-[10px] uppercase font-black text-slate-500">Processing Window</p>
                                </div>
                                <div>
                                    <h4 className="text-brand-GOLD font-black text-3xl mb-1">$300k</h4>
                                    <p className="text-[10px] uppercase font-black text-slate-500">Min. Investment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                        <Image
                            src="https://images.unsplash.com/photo-1554188248-986adbb73be4?w=1000&q=80"
                            alt="Luxury Panama City Real Estate representing Qualified Investor Visa"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* NEW SECTION: COMPARISON WITH GLOBAL GOLDEN VISAS */}
            <section className="py-14 bg-brand-50 text-brand-950 rounded-3xl mx-4 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic">Global <span className="text-brand-GOLD italic">Benchmark</span></h2>
                        <p className="text-gray-500 text-lg uppercase tracking-widest font-black">Why Panama Beats Portugal, Greece, and Dubai.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { name: "Portugal", price: "Residency only", time: "5-6 Years for PR", flaw: "High taxes unless NHR applied." },
                            { name: "Greece", price: "€250k - €800k", time: "5 Years Renewal", flaw: "No clear path to citizenship for most." },
                            { name: "Panama", price: "$300,000", time: "30 Days for PR", flaw: "Golden standard, 0% foreign tax.", highlight: true }
                        ].map((c, i) => (
                            <div key={i} className={`p-12 rounded-2xl border ${c.highlight ? 'bg-brand-GOLD text-brand-950 border-brand-GOLD shadow-2xl' : 'bg-white/5 border-brand-100'}`}>
                                <h4 className="text-3xl font-black uppercase tracking-tighter mb-4 italic leading-none">{c.name}</h4>
                                <div className="space-y-4 text-sm font-bold opacity-80 mb-8">
                                    <p className="flex justify-between"><span>Minimum:</span> <span>{c.price}</span></p>
                                    <p className="flex justify-between"><span>PR Timeline:</span> <span>{c.time}</span></p>
                                </div>
                                <p className="text-xs font-medium leading-relaxed">{c.flaw}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investment Options Deep Dive */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic leading-none text-center italic">The Big <span className="text-brand-GOLD">Investment</span> Three</h2>
                    <p className="text-slate-500 text-lg uppercase tracking-widest font-black italic text-center">There are three ways to qualify for the VIP path.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Real Estate",
                            amount: "$300,000",
                            desc: "Purchase one or more properties with a total value of $300k. Must be free of debt. In 2026, this is the most popular path for rental hunters."
                        },
                        {
                            title: "Stock Market",
                            amount: "$500,000",
                            desc: "Invest in the Panama Stock Exchange (BVP) through a certified broker. Must be held for at least 5 years."
                        },
                        {
                            title: "Fixed Deposit",
                            amount: "$750,000",
                            desc: "The 'Cash' path. Place a fixed deposit in a local bank for 5 years. This allows you to earn interest while securing residency."
                        }
                    ].map((opt, i) => (
                        <div key={i} className="p-12 bg-white rounded-2xl border border-brand-100 group hover:border-brand-GOLD transition-all">
                            <h4 className="text-brand-GOLD font-black text-xs uppercase tracking-widest mb-4">Min: {opt.amount}</h4>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 italic leading-none">{opt.title}</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">{opt.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ROI Analysis: The 2026 Real Estate Market */}
            <section className="py-14 bg-brand-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <div className="lg:w-1/2">
                            <BarChart3 size={64} className="text-brand-GOLD mb-10" />
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The Panama Real Estate Sale <br /><span className="text-brand-GOLD italic">ROI</span> Strategy</h2>
                            <div className="space-y-8 text-lg text-slate-500 font-medium leading-[1.8]">
                                <p>
                                    Buying property for the <strong>panama qualified investor visa</strong> shouldn't just be a legal checkbox—it should be an asset play. In 2026, our investment team focuses on high-yield zones like **Costa del Este** and **Avenida Balboa**, or short-term vacation rentals in **Coronado**.
                                </p>
                                <p>
                                    Expect net rental yields between 6% and 8% in Panama City, with a property tax exemption for the first several years on new builds. When you combine this with the tax benefits of the visa, your "Golden Residency" effectively pays for itself.
                                </p>
                                <div className="p-8 bg-brand-50 text-brand-950 rounded-[3.5rem] italic font-bold">
                                    "We find that Qualified Investors who purchase in 'Short Term Rental' permitted buildings in Casco Viejo see the fastest path to recouping their legal and relocation costs."
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                            {[
                                { title: "Appreciation", desc: "3-5% Est. Annual Property Value growth." },
                                { title: "Yield", desc: "6-8% Net Rental Returns in City Hubs." },
                                { title: "Liquidity", desc: "US Dollar assets are easy to resell globally." },
                                { title: "Protection", desc: "Investment backed by rigid civil-law ownership." }
                            ].map((s, i) => (
                                <div key={i} className="p-8 bg-white rounded-3xl border border-brand-100 shadow-sm">
                                    <h4 className="font-black text-brand-GOLD uppercase text-xs mb-2">{s.title}</h4>
                                    <p className="text-xs text-slate-500 font-bold">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Document Checklist & Timeline */}
            <section className="py-14 bg-brand-GOLD text-brand-950 rounded-3xl mx-4 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <Zap size={64} className="mb-10 opacity-30" />
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The VIP <br /> Timeline</h2>
                        <div className="space-y-12">
                            {[
                                { phase: "Day 1-5", title: "Document Pre-Audit", desc: "Gathering your FBI check and proof of funds. We pre-clear everything with Immigration via our lawyer network." },
                                { phase: "Day 10", title: "Scouting & Signature", desc: "You visit Panama to view properties and sign the purchase contract. We open your 'Investment' bank account." },
                                { phase: "Day 20", title: "IMR Filing", desc: "The application is filed at the 'Ventanilla Unica'. You receive your temporary permanent card immediately." },
                                { phase: "Day 30", title: "Final E-Cedula", desc: "The government issues the final decree. You are now a permanent resident of Panama for life." }
                            ].map((t, i) => (
                                <div key={i} className="flex gap-8 group">
                                    <span className="font-black italic text-2xl opacity-30 group-hover:opacity-100 transition-opacity shrink-0">{t.phase}</span>
                                    <div>
                                        <h4 className="text-xl font-black uppercase tracking-tighter italic mb-2">{t.title}</h4>
                                        <p className="text-sm font-bold opacity-70 leading-relaxed">{t.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl text-brand-950 shadow-2xl border border-brand-100 skew-y-1">
                        <AlertCircle className="text-brand-GOLD mb-8" size={64} />
                        <h4 className="text-3xl font-black uppercase tracking-tighter mb-8 italic text-brand-GOLD">Crucial Warning</h4>
                        <p className="text-slate-500 font-medium leading-relaxed mb-10">
                            The $300,000 investment *must* be registered in the **Public Registry** and the funds must come from a foreign bank account directly to the escrow or developer in Panama. DIY investors who pay with local cashier's checks without an audit trail are often rejected.
                        </p>
                        <Link href={`/${lang}/relocation/legal`} className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-TEAL border-b-2 border-brand-GOLD pb-2">
                            Learn About Escrow Security
                        </Link>
                    </div>
                </div>
            </section>

            {/* Neighborhood Spotlight for Investors */}
            <section className="py-14">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-10 px-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic text-center underline italic decoration-brand-GOLD">Investment <span className="text-brand-GOLD">Hotspots</span></h2>
                        <p className="text-slate-500 text-lg uppercase tracking-widest font-black italic text-center">Where to park $300k+ in 2026.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                img: "https://images.unsplash.com/photo-1544644011-87b829283197?w=1000&q=80",
                                name: "Avenida Balboa",
                                yield: "7.2% Net",
                                desc: "The 'Manhattan' of Panama. High demand for executive rentals and ocean views."
                            },
                            {
                                img: "https://images.unsplash.com/photo-1544644011-87b829283197?w=1000&q=80",
                                name: "Costa del Este",
                                yield: "6.5% Net",
                                desc: "The multinational hub. Safe, high-end, and always in demand for family rentals."
                            }
                        ].map((spot, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-2xl">
                                <div className="aspect-video relative">
                                    <Image src={spot.img} alt={spot.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950 to-transparent opacity-80" />
                                </div>
                                <div className="absolute bottom-0 left-0 p-12">
                                    <span className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-2 block">PROJECTED YIELD: {spot.yield}</span>
                                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4 italic leading-none">{spot.name}</h3>
                                    <p className="text-gray-300 text-sm font-medium leading-relaxed max-w-md">{spot.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comprehensive FAQ Section */}
            <section className="py-14 max-w-5xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic">Qualified <br /><span className="text-brand-GOLD underline italic">Exposed</span> FAQ</h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">The Final Word on Golden Residency.</p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group bg-white rounded-2xl border border-brand-100 overflow-hidden transition-all hover:border-brand-GOLD/50">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-xl font-black uppercase tracking-tighter italic pr-8">{faq.question}</span>
                                <HelpCircle className="text-brand-GOLD" size={24} />
                            </summary>
                            <div className="px-10 pb-10 text-slate-500 font-medium leading-relaxed border-t border-brand-100 pt-8" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        </details>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-14 bg-brand-GOLD text-brand-950 text-center rounded-t-[5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <ShieldCheck size={200} />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-[0.85]">Become a <br /> Resident Today</h2>
                    <p className="text-base md:text-lg font-bold mb-16 opacity-80 max-w-2xl mx-auto leading-relaxed">
                        The <strong>panama qualified investor visa</strong> is only for those who are ready for the ultimate upgrade. Let the Panama Real Estate Sale legal and real estate teams handle every detail.
                    </p>
                    <Link href={`/${lang}/relocation/tours`} className="px-8 py-4 bg-brand-GOLD text-brand-950 font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-amber-400 transition-all shadow-2xl inline-block">
                        Request Golden Visa Itinerary
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default RelocationQualifiedInvestorContent;
