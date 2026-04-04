import Link from 'next/link';
import type { Metadata } from 'next';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';



interface PageProps {
  params: { lang: string };
}

export const metadata = {
  title: 'Panama Food Guide 2026: Local Cuisine, Restaurants, Expat Eating',
  description: 'Panama food guide. Local dishes, best restaurants, grocery costs, street food, cuisine tips for expats.',
  keywords: 'Panama food, Panama cuisine, Panama restaurants, Panamanian dishes, food in Panama',
  alternates: {
    canonical: 'https://panamarealestatesale.com/en/blog/panama-food-guide-expats',
    languages: {
      'en': 'https://panamarealestatesale.com/en/blog/panama-food-guide-expats',
      'es': 'https://panamarealestatesale.com/es/blog/panama-food-guide-expats',
      'pt': 'https://panamarealestatesale.com/pt/blog/panama-food-guide-expats',
      'de': 'https://panamarealestatesale.com/de/blog/panama-food-guide-expats',
    },
  },
  openGraph: {
    title: 'Panama Food Guide 2026: Local Cuisine, Restaurants, Expat Eating',
    description: 'Panama food guide. Local dishes, best restaurants, grocery costs, street food, cuisine tips for expats.',
    type: 'article',
    url: 'https://panamarealestatesale.com/en/blog/panama-food-guide-expats',
    images: [{ url: 'https://images.unsplash.com/photo-1504674900941-0026f8d9138d?w=1200&q=80', width: 1200, height: 630, alt: 'Panama Food Guide 2026: Local Cuisine, Restaurants, Expat Eating' }],
    locale: 'en_US',
    siteName: 'VIP Expats Panama',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panama Food Guide 2026: Local Cuisine, Restaurants, Expat Eating',
    description: 'Panama food guide. Local dishes, best restaurants, grocery costs, street food, cuisine tips for expats.',
    images: ['https://images.unsplash.com/photo-1504674900941-0026f8d9138d?w=1200&q=80'],
  },
};

