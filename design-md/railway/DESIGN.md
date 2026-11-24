---
version: "1.0.0"
name: Railway Design System
description: A nocturnal "dusk sky" aesthetic — deep purple-black surfaces beneath an illustrated starry-sky hero, IBM Plex Serif display headlines, Inter UI text, a violet accent ramp for CTAs and glows, and color-coded feature categories rendered as translucent tinted panels.
colors:
  primary: "#853BCE"
  on-primary: "#FFFFFF"
  primary-deep: "#553F83"
  accent: "#A667E4"
  accent-soft: "#BF92EC"
  accent-muted: "#3D2259"
  accent-bg: "#1E132A"
  secondary: "#2057C5"
  neutral-cta: "#545260"
  success: "#42946E"
  success-strong: "#22C55E"
  success-bg: "#15231D"
  info: "#5B8DEF"
  warning: "#EAB38A"
  surface: "#0D0C14"
  surface-1: "#13111C"
  surface-2: "#181622"
  surface-3: "#1C1A28"
  surface-4: "#252134"
  on-surface: "#F7F7F8"
  on-surface-bright: "#FFFFFF"
  on-surface-variant: "#FFFFFFA6"
  on-surface-muted: "#868593"
  on-surface-faint: "#535260"
  outline: "#33323E"
  outline-variant: "#FFFFFF26"
  tertiary:
    purple: "#8145B540"
    green: "#20836940"
    pink: "#C2298A40"
    teal: "#107D9840"
    blue: "#0D74CE40"
  panel-build: "#1B2132"
  panel-monitor: "#1F2B2E"
typography:
  headline-display:
    fontFamily: IBM Plex Serif
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: IBM Plex Serif
    fontSize: 54px
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: -0.036em
  headline-md:
    fontFamily: IBM Plex Serif
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: IBM Plex Serif
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: -0.02em
  title-lg:
    fontFamily: IBM Plex Serif
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: -0.023em
  title-md:
    fontFamily: IBM Plex Serif
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.63
    letterSpacing: -0.02em
  title-sans:
    fontFamily: Inter Tight
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: -0.006em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
  label-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.63
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
  caption:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.54
  code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: 6px
  md: 8px
  lg: 10px
  xl: 16px
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  section: 128px
  gutter: 24px
  container-max: 1280px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
    height: 42px
  button-primary-deep:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    height: 44px
  button-secondary:
    backgroundColor: "{colors.neutral-cta}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
    height: 42px
  button-ghost:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
    height: 40px
  button-hobby:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
    height: 42px
  card:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.on-surface-variant}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-plan:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-tinted:
    backgroundColor: "{colors.tertiary.purple}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-tinted-green:
    backgroundColor: "{colors.tertiary.green}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-tinted-pink:
    backgroundColor: "{colors.tertiary.pink}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-tinted-teal:
    backgroundColor: "{colors.tertiary.teal}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-tinted-blue:
    backgroundColor: "{colors.tertiary.blue}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  chip-nav-active:
    backgroundColor: "{colors.accent-muted}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  section-trust:
    backgroundColor: "{colors.accent-bg}"
    textColor: "{colors.on-surface}"
    padding: "{spacing.xxl}"
  panel-build:
    backgroundColor: "{colors.panel-build}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  panel-monitor:
    backgroundColor: "{colors.panel-monitor}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  chart-annotation:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.accent-soft}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  glow-dot:
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.full}"
    size: 8px
  status-deployed:
    backgroundColor: "{colors.success-bg}"
    textColor: "{colors.success-strong}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  icon-check:
    textColor: "{colors.success}"
  input-default:
    backgroundColor: "{colors.surface-4}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
    height: 36px
  status-info:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.info}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  status-warning:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.warning}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  footer-legal:
    textColor: "{colors.on-surface-faint}"
    typography: "{typography.caption}"
  nav-header:
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    height: 64px
  nav-link:
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
    height: 32px
  canvas-node:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  footer:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.caption}"
  status-operational:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.success-strong}"
    typography: "{typography.caption}"
---

## Overview

Railway's marketing site is a night scene: a deep purple-black canvas (`#0D0C14` → `#13111C`) under an illustrated dusk sky — stylized clouds, stars, and a violet horizon — with the product's dark canvas UI floating below like a control panel. The signature surprise is typography: headlines are set in **IBM Plex Serif**, giving an editorial, almost literary calm to a deeply technical product, while every UI element runs on Inter. The result reads "engineering firm by candlelight" — serene, premium, quietly opinionated (their own film is literally titled "The peaceful way to ship software").

