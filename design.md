# design.md

Documentation of the **existing** design system, sourced directly from `app/globals.css` and the components that consume it. Nothing here is proposed — values not found in the code are marked "Not currently defined."

## Brand identity

Neo-brutalist visual identity: heavy black borders, hard offset drop-shadows, zero border radius, uppercase display type, a warm off-white "paper" background, and a single bright orange as the dominant accent. The wordmark is `+ Plus Fitness` (with the `+` set in the accent orange), used consistently in `SiteHeader`, `BrutalistHome`'s inline header, and `SiteFooter`.

This system is applied via the `.brutalist-page` wrapper class and is used on **every route currently in production** (confirmed in `architecture.md`).

> Note: `components/hero.tsx` defines a second, different visual language (rounded corners, semantic `primary`/`accent` gradient text, glassmorphism) that is not currently used by any route. It is documented separately below and flagged in `requirements.md` as needing confirmation — do not treat it as part of the live design system.

## Color palette (from `.brutalist-page` custom properties, `app/globals.css`)

| Variable | Value | Usage |
|---|---|---|
| `--paper` | `#f8f4e8` | Page background |
| `--ink` | `#09090b` | Primary text, all borders, dark section backgrounds |
| `--acid` | `#ff6b00` | Primary brand accent — CTAs, highlights, the `+` mark, active states |
| `--signal-red` | `#2457ff` | Secondary accent (a **blue**, despite the name) — kickers/eyebrow labels, "featured" badges |
| `--muted-paper` | `#e8e3d5` | Secondary/muted backgrounds (table cells, hover states) |
| `--dark-surface` | `#151518` | Dark section backgrounds (e.g. memberships section) |

### Root theme tokens (`:root`, `app/globals.css`)

The semantic shadcn/Tailwind tokens mirror the same palette and are used inside `components/ui/*` (currently just `Button`):

| Token | Value |
|---|---|
| `--background` | `#f8f4e8` |
| `--foreground` | `#09090b` |
| `--primary` | `#ff6b00` |
| `--primary-foreground` | `#09090b` |
| `--secondary` / `--muted` | `#e8e3d5` |
| `--accent` | `#2457ff` |
| `--accent-foreground` | `#ffffff` |
| `--destructive` | `#c62828` |
| `--border` / `--input` / `--ring` | `#09090b` / `#09090b` / `#ff6b00` |
| `--radius` | `0` |

### Background colors

- Page background: `--paper` (`#f8f4e8`).
- Dark section backgrounds: `--ink` (`#09090b`) or `--dark-surface` (`#151518`), used for the memberships, trainers, trial-CTA, and marquee sections on the home page.
- Accent section backgrounds: `--acid` (orange) or `--signal-red` (blue) used as full-bleed section backgrounds (e.g. testimonials section, trainers page, class-booking section).

### Accent colors

`--acid` (orange) is the primary accent; `--signal-red` (blue) is the secondary/complementary accent. They are frequently paired (orange CTA + blue kicker label) rather than used interchangeably.

### Text colors

Body text is `--ink` on light backgrounds or white/`white/60`–`white/80` opacity on dark backgrounds. Kicker/eyebrow labels consistently use `--signal-red` (on light backgrounds) or `--acid` (on dark backgrounds).

## Typography

| Role | Font | How it's loaded | Applied via |
|---|---|---|---|
| Display/heading (brutalist pages) | `Dela Gothic One` | `@import url(fonts.googleapis.com...)` in `globals.css` | `.font-display` / `.font-heading` classes — always with `text-transform: uppercase` and tight letter-spacing |
| Body (brutalist pages) | `Space Grotesk` | Same `@import` | Default font on `.brutalist-page` |
| Fallback/default (non-brutalist scope) | `Oswald` | `next/font/google` (`--font-oswald`) | `--font-heading` theme variable |
| Default sans (outside brutalist scope) | `Geist Sans` | `next/font/google` (`--font-geist-sans`) | `--font-sans` theme variable, applied to `<body>` in `app/layout.tsx` |
| Monospace | `Geist Mono` | `next/font/google` (`--font-geist-mono`) | `--font-mono` theme variable (no current visible usage found in components) |

