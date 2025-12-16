# Buddas Hawaiian – Web Design System (v2)

> **File:** `design-system.md`  
> **Scope:** Marketing website UI design system for Buddas Hawaiian Bakery & Grill  
> **Applies To:** Next.js web app, marketing pages, digital menu components

---

## 1. Purpose & Principles

This design system makes the Buddas Hawaiian website feel **franchise-grade**: bold, mobile-first, and food-forward like major QSR brands, while staying true to the Buddas Hawaiian bakery + grill vibe.

### 1.1 Core Principles

1. **Bold Minimalism, Food First**  
   - Big, doughy headlines on clean backgrounds.  
   - Simple layouts with generous negative space around food.  
   - Minimal chrome: fewer borders, more whitespace.

2. **Aloha + Franchise Polish**  
   - Warm, friendly tone and rounded shapes.  
   - Tight typographic hierarchy, consistent spacing, clean grids.  
   - Should visually sit next to Domino’s / BK / Shake Shack and feel at home.

3. **Mobile-First**  
   - Design for 375–430px first.  
   - Primary CTAs visible in first viewport where possible.  
   - Sticky mobile actions for `View Menu`, `Call`, `Directions`.

4. **Accessibility by Default**  
   - WCAG 2.2 AA: contrast, keyboard access, semantic structure.  
   - Accessible Menu Mode on `/menu` for high-contrast, larger-text viewing.

5. **Community & Sustainability Forward**  
   - Subtle but consistent patterns to highlight Benefit Nights, community, and eco-forward packaging or sourcing when available (badges, micro-copy).

---

## 2. Brand Colors

### 2.1 Core Palette

All color names assume Tailwind extension in `tailwind.config.ts`.

| Token              | Hex      | Usage                                                           |
|--------------------|----------|-----------------------------------------------------------------|
| `buddas-teal`      | `#54BFA5`| Secondary brand color, backgrounds, chips, subtle accents.      |
| `buddas-gold`      | `#E9C559`| Primary CTA, highlights, price accents, badges.                 |
| `buddas-cream`     | `#FAF2D8`| Main page background, cards, sections.                          |
| `buddas-brown`     | `#3D2A1A`| Primary text on light, headings on cream, dividers when needed. |
| `buddas-orange`    | `#F38D2D`| Spicy / limited / promo tags, hover accent, attention chips.    |
| `buddas-dark`      | `#1D130C`| Darkest text, overlays, high-contrast mode text.                |
| `buddas-white`     | `#FFFFFF`| Text on teal/orange, surfaces, cards.                           |

> If additional extended colors exist from the broader brand, keep them under `buddas-*` and document here.

### 2.2 Color Roles

- **Primary CTA:** `bg-buddas-gold text-buddas-dark`  
  - Use for main actions: `View Menu`, `Apply for Benefit Night`, `Request Catering Info`.

- **Secondary CTA:** `bg-buddas-teal text-white`  
  - Use for navigational actions: `See Rewards`, `Learn More`, `View All Locations`.

- **Backgrounds:**  
  - Default page: `bg-buddas-cream`.  
  - Accent sections: `bg-white` or a very light tint of teal/gold.  
  - Do not use dark backgrounds for large sections except for very specific hero moments.

- **Text:**  
  - Body: `text-buddas-brown` on cream/white.  
  - Muted: `text-buddas-brown/70` for secondary text.  
  - On dark: `text-buddas-cream` or `text-white`.

- **Feedback:**  
  - Success: soft green derived from teal (e.g., `buddas-success`).  
  - Warning/Spicy: `buddas-orange`.  
  - Error: warm red (`buddas-error`, to be defined) with accessible contrast.

### 2.3 Color Psychology Rules

- Use **warm colors** (gold, orange) on food and CTAs to drive appetite and action.  
- Keep backgrounds **soft and neutral** so the food and key stats stand out.  
- Avoid large blocks of teal behind dense text; teal is best as an accent, not as a reading surface.

### 2.4 Accessible Menu Palette

In Accessible Menu Mode (`/menu`):

- Background: `bg-white` or `bg-buddas-cream`.  
- Text: `text-buddas-dark`.  
- Category headers: `text-buddas-dark` with underlines or subtle separators.  
- Tags/Badges: higher contrast pairings (e.g., `bg-buddas-orange text-buddas-dark`).

All text must meet WCAG AA contrast ratios.

---

## 3. Typography

### 3.1 Typefaces

- **Display / Headline:** `Lilita One`, fallback `system-ui, sans-serif`.  
- **Body / UI:** `Inter`, fallback `system-ui, sans-serif`.

Tailwind config:

- `font-display` → Lilita One  
- `font-body` → Inter

### 3.2 Typographic Roles

