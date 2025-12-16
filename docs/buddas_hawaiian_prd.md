# Buddas Hawaiian Bakery & Grill – Web PRD (v2)

> **File:** `prd.md`  
> **Project:** Buddas Hawaiian Bakery & Grill – Marketing Website  
> **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS + Sanity.io

---

## 1. Product Overview

Buddas Hawaiian Bakery & Grill needs a **franchise-grade, mobile-first marketing website** that feels as polished as national chains (Domino’s, Burger King, Shake Shack) but stays true to its Hawaiian comfort, bakery roots, and community focus.

This site is **informational, not an ordering platform**. It showcases the menu, core programs (Rewards, Benefit Nights, Catering), locations, brand story, and contact options, while leaving room for future loyalty and digital ordering integrations.

- **Platform:** Web (mobile-first, responsive)  
- **Primary Audience:** Local guests in and around Rancho Cucamonga + future locations  
- **Admin Audience:** Buddas staff using Sanity Studio to update menu, programs, locations, and copy.

---

## 2. Goals & Non‑Goals

### 2.1 Goals

1. **Mobile-first experience**  
   - Design for phones first; desktop is the “expanded tray” version.  
   - Menu, Locations, and Contact reachable within **3 taps or fewer** from any page.

2. **Franchise-level polish**  
   - Bold, minimal layout with strong typography and generous negative space.  
   - Appetite-driven visuals: food photography and menu hierarchy feel on-par with major fast-casual brands.

3. **Fast and accessible**  
   - Core Web Vitals targets:
     - LCP < **2.5s** on typical 4G mobile.  
     - CLS < **0.1**.  
   - WCAG **2.2 Level AA** baseline across all pages.

4. **Easy menu & program discovery**  
   - Clear, scannable `/menu` broken into intuitive categories.  
   - Dedicated pages for **Rewards**, **Benefit Nights**, and **Catering** that read like franchise program pages (benefits, steps, FAQs, CTA).

5. **CMS-editable content**  
   - Menu items, programs, locations, and marketing copy are managed via **Sanity**, not code.  
   - Staff can safely update prices, descriptions, and hours without breaking layout.

6. **Community & sustainability storytelling**  
   - Highlight Benefit Nights, local/community ties, and any eco-forward decisions (packaging, sourcing) in a consistent, lightweight way.

### 2.2 Non‑Goals (v1)

- No in-site cart or checkout; ordering links go to external POS/ordering tools.  
- No advanced AI personalization in v1 (e.g., dynamic menus by time of day); architecture should not block this later.  
- No user authentication or accounts.  
- No multi-language support in v1 (but keep text strings and layout flexible).

---

## 3. Target Users & Use Cases

### 3.1 Guest Types

1. **Hungry local (mobile-first)**  
   - Device: Phone  
   - Intent: “What do you serve?” → “Where are you?” → “Can I call/visit now?”  
   - Needs: Fast menu scan, quick directions, click-to-call.

2. **Benefit Night organizer**  
   - Device: Desktop or tablet  
   - Intent: “Can we run a fundraiser here?”  
   - Needs: Simple explanation, clear giveback %, easy way to apply/contact.

3. **Catering planner (office, team, event)**  
   - Device: Desktop or tablet  
   - Intent: “Can you feed 15–50 people?”  
   - Needs: Example packages, price ranges, headcount guidance, simple form/CTA.

4. **First-time visitors discovering the brand**  
   - Device: Mobile/desktop via search or social  
   - Intent: “What is Buddas? Is this fast, family-friendly, trustworthy?”  
   - Needs: Clear story, photos, reviews, and an obvious next step (view menu, visit, plan event).

5. **Staff editors**  
   - Device: Desktop  
   - Intent: Update menu, prices, hours, and program copy.  
   - Needs: Simple, clearly labeled content model in Sanity.

---

## 4. Brand & UX Principles

### 4.1 Visual & Interaction Principles

- **Bold Minimalism, Food First**  
  - Big, doughy headlines (Lilita One) on clean cream backgrounds.  
  - Minimal layout chrome; let food photography and key stats carry the page.

- **Aloha + Franchise Polish**  
  - Warm, welcoming tone with visual rigor (grid, spacing, consistency) at the level of national chains.

