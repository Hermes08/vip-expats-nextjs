import Link from 'next/link';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';



export const metadata = {
  title: 'Vivir en Panamá siendo Venezolano 2026: Visa, Trabajo y Bienes Raíces',
  description: 'Guía completa para venezolanos que desean mudarse a Panamá en 2026. Opciones de visa, oportunidades de trabajo, comunidad venezolana y bienes raíces. Más de 100,000 venezolanos viven en Panamá.',
  keywords: 'vivir en panama venezolanos, mudarse a panama desde venezuela, venezuela panama 2026, visa para venezolanos, trabajo en panama venezolanos',
  openGraph: {
    title: 'Vivir en Panamá siendo Venezolano 2026: Visa, Trabajo y Bienes Raíces',
    description: 'Descubre cómo mudarte a Panamá desde Venezuela. Opciones de visa, empleo y inversión en bienes raíces para la comunidad venezolana.',
    url: '/es/blog/vivir-en-panama-venezolanos',
    type: 'article',
  },
};

export default function VivEnPanamVenezolanos({ params }) {
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
            Vivir en Panamá siendo Venezolano 2026
          </h1>
          <p className="text-xl text-brand-700 mb-6 leading-relaxed">
            Visa, Trabajo, Comunidad y Bienes Raíces para Venezolanos que Desean Mudarse a Panamá
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center text-sm text-brand-600">
            <span>📅 Actualizado: Marzo 2026</span>
            <span>•</span>
            <span>👥 Comunidad: +100,000 venezolanos en Panamá</span>
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
            Más de 100,000 venezolanos ya viven en Panamá. Cada mes, cientos más deciden hacer el mismo cambio. ¿Por qué? Porque Panamá ofrece lo que Venezuela ya no puede: estabilidad, oportunidad económica, idioma español, y un futuro donde tu dinero mantiene su valor.
          </p>
          <p className="text-lg text-brand-700 leading-relaxed">
            Esta guía te explica cómo hacerlo legalmente en 2026 — desde opciones de visa hasta oportunidades de trabajo, documentos necesarios, y cómo invertir en bienes raíces como venezolano.
          </p>
        </section>

        {/* Three.js Scene */}
        <section className="my-12 rounded-lg overflow-hidden border border-brand-100 bg-brand-50 h-[400px]">
          <PanamaCityScene />
        </section>

        {/* ¿Por Qué Panamá para Venezolanos? */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            ¿Por Qué Panamá para Venezolanos?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🪙 Economía Estable en USD</h3>
              <p className="text-brand-700">
                Panamá usa el dólar estadounidense como moneda oficial. Tu dinero no pierde valor cada mes. Los venezolanos entienden esta ventaja mejor que nadie.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🏛️ Estabilidad Política y Democracia</h3>
              <p className="text-brand-700">
                Sistema democrático establecido. Instituciones respetan derechos de propiedad. Transparencia judicial. Lo opuesto a lo que experimentaste en Venezuela.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">💼 Oportunidades de Trabajo</h3>
              <p className="text-brand-700">
                Hub financiero de Latinoamérica. Zonas Francas. Turismo. Tecnología. Servicios. Miles de empresas contratan profesionales venezolanos.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🎧 Idioma Español e Integración Rápida</h3>
              <p className="text-brand-700">
                No necesitas aprender un idioma nuevo. La comunidad venezolana es grande — restaurantes, grupos, amigos que viven el mismo proceso.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">✈️ Hub de Transporte Regional</h3>
              <p className="text-brand-700">
                Copa Airlines conecta Panamá con toda Latinoamérica, USA y Canadá. Punto de conexión para viajes internacionales.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🌎 Centro Financiero Global</h3>
              <p className="text-brand-700">
                Bancos internacionales, compañías de seguros, firmas legales. Mercado financiero robusto con regulación clara.
              </p>
            </div>
          </div>

          <div className="bg-brand-TEAL bg-opacity-10 border border-brand-TEAL border-opacity-30 rounded-lg p-6">
            <p className="text-brand-700 text-lg">
              <strong className="text-brand-950">Dato clave:</strong> Los venezolanos son la segunda comunidad migrante más grande en Panamá (después de colombianos). Esto significa: empleadores entienden el perfil, comunidades de apoyo establecidas, y redes profesionales ya funcionando.
            </p>
          </div>
        </section>

        {/* Opciones de Visa */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Opciones de Visa para Venezolanos en 2026
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            Las reglas para venezolanos han cambiado múltiples veces. <strong>Siempre verifica con un abogado de inmigración panameño actual</strong> antes de tomar decisiones. Aquí están las opciones principales en 2026:
          </p>

          <div className="space-y-8">
            {/* Visa de Turismo */}
            <div className="border-l-4 border-brand-TEAL bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-2">
                1. Visa de Turismo (30-90 días)
              </h3>
              <p className="text-brand-700 mb-3">
                Venezolanos requieren visa de turismo para entrar a Panamá. La solicitas en el consulado panameño en tu país o en una tercera nación.
              </p>
              <div className="bg-brand-50 p-4 rounded mb-3">
                <p className="text-sm text-brand-700"><strong>Documentos típicos:</strong> Pasaporte vigente (6+ meses), comprobante de fondos ($1,500-3,000), reserva de hotel, prueba de viaje de retorno.</p>
              </div>
              <p className="text-sm text-brand-600"><strong>Tiempo de procesamiento:</strong> 7-21 días | <strong>Costo:</strong> ~$50-100</p>
              <p className="text-brand-700 mt-3 text-sm">
                <strong>Nota:</strong> Es una visa corta. Útil para explorar antes de mudarte permanentemente. Muchos venezolanos llegan con visa de turismo y luego solicitan residencia desde Panamá.
              </p>
            </div>

            {/* Visa de Trabajo */}
            <div className="border-l-4 border-brand-TEAL bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-2">
                2. Visa de Trabajo
              </h3>
              <p className="text-brand-700 mb-3">
                Con oferta de trabajo de una empresa panameña, puedes obtener visa de trabajo. La empresa debe patrocinarte.
              </p>
              <div className="bg-brand-50 p-4 rounded mb-3">
                <p className="text-sm text-brand-700"><strong>Requisitos:</strong> Contrato de trabajo, comprobante de que no hay candidato panameño calificado, antecedentes penales limpios.</p>
              </div>
              <p className="text-sm text-brand-600"><strong>Tiempo de procesamiento:</strong> 4-8 semanas | <strong>Costo:</strong> $1,500-2,500 (empresa u empleado paga)</p>
              <p className="text-brand-700 mt-3 text-sm">
                <strong>Ventaja:</strong> Después de 3 años en visa de trabajo, puedes solicitar residencia permanente.
              </p>
            </div>

            {/* Visa de Residente Permanente */}
            <div className="border-l-4 border-brand-GOLD bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-2">
                3. Visa de Residente Permanente por Motivos Económicos (Friendly Nations)
              </h3>
              <p className="text-brand-700 mb-3">
                <strong>NOTA IMPORTANTE:</strong> Venezuela NO está en la lista de 50 "Friendly Nations". Esta opción no aplica directamente para venezolanos a menos que tengas pasaporte dual de otro país en la lista.
              </p>
              <p className="text-brand-700 text-sm">
                Si eres ciudadano de Colombia, Argentina, Chile, México, etc., puedes usar Friendly Nations. Requiere invertir $200,000+ en inmuebles o empresa panameña, y da residencia permanente en 3-6 meses.
              </p>
            </div>

            {/* Visa Pensionado */}
            <div className="border-l-4 border-brand-TEAL bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-2">
                4. Visa Pensionado (Jubilado)
              </h3>
              <p className="text-brand-700 mb-3">
                Si recibes pensión internacional o ingresos pasivos de $1,000/mes (comprobables), calificas para visa de pensionado.
              </p>
              <div className="bg-brand-50 p-4 rounded mb-3">
                <p className="text-sm text-brand-700"><strong>Documentos:</strong> Contrato de pensión, extractos bancarios, certificado de antecedentes penales.</p>
              </div>
              <p className="text-sm text-brand-600"><strong>Beneficios adicionales:</strong> 25% descuento en medicinas, 50% en servicios odontológicos y ópticos, 25% en hospedaje, 12-25% en vuelos Copa Airlines.</p>
              <p className="text-brand-700 mt-3 text-sm">
                <strong>Nota:</strong> Muchos venezolanos combinan retiro temprano de fondos del exterior + pensiones pequeñas para alcanzar este monto.
              </p>
            </div>

            {/* Visa de Inversionista */}
            <div className="border-l-4 border-brand-TEAL bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-2">
                5. Visa de Inversionista
              </h3>
              <p className="text-brand-700 mb-3">
                Invierte $300,000+ en una empresa panameña, genera empleos, y obtén residencia permanente.
              </p>
              <div className="bg-brand-50 p-4 rounded mb-3">
                <p className="text-sm text-brand-700"><strong>Requisitos:</strong> Plan de negocio, fuente de fondos demostrada, creación de mínimo 1-2 puestos de trabajo.</p>
              </div>
              <p className="text-sm text-brand-600"><strong>Tiempo de procesamiento:</strong> 6-12 meses | <strong>Costo:</strong> $3,000-5,000 en abogados</p>
              <p className="text-brand-700 mt-3 text-sm">
                Algunos venezolanos abren negocios (restaurantes, consultoría, ecommerce) y obtienen residencia de inversionista.
              </p>
            </div>

            {/* Solicitud de Refugio */}
            <div className="border-l-4 border-brand-700 bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-2">
                6. Solicitud de Refugio (Asilo Político)
              </h3>
              <p className="text-brand-700 mb-3">
                Para quienes califican bajo definición de persecución política, Panamá acepta solicitudes de refugio.
              </p>
              <div className="bg-brand-50 p-4 rounded mb-3">
                <p className="text-sm text-brand-700"><strong>Proceso:</strong> Más largo, investigación de elegibilidad, entrevista con autoridades. Requiere demostrar persecución específica.</p>
              </div>
              <p className="text-brand-700 mt-3 text-sm">
                <strong>Nota:</strong> No todos califican. Consulta con abogado especializado en refugios si crees que es tu caso.
              </p>
            </div>

            {/* Residente Temporal */}
            <div className="border-l-4 border-brand-TEAL bg-white p-6 rounded-lg">
              <h3 className="font-heading text-2xl font-bold text-brand-950 mb-2">
                7. Residente Temporal (Ruta Menos Conocida)
              </h3>
              <p className="text-brand-700 mb-3">
                Si compras propiedad en Panamá ($200,000+) sin ser residente, puedes solicitar residencia temporal. Después de 3 años, solicitas permanente.
              </p>
              <p className="text-brand-700 text-sm">
                Muchos venezolanos eligen esta ruta: compran apartamento en Panama City, viven allí mientras espera aprobación.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-brand-GOLD bg-opacity-10 border border-brand-GOLD border-opacity-30 rounded-lg p-6">
            <p className="text-brand-700 text-sm">
              <strong className="text-brand-950">Recomendación crucial:</strong> Las leyes de inmigración panameñas cambian. Algunos consulados aplican reglas más estrictas para venezolanos. <strong>Contrata un abogado de inmigración panameño ANTES de solicitar cualquier visa.</strong> Costo: $500-1,500 iniciales. Vale cada centavo.
            </p>
          </div>
        </section>

        {/* Trabajar en Panamá como Venezolano */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Trabajar en Panamá como Venezolano
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            No necesitas visa de turista para buscar trabajo. Muchos venezolanos entran con visa de turismo y buscan empleo. Una vez con contrato, solicitan visa de trabajo.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">💼 Zonas Francas (Colón)</h3>
              <p className="text-brand-700 mb-3">
                La Zona Libre de Colón es uno de los puertos de transbordo más grandes del mundo. Contratan: operadores aduanales, despachantes, coordinadores logísticos.
              </p>
              <p className="text-sm text-brand-600">
                <strong>Salario promedio:</strong> $1,500-2,500/mes para posiciones de entrada.
              </p>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🏨 Servicios y Turismo</h3>
              <p className="text-brand-700 mb-3">
                Hoteles, restaurantes, aeropuerto, cruceros. Sector que crece constantemente. Muchos venezolanos trabajan en hotelería.
              </p>
              <p className="text-sm text-brand-600">
                <strong>Salario promedio:</strong> $900-1,800/mes según posición.
              </p>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🏦 Banca y Finanzas</h3>
              <p className="text-brand-700 mb-3">
                Panamá es hub financiero de Latinoamérica. Bancos internacionales buscan profesionales con experiencia bilingüe.
              </p>
              <p className="text-sm text-brand-600">
                <strong>Salario promedio:</strong> $2,000-5,000+/mes para profesionales.
              </p>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">💻 Tecnología y Startups</h3>
              <p className="text-brand-700 mb-3">
                Sector creciente. Startups en Panama City, agencias digitales, desarrollo de software.
              </p>
              <p className="text-sm text-brand-600">
                <strong>Salario promedio:</strong> $1,800-4,500/mes para desarrolladores.
              </p>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🛍️ Comercio Retail</h3>
              <p className="text-brand-700 mb-3">
                Centros comerciales, tiendas, malls. Mucha contratación. Baja barrera de entrada.
              </p>
              <p className="text-sm text-brand-600">
                <strong>Salario promedio:</strong> $750-1,500/mes.
              </p>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">📱 Freelance Internacional</h3>
              <p className="text-brand-700 mb-3">
                Si trabajas remoto con clientes internacionales siendo residente panameño, ingresos pueden ser LIBRES DE IMPUESTO.
              </p>
              <p className="text-sm text-brand-600">
                <strong>Consideración clave:</strong> Cero impuesto a ingresos del exterior si calificas como no-residente fiscal.
              </p>
            </div>
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
              📌 Ventaja para Venezolanos: Bilingüismo y Experiencia Latinoamericana
            </h3>
            <p className="text-brand-700 text-sm">
              Los venezolanos son altamente valorados en Panamá por: 1) Español nativo en ambiente anglófono, 2) Experiencia en crisis económica (adaptabilidad), 3) Educación universitaria (muchos son profesionales), 4) Ética de trabajo fuerte. Los empleadores panameños entienden el perfil.
            </p>
          </div>
        </section>

        {/* Cost Comparison Chart */}
        <section className="my-12">
          <h3 className="font-heading text-2xl font-bold text-brand-950 mb-6">
            Comparativa: Salarios Promedio y Costo de Vida
          </h3>
          <div className="rounded-lg overflow-hidden border border-brand-100 bg-brand-50 h-[400px]">
            <CostBarChart />
          </div>
          <p className="text-sm text-brand-600 mt-4 text-center">
            Salarios promedio mensuales en USD para profesionales de entrada/mid-level. Costo de vida estimado para familia de 2 personas.
          </p>
        </section>

        {/* Comunidad Venezolana */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            La Comunidad Venezolana en Panamá
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            No llegarás a un país desconocido. Hay una comunidad venezolana establecida de 100,000+ personas.
          </p>

          <div className="bg-white border border-brand-100 rounded-lg p-8 mb-8">
            <h3 className="font-heading text-xl font-bold text-brand-950 mb-4">
              Dónde Viven los Venezolanos en Panamá
            </h3>
            <ul className="space-y-4 text-brand-700">
              <li className="flex gap-3">
                <span className="text-brand-TEAL font-bold">📍</span>
                <div>
                  <p><strong>San Miguelito</strong> — Barrio comercial al oeste de Panama City. Muchos residentes venezolanos. Vivienda más asequible.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-TEAL font-bold">📍</span>
                <div>
                  <p><strong>El Dorado</strong> — Zona en expansión. Desarrollo de viviendas nuevas. Muchos venezolanos comprando aquí por precios.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-TEAL font-bold">📍</span>
                <div>
                  <p><strong>Miraflores</strong> — Área central con renta asequible. Cerca de servicios y transporte público.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-TEAL font-bold">📍</span>
                <div>
                  <p><strong>Tocumen</strong> — Cerca del aeropuerto. Acceso rápido a viajes internacionales.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-TEAL font-bold">📍</span>
                <div>
                  <p><strong>Clayton y Casco Viejo</strong> — Zonas premium. Venezolanos con capital mayor se mudan aquí.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">🍽️ Gastronomía Venezolana</h3>
              <p className="text-brand-700 mb-3">
                Restaurantes, panaderías, tiendas de productos venezolanos abundan en San Miguelito y El Dorado.
              </p>
              <ul className="text-sm text-brand-700 space-y-2">
                <li>• Arepas (decenas de restaurantes)</li>
                <li>• Tequeños (todas las panaderías venezolanas)</li>
                <li>• Cachapas</li>
                <li>• Empanadas venezolanas</li>
                <li>• Arepa con queso de mano</li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">📱 Redes y Comunidades Online</h3>
              <p className="text-brand-700 mb-3">
                Grupos de Facebook y WhatsApp grandes conectan venezolanos en Panamá.
              </p>
              <ul className="text-sm text-brand-700 space-y-2">
                <li>• "Venezolanos en Panamá" — 50,000+ miembros</li>
                <li>• "Venezolanos en Panama City"</li>
                <li>• "Empleos para Venezolanos en Panamá"</li>
                <li>• Grupos de WhatsApp por profesión</li>
                <li>• Eventos sociales regulares</li>
              </ul>
            </div>
          </div>

          <div className="bg-brand-TEAL bg-opacity-10 border border-brand-TEAL border-opacity-30 rounded-lg p-6">
            <p className="text-brand-700 text-sm">
              <strong className="text-brand-950">Dato importante:</strong> La comunidad venezolana es proactiva. Hay múltiples asociaciones de venezolanos, eventos culturales, y networks profesionales. No llegarás solo. La integración tiende a ser rápida porque el español es idioma compartido y hay entendimiento mutuo de la experiencia migratoria.
            </p>
          </div>
        </section>

        {/* Costo de Vida Comparativo */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Costo de Vida: Panamá vs Otras Opciones
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            Comparar Venezuela con Panamá es imposible (economía venezolana en colapso). Comparar Panamá con Colombia (destino alternativo) es más útil.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-brand-200">
                  <th className="text-left py-3 px-4 text-brand-950 font-bold">Gasto Mensual</th>
                  <th className="text-center py-3 px-4 text-brand-950 font-bold">Bogotá, Colombia</th>
                  <th className="text-center py-3 px-4 text-brand-950 font-bold">Medellín, Colombia</th>
                  <th className="text-center py-3 px-4 text-brand-950 font-bold">Panama City, Panamá</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr className="bg-brand-50">
                  <td className="py-3 px-4 text-brand-950"><strong>Renta (1BR, centro)</strong></td>
                  <td className="text-center py-3 px-4 text-brand-700">$500-800</td>
                  <td className="text-center py-3 px-4 text-brand-700">$400-600</td>
                  <td className="text-center py-3 px-4 text-brand-700">$700-1,200</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-brand-950"><strong>Comida (mes)</strong></td>
                  <td className="text-center py-3 px-4 text-brand-700">$300-400</td>
                  <td className="text-center py-3 px-4 text-brand-700">$250-350</td>
                  <td className="text-center py-3 px-4 text-brand-700">$400-600</td>
                </tr>
                <tr className="bg-brand-50">
                  <td className="py-3 px-4 text-brand-950"><strong>Transporte</strong></td>
                  <td className="text-center py-3 px-4 text-brand-700">$40-60</td>
                  <td className="text-center py-3 px-4 text-brand-700">$30-50</td>
                  <td className="text-center py-3 px-4 text-brand-700">$50-80</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-brand-950"><strong>Servicios (agua, luz, internet)</strong></td>
                  <td className="text-center py-3 px-4 text-brand-700">$80-120</td>
                  <td className="text-center py-3 px-4 text-brand-700">$70-100</td>
                  <td className="text-center py-3 px-4 text-brand-700">$100-180</td>
                </tr>
                <tr className="bg-brand-50">
                  <td className="py-3 px-4 text-brand-950 font-bold">Total (mes)</td>
                  <td className="text-center py-3 px-4 text-brand-950 font-bold">$920-1,380</td>
                  <td className="text-center py-3 px-4 text-brand-950 font-bold">$750-1,100</td>
                  <td className="text-center py-3 px-4 text-brand-950 font-bold">$1,250-2,060</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-brand-100 rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
              💡 ¿Es Panamá más caro que Colombia?
            </h3>
            <p className="text-brand-700 mb-3">
              Sí, aproximadamente 30-40% más caro. <strong>PERO</strong> — los salarios en Panamá son también 30-50% más altos. El trade-off real es: pagas más, pero ganas más en USD estable.
            </p>
            <p className="text-brand-700 text-sm">
              Un profesional que gana $2,500/mes en Panamá puede ahorrar $500-800. La misma persona en Medellín ganando $1,800/mes ahorra $400-500. Net result: ganas más en Panamá aunque cuesta más vivir.
            </p>
          </div>
        </section>

        {/* Bienes Raíces para Venezolanos */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Bienes Raíces para Venezolanos
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            Muchos venezolanos con capital tienen la oportunidad de comprar propiedad en Panamá. Es inversión segura en USD.
          </p>

          <div className="bg-brand-50 border border-brand-100 rounded-lg p-8 mb-8">
            <h3 className="font-heading text-xl font-bold text-brand-950 mb-4">
              Rango de Precios por Zona
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start pb-3 border-b border-brand-200">
                <div>
                  <p className="font-bold text-brand-950">Entrada / San Miguelito</p>
                  <p className="text-sm text-brand-600">1BR, zona popular</p>
                </div>
                <p className="text-brand-TEAL font-bold text-lg">$80,000 - $120,000</p>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-brand-200">
                <div>
                  <p className="font-bold text-brand-950">Mid-Range / Miraflores, Tocumen</p>
                  <p className="text-sm text-brand-600">2BR, buena ubicación</p>
                </div>
                <p className="text-brand-TEAL font-bold text-lg">$150,000 - $250,000</p>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-brand-200">
                <div>
                  <p className="font-bold text-brand-950">Premium / Casco Viejo, Clayton</p>
                  <p className="text-sm text-brand-600">2-3BR, zona desarrollada</p>
                </div>
                <p className="text-brand-TEAL font-bold text-lg">$300,000 - $600,000+</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-brand-950">Lujo / Punta Pacifica, Costa del Este</p>
                  <p className="text-sm text-brand-600">Penthouses, vistas ciudad/mar</p>
                </div>
                <p className="text-brand-TEAL font-bold text-lg">$500,000 - $2,000,000+</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">💰 Financiamiento Disponible</h3>
              <p className="text-brand-700 mb-3">
                Si eres residente panameño, muchos bancos ofrecen hipotecas:
              </p>
              <ul className="text-sm text-brand-700 space-y-2">
                <li>• Banistmo: 70% valor propiedad, 15-30 años</li>
                <li>• Global Bank: términos similares</li>
                <li>• Tasa: 4.5-7% dependiendo perfil crediticio</li>
                <li>• Enganche típico: 20-30%</li>
              </ul>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">📈 Retorno de Inversión</h3>
              <p className="text-brand-700 mb-3">
                Rendimiento de alquiler promedio en Panamá:
              </p>
              <ul className="text-sm text-brand-700 space-y-2">
                <li>• Entrada/Popular: 8-10% bruto anual</li>
                <li>• Mid-range: 6-8% bruto anual</li>
                <li>• Premium: 4-6% bruto anual</li>
                <li>• Neto (después impuestos, mantenimiento): 4-7%</li>
              </ul>
            </div>
          </div>

          <div className="bg-brand-GOLD bg-opacity-10 border border-brand-GOLD border-opacity-30 rounded-lg p-6 mb-8">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
              🔑 Ventaja para Venezolanos: Protección de Valor
            </h3>
            <p className="text-brand-700 text-sm mb-3">
              Venezolanos entienden mejor que cualquier otra nacionalidad por qué tener dinero en USD es crucial. Propiedades en Panamá pagadas en USD = tranquilidad total. No importa lo que pase con la economía, tu capital está seguro.
            </p>
            <p className="text-brand-700 text-sm">
              Muchos venezolanos compran propiedad en Panamá no principalmente para rentar, sino como RESERVA DE VALOR. Es la forma más segura de mantener patrimonio.
            </p>
          </div>

          <div className="bg-white border border-brand-100 rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
              📋 Proceso de Compra para Venezolanos
            </h3>
            <ol className="space-y-3 text-sm text-brand-700">
              <li><strong>1.</strong> Busca propiedad (marketplace, agentes inmobiliarios)</li>
              <li><strong>2.</strong> Inspección y due diligence (ingeniería, escrituras)</li>
              <li><strong>3.</strong> Contrata abogado panameño (verifica títulos, impuestos)</li>
              <li><strong>4.</strong> Oferta y negociación</li>
              <li><strong>5.</strong> Depósito en garantía (típicamente 10% del precio)</li>
              <li><strong>6.</strong> Financiamiento (si aplica) — banco aprueba</li>
              <li><strong>7.</strong> Cierre ante notario — escritura a tu nombre</li>
              <li><strong>8.</strong> Inscripción en Registro Público</li>
            </ol>
            <p className="text-brand-600 text-xs mt-4">
              <strong>Tiempo total:</strong> 30-90 días si todo va sin complicaciones. <strong>Costo abogado:</strong> $1,500-2,500.
            </p>
          </div>
        </section>

        {/* Documentación Necesaria */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Documentación Necesaria para Venezolanos
          </h2>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
                ✅ Para Solicitud de Visa Cualquier Tipo
              </h3>
              <ul className="space-y-2 text-brand-700 text-sm">
                <li>• <strong>Pasaporte venezolano</strong> — Vigente por mínimo 6 meses</li>
                <li>• <strong>Partida de nacimiento</strong> — Certificado original o copia autenticada</li>
                <li>• <strong>Certificado de Antecedentes Penales</strong> — De Interpol o tribunal venezolano (si aplica)</li>
                <li>• <strong>Comprobantes de fondos</strong> — Extractos bancarios (2-3 meses últimos)</li>
                <li>• <strong>Formularios de inmigración</strong> — Solicitados en consulado</li>
                <li>• <strong>Fotos formato pasaporte</strong> — Típicamente 2-4 fotos</li>
                <li>• <strong>Comprobante de domicilio</strong> — Servicio de agua/luz/teléfono a tu nombre o contrato de alquiler</li>
              </ul>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
                ✅ Para Visa de Trabajo Específicamente
              </h3>
              <ul className="space-y-2 text-brand-700 text-sm">
                <li>• <strong>Contrato de trabajo</strong> — Ofrecido por empleador panameño</li>
                <li>• <strong>Curriculum/CV</strong> — Detallado con experiencia profesional</li>
                <li>• <strong>Título universitario</strong> — Original o copia autenticada (si se solicita)</li>
                <li>• <strong>Certificados profesionales</strong> — Tecnologías, idiomas, certificaciones (si aplica)</li>
                <li>• <strong>Carta de referencia laboral</strong> — De empleador anterior</li>
                <li>• <strong>Acta de nacimiento original</strong> — Para abogado panameño</li>
              </ul>
            </div>

            <div className="bg-white border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
                ✅ Para Compra de Propiedad Inmobiliaria
              </h3>
              <ul className="space-y-2 text-brand-700 text-sm">
                <li>• <strong>Pasaporte válido</strong> — Copia páginas principales</li>
                <li>• <strong>Extractos bancarios</strong> — Últimos 6 meses mostrando fondos disponibles</li>
                <li>• <strong>Carta de origen de fondos</strong> — Explicando fuente de dinero (si se solicita por bancos/notario)</li>
                <li>• <strong>Identificación fiscal panameña</strong> — Necesaria para registro notarial (RUC)</li>
                <li>• <strong>Dirección en Panamá</strong> — O dirección de abogado que represente</li>
                <li>• <strong>Estado civil</strong> — Certificado de matrimonio/divorcio si aplica</li>
              </ul>
            </div>
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-3">
              ⚠️ Nota Importante sobre Documentos Venezolanos
            </h3>
            <p className="text-brand-700 text-sm mb-3">
              Si tus documentos venezolanos (actas de nacimiento, títulos) fueron emitidos antes de 2015 o tienes dudas sobre autenticidad, consulta con un abogado panameño. Algunos consulados piden verificaciones adicionales.
            </p>
            <p className="text-brand-700 text-sm">
              Algunos venezolanos obtienen certificados internacionales (Apostilla de La Haya) en tercer país si sus documentos venezolanos no son reconocibles. Esto cuesta $200-400 adicionales pero simplifica trámites.
            </p>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Preguntas Frecuentes: Venezolanos en Panamá
          </h2>

          <div className="space-y-6">
            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Puedo llevar dinero de Venezuela a Panamá?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                Tecnicamente sí, pero es complicado. El bolívar no tiene valor en Panamá. Si tienes USD en Venezuela, saca transferencia por banco internacional. Si tienes bolívares físicos, puedes cambiar en agencias de cambio (terrible tasa). La mayoría de venezolanos trae poco dinero y comienza a trabajar en Panamá ganando USD.
              </p>
            </details>

            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Panamá me acepta incluso si mi pasaporte venezolano está vencido?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                No. Necesitas pasaporte vigente para entrar a Panamá. Si está vencido, debes renovarlo en el consulado panameño más cercano a tu ubicación actual (puede ser consulado en tercera nación). Costo: ~$50-150. Tiempo: 2-4 semanas.
              </p>
            </details>

            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Qué pasa si llego con visa de turismo y me quiero quedar?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                Puedes solicitar cambio de estatus desde dentro de Panamá. Busca empleo, obtén contrato, y solicita cambio a visa de trabajo. También puedes solicitar otra categoría (pensionado, inversionista, etc.). Los abogados de inmigración manejan esto regularmente. Costo: $1,000-2,000 en total con abogado.
              </p>
            </details>

            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Es difícil homologar mi título profesional en Panamá?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                Depende de la profesión. Para profesiones reguladas (medicina, leyes, ingeniería), sí — necesitas homologación en la Universidad de Panamá. Para muchas otras profesiones (negocios, diseño, marketing), empleadores aceptan tu experiencia sin necesidad de homologación formal. Consulta con universidades panameñas si tu profesión es regulada.
              </p>
            </details>

            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Panamá tiene impuestos sobre los ingresos que gano trabajando remotamente?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                No, si calificas como "no-residente fiscal". Si trabajas remoto ganando dinero del exterior siendo residente panameño, y no eres residente fiscal panameño (menos de 183 días en país), tus ingresos pueden estar libres de impuesto panameño. PERO consulta con contador panameño sobre tu situación específica — esto tiene reglas técnicas precisas.
              </p>
            </details>

            <details className="group bg-white border border-brand-100 rounded-lg p-6 cursor-pointer">
              <summary className="font-heading text-lg font-bold text-brand-950 group-open:text-brand-TEAL">
                ¿Cuál es el costo total realista para mudarme a Panamá?
              </summary>
              <p className="text-brand-700 text-sm mt-4">
                <strong>Gastos iniciales:</strong> Pasaporte/documentos ($100-200), visa de turismo ($50-100), vuelo ($250-500), primer mes vivienda ($700-1,500), depósito de garantía vivienda ($700-1,500), comida/servicios ($500-800), abogado para visa ($1,000-2,500). <strong>Total mínimo: $3,500-6,500 para empezar.</strong> Si compras propiedad, suma $150,000+. Muchos venezolanos llegan con $4,000-8,000 y empiezan a trabajar.
              </p>
            </details>
          </div>
        </section>

        {/* Conclusión */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Conclusión: Panamá es la Solución para Venezolanos
          </h2>

          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            100,000 venezolanos ya lo hicieron. Miles más vienen cada mes. ¿Por qué? Porque Panamá ofrece algo que Venezuela no: estabilidad, oportunidad, dólares, y futuro.
          </p>

          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            No es perfecto. Panamá tiene desafíos (tráfico, contaminación, costo de vida), pero es infinitamente mejor que la alternativa. Panamá te permite trabajar y ganar en USD. Panamá respeta la propiedad privada. Panamá tiene sistema judicial predecible. Panamá tiene comunidad que entiende tu experiencia.
          </p>

          <p className="text-lg text-brand-700 leading-relaxed mb-8">
            El primer paso es obtener visa de turismo y explorar. El segundo paso es encontrar trabajo o establecer residencia por otros medios. El tercero es comenzar a construir patrimonio en USD en un país donde eso es posible.
          </p>

          <div className="bg-brand-TEAL bg-opacity-10 border border-brand-TEAL border-opacity-30 rounded-lg p-8 mb-8">
            <p className="text-lg text-brand-950 font-bold mb-4">
              Listo para Dar el Paso?
            </p>
            <p className="text-brand-700 mb-6">
              El equipo de VIP Expats ayuda a venezolanos y otras nacionalidades a navegar el proceso completo de mudarse a Panamá. Desde selección de propiedades hasta asesoría legal, estamos aquí para facilitar tu transición.
            </p>
            <Link
              href={`/${lang}/contacto`}
              className="inline-block bg-brand-TEAL text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
            >
              Consulta Gratuita — Hablemos de tu Caso
            </Link>
          </div>

          <p className="text-sm text-brand-600 border-t border-brand-100 pt-6">
            <strong>Descargo:</strong> Esta guía es informativa únicamente. Leyes de inmigración panameña cambian. Siempre consulta con abogado de inmigración panameño especializado antes de tomar decisiones legales. VIP Expats puede referirte abogados confiables.
          </p>
        </section>
      </article>

      {/* CTA Footer */}
      <section className="bg-brand-50 border-t border-brand-100 mt-16 py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-4">
            Siguiente Paso: Conecta con un Especialista
          </h2>
          <p className="text-lg text-brand-700 mb-8 max-w-2xl mx-auto">
            Cada caso de inmigración es único. Habla directamente con nuestro equipo sobre tu situación específica.
          </p>
          <Link
            href={`/${lang}/contacto`}
            className="inline-block bg-brand-TEAL text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition"
          >
            Agendar Consulta Gratuita
          </Link>
        </div>
      </section>
    </main>
  );
}
