# Buddas Hawaiian – Content Editing Guide (v2)

> **File:** `content-editing-guide.md`  
> **Audience:** Buddas team editing content in Sanity (non-developers)  
> **Goal:** Make it easy and safe to keep the site updated

---

## 1. Big Picture

BuddasHawaiian.com is powered by **Sanity**, a content management system (CMS).

- You update **content** (text, photos, menu items) in Sanity.  
- The website reads those updates automatically (with a small delay).

You **do not** need to edit code to:

- Change menu prices or descriptions  
- Update hours or contact info  
- Refresh Rewards / Benefit Nights / Catering text  
- Adjust homepage hero copy (if wired to a page doc)

---

## 2. Logging In

1. Go to your Sanity Studio URL (ask your dev if you’re not sure).
2. Log in with your authorized Google/email account.
3. You’ll see a left-hand list of content types:
   - **Site Settings**
   - **Menu Categories**
   - **Menu Items**
   - **Programs**
   - **Locations**
   - **Pages**
   - **Testimonials**

Click a type to view and edit documents.

---

## 3. What You Can Safely Edit

You are safe to edit the following **without breaking the site**:

- Text content (headlines, descriptions, steps, FAQs)
- Menu prices and descriptions
- Item tags (Spicy, Keiki, Popular, etc.)
- Location hours and contact info
- Rewards / Benefit Nights / Catering content
- About page content, Contact instructions
- Testimonials

Do **not** rename schema types, delete required fields, or change `key` values on certain docs (e.g., programs) without dev input.

---

## 4. Common Tasks

### 4.1 Update a Menu Item (Price, Description, Tags)

1. In Sanity, click **Menu Items**.
2. Use search to find the item (e.g., “Loco Moco Bento”).
3. Click the item.
4. Update:
   - **Description** – keep it short and appetizing.
   - **Price** – numeric only (no `$`).
   - **Tags** – e.g., `spicy`, `keiki`, `popular`.
5. Click **Publish** (top-right).
6. Wait a minute, then refresh `/menu` on the live site to confirm.

**Tips:**

- Read your text on a phone; avoid long paragraphs.
- If a menu item is seasonal, you can unpublish or change its category/tags.

---

### 4.2 Feature Items as “Signature Bentos” or Highlights

1. Open **Menu Items**.
2. Find the item you want to feature.
3. Check the **“Signature”** or **“Highlight”** field:
   - `isSignature` – appears in Signature Bentos on Home or Menu.
   - `isHero` – can be used in hero/digital-menu rotations.
4. Click **Publish**.

**Note:** Don’t mark everything as signature; pick a small set (3–6).

---

### 4.3 Update Menu Categories

1. Click **Menu Categories**.
2. Choose the category (e.g., “Signature Bentos”, “Bakery”).
3. You can safely edit:
   - `Title` – how it appears on the site.
   - `Description` – short line under the heading.
4. Use `sortOrder` to change the order categories appear in (lower number = higher up).
5. Click **Publish**.

Avoid deleting categories unless you are sure nothing uses them.

---

### 4.4 Update Rewards / Benefit Nights / Catering Content

1. Click **Programs**.
2. Open the program you want:
   - `rewards`
   - `benefit-nights`
   - `catering`
3. You can safely edit:
   - **Hero title & subtitle** – big headline and intro.
   - **Hero stat** – e.g., “Up to 25% Giveback”.
   - **Benefits** – short bullet-style cards.
   - **Steps** – “How it works” list.
   - **Packages** (mostly for Catering) – name, description, guest counts, price ranges.
   - **FAQ items** – questions and answers.
   - **Primary CTA** – label and link (join page, email, etc.).
4. Click **Publish** and refresh the respective page.

**Guidelines:**

- Keep benefits and steps **short and scannable**, especially on mobile.
- Don’t overload FAQs; 4–8 good questions is enough.

---

### 4.5 Update Locations & Hours

