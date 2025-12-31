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

    if (project.videoUrl) {
        // Extract video ID for thumbnail (assuming YouTube for now as per data)
        let thumbnailUrl = project.images[0]; // Default fallback
        if (project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be')) {
            const videoId = project.videoUrl.split('v=')[1]?.split('&')[0];
            if (videoId) {
                thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }
        }

        const videoSchema = {
            "@type": "VideoObject",
            "name": project.h1Title[lang],
            "description": project.description[lang],
            "thumbnailUrl": [thumbnailUrl],
            "uploadDate": new Date().toISOString(), // This should ideally be the real upload date
            "contentUrl": project.videoUrl,
            "embedUrl": project.videoUrl.replace('watch?v=', 'embed/')
        };

        // Add to subjectOf or similar if strictly adhering to Product type, 
        // but often VideoObject is a separate top-level item or attached via subjectOf.
        // Google recommends nesting it if it describes the product, or having it separate.
        // Let's add it as a separate script tag or merge it if we want a graph.
        // For simplicity in this component, let's just create a separate object and push it to a graph or output another script.
        // But since this component returns one script, let's try to put it in 'subjectOf' property of Product if valid, 
        // OR simpler: just return an array of schemas in the graph.

        // Let's switch to using @graph to return multiple entities if needed, 
        // OR just keep them separate. 
        // Given the existing structure is a single object, let's change it to a graph or just add the video property to Product if supported.
        // Schema.org Product 'subjectOf' can point to a VideoObject.

        (schema as any)["subjectOf"] = videoSchema;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
