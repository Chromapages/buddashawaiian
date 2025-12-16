# Buddas Hawaiian – Sanity Content Model (v2)

> **File:** `sanity-content-model.md`  
> **Scope:** Content types and relationships for Buddas Hawaiian website  
> **Used By:** Next.js app, design system components, user flows

---

## 1. Goals

- Give Buddas a **franchise-grade, structured CMS** that works long-term.
- Allow non-dev staff to safely update:
  - Menu items & categories
  - Programs (Rewards, Benefit Nights, Catering)
  - Locations & hours
  - Homepage, About, Contact content
- Keep schemas **simple but extensible** for future features:
  - Loyalty/gamification
  - Blog/stories
  - Digital menu mode

---

## 2. High-Level Types

**Document types:**

1. `siteSettings` – global site configuration.
2. `menuCategory` – groupings for menu items.
3. `menuItem` – individual dishes/drinks/bakery items.
4. `program` – Rewards, Benefit Nights, Catering.
5. `location` – physical store locations.
6. `page` – About, Contact, and any static content pages.
7. `testimonial` – guest quotes for social proof.

**Object types (embedded):**

- `seo` – per-page SEO settings.
- `cta` – call-to-action buttons.
- `richText` – portable text fields.
- `faqItem` – question/answer pairs.
- `package` – catering or program packages.
- `socialLink` – global social profiles.

---

## 3. Document Types – Details

### 3.1 `siteSettings`

**Purpose:** Global brand and site configuration.

**Key fields:**

- `title` (string) – site title (e.g., “Buddas Hawaiian Bakery & Grill”).
- `tagline` (string) – marketing tagline (“Bring Aloha to the Table.”).
- `logo` (image) – primary logo.
- `favicon` (image) – browser favicon.
- `primaryPhone` (string) – main contact phone.
- `primaryEmail` (string) – main contact email.
- `primaryLocation` (reference → `location`) – default “home” location.
- `sustainabilityBlurb` (text) – short community/sustainability line used in footer or About.
- `announcementBar` (object, optional):
  - `message` (string)
  - `enabled` (boolean).
- `socialLinks[]` (`socialLink`) – IG, TikTok, FB, etc.
- `defaultSeo` (`seo`) – fallback SEO for pages.

**Used by:**

- `<Header />`, `<Footer />`, `<StickyMobileCtaBar />`, global meta tags.

---

### 3.2 `menuCategory`

**Purpose:** Structure `/menu` and power category navigation.

**Key fields:**

- `title` (string) – e.g., “Signature Bentos”.
- `slug` (slug) – auto from `title` (e.g., `signature-bentos`).
- `description` (text, optional) – short line under heading.
- `sortOrder` (number) – manual sort order.
- `icon` (string or simple icon selector, optional) – small visual indicator.
- `visible` (boolean) – toggle to show/hide.

**Used by:**

- `<MenuCategoryNav />`, `<MenuCategorySection />`, `/menu` layout.
- Home sections (e.g., pulling featured items from one or more categories).

---

### 3.3 `menuItem`

**Purpose:** Individual dishes, drinks, bakery items.

**Key fields:**

- `name` (string) – display name (e.g., “Loco Moco Bento”).
- `slug` (slug) – for linking / future detail pages.
- `category` (reference → `menuCategory`) – required.
- `description` (text) – short, appetizing copy.
- `price` (number) – base price.
- `priceSecondary` (number, optional) – optional variant or combo price.
- `isSignature` (boolean) – show under Signature Bentos / homepage highlights.
- `isHero` (boolean) – candidate for hero/digital menu rotation.
- `tags[]` (string, from predefined list):
  - `spicy`, `keiki`, `popular`, `locallySourced`, `ecoFriendly`, `new`, `limited`.
- `image` (image, optional) – food photography.
- `sortOrder` (number, optional) – manual ordering within category.
- `dietaryNotes` (string, optional) – gluten-free, vegetarian, etc.

**Used by:**

- `<MenuItemCard />`, `<MenuCategorySection />`.
- `<SignatureBentosSection />`, `<BakeryHighlightsSection />`.

**Notes:**

- Price is per single item; combos/sets can be described in `description` or via future `variant` objects.
- Keep descriptions tight; mobile-first.

---

### 3.4 `program`

**Purpose:** Reusable pattern for Rewards, Benefit Nights, Catering.

**Key fields:**

- `key` (string) – `rewards`, `benefit-nights`, `catering`.
- `title` (string) – page title/H1.
- `slug` (slug) – e.g., `rewards`, `benefit-nights`, `catering`.
- `heroTitle` (string) – headline (“Eat. Earn. Repeat.”).
- `heroSubtitle` (text) – 1–2 sentence intro.
- `heroStat` (`programStat` object, optional):
  - `value` (string) – e.g., “25%”.
  - `label` (string) – e.g., “Back to your group”.
