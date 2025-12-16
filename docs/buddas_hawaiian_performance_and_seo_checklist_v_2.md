# Buddas Hawaiian – Performance & SEO Checklist (v2)

> **File:** `performance-and-seo-checklist.md`  
> **Scope:** Core Web Vitals, speed, and search best practices for BuddasHawaiian.com  
> **Target:** Fast, mobile-first, local SEO-optimized restaurant site

---

## 1. Performance Objectives

- **Largest Contentful Paint (LCP):** ≤ 2.5s on 4G mobile for primary pages.  
- **First Input Delay (FID)** / **Interaction to Next Paint (INP):** within “Good” range.  
- **Cumulative Layout Shift (CLS):** ≤ 0.1.  
- **Total Page Weight:** target < 1.5MB for initial load (excluding map embeds iframes).

Critical pages:

- Home (`/`)  
- Menu (`/menu`)  
- Rewards (`/rewards`)  
- Benefit Nights (`/benefit-nights`)  
- Catering (`/catering`)  
- Locations (`/locations`)  
- About (`/about`), Contact (`/contact`)

---

## 2. Next.js & Rendering Strategy

- Use **static generation + ISR** for all marketing pages where possible.  
- Avoid heavy client-side data fetching; prefer server-side in `app/` routes.  
- Use **Server Components** by default; only mark interactive components as `"use client"` when needed.

### 2.1 Caching & Revalidation

- Set `revalidate` to a reasonable interval (e.g., 60–300 seconds) for pages powered by Sanity.  
- For highly stable content (About, Contact), use long revalidation or static build-time content.  
- Use `fetch` caching options (`cache`, `next.revalidate`) consistently for Sanity queries.

---

## 3. Images & Media

- Use `next/image` for all content images:  
  - Provide `width`/`height` or use `fill` with proper containers.  
  - Provide `sizes` attributes for responsive images.  
- Use **WebP/AVIF** where possible.  
- Compress images to reasonable dimensions (no giant originals).  
- Lazy-load below-the-fold imagery.

Specifics:

- Hero images: optimized and sized to typical viewport widths.  
- Menu item images: small/medium sizes; avoid full-resolution uploads.

---

## 4. CSS & JavaScript

- Use Tailwind’s **JIT** and purge unused classes in production.  
- Avoid large third-party UI libraries unless absolutely necessary.  
- Prefer small, focused dependencies for icons or utilities.  
- Use dynamic imports (`next/dynamic`) for rarely-used or heavy components.

JS best practices:

- Keep client components lean; avoid heavy logic in the browser.  
- Avoid unnecessary re-renders (memoize where appropriate).  
- Do not ship admin-only or unused JS to the public site.

---

## 5. Core Web Vitals – Practical Steps

### 5.1 LCP (Largest Contentful Paint)

- Ensure the **hero section** content (text + primary image) loads quickly:  
  - Use optimized hero images and avoid blocking scripts.  
  - Inline critical styles via Tailwind (no additional CSS blocking).  
- Avoid layout shifts caused by late-loading fonts or images.

### 5.2 CLS (Cumulative Layout Shift)

- Reserve space for images (fixed height/width or aspect-ratio containers).  
- Avoid inserting banners or components above existing content after load.  
- For sticky mobile CTA bar, ensure it uses reserved space or appears in a predictable way.

### 5.3 INP/FID

- Avoid heavy event handlers on scroll or frequent reflows.  
- Debounce or throttle expensive interactions if needed.  
- Keep forms and navigation snappy and simple.

---

## 6. SEO Basics

### 6.1 Metadata

- Every page must have:
  - Unique **`<title>`**.  
  - Descriptive **meta description** (via `seo` object in Sanity or Next metadata).  
- Brand-sensitive format (example):
  - `Buddas Hawaiian – Bring Aloha to the Table` for home.  
  - `Menu | Buddas Hawaiian Bakery & Grill`.  
  - `Benefit Nights | Buddas Hawaiian`.

### 6.2 Headings & Content

- Use a single, descriptive **H1** per page.  
- Use H2 and H3 for sub-sections (Menu categories, program sections).  
- Include key phrases naturally, e.g.:  
  - “Hawaiian-style bentos in Rancho Cucamonga”.  
  - “catering in Rancho Cucamonga”.

### 6.3 Structured Data (Optional, Future)

- Consider adding:  
  - `LocalBusiness` / `Restaurant` schema.  
  - Menu and location information in structured data.  
- Implement once the content model is stable.

---

## 7. Local SEO & Discoverability

- Align website content with **Google Business Profile** info:  
  - Name, address, phone, hours.  
  - Menu links and ordering links.  
- Use clear, local-focused copy on Home, Menu, and Locations pages.  
- Ensure Location pages include **city and area names** in headings and copy.

---

## 8. URL & Linking Strategy

- Use clean, human-readable URLs:  
  - `/menu`, `/rewards`, `/benefit-nights`, `/catering`, `/locations`, `/about`, `/contact`.  
- Internal linking:
  - From Home to key revenue pages (Menu, Benefit Nights, Catering).  
  - From About to Programs and Locations.  
  - From Menu to Contact/Locations as needed.

Avoid deep, nested paths unless necessary.

---

## 9. Sitemaps & Robots

- Ensure a dynamic or static **XML sitemap** is available.  
- Configure `robots.txt` to allow crawling of public pages.  
- Do not index admin or preview routes.

---

## 10. Monitoring & QA

- Use Lighthouse (in Chrome or CI) for:
  - Performance.  
  - Best Practices.  
  - Accessibility.  
  - SEO.

- Run tests on:
  - Home, Menu, one Program page, Locations, About, Contact.  
- Track Core Web Vitals via your hosting platform (e.g., Vercel analytics) if available.

---

## 11. Build & Deployment Checks

Before shipping changes:

- Verify pages still meet performance thresholds in a test environment.  
- Check that image sizes did not spike significantly.  
- Confirm metadata and Open Graph images are set for new pages.  
- Confirm no blocking scripts or large third-party embeds were added without review.

Update this checklist as new features (stories, loyalty, digital menus) are introduced and may impact performance or SEO.

