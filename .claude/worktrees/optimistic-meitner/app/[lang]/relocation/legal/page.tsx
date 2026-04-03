import { Metadata } from 'next';
import RelocationLegalContent from '@/components/pages/RelocationLegalContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Panama Immigration Legal Guide 2026 | Vetted Lawyers & Visas',
            description: 'The definitive 2026 legal resource for Panama residency. Compare immigration lawyers, visa requirements, and work permit pathways for expats.',
            keywords: ['panama immigration lawyer 2026', 'panama legal residency guide', 'best panama visa attorney', 'panama immigration laws for foreigners']
        },
        es: {
            title: 'Guía Legal de Inmigración Panamá 2026 | Abogados y Visas',
            description: 'El recurso legal definitivo de 2026 para la residencia en Panamá. Compare abogados de inmigración, requisitos de visa y permisos de trabajo.',
            keywords: ['abogado de inmigración panamá 2026', 'residencia legal panamá guía', 'leyes de inmigración panamá']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function LegalHubPage() {
    return <RelocationLegalContent />;
}