- **Color Psychology**  
  - Buddas Teal + Gold + Cream + Brown (and orange accent) used systematically:  
    - Warm colors (gold/orange) for CTAs and food surfaces → appetite and energy.  
    - Teal/cream for backgrounds and section frames → freshness and calm.  
    - Dark brown for typography on light backgrounds → readability and “baked” warmth.

- **Mobile-First Layout**  
  - Design mobile views first.  
  - Large tap targets (~44px), bottom-anchored CTAs on key pages, short vertical sections.

### 4.2 Accessibility & Inclusivity

- WCAG 2.2 AA for all pages.  
- Clear accessible patterns: semantic landmarks, alt text, keyboard navigation.  
- **Accessible Menu Mode** (v1 requirement):  
  - On `/menu`, provide a toggle for high-contrast, larger-text mode suitable for at-table QR scanning.

### 4.3 Community & Sustainability

- Light but consistent emphasis on:
  - Benefit Nights (community giveback).  
  - Any eco-forward decisions (recyclable packaging, reduced waste) – future-proof the design to show badges or micro-copy when ready.

---

## 5. Scope – Features & Pages

### 5.1 Core Pages

1. **Home (`/`)**  
   - Hero with tagline, food imagery, and primary CTA: **View Menu**.  
   - Signature Bentos highlight.  
   - Bakery highlight strip.  
   - Programs strip: Rewards, Benefit Nights, Catering.  
   - Locations teaser (primary location card).  
   - Social proof (testimonials).

2. **Menu (`/menu`)**  
   - Category-based layout: Signature Bentos, Breakfast, Sandwiches & Burgers, Musubi & Small Bites, Bakery, Keiki, Drinks & Coffee.  
   - Each item: name, description, price, optional badges/tags, optional image.  
   - Accessible Menu Mode toggle.  
   - Optional note: “Menu items and pricing may vary by location.”

3. **Rewards (`/rewards`)**  
   - Program hero with strong headline (e.g., “Eat. Earn. Repeat.”).  
   - Benefits list (3–6 bullet cards).  
   - “How it works” 3-step section.  
   - Future-friendly area for challenges/gamification messaging.  
   - CTA for join/learn more (external link or in-store instructions).

4. **Benefit Nights (`/benefit-nights`)**  
   - Hero with clear value (e.g., “Raise Funds, Plate by Plate.”).  
   - Overview + key stat (e.g., “Up to X% Giveback”).  
   - “How it works” steps.  
   - Eligibility section (who can apply).  
   - FAQ accordion.  
   - Application CTA (form or mailto).

5. **Catering (`/catering`)**  
   - Hero + overview.  
   - “Popular Packages” section with card layout (name, description, suggested headcount, price range).  
   - “How it works” steps.  
   - FAQ.  
   - Inquiry form or contact CTA.

6. **Locations (`/locations`)**  
   - Grid/list of locations from Sanity.  
   - Each card: name, address, hours summary, phone, `Get Directions` (maps link), `Order Online` (if available).  
   - Design should work both as a page and as a reusable “find a location” block on other pages.

7. **About (`/about`)**  
   - Brand story (origins, food philosophy).  
   - Brand pillars (Flavor First, Everyday Aloha, Community-Centered).  
   - Optional gallery for people/space/food.

8. **Contact (`/contact`)**  
   - Contact form (name, email, topic, message).  
   - Main phone with click-to-call.  
   - Main email.  
   - Reference to Benefit Nights/Catering for specific inquiries.

### 5.2 Utility & Future Pages

- **Privacy Policy (`/privacy`)** – static content.  
- **Terms (`/terms`)** – static content.  
- **Stories/Blog (`/stories`, `/stories/[slug]`)** – not in v1, but keep architecture flexible.

---

## 6. Information Architecture & Navigation

IA should align with `sitemap.md`, with emphasis on:

- **Primary nav:** Home, Menu, Rewards, Benefit Nights, Catering, Locations, About, Contact.  
- **Footer nav:** Repeat core links + privacy/terms.  
- **Sticky mobile CTA bar:** On key pages (Home, Menu, Locations), bottom bar with quick actions like `View Menu`, `Call`, `Get Directions`.

