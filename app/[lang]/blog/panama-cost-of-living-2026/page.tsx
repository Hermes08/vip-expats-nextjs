import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingDown, Home, Utensils, Heart, Navigation, Zap, HelpCircle } from 'lucide-react';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';


const cityBudgetChartData = [
    { label: 'Boquete (Budget)', value: 950, color: '#00C5CB' },
    { label: 'Coronado (Budget)', value: 1050, color: '#00a8ae' },
    { label: 'Panama City (Budget)', value: 1250, color: '#008c90' },
    { label: 'Boquete (Comfort)', value: 1850, color: '#D4A843' },
    { label: 'Coronado (Comfort)', value: 2000, color: '#b8902e' },
    { label: 'Panama City (Comfort)', value: 2400, color: '#9c7a1a' },
];

const vsPanamaChartData = [
    { label: 'NYC', value: 6800, color: '#e05555' },
    { label: 'Miami', value: 5200, color: '#e07744' },
    { label: 'LA', value: 5600, color: '#e09040' },
    { label: 'Austin', value: 4200, color: '#d4a843' },
    { label: 'Costa Rica', value: 2800, color: '#4aab8a' },
    { label: 'Panama City', value: 2200, color: '#00C5CB' },
    { label: 'Boquete', value: 1800, color: '#00d4db' },
];

