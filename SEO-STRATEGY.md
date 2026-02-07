# SEO Strategy: panamarealestatesale.com

## 1. CONTENT STRATEGY - Blog Posts to Write

### High-Priority Keywords (based on search volume + intent)

#### Tier 1 - Main Keywords
| Keyword | Monthly Searches | Current Rank | Blog Post Title |
|---------|-----------------|--------------|-----------------|
| real estate in panama | 3,600 | ? | ✅ Landing page created |
| panama real estate | 2,900 | ? | Covered by homepage |
| buy property in panama | 1,300 | Not ranking | "How to Buy Property in Panama: Complete 2026 Guide for Foreigners" |
| panama property for sale | 1,100 | Not ranking | "Panama Property for Sale: 50+ Listings from $100K to $2M" |
| best places to live in panama | 1,000 | Not ranking | "10 Best Places to Live in Panama for Expats (2026 Rankings)" |

#### Tier 2 - Long-tail Keywords
| Keyword | Blog Post Title |
|---------|-----------------|
| cost of living panama | "Panama Cost of Living 2026: Monthly Budget Breakdown" |
| retiring in panama pros and cons | "Retiring in Panama: Honest Pros & Cons from 5-Year Expats" |
| panama pensionado visa | "Panama Pensionado Visa: Requirements, Benefits & Application Process" |
| beachfront property panama | "Beachfront Property in Panama: 7 Best Beaches to Buy" |
| boquete panama real estate | "Boquete Panama Real Estate: Mountain Living Guide 2026" |
| coronado panama real estate | "Coronado Panama: The #1 Beach Town for Expat Buyers" |
| panama city apartments for rent | "Panama City Apartments: Rent vs Buy Analysis" |

### Content Calendar (Next 4 Weeks)

**Week 1:**
- [ ] "How to Buy Property in Panama: Complete 2026 Guide" (2,500+ words)
- [ ] "10 Best Places to Live in Panama" (3,000+ words, listicle)

**Week 2:**
- [ ] "Panama Cost of Living 2026" (with comparison tables)
- [ ] "Beachfront Property in Panama: 7 Best Beaches"

**Week 3:**
- [ ] "Retiring in Panama: Honest Pros & Cons"
- [ ] "Panama Pensionado Visa Complete Guide"

**Week 4:**
- [ ] "Coronado vs Boquete: Which Is Right for You?"
- [ ] "Panama Property Tax Guide for Foreign Investors"

---

## 2. TECHNICAL SEO AUDIT

### ✅ What's Good
- Proper sitemap.xml with video markup
- robots.txt configured correctly
- Organization schema (RealEstateAgent)
- Video schema on project pages
- Google Analytics installed (G-90BHGEJ5KD)
- Google verification tag present
- HTTPS enabled
- Hreflang tags for EN/ES
- Open Graph + Twitter cards

### ⚠️ Issues to Fix

#### Critical
1. **Homepage is client-side rendered ('use client')**
   - H1 content invisible to crawlers until JS executes
   - Fix: Convert to server component or use SSR

2. **Three.js performance**
   - GoldParticles/ZeroGravityWrapper adds JS bundle weight
   - Test Core Web Vitals on mobile

3. **No caching headers**
   - `cache-control: private,no-cache,no-store`
   - Add stale-while-revalidate for static assets

#### Medium Priority
4. **Missing FAQ Schema** on main pages (have component but not used everywhere)
5. **Image optimization** - Using Unsplash URLs directly instead of Next Image optimization
6. **No breadcrumb on homepage**

### Lighthouse Test Needed
Run: `npx lighthouse https://panamarealestatesale.com/en --output html --output-path ./lighthouse-report.html`

---

## 3. BACKLINK OPPORTUNITIES

### Panama Expat & Real Estate Sites

#### High Authority (DA 50+)
| Site | Type | Contact Strategy |
|------|------|------------------|
| internationalliving.com | Expat Magazine | Guest post about Panama real estate trends |
| liveandincestinpanama.com | Panama Blog | Partnership/interview offer |
| panamareloc.com | Relocation Service | Cross-promotion |
| expatexchange.com | Expat Forum | Expert contributor status |

#### Medium Authority (DA 20-50)
| Site | Type | Strategy |
|------|------|----------|
| thepanamadigest.com | News | Press releases for new projects |
| boqueteguide.com | Boquete Info | Local sponsor/content partner |
| visitpanama.com | Tourism | Featured listing partnership |
| coronadolifestyle.com | Coronado Community | Community sponsor |
| bestplacesintheworldtoretire.com | Retirement | Submit for ranking |

#### Directories & Citations
- [ ] Google Business Profile (claim/verify)
- [ ] Yelp Panama
- [ ] TripAdvisor (for tours)
- [ ] Realtor associations (ACOBIR Panama membership)
- [ ] Chamber of Commerce Panama

### Link Building Tactics

1. **HARO/Connectively** - Sign up for journalist queries about Panama/expat living
2. **Podcast Guesting** - Pitch to expat/real estate podcasts
3. **Infographics** - Create shareable "Panama Real Estate Stats 2026"
4. **Resource Pages** - Find "Panama resources" pages, request inclusion
5. **Broken Link Building** - Find dead links to Panama real estate content, offer replacement

---

## 4. GOOGLE SEARCH CONSOLE

### Access Needed
To analyze current rankings and opportunities:

1. Go to: https://search.google.com/search-console
2. Add property: `https://panamarealestatesale.com`
3. Verify via:
   - HTML tag (already have `C5dDcwN7RBp9fhyc_KFAlYYd9mW8-wdMUw9aOIim4Us`)
   - DNS TXT record
   - Or add me as user

### What I'll Analyze Once Access Granted
- Current keyword rankings
- Click-through rates (CTR) by page
- Indexing issues
- Mobile usability problems
- Core Web Vitals data
- Backlink profile (via Links report)

### Quick Wins from GSC
- Find keywords ranking 5-15 (easy to push to top 3)
- Pages with high impressions but low CTR (improve titles)
- Queries you rank for accidentally (create dedicated content)

---

## Action Items

### For Quicky (You)
1. [ ] Grant GSC access or share credentials
2. [ ] Approve content calendar
3. [ ] Review backlink target list - any existing relationships?
4. [ ] Confirm deployment pipeline (Netlify auto-deploy on push?)

### For Yeheskel (Me)
1. [x] On-page SEO optimization (done)
2. [ ] Write first 2 blog posts
3. [ ] Run Lighthouse audit when browser available
4. [ ] Set up backlink tracking spreadsheet
5. [ ] Create FAQ schema for key pages

---

*Strategy created: 2026-02-07*
*Target: #1 for "real estate in panama" within 6 months*