- **H1 (Display):**  
  - Use `font-display`.  
  - Mobile: 1.8–2.2rem (28–36px).  
  - Desktop: 2.5–3rem (40–48px).  
  - Example: “Bring Aloha to the Table.”

- **H2 (Section headings):**  
  - `font-display`, 1.5–2rem.  
  - Used for “Signature Bentos”, “Fresh from the Bakery”, “Buddas Rewards”.

- **H3/H4 (Subheadings / Card titles):**  
  - `font-body` with semibold or bold.  
  - 1.1–1.3rem; keep them short.

- **Body text:**  
  - `font-body`, 0.95–1rem on mobile, up to 1.05–1.1rem on desktop.  
  - Line length: aim for 60–75 characters where possible.

- **Microcopy & Labels:**  
  - `font-body`, 0.75–0.85rem.  
  - Use increased letter-spacing for all-caps labels if needed.

### 3.3 Hierarchy Rules

- Exactly one **H1** per page.  
- H2 for top-level sections.  
- H3/H4 for subsections or card titles; do not skip levels (no H4 after H2).  
- Headline copy should be sharp, not long paragraphs.

---

## 4. Layout, Grid & Spacing

### 4.1 Grid

- **Content width:** max-width ~1200–1280px for main content.  
- **Columns:**  
  - Desktop: 12-column grid conceptually; most sections use 2–3 primary columns.  
  - Tablet: 6–8 conceptual columns.  
  - Mobile: 1 column.

### 4.2 Breakpoints (Tailwind)

- `sm` ~ 640px  
- `md` ~ 768px  
- `lg` ~ 1024px  
- `xl` ~ 1280px

Design mobile for `base`, then progressively enhance at `md` and up.

### 4.3 Spacing Scale

Use Tailwind spacing scale but establish defaults:

- Section vertical padding: `py-12` (mobile), `py-16`–`py-20` (desktop).  
- Card padding: `p-4` (mobile), `p-6` (desktop).  
- Gaps: `gap-4` for card internals, `gap-6`–`gap-8` for section layouts.

### 4.4 Card Style

- Rounded corners: `rounded-2xl`.  
- Shadows: soft elevation only (`shadow-sm`, `shadow-md`); no harsh drop shadows.  
- Background: `bg-white` or `bg-buddas-cream`.  
- Border: generally omitted; when needed, use subtle `border-buddas-brown/10`.

---

## 5. Core UI Elements (Atoms)

### 5.1 Buttons

**Primary Button** (e.g., “View Menu”, “Apply for Benefit Night”):

