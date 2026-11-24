---
version: "1.0.0"
name: npm Design System
description: A two-faced design system for the world's largest software registry — exuberant, gradient-driven marketing pages (Poppins headlines, pill CTAs, wombat mascot art) wrapped around a dense, utilitarian developer product surface (Source Sans Pro, Fira Mono code, hairline-bordered utility controls). The wombat-red brand color, a signature magenta-to-orange rainbow strip, and a GitHub-Primer-derived semantic token layer tie both worlds together.
colors:
  primary: "#cb3837"
  on-primary: "#ffffff"
  primary-hover: "#c40b0a"
  primary-deep: "#c12127"
  secondary: "#ffc329"
  on-secondary: "#000000"
  tertiary: "#196cb2"
  on-tertiary: "#ffffff"
  ink: "#231f20"
  success: "#107010"
  success-container: "#dcfdd9"
  error: "#bb2e3e"
  on-error: "#ffffff"
  error-container: "#ffdbdb"
  attention: "#886701"
  attention-container: "#fff5d8"
  surface-disabled: "#00000005"
  outline: "#e6e6e6"
  outline-variant: "#f2f2f2"
  light:
    surface: "#ffffff"
    surface-subtle: "#f7f7f7"
    surface-inset: "#f2f2f2"
    on-surface: "#262626"
    on-surface-muted: "#4d4d4d"
    on-surface-variant: "#666666"
  dark:
    surface: "#1a1a1a"
    surface-subtle: "#242424"
    surface-inset: "#2d2d2d"
    surface-emphasis: "#6e7681"
    on-surface: "#e6e6e6"
    on-surface-muted: "#b3b3b3"
    brand: "#ff6b6b"
    accent: "#58a6ff"
    attention: "#d29922"
    attention-container: "#2e2a1a"
    error: "#f85149"
    success: "#3fb950"
typography:
  headline-display:
    fontFamily: Poppins
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1.25
  headline-lg:
    fontFamily: Poppins
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.25
  headline-md:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.15
  eyebrow:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0.1em
  section-heading:
    fontFamily: Poppins
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0.076em
  nav-link:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: 0.015625em
  button-lg:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.15
  button-md:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0.021em
  headline-content:
    fontFamily: Source Sans Pro
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
  title-lg:
    fontFamily: Source Sans Pro
    fontSize: 30px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.01em
  title-md:
    fontFamily: Source Sans Pro
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.05em
  title-sm:
    fontFamily: Source Sans Pro
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.15
  body-lg:
    fontFamily: Source Sans Pro
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0.006em
  body-md:
    fontFamily: Source Sans Pro
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.15
  label-md:
    fontFamily: Source Sans Pro
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.15
  label-sm:
    fontFamily: Source Sans Pro
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: 0.016em
  code-lg:
    fontFamily: Fira Mono
    fontSize: 36px
    fontWeight: 700
    lineHeight: 0.67
  code-md:
    fontFamily: Fira Mono
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  code-sm:
    fontFamily: Fira Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  input-mono:
    fontFamily: Fira Mono
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.15
  sm-headline-display:
    fontFamily: Poppins
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.25
  sm-headline-lg:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  pill: 50px
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  gutter: 16px
  margin: 32px
  container-max: 1536px
motion:
  state-change:
    duration: 150ms
    delay: 0ms
    timingFunction: ease-in
  surface-hover:
    duration: 200ms
    delay: 0ms
    timingFunction: ease
  surface-enter:
    duration: 300ms
    delay: 0ms
    timingFunction: ease
