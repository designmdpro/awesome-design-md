---
version: "1.0.0"
name: fal Design System
description: A chromatic, pixel-art-inflected design system for fal, the generative-media inference platform. Full-bleed saturated color fields — dark bronze olive, hot pink, light cyan, deep black — carry bitmap dither patterns and scattered pixel sprites, while razor-sharp 2px-radius controls and tight-tracked Focal Web headlines keep the maximalism feeling engineered. A neon-lime CTA and cyan-on-olive headline pairing define the brand's retro-computing energy.
colors:
  primary: "#ADFF00"
  on-primary: "#000000"
  secondary: "#99EDFF"
  on-secondary: "#000000"
  tertiary: "#FFC4D8"
  on-tertiary: "#000000"
  error: "#E8425B"
  surface: "#FFFFFF"
  surface-container: "#F4F4F5"
  surface-container-low: "#E5ECE7"
  on-surface: "#000000"
  neutral: "#999999"
  inverse-surface: "#000000"
  inverse-on-surface: "#FFFFFF"
  dark:
    surface: "#19191A"
    surface-container: "#202022"
    surface-container-high: "#494950"
    on-surface: "#FFFFFF"
    on-surface-variant: "#F4F4F5"
  brand:
    bronze: "#403700"
    blue: "#115EF3"
    indigo: "#2C18AC"
    magenta: "#EC0648"
    violet: "#6E5BF0"
    purple: "#5718C0"
    green: "#4EA32E"
typography:
  display-hero:
    fontFamily: Focal Web
    fontSize: 96px
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Focal Web
    fontSize: 59px
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Focal Web
    fontSize: 50px
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Focal Web
    fontSize: 41px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Focal Web
    fontSize: 27px
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: -0.02em
  title-sm:
    fontFamily: Focal Web
    fontSize: 16px
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: -0.02em
  body-md:
    fontFamily: Focal Text
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.22
    letterSpacing: 0em
  body-sm:
    fontFamily: Focal Text
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.22
    letterSpacing: 0em
  label-lg:
    fontFamily: Focal Web
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0em
  label-md:
    fontFamily: Focal Web
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0em
  label-sm:
    fontFamily: Focal Web
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0em
  code-md:
    fontFamily: Hal Timezone Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  app-label:
    fontFamily: Public Sans Rounded
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0em
rounded:
  xs: 2px
  sm: 3.4px
  md: 4.8px
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 96px
  gutter: 24px
  margin: 40px
  container-max: 1440px
motion:
  state-change:
    duration: 100ms
    delay: 0ms
    timingFunction: cubic-bezier(0.25, 0.46, 0.45, 0.94)
  surface-enter:
    duration: 300ms
    delay: 0ms
    timingFunction: cubic-bezier(0.25, 0.46, 0.45, 0.94)
  hover-elevate:
    duration: 200ms
    delay: 0ms
    timingFunction: cubic-bezier(0.25, 0.46, 0.45, 0.94)
  staggered-reveal:
    duration: 500ms
    delay: 100ms
    timingFunction: cubic-bezier(0.25, 0.46, 0.45, 0.94)
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"
    height: 44px
  button-dark:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"
    height: 44px
  button-light:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"
    height: 44px
  button-white-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
    height: 44px
  button-blue:
    backgroundColor: "{colors.brand.blue}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"
    height: 48px
  button-nav:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.xs}"
    padding: "{spacing.sm}"
    height: 35px
  section-hero:
    backgroundColor: "{colors.brand.bronze}"
    textColor: "{colors.secondary}"
    typography: "{typography.display-hero}"
    padding: "{spacing.2xl}"
  card-model:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  card-accent-indigo:
    backgroundColor: "{colors.brand.indigo}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-accent-magenta:
    backgroundColor: "{colors.brand.magenta}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-accent-violet:
    backgroundColor: "{colors.brand.violet}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  chip-tag:
    backgroundColor: "{colors.brand.purple}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs}"
    height: 28px
  badge-status:
    backgroundColor: "{colors.brand.green}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs}"
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    height: 48px
  list-nav-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.xs}"
    padding: "{spacing.sm}"
  app-canvas:
    backgroundColor: "{colors.dark.surface}"
    textColor: "{colors.dark.on-surface}"
    typography: "{typography.app-label}"
    padding: "{spacing.lg}"
  card-console:
    backgroundColor: "{colors.dark.surface-container}"
    textColor: "{colors.dark.on-surface-variant}"
    typography: "{typography.app-label}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  chip-app:
    backgroundColor: "{colors.dark.surface-container-high}"
    textColor: "{colors.dark.on-surface}"
    typography: "{typography.app-label}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs}"
    height: 28px
  meta-label:
    textColor: "{colors.neutral}"
    typography: "{typography.body-sm}"
---

## Overview

