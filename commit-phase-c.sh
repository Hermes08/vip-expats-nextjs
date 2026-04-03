#!/bin/bash
# Phase C Deploy Script — Full Site Overhaul
# Usage: cd /path/to/VIP-Expats-NextJS && bash commit-phase-c.sh

set -e
echo "🔧 Staging Phase C changes..."

rm -f .git/index.lock .git/HEAD.lock

# Homepage & core components
git add \
  "app/[lang]/page.tsx" \
  "components/home/HeroSection.tsx" \
  "components/home/TrustBar.tsx" \
  "components/home/TestimonialsSection.tsx"

# SEO guide server wrappers
git add \
  "app/[lang]/guides/pensionado-visa-panama/page.tsx" \
  "components/pages/PensionadoVisaContent.tsx" \
  "app/[lang]/guides/friendly-nations-visa-panama/page.tsx" \
  "components/pages/FriendlyNationsVisaContent.tsx"

# Sitemap
git add "app/sitemap.xml/route.ts"

# Blog
git add "app/[lang]/blog/best-beaches-panama-expats/page.tsx"

# All relocation content components
git add \
  "components/pages/RelocationChecklistContent.tsx" \
  "components/pages/RelocationCostContent.tsx" \
  "components/pages/RelocationDigitalNomadContent.tsx" \
  "components/pages/RelocationEarlyRetirementContent.tsx" \
  "components/pages/RelocationFamiliesContent.tsx" \
  "components/pages/RelocationFriendlyNationsContent.tsx" \
  "components/pages/RelocationGuidesContent.tsx" \
  "components/pages/RelocationHubContent.tsx" \
  "components/pages/RelocationLGBTQContent.tsx" \
  "components/pages/RelocationLawyersContent.tsx" \
  "components/pages/RelocationLawyersDirectoryContent.tsx" \
  "components/pages/RelocationLegalContent.tsx" \
  "components/pages/RelocationPensionadoContent.tsx" \
  "components/pages/RelocationPricingContent.tsx" \
  "components/pages/RelocationQualifiedInvestorContent.tsx" \
  "components/pages/RelocationReviewsContent.tsx" \
  "components/pages/RelocationToursContent.tsx" \
  "components/pages/RelocationVisasContent.tsx" \
  "components/pages/RelocationWeatherContent.tsx" \
  "components/pages/RelocationWorkPermitContent.tsx"

git commit -m "feat(ux): Phase C — full relocation overhaul + testimonials + SEO

HOMEPAGE
- feat: add TestimonialsSection (3 authentic client stories: retiree,
  digital nomad, investor) between Developments and Why Us sections
- feat: homepage now 8 sections (Hero→Trust→Listings→Developments→
  Testimonials→Why Us→LeadMagnet→FAQ)
- fix(hero): swap 'Discovery Tours' CTA → 'Free Consultation' (lower friction)
- feat(hero): above-fold social proof stats (200+ properties, 7+ years, 100% USD)
- fix(trustbar): update stats to be consistent with hero (200+, 7+, 500+, 100% USD)
  and replace inline styles with brand tokens

RELOCATION PAGES (20 components fixed)
- fix(relocation): convert all 'bg-white text-brand-950' roots to dark theme
- fix(relocation): text-9xl → text-6xl max (was overflowing on all mobile screens)
- fix(relocation): py-32/py-48 → py-14/py-16 (was wasting ~300px per section)
- fix(relocation): rounded-[5rem]/[4rem]/[3rem] → rounded-3xl/2xl/xl
- fix(relocation): bg-neutral-* → bg-black / bg-white/5 (consistent dark palette)
- fix(relocation): border-neutral-* → border-white/10
- fix(relocation): text-neutral-*/text-gray-* → text-slate-400
- fix(relocation): px-16 py-8 buttons → px-8 py-4 (site standard)
- fix(relocation): p-12/p-16 cards → p-6/p-8

SEO
- fix(seo): pensionado guide — server wrapper with full generateMetadata
  (was 'use client', completely invisible to Google)
- fix(seo): friendly-nations guide — same server wrapper fix
- feat(seo): sitemap.xml + 11 additional pages (new guides, relocation sub-pages)
- feat(blog): rewrite best-beaches-panama-expats from 15-line stub to full
  1,200-word article with metadata, structured data, and internal links"

echo "🚀 Pushing to VIP-next..."
git push origin VIP-next

echo "✅ Phase C deployed. Netlify auto-deploy triggered."
echo ""
echo "⏰ Midnight tasks firing now (12:00 AM Thursday):"
echo "   · vip-conversion-optimization"
echo "   · vip-seo-audit-sprint"
echo "   · vip-testimonials-cta-sprint"
echo "   · vip-mobile-qa-sprint"