export const metadata: Metadata = {
    title: 'Panama Cost of Living 2026: Housing, Food, Utilities, Full Breakdown',
    description: 'Complete Panama cost of living breakdown 2026. Housing, food, utilities, healthcare, transportation.',
    keywords: 'Panama cost of living, Panama expenses, living costs Panama, Panama budget, Panama affordability',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/panama-cost-of-living-2026',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/panama-cost-of-living-2026',
            'es': 'https://panamarealestatesale.com/es/blog/panama-cost-of-living-2026',
            'pt': 'https://panamarealestatesale.com/pt/blog/panama-cost-of-living-2026',
            'de': 'https://panamarealestatesale.com/de/blog/panama-cost-of-living-2026',
        },
    },
    openGraph: {
        title: 'Panama Cost of Living 2026: Housing, Food, Utilities, Full Breakdown',
        description: 'Complete Panama cost of living breakdown 2026. Housing, food, utilities, healthcare, transportation.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/panama-cost-of-living-2026',
        images: [{ url: 'https://images.unsplash.com/photo-1579621970563-cbf4b0aab9c5?w=1200&q=80', width: 1200, height: 630, alt: 'Cost of living breakdown' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Panama Cost of Living 2026: Housing, Food, Utilities, Full Breakdown',
        description: 'Complete Panama cost of living breakdown 2026. Housing, food, utilities, healthcare, transportation.',
        images: ['https://images.unsplash.com/photo-1579621970563-cbf4b0aab9c5?w=1200&q=80'],
    },
};

const costSummary = [
    {
        city: 'Panama City',
        single_frugal: '$1,100–$1,400',
        couple_comfortable: '$1,800–$2,800',
        luxury: '$4,000–$8,000',
        desc: 'Modern city living — apartments, dining, public transport. Best for those wanting urban amenities.',
    },
    {
        city: 'Boquete',
        single_frugal: '$900–$1,200',
        couple_comfortable: '$1,500–$2,200',
        luxury: '$3,000–$5,000',
        desc: 'Mountain town — cooler climate, slower pace, lower prices. Popular with retirees.',
    },
    {
        city: 'Coronado',
        single_frugal: '$1,000–$1,300',
        couple_comfortable: '$1,600–$2,400',
        luxury: '$3,500–$6,500',
        desc: 'Beach expat community — resort amenities, golf, restaurants. Higher than Boquete but proven lifestyle.',
    },
];

const housingCosts = [
    { location: 'Panama City - 1BR Apartment (Modern, mid-range)', rent: '$600–$1,400/mo', detail: 'Studio to 1BR in neighborhoods like Casco Viejo, Punta Pacifica, or El Cangrejo. Furnished or unfurnished.' },
    { location: 'Panama City - 2BR Apartment (Middle to upscale)', rent: '$900–$2,500/mo', detail: 'Two-bedroom condos in residential areas. HOA fees typically $200–$450/month (included above).' },
    { location: 'Boquete - 2BR House', rent: '$600–$1,200/mo', detail: 'Spacious homes on quiet streets. Cooler climate. Often includes garden space.' },
    { location: 'Coronado - 2BR Condo', rent: '$700–$1,400/mo', detail: 'Beachfront or gated community. Many include pool and security.' },
    { location: 'San Blas Islands - 1BR Cabin', rent: '$400–$900/mo', detail: 'Rustic beachfront. Limited modern amenities. Off-grid appeal.' },
    { location: 'Panama City - Buying a 2BR Apartment', price: '$150K–$350K', detail: 'Depending on neighborhood. Prices continue rising 3–5%/year.' },
    { location: 'Coronado - Buying a 2BR Oceanfront Condo', price: '$250K–$600K', detail: 'Premium for beach access. Strong short-term rental market (7–9% yield).' },
    { location: 'Boquete - Buying a House (2-3BR)', price: '$120K–$300K', detail: 'Land cheaper here. Cool climate attracts retirees.' },
];

const foodCosts = [
    { category: 'Local Market Shopping (couple, 1 week)', cost: '$60–$90', detail: 'Fresh produce, local fish, eggs, rice, beans. El Mercado de Abastos in Panama City, or local mercados in Boquete/Coronado.' },
    { category: 'Supermarket (El Rey, Riba Smith, PriceSmart)', cost: '$100–$180/week', detail: 'Imported Western goods. Organic produce. Dairy, meats, pantry staples. Equivalent to USA mid-range prices.' },
    { category: 'Local Restaurant (lunch)', cost: '$4–$8/person', detail: 'Rice, beans, chicken, plantains. A full lunch with drink for one person.' },
    { category: 'Western-style Restaurant (dinner for 2)', cost: '$25–$60', detail: 'Mid-range restaurants in Panama City or expat areas. Steak, fish, pasta. Drinks included.' },
    { category: 'Fast Casual (Burger, sandwich, salad)', cost: '$5–$10/person', detail: 'Chains like Subway, local burger joints. Quick lunch option.' },
    { category: 'Cooking at Home (couple daily)', cost: '$15–$25/day', detail: 'Budget for all meals prepared at home. Very affordable.' },
    { category: 'Eating Out Every Meal (couple daily)', cost: '$30–$50/day', detail: 'Three meals out per day. Splurge budget.' },
];

const healthcareCosts = [
    { service: 'Doctor Visit (General Practitioner)', cost: '$50–$80', detail: 'Private clinic. No insurance needed. Same-day or next-day appointments common.' },
    { service: 'Doctor Visit (Specialist)', cost: '$100–$200', detail: 'Dermatologist, cardiologist, orthopedic. Significantly cheaper than USA.' },
    { service: 'Dentist Cleaning & Checkup', cost: '$40–$80', detail: 'Routine cleaning. Preventative care is dirt cheap compared to USA.' },
    { service: 'Dental Crown or Bridge', cost: '$200–$500', detail: 'USA prices: $1,000–$2,000. Panama: 75–80% savings.' },
    { service: 'Dental Implant (full procedure)', cost: '$800–$1,500', detail: 'USA: $3,000–$6,000 per tooth. Thousands of expats come to Panama for dental work.' },
    { service: 'Private Health Insurance (couple, age 60+)', cost: '$250–$500/mo', detail: 'Full coverage plans from CAJA alternatives like ASSE or INISA alternatives. Compare to USA: $1,500–$3,000/mo.' },
    { service: 'Prescription Medications', cost: '50–80% of USA prices', detail: 'Most drugs are generic and significantly cheaper. A $200 medication in the USA costs $40–$80 here.' },
    { service: 'Hospital Room (private facility)', cost: '$300–$600/night', detail: 'Private hospital like CIMA or Cleveland Clinic Panamá. Modern facilities.' },
    { service: 'ER Visit (minor)', cost: '$150–$300', detail: 'Without insurance. Includes initial exam and basic treatment.' },
];

const transportCosts = [
    { item: 'Metro Card / Bus Pass (Panama City, monthly)', cost: '$0.35 per trip', detail: 'Flat rate. Monthly pass roughly $10–$15 if daily commuting.' },
    { item: 'Uber / Taxi (Panama City, short trip)', cost: '$3–$8', detail: 'Centro to airport: $20–$30. Beach hotels to city: $15–$25.' },
    { item: 'Taxi Ride to Airport (from downtown)', cost: '$20–$35', detail: 'Negotiated rate. Uber: ~$25–$30 depending on surge.' },
    { item: 'Bus Panama City to Boquete', cost: '$10–$15', detail: '6-hour journey. Express buses available.' },
    { item: 'Bus Panama City to Coronado', cost: '$8–$12', detail: '3-hour journey.' },
    { item: 'Car Purchase (used Honda Civic, 2010–2015)', cost: '~$15,000', detail: 'Used imports. Low-mileage vehicles available.' },
    { item: 'Car Purchase (new model)', cost: '$25,000–$35,000+', detail: 'Toyota Corolla, Suzuki Swift. New cars more expensive than USA due to import taxes.' },
    { item: 'Gasoline', cost: '$0.80–$0.95/liter', detail: '~$3.00–$3.60/gallon. Equivalent to USA prices. Price regulated by government.' },
    { item: 'Car Insurance (yearly)', cost: '$500–$1,200', detail: 'Third-party liability required. Full coverage more expensive.' },
    { item: 'Car Registration (yearly)', cost: '$200–$400', detail: 'Government fee. Varies by vehicle value.' },
];

const utilitiesCosts = [
    { utility: 'Electricity (AC heavy use, 2BR)', cost: '$80–$180/mo', detail: 'Panama City costs higher due to AC usage. Cost depends on usage. Air conditioning is major expense.' },
    { utility: 'Water', cost: '$15–$40/mo', detail: 'Extremely affordable. Abundant water supply.' },
    { utility: 'Internet (fiber, 100Mbps)', cost: '$50–$80/mo', detail: 'Fast, reliable fiber available in most urban areas. Cable TV bundles cheaper.' },
    { utility: 'Cell Phone Plan', cost: '$25–$50/mo', detail: 'Unlimited talk/text + 5–10GB data. Carriers: Digicel, Claro, +Móvil.' },
    { utility: 'Natural Gas / Propane', cost: '$15–$25/mo', detail: 'If used. Water heating, cooking.' },
    { utility: 'Cable TV (optional)', cost: '$15–$35/mo', detail: 'Bundled with internet often. Streaming likely better value.' },
    { utility: 'Pensionado Discount (25% off utilities)', cost: 'Automatic reduction', detail: 'If you qualify, utilities drop 25%. Electricity: $60–$135. Water: $11–$30.' },
];

const entertainmentCosts = [
    { activity: 'Cinema (movie ticket)', cost: '$8/person', detail: 'Standard price. Pensionado with ID gets 50% off ($4).' },
    { activity: 'Golf Round (Coronado or Panama City course)', cost: '$40–$100', detail: 'Coronado Golf Club: ~$80–$100. Municipal courses: $40–$60.' },
    { activity: 'Gym Membership', cost: '$30–$60/mo', detail: 'La Compañía, Fitness Company, or local gyms. Good facilities.' },
    { activity: 'Happy Hour Beer (local bar)', cost: '$1.50–$3', detail: 'Regular price: $2–$4. Happy hour deals common.' },
    { activity: 'Bottle of Wine (local, decent quality)', cost: '$10–$25', detail: 'Imported wine: $15–$50. Wine less regulated than USA.' },
    { activity: 'Dinner at High-End Restaurant (per person)', cost: '$30–$80', detail: 'Best restaurants in Panama City. Wine extra.' },
    { activity: 'Casino (entry)', cost: 'Free', detail: 'Majestic Towers, Mega Royale, or others. Minimal restrictions.' },
    { activity: 'Nightclub (with drink)', cost: '$10–$25', detail: 'Cover charge + drink. Dance clubs downtown.' },
];

const usComparison = [
    { city: 'Panama City vs Miami', savings: '45% cheaper', detail: 'Same quality of life. Rent, food, dining, entertainment. Miami avg: $2,800/mo couple. Panama: $2,000–$2,500.' },
    { city: 'Panama City vs New York', savings: '55% cheaper', detail: 'Major cost difference. NYC: $4,000–$5,000/mo. Panama: $2,000–$2,800.' },
    { city: 'Coronado vs Los Angeles', savings: '50% cheaper', detail: 'Beach living comparison. LA: $3,500–$4,500. Coronado: $2,000–$2,500.' },
    { city: 'Boquete vs Boulder, Colorado', savings: '52% cheaper', detail: 'Mountain town comparison. Boulder: $2,500–$3,500. Boquete: $1,500–$2,200.' },
    { city: 'Panama City vs Austin, TX', savings: '35% cheaper', detail: 'Growing tech city comparison. Austin: $2,800–$3,500. Panama: $2,000–$2,800.' },
    { city: 'Panama City vs San Diego', savings: '48% cheaper', detail: 'Southern California beach comparison. San Diego: $3,200–$4,000. Panama: $2,000–$2,500.' },
];

const hiddenCosts = [
    { cost: 'Import Duties on Goods', detail: 'Shipping furniture or specialty items to Panama can incur 15–25% import duties. Plan shipping carefully.' },
    { cost: 'Visa Renewal / Cedula Renewal', detail: 'Pensionado visa requires renewal every 5 years (~$500–$1,000 legal fees). Cedula renewal: $50–$150.' },
    { cost: 'Notary Fees (real estate, legal documents)', detail: 'Property registration, power of attorney, legal documents: $200–$500 per transaction.' },
    { cost: 'Private School Tuition (if applicable)', detail: 'Bilingual schools in Panama City: $4,000–$12,000/year per child. Higher than many US private schools.' },
    { cost: 'Car Maintenance & Repairs', detail: 'Labor cheaper than USA, but parts sometimes pricey due to import taxes.' },
    { cost: 'Home Maintenance', detail: 'Tropical climate means frequent AC repairs, plumbing issues. Budget: $100–$300/mo for preventative.' },
    { cost: 'Property Management (if renting out)', detail: 'If you own and rent short-term: 20–30% of rental income to property manager.' },
    { cost: 'Inflation in Expat Areas', detail: 'Coronado, Casco Viejo, Bocas del Toro: gentrification drives up prices faster than local inflation.' },
];

const budgetExamples = [
    {
        scenario: 'Single Person, Frugal Living (Boquete)',
        details: [
            { item: 'Rent', cost: '$700' },
            { item: 'Utilities', cost: '$60' },
            { item: 'Groceries', cost: '$150' },
            { item: 'Local Dining', cost: '$120' },
            { item: 'Transport', cost: '$30' },
            { item: 'Entertainment', cost: '$50' },
            { item: 'Miscellaneous', cost: '$50' },
        ],
        total: '$1,160/month',
        note: 'Simple living, local food, minimal entertainment.',
    },
    {
        scenario: 'Couple, Comfortable Living (Coronado)',
        details: [
            { item: 'Rent', cost: '$1,200' },
            { item: 'Utilities', cost: '$140' },
            { item: 'Groceries & Dining', cost: '$450' },
            { item: 'Transport', cost: '$100' },
            { item: 'Entertainment', cost: '$250' },
            { item: 'Healthcare', cost: '$100' },
            { item: 'Miscellaneous', cost: '$150' },
        ],
        total: '$2,390/month',
        note: 'Oceanfront area, mix of home cooking and dining out, golf/activities.',
    },
    {
        scenario: 'Single Person, Luxury Living (Panama City)',
        details: [
            { item: 'Premium Apartment (Punta Pacifica)', cost: '$2,000' },
            { item: 'Utilities + Internet', cost: '$150' },
            { item: 'Fine Dining + Groceries', cost: '$800' },
            { item: 'Transport (Uber)', cost: '$200' },
            { item: 'Entertainment (clubs, events)', cost: '$400' },
            { item: 'Healthcare + Insurance', cost: '$300' },
            { item: 'Miscellaneous', cost: '$300' },
        ],
        total: '$4,150/month',
        note: 'Premium neighborhood, frequent dining out, nightlife, private healthcare.',
    },
];

const faqItems = [
    {
        q: 'Can I live in Panama on $1,000/month?',
        a: 'Yes, but only as a single person in a small town like Boquete or rural area — with a modest local lifestyle. You would need a very small apartment ($400–$500), buy almost all food locally, use buses, and minimize entertainment. Not recommended for comfort, but possible.',
    },
    {
        q: 'What is the real monthly budget for a couple?',
        a: 'A couple with a comfortable lifestyle (good apartment, mix of local/expat food, some entertainment, healthcare) should budget $1,800–$2,500/month. This includes rent, utilities, food, transport, and modest activities.',
    },
    {
        q: 'Is Panama cheaper than Costa Rica?',
        a: 'Yes. Panama is 20–30% cheaper than Costa Rica. Similar infrastructure and expat amenities, but Panama has lower wages, lower rent, and cheaper dining. Both offer pensionado visas with benefits.',
    },
    {
        q: 'How does Panama City compare to Boquete?',
        a: 'Boquete is 25–35% cheaper overall — smaller town, lower rent, fewer tourist prices, cooler climate. Panama City offers more amenities, nightlife, and urban services. Choice depends on lifestyle preference.',
    },
    {
        q: 'Are there seasonal price changes?',
        a: 'Yes. December–April (dry season) sees higher rental prices in beach towns like Coronado (+10–20%). June–November (rainy season) has lower prices. Off-season rentals can be 20–30% cheaper.',
    },
    {
        q: 'Do the Pensionado visa benefits really save money?',
        a: 'Yes — significantly. 25% off utilities, 50% off healthcare, 50% off dentistry, 10–15% off entertainment. For a couple, these benefits easily add up to $2,000–$3,000/year in savings.',
    },
];

export default async function PanamaCostOfLiving2026Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
    <>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Panama Cost of Living 2026: Housing, Food, Utilities, Full Breakdown',
            description: 'Complete Panama cost of living breakdown 2026. Housing, food, utilities, healthcare, transportation.',
            image: 'https://images.unsplash.com/photo-1579621970563-cbf4b0aab9c5?w=1200&q=80',
            datePublished: '2026-01-01',
            dateModified: '2026-04-04',
            author: { '@type': 'Organization', name: 'VIP Expats Panama', url: 'https://panamarealestatesale.com' },
            publisher: { '@type': 'Organization', name: 'VIP Expats Panama', logo: { '@type': 'ImageObject', url: 'https://panamarealestatesale.com/og-image.jpg' } },
          }),
        }}
      />
        <article className="bg-brand-950 min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80"
                        alt="Panama Cost of Living"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        COST OF LIVING · 2026 REAL DATA
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Panama Cost of Living:<br />Complete Monthly Budget
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Real numbers from people living here. Not marketing copy. Panama City, Boquete, Coronado — all budgets, all lifestyle levels.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        The #1 question expats ask: &quot;How much does it cost to live in Panama?&quot; The honest answer: it depends on where, how you live, and what lifestyle you choose. But the data is clear — Panama is one of the most affordable places in the Western Hemisphere for a first-world lifestyle.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        This is not the glossy travel blog version. These are real monthly budgets based on actual expat spending data, local market prices, and 2026 inflation adjustments. We break down housing, food, healthcare, transport, and entertainment across three popular locations and three lifestyle tiers.
                    </p>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        {[
                            { stat: '$1,500–$2,500', label: 'Couple, comfortable living' },
                            { stat: '45–55%', label: 'Cheaper than USA cities' },
                            { stat: '$600–$1,400', label: 'Rent 1BR (mid-range)' },
                            { stat: '$50–$200', label: 'Doctor visit to specialist' },
                        ].map((s, i) => (
                            <div key={i} className="bg-brand-50 rounded-2xl p-5 text-center border border-brand-100">
                                <div className="text-2xl font-black text-brand-GOLD mb-1">{s.stat}</div>
                                <div className="text-slate-500 text-xs leading-relaxed">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3D City Scene */}
                <PanamaCityScene />

                {/* 3D Cost Comparison Chart */}
                <CostBarChart
                    data={vsPanamaChartData}
                    title="Monthly Budget Comparison: Panama vs US Cities"
                    subtitle="Comfortable couple lifestyle · USD/month"
                    height="280px"
                />

                {/* Cost Summary Table */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <TrendingDown className="inline text-brand-GOLD mr-2" size={28} />
                        Monthly Cost of Living Summary by City
                    </h2>
                    <p className="text-slate-500 mb-6 text-lg leading-relaxed">
                        Quick comparison of three popular expat destinations. Budgets include rent, utilities, food, transport, and modest entertainment.
                    </p>
                    <div className="space-y-4">
                        {costSummary.map((location, i) => (
                            <div key={i} className="card-light rounded-2xl p-7 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                    <h3 className="text-xl font-heading font-black text-brand-950">{location.city}</h3>
                                </div>
                                <p className="text-slate-500 text-sm mb-5 leading-relaxed">{location.desc}</p>
                                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <p className="text-brand-950 font-black text-xs uppercase tracking-widest mb-1">Single, Frugal</p>
                                        <p className="text-brand-GOLD text-lg font-black">{location.single_frugal}</p>
                                    </div>
                                    <div>
                                        <p className="text-brand-950 font-black text-xs uppercase tracking-widest mb-1">Couple, Comfortable</p>
                                        <p className="text-brand-GOLD text-lg font-black">{location.couple_comfortable}</p>
                                    </div>
                                    <div>
                                        <p className="text-brand-950 font-black text-xs uppercase tracking-widest mb-1">Luxury Living</p>
                                        <p className="text-brand-GOLD text-lg font-black">{location.luxury}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* City Budget Chart */}
                <CostBarChart
                    data={cityBudgetChartData}
                    title="Budget vs Comfortable Living by City"
                    subtitle="Monthly couple expenses · USD"
                    height="260px"
                />

                {/* Housing Costs */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Home className="inline text-brand-GOLD mr-2" size={28} />
                        Housing Costs by Location 2026
                    </h2>
                    <p className="text-slate-500 mb-6 text-lg leading-relaxed">
                        Rent and property prices vary dramatically by location and whether you want modern urban amenities or mountain/beach relaxation.
                    </p>
                    <div className="space-y-3">
                        {housingCosts.map((housing, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                                    <h3 className="text-brand-950 font-bold text-sm flex-1">{housing.location}</h3>
                                    <span className="text-brand-GOLD font-black text-lg">{housing.rent || housing.price}</span>
                                </div>
                                <p className="text-slate-500 text-xs leading-relaxed">{housing.detail}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-brand-50/50 rounded-2xl p-8 border border-brand-100">
                        <p className="text-brand-950 font-bold mb-3 text-sm uppercase tracking-wide">Rent vs Buy Analysis:</p>
                        <p className="text-brand-950 text-sm leading-relaxed mb-4">
                            In Panama City, a typical 2BR apartment rents for $1,000–$1,500/month or sells for $150K–$250K. At that price, you break even (~6–8 years rental parity) if you plan to stay 5+ years. For beach locations like Coronado, rental yields are 7–9%, making investment purchases attractive. For pure lifestyle, renting offers flexibility.
                        </p>
                        <p className="text-brand-950 text-sm leading-relaxed">
                            Key: HOA fees for condos (typically $200–$500/mo) are included in our "rent" figures above but add to both rental and ownership costs.
                        </p>
                    </div>
                </section>

                {/* Food & Groceries */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Utensils className="inline text-brand-GOLD mr-2" size={28} />
                        Food & Groceries (Detailed Breakdown)
                    </h2>
                    <p className="text-slate-500 mb-6 text-lg leading-relaxed">
                        Food prices vary based on whether you shop local markets (cheapest) or import-heavy supermarkets (more expensive but familiar).
                    </p>
                    <div className="space-y-3 mb-8">
                        {foodCosts.map((food, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                                    <h3 className="text-brand-950 font-bold text-sm flex-1">{food.category}</h3>
                                    <span className="text-brand-GOLD font-black">{food.cost}</span>
                                </div>
                                <p className="text-slate-500 text-xs leading-relaxed">{food.detail}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-50/50 rounded-2xl p-8 border border-brand-100">
                        <p className="text-brand-950 font-bold mb-3 text-sm uppercase tracking-wide">Realistic Food Budget Examples:</p>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between border-b border-brand-100 pb-2">
                                <p className="text-brand-950">Single person, cook at home mostly</p>
                                <p className="text-brand-GOLD font-bold">$200–$300/month</p>
                            </div>
                            <div className="flex justify-between border-b border-brand-100 pb-2">
                                <p className="text-brand-950">Couple, 50% home cooking, 50% eating out</p>
                                <p className="text-brand-GOLD font-bold">$400–$550/month</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-brand-950">Couple, frequent dining at restaurants/cafes</p>
                                <p className="text-brand-GOLD font-bold">$700–$1,000/month</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Healthcare Costs */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Heart className="inline text-brand-GOLD mr-2" size={28} />
                        Healthcare Costs (Comprehensive)
                    </h2>
                    <p className="text-slate-500 mb-6 text-lg leading-relaxed">
                        Panama&apos;s private healthcare system is a major draw. Prices are 60–80% lower than the USA for the same care quality.
                    </p>
                    <div className="space-y-3 mb-8">
                        {healthcareCosts.map((health, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                                    <h3 className="text-brand-950 font-bold text-sm flex-1">{health.service}</h3>
                                    <span className="text-brand-GOLD font-black">{health.cost}</span>
                                </div>
                                <p className="text-slate-500 text-xs leading-relaxed">{health.detail}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="card-light rounded-2xl p-8 border border-brand-100">
                            <p className="text-white font-bold text-sm uppercase tracking-widest mb-4">Medical Tourism Impact:</p>
                            <p className="text-slate-500 text-xs leading-relaxed mb-4">
                                Thousands of North Americans fly to Panama annually for dental work, cosmetic surgery, and specialist care. Even accounting for airfare, the savings are massive.
                            </p>
                            <p className="text-slate-500 text-xs leading-relaxed">
                                Example: Full mouth dental implants. USA: $30,000–$50,000. Panama: $6,000–$10,000 including airfare and 2-week recovery stay.
                            </p>
                        </div>
                        <div className="card-light rounded-2xl p-8 border border-brand-100">
                            <p className="text-white font-bold text-sm uppercase tracking-widest mb-4">Insurance vs Self-Pay:</p>
                            <p className="text-slate-500 text-xs leading-relaxed mb-4">
                                A couple age 60+ might pay $250–$500/month for private health insurance, or self-insure and pay-per-service. At typical usage (doctor visit: $70, lab: $80), self-pay is often cheaper year-to-year.
                            </p>
                            <p className="text-slate-500 text-xs leading-relaxed">
                                Most retirees opt for catastrophic coverage (~$150–$250/mo) and pay routine visits out-of-pocket.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Transportation */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Navigation className="inline text-brand-GOLD mr-2" size={28} />
                        Transportation Costs
                    </h2>
                    <p className="text-slate-500 mb-6 text-lg leading-relaxed">
                        Panama City has cheap public transit. Beach/mountain locations require a car for convenience.
                    </p>
                    <div className="space-y-3 mb-8">
                        {transportCosts.map((transport, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                                    <h3 className="text-brand-950 font-bold text-sm flex-1">{transport.item}</h3>
                                    <span className="text-brand-GOLD font-black">{transport.cost}</span>
                                </div>
                                <p className="text-slate-500 text-xs leading-relaxed">{transport.detail}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-50/50 rounded-2xl p-8 border border-brand-100">
                        <p className="text-brand-950 font-bold mb-3 text-sm uppercase tracking-wide">Monthly Transport Budget Examples:</p>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between border-b border-brand-100 pb-2">
                                <p className="text-brand-950">Panama City only (buses + occasional Uber)</p>
                                <p className="text-brand-GOLD font-bold">$50–$100/month</p>
                            </div>
                            <div className="flex justify-between border-b border-brand-100 pb-2">
                                <p className="text-brand-950">Car owner (fuel, insurance, maintenance)</p>
                                <p className="text-brand-GOLD font-bold">$300–$500/month</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-brand-950">Frequent intercity travel (Coronado/Boquete)</p>
                                <p className="text-brand-GOLD font-bold">$200–$400/month</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Utilities */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Zap className="inline text-brand-GOLD mr-2" size={28} />
                        Utilities (Monthly)
                    </h2>
                    <div className="space-y-3 mb-8">
                        {utilitiesCosts.map((util, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                                    <h3 className="text-brand-950 font-bold text-sm flex-1">{util.utility}</h3>
                                    <span className="text-brand-GOLD font-black">{util.cost}</span>
                                </div>
                                <p className="text-slate-500 text-xs leading-relaxed">{util.detail}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-50/50 rounded-2xl p-8 border border-brand-100">
                        <p className="text-brand-950 font-bold mb-3 text-sm uppercase tracking-wide">Pensionado Advantage:</p>
                        <p className="text-brand-950 text-sm leading-relaxed">
                            With a Pensionado visa, your utilities drop 25% automatically. That $150/month electricity bill becomes $112. Over a year: $456 saved. Multiply across 8–10 years: that&apos;s real money.
                        </p>
                    </div>
                </section>

                {/* Entertainment & Lifestyle */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Entertainment & Lifestyle Costs
                    </h2>
                    <p className="text-slate-500 mb-6 text-lg leading-relaxed">
                        Expat social life in Panama is vibrant. Here&apos;s what common activities cost.
                    </p>
                    <div className="space-y-3 mb-8">
                        {entertainmentCosts.map((ent, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                                    <h3 className="text-brand-950 font-bold text-sm flex-1">{ent.activity}</h3>
                                    <span className="text-brand-GOLD font-black">{ent.cost}</span>
                                </div>
                                <p className="text-slate-500 text-xs leading-relaxed">{ent.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Panama vs USA */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Panama vs USA: Direct Cost Comparison
                    </h2>
                    <p className="text-slate-500 mb-6 text-lg leading-relaxed">
                        How does Panama stack up against major US cities? Panama is dramatically cheaper.
                    </p>
                    <div className="space-y-3 mb-8">
                        {usComparison.map((comp, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100 flex items-start gap-4">
                                <div className="text-brand-GOLD font-black text-2xl flex-shrink-0">−</div>
                                <div className="flex-1">
                                    <h3 className="text-brand-950 font-bold text-sm mb-1">{comp.city}</h3>
                                    <p className="text-slate-500 text-xs leading-relaxed mb-2">{comp.detail}</p>
                                    <p className="text-brand-GOLD font-bold text-sm">{comp.savings}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-GOLD/10 rounded-2xl p-8 border border-brand-GOLD/30">
                        <p className="text-brand-950 font-bold mb-3 text-sm uppercase tracking-wide">Bottom Line:</p>
                        <p className="text-brand-950 text-sm leading-relaxed">
                            A couple living comfortably in Panama City ($2,000–$2,500/month) would need $3,500–$4,500/month in Miami, $4,000–$5,500/month in New York, or $3,200–$4,200/month in Los Angeles. Over 20 years of retirement, that&apos;s $300,000–$600,000 in savings — with equal or better quality of life.
                        </p>
                    </div>
                </section>

                {/* Real Budget Examples */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Real Monthly Budget Examples
                    </h2>
                    <p className="text-slate-500 mb-6 text-lg leading-relaxed">
                        Three realistic scenarios based on actual expat spending data:
                    </p>
                    <div className="space-y-6">
                        {budgetExamples.map((example, i) => (
                            <div key={i} className="card-light rounded-2xl p-8 border border-brand-100">
                                <h3 className="text-white font-heading font-black text-lg mb-6 uppercase tracking-wider">{example.scenario}</h3>
                                <div className="space-y-2 mb-6 border-b border-brand-100/30 pb-6">
                                    {example.details.map((detail, j) => (
                                        <div key={j} className="flex justify-between items-center text-sm">
                                            <span className="text-slate-500">{detail.item}</span>
                                            <span className="text-slate-400 font-bold">{detail.cost}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-white font-bold uppercase tracking-widest text-xs">Total Monthly</p>
                                    <p className="text-brand-GOLD font-black text-2xl">{example.total}</p>
                                </div>
                                <p className="text-slate-500 text-xs leading-relaxed italic">{example.note}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Hidden Costs */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Hidden Costs New Expats Miss
                    </h2>
                    <p className="text-slate-500 mb-6 text-lg leading-relaxed">
                        Panama is cheap, but there are costs that surprise new arrivals. Plan accordingly:
                    </p>
                    <div className="space-y-3">
                        {hiddenCosts.map((hidden, i) => (
                            <div key={i} className="card-light rounded-2xl p-6 border border-brand-100">
                                <h3 className="text-brand-950 font-bold text-sm mb-2 uppercase tracking-wide">{hidden.cost}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{hidden.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <HelpCircle className="inline text-brand-GOLD mr-2" size={28} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqItems.map((item, i) => (
                            <details key={i} className="card-light rounded-xl border border-brand-100 group">
                                <summary className="flex items-center justify-between cursor-pointer p-6">
                                    <h3 className="text-brand-950 font-bold text-sm leading-relaxed pr-4">{item.q}</h3>
                                    <span className="text-brand-GOLD font-black text-xl flex-shrink-0">+</span>
                                </summary>
                                <div className="px-6 pb-6 border-t border-brand-100/30">
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Final Section */}
                <section className="reveal-on-scroll bg-brand-50/50 rounded-2xl p-8 border border-brand-100">
                    <h3 className="text-brand-950 font-heading font-black text-xl mb-4 uppercase italic">The Reality Check:</h3>
                    <p className="text-brand-950 text-sm leading-relaxed mb-4">
                        Panama is genuinely affordable — but it is not free. A comfortable lifestyle still requires budget discipline. You cannot spend recklessly and expect to save 50%. But if you live modestly (rent an apartment, cook mostly at home, use public transit or share cars), you can absolutely live on 40–60% of what you would spend in a major US city.
                    </p>
                    <p className="text-brand-950 text-sm leading-relaxed">
                        The sweet spot for most expats: $1,800–$2,500/month for a couple. That covers rent, food, utilities, healthcare, transport, and regular entertainment. Add the Pensionado visa benefits, and that number drops further. Add zero income tax on foreign earnings, and you have a formula that works.
                    </p>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-white p-10 rounded-3xl border-t-4 border-brand-GOLD text-center">
                    <h3 className="text-white font-heading text-3xl font-bold mb-4 uppercase italic tracking-tighter">
                        Ready to Calculate Your Panama Budget?
                    </h3>
                    <p className="text-brand-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Let us help you estimate your real monthly costs based on your lifestyle, location preference, and current situation. Our relocation team has the on-the-ground data you need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
                        >
                            Book Free Lifestyle Consultation <ArrowRight size={16} />
                        </Link>
                        <Link
                            href={`/${lang}/quiz`}
                            className="inline-flex items-center gap-3 border border-brand-GOLD/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:border-brand-GOLD hover:text-brand-GOLD transition-all"
                        >
                            Take Our Relocation Quiz
                        </Link>
                    </div>
                </section>

                {/* Internal links */}
                <section className="grid sm:grid-cols-3 gap-4 reveal-on-scroll">
                    {[
                        { label: 'Panama Tax Benefits for Foreigners', href: '/en/blog/panama-tax-benefits-foreigners-2026' },
                        { label: 'Best Neighborhoods to Live in Panama City', href: '/en/blog/best-neighborhoods-panama-city-expats' },
                        { label: 'How to Move to Panama: Step-by-Step Guide', href: '/en/blog/how-to-move-to-panama' },
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
    </>
    );
}
