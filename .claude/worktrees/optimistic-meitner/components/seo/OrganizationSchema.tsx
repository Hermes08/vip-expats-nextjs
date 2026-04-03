import Script from 'next/script';

interface OrganizationSchemaProps {
    lang: 'es' | 'en';
}

export default function OrganizationSchema({ lang }: OrganizationSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Panama Real Estate Sale",
        "alternateName": "Panama Real Estate Sale",
        "url": "https://panamarealestatesale.com",
        "logo": "https://panamarealestatesale.com/logo.png",
        "description": lang === 'es'
            ? "Portal profesional de bienes raíces para pre-construcción, resorts de playa de lujo y propiedades de inversión en montaña en Panamá."
            : "Professional real estate portal for pre-construction, luxury beach resorts and mountain investment properties in Panama.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Oceania Business Plaza, Tower 2000",
            "addressLocality": "Panama City",
            "addressCountry": "PA"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+507-6761-0315",
            "contactType": "sales",
            "areaServed": ["PA", "US", "CA"],
            "availableLanguage": ["en", "es"]
        },
        "sameAs": [
            "https://www.facebook.com/panamarealestatesale",
            "https://www.instagram.com/panamarealestatesale",
            "https://www.linkedin.com/company/panama-real-estate-sale"
        ],
        "priceRange": "$$$",
        "areaServed": {
            "@type": "Country",
            "name": "Panama"
        }
    };

    return (
        <Script
            id="organization-schema"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
