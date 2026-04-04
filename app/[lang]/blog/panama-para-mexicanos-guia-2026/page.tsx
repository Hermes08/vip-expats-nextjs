import Link from 'next/link';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';



export const metadata = {
  title: 'Panamá para Mexicanos 2026: Visa Friendly Nations, Costo de Vida y Bienes Raíces',
  description: 'Guía completa para mexicanos que desean vivir en Panamá. Visa Friendly Nations, comparación de costos CDMX vs Panamá, inversión inmobiliaria en USD, y cómo mudarse desde México.',
  keywords: 'panama para mexicanos, vivir en panama mexico, invertir en panama mexicanos, visa friendly nations mexico, mudarse a panama desde mexico',
  openGraph: {
    title: 'Panamá para Mexicanos 2026: Visa Friendly Nations, Costo de Vida y Bienes Raíces',
    description: 'México es Friendly Nation. Acceso rápido a residencia permanente en Panamá. Protege tu patrimonio en USD. Guía completa para mexicanos.',
    url: '/es/blog/panama-para-mexicanos-guia-2026',
    type: 'article',
  },
};

export default function PanamaParaMexicanosGuia({ params }) {
  const { lang } = params;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-50 to-white pt-12 pb-8 md:pt-20 md:pb-12">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="mb-6">
            <span className="inline-block text-sm font-semibold text-brand-TEAL uppercase tracking-wide">
              Guía para Mexicanos
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mb-4 leading-tight">
            Panamá para Mexicanos 2026
          </h1>
          <p className="text-xl text-brand-700 mb-6 leading-relaxed">
            Visa Friendly Nations, Protección en USD y Oportunidades de Inversión Inmobiliaria
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center text-sm text-brand-600">
            <span>📅 Actualizado: Abril 2026</span>
            <span>•</span>
            <span>👥 Comunidad: 200,000+ mexicanos en Panamá</span>
            <span>•</span>
            <span>✈️ Vuelo CDMX-Panamá: 2.5 horas</span>
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
            México es el segundo mercado más grande de expertos que buscan vivir en Panamá — más de 200,000 mexicanos han hecho el cambio en los últimos 10 años. Y no es por casualidad: Panamá ofrece algo que México no tiene fácilmente: protección de patrimonio en dólares estadounidenses, estabilidad política y fiscal, y acceso rápido a residencia legal.
          </p>
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Pero hay algo CRÍTICO para mexicanos que muchos desconocen: <strong>México está en la lista oficial de "Friendly Nations"</strong>. Esto significa que tu proceso de residencia en Panamá es exponencialmente más rápido y económico que para otros ciudadanos.
          </p>
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            En esta guía te explicamos:
          </p>
          <ul className="list-disc list-inside text-lg text-brand-700 mb-6 space-y-3">
            <li>Por qué Panamá es la solución perfecta para mexicanos en 2026</li>
            <li>Cómo el proceso de Visa Friendly Nations funciona específicamente para ti</li>
            <li>Comparación real de costos: CDMX, Guadalajara vs Panamá City</li>
            <li>Cómo proteger tu patrimonio en USD mientras inviertes en bienes raíces</li>
            <li>Tax benefits: 0% impuestos en ingresos extranjeros vs 35% ISR en México</li>
            <li>La comunidad mexicana en Panamá y cómo integrarte</li>
          </ul>
        </section>

        {/* Panama City 3D Scene */}
        <section className="my-12 rounded-lg overflow-hidden border border-brand-100 bg-brand-50 h-[400px]">
          <PanamaCityScene />
        </section>

        {/* ¿Por Qué Panamá para Mexicanos? */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            ¿Por Qué Panamá es la Solución Perfecta para Mexicanos?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🚀 Proximidad y Vuelos Directos</h3>
              <p className="text-brand-700 text-sm">
                2.5 horas de vuelo directo desde CDMX a Panamá. Copa Airlines y Aeromexico vuelan múltiples veces diarias. Tu familia en México está más cerca que si vivieras en Monterrey o Cancún.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🪙 Peso Mexicano vs USD</h3>
              <p className="text-brand-700 text-sm">
                El peso ha perdido 40% de su valor en USD en los últimos 10 años. Panamá usa USD como moneda oficial. Tu patrimonio se protege automáticamente contra la devaluación.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🟢 Visa Friendly Nations</h3>
              <p className="text-brand-700 text-sm">
                México está en la lista oficial. Residencia permanente en 30-45 días vs 6-12 meses para otros países. Costo: ~$10,000 USD vs $50,000+ en otros programas.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">💼 Zero Tax on Foreign Income</h3>
              <p className="text-brand-700 text-sm">
                En México pagas hasta 35% ISR sobre ingresos globales. En Panamá: 0% sobre ingresos extranjeros. Ideal para emprendedores, freelancers, y rentistas.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🏘️ Comunidad Establecida</h3>
              <p className="text-brand-700 text-sm">
                200,000+ mexicanos ya viven en Panamá. Tienen restaurantes, colegios, negocios, redes profesionales. No estarás solo — habrá gente como tú.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🛡️ Seguridad para Expats</h3>
              <p className="text-brand-700 text-sm">
                Panamá City es más segura para expats que CDMX o Guadalajara. Zonas como Punta Pacifica, Casco Viejo, y Betania tienen seguridad similar a barrios de primer mundo.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Comparación de Costos: CDMX, Guadalajara vs Panamá City y Boquete
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            Uno de los mitos más grandes es que Panamá es "caro". La verdad: es comparable a CDMX, pero en USD (lo que es mejor para tu patrimonio a largo plazo).
          </p>

          <div className="my-8 rounded-lg overflow-hidden border border-brand-100 bg-brand-50 h-[450px]">
            <CostBarChart />
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-lg p-6 mt-8">
            <h3 className="font-heading text-xl font-bold text-brand-950 mb-4">Desglose Mensual Real (2026)</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start border-b border-brand-200 pb-3">
                <div>
                  <p className="font-semibold text-brand-950">Renta (apartamento 2BR)</p>
                  <p className="text-sm text-brand-600">Zona de expats</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL">$1,000-1,500</p>
                  <p className="text-sm text-brand-600">vs $800 CDMX</p>
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-brand-200 pb-3">
                <div>
                  <p className="font-semibold text-brand-950">Comida y Groceries</p>
                  <p className="text-sm text-brand-600">Restaurantes y mercados</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL">$400-600</p>
                  <p className="text-sm text-brand-600">vs $300 CDMX</p>
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-brand-200 pb-3">
                <div>
                  <p className="font-semibold text-brand-950">Servicios (agua, luz, internet)</p>
                  <p className="text-sm text-brand-600">Incluye Fibra óptica</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL">$150-250</p>
                  <p className="text-sm text-brand-600">vs $100 CDMX</p>
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-brand-200 pb-3">
                <div>
                  <p className="font-semibold text-brand-950">Transporte</p>
                  <p className="text-sm text-brand-600">Metro, taxis, Uber</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL">$100-150</p>
                  <p className="text-sm text-brand-600">vs $80 CDMX</p>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-brand-950">TOTAL MENSUAL</p>
                  <p className="text-sm text-brand-600">Gastos básicos, sin lujos</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL text-lg">$1,750-2,550</p>
                  <p className="text-sm text-brand-600">vs $1,280 CDMX</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-brand-700 mt-8 text-lg">
            La clave aquí es que el 100% de tu gasto está protegido en USD. Si el peso se devalúa otro 20% en los próximos 5 años (histórico), tu poder adquisitivo en Panamá se mantiene igual. En CDMX, tendrías 20% menos poder adquisitivo.
          </p>
        </section>

        {/* Visa Friendly Nations */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Visa Friendly Nations para Mexicanos: El Proceso Paso a Paso
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            Este es el proceso OFICIAL para mexicanos. Es simple, rápido, y relativamente económico. Todo se tramita en ~45 días.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-brand-TEAL bg-brand-50 p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">Paso 1: Documentos Necesarios (10 días)</h3>
              <ul className="list-disc list-inside text-brand-700 space-y-2">
                <li>Pasaporte mexicano válido (mínimo 6 meses de vigencia)</li>
                <li>Certificado de Antecedentes Penales de México (SESNSP) + apostilla</li>
                <li>Acta de Nacimiento de México + apostilla</li>
                <li>Comprobante de ingresos o patrimonio: mínimo $5,000 USD mensuales O $120,000 USD totales</li>
                <li>Estado de cuenta bancario (últimos 3 meses)</li>
                <li>Comprobante de dirección en Panamá (puede ser hotel o alquiler temporal)</li>
              </ul>
              <p className="text-sm text-brand-600 mt-4">
                Los certificados de antecedentes penales se obtienen en línea en México (2-3 días). La apostilla se gestiona en Cancelaría (1-2 días más).
              </p>
            </div>

            <div className="border-l-4 border-brand-GOLD bg-brand-50 p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">Paso 2: Solicitud ante Migración (15 días)</h3>
              <ul className="list-disc list-inside text-brand-700 space-y-2">
                <li>Envía documentos a través de un abogado panameño (recomendado)</li>
                <li>Costo legal: ~$2,500-3,500 USD</li>
                <li>Migración revisa y aprueba (típicamente 10-15 días)</li>
                <li>NO requiere entrevista para Friendly Nations</li>
              </ul>
              <p className="text-sm text-brand-600 mt-4">
                La mayoría de abogados pueden manejar esto completamente por correo. No necesitas viajar a Panamá para este paso.
              </p>
            </div>

            <div className="border-l-4 border-brand-TEAL bg-brand-50 p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">Paso 3: Trámites Finales en Panamá (10 días)</h3>
              <ul className="list-disc list-inside text-brand-700 space-y-2">
                <li>Viaja a Panamá con aprobación de Migración</li>
                <li>Toma huella dactilar y fotos en Migración</li>
                <li>Paga fee de residencia: ~$800-1,200 USD</li>
                <li>Recibe tu Cédula de Residencia Permanente</li>
              </ul>
              <p className="text-sm text-brand-600 mt-4">
                Una vez tienes la Cédula, tienes derecho a trabajar, abrir negocios, invertir, y traer tu familia a través del programa de dependientes.
              </p>
            </div>
          </div>

          <div className="bg-brand-GOLD/10 border border-brand-GOLD rounded-lg p-6 mt-8">
            <p className="font-semibold text-brand-950 mb-2">💰 Costo Total Estimado</p>
            <p className="text-brand-700 text-lg">
              <strong>$3,300-5,000 USD</strong> (abogado + fees + trámites)
            </p>
            <p className="text-sm text-brand-600 mt-3">
              Comparado con Golden Visa ($500,000 inversión), Pensionado ($1,350/mes ingresos permanentes), o Inversionista (proyectos específicos): Friendly Nations es claramente la opción más accesible para la mayoría de mexicanos.
            </p>
          </div>
        </section>

        {/* Real Estate Investment */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Inversión Inmobiliaria Mexicanos: Protección de Patrimonio en USD
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            Para mexicanos que han acumulado patrimonio, la inversión inmobiliaria en Panamá es una estrategia de cobertura crítica contra la devaluación del peso.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">¿Por Qué Invertir en Panamá?</h3>
              <ul className="space-y-3 text-brand-700">
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Ley de Herencias clara y predecible</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Mercado de bienes raíces transparente</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>0% impuestos sobre ganancias de capital</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Valúes en USD = protección contra inflación</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Posibilidad de alquilar a turistas (Airbnb)</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">Opciones de Inversión (2026)</h3>
              <ul className="space-y-3 text-brand-700">
                <li>
                  <p className="font-semibold text-brand-950">Apartamentos Ciudad (ROI 4-6%)</p>
                  <p className="text-sm text-brand-600">$200k-$400k USD. Alquiler estable.</p>
                </li>
                <li>
                  <p className="font-semibold text-brand-950">Beachfront (ROI 6-10%)</p>
                  <p className="text-sm text-brand-600">$300k-$700k USD. Turismo + residencia.</p>
                </li>
                <li>
                  <p className="font-semibold text-brand-950">Tierra (ROI 8-15%)</p>
                  <p className="text-sm text-brand-600">$100k-$300k USD. Desarrollo potencial.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-brand-100 rounded-lg p-8 bg-white">
            <h3 className="font-heading text-xl font-bold text-brand-950 mb-6">Caso Práctico: Mexicano Invierte $400,000 USD</h3>
            <div className="space-y-4">
              <div className="flex justify-between pb-3 border-b border-brand-200">
                <p className="text-brand-700"><strong>Inversión Inicial</strong></p>
                <p className="text-brand-950 font-semibold">$400,000 USD</p>
              </div>
              <div className="flex justify-between pb-3 border-b border-brand-200">
                <p className="text-brand-700"><strong>Alquiler Mensual (5% ROI anual)</strong></p>
                <p className="text-brand-950 font-semibold">$1,667 USD</p>
              </div>
              <div className="flex justify-between pb-3 border-b border-brand-200">
                <p className="text-brand-700"><strong>Gastos (mantenimiento, impuestos)</strong></p>
                <p className="text-brand-950 font-semibold">-$400 USD</p>
              </div>
              <div className="flex justify-between pb-3 border-b border-brand-200">
                <p className="text-brand-700"><strong>Ingreso Neto Mensual</strong></p>
                <p className="text-brand-950 font-semibold text-lg">$1,267 USD</p>
              </div>
              <div className="flex justify-between pt-3">
                <p className="text-brand-700"><strong>Apreciación Anual (histórica 3-4%)</strong></p>
                <p className="text-brand-950 font-semibold">+$12,000-$16,000</p>
              </div>
            </div>
            <p className="text-sm text-brand-600 mt-6">
              Total anual: ~$30,000 USD en ingresos + apreciación. 100% en USD, 0% impuesto en Panamá sobre estos ingresos.
            </p>
          </div>
        </section>

        {/* Tax Benefits */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Ventajas Fiscales: Panamá vs México
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            Si eres emprendedor, freelancer, o tienes ingresos internacionales, la diferencia fiscal entre México y Panamá es TRANSFORMACIONAL.
          </p>

          <div className="overflow-x-auto border border-brand-100 rounded-lg mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-50 border-b border-brand-100">
                  <th className="px-6 py-4 text-left font-semibold text-brand-950">Concepto</th>
                  <th className="px-6 py-4 text-left font-semibold text-brand-950">México</th>
                  <th className="px-6 py-4 text-left font-semibold text-brand-TEAL">Panamá</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-100">
                  <td className="px-6 py-4 text-brand-950 font-semibold">ISR Ingresos Globales</td>
                  <td className="px-6 py-4 text-brand-700">Hasta 35%</td>
                  <td className="px-6 py-4 text-brand-TEAL font-bold">0% (ingresos extranjeros)</td>
                </tr>
                <tr className="border-b border-brand-100 bg-brand-50/30">
                  <td className="px-6 py-4 text-brand-950 font-semibold">Ganancias de Capital</td>
                  <td className="px-6 py-4 text-brand-700">28%</td>
                  <td className="px-6 py-4 text-brand-TEAL font-bold">0%</td>
                </tr>
                <tr className="border-b border-brand-100">
                  <td className="px-6 py-4 text-brand-950 font-semibold">Dividendos</td>
                  <td className="px-6 py-4 text-brand-700">ISR + Impuesto Adicional</td>
                  <td className="px-6 py-4 text-brand-TEAL font-bold">0%</td>
                </tr>
                <tr className="border-b border-brand-100 bg-brand-50/30">
                  <td className="px-6 py-4 text-brand-950 font-semibold">Impuesto Sobre Patrimonio</td>
                  <td className="px-6 py-4 text-brand-700">No aplica pero sí otros</td>
                  <td className="px-6 py-4 text-brand-TEAL font-bold">0%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-brand-950 font-semibold">Contribuciones Sociales</td>
                  <td className="px-6 py-4 text-brand-700">~10%</td>
                  <td className="px-6 py-4 text-brand-TEAL font-bold">Voluntarias</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-brand-GOLD/10 border border-brand-GOLD rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">Ejemplo Real: Freelancer con Ingresos de $10,000 USD/mes</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold text-brand-950 mb-4">En México (México Tax Resident)</p>
                <p className="text-brand-700 mb-2">Ingresos anuales: $120,000 USD</p>
                <p className="text-brand-700 mb-2">ISR (~25% promedio): -$30,000</p>
                <p className="text-brand-700 mb-2">Contribuciones: -$12,000</p>
                <p className="text-lg font-bold text-brand-950 mt-4">Neto: $78,000 USD/año</p>
              </div>
              <div>
                <p className="font-semibold text-brand-TEAL mb-4">En Panamá (Panamá Tax Resident)</p>
                <p className="text-brand-700 mb-2">Ingresos anuales: $120,000 USD</p>
                <p className="text-brand-700 mb-2">ISR sobre ingresos extranjeros: $0</p>
                <p className="text-brand-700 mb-2">Contribuciones: Voluntarias (~$500/año)</p>
                <p className="text-lg font-bold text-brand-TEAL mt-4">Neto: $119,500 USD/año</p>
              </div>
            </div>
            <p className="text-sm text-brand-600 mt-6 pt-6 border-t border-brand-100">
              <strong>Diferencia anual: +$41,500 USD</strong> — Eso es 53% más dinero en tu bolsillo. Multiplicado por años, es la diferencia entre una casa pagada y una casa hipotecada.
            </p>
          </div>
        </section>

        {/* Mexican Community */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            La Comunidad Mexicana en Panamá
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            Uno de los miedos más comunes es: "¿Estaré solo?" La realidad: hay 200,000+ mexicanos en Panamá y una comunidad vibrante, establecida, y accesible.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">🍽️ Gastronomía Mexicana</h3>
              <ul className="space-y-2 text-brand-700 text-sm">
                <li><strong>La Casita Mexicana</strong> — Auténtico Oaxaca en Casco Viejo</li>
                <li><strong>Contratraje</strong> — Cocina mexicana contemporánea, Punta Pacifica</li>
                <li><strong>Mercado de Calidá</strong> — Ingredientes mexicanos, Pan de México</li>
                <li><strong>Múltiples taquerías</strong> — En casi todas las zonas de expat</li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">🏫 Educación para Mexicanos</h3>
              <ul className="space-y-2 text-brand-700 text-sm">
                <li><strong>Colegio México</strong> — Curriculum mexicano, reconocido</li>
                <li><strong>Colegio Bilingüe Panamericano</strong> — Opción bilingüe</li>
                <li><strong>Internacional de Panamá</strong> — Educación bilingüe, BI</li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">💼 Comunidad Profesional</h3>
              <ul className="space-y-2 text-brand-700 text-sm">
                <li><strong>Cámara Mexicano-Panameña</strong> — Networking y negocios</li>
                <li><strong>Grupos LinkedIn</strong> — Mexicanos en Panamá (8,000+ miembros)</li>
                <li><strong>Asociación de Inversores</strong> — Oportunidades inmobiliarias</li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">🎉 Vida Social</h3>
              <ul className="space-y-2 text-brand-700 text-sm">
                <li><strong>México Independence Celebrations</strong> — 15 de Septiembre masivo</li>
                <li><strong>Grupos de WhatsApp</strong> — Por barrio, profesión, intereses</li>
                <li><strong>Meetups regulares</strong> — Cafés, eventos, deportes</li>
              </ul>
            </div>
          </div>

          <p className="text-brand-700 mt-8 text-lg">
            La realidad: probablemente tendrás más acceso a comunidad mexicana en Panamá que en la mayoría de ciudades de EE.UU., y mucho más que en países europeos. Panamá es un lugar donde los mexicanos NO tienen que sacrificar su identidad cultural.
          </p>
        </section>

        {/* Next Steps CTA */}
        <section className="mb-12 bg-gradient-to-r from-brand-TEAL/10 to-brand-GOLD/10 rounded-lg p-8 border border-brand-100">
          <h2 className="font-heading text-2xl font-bold text-brand-950 mb-6">
            ¿Listo para Dar el Siguiente Paso?
          </h2>

          <p className="text-brand-700 text-lg mb-6">
            Si eres mexicano y te interesa vivir, invertir, o retirarte en Panamá, estamos aquí para guiarte a través de cada paso del proceso. Desde la visa Friendly Nations hasta encontrar tu propiedad perfecta, nuestro equipo tiene 15+ años de experiencia ayudando a mexicanos a construir su nuevo futuro en Panamá.
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
            Preguntas Frecuentes: Mexicanos en Panamá
          </h2>

          <div className="space-y-6">
            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                ¿Es legal para mexicanos comprar propiedad en Panamá?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                Absolutamente. Los mexicanos (y ciudadanos de cualquier país) pueden comprar propiedad en Panamá sin limitaciones. No hay restricciones de propiedad para extranjeros. El proceso es simple: necesitas un abogado panameño, pagas impuestos de transferencia (~3%), y completas el registro en el Registro Público.
              </p>
            </details>

            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                ¿Necesito vivir en Panamá 183 días al año para obtener los beneficios fiscales?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                No. Panamá utiliza un sistema de "territorial tax" — esto significa que solo pagas impuestos sobre ingresos generados EN Panamá. Si ganas tu dinero en el extranjero (freelance, negocios internacionales, inversiones), no hay impuestos, sin importar cuántos días vivas en Panamá. Solo necesitas tener una dirección legal en Panamá.
              </p>
            </details>

            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                ¿Qué pasa si tengo propiedades en México? ¿Tengo que venderlas?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                No. Puedes mantener tus propiedades en México mientras vives en Panamá. El sistema fiscal de Panamá no toca ingresos o patrimonio en el extranjero. Sin embargo, en México sí tendrás que pagar impuestos sobre esos ingresos si eres considerado "residente fiscal" de México. La solución: obtén residencia legal en Panamá y cambia tu residencia fiscal a Panamá (consulta con contador).
              </p>
            </details>

            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                ¿Cuál es la mejor zona para vivir como mexicano en Panamá?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                Depende de tu estilo de vida: Punta Pacifica (lujo y modernidad), Casco Viejo (ubicación histórica y vida nocturna), Clayton (zona residencial familiar), Amador (oceanfront tranquilo), o Boquete (clima cool mountain, retiro). La mayoría de mexicanos prefieren Punta Pacifica o Amador por seguridad, servicios, y acceso a comunidad.
              </p>
            </details>

            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                ¿Cómo es el sistema bancario en Panamá para mexicanos? ¿Puedo abrir una cuenta sin residencia?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                La mayoría de bancos panameños requieren residencia legal (Cédula) para abrir cuentas personales. Sin embargo, algunos bancos como Banesco, Citibank, y HSBC facilitan cuentas para residentes de Friendly Nations antes de obtener la Cédula final. El proceso es simple: presentas tu aprobación de visa y documentos. Una vez tienes tu Cédula, abrir cualquier cuenta es muy fácil.
              </p>
            </details>
          </div>
        </section>
      </article>
    </main>
  );
}