All critical info (menu, locations, contact) must be available within **3 clicks/taps** from any entry point.

---

## 7. Content & Data Model (Sanity)

High-level only; detailed fields are in `sanity-content-model.md`.

- **`siteSettings`** – logo, tagline, primary contact, social, sustainability blurb, global banners.  
- **`menuCategory`** – title, slug, display order, description, icon.  
- **`menuItem`** – name, description, price, category, tags/badges (spicy, keiki, locally sourced, eco-friendly), image, flags (signature, highlightOnHome, isHero).  
- **`program`** – Rewards, Benefit Nights, Catering content: hero, headline stat, benefits, steps, packages (for Catering), FAQ, CTA.  
- **`location`** – address, city/state/ZIP, hours, phone, mapUrl, orderingUrl, isPrimary.  
- **`page`** – About, Contact and future pages: hero, content blocks, SEO.

All of the above are editable via Sanity Studio and consumed as typed data in Next.js.

---

## 8. Functional Requirements (By Theme)

### 8.1 Mobile-First Behavior

- Layouts must be designed and tested on 375–430px widths first.  
- Primary CTAs should be visible without scrolling on first viewport where possible.  
- Headers must collapse to a hamburger with a clear, accessible menu.

### 8.2 Click-to-Call and Directions

- Any phone number on the site must be clickable (`tel:`) and tested on real devices.  
- `Get Directions` uses map URLs defined in Sanity; must open in native map app on mobile.

### 8.3 Accessible Menu Mode

- `/menu` includes a clearly labeled toggle (e.g., “Accessible View”).  
- When enabled:  
  - Larger text sizes for item names and prices.  
  - Higher contrast background/text combos.  
  - Same content and structure, just more readable.

### 8.4 Forms (Contact & Program Inquiries)

- All forms must:
  - Validate required fields with clear inline errors.  
  - Handle network errors gracefully.  
  - Show a confirmation message on success.  
- Exact delivery mechanism (email, API, etc.) to be defined with ops.

---

## 9. Non‑Functional Requirements

### 9.1 Performance

- Use Next.js static generation (SSG/ISR) wherever possible.  
- Optimize images via `next/image` with proper sizing.  
- Target Lighthouse scores ≥ 90 on Performance, Accessibility, and Best Practices for Home and Menu.

### 9.2 Accessibility

- Follow `accessibility-checklist.md`.  
- Manual keyboard-only and screen reader spot checks on Home, Menu, Rewards, Benefit Nights, Catering, Locations, and Contact.

### 9.3 SEO

- Descriptive page titles and meta descriptions for all core routes.  
- XML sitemap and robots.txt configured.  
- Local SEO emphasis (Rancho Cucamonga, Haven City Market, “Hawaiian food”, “bento”, “Hawaiian bakery”).

### 9.4 Reliability & Ops

- Production deploys via Vercel with preview environments for PRs.  
- Env vars and config documented in `env-and-config.md`.  
- Deployment procedures in `deployment-runbook.md`.

---

## 10. Integrations & Future Roadmap

### 10.1 Current Integrations (v1)

- **Sanity CMS:** content management for all editable data.  
- **External Ordering:** optional `orderingUrl` per location (links out to POS/third-party ordering).

### 10.2 Future Enhancements (Not in v1 but Planned For)

- **Digital menu mode** for TV/digital signage (reusing website menu components).  
- **Loyalty integration** with a rewards platform (expose status, points, and challenges on `/rewards`).  
- **AI personalization hooks**: daypart-specific highlights, weather-based promos, etc.  
- **Stories/Blog** for seasonal drops, collabs, and community recaps.

---

## 11. Success Criteria

The project is successful if:

- Guests can, on mobile, within **3 taps**:
  - View the menu.  
  - Get directions.  
  - Call the restaurant.

- Staff can update menu items, prices, and hours in Sanity without dev support.  
- Lighthouse scores ≥ 90 for Performance and Accessibility (mobile) on Home and Menu.  
- Benefit Nights and Catering pages generate consistent inquiries via form/email.  
- The site visually feels “franchise-ready” while clearly representing Buddas Hawaiian’s unique brand and community focus.