1. Click **Locations**.
2. Choose the location to edit (e.g., Haven City Market).
3. You can safely edit:
   - Address fields.
   - Phone number (for click-to-call).
   - `hoursSummary` – a simple, human-readable hours line.
   - `hoursDetails` – optional detailed hours if needed.
   - `mapUrl` – Google Maps link (used for “Get Directions”).
   - `orderingUrl` – link to online ordering (if available).
4. If this is the main store you want to feature, toggle **“Primary”**.
5. Click **Publish**.

**Important:**

- Test `mapUrl` and `orderingUrl` after publishing:
  - On your phone, tap **Get Directions** and **Order Online**.

---

### 4.6 Update the Home, About, or Contact Page Copy

Depending on setup:

- The Home content may come from:
  - A `page` document (e.g., slug `home`), OR
  - Several composed queries (Signature Bentos, Programs strip, etc.).

#### About Page

1. Click **Pages**.
2. Open the `about` page.
3. Edit:
   - Hero title/subtitle.
   - Story sections (rich text blocks).
   - Pillars and blurbs (e.g., Flavor First, Everyday Aloha).
4. Keep paragraphs short and friendly (mobile-first).
5. Click **Publish**.

#### Contact Page

1. Click **Pages**.
2. Open the `contact` page.
3. Update:
   - Intro text explaining how/when you respond.
   - Any instructions (e.g., which topics go to phone vs email).
4. Click **Publish**.

Form behavior (where messages go) is configured by devs, not in Sanity.

---

### 4.7 Add or Edit Testimonials

1. Click **Testimonials**.
2. To add:
   - Click **New**, fill in:
     - Quote.
     - Name.
     - Context (optional).
   - Optionally set `featured`.
3. To edit:
   - Open an existing testimonial.
   - Adjust quote or name.
4. Click **Publish**.

Use short, believable quotes. Avoid making them feel fake or overly long.

---

## 5. Do’s and Don’ts

### 5.1 Do

- **Read everything on your phone** after changes.
- Keep headlines short and punchy.
- Use **correct capitalization** and spell-check.
- Make sure prices and contact info match your POS and real-world signage.
- When unsure, **duplicate** a document and experiment on the copy.

### 5.2 Don’t

- Don’t change internal `key` fields on `program` documents.
- Don’t delete documents unless you’re sure they’re not used.
- Don’t stuff long essays into sections meant for short blurbs.
- Don’t paste content with weird formatting from Word/Google Docs without cleaning it up.

---

## 6. Quick Reference: Where to Edit What

- **Hero tagline / tagline copy:**  
  - `siteSettings` or `page` (home/about), depending on implementation.

- **Menu items & prices:**  
  - `Menu Items`.

- **Menu categories & headings:**  
  - `Menu Categories`.

- **Rewards / Benefit Nights / Catering program details:**  
  - `Programs` documents.

- **Locations, hours, phone, directions links:**  
  - `Locations` documents.

- **Brand story & pillars:**  
  - `Pages → about`.

- **Contact instructions:**  
  - `Pages → contact`.

- **Testimonials:**  
  - `Testimonials`.

---

## 7. After You Publish – Sanity Checks

After making changes:

1. Wait 30–60 seconds for the site to refresh (or as configured).
2. On your **phone**, check:
   - `/` – Home hero and any relevant sections.
   - `/menu` – updated items/prices.
   - `/rewards` / `/benefit-nights` / `/catering` – updated copy.
   - `/locations` – correct address/hours.
3. Tap:
   - **Call** buttons.
   - **Get Directions**.
   - Any **program CTAs** (links/emails).

If something looks wrong (missing text, broken layout), note:

- Which page
- What changed
- Rough time of your edit

…and share that with your developer. That gives them enough context to fix it quickly.

---

This guide should evolve along with the site. Any time we add a new feature (stories/blog, loyalty integration, digital menu screens), we should update this document with new editing steps.
