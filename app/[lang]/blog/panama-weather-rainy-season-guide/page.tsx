import type { Metadata } from 'next';
import Link from 'next/link';
import { Cloud, Sun, Droplets, MapPin, AlertCircle, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Panama Weather 2026: Month-by-Month Guide to Dry Season, Rain & What to Expect',
    description:
        'Complete guide to Panama\'s climate: dry season (verano), rainy season (invierno), regional differences, humidity, what to pack. Best months to visit or move.',
    keywords:
        'panama weather, panama rainy season, panama climate, panama dry season, panama weather expats, invierno panama, verano panama, panama humidity',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/panama-weather-rainy-season-guide',
    },
    openGraph: {
        title: 'Panama Weather 2026: Month-by-Month Guide to Dry Season, Rain & What to Expect',
        description:
            'Learn about Panama\'s climate patterns, seasonal changes, and what weather to expect in different regions and months.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/panama-weather-rainy-season-guide',
    },
};

const monthlyWeather = [
    {
        month: 'January',
        season: 'Dry (Verano)',
        temp: '85–90°F',
        humidity: '55%',
        rainfall: 'Minimal',
        sunlight: 'Abundant',
        description: 'Best month of the year. Perfect weather, low humidity, sunshine all day.',
        activity: '⭐⭐⭐⭐⭐ Excellent',
        notes: 'Tourist high season. Peak prices. New Year festivities.',
    },
    {
        month: 'February',
        season: 'Dry (Verano)',
        temp: '85–90°F',
        humidity: '55%',
        rainfall: 'Minimal',
        sunlight: 'Abundant',
        description: 'Same excellent conditions as January. Still high season but slightly less crowded.',
        activity: '⭐⭐⭐⭐⭐ Excellent',
        notes: 'Carnival celebrations (late Feb). Great for outdoor activities.',
    },
    {
        month: 'March',
        season: 'Dry (Verano)',
        temp: '87–93°F',
        humidity: '60%',
        rainfall: 'Minimal',
        sunlight: 'Abundant',
        description: 'Getting hotter but still very dry. Humidity rises slightly but remains comfortable.',
        activity: '⭐⭐⭐⭐ Very Good',
        notes: 'Heat increasing. Boquete becomes more attractive for its cool climate.',
    },
    {
        month: 'April',
        season: 'End of Dry',
        temp: '90–95°F+',
        humidity: '65%',
        rainfall: 'Occasional',
        sunlight: 'Abundant',
        description: 'End of dry season. Can be extremely hot in Panama City. Early rains arrive. Boquete much more comfortable.',
        activity: '⭐⭐⭐ Good',
        notes: 'Hottest month. Air conditioning essential. Cheaper accommodations as low season begins.',
    },
    {
        month: 'May',
        season: 'Rainy (Invierno)',
        temp: '85–90°F',
        humidity: '75%',
        rainfall: 'Moderate (afternoons)',
        sunlight: 'Mornings mostly sunny',
        description: 'Rains begin on Pacific side. Afternoons see thunderstorms, mornings remain sunny and clear.',
        activity: '⭐⭐⭐⭐ Very Good',
        notes: 'Lush green landscape. Much less crowded. Rates drop 20–30%.',
    },
    {
        month: 'June',
        season: 'Rainy (Invierno)',
        temp: '82–88°F',
        humidity: '80%',
        rainfall: 'Heavy',
        sunlight: 'Mornings mostly sunny',
        description: 'Full rainy season. Afternoon/evening downpours. Mornings frequently clear and bright.',
        activity: '⭐⭐⭐ Good',
        notes: 'Not all-day rain. Tropical showers. Incredible lush greenery. Best discounts on rent and hotels.',
    },
    {
        month: 'July',
        season: 'Rainy (Invierno)',
        temp: '82–88°F',
        humidity: '80%',
        rainfall: 'Heavy',
        sunlight: 'Mornings mostly sunny',
        description: 'Peak rainy season. Similar to June. Most rain falls afternoon/evening, not mornings.',
        activity: '⭐⭐⭐ Good',
        notes: 'Plan outdoor activities for mornings. Caribbean side (Bocas) enters dry season.',
    },
    {
        month: 'August',
        season: 'Rainy (Invierno)',
        temp: '82–88°F',
        humidity: '80%',
        rainfall: 'Heavy',
        sunlight: 'Mornings mostly sunny',
        description: 'Mid-rainy season. Afternoon storms. Morning sunshine common. Lush environment.',
        activity: '⭐⭐⭐ Good',
        notes: 'Caribbean is drier now (opposite pattern from Pacific). Best time for Bocas del Toro.',
    },
    {
        month: 'September',
        season: 'Rainy (Invierno)',
        temp: '82–87°F',
        humidity: '85%',
        rainfall: 'Very Heavy',
        sunlight: 'Mornings mostly sunny',
        description: 'Wettest month. More afternoon rain, but mornings still clear. Temperature drops slightly.',
        activity: '⭐⭐ Fair',
        notes: 'Peak rain on Pacific side. Still mostly dry in mornings. Caribbean very dry now.',
    },
    {
        month: 'October',
        season: 'Rainy (Invierno)',
        temp: '82–87°F',
        humidity: '85%',
        rainfall: 'Very Heavy',
        sunlight: 'Mornings mostly sunny',
        description: 'Continuing heavy rain pattern. Afternoon storms frequent but mornings remain mostly clear.',
        activity: '⭐⭐ Fair',
        notes: 'Very wet. Caribbean entering drier transition. Lowest accommodation prices of year.',
    },
    {
        month: 'November',
        season: 'Transitional',
        temp: '84–88°F',
        humidity: '75%',
        rainfall: 'Decreasing',
        sunlight: 'Increasing',
        description: 'Transition month. Fewer rains than Sept/Oct. Caribbean side still rainy (opposite pattern).',
        activity: '⭐⭐⭐ Good',
        notes: 'Dry season begins to emerge on Pacific side. Good balance of fewer tourists and improving weather.',
    },
    {
        month: 'December',
        season: 'Dry (Verano)',
        temp: '85–90°F',
        humidity: '60%',
        rainfall: 'Minimal',
        sunlight: 'Abundant',
        description: 'Dry season returns. Clear skies, lower humidity. Perfect weather returns. Holiday season begins.',
        activity: '⭐⭐⭐⭐⭐ Excellent',
        notes: 'Year-end festivals. Tourism season picks up. Prices increase. Holiday travel busy.',
    },
];

