/**
 * WordPress Headless CMS Client
 * ─────────────────────────────
 * Connects to WordPress REST API on panamarealestatesale.com
 * Maps WP data to the existing BlogPost / Project types.
 *
 * Set NEXT_PUBLIC_WORDPRESS_URL in your .env.local and Netlify dashboard.
 * If not set, all functions return empty arrays silently — Supabase/static fallback takes over.
 */

import { BlogPost, Project } from './types';

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL?.replace(/\/$/, '') ?? '';

// ─── Raw WP API Types ─────────────────────────────────────────────────────────

interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: { source_url: string; alt_text?: string }[];
    'wp:term'?: { id: number; name: string; slug: string }[][];
  };
  acf?: Record<string, unknown>; // ACF fields if ACF REST API enabled
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_image?: { url: string }[];
  };
}

interface WPCustomPost extends WPPost {
  // Custom fields for CPTs (properties, projects)
  meta?: Record<string, unknown>;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&#\d+;/g, '').trim();
}

function formatDate(isoDate: string): string {
  try {
    return new Date(isoDate).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  } catch {
    return isoDate;
  }
}

function getCategoryName(post: WPPost): string {
  const terms = post._embedded?.['wp:term']?.[0];
  if (terms && terms.length > 0) return terms[0].name;
  return 'Real Estate';
}

function getFeaturedImage(post: WPPost): string {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  return media?.source_url ?? 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80';
}

// ─── Is WordPress configured? ─────────────────────────────────────────────────

export function isWordPressConfigured(): boolean {
  return !!(WP_URL && WP_URL.startsWith('http') && !WP_URL.includes('placeholder'));
}

// ─── Fetch WP Posts → BlogPost[] ─────────────────────────────────────────────

/**
 * Fetches published posts from WP REST API and maps them to BlogPost format.
 * Returns [] if WP is not configured or unreachable.
 *
 * @param lang  - 'en' | 'es' — if Polylang is active, fetches the right language
 * @param perPage - max posts to fetch (default 50)
 */
export async function fetchWPBlogPosts(
  lang?: 'en' | 'es',
  perPage = 50
): Promise<BlogPost[]> {
  if (!isWordPressConfigured()) return [];

  try {
    // If Polylang plugin is installed, add ?lang= parameter
    const langParam = lang ? `&lang=${lang}` : '';
    const url = `${WP_URL}/wp-json/wp/v2/posts?_embed&per_page=${perPage}&status=publish${langParam}`;

    const res = await fetch(url, {
      next: { revalidate: 300 }, // cache 5 min
      headers: { 'Accept': 'application/json' },
    });

    if (!res.ok) {
      console.warn(`[WP] Posts fetch failed: ${res.status} ${res.statusText}`);
      return [];
    }

    const posts: WPPost[] = await res.json();

    return posts.map((post): BlogPost => ({
      id: `wp-${post.id}`,
      slug: post.slug,
      title: {
        en: stripHtml(post.title.rendered),
        es: stripHtml(post.title.rendered), // WP manages translation via Polylang/WPML
      },
      excerpt: {
        en: stripHtml(post.excerpt.rendered),
        es: stripHtml(post.excerpt.rendered),
      },
      content: {
        en: post.content.rendered, // raw HTML — rendered in BlogPostContent via dangerouslySetInnerHTML
        es: post.content.rendered,
      },
      date: formatDate(post.date),
      image: getFeaturedImage(post),
      category: getCategoryName(post),
      // Store original WP URL for canonical/linking if needed
      ...(post.yoast_head_json && {
        sections: [{
          title: post.yoast_head_json.title ?? '',
          content: post.yoast_head_json.description ?? '',
          keywords: [],
        }],
      }),
    }));
  } catch (err) {
    console.warn('[WP] fetchWPBlogPosts error:', err);
    return [];
  }
}

/**
 * Fetches a single WP post by slug.
 * Returns null if not found or WP not configured.
 */
