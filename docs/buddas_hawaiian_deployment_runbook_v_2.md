# Buddas Hawaiian – Deployment Runbook (v2)

> **File:** `deployment-runbook.md`  
> **Scope:** How to safely deploy BuddasHawaiian.com (Next.js + Sanity)  
> **Audience:** Developers and technical operators

This runbook explains how to deploy the Buddas Hawaiian marketing site, verify each release, and roll back if needed.

---

## 1. Overview

- **App:** Next.js (App Router) + TypeScript + Tailwind + Sanity.  
- **Hosting:** Vercel (assumed).  
- **CMS:** Sanity (hosted, managed separately).

Deployment types:

1. **Content-only changes** – via Sanity; no code deploy required.  
2. **Code changes** – via Git → Vercel; creates preview and production builds.

---

## 2. Branching & Environments

Recommended model:

- `main` – production branch.  
- `develop` – staging branch (optional but preferred).  
- Feature branches – short-lived branches (`feature/menu-accessible-toggle`, etc.).

Mapping to environments:

- **Production:** `main` → `https://buddashawaiian.com`.  
- **Staging:** `develop` → `https://staging.buddashawaiian.com` (example).  
- **Preview:** Any branch / PR → auto preview deployments.

---

## 3. Content-Only Changes (No Deploy)

Most day-to-day updates (menu, programs, locations, About/Contact copy) can be done directly in Sanity.

**Steps:**

1. Log in to **Sanity Studio**.  
2. Edit content according to `content-editing-guide.md`.  
3. Click **Publish**.  
4. Wait for cache/ISR (typically 30–300 seconds).  
5. Validate on the live site (phone + desktop):  
   - Home, Menu, relevant Program page, Locations.

If webhooks and revalidation are configured, changes should appear quickly without redeploying code.

---

## 4. Code Change Deployment Workflow

Use this process when modifying code, schemas, or configuration.

### 4.1 Before You Start

- Confirm local environment is set up (`env-and-config.md`).  
- Pull latest changes from the repository.

### 4.2 Implement & Test Locally

1. Create a feature branch from `develop` or `main`:
   - `git checkout -b feature/<short-description>`
2. Implement changes.  
3. Run checks locally:
   - `pnpm lint` or `npm run lint`  
   - `pnpm test` or `npm test` (if tests present)  
   - `pnpm build` or `npm run build`  
   - Manual QA locally (see `qa-test-plan.md`):  
     - Open key routes.  
     - Verify no console errors.  
     - Check layout on mobile viewport.

### 4.3 Open Pull Request & Preview

1. Push your branch to the remote.  
2. Open a Pull Request (PR) into `develop` (or `main` if no staging).  
3. Wait for Vercel to create a **Preview Deployment**.  
4. Share and test the preview URL:
   - Run Lighthouse on Home and Menu.  
   - Test primary flows: Menu, Locations, Programs, Contact form.  
   - Verify SEO & metadata if new pages were added.

### 4.4 Merge & Promote to Production

**If using staging:**

1. Merge feature branch into `develop`.  
2. Test the staging environment (URL on `develop`).  
3. Once approved, merge `develop` into `main`.  
4. Vercel will trigger a production deployment.

**If not using staging:**

1. Merge feature branch directly into `main`.  
2. Wait for Vercel production deployment to complete.

---

## 5. Pre-Production Checklist

Before promoting a change to production, confirm:

- [ ] `next build` passes locally or in CI.  
- [ ] No TypeScript errors.  
- [ ] Env vars needed for any new functionality are set in Vercel (Preview + Production).  
- [ ] Sanity schemas (if changed) are deployed and Studio builds successfully.  
- [ ] Key flows are working in preview:
  - Home hero & CTAs.  
  - Menu listing and category navigation.  
  - Programs pages (Rewards, Benefit Nights, Catering).  
  - Locations page & CTAs (Call, Directions, Order Online).  
  - Contact form submission.
