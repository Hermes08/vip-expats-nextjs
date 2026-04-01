# MCP Operations Playbook — VIP Expats / Panama Real Estate Sale
**Cómo Claude gestiona este sitio sin romper el diseño**

Supabase Project ID: `oypunkzyxrdmwjqwguio`
Frontend: Next.js 15 en Netlify → https://panamarealestatesale.com
WordPress: https://panamarealestatesale.com/wp-json/wp/v2/

---

## 🧠 Arquitectura de Contenido

| Tipo | Dónde vive | Quién lo gestiona | URL en el sitio |
|------|-----------|-------------------|----------------|
| **Listings** (resale) | Supabase `listings` | Claude via Supabase MCP | `/[lang]/propiedades` |
| **Projects** (nuevos desarrollos) | Supabase `projects` + `lib/constants.ts` | Claude via Supabase MCP | `/[lang]/proyectos/[slug]` |
| **Blog posts** | Supabase `blog_posts` + WordPress | Claude via ambos MCP | `/[lang]/blog/[slug]` |
| **Leads / Quiz** | Supabase `quiz_submissions` + `leads` | Solo lectura para Claude | Admin |
| **CRM** | Supabase `crm_clients` | Claude via Supabase MCP | Interno |
| **Agentes** | Supabase `agents` | Claude via Supabase MCP | `/[lang]/agentes` (futuro) |

---

## 📋 Reglas de oro para Claude (NUNCA violar estas)

1. **NUNCA toques `lib/constants.ts` sin permiso explícito** — tiene los proyectos estáticos hardcodeados. Si cambias algo allí sin querer, el build falla.
2. **NUNCA modifiques `globals.css`** — ahí están todos los design tokens. Cualquier cambio rompe el diseño visual.
3. **NUNCA cambies `app/[lang]/layout.tsx`** — controla la estructura global, fuentes, providers.
4. **NUNCA instales Elementor ni page builders** en WordPress — destruye la integración REST API.
5. **Para añadir nuevas features de UI**: crear un nuevo componente en `components/` y una nueva página en `app/[lang]/`. Nunca editar los existentes sin leer el archivo completo primero.
6. **Los design tokens son**: navy `#071325`, gold `#e9c349`, fuentes Montserrat (headings) + Manrope (body). Úsalos siempre.

---

## 🏠 Operaciones sobre Listings (Propiedades en Venta/Alquiler)

### Añadir una propiedad nueva

```sql
INSERT INTO public.listings (
  id, slug, ref, title, description, excerpt,
  price, status, property_type, zone,
  city, neighborhood, province,
  beds, baths, sqft,
  images, featured, agent_name, agent_whatsapp, keywords
) VALUES (
  'listing-XXX',
  'slug-unico-de-la-propiedad',
  'REF-001',
  '{"en": "Title in English", "es": "Título en Español"}',
  '{"en": "Full description...", "es": "Descripción completa..."}',
  '{"en": "Short excerpt...", "es": "Resumen corto..."}',
  250000,         -- precio en USD
  'For Sale',     -- For Sale | For Rent | Sold | Rented
  'Condo',        -- Condo | House | Villa | Land | Commercial | Penthouse | Resort
  'City',         -- Beach | Mountain | Caribbean | City | Interior
  'Panama City',  -- ciudad
  'Punta Pacifica', -- barrio (opcional)
  'Panamá',       -- provincia (opcional)
  3, 2, 1500,     -- beds, baths, sqft
  ARRAY['https://url-imagen-1.jpg', 'https://url-imagen-2.jpg'],
  false,          -- featured: true = aparece primero
  'David Aguirre',
  '50762534802',
  ARRAY['keyword 1', 'keyword 2']
);
```

### Actualizar precio de una propiedad

```sql
UPDATE public.listings SET price = 275000, updated_at = NOW()
WHERE slug = 'slug-de-la-propiedad';
```

### Marcar como vendida