fal is "creative infrastructure for generative media" — one API in front of 1,500+ image, video, and audio models — and its marketing site wears that abundance loudly. The design language is **chromatic maximalism with a retro-computing soul**: every page band gets its own flat, saturated color field (olive-drab hero, hot-pink pricing, baby-blue serverless, black enterprise, pale-pink footer), decorated with **dithered bitmap art** — pixel-grid mountains, sparkles, and scattered sprite squares — that reads like a demoscene nod to generative media itself.

Against that noise the chrome is deliberately rigid: near-sharp **2px-radius buttons**, 1px same-color borders, hard offset block shadows, tight-tracked **Focal Web** headlines at 96px, and a lowercase wordmark in a chunky pixel-aperture glyph. The signature pairings: **neon lime** (`#ADFF00`) CTAs and **cyan** (`#99EDFF`) headlines on the bronze-olive (`#403700`) canvas. Inside the product (model explorer), the mood inverts to a quiet dark console in Public Sans Rounded — proof the brand can shout in marketing and disappear in tooling.

## Colors

The system is a **rotating set of saturated fields**, not a single canvas. Each section or page owns a background color; text is almost always pure black on light fields and pure white/cyan on dark ones.

- **Primary — Neon (#ADFF00):** the loud lime CTA ("Get Started", feature highlights) and pixel-particle accents. Always black text; used sparingly — one per view.
- **Secondary — fal Cyan (#99EDFF):** headline color on the dark-bronze hero, the closing CTA band background, and the hard offset block-shadow accent.
- **Tertiary — Pink (#FFC4D8):** the pricing hero canvas and footer band; takes black headlines and magenta pixel art.
- **Dark Bronze (#403700):** the signature olive canvas — homepage hero and "Model APIs" band. Carries cyan display type and neon buttons.
- **Brand action colors:** blue `#115EF3` (secondary CTAs like "Explore Demo", links in the app), indigo `#2C18AC`, magenta `#EC0648`, violet `#6E5BF0`, purple `#5718C0` (model-category chips), green `#4EA32E` (status/success) — deployed as solid feature-card and accent fields inside pricing and dashboard surfaces.
- **Surfaces:** marketing is white `#FFFFFF` between color fields; the console app runs dark — canvas `#19191A`, panels `#202022`, raised `#494950`, text `#F4F4F5`.
- **Neutrals:** black is the universal text/border color on light surfaces; `#999999` mid-gray for disabled/meta; pale mint `#E5ECE7` fills quiet buttons like "Contact Sales".
- **Error:** `#E8425B` red-pink for failures and request-error states.

## Typography

Marketing type is **Focal Web** (a sturdy grotesque, Medium 500 for display, Regular 400 for sub-heads) with aggressive negative tracking — headlines sit at **0.9 line-height** and −0.02 to −0.04em, dense enough to feel printed. Body copy drops to **Focal Text** (Regular 400, ~1.22 line-height), a quieter text cut of the same family.

- **Display (`display-hero` 96px, `display-lg` 59px):** Focal Web 500, sentence case ending in a period ("Fast, reliable, and cost-efficient."), colored to contrast the field — cyan on bronze, black on pink/blue.
- **Headlines (`headline-lg` 50px, `headline-md` 41px, `headline-sm` 27px, `title-sm` 16px):** mix of 400 and 500 weights; card titles favor the lighter 400 at tight leading.
- **Body (`body-md` 16px, `body-sm` 12px):** Focal Text for descriptions, plan details, footer columns — mostly black, compact leading.
- **Labels (`label-lg` 16px/500 nav+CTAs, `label-md` 14px/600 buttons, `label-sm` 14px/500 links+chips):** all Focal Web.
- **Code (`code-md`):** **HAL Timezone Mono** for API snippets, endpoints, and technical metadata — a serif-flavored mono that matches the retro mood. HAL Timezone italic serif appears rarely for editorial callouts.
- **App (`app-label`):** the model explorer switches to **Public Sans Rounded** 600 — friendlier UI voice inside the console.

## Layout

Full-width color bands with a **1440px container** inside each. The hero is left-aligned: icon chips row, 96px two-line display, short lede, button pair — with pixel art owning the right half. Marketing sections stack as alternating fields: white "Access, deploy and train" intro → bronze "Model APIs" product card → white model-gallery grid → white "Why choose fal?" bento (irregular colored cards with artwork) → black "Built for enterprise scale" checklist → white testimonial wall → cyan closing band → pale-pink footer. Inner rhythm: ~82px section padding, 17–27px element gaps, 20–40px card grids. The console app (explore) is a dense left-aligned tool: dark nav, filter chips, and a thumbnail grid of model cards at ~4px radii.

## Elevation & Depth

**Flat by doctrine.** Sections are solid color fields; separation comes from hue, not shadow. The one signature effect is a **hard offset block shadow** — solid cyan `#99EDFF` shifted ~8px with zero blur — applied to hero art elements for a print/brutalist feel. Cards on white get a faint `0 2px 19px -4px` navy lift (10% alpha) at most. Buttons have no shadow at all; the pixel sprites and dither patterns provide all the texture. In the console, depth is one step of tonal layering (`#19191A` → `#202022` → `#494950`).

## Shapes

**Sharp squared everything** — the anti-rounded system. All buttons, inputs, cards, and chips sit at **2–5px** radius (observed 1.7–4.8px); pills are reserved for exactly two elements: the floating nav container and the "Explore fal Worlds" white CTA. Pixel particles are literal squares scattered at edges of color fields. Imagery tiles in the model gallery stay nearly square-cornered so generated art reads edge-to-edge. The overall silhouette language is chunky rectangles — matching the pixel-aperture logo mark.

## Motion & Micro-interaction

Motion is quick and mechanical. **State changes** (nav hovers, button fills) snap at **100ms** `cubic-bezier(0.25, 0.46, 0.45, 0.94)`. **Elevation cues** run 200ms; **structural moves** (menus, sliders, width changes) take 300ms — one observed ease variant `cubic-bezier(0.33, 0.67, 0.67, 1)` for springier transforms. **Reveals** fade in at 500ms with 100–200ms staggers across siblings. Ambient loops belong to the pixel art and sliders, never to UI chrome. The net feel: instant, blunt, game-like.

## Voice & Content Strategy

- **Tone:** terse, confident infrastructure-speak with playful graphics doing the smiling. "Your full stack for generative media.", "Fast, reliable, and cost-efficient.", "fal adapts to your usage, ensuring you only pay for the computing power you consume." Numbers lead claims: "1,500+ models", "99.99% uptime", "10x faster inference", "2.5M+ developers".
- **Capitalization:** sentence case everywhere — even 96px headlines end with a quiet period. The brand name is always lowercase "fal", including at sentence start.
- **Terminology:** "generative media" (never "AI content"), "Model APIs", "Serverless", "Compute", "inference", "endpoints", "post-trained" — infra vocabulary over magic vocabulary.
- **Button labels:** short verb phrases — "Get Started", "Contact Sales", "Start Building", "Explore Demo", "View all models", "Explore fal Worlds".
- **Commerce copy:** usage-based framing ("only pay for the computing power you consume"), per-model/per-second pricing tables, SOC 2 compliance named plainly.

## Components

### Buttons

All buttons are sharp 2px-radius rectangles with 1px same-color borders and no shadow. `button-primary` (neon, black text) is the hero action; `button-dark` (black, white text) is the universal strong action on light fields and in the nav; `button-light` (pale `#E5ECE7`, black text) is the neutral pair ("Contact Sales"); `button-white-pill` is the one rounded-full exception for soft promo actions; `button-blue` (`#115EF3`) marks demo/secondary flows on colored fields. Nav-size buttons (`button-nav`) compress to 35px height at 14px/600; page CTAs run 44–48px, and the large "Start Building" blocks reach ~71px.

### Cards

`card-model` is a white ~5px-radius tile: generated thumbnail edge-to-edge, model name in Focal Web, mono metadata row. `card-accent-*` variants are the bento feature cards — solid indigo/magenta/violet fields with white text and embedded dither artwork; they keep the same sharp radius. `section-hero` isn't a component so much as the rule: a full-bleed color field (bronze/pink/blue) + contrasting display type + pixel sprites.

### Navigation & tags

`nav-bar` is a floating white pill (48px, full radius) holding Focal Web menu items and a black `button-nav` — it stays white regardless of the field color beneath it. `list-nav-item` items are white 2px chips. `chip-tag` (purple, 28px) and `badge-status` (green, black text) classify models and statuses in the explorer; `meta-label` renders gray metadata at 12px.

### Console (product app)

Inside the model explorer the palette inverts to `app-canvas` (`#19191A`) with `card-console` panels (`#202022`) and `chip-app` filters (`#494950`), all in Public Sans Rounded 600 — the marketing color fields stop at the login wall.

## Do's and Don'ts

- Do give every page band its own flat color field; don't blend surfaces with gradients — the color blocks are the layout.
- Do pair cyan `#99EDFF` display type on bronze `#403700` — it's the signature combo — and keep neon `#ADFF00` for the single main CTA on any view.
- Do set display headlines at 0.9 line-height with −0.02em or tighter tracking, always sentence case with a final period.
- Don't round buttons past ~5px; sharp rectangles are the system's silhouette. Reserve pill shapes for the nav bar and promo CTAs only.
- Do use black text on every pastel/neon field; white text only on black, bronze, indigo, violet, and purple fields. White on magenta `#EC0648` sits just under AA (4.48:1) — the site accepts it for bold feature-card headings; keep it off small body text.
- Do decorate with pixel sprites and dithered art at field edges — but never let them sit behind body copy.
- Don't introduce soft diffuse shadows on buttons or nav chrome; use the hard offset block shadow sparingly for hero art.
- Do switch to the console palette (`#19191A`/`#202022`, Public Sans Rounded) inside the product app — the marketing color fields stop at the dashboard.
- Don't use HAL Timezone Mono for prose; it's reserved for code, endpoints, and metadata.
- Do keep transitions snappy (100–300ms); the brand's energy comes from color, not choreography.
