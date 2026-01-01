import { Metadata } from 'next';
import RelocationFriendlyNationsContent from '@/components/pages/RelocationFriendlyNationsContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Friendly Nations Visa Panama 2026 | Ultimate Requirements Guide',
            description: 'The definitive guide to the Panama Friendly Nations Visa in 2026. Discover the latest list of 50 nations, investment pathways, and professional requirements.',
            keywords: ['friendly nations visa panama requirements', 'panama friendly nations visa list 2026', 'panama residency by investment', 'panama work permit for foreigners']
        },
        es: {
            title: 'Guía Visa de Naciones Amigas Panamá 2026 | Requisitos Actualizados',
            description: 'La guía definitiva para la Visa de Naciones Amigas de Panamá en 2026. Descubre la lista de naciones, opciones de inversión y requisitos profesionales.',
            keywords: ['visa naciones amigas panamá 2026', 'requisitos residencia panamá naciones amigas', 'inversion panama paises amigos']
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
