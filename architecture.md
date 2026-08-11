# architecture.md

Current technical architecture of the Plus Fitness 24/7 Andheri website, as implemented today. This documents what exists — it does not propose changes.

## Framework and language

- **Next.js 16**, App Router (`app/` directory), no `pages/` directory.
- **React 19**.
- **TypeScript** in strict mode (`tsconfig.json`). Note: `next.config.mjs` sets `typescript: { ignoreBuildErrors: true }`, so `next build` does not fail on type errors — type checking must be run separately (`npx tsc --noEmit`).
- Module resolution uses the `@/*` path alias mapped to the repo root.

## UI libraries and component system

- **@base-ui/react** — unstyled interaction primitives (currently used for `Button`, see `components/ui/button.tsx`).
- **shadcn** (`components.json`, `style: base-nova`) — the convention/config layer on top of base-ui; only `components/ui/button.tsx` exists under `components/ui/` today.
- **class-variance-authority (cva)** — defines style variants for components like `Button`.
- **tailwind-merge** + **clsx**, combined into the single `cn()` helper in `lib/utils.ts`, used to merge/override Tailwind classes conditionally.
- **lucide-react** — the icon set used throughout (`iconLibrary: "lucide"` in `components.json`).

No other component or UI libraries are present.

## Styling system

- **Tailwind CSS v4**, configured CSS-first via `@theme inline` in `app/globals.css` — there is **no** `tailwind.config.*` file.
- `app/globals.css` defines:
  - Semantic design tokens on `:root` (`--background`, `--primary`, `--border`, etc.) consumed by Tailwind's `@theme inline` block and by `components/ui/*`.
  - A second, more specific token/utility layer scoped to the `.brutalist-page` class (`--paper`, `--ink`, `--acid`, `--signal-red`, `--muted-paper`, `--dark-surface`) plus a large set of custom utility classes (`hard-shadow`, `btn-press`, `focus-ring`, `premium-card`, `section-kicker`, `marquee-*`, `stagger-reveal`, `halftone`, `noise-overlay`, `orbital-mark`, `hero-mesh`, `glass-surface`, `reveal-up*`).
- Every page currently in use wraps its content in a top-level `div.brutalist-page`, either directly (`BrutalistHome`, `FaqPage`) or via `PageShell` (all `PageShell`-based routes). Page/section components style themselves with arbitrary-value Tailwind classes referencing the `.brutalist-page` CSS variables (e.g. `bg-[var(--acid)]`) rather than the semantic `bg-primary`/`bg-background` tokens; the semantic tokens are used inside `components/ui/*` primitives instead. See `design.md` for the full token/pattern catalogue.
- Fonts: `Dela Gothic One` and Google Fonts `Space Grotesk` loaded via `@import` in `globals.css`; `Oswald`, `Geist Sans`, `Geist Mono` loaded via `next/font/google` in `app/layout.tsx` as CSS variables (`--font-oswald`, `--font-geist-sans`, `--font-geist-mono`).

## Package / dependency architecture

Dependencies are minimal and all are either the Next/React runtime, the styling toolchain (Tailwind v4 + its PostCSS plugin), the shadcn/base-ui component layer, icons, or `@vercel/analytics`. See `package.json` for the exact list — do not treat this as needing expansion; new dependencies should be justified against what's already installed (see `rules.md`).

## Routing architecture

- File-based routing under `app/`, one folder per route, each with a `page.tsx`.
- No dynamic route segments (`[slug]`), no route groups, no API routes (`app/api/`), and no `middleware.ts` — confirmed absent from the repository.
- All routes are effectively static content; nothing depends on request-time data.

## Application flow

1. `app/layout.tsx` (root layout) loads fonts, sets global `<html>`/`<body>` classes, defines default `Metadata`/`Viewport` (title, description, icons, `themeColor`), and conditionally mounts `<Analytics />` from `@vercel/analytics` only when `NODE_ENV === 'production'`.
2. Each `app/<route>/page.tsx` is a thin wrapper: it sets route-specific `Metadata` and renders either:
   - `PageShell` (from `components/page-shell.tsx`) wrapping a page-specific section component or inline JSX — used by `about`, `careers`, `contact`, `gallery`, `memberships`, `privacy`, `programs`, `programs/*`, `reviews`, `trainers`; or
   - A self-contained page component that renders its own header/main/footer — used by `/` (`BrutalistHome`) and `/faq` (`FaqPage`).
