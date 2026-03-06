import React from 'react';

interface LocalBusinessSchemaProps {
    name?: string;
    description?: string;
    url?: string;
    telephone?: string;
    priceRange?: string;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
    name = "Panama Real Estate Sale",
    description = "Panama's leading real estate and investment consultancy. Expert guidance for luxury properties, beachfront condos, and residency visas.",
    url = "https://panamarealestatesale.com",
    telephone = "+507 6761-0315",
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
        "image": "https://panamarealestatesale.com/logo.png",
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
            "https://www.facebook.com/panamarealestatesale",
            "https://www.instagram.com/panamarealestatesale",
            "https://www.youtube.com/@panamarealestatesale"
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
