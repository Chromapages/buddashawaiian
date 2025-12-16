# Buddas Hawaiian – Environment & Config Guide (v2)

> **File:** `env-and-config.md`  
> **Scope:** Environments, environment variables, and core config files for BuddasHawaiian.com  
> **Audience:** Developers and technical admins

This guide describes how the Buddas Hawaiian web app is configured across local, staging, and production, and how to safely manage environment variables and external services.

---

## 1. Environments Overview

We maintain three logical environments:

1. **Local Development**  
   - URL: `http://localhost:3000`  
   - Purpose: Feature development, debugging, and integration work.  

2. **Staging** (optional but recommended)  
   - URL: `https://staging.buddashawaiian.com` (example)  
   - Purpose: QA, stakeholder review, and final checks before production.  

3. **Production**  
   - URL: `https://buddashawaiian.com` (example)  
   - Purpose: Public, customer-facing site.

Each environment has its own set of environment variables and may use different Sanity datasets or tokens.

---

## 2. Environment Variables

Environment variables are managed via:

- `.env.local` for local development (never committed).  
- Vercel project settings for staging and production.

Use the following naming conventions:

- `NEXT_PUBLIC_*` – safe to expose to the browser.  
- Non-prefixed variables – **server-only**, must never be exposed client-side.

### 2.1 Public Environment Variables

These are read on both server and client (no secrets):

- `NEXT_PUBLIC_SITE_URL`  
  - Description: Base URL of the site for canonical links, OG tags.  
  - Example (prod): `https://buddashawaiian.com`

- `NEXT_PUBLIC_SANITY_PROJECT_ID`  
  - Description: Sanity project ID.  
  - Example: `abcd1234` (placeholder).

- `NEXT_PUBLIC_SANITY_DATASET`  
  - Description: Sanity dataset name.  
  - Examples: `production`, `staging`.

- `NEXT_PUBLIC_SANITY_API_VERSION`  
  - Description: API version date.  
  - Example: `2025-01-01`.

- `NEXT_PUBLIC_GA_ID` (optional)  
  - Description: Google Analytics / GA4 measurement ID, if used.

### 2.2 Server-Only Environment Variables

These must **never** be referenced in client components.

- `SANITY_API_READ_TOKEN`  
  - Description: Sanity token with **read-only** access for server-side queries that require authenticated requests (if needed).  
  - Scope: Limit to necessary datasets and permissions.

- `SANITY_WEBHOOK_SECRET`  
  - Description: Secret used to verify Sanity webhooks for on-demand revalidation.  
  - Used in: API route for `POST /api/revalidate` or similar.

- `REVALIDATION_SECRET` (optional)  
  - Description: Additional secret for revalidation endpoints.

- `NEXT_PRIVATE_SENTRY_DSN` / `ERROR_REPORTING_DSN` (optional)  
  - Description: DSN for error reporting if configured.

- `NEXT_SANITY_STUDIO_DATASET` (if separate)  
  - Description: Dataset for Studio deployment, if not sharing with main site.

Add other integration-specific variables as needed (email service, logging, etc.), keeping names explicit and environment-specific.

---

## 3. Config Files

Core configuration files in the repo:

- `next.config.mjs`  
  - Next.js config (image domains, redirects, rewrites, experimental flags).  

- `tailwind.config.ts`  
  - Tailwind theme, including Buddas color palette, fonts, spacing.  

- `tsconfig.json`  
  - TypeScript configuration (`strict` mode, path aliases).  

- `sanity.config.ts` (or `sanity.config.js`)  
  - Sanity Studio configuration (project ID, dataset, plugins, schema imports).  

- `vercel.json` (optional)  
  - Additional Vercel configuration (headers, redirects), if used.

- `.env.example`  
  - Template for required environment variables, excluding secrets.

Keep these files under version control (except `.env.*`) and update them in lockstep with PRD and design system changes.

---

## 4. Sanity Configuration

The app uses Sanity as its CMS.

Key configuration items:

- **Project ID:** `NEXT_PUBLIC_SANITY_PROJECT_ID`.  
- **Dataset:** `NEXT_PUBLIC_SANITY_DATASET` (`production` for prod, optional `staging` for staging).  
- **API Version:** `NEXT_PUBLIC_SANITY_API_VERSION`.  
- **CORS Origins:**  
  - Allow origins:  
    - `http://localhost:3000`  
    - Staging URL  
    - Production URL

### 4.1 Tokens

- Use a **read-only token** (`SANITY_API_READ_TOKEN`) for server-side operations that genuinely require it (e.g., preview, draft content), not for every query.  
- Never embed tokens in client code or expose them as `NEXT_PUBLIC_*`.

### 4.2 Webhooks

Configure Sanity webhooks (optional enhancement) for:

- Content published on `menuItem`, `menuCategory`, `program`, `location`, `page`, `testimonial`.

Target endpoint example:

- `POST https://buddashawaiian.com/api/revalidate`

Include:

- Secret (e.g., `SANITY_WEBHOOK_SECRET`) as a query param or header.  
- Filters to trigger revalidation only on relevant documents.

---

## 5. Vercel Project Settings

In Vercel, configure separate environment variable sets for:

- **Development / Preview** – applies to preview deployments.  
- **Production** – applies only to production URL.

Ensure each environment has:

- `NEXT_PUBLIC_SITE_URL` set to the correct domain.  
- Sanity project and dataset values.  
- Required server-only secrets.

When adding new env vars:

1. Add to `.env.example` with a placeholder.  
2. Add to Vercel for Preview and Production.  
3. Add to `.env.local` for local dev.

---

## 6. Local Development Setup

1. Clone the repository.  
2. Run `cp .env.example .env.local`.  
3. Fill in `.env.local` with real values (ask for secrets if needed).  
4. Install dependencies: `pnpm install` or `npm install` (depending on project).  
5. Start dev server: `pnpm dev` or `npm run dev`.  
6. Verify:
   - Home page loads.  
   - Menu pulls from Sanity.  
   - Locations and Programs pages load without errors.

---

## 7. Security & Secret Management

- Never commit `.env.*` files or secrets to Git.  
- Rotate tokens if they are accidentally exposed or shared.  
- Restrict Sanity tokens to **minimum required scopes**.  
- Only share environment details with trusted collaborators.

If a token leak is suspected:

1. Revoke the token in Sanity.  
2. Generate a new token with proper scopes.  
3. Update Vercel and `.env.local`.  
4. Trigger new deployments.

---

## 8. Adding New Integrations

When adding a new service (email, analytics, logging, etc.):

1. Define clear env var names (e.g., `EMAIL_API_KEY`, `EMAIL_SENDER`).  
2. Add placeholders to `.env.example`.  
3. Add real values to Vercel and local `.env.local`.  
4. Document usage in a short section here or in a separate integration doc.

Update this guide whenever environment variables, external services, or deployment targets change.

