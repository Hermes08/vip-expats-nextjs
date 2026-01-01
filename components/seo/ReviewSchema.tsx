import React from 'react';

interface Review {
    author: string;
    reviewBody: string;
    reviewRating: number;
    datePublished?: string;
}

interface ReviewSchemaProps {
    itemReviewedName: string;
    itemReviewedDescription: string;
    reviews: Review[];
    aggregateRating?: {
        ratingValue: number;
        reviewCount: number;
    };
}

const ReviewSchema: React.FC<ReviewSchemaProps> = ({ itemReviewedName, itemReviewedDescription, reviews, aggregateRating }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": aggregateRating ? "Product" : "Review", // Product is often used for services with aggregate ratings
        "name": itemReviewedName,
        "description": itemReviewedDescription,
        ...(aggregateRating && {
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": aggregateRating.ratingValue,
                "reviewCount": aggregateRating.reviewCount
            }
        }),
        "review": reviews.map(r => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": r.author
            },
            "reviewBody": r.reviewBody,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": r.reviewRating
            },
            ...(r.datePublished && { "datePublished": r.datePublished })
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default ReviewSchema;
