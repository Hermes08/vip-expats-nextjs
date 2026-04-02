'use client';

import React from 'react';
import { ShieldCheck, Gavel, Scale, FileText, Briefcase, HelpCircle, ArrowRight, UserCheck, AlertTriangle, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useLanguage } from '@/context/LanguageContext';

const RelocationLegalContent: React.FC = () => {
    const { lang } = useLanguage();
    const breadcrumbItems = [
        { name: "Relocation", item: `https://panamarealestatesale.com/${lang}/relocation` },
        { name: "Legal & Immigration", item: `https://panamarealestatesale.com/${lang}/relocation/legal` }
    ];
    // ... (omitting rest of constants for brevity, will use multi-replace or just replace hero)

    const legalServices = [
        {
            title: "Panama Residency",
            desc: "Expert guidance through <strong>panama residency</strong> options, from the <strong>friendly nations visa</strong> to the <strong>qualified investor</strong> program.",
            icon: ShieldCheck
        },
        {
            title: "Work Permits",
            desc: "Secure a <strong>panama work permit</strong> for professionals or digital nomads. Navigating the 2024 labor laws with precision.",
            icon: Briefcase
        },
        {
            title: "Corporate Setup",
            desc: "Establishing Panamanian corporations and foundations for tax efficiency and asset protection.",
            icon: Scale
        }
    ];

    const faqs = [
        {
            question: "Do I need a panama immigration lawyer?",
            answer: "Yes. By law, all residency applications in Panama must be filed through a licensed Panamanian lawyer. You cannot walk into the immigration office alone. We partner with the top in-house firm to ensure your <strong>panama residency visa</strong> is filed correctly the first time."
        },
        {
            question: "What are the passport requirements for Panama?",
            answer: "Your <strong>passport for panama</strong> must be valid for at least 3-6 months depending on your home country. For residency, it must be valid for the duration of the processing (usually 3-6 months)."
        },
        {
            question: "How long does panama permanent residency take?",
            answer: "It depends on the visa. The <strong>qualified investor visa</strong> can grant PR in 30 days, while the <strong>friendly nations visa panama requirements</strong> involve a 2-year provisional period before conversion."
        },
        {
            question: "What is an Apostille?",
            answer: "An apostille is a federal authentication of a document for international use. Panama requires all foreign documents (FBI check, birth certificates) to be apostilled by the issuing authority (e.g., US Department of State)."
        },
        {
            question: "Can I work in Panama with a residency visa?",
            answer: "Residency gives you the right to live, but a **Work Permit** is a separate legal process through the Ministry of Labor (MITRADEL). Certain visas, like the Professional path, make this easier."
        },
        {
            question: "Are there protected professions in Panama?",
            answer: "Yes. Over 50 professions (Medicine, Law, Engineering, Nursing) are reserved for Panamanian citizens. Foreigners can work in these sectors as 'Consultants' or 'Managers' but cannot hold the protected title."
        },
        {
            question: "How much are legal fees for a visa?",
            answer: "Legal fees typically range from $1,500 to $2,500 plus government costs of approx $1,050. Dependents usually cost an additional $500 - $800 each in legal fees."
        },
        {
            question: "Can I bring my pets to Panama?",
            answer: "Yes, but it requires a 'Pet Entry Permit' and a health certificate from your home vet, apostilled by the USDA (for US) or equivalent. Our legal team can handle the 'Home Quarantine' paperwork."
        },
        {
            question: "What is a 'Cédula'?",
            answer: "The Cédula is the official Panamanian ID card. You receive an 'E' Cédula (Foreigner) once your residency is approved. It is your most important piece of ID in the country."
        },
        {
            question: "Do I need to be in Panama for the whole process?",
            answer: "No. Most visas require one initial visit of 5-10 business days for the filing. After that, you can wait for approval (3-4 months) from abroad, or stay in Panama as a tourist-resident."
        },
        {
            question: "Is there an age limit for the Pensionado Visa?",
            answer: "No. As long as you have a lifetime government or corporate pension of $1,000/mo, you qualify regardless of age (perfect for early retirees)."
        },
        {
            question: "Can I buy a car in Panama as a tourist?",
            answer: "Yes, but you cannot get a Panamanian Driver's License until you have a residency card. You can drive on your foreign license for up to 90 days."
        },
        {
            question: "How do I open a bank account in Panama?",
            answer: "This is often harder than the visa. You need a bank reference letter, proof of income, and a local 'nexus' (like a residency application). Our lawyers handle the pre-compliance for you."
        },
        {
            question: "What is a 'Repatriation Bond'?",
            answer: "It is a $800 refundable deposit (or insurance) paid to the government in case you need to be deported. It's mandatory for almost all visa types."
        },
        {
            question: "What happens if my visa expires?",
            answer: "Panama is strict. If your temporary card expires before you file for the next stage, you face heavy fines ($50/mo) and potential deportation. Our legal calendar prevents this."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-brand-950 text-white font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: `https://panamarealestatesale.com/${lang}` }, ...breadcrumbItems]} />

            <div className="max-w-7xl mx-auto px-4 mt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <FAQSchema questions={faqs} />

            {/* Disclaimer Bar */}
            <div className="bg-brand-GOLD text-brand-950 py-3 text-center text-[10px] font-black uppercase tracking-[0.3em] sticky top-20 z-40">
                <AlertTriangle className="inline-block mr-2" size={14} />
                Professional Relocation Logistics — Official Legal Services provided by our Partner Firm
            </div>

            {/* Hero Section */}
            <section className="py-14 text-center max-w-7xl mx-auto px-4 relative overflow-hidden rounded-b-[4rem]">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80"
                        alt="Legal and immigration services concept for Panama residency"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-GOLD/10 border border-brand-GOLD/30 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        Legal & Immigration Hub
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-10 uppercase tracking-tighter">
                        Secure Your <br /><span className="text-brand-GOLD italic">Panama</span> Future
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        We aren't just tour guides; we are the bridge to your new life. While we handle the logistics, our <strong>panama immigration lawyers</strong> handle the law.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {legalServices.map((service, i) => (
                        <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:border-brand-GOLD/30 transition-all group">
                            <service.icon className="text-brand-GOLD mb-8 group-hover:scale-110 transition-transform" size={48} />
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 italic">{service.title}</h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: service.desc }}></p>
                            <Link href={`/${lang}/relocation/visas`} className="text-[10px] font-black uppercase tracking-widest text-brand-GOLD flex items-center gap-2">
                                Discover More <ArrowRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* The "No-Lawyer" Reality Check */}
            <section className="py-14 bg-black border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-5">
                    <Scale size={200} />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">When You <span className="text-brand-GOLD">DON'T</span> <br /> Need a Lawyer</h2>
                        <div className="space-y-8 text-lg text-slate-400 font-medium leading-[1.8]">
                            <p>
                                Transparency is our core value. While you <strong>must</strong> have a <strong>panama immigration lawyer</strong> for the visa filing itself, you do NOT need a lawyer for everything.
                            </p>
                            <p>
                                Many firms will try to charge you $2,000 for a "Real Estate Purchase Review" or a "Car Buying Escrow." For most standard transactions, a reputable broker and a simple notary-certified contract are sufficient.
                            </p>
                            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                                <h4 className="text-brand-GOLD text-xs font-black uppercase tracking-widest mb-4">Save Your Money On:</h4>
                                <ul className="grid grid-cols-2 gap-4 text-[10px] font-black uppercase tracking-widest">
                                    <li className="flex gap-2"><Check size={12} className="text-brand-GOLD" /> Standard Rental Leases</li>
                                    <li className="flex gap-2"><Check size={12} className="text-brand-GOLD" /> Pre-owned Car Sales</li>
                                    <li className="flex gap-2"><Check size={12} className="text-brand-GOLD" /> Utility Setup</li>
                                    <li className="flex gap-2"><Check size={12} className="text-brand-GOLD" /> School Enrollments</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-brand-GOLD p-8 rounded-2xl text-brand-950 shadow-2xl">
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">The "Legal Panama Real Estate Sale" Hybrid</h3>
                        <p className="font-bold opacity-80 leading-relaxed mb-8 text-lg">
                            We believe in the "Hybrid" model: Use the lawyers for the visa and the heavy corporate lifting, but use our **Logistics Specialists** for the ground-level move. This saves our clients an average of **$1,500 - $3,000** in unnecessary legal fees.
                        </p>
                        <Link href={`/${lang}/contacto`} className="px-6 py-3 bg-brand-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all inline-block shadow-2xl">
                            Get My Logistic Proposal
                        </Link>
                    </div>
                </div>
            </section>

            {/* Value Proposition: The Lawyer Connection */}
            <section className="py-14 bg-black rounded-3xl mx-4 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <UserCheck size={64} className="text-brand-GOLD mb-10" />
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none text-brand-950">The <span className="text-brand-GOLD underline">In-House</span> Advantage</h2>
                            <p className="text-xl text-slate-400 font-medium leading-[1.8] mb-12">
                                Navigating <strong>panama visa requirements</strong> alone is a liability. Our platform exists to connect you with verified <strong>panama visa attorneys</strong> who have a proven track record. No "cousin-of-a-friend" deals. Just vetted, professional legal counsel.
                            </p>
                            <Link href={`/${lang}/relocation/legal/lawyers-directory`} className="px-12 py-6 bg-brand-950 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-brand-GOLD hover:text-brand-950 transition-all inline-block shadow-2xl">
                                Browse Verified Lawyers
                            </Link>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-8 bg-black text-white rounded-2xl text-center border border-white/10">
                                    <div className="text-4xl font-black italic text-brand-GOLD mb-2">15+</div>
                                    <div className="text-[9px] font-black uppercase tracking-widest opacity-60">Years of Experience</div>
                                </div>
                                <div className="p-8 bg-white/5 rounded-2xl text-center border border-white/10">
                                    <div className="text-4xl font-black italic text-brand-950 mb-2">2,500+</div>
                                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Visas Processed</div>
                                </div>
                                <div className="p-8 bg-white/5 rounded-2xl text-center border border-white/10">
                                    <div className="text-4xl font-black italic text-brand-950 mb-2">100%</div>
                                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Success Rate</div>
                                </div>
                                <div className="p-8 bg-brand-GOLD text-brand-950 rounded-2xl text-center shadow-xl">
                                    <div className="text-4xl font-black italic mb-2">Elite</div>
                                    <div className="text-[9px] font-black uppercase tracking-widest opacity-60">Legal Network</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legal FAQ Section */}
            <section className="py-14 max-w-5xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter italic"><span className="text-brand-GOLD">Legal</span> FAQ</h2>
                    <p className="text-slate-400 text-lg uppercase tracking-widest font-black">Clearing the path for your relocation.</p>
                </div>

                <div className="space-y-10">
                    {faqs.map((faq, idx) => (
                        <details key={idx} className="group bg-black rounded-2xl border border-white/5 overflow-hidden transition-all hover:border-brand-GOLD/50">
                            <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                <span className="text-xl font-black uppercase tracking-tighter italic pr-8">{faq.question}</span>
                                <span className="text-brand-GOLD group-open:rotate-180 transition-transform duration-300">
                                    <ArrowRight size={24} />
                                </span>
                            </summary>
                            <div
                                className="px-8 pb-8 text-slate-400 font-medium leading-relaxed border-t border-white/5 pt-6"
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                        </details>
                    ))}
                </div>
            </section>

            {/* Entry Requirements Callout */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="bg-brand-GOLD p-8 rounded-2xl text-brand-950 text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 italic">Ready to Apply?</h2>
                    <p className="text-xl font-bold opacity-80 mb-12 max-w-2xl mx-auto">
                        Don't let <strong>panama entry requirements</strong> or complex forms slow you down. Get the legal clarity you need today.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href={`/${lang}/contacto`} className="px-12 py-6 bg-brand-950 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-black transition-all">
                            Book Legal Consultation
                        </Link>
                        <Link href={`/${lang}/relocation/visas`} className="px-12 py-6 bg-white border-2 border-brand-950 text-brand-950 font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-brand-950 hover:text-white transition-all">
                            View Visa Options
                        </Link>
                    </div>
                </div>
            </section>

            {/* Keyword Footer SEO */}
            <section className="py-24 border-t border-white/5 opacity-40 text-center">
                <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-4 text-[9px] font-black uppercase tracking-widest">
                    <span>Panama Immigration Lawyer</span>
                    <span>Friendly Nations Visa Requirements</span>
                    <span>Pensionado Visa Panama</span>
                    <span>Panama Residency by Investment</span>
                    <span>Panama Work Permit Guide</span>
                </div>
            </section>
        </div>
    );
};

export default RelocationLegalContent;
