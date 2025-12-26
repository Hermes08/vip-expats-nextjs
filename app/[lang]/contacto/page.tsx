import React from 'react';
import type { Metadata } from 'next';
import ContactPageContent from '@/components/pages/ContactPageContent';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles = {
        es: 'Hablemos de tu inversión en Panamá | Contacto ExpatRockstars',
        en: 'Let\'s talk about your investment in Panama | Contact ExpatRockstars'
    };
    return {
        title: titles[lang as keyof typeof titles] || titles.es,
    };
}

export default function Page() {
    return <ContactPageContent />;
}
