import { Metadata } from 'next';
import RelocationPensionadoContent from '@/components/pages/RelocationPensionadoContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Panama Retirement Visa Guide 2026 | Pensionado Program Perks',
            description: 'The definitive guide to the Panama Pensionado Visa in 2026. Learn about lifetime discounts, income requirements, and elite relocation support.',
            keywords: ['panama retirement visa', 'pensionado visa panama requirements', 'retire in panama', 'panama retirement benefits 2026']
        },
        es: {
            title: 'Guía de Visa de Pensionado Panamá 2026 | Beneficios de Jubilación',
            description: 'La guía definitiva para la Visa de Pensionado de Panamá en 2026. Conozca los descuentos de por vida, requisitos de ingresos y apoyo de reubicación de élite.',
            keywords: ['visa de jubilado panama', 'requisitos visa pensionado 2026', 'registrarse como jubilado en panama', 'beneficios jubilación panama']
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
