import { Metadata } from 'next';
import RelocationChecklistContent from '@/components/pages/RelocationChecklistContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Panama Visa Requirements Checklist 2026 | Legal Move Guide',
            description: 'The definitive 2026 checklist for Panama residency. FBI checks, apostilles, and health certificates—everything you need for a Friendly Nations or Pensionado Visa.',
            keywords: ['panama visa requirements', 'panama residency checklist', 'panama immigration documents', 'friendly nations visa checklist', 'pensionado visa panama requirements']
        },
        es: {
            title: 'Lista de Requisitos para Visa de Panamá 2026 | Guía Legal',
            description: 'La lista definitiva de 2026 para la residencia en Panamá. Antecedentes penales, apostillas y certificados de salud—todo lo que necesita.',
            keywords: ['requisitos visa panamá', 'lista residencia panamá', 'documentos inmigración panamá', 'requisitos naciones amigas panamá']
        }
    };

    const t = translations[lang] || translations.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords
    };
}

export default function ChecklistPage() {
    return <RelocationChecklistContent />;
}
