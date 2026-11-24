---
version: "1.0.0"
name: Devin Design System
description: A stark, technical documentation aesthetic for Cognition's Devin agent platform. White surfaces carry weightless Skandia headlines at regular weight, uppercase IBM Plex Mono eyebrows in signal blue, translucent ink text, and pill-shaped black CTAs — precision without decoration.
colors:
  primary: "#191919"
  on-primary: "#FFFFFF"
  secondary: "#317CFF"
  on-secondary: "#FFFFFF"
  surface: "#FFFFFF"
  surface-subtle: "#FCFCFC"
  surface-container: "#F8F8F8"
  fill-subtle: "#F0F0F0"
  on-surface: "#191919"
  on-surface-variant: "#1919198F"
  outline: "#00000014"
  error: "#D1242F"
typography:
  headline-display:
    fontFamily: Skandia
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Skandia
    fontSize: 60px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Skandia
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.03em
  headline-sm:
    fontFamily: Skandia
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.02em
  title-md:
    fontFamily: Skandia
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Skandia
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: -0.01em
  body-md:
    fontFamily: Skandia
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: -0.01em
  body-sm:
    fontFamily: Skandia
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
  label-md:
    fontFamily: Skandia
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.38
  eyebrow:
    fontFamily: IBM Plex Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0.05em
  code:
    fontFamily: Geist Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.69
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  xl: 10px
  2xl: 12px
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 40px
  4xl: 48px
  5xl: 60px
  6xl: 80px
  gutter: 24px
  margin: 24px
  container-max: 1400px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.lg}"
    height: 40px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.lg}"
    height: 40px
  eyebrow-mono:
    textColor: "{colors.secondary}"
    typography: "{typography.eyebrow}"
  card-task:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  card-plan:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  chip-tag:
    backgroundColor: "{colors.fill-subtle}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs}"
  link:
    textColor: "{colors.secondary}"
    typography: "{typography.body-md}"
  nav:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    height: 52px
---

## Overview

Devin's site (served at windsurf.com, which redirects to devin.ai) reads like an engineering spec sheet for Cognition's agent platform — and that austerity is the point. The page is a flat white field: a 52px utility nav, a modest "Devin Desktop" headline, two lines of translucent-gray explanation, one black pill ("Download for MacOS"), and a vast product screenshot of the actual kanban UI. Nothing begs for attention; the software demonstrates itself.

The personality is precise, literate, and confident-understated — a lab notebook, not a billboard. Signature gestures: **uppercase IBM Plex Mono eyebrows in electric blue** (`#317CFF`) functioning as metadata ("THE HOME FOR EVERY AGENT YOU RUN", "SWE-2, OUR LATEST MODEL, IS NOW AVAILABLE →", "INDIVIDUAL PLANS"); headlines set in Skandia at regular 400 weight — never bold — so the type feels set by a typewriter-literate designer; and secondary text rendered as **translucent ink** (`#191919` at 40–56%) rather than a second solid gray. Imagery is exclusively real product UI inside hairline-bordered frames, plus muted logo strips and video cards.

## Colors

- **Primary / Ink (`#191919`):** All primary text, the black pill CTAs ("Get started", "Select plan", "Download"), and the logo. Slightly softer than pure `#000`, which is reserved for occasional emphasis.
- **On Primary (`#FFFFFF`):** White labels on ink pills.
- **Secondary / Signal Blue (`#317CFF`):** The single chromatic token — mono eyebrows, text links, checkmark icons, the active "NEW" tag. It marks *information*, never decoration.
- **Surface (`#FFFFFF`):** The page field; nearly all content sits directly on it.
- **Surface Subtle (`#FCFCFC`):** The nav bar and footer fills — a barely-there tonal step.
- **Surface Container (`#F8F8F8`):** Alternating section bands.
- **Fill Subtle (`#F0F0F0`):** Chip/tag fills ("SWE-2 Max", "Local") — the site renders this as `#000` @5–6% alpha over white; the token is the flattened composite.
- **On Surface Variant (`#191919` @56%):** The distinctive translucent ink for body copy and meta text — hierarchy through alpha, not a second hex.
- **Outline (`#000000` @8%):** Hairline card/input borders, always translucent black rather than a gray solid.
- **Error (`#D1242F`):** From the product UI; marketing pages rarely show it.
- **Muted headline gray `#E7E7E7` (prose-only):** the second-line headline effect on Pricing — a full-size Skandia line set in near-invisible gray beneath the black lead ("Devin / Plans and Pricing").

## Typography

Three families in strict roles: **Skandia** — a light, engineered grotesque — sets every headline, nav item, button, and body line. **IBM Plex Mono** owns the metadata layer. **Inter** covers 13px micro-labels inside product-adjacent UI; **Geist Mono** renders code.

- **Headlines:** Skandia 400 (never bold) at 64/70.4 and 60/61 (500 on hero variants), 36/43.2 section leads, 32/38.4, tracking ‑0.02 to ‑0.03em. The confidence trick: hierarchy comes from size and the gray second line, not weight.
- **Body:** Skandia 16/22.4 in 56%-alpha ink — a deliberately quiet reading voice.
- **Eyebrows:** IBM Plex Mono 12px, uppercase, +0.05em tracking, `#317CFF` — the system's most recognizable move. Also used in black for section labels ("INDIVIDUAL PLANS", "PER MONTH", "POPULAR").
- **Labels:** Skandia 14px regular on all buttons and nav links — no medium/bold chrome.
- **Rules:** sentence case except mono labels which are ALWAYS uppercase; tracking is negative only on headlines.

