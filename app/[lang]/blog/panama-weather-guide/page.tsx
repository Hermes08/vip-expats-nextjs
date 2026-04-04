import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Cloud, Sun, Droplets } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Panama Weather Guide 2026: Climate, Seasons, Temperature Info',
    description: 'Panama weather guide. Rainy season, dry season, temperature, humidity, best time to visit.',
    keywords: 'Panama weather, Panama climate, Panama rainy season, Panama temperature, weather in Panama',
    alternates: {
        canonical: 'https://panamarealestatesale.com/en/blog/panama-weather-guide',
        languages: {
            'en': 'https://panamarealestatesale.com/en/blog/panama-weather-guide',
            'es': 'https://panamarealestatesale.com/es/blog/panama-weather-guide',
            'pt': 'https://panamarealestatesale.com/pt/blog/panama-weather-guide',
            'de': 'https://panamarealestatesale.com/de/blog/panama-weather-guide',
        },
    },
    openGraph: {
        title: 'Panama Weather Guide 2026: Climate, Seasons, Temperature Info',
        description: 'Panama weather guide. Rainy season, dry season, temperature, humidity, best time to visit.',
        type: 'article',
        url: 'https://panamarealestatesale.com/en/blog/panama-weather-guide',
        images: [{ url: 'https://images.unsplash.com/photo-1456496169494-63e8e1c5aaa3?w=1200&q=80', width: 1200, height: 630, alt: 'Panama weather' }],
        locale: 'en_US',
        siteName: 'VIP Expats Panama',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Panama Weather Guide 2026: Climate, Seasons, Temperature Info',
        description: 'Panama weather guide. Rainy season, dry season, temperature, humidity, best time to visit.',
        images: ['https://images.unsplash.com/photo-1456496169494-63e8e1c5aaa3?w=1200&q=80'],
    },
};

const climateCards = [
  {
    icon: Sun,
    title: 'Dry Season: Dec–Apr',
    subtitle: 'Pacific Side',
    description:
      'Perfect weather on the Pacific coast. Sunny days, cool nights, minimal rainfall. This is peak season for tourism and the best time for beach activities.',
  },
  {
    icon: Droplets,
    title: 'Rainy Season: May–Nov',
    subtitle: 'Green & Fewer Crowds',
    description:
      'Afternoon showers on the Pacific side with lush green landscapes. Fewer tourists, lower prices, and ideal for mountain regions. Caribbean has its own pattern.',
  },
  {
    icon: Cloud,
    title: 'Caribbean Climate',
    subtitle: 'Year-Round Warm',
    description:
      'Warm tropical year-round (75–85°F). Driest months: Feb–Mar and Sep–Oct. Heavy rain May–Jun and Nov–Dec. Different pattern than Pacific side.',
  },
  {
    icon: Sun,
    title: 'Year-Round Temps',
    subtitle: '75–90°F Average',
    description:
      'No winter. No extreme heat. Consistent tropical warmth makes Panama comfortable every month of the year. Only variable is rainfall timing.',
  },
];

