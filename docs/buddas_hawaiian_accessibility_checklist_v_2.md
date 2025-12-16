# Buddas Hawaiian – Accessibility Checklist (v2)

> **File:** `accessibility-checklist.md`  
> **Scope:** Web accessibility requirements for BuddasHawaiian.com  
> **Target:** WCAG 2.2 Level AA

This checklist ensures the Buddas Hawaiian website is usable by as many guests as possible and reduces legal risk.

---

## 1. Global Requirements

- Target **WCAG 2.2 Level AA** for all pages.  
- All content must be accessible via **keyboard**, **screen reader**, and **touch**.  
- Test on at least one **screen reader** (VoiceOver/NVDA) for critical flows.

---

## 2. Structure & Semantics

- Use **one `<h1>`** per page.  
- Use headings (`<h2>`, `<h3>`) to create a logical outline – no skipping levels.  
- Wrap main content in `<main>`.  
- Use semantic sections: `<header>`, `<nav>`, `<section>`, `<footer>`.  
- Use lists (`<ul>`, `<ol>`) for groups of related items (menu items, steps, FAQs).  
- For FAQ accordions, use proper button semantics and ARIA (see below).

### 2.1 Navigation

- Main navigation must be inside `<nav>` with `aria-label` as needed.  
- Provide a **Skip to main content** link at the top of the page.  
- Mobile nav menus use `<button>` for toggles and trap focus when open.

---

## 3. Color & Contrast

- All text must meet **contrast ratio** requirements:
  - Normal text: **4.5:1** or higher.  
  - Large text (18px+ or 14px bold): **3:1** or higher.
- Icons or graphics that convey meaning must also meet contrast or have a text alternative.  
- Do not rely on color alone to indicate state (e.g., errors, selected states).  
- Accessible Menu Mode (`/menu`): use high-contrast text/background pairings.

Tools: use automated contrast checkers during design and QA.

---

## 4. Keyboard Accessibility

- All interactive elements (links, buttons, inputs, toggles, accordions) must be reachable via **Tab** and operable via **Enter/Space**.  
- Visible **focus outline** for all interactive elements (customized via Tailwind focus rings).  
- No keyboard traps: user must be able to tab into and out of nav, modals, and dropdowns.  
- Accordion and FAQ components must be fully usable via keyboard.

---

## 5. Images, Media & Alt Text

- Content images (food, people, location) must have meaningful `alt` text describing what is shown.  
- Decorative images should use empty alt (`alt=""`).  
- Icons used as buttons must have accessible names (via `aria-label` or visible text).  
- Avoid autoplaying video or motion that cannot be paused.

Alt text guidance for food:

- Focus on **dish type, main components, and mood**.  
- Example: `alt="Loco moco bento with rice, gravy, and fried egg on a white plate"`.

---

## 6. Forms & Validation

- Every input must have a **visible `<label>`** associated via `for`/`id` or wrapping label.  
- Placeholder text is not a substitute for labels.  
- Provide **inline error messages** near form fields.  
- Indicate errors using both color and text.  
- Set `aria-invalid="true"` on inputs with errors and link to helper text via `aria-describedby`.

For confirmation/error messages:

- Use simple language.  
- Consider `role="status"` or `role="alert"` where appropriate.

---

## 7. Components & Patterns

### 7.1 Accessible Menu Toggle

- Use a `<button>` with clear text (e.g., “Accessible View”).  
- Use `aria-pressed` or similar if it is a true toggle.  
- Ensure visual state matches ARIA state.

### 7.2 FAQ Accordion

- Each FAQ question is a `<button>` or element with `role="button"`.  
- Use `aria-expanded` and `aria-controls` to link to the panel content.  
- The answer section should have an `id` referenced by the button.

### 7.3 Sticky Mobile CTA Bar

- Ensure it does not cover important content or controls.  
- Buttons in the bar must be reachable by Tab and have meaningful labels (e.g., “Call the restaurant”, “Get directions”).

---

## 8. Content & Copy

- Write in clear, simple language.  
- Avoid all-caps for long phrases (hard to read).  
- Keep paragraphs short (especially on mobile).  
- Use descriptive link text (e.g., “View Menu” instead of “Click here”).

---

## 9. Responsive Behavior & Zoom

- The layout must work at 320px wide and up.  
- Do not block user zoom; the site should remain usable at **200% zoom**.  
- Ensure key flows (Menu, Locations, Contact, Programs) are usable in both portrait and landscape.

---

## 10. Screen Reader Testing Checklist

For at least one major browser + screen reader combo, verify:

- The **page title** is accurate and descriptive.  
- Headings are announced in a logical order.  
- Navigation landmarks (`header`, `nav`, `main`, `footer`) are present.  
- Links and buttons are announced with meaningful names.  
- Form labels and errors are read clearly.  
- FAQs and accordions announce expanded/collapsed states correctly.  
- Accessible Menu Mode is announced and clearly changes the view.

---

## 11. QA Integration

During QA (see `qa-test-plan.md`):

- Run automated tools (e.g., Lighthouse, axe) on key pages: Home, Menu, Rewards, Benefit Nights, Catering, Locations, About, Contact.  
- Manually test keyboard navigation in each primary flow.  
- Spot-check alt text on high-traffic pages, especially food imagery.

Update this checklist as new components or features (e.g., digital signage, loyalty dashboard) are added.

