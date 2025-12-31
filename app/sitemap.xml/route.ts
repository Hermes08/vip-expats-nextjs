import { PROJECTS, BLOG_POSTS } from '@/lib/constants';

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

export async function GET() {
    const baseUrl = 'https://panamarealestatesale.com';
    const languages = ['en', 'es'];

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
                    const playerLoc = `https://www.youtube.com/watch?v=${videoId}`;

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

    xml += `
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
