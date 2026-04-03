'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, MapPin, Calendar, FileText, Heart, Users, Plane, DollarSign, Home, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Magnetic from '@/components/ui/Magnetic';
import HeroTilt from '@/components/ui/HeroTilt';

const HowToMoveToPanamaPage = () => {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const content = {
    badge: isEn ? 'Complete Relocation Guide 2026' : 'Guía Completa de Reubicación 2026',
    title: isEn ? 'How to Move to Panama from the USA' : 'Cómo Mudarse a Panamá desde EE.UU.',
    titleAccent: isEn ? 'Step-by-Step' : 'Paso a Paso',
    subtitle: isEn
      ? 'Everything you need to know about relocating to Panama — from visa applications and banking to shipping belongings, healthcare setup, and your first 30 days. A complete roadmap for a smooth transition.'
      : 'Todo lo que necesita saber sobre mudarse a Panamá — desde solicitudes de visa y banca hasta envío de pertenencias, configuración de salud y sus primeros 30 días. Una hoja de ruta completa para una transición sin problemas.',

    introTitle: isEn ? 'Why Now is the Perfect Time to Relocate to Panama' : 'Por Qué Ahora es el Momento Perfecto para Mudarse a Panamá',
    intro: isEn
      ? 'Panama is experiencing unprecedented expat growth. The Pensionado Visa is more accessible than ever, the cost of living remains dramatically lower than the US, world-class healthcare is 30–70% cheaper, and the country offers 50 years of stability with a strong dollar-based economy. Whether you\'re retiring, seeking adventure, or building a new chapter, Panama offers the fastest path to establishing residency in Latin America. This guide covers every step — from initial planning 6 months before your move, through the visa process, banking setup, healthcare navigation, pet relocation, customs procedures, and your critical first 30 days.'
      : 'Panamá está experimentando un crecimiento sin precedentes de expats. La Visa de Pensionado es más accesible que nunca, el costo de vida sigue siendo dramáticamente menor que el de EE.UU., la atención médica de clase mundial es 30–70% más barata, y el país ofrece 50 años de estabilidad con una economía fuerte basada en dólares. Ya sea que se esté jubilando, buscando aventura o construyendo un nuevo capítulo, Panamá ofrece el camino más rápido para establecer residencia en América Latina. Esta guía cubre cada paso — desde la planificación inicial 6 meses antes de su mudanza, pasando por el proceso de visa, configuración bancaria, navegación de salud, reubicación de mascotas, procedimientos aduanales y sus primeros 30 días críticos.',

    visaTitle: isEn ? 'Visa Options: Choose Your Path to Panama Residency' : 'Opciones de Visa: Elija su Camino a la Residencia en Panamá',
    visaIntro: isEn
      ? 'Panama offers multiple visa pathways, each with different requirements and benefits. The three most popular options are:'
      : 'Panamá ofrece múltiples caminos de visa, cada uno con requisitos y beneficios diferentes. Las tres opciones más populares son:',
    visas: [
      {
        name: isEn ? 'Friendly Nations Visa' : 'Visa de Naciones Amigas',
        details: isEn
          ? 'If you hold a passport from a "friendly nation" (USA, Canada, EU, Australia, etc.), this is the simplest and fastest option. Requires a clean criminal record and proof of economic solvency ($2,000/month passive income from pension, rental income, or investment). Processing time: 3–4 weeks. No language requirement. Creates temporary residency initially, convertible to permanent residency after 3 years.'
          : 'Si tiene un pasaporte de una "nación amiga" (EE.UU., Canadá, UE, Australia, etc.), esta es la opción más simple y rápida. Requiere un registro penal limpio y prueba de solvencia económica ($2,000/mes de ingresos pasivos de pensión, ingresos de alquiler o inversión). Tiempo de procesamiento: 3–4 semanas. Sin requisito de idioma. Crea residencia temporal inicialmente, convertible a residencia permanente después de 3 años.',
        link: isEn ? 'Learn more about Friendly Nations Visa' : 'Más información sobre la Visa de Naciones Amigas',
      },
      {
        name: isEn ? 'Pensionado Visa' : 'Visa de Pensionado',
        details: isEn
          ? 'The retiree\'s golden ticket. Requires proof of a guaranteed pension of $1,000/month (government or private pension). Includes lifetime benefits: 25% off utilities, 30% off public transit, 20% off medical consultations, 50% off entertainment, and 15% off hospital bills. Can sponsor family members. Processing time: 4–6 months. Opens doors to the most generous retirement benefits in the Western Hemisphere.'
          : 'El pasaje de oro del jubilado. Requiere prueba de una pensión garantizada de $1,000/mes (pensión gubernamental o privada). Incluye beneficios de por vida: 25% de descuento en servicios, 30% en transporte público, 20% en consultas médicas, 50% en entretenimiento, y 15% en facturas hospitalarias. Puede patrocinar a miembros de la familia. Tiempo de procesamiento: 4–6 meses. Abre puertas a los beneficios de jubilación más generosos del Hemisferio Occidental.',
        link: isEn ? 'Full Pensionado Visa Guide' : 'Guía Completa de la Visa de Pensionado',
      },
      {
        name: isEn ? 'Qualified Investor Visa' : 'Visa de Inversionista Calificado',
        details: isEn
          ? 'For entrepreneurs and investors. Requires a $300,000 investment in a Panamanian business, real estate, or stock portfolio. Creates a path to permanent residency and can eventually lead to citizenship. Fastest path for high-net-worth individuals. Processing time: 2–3 months.'
          : 'Para empresarios e inversores. Requiere una inversión de $300,000 en un negocio panameño, bienes raíces o cartera de acciones. Crea un camino a la residencia permanente y puede eventualmente llevar a la ciudadanía. Camino más rápido para individuos de alto patrimonio neto. Tiempo de procesamiento: 2–3 meses.',
        link: isEn ? 'More on Qualified Investor Visa' : 'Más sobre la Visa de Inversionista Calificado',
      },
    ],

    timelineTitle: isEn ? '6-Month Relocation Timeline: Plan Like a Pro' : 'Cronograma de 6 Meses: Planifique Como un Profesional',
    timelinePhases: [
      {
        phase: isEn ? '6 Months Before Your Move' : '6 Meses Antes de su Mudanza',
        icon: Calendar,
        tasks: isEn
          ? [
              'Decide which visa pathway fits your profile (Friendly Nations, Pensionado, or Qualified Investor)',
              'Gather required documents: passport, birth certificate, marriage/divorce certificates, police clearance, proof of income/pension',
              'Consult with a Panama immigration attorney (cost: $1,000–$2,000) — this investment saves time and prevents costly mistakes',
              'Research neighborhoods and visit Panama if possible — stay for 2–4 weeks to experience daily life',
              'Open a savings account and begin accumulating funds for visa processing, initial housing deposit, and startup costs',
              'Research shipping companies for your belongings — get quotes for "move to Panama" shipments',
            ]
          : [
              'Decida qué camino de visa se adapta a su perfil (Naciones Amigas, Pensionado o Inversionista Calificado)',
              'Recopile documentos requeridos: pasaporte, certificado de nacimiento, certificados de matrimonio/divorcio, antecedentes penales, comprobante de ingresos/pensión',
              'Consulte con un abogado de inmigración de Panamá (costo: $1,000–$2,000) — esta inversión ahorra tiempo y evita errores costosos',
              'Investigue vecindarios y visite Panamá si es posible — quédese por 2–4 semanas para experimentar la vida diaria',
              'Abra una cuenta de ahorros y comience a acumular fondos para procesamiento de visa, depósito de vivienda inicial y costos de inicio',
              'Investigue empresas de envío para sus pertenencias — obtenga presupuestos para envíos "mudanza a Panamá"',
            ],
      },
      {
        phase: isEn ? '3 Months Before Your Move' : '3 Meses Antes de su Mudanza',
        icon: FileText,
        tasks: isEn
          ? [
              'Submit visa application with all supporting documents to Panamanian immigration authorities',
              'Book your moving company — request a detailed inventory and shipping timeline',
              'Research banks and begin the account-opening process (many allow online applications from abroad)',
              'Secure temporary housing: rent an Airbnb or short-term apartment for your first 2–4 weeks',
              'Hire a relocation consultant or connect with an expat Facebook group for your target area',
              'Arrange healthcare: research hospitals, insurance providers, and schedule your first doctor\'s appointment',
              'Notify your US employer of timeline changes, arrange final payment and benefits coordination',
            ]
          : [
              'Envíe solicitud de visa con todos los documentos de apoyo a las autoridades de inmigración de Panamá',
              'Reserve su empresa de mudanza — solicite un inventario detallado y cronograma de envío',
              'Investigue bancos y comience el proceso de apertura de cuenta (muchos permiten solicitudes en línea desde el extranjero)',
              'Asegure vivienda temporal: alquile un Airbnb o apartamento a corto plazo para sus primeras 2–4 semanas',
              'Contrate un consultor de reubicación o conéctese con un grupo de Facebook de expats en su área objetivo',
              'Organice salud: investigue hospitales, proveedores de seguros y programe su primera cita médica',
              'Notifique a su empleador estadounidense sobre cambios de cronograma, organice el pago final y coordinación de beneficios',
            ],
      },
      {
        phase: isEn ? '1 Month Before Your Move' : '1 Mes Antes de su Mudanza',
        icon: Briefcase,
        tasks: isEn
          ? [
              'Confirm visa approval status with immigration attorney — you should receive your visa document or notification',
              'Finalize shipping details: provide carrier with delivery address, contact phone, and confirm import duties',
              'Complete banking application and open account — request international wire transfer setup',
              'Book your flight: aim for a mid-month arrival to avoid both the start and end of monthly expenses',
              'Set up mail forwarding service or use a US-based virtual mailbox for ongoing document needs',
              'Create a "essentials" box to carry personally: medications, important documents, laptop, chargers',
              'Notify US utilities, subscriptions, and address of your move — arrange final bills and cancellations',
              'Arrange pet relocation if needed: health certificate, microchip, airline booking (contact veterinarian 3 months prior)',
            ]
          : [
              'Confirme el estado de aprobación de visa con el abogado de inmigración — debería recibir su documento de visa o notificación',
              'Finalice detalles de envío: proporcione a la empresa transportista la dirección de entrega, teléfono de contacto y confirme aranceles de importación',
              'Complete solicitud bancaria y abra cuenta — solicite configuración de transferencia electrónica internacional',
              'Reserve su vuelo: apunte a una llegada a mediados de mes para evitar tanto el inicio como el final de gastos mensuales',
              'Configure servicio de reenvío de correo o use un buzón virtual basado en EE.UU. para necesidades de documentos continuos',
              'Cree una caja de "esenciales" para llevar personalmente: medicamentos, documentos importantes, computadora portátil, cargadores',
              'Notifique a servicios públicos estadounidenses, suscripciones y dirección de su mudanza — organice facturas finales y cancelaciones',
              'Organice reubicación de mascotas si es necesario: certificado de salud, microchip, reserva de aerolínea (contacte al veterinario 3 meses antes)',
            ],
      },
      {
        phase: isEn ? 'Day of Your Move' : 'Día de su Mudanza',
        icon: Plane,
        tasks: isEn
          ? [
              'Arrive at Tocumen International Airport (PTY) with your printed visa approval and passport',
              'Go through immigration: present visa documentation, answer basic questions about your relocation',
              'Collect baggage and proceed to customs with your essential items',
              'Exchange $200–$500 USD for Panamanian Balboas (1:1 exchange) at airport for immediate expenses',
              'Use airport ATM or withdraw cash from Banco Nacional if ATM available for larger amounts',
              'Head to your pre-arranged temporary accommodation (Airbnb or hotel)',
              'Contact your bank to confirm arrival and activate your account',
              'Rest and hydrate — arrival at tropical altitude is tiring; take your first evening easy',
            ]
          : [
              'Llegue al Aeropuerto Internacional de Tocumen (PTY) con su aprobación de visa impresa y pasaporte',
              'Pase por inmigración: presente documentación de visa, responda preguntas básicas sobre su reubicación',
              'Recoja equipaje y proceda a aduanas con sus artículos esenciales',
              'Cambie $200–$500 USD por Balboas Panameños (cambio 1:1) en el aeropuerto para gastos inmediatos',
              'Use cajero automático del aeropuerto o retire efectivo de Banco Nacional si hay cajero automático disponible para cantidades mayores',
              'Diríjase a su alojamiento temporal preaacordado (Airbnb u hotel)',
              'Contacte a su banco para confirmar llegada y activar su cuenta',
              'Descanse e hidrate — la llegada a la altitud tropical es cansadora; tome su primera noche con calma',
            ],
      },
    ],

    bankingTitle: isEn ? 'Banking in Panama: Opening Your Account' : 'Banca en Panamá: Abra su Cuenta',
    bankingContent: isEn
      ? 'Panama uses the US Dollar as official currency, eliminating forex concerns. The major banks accepting expats are Banco Nacional, BAC Credomatic, and HSBC. To open an account you\'ll need: valid passport, proof of address (rental agreement or utility bill), source of income documentation, and an initial deposit ($2,000–$5,000 minimum, depending on the bank). Many banks now allow online account opening for US residents. Schedule appointments in advance — in-person visits can take 2–3 hours. Pro tip: Open your account before you move to establish credit and reduce day-one stress. Once open, set up online banking and wire transfer capabilities immediately.'
      : 'Panamá utiliza el Dólar Estadounidense como moneda oficial, eliminando preocupaciones de cambio de divisas. Los principales bancos que aceptan expats son Banco Nacional, BAC Credomatic y HSBC. Para abrir una cuenta necesitará: pasaporte válido, comprobante de dirección (contrato de alquiler o factura de servicios), documentación de fuente de ingresos, y depósito inicial ($2,000–$5,000 mínimo, dependiendo del banco). Muchos bancos ahora permiten apertura de cuenta en línea para residentes estadounidenses. Programe citas con anticipación — las visitas en persona pueden tomar 2–3 horas. Consejo profesional: Abra su cuenta antes de mudarse para establecer crédito y reducir estrés del primer día. Una vez abierta, configure banca en línea y capacidades de transferencia electrónica inmediatamente.',

    healthcareTitle: isEn ? 'Healthcare in Panama: Access & Costs' : 'Atención Médica en Panamá: Acceso y Costos',
    healthcareContent: isEn
      ? 'Panama has some of Latin America\'s best healthcare infrastructure. Panama City features Johns Hopkins-affiliated Punta Pacifica Hospital, Hospital Metropolitano, and Hospital del Niño, all offering US-standard care at 40–70% below US prices. A routine doctor\'s visit costs $40–$80; an annual physical is $100–$150. Medications are 30–50% cheaper than the US. Many expats purchase private insurance through local providers (AARP International offers coverage to retirees) or maintain US coverage. Key hospitals by region: Panama City (Punta Pacifica), Boquete (Boquete Community Hospital + metro referrals), Coronado (Regional clinics + metro access). Register with a primary care physician within your first month and keep copies of medical records from the US for continuity of care.'
      : 'Panamá tiene una de las mejores infraestructuras de atención médica de América Latina. La Ciudad de Panamá cuenta con el Hospital Punta Pacifica afiliado a Johns Hopkins, Hospital Metropolitano y Hospital del Niño, todos ofreciendo atención estándar estadounidense a 40–70% por debajo de precios estadounidenses. Una visita rutinaria al médico cuesta $40–$80; un examen físico anual es $100–$150. Los medicamentos son 30–50% más baratos que en EE.UU. Muchos expats compran seguros privados a través de proveedores locales (AARP International ofrece cobertura a jubilados) o mantienen cobertura estadounidense. Hospitales clave por región: Ciudad de Panamá (Punta Pacifica), Boquete (Hospital Comunitario Boquete + referencias al metro), Coronado (Clínicas regionales + acceso al metro). Regístrese con un médico de atención primaria dentro de su primer mes y mantenga copias de registros médicos de EE.UU. para continuidad de cuidado.',

    schoolsTitle: isEn ? 'Schools for Expat Families' : 'Escuelas para Familias Expat',
    schoolsContent: isEn
      ? 'Panama offers excellent bilingual and international schools, especially in Panama City. Top options include Colegio Mozart (bilingual, K–12), International School of Panama (IB curriculum), Sunny Hills School (English-language, affordable), and Balboa Academy. Tuition ranges from $8,000–$25,000 per year depending on school and grade level. Many expat families choose Panama City for education access, but quality options exist in larger towns like Boquete. School starts in August and runs through June. Public schools are an affordable alternative ($500–$1,500/year) but typically Spanish-language only. Budget for uniforms, transportation, and materials — total annual cost typically $1,000–$3,000 above tuition.'
      : 'Panamá ofrece excelentes escuelas bilingües e internacionales, especialmente en la Ciudad de Panamá. Las mejores opciones incluyen Colegio Mozart (bilingüe, K–12), Escuela Internacional de Panamá (currículo IB), Sunny Hills School (idioma inglés, asequible) y Balboa Academy. La matrícula varía de $8,000–$25,000 por año dependiendo de la escuela y nivel de grado. Muchas familias expat eligen la Ciudad de Panamá por acceso educativo, pero existen opciones de calidad en ciudades más grandes como Boquete. La escuela comienza en agosto y se extiende hasta junio. Las escuelas públicas son una alternativa asequible ($500–$1,500/año) pero típicamente solo en idioma español. Presupueste para uniformes, transporte y materiales — el costo anual total típicamente $1,000–$3,000 por encima de la matrícula.',

    petsTitle: isEn ? 'Relocating Your Pets to Panama' : 'Reubique Sus Mascotas a Panamá',
    petsContent: isEn
      ? 'Panama allows pet relocation but has strict entry requirements. You\'ll need: an updated USDA health certificate (issued within 10 days of travel), proof of rabies vaccination (valid within 12 months), microchip documentation, and import permit from Aduanas (Customs). Airlines typically charge $200–$500 per pet for international transport. A pet-specific travel service (PetSmart Charities, PetRelocation) costs $2,000–$4,000 but handles documentation, vaccination updates, and airport coordination. Processing time: 6–8 weeks from consultation to arrival. Important: Never ship pets during hurricane season (May–Nov) or extremely hot months (Aug–Sep). Your veterinarian must complete USDA paperwork — start this process 3 months before your planned move.'
      : 'Panamá permite la reubicación de mascotas pero tiene requisitos de entrada estrictos. Necesitará: certificado de salud USDA actualizado (emitido dentro de 10 días de viaje), prueba de vacunación contra la rabia (válida dentro de 12 meses), documentación de microchip y permiso de importación de Aduanas. Las aerolíneas típicamente cobran $200–$500 por mascota para transporte internacional. Un servicio de viaje específico para mascotas (PetSmart Charities, PetRelocation) cuesta $2,000–$4,000 pero maneja documentación, actualizaciones de vacunación y coordinación del aeropuerto. Tiempo de procesamiento: 6–8 semanas desde consulta hasta llegada. Importante: Nunca envíe mascotas durante la temporada de huracanes (mayo–nov) o meses extremadamente calurosos (ago–sep). Su veterinario debe completar la documentación USDA — comience este proceso 3 meses antes de su mudanza planeada.',

    customsTitle: isEn ? 'Customs & Duties: Importing Your Belongings' : 'Aduanas y Aranceles: Importación de Pertenencias',
    customsContent: isEn
      ? 'As a new resident, you\'re allowed to import personal household items duty-free (within limits). Key rules: provide a detailed inventory to customs, mark "Used Personal Effects — Relocation" on shipment, and avoid declaring high-value items unless necessary (customs can assess duties on electronics, appliances, etc.). Furniture and clothing are typically duty-free. Items like cars, motorcycles, or large appliances may incur 15–50% import duties. A customs broker ($300–$600 fee) accelerates the process and ensures compliance. Shipments typically clear within 5–10 business days if documents are complete. Tip: Ship in one consolidated container rather than multiple packages — it\'s more cost-effective and reduces processing delays. Consider selling high-value items in the US and buying replacements in Panama if duty costs exceed 40% of item value.'
      : 'Como residente nuevo, puede importar artículos domésticos personales libres de aranceles (dentro de límites). Reglas clave: proporcione un inventario detallado a aduanas, marque "Efectos Personales Usados — Reubicación" en el envío, y evite declarar artículos de alto valor a menos que sea necesario (aduanas puede evaluar aranceles en electrónica, electrodomésticos, etc.). Muebles y ropa típicamente están libres de aranceles. Artículos como autos, motocicletas o grandes electrodomésticos pueden incurrir en 15–50% de aranceles de importación. Un agente aduanal ($300–$600 de honorarios) acelera el proceso y asegura cumplimiento. Los envíos típicamente se despejan dentro de 5–10 días hábiles si los documentos están completos. Consejo: Envíe en un contenedor consolidado en lugar de múltiples paquetes — es más rentable y reduce retrasos de procesamiento. Considere vender artículos de alto valor en EE.UU. y comprar reemplazos en Panamá si los costos de arancel exceden el 40% del valor del artículo.',

    checklistTitle: isEn ? 'Your First 30 Days: Critical Checklist' : 'Sus Primeros 30 Días: Lista de Verificación Crítica',
    checklist: isEn
      ? [
          { task: 'Day 1–3: Settle into temporary housing, unpack essentials, rest and hydrate', category: 'Housing' },
          { task: 'Day 3–5: Visit Banco Nacional or BAC to complete account setup; activate debit card and online banking', category: 'Banking' },
          { task: 'Day 5–7: Register with your primary care physician; locate nearest pharmacy; obtain travel/emergency insurance card', category: 'Healthcare' },
          { task: 'Day 7–10: Visit your local Aduanas office to clear any remaining customs holds on shipped belongings; collect items if delivered', category: 'Customs' },
          { task: 'Day 10–15: Scout neighborhoods for permanent housing; connect with local expat groups on Facebook; attend community meetups', category: 'Housing' },
          { task: 'Day 15–20: If you have pets, complete veterinary check-up and register with local animal care provider', category: 'Pets' },
          { task: 'Day 20–25: If you have children, enroll in school if not already done; purchase uniforms and materials', category: 'Family' },
          { task: 'Day 25–30: Set up utilities (water, electric, internet) at permanent address; register for annual residency renewal; celebrate your arrival!', category: 'Setup' },
        ]
      : [
          { task: 'Días 1–3: Acomodarse en vivienda temporal, desempacar esenciales, descansar e hidratarse', category: 'Housing' },
          { task: 'Días 3–5: Visite Banco Nacional o BAC para completar configuración de cuenta; active tarjeta de débito y banca en línea', category: 'Banking' },
          { task: 'Días 5–7: Regístrese con su médico de atención primaria; ubique farmacia más cercana; obtenga tarjeta de seguro de viaje/emergencia', category: 'Healthcare' },
          { task: 'Días 7–10: Visite su oficina Aduanas local para despejar cualquier retención aduanal restante en pertenencias enviadas; recoja artículos si se entregan', category: 'Customs' },
          { task: 'Días 10–15: Explore vecindarios para vivienda permanente; conéctese con grupos de expats locales en Facebook; asista a encuentros comunitarios', category: 'Housing' },
          { task: 'Días 15–20: Si tiene mascotas, complete chequeo veterinario y regístrese con proveedor de cuidado animal local', category: 'Pets' },
          { task: 'Días 20–25: Si tiene hijos, inscriba en escuela si no lo ha hecho ya; compre uniformes y materiales', category: 'Family' },
          { task: 'Días 25–30: Configure servicios (agua, electricidad, internet) en dirección permanente; regístrese para renovación anual de residencia; ¡celebre su llegada!', category: 'Setup' },
        ],

    costTitle: isEn ? 'Total Relocation Cost Estimate' : 'Estimación de Costo Total de Reubicación',
    costBreakdown: isEn
      ? [
          { item: 'Immigration attorney consultation & visa processing', cost: '$1,500–$3,000' },
          { item: 'International shipping (household goods, 2–3 containers)', cost: '$4,000–$10,000' },
          { item: 'Flight (roundtrip or one-way from US)', cost: '$400–$800' },
          { item: 'Temporary housing (4 weeks, mid-range Airbnb)', cost: '$1,500–$3,000' },
          { item: 'Pet relocation (if applicable)', cost: '$2,000–$4,000' },
          { item: 'Initial banking & documentation fees', cost: '$200–$500' },
          { item: 'Customs broker & import duty estimates', cost: '$1,000–$3,000' },
          { item: 'First month living expenses (rent, food, utilities)', cost: '$1,500–$3,000' },
          { item: 'Furnishing rental (basics: bed, couch, kitchen)', cost: '$2,000–$5,000' },
          { item: 'Healthcare setup & annual insurance', cost: '$500–$2,000' },
        ]
      : [
          { item: 'Consulta de abogado de inmigración y procesamiento de visa', cost: '$1,500–$3,000' },
          { item: 'Envío internacional (bienes domésticos, 2–3 contenedores)', cost: '$4,000–$10,000' },
          { item: 'Vuelo (viaje redondo o solo ida desde EE.UU.)', cost: '$400–$800' },
          { item: 'Vivienda temporal (4 semanas, Airbnb rango medio)', cost: '$1,500–$3,000' },
          { item: 'Reubicación de mascota (si aplica)', cost: '$2,000–$4,000' },
          { item: 'Honorarios iniciales de banca y documentación', cost: '$200–$500' },
          { item: 'Agente aduanal y estimaciones de arancel de importación', cost: '$1,000–$3,000' },
          { item: 'Gastos de vida del primer mes (alquiler, comida, servicios)', cost: '$1,500–$3,000' },
          { item: 'Equipamiento de alquiler (esenciales: cama, sofá, cocina)', cost: '$2,000–$5,000' },
          { item: 'Configuración de salud y seguro anual', cost: '$500–$2,000' },
        ],
    costNote: isEn
      ? 'Total estimated cost: $16,200–$40,300 (excluding cost of permanent housing purchase). After your first month, monthly living expenses typically range from $1,500–$4,000 depending on location and lifestyle.'
      : 'Costo total estimado: $16,200–$40,300 (excluyendo costo de compra de vivienda permanente). Después de su primer mes, los gastos mensuales de vida típicamente oscilan de $1,500–$4,000 dependiendo de ubicación y estilo de vida.',

    breadcrumb: {
      home: isEn ? 'Home' : 'Inicio',
      guides: isEn ? 'Guides' : 'Guías',
      page: isEn ? 'How to Move to Panama from the USA' : 'Cómo Mudarse a Panamá desde EE.UU.',
    },

    ctaTitle: isEn ? 'Ready to Make Your Move? We\'ll Guide You Every Step' : '¿Listo para Hacer Su Mudanza? Lo Guiaremos en Cada Paso',
    ctaDesc: isEn
      ? 'Our relocation specialists have moved hundreds of people to Panama. We handle visa planning, housing coordination, banking setup, and first-month navigation. Get personalized guidance tailored to your situation.'
      : 'Nuestros especialistas en reubicación han trasladado a cientos de personas a Panamá. Manejamos planificación de visa, coordinación de vivienda, configuración bancaria y navegación del primer mes. Obtenga orientación personalizada adaptada a su situación.',
    ctaWhatsApp: isEn ? 'Start Your Relocation Planning' : 'Inicie su Planificación de Reubicación',
    ctaLink: isEn ? 'Schedule Consultation' : 'Programar Consulta',
  };

  return (
    <div className="bg-brand-950 min-h-screen pt-24 pb-40 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] bg-brand-GOLD/5 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-16 pt-4">
          <Link href={`/${lang}`} className="hover:text-brand-GOLD transition-colors">{content.breadcrumb.home}</Link>
          <span className="text-slate-700">/</span>
          <Link href={`/${lang}/guides`} className="hover:text-brand-GOLD transition-colors">{content.breadcrumb.guides}</Link>
          <span className="text-slate-700">/</span>
          <span className="text-brand-GOLD">{content.breadcrumb.page}</span>
        </nav>

        {/* HERO */}
        <section className="py-16 text-center">
          <HeroTilt intensity={3} className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
                {content.badge}
              </span>
              <h1 className="text-5xl md:text-9xl font-heading font-black text-white mb-10 tracking-tighter uppercase italic leading-[0.85]">
                {content.title} <br />
                <span className="text-brand-GOLD">{content.titleAccent}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed mb-16 italic">
                {content.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <Magnetic strength={0.3}>
                  <a
                    href="https://wa.me/50767610315"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-3d btn-3d-gold px-12 py-6 rounded-xl font-black uppercase tracking-widest text-[11px]"
                  >
                    {content.ctaWhatsApp}
                  </a>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <Link
                    href={`/${lang}/contacto`}
                    className="btn-3d btn-3d-navy px-12 py-6 rounded-xl font-black uppercase tracking-widest text-[11px] bg-white/5 backdrop-blur-3xl border border-white/10"
                  >
                    {content.ctaLink}
                  </Link>
                </Magnetic>
              </div>
            </motion.div>
          </HeroTilt>
        </section>

        {/* INTRO */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
              {isEn ? 'The Strategic Move' : 'El Movimiento Estratégico'}
            </span>
            <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-12 tracking-tighter uppercase italic leading-[0.85]">
              {content.introTitle}
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
              {content.intro}
            </p>
          </div>
        </section>

        {/* VISA OPTIONS */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-20 reveal-on-scroll">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
              {isEn ? 'Residency Options' : 'Opciones de Residencia'}
            </span>
            <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.85]">
              {content.visaTitle}
            </h2>
            <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto italic">
              {content.visaIntro}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.visas.map((visa, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-[3rem] border border-white/5 hover:border-brand-GOLD/30 transition-all p-10 flex flex-col"
              >
                <h3 className="text-2xl md:text-3xl font-heading font-black text-white mb-6 tracking-tighter uppercase italic">
                  {visa.name}
                </h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-8 flex-grow italic">
                  {visa.details}
                </p>
                <Link
                  href={`/${lang}/guides/${i === 0 ? 'friendly-nations-visa-panama' : i === 1 ? 'pensionado-visa-panama' : 'cost-of-living-panama-2026'}`}
                  className="inline-flex items-center gap-2 text-brand-GOLD font-black text-[11px] uppercase tracking-[0.3em] hover:gap-4 transition-all italic"
                >
                  {visa.link}
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-20 reveal-on-scroll">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
              {isEn ? 'Planning Framework' : 'Marco de Planificación'}
            </span>
            <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.85]">
              {content.timelineTitle}
            </h2>
          </div>

          <div className="space-y-12">
            {content.timelinePhases.map((phase, i) => {
              const PhaseIcon = phase.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-[3rem] border border-white/5 hover:border-brand-GOLD/30 transition-all overflow-hidden"
                >
                  <div className="p-10 md:p-14">
                    <div className="flex items-center gap-6 mb-10">
                      <div className="w-16 h-16 rounded-2xl bg-brand-GOLD/10 border border-brand-GOLD/20 flex items-center justify-center flex-shrink-0">
                        <PhaseIcon className="text-brand-GOLD" size={32} />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-heading font-black text-white tracking-tighter uppercase italic">
                        {phase.phase}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {phase.tasks.map((task, j) => (
                        <div key={j} className="flex items-start gap-4 pl-4 border-l-2 border-brand-GOLD/30">
                          <CheckCircle size={20} className="text-brand-GOLD mt-1 flex-shrink-0" />
                          <p className="text-slate-300 font-medium italic">{task}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* BANKING */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal-on-scroll">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
                {isEn ? 'Financial Setup' : 'Configuración Financiera'}
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.85]">
                {content.bankingTitle}
              </h2>
            </div>
            <div className="glass-card rounded-[3rem] border border-white/5 p-10 md:p-14">
              <p className="text-lg text-slate-400 font-medium leading-relaxed italic">
                {content.bankingContent}
              </p>
            </div>
          </div>
        </section>

        {/* HEALTHCARE */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal-on-scroll">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
                {isEn ? 'Wellness' : 'Bienestar'}
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.85]">
                {content.healthcareTitle}
              </h2>
            </div>
            <div className="glass-card rounded-[3rem] border border-white/5 p-10 md:p-14">
              <p className="text-lg text-slate-400 font-medium leading-relaxed italic">
                {content.healthcareContent}
              </p>
            </div>
          </div>
        </section>

        {/* SCHOOLS */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal-on-scroll">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
                {isEn ? 'Family Life' : 'Vida Familiar'}
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.85]">
                {content.schoolsTitle}
              </h2>
            </div>
            <div className="glass-card rounded-[3rem] border border-white/5 p-10 md:p-14">
              <p className="text-lg text-slate-400 font-medium leading-relaxed italic">
                {content.schoolsContent}
              </p>
            </div>
          </div>
        </section>

        {/* PETS */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal-on-scroll">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
                {isEn ? 'Furry Family' : 'Familia Peluda'}
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.85]">
                {content.petsTitle}
              </h2>
            </div>
            <div className="glass-card rounded-[3rem] border border-white/5 p-10 md:p-14">
              <p className="text-lg text-slate-400 font-medium leading-relaxed italic">
                {content.petsContent}
              </p>
            </div>
          </div>
        </section>

        {/* CUSTOMS */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal-on-scroll">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
                {isEn ? 'Logistics' : 'Logística'}
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.85]">
                {content.customsTitle}
              </h2>
            </div>
            <div className="glass-card rounded-[3rem] border border-white/5 p-10 md:p-14">
              <p className="text-lg text-slate-400 font-medium leading-relaxed italic">
                {content.customsContent}
              </p>
            </div>
          </div>
        </section>

        {/* FIRST 30 DAYS CHECKLIST */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal-on-scroll">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
                {isEn ? 'Action Items' : 'Elementos de Acción'}
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.85]">
                {content.checklistTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {content.checklist.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 glass-card p-6 rounded-2xl border border-white/5 hover:border-brand-GOLD/30 transition-all group"
                >
                  <p className="text-slate-300 font-medium italic flex-grow group-hover:text-white transition-colors">{item.task}</p>
                  <span className="text-brand-GOLD font-black text-[10px] uppercase tracking-[0.3em] whitespace-nowrap">{item.category}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COST BREAKDOWN */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal-on-scroll">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-8 block italic">
                {isEn ? 'Budget Planning' : 'Planificación Presupuestaria'}
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.85]">
                {content.costTitle}
              </h2>
            </div>

            <div className="glass-card rounded-[3rem] border border-white/5 overflow-hidden">
              <div className="p-10 md:p-14">
                <div className="space-y-4 mb-10">
                  {content.costBreakdown.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className="flex items-center justify-between py-4 border-b border-white/5 last:border-b-0 group"
                    >
                      <p className="text-slate-300 font-medium italic group-hover:text-white transition-colors">{item.item}</p>
                      <span className="text-brand-GOLD font-black text-sm italic whitespace-nowrap ml-4">{item.cost}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="pt-6 border-t border-brand-GOLD/20">
                  <p className="text-slate-400 font-medium italic">{content.costNote}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-32 bg-brand-GOLD text-brand-950 rounded-[6rem] text-center px-10 reveal-on-scroll shadow-[0_0_100px_rgba(201,168,76,0.15)]">
          <Plane className="mx-auto mb-12 animate-pulse" size={72} />
          <h2 className="text-4xl md:text-8xl font-heading font-black mb-10 tracking-tighter uppercase italic leading-[0.85]">
            {content.ctaTitle}
          </h2>
          <p className="text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed italic opacity-80">
            {content.ctaDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Magnetic strength={0.4}>
              <a
                href="https://wa.me/50767610315"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d btn-3d-navy px-14 py-7 rounded-full font-black uppercase tracking-[0.3em] text-xs shadow-2xl"
              >
                {content.ctaWhatsApp}
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <Link
                href={`/${lang}/contacto`}
                className="btn-3d btn-3d-gold bg-brand-950 text-white px-14 py-7 rounded-full font-black uppercase tracking-[0.3em] text-xs"
              >
                {content.ctaLink} <ArrowRight className="inline ml-2" size={14} />
              </Link>
            </Magnetic>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HowToMoveToPanamaPage;