- Styles:
  - `inline-flex items-center justify-center rounded-full bg-buddas-gold px-6 py-3 font-body text-sm font-semibold text-buddas-dark`  
  - Hover: `hover:bg-buddas-gold/90`.  
  - Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-buddas-gold focus-visible:ring-offset-2 focus-visible:ring-offset-buddas-cream`.

**Secondary Button** (e.g., “See Rewards”, “View All Locations”):

- Styles:
  - `inline-flex items-center justify-center rounded-full bg-buddas-teal px-5 py-2.5 font-body text-sm font-semibold text-white hover:bg-buddas-teal/90`.

**Ghost Button** (for low-priority actions):

- Styles:
  - `inline-flex items-center justify-center rounded-full border border-buddas-brown/20 bg-transparent px-5 py-2.5 font-body text-sm font-semibold text-buddas-brown hover:bg-buddas-brown/5`.

### 5.2 Links

- Underline on hover, not always-on underlines.  
- `text-buddas-teal` or `text-buddas-brown` depending on context.  
- Use `aria-label` for icon-only links.

### 5.3 Tags & Badges

- **Menu tags** (Spicy, Keiki-friendly, Popular, Locally Sourced):
  - `inline-flex items-center rounded-full bg-buddas-cream px-3 py-1 text-xs font-medium text-buddas-brown`.
  - Variant: `bg-buddas-orange text-buddas-dark` for Spicy / Special.

- **Program stat badge** (e.g., “Up to 25% Giveback”):
  - Larger badge with `bg-buddas-cream` and bold numeric value.

### 5.4 Inputs & Form Elements

- **Input/textarea:**  
  - `w-full rounded-xl border border-buddas-brown/20 bg-white px-4 py-3 text-sm text-buddas-brown placeholder:text-buddas-brown/40 focus:border-buddas-teal focus:outline-none focus:ring-2 focus:ring-buddas-teal/40`.

- **Error state:**  
  - Border `border-buddas-error`, helper text in red under field.

### 5.5 Iconography

- Use simple, flat icons (line or filled) that match rounded corners and soft shapes.  
- Avoid overly detailed or glossy icons.  
- Colors: primarily `buddas-brown` outlines with teal/gold fills.

---

## 6. Components (Molecules & Sections)

### 6.1 Key Molecules

- **MenuItemCard**  
  - Includes name, description, price, optional tags, optional image.  
  - Layout: image (if present) top or left; text right/below.  
  - Text-first on mobile for scannability.

- **ProgramCard** (for Rewards / Benefit Nights / Catering previews)  
  - Icon, title, 2–3 line description, CTA.

- **LocationCard**  
  - Name, address, hours summary, phone, buttons for `Get Directions` and `Order Online` (if available).

- **TestimonialCard**  
  - Quote, name, role/location, optional rating.

### 6.2 Section Patterns

1. **Hero Section (Home, Programs)**  
   - Left: headline, subhead, primary & secondary CTAs.  
   - Right: food imagery or collage.  
   - Mobile: stack with hero image below text.

2. **Signature Bentos Section**  
   - Section heading + short intro.  
   - Horizontal scroll on mobile or grid on desktop.

3. **Bakery Highlights Section**  
   - 2–4 featured items, each with image and short description.  
   - Emphasize warm backgrounds around bread/rolls.

4. **Programs Strip (Home)**  
   - Three cards in a row (stacked on mobile): Rewards, Benefit Nights, Catering.  
   - Consistent layout: icon, title, copy, CTA.

5. **Programs Pages (Rewards, Benefit Nights, Catering)**  
   - Program Hero: big stat badge + clear H1.  
   - Benefits list in cards.  
   - "How it Works" steps using ordered list.  
   - FAQ in accordion with accessible patterns.

6. **Locations Section / Page**  
   - Cards with map and contact buttons.  
   - On `/locations`, grid on desktop, stacked on mobile.

7. **Social Proof Section**  
   - Carousel or simple grid.  
   - Keep card text short, no long paragraphs.

8. **Sticky Mobile CTA Bar**  
   - Fixed bottom bar with 2–3 actions: `View Menu`, `Call`, `Directions`.  
   - Full-width, rounded top corners, subtle shadow.

9. **Accessible Menu Toggle**  
   - Simple toggle or button near top of `/menu`.  
   - Clear label: “Accessible View”.  
   - Visual feedback when enabled.

10. **Sustainability & Community Row**  
    - Small section on Home or About with icons + short blurbs: Benefit Nights, local community, packaging or sourcing if applicable.

---

## 7. States, Motion & Feedback

### 7.1 Hover & Active

- Buttons: color shift (10–15% darker), subtle elevation.  
- Cards: `shadow-md` and slight translate-y (`-translate-y-px`) on hover (desktop only).  
- Underlines on hover for text links.

### 7.2 Focus

- All interactive components must have visible focus rings:  
  - 2px ring in `buddas-teal` or `buddas-gold` with offset.  
- Never remove outlines without a replacement.

### 7.3 Motion

- Use **subtle transitions** (150–200ms) on hover/active for buttons and cards.  
- No large auto-animating carousels.  
- If using marquee/slider behavior for specials, provide controls and pause on hover.

---

## 8. Accessibility Patterns

Follow `accessibility-checklist.md` plus these specifics:

- **Brand contrast:** verify all text/background pairs meet WCAG AA.  
- **Menu readability:**  
  - In standard mode, ensure category headings and prices are easily legible.  
  - In Accessible Menu Mode, increase font sizes and contrast without changing content.

- **Forms:**  
  - Labels always visible (not placeholder-only).  
  - Clear error states and context.

- **Navigation:**  
  - Keyboard users can access all nav links, CTAs, FAQ toggles, and menu categories.

---

## 9. Example Usage

### 9.1 Home Hero Example

- Background: `bg-buddas-cream`.  
- H1: Lilita One, large size, `text-buddas-brown`.  
- Subheading: Inter, `text-buddas-brown/80`.  
- Primary CTA: `View Menu` (gold).  
- Secondary CTA: `See Rewards` (teal).  
- Image: large food plate, minimal props, soft shadow.

### 9.2 Menu Item Card Example

- Card: `rounded-2xl bg-white p-4 shadow-sm`.  
- Title: Inter bold, `text-buddas-brown`.  
- Description: Inter regular, `text-buddas-brown/80`.  
- Price: Inter semibold, `text-buddas-brown` with gold accent (`bg-buddas-gold/20 px-2 rounded-full`).  
- Tags: small pill tags under description.

---

## 10. Governance & Changes

- Any new colors must be added to Tailwind config under `buddas-*` and documented here.  
- New components should follow the same spacing, corner radius, and typography rules.  
- When the brand evolves (new mascots, sustainability claims, etc.), update this doc and then refactor components to match.

This design system, combined with `prd.md`, `component-hierarchy.md`, and `sanity-content-model.md`, should keep the Buddas Hawaiian web experience consistent, accessible, and ready to scale like a franchise site.

