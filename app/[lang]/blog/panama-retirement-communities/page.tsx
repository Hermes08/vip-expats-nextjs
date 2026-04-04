import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, DollarSign, TrendingUp, Home, Users, Award } from 'lucide-react';
import { CostBarChart, BoqueteScene } from '@/components/three/ThreeComponents';


const communityCostData = [
    { label: 'Valle Escondido (Boquete)', value: 1800, color: '#00C5CB' },
    { label: 'Coronado Beach', value: 2000, color: '#00b0b6' },
    { label: 'Gorgona', value: 1700, color: '#D4A843' },
    { label: 'Santa Maria (City)', value: 2500, color: '#b8902e' },
    { label: 'The Villages FL (USA)', value: 4200, color: '#e05555' },
    { label: 'Sun City AZ (USA)', value: 3800, color: '#e07744' },
];

export const metadata: Metadata = {
    title: 'Retirement Communities Panama 2026: Best Places, Costs, Guide',
    description: 'Retirement communities in Panama. Best developments, amenities, costs, retirement lifestyle.',
    keywords: 'retirement communities Panama, retirement homes Panama, retirement living Panama, pensionado visa',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/panama-retirement-communities',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/panama-retirement-communities',
            'es': 'https://panamarealestatesale.com/es/blog/panama-retirement-communities',
            'pt': 'https://panamarealestatesale.com/pt/blog/panama-retirement-communities',
            'de': 'https://panamarealestatesale.com/de/blog/panama-retirement-communities',
        },
    },
    openGraph: {
        title: 'Retirement Communities Panama 2026: Best Places, Costs, Guide',
        description: 'Retirement communities in Panama. Best developments, amenities, costs, retirement lifestyle.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/panama-retirement-communities',
        images: [{ url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80', width: 1200, height: 630, alt: 'Retirement community' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Retirement Communities Panama 2026: Best Places, Costs, Guide',
        description: 'Retirement communities in Panama. Best developments, amenities, costs, retirement lifestyle.',
        images: ['https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80'],
    },
};

const retirementCommunities = [
    {
        location: 'Boquete',
        communities: ['Valle Escondido', 'Boquete Springs', 'Coffee Estate Inn Area'],
        vibe: 'Mountain, cool climate, community-focused',
        bestFor: 'Retirees seeking cooler weather, coffee culture, and tight expat community',
        avgProp: '$200K–$400K',
        costOfLiving: '$1,500–$2,000',
        expats: '14,000+',
        highlights: [
            'Spring climate (65–75°F) year-round',
            'Largest mountain expat community in Central America',
            'Affordable housing and low living costs',
            'Strong social groups and clubs',
            'Excellent for hiking and outdoor activities',
        ],
    },
    {
        location: 'Coronado',
        communities: ['Coronado Golf Club', 'Hacienda del Mar', 'Playa Coronado'],
        vibe: 'Beach, resort-style, premium lifestyle',
        bestFor: 'Retirees wanting beach access, golf, and full service expat infrastructure',
        avgProp: '$250K–$600K',
        costOfLiving: '$2,000–$3,000',
        expats: '5,000+',
        highlights: [
            'World-class golf course and beach club',
            'Gated communities with security',
            'International hospital on-site',
            'Upscale restaurants and shopping',
            '90 minutes from Panama City',
        ],
    },
    {
        location: 'Panama City',
        communities: ['Punta Pacifica', 'Costa del Este', 'Albrook'],
        vibe: 'Urban, cosmopolitan, full amenities',
        bestFor: 'Urban retirees wanting every convenience, healthcare, and cultural activities',
        avgProp: '$350K–$1M',
        costOfLiving: '$2,500–$4,000',
        expats: '50,000+',
        highlights: [
            'Multiple hospitals and specialists',
            'Shopping, dining, nightlife',
            'International schools and expat services',
            'No need to drive for basics',
            'Largest expat concentration in Panama',
        ],
    },
    {
        location: 'El Valle de Antón',
        communities: ['El Valle Town', 'Residential Communities'],
        vibe: 'Small-town, cool climate, nature-focused',
        bestFor: 'Adventurous retirees wanting smaller-town living and lower costs',
        avgProp: '$120K–$300K',
        costOfLiving: '$1,200–$1,600',
        expats: '2,000–3,000',
        highlights: [
            'Beautiful volcanic crater setting',
            'Cool climate (5–10°F cooler than coast)',
            'Ultra-low cost of living',
            'Strong nature and outdoor culture',
            'Less developed but authentic',
        ],
    },
    {
        location: 'Santa Fe de Veraguas',
        communities: ['Santa Fe Town'],
        vibe: 'Off-the-beaten-path, rural, adventurous',
        bestFor: 'Bold retirees seeking ultra-affordable living and authentic rural Panama',
        avgProp: '$50K–$150K',
        costOfLiving: '$800–$1,200',
        expats: '100–300',
        highlights: [
            'Cloud forest setting (1,200m elevation)',
            'Incredibly low cost of living',
            'Authentic Panama experience',
            'Minimal expat infrastructure',
            'For the truly independent',
        ],
    },
];

const pensionadoBenefits = [
    { benefit: '25% discount on all utilities', desc: 'Electricity, water, internet, phone' },
    { benefit: '50% discount on cinema tickets', desc: 'Panama\'s movie theaters' },
    { benefit: '25% discount on hospital services', desc: 'Private and public hospitals' },
    { benefit: '50% discount on domestic flights', desc: 'Flying between Panama cities' },
    { benefit: '25% discount on restaurant meals', desc: 'Participating restaurants (identification required)' },
    { benefit: 'Property tax exemption (first home)', desc: 'First property is exempt from property tax' },
    { benefit: 'Exemption on importing household goods', desc: 'One-time import of household items duty-free' },
];

const costComparison = [
    { item: 'Property: 2BR home/condo', boquete: '$200K–$400K', coronado: '$350K–$800K', elValle: '$120K–$250K', panamaCity: '$300K–$1M' },
    { item: 'Monthly rent (2BR furnished)', boquete: '$1,000–$1,500', coronado: '$1,200–$2,200', elValle: '$800–$1,200', panamaCity: '$1,500–$3,000' },
    { item: 'Monthly living (couple)', boquete: '$1,500–$2,000', coronado: '$2,000–$3,000', elValle: '$1,200–$1,600', panamaCity: '$2,500–$4,000' },
    { item: 'Nearby hospital', boquete: 'Hospital Boquete (local)', coronado: 'Hospital Chame (on-site)', elValle: 'Clinic (Panama City 3hr)', panamaCity: 'Multiple major hospitals' },
    { item: 'Expat population', boquete: '14,000+', coronado: '5,000+', elValle: '2,000–3,000', panamaCity: '50,000+' },
];

const faqItems = [
    {
        q: 'What is the Pensionado visa and can I get one?',
        a: 'The Pensionado visa requires proof of $1,000+/month income (pension, Social Security, investment income). Easiest for US retirees. Once approved, you get the discounts listed above. Process takes 30–60 days. Once established in Panama, the visa is essentially permanent and renewable annually.',
    },
    {
        q: 'What is the best location for a first-time retiree to Panama?',
        a: 'Coronado is safest for first-timers — established infrastructure, English-speaking services, proven community. Boquete is best if you want community + lower cost. Panama City if you want urban amenities. El Valle if you\'re adventurous and budget-conscious. Santa Fe only if you\'re truly independent.',
    },
    {
        q: 'Do I need to buy property to retire in Panama?',
        a: 'No. You can rent long-term. Many retirees rent for 1–2 years before buying, so they understand which community fits best. Rental market is strong and affordable. Only buy once you\'re 100% sure of your location.',
    },
    {
        q: 'What about healthcare in retirement communities?',
        a: 'Coronado has a hospital on-site. Boquete has a good local hospital. Panama City has world-class hospitals (Johns Hopkins affiliate). El Valle and Santa Fe require travel to Panama City for serious conditions. All communities have quality doctors and pharmaceuticals (much cheaper than USA).',
    },
    {
        q: 'Can I get a mortgage in Panama as a foreigner?',
        a: 'Difficult. Most retirees pay cash. Panamanian mortgages for non-residents exist but are rare and expensive (7%+ rates). Some developers offer seller financing. Budget for cash purchase or expect 7–10% interest on mortgages.',
    },
];

export default async function PanamaRetirementCommunitiesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80"
                        alt="Panama Retirement Communities"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        RETIREMENT GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Panama Retirement<br />Communities Guide
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        From mountain towns to beach communities — discover the best places in Panama for an affordable, secure, and vibrant retirement.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Panama has become the #1 retirement destination in Latin America. Why? Pensionado visa ($1,000/month), world-class healthcare at half US prices, USD currency, and thriving English-speaking expat communities in multiple climates and lifestyle options.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        Unlike most Latin American countries, Panama offers retirees genuine infrastructure, security, and community. You're not roughing it or pioneering. Whether you want a mountain town (Boquete), beach community (Coronado), small town (El Valle), or urban living (Panama City), Panama has a developed expat community ready to welcome you. This guide covers the top retirement communities, cost comparisons, and how to choose the right fit for your lifestyle.
                    </p>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        {[
                            { stat: '$1,000', label: 'Pensionado visa minimum income' },
                            { stat: '50%+', label: 'Healthcare cost savings vs USA' },
                            { stat: 'USD', label: 'Official currency (no conversion)' },
                            { stat: '100K+', label: 'Expats living in Panama' },
                        ].map((s, i) => (
                            <div key={i} className="bg-brand-50 rounded-2xl p-5 text-center border border-brand-100">
                                <div className="text-2xl font-black text-brand-GOLD mb-1">{s.stat}</div>
                                <div className="text-slate-500 text-xs leading-relaxed">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Panama */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Award className="inline text-brand-GOLD mr-2" size={28} />
                        Why Panama is Best for Retirement in 2026
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            {
                                title: 'Pensionado Visa Program',
                                desc: 'Only $1,000/month income required. Easiest retiree visa in Latin America. Includes automatic discounts on utilities, healthcare, restaurants, flights. Approved in 30–60 days.',
                            },
                            {
                                title: 'Affordable, World-Class Healthcare',
                                desc: 'Johns Hopkins affiliate in Panama City. Private doctors: $30–$50 visit. Medications 60–80% cheaper than US. Dental: $50 per visit. No insurance issues — pay cash at low prices.',
                            },
                            {
                                title: 'USD Currency = No Currency Risk',
                                desc: 'Panama uses the US dollar officially. No currency fluctuations. Familiar financial system. No conversion fees. Retirement savings have stable purchasing power.',
                            },
                            {
                                title: 'Diversity of Climates & Lifestyles',
                                desc: 'Choose beach, mountains, rainforest, or city. 65–88°F temperatures depending on location. Multiple lifestyle options within a small country.',
                            },
                            {
                                title: 'Established Expat Infrastructure',
                                desc: '100,000+ expats already living in Panama. English-speaking doctors, lawyers, real estate agents, property managers. Expat schools, clubs, churches, services.',
                            },
                            {
                                title: 'Low Cost of Living',
                                desc: 'Couples can live well on $1,500–$2,500/month in Boquete/El Valle. $2,500–$3,500 in Coronado. $3,000–$4,500 in Panama City. Rent, food, utilities all affordable.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <div className="text-brand-950 font-bold mb-2">{item.title}</div>
                                <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3D Boquete Scene */}
                <BoqueteScene />

                {/* Community Cost Comparison Chart */}
                <CostBarChart
                    data={communityCostData}
                    title="Monthly Budget by Community: Panama vs US Retirement"
                    subtitle="Comfortable couple lifestyle · USD/month"
                    height="270px"
                />

                {/* Top Communities */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <MapPin className="inline text-brand-GOLD mr-2" size={28} />
                        Panama's Top Retirement Communities
                    </h2>
                    <div className="space-y-8">
                        {retirementCommunities.map((com, i) => (
                            <div key={i} className="card-light rounded-2xl p-8 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-6 pb-6 border-b border-brand-100">
                                    <div>
                                        <h3 className="text-brand-950 font-heading font-bold text-2xl mb-2">{com.location}</h3>
                                        <p className="text-brand-GOLD text-sm font-semibold italic">{com.vibe}</p>
                                    </div>
                                    <div className="text-right space-y-1">
                                        <div>
                                            <div className="text-brand-950 font-black text-sm">{com.avgProp}</div>
                                            <div className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Avg Property</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-3 gap-4 mb-6 pb-6 border-b border-brand-100">
                                    <div>
                                        <div className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Monthly Cost (Couple)</div>
                                        <div className="text-brand-950 font-black">{com.costOfLiving}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Expat Population</div>
                                        <div className="text-brand-950 font-black">{com.expats}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Best For</div>
                                        <div className="text-brand-950 text-xs font-semibold">{com.bestFor}</div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-slate-500 text-xs mb-3 font-bold uppercase tracking-widest">Key Communities:</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {com.communities.map((c, j) => (
                                            <span key={j} className="bg-brand-GOLD/10 text-brand-GOLD px-3 py-1 rounded-full text-xs font-semibold border border-brand-GOLD/30">
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-slate-500 text-xs mb-3 font-bold uppercase tracking-widest">Highlights:</p>
                                    <ul className="grid sm:grid-cols-2 gap-2">
                                        {com.highlights.map((highlight, j) => (
                                            <li key={j} className="flex items-start gap-2">
                                                <CheckCircle size={12} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                                <span className="text-slate-500 text-xs">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pensionado Benefits */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Users className="inline text-brand-GOLD mr-2" size={28} />
                        Pensionado Visa Benefits (Universal Across All Communities)
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed mb-6">
                        Once you obtain your Pensionado visa ($1,000+/month minimum), you receive these benefits everywhere in Panama:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {pensionadoBenefits.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100 flex items-start gap-3">
                                <CheckCircle size={16} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                <div>
                                    <div className="text-brand-950 font-bold text-sm">{item.benefit}</div>
                                    <div className="text-slate-500 text-xs mt-1">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 card-light rounded-2xl p-6 border border-brand-100">
                        <div className="text-brand-950 font-bold mb-3">Annual Savings Example:</div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Utilities: $25/month × 12 = $300/year. Hospital visits: ~$500/year savings. Restaurants (dining out 3x/week): ~$800/year. Flights (visiting family): ~$200/year. Cinema: ~$100/year. Total: ~$2,000/year in tangible discounts, plus property tax exemption on first home.
                        </p>
                    </div>
                </section>

                {/* Cost Comparison */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Cost & Lifestyle Comparison Chart
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4"></th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Boquete</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Coronado</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">El Valle</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Panama City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {costComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-medium">{row.item}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3 font-bold">{row.boquete}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.coronado}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.elValle}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.panamaCity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* What Makes Great Retirement Community */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Home className="inline text-brand-GOLD mr-2" size={28} />
                        What Makes a Great Panama Retirement Community?
                    </h2>
                    <div className="space-y-4">
                        {[
                            { criterion: 'English-Speaking Residents', why: 'Reduces isolation and language barrier. You can have conversations, make friends, join clubs. Communities with 1,000+ expats have full English services.' },
                            { criterion: 'Healthcare Proximity', why: 'Hospital within 30–60 min. As you age, medical access becomes critical. Coronado has hospital on-site. Panama City has multiple major hospitals. Boquete has good local clinic.' },
                            { criterion: 'Security & Infrastructure', why: 'Gated communities, police presence, reliable power/water. You want to feel safe walking at dusk. Coronado and Boquete excel here. El Valle is safe but smaller scale.' },
                            { criterion: 'Social Activities & Clubs', why: 'Book clubs, hiking groups, church, volunteer opportunities. Combat isolation. Boquete has most active social scene due to large expat population.' },
                            { criterion: 'Affordable Living', why: 'Your $1,000–$2,500/month income stretches further. Lower cost = more enjoyment. Boquete and El Valle are most affordable.' },
                            { criterion: 'Accessibility (flights, city)', why: 'International airport within 1–3 hours. Day trips possible. Family visits practical. All top communities score well here.' },
                        ].map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <div className="text-brand-950 font-bold mb-2 text-sm">{item.criterion}</div>
                                <div className="text-slate-500 text-xs leading-relaxed">{item.why}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Choose Right Community */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        How to Choose the Right Community for You
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: 'Do you prefer beach or mountains?',
                                answers: [
                                    { a: 'Beach 🏖️', c: 'Coronado or Bocas del Toro' },
                                    { a: 'Mountains 🏔️', c: 'Boquete or El Valle' },
                                    { a: 'Urban/City 🏙️', c: 'Panama City' },
                                ],
                            },
                            {
                                q: 'What is your budget?',
                                answers: [
                                    { a: '$1,000–$1,500/month', c: 'El Valle or Santa Fe (live very affordably)' },
                                    { a: '$1,500–$2,500/month', c: 'Boquete (ideal balance of cost & community)' },
                                    { a: '$2,500–$4,000/month', c: 'Coronado (beach lifestyle, upscale amenities)' },
                                    { a: '$4,000+/month', c: 'Panama City (full urban amenities, unlimited options)' },
                                ],
                            },
                            {
                                q: 'Do you want a large expat community or smaller?',
                                answers: [
                                    { a: 'Large (5,000+ expats)', c: 'Coronado or Panama City' },
                                    { a: 'Very large (10,000+)', c: 'Boquete' },
                                    { a: 'Smaller but growing (1,000–3,000)', c: 'El Valle' },
                                    { a: 'Tiny (adventure seekers)', c: 'Santa Fe' },
                                ],
                            },
                            {
                                q: 'What temperature do you prefer?',
                                answers: [
                                    { a: 'Cool: 65–70°F', c: 'Boquete (perfect spring climate)' },
                                    { a: 'Cool: 70–75°F', c: 'El Valle' },
                                    { a: 'Warm: 78–85°F (trade-off: occasional rain)', c: 'Coronado' },
                                    { a: 'Tropical warm: 80–88°F', c: 'Panama City or Bocas' },
                                ],
                            },
                        ].map((quiz, i) => (
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <div className="text-brand-950 font-bold text-lg mb-4">{quiz.q}</div>
                                <div className="space-y-2">
                                    {quiz.answers.map((ans, j) => (
                                        <div key={j} className="flex items-start gap-3 pb-2 border-b border-brand-100 last:border-b-0">
                                            <span className="text-brand-GOLD font-bold">→</span>
                                            <div>
                                                <div className="text-slate-500 text-sm">{ans.a}</div>
                                                <div className="text-slate-600 text-xs italic">{ans.c}</div>
                                            </div>
                                        </div>
                                    ))}
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
                            <div key={i} className="card-light rounded-xl p-6 border border-brand-100">
                                <details className="group cursor-pointer">
                                    <summary className="flex items-start justify-between font-bold text-brand-950 hover:text-brand-GOLD transition-colors">
                                        <span className="text-sm">{item.q}</span>
                                        <span className="text-brand-GOLD group-open:rotate-180 transition-transform">+</span>
                                    </summary>
                                    <p className="text-slate-500 text-xs leading-relaxed mt-4">{item.a}</p>
                                </details>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Step by Step */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-2xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Plan Your Panama Retirement in 4 Steps
                    </h2>
                    <div className="space-y-3">
                        {[
                            { n: '1', t: 'Explore multiple communities', b: 'Spend 2–4 weeks visiting. Stay in rentals, explore neighborhoods, talk to expats, test internet, experience the vibe. Don\'t buy immediately.' },
                            { n: '2', t: 'Test rental living', b: 'After choosing a location, rent for 6–12 months before buying. Confirm it\'s the right fit. You might choose differently once living there.' },
                            { n: '3', t: 'Get Pensionado visa approval', b: 'Gather income documentation, apply for visa (takes 30–60 days, costs ~$500). Visa must be in place before you truly settle.' },
                            { n: '4', t: 'Buy property (once you\'re sure)', b: 'After 6+ months renting, if you love the area, buy a property. Hire attorney, do due diligence, move at your pace. No rush.' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-start gap-4 card-light rounded-xl p-5 border border-brand-100">
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

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Ready to Plan Your Panama Retirement?
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Our team lives in multiple Panama retirement communities. We'll help you choose the right location, navigate the Pensionado visa, and find properties. Schedule a free consultation with a Panama retirement specialist.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Book Retirement Consultation <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/propiedades`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            View Retirement Properties
                        </Link>
                    </div>
                </section>

                {/* Internal links */}
                <section className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Boquete Real Estate Guide', href: '/en/blog/boquete-panama-real-estate' },
                        { label: 'Coronado Real Estate Guide', href: '/en/blog/coronado-real-estate-guide' },
                        { label: 'Panama Pensionado Visa Guide', href: '/en/blog/panama-pensionado-visa' },
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
