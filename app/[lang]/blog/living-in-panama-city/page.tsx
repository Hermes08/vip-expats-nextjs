import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Living in Panama City: The Honest 2026 Expat Guide',
    description: 'Everything about living in Panama City as an expat — best neighborhoods, real costs, healthcare, pros and cons, and what long-term residents say.',
    openGraph: {
      title: 'Living in Panama City: The Honest 2026 Expat Guide',
      description: 'Complete guide to expat life in Panama City — neighborhoods, cost of living, healthcare, transport, and advice from long-term residents.',
      images: ['https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80'],
      type: 'article',
    },
  };
}

export default async function LivingInPanamaCityPage(props: Props) {
  const params = await props.params;
  const lang = params.lang || 'en';

  const isSpanish = lang === 'es';

  const content = {
    hero_title: isSpanish ? 'Vivir en Ciudad de Panamá: La Guía Honesta del Expatriado' : 'Living in Panama City: The Honest 2026 Expat Guide',
    hero_subtitle: isSpanish
      ? 'Todo lo que necesitas saber antes de mudarte: vecindarios, costos reales, salud, transporte y consejos de residentes de larga duración.'
      : 'Everything you need to know before moving: neighborhoods, real costs, healthcare, transport, and advice from long-term residents.',
    is_right_for_you: isSpanish ? '¿Es Ciudad de Panamá Adecuada para Ti?' : 'Is Panama City Right for You?',
    neighborhoods: isSpanish ? 'Los Mejores Vecindarios' : 'Best Neighborhoods',
    cost_breakdown: isSpanish ? 'Desglose del Costo Mensual Real' : 'Real Monthly Cost Breakdown',
    healthcare_title: isSpanish ? 'Sistema de Salud' : 'Healthcare',
    transport_title: isSpanish ? 'Transporte' : 'Transportation',
    schools_title: isSpanish ? 'Educación' : 'Education',
    love_title: isSpanish ? 'Lo Que Aman los Expatriados' : 'What Expats Love',
    struggle_title: isSpanish ? 'Lo Que Encuentran Desafiante' : 'What Expats Struggle With',
    cta: isSpanish ? '¿Listo para encontrar tu hogar en Ciudad de Panamá?' : 'Ready to find your Panama City home?',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 sm:p-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{content.hero_title}</h1>
            <p className="text-lg text-gray-200 leading-relaxed">{content.hero_subtitle}</p>
            <p className="text-sm text-gray-400 mt-6">Published April 3, 2026 | 15 min read</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Is Panama City Right for You? */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">{content.is_right_for_you}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pros Card */}
            <div className="backdrop-blur-xl bg-emerald-500/10 border border-emerald-400/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-emerald-300 mb-6">
                {isSpanish ? 'Pros ✓' : 'Pros ✓'}
              </h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{isSpanish ? 'Economía en USD, sin cambio de moneda' : 'USD economy — no currency exchange needed'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{isSpanish ? 'Fuera del cinturón de huracanes' : 'Outside the hurricane belt'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{isSpanish ? 'Inglés ampliamente hablado en negocios' : 'English widely spoken in business areas'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{isSpanish ? 'Cercano a Miami (2.5 horas de vuelo)' : 'Close to Miami (2.5 hours flight)'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{isSpanish ? 'Vibrante vida cosmopolita y multicultural' : 'Vibrant cosmopolitan and multicultural life'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{isSpanish ? 'Excelente gastronomía y vida nocturna' : 'Excellent dining and nightlife'}</span>
                </li>
              </ul>
            </div>

            {/* Cons Card */}
            <div className="backdrop-blur-xl bg-orange-500/10 border border-orange-400/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-orange-300 mb-6">
                {isSpanish ? 'Desafíos ✗' : 'Challenges ✗'}
              </h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>{isSpanish ? 'Tráfico congestionado, especialmente en horas pico' : 'Heavy traffic, especially during rush hours'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>{isSpanish ? 'Trámites burocráticos lentos' : 'Bureaucracy moves at a slower pace'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>{isSpanish ? 'Algunos vecindarios tienen alta humedad y ruido' : 'Some neighborhoods have high humidity and noise'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>{isSpanish ? 'Diferencias de seguridad entre vecindarios' : 'Safety varies significantly by neighborhood'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>{isSpanish ? 'Costo de vida más alto en vecindarios premium' : 'Higher cost of living in premium neighborhoods'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>{isSpanish ? 'Temporada de lluvia (mayo a noviembre)' : 'Rainy season (May to November)'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Neighborhoods Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">{content.neighborhoods}</h2>

          <div className="space-y-8">
            {/* Punta Pacifica / Punta Paitilla */}
            <div className="backdrop-blur-xl bg-blue-500/10 border border-blue-400/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">
                {isSpanish ? 'Punta Pacifica / Punta Paitilla (El Lujo)' : 'Punta Pacifica / Punta Paitilla (The Luxury)'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-300 mb-2">
                    <strong>{isSpanish ? 'Características:' : 'What you get:'}</strong>
                  </p>
                  <ul className="text-gray-200 text-sm space-y-1">
                    <li>• {isSpanish ? 'Frente al agua, vistas panorámicas' : 'Waterfront living, panoramic views'}</li>
                    <li>• {isSpanish ? 'Torres residenciales de lujo' : 'High-end residential towers'}</li>
                    <li>• {isSpanish ? 'La zona más segura de la ciudad' : 'Safest neighborhood in the city'}</li>
                    <li>• {isSpanish ? 'Amenities de clase mundial' : 'World-class amenities'}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">
                    <strong>{isSpanish ? 'Precios (2026):' : 'Pricing (2026):'}</strong>
                  </p>
                  <ul className="text-gray-200 text-sm space-y-1">
                    <li>• {isSpanish ? 'Compra: $200,000 - $600,000+' : 'Buy: $200K – $600K+'}</li>
                    <li>• {isSpanish ? 'Alquiler: $2,000 - $5,000/mes' : 'Rent: $2K – $5K/mo'}</li>
                    <li>• {isSpanish ? 'HOA: $400 - $1,000/mes' : 'HOA: $400 – $1K/mo'}</li>
                    <li>• {isSpanish ? 'Mejor para: Inversores, ejecutivos' : 'Best for: Investors, executives'}</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                {isSpanish
                  ? 'El epicentro del lujo moderno en Ciudad de Panamá. Comunidades cerradas, seguridad 24/7, y acceso a los mejores restaurantes y tiendas. Los expatriados que buscan comodidad máxima viven aquí.'
                  : 'The epicenter of modern luxury in Panama City. Gated communities, 24/7 security, and access to top restaurants and shopping. Expats seeking maximum comfort live here.'}
              </p>
            </div>

            {/* Costa del Este */}
            <div className="backdrop-blur-xl bg-indigo-500/10 border border-indigo-400/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-indigo-300 mb-4">
                {isSpanish ? 'Costa del Este (Familias Modernas)' : 'Costa del Este (Modern Families)'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-300 mb-2">
                    <strong>{isSpanish ? 'Características:' : 'What you get:'}</strong>
                  </p>
                  <ul className="text-gray-200 text-sm space-y-1">
                    <li>• {isSpanish ? 'Barrio moderno y planificado' : 'Modern, planned neighborhood'}</li>
                    <li>• {isSpanish ? 'Mejor para familias con niños' : 'Best for families with kids'}</li>
                    <li>• {isSpanish ? 'Escuelas internacionales cercanas' : 'International schools nearby'}</li>
                    <li>• {isSpanish ? 'Centros comerciales y parques' : 'Shopping centers and parks'}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">
                    <strong>{isSpanish ? 'Precios (2026):' : 'Pricing (2026):'}</strong>
                  </p>
                  <ul className="text-gray-200 text-sm space-y-1">
                    <li>• {isSpanish ? 'Compra: $200,000 - $500,000' : 'Buy: $200K – $500K'}</li>
                    <li>• {isSpanish ? 'Alquiler: $1,500 - $3,500/mes' : 'Rent: $1.5K – $3.5K/mo'}</li>
                    <li>• {isSpanish ? 'HOA: $250 - $600/mes' : 'HOA: $250 – $600/mo'}</li>
                    <li>• {isSpanish ? 'Mejor para: Familias expatriadas' : 'Best for: Expat families'}</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                {isSpanish
                  ? 'Comunidad planificada con infraestructura moderna. Ideal para familias que buscan seguridad, buenos colegios internacionales, y una vida más estructurada con acceso a parques y centros comerciales.'
                  : 'A planned community with modern infrastructure. Ideal for families seeking safety, quality international schools, and structured living with parks and shopping centers.'}
              </p>
            </div>

            {/* El Cangrejo */}
            <div className="backdrop-blur-xl bg-cyan-500/10 border border-cyan-400/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                {isSpanish ? 'El Cangrejo (La Opción Urbana)' : 'El Cangrejo (The Urban Choice)'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-300 mb-2">
                    <strong>{isSpanish ? 'Características:' : 'What you get:'}</strong>
                  </p>
                  <ul className="text-gray-200 text-sm space-y-1">
                    <li>• {isSpanish ? 'Barrio urbano, muy caminable' : 'Walkable urban neighborhood'}</li>
                    <li>• {isSpanish ? 'Restaurantes, cafés, vida nocturna' : 'Restaurants, cafes, nightlife'}</li>
                    <li>• {isSpanish ? 'Precios más accesibles' : 'More affordable prices'}</li>
                    <li>• {isSpanish ? 'Menos seguro que Punta Pacifica' : 'Less secure than Punta Pacifica'}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">
                    <strong>{isSpanish ? 'Precios (2026):' : 'Pricing (2026):'}</strong>
                  </p>
                  <ul className="text-gray-200 text-sm space-y-1">
                    <li>• {isSpanish ? 'Compra: $100,000 - $250,000' : 'Buy: $100K – $250K'}</li>
                    <li>• {isSpanish ? 'Alquiler: $800 - $1,400/mes' : 'Rent: $800 – $1.4K/mo'}</li>
                    <li>• {isSpanish ? 'HOA: $150 - $300/mes' : 'HOA: $150 – $300/mo'}</li>
                    <li>• {isSpanish ? 'Mejor para: Jóvenes profesionales' : 'Best for: Young professionals'}</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                {isSpanish
                  ? 'El corazón urbano de Panamá. Perfecto para jóvenes profesionales y expatriados que quieren una vida de ciudad con restaurantes, bares, y una comunidad diversa. Requiere más cuidado con la seguridad personal.'
                  : 'The urban heart of Panama. Perfect for young professionals and expats seeking city living with restaurants, bars, and diverse community. Requires more personal security awareness.'}
              </p>
            </div>

            {/* Miraflores / Albrook */}
            <div className="backdrop-blur-xl bg-teal-500/10 border border-teal-400/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-teal-300 mb-4">
                {isSpanish ? 'Miraflores / Albrook (Lo Tradicional)' : 'Miraflores / Albrook (The Traditional)'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-300 mb-2">
                    <strong>{isSpanish ? 'Características:' : 'What you get:'}</strong>
                  </p>
                  <ul className="text-gray-200 text-sm space-y-1">
                    <li>• {isSpanish ? 'Barrios más tranquilos' : 'Quieter neighborhoods'}</li>
                    <li>• {isSpanish ? 'Acceso a casas (no solo apartamentos)' : 'Access to houses (not just condos)'}</li>
                    <li>• {isSpanish ? 'Sensación más local y relajada' : 'More local, relaxed vibe'}</li>
                    <li>• {isSpanish ? 'Buenas escuelas locales' : 'Good local schools'}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">
                    <strong>{isSpanish ? 'Precios (2026):' : 'Pricing (2026):'}</strong>
                  </p>
                  <ul className="text-gray-200 text-sm space-y-1">
                    <li>• {isSpanish ? 'Compra: $150,000 - $350,000' : 'Buy: $150K – $350K'}</li>
                    <li>• {isSpanish ? 'Alquiler: $700 - $1,000/mes' : 'Rent: $700 – $1K/mo'}</li>
                    <li>• {isSpanish ? 'Muy pocas tasas HOA' : 'Low/no HOA fees'}</li>
                    <li>• {isSpanish ? 'Mejor para: Pensionados, familias' : 'Best for: Retirees, families'}</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                {isSpanish
                  ? 'Comunidades más tranquilas fuera del centro bullicioso. Ideal para quienes quieren una vida más relajada pero con fácil acceso a la ciudad. Muchos expatriados jubilados viven aquí.'
                  : 'Quieter communities outside the busy center. Ideal for those seeking a relaxed lifestyle with easy city access. Many retired expats live here.'}
              </p>
            </div>

            {/* Casco Viejo */}
            <div className="backdrop-blur-xl bg-pink-500/10 border border-pink-400/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-pink-300 mb-4">
                {isSpanish ? 'Casco Viejo (Lo Bohemio)' : 'Casco Viejo (The Bohemian)'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-300 mb-2">
                    <strong>{isSpanish ? 'Características:' : 'What you get:'}</strong>
                  </p>
                  <ul className="text-gray-200 text-sm space-y-1">
                    <li>• {isSpanish ? 'Distrito histórico de la UNESCO' : 'UNESCO historic district'}</li>
                    <li>• {isSpanish ? 'Arquitectura colonial colorida' : 'Colorful colonial architecture'}</li>
                    <li>• {isSpanish ? 'Cultura, arte, galerías' : 'Culture, art, galleries'}</li>
                    <li>• {isSpanish ? 'Ruido y seguridad nocturna variable' : 'Noise and variable night security'}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">
                    <strong>{isSpanish ? 'Precios (2026):' : 'Pricing (2026):'}</strong>
                  </p>
                  <ul className="text-gray-200 text-sm space-y-1">
                    <li>• {isSpanish ? 'Compra: $200,000 - $500,000' : 'Buy: $200K – $500K'}</li>
                    <li>• {isSpanish ? 'Alquiler: $1,200 - $2,500/mes' : 'Rent: $1.2K – $2.5K/mo'}</li>
                    <li>• {isSpanish ? 'Mantenimiento de patrimonio' : 'Heritage maintenance costs'}</li>
                    <li>• {isSpanish ? 'Mejor para: Jóvenes creativos' : 'Best for: Young creatives'}</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                {isSpanish
                  ? 'Histórico, artístico, y vibrante. Perfecto para jóvenes expatriados que buscan autenticidad, arte, y vida cultural. Espera ruido nocturno, tráfico, y necesidad de cuidado personal con seguridad.'
                  : 'Historic, artistic, and vibrant. Perfect for young expats seeking authenticity, art, and cultural life. Expect nighttime noise, traffic, and need for personal security awareness.'}
              </p>
            </div>
          </div>
        </div>

        {/* Real Monthly Cost Breakdown */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">{content.cost_breakdown}</h2>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left px-6 py-4 text-white font-semibold">
                    {isSpanish ? 'Categoría' : 'Category'}
                  </th>
                  <th className="text-left px-6 py-4 text-white font-semibold">
                    {isSpanish ? 'Rango Bajo' : 'Low Range'}
                  </th>
                  <th className="text-left px-6 py-4 text-white font-semibold">
                    {isSpanish ? 'Rango Alto' : 'High Range'}
                  </th>
                  <th className="text-left px-6 py-4 text-white font-semibold">
                    {isSpanish ? 'Notas' : 'Notes'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/5 transition">
                  <td className="px-6 py-4 text-gray-300 font-semibold">
                    {isSpanish ? 'Alquiler' : 'Rent'}
                  </td>
                  <td className="px-6 py-4 text-blue-300">$800</td>
                  <td className="px-6 py-4 text-blue-300">$3,500</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">
                    {isSpanish ? 'Depende del vecindario y tamaño' : 'Varies by neighborhood & size'}
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="px-6 py-4 text-gray-300 font-semibold">
                    {isSpanish ? 'Servicios (Agua, Luz, Gas)' : 'Utilities (Water, Power, Gas)'}
                  </td>
                  <td className="px-6 py-4 text-blue-300">$80</td>
                  <td className="px-6 py-4 text-blue-300">$200</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">
                    {isSpanish ? 'Más alto en temporada de lluvia' : 'Higher in rainy season'}
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="px-6 py-4 text-gray-300 font-semibold">
                    {isSpanish ? 'Comestibles' : 'Groceries'}
                  </td>
                  <td className="px-6 py-4 text-blue-300">$300</td>
                  <td className="px-6 py-4 text-blue-300">$600</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">
                    {isSpanish ? 'Más barato en mercados locales' : 'Cheaper at local markets'}
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="px-6 py-4 text-gray-300 font-semibold">
                    {isSpanish ? 'Restaurantes' : 'Dining Out'}
                  </td>
                  <td className="px-6 py-4 text-blue-300">$200</td>
                  <td className="px-6 py-4 text-blue-300">$500</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">
                    {isSpanish ? 'Muy variable según preferencias' : 'Highly variable by preference'}
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="px-6 py-4 text-gray-300 font-semibold">
                    {isSpanish ? 'Salud (Seguro + Gastos)' : 'Healthcare (Insurance + Out-of-Pocket)'}
                  </td>
                  <td className="px-6 py-4 text-blue-300">$100</td>
                  <td className="px-6 py-4 text-blue-300">$300</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">
                    {isSpanish ? 'Mucho más barato que EE.UU.' : 'Much cheaper than USA'}
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="px-6 py-4 text-gray-300 font-semibold">
                    {isSpanish ? 'Transporte (Uber, Metro, Buses)' : 'Transport (Uber, Metro, Buses)'}
                  </td>
                  <td className="px-6 py-4 text-blue-300">$50</td>
                  <td className="px-6 py-4 text-blue-300">$150</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">
                    {isSpanish ? 'Sin auto es posible' : 'No car needed in most areas'}
                  </td>
                </tr>
                <tr className="bg-emerald-500/10 hover:bg-emerald-500/20 transition">
                  <td className="px-6 py-4 text-emerald-300 font-bold">
                    {isSpanish ? 'TOTAL MENSUAL' : 'MONTHLY TOTAL'}
                  </td>
                  <td className="px-6 py-4 text-emerald-400 font-bold">$1,800</td>
                  <td className="px-6 py-4 text-emerald-400 font-bold">$5,000</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">
                    {isSpanish ? 'Depende mucho de tu estilo de vida' : 'Highly lifestyle-dependent'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-400/30 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong>{isSpanish ? 'Nota Importante: ' : 'Important Note: '}</strong>
              {isSpanish
                ? 'Una persona soltera puede vivir cómodamente en $1,800-$2,200/mes. Una familia necesitará $3,500-$5,000/mes dependiendo de las escuelas y el estilo de vida.'
                : 'A single person can live comfortably on $1,800-$2,200/mo. A family will need $3,500-$5,000/mo depending on schools and lifestyle.'}
            </p>
          </div>
        </div>

        {/* Healthcare Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">{content.healthcare_title}</h2>

          <div className="backdrop-blur-xl bg-purple-500/10 border border-purple-400/30 rounded-xl p-8">
            <p className="text-gray-200 mb-6 leading-relaxed">
              {isSpanish
                ? 'El sistema de salud en Panamá es excelente y 60-70% más barato que en EE.UU. Muchos doctores hablan inglés. Los hospitales acreditados por JCI (Comisión Conjunta Internacional) cumplen con estándares estadounidenses.'
                : 'Healthcare in Panama is excellent and 60-70% cheaper than the US. Many doctors speak English. JCI-accredited hospitals meet US standards.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-300 mb-4">
                  {isSpanish ? 'Principales Hospitales' : 'Major Hospitals'}
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <strong>Hospital Punta Pacifica</strong>
                    <p className="text-sm text-gray-400">JCI-acreditado, lujo, área de Punta Pacifica</p>
                  </li>
                  <li>
                    <strong>Hospital Nacional</strong>
                    <p className="text-sm text-gray-400">{isSpanish ? 'Público, confiable, asequible' : 'Public, reliable, affordable'}</p>
                  </li>
                  <li>
                    <strong>MedExpress</strong>
                    <p className="text-sm text-gray-400">{isSpanish ? 'Clínicas privadas en toda la ciudad' : 'Private clinics throughout city'}</p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-300 mb-4">
                  {isSpanish ? 'Costos Típicos' : 'Typical Costs'}
                </h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li>• {isSpanish ? 'Consulta médica: $30-80' : 'Doctor visit: $30-80'}</li>
                  <li>• {isSpanish ? 'Resonancia MRI: $300-500' : 'MRI scan: $300-500'}</li>
                  <li>• {isSpanish ? 'Limpieza dental: $80-150' : 'Dental cleaning: $80-150'}</li>
                  <li>• {isSpanish ? 'Seguro de salud: $100-300/mes' : 'Health insurance: $100-300/mo'}</li>
                  <li>• {isSpanish ? 'Cirugía de rodilla: $5,000-8,000' : 'Knee surgery: $5K-8K'}</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 text-sm mt-6">
              {isSpanish
                ? 'Recomendación: Obtén un seguro de salud privado (Cigna, MAPFRE, Seguros Monterrey) para cobertura comprensiva. Muchos expatriados también comparan costos con Miami para procedimientos mayores — a menudo es más barato volar a Panamá.'
                : 'Recommendation: Get private health insurance (Cigna, MAPFRE, Seguros Monterrey) for comprehensive coverage. Many expats also compare costs with Miami for major procedures — flying to Panama is often cheaper.'}
            </p>
          </div>
        </div>

        {/* Transportation Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">{content.transport_title}</h2>

          <div className="backdrop-blur-xl bg-green-500/10 border border-green-400/30 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-green-300 mb-4">Uber</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• {isSpanish ? 'Funciona perfectamente en Panamá' : 'Works great in Panama'}</li>
                  <li>• {isSpanish ? 'Viaje típico centro: $3-8' : 'Typical downtown trip: $3-8'}</li>
                  <li>• {isSpanish ? 'A Punta Pacifica: $10-15' : 'To Punta Pacifica: $10-15'}</li>
                  <li>• {isSpanish ? 'Seguro y confiable' : 'Safe and reliable'}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-300 mb-4">Metro</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• {isSpanish ? 'Línea 1 & 2 conectan toda la ciudad' : 'Lines 1 & 2 connect entire city'}</li>
                  <li>• {isSpanish ? 'Tarifa: $0.35 por viaje' : 'Fare: $0.35 per trip'}</li>
                  <li>• {isSpanish ? 'Rápido pero congestionado en horas pico' : 'Fast but crowded at rush hour'}</li>
                  <li>• {isSpanish ? 'Frecuencia: cada 5-15 minutos' : 'Frequency: every 5-15 minutes'}</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-green-400/20">
              <h4 className="font-semibold text-green-300 mb-4">{isSpanish ? 'Buses Locales' : 'Local Buses'}</h4>
              <p className="text-gray-300 text-sm mb-4">
                {isSpanish
                  ? 'Los "diablos rojos" (minibuses) son increíblemente baratos ($0.25 viajes cortos) pero caóticos, no dan paradas y son más riesgosos. Evita si es tu primer mes en Panamá.'
                  : 'The "diablo rojos" (minibuses) are incredibly cheap ($0.25 short trips) but chaotic, don't announce stops, and are riskier. Avoid if new to Panama.'}
              </p>
              <p className="text-gray-300 text-sm">
                <strong>{isSpanish ? 'Veredicto: ' : 'Verdict: '}</strong>
                {isSpanish
                  ? 'NO necesitas auto en El Cangrejo, Costa del Este, o Punta Pacifica. Uber es barato y seguro. Si vives en Miraflores o las afueras, un auto podría ser útil.'
                  : 'You DON'T need a car in El Cangrejo, Costa del Este, or Punta Pacifica. Uber is cheap and safe. If you live in Miraflores or outlying areas, a car might help.'}
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">{content.schools_title}</h2>

          <div className="backdrop-blur-xl bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-8">
            <p className="text-gray-200 mb-6">
              {isSpanish
                ? 'Si tienes hijos, las escuelas internacionales son esenciales. La educación pública en Panamá es variable. Las escuelas internacionales cuestan $5,000-20,000/año pero ofrecen un currículo bilingüe fuerte.'
                : 'If you have kids, international schools are essential. Public education in Panama is uneven. International schools cost $5K-20K/year but offer strong bilingual curriculum.'}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-yellow-400 text-xl mt-1">•</div>
                <div>
                  <h4 className="font-semibold text-yellow-300">International School of Panama</h4>
                  <p className="text-gray-300 text-sm">
                    {isSpanish
                      ? 'Una de las mejores, especialmente en primaria. Ubicada en Costa del Este. Tuition: $13,000-18,000/año'
                      : 'One of the best, especially in elementary. Located in Costa del Este. Tuition: $13K-18K/year'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-yellow-400 text-xl mt-1">•</div>
                <div>
                  <h4 className="font-semibold text-yellow-300">Balboa Academy</h4>
                  <p className="text-gray-300 text-sm">
                    {isSpanish
                      ? 'Currículo estadounidense fuerte, buena reputación. Ubicada en Albrook. Tuition: $8,000-15,000/año'
                      : 'Strong US curriculum, good reputation. Located in Albrook. Tuition: $8K-15K/year'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-yellow-400 text-xl mt-1">•</div>
                <div>
                  <h4 className="font-semibold text-yellow-300">King's College Panama</h4>
                  <p className="text-gray-300 text-sm">
                    {isSpanish
                      ? 'Excelente opción, British curriculum. Ubicada en Coronado. Tuition: $9,000-16,000/año'
                      : 'Excellent option, British curriculum. Located in Coronado. Tuition: $9K-16K/year'}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm mt-6 pt-6 border-t border-yellow-400/20">
              {isSpanish
                ? 'Si solo hablas inglés, las escuelas internacionales te mantienen en la burbuja anglófona. Considera una escuela bilingüe que enseñe español también — es mejor para la integración a largo plazo.'
                : 'If you only speak English, international schools keep you in the English bubble. Consider a bilingual school teaching Spanish too — better for long-term integration.'}
            </p>
          </div>
        </div>

        {/* What Expats Love */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">{content.love_title}</h2>

          <div className="backdrop-blur-xl bg-emerald-500/10 border border-emerald-400/30 rounded-xl p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-emerald-400 text-2xl">✓</span>
                <div>
                  <p className="text-gray-200">
                    <strong>{isSpanish ? 'Economía en USD' : 'USD Economy'}</strong>
                  </p>
                  <p className="text-gray-400 text-sm">
                    {isSpanish ? 'Sin cambio de moneda, estabilidad financiera.' : 'No currency exchange, financial stability.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-emerald-400 text-2xl">✓</span>
                <div>
                  <p className="text-gray-200">
                    <strong>{isSpanish ? 'Fuera del Cinturón de Huracanes' : 'Outside Hurricane Belt'}</strong>
                  </p>
                  <p className="text-gray-400 text-sm">
                    {isSpanish ? 'Sin huracanes. Clima tropical pero predecible.' : 'No hurricanes. Tropical but predictable climate.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-emerald-400 text-2xl">✓</span>
                <div>
                  <p className="text-gray-200">
                    <strong>{isSpanish ? 'Cercanía a Miami' : 'Close to Miami'}</strong>
                  </p>
                  <p className="text-gray-400 text-sm">
                    {isSpanish ? '2.5 horas de vuelo a USA. Fácil para visitas.' : '2.5 hour flight to USA. Easy for visits.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-emerald-400 text-2xl">✓</span>
                <div>
                  <p className="text-gray-200">
                    <strong>{isSpanish ? 'Hub Aeroportuario' : 'Tocumen Hub Airport'}</strong>
                  </p>
                  <p className="text-gray-400 text-sm">
                    {isSpanish ? 'Vuelos baratos a toda América Latina.' : 'Cheap flights throughout Latin America.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-emerald-400 text-2xl">✓</span>
                <div>
                  <p className="text-gray-200">
                    <strong>{isSpanish ? 'Inglés en Negocios' : 'English in Business'}</strong>
                  </p>
                  <p className="text-gray-400 text-sm">
                    {isSpanish ? 'Muchos hablan inglés en áreas de negocios.' : 'Many speak English in business areas.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-emerald-400 text-2xl">✓</span>
                <div>
                  <p className="text-gray-200">
                    <strong>{isSpanish ? 'Gastronomía Excelente' : 'Excellent Food Scene'}</strong>
                  </p>
                  <p className="text-gray-400 text-sm">
                    {isSpanish ? 'Desde sushi a fusión panameña. Opciones sin fin.' : 'From sushi to Panamanian fusion. Endless options.'}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* What Expats Struggle With */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">{content.struggle_title}</h2>

          <div className="backdrop-blur-xl bg-red-500/10 border border-red-400/30 rounded-xl p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-red-400 text-2xl">⚠</span>
                <div>
                  <p className="text-gray-200">
                    <strong>{isSpanish ? 'Tráfico Insano' : 'Insane Traffic'}</strong>
                  </p>
                  <p className="text-gray-400 text-sm">
                    {isSpanish ? 'Las horas pico pueden ser de 1-2 horas. Infraestructura insuficiente.' : 'Rush hour can be 1-2 hours. Insufficient infrastructure.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-400 text-2xl">⚠</span>
                <div>
                  <p className="text-gray-200">
                    <strong>{isSpanish ? 'Burocracia Lenta' : 'Slow Bureaucracy'}</strong>
                  </p>
                  <p className="text-gray-400 text-sm">
                    {isSpanish ? 'Los trámites aduanales y de gobierno toman tiempo. Documentación de autos, cédulas, etc.' : 'Customs and government processes take time. Car registration, IDs, etc.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-400 text-2xl">⚠</span>
                <div>
                  <p className="text-gray-200">
                    <strong>{isSpanish ? 'Humedad y Lluvia' : 'Humidity and Rain'}</strong>
                  </p>
                  <p className="text-gray-400 text-sm">
                    {isSpanish ? 'Mayo-noviembre = temporada de lluvia. Humedad constante causa moho, óxido en metales.' : 'May-November = rainy season. Constant humidity causes mold, rust.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-400 text-2xl">⚠</span>
                <div>
                  <p className="text-gray-200">
                    <strong>{isSpanish ? 'Variación de Seguridad' : 'Security Varies by Area'}</strong>
                  </p>
                  <p className="text-gray-400 text-sm">
                    {isSpanish ? 'Punta Pacifica es muy segura. El Cangrejo requiere cuidado. Algunos barrios periféricos son de alto riesgo.' : 'Punta Pacifica is very safe. El Cangrejo needs care. Some outlying areas are high-risk.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-400 text-2xl">⚠</span>
                <div>
                  <p className="text-gray-200">
                    <strong>{isSpanish ? 'Ruido Ocasional' : 'Occasional Noise'}</strong>
                  </p>
                  <p className="text-gray-400 text-sm">
                    {isSpanish ? 'Música, fiestas, construcción. Casco Viejo especialmente ruidoso. Invierte en buenos audífonos.' : 'Music, parties, construction. Casco Viejo especially loud. Invest in good headphones.'}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-400 text-2xl">⚠</span>
                <div>
                  <p className="text-gray-200">
                    <strong>{isSpanish ? 'Brecha Cultural al Inicio' : 'Cultural Gap at First'}</strong>
                  </p>
                  <p className="text-gray-400 text-sm">
                    {isSpanish ? 'Los primeros 3-6 meses pueden ser abrumadores. El ritmo de vida es diferente. Aprende algo de español para mejores conexiones.' : 'First 3-6 months can be overwhelming. Pace of life is different. Learn some Spanish for better connections.'}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Checklist */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            {isSpanish ? 'Checklist: Antes de Mudarte' : 'Checklist: Before You Move'}
          </h2>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-4">
                  {isSpanish ? 'Documentación & Legal' : 'Documentation & Legal'}
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>☐ {isSpanish ? 'Pasaporte vigente' : 'Valid passport'}</li>
                  <li>☐ {isSpanish ? 'Visa de residencia/pensionado' : 'Residency/Pensioner visa'}</li>
                  <li>☐ {isSpanish ? 'Certificado de antecedentes penales' : 'Police clearance certificate'}</li>
                  <li>☐ {isSpanish ? 'Obtener cédula panameña' : 'Get Panamanian ID (cédula)'}</li>
                  <li>☐ {isSpanish ? 'Seguro de salud' : 'Health insurance'}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">
                  {isSpanish ? 'Financiero & Logística' : 'Finance & Logistics'}
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>☐ {isSpanish ? 'Abrir cuenta bancaria' : 'Open bank account'}</li>
                  <li>☐ {isSpanish ? 'Servicios de mudanza internacional' : 'International moving services'}</li>
                  <li>☐ {isSpanish ? 'Usar código bancario correcto para transferencias' : 'Use correct banking codes for transfers'}</li>
                  <li>☐ {isSpanish ? 'Investigar vecindarios in situ' : 'Scout neighborhoods in person'}</li>
                  <li>☐ {isSpanish ? 'Conectar con grupos de expatriados en línea' : 'Connect with expat groups online'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Final Thoughts */}
        <div className="mb-16">
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-purple-400/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {isSpanish ? 'El Veredicto Final' : 'The Final Verdict'}
            </h3>
            <p className="text-gray-200 leading-relaxed mb-4">
              {isSpanish
                ? 'Vivir en Ciudad de Panamá es increíblemente asequible, seguro (si eliges bien tu vecindario), y ofrece una calidad de vida real sin el "lujo innecesario". El tráfico es malo, la burocracia es lenta, pero la comunidad expatriada es fuerte y acogedora.'
                : 'Living in Panama City is incredibly affordable, safe (if you choose your neighborhood wisely), and offers genuine quality of life without unnecessary fluff. Traffic sucks, bureaucracy is slow, but the expat community is strong and welcoming.'}
            </p>
            <p className="text-gray-200 leading-relaxed">
              {isSpanish
                ? 'Los mejores candidatos son: personas que pueden trabajar remotamente, jubilados con pensión fija, y familias que buscan oportunidades internacionales a bajo costo. Si tienes $2,000-3,000/mes de ingresos pasivos, puedes vivir bien aquí.'
                : 'Best candidates are: remote workers, retirees on fixed pensions, and families seeking international opportunities on a budget. If you have $2K-3K/mo in passive income, you can live well here.'}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-16">
          <div className="backdrop-blur-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">{content.cta}</h3>
            <p className="text-gray-200 mb-6">
              {isSpanish
                ? 'Explora listados de propiedades en Ciudad de Panamá y encuentra el hogar perfecto para tu nueva vida.'
                : 'Explore property listings in Panama City and find the perfect home for your new life.'}
            </p>
            <Link
              href={`/${lang}/propiedades`}
              className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition"
            >
              {isSpanish ? 'Ver Propiedades' : 'Browse Properties'}
            </Link>
          </div>
        </div>

        {/* Share & Related */}
        <div className="pt-12 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-6">
            {isSpanish
              ? '¿Preguntas sobre vivir en Panamá City? Únete a nuestra comunidad o contáctanos.'
              : 'Questions about living in Panama City? Join our community or contact us.'}
          </p>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-gray-300 text-sm transition">
              {isSpanish ? 'Compartir' : 'Share'}
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-gray-300 text-sm transition">
              {isSpanish ? 'Guardar' : 'Save'}
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-gray-300 text-sm transition">
              {isSpanish ? 'Contactar Agente' : 'Contact Agent'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