const monthlyData = [
  {
    month: 'January',
    pacific: 'Dry',
    caribbean: 'Mix',
    boquete: 'Cool 60s',
    recommendation: '⭐ Best for Pacific',
  },
  {
    month: 'February',
    pacific: 'Dry',
    caribbean: 'Driest',
    boquete: 'Cool',
    recommendation: '⭐⭐ Peak Season',
  },
  {
    month: 'March',
    pacific: 'Dry',
    caribbean: 'Driest',
    boquete: 'Cool',
    recommendation: '⭐⭐ Peak Season',
  },
  {
    month: 'April',
    pacific: 'Dry End',
    caribbean: 'Mix',
    boquete: 'Cool',
    recommendation: '⭐ Great Value',
  },
  {
    month: 'May',
    pacific: 'Start Rain',
    caribbean: 'Rain',
    boquete: 'Mild',
    recommendation: 'Good Caribbean',
  },
  {
    month: 'June',
    pacific: 'Rain',
    caribbean: 'Rain',
    boquete: 'Cool',
    recommendation: 'Budget Travel',
  },
  {
    month: 'July',
    pacific: 'Rain',
    caribbean: 'Rain',
    boquete: 'Cool',
    recommendation: 'Budget Travel',
  },
  {
    month: 'August',
    pacific: 'Rain',
    caribbean: 'Rain',
    boquete: 'Cool',
    recommendation: 'Budget Travel',
  },
  {
    month: 'September',
    pacific: 'Rain',
    caribbean: 'Dry!',
    boquete: 'Cool',
    recommendation: '⭐ Caribbean Month',
  },
  {
    month: 'October',
    pacific: 'Rain',
    caribbean: 'Dry!',
    boquete: 'Cool',
    recommendation: '⭐ Caribbean Month',
  },
  {
    month: 'November',
    pacific: 'Rain',
    caribbean: 'Mix',
    boquete: 'Cool',
    recommendation: 'Transition',
  },
  {
    month: 'December',
    pacific: 'Dry Starts',
    caribbean: 'Mix',
    boquete: 'Cool',
    recommendation: '⭐ Holiday Season',
  },
];

const regions = [
  {
    name: 'Panama City & Pacific Coast',
    icon: Sun,
    shortDesc: 'Urban & Beach',
    fullDesc:
      'Panama City averages 80–90°F year-round. Dry season runs December through April with blue skies and sunny days — perfect for outdoor activities and beach weekends. Rainy season (May–November) brings warm afternoons with showers, typically 2–3 hours in the afternoon, leaving mornings and evenings clear. The ocean stays warm (81°F+) year-round, making swimming comfortable any month.',
    highlights: [
      'Dry season: Dec–Apr (best beach weather)',
      'Rainy season: May–Nov (warm, afternoon showers only)',
      'Ocean temp: 81–84°F year-round',
      'City offers indoor activities on rainy days',
      'Perfect for families and retirees',
    ],
    bestTime: 'December–April',
  },
  {
    name: 'Bocas del Toro (Caribbean)',
    icon: Droplets,
    shortDesc: 'Tropical Islands',
    fullDesc:
      'Bocas del Toro stays warm year-round (75–85°F) but follows a unique rain pattern. The driest windows are February–March and September–October — ideal for diving, snorkeling, and island hopping. Heavy rain falls May–June and November–December. Even during "rainy" months, you get tropical downpours followed by clear skies — perfect for water activities. The Caribbean waters are clearest during the drier windows.',
    highlights: [
      'Driest months: Feb–Mar, Sep–Oct (crystal-clear water)',
      'Warm year-round: 75–85°F',
      'Heavy rain: May–Jun, Nov–Dec',
      'Best snorkeling: Feb–Mar & Sep–Oct',
      'Unique pattern — opposite of Pacific side',
    ],
    bestTime: 'February–March & September–October',
  },
  {
    name: 'Boquete (Highland)',
    icon: Cloud,
    shortDesc: 'Cool Mountain Paradise',
    fullDesc:
      'Boquete is Panama\'s coolest region, sitting 3,600+ feet above sea level. Temperatures hover between 60–75°F year-round — the "eternal spring" zone. It\'s misty, fresh, and never hot. Light rain is possible any month, but the elevation ensures that rainfall disperses quickly. This is perfect for those who dislike heat and humidity. Coffee plantations, hiking, and outdoor living are comfortable year-round. No extreme seasons — just consistent, pleasant weather.',
    highlights: [
      'Coolest zone in Panama: 60–75°F always',
      'Eternal spring climate — never too hot',
      'Light rain possible any month',
      'Misty mornings, clear afternoons',
      'No extreme heat or humidity',
    ],
    bestTime: 'Year-round (perfect any month)',
  },
  {
    name: 'Coronado & Pacific Riviera',
    icon: Sun,
    shortDesc: 'Beachfront Luxury',
    fullDesc:
      'Coronado and the Pacific Riviera share the same dry-season advantage as Panama City but with added ocean breezes that keep the temperature slightly cooler and more refreshing. December–April is absolutely perfect — clear skies, warm days (82–88°F), cool ocean breezes, and zero rain. The rainy season (May–November) brings afternoon showers, but the ocean breeze keeps it from feeling oppressive. Ideal for beach living and water sports.',
    highlights: [
      'Dry season: Dec–Apr (perfect beach weather)',
      'Ocean breeze cools the air year-round',
      'Rainy season: afternoon showers only',
      'Warm ocean: 81–84°F year-round',
      'Golf, water sports, beach activities',
    ],
    bestTime: 'December–April',
  },
  {
    name: 'Azuero Peninsula (Pedasi & Playa Venao)',
    icon: Sun,
    shortDesc: 'Driest Region & Surfing',
    fullDesc:
      'The Azuero Peninsula is Panama\'s driest region. Some months receive minimal rainfall, making it ideal for those seeking guaranteed sunshine. The trade-off: it can feel hot and dry during the dry season. The region is world-famous for surfing — the best swell period is April–October when southern Pacific swells hit Playa Venao. Winter months (December–March) have some swell too, but the peak is mid-year. This region offers authentic Panama with fewer tourists and some of the most consistent good weather.',
    highlights: [
      'Driest region in Panama',
      'Surf season: April–October (peak swell)',
      'Best beaches: Playa Venao, Playa Canas',
      'Fewer tourists, authentic culture',
      'Hot and dry — bring water and sunscreen',
    ],
    bestTime: 'April–October (surfers); December–March (relaxation)',
  },
];

