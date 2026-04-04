'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, CheckCircle2, MapPin, ArrowRight, ShieldCheck, Sparkles, X } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';
import { useCMS } from '@/context/CMSContext';
import { useLanguage } from '@/context/LanguageContext';

const QUIZ_UI: Record<string, {
    exitQuiz: string;
    discoveryEvolution: string;
    stepOf: (current: number, total: number) => string;
    continue_: string;
    previous: string;
    revealResults: string;
    privacySecure: string;
    advisorVerified: string;
    matchReady: string;
    matchSubtitle: string;
    featuredRec: string;
    learnMore: string;
    viewDetails: string;
    guidedExperience: string;
    guidedSubtitle: string;
    scheduleCall: string;
    questions: {
        q1: string; q1opt: { label: string; value: string }[];
        q2: string; q2opt: { label: string; value: string }[];
        q3: string; q3opt: { label: string; value: string }[];
        q4: string; q4opt: { label: string; value: string }[];
        q5: string; q5opt: { label: string; value: string }[];
        q6: string; q6opt: { label: string; value: string }[];
        q7: string; q7opt: { label: string; value: string }[];
        q8: string; q8opt: { label: string; value: string }[];
        q9: string; q9opt: string[];
        q10: string; q10opt: { label: string; value: string }[]; q10placeholder: string;
        q11: string; q11opt: { label: string; value: string }[];
        q12: string; q12firstName: string; q12lastName: string;
        q13: string; q13label: string; q13consent: string; q13privacy: string;
    };
}> = {
    en: {
        exitQuiz: 'Exit Quiz',
        discoveryEvolution: 'Discovery Evolution',
        stepOf: (c, t) => `Step ${c} of ${t}`,
        continue_: 'CONTINUE',
        previous: 'Previous',
        revealResults: 'Reveal Results',
        privacySecure: '100% Privacy Secure',
        advisorVerified: 'Advisor Verified',
        matchReady: 'Your Panama Match is Ready!',
        matchSubtitle: "Based on your lifestyle and investment goals, we've identified these top Panama locations.",
        featuredRec: 'Featured Recommendation',
        learnMore: 'Learn More',
        viewDetails: 'View Details',
        guidedExperience: 'Want a guided experience?',
        guidedSubtitle: 'Our advisors are ready to walk you through these neighborhoods in person or via video call.',
        scheduleCall: 'Schedule Discovery Call',
        questions: {
            q1: 'What kind of environment best describes your dream location?',
            q1opt: [
                { label: 'Choose Environment...', value: '' },
                { label: 'Mountains (Cooler, lush green)', value: 'Mountains' },
                { label: 'City (Modern skyscrapers, urban energy)', value: 'City' },
                { label: 'Beach (Pacific or Caribbean shores)', value: 'Beach' },
            ],
            q2: 'What kind of household are you in?',
            q2opt: [
                { label: 'Choose Household...', value: '' },
                { label: 'Family (Kids, schools priority)', value: 'Family' },
                { label: 'Retirement (Peace, medical access)', value: 'Retirement' },
                { label: 'Young Professional (Coworking, nightlife)', value: 'Professional' },
                { label: 'Solo or Empty Nester', value: 'Solo' },
            ],
            q3: 'What style of living are you looking for?',
            q3opt: [
                { label: 'Choose Style...', value: '' },
                { label: 'Laid-back (Relaxed, unhurried)', value: 'Laid-back' },
                { label: 'Trendy (Artistic, modern, social)', value: 'Trendy' },
                { label: 'Luxury (Gated, premium amenities)', value: 'Luxury' },
            ],
            q4: 'Which of the following is most important for your community to have?',
            q4opt: [
                { label: 'Choose Priority...', value: '' },
                { label: 'Walkability (Everything close)', value: 'Walkability' },
                { label: 'Ocean View (Waking up to the sea)', value: 'Ocean View' },
                { label: 'Established Expat Community', value: 'Expats' },
                { label: 'Local/Authentic Vibe', value: 'Local' },
                { label: 'High-end Facilities (Gym, Pool, Spa)', value: 'Facilities' },
            ],
            q5: 'How socially active do you want your community to be?',
            q5opt: [
                { label: 'Choose Social level...', value: '' },
                { label: 'A tight-knit, very social community', value: 'Tight-knit' },
                { label: 'A quiet, private neighborhood', value: 'Quiet' },
                { label: 'A mix of both', value: 'Mix' },
            ],
            q6: 'Do you prefer a community with an established expat presence?',
            q6opt: [
                { label: 'Choose preference...', value: '' },
                { label: "Yes, I'd love to connect with other expats.", value: 'Yes' },
                { label: 'No, I prefer to blend with the local culture.', value: 'No' },
                { label: "I'm open to either.", value: 'Open' },
            ],
            q7: 'What is the most important for your neighborhood to have?',
            q7opt: [
                { label: 'Choose Hobby/Feature...', value: '' },
                { label: 'Golfing', value: 'Golfing' },
                { label: 'Direct Beachfront', value: 'Beachfront' },
                { label: 'Proximity to Medical Care', value: 'Medical' },
                { label: 'Fishing & Boating', value: 'Fishing' },
                { label: 'Hiking & Nature Trails', value: 'Hiking' },
                { label: 'Cool Highlands Weather', value: 'Weather' },
            ],
            q8: 'What is your budget for your ideal property?',
            q8opt: [
                { label: 'Choose Budget...', value: '' },
                { label: 'Under $200,000', value: 'Under $200k' },
                { label: '$200,000 – $500,000', value: '$200k-$500k' },
                { label: '$500,000 +', value: '$500k+' },
            ],
            q9: 'How close do you want to be to the following?',
            q9opt: ['International Schools', 'Major Airports', 'Shopping and Dining', 'Hospitals or Clinics'],
            q10: "What's your biggest concern about moving to a new area?",
            q10opt: [
                { label: 'Choose Concern...', value: '' },
                { label: 'Adjusting to the culture', value: 'Culture' },
                { label: 'Cost of living', value: 'Cost' },
                { label: 'Safety', value: 'Safety' },
                { label: 'Finding the right neighborhood', value: 'Neighborhood' },
                { label: 'Other (Specify below)', value: 'Other' },
            ],
            q10placeholder: 'If none of the above, please specify...',
            q11: 'How soon are you planning to make a move?',
            q11opt: [
                { label: 'Choose Timeline...', value: '' },
                { label: 'Within 3 months', value: 'Within 3 months' },
                { label: '3 – 6 months', value: '3-6 months' },
                { label: '6 – 12 months', value: '6-12 months' },
                { label: 'Just exploring for now', value: 'Exploring' },
            ],
            q12: 'Awesome! Almost done. To get your results, please share your name',
            q12firstName: 'First Name',
            q12lastName: 'Last Name',
            q13: 'And finally, your email address.',
            q13label: 'Email Address',
            q13consent: 'I agree to receive other communications from Panama Real Estate Sale. You may unsubscribe at any time.',
            q13privacy: 'By clicking submit, you consent to allow Panama Real Estate Sale to store and process your personal information.',
        },
    },
    es: {
        exitQuiz: 'Salir del Quiz',
        discoveryEvolution: 'Evolución de Descubrimiento',
        stepOf: (c, t) => `Paso ${c} de ${t}`,
        continue_: 'CONTINUAR',
        previous: 'Anterior',
        revealResults: 'Ver Resultados',
        privacySecure: '100% Privacidad Segura',
        advisorVerified: 'Verificado por Asesor',
        matchReady: '¡Tu Coincidencia en Panamá está Lista!',
        matchSubtitle: 'Basándonos en tu estilo de vida y objetivos de inversión, hemos identificado estas mejores ubicaciones en Panamá.',
        featuredRec: 'Recomendación Destacada',
        learnMore: 'Más Información',
        viewDetails: 'Ver Detalles',
        guidedExperience: '¿Quieres una experiencia guiada?',
        guidedSubtitle: 'Nuestros asesores están listos para guiarte por estos vecindarios en persona o por videollamada.',
        scheduleCall: 'Programar Llamada de Descubrimiento',
        questions: {
            q1: '¿Qué tipo de ambiente describe mejor tu ubicación ideal?',
            q1opt: [
                { label: 'Elige el ambiente...', value: '' },
                { label: 'Montaña (Fresco, verde exuberante)', value: 'Mountains' },
                { label: 'Ciudad (Rascacielos modernos, energía urbana)', value: 'City' },
                { label: 'Playa (Costa Pacífica o Caribeña)', value: 'Beach' },
            ],
            q2: '¿Qué tipo de hogar tienes?',
            q2opt: [
                { label: 'Elige el tipo de hogar...', value: '' },
                { label: 'Familia (Niños, prioridad en escuelas)', value: 'Family' },
                { label: 'Jubilación (Paz, acceso médico)', value: 'Retirement' },
                { label: 'Profesional joven (Coworking, vida nocturna)', value: 'Professional' },
                { label: 'Solo o nido vacío', value: 'Solo' },
            ],
            q3: '¿Qué estilo de vida buscas?',
            q3opt: [
                { label: 'Elige el estilo...', value: '' },
                { label: 'Tranquilo (Relajado, sin prisas)', value: 'Laid-back' },
                { label: 'Moderno (Artístico, social)', value: 'Trendy' },
                { label: 'Lujo (Residencial cerrado, amenidades premium)', value: 'Luxury' },
            ],
            q4: '¿Cuál de los siguientes es más importante para tu comunidad?',
            q4opt: [
                { label: 'Elige la prioridad...', value: '' },
                { label: 'Caminabilidad (Todo cerca)', value: 'Walkability' },
                { label: 'Vista al mar (Despertar junto al océano)', value: 'Ocean View' },
                { label: 'Comunidad expatriada establecida', value: 'Expats' },
                { label: 'Ambiente local/auténtico', value: 'Local' },
                { label: 'Instalaciones de lujo (Gimnasio, piscina, spa)', value: 'Facilities' },
            ],
            q5: '¿Qué tan activa socialmente quieres que sea tu comunidad?',
            q5opt: [
                { label: 'Elige el nivel social...', value: '' },
                { label: 'Una comunidad muy unida y social', value: 'Tight-knit' },
                { label: 'Un vecindario tranquilo y privado', value: 'Quiet' },
                { label: 'Una mezcla de ambos', value: 'Mix' },
            ],
            q6: '¿Prefieres una comunidad con presencia expatriada establecida?',
            q6opt: [
                { label: 'Elige tu preferencia...', value: '' },
                { label: 'Sí, me encantaría conectar con otros expatriados.', value: 'Yes' },
                { label: 'No, prefiero integrarme con la cultura local.', value: 'No' },
                { label: 'Estoy abierto a cualquiera de las dos.', value: 'Open' },
            ],
            q7: '¿Qué es lo más importante que debe tener tu vecindario?',
            q7opt: [
                { label: 'Elige la característica...', value: '' },
                { label: 'Golf', value: 'Golfing' },
                { label: 'Acceso directo a la playa', value: 'Beachfront' },
                { label: 'Cercanía a atención médica', value: 'Medical' },
                { label: 'Pesca y navegación', value: 'Fishing' },
                { label: 'Senderismo y senderos naturales', value: 'Hiking' },
                { label: 'Clima fresco en las tierras altas', value: 'Weather' },
            ],
            q8: '¿Cuál es tu presupuesto para la propiedad ideal?',
            q8opt: [
                { label: 'Elige el presupuesto...', value: '' },
                { label: 'Menos de $200,000', value: 'Under $200k' },
                { label: '$200,000 – $500,000', value: '$200k-$500k' },
                { label: '$500,000 +', value: '$500k+' },
            ],
            q9: '¿Qué tan cerca quieres estar de lo siguiente?',
            q9opt: ['Escuelas internacionales', 'Aeropuertos principales', 'Compras y restaurantes', 'Hospitales o clínicas'],
            q10: '¿Cuál es tu mayor preocupación sobre mudarte a una nueva área?',
            q10opt: [
                { label: 'Elige tu preocupación...', value: '' },
                { label: 'Adaptarse a la cultura', value: 'Culture' },
                { label: 'Costo de vida', value: 'Cost' },
                { label: 'Seguridad', value: 'Safety' },
                { label: 'Encontrar el vecindario correcto', value: 'Neighborhood' },
                { label: 'Otro (especifica abajo)', value: 'Other' },
            ],
            q10placeholder: 'Si ninguna aplica, por favor especifica...',
            q11: '¿Cuándo planeas hacer el cambio?',
            q11opt: [
                { label: 'Elige el plazo...', value: '' },
                { label: 'En los próximos 3 meses', value: 'Within 3 months' },
                { label: '3 – 6 meses', value: '3-6 months' },
                { label: '6 – 12 meses', value: '6-12 months' },
                { label: 'Solo explorando por ahora', value: 'Exploring' },
            ],
            q12: '¡Excelente! Casi terminamos. Para obtener tus resultados, comparte tu nombre',
            q12firstName: 'Nombre',
            q12lastName: 'Apellido',
            q13: 'Y por último, tu dirección de correo electrónico.',
            q13label: 'Correo Electrónico',
            q13consent: 'Acepto recibir comunicaciones de Panama Real Estate Sale. Puedes cancelar la suscripción en cualquier momento.',
            q13privacy: 'Al hacer clic en enviar, consientes que Panama Real Estate Sale almacene y procese tu información personal.',
        },
    },
    pt: {
        exitQuiz: 'Sair do Quiz',
        discoveryEvolution: 'Evolução de Descoberta',
        stepOf: (c, t) => `Passo ${c} de ${t}`,
        continue_: 'CONTINUAR',
        previous: 'Anterior',
        revealResults: 'Revelar Resultados',
        privacySecure: '100% Privacidade Segura',
        advisorVerified: 'Verificado por Consultor',
        matchReady: 'Sua Correspondência no Panamá está Pronta!',
        matchSubtitle: 'Com base no seu estilo de vida e objetivos de investimento, identificamos estas melhores localizações no Panamá.',
        featuredRec: 'Recomendação em Destaque',
        learnMore: 'Saber Mais',
        viewDetails: 'Ver Detalhes',
        guidedExperience: 'Quer uma experiência guiada?',
        guidedSubtitle: 'Nossos consultores estão prontos para guiá-lo por esses bairros pessoalmente ou por videochamada.',
        scheduleCall: 'Agendar Chamada de Descoberta',
        questions: {
            q1: 'Que tipo de ambiente descreve melhor a sua localização dos sonhos?',
            q1opt: [
                { label: 'Escolha o ambiente...', value: '' },
                { label: 'Montanha (Mais fresco, verde exuberante)', value: 'Mountains' },
                { label: 'Cidade (Arranha-céus modernos, energia urbana)', value: 'City' },
                { label: 'Praia (Litoral do Pacífico ou Caribe)', value: 'Beach' },
            ],
            q2: 'Que tipo de família você tem?',
            q2opt: [
                { label: 'Escolha o tipo de família...', value: '' },
                { label: 'Família (Filhos, prioridade em escolas)', value: 'Family' },
                { label: 'Aposentadoria (Paz, acesso médico)', value: 'Retirement' },
                { label: 'Profissional jovem (Coworking, vida noturna)', value: 'Professional' },
                { label: 'Solteiro ou ninho vazio', value: 'Solo' },
            ],
            q3: 'Que estilo de vida você procura?',
            q3opt: [
                { label: 'Escolha o estilo...', value: '' },
                { label: 'Tranquilo (Relaxado, sem pressa)', value: 'Laid-back' },
                { label: 'Moderno (Artístico, social)', value: 'Trendy' },
                { label: 'Luxo (Condomínio fechado, comodidades premium)', value: 'Luxury' },
            ],
            q4: 'Qual dos seguintes é mais importante para a sua comunidade?',
            q4opt: [
                { label: 'Escolha a prioridade...', value: '' },
                { label: 'Caminhabilidade (Tudo perto)', value: 'Walkability' },
                { label: 'Vista para o mar (Acordar com o oceano)', value: 'Ocean View' },
                { label: 'Comunidade expatriada estabelecida', value: 'Expats' },
                { label: 'Ambiente local/autêntico', value: 'Local' },
                { label: 'Instalações de alto padrão (Academia, piscina, spa)', value: 'Facilities' },
            ],
            q5: 'Quão socialmente ativo você quer que seja o seu bairro?',
            q5opt: [
                { label: 'Escolha o nível social...', value: '' },
                { label: 'Uma comunidade muito unida e social', value: 'Tight-knit' },
                { label: 'Um bairro tranquilo e privado', value: 'Quiet' },
                { label: 'Uma mistura dos dois', value: 'Mix' },
            ],
            q6: 'Você prefere uma comunidade com presença expatriada estabelecida?',
            q6opt: [
                { label: 'Escolha sua preferência...', value: '' },
                { label: 'Sim, adoraria conectar com outros expatriados.', value: 'Yes' },
                { label: 'Não, prefiro me integrar à cultura local.', value: 'No' },
                { label: 'Estou aberto a qualquer uma das opções.', value: 'Open' },
            ],
            q7: 'O que é mais importante que o seu bairro tenha?',
            q7opt: [
                { label: 'Escolha a característica...', value: '' },
                { label: 'Golfe', value: 'Golfing' },
                { label: 'Acesso direto à praia', value: 'Beachfront' },
                { label: 'Proximidade a cuidados médicos', value: 'Medical' },
                { label: 'Pesca e navegação', value: 'Fishing' },
                { label: 'Trilhas e natureza', value: 'Hiking' },
                { label: 'Clima fresco nas terras altas', value: 'Weather' },
            ],
            q8: 'Qual é o seu orçamento para o imóvel ideal?',
            q8opt: [
                { label: 'Escolha o orçamento...', value: '' },
                { label: 'Menos de $200.000', value: 'Under $200k' },
                { label: '$200.000 – $500.000', value: '$200k-$500k' },
                { label: '$500.000 +', value: '$500k+' },
            ],
            q9: 'Quão perto você quer estar do seguinte?',
            q9opt: ['Escolas internacionais', 'Aeroportos principais', 'Compras e restaurantes', 'Hospitais ou clínicas'],
            q10: 'Qual é a sua maior preocupação sobre se mudar para uma nova área?',
            q10opt: [
                { label: 'Escolha sua preocupação...', value: '' },
                { label: 'Adaptar-se à cultura', value: 'Culture' },
                { label: 'Custo de vida', value: 'Cost' },
                { label: 'Segurança', value: 'Safety' },
                { label: 'Encontrar o bairro certo', value: 'Neighborhood' },
                { label: 'Outro (especifique abaixo)', value: 'Other' },
            ],
            q10placeholder: 'Se nenhuma das opções acima se aplica, por favor especifique...',
            q11: 'Quando você planeja fazer a mudança?',
            q11opt: [
                { label: 'Escolha o prazo...', value: '' },
                { label: 'Em até 3 meses', value: 'Within 3 months' },
                { label: '3 – 6 meses', value: '3-6 months' },
                { label: '6 – 12 meses', value: '6-12 months' },
                { label: 'Apenas explorando por enquanto', value: 'Exploring' },
            ],
            q12: 'Ótimo! Quase terminando. Para obter seus resultados, compartilhe seu nome',
            q12firstName: 'Nome',
            q12lastName: 'Sobrenome',
            q13: 'E por fim, seu endereço de e-mail.',
            q13label: 'Endereço de E-mail',
            q13consent: 'Concordo em receber outras comunicações da Panama Real Estate Sale. Você pode cancelar a inscrição a qualquer momento.',
            q13privacy: 'Ao clicar em enviar, você consente que a Panama Real Estate Sale armazene e processe suas informações pessoais.',
        },
    },
    de: {
        exitQuiz: 'Quiz Beenden',
        discoveryEvolution: 'Entdeckungsfortschritt',
        stepOf: (c, t) => `Schritt ${c} von ${t}`,
        continue_: 'WEITER',
        previous: 'Zurück',
        revealResults: 'Ergebnisse Anzeigen',
        privacySecure: '100% Datenschutz',
        advisorVerified: 'Berater-Verifiziert',
        matchReady: 'Ihre Panama-Übereinstimmung ist Bereit!',
        matchSubtitle: 'Basierend auf Ihrem Lebensstil und Ihren Investitionszielen haben wir diese Top-Standorte in Panama identifiziert.',
        featuredRec: 'Empfohlenes Objekt',
        learnMore: 'Mehr Erfahren',
        viewDetails: 'Details Ansehen',
        guidedExperience: 'Möchten Sie eine geführte Erfahrung?',
        guidedSubtitle: 'Unsere Berater sind bereit, Sie persönlich oder per Videoanruf durch diese Viertel zu führen.',
        scheduleCall: 'Entdeckungsgespräch Planen',
        questions: {
            q1: 'Welche Art von Umgebung beschreibt Ihren Traumstandort am besten?',
            q1opt: [
                { label: 'Umgebung wählen...', value: '' },
                { label: 'Berge (Kühler, üppiges Grün)', value: 'Mountains' },
                { label: 'Stadt (Moderne Wolkenkratzer, urbane Energie)', value: 'City' },
                { label: 'Strand (Pazifik- oder Karibikküste)', value: 'Beach' },
            ],
            q2: 'In welchem Haushalt leben Sie?',
            q2opt: [
                { label: 'Haushalt wählen...', value: '' },
                { label: 'Familie (Kinder, Schulen als Priorität)', value: 'Family' },
                { label: 'Rente (Ruhe, medizinische Versorgung)', value: 'Retirement' },
                { label: 'Junger Berufstätiger (Coworking, Nachtleben)', value: 'Professional' },
                { label: 'Single oder leeres Nest', value: 'Solo' },
            ],
            q3: 'Welchen Lebensstil suchen Sie?',
            q3opt: [
                { label: 'Stil wählen...', value: '' },
                { label: 'Entspannt (Locker, ungehetzt)', value: 'Laid-back' },
                { label: 'Trendy (Künstlerisch, modern, sozial)', value: 'Trendy' },
                { label: 'Luxus (Umzäuntes Gelände, Premium-Ausstattung)', value: 'Luxury' },
            ],
            q4: 'Was ist am wichtigsten für Ihre Gemeinschaft?',
            q4opt: [
                { label: 'Priorität wählen...', value: '' },
                { label: 'Gehfreundlichkeit (Alles in der Nähe)', value: 'Walkability' },
                { label: 'Meerblick (Mit Blick aufs Meer aufwachen)', value: 'Ocean View' },
                { label: 'Etablierte Expat-Gemeinschaft', value: 'Expats' },
                { label: 'Lokales/authentisches Flair', value: 'Local' },
                { label: 'Hochwertige Einrichtungen (Fitnessstudio, Pool, Spa)', value: 'Facilities' },
            ],
            q5: 'Wie sozial aktiv soll Ihre Gemeinschaft sein?',
            q5opt: [
                { label: 'Soziales Niveau wählen...', value: '' },
                { label: 'Eine eng verbundene, sehr gesellige Gemeinschaft', value: 'Tight-knit' },
                { label: 'Ein ruhiges, privates Viertel', value: 'Quiet' },
                { label: 'Eine Mischung aus beidem', value: 'Mix' },
            ],
            q6: 'Bevorzugen Sie eine Gemeinschaft mit einer etablierten Expat-Präsenz?',
            q6opt: [
                { label: 'Präferenz wählen...', value: '' },
                { label: 'Ja, ich würde gerne andere Expats kennenlernen.', value: 'Yes' },
                { label: 'Nein, ich möchte mich lieber in die lokale Kultur integrieren.', value: 'No' },
                { label: 'Ich bin für beides offen.', value: 'Open' },
            ],
            q7: 'Was ist das Wichtigste für Ihre Nachbarschaft?',
            q7opt: [
                { label: 'Merkmal wählen...', value: '' },
                { label: 'Golf', value: 'Golfing' },
                { label: 'Direkter Strandzugang', value: 'Beachfront' },
                { label: 'Nähe zur medizinischen Versorgung', value: 'Medical' },
                { label: 'Angeln und Bootfahren', value: 'Fishing' },
                { label: 'Wandern und Naturpfade', value: 'Hiking' },
                { label: 'Kühles Hochlandklima', value: 'Weather' },
            ],
            q8: 'Was ist Ihr Budget für die ideale Immobilie?',
            q8opt: [
                { label: 'Budget wählen...', value: '' },
                { label: 'Unter $200.000', value: 'Under $200k' },
                { label: '$200.000 – $500.000', value: '$200k-$500k' },
                { label: '$500.000 +', value: '$500k+' },
            ],
            q9: 'Wie nah möchten Sie an Folgendem sein?',
            q9opt: ['Internationale Schulen', 'Internationale Flughäfen', 'Einkaufen und Gastronomie', 'Krankenhäuser oder Kliniken'],
            q10: 'Was ist Ihre größte Sorge beim Umzug in eine neue Gegend?',
            q10opt: [
                { label: 'Sorge wählen...', value: '' },
                { label: 'Sich an die Kultur anpassen', value: 'Culture' },
                { label: 'Lebenshaltungskosten', value: 'Cost' },
                { label: 'Sicherheit', value: 'Safety' },
                { label: 'Das richtige Viertel finden', value: 'Neighborhood' },
                { label: 'Sonstiges (unten angeben)', value: 'Other' },
            ],
            q10placeholder: 'Falls keine der obigen Optionen zutrifft, bitte angeben...',
            q11: 'Wann planen Sie umzuziehen?',
            q11opt: [
                { label: 'Zeitrahmen wählen...', value: '' },
                { label: 'Innerhalb von 3 Monaten', value: 'Within 3 months' },
                { label: '3 – 6 Monate', value: '3-6 months' },
                { label: '6 – 12 Monate', value: '6-12 months' },
                { label: 'Ich erkunde zunächst nur', value: 'Exploring' },
            ],
            q12: 'Großartig! Fast fertig. Bitte teilen Sie uns Ihren Namen mit, um Ihre Ergebnisse zu erhalten',
            q12firstName: 'Vorname',
            q12lastName: 'Nachname',
            q13: 'Und zuletzt Ihre E-Mail-Adresse.',
            q13label: 'E-Mail-Adresse',
            q13consent: 'Ich stimme zu, weitere Mitteilungen von Panama Real Estate Sale zu erhalten. Sie können sich jederzeit abmelden.',
            q13privacy: 'Durch Klicken auf Senden stimmen Sie zu, dass Panama Real Estate Sale Ihre persönlichen Daten speichert und verarbeitet.',
        },
    },
};

