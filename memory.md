# memory.md

Lightweight, living status file for the Plus Fitness 24/7 Andheri website project. **Update this file whenever a significant task is completed or the implementation state changes.**

## Current status

All 13 planned routes are implemented and functional on the approved neo-brutalist design system (home, about, careers, contact, faq, gallery, memberships, privacy, programs + 4 program detail pages, reviews, trainers). See `phases.md` for the full phase-by-phase breakdown — phases 1–5 are complete; SEO infrastructure (phase 6) and repository cleanup items (phase 7) are outstanding.

## Current work

Establishing the project documentation set (`requirements.md`, `architecture.md`, `rules.md`, `phases.md`, `design.md`, `memory.md`) alongside the existing `CLAUDE.md`. No application/source files were modified as part of this work — inspection only.

## Recently completed

- 2026-08-12: Created `CLAUDE.md` (technology stack, structure, design system, coding conventions, responsive/accessibility requirements, dependency/secrets rules, required checks, approval-before-significant-change workflow rule).
- 2026-08-12: Created the six-file documentation system in this same session (`requirements.md`, `architecture.md`, `rules.md`, `phases.md`, `design.md`, `memory.md`), based on direct inspection of `package.json`, `app/`, `components/`, `public/`, config files, `app/globals.css`, and git state.
- Per `git log`, the current brutalist design was preceded by at least one prior design iteration that was replaced and reverted (`13ce4a2 Replace old site with corrected Plus Fitness website` → `d18b7f5 Revert "Replace old site…"` → `3d0dd60 Apply approved Plus Fitness redesign`) before landing on the current approved state.

## Important decisions

- **The current neo-brutalist design is the approved design** (`README.md`: "Approved premium redesign"). Do not change the visual style without explicit instruction — see `rules.md` and `CLAUDE.md`.
- **No backend/CMS is in scope as currently built.** All content is hardcoded in `.tsx` files; lead capture is WhatsApp-deep-link-based (home page) or UI-only (contact page). Treat this as the current architecture, not a gap to silently "fix" — confirm with the user before adding any backend/API layer.
- **npm is the package manager of record** for this repo, per `README.md`, even though `pnpm-lock.yaml` is also present. Use `npm` for all install/build/dev commands unless told otherwise.
- **`components/hero.tsx` is not wired into any route.** It was left as-is during this documentation pass rather than removed or connected, pending user confirmation (see `requirements.md` → Needs confirmation).

## Known issues

- `components/hero.tsx` (the `Hero` component) is unused by any route and implements a different, non-brutalist design system (rounded corners, semantic `primary`/`accent` gradient tokens, `glass-surface`/`hero-mesh`/`orbital-mark` effects). Needs a decision: delete, wire up, or leave as-is.
- Duplicate header markup: `SiteHeader` (used by `PageShell` routes) is reimplemented inline (with its own `navLinks` array) inside both `components/brutalist-home.tsx` and `components/faq.tsx`. A navigation change currently requires editing up to three files in sync.
- `/contact` page's "free pass" form and the home page's trial/booking forms do not send data to any backend, email service, or database — see `requirements.md` for details. This may be intentional (WhatsApp-first lead flow) or may be a gap, depending on business requirements.
- Both `package-lock.json` and `pnpm-lock.yaml` exist despite the README instructing npm-only usage for Vercel deploys.
- Unused placeholder assets remain in `public/` (`placeholder-logo.png/svg`, `placeholder-user.jpg`, `placeholder.jpg/svg`) — leftovers from the shadcn scaffold, not referenced by any current page.
- No sitemap, robots file, or Open Graph metadata exists (see `phases.md` → Phase 6).

## Next steps

All blocked on user confirmation (per `rules.md`) — see `requirements.md` → "Needs confirmation" for full details on each:

1. Fate of `components/hero.tsx`.
2. Whether to consolidate the three header implementations.
3. Whether the contact/trial forms need real backend submission.
4. Whether `pnpm-lock.yaml` should be removed.
5. Whether unused `public/placeholder-*` assets can be deleted.
6. Whether SEO infrastructure (sitemap/robots/Open Graph/manifest) is in scope.
7. Whether the privacy policy's placeholder-sounding copy is final.

## Files currently being worked on

None — this session's work was documentation-only (`CLAUDE.md` and this six-file documentation set at the project root). No application/source files under `app/`, `components/`, `lib/`, or `public/` were modified. `package.json`, lockfiles, and Git configuration were not touched.
