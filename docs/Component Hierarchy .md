# Buddas Hawaiian – Component Hierarchy (v2)

> **File:** `component-hierarchy.md`  
> **Scope:** React/Next.js UI component map for Buddas Hawaiian marketing site  
> **Audience:** Frontend, UX, and CMS integration

---

## 1. Purpose

Define the **reusable UI building blocks** for the Buddas Hawaiian website so design, engineering, and content modeling stay in sync.

This hierarchy is:

- **Mobile-first**
- **Franchise-grade** (clean, scalable, and consistent)
- Designed to play well with **Sanity** content models.

---

## 2. Global Layout Components

### 2.1 `<RootLayout>`

- Shell for all pages in `app/`.
- Responsibilities:
  - HTML `<head>` configuration (via Next metadata).
  - Global fonts (Lilita One + Inter).
  - Global background (`bg-buddas-cream`).
  - Wrap with `<Header />`, `<Footer />`, and any global providers.

### 2.2 `<Header />`

- Contents:
  - Logo (link to `/`).
  - Primary nav:
    - Home (logo), Menu, Rewards, Benefit Nights, Catering, Locations, About, Contact.
  - Mobile nav:
    - Hamburger button + slide-out panel.
- States:
  - Desktop vs mobile.
  - Active link styling.

### 2.3 `<Footer />`

- Contents:
  - Logo + short brand blurb.
  - Link columns:
    - Menu, Programs (Rewards, Benefit Nights, Catering), Locations, About, Contact.
  - Utility links:
    - Privacy, Terms.
  - Social icons.
- Behavior:
  - Simple, no complex state.

### 2.4 `<PageSection />` (optional utility)

- Generic wrapper with consistent padding and max-width constraints.
- Used by all page sections to enforce spacing and alignment.

### 2.5 `<StickyMobileCtaBar />`

- Mobile-only fixed bottom bar.
- Props:
  - `primaryAction` (e.g., View Menu).
  - `secondaryAction` (Call).
  - `tertiaryAction` (Directions).
- Used on:
  - `/`, `/menu`, `/locations` (and optionally program pages).

---

## 3. Atoms

Small, reusable primitives.

### 3.1 `<Button />`

- Variants:
  - `primary` – gold background.
  - `secondary` – teal background.
  - `ghost` – transparent with border.
- Props:
  - `variant`, `size`, `href` or `onClick`, `icon`, `ariaLabel`.
- Accessibility:
  - Keyboard focus ring, ARIA support for icon-only buttons.

### 3.2 `<TextLink />`

- Handles inline and standalone links.
- Props:
  - `href`, `children`, optional `target`, `ariaLabel`.

### 3.3 `<Badge />`

- Used for:
  - Spicy, Popular, Keiki, Locally Sourced, Eco-Friendly, etc.
- Props:
  - `variant` (e.g., `default`, `spicy`, `highlight`).
  - `children`.

### 3.4 `<Price />`

- Standard styling for prices.
- Props:
  - `amount` (number), optional `currency`, optional `isRange`.

### 3.5 Form Atoms

- `<TextField />`, `<TextArea />`, `<SelectField />`, `<Checkbox />`.
- Standard label + input + helper/error text pattern.

### 3.6 `<TagList />`

- Renders a row of `Badge`s for an item’s tags.

---

## 4. Shared Molecules

### 4.1 `<MenuItemCard />`

- Represents a single menu item.
- Props (mapped from Sanity `menuItem`):
  - `name`, `description`, `price`, `image`, `tags`, `isSignature`, `isHero`.
- Layout:
  - Mobile: text-first, image below or above.
  - Desktop: image optional, card remains text-dominant.

### 4.2 `<MenuCategorySection />`

- Wraps a set of menu items in a category.
- Props:
  - `title`, `description`, `items[]`.
- Behavior:
  - Provides anchor target for category navigation.

### 4.3 `<ProgramCard />`

- Used on Home’s programs strip and possibly other promos.
- Props:
  - `title`, `description`, `icon`, `ctaLabel`, `ctaHref`.

### 4.4 `<ProgramStatBadge />`

- Displays a key stat like “Up to 25% Giveback” or “Buy 10, Get 1 Free”.
- Props:
  - `value`, `label`.

### 4.5 `<LocationCard />`

- Props (from Sanity `location`):
  - `name`, `address`, `city`, `state`, `zip`, `hoursSummary`, `phone`, `mapUrl`, `orderingUrl`.
- Actions:
  - `Get Directions` button.
  - `Call` button.
  - Optional `Order Online` button.

### 4.6 `<TestimonialCard />`

- Props:
  - `quote`, `name`, optional `context` (e.g., “Local Guest”).
- Design:
  - Compact, easy to repeat in a grid or slider.

### 4.7 `<FAQItem />`

- Single Q&A accordion.
- Props:
  - `question`, `answer`.
- Used in:
  - Rewards, Benefit Nights, Catering pages.

---

## 5. Page-Level Sections (Organisms)

### 5.1 Home (`/`)

**Components:**

1. `<HomeHeroSection />`
   - Uses atoms + buttons.
   - Props from Sanity `page_home` document:
     - `heroTitle`, `heroSubtitle`, `heroCtaPrimary`, `heroCtaSecondary`, `heroImage`.

2. `<SignatureBentosSection />`
   - Props: subset of menu items where `isSignature == true` or tagged accordingly.
   - Uses `<MenuItemCard />`.