### Font weights

Oswald is loaded with weights `500, 600, 700` only (`app/layout.tsx`). No explicit weight scale is otherwise defined — components use Tailwind weight utilities (`font-bold`, `font-semibold`, `font-medium`) ad hoc. **Not currently defined as a formal scale.**

### Heading hierarchy

No single documented type scale exists; heading sizes are set per-component with responsive clamps, e.g.:
- Home page H1: `text-[44px] sm:text-[60px] lg:text-[88px] xl:text-[112px]`
- Section H2s commonly: `text-[36–44px]` → `sm:text-5xl/6xl` → `lg:text-7xl/8xl`

All headings use `.font-display` (uppercase, tight tracking, `Dela Gothic One`). **A formal H1–H6 scale is not currently defined** — sizes are set per-instance.

### Body text

Base body copy typically `text-sm`/`text-base`/`text-lg` with `font-medium` and `leading-relaxed`; often set off with a left accent border (`border-l-4 border-[var(--acid)]` or `border-[var(--ink)]`), e.g. in `page-shell.tsx`, `program-page.tsx`, `contact.tsx`.

## Spacing system

No custom spacing scale is defined — Tailwind's default spacing scale is used directly. Section vertical rhythm is consistently `py-16`/`py-20` on mobile scaling to `py-24`/`py-28` at `sm`/`md`. **No named spacing tokens exist**; treat this as "use Tailwind defaults, follow neighboring sections' `py-*` values."

## Border radius

`--radius: 0` at the root, and `.brutalist-page` explicitly forces `.rounded-2xl/xl/lg/md` back to `border-radius: 0`. **The entire brutalist system is intentionally square-cornered — do not introduce rounded corners into brutalist-page content.**

(The unused `components/hero.tsx`/`glass-surface` system does use `rounded-2xl` and rounded buttons — again, not part of the live design language.)

## Borders

Consistently `border-2` (or `border-[3px]`/`border-4` for emphasis) solid `--ink`, on essentially every card, section divider, table, input, and image frame. This is a core, load-bearing visual signature of the design — not incidental styling.

## Shadows

Two custom utilities, both hard (non-blurred) offset shadows in `--ink`:
- `.hard-shadow` → `4px 4px 0 var(--ink)`
- `.hard-shadow-lg` → `8px 8px 0 var(--ink)`

Interactive elements combine these with `.btn-press`, which animates the shadow/translate on hover (`translate(2px,2px)` + shadow `2px 2px 0`) and active (`translate(4px,4px)` + shadow `0 0 0`) states, simulating a physical button press.

## Buttons

No single `Button` component is used for brutalist CTAs — instead, every CTA is a styled `<a>`/`<button>`/`<Link>` sharing the same class recipe: `btn-press focus-ring hard-shadow(-lg) font-display` + `border-2 border-[var(--ink)]` + a background of `--acid`, `--ink`, or `--paper`. (The one actual `Button` component, `components/ui/button.tsx`, is only used by the unused `Hero` component — see note above.)

## Cards

Recurring "premium-card" pattern (also defined as a standalone `.premium-card` utility, though most instances hand-roll the same recipe): `border-2 border-[var(--ink)]` + `hard-shadow`/`hard-shadow-lg` + solid background (`--paper`, `--acid`, `--ink`, or `--dark-surface`) + generous padding. Used for value props, program cards, membership plans, testimonials, trainer cards.

## Forms

Inputs/selects/textareas: `h-12`–`h-16`, `border-2 border-[var(--ink)]`, no rounding, `.focus-ring` on focus, uppercase micro-labels (`text-[10px] font-bold uppercase tracking-widest`) either above the field (`contact.tsx`, `brutalist-home.tsx` class-booking form) or as a floating label overlapping the border (`brutalist-home.tsx` trial form). All example forms use native `required` validation and no client-side validation library.

