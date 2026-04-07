import type { Metadata } from 'next';
import Link from 'next/link';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';



export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const slug = 'panama-para-ecuatorianos-guia-2026';
  const domain = 'https://panamarealestatesale.com';
  const canonical = `${domain}/${lang}/blog/${slug}`;

  return {
  title: 'Guía Panamá para Ecuatorianos 2026: Visa, Costos, Residencia',
  description: 'Ecuatorianos emigrando a Panamá. Opciones de visa, costos, residencia.',
  keywords: 'panama, para',
  alternates: {
    canonical,
    languages: {
      'en': 'https://panamarealestatesale.com/en/blog/panama-para-ecuatorianos-guia-2026',
      'es': 'https://panamarealestatesale.com/es/blog/panama-para-ecuatorianos-guia-2026',
      'pt': 'https://panamarealestatesale.com/pt/blog/panama-para-ecuatorianos-guia-2026',
      'de': 'https://panamarealestatesale.com/de/blog/panama-para-ecuatorianos-guia-2026',
    },
  },
  openGraph: {
    title: 'Guía Panamá para Ecuatorianos 2026: Visa, Costos, Residencia',
    description: 'Ecuatorianos emigrando a Panamá. Opciones de visa, costos, residencia.',
    type: 'article',
    url: canonical,
    images: [{ url: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80', width: 1200, height: 630, alt: 'Guía Panamá para Ecuatorianos 2026: Visa, Costos, Residencia' }],
    locale: 'en_US',
    siteName: 'VIP Expats Panama',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guía Panamá para Ecuatorianos 2026: Visa, Costos, Residencia',
    description: 'Ecuatorianos emigrando a Panamá. Opciones de visa, costos, residencia.',
    images: ['https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80'],
  },
};
}

const ecuadorChartData = [
  { label: 'Quito', value: 900, color: '#6b7280' },
  { label: 'Guayaquil', value: 850, color: '#9ca3af' },
  { label: 'Panamá City', value: 1800, color: '#00C5CB' },
];

export default function PanamaParaEcuatorianosGuia({ params }) {
  const { lang } = params;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-50 to-white pt-12 pb-8 md:pt-20 md:pb-12">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="mb-6">
            <span className="inline-block text-sm font-semibold text-brand-TEAL uppercase tracking-wide">
              Guía para Ecuatorianos
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mb-4 leading-tight">
            Panamá para Ecuatorianos 2026
          </h1>
          <p className="text-xl text-brand-700 mb-6 leading-relaxed">
            Visa, Residencia y Oportunidades de Inversión en Estabilidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center text-sm text-brand-600">
            <span>📅 Actualizado: Abril 2026</span>
            <span>•</span>
            <span>👥 Comunidad: 80,000+ ecuatorianos en Panamá</span>
            <span>•</span>
            <span>✈️ Vuelo Quito-Panamá: 3 horas</span>
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
            Ecuador es un país hermoso con gente cálida y hospitalaria. Pero en los últimos años, ha enfrentado desafíos significativos: inestabilidad política, violencia ligada a narcotráfico, inseguridad ciudadana. Muchos ecuatorianos que han tenido éxito — empresarios, profesionales, propietarios — están buscando estabilidad en un entorno más seguro.
          </p>
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Panamá ofrece exactamente eso. Y hay algo ESPECIAL para ecuatorianos que muchos desconocen: <strong>Ecuador está en la lista oficial de "Friendly Nations"</strong>. Además, ambos países usan USD como moneda oficial — lo que hace la transición extremadamente suave.
          </p>
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            En esta guía te explicamos por qué Panamá es la solución perfecta para ecuatorianos en 2026, desde visa Friendly Nations hasta seguridad, inversión inmobiliaria, y cómo hacer la transición práctica.
          </p>
        </section>

        {/* Panama City 3D Scene */}
        <section className="my-12 rounded-lg overflow-hidden border border-brand-100 bg-brand-50 h-[400px]">
          <PanamaCityScene />
        </section>

        {/* ¿Por Qué Panamá para Ecuatorianos? */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            ¿Por Qué Panamá es la Solución Perfecta para Ecuatorianos?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🪙 Ambos Usan USD</h3>
              <p className="text-brand-700 text-sm">
                Ecuador dolarizó en 2000. Panamá usa USD desde siempre. NO hay volatilidad de moneda — transición suave financiera y psicológica.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">✈️ Proximidad Geográfica</h3>
              <p className="text-brand-700 text-sm">
                3 horas Quito-Panamá, 4 horas Guayaquil-Panamá. Vuelos diarios Copa Airlines. Más cercano que ciudades ecuatorianas remotas.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🟢 Visa Friendly Nations</h3>
              <p className="text-brand-700 text-sm">
                Residencia permanente en 30-45 días. Costo bajo (~$3-5k USD). No requiere inversión inmobiliaria ni ingresos documentados altos.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🛡️ Seguridad</h3>
              <p className="text-brand-700 text-sm">
                Panamá City es más segura que Quito o Guayaquil para expats. Zonas como Punta Pacifica tienen nivel de seguridad europeo.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">💼 Estabilidad Política</h3>
              <p className="text-brand-700 text-sm">
                Panamá no ha tenido golpes de estado desde 1989. Sistema democrático predecible. Instituciones más sólidas que Ecuador.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🏢 Zona Franca Colón</h3>
              <p className="text-brand-700 text-sm">
                Ecuador tiene conexiones comerciales a Zona Franca Colón. Oportunidades de negocio y logística para ecuatorianos.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Comparación de Costos: Quito, Guayaquil vs Panamá City (2026)
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            La realidad: Panamá es comparable a Quito en gastos mensuales, pero con mejor calidad de vida y seguridad. Ambos están en USD, así que no hay sorpresa de devaluación.
          </p>

          <div className="my-8 rounded-lg overflow-hidden border border-brand-100 bg-brand-50 h-[450px]">
            <CostBarChart data={ecuadorChartData} title="Monthly Cost Comparison (USD)" />
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-lg p-6 mt-8">
            <h3 className="font-heading text-xl font-bold text-brand-950 mb-4">Desglose Mensual Real (2026)</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start border-b border-brand-200 pb-3">
                <div>
                  <p className="font-semibold text-brand-950">Renta (apartamento 2BR)</p>
                  <p className="text-sm text-brand-600">Zona segura, servicios buenos</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL">$1,100-1,400</p>
                  <p className="text-sm text-brand-600">vs $900 Quito</p>
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-brand-200 pb-3">
                <div>
                  <p className="font-semibold text-brand-950">Comida y Groceries</p>
                  <p className="text-sm text-brand-600">Mercados + restaurantes</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL">$400-550</p>
                  <p className="text-sm text-brand-600">vs $300 Quito</p>
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-brand-200 pb-3">
                <div>
                  <p className="font-semibold text-brand-950">Servicios (agua, luz, internet)</p>
                  <p className="text-sm text-brand-600">Fibra óptica de calidad</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL">$120-200</p>
                  <p className="text-sm text-brand-600">vs $80 Quito</p>
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-brand-200 pb-3">
                <div>
                  <p className="font-semibold text-brand-950">Transporte</p>
                  <p className="text-sm text-brand-600">Metro, Uber, taxis</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL">$100-150</p>
                  <p className="text-sm text-brand-600">vs $50 Quito</p>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-brand-950">TOTAL MENSUAL</p>
                  <p className="text-sm text-brand-600">Gastos básicos con buena calidad de vida</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL text-lg">$1,720-2,300</p>
                  <p className="text-sm text-brand-600">vs $1,230 Quito</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-brand-700 mt-8 text-lg">
            Sí, es ~40% más caro que Quito en términos nominales. PERO: ambos están en USD. No hay riesgo de devaluación. Además, la calidad de vida, seguridad, y estabilidad en Panamá compensa la diferencia de costo.
          </p>
        </section>

        {/* Visa Friendly Nations */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Visa Friendly Nations para Ecuatorianos: Proceso Paso a Paso
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            Este es el camino más accesible a residencia permanente. El proceso toma 30-45 días total, desde documentación hasta aprobación final.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-brand-TEAL bg-brand-50 p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">Paso 1: Documentos Necesarios (7-10 días)</h3>
              <ul className="list-disc list-inside text-brand-700 space-y-2">
                <li>Pasaporte ecuatoriano válido (mínimo 6 meses vigencia)</li>
                <li>Certificado de Antecedentes Penales del Ecuador (DNRPA) + apostilla</li>
                <li>Partida de Nacimiento del Ecuador + apostilla</li>
                <li>Comprobante de ingresos: mínimo $5,000 USD mensuales O $120,000 USD patrimonio</li>
                <li>Estado de cuenta bancario (últimos 3 meses)</li>
                <li>Comprobante de dirección temporal en Panamá</li>
              </ul>
              <p className="text-sm text-brand-600 mt-4">
                Los certificados se obtienen en línea en Ecuador. Apostilla se gestiona en Ministerio de Relaciones Exteriores (3 días).
              </p>
            </div>

            <div className="border-l-4 border-brand-GOLD bg-brand-50 p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">Paso 2: Solicitud ante Migración (15-20 días)</h3>
              <ul className="list-disc list-inside text-brand-700 space-y-2">
                <li>A través de abogado panameño especializado</li>
                <li>Costo legal: ~$2,500-3,500 USD</li>
                <li>Migración revisa y aprueba sin entrevista</li>
                <li>Notificación por correo de aprobación</li>
              </ul>
              <p className="text-sm text-brand-600 mt-4">
                Todo se gestiona remotamente. El abogado maneja comunicación con Migración. Tú estás en Ecuador — no necesitas viajar todavía.
              </p>
            </div>

            <div className="border-l-4 border-brand-TEAL bg-brand-50 p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">Paso 3: Trámites Finales en Panamá (10 días)</h3>
              <ul className="list-disc list-inside text-brand-700 space-y-2">
                <li>Viajas a Panamá con aprobación de Migración</li>
                <li>Toma huella dactilar, fotos, firma en Migración</li>
                <li>Paga fee de residencia: ~$800-1,200 USD</li>
                <li>Recibes tu Cédula de Residencia Permanente</li>
              </ul>
              <p className="text-sm text-brand-600 mt-4">
                Una vez tienes la Cédula, tienes derechos laborales completos, derecho a invertir, y puedes traer familia.
              </p>
            </div>
          </div>

          <div className="bg-brand-GOLD/10 border border-brand-GOLD rounded-lg p-6 mt-8">
            <p className="font-semibold text-brand-950 mb-2">💰 Costo Total Estimado</p>
            <p className="text-brand-700 text-lg">
              <strong>$3,300-5,000 USD</strong> (abogado + fees)
            </p>
            <p className="text-sm text-brand-600 mt-3">
              Mucho más accesible que otros programas de visa. Y a diferencia de Golden Visa (~$500k inversión), tienes residencia permanente sin obligación de invertir millones.
            </p>
          </div>
        </section>

        {/* Real Estate Investment */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Inversión Inmobiliaria para Ecuatorianos
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            Muchos ecuatorianos han construido patrimonio a través de negocios o profesiones. La pregunta natural: "¿Cómo protejo lo que he ganado?" La respuesta: inversión inmobiliaria en Panamá en USD.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">¿Por Qué Invertir en Panamá?</h3>
              <ul className="space-y-3 text-brand-700">
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Moneda fuerte: USD = tu dinero se valida</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>0% impuestos sobre ganancias de capital</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Mercado predecible y regulado</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Potencial de alquiler turístico alto</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Fácil de comprar como extranjero</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">Opciones de Inversión</h3>
              <ul className="space-y-3 text-brand-700">
                <li>
                  <p className="font-semibold text-brand-950">Apartamentos Ciudad (ROI 4-6%)</p>
                  <p className="text-sm text-brand-600">$200-400k USD. Alquiler residencial.</p>
                </li>
                <li>
                  <p className="font-semibold text-brand-950">Beachfront (ROI 6-10%)</p>
                  <p className="text-sm text-brand-600">$300-700k USD. Turismo premium.</p>
                </li>
                <li>
                  <p className="font-semibold text-brand-950">Tierra (ROI 8-15%)</p>
                  <p className="text-sm text-brand-600">$100-300k USD. Potencial futuro.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-brand-100 rounded-lg p-8 bg-white">
            <h3 className="font-heading text-xl font-bold text-brand-950 mb-6">Caso Práctico: Ecuatoriano Invierte $250,000 USD</h3>
            <div className="space-y-4">
              <div className="flex justify-between pb-3 border-b border-brand-200">
                <p className="text-brand-700"><strong>Inversión Inicial</strong></p>
                <p className="text-brand-950 font-semibold">$250,000 USD</p>
              </div>
              <div className="flex justify-between pb-3 border-b border-brand-200">
                <p className="text-brand-700"><strong>Alquiler Mensual (5% ROI anual)</strong></p>
                <p className="text-brand-950 font-semibold">$1,042 USD</p>
              </div>
              <div className="flex justify-between pb-3 border-b border-brand-200">
                <p className="text-brand-700"><strong>Gastos (mantenimiento, impuestos, admin)</strong></p>
                <p className="text-brand-950 font-semibold">-$250 USD</p>
              </div>
              <div className="flex justify-between pb-3 border-b border-brand-200">
                <p className="text-brand-700"><strong>Ingreso Neto Mensual</strong></p>
                <p className="text-brand-950 font-semibold text-lg">$792 USD</p>
              </div>
              <div className="flex justify-between pt-3">
                <p className="text-brand-700"><strong>Apreciación Anual (3-4% histórica)</strong></p>
                <p className="text-brand-950 font-semibold">+$7,500-$10,000</p>
              </div>
            </div>
            <p className="text-sm text-brand-600 mt-6 pt-6 border-t border-brand-100">
              Total anual: ~$19,500 USD. Eso es 7.8% retorno puro en moneda fuerte. CERO impuesto en Panamá. Tu dinero en USD, protegido contra volatilidad ecuatoriana.
            </p>
          </div>
        </section>

        {/* Seguridad y Estabilidad */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Seguridad: Por Qué Ecuatorianos Eligen Panamá
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            En los últimos años, Ecuador ha enfrentado desafíos de seguridad específicos: presencia de narcotráfico, prisiones vulnerables, y criminalidad en ciudades. Para ecuatorianos que han construido patrimonio, la pregunta es: "¿Cómo vivo sin miedo?"
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">Panamá City para Expats</h3>
              <ul className="space-y-3 text-brand-700">
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Zonas de expat: seguridad de primer mundo</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Patrullaje visible en barrios principales</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Acceso a servicios de seguridad privada</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Comunidad de expats establecida y organizada</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">Zonas Recomendadas</h3>
              <ul className="space-y-3 text-brand-700 text-sm">
                <li>
                  <p className="font-semibold text-brand-950">Punta Pacifica</p>
                  <p>Lujo, torres modernas, seguridad integrada.</p>
                </li>
                <li>
                  <p className="font-semibold text-brand-950">Amador</p>
                  <p>Oceanfront, familiar, tranquilo, parques.</p>
                </li>
                <li>
                  <p className="font-semibold text-brand-950">Clayton</p>
                  <p>Residencial, multicultural, con vida social.</p>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-brand-700 text-lg">
            La realidad para ecuatorianos: puedes vivir sin miedo en Panamá. Zonas como Punta Pacifica tienen nivel de seguridad comparable a Miami o Bogotá zona norte.
          </p>
        </section>

        {/* Community & Integration */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Comunidad Ecuatoriana en Panamá
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            Hay 80,000+ ecuatorianos viviendo en Panamá. No estarás solo — hay redes profesionales, negocios, y comunidad establecida.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">🏢 Comunidad Profesional</h3>
              <ul className="space-y-2 text-brand-700 text-sm">
                <li><strong>Cámara Ecuatoriano-Panameña</strong> — Networking y negocios</li>
                <li><strong>Grupos LinkedIn</strong> — Ecuatorianos en Panamá (5,000+ miembros)</li>
                <li><strong>Asociaciones profesionales</strong> — Por industria</li>
                <li><strong>Emprendedores ecuatorianos</strong> — Negocios establecidos</li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">🍽️ Gastronomía</h3>
              <ul className="space-y-2 text-brand-700 text-sm">
                <li><strong>Restaurantes ecuatorianos</strong> — Locro, ceviches, etc</li>
                <li><strong>Mercados con productos locales</strong> — Plátano, frutas tropicales</li>
                <li><strong>Tiendas de ingredientes</strong> — Para cocina casera</li>
                <li><strong>Comunidad culinaria activa</strong> — Fiestas y celebraciones</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="mb-12 bg-gradient-to-r from-brand-TEAL/10 to-brand-GOLD/10 rounded-lg p-8 border border-brand-100">
          <h2 className="font-heading text-2xl font-bold text-brand-950 mb-6">
            ¿Listo para Dar el Siguiente Paso?
          </h2>

          <p className="text-brand-700 text-lg mb-6">
            Si eres ecuatoriano y buscas estabilidad, seguridad, y oportunidades de inversión en Panamá, nuestro equipo está aquí para guiarte en cada paso: desde la visa Friendly Nations hasta encontrar tu propiedad perfecta.
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
            Preguntas Frecuentes: Ecuatorianos en Panamá
          </h2>

          <div className="space-y-6">
            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                ¿Es fácil para ecuatorianos abrir negocios en Panamá?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                Muy fácil. Una vez tienes residencia permanente, puedes constituir una empresa de responsabilidad limitada (SRL) o sociedad anónima en 1-2 días. El costo es bajo (~$300-500). Muchos ecuatorianos operan negocios en Panamá, desde consultoría hasta importación/exportación con Zona Franca Colón.
              </p>
            </details>

            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                ¿Puedo transferir dinero desde Ecuador a Panamá sin problemas?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                Completamente legal. Puedes transferir dinero desde Ecuador a tu cuenta bancaria panameña. Ambos países están integrados en sistemas SWIFT. Una transferencia toma 3-5 días. No hay restricciones de capital para extranjeros con residencia legal en Panamá.
              </p>
            </details>

            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                ¿Qué pasa con mis propiedades en Ecuador si me mudo a Panamá?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                Puedes mantenerlas. En Ecuador seguirás pagando impuestos sobre esas propiedades. En Panamá, pagarás 0% sobre ingresos extranjeros. La clave: cambiar tu residencia fiscal a Panamá para optimizar impuestos. Consulta con contador en Ecuador y Panamá para hacerlo correctamente.
              </p>
            </details>

            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                ¿Es difícil integrase? ¿Hablan español la mayoría de panameños?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                El español es el idioma oficial de Panamá. Integración es fácil. Además, hay 80,000 ecuatorianos allá — muchos hablan español como Panamá. La mayoría de panameños hablan inglés en zonas de negocios, pero español es completamente suficiente para vivir.
              </p>
            </details>

            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                ¿Puedo traer a mi familia bajo Friendly Nations?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                Sí. Una vez tienes residencia permanente, puedes solicitar para dependientes (cónyuge, hijos). El proceso es rápido (10-15 días) y costo es bajo (~$500-800 por persona). Tu familia obtendrá todos los derechos: trabajo, educación, inversión.
              </p>
            </details>
          </div>
        </section>
      </article>
    </main>
  );
}
