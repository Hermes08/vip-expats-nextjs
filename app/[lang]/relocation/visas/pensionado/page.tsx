import { Metadata } from 'next';
import RelocationPensionadoContent from '@/components/pages/RelocationPensionadoContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Pensionado Visa Panama | Retirement Perks & Guide 2024',
            description: 'The complete guide to the Panama Pensionado Visa. Learn about the lifetime discounts for retirees, income requirements, and how to retire in Panama with the Rockstar team.',
            keywords: ['pensionado visa panama', 'pensionado visa panama requirements', 'retire in panama', 'panama retirement discounts']
        },
        es: {
            title: 'Visa de Pensionado Panamá | Beneficios y Guía 2024',
            description: 'La guía completa para la Visa de Pensionado de Panamá. Conozca los descuentos de por vida para jubilados, requisitos de ingresos y cómo jubilarse en Panamá.',
            keywords: ['visa pensionado panamá', 'requisitos visa pensionado', 'jubilarse en panamá', 'descuentos pensionados panamá']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function PensionadoPage() {
    return <RelocationPensionadoContent />;
}