## Layout

A roomy ~1400px container with 24px gutters and generous vertical rhythm (48–80px between blocks). Marketing heroes are asymmetric — left-aligned text block, right-floating bordered callout card (the blue-mono "THE HOME FOR EVERY AGENT…" box), then a full-bleed centered product screenshot whose frame carries the only real shadow.

Pricing stacks plan cards in bordered columns with mono plan labels; the customers page pairs a 60px headline with a video card; feature sections alternate text-left/screenshot-right on `surface-container` bands. Whitespace is the primary separator — hairlines appear only where content needs containment.

## Elevation & Depth

Nearly flat by design. Depth comes from **translucent hairlines** (`rgba(0,0,0,0.08)` borders on cards and inputs) and tonal steps (`#FFFFFF` → `#FCFCFC` → `#F8F8F8`). Components occasionally use inset hairline shadows (`inset 0 -1px rgba(0,0,0,0.08)`) as separators. The single expressive shadow — `rgba(0,0,0,0.18) 0 18px 40px -16px` — belongs to the hero product frame, making the screenshot feel like a physical screen. Nothing else floats.

## Shapes

- **Pills:** full radius on all buttons, nav items (200px-radius segmented bar), and plan CTAs.
- **Cards & frames:** 8–10px radius on task/product cards; 10–12px on larger panels; video cards ~10px.
- **Tags & chips:** small 6–7px rectangles with translucent `#000`@5–6% fills.
- The overall silhouette: round controls, softly squared content — the reverse of Bolt's rectangle-buttons/pill-chips split.

## Motion & Micro-interaction

Subdued and CSS-simple. Interactive feedback is a `background-color` change over 100–150ms `ease` — pills darken to `surface-container`, nav items gain a wash. Menus and reveals take 200–250ms `ease` with opacity/transform only. Nothing slides, nothing springs; the product screenshots are the motion. Honor `prefers-reduced-motion` by keeping fades only.

## Voice & Content Strategy

- **Tone of voice:** Terse, technical, assured. Copy states capability flatly — "Manage any agent, locally or in the cloud, from one command center. Plan, review, and ship with a team of agents."
- **Capitalization:** Sentence case for prose and CTAs ("Get started", "Get a demo", "Select plan"); IBM Plex Mono labels are always uppercase ("EVERYTHING IN PRO, PLUS:", "INDIVIDUAL PLANS").
- **Terminology:** "agent", "session", and "plan" are canonical; products are "Devin Desktop", "Devin Local", "Devin Bots", "SWE-2"; usage is measured in "quota" and "models" (OpenAI, Claude, Gemini).
- **Button and action labels:** Quiet imperatives — "Download for MacOS", "Select plan", "Read more", "Learn more →" (mono, blue, trailing arrow).
- **Feature lists:** Mono "EVERYTHING IN X, PLUS:" divider + blue ✓ + plain feature phrases — no marketing adjectives.
- **Numbers:** Plain figures with mono units — "$200 PER MONTH", "1M+", "4000+".

## Components

### Buttons

Pill-shaped throughout. **Primary:** ink fill, white 14px Skandia label, 40px height, 0 16px padding — hover deepens to pure `#000`. **Secondary:** white fill + 8% ink hairline + ink label ("Download", "Log in" bordered variant). No shadows, no gradients; the 1px translucent ring does the separation.

### Mono eyebrows & links

IBM Plex Mono 12px uppercase. In `#317CFF` they act as labeled portals (the bordered hero callout card stacks "THE HOME FOR EVERY AGENT YOU RUN" over "LEARN MORE →"). In ink they caption sections. Trailing `→` marks links, never plain underlines — except inline "Read more" under a quote.

### Cards

- **Task cards** (product UI): white, 8px radius, 8% hairline, 10–12px padding, title + gray meta row — the kanban tile.
- **Plan cards:** white, ~10–12px radius, hairline border, 24–32px padding; mono tier label + 48–64px Skandia price + full-width pill CTA + mono "EVERYTHING IN…" divider + blue-check feature list.
- **Callout card:** bordered white box stacking a blue mono label over a blue mono link — the site's hero annotation.

### Tags & chips

6–7px-radius translucent gray (`#000`@5–6%) chips, 11–12px label — model names, "Local", "SWE-2 Max". The "NEW"/"POPULAR" plan badges use the same geometry with a solid pale fill.

### Navigation

52px `#FCFCFC` bar: logo left, centered 14px nav links (dropdown chevrons), right cluster "Get a demo" (text) + "Log in" (bordered pill) + "Get started" (ink pill). No backdrop blur — a flat translucent separator.

## Do's and Don'ts

- Do keep every surface white or one of two off-white steps (`#FCFCFC`, `#F8F8F8`); don't introduce tinted section fills.
- Do write metadata as uppercase IBM Plex Mono; don't set eyebrows or section labels in Skandia or title case.
- Do use `#317CFF` for mono labels, links, and ✓ marks only; don't fill buttons or backgrounds with blue.
- Do render secondary text as translucent ink (`#191919` @40–56%); don't pick a separate solid gray hex.
- Do set all headlines in Skandia 400 — weight 500 only for hero-scale exceptions; never bold.
- Do keep CTAs as ink pills and secondary actions as bordered white pills; don't use rectangular or gradient buttons.
- Do border cards with a 1px 8%-black ring; don't add drop shadows to cards.
- Do write terse, factual copy ("Select plan", "Plan, review, and ship"); don't use exclamation marks, emojis, or hype adjectives.
- Don't mix the mono into sentences — it lives in labels, eyebrows, and figures only.
