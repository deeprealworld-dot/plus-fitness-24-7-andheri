# rules.md

Project-specific development rules for the Plus Fitness 24/7 Andheri website, derived from the existing codebase. These rules apply to anyone — human or AI — modifying this repository. See also `CLAUDE.md`, which these rules are consistent with and extend.

## Technology rules

- Use **Next.js App Router** conventions (`app/<route>/page.tsx`) for all new routes — do not introduce `pages/`, a router library, or a different routing convention.
- Use **TypeScript** for all new source files; keep strict-mode compliant.
- Style with **Tailwind CSS v4** utility classes plus the existing custom utility classes already defined in `app/globals.css` (`hard-shadow`, `focus-ring`, `btn-press`, `section-kicker`, etc.). Do not add a separate `tailwind.config.*` file — this project uses the CSS-first `@theme inline` configuration.
- For new interactive UI primitives, follow the existing pattern in `components/ui/button.tsx`: a `@base-ui/react` primitive + `class-variance-authority` variants + `cn()` from `lib/utils.ts`.
- Use **lucide-react** for all icons — do not add a second icon library.
- Use `cn()` (`lib/utils.ts`) whenever merging conditional or variant Tailwind classes, instead of manual string concatenation or template-literal class merging.
- Prefer the `@/*` path alias for imports (`@/components/...`, `@/lib/...`) over relative `../../` paths.

### Existing libraries that should be preferred

| Need | Use |
|---|---|
| Icons | `lucide-react` |
| Class merging / variants | `cn()`, `class-variance-authority` |
| Button-style interactive elements | `@base-ui/react` + `components/ui/button.tsx` pattern |
| Fonts | The already-loaded font set (`Dela Gothic One`, `Space Grotesk`, `Oswald`, `Geist Sans`, `Geist Mono`) — do not load a new font family for brutalist-page content |

## Things to avoid

- **Do not add unnecessary dependencies.** This is a static marketing site with no backend — there is no justified need for state-management libraries, data-fetching libraries, form libraries, CSS frameworks, or alternative UI kits. Check whether an existing dependency already solves the problem before adding a new one.
- **Do not replace an existing library without a strong, stated reason** (e.g. `@base-ui/react`, `class-variance-authority`, `tailwind-merge`) — these are load-bearing for the current component patterns.
- **Do not duplicate existing components.** In particular:
  - `SiteHeader` already exists — do not create a second header component. (Note: `BrutalistHome` and `FaqPage` currently inline their own header markup rather than reusing `SiteHeader`; when touching navigation, update all three places — `components/site-header.tsx`, `components/brutalist-home.tsx`, `components/faq.tsx` — or consolidate them, rather than adding a fourth copy. See `memory.md`.)
  - `PageShell`, `ProgramPage`, `SiteFooter` are the established shared templates — reuse them for new pages rather than writing new page scaffolding from scratch.
- **Do not rewrite the working architecture unnecessarily.** The routing structure, `PageShell` composition pattern, and CSS-variable-driven brutalist design system are all intentional and already approved (see `README.md`: "Approved premium redesign"). Don't introduce a competing pattern for convenience.
- **Do not break existing routes or features.** All 13 routes listed in `architecture.md` must continue to resolve and render correctly after any change. Don't remove a route, rename a path, or delete a component without explicit approval.
- **Do not hardcode secrets.** There are currently no secrets in this codebase (see `CLAUDE.md` → Secrets and environment variables); if any are introduced, they belong only in an untracked `.env.local`, referenced via `process.env`, never committed or hardcoded in source.
- **Do not silently change business-critical copy** — address, phone/WhatsApp number, hours, pricing, and legal text (`app/privacy/page.tsx`) are real business details, not placeholder content, and must not be altered without explicit instruction.
- **Do not "fix" the two different design systems by merging them without being asked.** `components/hero.tsx` uses a different (likely orphaned) design system than the rest of the site — see `requirements.md` → Needs confirmation. Don't delete it, wire it up, or restyle it to match without confirming intent first.

## Coding conventions

### Naming

