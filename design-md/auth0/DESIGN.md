---
version: "1.0.0"
name: Auth0 Design System
description: Auth0's developer-first identity expressed as a deep-purple cosmic canvas — near-black violet surfaces under a slow-shifting magenta aurora, crisp Aeonik headlines, uppercase Aeonik Mono tags, and white pill CTAs. Translucent violet cards, hairline white borders, and mint accents give the dark theme a precise, engineered feel; documentation flips to a light lavender-tinted mode.
colors:
  primary: "#9921FE"
  on-primary: "#FFFFFF"
  primary-container: "#B49BFC"
  secondary: "#EBD3FF"
  on-secondary: "#20003A"
  tertiary: "#D4A1FF"
  accent: "#96FFBB"
  surface: "#120021"
  on-surface: "#FFFFFF"
  surface-container: "#20003A"
  surface-container-low: "#08001A"
  on-surface-variant: "#E5E5E5"
  outline: "#B49BFC"
  inverse-surface: "#FFFEFA"
  inverse-on-surface: "#191919"
  neutral: "#8C929C"
  outline-variant: "#FFFFFF54"
  error: "#FF5966"
  light:
    surface: "#FFFFFF"
    on-surface: "#1B171E"
    surface-container: "#F7F3FA"
    on-surface-variant: "#545157"
typography:
  headline-display:
    fontFamily: Aeonik
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: -0.016em
  headline-lg:
    fontFamily: Aeonik
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Aeonik
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.17
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Aeonik
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.25
  body-lg:
    fontFamily: Aeonik
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
  body-md:
    fontFamily: Aeonik
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.4
  body-sm:
    fontFamily: Aeonik
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  label-lg:
    fontFamily: Aeonik
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
  label-md:
    fontFamily: Aeonik
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
  label-mono:
    fontFamily: Aeonik Mono
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0.11em
  caption:
    fontFamily: Aeonik
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
  code:
    fontFamily: Aeonik Mono
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 24px
  xxl: 80px
  full: 9999px
spacing:
  base: 8px
  xs: 8px
  sm: 12px
  md: 24px
  lg: 32px
  xl: 48px
  xxl: 96px
  gutter: 24px
  container-max: 1536px
components:
  button-primary:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    height: 50px
    padding: "{spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    height: 50px
    padding: "{spacing.lg}"
  button-ghost:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    height: 48px
    padding: "{spacing.md}"
  chip-mono-tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.inverse-surface}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.sm}"
    height: 32px
    padding: "{spacing.md}"
  card-violet:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-pricing:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  nav-bar:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md}"
  nav-link:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm}"
  link-accent:
    textColor: "{colors.tertiary}"
    typography: "{typography.label-md}"
  toggle-pill-selected:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    height: 50px
    padding: "{spacing.lg}"
  code-block:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.accent}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  caption-muted:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral}"
    typography: "{typography.caption}"
    padding: "{spacing.xs}"
  card-doc:
    backgroundColor: "{colors.light.surface-container}"
    textColor: "{colors.light.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  nav-pill-doc:
    backgroundColor: "{colors.light.surface}"
    textColor: "{colors.light.on-surface-variant}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
---

## Overview

Auth0's marketing identity is a **deep-space violet** — a `#120021` canvas washed by a slow, cinematic aurora that sweeps magenta, purple, and ember-orange across heroes. Against it, centered Aeonik headlines in pure white, uppercase mono tag chips, and warm-white pill CTAs sell "secure authentication" to developers without a single product screenshot in the hero. Customer logos sit muted at the fold.

The system is deliberately dual-mode: marketing pages stay dark and atmospheric (pricing wraps plan cards in translucent violet at 15% `#9921FE` with `#B49BFC` hairlines), while **Auth0 Docs flips to a light theme** — white surfaces, `#F7F3FA` lavender tints, pill-shaped search chips, and Inter for doc typography. The through-lines are Aeonik, the violet accent `#9921FE`, and tight 4px/8px radii.

## Colors

- **Primary #9921FE ("Auth0 Violet"):** The aurora core and every accent — icons, links, category tags, doc highlights, and the translucent fill of pricing/gradient cards.
- **Lavender family:** `#B49BFC` borders on dark cards, `#D4A1FF` accent links and price highlights, `#EBD3FF` muted-lavender body text on dark, `#F7F3FA` doc surfaces on light.
- **Surface ramp (dark):** `#120021` page canvas, `#20003A` raised container, `#08001A` deepest wells (code blocks, terminal). Text: white headings, `#E5E5E5` body, `#8C929C` muted.
- **Inverse:** Warm paper `#FFFEFA` buttons and `#FFFFFF` fills carry near-black `#191919` text — the CTA language on dark.
- **Accent #96FFBB (mint):** Terminal output, success states, "free" highlights in code contexts — used like syntax highlighting, never fills.
- **Hairlines on dark:** white at 33–95% opacity, plus `#555555` on lighter contexts.
- **Light mode (docs):** white canvas, `#1B171E` ink, `#545157` secondary, `#F2EFF5` hairlines, `#9921FE` accents unchanged.

## Typography