export default function PanamaFoodGuidePage({ params }: PageProps) {
  const { lang } = params;

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-brand-TEAL to-brand-950 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Panama Food Guide for Expats
          </h1>
          <p className="text-xl leading-relaxed mb-8">
            Discover authentic Panamanian cuisine, vibrant food neighborhoods, and culinary experiences
            that will make Panama feel like home. From street food to fine dining, explore the flavors
            that define this diverse Central American nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${lang}/contacto`}
              className="inline-block px-6 py-3 bg-brand-GOLD text-brand-950 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <button className="px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-brand-TEAL transition-colors">
              Download Food Guide
            </button>
          </div>
        </div>
      </section>

      {/* Panama City Scene Visualization */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-8 text-brand-950">
            Explore Panama City's Food Culture
          </h2>
          <div className="h-96 rounded-lg overflow-hidden shadow-lg border-2 border-brand-100">
            <PanamaCityScene />
          </div>
        </div>
      </section>

      {/* Must-Try Dishes Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-8 text-brand-950">
            Must-Try Panamanian Dishes
          </h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Panamanian cuisine blends Caribbean, African, and Spanish influences into distinctive flavors
            that reflect the nation's rich cultural heritage. These essential dishes define the local food
            scene and appear on menus throughout the country.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Arroz con Pollo */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-TEAL shadow-sm">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">
                Arroz con Pollo
              </h3>
              <p className="text-gray-700 mb-3">
                This iconic one-pot rice and chicken dish is considered the national comfort food. Cooked
                with cilantro, bell peppers, and olives, it's served at family gatherings and restaurants
                nationwide. The rice absorbs all the chicken flavors for a satisfying, affordable meal.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm text-gray-600">
                Average cost: $6-10 at local restaurants
              </div>
            </div>

            {/* Sancocho */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-GOLD shadow-sm">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">
                Sancocho
              </h3>
              <p className="text-gray-700 mb-3">
                A hearty stew featuring yuca, plantains, corn, and either chicken or seafood simmered in
                cilantro-infused broth. This traditional dish is served at celebrations and is often seen
                as a symbol of Panamanian hospitality. Each region has its own variation.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm text-gray-600">
                Best served: Family dinners and local celebrations
              </div>
            </div>

            {/* Patacones */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-TEAL shadow-sm">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">
                Patacones
              </h3>
              <p className="text-gray-700 mb-3">
                Twice-fried green plantain slices served crispy and salty. Often eaten as a side dish or
                appetizer, patacones can be topped with ceviche, avocado, or seafood for a complete meal.
                They're a staple at fondas and beach restaurants throughout Panama.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm text-gray-600">
                Where to find: Every street corner and casual restaurant
              </div>
            </div>

            {/* Ceviche */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-GOLD shadow-sm">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">
                Ceviche
              </h3>
              <p className="text-gray-700 mb-3">
                Fresh fish or seafood marinated in lime juice with red onions, cilantro, and tomato. This
                refreshing dish is light, citrusy, and perfect for lunch. Panama's Caribbean location means
                ultra-fresh ceviche is available year-round at beachfront restaurants and upscale establishments.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm text-gray-600">
                Best paired with: Cold beer or fresh lime agua fresca
              </div>
            </div>

            {/* Ropa Vieja */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-TEAL shadow-sm">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">
                Ropa Vieja
              </h3>
              <p className="text-gray-700 mb-3">
                Slow-cooked shredded beef in a tangy tomato-based sauce with peppers and onions. The name
                means "old clothes" referring to its appearance, but the flavor is anything but humble. It's
                served with rice and is a favorite at family celebrations and casual restaurants.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm text-gray-600">
                Pairs well with: Rice, beans, and fried cheese
              </div>
            </div>

            {/* Carimañola */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-GOLD shadow-sm">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">
                Carimañola
              </h3>
              <p className="text-gray-700 mb-3">
                A yuca flour dumpling stuffed with meat, cheese, or seafood and deep-fried until golden.
                These portable, flavorful parcels are sold at street stalls and bakeries throughout Panama,
                making them an ideal quick breakfast or snack for busy expats.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm text-gray-600">
                Perfect for: Grab-and-go breakfasts
              </div>
            </div>

            {/* Tortilla */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-TEAL shadow-sm">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">
                Tortilla
              </h3>
              <p className="text-gray-700 mb-3">
                Panamanian tortillas are thin corn flatbreads, not the Mexican version. Eaten fresh, warm,
                and crispy with every meal, they're your edible utensil for beans and rice. Street vendors
                sell them hot throughout the day, and the smell of fresh tortillas is iconic in Panama.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm text-gray-600">
                When to eat: At every meal, especially breakfast
              </div>
            </div>

            {/* Bollos */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-GOLD shadow-sm">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">
                Bollos
              </h3>
              <p className="text-gray-700 mb-3">
                Corn-based dumplings wrapped in corn husks, steamed until tender. Variations include bollo
                de maíz (plain), bollo con queso (with cheese), and bollo de plátano (plantain). They're sold
                at markets and roadside stalls, especially in the morning.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm text-gray-600">
                Cost: $0.50-1.50 per bollo at street stalls
              </div>
            </div>

            {/* Raspao */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-TEAL shadow-sm">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">
                Raspao
              </h3>
              <p className="text-gray-700 mb-3">
                A shaved ice dessert topped with sweet syrups in tropical flavors like tamarind, passion fruit,
                and coconut. This refreshing treat is perfect for Panama's hot, humid climate and costs just
                $0.50-1.50. You'll find raspao carts on every street corner.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm text-gray-600">
                Best during: Midday heat, especially after meals
              </div>
            </div>

            {/* Beverages */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-GOLD shadow-sm">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">
                Panama Beer & Chicheme
              </h3>
              <p className="text-gray-700 mb-3">
                Panama's iconic Balboa beer is the national drink, affordable and refreshing. Chicheme is a
                thick, sweet corn and milk beverage, often with cinnamon, served as a breakfast drink or dessert.
                These beverages are essential to the Panamanian food experience.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm text-gray-600">
                Balboa beer: $1-2 at bars; Chicheme: homemade or at cafés
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Eat Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-8 text-brand-950">
            Where to Eat: Restaurant Types & Neighborhoods
          </h2>

          <div className="mb-12">
            <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-6">
              Restaurant Categories
            </h3>

            <div className="space-y-4">
              {/* Fondas */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h4 className="font-heading text-lg font-bold text-brand-950 mb-2">
                  Fondas (Local Eateries)
                </h4>
                <p className="text-gray-700 mb-3">
                  These humble, family-run restaurants serve authentic Panamanian food at incredible prices.
                  A full meal costs $4-7. Fondas typically offer a daily special (plato del día) featuring rice,
                  beans, protein, and plantains. Expect plastic chairs, bare walls, and exceptional flavors.
                </p>
                <div className="bg-white p-3 rounded text-sm border border-green-200">
                  <strong>Tip:</strong> Go during lunch hours (12-1 PM) for the busiest fondas with the freshest food.
                </div>
              </div>

              {/* Casual Restaurants */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h4 className="font-heading text-lg font-bold text-brand-950 mb-2">
                  Casual Restaurants & Marisquerías
                </h4>
                <p className="text-gray-700 mb-3">
                  Step up from fondas, these restaurants offer cleaner environments and wider menus. Seafood
                  restaurants (marisquerías) are common along coasts. Meals cost $8-15. You'll find a mix of
                  tourists and locals, and service is attentive. Many have waterfront views.
                </p>
                <div className="bg-white p-3 rounded text-sm border border-blue-200">
                  <strong>Specialty:</strong> Fresh ceviche, grilled fish, and seafood platters at midrange prices.
                </div>
              </div>

              {/* Fine Dining */}
              <div className="bg-yellow-50 border-l-4 border-brand-GOLD p-6 rounded">
                <h4 className="font-heading text-lg font-bold text-brand-950 mb-2">
                  Fine Dining & International
                </h4>
                <p className="text-gray-700 mb-3">
                  Panama City has world-class restaurants in Costa del Este and Casco Viejo. These establishments
                  feature Panamanian cuisine elevated with modern techniques, international fusion, and extensive
                  wine lists. Entrees cost $25-60+. Reservations are essential for popular spots.
                </p>
                <div className="bg-white p-3 rounded text-sm border border-yellow-200">
                  <strong>Experience:</strong> Fine dining with views of the Pacific and skyline.
                </div>
              </div>

              {/* International Chains */}
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                <h4 className="font-heading text-lg font-bold text-brand-950 mb-2">
                  International Chains
                </h4>
                <p className="text-gray-700 mb-3">
                  Major shopping centers house familiar chains: McDonald's, KFC, Subway, Pizza Hut, and local
                  franchises like Niko's Café and El Trapiche. These are reliable for consistent quality and
                  air conditioning, though they lack authentic Panamanian character. Meals average $6-12.
                </p>
                <div className="bg-white p-3 rounded text-sm border border-purple-200">
                  <strong>When to visit:</strong> For comfort food or when you're missing familiar flavors.
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-6">
              Best Restaurant Neighborhoods
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Casco Viejo */}
              <div className="bg-brand-50 p-6 rounded-lg border border-brand-100">
                <h4 className="font-heading text-lg font-bold text-brand-950 mb-3">
                  Casco Viejo (Old Town)
                </h4>
                <p className="text-gray-700 mb-4">
                  Historic colonial district with cobblestone streets and oceanfront views. Upscale restaurants,
                  trendy cafés, and international cuisine. High prices but atmospheric dining. Popular with tourists
                  and wealthy locals.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Casual to fine dining</li>
                  <li>✓ Great for dates and celebrations</li>
                  <li>✓ Walking tours and exploration</li>
                </ul>
              </div>

              {/* Marbella & Bella Vista */}
              <div className="bg-brand-50 p-6 rounded-lg border border-brand-100">
                <h4 className="font-heading text-lg font-bold text-brand-950 mb-3">
                  Marbella & Bella Vista
                </h4>
                <p className="text-gray-700 mb-4">
                  Residential neighborhoods mixing local fondas with upscale establishments. Mid-range prices,
                  residential atmosphere, and a strong local community presence. Excellent value-to-quality ratio.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Best value for daily dining</li>
                  <li>✓ Authentic neighborhood experience</li>
                  <li>✓ Mix of local and international</li>
                </ul>
              </div>

              {/* Costa del Este */}
              <div className="bg-brand-50 p-6 rounded-lg border border-brand-100">
                <h4 className="font-heading text-lg font-bold text-brand-950 mb-3">
                  Costa del Este
                </h4>
                <p className="text-gray-700 mb-4">
                  Modern, upscale neighborhood with high-rise restaurants and modern cuisine. Shopping malls,
                  contemporary atmospheres, and international brands. Highest prices in Panama City but refined
                  dining experiences.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ World-class fine dining</li>
                  <li>✓ Modern atmosphere and service</li>
                  <li>✓ Skyline and ocean views</li>
                </ul>
              </div>

              {/* Boquete */}
              <div className="bg-brand-50 p-6 rounded-lg border border-brand-100">
                <h4 className="font-heading text-lg font-bold text-brand-950 mb-3">
                  Boquete (Mountain Town)
                </h4>
                <p className="text-gray-700 mb-4">
                  Highland alternative with cool climate, expat-friendly restaurants, and fresh local produce.
                  Casual, laid-back dining with mountain views. Lower prices and strong community of foreign
                  residents.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Expat-friendly atmosphere</li>
                  <li>✓ Fresh fruits and vegetables</li>
                  <li>✓ Outdoor activities combined with dining</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-8 text-brand-950">
            Panama's Coffee Culture
          </h2>

          <div className="bg-white p-8 rounded-lg border-2 border-amber-200 mb-8">
            <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-4">
              Geisha Varietal: Panama's Pride
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Panama produces some of the world's finest and most expensive coffee. The Geisha (or Gesha)
              varietal, originating from the Boquete highlands, commands premium prices ($50-100+ per cup at
              specialty cafés) and has won international competitions. Its flavor profile features floral notes,
              jasmine undertones, and complex fruitiness that even non-coffee drinkers appreciate.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 p-4 rounded border border-amber-200">
                <h4 className="font-heading text-lg font-bold text-brand-950 mb-3">
                  Where to Find Geisha Coffee
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Specialty coffee shops in Boquete</li>
                  <li>• High-end cafés in Casco Viejo</li>
                  <li>• Coffee estates offering tastings</li>
                  <li>• Boutique hotels and restaurants</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded border border-amber-200">
                <h4 className="font-heading text-lg font-bold text-brand-950 mb-3">
                  Everyday Panama Coffee
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Café de bolsa: $0.50-1 everywhere</li>
                  <li>• Fresh-ground in fondas and cafés</li>
                  <li>• Arroz con leche: rice milk coffee</li>
                  <li>• Espresso as strong as Colombian</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-brand-TEAL to-brand-100 text-white p-8 rounded-lg">
            <h3 className="font-heading text-xl font-bold mb-4">
              Coffee Tourism in Boquete
            </h3>
            <p className="mb-4">
              Visit coffee farms in the Boquete highlands to learn about cultivation, roasting, and tasting.
              Most farms offer tours including farm-to-cup experiences. You'll gain appreciation for Panama's
              coffee heritage while supporting local agricultural communities.
            </p>
            <p className="text-sm">
              Tours typically cost $20-40 and include tastings, meals, and lodging options from budget hostels to
              luxury eco-lodges.
            </p>
          </div>
        </div>
      </section>

      {/* Vegetarian & Dietary Options */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-8 text-brand-950">
            Vegetarian & Dietary Considerations
          </h2>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Panama's traditional cuisine is meat-heavy, but expats with vegetarian, vegan, or dietary restrictions
            will find increasing options, especially in major cities and expat communities.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Vegetarian Options */}
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-4">
                Vegetarian Options
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Rice and beans (arroz y frijoles)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Plantain dishes (tostones, maduros)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Yuca fries and yuca con mojo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Corn tortillas and tamales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Vegetable soups and stews</span>
                </li>
              </ul>
            </div>

            {/* Vegan & Special Diets */}
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-4">
                Vegan & Special Dietary Needs
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">→</span>
                  <span className="text-gray-700">Vegan restaurants growing in Casco Viejo and Costa del Este</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">→</span>
                  <span className="text-gray-700">Gluten-free options becoming more common in upscale restaurants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">→</span>
                  <span className="text-gray-700">Paleo-friendly: Fresh seafood and vegetables available year-round</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">→</span>
                  <span className="text-gray-700">Keto-friendly: Abundant avocados, cheese, and proteins</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">→</span>
                  <span className="text-gray-700">Farmers markets: Fresh produce daily</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-brand-GOLD p-6 rounded">
            <h4 className="font-heading text-lg font-bold text-brand-950 mb-3">
              Pro Tip for Special Diets
            </h4>
            <p className="text-gray-700">
              Learning basic Spanish phrases like "No carne" (no meat), "Sin queso" (no cheese), and "Sin gluten"
              (gluten-free) will help you navigate local restaurants. Fondar owners are often accommodating if you
              explain your needs clearly. Shopping at local markets and cooking at home gives you the most control
              over your diet while providing authentic cultural immersion.
            </p>
          </div>
        </div>
      </section>

      {/* Food Delivery & Apps */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-8 text-brand-950">
            Food Delivery Apps & Services
          </h2>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Modern expats have convenient options for meal delivery, from international apps to local services.
            These platforms connect you to restaurants across Panama City with delivery times of 30-60 minutes.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* PedidosYa */}
            <div className="bg-white p-6 rounded-lg border-2 border-blue-300 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
                PedidosYa
              </h3>
              <p className="text-gray-700 mb-4">
                Latin America's largest food delivery app with most restaurant options in Panama. Covers Panama
                City, Colón, David, and smaller cities. App is intuitive in Spanish/English.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm">
                <strong>Commission:</strong> ~15-20% added to order
              </div>
            </div>

            {/* Glovo */}
            <div className="bg-white p-6 rounded-lg border-2 border-purple-300 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
                Glovo
              </h3>
              <p className="text-gray-700 mb-4">
                European delivery app operating in Panama City with fewer restaurant options than PedidosYa but
                reliable service. Also delivers groceries and convenience items from partner stores.
              </p>
              <div className="bg-purple-50 p-3 rounded text-sm">
                <strong>Specialty:</strong> Grocery delivery for hard-to-find items
              </div>
            </div>

            {/* Uber Eats */}
            <div className="bg-white p-6 rounded-lg border-2 border-green-300 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
                Uber Eats
              </h3>
              <p className="text-gray-700 mb-4">
                Limited presence in Panama but growing in Panama City's upscale areas. Fewer restaurants than
                competitors but integrates with Uber ride services for account convenience.
              </p>
              <div className="bg-green-50 p-3 rounded text-sm">
                <strong>Benefit:</strong> Same account as Uber rides
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-brand-TEAL to-brand-100 text-white p-8 rounded-lg">
            <h3 className="font-heading text-xl font-bold mb-4">
              Cost Breakdown & Tips
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Typical Delivery Costs</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Delivery fee: $1-3</li>
                  <li>• Platform commission: 15-20% of order</li>
                  <li>• Minimum order: $8-12</li>
                  <li>• Total meal cost: $15-30 for two</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Money-Saving Tips</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Pick up directly when possible</li>
                  <li>• Cook at home 70% of the time</li>
                  <li>• Use promo codes on app sign-up</li>
                  <li>• Eat at fondas for cheapest meals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Budget Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-8 text-brand-950">
            Food Budget for Expats
          </h2>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Panama offers exceptional value for dining. Your food budget depends on lifestyle choices. Here's what
            realistic budgets look like for different dining habits.
          </p>

          <div className="mb-10">
            <h3 className="font-heading text-2xl font-bold text-brand-TEAL mb-6">
              Cost Visualization: Monthly Food Budgets
            </h3>
            <div className="h-80 rounded-lg overflow-hidden shadow-lg border-2 border-brand-100">
              <CostBarChart
              data={[
                { label: 'Budget', value: 300, color: '#22c55e' },
                { label: 'Mid-Range', value: 550, color: '#00C5CB' },
                { label: 'Comfort', value: 900, color: '#D4A843' },
              ]}
              title="Monthly Food Budget ($/mo)"
            />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Budget Option 1 */}
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">
                Budget Dining
              </h3>
              <div className="text-3xl font-bold text-green-600 mb-4">
                $250-350/mo
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Fondas for lunch daily ($4-7)</li>
                <li>✓ Cook breakfast/dinner at home</li>
                <li>✓ Groceries from local markets</li>
                <li>✓ Occasional street food ($0.50-2)</li>
                <li>✓ No delivery services</li>
              </ul>
              <p className="text-xs text-gray-600 bg-white p-2 rounded">
                Realistic for: Retirees focused on savings, digital nomads cooking at home
              </p>
            </div>

            {/* Budget Option 2 */}
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">
                Moderate Dining
              </h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                $500-700/mo
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Mix of fondas and casual restaurants</li>
                <li>✓ Occasional delivery once weekly</li>
                <li>✓ Fresh market ingredients at home</li>
                <li>✓ 2-3 mid-range dinners monthly</li>
                <li>✓ Café culture and coffee habits</li>
              </ul>
              <p className="text-xs text-gray-600 bg-white p-2 rounded">
                Realistic for: Most expats balancing social life and dining variety
              </p>
            </div>

            {/* Budget Option 3 */}
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">
                Premium Dining
              </h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">
                $1,000+/mo
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Frequent fine dining</li>
                <li>✓ Regular delivery services</li>
                <li>✓ International restaurants</li>
                <li>✓ Premium coffee and brunches</li>
                <li>✓ Entertainment dining budget</li>
              </ul>
              <p className="text-xs text-gray-600 bg-white p-2 rounded">
                Realistic for: High-income expats prioritizing dining variety
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-brand-GOLD p-6 rounded">
            <h4 className="font-heading text-lg font-bold text-brand-950 mb-3">
              Money-Saving Strategies
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p className="font-semibold mb-2">Food Shopping</p>
                <ul className="space-y-1 text-sm">
                  <li>• Mercado de Abastos: 50% cheaper than supermarkets</li>
                  <li>• Shop daily for freshest prices</li>
                  <li>• Discount chains: Rey, Romero</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Dining Out</p>
                <ul className="space-y-1 text-sm">
                  <li>• Lunch specials (platos del día)</li>
                  <li>• Eat with locals, not tourists</li>
                  <li>• Skip Casco Viejo for daily meals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-8 text-brand-950">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white rounded-lg border-2 border-brand-100 overflow-hidden group">
              <summary className="p-6 cursor-pointer bg-gradient-to-r from-brand-50 to-white hover:from-brand-100 hover:to-brand-50 transition-colors flex items-center justify-between">
                <h3 className="font-heading text-lg font-bold text-brand-950">
                  Is the tap water safe to drink in Panama?
                </h3>
                <span className="text-2xl text-brand-TEAL group-open:rotate-180 transition-transform">
                  +
                </span>
              </summary>
              <div className="p-6 border-t border-brand-100 text-gray-700">
                <p className="mb-3">
                  Yes, tap water in Panama City is safe to drink. Most expats drink it without issues. However, in
                  rural areas or certain neighborhoods, bottled water is advisable. Many expats use water filters for
                  taste and extra assurance. A 5-gallon bottle costs $1-2 and is delivered weekly.
                </p>
                <p className="text-sm bg-blue-50 p-3 rounded">
                  <strong>Tip:</strong> Fill reusable bottles at cooler stations (garrafas) rather than buying plastic
                  bottles daily—more economical and eco-friendly.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white rounded-lg border-2 border-brand-100 overflow-hidden group">
              <summary className="p-6 cursor-pointer bg-gradient-to-r from-brand-50 to-white hover:from-brand-100 hover:to-brand-50 transition-colors flex items-center justify-between">
                <h3 className="font-heading text-lg font-bold text-brand-950">
                  What time do restaurants close?
                </h3>
                <span className="text-2xl text-brand-TEAL group-open:rotate-180 transition-transform">
                  +
                </span>
              </summary>
              <div className="p-6 border-t border-brand-100 text-gray-700">
                <p className="mb-3">
                  Fondas close around 3-4 PM. Casual restaurants stay open until 10-11 PM. Fine dining restaurants
                  operate until midnight or later. Most restaurants close on Sundays or open limited hours. Always call
                  ahead for weekend reservations at upscale establishments.
                </p>
                <p className="text-sm bg-blue-50 p-3 rounded">
                  <strong>Note:</strong> Lunch is typically 12-2 PM, dinner 7-10 PM. Eating outside these windows may
                  require visiting cafés or casual spots.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white rounded-lg border-2 border-brand-100 overflow-hidden group">
              <summary className="p-6 cursor-pointer bg-gradient-to-r from-brand-50 to-white hover:from-brand-100 hover:to-brand-50 transition-colors flex items-center justify-between">
                <h3 className="font-heading text-lg font-bold text-brand-950">
                  Can I find imported foods and specialty items?
                </h3>
                <span className="text-2xl text-brand-TEAL group-open:rotate-180 transition-transform">
                  +
                </span>
              </summary>
              <div className="p-6 border-t border-brand-100 text-gray-700">
                <p className="mb-3">
                  Yes, supermarket chains like Romero and Rey carry imported goods, though at 20-40% markups. Specialty
                  stores in Costa del Este stock international items. For specific needs (organic, gluten-free, vegan),
                  order online from Amazon or international retailers, though shipping can take 2-4 weeks.
                </p>
                <p className="text-sm bg-blue-50 p-3 rounded">
                  <strong>Expat Hack:</strong> Join Facebook groups like "Panama Expats Food Swap" to share bulk orders
                  and split shipping costs for imported items.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white rounded-lg border-2 border-brand-100 overflow-hidden group">
              <summary className="p-6 cursor-pointer bg-gradient-to-r from-brand-50 to-white hover:from-brand-100 hover:to-brand-50 transition-colors flex items-center justify-between">
                <h3 className="font-heading text-lg font-bold text-brand-950">
                  What are portion sizes like in Panama?
                </h3>
                <span className="text-2xl text-brand-TEAL group-open:rotate-180 transition-transform">
                  +
                </span>
              </summary>
              <div className="p-6 border-t border-brand-100 text-gray-700">
                <p className="mb-3">
                  Portions at fondas are generous—often enough for two meals. Casual restaurants serve moderate
                  portions. Fine dining offers smaller, beautifully plated portions. Street food portions are small and
                  designed for snacking. Expats often split meals at casual restaurants or eat just one meal daily at
                  fondas due to size.
                </p>
                <p className="text-sm bg-blue-50 p-3 rounded">
                  <strong>Pro Tip:</strong> Ask for "media porción" (half portion) if you're alone—many restaurants
                  offer this at 70% of the full price.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white rounded-lg border-2 border-brand-100 overflow-hidden group">
              <summary className="p-6 cursor-pointer bg-gradient-to-r from-brand-50 to-white hover:from-brand-100 hover:to-brand-50 transition-colors flex items-center justify-between">
                <h3 className="font-heading text-lg font-bold text-brand-950">
                  What's the tipping culture in Panama restaurants?
                </h3>
                <span className="text-2xl text-brand-TEAL group-open:rotate-180 transition-transform">
                  +
                </span>
              </summary>
              <div className="p-6 border-t border-brand-100 text-gray-700">
                <p className="mb-3">
                  Tipping is not mandatory but appreciated. At fondas, rounding up or leaving 5% is common. At casual
                  restaurants, 10% is standard. At fine dining, 15-20% is expected. Many restaurants automatically add
                  10% service charge ("propina") to bills—check before tipping twice. Cash tips are preferred and go
                  directly to servers.
                </p>
                <p className="text-sm bg-blue-50 p-3 rounded">
                  <strong>Note:</strong> Servers earn modest salaries; tips are a significant income source. Tipping
                  generously builds relationships and improves future service.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-brand-TEAL to-brand-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Panama's Food Culture?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Food is at the heart of Panamanian culture. From street food to fine dining, every meal tells a story
            of this vibrant nation. Let us help you plan your culinary expat journey.
          </p>
          <Link
            href={`/${lang}/contacto`}
            className="inline-block px-8 py-4 bg-brand-GOLD text-brand-950 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
          >
            Schedule Your Relocation Consultation Today
          </Link>
        </div>
      </section>
    </main>
  );
}
