import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, DollarSign, TrendingUp, Home, AlertCircle, Heart, Zap, Shield } from 'lucide-react';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';


const panamaVsAlternativesData = [
    { label: 'Panama (comfortable)', value: 2200, color: '#00C5CB' },
    { label: 'Costa Rica', value: 3000, color: '#4aab8a' },
    { label: 'Mexico', value: 2800, color: '#d4884a' },
    { label: 'Portugal', value: 3500, color: '#e07744' },
    { label: 'USA (avg)', value: 5500, color: '#e05555' },
];

export const metadata: Metadata = {
    title: 'Pros and Cons of Retiring in Panama 2026: Complete Analysis',
    description: 'Pros and cons of retiring in Panama. Benefits, drawbacks, costs, visas, lifestyle considerations.',
    keywords: 'retire to Panama, retiring in Panama, Panama retirement, Panama pensionado visa, expat retirement',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/pros-cons-retiring-panama',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/pros-cons-retiring-panama',
            'es': 'https://panamarealestatesale.com/es/blog/pros-cons-retiring-panama',
            'pt': 'https://panamarealestatesale.com/pt/blog/pros-cons-retiring-panama',
            'de': 'https://panamarealestatesale.com/de/blog/pros-cons-retiring-panama',
        },
    },
    openGraph: {
        title: 'Pros and Cons of Retiring in Panama 2026: Complete Analysis',
        description: 'Pros and cons of retiring in Panama. Benefits, drawbacks, costs, visas, lifestyle considerations.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/pros-cons-retiring-panama',
        images: [{ url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80', width: 1200, height: 630, alt: 'Retirement considerations' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pros and Cons of Retiring in Panama 2026: Complete Analysis',
        description: 'Pros and cons of retiring in Panama. Benefits, drawbacks, costs, visas, lifestyle considerations.',
        images: ['https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80'],
    },
};

const pros = [
    { num: '1', title: 'The Pensionado Visa Is World-Class', desc: 'Guaranteed permanent residency with just $1,000/month income. No waiting, no temporary status, no year-by-year renewal anxiety. Plus 22+ government discounts: 25% utilities, 50% cinema, 10–25% restaurants, free airport parking. First-year cost ~$2,000–$3,000 in legal fees. Worth every penny.' },
    { num: '2', title: 'Cost of Living Significantly Lower Than USA/Europe', desc: 'A comfortable couple retirement runs $1,500–$2,500/month. Breakdown: $800–$1,500 rent, $200–$300 food, $100–$150 utilities, $200–$300 entertainment, $100–$200 healthcare. Zero extravagance required — this is comfortable, not pinching pennies.' },
    { num: '3', title: 'Modern Healthcare at a Fraction of US Cost', desc: 'JCI-accredited hospitals in Panama City with US-trained doctors. Heart surgery: $8,000–$12,000 (US: $40,000–$80,000). Root canal: $300–$500 (US: $1,500–$3,000). Medications 50–70% cheaper. Dentistry world-class at bargain prices. Pensionado visa includes public hospital access.' },
    { num: '4', title: 'No Tax on Foreign Income', desc: 'Pensions, 401k withdrawals, Social Security, rental income from abroad — all completely tax-free. Territorial income tax = zero federal tax on foreign earnings. For a retiree on $3,000–$4,000/month, this saves $5,000–$10,000+ annually compared to US or Europe.' },
    { num: '5', title: 'USD Economy = No Currency Risk', desc: 'Panama uses US dollars as official currency. Your pension arrives in dollars, stays in dollars. Zero forex anxiety. Sleep soundly knowing currency fluctuations will not surprise you. One less financial variable to manage in retirement.' },
    { num: '6', title: 'Direct Flights to Major US Cities', desc: 'Miami 3 hours, Houston 3.5 hours, NYC 5 hours, LA 6 hours. Visiting family is feasible without 12-hour odysseys. Flights affordable: $150–$300 return from Panama City to Miami. US connectivity without leaving Central America.' },
    { num: '7', title: 'Warm Weather Year-Round', desc: 'Pacific dry season (Dec–Apr) is perfect beach weather. Boquete highlands stay 65°F year-round — eternal spring. No heating bills, no winter coat, no seasonal depression. Trade snow for consistent sunshine.' },
    { num: '8', title: 'Incredible Natural Diversity', desc: 'Beaches (Coronado, Bocas), rainforest (Darién, Pipeline Trail), mountains (Boquete), islands (San Blas), lakes, wildlife. All within 2–3 hours of Panama City. Retire somewhere with genuine adventure on your doorstep.' },
    { num: '9', title: 'Growing Expat Community', desc: 'Thousands of English-speaking retirees already established. Facebook groups, meetups, clubs, restaurants, doctors, lawyers, property managers — all expat-aware. You are not pioneering in the wilderness. Instant community waiting.' },
    { num: '10', title: 'Foreigners Can Own Freehold Property', desc: 'No restrictions. Buy land, condos, homes with the same rights as Panamanian citizens. Freehold title (not leasehold). Property passes to heirs without issue. Invest confidently without legal asterisks.' },
];

const cons = [
    { num: '1', title: 'Bureaucracy Moves at "Panama Time"', desc: 'Government processes, visa approvals, property transfers — all move slower than expected. A task promised in 2 weeks takes 6. Expect delays. Plan extra time for everything official. Patience is not optional. Hire a local lawyer or you will lose your mind.' },
    { num: '2', title: 'Traffic in Panama City Is Intense', desc: 'Peak hours rival major US cities. 7–9am and 5–7pm = gridlock. Casco Viejo, Amador, El Cangrejo congested. Public buses chaotic; most expats drive or use Uber. Car ownership recommended in the city; adds $200–$400/month to budget.' },
    { num: '3', title: 'Humidity and Heat in the Lowlands Are Real', desc: 'Panama City: 85–95°F, 80–90% humidity most of the year. AC essential. Clothes get damp constantly. Some retirees love it; others find it oppressive. Test your heat tolerance with a 2-month stay before committing.' },
    { num: '4', title: 'Language Barrier Outside Expat Zones', desc: 'English works in Panama City expat areas, but venture to the interior or small towns and Spanish becomes essential. Ordering food, renting apartments, dealing with landlords — Spanish required. Learning Spanish is non-negotiable for full integration.' },
    { num: '5', title: 'Healthcare Outside Panama City Is Limited', desc: 'Excellent private care concentrated in the capital. Boquete has clinics; Bocas has basic medical care. For complex issues, you travel to Panama City (3–6 hours depending on location). Not ideal for retirees with serious chronic conditions.' },
    { num: '6', title: 'Culture Shock & "Panama Time" Are Real', desc: 'Deadlines are flexible. Customer service expectations differ. Business works on relationships, not systems. First 6 months are disorienting for some people. Patience, humor, and flexibility required. Not everyone adjusts.' },
    { num: '7', title: 'Rainy Season (May–November) Is Very Wet', desc: '9 months of afternoon downpours. Not always a dealbreaker (Boquete stays cool), but affects outdoor lifestyle. Flooding occurs in low-lying areas some years. Humidity peaks in rainy season. Not tropical paradise year-round.' },
    { num: '8', title: 'Service Quality Varies Wildly', desc: 'World-class restaurant next to mediocre. Reliable contractor next to unreliable. You need local vetting and connections. "Expat filter bubble" required or you will eat bad food and hire bad workers.' },
    { num: '9', title: 'Political Uncertainty Is Minor But Present', desc: 'Generally stable but occasional corruption perceptions, labor strikes, minor political friction. Not a daily concern but news cycles happen. Costa Rica perceived as more politically stable.' },
    { num: '10', title: 'Distance from USA Family (If Midwest/Northeast Based)', desc: 'Panama flights are convenient for East Coasters but still 3–6+ hours depending on your US origin. Not a weekend trip from Chicago, Boston, or Minneapolis. Long-distance family relationships require intention.' },
];

const budgetLevels = [
    { level: 'Survival Budget', monthly: '$1,200–$1,500', breakdown: 'Modest 1BR apartment ($600–$800), basic groceries ($150–$200), utilities ($100), transport ($100–$150), minimal dining out. Possible but requires discipline.' },
    { level: 'Comfortable Retirement', monthly: '$1,800–$2,500', breakdown: 'Nice 2BR apartment or house ($900–$1,300), good groceries ($250–$350), utilities ($150), car/transport ($200–$300), regular dining out ($300–$400), entertainment/activities ($200–$300). Most retirees aim here.' },
    { level: 'Luxurious Lifestyle', monthly: '$3,000–$5,000', breakdown: 'Premium oceanfront or city apartment ($1,500–$2,500), excellent restaurants, golf membership, travel, clubs. Full first-world comfort without constraints.' },
];

const idealRetireProfile = [
    'Cost-conscious but not frugal — you want to stretch retirement savings but still enjoy life',
    'Flexible and adaptable — bureaucratic delays do not stress you out',
    'Adventurous with food and exploration — willing to try new cuisines and neighborhoods',
    'English-speaking or willing to learn Spanish — essential for real integration',
    'Independent — comfortable being an "expat" rather than joining an insular bubble',
    'Healthcare-aware but not medical-crisis-prone — good health with managed conditions, not complex care needs',
    'Early retiree or "young-at-heart" — active lifestyle preferred (beaches, hiking, golf)',
    'Family-adjusted — either no close family in USA or comfortable with 3–6 hour flights',
];

const notIdealRetireProfile = [
    'Strictly budget-constrained (<$1,200/month) — Panama requires some financial cushion',
    'Intolerant of heat and humidity — Panama City lowlands are not for everyone',
    'Monolingual, unwilling to learn Spanish — isolation will result',
    'Requires complex medical care or frequent specialists — healthcare outside Panama City limited',
    'Needs immediate bureaucratic efficiency — expect delays and frustration',
    'Wants established expat infrastructure (like Mexico or Costa Rica) — Panama is growing but newer',
    'Prefers cool weather year-round — only Boquete offers that; everywhere else is tropical',
    'Close family ties requiring frequent visits — 3–6 hour flights and costs add up',
];

const safetyBreakdown = [
    { area: 'Expat Communities (Coronado, Boquete, Bocas, Casco Viejo, Punta Pacifica)', safety: 'VERY SAFE — Comparable to suburban US. Gated communities, security-conscious, police presence.' },
    { area: 'Panama City (residential expat zones)', safety: 'SAFE WITH AWARENESS — Paitilla, Amador, Clayton safe. San Miguelito and Curundu avoid alone at night.' },
    { area: 'Touristy/Commercial Areas (Amador Causeway, Casco Viejo)', safety: 'SAFE BY DAY — Avoid after 10pm. Pickpocketing risk in crowds.' },
    { area: 'Public Transport (Metro, Buses)', safety: 'CAUTION NEEDED — Crowded buses attract pickpockets. Metro safe but watch belongings.' },
    { area: 'Darién Region & Urban Squatter Areas', safety: 'AVOID — Crime/trafficking issues. Zero reason for retirees to visit.' },
];

export default async function ProConsRetiringPanamaPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80"
                        alt="Panama Sunset"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        RETIREMENT GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Pros and Cons of Retiring<br />in Panama: The Unfiltered Truth
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        From expats who actually live here — the real benefits, the genuine challenges, and exactly what to expect.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Panama is marketed as paradise. Stunning beaches, cheap living, no taxes on foreign income, perfect weather. But like any retirement destination, the reality is more nuanced. There are genuine benefits and legitimate challenges.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        This guide lays out both sides honestly. We work with retirees who have been in Panama for 2 months and 20 years. Both groups offer wisdom. Read this before deciding so you know exactly what you are signing up for.
                    </p>
                </section>

                {/* THE PROS */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <CheckCircle className="inline text-brand-GOLD mr-2" size={28} />
                        The Pros: 10 Genuine Benefits
                    </h2>
                    <div className="space-y-4">
                        {pros.map((pro, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-GOLD/10 border border-brand-GOLD/30 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-brand-GOLD font-black text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-heading font-bold text-lg mb-2">{pro.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{pro.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* THE CONS */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <AlertCircle className="inline text-brand-GOLD mr-2" size={28} />
                        The Cons: 10 Real Challenges
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed text-sm">
                        These are not deal-breakers for most, but they are real. Ignoring them leads to regret. Address them head-on.
                    </p>
                    <div className="space-y-4">
                        {cons.map((con, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-400/10 border border-slate-400/30 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-slate-500 font-black text-sm">!</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-heading font-bold text-lg mb-2">{con.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{con.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Safety Deep Dive */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Shield className="inline text-brand-GOLD mr-2" size={28} />
                        Is Panama Safe for Retirees? The Honest Answer
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">
                        Safety is the #1 concern for retirees considering Panama. The perception is often worse than the reality. Here is the breakdown.
                    </p>
                    <div className="space-y-3">
                        {safetyBreakdown.map((item, i) => (
                            <div key={i} className="card-light rounded-xl p-5 border border-brand-100">
                                <div className="flex justify-between items-start gap-4 mb-2">
                                    <div className="font-heading font-black text-brand-950 uppercase text-sm">{item.area}</div>
                                    <div className="text-brand-GOLD font-black uppercase text-xs tracking-widest">{item.safety}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-brand-50 rounded-xl p-6 mt-6 border-l-4 border-brand-GOLD">
                        <p className="text-slate-600 text-sm leading-relaxed">
                            <strong>The real story:</strong> Crime in Panama exists but is concentrated in specific neighborhoods irrelevant to retirees. Expat communities (Coronado, Boquete, Bocas) are genuinely safe — safer than many US cities. Follow basic big-city logic: avoid isolated areas after dark, do not flash valuables, do not visit Darién. That is it. Thousands of retirees live safely in Panama. You can too.
                        </p>
                    </div>
                </section>

                {/* Panama vs Alternatives Cost Chart */}
                <CostBarChart
                    data={panamaVsAlternativesData}
                    title="Panama vs Popular Retirement Destinations"
                    subtitle="Comfortable couple monthly budget · USD"
                    height="260px"
                />

                {/* Panama City Scene */}
                <PanamaCityScene />

                {/* Budget Breakdown */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <DollarSign className="inline text-brand-GOLD mr-2" size={28} />
                        How Much Money Do You Need? Real Budgets
                    </h2>
                    <div className="space-y-4">
                        {budgetLevels.map((item, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <h3 className="text-white font-heading font-bold text-lg">{item.level}</h3>
                                    <div className="text-brand-GOLD font-black text-sm">{item.monthly}</div>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.breakdown}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white rounded-xl p-6 mt-6 border border-brand-GOLD/30">
                        <p className="text-slate-700 text-sm leading-relaxed">
                            <strong>The verdict:</strong> $1,800–$2,500/month is the sweet spot for most retirees. Covers rent, food, utilities, healthcare, entertainment, travel. Anything less requires careful budgeting. More allows travel, golf memberships, and luxury. Pensionado discounts (utilities, dining, entertainment) help stretch every dollar.
                        </p>
                    </div>
                </section>

                {/* Who Should Retire in Panama */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Heart className="inline text-brand-GOLD mr-2" size={28} />
                        Who Should Retire in Panama?
                    </h2>
                    <div className="card-light rounded-2xl p-6 border border-brand-GOLD/30 bg-brand-50/50">
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                            Panama is ideal for retirees who match this profile:
                        </p>
                        <ul className="space-y-2">
                            {idealRetireProfile.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle size={14} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                    <span className="text-slate-600 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-slate-500 mt-6 text-sm leading-relaxed italic">
                        If 6+ of these resonate, Panama is probably a good fit.
                    </p>
                </section>

                {/* Who Should NOT */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <AlertCircle className="inline text-brand-GOLD mr-2" size={28} />
                        Who Should NOT Retire in Panama?
                    </h2>
                    <div className="card-light rounded-2xl p-6 border border-brand-100">
                        <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                            Panama is not ideal if you match this profile:
                        </p>
                        <ul className="space-y-2">
                            {notIdealRetireProfile.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="font-black text-slate-600 mt-1 flex-shrink-0">—</span>
                                    <span className="text-slate-500 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-slate-500 mt-6 text-sm leading-relaxed italic">
                        None of these are judgments — just misalignments. Costa Rica, Boquete (Panama's mountain escape), or Mexico might be better fits.
                    </p>
                </section>

                {/* FAQ */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Common Questions (People Also Ask)
                    </h2>
                    <div className="space-y-4">
                        {[
                            { q: 'What is the retirement age requirement in Panama?', a: 'There is no mandatory retirement age. You can retire at any age with the Pensionado visa (requires $1,000/month guaranteed income, any age). Many early retirees use Panama to bridge the gap before US Social Security begins.' },
                            { q: 'Can I keep my US Social Security living in Panama?', a: 'Yes. US Social Security and any US-based income are not taxed by Panama. Your benefit deposits directly to your US bank account; no restrictions on living abroad.' },
                            { q: 'Do I need a lawyer to get the Pensionado visa?', a: 'Strongly recommended. Immigration law is straightforward but details matter. A local lawyer ensures your application is perfect, handles government coordination, and fast-tracks approval. Cost: $2,000–$3,000. Worth every penny.' },
                            { q: 'What is the best time to move to Panama?', a: 'December–March (dry season) is ideal for logistics and comfort. Rainy season (May–November) is very wet. Many retirees arrive during dry season and adjust by their second year.' },
                            { q: 'Can I own property in Panama as a foreigner?', a: 'Yes, full freehold ownership with same rights as Panamanian citizens. No restrictions on land area, location, or ownership duration. Property passes to heirs without issue. This is unusual for Latin America and a major advantage.' },
                            { q: 'Should I buy or rent when I first arrive?', a: 'Rent for 6–12 months before buying. Understand neighborhoods, lifestyle, weather, community. Then purchase if you are confident. Buying immediately is a mistake — you do not know where you want to live yet.' },
                        ].map((item, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <h3 className="text-white font-heading font-bold mb-3">{item.q}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quick Checklist */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Retirement Readiness Checklist
                    </h2>
                    <div className="bg-white rounded-2xl p-8 border border-brand-GOLD/30">
                        <p className="text-slate-700 font-semibold mb-6">Before you move, confirm you have:</p>
                        <ul className="space-y-3">
                            {[
                                'Monthly guaranteed income of at least $1,500 (pensions, investments, Social Security)',
                                'At least 6 months of liquid savings as an emergency buffer',
                                'Health insurance (expat or international plan) before arrival',
                                'US passport valid for at least 6 months',
                                'A lawyer contact in Panama (for visa and property matters)',
                                'Realistic expectations about bureaucracy and culture differences',
                                'Flexibility to adjust plans if your first location is not ideal',
                                'Willingness to learn basic Spanish',
                                'Commitment to a 6–12 month rental trial before buying',
                                'A plan for healthcare needs (research hospitals and doctors beforehand)',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle size={16} className="text-brand-GOLD mt-1 flex-shrink-0" />
                                    <span className="text-slate-700 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Verdict */}
                <section className="reveal-on-scroll bg-brand-50 rounded-3xl p-8 border-l-4 border-brand-GOLD">
                    <h2 className="text-white font-heading text-2xl font-bold mb-6 uppercase tracking-tighter">The Bottom Line</h2>
                    <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                        <p>
                            Panama is an exceptional retirement destination — but only if you align with its realities. The Pensionado visa is world-class. The cost of living is genuinely low. The healthcare is excellent. The tax benefits are real.
                        </p>
                        <p>
                            But bureaucracy moves slowly. Culture shock is real. Heat and humidity are intense. Language barriers exist. Healthcare outside Panama City is limited. You must be prepared for all of this.
                        </p>
                        <p>
                            Retirees who thrive in Panama are adaptable, cost-conscious, curious about different cultures, and comfortable with a slightly slower pace. If that is you, Panama will exceed your expectations. If you require efficiency, comfort, zero cultural friction, and immediate family proximity, Costa Rica or Mexico might serve you better.
                        </p>
                        <p>
                            <strong>Our recommendation:</strong> Spend 2–3 months in Panama (ideally Coronado and Boquete) before deciding. Stay in an Airbnb, explore, eat local, talk to expats who have lived here 5+ years. Your gut will tell you if it is home.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Ready to Explore Retiring in Panama?
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        We work with retirees at every stage — from initial research to visa approval to property investment. Our team is based in Panama and knows the real landscape. Let us help you decide if Panama is the right move.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Book Retirement Consultation <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/blog/panama-vs-costa-rica-retirement`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Compare: Panama vs Costa Rica
                        </Link>
                    </div>
                </section>

                {/* Internal links */}
                <section className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Panama vs Costa Rica Retirement Comparison', href: '/en/blog/panama-vs-costa-rica-retirement' },
                        { label: 'Coronado Real Estate Guide', href: '/en/blog/coronado-real-estate-guide' },
                        { label: 'Best Neighborhoods for Expats', href: '/en/blog/best-neighborhoods-panama-expats' },
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
