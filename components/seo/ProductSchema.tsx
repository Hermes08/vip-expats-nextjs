import React from 'react';
import { Project } from '@/lib/types';

interface ProductSchemaProps {
    project: Project;
    lang: 'es' | 'en';
}

export default function ProductSchema({ project, lang }: ProductSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": project.name[lang],
        "description": project.description[lang],
        "image": project.images,
        "brand": {
            "@type": "Brand",
            "name": "panamarealestatesale"
        },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": project.priceFrom,
            "highPrice": project.priceFrom * 3,
            "availability": "https://schema.org/InStock",
            "url": `https://panamarealestatesale.com/${lang}/proyectos/${project.slug}`
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127"
        },
        "category": "Real Estate",
        "additionalProperty": [
            {
                "@type": "PropertyValue",
                "name": "Property Type",
                "value": project.type.join(', ')
            },
            {
                "@type": "PropertyValue",
                "name": "Location",
                "value": project.location[lang]
            },
            {
                "@type": "PropertyValue",
                "name": "Bedrooms",
                "value": project.beds
            },
            {
                "@type": "PropertyValue",
                "name": "Bathrooms",
                "value": project.baths
            },
            {
                "@type": "PropertyValue",
                "name": "Area",
                "value": `${project.sqft} m²`
            },
            {
                "@type": "PropertyValue",
                "name": "Status",
                "value": project.status
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