## Navigation

- Desktop: horizontal nav, `text-xs font-bold uppercase tracking-[0.18em]`, visible at `xl` and above.
- Mobile (below `xl`): hamburger (`Menu`/`X` from lucide-react) toggles a full-width dropdown panel with `--acid` background, numbered links (`0{index+1}` convention), `aria-expanded` on the toggle button.
- Sticky header: `sticky top-0` with `hard-shadow` and a `border-b-2`. (Separately, sidebar content such as the FAQ page's aside and the program-detail image uses `lg:sticky lg:top-28` — not the header.)
- Footer: dark (`--dark-surface`) background, a 4px `--footer-accent` (`#ff6b00`) top bar, link groups numbered `01`/`02`, social links, copyright line with a dynamically computed year.

## Responsive behavior and breakpoints

Standard Tailwind breakpoints are used with no customization: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px). Layout conventions observed:
- Primary content grid: `grid-cols-12` (desktop) collapsing to a single column or `grid-cols-2` on mobile.
- Navigation switches from hamburger to full horizontal nav at `xl`.
- Headline font sizes step up at each breakpoint (mobile → `sm` → `lg`/`xl`) using arbitrary pixel values, not the default Tailwind text scale.
- Max content width is consistently `max-w-[1440px]` (occasionally `max-w-7xl`, `max-w-[1200px]`/`max-w-[1100px]` for narrower content pages like careers/privacy).

## Animations / transitions

Defined in `app/globals.css`:
- `.reveal-up`, `.reveal-up-delay`, `.reveal-up-delay-2` — staggered fade/slide-in on load (used in `page-shell.tsx`).
- `.stagger-reveal > *` — per-child staggered reveal with `nth-child` delays (used for hero content blocks).
- `.marquee-content` — continuous horizontal scroll (`24s linear infinite`) for the "Built for performance / No long-term contracts / …" ticker bands.
- `.orbital-mark` — slow rotating decorative ring (only used by the unused `Hero` component).
- `.btn-press` — press-down interaction on hover/active (see Buttons above).
- All of the above are disabled or shortened under `@media (prefers-reduced-motion: reduce)`.

## UI patterns

- **Numbered sections/items**: `0{index + 1}` display convention used pervasively (nav links, FAQ items, plan cards, program cards, footer groups, image captions).
- **Section kicker**: small uppercase label with a leading horizontal rule (`.section-kicker`), or the brutalist variant: a colored eyebrow "chip" (`bg-[var(--signal-red)] px-3 py-1 text-[10px] uppercase`).
- **Grayscale imagery**: photos are rendered `grayscale` (often `grayscale contrast-125`) with a hover transition to full color/scale-up — a consistent motif across hero, gallery, trainers, and about images.
- **Marquee ticker bands**: full-width scrolling text strips used as section dividers on the home and FAQ pages.

## Accessibility considerations (design-relevant)

- `.focus-ring` utility provides a highly visible focus state (`outline: 3px solid var(--acid)` + `box-shadow: 0 0 0 5px var(--ink)`), applied to all interactive elements.
- Icon-only buttons carry `aria-label` (menu toggle, social links in `trainers.tsx`).
- Toggle controls carry `aria-expanded` (mobile menu, FAQ accordion items).
- Decorative-only elements (`noise-overlay`, `halftone`, most inline icons) carry `aria-hidden="true"`.
- Star ratings use a single `role="img" aria-label="5 out of 5 stars"` wrapper rather than exposing five individually-announced icons (`testimonials.tsx`).
- Dynamic confirmation states use `aria-live="polite"` (`contact.tsx` submitted state; `brutalist-home.tsx` preferred-time indicator).
- Horizontally-scrolling content (the weekly schedule table) is wrapped in a `role="region" aria-label="…" tabIndex={0}` scroll container so keyboard users can scroll it.
- `prefers-reduced-motion` is respected globally (see Animations above).