const QuizPageContent: React.FC = () => {
    const router = useRouter();
    const { saveQuizSubmission } = useCMS();
    const { lang } = useLanguage();
    const qu = QUIZ_UI[lang] || QUIZ_UI['en'];
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<any>({
        environment: '',
        household: '',
        livingStyle: '',
        priority: '',
        social: '',
        expats: '',
        feature: '',
        budget: '',
        proximity: '',
        concern: '',
        concernOther: '',
        timeline: '',
        firstName: '',
        lastName: '',
        email: '',
        consent: false
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [recommendations, setRecommendations] = useState<any[]>([]);

    const totalSteps = 13;
    const progress = Math.round((step / totalSteps) * 100);

    const calculateResults = () => {
        // Logic: Map environment choices to existing projects
        let matched = PROJECTS.filter(p => {
            if (formData.environment === 'Mountains') return p.zone.includes('Mountain');
            if (formData.environment === 'Beach') return p.zone.includes('Beach') || p.zone.includes('Caribbean');
            if (formData.environment === 'City') return p.zone.includes('City') || p.slug.includes('westin'); // Westin is near city
            return true;
        });

        if (matched.length === 0) matched = PROJECTS.slice(0, 3);
        setRecommendations(matched.slice(0, 4));
    };

    const handleNext = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const handlePrev = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (step < totalSteps) return handleNext();

        // Compute matches inline to avoid stale-state closure
        let matched = PROJECTS.filter(p => {
            if (formData.environment === 'Mountains') return p.zone.includes('Mountain');
            if (formData.environment === 'Beach') return p.zone.includes('Beach') || p.zone.includes('Caribbean');
            if (formData.environment === 'City') return p.zone.includes('City') || p.slug.includes('westin');
            return true;
        });
        if (matched.length === 0) matched = PROJECTS.slice(0, 3);
        const matched4 = matched.slice(0, 4);
        setRecommendations(matched4);

        const matchedNames = matched4.length > 0
            ? matched4.map((r: any) => r.name.en)
            : ["General Panama Discovery"];

        const submission = {
            id: `quiz-${Date.now()}`,
            timestamp: new Date().toISOString(),
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            answers: { ...formData },
            recommendedNeighborhoods: matchedNames
        };

        await saveQuizSubmission(submission);
        setIsSubmitted(true);
        window.scrollTo(0, 0);
    };

    if (isSubmitted) {
        return (
            <div className="pt-32 pb-20 bg-white min-h-screen">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16 animate-in fade-in duration-700">
                        <div className="w-20 h-20 bg-brand-GOLD text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                            <Sparkles size={40} />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-950 mb-4">{qu.matchReady}</h1>
                        <p className="text-slate-500 text-lg">{qu.matchSubtitle}</p>
                    </div>

                    <div className="bg-brand-50 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row mb-12 border-4 border-brand-GOLD">
                        <div className="md:w-1/2 h-80 md:h-auto overflow-hidden">
                            <img src={recommendations[0]?.images[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt={recommendations[0]?.name.en || 'Featured Panama property recommendation'} />
                        </div>
                        <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white">
                            <span className="text-brand-GOLD font-bold uppercase tracking-widest text-[10px] mb-4">{qu.featuredRec}</span>
                            <h2 className="text-4xl font-heading font-bold text-brand-950 mb-6">{recommendations[0]?.name.en}</h2>
                            <p className="text-slate-500 mb-8 leading-relaxed line-clamp-4">{recommendations[0]?.description.en}</p>
                            <button
                                onClick={() => router.push(`/proyectos/${recommendations[0]?.slug}`)}
                                className="inline-flex items-center gap-2 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-amber-400 transition-all shadow-xl self-start"
                            >
                                {qu.learnMore} — {recommendations[0]?.name.en.split(' ')[0]} <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {recommendations.slice(1, 4).map((p, idx) => (
                            <div key={idx} className="card-light rounded-3xl overflow-hidden border border-brand-100 flex flex-col hover:shadow-2xl transition-all">
                                <div className="h-48 overflow-hidden">
                                    <img src={p.images[0]} className="w-full h-full object-cover" alt={p.name.en || 'Panama property'} />
                                </div>
                                <div className="p-8 flex-grow">
                                    <h3 className="text-xl font-bold text-brand-950 mb-3">{p.name.en}</h3>
                                    <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed">{p.description.en}</p>
                                    <button
                                        onClick={() => router.push(`/proyectos/${p.slug}`)}
                                        className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:text-brand-TEAL transition-colors"
                                    >
                                        {qu.viewDetails} <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center p-12 bg-brand-50 rounded-[2.5rem] border border-brand-100">
                        <h3 className="text-2xl font-bold text-brand-950 mb-4">{qu.guidedExperience}</h3>
                        <p className="text-slate-500 mb-8 max-w-xl mx-auto">{qu.guidedSubtitle}</p>
                        <button onClick={() => router.push(`/${lang}/contacto`)} className="bg-brand-GOLD text-brand-950 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-amber-400 transition-all">{qu.scheduleCall}</button>
                    </div>
                </div>
            </div>
        );
    }

    const QuestionFrame = ({ title, children }: any) => (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-4 flex items-center gap-2 text-brand-GOLD font-black uppercase text-[10px] tracking-widest">
                <Sparkles size={12} /> {qu.stepOf(step, totalSteps)}
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-950 mb-8 leading-tight">{title}</h2>
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );

    return (
        <div className="pt-32 pb-20 bg-white min-h-screen">
            <div className="max-w-2xl mx-auto px-4">
                {/* Exit button */}
                <div className="flex justify-end mb-4">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 text-xs font-bold uppercase tracking-widest transition-colors"
                    >
                        <X size={14} /> {qu.exitQuiz}
                    </button>
                </div>
                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-brand-GOLD font-black uppercase text-[9px] tracking-[0.3em]">{qu.discoveryEvolution}</span>
                        <span className="text-brand-950 font-black text-xl">{progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-brand-100 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-GOLD transition-all duration-700 ease-out shadow-[0_0_15px_rgba(212,175,55,0.4)]" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <div className="bg-brand-50 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-brand-GOLD/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>

                    <form onSubmit={handleSubmit} className="space-y-12">
                        {step === 1 && (
                            <QuestionFrame title={qu.questions.q1}>
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.environment} onChange={e => setFormData({ ...formData, environment: e.target.value })}>
                                    {qu.questions.q1opt.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 2 && (
                            <QuestionFrame title={qu.questions.q2}>
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.household} onChange={e => setFormData({ ...formData, household: e.target.value })}>
                                    {qu.questions.q2opt.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 3 && (
                            <QuestionFrame title={qu.questions.q3}>
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.livingStyle} onChange={e => setFormData({ ...formData, livingStyle: e.target.value })}>
                                    {qu.questions.q3opt.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 4 && (
                            <QuestionFrame title={qu.questions.q4}>
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.priority} onChange={e => setFormData({ ...formData, priority: e.target.value })}>
                                    {qu.questions.q4opt.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 5 && (
                            <QuestionFrame title={qu.questions.q5}>
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.social} onChange={e => setFormData({ ...formData, social: e.target.value })}>
                                    {qu.questions.q5opt.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 6 && (
                            <QuestionFrame title={qu.questions.q6}>
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.expats} onChange={e => setFormData({ ...formData, expats: e.target.value })}>
                                    {qu.questions.q6opt.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 7 && (
                            <QuestionFrame title={qu.questions.q7}>
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.feature} onChange={e => setFormData({ ...formData, feature: e.target.value })}>
                                    {qu.questions.q7opt.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 8 && (
                            <QuestionFrame title={qu.questions.q8}>
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.budget} onChange={e => setFormData({ ...formData, budget: e.target.value })}>
                                    {qu.questions.q8opt.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 9 && (
                            <QuestionFrame title={qu.questions.q9}>
                                <div className="grid grid-cols-1 gap-4">
                                    {qu.questions.q9opt.map(opt => (
                                        <label key={opt} className={`p-4 border-2 rounded-xl flex items-center gap-4 cursor-pointer transition-all ${formData.proximity === opt ? 'border-brand-GOLD bg-brand-50 shadow-inner' : 'border-slate-100 hover:border-slate-200'}`}>
                                            <input required type="radio" name="proximity" value={opt} className="w-5 h-5 text-brand-GOLD" checked={formData.proximity === opt} onChange={e => setFormData({ ...formData, proximity: e.target.value })} />
                                            <span className="font-bold text-slate-700">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </QuestionFrame>
                        )}

                        {step === 10 && (
                            <QuestionFrame title={qu.questions.q10}>
                                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700 mb-4" value={formData.concern} onChange={e => setFormData({ ...formData, concern: e.target.value })}>
                                    {qu.questions.q10opt.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                                </select>
                                <textarea className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-medium text-slate-700 h-24" placeholder={qu.questions.q10placeholder} value={formData.concernOther} onChange={e => setFormData({ ...formData, concernOther: e.target.value })} />
                            </QuestionFrame>
                        )}

                        {step === 11 && (
                            <QuestionFrame title={qu.questions.q11}>
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.timeline} onChange={e => setFormData({ ...formData, timeline: e.target.value })}>
                                    {qu.questions.q11opt.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 12 && (
                            <QuestionFrame title={qu.questions.q12}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-slate-500">{qu.questions.q12firstName}</label>
                                        <input required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-slate-500">{qu.questions.q12lastName}</label>
                                        <input required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} />
                                    </div>
                                </div>
                            </QuestionFrame>
                        )}

                        {step === 13 && (
                            <QuestionFrame title={qu.questions.q13}>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-slate-500">{qu.questions.q13label}</label>
                                        <input required type="email" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                    </div>
                                    <label className="flex items-start gap-4 cursor-pointer group">
                                        <input type="checkbox" className="mt-1 w-5 h-5 text-brand-GOLD rounded" checked={formData.consent} onChange={e => setFormData({ ...formData, consent: e.target.checked })} />
                                        <span className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                                            {qu.questions.q13consent}
                                        </span>
                                    </label>
                                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest leading-loose">{qu.questions.q13privacy}</p>
                                </div>
                            </QuestionFrame>
                        )}

                        <div className="pt-8 border-t border-slate-100 flex justify-between gap-4">
                            <button type="button" onClick={handlePrev} disabled={step === 1} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest transition-all ${step === 1 ? 'opacity-0 invisible' : 'bg-brand-100 text-brand-950 hover:bg-brand-200'}`}>
                                <ChevronLeft size={16} /> {qu.previous}
                            </button>
                            <button type="submit" className="flex items-center gap-2 bg-brand-GOLD text-brand-950 px-10 py-4 rounded-xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-amber-400 transition-all shadow-xl shadow-brand-GOLD/30">
                                {step === totalSteps ? qu.revealResults : qu.continue_} <ChevronRight size={16} />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-12 flex items-center justify-center gap-10 text-slate-400">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><ShieldCheck size={14} /> {qu.privacySecure}</div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><MapPin size={14} /> {qu.advisorVerified}</div>
                </div>
            </div>
        </div>
    );
};

export default QuizPageContent;
