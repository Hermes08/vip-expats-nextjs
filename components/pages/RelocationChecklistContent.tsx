'use client';

import React from 'react';
import { ClipboardCheck, Check, ArrowRight, FileText, Landmark, ShieldCheck, Zap, AlertCircle, Clock, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useLanguage } from '@/context/LanguageContext';

const RelocationChecklistContent: React.FC = () => {
    const { lang } = useLanguage();
    const breadcrumbItems = [
        { name: "Relocation", item: `https://panamarealestatesale.com/${lang}/relocation` },
        { name: "Legal Hub", item: `https://panamarealestatesale.com/${lang}/relocation/legal` },
        { name: "Visa Checklist 2026", item: `https://panamarealestatesale.com/${lang}/relocation/legal/checklist` }
    ];

    const checklistSections = [
        {
            title: "Phase 1: Home Country Procurement",
            items: [
                {
                    title: "FBI Criminal Record (USA) / Police Check (Global)",
                    desc: "This is the most critical document. For US citizens, it MUST be the FBI Identity History Summary. Local or State police checks are not accepted. For others, it must be the national-level background check. In 2026, Panama requires this to be issued within 6 months of your filing date. If you get this too early, you risk it 'aging out' before your appointment. Use an FBI Channeller for 24-48 hour results instead of the standard 6-week mail-in process."
                },
                {
                    title: "The Golden Apostille Seal",
                    desc: "An apostille is a federal authentication of a signature. In the US, this is issued by the Secretary of State (for state docs) or the US Department of State (for federal docs like the FBI check). Note that federal apostilles currently take 4-8 weeks. We recommend starting this process exactly 90 days before your flight. Every document must be 'fresh'—Panama is extremely strict about the 180-day window."
                },
                {
                    title: "Marriage & Birth Certificates",
                    desc: "Only required if you are relocating with a spouse or children. These must be original certified copies issued by the vital records office (not a photocopy) and MUST also be apostilled. If you are divorced, you only need the divorce decree if you have reverted to a maiden name and it differs from your current passport."
                },
                {
                    title: "Passport & ID Organizers",
                    desc: "You need a color copy of every single page of your passport (including blank ones). This must be notarized in Panama by a Panamanian notary. We handle this during your first morning in the city. Additionally, bring a secondary ID (Driver's License) as backup for bank account openings."
                }
            ]
        },
        {
            title: "Phase 2: Panamanian Formalities",
            items: [
                {
                    title: "Panamanian Health Certificate",
                    desc: "You cannot bring this from home. It must be issued by a licensed Panamanian physician. This involves a simple physical exam and a basic blood test (HIV and TB are the standard checks). We coordinate this appointment to happen during your first 48 hours in the country to ensure your file is submitted immediately."
                },
                {
                    title: "8 Passport Photos (The Formal Standard)",
                    desc: "Immigration in Panama has a dress code. Men must be in a suit and tie; women in conservative business attire. These photos must be 'infante' size (2x2) and should be taken at a specialized shop in Panama City to ensure the background color and paper quality meet the exact 2026 standards."
                },
                {
                    title: "Personal Sworn Affidavit",
                    desc: "Drafted by your attorney, this document declares that you have never been arrested for or convicted of any crimes other than minor traffic violations. It must be signed in the presence of a notary in Panama. This is your personal pledge of good conduct."
                },
                {
                    title: "Bank Reference & Utility Bills",
                    desc: "For the investment and Friendly Nations paths, you need a bank reference letter from your home bank (original, on letterhead, signed in ink). You also need a utility bill (Power, Water, or Fiber) in your name to prove your current 'home country' residence for AML compliance."
                }
            ]
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-brand-950 text-white font-sans selection:bg-brand-GOLD selection:text-brand-950">
            <BreadcrumbSchema items={[{ name: "Home", item: `https://panamarealestatesale.com/${lang}` }, ...breadcrumbItems]} />

            <div className="max-w-7xl mx-auto px-4 mt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Hero Section */}
            <section className="py-24 bg-brand-GOLD text-brand-950 relative overflow-hidden rounded-b-[4rem]">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-block px-5 py-2 bg-brand-950 text-white text-[10px] font-black uppercase tracking-[0.5em] rounded-full mb-8">
                        The Master Dossier
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black mb-8 uppercase tracking-tighter leading-[0.85]">
                        Panama Visa <br /> <span className="italic">Checklist</span> 2026
                    </h1>
                    <p className="text-base md:text-lg text-brand-950/70 max-w-4xl mx-auto leading-relaxed font-black uppercase tracking-tight">
                        The definitive guide to <strong>panama visa requirements</strong>. Don't leave your country without checking every box in this 2026 guide.
                    </p>
                </div>
            </section>

            {/* Timeline Warning */}
            <section className="py-16 bg-red-50 border-y border-red-100">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
                    <AlertCircle className="text-red-500 shrink-0" size={32} />
                    <p className="text-sm font-black uppercase tracking-widest text-red-900 text-center md:text-left">
                        CRITICAL: Most documents (like FBI checks) EXPIRE after 6 months. <br />
                        <span className="opacity-60">If your document is older than 180 days on the day of filing, it WILL be rejected.</span>
                    </p>
                </div>
            </section>

            {/* Checklist Grid */}
            <section className="py-14 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20">
                    {checklistSections.map((section, idx) => (
                        <div key={idx}>
                            <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 italic border-b-4 border-brand-GOLD inline-block pb-2">
                                {section.title}
                            </h2>
                            <div className="space-y-10">
                                {section.items.map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-10 h-10 border-2 border-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:border-brand-GOLD transition-all group-hover:bg-brand-GOLD/10">
                                            <div className="w-4 h-4 rounded-sm bg-transparent group-hover:bg-brand-GOLD transition-all"></div>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black uppercase tracking-tighter mb-2 italic text-brand-950">{item.title}</h4>
                                            <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pro-Tips / Panama Real Estate Sale Insights */}
            <section className="py-14 bg-black text-white rounded-3xl mx-4 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <Zap className="text-brand-GOLD mb-10" size={64} />
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The <span className="text-brand-GOLD underline">Panama Real Estate Sale</span> Secret</h2>
                            <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                                Navigating <strong>panama residency requirements</strong> isn't just about the list; it's about the timing. We manage the entire schedule for you.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4 p-8 bg-white/5 rounded-3xl border border-white/5">
                                    <Clock className="text-brand-GOLD shrink-0" size={24} />
                                    <p className="text-sm font-medium"><strong>Apostille Time:</strong> Some US states take 6+ weeks for apostilles. We help you use expedited FBI channellers to cut this down to 10 days.</p>
                                </div>
                                <div className="flex gap-4 p-8 bg-white/5 rounded-3xl border border-white/5">
                                    <Globe className="text-brand-GOLD shrink-0" size={24} />
                                    <p className="text-sm font-medium"><strong>Digital Copies:</strong> We maintain a secure cloud bunker for your documents, so even if you lose the originals, we have the scans ready for backup.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative aspect-square">
                            <Image
                                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80"
                                alt="Legal professional organizing Panama visa requirement checklist"
                                fill
                                className="object-cover rounded-2xl grayscale opacity-50"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Art of Timing: 2026 Strategy */}
            <section className="py-14 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 uppercase tracking-tighter italic leading-none">The Art of <br /><span className="text-brand-GOLD italic">Timing</span></h2>
                            <div className="space-y-8 text-lg text-slate-400 font-medium leading-[1.8]">
                                <p>
                                    The #1 reason <strong>panama visa requirements</strong> fail is not a lack of money or intent—it's <strong>document expiration</strong>. Panama defines "Valid" as having been issued within 180 days of the file hitting the desk at the Ministry of Security.
                                </p>
                                <p>
                                    If you order your FBI check 5 months before your move, and then your flight is delayed by 3 weeks, your entire legal folder is junk. You have to start over.
                                </p>
                                <div className="p-10 bg-black text-white rounded-2xl shadow-2xl">
                                    <h4 className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-6 text-center">Panama Real Estate Sale Timeline Management</h4>
                                    <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Day -90</span>
                                            <p className="text-xs font-bold mt-2">Order certified Marriage/Birth certificates.</p>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Day -45</span>
                                            <p className="text-xs font-bold mt-2">FBI Fingerprints via Authorized Channeller.</p>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Day -30</span>
                                            <p className="text-xs font-bold mt-2">Submit FBI report for Federal Apostille (expedited).</p>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Day -14</span>
                                            <p className="text-xs font-bold mt-2">Final notarized bank references & utility scans.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative aspect-square">
                            <Image
                                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&q=80"
                                alt="Modern filing system and organized legal documents"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Checklist FAQ: Requirements Edition */}
            <section className="py-14 max-w-5xl mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 uppercase tracking-tighter italic leading-none text-brand-950 underline decoration-brand-GOLD decoration-8 underline-offset-8">Requirement <span className="text-brand-GOLD italic">FAQ</span></h2>
                    <p className="text-slate-400 font-black uppercase tracking-widest text-xs mt-8">Deep Answers for Document Procurement.</p>
                </div>

                <div className="space-y-8">
                    {[
                        { q: "What is an Apostille and why is it mandatory?", a: "An Apostille is an international certification comparable to a notarization in domestic law. Panama is a member of the Hague Convention, so all foreign documents must have this seal to be legally recognized. Without it, your documents are just paper." },
                        { q: "Can I use a local police check if I live in a small town?", a: "No. Panama requires a **National** background check. In the USA, this means the FBI. In Canada, the RCMP. In the UK, the ACRO. Local town or 'County' checks will result in immediate rejection." },
                        { q: "Do my documents need to be translated in my home country?", a: "NO. This is a common and expensive mistake. Panama requires all translations to be done by a **Certified Panamanian Public Translator**. Any translation done outside of Panama is invalid for immigration purposes." },
                        { q: "What if I have lived in multiple countries recently?", a: "If you have lived in a country other than your home country for more than 2 years, you must provide a background check from THAT country as well, duly apostilled. This is common for 'Nomad' types moving through multiple jurisdictions." },
                        { q: "Do I need to bring my kids for the filing?", a: "Yes. Every dependent included in the visa must be physically present in Panama for the initial filing and to receive their temporary residency card." },
                        { q: "Can I use 'Digital' documents for the filing?", a: "Immigration requires **Originals** with wet signatures or the original apostilled federal printouts. Scans are only used for pre-clearance. You must travel with the physical folder." }
                    ].map((faq, i) => (
                        <div key={i} className="p-10 border-b border-white/10 group hover:bg-neutral-50 transition-all rounded-2xl">
                            <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic group-hover:text-brand-GOLD transition-colors">{faq.q}</h4>
                            <p className="text-sm text-slate-400 font-medium leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-14 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-12 uppercase tracking-tighter italic leading-none">Ready for <br /> Day One?</h2>
                    <p className="text-xl text-slate-400 mb-16 font-medium leading-relaxed">
                        Don't risk your move on a missing paper. Get the full verified 2026 checklist and a 1-on-1 legal review.
                    </p>
                    <Link href={`/${lang}/contacto`} className="px-8 py-4 bg-brand-950 text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-brand-GOLD hover:text-brand-950 transition-all shadow-2xl inline-block">
                        Talk to a Document Expert
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default RelocationChecklistContent;
