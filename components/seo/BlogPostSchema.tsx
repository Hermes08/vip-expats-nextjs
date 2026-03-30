interface BlogPostSchemaProps {
    post?: BlogPost;
    title?: string;
    description?: string;
    image?: string;
    publishDate?: string;
    authorName?: string;
    lang: 'es' | 'en';
}

export default function BlogPostSchema({ post, title, description, image, publishDate, authorName, lang }: BlogPostSchemaProps) {
    const finalTitle = post ? post.title[lang] : title;
    const finalDescription = post ? post.excerpt[lang] : description;
    const finalImage = post ? post.image : image;
    const finalDate = post ? post.date : publishDate;
    const finalAuthor = authorName || "Panama Real Estate Sale";

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": finalTitle,
        "description": finalDescription,
        "image": finalImage,
        "author": {
            "@type": "Organization",
            "name": finalAuthor,
            "url": "https://panamarealestatesale.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Panama Real Estate Sale",
            "logo": {
                "@type": "ImageObject",
                "url": "https://panamarealestatesale.com/logo.png"
            }
        },
        "datePublished": finalDate,
        "dateModified": finalDate,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": post ? `https://panamarealestatesale.com/${lang}/blog/${post.slug}` : `https://panamarealestatesale.com/${lang}/blog`
        },
        "articleSection": "Real Estate",
        "inLanguage": lang === 'es' ? 'es-PA' : 'en-US'
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
