export type Language = 'en' | 'es' | 'pt' | 'de' | 'zh';

// ── Shared enums used by both Projects and Listings ───────────────────────────
export type Zone = 'Beach' | 'Mountain' | 'Caribbean' | 'City' | 'Interior';
export type PropertyType = 'Condo' | 'House' | 'Resort' | 'Villa' | 'Land' | 'Commercial' | 'Penthouse';

// ── Project-specific (new developments: presale, under construction) ──────────
export type ProjectZone = Zone;        // alias — keeps backward compat
export type ProjectType = PropertyType; // alias — keeps backward compat
export type ProjectStatus = 'Presale' | 'Under Construction' | 'Ready to Move';

// ── Listing-specific (existing / resale properties) ───────────────────────────
export type ListingStatus = 'For Sale' | 'For Rent' | 'Sold' | 'Rented';

/**
 * Listing — individual property for sale or rent (resale, existing homes, etc.)
 * Stored in Supabase `listings` table. Managed via MCP.
 *
 * Separate from Project (new developments) so both can have
 * different detail pages, filters, and search UX.
 */
export interface Listing {
  id: string;
  slug: string;
  ref?: string;                        // e.g. "PLS-20051" — agent reference
  title: Record<string, string>;       // { en: '...', es: '...' }
  description: Record<string, string>;
  excerpt?: Record<string, string>;    // Short summary for cards
  price: number;                       // in USD
  pricePerSqft?: number;
  status: ListingStatus;
  type: PropertyType;
  zone: Zone;
  // Location
  city: string;                        // e.g. "Panama City", "Boquete"
  neighborhood?: string;               // e.g. "Punta Pacifica", "El Cangrejo"
  province?: string;                   // e.g. "Panamá", "Chiriquí"
  // Details
  beds?: number;
  baths?: number;
  sqft?: number;
  lotSqft?: number;
  yearBuilt?: number;
  // Media
  images: string[];
  videoUrl?: string;
  // Features
  amenities?: string[];
  features?: string[];
  featured?: boolean;
  // Contact
  agentName?: string;
  agentWhatsapp?: string;
  agentEmail?: string;
  // SEO
  metaTitle?: Record<string, string>;
  metaDescription?: Record<string, string>;
  keywords?: string[];
  // Timestamps
  createdAt?: string;
  updatedAt?: string;
}

export interface SEOSection {
  title: string;
  content: string;
  keywords: string[];
}

export interface FloorPlan {
  name: Record<string, string>;
  size: string; // e.g., "97 m2 (1044.1 sq.ft)"
  price: number;
  image: string;
  characteristics: Record<string, string[]>;
}

export interface Project {
  id: string;
  slug: string;
  name: Record<string, string>;
  location: Record<string, string>;
  type: ProjectType[];
  zone: ProjectZone[];
  status: ProjectStatus;
  h1Title: Record<string, string>;
  description: Record<string, string>;
  marketAnalysis: Record<string, string>;
  highlights: Record<string, string[]>;
  keywords: string[];
  images: string[];
  amenities: Record<string, string[]>;
  priceFrom: number;
  beds: string;
  baths: string;
  sqft: string;
  unitsAvailable: number;
  faqs: { question: string; answer: string }[];
  seoContent?: SEOSection[];
  didYouKnow?: string[];
  longDescription?: Record<string, string>;
  locationAnalysis?: Record<string, string>;
  investmentAnalysis?: Record<string, string>;
  buyerProfile?: Record<string, string>;
  residencyInfo?: Record<string, string>;
  servicesCTA?: Record<string, string>;
  floorplans?: FloorPlan[];
  videoUrl?: string; // YouTube/Vimeo or self-hosted .mp4
  showFloorplans?: boolean;
  showVideo?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  projectId?: string;
  title: Record<string, string>;
  excerpt: Record<string, string>;
  content: Record<string, string>;
  date: string;
  image: string;
  category: string;
  sections?: SEOSection[];
}

export interface PodcastEpisode {
  id: string;
  slug: string;
  title: Record<string, string>;
  description: Record<string, string>;
  videoId: string;
  duration: string;
  publishDate: string;
  topics: string[];
  host: string;
  guest?: string;
  takeaways?: Record<string, string[]>;
  transcript?: Record<string, string>;
}

export interface QuizSubmission {
  id: string;
  timestamp: string;
  firstName: string;
  lastName: string;
  email: string;
  answers: Record<string, string>;
  recommendedNeighborhoods: string[];
}

export interface ContentDictionary {
  [lang: string]: any;
}