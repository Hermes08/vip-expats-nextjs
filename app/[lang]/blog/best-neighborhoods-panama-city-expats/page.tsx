import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, DollarSign, MapPin, Wifi, AlertCircle, TrendingUp, Home } from 'lucide-react';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';


export const metadata: Metadata = {
    title: 'Best Neighborhoods Panama City 2026: Expats Living Guide',
    description: 'Best neighborhoods in Panama City for expats. Casco Viejo, Clayton, Coronado. Safety, prices, lifestyle.',
    keywords: 'Panama City neighborhoods, expat neighborhoods Panama, best areas Panama City, Casco Viejo, Clayton',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/best-neighborhoods-panama-city-expats',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/best-neighborhoods-panama-city-expats',
            'es': 'https://panamarealestatesale.com/es/blog/best-neighborhoods-panama-city-expats',
            'pt': 'https://panamarealestatesale.com/pt/blog/best-neighborhoods-panama-city-expats',
            'de': 'https://panamarealestatesale.com/de/blog/best-neighborhoods-panama-city-expats',
        },
    },
    openGraph: {
        title: 'Best Neighborhoods Panama City 2026: Expats Living Guide',
        description: 'Best neighborhoods in Panama City for expats. Casco Viejo, Clayton, Coronado. Safety, prices, lifestyle.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/best-neighborhoods-panama-city-expats',
        images: [{ url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', width: 1200, height: 630, alt: 'Panama City neighborhood' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best Neighborhoods Panama City 2026: Expats Living Guide',
        description: 'Best neighborhoods in Panama City for expats. Casco Viejo, Clayton, Coronado. Safety, prices, lifestyle.',
        images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80'],
    },
};

const neighborhoods = [
    {
        name: 'Casco Viejo',
        tagline: 'Historic, Hip, Walkable',
        vibe: 'UNESCO World Heritage district. Colorful colonial buildings, rooftop bars, live music, young expats, digital nomads.',
        safety: '⭐⭐⭐ Moderate (safe in day/early evening, some blocks sketchy at night)',
        walkability: '⭐⭐⭐⭐⭐ Excellent (everything within walking distance)',
        rent: '$900 – $1,500/mo (1BR)',
        best: 'Digital nomads, young expats, artists, short-term stays, Airbnb investors',
        pros: [
            'Walkable to restaurants, bars, museums',
            'Cultural hub — art galleries, live music venues',
            'High Airbnb yield (strong rental income potential)',
            'Vibrant nightlife and social scene',
            'UNESCO prestige',
        ],
        cons: [
            'Noisy (bars, music, street activity late night)',
            'Some unsafe blocks (avoid certain streets after dark)',
            'Tourist prices on dining and services',
            'Limited parking',
            'Can feel cramped/crowded',
        ],
        transport: 'Metro line nearby. Walk to most destinations. Taxis/Ubers cheap.',
        dining: 'Excellent — high-end restaurants, local cafes, street food.',
        nightlife: '⭐⭐⭐⭐⭐ Best in the city',
        community: 'Young, transient, very international',
    },
    {
        name: 'Punta Pacifica',
        tagline: 'Luxury, Modern, Ocean Views',
        vibe: 'High-rise towers, luxury condos, ocean-facing, upscale restaurants, JW Marriott, very modern.',
        safety: '⭐⭐⭐⭐⭐ Excellent (24/7 security)',
        walkability: '⭐⭐⭐⭐ Good (some walkability, car helpful)',
        rent: '$1,200 – $2,200/mo (1BR); $1,800 – $3,000+ (2BR)',
        best: 'Wealthy retirees, corporate executives, medical tourists, luxury-focused expats',
        pros: [
            'Ultra-modern infrastructure',
            'World-class hospitals nearby (Punta Pacifica Hospital)',
            'Ocean views and waterfront dining',
            'Extremely safe and secure',
            'International standard of living',
            'JW Marriott & luxury amenities',
        ],
        cons: [
            'Expensive (most upscale neighborhood)',
            'Car-dependent, traffic congestion',
            'Less authentic/local feel',
            'High-rise living (no backyards)',
            'International prices (dining, shopping)',
        ],
        transport: 'Car essential. Uber available. Some congestion to main areas.',
        dining: '⭐⭐⭐⭐⭐ Excellent (high-end restaurants, cuisine variety)',
        nightlife: '⭐⭐⭐⭐ Sophisticated bars, rooftop lounges',
        community: 'Wealthy, professional, family-oriented',
    },
    {
        name: 'Costa del Este',
        tagline: 'Modern Master Development, Safest Area',
        vibe: "Planned master community like Miami's Brickell. Modern architecture, upscale malls, safe streets, suburban feel.",
        safety: '⭐⭐⭐⭐⭐ Safest in Panama City',
        walkability: '⭐⭐⭐⭐ Good (malls, restaurants walkable)',
        rent: '$1,000 – $1,600/mo (1BR); $1,400 – $2,200/mo (2BR)',
        best: 'Families, corporate expats, those wanting US-suburban comfort, security-focused',
        pros: [
            'Safest neighborhood in Panama',
            'Modern infrastructure and planned design',
            'Excellent restaurants and shopping (Multiplaza, Altaplaza)',
            'Good schools nearby',
            'Suburban, family-friendly feel',
            'Excellent security (gated, 24/7 guards)',
        ],
        cons: [
            'Less authentic/charming (very planned)',
            'Car-dependent',
            'More expensive than some neighborhoods',
            'Less nightlife/culture than Casco',
            'Can feel boring to younger expats',
        ],
        transport: 'Car recommended. Some areas walkable. Uber/taxi cheap.',
        dining: '⭐⭐⭐⭐ Good (varied cuisines, international and local)',
        nightlife: '⭐⭐⭐ Quiet (few bars, more family-oriented)',
        community: 'Families, professionals, middle-to-upper income, diverse expat base',
    },
    {
        name: 'Clayton',
        tagline: 'American Suburban Feel, Green Spaces',
        vibe: 'Former US military base. Spacious homes, green areas, quiet, safe, community-oriented.',
        safety: '⭐⭐⭐⭐⭐ Extremely safe',
        walkability: '⭐⭐⭐ Moderate (car helpful, some walkable areas)',
        rent: '$1,200 – $2,000/mo (3BR house)',
        best: 'Families with children, retirees, those wanting space/nature',
        pros: [
            'Spacious homes with yards (rare in Panama)',
            'Green parks and nature',
            'Home of ISP (top American school)',
            'Very safe, established community',
            'American family atmosphere',
            'Cheaper per square foot than Costa del Este',
        ],
        cons: [
            'Car required',
            'Less walkable/urban',
            'Fewer restaurants and nightlife',
            'Further from Panama City center',
            'Less international cuisine options',
        ],
        transport: 'Car essential. 10–15 min to Panama City. Uber available.',
        dining: '⭐⭐⭐ Good (family-friendly, some upscale options)',
        nightlife: '⭐⭐ Quiet (few bars)',
        community: 'Families, Americans, retirees, community-focused',
    },
    {
        name: 'Albrook',
        tagline: 'Practical Hub, Green Spaces',
        vibe: 'Near Albrook Airport and massive Albrook Mall. Residential yet convenient. Good transit hub.',
        safety: '⭐⭐⭐⭐ Safe (normal city precautions)',
        walkability: '⭐⭐⭐ Moderate (practical, not picturesque)',
        rent: '$700 – $1,000/mo (1BR); $1,000 – $1,500/mo (2BR)',
        best: 'Frequent travelers, budget-conscious, practical-minded expats',
        pros: [
            'Super convenient to airport (5 min)',
            'Albrook Mall (shopping, restaurants, entertainment)',
            'Good transit hub',
            'Cheaper than Costa del Este/Punta Pacifica',
            'Near green spaces (parks, Amador Causeway)',
        ],
        cons: [
            'Traffic congestion (airport traffic)',
            'Less charming than Casco/Clayton',
            'Transient feel (people in/out constantly)',
            'Noisier from airport',
        ],
        transport: '⭐⭐⭐⭐ Excellent (airport, metro, Uber)',
        dining: '⭐⭐⭐ Good (Albrook Mall options)',
        nightlife: '⭐⭐⭐ Moderate (malls, some bars)',
        community: 'Transient, practical, international mix',
    },
    {
        name: 'Miraflores / San Francisco',
        tagline: 'Local Mix, Authentic Experience',
        vibe: 'Traditional Panama neighborhoods. Mix of locals and expats. Authentic feel. Real Panama City.',
        safety: '⭐⭐⭐ Moderate (less walkable at night)',
        walkability: '⭐⭐⭐ Moderate (car helpful)',
        rent: '$700 – $1,100/mo (1BR); $900 – $1,500/mo (2BR)',
        best: 'Budget-conscious, those wanting local integration, Spanish-focused expats',
        pros: [
            'Cheaper than upscale neighborhoods',
            'Local markets and authentic restaurants',
            'Genuine Panama City experience',
            'Good for Spanish immersion',
            'More diverse community',
        ],
        cons: [
            'Less English spoken',
            'More street activity (traffic, noise)',
            'Less secure feeling than Costa del Este',
            'Fewer international amenities',
            'Infrastructure older/less modern',
        ],
        transport: 'Car or Uber. Metro nearby. Less convenient than central areas.',
        dining: '⭐⭐⭐ Good (authentic local, cheaper)',
        nightlife: '⭐⭐⭐ Local bars, more authentic',
        community: 'Locals and budget expats, Spanish speakers',
    },
    {
        name: 'El Cangrejo',
        tagline: 'Budget-Friendly Old-School Expat Hub',
        vibe: 'Traditional expat neighborhood. Old-school character. Cheaper than newer areas.',
        safety: '⭐⭐⭐ Moderate (normal urban precautions)',
        walkability: '⭐⭐⭐⭐ Good (walkable to Via Argentina)',
        rent: '$600 – $950/mo (1BR); $800 – $1,300/mo (2BR)',
        best: 'Retirees on fixed income, long-term budget expats, laid-back lifestyle',
        pros: [
            'Cheapest central location in good area',
            'Close to Via Argentina (restaurants, shops)',
            'Established expat community',
            'Walkable downtown access',
            'Less transient than Casco',
        ],
        cons: [
            'Older buildings (less modern)',
            'Less glamorous than Costa del Este',
            'Smaller living spaces',
            'Less nightlife than Casco',
        ],
        transport: '⭐⭐⭐⭐ Good (metro, Uber, walkable)',
        dining: '⭐⭐⭐ Good (Via Argentina options)',
        nightlife: '⭐⭐⭐ Moderate (local bars, restaurants)',
        community: 'Long-term expats, retirees, diverse',
    },
    {
        name: 'Balboa / Amador',
        tagline: 'Quiet Causeway Living, Ocean Views',
        vibe: 'Causeway area with ocean views. Mix of old character and new development. Quieter, scenic.',
        safety: '⭐⭐⭐⭐ Safe',
        walkability: '⭐⭐⭐⭐ Good (cycling path, waterfront)',
        rent: '$1,100 – $1,800/mo (1BR); $1,500 – $2,300/mo (2BR)',
        best: 'Couples wanting quiet + scenic, cyclists, those seeking waterfront living',
        pros: [
            'Ocean views and waterfront living',
            'Peaceful, less bustling',
            'Excellent cycling/walking paths',
            'Quieter yet still accessible',
            'Mix of character and modernity',
        ],
        cons: [
            'Car-dependent',
            'Fewer restaurants/shops than Costa del Este',
            'Can feel isolated',
            'More expensive per bedroom',
        ],
        transport: 'Car recommended. Uber available.',
        dining: '⭐⭐⭐ Good (some upscale waterfront options)',
        nightlife: '⭐⭐ Quiet (peaceful)',
        community: 'Couples, peaceful lifestyle-focused, waterfront lovers',
    },
];

const comparisonTable = [
    {
        neighborhood: 'Casco Viejo',
        rent: '$900 – $1,500',
        safety: 'Moderate',
        walkability: 'Excellent',
        bestFor: 'Digital nomads, young expats',
        vibe: 'Hip & historic',
    },
    {
        neighborhood: 'Costa del Este',
        rent: '$1,000 – $2,200',
        safety: 'Safest',
        walkability: 'Good',
        bestFor: 'Families, professionals',
        vibe: 'Modern suburban',
    },
    {
        neighborhood: 'Clayton',
        rent: '$1,200 – $2,000',
        safety: 'Extremely safe',
        walkability: 'Moderate',
        bestFor: 'Families with kids',
        vibe: 'Green & spacious',
    },
    {
        neighborhood: 'Punta Pacifica',
        rent: '$1,200 – $3,000+',
        safety: 'Excellent',
        walkability: 'Good',
        bestFor: 'Wealthy retirees',
        vibe: 'Luxury & modern',
    },
    {
        neighborhood: 'Albrook',
        rent: '$700 – $1,500',
        safety: 'Safe',
        walkability: 'Moderate',
        bestFor: 'Frequent travelers',
        vibe: 'Practical hub',
    },
    {
        neighborhood: 'Miraflores',
        rent: '$700 – $1,100',
        safety: 'Moderate',
        walkability: 'Moderate',
        bestFor: 'Budget-conscious',
        vibe: 'Authentic local',
    },
    {
        neighborhood: 'El Cangrejo',
        rent: '$600 – $950',
        safety: 'Moderate',
        walkability: 'Good',
        bestFor: 'Retirees on budget',
        vibe: 'Old-school expat',
    },
    {
        neighborhood: 'Balboa/Amador',
        rent: '$1,100 – $2,300',
        safety: 'Safe',
        walkability: 'Good',
        bestFor: 'Quiet seekers',
        vibe: 'Waterfront peaceful',
    },
];

const faqItems = [
    {
        q: 'Which neighborhood is safest?',
        a: 'Costa del Este and Clayton are the safest neighborhoods. They have gated communities, 24/7 security, and very low crime. Punta Pacifica is also excellent for safety. Casco Viejo is safe in daytime/early evening but has some sketchy blocks at night. Avoid walking alone in Miraflores/San Francisco after dark. Use normal urban precautions as you would in suburban Florida.',
    },
    {
        q: 'Best neighborhood for digital nomads?',
        a: 'Casco Viejo is the clear winner — walkable, vibrant, cheap-ish, great internet, community of other nomads, tons of coworking spaces. Albrook is second choice (practical, close to airport). Both have the young, transient vibe nomads prefer.',
    },
    {
        q: 'Best neighborhood for families with kids?',
        a: 'Clayton (best for space and family feel) or Costa del Este (safest, best schools nearby). Clayton offers yards and open space; Costa del Este offers security and modern amenities. Both are car-dependent but family-friendly.',
    },
    {
        q: 'Can I negotiate rent?',
        a: 'Yes. Landlords often expect negotiation, especially for 12+ month leases. Offer 5–10% below asking, especially if paying upfront. Empty properties are common — landlords may accept lower rent to fill them. Use this leverage.',
    },
    {
        q: 'Is it better to rent or buy?',
        a: 'Rent for at least 6–12 months before buying. Your priorities will shift once you live here. Most smart expats rent 1–2 years, then buy after getting the lay of the land. Real estate is less liquid than stocks — don\'t rush.',
    },
    {
        q: 'What about Airbnb income potential?',
        a: 'Casco Viejo and Costa del Este have strong Airbnb yields (30–50% annual return possible). Casco especially is a hotbed. But regulations are tightening — check current rules before buying for rental income. Some neighborhoods have caps on Airbnb licenses.',
    },
    {
        q: 'How important is walkability?',
        a: 'Depends on you. If you hate driving: Casco Viejo or El Cangrejo. If you don\'t mind a car: Clayton, Costa del Este offer better safety/space for the trade-off. Most younger expats want walkability; families often prefer space and accept driving.',
    },
];

const settingUpGuide = [
    { step: '1', title: 'Visit 2–3 neighborhoods in person', body: 'Walk around at different times (morning, evening, night). Visit cafes, shops, talk to other expats. Get a feel for the vibe.' },
    { step: '2', title: 'Rent short-term first (Airbnb)', body: 'Spend 2–4 weeks in your target neighborhood. Live like a local, not a tourist. Test the commute, the noise, the community.' },
    { step: '3', title: 'Check commute to your work', body: 'If you have a specific workplace, test the commute. Panama traffic can be brutal. 45 min commute is not uncommon.' },
    { step: '4', title: 'Join local Facebook groups', body: 'Join "[Neighborhood] Expats," "[Neighborhood] Residents." Ask questions. Get insider advice. These communities are incredibly helpful.' },
    { step: '5', title: 'Connect with a real estate agent', body: 'Local agents know availability, negotiation tactics, and neighborhood trends. Use them (no cost — they get commission from landlord).' },
    { step: '6', title: 'Sign 6–12 month lease', body: 'Lock in reasonable terms. Most leases are 12 months, but 6-month options exist. Negotiate deposit and lease terms.' },
    { step: '7', title: 'Keep receipts and documentation', body: 'Document your living situation for residency applications later. Lease, utility bills, address proof.' },
];

export default async function BestNeighborhoodsPanamaCityPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1600&q=80"
                        alt="Panama City Neighborhoods"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        NEIGHBORHOOD GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Best Neighborhoods<br />in Panama City
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        The definitive guide to 8 neighborhoods. Where to live, safety ratings, rent, walkability, and who should move there. Find your perfect Panama City home.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Panama City is diverse. The perfect neighborhood for a 25-year-old digital nomad looks nothing like the perfect neighborhood for a 65-year-old retiree — and that's okay. Each has different priorities: safety, walkability, nightlife, cost, schools, space.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        This guide profiles 8 major neighborhoods expats choose, breaks down rent, safety, walkability, lifestyle vibe, and exactly who should live there. By the end, you'll know exactly where to look.
                    </p>
                </section>

                {/* 3D Scene */}
                <section className="reveal-on-scroll">
                    <div className="h-96 rounded-2xl overflow-hidden border border-brand-100 shadow-lg">
                        <PanamaCityScene />
                    </div>
                    <p className="text-slate-500 text-xs text-center mt-4">Explore Panama City's neighborhood landscape in 3D</p>
                </section>

                {/* Detailed Neighborhood Profiles */}
                <section className="reveal-on-scroll space-y-12">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <MapPin className="inline text-brand-GOLD mr-2" size={28} />
                        Complete Neighborhood Profiles
                    </h2>

                    {neighborhoods.map((n, i) => (
                        <div key={i} className="card-light rounded-2xl p-8 border border-brand-100">
                            {/* Header */}
                            <div className="mb-6">
                                <h3 className="text-3xl font-heading font-bold text-white mb-2">{i + 1}. {n.name}</h3>
                                <p className="text-brand-GOLD text-xs font-black uppercase tracking-widest">{n.tagline}</p>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid sm:grid-cols-4 gap-3 mb-6 pb-6 border-b border-brand-100">
                                <div>
                                    <p className="text-slate-600 text-[10px] uppercase font-bold mb-1">Rent</p>
                                    <p className="text-brand-GOLD font-black">{n.rent}</p>
                                </div>
                                <div>
                                    <p className="text-slate-600 text-[10px] uppercase font-bold mb-1">Safety</p>
                                    <p className="text-brand-950 font-black">{n.safety}</p>
                                </div>
                                <div>
                                    <p className="text-slate-600 text-[10px] uppercase font-bold mb-1">Walkability</p>
                                    <p className="text-brand-950 font-black">{n.walkability}</p>
                                </div>
                                <div>
                                    <p className="text-slate-600 text-[10px] uppercase font-bold mb-1">Best For</p>
                                    <p className="text-brand-950 font-black text-xs">{n.best}</p>
                                </div>
                            </div>

                            {/* Vibe Description */}
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">{n.vibe}</p>

                            {/* Pros & Cons */}
                            <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h4 className="text-white font-bold mb-3 text-sm flex items-center gap-2">
                                        <span className="text-brand-GOLD">✓</span> Pros
                                    </h4>
                                    <ul className="space-y-2">
                                        {n.pros.map((pro, j) => (
                                            <li key={j} className="flex items-start gap-2">
                                                <CheckCircle size={12} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                                <span className="text-slate-500 text-xs">{pro}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-3 text-sm flex items-center gap-2">
                                        <span className="text-brand-CORAL">✕</span> Cons
                                    </h4>
                                    <ul className="space-y-2">
                                        {n.cons.map((con, j) => (
                                            <li key={j} className="flex items-start gap-2">
                                                <AlertCircle size={12} className="text-brand-CORAL mt-1 flex-shrink-0" />
                                                <span className="text-slate-500 text-xs">{con}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Lifestyle Details */}
                            <div className="bg-white rounded-xl p-4 grid sm:grid-cols-4 gap-3">
                                <div>
                                    <p className="text-slate-600 text-[9px] uppercase font-bold mb-1">Transport</p>
                                    <p className="text-slate-700 text-xs">{n.transport}</p>
                                </div>
                                <div>
                                    <p className="text-slate-600 text-[9px] uppercase font-bold mb-1">Dining</p>
                                    <p className="text-slate-700 text-xs">{n.dining}</p>
                                </div>
                                <div>
                                    <p className="text-slate-600 text-[9px] uppercase font-bold mb-1">Nightlife</p>
                                    <p className="text-slate-700 text-xs">{n.nightlife}</p>
                                </div>
                                <div>
                                    <p className="text-slate-600 text-[9px] uppercase font-bold mb-1">Community</p>
                                    <p className="text-slate-700 text-xs">{n.community}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Comparison Table */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <TrendingUp className="inline text-brand-GOLD mr-2" size={28} />
                        Quick Comparison Table
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-brand-100">
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 pr-4">Neighborhood</th>
                                    <th className="text-left text-brand-GOLD text-[10px] uppercase tracking-widest py-3 px-3">Rent (1BR)</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Safety</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Walkability</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Best For</th>
                                    <th className="text-left text-slate-500 text-[10px] uppercase tracking-widest py-3 px-3">Vibe</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonTable.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-100">
                                        <td className="text-slate-500 text-xs py-3 pr-4 font-bold">{row.neighborhood}</td>
                                        <td className="text-brand-GOLD text-xs py-3 px-3 font-bold">{row.rent}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3">{row.safety}</td>
                                        <td className="text-slate-700 text-xs py-3 px-3">{row.walkability}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.bestFor}</td>
                                        <td className="text-slate-500 text-xs py-3 px-3">{row.vibe}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Rent Comparison */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        Rent Prices by Neighborhood
                    </h2>
                    <div className="h-96 rounded-2xl overflow-hidden border border-brand-100 shadow-lg mb-6">
                        <CostBarChart
                        data={[
                          { label: 'El Cangrejo', value: 650, color: '#00C5CB' },
                          { label: 'Marbella', value: 850, color: '#00C5CB' },
                          { label: 'San Francisco', value: 1100, color: '#D4A843' },
                          { label: 'Costa del Este', value: 1500, color: '#D4A843' },
                          { label: 'Punta Pacifica', value: 2200, color: '#8b5cf6' },
                        ]}
                        title="1BR Rent by Neighborhood ($/mo)"
                      />
                    </div>
                    <p className="text-slate-500 text-xs text-center mb-6">Typical 1-bedroom rent across Panama City neighborhoods</p>
                    <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Rent ranges from $600/mo (El Cangrejo) to $3,000+/mo (Punta Pacifica). Most expats spend $900–$1,600 for a nice 1–2BR in decent neighborhoods. Furnished vs unfurnished: furnished costs 10–20% more but saves setup hassle. Always negotiate — especially for 12+ month leases.
                        </p>
                    </div>
                </section>

                {/* How to Choose */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Home className="inline text-brand-GOLD mr-2" size={28} />
                        How to Choose Your Neighborhood
                    </h2>
                    <div className="space-y-4">
                        {settingUpGuide.map((s, i) => (
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

                {/* Key Considerations */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-6 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Key Considerations for Every Expat
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: 'Safety First', body: 'Don\'t compromise on safety for cheaper rent. Costa del Este and Clayton are worth the premium. You spend a lot of time where you live — safety matters.' },
                            { title: 'Test Before Buying', body: 'Rent for 6–12 months before buying. You might hate what you thought you\'d love. Real estate is illiquid — rent first, buy later.' },
                            { title: 'Commute Matters', body: 'If you work somewhere specific, test the commute. 45-min commutes are rough. Factor it into your decision.' },
                            { title: 'Walkability vs Space', body: 'Young expats want walkability; families want space. Be honest about what you prioritize. Don\'t sacrifice one for the other.' },
                            { title: 'Community Matters', body: 'Neighborhoods with expat communities (Casco, Clayton, Costa del Este) offer support and friendship. Can be invaluable if new to Panama.' },
                            { title: 'Future Flexibility', body: 'Choose neighborhoods where you can easily downsize/upgrade later. Avoid hyper-niche areas where you\'d get stuck.' },
                        ].map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <h3 className="text-brand-950 font-bold text-sm mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{item.body}</p>
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

                {/* Warning Section */}
                <section className="reveal-on-scroll card-light rounded-2xl p-8 border border-brand-CORAL/30 bg-white/50">
                    <h2 className="text-white text-2xl font-heading font-bold mb-5 uppercase tracking-tighter italic flex items-center gap-2">
                        <AlertCircle className="text-brand-CORAL" size={24} />
                        Neighborhoods to Avoid
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-4">
                        A few neighborhoods have higher crime or are generally less desirable for expats. While not entirely off-limits, they're not recommended:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {[
                            { area: 'San Miguelito', reason: 'Higher crime rates, less infrastructure, avoid especially after dark' },
                            { area: 'Tocumen', reason: 'Airport area, transient, less appealing residential options' },
                            { area: 'Curundu', reason: 'Inconsistent safety, less developed infrastructure' },
                            { area: 'Far West Panama City', reason: 'Limited infrastructure, less English spoken, further from amenities' },
                        ].map((item, i) => (
                            <div key={i} className="bg-brand-CORAL/10 border border-brand-CORAL/30 rounded-lg p-4">
                                <p className="text-brand-950 font-bold text-sm mb-1">{item.area}</p>
                                <p className="text-slate-500 text-xs">{item.reason}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pro Tips */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Pro Tips for Finding the Perfect Place
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            'Use Facebook groups (neighborhood expats) for insider knowledge and referrals.',
                            'Check Google Maps Street View before visiting — familiarize yourself with the neighborhood.',
                            'Talk to your Uber drivers — they know neighborhoods better than anyone.',
                            'Avoid signing leases during your first week in Panama. Wait 2–4 weeks to decide.',
                            'Ask about utility costs — water, electricity, internet prices vary by neighborhood.',
                            'Check commute times using Google Maps traffic (worst-case scenario is rush hour).',
                            'Visit the neighborhood multiple times at different times of day.',
                            'Negotiate everything — rent, deposits, lease length, included utilities.',
                        ].map((tip, i) => (
                            <div key={i} className="card-light rounded-xl p-4 border border-brand-100 flex items-start gap-3">
                                <Wifi size={14} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                <span className="text-slate-500 text-xs leading-relaxed">{tip}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Ready to Find Your Neighborhood?
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Our advisors know Panama City inside and out. We'll help you explore neighborhoods, negotiate leases, and find the perfect home that matches your lifestyle and budget.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/${lang}/contacto`}
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Get Neighborhood Help <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/blog/panama-for-families-with-children`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Family Guide
                        </Link>
                    </div>
                </section>

                {/* Related Links */}
                <section className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Cost of Living Guide', href: `/${lang}/blog/living-in-panama-city` },
                        { label: 'Real Estate Investment', href: `/${lang}/blog/panama-real-estate-investments` },
                        { label: 'Moving with Families', href: `/${lang}/blog/panama-for-families-with-children` },
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
