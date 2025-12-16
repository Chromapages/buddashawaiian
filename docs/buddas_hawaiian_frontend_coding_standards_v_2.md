# Buddas Hawaiian – Frontend Coding Standards (v2)

> **File:** `coding-standards.md`  
> **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS + Sanity  
> **Scope:** Marketing website + shared UI library

This document defines coding conventions so the Buddas Hawaiian web experience stays fast, maintainable, and franchise-ready.

---

## 1. Tech Stack & Architecture

- **Framework:** Next.js (App Router, `app/` directory).  
- **Language:** TypeScript (strict mode).  
- **Styling:** Tailwind CSS with a small layer of composition via utility components when helpful.  
- **CMS:** Sanity for structured content.  
- **Rendering:** Prefer static generation (SSG/ISR) for all marketing pages.

### 1.1 Component Strategy

- Use **Server Components** by default in `app/` routes.  
- Use **Client Components** only when needed (interactive elements, hooks that require browser APIs, local state).  
- Organize components roughly by:
  - `components/layout/` – layout-level components (`Header`, `Footer`, `RootShell`).  
  - `components/ui/` – atoms and small molecules (`Button`, `Badge`, `MenuItemCard`).  
  - `components/sections/` – page-level sections (`HomeHeroSection`, `CateringPackagesSection`).  
  - `lib/` – utilities (Sanity queries, formatting).  
  - `types/` – shared TypeScript types and interfaces.

---

## 2. TypeScript Conventions

- Enable **`strict`** in `tsconfig`.  
- Avoid `any` — prefer explicit types or generics.  
- Define shared domain types in `types.ts` (e.g., `MenuItem`, `MenuCategory`, `Program`, `Location`).  
- Use **`zod`** or similar runtime validation for critical external data (e.g., env vars, external APIs) where appropriate.

### 2.1 Props & Components

- Define props as interfaces or type aliases:

```ts
interface MenuItemCardProps {
  item: MenuItem;
  showImage?: boolean;
}
```

- Default exports for top-level sections and pages; named exports for reusable UI primitives.  
- Use descriptive prop names (`primaryCtaLabel`, `primaryCtaHref`, not `btn1`, `btn2`).

---

## 3. Tailwind & Styling

- Use Tailwind utility classes **in JSX** for most styling.  
- Extract repetitive patterns into reusable components or small helpers when:
  - The pattern appears **3+ times**, or  
  - The pattern encodes brand rules (e.g., primary button, card shell).

### 3.1 Class Ordering

Recommended order (rough):

1. Layout: `flex`, `grid`, `items-*`, `justify-*`, `gap-*`.  
2. Box model: `p-*`, `m-*`, `w-*`, `h-*`, `max-w-*`.  
3. Typography: `font-*`, `text-*`, `leading-*`, `tracking-*`.  
4. Visual: `bg-*`, `border-*`, `rounded-*`, `shadow-*`.  
5. State: `hover:*`, `focus:*`, `active:*`.  
6. Responsive: `sm:*`, `md:*`, `lg:*`, etc.

Use a Tailwind class sorter in your editor where possible.

### 3.2 Design Tokens

- Color tokens: use `buddas-*` colors defined in Tailwind config (`buddas-teal`, `buddas-gold`, etc.).  
- Fonts: use `font-display` for Lilita One, `font-body` for Inter.  
- Border radius: `rounded-2xl` for cards and major surfaces.

---

## 4. Accessibility & Semantics

- Always use **semantic HTML**: `<main>`, `<header>`, `<nav>`, `<section>`, `<footer>`.  
- Only one `<h1>` per page.  
- Use ARIA attributes sparingly and correctly; prefer native semantics.  
- All interactive elements must be reachable and operable via keyboard.

### 4.1 Images

- Use `next/image` for all content images.  
- Provide meaningful `alt` text for food and UI images.  
- Use empty `alt` (`""`) only for purely decorative images.

### 4.2 Forms

- Each input must have a visible `<label>`.  
- Error states must be communicated via text, not just color.  
- Use `aria-invalid`, `aria-describedby` correctly on error.

See `accessibility-checklist.md` for more detail.

---

## 5. Data Fetching & Sanity Integration

- Centralize Sanity queries in `lib/sanity` (e.g., `lib/sanity/queries.ts`).  
- Use strongly-typed query functions:

```ts
export async function getMenuCategories(): Promise<MenuCategory[]> {
  // ...
}
```

- Avoid sprinkling GROQ strings throughout components.  
- Handle empty or missing data gracefully (fallback copy, skeletons, or user-friendly messages).

### 5.1 Caching & ISR

- Use **static generation** (`export const revalidate = X`) for most routes.  
- Set reasonable revalidation intervals for content pages (e.g., 60–300 seconds) depending on freshness needs.  
- Prefer build-time queries for highly stable content (About, core nav).

---

## 6. File & Naming Conventions

- Use **kebab-case** for filenames (`menu-item-card.tsx`, `home-hero-section.tsx`).  
- Use **PascalCase** for component names (`MenuItemCard`, `HomeHeroSection`).  
- Use **camelCase** for variables and functions.  
- Avoid abbreviations unless widely understood (`cta`, `faq`).

### 6.1 Route Structure

- Keep routes flat and descriptive:
  - `/`  
  - `/menu`  
  - `/rewards`  
  - `/benefit-nights`  
  - `/catering`  
  - `/locations`  
  - `/about`  
  - `/contact`

- Use dynamic segments only when needed (`/stories/[slug]` later).

---

## 7. State & Logic

- Keep **business logic** (transforming Sanity data, formatting) in utility functions or custom hooks, not in JSX trees.  
- Minimize global state — most pages are read-only.  
- Avoid heavy client-side state libraries unless absolutely required.

---

## 8. Testing & QA Hooks

- Use `data-testid` attributes for critical flows (menu, CTA buttons, forms) where helpful.  
- Coordinate with `qa-test-plan.md` to ensure selectors and flows line up.  
- For complex components, add unit tests (if a test framework is in place) focused on:
  - Rendering with typical and empty data.  
  - Proper handling of loading/error states.

---

## 9. Performance Practices

- Use `next/image` for images with proper `sizes` and `fill`/`width` props.  
- Avoid loading large, non-critical JS on initial load.  
- Use dynamic imports for heavy, rarely used components if needed.  
- Align with `performance-and-seo-checklist.md` for Core Web Vitals goals.

---

## 10. Documentation & Comments

- Keep components self-documenting via clear props and naming.  
- Use comments to explain **why**, not **what**.  
- When adding new components or patterns, update:
  - `component-hierarchy.md`  
  - `design-system.md`  
  - `sanity-content-model.md` (if content model changes)

This standard should evolve with the project. Revisit when adding major new features (digital menu mode, loyalty UI, etc.).

