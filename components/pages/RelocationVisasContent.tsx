'use client';

import React from 'react';
import { ShieldCheck, ArrowRight, Check, AlertCircle, Users, Award, Briefcase, Landmark, Scale, FileText, Zap, HelpCircle, GraduationCap, Gavel } from 'lucide-react';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import { useLanguage } from '@/context/LanguageContext';

const RelocationVisasContent: React.FC = () => {
    const { lang } = useLanguage();
    const breadcrumbItems = [
        { name: "Home", item: `https://panamarealestatesale.com/${lang}` },
        { name: "Relocation", item: `https://panamarealestatesale.com/${lang}/relocation` },
        { name: "Residency Visas", item: `https://panamarealestatesale.com/${lang}/relocation/visas` }
    ];

    const visaTypes = [
        {
            title: "Friendly Nations Visa",
            description: "The most flexible residency for citizens of 50+ countries. Ideal for professionals and digital nomads.",
            path: `/${lang}/relocation/visas/friendly-nations`,
            benefits: ["Permanent Residency in 2 steps", "Right to Work", "Low minimum investment", "Tax Efficiency"],
            icon: Users
        },
        {
            title: "Pensionado (Retirement)",
            description: "The world's #1 retirement program. Lifetime discounts and permanent residency for life.",
            path: `/${lang}/relocation/visas/pensionado`,
            benefits: ["25% off Electricity/Water", "50% off Movies/Concerts", "25% off Airline Tickets", "Import zero-tax car"],
            icon: Award
        },
        {
            title: "Qualified Investor",
            description: "The fastest path. Permanent residency in as little as 30 days via real estate investment.",
            path: `/${lang}/relocation/visas/qualified-investor`,
            benefits: ["Direct Permanent Residency", "No local job required", "Investment ROI potential", "Priority processing"],
            icon: Landmark
        }
    ];

    const faqs = [
        {
            question: "What is the fastest way to get residency in Panama 2026?",
            answer: "The **Qualified Investor Visa** is the fastest path, granting permanent residency (PR) in approximately 30 days after filing. It requires a $300,000 real estate investment."
        },
        {
            question: "Can I move to Panama without a job?",
            answer: "Yes. Most residency paths, including the **Pensionado** and **Investor** visas, do not require local employment. In fact, many expats are digital nomads or retirees with foreign sources of income."
        },
        {
            question: "How much are the legal fees for a Panama visa?",
            answer: "Legal fees typically range from $1,500 to $2,500 per applicant, plus approximately $1,050 in government fees and repatriation bonds. Our clients receive a transparent, all-inclusive fee schedule."
        },
        {
            question: "Do I need to be in Panama for the whole process?",
            answer: "No. Most visas require an initial 5-10 business day visit for medicals and filing. Once your temporary card is issued, you can wait for your permanent approval from abroad."
        },
        {
            question: "What documents must be apostilled?",
            answer: "Your criminal background check (FBI report for US citizens), birth certificates, marriage certificates, and proof of income (pension letter) must all be apostilled by the issuing authority in your home country."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: `https://panamarealestatesale.com/${lang}` }, ...breadcrumbItems]} />
            <FAQSchema questions={faqs} />
            <ServiceSchema
                name="Panama Residency Visa Consultancy"
                description="Expert legal guidance for all Panama residency visas, including Friendly Nations, Pensionado, and Qualified Investor programs."
                serviceType="Legal & Relocation Services"
            />

            <div className="max-w-7xl mx-auto px-4 mt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Hero Section */}
            <section className="bg-white py-14 text-brand-950 relative overflow-hidden rounded-b-[5rem]">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-GOLD rounded-full blur-[150px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        The Ultimate 2026 Legal Guide
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter leading-none">
                        Panama <br /> <span className="text-brand-GOLD italic">Real Estate</span> <br /> Sale
                    </h1>
                    <p className="text-base md:text-lg text-slate-500 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
                        Everything you need to know about navigating the <strong>panama residency visa</strong> ecosystem. From the <strong>friendly nations visa</strong> to the elite <strong>pensionado program</strong>, we provide the blueprint for your legal relocation.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href={`/${lang}/contacto`} className="px-12 py-6 bg-brand-GOLD text-brand-950 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white transition-all shadow-2xl">
                            Get My Visa Strategy
                        </Link>
                    </div>
                </div>
            </section>

            {/* Deep Dive: The 2026 Legal Landscape */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The 2026 <br /><span className="text-brand-GOLD underline">Legal Reality</span></h2>
                        <div className="space-y-8 text-lg text-slate-500 font-medium leading-[1.8]">
                            <p>
                                Panama's immigration system is one of the most stable in the world, but in 2026, the complexity of <strong>compliance and anti-money laundering (AML)</strong> has reached an all-time high. Gone are the days of simple "walk-in" residency.
                            </p>
                            <p>
                                A successful <strong>panama immigration</strong> strategy now requires an elite level of preparation. This means matching your specific financial profile (Digital Nomad income vs. Corporate Pension vs. Asset Liquidity) to the right legal vehicle before you even book your flight.
                            </p>
                            <div className="p-10 bg-brand-50 text-brand-950 rounded-2xl border-l-8 border-brand-GOLD">
                                <h4 className="text-brand-GOLD text-xs font-black uppercase tracking-widest mb-4">Expert Pro Tip</h4>
                                <p className="text-sm font-medium leading-relaxed italic">
                                    "Most rejections happen because of aging documents. In Panama, an FBI report or Pension letter is only considered 'fresh' for 6 months from the date of issuance. Timing your apostilles is critical."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { title: "Compliance", desc: "Rigorous vetting of source of funds is now standard for all investor paths." },
                            { title: "Continuity", desc: "Once granted, permanent residency is essentially irrevocable under Panamanian law." },
                            { title: "Cédula", desc: "The 'E' Cédula is your ticket to local life, bank accounts, and health discounts." },
                            { title: "Citizenship", desc: "Most residency paths lead to a path for naturalization after 5 years." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 bg-white rounded-2xl border border-brand-100">
                                <h4 className="text-xs font-black uppercase tracking-widest text-brand-GOLD mb-4">{item.title}</h4>
                                <p className="text-xs text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Visa Grid */}
                <div className="text-center mb-10 px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic text-center underline italic">The Big <span className="text-brand-GOLD">Three</span></h2>
                    <p className="text-slate-500 text-lg uppercase tracking-widest font-black italic text-center">90% of Successful Expats choose one of these paths.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-32">
                    {visaTypes.map((visa, i) => (
                        <div key={i} className="border border-brand-100 p-6 rounded-2xl flex flex-col hover:shadow-2xl transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all">
                                <visa.icon size={120} />
                            </div>
                            <div className="mb-10 relative z-10">
                                <visa.icon className="text-brand-GOLD mb-8" size={56} strokeWidth={1.5} />
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 italic leading-none">{visa.title}</h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{visa.description}</p>
                            </div>
                            <ul className="space-y-4 mb-12 flex-grow relative z-10">
                                {visa.benefits.map((benefit, j) => (
                                    <li key={j} className="flex gap-3 text-xs font-black uppercase tracking-widest text-neutral-800">
                                        <Check className="text-brand-GOLD shrink-0" size={16} /> {benefit}
                                    </li>
                                ))}
                            </ul>
                            <Link href={visa.path} className="w-full py-5 bg-white text-white text-center font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-brand-GOLD hover:text-brand-950 transition-all relative z-10">
                                View Requirements
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Why People Fail Section */}
                <div className="bg-neutral-950 text-white p-8 rounded-3xl mb-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-20 opacity-5">
                        <Gavel size={200} />
                    </div>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-12 uppercase tracking-tighter italic text-brand-GOLD text-center leading-none">Why Visas Get <br /> Rejected in 2026</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="flex gap-6">
                                <div className="bg-white/5 p-4 rounded-2xl h-fit">
                                    <AlertCircle className="text-red-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black uppercase italic mb-2">Improper Authentication</h4>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">Using a simple notary when an Apostille is required at the federal level.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="bg-white/5 p-4 rounded-2xl h-fit">
                                    <AlertCircle className="text-red-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black uppercase italic mb-2">Inaccurate Transitions</h4>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">Failing to have documents translated by a Panamanian-certified translator.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="bg-white/5 p-4 rounded-2xl h-fit">
                                    <AlertCircle className="text-red-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black uppercase italic mb-2">Timing Mismatches</h4>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">Gathering papers too early and having them expire before the filing appointment.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="bg-white/5 p-4 rounded-2xl h-fit">
                                    <AlertCircle className="text-red-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black uppercase italic mb-2">Financial Vagueness</h4>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">Providing bank statements that do not clearly show the legitimate source of funds.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Comparison Hub */}
                <div className="text-center mb-10 px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic text-center italic leading-none">Match Your <span className="text-brand-GOLD underline italic">Lifestyle</span></h2>
                    <p className="text-slate-500 text-lg uppercase tracking-widest font-black italic text-center">Which visa fits your current reality?</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-32">
                    <div className="p-12 bg-white rounded-2xl border border-brand-100 flex flex-col justify-between">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD mb-4 block">Best for Families & Professionals</span>
                            <h4 className="text-3xl font-black uppercase tracking-tighter italic mb-6">Friendly Nations</h4>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">
                                If you are under 50, want to work locally, or start a business, this is the gold standard. It requires a $200k real estate investment or a verified Panamanian job offer.
                            </p>
                        </div>
                        <ul className="space-y-3 mb-10">
                            <li className="flex gap-3 text-xs font-bold text-neutral-800"><Check size={14} className="text-brand-GOLD" /> 50+ Nations Eligible</li>
                            <li className="flex gap-3 text-xs font-bold text-neutral-800"><Check size={14} className="text-brand-GOLD" /> Permanent Residency in 2 Years</li>
                            <li className="flex gap-3 text-xs font-bold text-neutral-800"><Check size={14} className="text-brand-GOLD" /> Work Permit Availability</li>
                        </ul>
                        <Link href={`/${lang}/relocation/visas/friendly-nations`} className="text-brand-GOLD font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 hover:gap-4 transition-all">
                            View Deep Dive <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="p-12 bg-brand-50 text-brand-950 rounded-2xl flex flex-col justify-between">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD mb-4 block">Best for Retirees & High Yielders</span>
                            <h4 className="text-3xl font-black uppercase tracking-tighter italic mb-6">Pensionado Program</h4>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">
                                The most efficient residency program on the planet. Requires a $1,000/mo lifetime pension and grants immediate, permanent residency with lifetime sales tax discounts.
                            </p>
                        </div>
                        <ul className="space-y-3 mb-10">
                            <li className="flex gap-3 text-xs font-bold text-brand-GOLD"><Check size={14} /> NO Minimum Age Requirement</li>
                            <li className="flex gap-3 text-xs font-bold text-brand-GOLD"><Check size={14} /> Immediate Permanent Status</li>
                            <li className="flex gap-3 text-xs font-bold text-brand-GOLD"><Check size={14} /> World-Class Discount Law (L6)</li>
                        </ul>
                        <Link href={`/${lang}/relocation/visas/pensionado`} className="text-white font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 hover:gap-4 transition-all">
                            View Deep Dive <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-16 text-center uppercase tracking-tighter italic italic underline decoration-brand-GOLD">Visa <span className="text-brand-GOLD">Intel</span> FAQ</h2>
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
                </div>
            </section>

            {/* Quick Summary Table */}
            <section className="py-14 bg-white text-brand-950 rounded-3xl mx-4 mb-20 overflow-hidden relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[150px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-8 overflow-x-auto relative z-10">
                    <div className="text-center mb-16 underline italic">
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter italic underline decoration-brand-GOLD leading-none">Strategic <span className="text-brand-GOLD">Matrix</span></h2>
                        <p className="text-gray-500 font-black uppercase tracking-widest text-[10px]">Compare the Paths in 30 Seconds.</p>
                    </div>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-brand-100">
                                <th className="py-10 text-[10px] font-black uppercase tracking-[0.4em] text-brand-GOLD">Feature</th>
                                <th className="py-10 text-[10px] font-black uppercase tracking-[0.4em]">Friendly Nations</th>
                                <th className="py-10 text-[10px] font-black uppercase tracking-[0.4em]">Pensionado</th>
                                <th className="py-10 text-[10px] font-black uppercase tracking-[0.4em]">Qualified Investor</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium">
                            <tr className="border-b border-brand-100 group hover:bg-white/5 transition-colors">
                                <td className="py-8 font-black uppercase tracking-widest text-[10px] text-gray-500">Min. Investment</td>
                                <td className="py-8">$200,000 Property / Job</td>
                                <td className="py-8">$1,000/mo Lifetime Pension</td>
                                <td className="py-8">$300,000 Real Estate</td>
                            </tr>
                            <tr className="border-b border-brand-100 group hover:bg-white/5 transition-colors">
                                <td className="py-8 font-black uppercase tracking-widest text-[10px] text-gray-500">Time to PR</td>
                                <td className="py-8">2 Years (Provisional)</td>
                                <td className="py-8">Immediate</td>
                                <td className="py-8">Immediate (30 days)</td>
                            </tr>
                            <tr className="border-b border-brand-100 group hover:bg-white/5 transition-colors">
                                <td className="py-8 font-black uppercase tracking-widest text-[10px] text-gray-500">Work Permit</td>
                                <td className="py-8">Yes (Eligible)</td>
                                <td className="py-8">No</td>
                                <td className="py-8">Not Required</td>
                            </tr>
                            <tr className="group hover:bg-white/5 transition-colors">
                                <td className="py-8 font-black uppercase tracking-widest text-[10px] text-gray-500">Tax Benefits</td>
                                <td className="py-8">Offshore Income Exempt</td>
                                <td className="py-8">Import & Sales Discounts</td>
                                <td className="py-8">Priority Path</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Expert Consultation CTA */}
            <section className="py-14 text-center px-4">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <ShieldCheck className="text-brand-GOLD mx-auto mb-8" size={64} />
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none text-center">Plan Your <br /> <span className="text-brand-GOLD underline italic">Secure</span> Exit.</h2>
                    <p className="text-base md:text-lg text-slate-500 mb-16 font-medium leading-relaxed italic text-center">
                        Don't guess with your future. Relocating to Panama is a high-stakes move that requires <strong>panama relocation expert</strong> precision.
                    </p>
                    <div className="flex justify-center flex-col sm:flex-row gap-8">
                        <Link href={`/${lang}/relocation/tours`} className="px-8 py-4 bg-brand-GOLD text-brand-950 font-black uppercase tracking-[0.3em] text-[11px] rounded-full hover:bg-amber-400 transition-all shadow-2xl inline-block">
                            Start My Discovery Journey
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RelocationVisasContent;