components:
  button-cta:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md}"
  button-ghost-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-red:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  button-red-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
  button-utility:
    backgroundColor: "{colors.light.surface}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  button-danger:
    backgroundColor: "{colors.light.surface}"
    textColor: "{colors.error}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  button-disabled:
    backgroundColor: "{colors.surface-disabled}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  input-default:
    backgroundColor: "{colors.light.surface}"
    textColor: "{colors.light.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  input-search:
    backgroundColor: "{colors.light.surface-inset}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.input-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
  card-plan:
    backgroundColor: "{colors.light.surface}"
    textColor: "{colors.light.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-auth:
    backgroundColor: "{colors.light.surface}"
    textColor: "{colors.light.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  nav-header:
    backgroundColor: "{colors.light.surface}"
    textColor: "{colors.light.on-surface}"
    typography: "{typography.nav-link}"
  banner-attention:
    backgroundColor: "{colors.attention-container}"
    textColor: "{colors.attention}"
    typography: "{typography.body-md}"
    padding: "{spacing.sm}"
  badge-beta:
    textColor: "{colors.success}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  code-block:
    backgroundColor: "{colors.light.surface-subtle}"
    textColor: "{colors.light.on-surface}"
    typography: "{typography.code-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  install-box:
    backgroundColor: "{colors.light.surface-subtle}"
    textColor: "{colors.light.on-surface}"
    typography: "{typography.code-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  meta-text:
    textColor: "{colors.light.on-surface-muted}"
    typography: "{typography.body-md}"
  link-dark:
    textColor: "{colors.dark.brand}"
    typography: "{typography.body-md}"
  link-accent-dark:
    textColor: "{colors.dark.accent}"
    typography: "{typography.body-md}"
  meta-text-dark:
    textColor: "{colors.dark.on-surface-muted}"
    typography: "{typography.body-md}"
  nav-header-dark:
    backgroundColor: "{colors.dark.surface}"
    textColor: "{colors.dark.on-surface}"
    typography: "{typography.nav-link}"
  card-auth-dark:
    backgroundColor: "{colors.dark.surface-subtle}"
    textColor: "{colors.dark.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  input-search-dark:
    backgroundColor: "{colors.dark.surface-inset}"
    textColor: "{colors.dark.on-surface}"
    typography: "{typography.input-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
  button-utility-dark:
    backgroundColor: "{colors.dark.surface-subtle}"
    textColor: "{colors.dark.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  button-inverted:
    backgroundColor: "{colors.dark.surface-emphasis}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
  banner-attention-dark:
    backgroundColor: "{colors.dark.attention-container}"
    textColor: "{colors.dark.attention}"
    typography: "{typography.body-md}"
    padding: "{spacing.sm}"
  button-danger-dark:
    backgroundColor: "{colors.dark.surface}"
    textColor: "{colors.dark.error}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  badge-beta-dark:
    textColor: "{colors.dark.success}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
---

## Overview