export async function fetchWPPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isWordPressConfigured()) return null;

  try {
    const url = `${WP_URL}/wp-json/wp/v2/posts?_embed&slug=${encodeURIComponent(slug)}&status=publish`;
    const res = await fetch(url, {
      next: { revalidate: 300 },
      headers: { 'Accept': 'application/json' },
    });

    if (!res.ok) return null;

    const posts: WPPost[] = await res.json();
    if (!posts.length) return null;

    const post = posts[0];
    return {
      id: `wp-${post.id}`,
      slug: post.slug,
      title: {
        en: stripHtml(post.title.rendered),
        es: stripHtml(post.title.rendered),
      },
      excerpt: {
        en: stripHtml(post.excerpt.rendered),
        es: stripHtml(post.excerpt.rendered),
      },
      content: {
        en: post.content.rendered,
        es: post.content.rendered,
      },
      date: formatDate(post.date),
      image: getFeaturedImage(post),
      category: getCategoryName(post),
    };
  } catch (err) {
    console.warn('[WP] fetchWPPostBySlug error:', err);
    return null;
  }
}

// ─── Fetch WP Custom Post Types → Project[] ───────────────────────────────────

/**
 * Fetches 'property' or 'project' CPTs from WP REST API.
 * Requires CPTs registered with show_in_rest: true + ACF fields.
 * Returns [] if CPT not found or WP not configured.
 */
export async function fetchWPProjects(perPage = 50): Promise<Partial<Project>[]> {
  if (!isWordPressConfigured()) return [];

  try {
    const url = `${WP_URL}/wp-json/wp/v2/project?_embed&per_page=${perPage}&status=publish`;
    const res = await fetch(url, {
      next: { revalidate: 300 },
      headers: { 'Accept': 'application/json' },
    });

    if (!res.ok) {
      // CPT might not exist yet — silent fail
      if (res.status !== 404) {
        console.warn(`[WP] Projects CPT fetch: ${res.status}`);
      }
      return [];
    }

    const posts: WPCustomPost[] = await res.json();
    const acfFields = (post: WPCustomPost) => (post.acf ?? post.meta ?? {}) as Record<string, unknown>;

    return posts.map((post): Partial<Project> => ({
      id: `wp-${post.id}`,
      slug: post.slug,
      name: {
        en: stripHtml(post.title.rendered),
        es: String(acfFields(post)['name_es'] ?? stripHtml(post.title.rendered)),
      },
      description: {
        en: stripHtml(post.excerpt.rendered),
        es: String(acfFields(post)['description_es'] ?? stripHtml(post.excerpt.rendered)),
      },
      priceFrom: Number(acfFields(post)['price_from'] ?? 0),
      images: [getFeaturedImage(post)],
      status: (acfFields(post)['status'] as Project['status']) ?? 'Ready to Move',
      type: [(acfFields(post)['type'] as Project['type'][0]) ?? 'Condo'],
      zone: [(acfFields(post)['zone'] as Project['zone'][0]) ?? 'City'],
      location: {
        en: String(acfFields(post)['location'] ?? 'Panama'),
        es: String(acfFields(post)['location_es'] ?? acfFields(post)['location'] ?? 'Panamá'),
      },
      beds: String(acfFields(post)['beds'] ?? ''),
      baths: String(acfFields(post)['baths'] ?? ''),
      sqft: String(acfFields(post)['sqft'] ?? ''),
      unitsAvailable: Number(acfFields(post)['units_available'] ?? 0),
      keywords: [],
      highlights: { en: [], es: [] },
      amenities: { en: [], es: [] },
      faqs: [],
      h1Title: {
        en: stripHtml(post.title.rendered),
        es: String(acfFields(post)['name_es'] ?? stripHtml(post.title.rendered)),
      },
      marketAnalysis: { en: '', es: '' },
    }));
  } catch (err) {
    console.warn('[WP] fetchWPProjects error:', err);
    return [];
  }
}

// ─── Merge helpers ────────────────────────────────────────────────────────────

/**
 * Merges WP blog posts with existing posts (Supabase + static).
 * WP posts with duplicate slugs are skipped (Supabase takes priority).
 */
export function mergeWPBlogPosts(existing: BlogPost[], wpPosts: BlogPost[]): BlogPost[] {
  const existingSlugs = new Set(existing.map(p => p.slug));
  const newFromWP = wpPosts.filter(p => !existingSlugs.has(p.slug));
  return [...existing, ...newFromWP];
}

/**
 * Merges WP projects with existing projects.
 * WP projects with duplicate slugs/IDs are skipped.
 */
export function mergeWPProjects(existing: Project[], wpProjects: Partial<Project>[]): Project[] {
  const existingSlugs = new Set(existing.map(p => p.slug));
  const newFromWP = wpProjects.filter(p => p.slug && !existingSlugs.has(p.slug)) as Project[];
  return [...existing, ...newFromWP];
}
