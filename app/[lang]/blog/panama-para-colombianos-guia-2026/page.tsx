import Link from 'next/link';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';



export const metadata = {
  title: 'Guía Panamá para Colombianos 2026: Visa, Costos, Residencia',
  description: 'Colombianos emigrando a Panamá. Opciones de visa, costos, residencia, estilo de vida.',
  keywords: 'panama, para',
  alternates: {
    canonical: 'https://panamarealestatesale.com/en/blog/panama-para-colombianos-guia-2026',
    languages: {
      'en': 'https://panamarealestatesale.com/en/blog/panama-para-colombianos-guia-2026',
      'es': 'https://panamarealestatesale.com/es/blog/panama-para-colombianos-guia-2026',
      'pt': 'https://panamarealestatesale.com/pt/blog/panama-para-colombianos-guia-2026',
      'de': 'https://panamarealestatesale.com/de/blog/panama-para-colombianos-guia-2026',
    },
  },
  openGraph: {
    title: 'Guía Panamá para Colombianos 2026: Visa, Costos, Residencia',
    description: 'Colombianos emigrando a Panamá. Opciones de visa, costos, residencia, estilo de vida.',
    type: 'article',
    url: 'https://panamarealestatesale.com/en/blog/panama-para-colombianos-guia-2026',
    images: [{ url: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80', width: 1200, height: 630, alt: 'Guía Panamá para Colombianos 2026: Visa, Costos, Residencia' }],
    locale: 'en_US',
    siteName: 'VIP Expats Panama',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guía Panamá para Colombianos 2026: Visa, Costos, Residencia',
    description: 'Colombianos emigrando a Panamá. Opciones de visa, costos, residencia, estilo de vida.',
    images: ['https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80'],
  },
};

const colombiaChartData = [
  { label: 'Bogotá', value: 1200, color: '#6b7280' },
  { label: 'Medellín', value: 1100, color: '#9ca3af' },
  { label: 'Panamá City', value: 1800, color: '#00C5CB' },
];

export default function PanamaParaColombianosGuia({ params }) {
  const { lang } = params;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-50 to-white pt-12 pb-8 md:pt-20 md:pb-12">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="mb-6">
            <span className="inline-block text-sm font-semibold text-brand-TEAL uppercase tracking-wide">
              Guía de Inmigración
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mb-4 leading-tight">
            Panamá para Colombianos 2026
          </h1>
          <p className="text-xl text-brand-700 mb-6 leading-relaxed">
            Visa Friendly Nations, Inversión en Bienes Raíces y Cómo Mudarse desde Colombia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center text-sm text-brand-600">
            <span>📅 Actualizado: Marzo 2026</span>
            <span>•</span>
            <span>👥 Comunidad: 300,000+ colombianos en Panamá</span>
            <span>•</span>
            <span>✈️ Vuelo Bogotá-Panamá: 1 hora</span>
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
            Colombianos son la comunidad extranjera más grande en Panamá — más de 300,000 personas. ¿Por qué? Porque Panamá es accesible, es cercano, y es una oportunidad increíble para invertir, trabajar y construir patrimonio en dólares estadounidenses.
          </p>
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Pero hay algo ESPECIAL para colombianos: <strong>Colombia está en la lista de "Friendly Nations"</strong>. Esto significa que obtener residencia permanente en Panamá es significativamente más fácil y rápido para ti que para otros ciudadanos.
          </p>
          <p className="text-lg text-brand-700 leading-relaxed">
            Esta guía te explica cómo aprovechar esta ventaja única, desde visa Friendly Nations hasta oportunidades de inversión en bienes raíces, y cómo hacer la mudanza de forma práctica.
          </p>
        </section>

        {/* Three.js Scene */}
        <section className="my-12 rounded-lg overflow-hidden border border-brand-100 bg-brand-50 h-[400px]">
          <PanamaCityScene />
        </section>

        {/* ¿Por Qué Panamá para Colombianos? */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            ¿Por Qué Panamá es la Solución Perfecta para Colombianos?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🚀 Proximidad Geográfica</h3>
              <p className="text-brand-700 text-sm">
                Solo 1-2 horas de vuelo desde Bogotá, Medellín, Cali o Cartagena. Las ciudades más cercanas de Colombia al mundo desarrollado. Copa Airlines vuela múltiples veces diarias.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🪙 Protección Cambiaria en USD</h3>
              <p className="text-brand-700 text-sm">
                El peso colombiano pierde valor consistentemente vs USD. Panamá usa USD como moneda oficial. Tus ahorros se protegen automáticamente en dólares fuertes.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🟢 Visa Friendly Nations</h3>
              <p className="text-brand-700 text-sm">
                Colombia está en la lista de 50 países con trato preferencial. Residencia permanente en 3-6 meses. Muchas menos complicaciones que otros países.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">💼 Hub Financiero Regional</h3>
              <p className="text-brand-700 text-sm">
                Centro financiero de Latinoamérica. Bancos, corredores, firmas de inversión internacionales. Oportunidades de negocio abundantes.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🏘️ Comunidad Colombiana Fuerte</h3>
              <p className="text-brand-700 text-sm">
                300,000+ colombianos. Networks profesionales, restaurantes, eventos, amigos. No llegarás como extranjero.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">📈 Estabilidad Política y Económica</h3>
              <p className="text-brand-700 text-sm">
                Sistema democrático. Instituciones confiables. Seguridad jurídica para invertir. Marco legal predecible.
              </p>
            </div>
          </div>

          <div className="bg-brand-TEAL bg-opacity-10 border border-brand-TEAL border-opacity-30 rounded-lg p-6">
            <p className="text-brand-700 text-lg">
              <strong className="text-brand-950">La Ventaja Única Colombiana:</strong> Colombia es "Friendly Nation". Esto abre puertas que están cerradas para otros ciudadanos. Residencia permanente sin esperar años. Inversión patrimonial que protege tu dinero en USD. Es la solución más inteligente para empresarios y profesionales colombianos que buscan diversificar.
            </p>
          </div>
        </section>

        {/* Visa Friendly Nations */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Visa Friendly Nations para Colombianos: LA VENTAJA CLAVE
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            Colombia está en la lista de 50 "Friendly Nations" de Panamá — un estatus especial que hace que obtener residencia permanente sea significativamente más fácil para ti que para ciudadanos de otros países.
          </p>

          <div className="bg-brand-GOLD bg-opacity-10 border border-brand-GOLD border-opacity-30 rounded-lg p-8 mb-8">
            <h3 className="font-heading text-2xl font-bold text-brand-950 mb-4">
              ¿Qué es Friendly Nations Exactamente?
            </h3>
            <p className="text-brand-700 mb-4">
              Es un programa que permite a ciudadanos de ciertos países considerados "amigos" de Panamá obtener residencia permanente de forma más rápida y con menores requisitos económicos que otros ciudadanos.
            </p>
            <p className="text-brand-700">
              Para ti, como colombiano, esto significa: <strong>Residencia permanente en 3-6 meses, no en 1-2 años.</strong>
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-brand-TEAL bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-3">
                Requisitos para Residencia Friendly Nations
              </h3>
              <p className="text-brand-700 mb-4">
                Necesitas demostrar un "vínculo económico" con Panamá. Las opciones son:
              </p>
              <div className="space-y-4">
                <div className="bg-brand-50 p-4 rounded">
                  <p className="font-bold text-brand-950 mb-2">Opción 1: Propiedad Inmobiliaria</p>
                  <p className="text-sm text-brand-700">Compra de propiedad en Panamá por mínimo $200,000 USD. La más popular. Muchos colombianos entran por esta ruta: compran apartamento, condo, o casa, y califica para residencia.</p>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <p className="font-bold text-brand-950 mb-2">Opción 2: Empresa Constituida en Panamá</p>
                  <p className="text-sm text-brand-700">Establece empresa panameña. Inversión inicial: ~$5,000-10,000 para constitución + operación. Requiere capital circulante demostrando operación real.</p>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <p className="font-bold text-brand-950 mb-2">Opción 3: Relación Laboral con Empresa Panameña</p>
                  <p className="text-sm text-brand-700">Contrata como empleado con empresa panameña establecida. Empleador debe demostrar que buscó candidato panameño primero (pero en práctica esto es formality).</p>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <p className="font-bold text-brand-950 mb-2">Opción 4: Depósito Bancario Significativo</p>
                  <p className="text-sm text-brand-700">Mantén depósito bancario en banco panameño (típicamente $100,000-200,000 USD). Menos popular que propiedad, pero viable si prefieres liquidez.</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-brand-TEAL bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-3">
                Proceso y Timeline
              </h3>
              <ol className="space-y-3 text-sm text-brand-700">
                <li><strong>Semana 1-2:</strong> Contrata abogado panameño especializado en Friendly Nations</li>
                <li><strong>Semana 2-4:</strong> Prepara documentación (pasaporte, extractos bancarios, origin of funds, etc.)</li>
                <li><strong>Semana 4-8:</strong> Abogado presenta solicitud ante Ministerio de Gobierno</li>
                <li><strong>Semana 8-12:</strong> Ministerio revisa documentación. A veces pide aclaraciones.</li>
                <li><strong>Semana 12-24:</strong> Aprobación (típicamente en este rango para Friendly Nations)</li>
                <li><strong>Semana 24-26:</strong> Solicita cédula de residencia (ID permanente) y termina proceso</li>
              </ol>
              <p className="text-brand-600 text-xs mt-4">
                <strong>Total typical:</strong> 3-6 meses desde solicitud hasta aprobación.
              </p>
            </div>

            <div className="border-l-4 border-brand-TEAL bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-3">
                Costos Estimados
              </h3>
              <div className="space-y-2 text-sm text-brand-700">
                <div className="flex justify-between pb-2 border-b border-brand-200">
                  <span>Abogado de inmigración</span>
                  <span className="font-bold">$2,500 - $4,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-brand-200">
                  <span>Gastos procesamiento</span>
                  <span className="font-bold">$500 - $800</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-brand-200">
                  <span>Cédula de residencia</span>
                  <span className="font-bold">$200 - $300</span>
                </div>
                <div className="flex justify-between font-bold text-brand-950">
                  <span>Total (sin propiedad)</span>
                  <span>$3,200 - $5,100</span>
                </div>
              </div>
              <p className="text-brand-600 text-xs mt-4">
                Si compras propiedad por $200K+, ese es el costo principal. La visa en sí es "gratis" — es el vínculo económico lo que cuesta.
              </p>
            </div>
          </div>

          <div className="bg-white border border-brand-100 rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
              ✅ Ventajas de la Ruta Friendly Nations
            </h3>
            <ul className="space-y-3 text-sm text-brand-700">
              <li className="flex gap-3">
                <span className="text-brand-TEAL font-bold">✓</span>
                <span><strong>Velocidad:</strong> 3-6 meses vs 12-24 meses para otros países</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-TEAL font-bold">✓</span>
                <span><strong>Requisitos menores:</strong> Menos comprobantes, menos investigación</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-TEAL font-bold">✓</span>
                <span><strong>Residencia permanente de una:</strong> No tienes que pasar por temporal primero</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-TEAL font-bold">✓</span>
                <span><strong>Beneficio de inversión:</strong> Si compras propiedad, tu capital crece además de obtener visa</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-TEAL font-bold">✓</span>
                <span><strong>Flexibilidad laboral:</strong> Con residencia permanente, puedes trabajar en cualquier sector sin sponsor</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Otras Opciones de Visa */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Otras Opciones de Visa para Colombianos
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            Aunque Friendly Nations es la mejor opción, hay alternativas si no calificas o prefieres otra ruta.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-brand-TEAL bg-white p-6 rounded-lg">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-2">
                Visa de Turismo (90 días)
              </h3>
              <p className="text-brand-700 text-sm mb-3">
                Colombianos NO requieren visa de turismo — obtienes 90 días automáticos solo con pasaporte. Perfectamente diseñado para explorar, buscar empleo, o evaluar antes de comprometer.
              </p>
              <p className="text-brand-600 text-xs">
                <strong>Proceso:</strong> Solo pasaporte vigente. <strong>Costo:</strong> $0 (aéreo + hospedaje). <strong>Tiempo:</strong> Inmediato.
              </p>
            </div>

            <div className="border-l-4 border-brand-TEAL bg-white p-6 rounded-lg">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-2">
                Visa de Trabajo
              </h3>
              <p className="text-brand-700 text-sm mb-3">
                Si encuentras empleo con empresa panameña, ellos pueden patrocinarte para visa de trabajo. Después de 3 años, puedes solicitar residencia permanente.
              </p>
              <p className="text-brand-600 text-xs">
                <strong>Plazo:</strong> 4-8 semanas. <strong>Costo:</strong> $1,500-2,500. <strong>Nota:</strong> Más lento que Friendly Nations pero viable.
              </p>
            </div>

            <div className="border-l-4 border-brand-TEAL bg-white p-6 rounded-lg">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-2">
                Visa Pensionado
              </h3>
              <p className="text-brand-700 text-sm mb-3">
                Si tienes pensión colombiana o ingresos pasivos de $1,000/mes, calificas. Incluye beneficios: 25% descuento medicinas, 50% odontología, vuelos Copa.
              </p>
              <p className="text-brand-600 text-xs">
                <strong>Requisitos:</strong> Comprobante de pensión. <strong>Costo:</strong> $2,000-3,500 con abogado.
              </p>
            </div>
          </div>
        </section>

        {/* Trabajar en Panamá */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Oportunidades de Trabajo para Colombianos
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            Con residencia Friendly Nations, puedes trabajar sin limitaciones. Muchos colombianos tienen empleos en Panamá y gastan solo 4-5 días por semana, viajando a Colombia el resto (es solo 1 hora).
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🏦 Finanzas e Inversión</h3>
              <p className="text-brand-700 mb-3 text-sm">
                Panamá es hub financiero. Bancos internacionales, fondos de inversión, corredoras de bolsa. Demanda constante de profesionales.
              </p>
              <p className="text-sm text-brand-600">
                <strong>Salario:</strong> $2,500-6,000/mes para mid-level.
              </p>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">📦 Comercio y Logística</h3>
              <p className="text-brand-700 mb-3 text-sm">
                Zona Libre de Colón. Puertos. Aduanas. Transporte. Colombianos tienen fuerte presencia en comercio.
              </p>
              <p className="text-sm text-brand-600">
                <strong>Salario:</strong> $1,800-3,500/mes.
              </p>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🏗️ Construcción y Desarrollo</h3>
              <p className="text-brand-700 mb-3 text-sm">
                Boom de desarrollo inmobiliario en Panamá. Contratistas, arquitectos, ingenieros en demanda. Muchos colombianos lideran proyectos.
              </p>
              <p className="text-sm text-brand-600">
                <strong>Salario:</strong> $2,000-5,000+/mes.
              </p>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">💼 Consultoría y Servicios</h3>
              <p className="text-brand-700 mb-3 text-sm">
                Muchos colombianos abren sus propias empresas de servicios (consultoría, contabilidad, legal, marketing).
              </p>
              <p className="text-sm text-brand-600">
                <strong>Ingreso:</strong> Variable según cliente, típicamente $3,000-10,000+/mes.
              </p>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🍽️ Gastronomía</h3>
              <p className="text-brand-700 mb-3 text-sm">
                Restaurantes colombianos muy populares en Panamá. Muchos colombianos propietarios de negocios de comida.
              </p>
              <p className="text-sm text-brand-600">
                <strong>Ingreso:</strong> Negocio propio, típicamente $2,000-5,000+/mes.
              </p>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">💻 Tecnología</h3>
              <p className="text-brand-700 mb-3 text-sm">
                Startups, agencias digitales, desarrollo de software. Sector en crecimiento constante.
              </p>
              <p className="text-sm text-brand-600">
                <strong>Salario:</strong> $2,000-5,000+/mes.
              </p>
            </div>
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
              📌 Modelo Común de Colombianos en Panamá
            </h3>
            <p className="text-brand-700 text-sm">
              Muchos colombianos tienen un modelo: viven en Panamá (por estabilidad, USD, oportunidad), pero pasan 2-3 días a la semana en Colombia por negocios, familia o clientes colombianos. Una semana: lunes-miércoles en Bogotá, jueves-domingo en Panamá. Los vuelos son baratos ($150-300 RT en Copa) y rápidos (1 hora). Esto es completamente viable con residencia permanente.
            </p>
          </div>
        </section>

        {/* Cost Comparison Chart */}
        <section className="my-12">
          <h3 className="font-heading text-2xl font-bold text-brand-950 mb-6">
            Comparativa: Costo de Vida Bogotá vs Medellín vs Panama City
          </h3>
          <div className="rounded-lg overflow-hidden border border-brand-100 bg-brand-50 h-[400px]">
            <CostBarChart data={colombiaChartData} title="Monthly Cost Comparison (USD)" />
          </div>
          <p className="text-sm text-brand-600 mt-4 text-center">
            Gastos mensuales estimados en USD para persona sola. Panamá es más caro, pero salarios compensan.
          </p>
        </section>

        {/* Inversión en Bienes Raíces */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Inversión en Bienes Raíces: La Ruta Preferida para Colombianos
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            Muchos colombianos usan Friendly Nations a través de compra de propiedad. Es inteligente: obtienes residencia permanente Y activo que protege tu patrimonio en USD.
          </p>

          <div className="bg-brand-TEAL bg-opacity-10 border border-brand-TEAL border-opacity-30 rounded-lg p-8 mb-8">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
              ¿Por Qué Colombianos Invierten en Panamá?
            </h3>
            <p className="text-brand-700 text-sm mb-3">
              <strong>1. Protección Cambiaria:</strong> El peso colombiano pierde valor consistentemente. USD es estable.
            </p>
            <p className="text-brand-700 text-sm mb-3">
              <strong>2. Retorno de Inversión:</strong> Alquiler en Panamá: 6-9% bruto. En Colombia es más bajo.
            </p>
            <p className="text-brand-700 text-sm mb-3">
              <strong>3. Liquidez Regional:</strong> Panamá es hub — propiedad fácil de vender. Mercado activo.
            </p>
            <p className="text-brand-700 text-sm">
              <strong>4. Residencia como Bonus:</strong> Inviertes en propiedad, obtienes visa permanente de regalo.
            </p>
          </div>

          <div className="bg-white border border-brand-100 rounded-lg p-8 mb-8">
            <h3 className="font-heading text-xl font-bold text-brand-950 mb-4">
              Rango de Precios Inmobiliarios
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start pb-3 border-b border-brand-200">
                <div>
                  <p className="font-bold text-brand-950">Entrada / Tocumen, San Miguelito</p>
                  <p className="text-sm text-brand-600">1-2 cuartos</p>
                </div>
                <p className="text-brand-TEAL font-bold text-lg">$90,000 - $150,000</p>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-brand-200">
                <div>
                  <p className="font-bold text-brand-950">Mid-Range / Miraflores, Clayton</p>
                  <p className="text-sm text-brand-600">2-3 cuartos, buen sector</p>
                </div>
                <p className="text-brand-TEAL font-bold text-lg">$200,000 - $400,000</p>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-brand-200">
                <div>
                  <p className="font-bold text-brand-950">Premium / Casco Viejo, Amador</p>
                  <p className="text-sm text-brand-600">3-4 cuartos, ubicación prime</p>
                </div>
                <p className="text-brand-TEAL font-bold text-lg">$400,000 - $800,000</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-brand-950">Lujo / Punta Pacifica, Costa del Este</p>
                  <p className="text-sm text-brand-600">Penthouses, vista ciudad/mar</p>
                </div>
                <p className="text-brand-TEAL font-bold text-lg">$600,000 - $2,000,000+</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">📊 Retorno Típico</h3>
              <p className="text-brand-700 mb-3 text-sm">
                Apartamento 2BR en Miraflores:
              </p>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>• Precio compra: $250,000</li>
                <li>• Alquiler mensual: $1,400-1,800</li>
                <li>• Retorno bruto anual: 6.7%-8.6%</li>
                <li>• Después gastos (mantenimiento, impuestos): ~5-7%</li>
                <li>• Apreciación histórica: 3-5%/año</li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">💰 Financiamiento</h3>
              <p className="text-brand-700 mb-3 text-sm">
                Con residencia, acceso a crédito hipotecario:
              </p>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>• Banistmo, Global Bank, Bladex</li>
                <li>• 70-80% financiamiento posible</li>
                <li>• Plazo: 15-30 años</li>
                <li>• Tasa: 4.5%-7% dependiendo perfil</li>
                <li>• Enganche típico: 20-30%</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-brand-100 rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
              🔄 Ejemplo Típico: Colombiano Compra en Panamá
            </h3>
            <div className="space-y-3 text-sm text-brand-700">
              <p><strong>Situación:</strong> Empresario colombiano con $250K en ahorros. Preocupado por peso colombiano.</p>
              <p><strong>Decisión:</strong> Compra apartamento 2BR en Miraflores por $250,000 USD (usa ahorros).</p>
              <p><strong>Resultado:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>✓ Obtiene residencia permanente (vínculo económico cumplido)</li>
                <li>✓ Activo en USD (protegido de devaluación peso)</li>
                <li>✓ Retorno 6-8% anual en alquiler</li>
                <li>✓ Puede trabajar en Panamá o seguir en Colombia</li>
                <li>✓ Activo líquido (mercado inmobiliario activo en Panamá)</li>
              </ul>
              <p><strong>Impacto en 5 años:</strong> Propiedad vale $325K-350K. Recibió $84K-108K en alquileres. Peso caería ~20-30% vs USD. Resultado total: ganancia REAL de patrimonio. En Colombia, los ahorros hubieran perdido valor.</p>
            </div>
          </div>
        </section>

        {/* Vuelos y Practicidad */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Vuelos, Practicidad y Modelo Colombiano-Panameño
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            Una ventaja única para colombianos: la proximidad. Bogotá-Panamá es solo 1 hora. Muchos colombianos usan un modelo de trabajo/vida que mezcla ambos países.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">✈️ Rutas Disponibles</h3>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>🇨🇴 <strong>Bogotá (EL Dorado) → Panamá:</strong> 1 hora | $150-300 RT</li>
                <li>🇨🇴 <strong>Medellín (MDE) → Panamá:</strong> 1 hora 15 min | $150-300 RT</li>
                <li>🇨🇴 <strong>Cali → Panamá:</strong> 1 hora 20 min | $200-350 RT</li>
                <li>🇨🇴 <strong>Cartagena → Panamá:</strong> 1 hora 30 min | $180-350 RT</li>
              </ul>
              <p className="text-brand-600 text-xs mt-4">
                Copa Airlines vuela múltiples veces diarias desde Bogotá. Tarifas bajas si compras con anticipación.
              </p>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">📅 Modelo Típico Colombiano</h3>
              <p className="text-brand-700 text-sm mb-3">
                <strong>Semana de Ejemplo:</strong>
              </p>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>🏢 Lunes-Miércoles: Bogotá (clientes, empresa, familia)</li>
                <li>✈️ Miércoles PM: Vuelo Bogotá → Panamá (1 hora)</li>
                <li>🏠 Jueves-Domingo: Panamá (familia, relax, invertir)</li>
                <li>✈️ Domingo PM: Vuelo Panamá → Bogotá (1 hora)</li>
              </ul>
              <p className="text-brand-600 text-xs mt-4">
                Costo vuelos por semana: ~$300-500. Para muchos negocios es justificable.
              </p>
            </div>
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
              💡 Oportunidad Única
            </h3>
            <p className="text-brand-700 text-sm">
              Pocos colombianos entienden que pueden obtener residencia permanente en Panamá, invertir en propiedades, trabajar en dólares, Y seguir pasando 2-3 días por semana en Colombia. Es lo mejor de ambos mundos. Con residencia Friendly Nations y un trabajo remoto o flexible, es completamente viable.
            </p>
          </div>
        </section>

        {/* Comunidad Colombiana */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            La Comunidad Colombiana en Panamá
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            300,000+ colombianos viven en Panamá. Es la comunidad extranjera más grande. No es una pequeña minoría — es una presencia cultural establecida.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">🍽️ Gastronomía Colombiana</h3>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>• Restaurantes de comida colombiana: 50+ en Panama City</li>
                <li>• Panaderías con pandebono, quesadillas colombianas</li>
                <li>• Bandeja Paisa en restaurantes premium</li>
                <li>• Arepas, empanadas, ropa vieja</li>
                <li>• Cafés especializados en café colombiano</li>
              </ul>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">👥 Redes y Comunidades</h3>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>• "Colombianos en Panamá" — 80,000+ miembros en Facebook</li>
                <li>• "Negocios Colombianos en Panamá"</li>
                <li>• "Inmobiliarias para Colombianos"</li>
                <li>• Grupos de WhatsApp por profesión</li>
                <li>• Eventos mensual: conciertos, reuniones de negocios</li>
              </ul>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">🏢 Negocios Colombianos</h3>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>• Zona Libre de Colón: sector colombiano fuerte</li>
                <li>• Importación/exportación (logística)</li>
                <li>• Empresas constructoras</li>
                <li>• Agencias de viaje</li>
                <li>• Consultoría empresarial</li>
              </ul>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">📍 Dónde Viven Colombianos</h3>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>• <strong>San Miguelito:</strong> Clase media, muchas familias</li>
                <li>• <strong>Miraflores:</strong> Mix clase media-alta</li>
                <li>• <strong>Clayton:</strong> Profesionales, ejecutivos</li>
                <li>• <strong>Costa del Este:</strong> Empresarios, clase alta</li>
                <li>• <strong>Casco Viejo:</strong> Artistas, emprendedores</li>
              </ul>
            </div>
          </div>

          <div className="bg-brand-TEAL bg-opacity-10 border border-brand-TEAL border-opacity-30 rounded-lg p-6">
            <p className="text-brand-700 text-sm">
              <strong className="text-brand-950">Integración Rápida:</strong> Colombianos integran muy rápido en Panamá. La cultura es cercana (español, tradiciones similares). La comunidad colombiana es welcoming — hay networks profesionales, amigos, y apoyo. No llegarás como extranjero desconocido.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Preguntas Frecuentes: Colombianos en Panamá
          </h2>

          <div className="space-y-6">
            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Tengo que renunciar a mi nacionalidad colombiana para residir en Panamá?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                No. Panamá permite doble nacionalidad. Puedes ser ciudadano colombiano y residente permanente panameño simultáneamente. Mantienes todos tus derechos en Colombia.
              </p>
            </details>

            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Puedo trabajar remoto desde Panamá para empresa colombiana?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                Sí. Si trabajas remoto para empresa colombiana ganando en pesos, es trabajo normal. Si trabaja para cliente extranjero en USD siendo residente panameño y calificas como no-residente fiscal, podrías tener ventajas impositivas. Consulta contador panameño sobre tu específico.
              </p>
            </details>

            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Qué pasa si compro propiedad pero no obtengo residencia?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                Puedes comprar propiedad sin ser residente. Pero aprovecha el vínculo económico para solicitar residencia Friendly Nations — es la oportunidad. La propiedad es activo en USD (protegido). La residencia es bonus.
              </p>
            </details>

            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Cuál es la diferencia fiscal entre Colombia y Panamá para residentes?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                <strong>Colombia:</strong> Impuesto a la renta sobre ingresos mundiales, impuesto al patrimonio, impuesto a ganancias. <strong>Panamá:</strong> Impuesto a la renta SOLO sobre ingresos generados en Panamá. Ingresos del exterior pueden estar libres de impuesto. Esto es ventaja enorme. Consulta contador fiscal especializado.
              </p>
            </details>

            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Cuánto tiempo lleva el proceso completo desde decisión a residencia confirmada?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                Si compras propiedad: 2-3 meses (compra + documentación). Solicitud Friendly Nations: 3-6 meses. Total: 5-9 meses desde decisión hasta residencia permanente confirmada en mano. Si usas otra ruta (empresa, depósito bancario), puede ser similar.
              </p>
            </details>

            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Es seguro invertir en bienes raíces en Panamá siendo colombiano?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                Sí. Panamá tiene sistema legal predecible para propiedad. Registro Público es confiable. Si usas abogado competente, tu inversión está protegida. Mercado inmobiliario es activo y transparente. Muchos colombianos compran sin problemas.
              </p>
            </details>
          </div>
        </section>

        {/* Conclusión */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Conclusión: Panamá es la Solución Inteligente para Colombianos
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Colombia está en la lista Friendly Nations de Panamá. Esto abre una puerta que la mayoría del mundo no tiene.
          </p>

          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            300,000 colombianos ya lo saben. Mudan capital a USD, obtienen residencia permanente, invierten en bienes raíces, y construyen patrimonio protegido de devaluación cambiaria.
          </p>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            El proceso es simple: compra propiedad (o demuestra vínculo económico), contrata abogado Friendly Nations, presenta solicitud, espera 3-6 meses, obtén residencia permanente. El costo total es bajo (propiedad es tu inversión, visa es el vínculo).
          </p>

          <div className="bg-brand-TEAL bg-opacity-10 border border-brand-TEAL border-opacity-30 rounded-lg p-8 mb-8">
            <p className="text-lg text-brand-950 font-bold mb-4">
              Próximo Paso: Consulta Especializada
            </p>
            <p className="text-brand-700 mb-6">
              El equipo de VIP Expats ayuda a colombianos a navegar residencia Friendly Nations, compra de propiedades, y inversión en Panamá. Tenemos abogados, agentes inmobiliarios, y asesores fiscales que entienden el caso colombiano específicamente.
            </p>
            <Link
              href={`/${lang}/contacto`}
              className="inline-block bg-brand-TEAL text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
            >
              Agenda Consulta Gratuita
            </Link>
          </div>

          <p className="text-sm text-brand-600 border-t border-brand-100 pt-6">
            <strong>Descargo:</strong> Esta guía es informativa. Leyes pueden cambiar. Siempre consulta con abogado panameño especializado en inmigración y asesor fiscal antes de decisiones legales. VIP Expats puede conectarte con profesionales confiables.
          </p>
        </section>
      </article>

      {/* CTA Footer */}
      <section className="bg-brand-50 border-t border-brand-100 mt-16 py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-4">
            ¿Listo para Explorar Panamá?
          </h2>
          <p className="text-lg text-brand-700 mb-8 max-w-2xl mx-auto">
            Desde residencia Friendly Nations hasta inversión inmobiliaria, ayudamos colombianos a hacer el movimiento correcto.
          </p>
          <Link
            href={`/${lang}/contacto`}
            className="inline-block bg-brand-TEAL text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition"
          >
            Conecta Hoy
          </Link>
        </div>
      </section>
    </main>
  );
}
