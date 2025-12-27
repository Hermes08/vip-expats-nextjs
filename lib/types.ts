export type Language = 'en' | 'es' | 'de' | 'zh';
export type ProjectZone = 'Beach' | 'Mountain' | 'Caribbean' | 'City';
export type ProjectType = 'Condo' | 'House' | 'Resort' | 'Villa';
export type ProjectStatus = 'Presale' | 'Under Construction' | 'Ready to Move';

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
  type: ProjectType;
  zone: ProjectZone;
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