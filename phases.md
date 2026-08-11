# phases.md

Implementation phases reconstructed from the **current state** of the codebase and `git log`. This is not a speculative roadmap — each phase below corresponds to functionality that either already exists (Completed) or to a gap identified directly during inspection (Not started / Blocked). See `requirements.md` → "Needs confirmation" for the source of every open item referenced here.

## Phase 1 — Project foundation and tooling

**Objective**: Stand up the Next.js/TypeScript/Tailwind toolchain the site runs on.

**Tasks**
- Next.js 16 App Router project scaffolded with TypeScript strict mode.
- Tailwind CSS v4 wired up CSS-first (no `tailwind.config.*`).
- shadcn (`base-nova` style) + `@base-ui/react` configured (`components.json`).
- ESLint (`eslint-config-next/core-web-vitals`) configured.
- Vercel deployment set up against the npm lockfile.

**Relevant files**: `package.json`, `tsconfig.json`, `eslint.config.mjs`, `next.config.mjs`, `postcss.config.mjs`, `components.json`.

**Dependencies/blockers**: None.

**Definition of done**: `npm run dev`, `npm run build`, `npm run lint` all succeed.

**Status**: **Completed.**

## Phase 2 — Design system and global shell

**Objective**: Establish the neo-brutalist visual system and the global page shell (fonts, tokens, header, footer).

**Tasks**
- Define color/typography/spacing tokens and custom utility classes in `app/globals.css`.
- Load fonts (`Dela Gothic One`, `Space Grotesk` via `@import`; `Oswald`, `Geist Sans`, `Geist Mono` via `next/font`) in `app/layout.tsx`.
- Build `SiteHeader`, `SiteFooter`, and `PageShell` as the shared page frame.

**Relevant files**: `app/globals.css`, `app/layout.tsx`, `components/site-header.tsx`, `components/site-footer.tsx`, `components/page-shell.tsx`.

**Dependencies/blockers**: None.

**Definition of done**: Consistent header/footer/hero-band frame renders on every `PageShell`-based route.

**Status**: **Completed**, with one known inconsistency: `BrutalistHome` and `FaqPage` inline their own copies of the header instead of reusing `SiteHeader` (see `memory.md` → Known issues). This does not block normal use but means header edits must be made in up to three places.

## Phase 3 — Core content routes

**Objective**: Build out all site routes and their content sections.

**Tasks**
- Home page (`BrutalistHome`): hero, facilities grid, membership plans, weekly schedule, class-booking form, trainers, testimonials, location/map, trial form.
- Secondary routes composed via `PageShell`: `about`, `careers`, `contact`, `gallery`, `memberships`, `privacy`, `programs` (+ 4 program detail pages), `reviews`, `trainers`.
- Standalone `faq` route (`FaqPage`) with accordion.

**Relevant files**: `app/**/page.tsx`, `components/brutalist-home.tsx`, `components/faq.tsx`, `components/contact.tsx`, `components/gallery.tsx`, `components/membership.tsx`, `components/testimonials.tsx`, `components/trainers.tsx`, `components/program-page.tsx`.

**Dependencies/blockers**: Depends on Phase 2 (shell/tokens).

**Definition of done**: All 13 routes listed in `architecture.md` render with real content and correct per-page `metadata`.

**Status**: **Completed** — all routes exist and are wired up, matching the page list in `README.md`.

## Phase 4 — Lead-capture interactions

**Objective**: Give visitors a way to express interest (trial, class booking, general enquiry).

**Tasks**
- Home page trial form → WhatsApp deep link (`handleEnquiry`).
- Home page class-booking form → WhatsApp deep link (`handleClassBooking`).
- Contact page free-pass form → client-side confirmation state (no backend).

**Relevant files**: `components/brutalist-home.tsx`, `components/contact.tsx`.

**Dependencies/blockers**: None to function as-is; a real backend/email integration would be a new phase, not started (see below).

**Definition of done**: Forms validate required fields (native HTML `required`) and produce either a WhatsApp handoff or a visible confirmation state.

**Status**: **Completed** for the WhatsApp-based flows. The `/contact` free-pass form's "submission" is UI-only and does not persist or send data anywhere — whether that's the intended final behavior is unresolved (see `requirements.md` → Needs confirmation).

## Phase 5 — Accessibility and responsive pass

**Objective**: Make the design system usable across devices and assistive technology.

**Tasks**
- Mobile-first breakpoints and 12-column responsive grid throughout.
- `focus-ring` visible focus styling on interactive elements.
- ARIA attributes (`aria-label`, `aria-expanded`, `aria-hidden`, `aria-live`, `aria-pressed`) on menus, accordions, and dynamic states.
- `prefers-reduced-motion` handling for marquees, reveal animations, and stagger effects.

**Relevant files**: `app/globals.css`, and consistently across all interactive components.

**Dependencies/blockers**: Depends on Phases 2–4.

**Definition of done**: See `design.md` accessibility section for the specific patterns now in place.

**Status**: **Completed** for the patterns observed; no accessibility audit tooling (axe, Lighthouse CI, etc.) is configured in the repo, so this reflects code-level conventions, not a verified audit.

## Phase 6 — SEO infrastructure

**Objective**: Sitemap, robots rules, structured metadata beyond per-page title/description.

**Tasks**
- `app/sitemap.ts` and/or `public/sitemap.xml`.
- `app/robots.ts` and/or `public/robots.txt`.
- Open Graph / Twitter card metadata, `metadataBase` in `app/layout.tsx`.
- `app/manifest.ts` / `public/manifest.json` if PWA-style install metadata is wanted.

**Relevant files**: none exist yet — would be new files under `app/` and `public/`.

**Dependencies/blockers**: Requires a decision on scope (see `requirements.md` → Needs confirmation).

**Definition of done**: Not yet defined — pending confirmation of scope.

**Status**: **Not started.**

## Phase 7 — Repository cleanup items

**Objective**: Resolve inconsistencies identified during inspection.

**Tasks**
- Decide the fate of `components/hero.tsx` (unused, different design system) — keep/wire up/remove.
- Reconcile `package-lock.json` vs. `pnpm-lock.yaml` (README says npm-only).
- Decide whether unused placeholder assets in `public/` (`placeholder-*`) can be removed.
- Confirm whether `app/privacy/page.tsx`'s "demonstration website" language and "July 2026" date are final.

**Relevant files**: `components/hero.tsx`, `package-lock.json`, `pnpm-lock.yaml`, `public/placeholder-*`, `app/privacy/page.tsx`.

**Dependencies/blockers**: **Blocked** on explicit user confirmation for each item — per project rules, nothing here should be changed without approval (see `rules.md` → AI coding boundaries).

**Definition of done**: Each item above resolved per user decision, and `memory.md` updated to reflect the outcome.

**Status**: **Blocked** (awaiting confirmation on each item).
