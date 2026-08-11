# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for Plus Fitness 24/7 Andheri (a gym). This is the **approved** premium/neo-brutalist redesign — it is live content for a real business, not a work-in-progress prototype. There is no backend, database, or CMS; all copy and data live directly in the `.tsx` files.

## Technology stack

- **Next.js 16** (App Router), **React 19**, **TypeScript** (strict mode)
- **Tailwind CSS v4** (CSS-first config via `@theme inline` in `app/globals.css`, no `tailwind.config.*` file)
- **shadcn** (`style: base-nova`, configured in `components.json`) on top of **@base-ui/react** primitives — see `components/ui/button.tsx` for the pattern (base-ui primitive + `class-variance-authority` variants + `cn()`)
- **lucide-react** for icons
- `clsx` + `tailwind-merge` via the `cn()` helper in `lib/utils.ts`
- `@vercel/analytics`, only mounted when `NODE_ENV === 'production'` (`app/layout.tsx`)
- Package manager: **npm**. A `pnpm-lock.yaml` also exists in the repo but the README explicitly says to keep `package-lock.json` and not introduce a separate pnpm lockfile (Vercel deploys off the npm lockfile) — use `npm`, don't regenerate or commit pnpm lock changes.

### Commands

```bash
npm install
npm run dev     # local dev server, http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint (eslint-config-next core-web-vitals)
```

