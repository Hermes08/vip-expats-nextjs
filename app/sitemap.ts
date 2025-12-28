import { MetadataRoute } from 'next';
import { PROJECTS, BLOG_POSTS } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://panamarealestatesale.com';
    const languages = ['es', 'en'];

    // Static pages
    const staticPages = [
        '',
        '/proyectos',
        '/about',
        '/blog',
        '/contacto',
        '/tours',
        '/quiz',
    ];

    // Generate URLs for static pages in both languages
    const staticUrls: MetadataRoute.Sitemap = [];

    languages.forEach(lang => {
        staticPages.forEach(page => {
            staticUrls.push({
                url: `${baseUrl}/${lang}${page}`,
                lastModified: new Date(),
                changeFrequency: page === '' ? 'daily' : 'weekly',
                priority: page === '' ? 1.0 : 0.8,
            });
        });
    });

    // Generate URLs for all projects in both languages
    const projectUrls: MetadataRoute.Sitemap = [];

    languages.forEach(lang => {
        PROJECTS.forEach(project => {
            projectUrls.push({
                url: `${baseUrl}/${lang}/proyectos/${project.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.9,
            });
        });
    });

    // Generate URLs for all blog posts in both languages
    const blogUrls: MetadataRoute.Sitemap = [];

    languages.forEach(lang => {
        BLOG_POSTS.forEach(post => {
            blogUrls.push({
                url: `${baseUrl}/${lang}/blog/${post.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });
    });

    // Combine all URLs
    return [
        // Root redirect
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        ...staticUrls,
        ...projectUrls,
        ...blogUrls,
    ];
}