```sql
UPDATE public.listings SET status = 'Sold', published = true, updated_at = NOW()
WHERE slug = 'slug-de-la-propiedad';
```

### Despublicar (ocultar sin borrar)

```sql
UPDATE public.listings SET published = false WHERE id = 'listing-XXX';
```

### Ver todas las propiedades activas

```sql
SELECT id, slug, title->>'en' as title_en, price, status, zone, city, featured
FROM public.listings
WHERE published = true
ORDER BY featured DESC, created_at DESC;
```

---

## 🏗️ Operaciones sobre Projects (Nuevos Desarrollos)

Los proyectos tienen dos capas:
- **Static** (`lib/constants.ts`) — los proyectos originales hardcodeados
- **Supabase** (`projects` table) — overrides y proyectos nuevos creados por Claude

Para añadir un proyecto NUEVO via MCP (sin editar constants.ts):

```sql
INSERT INTO public.projects (
  id, slug, name, location, type, zone, status,
  "h1Title", description, "marketAnalysis", highlights,
  keywords, images, amenities, "priceFrom",
  beds, baths, sqft, "unitsAvailable", faqs
) VALUES (
  'nuevo-proyecto-id',
  'nombre-del-proyecto',
  '{"en": "Project Name", "es": "Nombre del Proyecto"}',
  '{"en": "Location, Panama", "es": "Ubicación, Panamá"}',
  ARRAY['Condo'],         -- tipo: Condo | House | Resort | Villa
  ARRAY['Beach'],         -- zona: Beach | Mountain | Caribbean | City
  'Presale',              -- Presale | Under Construction | Ready to Move
  '{"en": "H1 Title SEO", "es": "Título H1 SEO"}',
  '{"en": "Description...", "es": "Descripción..."}',
  '{"en": "Market analysis...", "es": "Análisis de mercado..."}',
  '{"en": ["Highlight 1", "Highlight 2"], "es": ["Destacado 1", "Destacado 2"]}',
  ARRAY['keyword1', 'keyword2'],
  ARRAY['https://imagen.jpg'],
  '{"en": ["Amenity 1"], "es": ["Amenidad 1"]}',
  150000,   -- precio desde
  '2-3', '2', '97 m2',
  50,       -- unidades disponibles
  '[]'::jsonb
);
```

---

## 📝 Operaciones sobre Blog Posts

### Crear un post de blog

```sql
INSERT INTO public.blog_posts (
  id, slug, title, excerpt, content, date, image, category
) VALUES (
  'post-' || gen_random_uuid(),
  'slug-del-articulo',
  '{"en": "Title", "es": "Título"}',
  '{"en": "Excerpt...", "es": "Resumen..."}',
  '{"en": "<p>Full HTML content...</p>", "es": "<p>Contenido HTML completo...</p>"}',
  '2026-04-01',
  'https://imagen.jpg',
  'Real Estate'  -- o: Investment | Lifestyle | Expat Life | Legal | Relocation
);
```

### Via WordPress MCP (Claude Desktop)

Claude puede crear blog posts directamente en WordPress con el MCP de WordPress, y el Next.js los consume automáticamente via REST API. Esto es mejor para posts SEO largos porque Yoast SEO gestiona el meta.

---

## 🔄 Cuándo usar cada MCP

| Tarea | MCP a usar |
|-------|-----------|
| Añadir / editar listing | Supabase MCP → tabla `listings` |
| Añadir / editar proyecto | Supabase MCP → tabla `projects` |
| Crear blog post SEO | WordPress MCP → Claude lo publica, Next.js lo consume |
| Ver leads del quiz | Supabase MCP → tabla `quiz_submissions` |
| Ver CRM clientes | Supabase MCP → tabla `crm_clients` |
| Añadir agente | Supabase MCP → tabla `agents` |
| Actualizar SEO meta de blog | WordPress MCP → Yoast fields |
| Cambiar diseño de un componente | Editar directamente el archivo `.tsx` — siempre leer primero |

---