Color behaves like the time of day: violets dominate (CTA purples, accent glows, tinted glass), with cyan/green/pink/blue appearing only as translucent 25% tints that color-code feature categories and per-tier pricing buttons. Depth comes from stepped surfaces and soft, wide atmospheric shadows rather than borders — though hairline `white @ 10–15%` rings edge the buttons.

## Colors

- **Primary violet (`#853BCE` / `#553F83`):** The action purple. Bright `#853BCE` fills "Deploy with Pro" and primary CTAs; deep `#553F83` (`--sl-accent`) backs hero buttons like "Deploy →". Highlight purples `#A667E4`/`#BF92EC` (`--sl-accent-strong(er)`) glow in charts, link hovers, and logo dots.
- **Accent surfaces (`#3D2259` muted / `#1E132A` bg):** Purple-tinted panels for emphasized areas — "Scale" nav chip, trust sections, and the dusk gradient stops behind illustrations.
- **Secondary blue (`#2057C5`):** Hobby-tier CTA — a deliberate non-violet so plan buttons differentiate: blue = Hobby, purple = Pro, `#545260` gray = Contact Sales.
- **Status green (`#42946E` / `#22C55E` / bg `#15231D`):** Deploy success, "All systems operational" dot, check marks. Warm `#EAB38A` flags warnings ("High CPU usage").
- **Surface ladder (`#0D0C14` → `#13111C` → `#181622` → `#1C1A28` → `#252134`):** `--sl-canvas` → `--sl-surface` → `--sl-surface-subtle` and raised steps. Pages sit near-black; cards and footer rise one or two steps; special panels get custom hues (`#1B2132` build, `#1F2B2E` monitor).
- **Text ramp (`#F7F7F8` / `#FFFFFF` / white@65% / `#868593` / `#535260`):** `--sl-fg` and friends. Headlines pure white; body `#F7F7F8`; ledes and secondary copy at ~65% white or `#868593`; `#535260` for the faintest labels.
- **Category tints (25% alpha fills):** `#208369` green, `#C2298A` pink, `#8145B5` purple, `#107D98` teal, `#0D74CE` blue — translucent washes color-coding feature cards without leaving the dark theme.
- **Outlines:** `#33323E` (`--sl-border`) for structural borders; buttons and inputs get `white @ 10–15%` hairline borders.

## Typography

- **Display serif:** IBM Plex Serif — every headline. 54–56px/500 hero (line-height 1.12–1.25, -1.4px to -1.96px tracking), 36–40px/400 section heads, 24–32px/500 titles. The serif's soft bracketed serifs are the brand's "peaceful" signal; always white, always tight-tracked.
- **Sans support:** Inter Tight 600 (40px) and Inter Display 500 (32px) appear for a few product-adjacent headings where a neutral sans is wanted.
- **Body/UI:** Inter everywhere. Hero lede is 18px/500 at 65% white; body 16px/400 at 1.75; nav links 16px/400; buttons 16px/500; footer links 13px/400 in `#8888A0`.
- **Code:** JetBrains Mono for CLI snippets, keyboard hints (⌘K), and log/terminal UI inside product shots.

## Layout

- **Container:** ~1280px content max with generous side margins; heroes are centered, features alternate between centered statements and split rows with product visuals.
- **Rhythm:** 4px base; dense UI inside product frames (8–16px gaps), while marketing sections open up with 100–128px+ vertical bands separated by the dusk-sky illustration.
- **Structure:** Transparent nav over the sky hero → centered serif headline + lede + dual CTA → live product canvas screenshot → feature sections on stepped surfaces → tinted category grid → pricing cards → big footer link farm on `surface-1`.
- **Signature motif:** The dusk-sky illustration wraps the hero (and occasionally bands between sections); product UI screenshots sit inside it like windows into the app.

## Elevation & Depth

- **Atmospheric shadows:** Big, soft, warm-tinted multi-stop shadows — e.g. `0 100px 191px rgba(62,45,45,.24)` layered down to `0 3.4px 6.6px` — lift hero panels and the app frame off the canvas. These are ambience, not crisp elevation.
- **Glows:** Violet glow shadows (`0 -12px 127px rgba(65,78,166,.1)`) bloom behind key panels; accent-colored halo glows mark featured elements.
- **Rings:** Buttons carry a `white @ 10%` border plus, on primary CTAs, an inset `0 0 0 1.5px white @ 20%` ring for edge definition.
- **Hairlines:** `#33323E` borders divide cards, table rows, and nav chrome — visible but quiet.