npm is the largest software registry in the world, and its website wears two personalities at once. The marketing surface — home, Pricing, Pro, Teams — is exuberant and warm: huge Poppins headlines floating on a signature magenta-to-orange gradient, soft mascot illustrations (the wombat, npm's mascot), pill-shaped CTAs, and generous centered layouts. The product surface — package pages, sign-in, registry UI — flips to dense, utilitarian developer tooling: Source Sans Pro body text, Fira Mono for anything code-shaped, hairline borders, small square buttons, and data-dense sidebars.

The brand personality is friendly, community-minded, and slightly playful ("Build amazing things", wombat art, the rainbow strip) while remaining credible infrastructure. Emotional tone: energetic on landing pages, invisible and out-of-the-way on product pages. Imagery is dominated by CSS gradients and flat mascot illustration rather than photography. The npm red `#cb3837` is the anchor: it's the wombat's color, the link color in content, and the fill state on ghost CTAs. The rainbow gradient strip (`linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff)` — orange → red-orange → deep red → electric magenta) appears as a hairline under the announcement banner, under active tabs, and atop comparison tables — it's the single most recognizable decorative motif.

Under the hood the system is built on Tachyons utility classes plus a semantic custom-property layer (`--color-fg-*`, `--color-bg-*`, `--color-border-*`) that mirrors GitHub Primer naming — appropriate, since npm is GitHub-owned. A real dark mode exists (moon/sun toggle in the sub-navigation) and reskins every chrome and content surface; only the decorative gradient heroes are exempt.

## Colors

- **Wombat Red / Primary (#cb3837):** The brand color. Used for content links, the ghost-CTA hover fill, icon accents, and the wombat mascot. Its hover shade `#c40b0a` is used on hover states.
- **CTA Red / Primary Deep (#c12127):** A darker, more saturated red used for solid rectangular marketing buttons ("Get started") and as a stop in the rainbow gradient.
- **Sunshine Yellow / Secondary (#ffc329):** The hero's primary CTA color ("Sign up for free") — always paired with black text. The related token `--wombat-yellow: #ffcd3a` powers the active-tab underline and its 20% tint highlight.
- **Near-black Ink (#231f20):** The dark header strip, the "Search" button, and dark emphasis surfaces.
- **Accent Blue / Tertiary (#196cb2):** Secondary link/emphasis blue (GitHub-blue family: `#0969da` for emphasis, `#afcee9` borders, `#ddf4ff` subtle fills).
- **Attention (#886701 on #fff5d8):** The cream announcement banner — dark mustard text on a pale yellow wash.
- **Success (#107010, bg #dcfdd9, border #93d58a):** Green states such as the "Beta" badge pill.
- **Error (#bb2e3e, bg #ffdbdb, border #f1b8bc):** Destructive outlines like "Report malware" and form errors.
- **Surfaces (light):** `#ffffff` default, `#f7f7f7` subtle (code blocks, install boxes, gray step cards), `#f2f2f2` inset (header search field), `#262626` emphasis.
- **Text (light):** `#262626` default, `#4d4d4d` muted, `#666666` subtle; pure `#000000` is also common on older elements, and `rgba(0,0,0,0.7)` styles footer links.
- **Borders (light):** `#e6e6e6` default hairline, `#f2f2f2` muted, `#767676` strong (form inputs).

### Dark mode

Activated by the moon/sun toggle (`[data-color-mode="dark"]` on `<html>`). The semantic layer reskins everything: surfaces become `#1a1a1a` / `#242424` / `#2d2d2d`, text becomes `#e6e6e6` / `#b3b3b3` / `#999999`, borders `#3d3d3d`, brand red brightens to `#ff6b6b`, accent blue to `#58a6ff`, attention to `#d29922` on `#2e2a1a`, and the dark "Search" button lightens to `#6e7681`. The gradient heroes are decorative and do **not** change — white headline text keeps working over them.

## Typography

Three typefaces with strict territorial roles:

- **Poppins** — every display, heading, nav item, eyebrow, and button label on marketing and chrome surfaces. Weights 500–700; the voice is geometric and confident.
- **Source Sans Pro** — all prose and product UI: readme body, package metadata, form labels, sidebar buttons. Weights 300–700.
- **Fira Mono** — anything code-shaped: package names (36px bold!), code blocks, the install command, and — memorably — the header search input at weight 300.

Key rules behind the numbers:

- **Hero display** runs 80px/600 (48px on mobile), section headlines 36px/600 (24px mobile). Line heights are tight: 1.15–1.25.
- **Eyebrows** are small tracked-out Poppins: 14px/600 at 0.1em ("For Public Package Authors"); footer column heads are 17px/700 at 0.076em. They are *not* uppercase — the tracking does the work.
- **Nav links** carry a signature micro-tracking: 0.015625em (the `--header-letter-spacing` token), visible as a subtle 0.2px spread at 14px.
- **Readme/content** pages breathe more: 18px body at 1.65 line-height, h2 at 30px/600 with −0.01em tracking.
- **Package titles** are set in Fira Mono bold at 36px — a deliberate statement that the artifact is code.
- Line heights elsewhere compress to a cramped 1.15 on product UI — density is intentional.

## Layout

- **Spacing base:** 4px grid (Tachyons-derived: 4/8/16/32/64). Legacy utility classes also emit fractional values — 3px, 5px, 10px, 17px, 29.88px, 53.6px — especially vertical margins on marketing sections. Don't be alarmed by them; prefer the clean 4px multiples for new work.
- **Containers:** marketing content centers in a `1536px` max-width canvas; the package page uses tighter `1200–1440px` reading widths; auth cards are `480px` centered islands.
- **Page anatomy:** announcement banner → thin dark sub-nav (Pro / Teams / Pricing / Documentation + theme toggle) → white header (logo + search + auth) → content. Marketing heroes are edge-to-edge gradients; product pages are white with a two-column content/sidebar split.
- **Package page grid:** readme content left, ~300px metadata sidebar right (Install box, downloads sparkline, version/license, collaborators, utility button stack).
- **Breakpoints:** `30em`, `45rem`, `60em` are the canonical steps; assorted px breakpoints (480–1200px) also exist in legacy code.

## Elevation & Depth

Depth is used sparingly and purposefully:

- **Header:** the only persistent shadow is a faint `rgba(0,0,0,0.1) 0 4px 13px -3px` under the white header.
- **CTAs and auth card:** marketing buttons and the sign-in card cast a heavy `rgba(0,0,0,0.4) 0 10px 30px` (auth card: `rgba(0,0,0,0.2) 0 10px 20px`) — dramatic elevation reserved for conversion moments.
- **Everything else is flat:** product surfaces separate with `#e6e6e6` hairlines and tonal shifts (`#ffffff` vs `#f7f7f7` vs `#f2f2f2`), not shadows.
- **Focus:** inputs and controls get a `rgba(0,0,0,0.1) 0 0 0 5px` ring.

## Shapes

A dual-radius system — marketing is round, product is square:

- **Pills (50px / 9999px):** all marketing CTAs ("Sign up for free", "Learn about Pro", plan buttons), badges like "Beta", and avatar circles.
- **Sharp (0px):** the header "Search" button, the solid red "Get started" CTA, and the search input — deliberate brutalist contrast sitting right next to the pills.
- **Small radius (2–4px):** product controls — utility buttons (4px), form inputs (4px), code/install boxes (2px), copy buttons.
- **Auth card (8px):** the largest product radius, on the centered sign-in panel.
- The rule of thumb: the closer a surface is to *marketing*, the rounder it is; the closer to *registry tooling*, the squarer.

## Motion & Micro-interaction

Motion is minimal and functional — this is a registry, not a playground.

- **State changes:** `150ms ease-in` on `color` and `opacity` — the dominant transition across links and buttons. Hover on text links adds `text-decoration: underline`; ghost pills fill with wombat red.
- **Cards and controls:** `all 0.2s ease` (`--standardCardTransition`) on hover-liftable surfaces.
- **Larger moves:** `transform 0.3s ease` for surfaces entering view (e.g., the sign-in avatar treatment).
- **Nothing loops, nothing parallaxes.** `prefers-reduced-motion` is honored in the stylesheet.

## Voice & Content Strategy

- **Tone of voice:** warm, direct, developer-fluent. Plainly confident without enterprise stiffness — "We offer those to the community for free, but our day job is building and selling useful tools for developers like you." Occasional wink: "Take your JavaScript development up a notch."
- **Capitalization:** headings use sentence case ("Build amazing things", "Bring the best of open source to you, your team, and your company"). CTA casing is *inconsistent* on the real site — "Sign up for free" (sentence) sits next to "Get Started With Pro" (title). Prefer sentence case for new work.
- **Terminology:** canonical names are "npm Registry" and "npm CLI" (npm always lowercase), "package", "private packages". GitHub is the parent company voice ("We're GitHub, the company behind the npm Registry and npm CLI").
- **Button grammar:** action labels name the outcome — "Sign up for free", "Get Started With Teams", "Search", "Create". Utility buttons lead with a verb too: "Analyze security with Socket", "Check bundle size", "View package health", "Report malware".
- **Metadata grammar:** terse key/value labels — "Install", "Repository", "Weekly Downloads", "Last publish", "19.3.1 • Public • Published a month ago". Relative time ("a month ago", "19 hours ago") is used over absolute dates.
- **States:** empty inputs are placeholders-only ("Search packages"); disabled buttons fade to near-invisible rather than showing explanatory copy.

## Components

Components below are tokenized in light mode; sibling `*-dark` variants (e.g. `nav-header-dark`, `input-search-dark`, `card-auth-dark`, `button-utility-dark`, `button-inverted`, `banner-attention-dark`, `button-danger-dark`, `badge-beta-dark`, `link-dark`, `meta-text-dark`) carry the reskinned values applied under `[data-color-mode="dark"]`.

### Buttons

Two parallel families that never mix on one surface:

- **Marketing pills** (`button-cta`, `button-ghost`, `button-red`): 50px-radius or square statement buttons, Poppins 16/700, `16px 32px` padding, ~55px tall, heavy `0 10px 30px rgba(0,0,0,0.4)` shadow. The yellow pill keeps black text; the white-bordered ghost pill fills `#cb3837` on hover; the red rectangle stays sharp-cornered.
- **Product controls** (`button-dark`, `button-utility`, `button-danger`): Source Sans Pro 16/500 with 0.016em tracking, `8px 16px` padding, 36px tall, 4px radius. Utility buttons are white with a `1px rgba(22,22,22,0.4)` border; danger outlines pair `#bb2e3e` text with a `#f1b8bc` border; disabled state collapses to a `rgba(0,0,0,0.02)` wash with ~10% black text.
- **Header Search** is its own artifact: square, `#231f20`, Poppins 14/700 at 0.021em tracking, `8px 32px` padding, 52px tall. In dark mode it inverts to `#6e7681`.

### Inputs

- **Header search:** `#f2f2f2` inset field, zero radius, Fira Mono 16/300 — the monospace input is a signature detail.
- **Form fields:** white, `1px #767676` border, 4px radius, ~38px tall, Source Sans Pro 16/400; label above in 16/600 at 90% black. Adornments (the "Show" button) live inside the field.

### Cards & surfaces

- **Pricing cards:** flat panels on the gradient hero — white for paid plans, medium gray for Free — each with a mascot illustration header and a pill CTA. The Feature Comparison table wears the rainbow gradient as a top border.
- **Step cards ("Get Started"):** `#f7f7f7` with the signature gradient as a top accent strip and a circled step number.
- **Auth card:** centered 480px white island, 8px radius, `0 10px 20px rgba(0,0,0,0.2)`, wombat avatar on top.
- **Code & install boxes:** `#f7f7f7`, 2px radius, Fira Mono (16px/24px lh in blocks; 14px in the sidebar install box), with a borderless copy affordance.

### Navigation & tabs

- **Header:** white bar (Poppins 14/500 tracked links), black "npm" wordmark, hairline shadow. Sub-nav above it is `#1a1a1a` in dark mode, light in light mode.
- **Package tabs:** text tabs with a yellow `#ffcd3a` underline + 20% yellow tint on the active tab; the tab strip's bottom edge is the signature rainbow gradient. The "Beta" badge is a green-outlined pill (`#107010` family).

## Do's and Don'ts

- Do keep Poppins strictly on headings, nav, and buttons — body copy is always Source Sans Pro, code is always Fira Mono.
- Don't mix pill and square buttons on the same component — but do exploit the contrast: pills for marketing CTAs, squares for product controls.
- Do use the wombat red `#cb3837` for content links and hover fills; the deeper `#c12127` is reserved for solid red marketing buttons and the gradient.
- Don't add box shadows to product surfaces — hierarchy comes from `#e6e6e6` hairlines and `#f7f7f7`/`#f2f2f2` tonal steps.
- Do keep the rainbow gradient strip thin — it's an accent border (banner underline, tab underline, table top), never a large fill except in hero sections.
- Don't uppercase eyebrows — use Poppins 600 with 0.1em tracking instead.
- Do pair the yellow CTA only with black text, and place it only on the gradient hero.
- Do respect the 4px spacing grid for new UI even though legacy fractional values (29.88px, 53.6px) exist.
- Don't restyle the decorative gradient heroes in dark mode — they're exempt; only chrome and content reskin via the `--color-*` token layer.
- Do use relative time ("a month ago") for publish/metadata timestamps.
