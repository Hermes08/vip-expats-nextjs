import { Metadata } from 'next';
import RelocationFriendlyNationsContent from '@/components/pages/RelocationFriendlyNationsContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Friendly Nations Visa Panama | 2024 Requirements & Guide',
            description: 'The definitive guide to the Panama Friendly Nations Visa. Discover the 2024 requirements, list of 50 nations, professional pathways, and real estate investment options.',
            keywords: ['friendly nations visa panama', 'panama friendly nations visa list', 'panama residency by investment', 'panama work permit']
        },
        es: {
            title: 'Visa de Naciones Amigas Panamá | Requisitos y Guía 2024',
            description: 'La guía definitiva para la Visa de Naciones Amigas de Panamá. Descubre los requisitos de 2024, la lista de naciones y opciones de inversión.',
            keywords: ['visa naciones amigas panamá', 'requisitos visa naciones amigas', 'residencia panamá por inversión']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function FriendlyNationsPage() {
    return <RelocationFriendlyNationsContent />;
}
