---
version: "1.0.0"
name: Zapier Design System
description: A warm, editorial "earthy tech" system — cream and bone surfaces, chocolate ink, one signature Zapier-orange action color — set in Degular Display headlines, Inter UI text, and a light Serrif italic for pull quotes, with squared 4px controls and 1px ink-bordered cards.
colors:
  primary: "#FF4F00"
  on-primary: "#FFFEFB"
  secondary: "#201515"
  on-secondary: "#FFFEFB"
  surface: "#FFFEFB"
  surface-dim: "#F8F4F0"
  surface-container: "#ECEAE3"
  on-surface: "#201515"
  on-surface-variant: "#36342E"
  neutral: "#605D52"
  outline: "#C5C0B1"
  outline-variant: "#DFDCD2"
typography:
  headline-display:
    fontFamily: Degular Display
    fontSize: 80px
    fontWeight: 500
    lineHeight: 1
  headline-lg:
    fontFamily: Degular Display
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1
  headline-md:
    fontFamily: Degular Display
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1
  title-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.025em
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.3
  quote-serif:
    fontFamily: Serrif
    fontSize: 32px
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: -0.02em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-xl:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1
  label-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1
  label-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
  nav-link:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  eyebrow:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.04em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 14px
  full: 999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 40px
  section: 96px
  gutter: 24px
  card-inset: 24px
  header: 56px
  container-max: 1280px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
    height: 40px
  button-primary-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
    height: 36px
  button-dark:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
    height: 48px
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
    height: 48px
  toggle-option:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-xl}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    height: 64px
  toggle-option-active:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-xl}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    height: 64px
  nav-header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.nav-link}"
    height: 56px
  card:
    backgroundColor: "{colors.surface-dim}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-inset}"
  card-featured:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-inset}"
  card-dark:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.surface-dim}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-inset}"
  input-select:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
    height: 48px
  text-meta:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral}"
    typography: "{typography.caption}"
  text-eyebrow:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral}"
    typography: "{typography.eyebrow}"
---

## Overview

Zapier's redesigned marketing surface reads as **"earthy tech editorial"**: warm cream (`#FFFEFB`) and bone (`#F8F4F0` / `#ECEAE3`) fields instead of white or gray, deep chocolate ink (`#201515`) instead of black, and one hot Zapier orange (`#FF4F00`) that only ever marks the path to action. Dark chocolate sections and soft orange-glow photography bands break the page into chapters; nothing else competes with the orange.

The typography is the personality: **Degular Display** (Ohno) at weight 500, solid `1.0` line-height, tracking untouched — a confident, slightly characterful grotesque for all headlines up to 80px. **Inter** handles everything functional at a dense 14–16px, semibold for buttons. A third voice, **Serrif** light (300, often italic), appears only in customer pull-quotes — the literary footnote inside the machine story. Layout is spacious, centered, and content-forward; imagery is blurred, warm-tinted lifestyle/product composite art rather than flat illustration.

## Colors

- **Primary (`#FF4F00`):** The Zapier orange. Fills the commit path — "Sign up" pill in the header, "Start free with email", small inline CTAs — and appears as a `1px` self-border on its own buttons. One orange element per viewport is the de facto rule.
- **Secondary (`#201515`):** Chocolate ink doing double duty: primary text/headline color on light surfaces, and the fill of dark buttons, dark cards, testimonial bands, and the footer. `on-secondary` `#FFFEFB` is its text.
- **Surfaces:** `surface` `#FFFEFB` (page + header), `surface-dim` `#F8F4F0` (standard card fill), `surface-container` `#ECEAE3` (featured/selected card).
- **On-surface ramp:** `#201515` headlines → `#36342E` body → `#605D52` secondary text → `#939084` muted khaki (captions, disabled).
- **Outlines:** `#201515` — yes, the ink itself — is the default `1px` border on cards and outline buttons; `#C5C0B1` softens form controls (selects, radios); `#DFDCD2` is the faintest hairline for internal dividers.
- **Imagery tones:** Warm coral-to-peach gradients and blurred sage/taupe photographs carry the visual interest — color in this system lives in art, not chrome.

