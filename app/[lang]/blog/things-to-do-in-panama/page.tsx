import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Waves,
  Mountain,
  Building2,
  Coffee,
  Fish,
  Plane,
  Star,
  Clock,
  Users,
  DollarSign,
  Compass,
  Camera,
  Utensils,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Things to Do in Panama: The Ultimate 2026 Bucket List | Panama Real Estate Sale',
  description: 'Discover the best things to do in Panama — from Panama City skyline tours and Bocas del Toro beaches to Boquete coffee farms and Azuero Peninsula surf. Complete 2026 guide.',
  keywords: 'things to do in panama, panama activities, panama travel guide, panama bucket list, panama tourism 2026, panama destinations',
  openGraph: {
    title: 'Things to Do in Panama: The Ultimate 2026 Bucket List',
    description: 'Explore Panama top attractions and experiences for every traveler type.',
    type: 'article',
  },
};

// Quick stats data
const quickStats = [
  { icon: Plane, label: 'Flight Time from Miami', value: '2.5 Hours' },
  { icon: Clock, label: 'Best Months to Visit', value: 'Dec–April' },
  { icon: DollarSign, label: 'Daily Budget Range', value: '$50–200' },
  { icon: MapPin, label: 'Must-See Regions', value: '5+ Destinations' },
];

// Panama City attractions
const panamaCityAttractions = [
  {
    title: 'Casco Viejo Historic District',
    description: 'Wander the cobblestone streets of this UNESCO World Heritage site filled with colonial architecture, art galleries, and authentic restaurants. The perfect starting point for any Panama City visit.',
    icon: Building2,
    time: '3–4 hours',
    cost: 'Free to explore',
  },
  {
    title: 'Panama Canal Miraflores Locks',
    description: 'Witness one of the world\'s engineering marvels as massive container ships pass through the locks. Book tickets online in advance to avoid queues and ensure a mid-morning slot.',
    icon: Zap,
    time: '2–3 hours',
    cost: '$40 USD per person',
  },
  {
    title: 'Amador Causeway Sunset Walk',
    description: 'A 3-mile causeway connecting four islands with views of Panama City skyline and the Pacific Ocean. Perfect for evening strolls, street food, and photographing the sunset.',
    icon: Camera,
    time: '2 hours',
    cost: 'Free (small food costs)',
  },
  {
    title: 'Metropolitan Natural Park',
    description: 'Just 30 minutes from downtown, this urban rainforest offers hiking trails, exotic birds, and jungle canopy views. One of Panama\'s best-kept secrets for nature lovers.',
    icon: Mountain,
    time: '3–4 hours',
    cost: 'Free admission',
  },
  {
    title: 'Biomuseo (Frank Gehry Museum)',
    description: 'A stunning architectural masterpiece showcasing Panama\'s biodiversity. Designed by the legendary Frank Gehry, this museum explains how Panama became a biological bridge between continents.',
    icon: Star,
    time: '2–3 hours',
    cost: '$22 entry fee',
  },
  {
    title: 'Cinta Costera Waterfront',
    description: 'A 3-mile modern waterfront promenade with parks, restaurants, and perfect jogging paths. Come for sunset, stay for dinner at one of the many international and Panamanian restaurants.',
    icon: Utensils,
    time: '2 hours',
    cost: 'Free to walk',
  },
];

// Bocas del Toro activities
const bocasActivities = [
  {
    title: 'Red Frog Beach (Bastimentos Island)',
    description: 'Named for the tiny red poison dart frogs, this picture-perfect crescent beach offers calm, crystal-clear turquoise waters ideal for swimming and snorkeling.',
    highlights: ['Pristine white sand', 'Calm waters', 'Rare red frogs', 'Beach bar'],
  },
  {
    title: 'Starfish Beach (Bocas del Drago)',
    description: 'A magical beach with hundreds of starfish visible in knee-deep water. It\'s one of the most unique beach experiences in the Caribbean.',
    highlights: ['Abundant starfish', 'Shallow lagoon', 'Protected waters', 'Photo-worthy'],
  },
  {
    title: 'Dolphin Bay Snorkeling Tour',
    description: 'Guided boat tour through pristine waters where you\'ll see dolphins, coral reefs, shipwrecks, and tropical fish. Tours include lunch and snorkel gear.',
    highlights: ['Dolphin encounters', 'Coral gardens', 'Tropical fish', 'Half-day adventure'],
  },
  {
    title: 'Bluff Beach Surfing',
    description: 'Bocas del Toro\'s main surf break, perfect for intermediate surfers. The beach has a laid-back vibe with surfboard rentals and beachside bars.',
    highlights: ['Quality waves', 'Beginner friendly', 'Surf rentals', 'Chill atmosphere'],
  },
  {
    title: 'Tom\'s Chocolate Farm Tour',
    description: 'Learn how cacao is grown, harvested, and processed on this small family farm. You\'ll tour the plantation and sample fresh chocolate prepared on-site.',
    highlights: ['Cacao education', 'Farm tour', 'Chocolate tasting', '2-hour experience'],
  },
];

