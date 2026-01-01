import { Metadata } from 'next';
import RelocationLegalContent from '@/components/pages/RelocationLegalContent';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const { lang } = params;

    const translations: any = {
        en: {
            title: 'Panama Immigration Lawyer & Legal Services | ExpatRockstars',
            description: 'Expert legal support for your Panama relocation. We connect you with top immigration lawyers for Friendly Nations Visas, Work Permits, and Permanent Residency.',
            keywords: ['panama immigration lawyer', 'panama residency requirements', 'panama work permit', 'panama legal residency', 'passport for panama']
        },
        es: {
            title: 'Abogados de Inmigración en Panamá | Servicios Legales - ExpatRockstars',
            description: 'Apoyo legal experto para su reubicación en Panamá. Le conectamos con los mejores abogados para Visas de Naciones Amigas, Permisos de Trabajo y Residencia.',
            keywords: ['abogados de inmigración panamá', 'requisitos residencia panamá', 'permiso de trabajo panamá', 'residencia legal panamá']
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