3. `PageShell` itself renders `SiteHeader`, a shared hero banner (reads `eyebrow`/`title`/`description` props), `children`, then `SiteFooter`.
4. `BrutalistHome` and `FaqPage` each **duplicate** their own header markup/nav-links array instead of using `SiteHeader` — see `rules.md` and `memory.md` for why this matters when editing navigation.

## Folder structure — how a new developer should read it

```
app/                     Route entry points only (metadata + composition), one folder per URL path
  layout.tsx             Root HTML shell, fonts, global metadata, Analytics
  globals.css            All design tokens + custom utility classes + Tailwind imports
  page.tsx                → renders BrutalistHome (home page)
  <route>/page.tsx        → renders PageShell + a components/*.tsx section, or inline JSX
  programs/<slug>/page.tsx → renders ProgramPage with route-specific props

components/              Reusable page sections and layout ("PageShell", "SiteHeader", "SiteFooter")
  ui/                     shadcn/base-ui primitives (currently: button.tsx)

lib/
  utils.ts                cn() class-merge helper — the only utility module in the project

public/
  images/, icons/          Real site assets currently used
  placeholder-*, icon-*.png, apple-icon.png  Favicons (referenced) and unused scaffold placeholders (see requirements.md → Needs confirmation)
```

A new developer should start at `app/page.tsx` → `components/brutalist-home.tsx` to see the home page end-to-end, then look at `components/page-shell.tsx` to understand how every other route is composed, then `app/globals.css` to understand the design tokens referenced throughout every component.

## Shared components

- `PageShell` — shared page frame (header + hero + footer) for all `PageShell`-based routes.
- `SiteHeader` / `SiteFooter` — global nav and footer, used by `PageShell`-based routes (note: `BrutalistHome` and `FaqPage` use `SiteFooter` but not `SiteHeader` — they inline their own header).
- `ProgramPage` — shared template for the four `/programs/*` detail routes, parameterized by props.
- `Button` (`components/ui/button.tsx`) — the one shared shadcn/base-ui primitive; used by `components/hero.tsx` only (see `requirements.md` re: `Hero` being unused/orphaned).

## Data flow

There is no external data source. All content (plans, trainers, FAQ entries, gallery images, testimonials, program copy, contact details) is defined as literal arrays/objects inline in the relevant `.tsx` file. Changing site content means editing the component file directly — there is no CMS, database, or fetch call anywhere in the codebase.

## Client / server boundaries

Server components by default. Components explicitly marked `"use client"` (confirmed via file headers):

- `components/site-header.tsx` — mobile menu open/close state.
- `components/contact.tsx` — form submit state.
- `components/faq.tsx` — accordion open state + mobile menu state (duplicated header).
- `components/brutalist-home.tsx` — mobile menu, booking form state, WhatsApp deep-link construction.

Everything else (`PageShell`, `SiteFooter`, `ProgramPage`, `Gallery`, `Membership`, `Testimonials`, `Trainers`, and all route `page.tsx` files) is a plain server component.

## Build / deployment architecture

- `npm run build` → `next build`; `npm start` → `next start`. No custom build steps.
- `next.config.mjs`: `typescript.ignoreBuildErrors: true`, `images.unoptimized: true`.
- Deployment target: **Vercel**, per `README.md` — root directory left blank, Next.js auto-detected, `package-lock.json` retained as the lockfile.
- No CI/CD configuration was found (`.github/` does not exist in this repository).

## Environment variable handling

- No `.env` files exist in the repository. `.gitignore` excludes `.env*.local`.
- The only environment-driven code path is `process.env.NODE_ENV === 'production'` in `app/layout.tsx`, which gates mounting `<Analytics />`.
- See `rules.md` and `CLAUDE.md` for the handling rules to follow if env vars are introduced.

## Git / project structure

- Single repository, currently on branch `save-current-changes` (remote-tracked, up to date with `origin/save-current-changes` at time of writing).
- Remote branches observed: `main`, `agent/brutalist-preview`, `agent/orange-footer`, `agent/polish-ui-animation`, `multiPages-website`, `save-current-changes`.
- Recent history (`git log --oneline`) shows the site went through several redesign/revert cycles (e.g. "Replace old site…", "Revert…", "Apply approved Plus Fitness redesign") before arriving at the current approved brutalist design — consistent with `CLAUDE.md`'s note that this design is already approved and should be preserved.