// Boquete attractions
const boqueteAttractions = [
  {
    title: 'Volcán Barú Summit Hike',
    description: 'Panama\'s highest peak at 3,475 meters (11,401 feet). Start before dawn to reach the summit at sunrise and see both the Pacific Ocean and Caribbean Sea from the top.',
    difficulty: 'Challenging',
    duration: '5–7 hours',
    bestTime: 'December–March',
  },
  {
    title: 'Quetzal Trail Bird Watching',
    description: 'A scenic trail through cloud forest habitat where you might spot the resplendent quetzal and over 200 other bird species. Essential for serious birders.',
    difficulty: 'Moderate',
    duration: '4–5 hours',
    bestTime: 'Year-round',
  },
  {
    title: 'White-Water Rafting on Río Chiriquí',
    description: 'Class III and IV rapids through jungle scenery. Multiple tour operators offer half-day and full-day rafting adventures with lunch and equipment included.',
    difficulty: 'Intermediate',
    duration: '4–6 hours',
    bestTime: 'May–December',
  },
  {
    title: 'Coffee Farm Tours',
    description: 'Visit working coffee plantations like Café Ruiz or Don Tito\'s farm. Learn about the entire process from bean to cup and taste freshly roasted Panamanian specialty coffee.',
    difficulty: 'Easy',
    duration: '2–3 hours',
    bestTime: 'Harvest: September–January',
  },
  {
    title: 'Los Cangilones Natural Rock Pools',
    description: 'A series of natural swimming holes and cascades in the Chiriquí River. Great for cooling off on hot days and exploring beautiful jungle scenery.',
    difficulty: 'Easy',
    duration: '2–3 hours',
    bestTime: 'Year-round',
  },
];

// Coronado & Pacific Coast
const pacificCoastActivities = [
  {
    title: 'Playa Coronado Beach',
    description: 'A long, sandy Pacific beach with warm water year-round. The town has a small expat community, good restaurants, and easy access to golf courses.',
    bestFor: 'Relaxation & Golf',
    facilities: 'Restaurants, hotels, shops',
  },
  {
    title: 'Sport Fishing Charters',
    description: 'Deep-sea fishing for marlin, tuna, and dorado. Multiple charter companies operate from nearby ports with full-day trips including crew, equipment, and lunch.',
    bestFor: 'Adventure seekers',
    season: 'Year-round',
  },
  {
    title: 'Whale Watching (Humpback)',
    description: 'July through October, humpback whales migrate to Panama\'s Pacific coast. Guided boat tours offer excellent chances of close encounters.',
    bestFor: 'Marine enthusiasts',
    season: 'July–October',
  },
  {
    title: 'Santa Catalina World-Class Surfing',
    description: 'One of Central America\'s top surf destinations. Year-round waves, a international surf community, and beachfront cabins create a true surfer\'s paradise.',
    bestFor: 'Surfers',
    season: 'Best April–October',
  },
  {
    title: 'Playa Venao Surf Camp',
    description: 'A surf camp in the Azuero Peninsula region offering lessons, accommodation, and meals. Perfect for beginners or anyone wanting to improve their skills.',
    bestFor: 'Surf learners',
    packages: 'Multi-day programs',
  },
];

