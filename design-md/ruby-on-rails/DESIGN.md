---
version: "1.0.0"
name: Ruby on Rails Design System
description: >-
  A bold, warm, developer-first marketing identity built on a single signature
  color — Rails Red — set in tightly tracked Calibre headlines over a soft blush
  canvas. The system pairs flat, poster-like centered sections with dark plum
  code windows, white panels lifted by large soft shadows, and a consistent
  red-ring-and-lift hover language on every interactive surface.
colors:
  primary: "#D30001"
  on-primary: "#FFFFFF"
  secondary: "#261B23"
  on-secondary: "#FFFFFF"
  neutral: "#5A5153"
  surface: "#F0E7E9"
  surface-dim: "#E6DDDF"
  surface-container: "#FFFFFF"
  surface-container-highest: "#DCD3D5"
  on-surface: "#261B23"
  on-surface-variant: "#5A5153"
  outline: "#261B231A"
  error: "#B3261E"
  error-container: "#FDE2E1"
  on-error-container: "#B3261E"
  success-container: "#DFF6E5"
  on-success-container: "#137333"
  warning-container: "#FFF3CD"
  on-warning-container: "#8A5A00"
  code-surface: "#261B23E6"
  code-on-surface: "#F8F8F2"
typography:
  headline-display:
    fontFamily: Calibre
    fontSize: 78px
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Calibre
    fontSize: 55px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Calibre
    fontSize: 47px
    fontWeight: 700
    lineHeight: 0.91
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Calibre
    fontSize: 39px
    fontWeight: 700
    lineHeight: 0.97
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Calibre
    fontSize: 36px
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: -0.01em
  title-md:
    fontFamily: Calibre
    fontSize: 31px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.006em
  title-sm:
    fontFamily: Calibre
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.19
    letterSpacing: -0.01em
  subtitle-lg:
    fontFamily: Calibre
    fontSize: 39px
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Calibre
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: -0.006em
  body-md:
    fontFamily: Calibre
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.24
  body-sm:
    fontFamily: Calibre
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.33
  label-lg:
    fontFamily: Calibre
    fontSize: 23px
    fontWeight: 600
    lineHeight: 1.17
    letterSpacing: -0.006em
  label-md:
    fontFamily: Calibre
    fontSize: 21px
    fontWeight: 600
    lineHeight: 1.24
    letterSpacing: -0.006em
  label-sm:
    fontFamily: Calibre
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0.1em
  label-xs:
    fontFamily: Calibre
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.54
  code-md:
    fontFamily: IBM Plex Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.77
rounded:
  xs: 3px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  xxl: 22px
  full: 999px
spacing:
  base: 10px
  xs: 4px
  sm: 10px
  md: 20px
  lg: 30px
  xl: 40px
  xxl: 60px
  section: 80px
  section-lg: 120px
  gutter: 30px
  margin: 60px
  container-max: 1440px
  content-max: 1080px
  mobile:
    margin: 30px
components:
  logo-mark:
    backgroundColor: "{colors.primary}"
    size: 112px
    rounded: "{rounded.full}"
  logo-mark-hover:
    backgroundColor: "{colors.secondary}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.xxl}"
    height: 44px
    padding: "{spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
  button-dark:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.xxl}"
    height: 44px
  button-dark-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    height: 44px
  button-badge-hover:
    backgroundColor: "{colors.surface-container-highest}"
    textColor: "{colors.primary}"
  nav-link:
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
  nav-link-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
  link-inline:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  link-inline-hover:
    textColor: "{colors.secondary}"
  link-cta:
    textColor: "{colors.on-surface}"
    typography: "{typography.title-md}"
  link-cta-hover:
    textColor: "{colors.primary}"
  footer-link:
    textColor: "{colors.neutral}"
    typography: "{typography.body-sm}"
  footer-link-hover:
    textColor: "{colors.on-surface}"
  card:
    backgroundColor: "{colors.surface-container}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-flag:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xs}"
  badge-metric-success:
    backgroundColor: "{colors.success-container}"
    textColor: "{colors.on-success-container}"
    typography: "{typography.label-xs}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  badge-metric-warning:
    backgroundColor: "{colors.warning-container}"
    textColor: "{colors.on-warning-container}"
    typography: "{typography.label-xs}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  badge-metric-error:
    backgroundColor: "{colors.error-container}"
    textColor: "{colors.on-error-container}"
    typography: "{typography.label-xs}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  filter-chip:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.primary}"
    typography: "{typography.label-xs}"
    rounded: "{rounded.full}"
  code-window:
    backgroundColor: "{colors.code-surface}"
    textColor: "{colors.code-on-surface}"
    typography: "{typography.code-md}"
    rounded: "{rounded.lg}"
  code-inline:
    backgroundColor: "{colors.code-surface}"
    textColor: "{colors.code-on-surface}"
    typography: "{typography.code-md}"
    rounded: "{rounded.sm}"
  avatar:
    size: 90px
    rounded: "{rounded.full}"
