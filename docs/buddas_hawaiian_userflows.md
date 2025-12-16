# Buddas Hawaiian – User Flows (v2)

> **File:** `user-flows.md`  
> **Scope:** Primary user journeys for the Buddas Hawaiian marketing site (web)  
> **Audience:** Product, design, and engineering

---

## 1. Purpose

Define the **core journeys** for guests and staff so the site can be designed, developed, and QA’d against realistic behavior, with a strong emphasis on:

- **Mobile-first** use (phone in hand, hungry now).  
- **Three-tap rule**: guests reach Menu, Locations, or Contact within ~3 taps from any entry page.  
- **Franchise-grade clarity** for programs (Rewards, Benefit Nights, Catering).  
- **Accessible Menu** patterns for QR and at-table usage.

---

## 2. Conventions

Each flow describes:

- **Entry point(s)** – where the user starts.  
- **Steps** – key interactions in order.  
- **Success** – what a “good outcome” looks like.  
- **Notes** – important constraints, variants, or UX considerations.

Assume flows are **mobile-first** unless stated otherwise.

---

## 3. Guest Flows – Core

### 3.1 Hungry Local → See Menu → Visit/Call

**Goal:** A local guest quickly understands what Buddas serves and how to get it.

**Entry Points:**

- A. Google search → Home (`/`)  
- B. Social link → Home (`/`) or Menu (`/menu`)  
- C. Direct URL entry (`buddashawaiian.com`)

**Steps (Path A – via Home):**

1. User lands on **Home** (`/`) hero.  
2. Sees core promise (H1), hero image, and primary CTA **“View Menu”** above the fold.  
3. Taps **“View Menu”**.  
4. Arrives at **Menu** (`/menu`) with Signature Bentos visible first.  
5. Scrolls categories and items; reads descriptions/prices.  
6. Uses one of:
   - Sticky bottom bar: taps **Call** → device dialer opens.  
   - Sticky bottom bar: taps **Directions** → maps app opens.  
   - Navigates to **Locations** (`/locations`) for more context.

**Success:**

- Guest reaches an itemized menu view and either calls or gets directions in **≤ 3–4 taps** from Home.  
- No friction: no broken links, no confusing navigation.

**Notes:**

- Menu load time and above-the-fold content must be fast and legible.  
- Sticky mobile CTA bar must be present on Home, Menu, and Locations.

---

### 3.2 QR at Table → Accessible Menu View

**Goal:** In-store guest scans a QR and gets a legible, accessible menu view on their phone.

**Entry Points:**

- QR code on table / signage → `/menu?source=qr`

**Steps:**

1. User scans QR code.  
2. Browser opens **Menu** page, optionally with a subtle banner: “You’re viewing the Buddas menu at Haven City Market.”  
3. At top of the menu, user sees **Accessible View toggle**.  
4. If needed, user taps **“Accessible View”** to enable high-contrast, larger-text layout.  
5. User scrolls categories, reads items and prices without pinch-zoom.  
6. If they want to confirm hours or location, they can tap header nav or Sticky CTA (Directions).

**Success:**

- Guest can read menu comfortably on their device without zooming.  
- Accessible View works (larger type, better contrast) and does not hide any content.

**Notes:**

- This flow must work **even on slow connection**; assets must be optimized.  
- QR-specific source parameter is optional but can help with analytics.

---

### 3.3 Benefit Night Organizer → Learn → Apply

**Goal:** A school/team/organization lead quickly understands Benefit Nights and can apply.

**Entry Points:**

- A. Home → Programs strip → **“Benefit Nights”** card → `/benefit-nights`.  
- B. Direct link from email/social → `/benefit-nights`.  
- C. Footer/nav link → `/benefit-nights`.

**Steps:**

1. User lands on **Benefit Nights** hero.  
   - Sees headline (e.g., “Raise Funds, Plate by Plate.”) and short subheading.  
   - Prominent stat badge (e.g., “Up to 25% Giveback”).
2. Scrolls slightly to see **“How It Works”** steps (3–4 simple steps).  
3. Skims **Eligibility** section (“Who can host a Benefit Night?”).  
4. Optionally expands a few **FAQ** items to clarify edge cases.  
5. Clicks primary CTA: **“Apply for a Benefit Night”**.  
6. Completes:
   - Simple form (org name, contact info, preferred dates, expected headcount), or  
   - Email link with prefilled subject and short instructions.

**Success:**

- Organizer clearly understands program basics in under 1–2 minutes.  
- Organizer can submit interest through a single prominent CTA, without hunting for contact info.

**Notes:**

- Content must be easy to skim on mobile: short paragraphs, bullet lists.  
- Form should not ask for unnecessary data up front.

---

### 3.4 Catering Planner → Explore Packages → Request Info

**Goal:** Office manager/event planner evaluates if Buddas can handle their event and easily requests a quote.

**Entry Points:**

- A. Home → Programs strip → **“Catering & Group Orders”** card → `/catering`.  
- B. Footer/nav link → `/catering`.  
- C. Direct link from search or social.

**Steps:**

1. User lands on **Catering** hero with clear statement (“Bentos and island comfort for your whole crew”).  
2. Scrolls to **“Popular Packages”** cards: each has name, headcount range, rough price band, and description.  
3. Reads **“How It Works”** steps (brief, numbered list).  
4. Optionally expands FAQs (delivery vs pickup, lead time, dietary questions).  
5. Clicks **“Request Catering Info”** CTA.  
6. Submits key details (event type, date, headcount, contact info).  
7. Views confirmation message that someone will follow up.