## Typography

- **Degular Display owns headlines:** `headline-display` 80px, `headline-lg` 56px, `headline-md` 48px — all weight 500, line-height exactly `1.0`, natural tracking. The face supplies the character; the metrics stay disciplined.
- **Inter owns function:** `title-lg` 28px/600 (section sub-heads, tracked `-0.025em`), `title-md` 16px/700, `body-md` 16px and `body-sm` 14px at `1.5` line-height.
- **Labels scale with the button:** `label-xl` 24px (big plan toggles), `label-lg` 18px (48px CTAs), `label-md` 16px (40px CTAs), `label-sm` 14px (nav pill) — always weight 600.
- **Serrif is the guest voice:** `quote-serif` 32–28px weight 300 with `-0.02em` tracking — reserved for testimonials and emphasis quotes; italic for attribution voice.
- **Eyebrow + caption:** `eyebrow` Inter 12px uppercase `0.04em` (often prefixed by a small orange square tick — "■ PRICING"), `caption` 12px for fine print.

## Layout

- **Header:** 56px warm-white bar — wordmark + dropdown nav left, "GitHub / Explore apps / Contact sales / Log in" links right, ending in the orange pill CTA.
- **Container:** `1280px` max grid, `24px` gutters; heroes center-align; feature blocks alternate text-left/media-right.
- **Rhythm:** 4px base — controls stack at 8/12/16px, card interiors pad `24px`, sections separate at `96px`, hero gaps reach `120px`.
- **Pricing:** Two-cell category toggle ("AI Orchestration" vs "Add-ons") of big 64px options, a labeled task-volume slider, radio billing choice, then plan cards in a hairline row — all on cream.
- **Signature composition:** Centered eyebrow → Degular headline → 16px subline → paired CTAs → full-bleed warm-gradient hero image containing one floating white notification card.

## Elevation & Depth

Flat and printed — the system looks **lithographed, not layered**.

- Cards separate with `1px #201515` ink borders on tinted fills (`#F8F4F0`, `#ECEAE3`) — an outline, never a shadow.
- Selected/featured state is a fill swap (bone → darker bone, or ink) plus a `rgb(32,21,21) 0 0 0 1px` ring — the same one-pixel rule.
- No drop shadows observed on chrome; depth comes from the blurred photographic gradients behind floating UI cards.
- Rule of thumb: if you want a border, draw it in ink at 1px; if you want emphasis, invert the fill.

## Shapes

- **4px is the control radius:** every standard button, select, and input sits at `rounded.sm` — an almost-square cut that reads precise and utilitarian.
- **8–14px for containers:** cards at `12px`, the big plan toggles at `8px`, occasional slabs at `14px`.
- **Full pills are reserved for the header CTA** ("Sign up" / "Get started for free" at 18px/effectively `999px`) and small icon chips — the pill marks "commit" vs. the square's "choose".
- **Circles (50%)** belong to radio buttons, avatars, and carousel dots.
- **Rule:** commit actions may be pill or square; selection controls are always square 4px; never put a pill inside a card.

## Motion & Micro-interaction

Motion splits into instant state feedback and slow, cinematic reveals.

- **UI state changes:** `all 250ms ease` (the dominant hover rule — ×23 frequency), `color 200ms ease` on links, `background-color/border-color/transform 200ms ease` on buttons.
- **Transform hovers:** `300ms cubic-bezier(0.16, 1, 0.3, 1)` (easeOutExpo) for card lifts and image zooms.
- **Scroll reveals:** the signature `opacity 500ms / transform 1000ms cubic-bezier(0.22, 1, 0.36, 1)` (easeOutQuint) — elements fade up slowly and glide to rest; used on nearly every section.
- **Rule:** state = fast and `ease`; entrance = long and exponential-out; nothing springs or overshoots.

