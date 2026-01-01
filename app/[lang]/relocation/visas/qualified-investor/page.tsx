import { Metadata } from 'next';
import RelocationQualifiedInvestorContent from '@/components/pages/RelocationQualifiedInvestorContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Panama Qualified Investor Visa 2026 | PR in 30 Days',
            description: 'The fastest path to Panama permanent residency. Learn about the $300,000 real estate investment requirement and the 30-day VIP processing timeline.',
            keywords: ['panama qualified investor visa', 'panama residency by investment 2026', 'fastest panama visa', 'panama real estate investment residency']
        },
        es: {
            title: 'Visa de Inversionista Calificado Panamá 2026 | Residencia en 30 Días',
            description: 'La vía más rápida para la residencia permanente en Panamá. Conozca el requisito de inversión inmobiliaria de $300,000 y el proceso VIP de 30 días.',
            keywords: ['visa inversionista calificado panama', 'residencia por inversion panama 2026', 'visa mas rapida panama', 'residencia permanente panama inversion']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function QualifiedInvestorPage() {
    return <RelocationQualifiedInvestorContent />;
}
