import { Metadata } from 'next';
import AboutPageContent from '@/components/pages/AboutPageContent';
import { SEO_KEYWORDS_LIST } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'About ExpatRockstars | Premier Panama Real Estate Agency & Relocation Services',
    description: 'Learn why ExpatRockstars is the top panama real estate agency for expats. Specialized in boquete real estate, panama condos on the beach, and the pensionado visa.',
    keywords: 'panama real estate, panama real estate agency, buying real estate in panama, expats in panama, panama relocation services, panama retirement, pensionado visa panama',
};

export default function AboutPage() {
    return <AboutPageContent />;
}
