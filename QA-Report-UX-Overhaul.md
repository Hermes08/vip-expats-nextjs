# QA Report — UX/UI Overhaul
**Site:** panamarealestatesale.com
**Branch:** VIP-next
**QA Date:** April 1, 2026
**Viewport tested:** 1440×783 (desktop)
**Status:** Post-overhaul, pre-deployment (run `bash commit-ux-overhaul.sh` first)

---

## Summary

The UX overhaul substantially reduced page height and improved typography hierarchy. The build fix (ClientSections wrapper) resolved the Netlify SSR error. Remaining issues fall into 3 tiers:

| Severity | Count | Description |
|----------|-------|-------------|
| 🔴 Critical | 3 | Content invisible, functional bug, or data exposed publicly |
| 🟡 Medium | 6 | Visual inconsistencies or UX friction |
| 🟢 Low | 4 | Polish / minor improvements |

---

## 🔴 Critical Issues

---

### C1 — `reveal-on-scroll` sections stuck at `opacity: 0`
**Pages:** Homepage, Projects, Properties
**Symptom:** Multiple sections (Services cards, Stats, Featured Listings, Project cards in rows 2–3) remain invisible. The IntersectionObserver doesn't trigger when the user fast-scrolls, or the observer fires before the element enters the viewport correctly. This creates 300–600px blank dark voids in the page.

**Evidence:** Screenshot shows "SHOWING 13 VERIFIED ROCKSTAR ASSETS" label followed by a completely dark/empty area until a slow micro-scroll reveals cards.

**Fix:** Either:
- Add `threshold: 0` (default) and `rootMargin: '0px 0px -50px 0px'` to the observer options to fire earlier, OR
- Replace the JS-based reveal with a pure CSS approach: `@keyframes fadeInUp` + `animation-delay` based on element position — more reliable, no JS dependency.

**File to check:** Search for `reveal-on-scroll` in `useEffect` hooks or global CSS.

---

### C2 — `API INTERACTION` link in public footer navigation
**Pages:** All pages (footer)
**Symptom:** The Footer Navigation column includes `API INTERACTION` as a public-facing link (highlighted in gold/brand color). This exposes an internal developer route to all website visitors.

**Evidence:** Visible in footer on Contact page screenshot — gold-colored "API INTERACTION" among DEVELOPMENTS, NEIGHBORHOOD QUIZ, RELOCATION TOURS.

**Fix:** Remove from `components/Footer.tsx` navigation array. Also remove `API Interaction` from the footer `<ul>` links entirely, or move to admin section only.

---

### C3 — Contact form labels in Spanish on English page (`/en/contacto`)
**Page:** `/en/contacto`
**Symptom:** Form fields read "NOMBRE COMPLETO", "PROYECTO DE INTERÉS", "MENSAJE", and the submit button says "ENVIAR CONSULTA" — Spanish labels on the English-language route.

**Fix:** The contact form component likely hardcodes Spanish strings instead of using the `lang` / `t` translation system. Apply the same `CONTENT[lang]` pattern used throughout the rest of the site.

---

## 🟡 Medium Issues

---

### M1 — Hero CTAs below the fold (all hero sections)
**Pages:** Homepage, Projects (`/proyectos`), Contact (`/contacto`)
**Symptom:** The hero content stack (badge + large h1 + subtitle + body text + CTA buttons) still pushes the CTA buttons partially or fully below the fold at 1440×783.

**Evidence:** Homepage screenshot shows "SCROLL TO DISCOVER" indicator appearing before the CTA buttons are fully in view. Projects page hero heading "THE INVESTMENT INVENTORY." occupies ~70% of viewport height alone.

**Fix options:**
- Reduce hero to `min-h-[600px]` instead of `h-screen min-h-[800px]`
- Or reduce the top badge margin from `mb-6` → `mb-3` and body text from `mb-8` → `mb-4` to tighten vertical stack
- Sub-pages (Projects, Contact) still have un-reduced hero headings — apply same `text-4xl sm:text-6xl` treatment as Homepage

---

### M2 — FeaturedListings loading skeleton invisible on dark background
**Page:** Homepage
**Symptom:** The `ClientSections` dynamic import uses `loading: () => <div className="animate-pulse bg-gray-200 h-48 w-full rounded" />`. On the dark (`bg-brand-950`) homepage, this creates a ~150px invisible blank gap while loading.

**Fix:** Change skeleton to `bg-white/10` or `bg-brand-800/50` to be visible against the dark background:
```tsx
loading: () => <div className="animate-pulse bg-white/10 h-20 w-full rounded" />
```

---

