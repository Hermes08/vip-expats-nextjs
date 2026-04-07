import type { Metadata } from 'next';
import Link from 'next/link';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';



export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const slug = 'panama-para-argentinos-guia-2026';
  const domain = 'https://panamarealestatesale.com';
  const canonical = `${domain}/${lang}/blog/${slug}`;

  return {
  title: 'Guía Panamá para Argentinos 2026: Visa, Costos, Vida',
  description: 'Argentinos emigrando a Panamá. Opciones de visa, costos, estilo de vida.',
  keywords: 'panama, para',
  alternates: {
    canonical,
    languages: {
      'en': 'https://panamarealestatesale.com/en/blog/panama-para-argentinos-guia-2026',
      'es': 'https://panamarealestatesale.com/es/blog/panama-para-argentinos-guia-2026',
      'pt': 'https://panamarealestatesale.com/pt/blog/panama-para-argentinos-guia-2026',
      'de': 'https://panamarealestatesale.com/de/blog/panama-para-argentinos-guia-2026',
    },
  },
  openGraph: {
    title: 'Guía Panamá para Argentinos 2026: Visa, Costos, Vida',
    description: 'Argentinos emigrando a Panamá. Opciones de visa, costos, estilo de vida.',
    type: 'article',
    url: canonical,
    images: [{ url: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80', width: 1200, height: 630, alt: 'Guía Panamá para Argentinos 2026: Visa, Costos, Vida' }],
    locale: 'en_US',
    siteName: 'VIP Expats Panama',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guía Panamá para Argentinos 2026: Visa, Costos, Vida',
    description: 'Argentinos emigrando a Panamá. Opciones de visa, costos, estilo de vida.',
    images: ['https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80'],
  },
};
}

const argentinaChartData = [
  { label: 'Buenos Aires', value: 700, color: '#6b7280' },
  { label: 'Córdoba', value: 600, color: '#9ca3af' },
  { label: 'Panamá City', value: 1800, color: '#00C5CB' },
];

export default function PanamaParaArgentinosGuia({ params }) {
  const { lang } = params;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-50 to-white pt-12 pb-8 md:pt-20 md:pb-12">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="mb-6">
            <span className="inline-block text-sm font-semibold text-brand-TEAL uppercase tracking-wide">
              Guía de Inmigración y Inversión
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mb-4 leading-tight">
            Panamá para Argentinos 2026
          </h1>
          <p className="text-xl text-brand-700 mb-6 leading-relaxed">
            Escape del Peso, Visa Friendly Nations, Inversión Inmobiliaria en USD, y Cómo Proteger tu Patrimonio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center text-sm text-brand-600">
            <span>📅 Actualizado: Marzo 2026</span>
            <span>•</span>
            <span>💰 Inflación Argentina: 200%+ anual</span>
            <span>•</span>
            <span>🇦🇷 Argentina = Friendly Nation</span>
            <span>•</span>
            <span>🕐 Lectura: 12-15 minutos</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 md:px-8 py-8 md:py-12">
        {/* Introducción Urgente */}
        <section className="mb-12">
          <div className="bg-brand-GOLD bg-opacity-20 border-l-4 border-brand-GOLD rounded-lg p-8 mb-8">
            <h2 className="font-heading text-3xl font-bold text-brand-950 mb-4">
              El Problema Argentino: ¿Por Qué Necesitas Panamá?
            </h2>
            <p className="text-lg text-brand-700 leading-relaxed mb-4">
              Argentina enfrenta una crisis económica sin precedentes en 2026. La inflación supera 200% anual. El peso pierde 1-2% de valor cada semana vs dólar. Tus ahorros se evaporan. El cepo cambiario limita tu acceso a divisas. Los impuestos AFIP son crecientes. Las opciones de inversión segura dentro de Argentina prácticamente no existen.
            </p>
            <p className="text-lg text-brand-700">
              <strong className="text-brand-950">La solución real:</strong> Obtener residencia en país que opera en USD, mover capital, invertir en activos en dólares, y proteger tu patrimonio de la devaluación argentino. Panamá es exactamente eso.
            </p>
          </div>

          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Miles de argentinos ya lo hicieron. Empresarios, profesionales, jubilados que entienden que Argentina, aunque es hogar, no es lugar seguro para dinero en 2026. Panamá es la alternativa: ciudad moderna, estable, con dólares, y residencia accesible para argentinos.
          </p>

          <p className="text-lg text-brand-700 leading-relaxed">
            Esta guía explica el "cómo" completo — desde obtener visa Friendly Nations (Argentina está en la lista) hasta invertir en bienes raíces, abrir cuentas bancarias, y estructurar de forma que mantengas mínimo vínculo fiscal con Argentina mientras proteges patrimonio en USD.
          </p>
        </section>

        {/* Three.js Scene */}
        <section className="my-12 rounded-lg overflow-hidden border border-brand-100 bg-brand-50 h-[400px]">
          <PanamaCityScene />
        </section>

        {/* Problema Argentino Detallado */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            El Problema: Por Qué Argentina te Está Fallando Financieramente
          </h2>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-brand-GOLD bg-white p-6 rounded-lg">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">
                📉 Inflación Galopante
              </h3>
              <p className="text-brand-700 mb-3">
                Inflación en Argentina es insostenible. Mientras escribo esto en marzo 2026, inflación anual ronda 200%+. Esto significa:
              </p>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>• Dinero en banco pierde valor cada mes</li>
                <li>• Tasas de interés en pesos jamás alcanzan inflación</li>
                <li>• Poder adquisitivo desaparece</li>
                <li>• Jubilaciones se quedan atrás de costo de vida</li>
                <li>• Ahorros de años pueden desaparecer en meses</li>
              </ul>
            </div>

            <div className="border-l-4 border-brand-GOLD bg-white p-6 rounded-lg">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">
                🔐 Cepo Cambiario: Acceso Limitado a Divisas
              </h3>
              <p className="text-brand-700 mb-3">
                Argentina ha tenido cepo cambiario que limita cuánto USD puedes comprar o sacar:
              </p>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>• Límites mensuales en compra de dólares</li>
                <li>• Restricciones en transferencias internacionales</li>
                <li>• Dificultad para sacar dinero del país</li>
                <li>• Brecha entre dólar oficial y blue (paralelo)</li>
              </ul>
              <p className="text-brand-700 text-sm mt-3">
                Si quieres proteger patrimonio en USD, Argentina te lo dificulta.
              </p>
            </div>

            <div className="border-l-4 border-brand-GOLD bg-white p-6 rounded-lg">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">
                💸 Impuestos Crecientes: AFIP Implacable
              </h3>
              <p className="text-brand-700 mb-3">
                Argentina tiene sistema impositivo agresivo:
              </p>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>• Impuesto a la Renta: hasta 35% sobre ingresos</li>
                <li>• Impuesto al Patrimonio: 0.5-1.5% anual sobre bienes</li>
                <li>• Impuesto a las Ganancias: adicional sobre ganancias de capital</li>
                <li>• Impuesto al Cheque: 0.6% sobre cada operación bancaria</li>
                <li>• Bienes Personales: 0.5-2.75% sobre patrimonio</li>
              </ul>
              <p className="text-brand-700 text-sm mt-3">
                Entre inflación y impuestos, tus ahorros se evaporan.
              </p>
            </div>

            <div className="border-l-4 border-brand-GOLD bg-white p-6 rounded-lg">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">
                📊 Oportunidades de Inversión Limitadas
              </h3>
              <p className="text-brand-700 mb-3">
                Opciones de invertir en Argentina con seguridad son prácticamente nulas:
              </p>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>• Mercado bursátil: altamente volátil, bajo volumen</li>
                <li>• Bonos argentinos: riesgos de default</li>
                <li>• Bienes raíces: precios fluctúan en pesos, no protege</li>
                <li>• Cuentas de ahorro: intereses no superan inflación</li>
              </ul>
            </div>
          </div>

          <div className="bg-brand-TEAL bg-opacity-10 border border-brand-TEAL border-opacity-30 rounded-lg p-6">
            <p className="text-brand-700 text-lg">
              <strong className="text-brand-950">La Verdad Incómoda:</strong> Si tienes ahorros significativos en Argentina y no actúas ahora, los perderás. No es pesimismo — es matemática. A 200% de inflación anual, dinero en pesos se reduce a la mitad cada 4-5 meses. Panamá no es opción de lujo — es necesidad financiera.
            </p>
          </div>
        </section>

        {/* Why Panama */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            La Solución: Por Qué Panamá es Exactamente lo Que Necesitas
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🪙 Dólar Estadounidense</h3>
              <p className="text-brand-700 text-sm">
                Panamá usa USD como moneda oficial. Tu dinero no pierde valor como en pesos argentinos. El dólar es estable, predecible, y protege patrimonio.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">✅ Cero Impuesto a Ingresos del Exterior</h3>
              <p className="text-brand-700 text-sm">
                Panamá NO grava ingresos generados fuera del país. Si trabajas remoto o tienes ingresos internacionales, es potencialmente LIBRE DE IMPUESTO.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🟢 Friendly Nation Status</h3>
              <p className="text-brand-700 text-sm">
                Argentina está en la lista. Residencia permanente en 3-6 meses sin esperas absurdas. Acceso legal y simple.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🏗️ Bienes Raíces en USD</h3>
              <p className="text-brand-700 text-sm">
                Propiedad en USD. No fluctúa con pesos. Retorno de alquiler 6-9% anual. Inversión tangible protegida.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🏦 Estabilidad Institucional</h3>
              <p className="text-brand-700 text-sm">
                Sistema legal predecible. Bancos seguros. Propiedad privada respetada. Corrupción manejable. Marco regulatorio claro.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">✈️ Acceso Regional</h3>
              <p className="text-brand-700 text-sm">
                Hub de Latinoamérica. Vuelos a USA, Brasil, Colombia, Perú. Punto central para negocios regionales.
              </p>
            </div>
          </div>

          <div className="bg-brand-GOLD bg-opacity-10 border border-brand-GOLD border-opacity-30 rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
              🎯 Para Argentinos Específicamente
            </h3>
            <p className="text-brand-700 text-sm">
              Panamá resuelve exactamente el problema argentino: inflación, restricciones cambiarias, impuestos. Mueves dinero a USD, inviertes en dólares, y proteges patrimonio de forma legal y simple. Muchos argentinos no entienden que es posible.
            </p>
          </div>
        </section>

        {/* Friendly Nations para Argentinos */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Visa Friendly Nations para Argentinos: Tu Ventaja Especial
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            Argentina está en la lista de 50 "Friendly Nations" de Panamá. Esto significa que obtener residencia permanente es accesible, rápido, y legal.
          </p>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-brand-TEAL bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-3">
                ¿Qué es Friendly Nations?
              </h3>
              <p className="text-brand-700 mb-4">
                Es un programa que permite a ciudadanos de ciertos países ("amigos" de Panamá) obtener residencia permanente con requisitos más simples que otros. Argentina califica.
              </p>
              <p className="text-brand-700 text-sm">
                Para ti: puedes obtener residencia permanente en Panamá demostrando vínculo económico (propiedad, empresa, trabajo, depósito). Dentro de 3-6 meses, tendrás cédula de residencia permanente.
              </p>
            </div>

            <div className="border-l-4 border-brand-TEAL bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-3">
                Requisitos para Friendly Nations
              </h3>
              <p className="text-brand-700 mb-4">
                Necesitas demostrar "vínculo económico". Las opciones más accesibles para argentinos:
              </p>
              <div className="space-y-3">
                <div className="bg-brand-50 p-4 rounded">
                  <p className="font-bold text-brand-950 mb-1">Opción 1: Compra de Propiedad Inmobiliaria</p>
                  <p className="text-sm text-brand-700">Invierte mínimo $200,000 USD en propiedad en Panamá. Muchos argentinos eligen esto: compran apartamento, obtienen residencia.</p>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <p className="font-bold text-brand-950 mb-1">Opción 2: Empresa en Panamá</p>
                  <p className="text-sm text-brand-700">Establece sociedad panameña. Inversión $5K-10K + capital circulante operativo. Demuestra negocio funcionando.</p>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <p className="font-bold text-brand-950 mb-1">Opción 3: Empleo con Empresa Panameña</p>
                  <p className="text-sm text-brand-700">Contrato laboral con empresa local. Menos popular que propiedad pero viable si encuentras empleador.</p>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <p className="font-bold text-brand-950 mb-1">Opción 4: Depósito Bancario</p>
                  <p className="text-sm text-brand-700">Mantén $100K-200K USD en cuenta bancaria panameña. Muestra capacidad económica.</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-brand-TEAL bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-3">
                Timeline y Costo
              </h3>
              <div className="space-y-3 text-sm text-brand-700">
                <div className="flex justify-between pb-2 border-b border-brand-200">
                  <span><strong>Abogado de inmigración:</strong></span>
                  <span className="font-bold">$2,500 - $4,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-brand-200">
                  <span><strong>Gastos administrativos:</strong></span>
                  <span className="font-bold">$500 - $800</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-brand-200">
                  <span><strong>Cédula de residencia:</strong></span>
                  <span className="font-bold">$200 - $300</span>
                </div>
                <div className="flex justify-between font-bold text-brand-950">
                  <span>Total (sin vínculo económico):</span>
                  <span>$3,200 - $5,100</span>
                </div>
              </div>
              <p className="text-brand-600 text-xs mt-4">
                Si compras propiedad por $200K+, ese es tu inversión. La visa se obtiene "gratis" como resultado del vínculo económico.
              </p>
            </div>

            <div className="border-l-4 border-brand-TEAL bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-3">
                Proceso Paso a Paso
              </h3>
              <ol className="space-y-3 text-sm text-brand-700">
                <li><strong>1. Contrata abogado panameño</strong> especializado en Friendly Nations.</li>
                <li><strong>2. Elige vínculo económico</strong> (más común: compra propiedad).</li>
                <li><strong>3. Prepara documentación:</strong> pasaporte, extractos bancarios, "origin of funds" (explicación origen dinero).</li>
                <li><strong>4. Abogado presenta solicitud</strong> ante Ministerio de Gobierno.</li>
                <li><strong>5. Ministerio revisa (8-12 semanas).</strong> A veces pide aclaraciones.</li>
                <li><strong>6. Aprobación (3-6 meses total)</strong> desde solicitud.</li>
                <li><strong>7. Cédula de residencia</strong> — documento oficial de residencia permanente.</li>
              </ol>
            </div>
          </div>

          <div className="bg-brand-GOLD bg-opacity-10 border border-brand-GOLD border-opacity-30 rounded-lg p-6">
            <p className="text-brand-700 text-sm">
              <strong className="text-brand-950">Ventaja Crucial para Argentinos:</strong> El gobierno panameño entiende que muchos argentinos buscan proteger patrimonio de inflación. No hay prejuicio. El proceso es transparente. "Origin of funds" (explicar de dónde viene tu dinero) es formalidad — si vienes del trabajo o negocios en Argentina, es completamente legal. Panamá QUIERE residentes que traigan capital.
            </p>
          </div>
        </section>

        {/* Cómo Pasar a No-Residente Fiscal */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            La Planificación Fiscal Inteligente para Argentinos en Panamá
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            Una ventaja GIGANTE de residir en Panamá es potencial para no ser "residente fiscal" de Argentina. Esto abre posibilidades impositivas enormes. IMPORTANTE: Esto requiere planificación cuidadosa con contador especializado.
          </p>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-brand-GOLD bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-3">
                ¿Qué es "Residente Fiscal"?
              </h3>
              <p className="text-brand-700 mb-3 text-sm">
                Residente fiscal de Argentina = persona que pasa 183+ días en país durante año. Si cumples este criterio, Argentina te considera residente y te grava renta mundial.
              </p>
              <p className="text-brand-700 text-sm">
                Si obtenes residencia panameña Y pasas menos de 183 días en Argentina durante año, podrías ser "no-residente fiscal argentino" = NO PAGAS IMPUESTOS A ARGENTINA sobre ingresos generados fuera de Argentina.
              </p>
            </div>

            <div className="border-l-4 border-brand-GOLD bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-3">
                Implicaciones Fiscales
              </h3>
              <div className="space-y-3 text-sm text-brand-700">
                <div className="bg-brand-50 p-4 rounded">
                  <p className="font-bold text-brand-950 mb-2">Si Eres Residente Fiscal Argentino</p>
                  <p>Pagas impuestos a Argentina sobre ingresos mundiales. Si ganas en Panamá, reportas a AFIP. Impuestos argentina aplican.</p>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <p className="font-bold text-brand-950 mb-2">Si Eres No-Residente Fiscal Argentino</p>
                  <p>Ingresos generados fuera de Argentina son potencialmente LIBRES DE IMPUESTO ARGENTINO. Trabajas remoto en Panamá, ganas en USD, cero AFIP.</p>
                </div>

                <div className="bg-brand-50 p-4 rounded">
                  <p className="font-bold text-brand-950 mb-2">En Panamá</p>
                  <p>Panamá SOLO grava ingresos generados en Panamá. Ingresos del exterior típicamente no gravan (con algunos límites).</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-brand-GOLD bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-3">
                Ejemplo: Argentino que Trabaja Remoto
              </h3>
              <p className="text-brand-700 mb-3 text-sm">
                <strong>Situación:</strong> Eres programador argentino con clientes internacionales. Ganas $5,000 USD/mes.
              </p>
              <p className="text-brand-700 mb-3 text-sm">
                <strong>Opción 1: Seguir en Argentina</strong>
              </p>
              <ul className="text-sm text-brand-700 mb-4 ml-4">
                <li>• Residente fiscal argentino</li>
                <li>• Impuesto a la renta: ~25-35% = $1,250-1,750/mes</li>
                <li>• Impuesto a las ganancias: adicional</li>
                <li>• Total carga: 40-45% = dejas ~$2,500-2,750/mes</li>
              </ul>
              <p className="text-brand-700 mb-3 text-sm">
                <strong>Opción 2: Residencia en Panamá, No-Residente Fiscal Argentino</strong>
              </p>
              <ul className="text-sm text-brand-700 ml-4">
                <li>• No eres residente fiscal argentino (menos de 183 días/año)</li>
                <li>• Ingresos del exterior: cero impuesto en Panamá</li>
                <li>• Ingresos del exterior: potencialmente cero impuesto en Argentina</li>
                <li>• Total carga: 0% = tienes $5,000/mes completos</li>
              </ul>
              <p className="text-brand-700 text-sm mt-3">
                <strong>Diferencia:</strong> $2,250-2,500 USD más por mes. $27,000-30,000 USD más por año. SOLO por estar físicamente en Panamá.
              </p>
            </div>
          </div>

          <div className="bg-brand-GOLD bg-opacity-10 border border-brand-GOLD border-opacity-30 rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
              ⚠️ ADVERTENCIA CRUCIAL SOBRE FISCALIDAD
            </h3>
            <p className="text-brand-700 text-sm mb-3">
              Este análisis es simplificado. Fiscalidad entre Argentina y Panamá es compleja. Hay acuerdo de intercambio de información (FATCA). Algunas categorías de ingreso tienen reglas especiales. Argentina tiene reglas sobre "no-residentes" que pueden cambiar.
            </p>
            <p className="text-brand-700 text-sm font-bold">
              <strong>SIEMPRE contrata contador fiscal panameño Y contador fiscal argentino especializados ANTES de implementar cualquier estructura.</strong> El costo: $1,000-2,000 inicialmente. Vale cada centavo. Los errores pueden costar decenas de miles.
            </p>
          </div>
        </section>

        {/* Bienes Raíces en USD */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Bienes Raíces en USD: La Inversión Segura para Argentinos
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            Muchos argentinos con dinero entienden que comprar propiedad en USD en Panamá es la forma más segura de proteger patrimonio. No es especulación — es estabilidad.
          </p>

          <div className="bg-brand-TEAL bg-opacity-10 border border-brand-TEAL border-opacity-30 rounded-lg p-8 mb-8">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
              ¿Por Qué Argentinos Compran en Panamá?
            </h3>
            <ul className="space-y-2 text-sm text-brand-700">
              <li>✓ <strong>Protección de valor:</strong> Dinero en USD no pierde 200% por año como peso argentino.</li>
              <li>✓ <strong>Activo tangible:</strong> No confiscan bienes raíces como confiscaron y corralitazo ahorro en 2001.</li>
              <li>✓ <strong>Retorno de inversión:</strong> 6-9% anual en alquiler, mejor que oportunidades en Argentina.</li>
              <li>✓ <strong>Diversificación regional:</strong> Activo fuera de Argentina reduce riesgo país.</li>
              <li>✓ <strong>Herencia para hijos:</strong> Propiedad en USD que no se devalúa es legado real.</li>
            </ul>
          </div>

          <div className="bg-white border border-brand-100 rounded-lg p-8 mb-8">
            <h3 className="font-heading text-xl font-bold text-brand-950 mb-4">
              Rango de Precios Inmobiliarios en Panamá
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start pb-3 border-b border-brand-200">
                <div>
                  <p className="font-bold text-brand-950">Entrada / San Miguelito, Tocumen</p>
                  <p className="text-sm text-brand-600">1-2 dormitorios</p>
                </div>
                <p className="text-brand-TEAL font-bold text-lg">$90,000 - $150,000</p>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-brand-200">
                <div>
                  <p className="font-bold text-brand-950">Mid-Range / Miraflores, Clayton</p>
                  <p className="text-sm text-brand-600">2-3 dormitorios, buena zona</p>
                </div>
                <p className="text-brand-TEAL font-bold text-lg">$180,000 - $350,000</p>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-brand-200">
                <div>
                  <p className="font-bold text-brand-950">Premium / Casco Viejo, Amador</p>
                  <p className="text-sm text-brand-600">3-4 dormitorios, ubicación prime</p>
                </div>
                <p className="text-brand-TEAL font-bold text-lg">$350,000 - $700,000</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-brand-950">Lujo / Punta Pacifica, Costa del Este</p>
                  <p className="text-sm text-brand-600">Penthouses, vistas espectaculares</p>
                </div>
                <p className="text-brand-TEAL font-bold text-lg">$500,000 - $2,000,000+</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">📊 Análisis de Retorno</h3>
              <p className="text-brand-700 mb-3 text-sm">
                <strong>Ejemplo: Apartamento 2BR en Miraflores</strong>
              </p>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>• Precio compra: $250,000</li>
                <li>• Alquiler mensual: $1,400-1,600</li>
                <li>• Retorno bruto anual: 6.7%-7.7%</li>
                <li>• Menos gastos (5-15%): retorno neto 5.5%-6.5%</li>
                <li>• Apreciación histórica: 3-5%/año</li>
                <li>• <strong>Total anual: 8.5%-11.5% en USD</strong></li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">💰 Financiamiento</h3>
              <p className="text-brand-700 mb-3 text-sm">
                Con residencia, tienes acceso a crédito:
              </p>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>• Bancos: Banistmo, Global Bank, Bladex</li>
                <li>• Financiamiento: 70-80% posible</li>
                <li>• Plazo: 15-30 años</li>
                <li>• Tasa: 4.5%-7% según perfil</li>
                <li>• Enganche: 20-30%</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-brand-100 rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
              🔄 Caso Real: Argentino Compra en Panamá
            </h3>
            <div className="space-y-3 text-sm text-brand-700">
              <p><strong>Situación:</strong> Empresario argentino con $300K USD en ahorros. Preocupado por peso argentino e inflación.</p>
              <p><strong>Decisión:</strong> Compra apartamento 3BR en Miraflores por $280,000 USD.</p>
              <p><strong>Resultado inmediato:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>✓ Residencia permanente en Panamá (vínculo económico cumplido)</li>
                <li>✓ Activo en USD (protegido de devaluación peso)</li>
                <li>✓ Retorno $1,600/mes en alquiler = $19,200/año</li>
                <li>✓ Potencial no-residente fiscal argentino (ventaja impositiva)</li>
              </ul>
              <p><strong>Escenario en 5 años:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Propiedad vale $360K-390K (apreciación 5%/año)</li>
                <li>• Recibió $96K en alquileres (5 años x $19,200)</li>
                <li>• Ganancia de capital: $80K-110K</li>
                <li>• Peso argentino cayó 30-40% vs USD</li>
                <li>• Si mantuviera dinero en pesos, hubiera perdido ~$90K de valor nominal</li>
                <li>• <strong>Net result: ganancia de $176K-206K en comparación con mantener pesos</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cost Comparison Chart */}
        <section className="my-12">
          <h3 className="font-heading text-2xl font-bold text-brand-950 mb-6">
            Comparativa: Costo de Vida Buenos Aires vs Panama City
          </h3>
          <div className="rounded-lg overflow-hidden border border-brand-100 bg-brand-50 h-[400px]">
            <CostBarChart data={argentinaChartData} title="Monthly Cost Comparison (USD)" />
          </div>
          <p className="text-sm text-brand-600 mt-4 text-center">
            Gastos mensuales estimados en USD. Buenos Aires parece más barato, pero en PESOS pierde 200% anual de valor.
          </p>
        </section>

        {/* Documentación */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Documentación Necesaria para Argentinos
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
                ✅ Para Solicitud de Visa Friendly Nations
              </h3>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>• <strong>Pasaporte argentino</strong> — Vigente por mínimo 6 meses</li>
                <li>• <strong>Partida de nacimiento</strong> — Certificado original o copia autenticada</li>
                <li>• <strong>Certificado de antecedentes penales</strong> — Del Poder Judicial argentino o Interpol</li>
                <li>• <strong>Extractos bancarios</strong> — Últimos 3 meses demostrando fondos</li>
                <li>• <strong>"Origin of funds"</strong> — Explicación de origen del dinero (carta simple o documento formal)</li>
                <li>• <strong>Comprobante de domicilio</strong> — Servicio de agua/luz/teléfono o contrato de alquiler</li>
                <li>• <strong>Formularios de inmigración</strong> — Completados según consulado panameño</li>
                <li>• <strong>Fotos formato pasaporte</strong> — 4x4 cm, fondo blanco, típicamente 4-6 fotos</li>
              </ul>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
                ✅ Para Compra de Propiedad Inmobiliaria
              </h3>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>• <strong>Pasaporte válido</strong> — Copia páginas principales</li>
                <li>• <strong>Extractos bancarios</strong> — Últimos 6 meses demostrando fondos disponibles</li>
                <li>• <strong>Carta de origen de fondos</strong> — Explicación detallada para notario/banco</li>
                <li>• <strong>Identificación fiscal panameña (RUC)</strong> — Necesaria para registrar propiedad</li>
                <li>• <strong>Dirección en Panamá</strong> — O dirección de abogado/agente que represente</li>
                <li>• <strong>Estado civil</strong> — Certificado de matrimonio/divorcio si aplica (traducido)</li>
                <li>• <strong>Identificación adicional</strong> — Puede incluir antecedentes penales o referencia laboral</li>
              </ul>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
                ✅ Para Abrir Cuenta Bancaria en Panamá
              </h3>
              <ul className="space-y-2 text-sm text-brand-700">
                <li>• <strong>Pasaporte</strong> — Vigente</li>
                <li>• <strong>Extractos bancarios argentinos</strong> — Últimos 3 meses</li>
                <li>• <strong>Carta de referencia bancaria</strong> — De banco en Argentina</li>
                <li>• <strong>Declaración jurada de origen de fondos</strong> — Explicación completa</li>
                <li>• <strong>Dirección de residencia en Panamá</strong> — Contrato de alquiler o comprobante</li>
                <li>• <strong>Propósito de cuenta</strong> — Explicar para qué necesitas la cuenta</li>
              </ul>
            </div>
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
              ⚠️ Nota sobre "Origin of Funds"
            </h3>
            <p className="text-brand-700 text-sm mb-3">
              Bancos panameños y notarios requieren explicación clara de origen del dinero. Esto NO es sospecha — es cumplimiento FATCA/AML (anti-lavado). Si vienes de trabajo o negocios en Argentina, es completamente legítimo. Debes documentar:
            </p>
            <ul className="text-sm text-brand-700 space-y-1">
              <li>• Ingresos de empleo en Argentina</li>
              <li>• Ganancias de venta de negocios</li>
              <li>• Herencias (con documentación de fallecimiento)</li>
              <li>• Ahorros de años trabajando</li>
            </ul>
            <p className="text-brand-700 text-sm mt-3">
              El proceso es normal. Panamá QUIERE dinero limpio. No hay prejuicio contra argentinos — es proceso estándar.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Preguntas Frecuentes: Argentinos en Panamá
          </h2>

          <div className="space-y-6">
            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Si me voy a Panamá, debo pagar impuestos en Argentina?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                Depende. Si eres residente fiscal argentino (183+ días en país), Argentina te grava sobre ingresos mundiales. Si eres no-residente fiscal (menos de 183 días), depende de la naturaleza del ingreso. Ingresos del exterior pueden estar libres de impuesto argentino. PERO consulta contador fiscal especializado — las reglas son técnicas.
              </p>
            </details>

            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Puedo tener cuenta bancaria en Argentina si vivo en Panamá?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                Sí, pero con limitaciones. Muchos bancos argentinos ahora requieren que residas en Argentina para mantener cuenta. Algunos aceptan no-residentes con saldo mínimo. La mayoría de argentinos en Panamá tienen cuenta en banco argentino para transacciones ocasionales, pero usan bancos panameños para operaciones principales.
              </p>
            </details>

            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Cómo saco dinero de Argentina para invertir en Panamá?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                Si tienes dólares en Argentina, transferencia internacional es opción. Proceso: banco argentino envía fondos a cuenta internacional (usualmente a banco en Panamá). Puede tomar 3-7 días. Si tienes pesos, cambias a dólares (broker o blue market), luego transferencia. Nota: cepo cambiario puede limitar. Consulta abogado especializado en salida de capitales.
              </p>
            </details>

            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Qué pasa si compro propiedad en Panamá pero no obtengo residencia?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                Puedes comprar propiedad sin ser residente. Pero es oportunidad desperdiciada. Con compra de $200K+, calificas para Friendly Nations — aprovechalo. Propiedad + residencia permanente es combinación poderosa.
              </p>
            </details>

            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Es legal lo que estoy planteando o estoy evadiendo impuestos?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                Obtener residencia en Panamá es completamente legal. Invertir en bienes raíces es legal. Ser no-residente fiscal es legal si cumples los requisitos (menos de 183 días en Argentina). Lo que describimos es planificación fiscal LEGAL. Evasión sería esconder ingresos o falsificar documentos. Esto es lo opuesto — es transparente y documentado. Trabaja con contadores que aseguren cumplimiento.
              </p>
            </details>

            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Cuánto dinero necesito para mudarse a Panamá?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                Mínimo sin comprar propiedad: $5,000-8,000 (vuelo, visa, primeros meses, abogado). Con compra de propiedad para Friendly Nations: $200,000+ en propiedad + $3,500-5,000 en gastos legales. Mucha gente llega con $10,000-20,000 y va comprando/invirtiendo sobre la marcha.
              </p>
            </details>
          </div>
        </section>

        {/* Conclusión */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Conclusión: Panamá es la Solución de Emergencia para Argentinos
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Argentina en 2026 está en crisis económica sostenida. La inflación no se detiene. El peso continúa devaluándose. Los ahorros desaparecen.
          </p>

          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Panamá no es sueño — es solución práctica. USD como moneda. Estabilidad institucional. Residencia accesible. Bienes raíces que protegen patrimonio. Oportunidad de no-residente fiscal.
          </p>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            Cientos de argentinos ya emigraron. Miles más están considerando. No es necesidad de aventura — es necesidad de supervivencia financiera.
          </p>

          <div className="bg-brand-TEAL bg-opacity-10 border border-brand-TEAL border-opacity-30 rounded-lg p-8 mb-8">
            <p className="text-lg text-brand-950 font-bold mb-4">
              El Tiempo es Ahora
            </p>
            <p className="text-brand-700 mb-6">
              Cuanto más esperas, más dinero pierdes a inflación. Cada mes que pasa, tus ahorros se erosionan. Panamá está lista para recibirte. El proceso es simple. La oportunidad es real.
            </p>
            <Link
              href={`/${lang}/contacto`}
              className="inline-block bg-brand-TEAL text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
            >
              Agenda Consulta Gratuita Hoy
            </Link>
          </div>

          <p className="text-sm text-brand-600 border-t border-brand-100 pt-6">
            <strong>Descargo:</strong> Esta guía es educativa. Leyes cambian. Planificación fiscal requiere profesionales. SIEMPRE consulta abogado panameño e contador fiscal antes de decisiones legales importantes. VIP Expats facilita conexiones con profesionales confiables.
          </p>
        </section>
      </article>

      {/* CTA Footer */}
      <section className="bg-brand-50 border-t border-brand-100 mt-16 py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-4">
            No Esperes a Que Sea Demasiado Tarde
          </h2>
          <p className="text-lg text-brand-700 mb-8 max-w-2xl mx-auto">
            Cada día en Argentina, tu dinero pierde valor. Panamá espera. Hablemos de tu situación específica.
          </p>
          <Link
            href={`/${lang}/contacto`}
            className="inline-block bg-brand-TEAL text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition"
          >
            Consulta Gratuita — Conectemos Ahora
          </Link>
        </div>
      </section>
    </main>
  );
}