## 🎨 Cómo añadir una nueva feature de UI sin romper el diseño

### Regla: Siempre extend, nunca reemplaza

**Forma correcta:**
1. Crea un nuevo componente en `components/[feature]/NuevoComponente.tsx`
2. Crea una nueva página en `app/[lang]/nueva-ruta/page.tsx`
3. Importa el componente en la página
4. Usa solo los design tokens existentes (`brand-950`, `brand-GOLD`, etc.)

**Forma incorrecta:**
- Editar `components/Navbar.tsx` o `components/MainLayout.tsx` sin leer el archivo completo
- Usar colores hexadecimales hardcodeados en lugar de los tokens CSS
- Instalar nuevas librerías sin verificar compatibilidad (Three.js ya está instalado, usarlo si necesitas 3D)

### Design tokens disponibles

```css
/* Colores */
--color-brand-950: #071325  /* Navy oscuro — fondo principal */
--color-brand-900: #0A1628  /* Navy — cards */
--color-brand-800: #142032  /* Navy — bordes */
--color-brand-600: #1f2a3d  /* Navy — hover states */
--color-brand-GOLD: #e9c349 /* Gold — accents, CTAs */
--color-brand-AMBER: #af8d11 /* Amber — gold oscuro */

/* Tipografía */
font-heading → Montserrat (títulos)
font-sans    → Manrope (body)
font-serif   → Cormorant Garamond (display luxury)

/* Spacing fluid */
--section-py: clamp(4rem, 10vh, 10rem)
--section-px: clamp(1rem, 5vw, 4rem)
```

---

## 🚀 Flujo de trabajo típico

### "Quiero añadir una propiedad nueva"

1. Claude: `INSERT INTO listings` con los datos
2. El sitio en Netlify la muestra automáticamente en `/propiedades` (no requiere rebuild — client-side fetch desde Supabase)

### "Quiero cambiar el precio de una propiedad"

1. Claude: `UPDATE listings SET price = nuevo_precio WHERE slug = '...'`
2. Inmediato — sin deploy

### "Quiero añadir una página nueva (ej: /agentes)"

1. Claude lee el design system en `globals.css`
2. Crea `components/agents/AgentsGrid.tsx` con los tokens correctos
3. Crea `app/[lang]/agentes/page.tsx`
4. Opcional: `INSERT INTO agents` el contenido del agente
5. Push a git → Netlify deploya en ~2 min

### "Quiero publicar un artículo de blog"

1. Claude crea el post via WordPress MCP
2. WordPress lo publica con Yoast SEO
3. Next.js lo consume automáticamente en `/[lang]/blog`
4. Sin deploy requerido

### "Quiero añadir filtros nuevos al buscador"

1. Claude edita `components/listings/PropertySearchFilters.tsx`
2. Añade la nueva opción al array de filtros
3. Actualiza la lógica en `ListingsGrid.tsx`
4. Push → deploy automático

---

## 📊 Estado actual del proyecto

```
Supabase (oypunkzyxrdmwjqwguio):
  ✅ listings       — propiedades resale (3 ejemplos)
  ✅ projects       — nuevos desarrollos
  ✅ blog_posts     — artículos del blog
  ✅ quiz_submissions — leads del quiz
  ✅ crm_clients    — CRM (74 clientes)
  ✅ leads          — leads generales
  ✅ agents         — agentes (tabla nueva, vacía)

Next.js (Netlify):
  ✅ /[lang]/propiedades  — buscador de propiedades (NUEVO)
  ✅ /[lang]/proyectos    — proyectos nuevos
  ✅ /[lang]/blog         — blog
  ✅ /[lang]/relocation   — hub de relocación
  ✅ /[lang]/quiz         — quiz de match

WordPress (Hostinger):
  ⏳ REST API auth fix pendiente (Authorization header)
  ⏳ CPTs: property, project, agent por configurar
  ✅ MCP server: instalar docdyhr/mcp-wordpress
```