---

## Overview

Ruby on Rails' site is a developer-first marketing surface: bold, warm, and
unapologetically red. Every page opens with a huge, centered, tightly tracked
headline in Rails Red over a soft blush canvas, followed by a short lede and a
single action. The mood is confident and community-proud with a streak of dry
humor ("Rails scales from PROMPT to IPO", "Optimized for happiness"), and the
current positioning leans hard into AI-assisted development while keeping the
framework's two decades of credibility (a wall of famous logos, contributor
counts, team photos) front and center.

Density is deliberately low: sections are poster-like — centered type, generous
air, no sidebars, no carousels. Imagery is functional, not decorative: a product
demo video, dark code windows with a Monokai-style syntax palette, grayscale-free
company logos, and circular team portraits. Depth comes from white panels
floating on the blush canvas with large, soft plum shadows, and interactivity is
signaled by a signature 3px red ring plus a small lift rather than color alone.

## Colors

The palette is a duotone of two anchors — Rails Red and Dark Plum — on a blush
canvas, plus a pastel traffic-light set reserved for data.

- **Rails Red `#D30001`:** The entire brand. All `h1`/`h2`/`h3` headlines,
  inline links, the logo disc, primary buttons, card flags, and every hover
  accent. It is the only hue allowed to shout.
- **Dark Plum `#261B23`:** Ink for all body copy and non-red headings; the
  surface for code windows (at 90% alpha) and the inverse button color; also the
  universal hover state for red elements (red buttons, red links, and the logo
  all turn plum on hover).
- **Blush `#F0E7E9`:** The page canvas — everything sits on it. Also the
  resting color of interactive chips: nav links and the version badge deepen to
  `#DCD3D5` / `#E6DDDF` on hover while their text flips to red.
- **White `#FFFFFF`:** Reserved for content panels, cards, the nav bar, and
  text/icons sitting on red or plum.
- **Warm Gray `#5A5153`:** Secondary text — excerpts, captions, footer links,
  muted metadata.
- **Hairline `#261B23` at 10%:** The only border the system uses — 1–3px rules
  between posts, card outlines, and the pre-armed `0 0 0 3px` ring on
  interactive blocks.
- **Status pastels** (seen in the benchmark table): `#DFF6E5`/`#137333`
  success, `#FFF3CD`/`#8A5A00` warning, `#FDE2E1`/`#B3261E` error — always as
  tinted background + dark text pill pairs.
- **Code palette (prose-only):** inside `code-surface` windows, a Monokai
  family — base `#F8F8F2`, keywords cyan `#9DECFC`, strings yellow `#FFF5AB`,
  names green `#D0FF71`, literals purple `#CFB7FD`, operators pink `#FF699B`,
  comments gray `#B4B4B3`.

## Typography

Everything is **Calibre** (self-hosted, weights 400/600/700) — a friendly
grotesque whose tight spacing makes the giant red headlines read as confident
posters rather than marketing banners. Code is **IBM Plex Mono** (400/500).

- **Headlines:** Calibre 700 with negative tracking (`-0.01em`), almost always
  in `primary` red and centered. The display size runs 78px/72px on desktop and
  steps down through 55/47/39px at smaller breakpoints and section depths;
  mobile caps at 47px/43px.
