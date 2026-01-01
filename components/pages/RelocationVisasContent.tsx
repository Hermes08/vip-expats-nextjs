'use client';

import React from 'react';
import { ShieldCheck, ArrowRight, Check, AlertCircle, Users, Award, Briefcase, Landmark } from 'lucide-react';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const RelocationVisasContent: React.FC = () => {
    const breadcrumbItems = [
        { name: "Home", item: "https://expatrockstars.com/" },
        { name: "Relocation", item: "https://expatrockstars.com/relocation" },
        { name: "Residency Visas", item: "https://expatrockstars.com/relocation/visas" }
    ];

    const visaTypes = [
        {
            title: "Friendly Nations Visa",
            description: "The most flexible residency for citizens of 50+ countries. Ideal for professionals and digital nomads.",
            path: "/relocation/visas/friendly-nations",
            benefits: ["Permanent Residency in 2 steps", "Right to Work", "Low minimum investment", "Tax Efficiency"],
            icon: Users
        },
        {
            title: "Pensionado (Retirement)",
            description: "The world's #1 retirement program. Lifetime discounts and permanent residency for life.",
            path: "/relocation/visas/pensionado",
            benefits: ["25% off Electricity/Water", "50% off Movies/Concerts", "25% off Airline Tickets", "Import zero-tax car"],
            icon: Award
        },
        {
            title: "Qualified Investor",
            description: "The fastest path. Permanent residency in as little as 30 days via real estate investment.",
            path: "/relocation/visas/qualified-investor",
            benefits: ["Direct Permanent Residency", "No local job required", "Investment ROI potential", "Priority processing"],
            icon: Landmark
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white text-brand-950 font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={breadcrumbItems} />

            {/* Hero Section */}
            <section className="bg-brand-950 py-32 text-white relative overflow-hidden rounded-b-[5rem]">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        Legal Foundation
                    </span>
                    <h1 className="text-5xl md:text-8xl font-heading font-black mb-10 uppercase tracking-tighter">
                        Panama <br /> <span className="text-brand-GOLD italic">Residency</span> Visas
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        Your gateway to a tax-optimized tropical life. We simplify the <strong>panama residency visa</strong> process so you can focus on the lifestyle.
                    </p>
                </div>
            </section>

            {/* Comparison Table Section */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter">Choose Your <span className="text-brand-GOLD italic">Rockstar Path</span></h2>
                    <p className="text-neutral-500 text-lg uppercase tracking-widest font-black italic">Find the right fit for your relocation strategy.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {visaTypes.map((visa, i) => (
                        <div key={i} className="border border-neutral-200 p-12 rounded-[4rem] flex flex-col hover:shadow-2xl transition-all group">
                            <div className="mb-10">
                                <visa.icon className="text-brand-GOLD mb-8" size={56} strokeWidth={1.5} />
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 italic leading-none">{visa.title}</h3>
                                <p className="text-sm text-neutral-500 font-medium leading-relaxed">{visa.description}</p>
                            </div>
                            <ul className="space-y-4 mb-12 flex-grow">
                                {visa.benefits.map((benefit, j) => (
                                    <li key={j} className="flex gap-3 text-xs font-black uppercase tracking-widest text-neutral-800">
                                        <Check className="text-brand-GOLD shrink-0" size={16} /> {benefit}
                                    </li>
                                ))}
                            </ul>
                            <Link href={visa.path} className="w-full py-5 bg-brand-950 text-white text-center font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-brand-GOLD hover:text-brand-950 transition-all">
                                View Requirements
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Disclaimer / Warning Section */}
            <section className="py-24 max-w-5xl mx-auto px-4">
                <div className="bg-neutral-50 border border-neutral-200 p-12 rounded-[4rem] flex flex-col md:flex-row gap-10 items-center">
                    <div className="bg-red-50 p-6 rounded-3xl text-red-600">
                        <AlertCircle size={48} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 italic text-brand-900">Important: Legal Transparency</h3>
                        <p className="text-sm font-medium text-neutral-600 leading-relaxed">
                            Residency laws in Panama can change. Our <strong>panama relocation services</strong> include direct access to registered immigration attorneys who provide 2024-verified documentation requirements for the <strong>friendly nations visa panama</strong> and beyond. Never rely on outdated forum posts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Summary Table */}
            <section className="py-32 bg-brand-950 text-white rounded-[5rem] mx-4">
                <div className="max-w-7xl mx-auto px-8 overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="py-10 text-[10px] font-black uppercase tracking-[0.4em] text-brand-GOLD">Feature</th>
                                <th className="py-10 text-[10px] font-black uppercase tracking-[0.4em]">Friendly Nations</th>
                                <th className="py-10 text-[10px] font-black uppercase tracking-[0.4em]">Pensionado</th>
                                <th className="py-10 text-[10px] font-black uppercase tracking-[0.4em]">Qualified Investor</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium">
                            <tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                                <td className="py-8 font-black uppercase tracking-widest text-[10px] text-gray-500">Min. Investment</td>
                                <td className="py-8">$200,000 Property / Job</td>
                                <td className="py-8">$1,000/mo Lifetime Pension</td>
                                <td className="py-8">$300,000 Real Estate</td>
                            </tr>
                            <tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                                <td className="py-8 font-black uppercase tracking-widest text-[10px] text-gray-500">Time to PR</td>
                                <td className="py-8">2 Years (Provisional)</td>
                                <td className="py-8">Immediate</td>
                                <td className="py-8">Immediate (30 days)</td>
                            </tr>
                            <tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
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
            <section className="py-32 text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <ShieldCheck className="text-brand-GOLD mx-auto mb-8" size={64} />
                    <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 uppercase tracking-tighter">Get Your <span className="text-brand-GOLD italic">Visa Blueprint</span></h2>
                    <p className="text-xl text-neutral-500 mb-16 font-medium leading-relaxed">
                        Don't guess. Our specialized <strong>panama relocation tours</strong> include a private consultation with our residency legal team.
                    </p>
                    <Link href="/relocation/tours" className="px-16 py-8 bg-brand-950 text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-brand-GOLD hover:text-brand-950 transition-all shadow-2xl">
                        Schedule Consultation Tour
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default RelocationVisasContent;