// Azuero Peninsula
const azueroAttractions = [
  {
    title: 'Pedasi Village & Beach',
    description: 'A charming coastal village with authentic Panamanian character. The nearby beach is perfect for swimming, and the town square has local restaurants and shops.',
    highlights: ['Village charm', 'Beach access', 'Local culture', 'Sunset walks'],
  },
  {
    title: 'Las Tablas Carnival (February)',
    description: 'Panama\'s most famous carnival celebration features parades, floats, street parties, and elaborate costumes. Book accommodation months in advance if visiting in February.',
    highlights: ['National event', 'Vibrant culture', 'Massive celebration', 'Planning required'],
  },
  {
    title: 'Isla Iguana Wildlife Sanctuary',
    description: 'A protected island with pristine beaches and excellent snorkeling. Home to iguanas, sea turtles, and tropical fish. Only accessible by boat.',
    highlights: ['Snorkeling', 'Wildlife', 'Pristine nature', 'Half-day tour'],
  },
  {
    title: 'Playa Cambutal Sea Turtle Nesting',
    description: 'A remote beach where sea turtles nest July through October. Visit with a guide to observe nesting turtles while supporting conservation efforts.',
    highlights: ['Wildlife viewing', 'Conservation', 'Eco-tourism', 'Evening tours'],
  },
];

// Practical information
const practicalInfo = [
  {
    category: 'Best Time to Visit',
    details: [
      'Dry season: December–April (Pacific coast) — low rainfall, clear skies, perfect for most activities',
      'Caribbean (Bocas): Different weather patterns; rainy but still swimmable; fewer crowds',
      'Avoid: September–November (green season) has heavy rain but lush landscapes and fewer tourists',
    ],
  },
  {
    category: 'Getting Around',
    details: [
      'Albrook International Airport (PAB) — main hub for domestic flights to Bocas, Boquete, and more',
      'Albrook Bus Terminal — intercity buses to all regions; affordable but slower',
      'Uber/Taxi — Available in Panama City and major towns; negotiate prices beforehand outside Uber',
      'Rental car — Recommended for flexibility; drive on right side; roads generally good',
      'Domestic flights — Short hops to distant regions (1–2 hours); budget airlines available',
    ],
  },
  {
    category: 'Budget Breakdown',
    details: [
      'Budget travelers: $50–80/day — hostels, street food, free attractions, public transport',
      'Mid-range: $100–200/day — mid-tier hotels, restaurant meals, paid tours, tours and activities',
      'Luxury: $200+/day — resorts, fine dining, private guides, international amenities',
      'Meals: Street food $2–5, casual restaurant $8–15, fine dining $20–50 per person',
      'Tours: Day tours $50–150, multi-day activities $300–1,000 depending on distance and luxury level',
    ],
  },
  {
    category: 'Essential Information',
    details: [
      'Currency: Panamanian Balboa (equal to USD); USD widely accepted',
      'Language: Spanish is primary; English spoken in tourism areas and Panama City',
      'Visa: US/EU citizens get 180 days visa-free; check current requirements',
      'Health: Vaccinations recommended; tap water safe in major cities',
      'Safety: Avoid certain neighborhoods in Panama City after dark; generally safe for tourists',
    ],
  },
];