export default async function PanamaWeatherGuide({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
  return (
    <article className="bg-white min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero */}
        <div className="mb-14 reveal-on-scroll">
          <span className="text-brand-TEAL font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
            Weather Guide · 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-brand-950 mb-6 tracking-tight leading-tight">
            Panama Weather Guide: Best Time to Visit by Region
          </h1>
          <p className="text-slate-500 text-lg font-medium leading-relaxed border-l-2 border-brand-GOLD/30 pl-5">
            Panama has no winter. Instead, it has a dry season (December–April) and a rainy season (May–November) — but the Caribbean follows a different pattern. Learn which months to visit each region based on your preferences for sunshine, crowds, and price.
          </p>
        </div>

        {/* Quick Overview Cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-14 reveal-on-scroll">
          {climateCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="card-light p-6 rounded-2xl border-brand-100 hover:border-brand-GOLD/20 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Icon size={24} className="text-brand-GOLD flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-brand-950 font-black text-sm leading-tight">{card.title}</h3>
                    <p className="text-brand-GOLD text-[10px] font-bold uppercase tracking-widest mt-1">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>

        {/* Monthly Breakdown */}
        <div className="mb-14 reveal-on-scroll">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 tracking-tight mb-2">
              Monthly Weather Breakdown
            </h2>
            <p className="text-slate-500 text-sm">
              Reference guide for planning your visit. Weather varies by region — see regional sections below for details.
            </p>
          </div>

          <div className="card-light p-6 rounded-2xl border-brand-100 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-100">
                  <th className="text-left py-3 px-3 text-brand-GOLD font-black uppercase tracking-widest text-[10px]">
                    Month
                  </th>
                  <th className="text-left py-3 px-3 text-brand-GOLD font-black uppercase tracking-widest text-[10px]">
                    Pacific
                  </th>
                  <th className="text-left py-3 px-3 text-brand-GOLD font-black uppercase tracking-widest text-[10px]">
                    Caribbean
                  </th>
                  <th className="text-left py-3 px-3 text-brand-GOLD font-black uppercase tracking-widest text-[10px]">
                    Boquete
                  </th>
                  <th className="text-left py-3 px-3 text-brand-GOLD font-black uppercase tracking-widest text-[10px]">
                    Recommendation
                  </th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-brand-100 ${
                      row.recommendation.includes('⭐⭐') ? 'bg-brand-GOLD/5' : ''
                    }`}
                  >
                    <td className="py-3 px-3 text-brand-950 font-bold text-sm">{row.month}</td>
                    <td className="py-3 px-3 text-slate-500 text-sm">{row.pacific}</td>
                    <td className="py-3 px-3 text-slate-500 text-sm">{row.caribbean}</td>
                    <td className="py-3 px-3 text-slate-500 text-sm">{row.boquete}</td>
                    <td className="py-3 px-3 text-brand-GOLD font-bold text-sm">{row.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Regional Climate Cards */}
        <div className="mb-14 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 tracking-tight mb-8">
            Climate by Region
          </h2>

          <div className="space-y-8">
            {regions.map((region, i) => {
              const Icon = region.icon;
              return (
                <div
                  key={i}
                  className="card-light p-7 md:p-8 rounded-2xl border-brand-100 overflow-hidden reveal-on-scroll"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <Icon size={28} className="text-brand-GOLD flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl md:text-3xl font-heading font-black text-brand-950 tracking-tight">
                        {region.name}
                      </h3>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">
                        {region.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{region.fullDesc}</p>

                  {/* Highlights */}
                  <div className="mb-5">
                    <p className="text-brand-GOLD text-[10px] font-black uppercase tracking-widest mb-3">
                      Key Details
                    </p>
                    <ul className="space-y-2">
                      {region.highlights.map((highlight, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-slate-500">
                          <span className="text-brand-GOLD font-black mt-0.5 flex-shrink-0">→</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best Time */}
                  <div className="pt-5 border-t border-brand-100">
                    <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
                      Best Time:{' '}
                    </span>
                    <span className="text-brand-950 font-bold text-sm">{region.bestTime}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Find Your Perfect Climate CTA */}
        <div className="mb-14 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 tracking-tight mb-8">
            Find Your Perfect Climate
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            <Link
              href={`/${lang}/propiedades`}
              className="card-light p-6 rounded-2xl border-brand-100 hover:border-brand-GOLD/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <Sun size={24} className="text-brand-GOLD" />
                <ArrowRight size={16} className="text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all" />
              </div>
              <h3 className="text-brand-950 font-black text-sm mb-2">Love the Dry Pacific?</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-3">
                Explore Coronado & Panama City properties with guaranteed sunshine December–April.
              </p>
              <p className="text-brand-GOLD text-[10px] font-bold uppercase tracking-widest">
                Browse Properties →
              </p>
            </Link>

            <Link
              href={`/${lang}/propiedades`}
              className="card-light p-6 rounded-2xl border-brand-100 hover:border-brand-GOLD/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <Droplets size={24} className="text-brand-GOLD" />
                <ArrowRight size={16} className="text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all" />
              </div>
              <h3 className="text-brand-950 font-black text-sm mb-2">Want Caribbean Vibes?</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-3">
                Discover Bocas del Toro properties with tropical warmth and unique dry windows (Feb–Mar, Sep–Oct).
              </p>
              <p className="text-brand-GOLD text-[10px] font-bold uppercase tracking-widest">
                Browse Properties →
              </p>
            </Link>

            <Link
              href={`/${lang}/propiedades`}
              className="card-light p-6 rounded-2xl border-brand-100 hover:border-brand-GOLD/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <Cloud size={24} className="text-brand-GOLD" />
                <ArrowRight size={16} className="text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all" />
              </div>
              <h3 className="text-brand-950 font-black text-sm mb-2">Prefer Eternal Spring?</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-3">
                See Boquete mountain properties with perfect 60–75°F weather year-round, no extreme heat.
              </p>
              <p className="text-brand-GOLD text-[10px] font-bold uppercase tracking-widest">
                Browse Properties →
              </p>
            </Link>

            <Link
              href={`/${lang}/guides/best-areas-retire-panama`}
              className="card-light p-6 rounded-2xl border-brand-100 hover:border-brand-GOLD/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <MapPin size={24} className="text-brand-GOLD" />
                <ArrowRight size={16} className="text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all" />
              </div>
              <h3 className="text-brand-950 font-black text-sm mb-2">Unsure? Compare All Regions</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-3">
                Read our complete guide to the best areas in Panama, including costs, lifestyle, and climate.
              </p>
              <p className="text-brand-GOLD text-[10px] font-bold uppercase tracking-widest">
                Read Full Guide →
              </p>
            </Link>
          </div>
        </div>

        {/* Practical Tips */}
        <div className="mb-14 card-light p-8 rounded-2xl border-brand-100 reveal-on-scroll">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-950 tracking-tight mb-6">
            Practical Weather Tips
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-brand-950 font-black text-sm mb-3 uppercase tracking-widest">
                What to Pack by Season
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-slate-500">
                  <span className="text-brand-GOLD font-black mt-0.5 flex-shrink-0">✓</span>
                  <span>
                    <strong>Dry Season (Dec–Apr):</strong> Light clothes, shorts, t-shirts, sunglasses, sunscreen, beach
                    cover-ups. A light sweater for air-conditioned interiors.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-500">
                  <span className="text-brand-GOLD font-black mt-0.5 flex-shrink-0">✓</span>
                  <span>
                    <strong>Rainy Season (May–Nov):</strong> All of the above PLUS a lightweight rain jacket or umbrella.
                    Showers are brief but sudden. Breathable fabrics work best in the humidity.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-500">
                  <span className="text-brand-GOLD font-black mt-0.5 flex-shrink-0">✓</span>
                  <span>
                    <strong>Boquete (Highlands):</strong> Add long pants, a light jacket, and closed-toe shoes. The
                    elevation means cooler evenings and more variable weather.
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-t border-brand-100 pt-6">
              <h3 className="text-brand-950 font-black text-sm mb-3 uppercase tracking-widest">
                Hurricane Season & Safety
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                <strong>Critical fact: Panama is OUTSIDE the Atlantic hurricane belt.</strong> The country sits south
                and west of the zone where hurricanes typically develop. This is one of Panama's greatest advantages —
                you get tropical weather without tropical storm risk. The rainy season brings heavy showers, not storms.
              </p>
            </div>

            <div className="border-t border-brand-100 pt-6">
              <h3 className="text-brand-950 font-black text-sm mb-3 uppercase tracking-widest">
                UV Protection Year-Round
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Panama sits close to the equator, meaning UV index is very high year-round — even on cloudy/rainy days.
                Use SPF 50+ sunscreen daily, reapply every 2 hours if swimming, and wear a hat or UV-blocking beach
                shirt. Sunburn happens fast, and the sun intensity is deceptive.
              </p>
            </div>
          </div>
        </div>

        {/* Conversion insight */}
        <div className="mb-14 card-light border-brand-GOLD/20 p-8 rounded-2xl reveal-on-scroll">
          <div className="flex items-start gap-4">
            <Sun size={24} className="text-brand-GOLD flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-brand-950 font-black text-sm mb-2 uppercase tracking-widest">
                Weather: Panama's Secret Weapon
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Expats who visit during the dry season (December–April) often fall in love with the climate and start
                looking at real estate within weeks. The combination of guaranteed sunshine, warm ocean water, and no
                extreme seasons makes Panama incredibly attractive to those escaping cold winters. If you're considering
                a move, experience a dry-season visit first — it will likely seal the deal.
              </p>
            </div>
          </div>
        </div>

        {/* Internal links */}
        <div className="space-y-3 reveal-on-scroll">
          <h3 className="text-brand-950 font-black text-sm uppercase tracking-widest mb-4">Explore Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Best Areas to Retire in Panama', href: '/en/guides/best-areas-retire-panama' },
              { label: 'Panama Real Estate Investment Guide', href: '/en/blog/panama-real-estate-market-2026' },
              { label: 'Cost of Living in Panama', href: '/en/blog/cost-of-living-panama-vs-us' },
              { label: 'Browse Properties by Region', href: '/en/propiedades' },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="flex items-center justify-between card-light p-4 rounded-xl border-brand-100 hover:border-brand-GOLD/30 transition-all group"
              >
                <span className="text-brand-950 text-xs font-bold">{link.label}</span>
                <ArrowRight size={12} className="text-brand-GOLD opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