**Success:**

- Planner can understand whether Buddas is a fit and send an inquiry **within a single visit** to `/catering`.  
- No ambiguous pricing language; expectations are set around ranges.

**Notes:**

- This page is often viewed on desktop; layout should scale elegantly from phone → laptop.

---

### 3.5 Rewards Curious Guest → Understand → Join (Now or Later)

**Goal:** Regular/curious guests understand the benefits of Buddas Rewards and how to join.

**Entry Points:**

- A. Home → Programs strip → **“Buddas Rewards”** card → `/rewards`.  
- B. Header/nav link → `/rewards`.  
- C. Mention in-store (QR, table topper) → `/rewards?source=store`.

**Steps:**

1. User lands on **Rewards** hero with strong headline (e.g., “Eat. Earn. Repeat.”).  
2. Immediately sees 3–5 **benefit bullets** (free treats, birthday perks, etc.).  
3. Scrolls to **“How It Works”** step list (join → earn → redeem).  
4. Optionally scans any simple **Challenges / Future Gamification** band if present.  
5. Taps primary CTA:  
   - If digital program exists: link to sign-up page / app.  
   - If in-store only: clear text instructions (“Ask to join at checkout”).

**Success:**

- Guest leaves page knowing **why** to join and **how** to join, in **under 30–45 seconds**.

**Notes:**

- Avoid long copy; focus on perks and clarity.  
- Design for easy future integration with an app or loyalty vendor.

---

### 3.6 First-Time Visitor → Learn Story → Build Trust

**Goal:** New guest validates that Buddas is the right choice for family/friends.

**Entry Points:**

- A. Google → Home → About (`/about`).  
- B. Footer/nav link → `/about`.  
- C. Stories/social → `/about`.

**Steps:**

1. User lands on **About** hero (“Our Story”).  
2. Scrolls through 2–3 short sections:
   - Brand origin and mission.  
   - Food philosophy (comfort, Hawaiian influence).  
   - Community & Benefit Nights highlights, plus any sustainability notes.
3. Scans photos of food, team, or space.  
4. Navigates to **Menu**, **Locations**, or **Benefit Nights/Catering** as next step.

**Success:**

- User gains an emotional sense of the brand and a practical next step.  
- They feel Buddas is **family- and community-friendly**.

---

### 3.7 Contact → Ask Question / Provide Feedback

**Goal:** Guest or organizer can easily reach Buddas for general questions.

**Entry Points:**

- Header/footer link → `/contact`.  
- Secondary CTAs on program pages.

**Steps:**

1. User reaches **Contact** page.  
2. Sees short intro explaining typical response time.  
3. Either:
   - Uses contact form (topic, message, contact info), or  
   - Taps click-to-call phone number, or  
   - Taps click-to-email link.
4. On form submission, sees success message.

**Success:**

- User understands which channel to use (phone vs email vs form).  
- They receive clear feedback that their message was sent.

---

## 4. Staff & Editor Flows

### 4.1 Update Menu Items in Sanity

**Goal:** Staff member changes menu items/prices without developer help.

**Entry Points:**

- Sanity Studio → `Menu Items`.

**Steps:**

1. Editor logs into Sanity Studio.  
2. Opens **Menu Items** list.  
3. Finds an item (search by name or filter by category).  
4. Updates description, price, tags, or image as needed.  
5. Clicks **Publish**.  
6. Verifies change on `/menu` after cache/ISR delay.

**Success:**

- Menu updates propagate without layout breaks or code changes.

---

### 4.2 Update Programs (Rewards / Benefit Nights / Catering)

**Goal:** Staff updates copy, steps, and FAQs without developer intervention.

**Entry Points:**

- Sanity Studio → `Programs`.

**Steps:**

1. Editor opens the relevant program document (`rewards`, `benefit-nights`, `catering`).  
2. Adjusts hero copy, benefits, steps, FAQs, and CTA text/URL.  
3. Publishes changes.  
4. Checks live pages for structure and formatting.

**Success:**

- Program pages remain structurally intact while content updates.

---

### 4.3 Update Locations & Hours

**Goal:** Staff maintains accurate location info and hours.

**Entry Points:**

- Sanity Studio → `Locations`.

**Steps:**

1. Editor opens a **Location** document.  
2. Adjusts address, hours, phone, map URL, and ordering URL as needed.  
3. Publishes.  
4. Checks `/locations` for accuracy.

**Success:**

- All location cards show correct contact and hours; `Get Directions` links open the right map.

---

## 5. Edge Cases & Error Flows

### 5.1 Empty or Missing Menu Data

- If a category has no items, the UI should either hide the category or show a friendly short message.  
- If the entire menu fails to load, show an error state with a prompt to call the restaurant.

### 5.2 Form Errors

- For Contact/Catering/Benefit Nights forms:  
  - Show inline field errors for validation issues.  
  - Show a general error message for network/server errors.  
  - Never drop user input silently.

### 5.3 Fallback for External Links

- If an `orderingUrl` is missing for a location, hide the `Order Online` button and rely on `Call` / `Directions`.

---

## 6. Alignment with PRD & Design System

- These flows map directly to requirements in `prd.md` and UI patterns in `design-system.md`.  
- Any new flows (e.g., future loyalty dashboards, blog/stories) should be added here and cross-checked with IA, Sanity schemas, and QA test cases.

