#!/bin/bash
# VIP Expats — Terminar push de los 3 archivos restantes a VIP-next
# Ejecutar desde: /Users/davidaguirre/VIP-Expats-NextJS

set -e

echo "🔓 Limpiando locks..."
rm -f .git/HEAD.lock .git/index.lock

echo "📡 Fetcheando origin..."
git fetch origin

echo "🔀 Cambiando a VIP-next..."
git checkout VIP-next

echo "⬇️  Sincronizando con remote..."
git pull origin VIP-next

echo "📂 Copiando 3 archivos pendientes desde audit-and-ux-improvements..."
git checkout audit-and-ux-improvements -- components/Navbar.tsx
git checkout audit-and-ux-improvements -- "app/[lang]/propiedades/[slug]/page.tsx"
git checkout audit-and-ux-improvements -- "app/[lang]/page.tsx"

echo "📦 Staged:"
git status --short

echo "✅ Commiteando..."
git add components/Navbar.tsx "app/[lang]/propiedades/[slug]/page.tsx" "app/[lang]/page.tsx"
git commit -m "feat: Navbar propiedades link, property detail page, updated homepage"

echo "🚀 Pusheando a VIP-next..."
git push origin VIP-next

echo ""
echo "✅ ¡Listo! Netlify debería auto-deployar en ~1 minuto."
echo "   Verifica en: https://app.netlify.com/sites/jocular-zabaione-f20f17/deploys"
