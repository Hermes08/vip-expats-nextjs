import React from 'react';

interface OrganizationSchemaProps {
    lang: 'es' | 'en';
}

export default function OrganizationSchema({ lang }: OrganizationSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "panamarealestatesale",
        "alternateName": "ExpatRockstars Real Estate",
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
            "https://www.facebook.com/expatrockstars",
            "https://www.instagram.com/expatrockstars",
            "https://www.linkedin.com/company/expatrockstars"
        ],
        "priceRange": "$$$",
        "areaServed": {
            "@type": "Country",
            "name": "Panama"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
