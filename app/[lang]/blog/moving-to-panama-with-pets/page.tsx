import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Heart, AlertCircle, MapPin, Zap, FileText } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Moving to Panama with Pets 2026: Import Requirements, Vet, Quarantine',
    description: 'Import pets to Panama. Vaccination requirements, veterinary documentation, quarantine, airlines, pet services.',
    keywords: 'moving to Panama with pets, pet import Panama, quarantine Panama pets, dog cat Panama',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/moving-to-panama-with-pets',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/moving-to-panama-with-pets',
            'es': 'https://panamarealestatesale.com/es/blog/moving-to-panama-with-pets',
            'pt': 'https://panamarealestatesale.com/pt/blog/moving-to-panama-with-pets',
            'de': 'https://panamarealestatesale.com/de/blog/moving-to-panama-with-pets',
        },
    },
    openGraph: {
        title: 'Moving to Panama with Pets 2026: Import Requirements, Vet, Quarantine',
        description: 'Import pets to Panama. Vaccination requirements, veterinary documentation, quarantine, airlines, pet services.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/moving-to-panama-with-pets',
        images: [{ url: 'https://images.unsplash.com/photo-1552053831-71594a27c62d?w=1200&q=80', width: 1200, height: 630, alt: 'Pets in Panama' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Moving to Panama with Pets 2026: Import Requirements, Vet, Quarantine',
        description: 'Import pets to Panama. Vaccination requirements, veterinary documentation, quarantine, airlines, pet services.',
        images: ['https://images.unsplash.com/photo-1552053831-71594a27c62d?w=1200&q=80'],
    },
};

const requirements = [
    {
        req: 'USDA Health Certificate',
        detail: 'Signed by USDA-accredited vet AND endorsed by USDA APHIS',
        timing: 'Within 10 days of travel',
        cost: '$30–100 vet fee + $38 USDA endorsement',
        importance: 'CRITICAL — pet will not be allowed entry without this',
    },
    {
        req: 'Microchip (ISO 15-digit)',
        detail: 'Must be implanted BEFORE rabies vaccine',
        timing: 'Before rabies vaccination',
        cost: '$15–30 at vet',
        importance: 'Required. Old 9-digit chips need universal reader note.',
    },
    {
        req: 'Rabies Vaccine (Current)',
        detail: 'Within 1 year for dogs, 3 years for cats (if labeled 3-year)',
        timing: 'Before travel',
        cost: 'Included in vet visit',
        importance: 'Must be current. Microchip must precede vaccine.',
    },
    {
        req: 'Dog Vaccines (Recommended)',
        detail: 'Distemper, hepatitis, parvovirus, leptospirosis',
        timing: 'Current',
        cost: 'Usually $20–50 per vaccine',
        importance: 'Not always legally required but border may ask. Get them.',
    },
    {
        req: 'Internal/External Parasite Treatment',
        detail: 'Flea, tick, worm treatment by vet',
        timing: 'Within 72 hours of travel',
        cost: '$20–50',
        importance: 'Required. Must be on health certificate.',
    },
    {
        req: 'Tapeworm Treatment (Praziquantel)',
        detail: 'Vermifuge/deworming medication',
        timing: '1–5 days before entry',
        cost: '$10–25',
        importance: 'Required. Must be documented.',
    },
];

const stepByStep = [
    {
        step: '1',
        title: 'Contact your vet 3–4 weeks before travel',
        detail: 'Let them know you are moving a pet to Panama. Request USDA-accredited vet office. Get all current vaccines confirmed.',
    },
    {
        step: '2',
        title: 'Get microchip implanted (if not already done)',
        detail: 'ISO 15-digit chip. Must happen BEFORE rabies vaccine. Cost: $15–30.',
    },
    {
        step: '3',
        title: 'Get rabies vaccine (or confirm current)',
        detail: 'Check if current (within 1 year for dogs, 3 years for cats). Cost: usually included in vet visit ($50–100).',
    },
    {
        step: '4',
        title: 'Get USDA-accredited vet to sign health certificate',
        detail: 'This is the main document. Signed by vet, includes all vaccine records and microchip info. Cost: $30–100.',
    },
    {
        step: '5',
        title: 'Get USDA APHIS endorsement (apostille)',
        detail: 'Take signed health certificate to USDA office for official stamp. Cost: $38. Takes 1–3 business days.',
    },
    {
        step: '6',
        title: 'Schedule parasite treatment (within 72 hours of flight)',
        detail: 'Flea/tick/worm treatment from vet. Must be documented on health certificate.',
    },
    {
        step: '7',
        title: 'Give tapeworm treatment 1–5 days before travel',
        detail: 'Praziquantel or other vermifuge. Cost: $10–25.',
    },
    {
        step: '8',
        title: 'Book airline and arrange pet transportation',
        detail: 'Check if pet can travel in-cabin (under 20 lbs) or cargo. Arrange pet carrier. Cost: $125–500+ depending on airline and size.',
    },
    {
        step: '9',
        title: 'Arrive at airport 2–3 hours early',
        detail: 'Allow extra 30 minutes for pet check-in. Bring all documents to airline counter.',
    },
    {
        step: '10',
        title: 'At Tocumen airport, present documents to MIDA inspector',
        detail: 'Show health certificate, microchip proof, insurance. Processing usually takes 15–45 minutes.',
    },
];

const airlines = [
    {
        airline: 'Copa Airlines',
        incabin: 'Yes, under 20 lbs with carrier',
        inCost: '$125 fee',
        cargo: 'Yes, available',
        cargoCost: 'Varies, ~$300–800+',
        notes: 'Panama national carrier. Most experienced with Panama entry.',
    },
    {
        airline: 'American Airlines',
        incabin: 'Yes, under 20 lbs',
        inCost: '$125 fee',
        cargo: 'Yes, restricted heat',
        cargoCost: 'Varies',
        notes: 'May restrict cargo in summer (heat).',
    },
    {
        airline: 'United Airlines',
        incabin: 'Yes, under 20 lbs',
        inCost: '$125 fee',
        cargo: 'Yes, varies',
        cargoCost: 'Varies',
        notes: 'Check breed/size restrictions.',
    },
    {
        airline: 'Delta',
        incabin: 'Yes, under 20 lbs',
        inCost: '$125 fee',
        cargo: 'Yes, varies',
        cargoCost: 'Varies',
        notes: 'Heat restrictions in summer for cargo.',
    },
];

const petsInPanama = [
    {
        service: 'Veterinary Care',
        detail: 'Good quality, much cheaper than USA',
        cost: '$30–60 per vet visit',
        notes: 'Professional vets in Panama City',
    },
    {
        service: 'Spay/Neuter',
        detail: 'Professional surgical services',
        cost: '$100–200',
        notes: 'Highly recommended for long-term care',
    },
    {
        service: 'Pet Stores',
        detail: 'Food, supplies, toys',
        cost: 'Similar to US prices',
        notes: 'Multiplaza, Albrook Mall have chains',
    },
    {
        service: 'Dog-Friendly Areas',
        detail: 'Parks, beaches, social spots',
        cost: 'Free',
        notes: 'Parque Omar very dog-friendly. Amador Causeway.',
    },
    {
        service: 'Pet Boarding',
        detail: 'Professional boarding services',
        cost: '$20–40/night',
        notes: 'Good facilities in Panama City',
    },
    {
        service: 'Dog Walking',
        detail: 'Pet walking services',
        cost: '$5–15/walk',
        notes: 'Popular service in Panama City',
    },
];

const restrictions = [
    {
        restriction: 'Brachycephalic Breeds',
        effect: 'Often restricted in cargo during summer',
        breeds: 'Bulldogs, pugs, French bulldogs, Boston terriers, Shih Tzus',
        note: 'Heat sensitivity. Cargo may not be allowed June–August.',
    },
    {
        restriction: 'Apartment/Building Bans',
        effect: 'Some condos prohibit pets entirely',
        impact: 'Must ask landlord before signing lease',
        note: 'Houses and villas more pet-friendly.',
    },
    {
        restriction: 'Large Dogs',
        effect: 'Some buildings restrict dogs over 40 lbs',
        impact: 'May need house instead of condo',
        note: 'Check pet policy before committing to housing.',
    },
];

const faqs = [
    {
        q: 'Is there quarantine for dogs from the USA?',
        a: 'NO. Panama does not have quarantine for dogs and cats from the USA, Canada, or EU countries — provided you have the correct documents. Your pet enters the same day you arrive if all paperwork is in order.',
    },
    {
        q: 'Do I need pet insurance for Panama?',
        a: 'Pet insurance is not mandatory but recommended. It is expensive compared to USA ($100–300/month). Many expats self-insure or use basic vet services as-needed. Vet costs are low enough to be affordable.',
    },
    {
        q: 'Can I travel with my pet in the cabin on the plane?',
        a: 'Yes, if under 20 lbs (9 kg) including carrier. Most airlines charge $125 for in-cabin pets. Pets over 20 lbs must travel in cargo. Cargo is stressful for animals but generally safe with major airlines.',
    },
    {
        q: 'How much does it cost to move a pet to Panama?',
        a: 'Total estimate: $200–600. Vet visits ($50–100), USDA fee ($38), airline fee ($125–500 depending on size/method), microchip ($15–30). Parasite treatments ($20–50). Budget $400–600 for a medium-sized dog.',
    },
    {
        q: 'Where is the best veterinary care in Panama?',
        a: 'Panama City has excellent vets. Recommended: Hospital Veterinario Melo, Clínica Veterinaria Hopkins. Both are professional, speak English, and charge $30–60 per visit. Much cheaper than USA.',
    },
];

const vets = [
    {
        name: 'Hospital Veterinario Melo',
        location: 'Panama City',
        services: 'Full-service veterinary hospital',
        language: 'English spoken',
        rating: 'Highly recommended',
    },
    {
        name: 'Clínica Veterinaria Hopkins',
        location: 'Panama City',
        services: 'Comprehensive pet care',
        language: 'English spoken',
        rating: 'Highly recommended',
    },
];

export default async function PetsRelocationPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1587300411107-ec448a9e4b85?w=1600&q=80"
                        alt="Pets in Panama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        PETS RELOCATION GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Moving to Panama<br />with Your Pets 2026
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Complete guide to relocating dogs and cats to Panama. No quarantine, requirements, airline options, and veterinary care in Panama.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Good news: Panama does NOT have quarantine for dogs and cats from the USA, Canada, and EU countries. Your pet enters the same day you arrive if you have the correct documents. This guide covers everything: USDA requirements, microchipping, airline options, costs, and life with pets in Panama.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        Bottom line: Budget $400–600 for pet relocation. Start the process 3–4 weeks before travel. Get the USDA health certificate and you are done.
                    </p>
                </section>

                {/* Good News */}
                <section className="reveal-on-scroll bg-brand-TEAL/10 rounded-2xl p-8 border border-brand-TEAL/30">
                    <h2 className="text-white text-2xl font-heading font-bold mb-4 uppercase tracking-tighter italic flex items-center gap-2">
                        <Heart className="text-brand-TEAL" size={24} />
                        Great News for Pet Owners
                    </h2>
                    <div className="space-y-3 text-slate-500 text-sm leading-relaxed">
                        <p>
                            Panama DOES NOT require quarantine for dogs and cats from the United States, Canada, most EU countries, Colombia, and many other nations.
                        </p>
                        <p>
                            Your pet will clear immigration and customs the same day you arrive — provided you have the proper documents. No extended quarantine facility. No weeks of separation.
                        </p>
                        <p>
                            This is a massive advantage over many other countries that require 30–60+ days of quarantine.
                        </p>
                    </div>
                </section>

                {/* Requirements */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <FileText className="inline text-brand-GOLD mr-2" size={28} />
                        Requirements: What Your Pet Needs
                    </h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        Panama\'s requirements are actually quite straightforward. You need these documents and procedures:
                    </p>
                    <div className="space-y-4">
                        {requirements.map((req, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-white font-bold text-sm">{req.req}</h3>
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded ${
                                        req.importance === 'CRITICAL'
                                            ? 'bg-brand-GOLD/20 text-brand-GOLD'
                                            : 'bg-brand-TEAL/20 text-brand-TEAL'
                                    }`}>
                                        {req.importance}
                                    </span>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-1">What</div>
                                        <div className="text-slate-500 text-xs">{req.detail}</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-1">When</div>
                                        <div className="text-slate-500 text-xs">{req.timing}</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-1">Cost</div>
                                        <div className="text-slate-500 text-xs">{req.cost}</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-1">Why It Matters</div>
                                        <div className="text-slate-500 text-xs">{req.importance === 'CRITICAL' ? 'Will not be allowed without' : 'Recommended'}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Step by Step */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <CheckCircle className="inline text-brand-GOLD mr-2" size={28} />
                        10-Step Preparation Timeline
                    </h2>
                    <div className="space-y-4">
                        {stepByStep.map((item, i) => (
                            <div key={i} className="flex items-start gap-5 card-light rounded-xl p-5 border border-brand-100">
                                <div className="w-10 h-10 rounded-full bg-brand-GOLD/10 border border-brand-GOLD/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-GOLD font-black text-sm">{item.step}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="text-white font-bold text-sm mb-1">{item.title}</div>
                                    <div className="text-slate-500 text-xs leading-relaxed">{item.detail}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Airlines */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Zap className="inline text-brand-GOLD mr-2" size={28} />
                        Which Airline? In-Cabin vs. Cargo
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Your choice depends on your pet\'s size. In-cabin is best for small pets (under 20 lbs). Cargo works for larger pets but is more stressful.
                    </p>
                    <div className="space-y-4 mb-6">
                        {airlines.map((airline, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <h3 className="text-white font-bold text-sm mb-4">{airline.airline}</h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-1">In-Cabin</div>
                                        <div className="text-slate-500 text-xs">{airline.incabin}</div>
                                        <div className="text-slate-500 text-[9px] mt-1">{airline.inCost}</div>
                                    </div>
                                    <div>
                                        <div className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest mb-1">Cargo</div>
                                        <div className="text-slate-500 text-xs">{airline.cargo}</div>
                                        <div className="text-slate-500 text-[9px] mt-1">{airline.cargoCost}</div>
                                    </div>
                                </div>
                                <div className="border-t border-brand-100 pt-3 mt-3">
                                    <div className="text-slate-500 text-[9px] font-bold uppercase tracking-widest mb-1">Notes</div>
                                    <div className="text-slate-500 text-xs">{airline.notes}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-GOLD/10 rounded-xl p-5 border border-brand-GOLD/30">
                        <div className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-2">Pro Tip: Copa Airlines</div>
                        <p className="text-slate-500 text-sm">
                            Copa is Panama\'s national airline and has the most experience with pets entering Panama. They are experienced with the border process and animal handling. Highly recommended.
                        </p>
                    </div>
                </section>

                {/* Life with Pets in Panama */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Heart className="inline text-brand-GOLD mr-2" size={28} />
                        Living with Pets in Panama
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Once your pet arrives, you will find Panama surprisingly pet-friendly. Here is what to expect:
                    </p>
                    <div className="space-y-3 mb-6">
                        {petsInPanama.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-4">
                                <div className="flex-1">
                                    <div className="text-white font-bold text-sm">{item.service}</div>
                                    <div className="text-slate-500 text-xs mt-1">{item.detail}</div>
                                    {item.notes && <div className="text-slate-600 text-[9px] mt-2 italic">{item.notes}</div>}
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <div className="text-brand-GOLD font-black text-sm">{item.cost}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Vets */}
                    <div className="mb-6">
                        <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                            <MapPin size={16} className="text-brand-GOLD" />
                            Recommended Veterinarians in Panama City
                        </h3>
                        <div className="space-y-3">
                            {vets.map((vet, i) => (
                                <div key={i} className="card-light rounded-lg p-4 border border-brand-100">
                                    <h4 className="text-white font-bold text-xs mb-2">{vet.name}</h4>
                                    <div className="text-slate-500 text-[9px] space-y-1">
                                        <div><span className="text-brand-GOLD font-bold">Location:</span> {vet.location}</div>
                                        <div><span className="text-brand-GOLD font-bold">Services:</span> {vet.services}</div>
                                        <div><span className="text-brand-GOLD font-bold">Language:</span> {vet.language}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Restrictions */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <AlertCircle className="inline text-brand-GOLD mr-2" size={28} />
                        Important Restrictions & Considerations
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Not everything is ideal for pets in Panama. Here are the restrictions:
                    </p>
                    <div className="space-y-4">
                        {restrictions.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <h3 className="text-white font-bold text-sm mb-3">{item.restriction}</h3>
                                <div className="space-y-2">
                                    <div>
                                        <span className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Effect: </span>
                                        <span className="text-slate-500 text-xs">{item.effect}</span>
                                    </div>
                                    {item.breeds && (
                                        <div>
                                            <span className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Examples: </span>
                                            <span className="text-slate-500 text-xs">{item.breeds}</span>
                                        </div>
                                    )}
                                    {item.impact && (
                                        <div>
                                            <span className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Impact: </span>
                                            <span className="text-slate-500 text-xs">{item.impact}</span>
                                        </div>
                                    )}
                                    <div>
                                        <span className="text-brand-GOLD text-[9px] font-black uppercase tracking-widest">Note: </span>
                                        <span className="text-slate-500 text-xs">{item.note}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Cost Breakdown */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Total Cost Estimate: Moving Your Pet to Panama
                    </h2>
                    <div className="bg-brand-50 rounded-2xl p-8 border border-brand-GOLD/20 mb-6">
                        <div className="space-y-3">
                            {[
                                { item: 'Vet visits + vaccines (USA)', cost: '$50–100' },
                                { item: 'USDA health certificate signing', cost: '$30–100' },
                                { item: 'USDA APHIS endorsement (apostille)', cost: '$38' },
                                { item: 'Microchip', cost: '$15–30' },
                                { item: 'Parasite & tapeworm treatments', cost: '$30–75' },
                                { item: 'Airline fee (in-cabin or cargo)', cost: '$125–800' },
                                { item: 'First vet visit in Panama', cost: '$30–60' },
                                { item: 'Food, supplies, initial setup', cost: '$50–100' },
                            ].map((line, i) => (
                                <div key={i} className="flex justify-between">
                                    <span className="text-slate-500 text-sm">{line.item}</span>
                                    <span className="text-white font-bold text-sm">{line.cost}</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-brand-GOLD/30 mt-4 pt-4">
                            <div className="flex justify-between">
                                <span className="text-white font-bold">Total Estimate</span>
                                <span className="text-brand-GOLD font-black text-lg">$400–1,300</span>
                            </div>
                            <div className="text-slate-500 text-xs mt-2">Most pets: $400–600. Large dogs in cargo: $800–1,300.</div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <h3 className="text-white font-bold text-sm mb-3">{faq.q}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Bring Your Pet Family to Panama
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Relocating with pets is one of many logistics when moving internationally. Our advisors guide you through every step — housing, visas, pets, healthcare, and all the practical details to make your move smooth. Let us help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/${lang}/contacto`}
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Plan Your Pet Move <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/blog/panama-sim-card-guide`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            First Week Essentials
                        </Link>
                    </div>
                </section>

            </div>
        </article>
    );
}