- Components: `PascalCase` function names with **named exports** (`export function ComponentName`) — no default exports except `page.tsx` route entry files (which Next.js requires to default-export).
- Files: `kebab-case.tsx` (e.g. `site-header.tsx`, `program-page.tsx`).

### Component structure

- Route `page.tsx` files stay thin: export `metadata`, then render a shared/section component with route-specific props or minimal inline JSX. Business logic and markup live in `components/`, not in `app/`.
- Shared, parameterized components (`PageShell`, `ProgramPage`) take a typed props object (inline `{ prop: type }` object types are the existing convention — no separate `types.ts` files exist in the project).
- Keep components as server components by default; add `"use client"` only when the component needs state, effects, or browser APIs (existing client components: `site-header.tsx`, `contact.tsx`, `faq.tsx`, `brutalist-home.tsx`).

### Styling conventions

- Content rendered inside `.brutalist-page` (i.e. almost everything) should style with the `--ink`/`--acid`/`--paper`/`--signal-red`/`--muted-paper`/`--dark-surface` CSS variables via arbitrary-value Tailwind classes (`bg-[var(--acid)]`), matching the surrounding code — not the semantic `bg-primary`/`bg-background` tokens, which are reserved for `components/ui/*` primitives.
- Reuse the existing utility classes (`hard-shadow`, `hard-shadow-lg`, `btn-press`, `focus-ring`, `section-kicker`, `stagger-reveal`, `halftone`, `noise-overlay`, `marquee-*`) instead of hand-rolling equivalent CSS.
- Border radius stays `0` inside `.brutalist-page` — don't introduce rounded corners into brutalist content.
- Numbered UI elements (steps, list items, plan cards) use the `0{index + 1}` display convention already used throughout (`contact.tsx`, `program-page.tsx`, `membership.tsx`, etc.).

### TypeScript conventions

- Strict mode is on (`tsconfig.json`) — don't add `// @ts-ignore` or loosen compiler options to work around type errors; fix the underlying type issue.
- Inline prop object types on the function signature (the project's existing convention) rather than introducing a shared types module, unless a type is genuinely reused across multiple files.

### File organization

- New page-level sections go in `components/` (flat, no subfolders beyond the existing `components/ui/`).
- New shadcn/base-ui primitives go in `components/ui/`.
- New shared utilities go in `lib/` (currently just `lib/utils.ts`).

### Reusable component rules

- Before writing a new component, check `components/` for an existing one that already does the job (`PageShell`, `ProgramPage`, `SiteFooter`, `Gallery`, `Membership`, `Testimonials`, `Trainers` cover most section patterns already).
- If a new route needs the standard header/hero/footer frame, use `PageShell` rather than duplicating the pattern (as `BrutalistHome`/`FaqPage` currently do — don't add a fourth inline copy).

## AI coding boundaries

An AI coding agent (or any contributor) working on this project should:

- **Inspect existing code before changing it.** Read the relevant component(s), the shared templates they compose with (`PageShell`, `ProgramPage`), and `app/globals.css` for relevant tokens/utilities before editing.
- **Reuse existing components when possible** rather than introducing new, similar ones.
- **Make the smallest reasonable change** that satisfies the request — don't restyle, refactor, or "improve" surrounding code that wasn't asked about.
- **Preserve existing functionality.** All routes, forms, and interactive behavior (WhatsApp deep links, FAQ accordion, mobile menu, etc.) must keep working after a change.
- **Avoid unrelated refactoring.** A copy change doesn't need a component extraction; a style tweak doesn't need a prop-API redesign.
- **Ask before significant architectural changes** — e.g. introducing a backend/API route, changing the routing structure, replacing the styling system, consolidating the duplicated header components, or removing the orphaned `Hero` component.
- **Never expose or commit secrets.** There are none today; if any are added, they go in untracked `.env.local` files only.
- **Never delete functionality without approval** — including routes, form behavior, or content sections.
- **Run appropriate checks after changes** — see `CLAUDE.md` → Required checks for the exact commands and when to also check the page in a browser.
- **Explain significant changes** — state which files will be touched and what will change before making the edit, and summarize what was actually changed afterward.