export default async function ThingsToDoInPanama({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="bg-white min-h-screen pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="card-light p-8 sm:p-12 border border-brand-gold/20 rounded-2xl backdrop-blur-md bg-gradient-to-br from-brand-900/40 to-brand-950/40">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-brand-gold" />
            <span className="text-brand-gold text-sm font-semibold uppercase tracking-wider">
              Ultimate Travel Guide
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-brand-gold leading-tight">
            Things to Do in Panama: The Complete 2026 Bucket List
          </h1>

          <p className="text-lg text-brand-100/90 mb-8 leading-relaxed max-w-3xl">
            From the engineering marvel of the Panama Canal to pristine Caribbean beaches and cloud forest adventures, Panama offers unforgettable experiences for every type of traveler. Discover the best attractions, hidden gems, and practical tips for planning your Panama adventure.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`/${lang}/propiedades`}
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-950 px-6 py-3 rounded-lg font-semibold hover:bg-brand-gold/90 transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/30"
            >
              Explore Panama Real Estate
              <ArrowRight className="w-4 h-4" />
            </a>
            <button className="inline-flex items-center gap-2 border border-brand-gold/30 text-brand-gold px-6 py-3 rounded-lg font-semibold hover:border-brand-gold/60 hover:bg-brand-gold/5 transition-all duration-300">
              Download Travel Guide
              <Plane className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="card-light p-6 border border-brand-gold/20 rounded-xl backdrop-blur-md bg-gradient-to-br from-brand-900/30 to-brand-950/40 hover:border-brand-gold/40 transition-all duration-300 reveal-on-scroll"
              >
                <Icon className="w-6 h-6 text-brand-gold mb-3" />
                <p className="text-xs text-brand-100/60 uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
                <p className="text-xl sm:text-2xl font-bold text-brand-gold">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Panama City Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20 reveal-on-scroll">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-7 h-7 text-brand-gold" />
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-gold">
              Panama City: Urban Sophistication
            </h2>
          </div>
          <p className="text-brand-100/80 text-lg leading-relaxed max-w-3xl">
            The capital city combines modern skyscrapers with historic colonial charm, world-class dining with street food culture, and cosmopolitan energy with Caribbean relaxation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {panamaCityAttractions.map((attraction, idx) => {
            const Icon = attraction.icon;
            return (
              <div
                key={idx}
                className="card-light p-6 border border-brand-gold/20 rounded-xl backdrop-blur-md bg-gradient-to-br from-brand-900/30 to-brand-950/40 hover:border-brand-gold/40 transition-all duration-300 group reveal-on-scroll"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-6 h-6 text-brand-gold flex-shrink-0" />
                  <span className="text-xs text-brand-gold/70 bg-brand-gold/10 px-3 py-1 rounded-full">
                    {attraction.time}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-gold mb-3 group-hover:text-brand-gold/90 transition-colors">
                  {attraction.title}
                </h3>
                <p className="text-brand-100/80 mb-4 leading-relaxed">
                  {attraction.description}
                </p>
                <div className="pt-4 border-t border-brand-gold/10">
                  <p className="text-sm text-brand-100/60">
                    <span className="font-semibold text-brand-gold">Cost:</span> {attraction.cost}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 card-light p-6 border border-brand-gold/20 rounded-xl backdrop-blur-md bg-gradient-to-br from-brand-900/20 to-brand-950/30">
          <h4 className="text-lg font-bold text-brand-gold mb-4 flex items-center gap-2">
            <Star className="w-5 h-5" /> Pro Tip for Panama City
          </h4>
          <p className="text-brand-100/80 leading-relaxed">
            Book your Panama Canal visit online 24–48 hours in advance to avoid sold-out time slots. Aim for a 9 AM slot to catch transiting ships in ideal lighting and to avoid the hottest midday hours.
          </p>
        </div>
      </section>

      {/* Bocas del Toro Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20 reveal-on-scroll">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Waves className="w-7 h-7 text-brand-gold" />
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-gold">
              Bocas del Toro: Caribbean Paradise
            </h2>
          </div>
          <p className="text-brand-100/80 text-lg leading-relaxed max-w-3xl">
            An archipelago of 68 islands in the Caribbean where turquoise waters, pristine beaches, vibrant marine life, and laid-back island culture create a tropical dream destination.
          </p>
        </div>

        <div className="space-y-5">
          {bocasActivities.map((activity, idx) => (
            <div
              key={idx}
              className="card-light p-6 border border-brand-gold/20 rounded-xl backdrop-blur-md bg-gradient-to-br from-brand-900/30 to-brand-950/40 hover:border-brand-gold/40 transition-all duration-300 reveal-on-scroll"
            >
              <h3 className="text-xl font-bold text-brand-gold mb-3">
                {activity.title}
              </h3>
              <p className="text-brand-100/80 mb-4 leading-relaxed">
                {activity.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {activity.highlights.map((highlight, hIdx) => (
                  <span
                    key={hIdx}
                    className="inline-block text-xs bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full border border-brand-gold/20"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 card-light p-6 border border-brand-gold/20 rounded-xl backdrop-blur-md bg-gradient-to-br from-brand-900/20 to-brand-950/30">
          <h4 className="text-lg font-bold text-brand-gold mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5" /> Getting to Bocas del Toro
          </h4>
          <p className="text-brand-100/80 leading-relaxed mb-3">
            Fly from Panama City to Bocas del Toro "Bocas del Toro Albrook" airport (30 minutes, ~$80 round-trip) or take a bus and ferry combination (6–8 hours, much cheaper but time-intensive). Most travelers fly.
          </p>
        </div>
      </section>

      {/* Boquete Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20 reveal-on-scroll">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="w-7 h-7 text-brand-gold" />
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-gold">
              Boquete: Cloud Forest Adventures
            </h2>
          </div>
          <p className="text-brand-100/80 text-lg leading-relaxed max-w-3xl">
            Nestled high in the Chiriquí highlands, Boquete is Panama\'s premier destination for hiking, coffee tourism, bird watching, and adventure sports. Perfect for nature lovers and active travelers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {boqueteAttractions.map((attraction, idx) => (
            <div
              key={idx}
              className="card-light p-6 border border-brand-gold/20 rounded-xl backdrop-blur-md bg-gradient-to-br from-brand-900/30 to-brand-950/40 hover:border-brand-gold/40 transition-all duration-300 reveal-on-scroll"
            >
              <h3 className="text-xl font-bold text-brand-gold mb-4">
                {attraction.title}
              </h3>
              <p className="text-brand-100/80 mb-5 leading-relaxed">
                {attraction.description}
              </p>
              <div className="space-y-2 pt-4 border-t border-brand-gold/10">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-100/60">Difficulty:</span>
                  <span className="text-brand-gold font-semibold">
                    {attraction.difficulty}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-100/60">Duration:</span>
                  <span className="text-brand-gold font-semibold">
                    {attraction.duration}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-100/60">Best Time:</span>
                  <span className="text-brand-gold font-semibold">
                    {attraction.bestTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-light p-6 border border-brand-gold/20 rounded-xl backdrop-blur-md bg-gradient-to-br from-brand-900/20 to-brand-950/30">
          <h4 className="text-lg font-bold text-brand-gold mb-4 flex items-center gap-2">
            <Coffee className="w-5 h-5" /> Why Boquete is Special
          </h4>
          <p className="text-brand-100/80 leading-relaxed">
            Boquete sits at 1,200 meters elevation with cool temperatures year-round (65–75°F), making it ideal for hiking and outdoor activities. The region is famous for Geisha coffee beans and attracts retirees and remote workers seeking a quieter mountain lifestyle.
          </p>
        </div>
      </section>

      {/* Pacific Coast Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20 reveal-on-scroll">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Fish className="w-7 h-7 text-brand-gold" />
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-gold">
              Coronado & Pacific Coast: Waves & Wildlife
            </h2>
          </div>
          <p className="text-brand-100/80 text-lg leading-relaxed max-w-3xl">
            Panama\'s Pacific coast stretches across multiple regions offering everything from relaxing beach towns to world-class surf breaks and prime fishing waters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pacificCoastActivities.map((activity, idx) => (
            <div
              key={idx}
              className="card-light p-6 border border-brand-gold/20 rounded-xl backdrop-blur-md bg-gradient-to-br from-brand-900/30 to-brand-950/40 hover:border-brand-gold/40 transition-all duration-300 group reveal-on-scroll"
            >
              <h3 className="text-xl font-bold text-brand-gold mb-3 group-hover:text-brand-gold/90 transition-colors">
                {activity.title}
              </h3>
              <p className="text-brand-100/80 mb-4 leading-relaxed">
                {activity.description}
              </p>
              <div className="pt-4 border-t border-brand-gold/10">
                <div className="text-sm space-y-1">
                  {activity.bestFor && (
                    <p>
                      <span className="text-brand-100/60">Best For: </span>
                      <span className="text-brand-gold font-semibold">
                        {activity.bestFor}
                      </span>
                    </p>
                  )}
                  {activity.facilities && (
                    <p>
                      <span className="text-brand-100/60">Facilities: </span>
                      <span className="text-brand-gold font-semibold">
                        {activity.facilities}
                      </span>
                    </p>
                  )}
                  {activity.season && (
                    <p>
                      <span className="text-brand-100/60">Season: </span>
                      <span className="text-brand-gold font-semibold">
                        {activity.season}
                      </span>
                    </p>
                  )}
                  {activity.packages && (
                    <p>
                      <span className="text-brand-100/60">Packages: </span>
                      <span className="text-brand-gold font-semibold">
                        {activity.packages}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Azuero Peninsula Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20 reveal-on-scroll">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="w-7 h-7 text-brand-gold" />
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-gold">
              Azuero Peninsula: Culture & Nature
            </h2>
          </div>
          <p className="text-brand-100/80 text-lg leading-relaxed max-w-3xl">
            The Azuero Peninsula is Panama\'s most traditional region, known for artisanal crafts, authentic villages, world-famous carnival celebrations, and remote beaches where sea turtles nest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {azueroAttractions.map((attraction, idx) => (
            <div
              key={idx}
              className="card-light p-6 border border-brand-gold/20 rounded-xl backdrop-blur-md bg-gradient-to-br from-brand-900/30 to-brand-950/40 hover:border-brand-gold/40 transition-all duration-300 reveal-on-scroll"
            >
              <h3 className="text-xl font-bold text-brand-gold mb-3">
                {attraction.title}
              </h3>
              <p className="text-brand-100/80 mb-4 leading-relaxed">
                {attraction.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {attraction.highlights.map((highlight, hIdx) => (
                  <span
                    key={hIdx}
                    className="inline-block text-xs bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full border border-brand-gold/20"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 card-light p-6 border border-brand-gold/20 rounded-xl backdrop-blur-md bg-gradient-to-br from-brand-900/20 to-brand-950/30">
          <h4 className="text-lg font-bold text-brand-gold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5" /> Experience Authentic Panama
          </h4>
          <p className="text-brand-100/80 leading-relaxed">
            The Azuero Peninsula offers a glimpse into traditional Panamanian culture that predates modern tourism. You\'ll find artisan polleras (traditional dresses), folkloric traditions, and welcoming communities that value their heritage.
          </p>
        </div>
      </section>

      {/* Practical Information Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20 reveal-on-scroll">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-gold mb-4">
            Practical Information: Plan Your Visit
          </h2>
          <p className="text-brand-100/80 text-lg leading-relaxed">
            Everything you need to know about traveling in Panama, from timing and transportation to budgets and essential details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {practicalInfo.map((section, idx) => (
            <div
              key={idx}
              className="card-light p-6 border border-brand-gold/20 rounded-xl backdrop-blur-md bg-gradient-to-br from-brand-900/30 to-brand-950/40 reveal-on-scroll"
            >
              <h3 className="text-xl font-bold text-brand-gold mb-4">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-3 text-brand-100/80 text-sm leading-relaxed">
                    <span className="text-brand-gold font-bold flex-shrink-0 mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tourism FAQ */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20 reveal-on-scroll">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-gold mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "How long should I spend in Panama?",
              a: "A 7–10 day trip allows you to experience Panama City (2–3 days), Bocas del Toro (3–4 days), and Boquete (2–3 days). Longer trips (2–3 weeks) let you add the Azuero Peninsula and Pacific coast.",
            },
            {
              q: "Do I need a visa?",
              a: "US, EU, and Canadian citizens receive 180-day tourist visas on arrival. Always check current requirements before traveling, as policies can change.",
            },
            {
              q: "Is Panama safe for tourists?",
              a: "Yes. Avoid a few known neighborhoods in Panama City after dark, use Uber instead of street taxis, and exercise normal precautions. Most tourists visit safely without incidents.",
            },
            {
              q: "What\'s the best month to visit?",
              a: "December through April (dry season) offers the best weather for most activities. Caribbean (Bocas) has rain but is swimmable year-round.",
            },
            {
              q: "Do I need to speak Spanish?",
              a: "English is spoken in tourist areas and Panama City. Learning basic Spanish phrases helps and is appreciated. Most tour operators speak English.",
            },
            {
              q: "Can I use US dollars in Panama?",
              a: "Yes! Panama uses the Panamanian Balboa (equal to USD) and US dollars are widely accepted and preferred. No currency exchange needed.",
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="card-light p-6 border border-brand-gold/20 rounded-xl backdrop-blur-md bg-gradient-to-br from-brand-900/30 to-brand-950/40 reveal-on-scroll"
            >
              <h4 className="text-lg font-bold text-brand-gold mb-3">
                {faq.q}
              </h4>
              <p className="text-brand-100/80 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conversion Section: Tourist to Resident */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20 reveal-on-scroll">
        <div className="card-light p-8 sm:p-12 border border-brand-gold/20 rounded-2xl backdrop-blur-md bg-gradient-to-br from-brand-900/40 to-brand-950/40">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-7 h-7 text-brand-gold" />
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-gold">
              From Tourist to Resident: Why Visitors Stay
            </h2>
          </div>

          <p className="text-lg text-brand-100/90 mb-6 leading-relaxed">
            Every year, thousands of travelers visit Panama as tourists and fall in love with the country. The combination of natural beauty, low cost of living, friendly people, and strategic location creates a unique appeal that keeps many visitors coming back — sometimes permanently.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-gold mb-4">
                Why Expats Choose Panama
              </h3>
              {[
                "Cost of living lower than most of Latin America",
                "Pensioner visa (Pensionado) with just $1,000/month income",
                "Year-round warm weather in coastal regions",
                "No income tax on foreign-earned income (Pensionado visa)",
                "Direct flight to US (2.5 hours from Miami)",
                "English widely spoken in expat communities",
                "Cultural diversity and international community",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 text-brand-100/80">
                  <Star className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="card-light p-6 border border-brand-gold/20 rounded-xl backdrop-blur-md bg-gradient-to-br from-brand-900/20 to-brand-950/30">
              <h3 className="text-xl font-bold text-brand-gold mb-4">
                Real Estate Opportunities
              </h3>
              <p className="text-brand-100/80 mb-6 leading-relaxed">
                Many visitors discover their perfect home while exploring Panama. Whether it\'s a beachfront property in Bocas del Toro, a mountain retreat in Boquete, or a cosmopolitan condo in Panama City, the real estate market offers diverse options for different lifestyles and budgets.
              </p>
              <Link
                href={`/${lang}/guides/best-areas-retire-panama`}
                className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:text-brand-gold/80 transition-colors"
              >
                Explore Best Areas to Retire
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-brand-gold/20">
            <h3 className="text-xl font-bold text-brand-gold mb-6">
              Ready to Make Panama Your Home?
            </h3>
            <p className="text-brand-100/90 mb-8 leading-relaxed">
              Start your Panama real estate journey by exploring available properties in your preferred region. Whether you\'re looking for an investment property, a retirement home, or a vacation retreat, our Panama Real Estate Sale advisors are here to guide you through the process.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`/${lang}/propiedades`}
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-950 px-6 py-3 rounded-lg font-semibold hover:bg-brand-gold/90 transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/30"
              >
                Browse Properties
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`/${lang}/contacto`}
                className="inline-flex items-center gap-2 border border-brand-gold/30 text-brand-gold px-6 py-3 rounded-lg font-semibold hover:border-brand-gold/60 hover:bg-brand-gold/5 transition-all duration-300"
              >
                Speak with Our Advisors
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20 reveal-on-scroll">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-gold mb-12">
          Related Guides & Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Best Areas to Retire in Panama",
              description: "A comprehensive guide to Panama\'s most popular expat communities and retirement destinations.",
              href: `/guides/best-areas-retire-panama`,
            },
            {
              title: "Best Beaches in Panama for Expats",
              description: "Discover Panama\'s most beautiful beaches, from Caribbean paradise to Pacific coastal gems.",
              href: `/blog/best-beaches-panama-expats`,
            },
            {
              title: "Cost of Living in Panama vs US",
              description: "Compare living expenses: how much does it cost to live in Panama versus the United States?",
              href: `/blog/cost-of-living-panama-vs-us`,
            },
          ].map((article, idx) => (
            <Link
              key={idx}
              href={article.href}
              className="card-light p-6 border border-brand-gold/20 rounded-xl backdrop-blur-md bg-gradient-to-br from-brand-900/30 to-brand-950/40 hover:border-brand-gold/40 transition-all duration-300 group reveal-on-scroll"
            >
              <h3 className="text-lg font-bold text-brand-gold mb-3 group-hover:text-brand-gold/90 transition-colors flex items-start justify-between gap-2">
                {article.title}
                <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-brand-100/80 text-sm leading-relaxed">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="card-light p-8 sm:p-12 border border-brand-gold/20 rounded-2xl backdrop-blur-md bg-gradient-to-br from-brand-900/40 to-brand-950/40 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-gold mb-6">
            Start Your Panama Adventure Today
          </h2>
          <p className="text-lg text-brand-100/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Whether you\'re planning a two-week vacation or considering a permanent move, Panama offers unforgettable experiences, incredible natural beauty, and endless opportunities. Let our Panama Real Estate Sale advisors help you find your perfect property.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`/${lang}/propiedades`}
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-950 px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/30 text-lg"
            >
              Explore Properties
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={`/${lang}/contacto`}
              className="inline-flex items-center gap-2 border border-brand-gold/30 text-brand-gold px-8 py-4 rounded-lg font-semibold hover:border-brand-gold/60 hover:bg-brand-gold/5 transition-all duration-300 text-lg"
            >
              Get in Touch
              <Plane className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