## Shapes

- **Buttons:** 6–8px radius (`rounded-sm`/`md`); hero CTAs slightly softer at 8px, ~42–44px tall with 8–12px padding.
- **Cards & panels:** 8px standard, 10–16px on large feature panels and the product frame.
- **Pills:** `9999px` for status dots and small badges only.
- **Overall:** Moderately rounded — softer than Render's squares, tighter than consumer SaaS; an "instrument panel" softness.

## Motion & Micro-interaction

- **State changes:** `state-change` — 150ms on `cubic-bezier(0.4,0,0.2,1)` (standard ease) for color/background/border; opacity fades 150ms ease-in-out; transform hovers at 150ms on both accelerate (`0.4,0,1,1`) and decelerate (`0,0,0.2,1`) curves.
- **Menus & overlays:** Dropdowns and the ⌘K command menu use the same 150ms language with filter/transform micro-moves.
- **Ambient:** The star field and clouds drift subtly (parallax twinkle); product-canvas demonstrations animate deploy flows at demo tempo, not UI tempo.
- **Restraint:** Nothing bounces; easings stay in the standard/decelerate family and durations rarely exceed ~300ms outside scroll-choreographed hero moments.

## Voice & Content Strategy

- **Tone of voice:** Calm, poetic-technical, assured. "Let agents ship products as fast as they write code", "The peaceful way to ship software is here", "Pay only for what your app uses, by the second". No hype punctuation; quiet confidence.
- **Capitalization:** Sentence case in headlines and buttons; Title Case inside the product UI ("New Project", "Add Replicas").
- **Terminology:** "Deploy" is the verb of choice; resources are "services" on a "canvas"; plans named Hobby/Pro/Enterprise; agents addressed directly ("with your agents", "Agent-readable logs").
- **Button labels:** Verb-first — "Deploy →", "Deploy a new project", "Deploy with Pro", "Book a demo", "Watch the film", "Download now".
- **Proof style:** Volume stats ("249.8M+ deploys per month (and counting)"), customer wall ("Trusted by the best in business"), and live-looking product UI (CPU warnings, "Just deployed via GitHub") as the demo.

## Components

- **Primary CTA:** `#853BCE` (or hero `#553F83`) fill, white 16px/500 label, 6–8px radius, ~42px height, `white @ 10%` border + inset white ring; hover brightens within the violet family.
- **Tier buttons:** Same anatomy, color-coded — Hobby `#2057C5`, Pro `#853BCE`, Contact Sales `#545260` — plan identity carried by fill color alone.
- **Ghost/nav buttons:** Transparent or `surface-2` fill, white text, 6px radius, 32–40px heights ("Sign in", "Book a demo", "Agents").
- **Plan card:** `surface-1/2` panel, ~8px radius, plan name + `$0` big numeral + "per month" suffix, check-marked feature list (gray-300 checks), right-aligned CTA button; featured states add purple glow.
- **Feature category card:** 25%-alpha tinted fill (green/pink/purple/teal/blue) over the dark canvas, icon + title + description — color communicates category, not decoration.
- **Canvas node:** The product's service card — `surface-3` chip with icon, service name ("backend"), status line ("Just deployed via GitHub"), 8px radius, hairline border.
- **Status footer:** `surface-1` band, mono-ish caption links in `#8888A0`, "All systems operational" with `#22C55E` dot.

## Do's and Don'ts

- Do set headlines in IBM Plex Serif and UI in Inter — the serif/sans split is the brand's voice; never set UI chrome in the serif.
- Do keep the canvas nocturnal — `#0D0C14`/`#13111C` surfaces with purple-black tints; don't introduce light sections on the marketing site.
- Do use violet `#853BCE` for the primary action and let secondary tiers carry their own colors (blue Hobby, gray contact).
- Do color-code feature categories with 25% alpha tints rather than solid saturated fills.
- Do edge buttons with a `white @ 10%` border (plus inset ring on primary) instead of heavier outlines.
- Don't use bright accent fills for text — reserve `#A667E4`/`#BF92EC` for charts, glows, and tiny highlights.
- Don't add warm neutrals or pure grays to surfaces — every "gray" leans purple.
- Don't animate longer than ~150–300ms for UI feedback; save slow moves for the ambient sky.
- Don't wrap body copy in serif; long-form text stays Inter at 1.6–1.75 line-height.
