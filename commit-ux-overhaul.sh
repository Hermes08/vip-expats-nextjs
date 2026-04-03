#!/bin/bash
set -e
cd /Users/davidaguirre/VIP-Expats-NextJS

echo "🔓 Cleaning git locks..."
rm -f .git/index.lock .git/HEAD.lock

echo "📡 Fetching origin..."
git fetch origin

echo "🔀 Switching to VIP-next..."
git checkout VIP-next

echo "⬇️  Syncing with remote..."
git pull origin VIP-next --ff-only 2>/dev/null || git pull origin VIP-next

echo "📂 Staging UX/UI overhaul files..."
git add "app/[lang]/page.tsx"
git add "app/[lang]/ClientSections.tsx"
git add "app/[lang]/propiedades/[slug]/page.tsx"
git add components/Footer.tsx
git add components/Navbar.tsx
git add components/home/HeroSection.tsx

echo "💬 Committing..."
git commit -m "refactor(ux): complete UX/UI overhaul — compact layout, mobile-first design

- Homepage: removed 2 verbose sections (SEO wall + Journey duplication)
- Homepage: cut all py-48/py-40/py-32 to py-14/py-12/py-10 (~3000px saved)
- Homepage: scaled headings from text-9xl to text-4xl/5xl max
- Homepage: tightened all gap/mb/padding, card padding p-16→p-6
- Hero: h1 text-9xl → text-4xl sm:text-6xl, button gap-12 → gap-4
- Navbar: transparent mode py-8 → py-4, gradient overlay for readability
- Property detail: h1 text-6xl → text-4xl, price text-5xl → text-3xl
- Footer: pt-24 → pt-12, spacing tightened throughout
- Fix: moved next/dynamic(ssr:false) to ClientSections wrapper (Server Component compat)

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"

echo "🚀 Pushing to VIP-next..."
git push origin VIP-next

echo "✅ Done! Netlify will auto-deploy in ~1 minute."
echo "   Visit: https://panamarealestatesale.com/en"