- **Titles:** bold 26–36px used for feature names ("Active Records make
  modeling easy."), post titles, and card headlines. Post titles double as red
  underlined links.
- **Subtitles/ledes:** the only 400-weight large text — 39px/44px on desktop
  (26px/29px mobile), in plum, pairing a bold opening clause with regular
  continuation ("**Ruby on Rails scales from PROMPT to IPO.** Token-efficient
  code that's easy for agents to write…").
- **Body:** 21px/26px on desktop, 18px/24px mobile — unusually large for body
  copy, matching the oversized type hierarchy.
- **Labels:** 600 weight, 14–23px. True uppercase appears on card flags
  (`label-sm`, 0.1em tracking) and small overlines (~12px, `#968D8F`).
- **Code:** IBM Plex Mono 13px/23px, always on the dark plum surface — never
  rendered in red.

## Layout

A single centered column on a fixed-max-width grid. The `.container` caps at
**1440px**; reading content narrows to **~1080px** (posts, methodology) and
media widens to ~1280px. Symmetric side margins are **60px** on desktop and
**30px** on mobile, with inner content sometimes inset a further 60px.

- **Sections** stack with 80px vertical padding (`section`), growing to 120px
  for top/bottom bookends; the blush canvas runs edge to edge.
- **Grids** are simple: 2-column card grids on the homepage features,
  3-column card rows, a 4-column logo wall (2 columns mobile, 5px gaps wrapped
  in 10px cell padding), and a 1:3 date-to-content split on the news index.
- **Separators** are 3px plum-10% rules (`outline`), never 1px grays — thick
  enough to read as a design element.
- **The nav** is 132px tall and perfectly symmetric: four links each side of a
  centered 112px red logo disc. On mobile it collapses to a hamburger whose
  overlay drops with the big panel shadow.
- Breakpoints observed: 768px, 1024px (main desktop step), and minor 600/800px
  tweaks.

## Elevation & Depth

Flat base, floating panels. The blush canvas is unadorned; hierarchy is built by
lifting white surfaces above it.

- **Hero panels** (`.heading--frame-white`, `.core` blocks, methodology cards):
  `0 15px 70px 5px rgba(38,27,35,0.15)` + a `0 1px 1px` contact line — a very
  large, very soft plum shadow that keeps the tint warm.
- **Cards:** a small resting shadow (`0 3px 15px 2px` at 5%) **plus** a
  `0 0 0 3px` ring at 10% ink. On hover the ring turns solid `#D30001` and the
  card translates −3px — depth is signaled by the ring, not by a bigger shadow.
- **Logo wall cells** rest flat on blush (`#F0E7E9`), hover to white + red ring
  + lift. The 3px ring is pre-applied in transparent red so the transition only
  animates color.
- **Code windows** get only the `0 1px 1px` contact shadow — they stay flat
  against the canvas.

## Shapes

Soft, generous radii, scaled by element size — small elements get small radii,
pills are reserved for true pills.

- **3px** — tiny red flag labels on cards ("LEARNING", "01").
- **4px** — inline code chips.
- **6px** — nav/filter chips and the version badge (the only "button" that
  isn't a pill).
- **8px** — the workhorse radius: cards, code windows, video frames, logo
  cells, dropdown panels.
- **12px** — large hero panels and framed content blocks.
- **22px** — buttons: technically ~half their 44px height, i.e. a true pill
  that still reads slightly squarer than full-circle ends.
- **999px / 100%** — metric pills in data tables, the logo disc, and avatars.

## Motion & Micro-interaction

One transition to rule them all: **250ms cubic-bezier(0.33, 1, 0.68, 1)** — a
quint-style ease-out — applied to `color`, `background`, `box-shadow`, and
`transform` on every interactive element. Links tint, chips blush, buttons swap
red↔plum, cards and logo cells gain a red ring and lift −3px. Nothing loops,
nothing parallaxes, nothing animates on scroll. The choreography is instant and
tactile: state changes complete in a quarter second, and the pre-applied
transparent ring means hover only ever animates color + transform, never layout.

## Voice & Content Strategy

- **Tone of voice:** Confident, warm, and a little wry. Short declarative
  claims, often with a clever kicker — "Accelerate your agents with convention
  over configuration.", "You're in good company.", "Optimized for happiness.",
  "We make Rails better."/"You can make it better."
- **Capitalization:** Sentence case on all headings — and they end with a
  period. Button labels use plain verb phrases ("Contribute on GitHub",
  "Read the most recent benchmark report", "See more posts…"), never
  exclamation points.
- **Signature constructions:** bold lead-in clause + regular continuation
  ("**Rails is a full-stack framework.** It ships with all the tools…");
  "Meet the X" / "Read the X ›" trailing-arrow text links ("Meet the Rails
  team ›", "Read the Rails Doctrine ›"); version callouts in badge form
  ("Rails 8.1.4.1 — released November 4, 2026").
- **Terminology:** "Rails" (never "RoR"), "convention over configuration",
  "The Rails Doctrine", "The Rails Core team", "The Committers", "The Alumni".
  Numbers get spelled warmth: "Over six thousand people", "More than 7,000
  people".
- **Dates:** full month name — "November 13, 2026".

## Components

### Buttons

`button-primary` is a 44px-tall red pill: Calibre 23px/600 white text on
`#D30001` with ~22px horizontal inset. Hover swaps the whole button to dark
plum (text stays white) — the site's signature inversion. `button-dark` is the
same pill in plum and inverts to red on hover. `button-badge` (the version
pill) is the quieter variant: blush `#F0E7E9`, 6px radius, plum text, deepening
to `#DCD3D5` with red text on hover. Text buttons (`link-cta`) are large bold
underlined phrases ending in ›, plum at rest, red on hover.

### Navigation

A 132px white bar, perfectly bilateral: four 23px/600 links per side around a
centered 112px red logo disc (`logo-mark`, which itself turns plum on hover).
Each link's label sits in a 6px-radius chip; hover fills the chip with blush
`#F0E7E9` and turns the text red. The active page keeps red text.

### Links

`link-inline` is always `primary` red inside prose; underlined inside
post-style content blocks, hover turns it plum. Arrow-suffixed CTA links
(`link-cta`) are plum + 2px underline, hover to red.

### Cards & flags

`card`: white, 8px radius, resting 5% shadow + 3px ink-10% ring; hover swaps
the ring to solid red and lifts −3px. A floating `card-flag` — white 14px/600
uppercase text on a 3px-radius red tag with a trailing arrow notch — hangs off
the top edge of actionable cards and turns solid on hover.

### Data & status

Benchmark/status values are pastel pill pairs (`badge-metric-*`): success
green, warning amber, error red, each tinted background + dark text at
13px/700, 999px radius. `filter-chip`s are full pills — white with a red
border and red 15px/700 label when selected, gray `#5A5153` when not.
Table headers are 13px/700 plum; rows separate with the same 3px hairline
as post lists.

### Code

`code-window`: `rgba(38,27,35,0.9)` surface, 8px radius, IBM Plex Mono
13px/23px in `#F8F8F2` with the Monokai accent palette, topped by a filename
bar (`#DCD3D5` text over a fading plum gradient). `code-inline` uses the same
dark chip at 4px radius inside prose — code is always dark-on-dark, never red.

### People & logos

`avatar`: 90px circle with a 2px ink-15% border that turns red on hover, set
above a red name and gray "Country / Since YYYY" lines. Trusted-company logos
sit in blush 8px cells that lift to white + red ring on hover.

## Do's and Don'ts

- Do reserve Rails Red for headlines, links, and interactive surfaces — one
  red focal point per view.
- Don't let red body copy or red code exist; prose text is always plum or
  warm gray, code lives only on the dark plum surface.
- Do end centered section headlines with a period and keep them sentence case.
- Don't use hairlines under 3px for structural separators — the thick 10%-ink
  rule is intentional, not a mistake.
- Do hover-invert red elements to Dark Plum (buttons, logo, links) and give
  neutral elements a blush chip + red text (nav, filter).
- Don't animate anything but color, background, shadow, and transform — and
  always on the single 250ms quint ease-out.
- Do use the red ring + −3px lift for hover on cards and logo cells; don't
  enlarge the shadow instead.
- Don't apply pill radius to cards or panels — `full` is for buttons, metric
  badges, avatars, and the logo disc only; content surfaces stop at 12px.
- Do keep the canvas blush and let white panels float on it — never put
  blush panels on white.
- Don't add a dark theme; the site is light-only, and code windows already
  provide the dark counterpoint.
- Do treat the badge's red-on-`#DCD3D5` hover as the site's own pairing — at
  21px/600 it qualifies as WCAG large text (3.8:1 ≥ 3:1); don't "fix" it by
  darkening the red.