const regionalDifferences = [
    {
        region: 'Panama City (Pacific)',
        climate: 'Classic two-season pattern',
        dryTemp: '85–93°F, 50–65% humidity',
        rainyTemp: '82–88°F, 75–90% humidity',
        notes: 'Golden light in dry season. Humid with afternoon storms in rainy season. City is more humid than highlands due to density.',
        bestFor: 'Modern living, urban amenities, international healthcare',
    },
    {
        region: 'Boquete/Chiriqui Highlands',
        climate: 'Cool year-round with cloud forest character',
        dryTemp: '65–78°F even in dry season',
        rainyTemp: '65–75°F with occasional mist/drizzle',
        notes: 'Even in "dry season" occasional mist and drizzle. No AC needed. Light layers recommended year-round. Lush and green always.',
        bestFor: 'Those seeking cooler climate, retirees, expats avoiding heat',
    },
    {
        region: 'Bocas del Toro (Caribbean)',
        climate: 'OPPOSITE pattern from Pacific — two short dry seasons',
        dryTemp: 'July, Aug, Sept, Oct driest (80–88°F)',
        rainyTemp: 'Dec, Jan driest; May–Nov can be wet',
        notes: 'Completely different pattern than Panama City. Driest in mid-year (opposite the Pacific). Year-round warm (80–88°F). Tropical and humid always.',
        bestFor: 'Beach lifestyle, diving, those who want alternative seasonal pattern',
    },
    {
        region: 'Coronado/Pacific Coast',
        climate: 'Same as Panama City pattern but with ocean breeze',
        dryTemp: '85–93°F, slightly lower humidity than city due to breeze',
        rainyTemp: '82–88°F with afternoon storms',
        notes: 'Same two-season pattern as city but coastal breeze provides relief. Beach access. Gated community lifestyle.',
        bestFor: 'Beach retirees, those wanting warmer weather than Boquete',
    },
];

