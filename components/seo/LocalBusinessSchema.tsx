import React from 'react';

interface LocalBusinessSchemaProps {
    name?: string;
    description?: string;
    url?: string;
    telephone?: string;
    priceRange?: string;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
    name = "ExpatRockstars Panama",
    description = "Panama's leading relocation and residency consultancy. Expert guidance for the Friendly Nations, Pensionado, and Qualified Investor visas.",
    url = "https://expatrockstars.com",
    telephone = "+507 833-9000",
    priceRange = "$$$"
}) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": name,
        "description": description,
        "url": url,
        "telephone": telephone,
        "priceRange": priceRange,
        "image": "https://expatrockstars.com/logo.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Oceania Business Plaza, Tower 2000, 43rd Floor",
            "addressLocality": "Panama City",
            "addressRegion": "Panama",
            "postalCode": "0832",
            "addressCountry": "PA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "8.9774",
            "longitude": "-79.5101"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.facebook.com/expatrockstars",
            "https://www.instagram.com/expatrockstars",
            "https://www.youtube.com/@expatrockstars"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default LocalBusinessSchema;
