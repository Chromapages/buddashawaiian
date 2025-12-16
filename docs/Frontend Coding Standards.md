# Buddas Hawaiian – Frontend Coding Standards (v2)

> **File:** `coding-standards.md`  
> **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS + Sanity  
> **Goal:** Keep the codebase predictable, performant, and easy to extend

---

## 1. Project Structure

- Use **Next.js App Router** (`app/`).
- Suggested top-level structure:

```text
/app
  /(public-pages)
    page.tsx            # Home
    menu/
    rewards/
    benefit-nights/
    catering/
    locations/
    about/
    contact/
  /api                  # if needed

/components
  /layout               # Header, Footer, Layout shells
  /ui                   # Atoms (Button, Input, Badge, etc.)
  /sections             # Page-level sections (Hero, ProgramsStrip, etc.)
  /cards                # MenuItemCard, LocationCard, etc.

/lib
  sanity/
    client.ts
    queries.ts
  utils/
  constants/

/types
  sanity.ts             # Typed interfaces mapped from Sanity schemas

/styles
  globals.css
  tailwind.config.ts