- `benefits[]` (array of objects):
  - `title` (string).
  - `description` (text).
- `steps[]` (array of objects):
  - `title` (string).
  - `description` (text).
  - `order` (number).
- `packages[]` (`package`, primarily for Catering):
  - `name` (string).
  - `description` (text).
  - `minGuests` (number).
  - `maxGuests` (number).
  - `priceRange` (string, e.g., “$12–$16 per person”).
- `faq[]` (`faqItem`).
- `primaryCta` (`cta`):
  - `label` (string).
  - `href` (url or mailto).
  - `type` (enum: `link`, `mailto`, `tel`).
- `secondaryCta` (`cta`, optional).
- `seo` (`seo`, optional).

**Used by:**

- `/rewards`, `/benefit-nights`, `/catering` pages and `<ProgramCard />`s on Home.

---

### 3.5 `location`

**Purpose:** Store information for each physical location.

**Key fields:**

- `name` (string) – e.g., “Buddas – Haven City Market”.
- `slug` (slug).
- `addressLine1` (string).
- `addressLine2` (string, optional).
- `city` (string).
- `state` (string).
- `postalCode` (string).
- `phone` (string).
- `hoursSummary` (string) – short human-readable hours.
- `hoursDetails` (richText, optional) – detailed breakdown if needed.
- `mapUrl` (url) – link to Google Maps or equivalent.
- `orderingUrl` (url, optional) – online ordering link.
- `isPrimary` (boolean) – default location for site.
- `notes` (text, optional) – parking, special instructions.

**Used by:**

- `<LocationsListSection />`, `<LocationCard />`, `<LocationsTeaserSection />`.
- `<StickyMobileCtaBar />` for `Call` & `Directions`.

---

### 3.6 `page`

**Purpose:** Flexible content pages (About, Contact, etc.).

**Key fields:**

- `title` (string).
- `slug` (slug) – e.g., `about`, `contact`.
- `heroTitle` (string).
- `heroSubtitle` (text, optional).
- `heroImage` (image, optional).
- `contentBlocks[]` (array of union types), e.g.:
  - `richTextBlock` – body copy.
  - `pillarList` – title + list of “pillars”.
  - `imageGallery` – gallery of images.
  - `calloutSection` – icon + short description cards.
- `seo` (`seo`, optional).

**Used by:**

- `/about`, `/contact`, and future content pages.

---

### 3.7 `testimonial`

**Purpose:** Store guest quotes for use across the site.

**Key fields:**

- `quote` (text).
- `name` (string).
- `context` (string, optional) – e.g., “Local Guest”.
- `location` (reference → `location`, optional).
- `sortOrder` (number, optional).
- `featured` (boolean).

**Used by:**

- `<TestimonialsSection />` on Home or other pages.

---

## 4. Object Types

### 4.1 `seo`

- `title` (string).
- `description` (text).
- `image` (image, optional).
- `noIndex` (boolean, optional).

### 4.2 `cta`

- `label` (string).
- `href` (url).
- `type` (string enum: `link`, `mailto`, `tel`).

### 4.3 `faqItem`

- `question` (string).
- `answer` (richText).

### 4.4 `package`

- `name` (string).
- `description` (text).
- `minGuests` (number).
- `maxGuests` (number).
- `priceRange` (string).

### 4.5 `socialLink`

- `platform` (string enum: `instagram`, `tiktok`, `facebook`, `youtube`, `other`).
- `url` (url).

---

## 5. Relationships & Queries (High-Level)

- **Menu listing:**
  - Query all `menuCategory` ordered by `sortOrder`.
  - For each category, fetch `menuItem`s with that reference, ordered by `sortOrder` then name.

- **Signature Bentos:**
  - Filter `menuItem` where `isSignature == true`, limit top 3–6.

- **Programs pages:**
  - Query `program` where `key == "rewards" | "benefit-nights" | "catering"`.

- **Locations:**
  - Query all `location` ordered by `isPrimary desc`, name asc.

- **Home content:**
  - Option A: Use `page` document with slug `home`.
  - Option B: Use `siteSettings` + curated queries (Signature Bentos, primary location, testimonials).

---

## 6. Editorial Guardrails

- Avoid deleting documents; prefer toggling `visible` or `featured`.
- Keep names and descriptions **short and mobile-friendly**.
- Avoid emojis in critical fields (titles/headings) unless brand explicitly wants them.
- Do not change `key` values on `program` documents without updating code.

Update this model as new features (loyalty, stories/blog, digital menu screens) are introduced.