- [ ] Accessibility spot-check (tab through nav and key CTAs).  
- [ ] Performance spot-check (Lighthouse) for Home & Menu.

---

## 6. Production Deployment Steps (Vercel)

Assuming the project is connected to Vercel and auto-deploy is enabled:

1. Merge approved PR into `main`.  
2. Vercel will start a production build automatically.  
3. Monitor Vercel dashboard for build status and logs.  
4. Once deployed, perform **Post-Deploy Validation** (below).

**Manual promotion (if using staging):**

- In Vercel, you can choose to **Promote** a staging deployment to production if desired, instead of rebuilding.

---

## 7. Post-Deploy Validation (Smoke Test)

After a production deployment:

On **desktop and mobile**:

1. **Home (`/`)**  
   - Hero loads quickly with correct copy and image.  
   - Primary CTA (`View Menu`) and secondary CTA (`See Locations`) work.

2. **Menu (`/menu`)**  
   - Categories and items load without errors.  
   - Accessible View toggle (if present) works and is readable.  
   - No broken images.

3. **Programs (`/rewards`, `/benefit-nights`, `/catering`)**  
   - Hero text, benefits, and steps are correct.  
   - Primary CTA links work.

4. **Locations (`/locations`)**  
   - Location cards show correct address and hours.  
   - `Call` opens dialer with correct number.  
   - `Get Directions` opens the correct map.  
   - `Order Online` goes to the right platform (if used).

5. **About & Contact**  
   - About story is formatted correctly.  
   - Contact form submits and shows success message.

6. **General**  
   - No obvious layout issues on common screen sizes.  
   - No critical console errors in DevTools.  
   - Core Web Vitals look reasonable in a Lighthouse run.

---

## 8. Rollback Procedure

If a production deployment causes critical issues:

### 8.1 Immediate Rollback via Vercel

1. In the Vercel dashboard, go to the **Production** deployments list.  
2. Identify the **last known good deployment**.  
3. Click **Redeploy** or **Rollback/Promote** (wording may vary).  
4. Confirm.

This will restore the previous build without reverting Git history.

### 8.2 Git Revert (If Needed)

If the problem is code-level and needs to be undone in Git:

1. Identify the offending commit(s).  
2. Use `git revert <commit-hash>` or revert via your Git UI.  
3. Push the revert commit to `main`.  
4. Let Vercel deploy the reverted build.  
5. Confirm via smoke tests.

---

## 9. Handling Schema Changes (Sanity)

When changing Sanity schemas (`schema` files):

1. Update schema files in the repo (types and schema definitions).  
2. Test Studio locally if applicable.  
3. Deploy updated Studio (Vercel or other host, depending on setup).  
4. Deploy the website code that consumes the new schema fields.  
5. Populate new fields in Sanity and publish.  
6. Run focused QA on pages using new content.

Avoid deploying web code that expects new fields **before** the Studio/schema are deployed and content exists.

---

## 10. Incident Response

If the site is down or severely degraded:

1. **Assess scope:**  
   - All pages vs specific pages (e.g., Menu only).  
   - Only one environment vs all.

2. **Check Vercel status:**  
   - Build logs, current deployment, any platform incidents.

3. **Check Sanity status:**  
   - Sanity status page / dashboard for outages.

4. **Mitigate quickly:**  
   - Roll back to last known good deployment.  
   - Temporarily reduce problematic features (e.g., disable heavy integrations) in a hotfix.

5. **Communicate:**  
   - Notify relevant stakeholders with a short status and ETA.  
   - Add incident notes to internal docs.

6. **Post-incident review:**  
   - Root-cause analysis.  
   - Action items to prevent recurrence (tests, monitoring, config changes).

---

## 11. Updating This Runbook

Update this document when:

- Hosting platform or deployment process changes.  
- New environments are added (e.g., additional regions).  
- New critical flows are introduced (loyalty dashboards, digital menus, etc.).

Keep this runbook alongside `env-and-config.md`, `qa-test-plan.md`, and the PRD so operations stay tightly aligned.