const faqs = [
    {
        q: 'Is Panama in the hurricane belt?',
        a: 'No. Panama is SOUTH of the Atlantic hurricane belt and EAST of Pacific hurricane zones. This is a major advantage over Florida, Mexico, or the Caribbean. While other regions deal with annual hurricane seasons, Panama has no hurricanes. Zero hurricane risk.',
    },
    {
        q: 'Can I live comfortably in Panama during rainy season?',
        a: 'Yes, absolutely. The "rainy season" (May–November) doesn\'t mean it rains all day. Typically, mornings are sunny and clear, with rain arriving in afternoons/evenings. Many expats prefer rainy season because it\'s less crowded, much cheaper (20–30% lower rent and hotel rates), and incredibly lush. Pack a rain jacket or poncho, schedule outdoor activities for mornings, and you\'ll be fine.',
    },
    {
        q: 'Why do people choose Boquete if it\'s cool?',
        a: 'Most expats who choose Boquete do so precisely because of the cool climate (65–78°F year-round). It\'s ideal for those who dislike tropical heat and humidity. No air conditioning needed. Light layers work year-round. The cloud forest environment is beautiful. However, if you love warm beach weather, Panama City or Coronado is better.',
    },
    {
        q: 'What about humidity?',
        a: 'Dry season humidity: 50–65%. Rainy season: 75–90%. Panama City is more humid than the highlands because of urban density and the bay. Boquete is much less humid due to elevation. If humidity bothers you, Boquete or higher elevations are your answer.',
    },
    {
        q: 'What should I pack for moving to Panama?',
        a: 'Light, breathable clothing year-round. Shorts, T-shirts, lightweight dresses. Layers for Boquete (65–75°F). A rain jacket or poncho (umbrellas are useless in sideways tropical rain). Sunscreen (more expensive than US prices). Good walking shoes (streets flood in heavy rain). One smart-casual outfit for restaurants/business. Optional: light fleece or cardigan for AC-heavy malls (they blast AC cold). Do NOT bring winter coats or heavy sweaters.',
    },
];

