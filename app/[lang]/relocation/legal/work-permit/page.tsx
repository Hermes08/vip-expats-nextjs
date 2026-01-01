import { Metadata } from 'next';
import RelocationWorkPermitContent from '@/components/pages/RelocationWorkPermitContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Panama Work Permit | Professional & Digital Nomad Guide',
            description: 'The definitive guide to obtaining a work permit in Panama. Requirements for professionals, remote workers, and the 2024 Short-Stay Visa for Digital Nomads.',
            keywords: ['panama work permit', 'panama digital nomad visa', 'work in panama as a foreigner', 'panama residency for professionals']
        },
        es: {
            title: 'Permiso de Trabajo Panamá | Guía para Profesionales y Nómadas',
            description: 'La guía definitiva para obtener un permiso de trabajo en Panamá. Requisitos para profesionales, trabajadores remotos y la Visa de Nómada Digital.',
            keywords: ['permiso de trabajo panamá', 'visa nómada digital panamá', 'trabajar en panamá', 'residencia para profesionales panamá']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function WorkPermitPage() {
    return <RelocationWorkPermitContent />;
}