## Voice & Content Strategy

Warm-confident futurism with editorial polish — Zapier sells "automation in the agentic era" in complete, unhurried sentences.

- **Headlines are declarative and plain-worded:** "Welcome to automation in the agentic era", "AI orchestration plans", "Build anywhere. Run on Zapier. Govern in one place."
- **Eyebrows are tiny and structural:** "THE NEXT GENERATION OF ZAPIER", "PRICING" — Inter 12px caps, often with the orange square bullet.
- **CTAs name the method and the price:** "Start free with email", "Start free with Google", "Get started for free", "Try it free" — "free" is the constant hook; secondary verbs are "Explore", "Contact sales", "Discover".
- **Product nouns stay canonical:** "Zaps", "Zapier MCP", "Tables", "Interfaces", "Canvas" — capitalized, never genericized.
- **Proof is quoted, not claimed:** Serrif italic pull-quotes from named customers ("Next Gen Zaps are going to help us move faster…") carry the persuasion.

## Components

- **button-primary:** `primary` orange fill + matching `1px` self-border, `on-primary` warm-white `label-md`, `4px` radius, `40px` tall (`8px` vertical padding). The hero commit.
- **button-primary-pill:** Same orange, `full` radius, `label-sm` 14px, `36px` — header-only CTA ("Sign up", "Get started for free").
- **button-dark:** `secondary` ink fill, warm-white `label-lg` 18px, `4px`, `48px` — "Try it free", "Explore Zapier for Enterprise", active toggle state.
- **button-outline:** `surface` fill, `1px #201515` ink border, dark `label-lg`, `4px`, `48px` — "Start free with Google" (may carry a brand icon).
- **toggle-option (+active):** Giant `64px` selection cards — `8px` radius, `24px` label, `1px` ink border; active inverts to ink fill with cream text.
- **nav-header:** 56px `surface` bar; Inter 14px links; ends in the orange pill.
- **card / card-featured:** `surface-dim`/`surface-container` fill, `1px #201515` ink border, `12px` radius, `24px` padding.
- **card-dark:** `secondary` fill, `surface-dim` text — testimonial bands and the closing CTA.
- **input-select:** `surface` fill, `1px #C5C0B1` border, `4px`, `48px` — currency/country selectors; radios share the khaki ring, checked state fills ink.
- **Slider (pricing):** Thin track, `2px #201515`-ringed circular thumb on cream — minimal, drawn rather than filled.
- **text-eyebrow / text-meta:** `#605D52` Inter caps/12px — section kickers (with optional orange square bullet) and muted captions.

## Do's and Don'ts

- Do keep surfaces warm — `#FFFEFB`, `#F8F4F0`, `#ECEAE3`; never pure white or cool gray.
- Do write ink as `#201515`, not `#000000` — the chocolate cast is the brand's warmth.
- Do spend the orange `#FF4F00` only on commit actions (and its tiny eyebrow tick); text links stay ink.
- Do set headlines in Degular Display at weight 500 and line-height `1.0` — no tracking tweaks, no heavier cuts.
- Do draw card borders as `1px` ink lines; the outlined look is the system's signature.
- Do keep standard controls at `4px` radius and reserve full pills for the header CTA and icon chips.
- Don't introduce shadows or gradients on chrome — depth is fill inversion plus one ink pixel.
- Don't let Serrif escape testimonials — body copy and UI stay Inter.
- Don't animate hovers longer than ~300ms; only scroll reveals run the slow `easeOutQuint`.
- Don't pair two orange buttons in one view — one commit action per section; everything else is ink or outline.
- Note: white-on-orange button text (`#FFFEFB` on `#FF4F00`, ~3.3:1) is a deliberate brand exception shipped by Zapier — keep labels at semibold weight and sizes ≥14px to compensate, and never reuse the pair for small text.
