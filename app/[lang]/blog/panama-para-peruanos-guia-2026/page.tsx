import type { Metadata } from 'next';
import Link from 'next/link';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';



export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const slug = 'panama-para-peruanos-guia-2026';
  const domain = 'https://panamarealestatesale.com';
  const canonical = `${domain}/${lang}/blog/${slug}`;

  return {
  title: 'Guía Panamá para Peruanos 2026: Visa, Costos, Residencia',
  description: 'Peruanos emigrando a Panamá. Opciones de visa, costos, residencia.',
  keywords: 'panama, para',
  alternates: {
    canonical,
    languages: {
      'en': 'https://panamarealestatesale.com/en/blog/panama-para-peruanos-guia-2026',
      'es': 'https://panamarealestatesale.com/es/blog/panama-para-peruanos-guia-2026',
      'pt': 'https://panamarealestatesale.com/pt/blog/panama-para-peruanos-guia-2026',
      'de': 'https://panamarealestatesale.com/de/blog/panama-para-peruanos-guia-2026',
    },
  },
  openGraph: {
    title: 'Guía Panamá para Peruanos 2026: Visa, Costos, Residencia',
    description: 'Peruanos emigrando a Panamá. Opciones de visa, costos, residencia.',
    type: 'article',
    url: canonical,
    images: [{ url: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80', width: 1200, height: 630, alt: 'Guía Panamá para Peruanos 2026: Visa, Costos, Residencia' }],
    locale: 'en_US',
    siteName: 'VIP Expats Panama',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guía Panamá para Peruanos 2026: Visa, Costos, Residencia',
    description: 'Peruanos emigrando a Panamá. Opciones de visa, costos, residencia.',
    images: ['https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80'],
  },
};
}

const peruChartData = [
  { label: 'Lima', value: 1100, color: '#6b7280' },
  { label: 'Cusco', value: 800, color: '#9ca3af' },
  { label: 'Panamá City', value: 1800, color: '#00C5CB' },
];

export default function PanamaParaPeruanosGuia({ params }) {
  const { lang } = params;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-50 to-white pt-12 pb-8 md:pt-20 md:pb-12">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="mb-6">
            <span className="inline-block text-sm font-semibold text-brand-TEAL uppercase tracking-wide">
              Guía para Peruanos
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mb-4 leading-tight">
            Panamá para Peruanos 2026
          </h1>
          <p className="text-xl text-brand-700 mb-6 leading-relaxed">
            Residencia, Inversión Inmobiliaria y Cómo Emigrar desde Perú
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center text-sm text-brand-600">
            <span>📅 Actualizado: Abril 2026</span>
            <span>•</span>
            <span>👥 Comunidad: 50,000+ peruanos en Panamá</span>
            <span>•</span>
            <span>✈️ Vuelo Lima-Panamá: 5.5 horas</span>
            <span>•</span>
            <span>🕐 Lectura: 12-15 minutos</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 md:px-8 py-8 md:py-12">
        {/* Introducción */}
        <section className="mb-12">
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Perú es un país de oportunidades, pero también es un país con desafíos: volatilidad política, criminalidad en Lima, devaluación del sol peruano contra el dólar. Para muchos peruanos que han construido patrimonio o negocios exitosos, la pregunta inevitable es: "¿Cómo protejo lo que he ganado?"
          </p>
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Panamá ofrece la respuesta. Y hay algo ESPECIAL para peruanos: <strong>Perú está en la lista oficial de "Friendly Nations"</strong>. Esto significa que puedes obtener residencia permanente en Panamá en 30-45 días, sin requisitos complejos, y costo accesible.
          </p>
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            En esta guía te explicamos:
          </p>
          <ul className="list-disc list-inside text-lg text-brand-700 mb-6 space-y-3">
            <li>Por qué Panamá es la solución perfecta para peruanos que buscan estabilidad</li>
            <li>Cómo el proceso de Visa Friendly Nations funciona específicamente para ti</li>
            <li>Comparación real de costos: Lima vs Panamá en 2026</li>
            <li>Seguridad: dónde viven los peruanos en Panamá y por qué es más seguro que Lima</li>
            <li>Cómo invertir en bienes raíces como cobertura contra la devaluación del sol</li>
            <li>La escena culinaria peruana en Panamá (sí, hay gastronomía de clase mundial)</li>
          </ul>
        </section>

        {/* Panama City 3D Scene */}
        <section className="my-12 rounded-lg overflow-hidden border border-brand-100 bg-brand-50 h-[400px]">
          <PanamaCityScene />
        </section>

        {/* ¿Por Qué Panamá para Peruanos? */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            ¿Por Qué Panamá es la Solución Perfecta para Peruanos?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">✈️ Proximidad Geográfica</h3>
              <p className="text-brand-700 text-sm">
                5.5 horas de vuelo directo desde Lima (Copa Airlines diario). Más cercano que Miami, más rápido que viajar a provincia peruana.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🪙 Sol Peruano vs USD</h3>
              <p className="text-brand-700 text-sm">
                El sol pierde consistentemente vs USD. Panamá usa USD. Tu patrimonio se protege automáticamente en moneda fuerte.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🟢 Visa Friendly Nations</h3>
              <p className="text-brand-700 text-sm">
                Perú está en la lista. Residencia permanente en 30-45 días. Sin entrevista, sin complejidad burocrática.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🛡️ Seguridad y Estabilidad</h3>
              <p className="text-brand-700 text-sm">
                Panamá City es más segura que Lima para expats. Zonas como Punta Pacifica y Amador tienen nivel de seguridad de primer mundo.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">💼 Economía Estable</h3>
              <p className="text-brand-700 text-sm">
                Panamá crece 4-5% anual. Menos volatilidad política que Perú. Sistema bancario robusto y regulado.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🏘️ Comunidad Peruana Establecida</h3>
              <p className="text-brand-700 text-sm">
                50,000+ peruanos en Panamá. Restaurantes, comercios, redes profesionales. No estarás solo.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Comparación de Costos: Lima, Guayaquil vs Panamá City (2026)
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            Uno de los mayores miedos es que Panamá sea "muy caro". Realidad: es comparable a Lima, pero con la ventaja de que TODO está en USD (protección contra devaluación).
          </p>

          <div className="my-8 rounded-lg overflow-hidden border border-brand-100 bg-brand-50 h-[450px]">
            <CostBarChart data={peruChartData} title="Monthly Cost Comparison (USD)" />
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-lg p-6 mt-8">
            <h3 className="font-heading text-xl font-bold text-brand-950 mb-4">Desglose Mensual Real (2026)</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start border-b border-brand-200 pb-3">
                <div>
                  <p className="font-semibold text-brand-950">Renta (apartamento 2BR)</p>
                  <p className="text-sm text-brand-600">Zona de expats, segura</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL">$1,200-1,500</p>
                  <p className="text-sm text-brand-600">vs $1,000 Lima San Isidro</p>
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-brand-200 pb-3">
                <div>
                  <p className="font-semibold text-brand-950">Comida y Groceries</p>
                  <p className="text-sm text-brand-600">Mercados + restaurantes</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL">$450-650</p>
                  <p className="text-sm text-brand-600">vs $350 Lima</p>
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-brand-200 pb-3">
                <div>
                  <p className="font-semibold text-brand-950">Servicios (agua, luz, internet)</p>
                  <p className="text-sm text-brand-600">Fibra óptica incluida</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL">$150-250</p>
                  <p className="text-sm text-brand-600">vs $120 Lima</p>
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-brand-200 pb-3">
                <div>
                  <p className="font-semibold text-brand-950">Transporte</p>
                  <p className="text-sm text-brand-600">Metro, Uber, taxis</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL">$100-150</p>
                  <p className="text-sm text-brand-600">vs $60 Lima</p>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-brand-950">TOTAL MENSUAL</p>
                  <p className="text-sm text-brand-600">Gastos básicos, calidad de vida alta</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL text-lg">$2,000-2,550</p>
                  <p className="text-sm text-brand-600">vs $1,530 Lima</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-brand-700 mt-8 text-lg">
            Sí, es ~30% más caro que Lima en términos nominales. PERO: en Panamá tu dinero está en USD. Si el sol se devalúa otro 15% en 5 años (histórico), tu poder adquisitivo en Panamá se mantiene igual, mientras que en Lima habría caído 15%.
          </p>
        </section>

        {/* Visa Friendly Nations */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Visa Friendly Nations para Peruanos: Proceso Detallado
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            Este es el camino más rápido y económico a residencia permanente en Panamá. El proceso toma 30-45 días desde que presentas documentos.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-brand-TEAL bg-brand-50 p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">Paso 1: Documentos Necesarios (10-14 días)</h3>
              <ul className="list-disc list-inside text-brand-700 space-y-2">
                <li>Pasaporte peruano válido (mínimo 6 meses vigencia)</li>
                <li>Certificado de Antecedentes Penales del Perú (INPE) + apostilla</li>
                <li>Partida de Nacimiento del Perú + apostilla</li>
                <li>Comprobante de ingresos o patrimonio: mínimo $5,000 USD mensuales O $120,000 USD totales</li>
                <li>Estado de cuenta bancario (últimos 3 meses)</li>
                <li>Comprobante de dirección en Panamá (hotel temporal o carta de alquiler)</li>
              </ul>
              <p className="text-sm text-brand-600 mt-4">
                El certificado de antecedentes penales se obtiene en línea a través del INPE (2-3 días). La apostilla se gestiona en Cancelaría (2-3 días).
              </p>
            </div>

            <div className="border-l-4 border-brand-GOLD bg-brand-50 p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">Paso 2: Solicitud ante Migración (15-20 días)</h3>
              <ul className="list-disc list-inside text-brand-700 space-y-2">
                <li>A través de un abogado panameño especializado (recomendado)</li>
                <li>Costo legal: ~$2,500-3,500 USD</li>
                <li>Migración revisa documentos y aprueba</li>
                <li>NO requiere entrevista presencial para Friendly Nations</li>
              </ul>
              <p className="text-sm text-brand-600 mt-4">
                Todo se gestiona por correo electrónico. El abogado maneja la comunicación con Migración. No necesitas estar en Panamá para este paso.
              </p>
            </div>

            <div className="border-l-4 border-brand-TEAL bg-brand-50 p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">Paso 3: Finalización en Panamá (10 días)</h3>
              <ul className="list-disc list-inside text-brand-700 space-y-2">
                <li>Viajas a Panamá con aprobación de Migración</li>
                <li>Toma huella dactilar y fotos en Migración</li>
                <li>Paga fee de residencia: ~$800-1,200 USD</li>
                <li>Recibes tu Cédula de Residencia Permanente</li>
              </ul>
              <p className="text-sm text-brand-600 mt-4">
                Una vez tienes la Cédula, tienes derecho a trabajar, emprender, invertir, y traer familia bajo programa de dependientes.
              </p>
            </div>
          </div>

          <div className="bg-brand-GOLD/10 border border-brand-GOLD rounded-lg p-6 mt-8">
            <p className="font-semibold text-brand-950 mb-2">💰 Costo Total Estimado</p>
            <p className="text-brand-700 text-lg">
              <strong>$3,300-5,000 USD</strong> (abogado + fees administrativos)
            </p>
            <p className="text-sm text-brand-600 mt-3">
              Comparado con otros programas: Golden Visa ($500k inversión), Pensionado ($1,350/mes documentado), Profesional (requisitos específicos). Friendly Nations es claramente el camino más accesible.
            </p>
          </div>
        </section>

        {/* Real Estate Investment */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Inversión Inmobiliaria: Protección contra Devaluación del Sol
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            Para peruanos que han construido patrimonio a través de negocios o empleos bien pagados, la inversión inmobiliaria en Panamá es una estrategia de protección crítica contra la devaluación constante del sol.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">¿Por Qué Invertir en Panamá?</h3>
              <ul className="space-y-3 text-brand-700">
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Valuaciones en USD = protección contra inflación/devaluación</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>0% impuestos sobre ganancias de capital</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Mercado inmobiliario transparente y regulado</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Ley de herencias clara y predecible</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Alto potencial de alquiler turístico</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">Opciones de Inversión (2026)</h3>
              <ul className="space-y-3 text-brand-700">
                <li>
                  <p className="font-semibold text-brand-950">Apartamentos Ciudad (ROI 4-6%)</p>
                  <p className="text-sm text-brand-600">$200k-$400k USD. Alquiler residencial.</p>
                </li>
                <li>
                  <p className="font-semibold text-brand-950">Beachfront (ROI 6-10%)</p>
                  <p className="text-sm text-brand-600">$300k-$700k USD. Turismo + personal.</p>
                </li>
                <li>
                  <p className="font-semibold text-brand-950">Tierra para Desarrollo (ROI 8-15%)</p>
                  <p className="text-sm text-brand-600">$100k-$300k USD. Potencial futuro.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-brand-100 rounded-lg p-8 bg-white">
            <h3 className="font-heading text-xl font-bold text-brand-950 mb-6">Caso Práctico: Peruano Invierte $300,000 USD</h3>
            <div className="space-y-4">
              <div className="flex justify-between pb-3 border-b border-brand-200">
                <p className="text-brand-700"><strong>Inversión Inicial</strong></p>
                <p className="text-brand-950 font-semibold">$300,000 USD</p>
              </div>
              <div className="flex justify-between pb-3 border-b border-brand-200">
                <p className="text-brand-700"><strong>Alquiler Mensual (4.8% ROI anual)</strong></p>
                <p className="text-brand-950 font-semibold">$1,200 USD</p>
              </div>
              <div className="flex justify-between pb-3 border-b border-brand-200">
                <p className="text-brand-700"><strong>Gastos (mantenimiento, impuestos)</strong></p>
                <p className="text-brand-950 font-semibold">-$300 USD</p>
              </div>
              <div className="flex justify-between pb-3 border-b border-brand-200">
                <p className="text-brand-700"><strong>Ingreso Neto Mensual</strong></p>
                <p className="text-brand-950 font-semibold text-lg">$900 USD</p>
              </div>
              <div className="flex justify-between pt-3">
                <p className="text-brand-700"><strong>Apreciación Anual (3-4% histórica)</strong></p>
                <p className="text-brand-950 font-semibold">+$9,000-$12,000</p>
              </div>
            </div>
            <p className="text-sm text-brand-600 mt-6 pt-6 border-t border-brand-100">
              Total anual: ~$22,800 USD en ingresos + apreciación. 100% en USD. CERO impuesto en Panamá. Si inviertes $300k desde Perú y ganas ~$23k/año en USD, eso es 7.7% retorno en moneda fuerte, sin inflación de sol.
            </p>
          </div>
        </section>

        {/* Seguridad */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Seguridad: Panamá City vs Lima
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            Uno de los mayores miedos de los peruanos es la seguridad. La realidad: Panamá City es NOTABLEMENTE más segura para expats que Lima o Callao. Aquí está por qué.
          </p>

          <div className="overflow-x-auto border border-brand-100 rounded-lg mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-50 border-b border-brand-100">
                  <th className="px-6 py-4 text-left font-semibold text-brand-950">Métrica</th>
                  <th className="px-6 py-4 text-left font-semibold text-brand-950">Lima San Isidro</th>
                  <th className="px-6 py-4 text-left font-semibold text-brand-TEAL">Punta Pacifica</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-100">
                  <td className="px-6 py-4 text-brand-950 font-semibold">Vigilancia Privada</td>
                  <td className="px-6 py-4 text-brand-700">Guard gates, vigilantes</td>
                  <td className="px-6 py-4 text-brand-TEAL font-bold">24/7 seguridad integrada</td>
                </tr>
                <tr className="border-b border-brand-100 bg-brand-50/30">
                  <td className="px-6 py-4 text-brand-950 font-semibold">Incidentes Callejeros</td>
                  <td className="px-6 py-4 text-brand-700">Ocasionales, sobre todo noche</td>
                  <td className="px-6 py-4 text-brand-TEAL font-bold">Muy raros</td>
                </tr>
                <tr className="border-b border-brand-100">
                  <td className="px-6 py-4 text-brand-950 font-semibold">Transporte Nocturno</td>
                  <td className="px-6 py-4 text-brand-700">Uber recomendado</td>
                  <td className="px-6 py-4 text-brand-TEAL font-bold">Completamente seguro</td>
                </tr>
                <tr className="border-b border-brand-100 bg-brand-50/30">
                  <td className="px-6 py-4 text-brand-950 font-semibold">Sentimiento de Expat</td>
                  <td className="px-6 py-4 text-brand-700">Vigilante, cuidadoso</td>
                  <td className="px-6 py-4 text-brand-TEAL font-bold">Relajado, seguro</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-brand-950 font-semibold">Costo de Seguridad</td>
                  <td className="px-6 py-4 text-brand-700">$200-400/mes adicional</td>
                  <td className="px-6 py-4 text-brand-TEAL font-bold">Incluida en renta</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">Zonas Seguras para Peruanos en Panamá</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-brand-950 mb-2">Punta Pacifica</p>
                <p className="text-sm text-brand-700">
                  Centro financiero, torres modernas, seguridad 24/7. Es donde viven la mayoría de empresarios y ejecutivos peruanos.
                </p>
              </div>
              <div>
                <p className="font-semibold text-brand-950 mb-2">Amador</p>
                <p className="text-sm text-brand-700">
                  Oceanfront, tranquilo, seguro. Ideal para familias. Parques y espacios públicos de calidad.
                </p>
              </div>
              <div>
                <p className="font-semibold text-brand-950 mb-2">Casco Viejo</p>
                <p className="text-sm text-brand-700">
                  Histórico, pintoresco, vida nocturna. Zonas específicas son seguras (esquinas principales). Evitar callejones de noche.
                </p>
              </div>
              <div>
                <p className="font-semibold text-brand-950 mb-2">Clayton</p>
                <p className="text-sm text-brand-700">
                  Residencial, familiar, multicultural. Colegios buenos. Comunidad universitaria. Seguro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Culinary Scene */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Gastronomía: La Escena Culinaria Peruana en Panamá
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            Lima es considerada la capital culinaria de América Latina. ¿La buena noticia? Hay una escena peruana floreciente en Panamá. No morirás de hambre de comida auténtica.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">🍽️ Restaurantes Peruanos</h3>
              <ul className="space-y-3 text-brand-700 text-sm">
                <li><strong>El Mercado de Mariscos</strong> — Ceviches y mariscos auténticos</li>
                <li><strong>Chupería Limousine</strong> — Chupes y comida tradicional</li>
                <li><strong>Balú</strong> — Alta cocina peruana, Casco Viejo</li>
                <li><strong>Múltiples cevicherías</strong> — En todas las zonas</li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">🛒 Ingredientes Peruanos</h3>
              <ul className="space-y-3 text-brand-700 text-sm">
                <li><strong>Mercado de Abastos</strong> — Mercado central con ingredientes peruanos</li>
                <li><strong>Tiendas especializadas</strong> — Papa peruana, ají, especias</li>
                <li><strong>Importaciones directas</strong> — Disponibles por encargo</li>
                <li><strong>Supermercados</strong> — Carrefour, Día tienen secciones peruanas</li>
              </ul>
            </div>
          </div>

          <p className="text-brand-700 text-lg">
            La comunidad peruana ha traído su gastronomía. No es Lima, pero hay suficiente autenticidad para no sentir nostalgia de la comida.
          </p>
        </section>

        {/* Next Steps CTA */}
        <section className="mb-12 bg-gradient-to-r from-brand-TEAL/10 to-brand-GOLD/10 rounded-lg p-8 border border-brand-100">
          <h2 className="font-heading text-2xl font-bold text-brand-950 mb-6">
            ¿Listo para Dar el Siguiente Paso?
          </h2>

          <p className="text-brand-700 text-lg mb-6">
            Si eres peruano y estás considerando vivir, invertir, o retirarte en Panamá, nuestro equipo está aquí para guiarte. Desde la visa Friendly Nations hasta encontrar tu propiedad perfecta, tenemos experiencia ayudando peruanos a hacer esta transición exitosamente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${lang}/contacto`}
              className="inline-block px-8 py-4 bg-brand-TEAL text-white font-bold rounded-lg hover:bg-brand-TEAL/90 transition text-center"
            >
              Agendar Consulta Gratuita
            </Link>
            <Link
              href={`/${lang}/propiedades`}
              className="inline-block px-8 py-4 border-2 border-brand-GOLD text-brand-950 font-bold rounded-lg hover:bg-brand-50 transition text-center"
            >
              Ver Propiedades Disponibles
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-8">
            Preguntas Frecuentes: Peruanos en Panamá
          </h2>

          <div className="space-y-6">
            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                ¿Necesito vender mis propiedades en Perú para vivir en Panamá?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                No. Puedes mantener tus propiedades en Perú mientras tienes residencia en Panamá. La clave es cambiar tu residencia fiscal a Panamá. En Panamá pagarás 0% sobre ingresos extranjeros (alquileres en Perú). En Perú sí pagarás impuestos si eres considerado "residente fiscal" de Perú. Consulta con contador peruano para hacer esto correctamente.
              </p>
            </details>

            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                ¿Puedo traer a mi familia a Panamá bajo Friendly Nations?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                Sí. Una vez tienes residencia permanente, puedes aplicar para que dependientes (cónyuge, hijos) obtengan residencia bajo el programa de Dependientes. El costo es menor (~$500-800 por persona) y el proceso es más rápido (10-15 días). Tu familia obtendrá derecho a trabajar, estudiar, y residir en Panamá.
              </p>
            </details>

            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                ¿Qué pasa si quiero trabajar en Panamá? ¿Puedo encontrar empleo?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                Con residencia permanente, puedes trabajar legalmente en Panamá. El mercado laboral es fuerte en sectores como finanzas, tecnología, educación, y logística. Los empleadores panameños valoran el talento peruano. Sitios como LinkedIn y localJob boards panameños tienen oportunidades. Salarios típicos: $1,500-$3,500 USD/mes depending on field.
              </p>
            </details>

            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                ¿Dónde está la comunidad peruana? ¿Qué zonas son populares?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                La mayoría de peruanos vive en Punta Pacifica (ejecutivos), Amador (familias), y Clayton (profesionales). Hay comunidades activas en Facebook y WhatsApp por zona. Encontrar conexión es fácil — hay peruanos en prácticamente todos los barrios principales de Panamá City.
              </p>
            </details>

            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                ¿Necesito hablar inglés para vivir en Panamá?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                No es obligatorio pero es muy útil. En zonas de expats (Punta Pacifica, Amador, Clayton), muchos hablan español. Pero aprender inglés abre más oportunidades laborales y de integración. Hay escuelas de inglés en Panamá si quieres mejorar mientras ya estás aquí. El español es el idioma principal del país.
              </p>
            </details>
          </div>
        </section>
      </article>
    </main>
  );
}
