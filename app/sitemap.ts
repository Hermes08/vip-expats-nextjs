import { MetadataRoute } from 'next';

const baseUrl = 'https://www.panamarealestatesale.com';
const locales = ['en', 'es'];

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

interface SitemapPage {
    path: string;
    changeFrequency: ChangeFrequency;
    priority: number;
}

const pages: SitemapPage[] = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/contacto', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/tours', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/blog/cost-of-living-panama-vs-us', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/blog/panama-golden-visa-2026', changeFrequency: 'monthly', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [];

    for (const locale of locales) {
        for (const page of pages) {
            entries.push({
                url: `${baseUrl}/${locale}${page.path}`,
                lastModified: new Date(),
                changeFrequency: page.changeFrequency,
                priority: page.priority,
            });
        }
    }

    return entries;
}
