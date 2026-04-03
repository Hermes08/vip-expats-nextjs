#!/bin/bash
# Quick fix: commit the TestimonialsSection component that was missed
# Run from: /path/to/VIP-Expats-NextJS

set -e
rm -f .git/index.lock

git add \
  "components/home/TestimonialsSection.tsx" \
  "components/home/TrustBar.tsx" \
  "components/home/HeroSection.tsx" \
  "components/pages/PensionadoVisaContent.tsx" \
  "components/pages/FriendlyNationsVisaContent.tsx" \
  "app/[lang]/guides/pensionado-visa-panama/page.tsx" \
  "app/[lang]/guides/friendly-nations-visa-panama/page.tsx" \
  "app/[lang]/blog/best-beaches-panama-expats/page.tsx" \
  "app/sitemap.xml/route.ts" \
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

git commit -m "fix: add TestimonialsSection + all Phase C components

Missing from previous commit:
- components/home/TestimonialsSection.tsx (caused build failure)
- components/home/TrustBar.tsx (updated stats)
- components/home/HeroSection.tsx (social proof stats)
- All 20 relocation content components (dark theme overhaul)
- Guide server wrappers (SEO metadata fix)
- Blog best-beaches page (full rewrite)
- Sitemap update (+11 pages)"

git push origin VIP-next

echo "✅ Fix pushed — Netlify rebuild triggered."