**Aeonik** (Regular 400, Medium 500) does everything — headlines through UI — paired with **Aeonik Mono** for tags, code, and terminal flavor. Docs switch to Inter 600 headings on light surfaces.

- **Headlines:** Aeonik 400 with tight negative tracking (-0.016 to -0.02em) — 64px display, 56–48px section heads, 32px Medium card titles. Always white on dark.
- **Body:** Aeonik 16–20px at 1.4–1.5 line height, lavender-white on dark, ink on light.
- **Mono labels:** Aeonik Mono 14px Medium, uppercase, **+0.11em** tracking — the "NEW: CIAM TRENDS REPORT 2026 →" chip grammar.
- **Code:** Aeonik Mono ~15px in deep wells, mint/white syntax tones.
- **Buttons:** Aeonik 16–18px Medium.

## Layout

A wide 1536px max grid; heroes are centered, single-column statements over the aurora with generous 96px+ vertical padding and a logo strip at the fold. Pricing composes interactive modules — use-case toggles (B2C/B2B), billing pills, MAU sliders — inside bordered dark panels above a violet translucent card grid. Feature pages alternate dark hero bands with lighter content. The docs portal is a conventional left-icon-nav + centered content layout on white.

## Elevation & Depth

Depth is **translucency, not shadow**: cards are violet-tinted glass (`#9921FE` at 15%) or `#20003A` raised panels separated by `#B49BFC`/white-alpha hairlines, floating over the aurora. Code blocks drop into near-black `#08001A` wells. On light docs surfaces, separation is a `#F2EFF5` hairline and lavender tint — no drop shadows anywhere.

## Shapes

Compact radii in dark mode — **4px on buttons, tags, and toggles**, 8–12px on cards and wells, occasional oversized 24–96px arcs on decorative frames. The docs light theme relaxes into **full pill radii** on search chips, pills, and nav elements. Square-ish precision reads "developer tool"; pills read "product surface".

## Motion & Micro-interaction

Fast local feedback, slow atmosphere: color/stroke changes land in **150–200ms**, panels reveal at **450ms** on `cubic-bezier(0.22,1,0.36,1)` and large entrances at **1.1s** on `cubic-bezier(0.16,1,0.3,1)`. The signature move is the **2s opacity drift** of the aurora gradient — ambient, continuous, never interactive. Carousel/slider interactions stay instant.

## Voice & Content Strategy

- **Tone:** Direct, developer-peer, benefit-led — "Convert, protect, & personalize every journey", "The first and last auth platform you'll ever need." Technical credibility without jargon walls.
- **Capitalization:** Sentence case headlines; ALL-CAPS reserved for mono tag chips and nav eyebrows.
- **Terminology:** "Auth0" (zero, stylized `auth0` in logo lockups), "CIAM", "Universal Login", "AI agents & MCP"; audiences named B2C/B2B/Enterprise.
- **Button labels:** Action-first — "See it in action", "Start building for free", "Talk to an expert", "Sign up", "Let's connect".
- **News grammar:** Mono-chip announcements — "New: CIAM Trends Report 2026 →" — terse, dated, linked.

## Components

- **Primary button:** Warm-white `#FFFEFA`/`#FFFFFF` fill, near-black text, 4px radius, ~50px tall, Aeonik 16–18px Medium. This is the only fill style on dark heroes.
- **Ghost button:** Transparent + white-alpha hairline, lavender-white label — the "Talk to an expert" companion.
- **Mono tag chip:** Small bordered pill with uppercase Aeonik Mono label and → arrow — announcements and categories.
- **Pricing card:** Translucent `#9921FE@15%` fill, `#B49BFC` hairline, mono uppercase plan name, white price, feature list, white CTA.
- **Toggles:** Segmented 4px-radius controls (white selected / lavender unselected) for B2C/B2B and Monthly/Yearly.
- **Code block:** `#08001A` well, Aeonik Mono, mint prompt glyphs — the docs terminal motif.
- **Nav (marketing):** Black `#08001A`-class bar, white logo + links, warm-white "Sign up" pill and outlined "Let's connect"; thin gradient edge line on top of the page.
- **Nav (docs):** White bar, pill search ("Search… ⌘K"), "Ask Assistant ⌘I", icon tab row, black pill "Sign Up" + outlined "Let's Connect".

## Do's and Don'ts

- Do keep marketing heroes on the `#120021` aurora — no photography, no product collages in the hero.
- Don't fill large areas with flat `#9921FE`; violet lives in gradients, translucency (15%), icons, and text accents.
- Do use the warm-white `#FFFEFA` button as the single primary action — never violet-filled buttons.
- Don't use heavy shadows — depth is violet glass + hairlines.
- Do keep buttons and tags at 4px radius on dark surfaces; reserve pill radii for the docs light theme.
- Don't set body copy in Aeonik Mono — mono is for uppercase tags, code, and terminal text only.
- Do write hero headlines as centered, white, tightly-tracked statements — max ~10 words.
- Don't introduce warm neutrals outside the `#FFFEFA` button family; the dark palette stays cool violet.
- Do pair every filled CTA with a ghost outline companion rather than a second fill.
- Don't skip the mono tag chip for dated announcements — it is the system's news grammar.
