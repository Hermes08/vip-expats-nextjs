const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

async function publishPosts() {
    try {
        const envPath = path.resolve(process.cwd(), '.env.local');
        if (!fs.existsSync(envPath)) {
            console.error("❌ .env.local file not found!");
            return;
        }

        const envContent = fs.readFileSync(envPath, 'utf8');
        const envVars = {};
        envContent.split('\n').forEach(line => {
            const parts = line.split('=');
            if (parts.length >= 2) {
                const key = parts[0].trim();
                const value = parts.slice(1).join('=').trim().replace(/^["']|["']$/g, '');
                envVars[key] = value;
            }
        });

        const url = envVars.NEXT_PUBLIC_SUPABASE_URL;
        const key = envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!url || !key) {
            console.error("❌ Supabase URL or Key missing!");
            return;
        }

        const supabase = createClient(url, key);

        const newPosts = [
            {
                id: 'blog-investment-opportunities-2026',
                slug: 'panama-investment-opportunities',
                title: {
                    en: 'Panama Real Estate Investment Opportunities 2026',
                    es: 'Oportunidades de Inversión Inmobiliaria en Panamá 2026'
                },
                excerpt: {
                    en: 'Discover why sophisticated investors are moving capital into Panama\'s stable, dollarized property market this year.',
                    es: 'Descubra por qué los inversores sofisticados están moviendo capital al estable mercado inmobiliario dolarizado de Panamá este año.'
                },
                content: {
                    en: 'Explore the best Panama real estate investment opportunities for 2026. From beachfront properties to Panama City luxury, learn why expats choose Panama for retirement and lifestyle.',
                    es: 'Explore las mejores oportunidades de inversión en bienes raíces en Panamá para 2026. Desde propiedades frente al mar hasta el lujo de la Ciudad de Panamá.'
                },
                date: 'March 9, 2026',
                image: 'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=800&q=80',
                category: 'Investment'
            },
            {
                id: 'blog-beachfront-lifestyle-2026',
                slug: 'panama-real-estate-beachfront-retirement',
                title: {
                    en: 'Beachfront Living & Retirement: The Panama Lifestyle Guide',
                    es: 'Vida Frente al Mar y Jubilación: Guía del Estilo de Vida en Panamá'
                },
                excerpt: {
                    en: 'Beyond the investment: Why thousands of expats choose the turquoise waters of Panama for their next chapter.',
                    es: 'Más allá de la inversión: por qué miles de expatriados eligen las aguas turquesas de Panamá para su próximo capítulo.'
                },
                content: {
                    en: 'The ultimate guide to beachfront living and retirement in Panama. Discover top coastal communities, expat lifestyle benefits, and investment-grade real estate.',
                    es: 'La guía definitiva para la vida frente al mar y la jubilación en Panamá. Descubra las mejores comunidades costeras y beneficios para expatriados.'
                },
                date: 'March 9, 2026',
                image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80',
                category: 'Lifestyle'
            }
        ];

        console.log("Upserting posts to Supabase...");
        const { data, error } = await supabase.from('blog_posts').upsert(newPosts);

        if (error) {
            console.error("❌ Failed to upsert posts:", error.message);
        } else {
            console.log("✅ Successfully published posts to Supabase!");
        }

    } catch (err) {
        console.error("Unexpected error:", err);
    }
}

publishPosts();
