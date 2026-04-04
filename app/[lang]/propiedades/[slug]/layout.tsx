import type { Metadata } from 'next';

interface Props {
    params: Promise<{ lang: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang, slug } = await params;
    const domain = 'https://panamarealestatesale.com';

    // Format slug to readable title: "luxury-condo-punta-pacifica" → "Luxury Condo Punta Pacifica"
    const readableTitle = slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

    const title =
        lang === 'es'
            ? `${readableTitle} en Panamá | VIP Expats Panama`
            : `${readableTitle} for Sale in Panama | VIP Expats Panama`;

    const description =
        lang === 'es'
            ? `Descubra esta propiedad en Panamá. Consulte precio, fotos, ubicación y detalles completos con el equipo de VIP Expats Panama.`
            : `Explore this property for sale in Panama. View photos, price, location, and full details with the VIP Expats Panama team.`;

    return {
        title,
        description,
        alternates: {
            canonical: `${domain}/${lang}/propiedades/${slug}`,
            languages: {
                'en-US': `${domain}/en/propiedades/${slug}`,
                'es-PA': `${domain}/es/propiedades/${slug}`,
            },
        },
        openGraph: {
            title,
            description,
            type: 'website',
            url: `${domain}/${lang}/propiedades/${slug}`,
            images: [
                {
                    url: `${domain}/og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [`${domain}/og-image.jpg`],
        },
    };
}

export default function PropertyDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
