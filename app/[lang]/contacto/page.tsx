import React from 'react';
import type { Metadata } from 'next';
import ContactPageContent from '@/components/pages/ContactPageContent';

const domain = 'https://www.panamarealestatesale.com';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;

    const titles = {
        es: 'Contact Panama Real Estate Experts | ExpatRockstars Panama',
        en: 'Contact Panama Real Estate Experts | ExpatRockstars Panama',
        pt: 'Contato com Especialistas em Imóveis no Panamá | ExpatRockstars Panama',
        de: 'Kontakt zu Panama Immobilienexperten | ExpatRockstars Panama',
    };

    const descriptions = {
        es: '¿Listo para invertir en bienes raíces en Panamá? Conecta con nuestros expertos en reubicación y propiedades de lujo. Agenda una consulta privada hoy.',
        en: 'Ready to invest in Panama Real Estate? Connect with our relocation and luxury property experts. Schedule a private consultation today and begin your journey.',
        pt: 'Pronto para investir em imóveis no Panamá? Conecte-se com nossos especialistas em realocação e propriedades de luxo. Agende uma consulta privada hoje.',
        de: 'Bereit, in Panama-Immobilien zu investieren? Verbinden Sie sich mit unseren Experten für Umzug und Luxusimmobilien. Vereinbaren Sie noch heute eine private Beratung.',
    };

    return {
        title: titles[lang as keyof typeof titles] || titles.en,
        description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
        alternates: {
            canonical: `${domain}/${lang}/contacto`,
            languages: {
                'en-US': `${domain}/en/contacto`,
                'es-PA': `${domain}/es/contacto`,
                'pt-BR': `${domain}/pt/contacto`,
                'de-DE': `${domain}/de/contacto`,
                'x-default': `${domain}/en/contacto`,
            },
        },
        openGraph: {
            type: 'website',
            locale: lang === 'es' ? 'es_PA' : 'en_US',
            url: `${domain}/${lang}/contacto`,
            title: titles[lang as keyof typeof titles] || titles.en,
            description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
            siteName: 'Panama Real Estate Sale',
            images: [
                {
                    url: `${domain}/og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Contact Panama Real Estate Experts',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: titles[lang as keyof typeof titles] || titles.en,
            description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
            images: [`${domain}/og-image.jpg`],
        },
    };
}

export default function Page() {
    return <ContactPageContent />;
}