3. `<BakeryHighlightsSection />`
   - Props: list of featured bakery items from Sanity.
   - Uses `<MenuItemCard />` or a slimmer bakery-specific card.

4. `<ProgramsStripSection />`
   - Renders three `<ProgramCard />`s (Rewards, Benefit Nights, Catering).

5. `<LocationsTeaserSection />`
   - Shows primary location via `<LocationCard />` with CTA to `/locations`.

6. `<TestimonialsSection />`
   - List or slider of `<TestimonialCard />`.

7. `<SustainabilityCommunityRow />`
   - Icons + short blurbs (Benefit Nights, local community, packaging/sourcing).

---

### 5.2 Menu (`/menu`)

**Components:**

1. `<MenuHeroSection />`
   - Simple title + optional subtitle and notice about pricing variations.

2. `<MenuAccessibleToggle />`
   - Toggles Accessible Menu Mode.
   - Props:
     - `enabled`, `onToggle`.
   - Affects typography and colors of menu sections.

3. `<MenuCategoryNav />`
   - Horizontal category tabs or pills.
   - Props:
     - `categories[]`, `activeCategory`, `onCategoryChange`.

4. `<MenuCategoriesContainer />`
   - Renders a sequence of `<MenuCategorySection />`.

5. `<QrBanner />` (optional)
   - If `source=qr`, small banner indicating in-restaurant menu view.

---

### 5.3 Rewards (`/rewards`)

**Components:**

1. `<RewardsHeroSection />`
   - Uses `<ProgramStatBadge />`.

2. `<RewardsBenefitsSection />`
   - List of benefit cards based on Sanity `program` content.

3. `<RewardsHowItWorksSection />`
   - Ordered list of steps.

4. `<RewardsChallengesStrip />` (future-ready)
   - For gamified challenges (“Visit twice this month for a free dessert”).

5. `<RewardsFaqSection />`
   - Uses `<FAQItem />`.

6. `<RewardsCtaSection />`
   - Central CTA to join or instructions to join in-store.

---

### 5.4 Benefit Nights (`/benefit-nights`)

**Components:**

1. `<BenefitNightsHeroSection />`
   - Hero with stat badge and key message.

2. `<BenefitNightsHowItWorksSection />`
   - Step list.

3. `<BenefitNightsEligibilitySection />`

4. `<BenefitNightsFaqSection />`
   - Reuses `<FAQItem />`.

5. `<BenefitNightsCtaSection />`
   - CTA to apply (form or mailto).

6. `<BenefitNightImpactStrip />` (optional)
   - Short stats or stories about successful events.

---

### 5.5 Catering (`/catering`)

**Components:**

1. `<CateringHeroSection />`

2. `<CateringPackagesSection />`
   - Cards for popular packages.

3. `<CateringHowItWorksSection />`

4. `<CateringFaqSection />`
   - Reuses `<FAQItem />`.

5. `<CateringInquiryFormSection />`
   - Uses shared form atoms/molecules.

---

### 5.6 Locations (`/locations`)

**Components:**

1. `<LocationsHeroSection />`

2. `<LocationsListSection />`
   - Grid of `<LocationCard />`.

3. `<PrimaryLocationHighlight />` (optional)
   - Puts main location at top with more detail.

---

### 5.7 About (`/about`)

**Components:**

1. `<AboutHeroSection />`

2. `<AboutStorySection />`

3. `<AboutPillarsSection />`
   - Cards for Flavor First, Everyday Aloha, Community-Centered.

4. `<AboutGallerySection />` (optional)
   - Images of food, space, team.

5. `<AboutCommunityStrip />`
   - Cross-link to Benefit Nights / sustainability story.

---

### 5.8 Contact (`/contact`)

**Components:**

1. `<ContactHeroSection />`

2. `<ContactFormSection />`
   - Shared form molecules.

3. `<ContactInfoSection />`
   - Phone, email, location callouts with CTA buttons.

---

## 6. Utility & Future Components

### 6.1 `<Toast />` / `<InlineAlert />`

- For form success/failure messages.
- Types: `success`, `error`, `info`.

### 6.2 `<DigitalMenuHero />` (future)

- A specialized hero for digital signage:
  - Large hero item.
  - Big price and short descriptor.
  - Rotates through featured items.

### 6.3 `<MascotSpotlight />` (future)

- Slot for any Buddas mascot/character usage:
  - On Home or Rewards page.
  - Simple, contained layout for a character + short copy.

---

## 7. Mapping to Sanity Content

High-level relationships (details in `sanity-content-model.md`):

- **`siteSettings`** → `<Header />`, `<Footer />`, `<StickyMobileCtaBar />`, global contact info.
- **`menuCategory` + `menuItem`** → `<MenuCategoryNav />`, `<MenuCategorySection />`, `<MenuItemCard />`, `<SignatureBentosSection />`, `<BakeryHighlightsSection />`.
- **`program`** (rewards, benefit-nights, catering) → all program-specific sections (Heroes, Benefits, How It Works, FAQ).
- **`location`** → `<LocationsListSection />`, `<LocationCard />`, `<LocationsTeaserSection />`.
- **`page`** (`about`, `contact`, others) → hero and content sections on those routes.

---

## 8. Implementation Notes

- Default components to **server components**; mark specific interactive ones (mobile nav, accordions, forms) as **client**.
- Keep props **typed** using shared interfaces from `types.ts`.
- New components should reuse atoms/molecules above before inventing new patterns.
