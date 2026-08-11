# requirements.md

Requirements for the Plus Fitness 24/7 Andheri marketing website, derived from the current codebase (`app/`, `components/`, `README.md`, `package.json`) as of this inspection. This document reflects what the project currently does — proposed items and open questions are called out explicitly rather than assumed.

## Project purpose

A marketing / lead-generation website for **Plus Fitness 24/7 Andheri**, a gym located in Andheri West, Mumbai. Per `README.md`, this is the **"approved premium redesign"** of the site — i.e. live-intent content for a real business, not a prototype.

## What we are building

A static, multi-page **Next.js App Router** site with no backend, database, or CMS. All copy, pricing, trainer info, and schedule data are hardcoded directly in `.tsx` component files. There is no user authentication, no payments, and no server-side data persistence anywhere in the codebase.

## Primary goals (confirmed from code)

- Present the club's facilities, programs, trainers, memberships, and testimonials.
- Convert visitors into leads via a free trial / day pass enquiry, either through a WhatsApp deep link (home page) or a client-side contact form (`/contact`).
- Provide practical information: address, hours, phone/WhatsApp, embedded map, social links.

## Target users / audience

Prospective and current gym members in Andheri West, Mumbai, browsing on both mobile and desktop (the design is mobile-first throughout).

## Current pages / features (confirmed — from `app/` directory)

| Route | Component rendered |
|---|---|
| `/` | `BrutalistHome` (self-contained home page: hero, facilities, membership plans, weekly class schedule, class-booking form, trainers, testimonials, location/map, trial enquiry form, footer) |
| `/about` | `PageShell` + inline content (stats, values) |
| `/careers` | `PageShell` + inline content (roles, CTA) |
| `/contact` | `PageShell` + `Contact` (contact details + free-pass form) |
| `/faq` | `FaqPage` (accordion) |
| `/gallery` | `PageShell` + `Gallery` |
| `/memberships` | `PageShell` + `Membership` |
| `/privacy` | `PageShell` + inline privacy policy sections |
| `/programs` | `PageShell` + inline program-links grid |
| `/programs/strength`, `/programs/conditioning`, `/programs/personal-training`, `/programs/group-classes` | `ProgramPage` with route-specific props |
| `/reviews` | `PageShell` + `Testimonials` |
| `/trainers` | `PageShell` + `Trainers` |

This matches the page list stated in `README.md`.

## Important user flows (confirmed)

1. **Home page trial enquiry**: user fills name/mobile/goal in the `#trial` form → `handleEnquiry` in `components/brutalist-home.tsx` opens a pre-filled WhatsApp chat (`wa.me/919082092919`) in a new tab. No server request is made.
2. **Home page class booking**: user fills name/mobile/class/date/time in the `#book-class` form → `handleClassBooking` opens a similarly pre-filled WhatsApp chat.
3. **Contact page free pass**: user fills the form in `components/contact.tsx` → `handleSubmit` calls only `event.preventDefault()` and sets local React state (`submitted = true`) to show a confirmation message. **No data is sent anywhere.**
4. **Programs discovery**: `/programs` → program card → program detail page → "Book a free trial" link to `/contact`.
5. Global navigation between all pages via `SiteHeader` (desktop nav + mobile hamburger menu) and `SiteFooter` link groups.

## Functional requirements (confirmed)

- Sticky, responsive site header with desktop nav and a mobile slide-down menu (`components/site-header.tsx`, and the header markup duplicated inside `brutalist-home.tsx` and `components/faq.tsx`).
- FAQ accordion with single-open-item behavior (`components/faq.tsx`).
- Weekly class schedule rendered as a horizontally scrollable table (home page only).
- Embedded Google Maps iframe on the home page location section.
- Social links (Instagram, Facebook, YouTube) in the footer.
- Per-page `<title>`/`<meta description>` via each `page.tsx`'s exported `metadata`.

## Non-functional requirements (confirmed)