export default async function PanamaWeatherPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <article className="bg-white min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="bg-brand-50 py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=1600&q=80"
                        alt="Panama Weather and Tropical Landscape"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">
                        WEATHER & CLIMATE GUIDE · 2026 EDITION
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-brand-950 mb-8 leading-tight">
                        Panama Weather 2026:<br />Month-by-Month Guide
                    </h1>
                    <p className="text-xl text-brand-300 leading-relaxed font-medium max-w-2xl mx-auto">
                        Everything you need to know about Panama's climate: dry season, rainy season, regional differences, humidity levels, and what to expect throughout the year.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Intro */}
                <section className="reveal-on-scroll">
                    <p className="text-2xl font-semibold text-white border-l-4 border-brand-GOLD pl-6 leading-relaxed">
                        Panama has two main seasons: a dry season (Verano) from December to April, and a rainy season (Invierno) from May to November. But the reality is more nuanced than a simple "wet" or "dry" label.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        Most of the rain falls in afternoons and evenings, with mornings remaining sunny and clear. The country is outside the hurricane belt entirely, making it uniquely safe compared to Mexico, Florida, or the Caribbean. Regional differences are dramatic: Boquete is cool year-round, Bocas del Toro follows a reversed pattern from the Pacific side, and Panama City offers classic tropical weather with intense humidity.
                    </p>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                        This guide breaks down every month, regional variations, humidity levels, and what expats actually prefer. Whether you're planning a visit, timing a move, or deciding where to settle long-term, you'll find the details here.
                    </p>
                </section>

                {/* Two Seasons */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Sun className="inline text-brand-GOLD mr-2" size={28} />
                        The Two Seasons: Verano & Invierno
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                            <h3 className="text-2xl font-heading font-bold text-brand-950 mb-4 flex items-center gap-2">
                                <Sun className="text-brand-GOLD" size={24} />
                                Dry Season (Verano)
                            </h3>
                            <p className="text-slate-700 font-medium mb-3">December – April</p>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Clear skies, abundant sunshine</li>
                                <li>• Humidity: 50–65%</li>
                                <li>• Temperatures: 85–95°F (varies by region)</li>
                                <li>• Little to no rain</li>
                                <li>• Golden light for photography</li>
                                <li>• Tourist high season</li>
                                <li>• Higher accommodation prices</li>
                                <li>• Best for outdoor activities</li>
                            </ul>
                        </div>
                        <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                            <h3 className="text-2xl font-heading font-bold text-brand-950 mb-4 flex items-center gap-2">
                                <Cloud className="text-brand-GOLD" size={24} />
                                Rainy Season (Invierno)
                            </h3>
                            <p className="text-slate-700 font-medium mb-3">May – November</p>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Afternoon/evening thunderstorms common</li>
                                <li>• Humidity: 75–90%</li>
                                <li>• Temperatures: 82–88°F (slightly cooler)</li>
                                <li>• Heavy rainfall (mostly afternoons)</li>
                                <li>• Mornings often sunny and clear</li>
                                <li>• Dramatic lush green landscape</li>
                                <li>• 20–30% lower accommodation costs</li>
                                <li>• Far fewer tourists</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Month by Month */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Droplets className="inline text-brand-GOLD mr-2" size={28} />
                        Month-by-Month Weather Breakdown
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-brand-950 text-white">
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Month</th>
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Season</th>
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Temperature</th>
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Humidity</th>
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Rain</th>
                                    <th className="border border-brand-600 px-4 py-3 text-left font-bold">Sunlight</th>
                                </tr>
                            </thead>
                            <tbody>
                                {monthlyWeather.map((month, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-50'}>
                                        <td className="border border-brand-100 px-4 py-3 font-semibold text-brand-950">{month.month}</td>
                                        <td className="border border-brand-100 px-4 py-3 text-slate-700">{month.season}</td>
                                        <td className="border border-brand-100 px-4 py-3 text-slate-700">{month.temp}</td>
                                        <td className="border border-brand-100 px-4 py-3 text-slate-700">{month.humidity}</td>
                                        <td className="border border-brand-100 px-4 py-3 text-slate-700">{month.rainfall}</td>
                                        <td className="border border-brand-100 px-4 py-3 text-slate-700">{month.sunlight}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8 bg-brand-50 rounded-lg p-6 border border-brand-100">
                        <h4 className="font-heading font-bold text-brand-950 mb-4 text-lg">What This Means for Expats:</h4>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex gap-3">
                                <span className="text-brand-GOLD font-bold">✓</span>
                                <span><strong>January–February:</strong> Best months. Perfect weather, optimal prices for planning to visit.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-GOLD font-bold">✓</span>
                                <span><strong>March–April:</strong> Still dry but getting hot. Last chance before rainy season. Prices begin to drop.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-GOLD font-bold">✓</span>
                                <span><strong>May–November:</strong> Rainy season. But NOT all-day rain. Mornings are typically clear. Much cheaper. Fewer tourists. Lush green landscape.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-GOLD font-bold">✓</span>
                                <span><strong>December:</strong> Dry season returns. Year-end holidays. Prices peak again.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Regional Differences */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <MapPin className="inline text-brand-GOLD mr-2" size={28} />
                        Regional Differences: Your Location Matters
                    </h2>
                    <p className="text-slate-600 mb-8 text-lg">
                        Panama's small size hides dramatic climate variations. Where you choose to live will fundamentally change your weather experience.
                    </p>
                    <div className="space-y-6">
                        {regionalDifferences.map((region, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-8 border-l-4 border-brand-GOLD">
                                <h3 className="text-2xl font-heading font-bold text-brand-950 mb-2">{region.region}</h3>
                                <p className="text-brand-600 font-semibold mb-4">{region.climate}</p>
                                <div className="grid md:grid-cols-2 gap-6 mb-4">
                                    <div>
                                        <p className="text-sm font-bold text-brand-950 uppercase mb-1">Dry Season</p>
                                        <p className="text-slate-700">{region.dryTemp}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-brand-950 uppercase mb-1">Rainy Season</p>
                                        <p className="text-slate-700">{region.rainyTemp}</p>
                                    </div>
                                </div>
                                <p className="text-slate-700 mb-3"><strong>Notes:</strong> {region.notes}</p>
                                <p className="text-slate-700"><strong>Best For:</strong> <span className="text-brand-600 font-semibold">{region.bestFor}</span></p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Humidity */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        Understanding Humidity
                    </h2>
                    <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                        <p className="text-slate-700 text-lg leading-relaxed mb-6">
                            Panama is tropical, so humidity is always part of the equation. However, humidity varies significantly by season and location:
                        </p>
                        <ul className="space-y-4 text-slate-700">
                            <li className="flex gap-3">
                                <span className="text-brand-GOLD font-bold text-xl">•</span>
                                <span><strong>Dry Season Humidity:</strong> 50–65%. This is quite comfortable — similar to Miami in January or Austin in spring. Most people feel fine without air conditioning in this range, though AC makes it nicer in Panama City.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-GOLD font-bold text-xl">•</span>
                                <span><strong>Rainy Season Humidity:</strong> 75–90%. High, but still bearable, especially with a fan or AC. Feels like a humid summer in the Southern US after 2 PM.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-brand-GOLD font-bold text-xl">•</span>
                                <span><strong>Panama City vs. Boquete:</strong> The city is more humid due to urban density and the Panama Bay. Boquete is significantly less humid due to elevation (3,500+ feet). If humidity bothers you, Boquete is the answer.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Hurricane Zone */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <AlertCircle className="inline text-brand-GOLD mr-2" size={28} />
                        Panama Is NOT in the Hurricane Belt
                    </h2>
                    <div className="bg-brand-50 rounded-lg p-8 border-l-4 border-brand-GOLD">
                        <p className="text-slate-700 text-lg leading-relaxed mb-4">
                            This is one of Panama's greatest advantages: <strong>Panama is outside the Atlantic hurricane belt and east of Pacific hurricane zones.</strong>
                        </p>
                        <p className="text-slate-700 text-lg leading-relaxed mb-4">
                            While Miami, Puerto Rico, Mexico, and the Caribbean islands deal with annual hurricane seasons (June–November), Panama experiences zero hurricane risk. The country has never recorded a hurricane in modern history.
                        </p>
                        <p className="text-slate-700 text-lg leading-relaxed">
                            This is a major advantage for long-term peace of mind, insurance costs, and property safety. Expats choosing between Panama and Florida, Mexico, or Caribbean locations often cite this as a deciding factor.
                        </p>
                    </div>
                </section>

                {/* Rainy Season Tips */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <Cloud className="inline text-brand-GOLD mr-2" size={28} />
                        Surviving & Thriving During Rainy Season
                    </h2>
                    <div className="space-y-6 mt-8">
                        <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                            <h3 className="text-xl font-heading font-bold text-brand-950 mb-4">The Reality of Rainy Season</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                The worst misconception: "It rains all day." It doesn't. Typically, rainy season means mornings are sunny and clear, with heavy afternoon/evening thunderstorms. You can plan outdoor activities for 7 AM–1 PM and remain perfectly dry. Many expats prefer rainy season because:
                            </p>
                            <ul className="space-y-2 text-slate-700">
                                <li>• Accommodations are 20–30% cheaper (hotels, condos, rental apartments)</li>
                                <li>• Far fewer tourists — you get the real Panama</li>
                                <li>• Dramatic lush green landscape</li>
                                <li>• Cooler temperatures (82–88°F vs 90–95°F in dry season)</li>
                                <li>• Perfect for those avoiding heat and crowds</li>
                            </ul>
                        </div>
                        <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                            <h3 className="text-xl font-heading font-bold text-brand-950 mb-4">Packing & Activity Tips</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex gap-3">
                                    <span className="text-brand-GOLD font-bold">→</span>
                                    <span><strong>Rain Jacket or Poncho:</strong> Essential. Umbrellas are useless in sideways tropical rain. A lightweight rain jacket or poncho packs small and works perfectly.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-brand-GOLD font-bold">→</span>
                                    <span><strong>Schedule Activities for Mornings:</strong> 7 AM–1 PM is typically dry. Plan hiking, city tours, beach days before noon.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-brand-GOLD font-bold">→</span>
                                    <span><strong>Afternoon Activities:</strong> Use rainy afternoons for museums, air-conditioned malls, restaurants, or indoor work.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-brand-GOLD font-bold">→</span>
                                    <span><strong>Street Flooding in City:</strong> Heavy rains cause street flooding in low-lying Panama City areas (El Chorrillo, Curundu). Avoid driving through flooded streets. Don't use drainage tunnels during heavy rain.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-brand-GOLD font-bold">→</span>
                                    <span><strong>Good Shoes:</strong> Bring waterproof or water-friendly shoes. Flip-flops alone aren't ideal during heavy rain.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Packing */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        What to Pack for Panama's Climate
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                            <h3 className="text-xl font-heading font-bold text-brand-950 mb-4 text-green-700">DO Bring</h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li>✓ Light cotton/linen shirts (5–7)</li>
                                <li>✓ Shorts (3–4 pairs)</li>
                                <li>✓ Lightweight dresses/skirts</li>
                                <li>✓ Swimsuits (2–3)</li>
                                <li>✓ Rain jacket/poncho</li>
                                <li>✓ Comfortable walking shoes</li>
                                <li>✓ Flip-flops/sandals</li>
                                <li>✓ Wide-brimmed hat</li>
                                <li>✓ Sunglasses</li>
                                <li>✓ Light cardigan (for AC in malls)</li>
                                <li>✓ Smart-casual outfit (restaurants/business)</li>
                                <li>✓ One long-sleeve for sun protection</li>
                            </ul>
                        </div>
                        <div className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                            <h3 className="text-xl font-heading font-bold text-brand-950 mb-4 text-red-700">DON'T Bring</h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li>✗ Winter coats</li>
                                <li>✗ Heavy sweaters</li>
                                <li>✗ Snow boots</li>
                                <li>✗ Wool clothing</li>
                                <li>✗ Thick jeans (too hot)</li>
                                <li>✗ Long sleeves (too warm daily)</li>
                                <li>✗ Formal suit jackets</li>
                                <li>✗ Thermal underwear</li>
                                <li>✗ Heavy down jackets</li>
                            </ul>
                            <p className="text-slate-600 text-xs mt-4 italic">
                                Exception: If moving to Boquete, add 2–3 light sweaters or fleece layers for cool mornings/evenings.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="reveal-on-scroll">
                    <h2 className="text-white text-3xl font-heading font-bold mb-8 uppercase tracking-tighter italic border-b border-brand-GOLD/30 pb-4">
                        <HelpCircle className="inline text-brand-GOLD mr-2" size={28} />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-brand-50 rounded-lg p-8 border border-brand-100">
                                <h3 className="text-lg font-heading font-bold text-brand-950 mb-3">{faq.q}</h3>
                                <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="reveal-on-scroll bg-brand-950 rounded-lg p-12 text-center">
                    <h2 className="text-white text-3xl font-heading font-bold mb-4">Ready to Experience Panama's Climate?</h2>
                    <p className="text-brand-300 text-lg mb-8">
                        Schedule a consultation with our team to discuss the best regions and timing for your move.
                    </p>
                    <Link
                        href={`/${lang}/contacto`}
                        className="inline-block bg-brand-GOLD text-brand-950 font-heading font-bold py-4 px-8 rounded-lg hover:bg-brand-GOLD/90 transition"
                    >
                        Contact Our Team
                    </Link>
                </section>

            </div>
        </article>
    );
}
