import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, DollarSign, Heart, Globe, AlertCircle, MapPin, BookOpen } from 'lucide-react';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';


export const metadata: Metadata = {
    title: 'Panama for Families 2026: Schools, Expat Kids, Safety, Lifestyle',
    description: 'Families moving to Panama. Schools, safety, kids activities, healthcare, lifestyle for expat families.',
    keywords: 'families in Panama, expat families Panama, schools in Panama, kids in Panama, family living Panama',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/panama-for-families-with-children',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/panama-for-families-with-children',
            'es': 'https://panamarealestatesale.com/es/blog/panama-for-families-with-children',
            'pt': 'https://panamarealestatesale.com/pt/blog/panama-for-families-with-children',
            'de': 'https://panamarealestatesale.com/de/blog/panama-for-families-with-children',
        },
    },
    openGraph: {
        title: 'Panama for Families 2026: Schools, Expat Kids, Safety, Lifestyle',
        description: 'Families moving to Panama. Schools, safety, kids activities, healthcare, lifestyle for expat families.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/panama-for-families-with-children',
        images: [{ url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80', width: 1200, height: 630, alt: 'Family in Panama' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Panama for Families 2026: Schools, Expat Kids, Safety, Lifestyle',
        description: 'Families moving to Panama. Schools, safety, kids activities, healthcare, lifestyle for expat families.',
        images: ['https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80'],
    },
};

const internationalSchools = [
    {
        name: 'International School of Panama (ISP)',
        curriculum: 'American',
        tuition: '$12,000 – $18,000/year',
        location: 'Clayton area',
        highlights: 'Largest American school in Panama, strong community, excellent sports facilities, graduates attend Ivy League schools.',
    },
    {
        name: "King's College Panama",
        curriculum: 'British',
        tuition: '$14,000 – $20,000/year',
        location: 'Costa del Este',
        highlights: 'Highly selective, British A-levels, strong academics, smaller class sizes, more expensive but excellent reputation.',
    },
    {
        name: 'Balboa Academy',
        curriculum: 'American & IB',
        tuition: '$10,000 – $16,000/year',
        location: 'Panama Viejo',
        highlights: 'IB program, American curriculum option, good balance of academics and extracurriculars, growing reputation.',
    },
    {
        name: 'Oxford School Panama',
        curriculum: 'American & Spanish',
        tuition: '$6,000 – $10,000/year',
        location: 'Multiple campuses',
        highlights: 'More affordable option, bilingual education, strong Spanish component, excellent value for money.',
    },
    {
        name: 'Academia Interamericana',
        curriculum: 'Bilingual (Spanish/English)',
        tuition: '$4,000 – $7,000/year',
        location: 'San Francisco',
        highlights: 'Budget-friendly, bilingual immersion, local curriculum blend, great for Spanish integration.',
    },
];

const familyNeighborhoods = [
    {
        name: 'Clayton',
        vibe: 'American suburban feel in Panama',
        why: 'Former US military base, huge green spaces, safe, spacious homes with yards (rare in Panama City), home of ISP school, many American families.',
        rent: '$1,200 – $2,000/month (3BR house)',
        best: 'Families wanting suburban USA feel, children',
        safety: 'Extremely safe',
    },
    {
        name: 'Costa del Este',
        vibe: 'Modern upscale gated community',
        why: 'Planned master development like Miami Brickell, excellent security, modern infrastructure, malls and restaurants walkable, many international schools nearby.',
        rent: '$1,000 – $1,600 (1BR condo), $1,400 – $2,200 (2BR)',
        best: 'Families wanting modern amenities and security',
        safety: 'Safest neighborhood in Panama City',
    },
    {
        name: 'Albrook',
        vibe: 'Practical family-friendly residential',
        why: 'Close to Albrook Mall, excellent transit hub to airport, green spaces, near Amador Causeway for cycling, good schools nearby.',
        rent: '$700 – $1,000 (1BR apt), $1,000 – $1,500 (2BR)',
        best: 'Practical families, those who travel frequently',
        safety: 'Safe, normal city precautions',
    },
    {
        name: 'San Carlos / Coronado (Beach)',
        vibe: 'Quieter beach lifestyle option',
        why: '90 minutes west of Panama City, gated beach community, golf courses, family-oriented, more relaxed pace. Spanish more common than English.',
        rent: '$1,500 – $2,500 (house with amenities)',
        best: 'Families wanting beach living, don\'t mind commute to Panama City',
        safety: 'Safe, small-town feel',
    },
    {
        name: 'Boquete (Mountain Town)',
        vibe: 'Small town mountain living',
        why: '3.5 hours from Panama City, cool climate (70–75°F), small expat community, great outdoor activities, beautiful scenery. Limited international schools.',
        rent: '$700 – $1,200 (house)',
        best: 'Families wanting to escape urban life, outdoor-oriented',
        safety: 'Very safe, community-oriented',
    },
];

const familyActivities = [
    { category: 'Museums & Culture', items: ['Biomuseo (biodiversity museum)', 'Parque Natural Metropolitano (400+ bird species)', 'Casco Viejo walking tours', 'Panama Canal visitor center tours'] },
    { category: 'Outdoor Activities', items: ['Amador Causeway (cycling/walking)', 'Parque Metropolitano (hiking)', 'Panama Bay kayaking', 'Zip-lining in Alajuela rainforest (day trip)'] },
    { category: 'Beaches', items: ['Santa Clara (closest, 90min)', 'El Palmar (secluded, 100min)', 'Farallon (resort areas, 90min)', 'Caribbean beaches (Bocas del Toro, 1.5hr flight)'] },
    { category: 'Sports & Clubs', items: ['Little League baseball (huge in Panama)', 'Tennis clubs (Paraiso, Club de Golf)', 'Swimming clubs', 'Football leagues'] },
    { category: 'Shopping & Food', items: ['Albrook Mall (massive)', 'Multiplaza (Costa del Este)', 'Panama Viejo (local markets)', 'Casco Viejo (weekend destination)'] },
];

const familyBudgets = [
    {
        scenario: 'Budget Family (No International School)',
        monthly: '$2,500 – $3,500',
        details: 'Public school or affordable private, 2BR apartment, local dining, public transport, minimal activities.',
        best: 'Those wanting to stretch budget or integrate locally',
    },
    {
        scenario: 'Comfortable Family (Private School)',
        monthly: '$4,000 – $6,000',
        details: 'Mid-range private school ($4–7k/year), 2–3BR apartment in good neighborhood, mix of local and Western dining, occasional family activities.',
        best: 'Middle-income families, good balance',
    },
    {
        scenario: 'Comfortable Family (International School)',
        monthly: '$5,000 – $7,500',
        details: 'International school ($12–18k/year), 2–3BR in upscale neighborhood, car, regular activities, housekeeper.',
        best: 'Families prioritizing education and convenience',
    },
    {
        scenario: 'Comfortable Family of 4 (International + Extras)',
        monthly: '$6,500 – $9,000',
        details: 'International school, 3BR house in Clayton/Costa del Este, car, regular travel, activities, private healthcare.',
        best: 'Larger families, higher income',
    },
];

const faqItems = [
    {
        q: 'Is Panama safe for children?',
        a: 'Yes. Panama City is significantly safer than most Latin American capitals and comparable to suburban Florida. Clayton and Costa del Este are extremely safe residential areas. Crime is mostly petty theft in tourist areas. Families should use normal precautions (avoid certain neighborhoods at night, don\'t display valuables) but don\'t live in fear. Thousands of expat children grow up safely in Panama.',
    },
    {
        q: 'Do I need a Panama school curriculum or is American/British okay?',
        a: 'International schools (American, British, IB) are fully accredited and their graduates attend universities worldwide. You do NOT need to follow Panama\'s national curriculum. Your child\'s passport and school records will follow them internationally.',
    },
    {
        q: 'Can I get into international schools without being a resident first?',
        a: 'Yes. Schools admit based on merit and space, not residency status. However, you should visit and tour schools before committing. Most schools fill up — enroll as early as possible.',
    },
    {
        q: 'What about healthcare for children in Panama?',
        a: 'Pediatric specialists cost $60–100/visit. Hospital Punta Pacifica has an excellent pediatric department. Children\'s vaccinations are available. Most expat families use private insurance ($200–400/month) which covers pediatric care. Pre-existing conditions are typically covered.',
    },
    {
        q: 'Can I bring my pet dog or cat to Panama?',
        a: 'Yes. You need: health certificate from your vet (issued within 10 days of travel), microchip, vaccination records (rabies is required). The process is straightforward but takes 2–3 weeks of paperwork.',
    },
    {
        q: 'What about internet and learning continuity if we move mid-year?',
        a: 'Panama has good internet (25–100 Mbps available in most expat areas). Kids can switch into new schools mid-year. However, the school year runs September–June (like USA), so summer is the best time to move.',
    },
];

const healthcarePoints = [
    'Pediatric specialists: $60–100 per visit',
    'Hospital Punta Pacifica: Johns Hopkins-affiliated, excellent pediatric department',
    'Vaccines: All standard childhood vaccines available',
    'Private insurance for children: $150–300/month',
    'No yellow fever vaccine required for entry',
    'Expat families typically use private healthcare (better English, Western standards)',
];

export default async function PanamaForFamiliesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&q=80"
                        alt="Family in Panama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        FAMILY GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Moving to Panama<br />with Children
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Schools, neighborhoods, safety, activities, and real family budgets. Why thousands of American families are raising their children in Panama.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Panama is a hidden gem for expat families. World-class international schools, safe gated neighborhoods, excellent healthcare, year-round outdoor activities, and a cost of living 40–60% lower than suburban USA make it an exceptional choice for raising children abroad.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        This guide covers everything families need to know: which international schools deliver, the best neighborhoods for kids, safety, activities, healthcare, and realistic monthly budgets. Plus practical advice on moving with children and integrating into Panama's welcoming expat community.
                    </p>
                </section>

                {/* Why Panama for Families */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Globe className="inline text-brand-GOLD mr-2" size={28} />
                        Why Families Choose Panama
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: 'World-Class Schools at Half the Cost', body: 'International schools ($6k–20k/year) compete with top US private schools but cost significantly less. Graduates attend Harvard, MIT, top universities globally.' },
                            { title: 'Safe Neighborhoods Built for Families', body: 'Clayton, Costa del Este, and Coronado are planned communities with gated security, green spaces, and excellent schools. Similar to suburban Florida.' },
                            { title: 'Year-Round Outdoor Activities', body: 'Beaches 90 minutes away, rainforest hikes, cycling trails, Little League baseball, tennis clubs. No winter — year-round outdoor life.' },
                            { title: '40–60% Lower Cost of Living', body: 'Family of 4 spends $4–7k/month in Panama vs $9–14k in suburban USA. Same quality of life, dramatically lower cost.' },
                            { title: 'Excellent Healthcare System', body: 'Hospital Punta Pacifica (Johns Hopkins-affiliated) has world-class pediatric care. Specialist visits $60–100. Private insurance $150–300/month.' },
                            { title: 'Growing English-Speaking Expat Community', body: 'Thousands of American, Canadian, and British families. Your children will have English-speaking peers, community support, and established infrastructure.' },
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

                {/* International Schools */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <BookOpen className="inline text-brand-GOLD mr-2" size={28} />
                        International Schools in Panama
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Panama has five major international schools offering American, British, and IB curricula. All are well-established with strong reputations and university placement records. Tuition ranges from $4k to $20k annually — significantly cheaper than equivalent schools in the US.
                    </p>
                    <div className="space-y-4">
                        {internationalSchools.map((school, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
                                    <div>
                                        <div className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-1">{school.curriculum} CURRICULUM</div>
                                        <h3 className="text-lg font-heading font-bold text-white">{school.name}</h3>
                                        <p className="text-slate-500 text-xs mt-1">{school.location}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-brand-GOLD font-black text-sm whitespace-nowrap">{school.tuition}</div>
                                        <div className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Per year</div>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">{school.highlights}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-brand-50 rounded-xl p-6 border border-brand-100 mt-6">
                        <div className="flex gap-3 items-start">
                            <AlertCircle size={18} className="text-brand-GOLD mt-1 flex-shrink-0" />
                            <div>
                                <p className="text-brand-950 font-bold text-sm mb-2">Public Schools Option</p>
                                <p className="text-slate-500 text-xs leading-relaxed">Panama's public schools are free and teach in Spanish. Quality varies significantly by neighborhood. Most expat families choose international schools, but some integrate into public schools to deepen Spanish immersion.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Family Neighborhoods */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <MapPin className="inline text-brand-GOLD mr-2" size={28} />
                        Best Neighborhoods for Families
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Different neighborhoods appeal to different family priorities. Here's where American families typically live and why:
                    </p>
                    <div className="space-y-5">
                        {familyNeighborhoods.map((n, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <div className="mb-3">
                                    <h3 className="text-xl font-heading font-bold text-white mb-1">{n.name}</h3>
                                    <p className="text-brand-GOLD text-xs font-black uppercase tracking-widest">{n.vibe}</p>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">{n.why}</p>
                                <div className="grid sm:grid-cols-3 gap-3 text-xs">
                                    <div className="bg-white rounded-lg p-3">
                                        <p className="text-slate-600 font-bold mb-1">Typical Rent</p>
                                        <p className="text-brand-GOLD font-black">{n.rent}</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-3">
                                        <p className="text-slate-600 font-bold mb-1">Safety</p>
                                        <p className="text-brand-GOLD font-black">{n.safety}</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-3">
                                        <p className="text-slate-600 font-bold mb-1">Best For</p>
                                        <p className="text-brand-GOLD font-black">{n.best}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3D Scene */}
                <section className="reveal-on-scroll">
                    <div className="h-96 rounded-2xl overflow-hidden border border-brand-100 shadow-lg">
                        <PanamaCityScene />
                    </div>
                    <p className="text-slate-500 text-xs text-center mt-4">Explore Panama City's family neighborhoods in 3D</p>
                </section>

                {/* Family Activities */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Family Activities & Lifestyle
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Panama offers year-round activities for families. There's no winter and no "off season" — outdoor life is possible 365 days a year.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {familyActivities.map((cat, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-brand-GOLD"></span>
                                    {cat.category}
                                </h3>
                                <ul className="space-y-2">
                                    {cat.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2">
                                            <CheckCircle size={12} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                            <span className="text-slate-500 text-xs">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Family Budgets */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Family Budget: Panama vs USA
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {familyBudgets.map((b, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] mb-2">{b.scenario}</div>
                                <div className="text-brand-950 font-black text-2xl mb-3">{b.monthly}<span className="text-slate-500 font-normal text-xs">/mo</span></div>
                                <p className="text-slate-500 text-xs leading-relaxed">{b.details}</p>
                                <p className="text-white text-xs font-bold mt-4 pt-4 border-t border-brand-100">{b.best}</p>
                            </div>
                        ))}
                    </div>
                    <div className="h-96 rounded-2xl overflow-hidden border border-brand-100 shadow-lg">
                        <CostBarChart
                        data={[
                          { label: 'Panama Budget', value: 2800, color: '#22c55e' },
                          { label: 'Panama Comfort', value: 4500, color: '#00C5CB' },
                          { label: 'US Suburban', value: 8500, color: '#ef4444' },
                          { label: 'US Urban', value: 11000, color: '#ef4444' },
                        ]}
                        title="Family Monthly Budget: Panama vs USA ($)"
                      />
                    </div>
                    <p className="text-slate-500 text-xs text-center mt-4">Family spending comparison: Panama vs USA suburban living</p>
                </section>

                {/* Safety Section */}
                <section className="reveal-on-scroll card-light rounded-2xl p-8 border border-brand-100">
                    <h2 className="text-white text-2xl font-heading font-bold mb-5 uppercase tracking-tighter italic">
                        <AlertCircle className="inline text-brand-GOLD mr-2" size={24} />
                        Safety for Children
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-6">
                        Panama City is significantly safer than most Latin American capitals and comparable to suburban Florida. Clayton and Costa del Este rank among the safest neighborhoods in Central America.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {[
                            'Panama City safer than most Latin American capitals',
                            'Clayton and Costa del Este: extremely safe, gated, 24/7 security',
                            'Crime mostly petty theft in tourist areas, not residential zones',
                            'Thousands of expat children grow up safely',
                            'Use normal precautions (like suburban Florida)',
                            'Police presence strong in family neighborhoods',
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4">
                                <CheckCircle size={14} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                                <span className="text-slate-500 text-xs leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Healthcare */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Heart className="inline text-brand-GOLD mr-2" size={28} />
                        Healthcare for Children
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Panama's healthcare system is excellent, especially for expat families. Pediatric specialists are accessible and affordable.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                        {healthcarePoints.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-4 border border-brand-100 flex items-start gap-3">
                                <CheckCircle size={14} className="text-brand-GOLD mt-0.5 flex-shrink-0" />
                                <span className="text-slate-500 text-xs leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed bg-brand-50 p-6 rounded-xl border border-brand-100">
                        Hospital Punta Pacifica in Panama City is a Johns Hopkins Medicine International affiliate with a dedicated pediatric department staffed by English-speaking doctors trained in the USA or Europe. Most expat families maintain private health insurance ($150–300/month for children) which covers pediatric care, preventive visits, and specialist consultations.
                    </p>
                </section>

                {/* Practical Tips */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Practical Steps for Moving with Children
                    </h2>
                    <div className="space-y-4">
                        {[
                            { step: '1', title: 'Apply to schools early', body: 'Contact international schools 6–12 months before your planned move. Schools fill up, especially the top-tier ones. Request virtual tours and application materials.' },
                            { step: '2', title: 'Visit neighborhoods with your family', body: 'Do a 2–4 week reconnaissance trip. Let your kids experience the neighborhood, see the schools, visit the parks. Make sure they\'re comfortable with the move.' },
                            { step: '3', title: 'Obtain necessary documents', body: 'You\'ll need: US passports for all family members, school records (transcripts, standardized tests), vaccination records, health records, and birth certificates. Get notarized copies.' },
                            { step: '4', title: 'Arrange temporary housing first', body: 'Rent an apartment or house for 3–6 months before committing to buy. Get a feel for the neighborhood and schools. The right home will present itself.' },
                            { step: '5', title: 'Get pet import approved', body: 'If bringing pets: health certificate (within 10 days of travel), microchip, rabies vaccination. Plan 2–3 weeks for paperwork.' },
                            { step: '6', title: 'Open a bank account', body: 'You\'ll need a local account for rent, utilities, school payments. Bring passport, proof of income, 2–3 reference letters from your US bank.' },
                            { step: '7', title: 'Connect with the expat community', body: 'Join Facebook groups (ISP Parents, Panama Expat Families, Clayton Expats). Attend meetups. The expat community is incredibly welcoming and helpful.' },
                        ].map((s, i) => (
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

                {/* FAQ */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqItems.map((item, i) => (
                            <details key={i} className="card-light rounded-xl border border-brand-100 p-6 group">
                                <summary className="text-white font-bold cursor-pointer flex items-center justify-between">
                                    {item.q}
                                    <span className="text-brand-GOLD group-open:rotate-180 transition-transform">
                                        <ArrowRight size={16} />
                                    </span>
                                </summary>
                                <p className="text-slate-500 text-sm leading-relaxed mt-4">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Start Your Family's Panama Adventure
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Our advisors have helped hundreds of families relocate to Panama. We'll connect you with schools, guide you to the right neighborhoods, and help you navigate the practical steps — at no obligation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/${lang}/contacto`}
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Schedule Family Consultation <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/blog/best-neighborhoods-panama-city-expats`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Neighborhood Guide
                        </Link>
                    </div>
                </section>

                {/* Related Links */}
                <section className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
                    {[
                        { label: 'International Schools Directory', href: `/${lang}/guides/panama-schools` },
                        { label: 'Costa del Este Family Guide', href: `/${lang}/blog/best-neighborhoods-panama-city-expats` },
                        { label: 'Cost of Living: Family Edition', href: `/${lang}/blog/living-in-panama-city` },
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