- Single consistent visual design system across all pages (see `design.md`).
- `prefers-reduced-motion` support (animations disabled/shortened via a matching media query in `app/globals.css`).
- Visible focus states on all interactive elements (`focus-ring` utility class).
- `next.config.mjs` sets `typescript.ignoreBuildErrors: true` and `images.unoptimized: true`.

## Responsive / mobile requirements (confirmed)

Mobile-first layout using Tailwind breakpoints (`sm`/`md`/`lg`/`xl`); 12-column grid on larger screens; navigation collapses to a hamburger menu below `xl`. See `design.md` for breakpoint and pattern details.

## Accessibility requirements (confirmed)

`aria-label`, `aria-expanded`, `aria-hidden`, `aria-live`, `aria-pressed`, and semantic elements (`header`/`nav`/`main`/`dl`/`fieldset`/`legend`) are used consistently across interactive components. See `design.md` and `CLAUDE.md` for the specific conventions observed.

## SEO requirements

- **Confirmed**: every route exports Next.js `metadata` (page `title` + `description`).
- **Needs confirmation**: there is no `app/sitemap.ts`, `app/robots.ts`, or `public/robots.txt`/`sitemap.xml`, and no `manifest.json`/`app/manifest.ts`. It is unclear whether these are planned or intentionally out of scope.
- **Needs confirmation**: no Open Graph / Twitter card metadata or `metadataBase` is set in `app/layout.tsx`.

## Important constraints (confirmed)

- No backend, API routes (`app/api/`), or `middleware.ts` exist in the project.
- No environment variables are currently required to run the site (see `CLAUDE.md` → Secrets and environment variables).
- Deployment target is Vercel; the README states the npm lockfile (`package-lock.json`) must be kept and a separate pnpm lockfile should not be introduced.
- Images are served unoptimized (`images.unoptimized: true` in `next.config.mjs`), so `next/image` does no server-side resizing/optimization.

---

## Confirmed requirements

- The 13-route site structure listed above, exactly as implemented.
- WhatsApp-based lead capture on the home page (no backend).
- Single neo-brutalist design system across all pages (see `design.md`).
- Per-page SEO metadata via Next.js `Metadata` exports.
- Mobile-first responsive layout and the accessibility conventions documented in `design.md`/`CLAUDE.md`.

## Proposed requirements

None identified in the current codebase — no roadmap, TODO list, or issue tracker was found in the repository to source proposed/future requirements from.

## Needs confirmation

- **Orphaned `Hero` component**: `components/hero.tsx` is not imported by any route or component. It uses a *different* design system (semantic `bg-primary`/`text-primary` tokens, `glass-surface`, `hero-mesh`, rounded corners) than the neo-brutalist system used everywhere else. Unclear whether it's a discarded earlier iteration that should be deleted, or a component intended for future use.
- **Contact form has no submission backend**: the `/contact` free-pass form and the home page's trial/booking forms either open WhatsApp or only toggle local state — no email, database, or third-party form service is wired up. Confirm whether real submission handling is in scope.
- **Duplicate header implementations**: `SiteHeader` (`components/site-header.tsx`) is reused by `PageShell`-based routes, but `BrutalistHome` and `FaqPage` each inline their own copy of the header markup and `navLinks` array instead of reusing it (see `architecture.md` → Application flow). Confirm whether these should be consolidated into one component.
- **Duplicate lockfiles**: both `package-lock.json` and `pnpm-lock.yaml` exist, despite `README.md` instructing to use only the npm lockfile for Vercel. Confirm whether `pnpm-lock.yaml` should be removed.
- **Unused placeholder assets**: `public/placeholder-logo.png`, `public/placeholder-logo.svg`, `public/placeholder-user.jpg`, `public/placeholder.jpg`, `public/placeholder.svg` are not referenced anywhere in `app/` or `components/`. Confirm whether they can be removed.
- **SEO infrastructure**: no sitemap, robots file, manifest, or Open Graph metadata exists. Confirm whether these are required.
- **Privacy policy placeholder language**: `app/privacy/page.tsx` describes the site as "this demonstration website" and is dated "Last updated July 2026." Confirm whether this copy is final or placeholder.
