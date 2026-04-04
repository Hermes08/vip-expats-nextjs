import { PROJECTS, BLOG_POSTS, PODCAST_EPISODES } from '@/lib/constants';

function escapeXml(unsafe: string): string {
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
        return c;
    });
}

function getVideoId(url: string): string | undefined {
    if (!url) return undefined;
    if (url.includes('v=')) {
        return url.split('v=')[1]?.split('&')[0];
    }
    return url.split('/').pop()?.split('?')[0];
}

function parseDurationToSeconds(durationStr: string): number {
    if (!durationStr) return 0;
    const parts = durationStr.split(':').map(Number);
    if (parts.length === 3) {
        return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    if (parts.length === 2) {
        return parts[0] * 60 + parts[1];
    }
    return 0;
}

export async function GET() {
    const baseUrl = 'https://panamarealestatesale.com';
    const languages = ['en', 'es', 'pt', 'de'];

    // Static pages
    const staticPages = [
        '',
        '/propiedades',
        '/proyectos',
        '/panama-real-estate',
        '/about',
        '/blog',
        '/contacto',
        '/tours',
        '/quiz',
        '/podcast',
        '/relocation',
        '/relocation/tours',
        '/relocation/visas',
        '/relocation/visas/pensionado',
        '/relocation/visas/friendly-nations',
        '/relocation/visas/qualified-investor',
        '/relocation/legal',
        '/relocation/cost',
        '/relocation/cost-of-living',
        '/relocation/guides',
        '/relocation/guides/boquete',
        '/relocation/guides/coronado',
        '/relocation/reviews',
        '/guides/pensionado-visa-panama',
        '/guides/friendly-nations-visa-panama',
        '/guides/expat-living-in-panama',
        '/guides/cost-of-living-panama-2026',
        '/guides/best-areas-retire-panama',
        '/guides/panama-real-estate-for-expats',
        '/guides/buying-property-panama-us-citizens',
        '/guides/panama-city-condos-for-sale',
        '/guides/safest-neighborhoods-panama-city',
        '/locations/bocas-del-toro',
        '/locations/boquete-real-estate',
        '/relocation/early-retirement',
        '/relocation/digital-nomad',
        '/relocation/families',
        '/relocation/lgbtq-expats',
        '/relocation/weather',
        '/relocation/legal/checklist',
        '/relocation/legal/work-permit',
        '/relocation/legal/lawyers',
        '/relocation/legal/lawyers-directory',
        '/relocation/guides/boquete-vs-coronado',
        '/proyectos/panama-city-real-estate',
        '/guides/panama-real-estate',
        '/guides/how-to-move-to-panama',
        // New SEO articles
        '/blog/boquete-panama-real-estate',
        '/blog/bocas-del-toro-real-estate',
        '/blog/panama-retirement-communities',
        '/blog/panama-vs-costa-rica-retirement',
        '/blog/pros-cons-retiring-panama',
        '/blog/moving-to-panama-from-florida',
        '/blog/moving-to-panama-from-texas',
        '/blog/panama-deutsche-auswanderer',
        '/blog/panama-tax-benefits-foreigners-2026',
        '/blog/panama-cost-of-living-2026',
        // Tier 1 comparison + high-intent articles
        '/blog/panama-vs-mexico-retirement',
        '/blog/panama-vs-colombia-retirement',
        '/blog/panama-vs-portugal-retirement',
        '/blog/panama-vs-spain-retirement',
        '/blog/panama-vs-belize-retirement',
        '/blog/real-cost-of-moving-to-panama',
        '/blog/panama-healthcare-costs-2026',
        '/blog/panama-for-digital-nomads-2026',
        '/blog/how-to-move-to-panama-step-by-step-2026',
        '/blog/panama-property-buying-process-guide',
        // Niche audience articles
        '/blog/panama-for-families-with-children',
        '/blog/panama-banking-non-residents-guide',
        '/blog/best-neighborhoods-panama-city-expats',
        // Spanish-language Latin American articles
        '/blog/vivir-en-panama-venezolanos',
        '/blog/panama-para-colombianos-guia-2026',
        '/blog/panama-para-argentinos-guia-2026',
        // Batch 3 — Daily Life & Practical Expat Guides
        '/blog/panama-sim-card-guide',
        '/blog/internet-providers-panama-expats',
        '/blog/getting-around-panama-city-guide',
        '/blog/supermarkets-shopping-panama-expats',
        '/blog/panama-drivers-license-foreigners',
        '/blog/moving-to-panama-with-pets',
        '/blog/panama-weather-rainy-season-guide',
        '/blog/how-to-rent-apartment-panama',
        '/blog/sending-money-panama-wire-transfer',
        '/blog/atm-cash-panama-guide',
        '/blog/what-to-pack-moving-to-panama',
        '/blog/apostille-documents-panama-visa',
        '/blog/start-business-panama-foreigners',
        '/blog/moving-to-panama-from-canada',
        '/blog/moving-to-panama-from-uk',
        '/blog/panama-food-guide-expats',
        '/blog/panama-para-mexicanos-guia-2026',
        '/blog/panama-para-peruanos-guia-2026',
        '/blog/panama-para-ecuatorianos-guia-2026',
        '/blog/panama-para-brasileiros-guia-2026',
    ];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;

    // 1. Root and Static Pages
    xml += `
    <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>`;

    languages.forEach(lang => {
        staticPages.forEach(page => {
            if (page === '') return; // Root handled above (generic) - or should we have /en and /es? 
            // Usually root / is the main, and /en /es are variations. 
            // Let's explicitly list /en and /es as per previous sitemap.
            const url = `${baseUrl}/${lang}${page}`;
            xml += `
    <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
        <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>`;
        });
    });

    // 2. Project Pages (With Video Tags)
    languages.forEach(lang => {
        PROJECTS.forEach(project => {
            const url = `${baseUrl}/${lang}/proyectos/${project.slug}`;
            const lastMod = new Date().toISOString();

            let videoBlock = '';
            if (project.videoUrl) {
                const videoId = getVideoId(project.videoUrl);
                if (videoId) {
                    const title = escapeXml(project.name[lang as 'en' | 'es'] || project.name['en']);
                    const desc = escapeXml(project.description[lang as 'en' | 'es'] || project.description['en']);
                    const thumbLoc = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
                    const playerLoc = `https://www.youtube.com/embed/${videoId}`;

                    videoBlock = `
        <video:video>
            <video:title>${title}</video:title>
            <video:description>${desc}</video:description>
            <video:thumbnail_loc>${thumbLoc}</video:thumbnail_loc>
            <video:player_loc>${playerLoc}</video:player_loc>
        </video:video>`;
                }
            }

            xml += `
    <url>
        <loc>${url}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>${videoBlock}
    </url>`;
        });
    });


    // 3. Blog Posts
    languages.forEach(lang => {
        BLOG_POSTS.forEach(post => {
            const url = `${baseUrl}/${lang}/blog/${post.slug}`;
            const lastMod = new Date().toISOString();
            xml += `
    <url>
        <loc>${url}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>`;
        });
    });

    // 4. Podcast Episodes (With Video Tags)
    languages.forEach(lang => {
        PODCAST_EPISODES.forEach(episode => {
            const url = `${baseUrl}/${lang}/podcast/${episode.slug}`;
            const lastMod = episode.publishDate ? new Date(episode.publishDate).toISOString() : new Date().toISOString();

            const title = escapeXml(episode.title[lang as 'en' | 'es'] || episode.title['en']);
            const desc = escapeXml(episode.description[lang as 'en' | 'es'] || episode.description['en']);
            const thumbLoc = `https://i.ytimg.com/vi/${episode.videoId}/maxresdefault.jpg`;
            const playerLoc = `https://www.youtube.com/embed/${episode.videoId}`;
            const durationSeconds = parseDurationToSeconds(episode.duration);

            const videoBlock = `
        <video:video>
            <video:title>${title}</video:title>
            <video:description>${desc}</video:description>
            <video:thumbnail_loc>${thumbLoc}</video:thumbnail_loc>
            <video:player_loc>${playerLoc}</video:player_loc>
            <video:publication_date>${lastMod}</video:publication_date>
            <video:duration>${durationSeconds}</video:duration> 
        </video:video>`;

            xml += `
    <url>
        <loc>${url}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>${videoBlock}
    </url>`;
        });
    });

    xml += `
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
