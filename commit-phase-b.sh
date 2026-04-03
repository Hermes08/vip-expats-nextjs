#!/bin/bash
# Phase B Deploy Script — Conversion + SEO Overhaul
# Run from: /path/to/VIP-Expats-NextJS on your Mac terminal
# Usage: cd /path/to/VIP-Expats-NextJS && bash commit-phase-b.sh

set -e

echo "🔧 Staging Phase B changes..."

# Remove any stale git locks
rm -f .git/index.lock .git/HEAD.lock

git add \
  "app/[lang]/page.tsx" \
  "components/home/HeroSection.tsx" \
  "app/[lang]/guides/pensionado-visa-panama/page.tsx" \
  "components/pages/PensionadoVisaContent.tsx" \
  "app/[lang]/guides/friendly-nations-visa-panama/page.tsx" \
  "components/pages/FriendlyNationsVisaContent.tsx" \
  "app/sitemap.xml/route.ts"

git commit -m "feat(conversion): Phase B — homepage funnel + SEO + hero stats

- feat(homepage): reduce from 12 → 7 sections (remove Video, Neighborhoods,
  Investment ROI, Buying Process, Final CTA redundancy)
- feat(homepage): merge market stats into Why section as 3 trust bullets
- feat(hero): replace 'Discovery Tours' CTA with 'Free Consultation'
  (lower friction, higher conversion intent)
- feat(hero): add above-fold social proof stats (200+ properties,
  7+ years experience, 100% USD)
- fix(seo): wrap 'use client' pensionado guide in server component
  to enable generateMetadata export (was invisible to Google)
- fix(seo): same server wrapper fix for friendly-nations-visa guide
- feat(seo): add 8 missing pages to sitemap.xml/route.ts
  (new guides, relocation sub-pages, panama-city-real-estate)
- perf: remove unused imports (VideoThumbnail, VideoSchema, Image,
  TrendingUp, Star) from homepage"

echo "🚀 Pushing to VIP-next..."
git push origin VIP-next

echo "✅ Done! Netlify auto-deploy triggered."
echo ""
echo "📋 Scheduled tasks for tomorrow:"
echo "   10:00 AM — SEO audit sprint"
echo "   12:00 PM — Testimonials + WhatsApp CTA sprint"
echo "   02:00 PM — Mobile QA sprint"