### M3 — VideoThumbnail renders as black rectangle
**Page:** Homepage
**Symptom:** The video section shows a large black box where the YouTube thumbnail image should appear. The `img.youtube.com` domain is blocked by CSP or CORS, resulting in a broken image that shows as a black rectangle.

**Fix options:**
- Use a self-hosted poster image stored in Supabase storage instead of `img.youtube.com`
- Or embed the video via `<iframe>` with a play-button overlay (lazy loaded)
- Or remove the video section temporarily if no poster image is available

---

### M4 — Contact page: jarring light/white form background
**Page:** `/en/contacto`
**Symptom:** The hero section has a dark navy (`bg-brand-950`) background, but the form section immediately below has a white/light gray background (`bg-white` or similar). The transition is abrupt and inconsistent with the rest of the site's dark theme.

**Fix:** Apply `bg-brand-950` or `bg-brand-900` as background to the form section container, and adjust form input styles to use dark-themed variants (`bg-white/5 border-white/10 text-white placeholder:text-slate-500`).

---

### M5 — Projects page: card title font still oversized
**Page:** `/proyectos`
**Symptom:** Project card titles like "THE WESTIN RESIDENCES", "PINO ALTO BOQUETE", "BUENAVENTURA RESORT" use a very large italic bold font inside the cards, making each card tall and reducing the number of cards visible per scroll.

**Fix:** Reduce card heading from approximately `text-3xl` → `text-xl md:text-2xl` for tighter cards.

---

### M6 — Properties page: SplitText animation shows mid-render on load
**Page:** `/propiedades`
**Symptom:** The page heading animates character-by-character on load, and on first render it flashes in a half-animated state (some characters visible, some invisible).

**Fix:** Either add a small delay (`delay: 300ms`) before the SplitText animation starts, or use `opacity: 0` on the parent with a fade-in that starts only after the animation is complete. A simpler fix is to replace SplitText with a standard fade-in.

---

## 🟢 Low Priority / Polish

---

### L1 — Properties page: excess bottom padding
**Page:** `/propiedades`
**Symptom:** Large empty gap between the last property card row and the footer (~200px).
**Fix:** Reduce `pb-24` → `pb-10` on the ListingsGrid container.

---

### L2 — Third property card shows world map image
**Page:** `/propiedades`
**Symptom:** One listing card displays a world map image (appears to be a placeholder or incorrect Supabase image URL).
**Fix:** Update the listing's image field in Supabase CMS to use a correct property photo.

---

### L3 — Sub-page hero headings not yet reduced
**Pages:** `/proyectos`, `/contacto`, and any other sub-pages
**Symptom:** Only Homepage hero (`HeroSection.tsx`) was reduced in the overhaul. Sub-page heroes still use oversized headings (e.g., "THE INVESTMENT INVENTORY." spanning ~75% of viewport height, "DIRECT CONCIERGE ACCESS." spanning ~70%).
**Fix:** Apply same Tailwind size reduction (`text-5xl sm:text-6xl` max) to the hero heading component on each sub-page.

---

### L4 — Admin link visible in footer bottom bar
**Pages:** All pages (footer)
**Symptom:** The bottom bar of the footer includes an "Admin Control" link with a lock icon, visible to all visitors.
**Fix:** Either hide with `hidden` class (handled server-side based on auth state), or move it to a non-public location. If it must stay, remove the lock icon and make it less visually prominent (smaller, lower contrast text).

---

## ✅ What's Working Well

- **Property detail page** — Clean layout, correct h1/price sizing, good breadcrumb, sticky contact sidebar, WhatsApp CTA prominent. No major issues.
- **Navbar** — Gradient overlay (`from-black/60 to-transparent`) works well for readability over hero images. Sticky state is clean. Mobile hamburger menu is properly implemented with `flex lg:hidden`.
- **Footer spacing** — The `pt-12 pb-8` reduction is working. Footer is compact and well-structured.
- **Homepage typography hierarchy** — h1 at `text-4xl sm:text-6xl md:text-7xl` is a major improvement over `text-9xl`. Stats bar and service strip cards look clean.
- **ClientSections SSR fix** — The `'use client'` wrapper correctly isolates `ssr: false` dynamic imports. Build passes.

---

## Recommended Fix Order

1. **C1** — Fix `reveal-on-scroll` (affects every page, most damaging to UX)
2. **M2** — Fix skeleton bg color (quick 1-line change, high visual impact)
3. **C2** — Remove `API INTERACTION` from footer (security hygiene)
4. **C3** — Fix contact form Spanish labels on English route
5. **M1** — Reduce sub-page hero heights + tighten CTA button positioning
6. **M4** — Dark-theme the contact form section
7. **M3** — Replace VideoThumbnail with Supabase-hosted poster
8. Remaining medium/low items as time allows
