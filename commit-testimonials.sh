#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# commit-testimonials.sh
# Stages and commits the testimonials + WhatsApp pulse changes to VIP-next
# ─────────────────────────────────────────────────────────────────────────────

set -e

BRANCH="VIP-next"

# ── 1. Confirm we're on the right branch ─────────────────────────────────────
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "$BRANCH" ]; then
  echo "⚠️  Not on $BRANCH (currently on $CURRENT_BRANCH)."
  echo "    Switching to $BRANCH…"
  git checkout "$BRANCH"
fi

# ── 2. Stage the relevant files ───────────────────────────────────────────────
echo "📂 Staging changed files…"
git add components/home/TestimonialsSection.tsx
git add components/WhatsAppFloat.tsx
git add app/\[lang\]/page.tsx

# ── 3. Show what's staged ─────────────────────────────────────────────────────
echo ""
echo "📋 Staged changes:"
git diff --cached --stat
echo ""

# ── 4. Commit ─────────────────────────────────────────────────────────────────
git commit -m "feat: add testimonials section + WhatsApp pulse CTA

- Add TestimonialsSection to homepage (position 5, after VIP Developments)
  - 3 authentic expat testimonials covering Retirees, Digital Nomads, Investors
  - Star ratings, visa type, location context, glass-card dark theme
  - reveal-on-scroll + stagger animations
- Wire TestimonialsSection into app/[lang]/page.tsx
- Add animate-ping pulse ring to WhatsAppFloat for conversion lift"

echo ""
echo "✅ Committed. Ready to push:"
echo "   git push origin $BRANCH"