There is no test suite and no separate typecheck script. `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so `npm run build` will **not** catch type errors — run `npx tsc --noEmit` explicitly when you want type checking.

## Project structure

- `app/` — Next.js App Router routes. One folder per route (e.g. `app/programs/personal-training/page.tsx`); each `page.tsx` is typically a thin wrapper that renders a shared component with route-specific props (see `app/page.tsx` → `BrutalistHome`, or the `app/programs/*/page.tsx` files → `ProgramPage`).
- `components/` — page-section components (`hero.tsx`, `contact.tsx`, `faq.tsx`, `gallery.tsx`, `membership.tsx`, `testimonials.tsx`, `trainers.tsx`, `site-header.tsx`, `site-footer.tsx`, `page-shell.tsx`, `program-page.tsx`, `brutalist-home.tsx`).
- `components/ui/` — shadcn/base-ui primitives (currently just `button.tsx`).
- `lib/utils.ts` — the `cn()` class-merging helper.
- `public/` — images, icons, favicons.
- Interior pages compose `PageShell` (`components/page-shell.tsx`), which renders `SiteHeader`, a shared hero banner, `children`, then `SiteFooter`. The home page instead renders the standalone `BrutalistHome` component.

## Design system and branding

The whole site uses one consistent **neo-brutalist** visual language, wrapped by the `.brutalist-page` class (see `app/globals.css`). Match this system exactly when adding or editing UI — do not introduce a different visual style.

- **Colors** (CSS custom properties defined on `.brutalist-page`, referenced via arbitrary-value Tailwind classes like `bg-[var(--acid)]`, not the semantic `bg-primary`/`bg-background` tokens):
  - `--paper` `#f8f4e8` — page background
  - `--ink` `#09090b` — text, borders (borders are consistently `border-2` or thicker, always `--ink`)
  - `--acid` `#ff6b00` — primary brand orange (buttons, highlights, the `+` in the logo)
  - `--signal-red` `#2457ff` — despite the name this is a **blue** accent, used for kickers/eyebrow labels
  - `--muted-paper` `#e8e3d5`, `--dark-surface` `#151518`
- The root `:root` theme (shadcn/Tailwind semantic tokens: `--primary`, `--background`, etc.) mirrors the same palette and `--radius: 0`. Semantic tokens are used inside `components/ui/*` primitives; page/section components use the `--ink`/`--acid`/`--paper` variables directly.
- **Typography**: `Dela Gothic One` (loaded via `@import` in `globals.css`) is the display/heading font, applied via the `.font-display`/`.font-heading` classes — always uppercase, tight tracking. Body copy uses `Space Grotesk`. `Oswald` and `Geist Sans`/`Geist Mono` are loaded via `next/font` as CSS variables (`--font-oswald`, `--font-geist-sans`, `--font-geist-mono`) and act as fallbacks/defaults outside `.brutalist-page` scope.
- **Signature visual motifs** (defined as utility classes in `globals.css`, reuse rather than reinvent): `hard-shadow` / `hard-shadow-lg` (offset box-shadow in `--ink`), `btn-press` (press-down interaction), `focus-ring` (visible focus outline), `premium-card`, `section-kicker` (small uppercase label with a leading rule), `stagger-reveal`, `halftone`, `noise-overlay`, `marquee-*`. Border radius is forced to `0` everywhere inside `.brutalist-page`.
- Numbered list items and step markers use the `0{index + 1}` convention (see `contact.tsx`, `program-page.tsx`) rather than plain bullets.

## Coding conventions

- Functional components, named exports (`export function ComponentName`), no default exports except `page.tsx` route files.
- Double-quoted strings in most component files, single-quoted in a few config/UI files (`lib/utils.ts`, `components/ui/button.tsx`) — match whichever convention the file you're editing already uses; don't reformat unrelated lines.
- No semicolon-heavy style; follow the existing formatting in the file being edited.
- Client components are explicitly marked `"use client"` at the top (e.g. `site-header.tsx`, `contact.tsx` for `useState`/interactivity) — keep components server components by default and only add `"use client"` when state/effects/browser APIs are needed.
- Shared, parameterized components (`PageShell`, `ProgramPage`) take typed props objects; route `page.tsx` files pass route-specific copy into them rather than duplicating markup.
- Use `cn()` from `lib/utils.ts` when merging conditional/variant Tailwind classes; use `cva` when a component needs multiple visual variants (follow `components/ui/button.tsx`).
- Path alias `@/*` maps to the repo root (see `tsconfig.json` / `components.json` aliases) — use `@/components/...`, `@/lib/...` imports, not relative `../../` paths.

## Responsive design requirements

- Mobile-first Tailwind breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`); the primary content grid is a 12-column grid (`grid-cols-12`) with responsive `col-span-*`.
- Desktop navigation switches to a hamburger menu below `xl` (`SiteHeader`); size/spacing/text scale down through `sm`/`md` breakpoints rather than being hidden outright where practical (see the responsive `text-[Npx]` clamps on headings, e.g. `text-[42px] sm:text-[66px] lg:text-[86px] xl:text-[104px]`).
- Verify any new UI at mobile, tablet, and desktop widths — this site's existing layouts already do this consistently; match that bar.

## Accessibility requirements

- Icon-only interactive elements need `aria-label` (e.g. the mobile menu button, logo link).
- Toggle/disclosure controls need `aria-expanded` (mobile nav button).
- Decorative icons/overlays use `aria-hidden="true"` (`halftone`, `noise-overlay`, inline lucide icons next to visible text).
- Interactive elements should carry the `focus-ring` class (or equivalent visible focus state) — don't remove focus outlines.
- Respect `prefers-reduced-motion`: any new animation must be covered by (or added to) the existing `@media (prefers-reduced-motion: reduce)` blocks in `globals.css`.
- Async state changes users need to notice (e.g. form submission success) use `aria-live="polite"` (see `contact.tsx`).
- Use semantic HTML (`header`/`nav`/`main`/`section`/`dl`/`figure`) matching existing patterns rather than generic `div`s with ARIA bolted on.

## Preserving existing functionality

- This design has already been approved by the client — do not change the visual style, layout structure, page routes, or copy/business details (address, phone number, hours, pricing, etc.) unless explicitly asked to.
- When editing a page or section, keep it visually and structurally consistent with the rest of the site's brutalist system described above; don't mix in a different design language for a "quick fix."
- Don't remove or alter existing routes/pages without explicit instruction — the site's full page list (home, About, Programs + program detail pages, Memberships, Trainers, Gallery, Reviews, FAQ, Contact, Careers, Privacy) is intentional and referenced from `README.md`.

## Avoiding unnecessary dependencies

- This is a static marketing site with no backend — do not add state-management libraries, data-fetching libraries, CSS frameworks, or alternative UI kits.
- Reuse what's already installed: `lucide-react` for icons, `@base-ui/react` + `cva` + `cn()` for new interactive primitives, Tailwind utility classes (plus the existing custom utility classes in `globals.css`) for styling.
- Before adding a new package, check whether the need can be met with what's already in `package.json`.

## Secrets and environment variables

- There are currently no `.env` files and no secrets in this codebase; the only environment-driven behavior is `process.env.NODE_ENV === 'production'` gating Vercel Analytics in `app/layout.tsx`.
- `.gitignore` already excludes `.env*.local` — if you introduce environment variables, put real values only in an untracked `.env.local`, never commit them, and never hardcode secrets/API keys in source.

## Required checks after making changes

After any code change, run:

```bash
npm run lint         # must pass
npx tsc --noEmit      # type-check (the Next.js build ignores TS errors, so this is the only type-check step)
npm run build          # verify the production build succeeds
```

For any visual/UI change, also run `npm run dev` and check the affected page(s) in a browser at mobile, tablet, and desktop widths.

## Workflow rule

Before making a significant change, first explain the files you plan to modify and what you intend to change. Wait for my approval before making the change.
