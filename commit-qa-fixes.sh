#!/bin/bash
# QA Bug Fix Deploy Script — April 2026
# Run from: /path/to/VIP-Expats-NextJS on your Mac terminal

set -e

echo "🔧 Staging QA fixes..."

# Remove any stale git locks first
rm -f .git/index.lock .git/HEAD.lock

git add \
  components/ScrollAnimationObserver.tsx \
  components/Footer.tsx \
  components/pages/ContactPageContent.tsx \
  components/pages/ProjectsPageContent.tsx \
  components/ProjectCard.tsx \
  components/ui/VideoThumbnail.tsx \
  components/listings/ListingsGrid.tsx \
  "app/[lang]/ClientSections.tsx"

git commit -m "fix(ux): QA pass — 10 bugs fixed post-overhaul

- fix(reveal-on-scroll): threshold 0 + rootMargin + 3x delayed re-observe
  to catch dynamic content (FeaturedListings, ProjectCards)
- fix(footer): remove API INTERACTION link from public nav
- fix(footer): de-emphasize admin link (invisible to casual visitors)
- fix(contact): dark theme form section (bg-brand-950/bg-brand-900)
- fix(contact): translate all Spanish labels to English on /en route
- fix(contact): reduce hero heading text-9xl → text-7xl max
- fix(projects): reduce hero heading text-9xl → text-7xl + tighter spacing
- fix(skeleton): bg-gray-200 → bg-white/5 (visible on dark background)
- fix(video): gradient fallback when YouTube thumbnail is blocked by CSP
- fix(project-card): h3 text-3xl → text-xl md:text-2xl (compact cards)
- fix(listings): remove SplitText from h1 (eliminates mid-render flash)
- fix(listings): pb-24 → pb-10 (remove excessive bottom padding)"

echo "🚀 Pushing to VIP-next..."
git push origin VIP-next

echo "✅ Done! Netlify auto-deploy triggered."
