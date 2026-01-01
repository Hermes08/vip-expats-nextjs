import React from 'react';

interface ServiceSchemaProps {
    name: string;
    description: string;
    providerName?: string;
    areaServed?: string;
    serviceType?: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
    name,
    description,
    providerName = "ExpatRockstars",
    areaServed = "Panama",
    serviceType = "Relocation Service"
}) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "description": description,
        "provider": {
            "@type": "LocalBusiness",
            "name": providerName,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Panama City",
                "addressCountry": "PA"
            }
        },
        "areaServed": {
            "@type": "Country",
            "name": areaServed
        },
        "serviceType": serviceType
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default ServiceSchema;
