---
version: "1.0.0"
name: Groq Design System
description: A warm-concrete, pixel-art-inflected system for LPU inference infrastructure — esBuild grotesk display type and uppercase Komuna hairline labels on an off-white canvas, a single Groq-orange accent, serif Aether body copy, category-coded fluorescent pixel blocks, and capsule CTAs outlined in orange.
colors:
  primary: "#F43E01"
  on-primary: "#FFFFFF"
  surface: "#F3F3EE"
  surface-secondary: "#FAFAF8"
  on-surface: "#302B28"
  on-surface-secondary: "#2D2F33"
  on-surface-muted: "#69695D"
  on-surface-faint: "#CECEBF"
  outline: "#CECEBF"
  link: "#F43E01"
  tertiary:
    plum: "#53003F"
    magenta: "#A2003F"
    indigo: "#4646DD"
    green: "#225C05"
    yellow: "#F6AB45"
    teal: "#39C5C0"
    fluorescent-pink: "#F392DD"
    fluorescent-pink-light: "#FAD8FF"
typography:
  display:
    fontFamily: esBuild
    fontSize: 110px
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: esBuild
    fontSize: 50px
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: -0.03em
  title-md:
    fontFamily: esBuild
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.023em
  body-md:
    fontFamily: aether
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: -0.04em
  body-sm:
    fontFamily: esBuild
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.57
  label-lg:
    fontFamily: komuna
    fontSize: 21px
    fontWeight: 100
    lineHeight: 1
    letterSpacing: 0.08em
  label-md:
    fontFamily: komuna
    fontSize: 16px
    fontWeight: 100
    lineHeight: 1
    letterSpacing: 0.08em
  label-sm:
    fontFamily: komuna
    fontSize: 14px
    fontWeight: 100
    lineHeight: 1
    letterSpacing: 0.08em
  input:
    fontFamily: esBuild
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -0.01em
rounded:
  sm: 5px
  md: 8px
  lg: 10px
  xl: 24px
  full: 1000px
spacing:
  base: 8px
  xs: 4px
  sm: 10px
  md: 14px
  lg: 24px
  xl: 32px
  xxl: 64px
  section: 128px
  gutter: 32px
  container-max: 1440px
  header: 80px
components:
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
    height: 32px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
    height: 32px
  chip-category:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
    height: 20px
  link-accent:
    textColor: "{colors.link}"
    typography: "{typography.body-sm}"
  nav-header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    height: 80px
  nav-link:
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-md}"
  nav-link-active:
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
  announcement-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-secondary}"
    typography: "{typography.label-sm}"
    height: 48px
  text-manifesto:
    textColor: "{colors.on-surface-faint}"
    typography: "{typography.headline-lg}"
  text-manifesto-active:
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-lg}"
  text-meta:
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-sm}"
  input-field:
    backgroundColor: "{colors.surface-secondary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.input}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    height: 44px
  tag-plum:
    backgroundColor: "{colors.tertiary.plum}"
    textColor: "{colors.surface-secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  tag-magenta:
    backgroundColor: "{colors.tertiary.magenta}"
    textColor: "{colors.surface-secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  tag-indigo:
    backgroundColor: "{colors.tertiary.indigo}"
    textColor: "{colors.surface-secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  tag-green:
    backgroundColor: "{colors.tertiary.green}"
    textColor: "{colors.surface-secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  pixel-accent-yellow:
    backgroundColor: "{colors.tertiary.yellow}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
  pixel-accent-teal:
    backgroundColor: "{colors.tertiary.teal}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
  pixel-accent-pink:
    backgroundColor: "{colors.tertiary.fluorescent-pink}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
  pixel-accent-pink-light:
    backgroundColor: "{colors.tertiary.fluorescent-pink-light}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
  tier-label:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
    height: 24px
---

## Overview

Groq's site is a **concrete gallery wall with silicon-glyph graffiti**. The canvas is a warm bone `#F3F3EE` with almost nothing on it except a single saturated orange `#F43E01` and three typefaces doing three very specific jobs: **esBuild** — a technical grotesk — sets headlines and UI text; **Komuna** — a hairline serif at weight 100, always uppercase with +0.08em tracking — voices every nav item, chip, label, and form caption; and **Aether** — a serif — carries body prose. The result reads like engraved signage over a museum floor plan.

Decoration is **pixel-circuit artwork**: small clusters of orange blocks, dots, and L-shaped tetrominoes that look like a circuit board drawn in 8-bit, plus full-bleed category-coded pixel fields (plum, magenta, indigo, green, fluorescent pink) behind blog cards. The homepage hero isn't an image at all — it's a typographic manifesto ("Every customer served. Every product sold. Every commit merged. That's inference.") whose lines fade from warm `#CECEBF` to ink `#302B28` as they become true.

## Colors

- **Primary / Groq Orange (`#F43E01`, hovering deepens to `#E93B01`):** The logo bolt, every CTA outline and chip, pixel accents, active nav links, the announcement "READ MORE ›", and tier labels. One orange, used with total discipline.
- **Surface (`#F3F3EE` / `#FAFAF8`):** Warm bone canvas; slightly lighter `#FAFAF8` for form fields and card interiors.
- **On-surface ramp (`#302B28` / `#2D2F33` / `#69695D` / `#CECEBF`):** Ink for revealed headlines; `#69695D` for muted labels and nav rest; `#CECEBF` as the pre-reveal state of the manifesto text and light hairlines.
- **Link (`#F43E01`):** Same orange — links are never a second color.
- **Tertiary (category palette):** Plum `#53003F`, magenta `#A2003F`, indigo `#4646DD`, greens `#225C05` and `#475C05`, yellow `#F6AB45`, teal `#39C5C0`, and fluorescent pinks `#F392DD`/`#FAD8FF` — a coded color system for blog categories and pixel-art fields, never for UI chrome.

## Typography

- **Display:** `display` ~110px esBuild weight 500, tight 0.95 line-height, `-0.03em` tracking — page titles like "Groq Platform" and the mega footer wordmark "PREMIER NEOCLOUD FOR FAST INFERENCE".
- **Headlines:** `headline-lg` 50px esBuild 500 for the manifesto stack; `title-md` 28px for blog card titles.
- **Body:** `body-md` — Aether serif 16px at 1.35 with `-0.04em` tracking — the platform descriptions and article meta read like print footnotes. `body-sm` 14px esBuild for utility links.
- **Labels:** the signature — Komuna **weight 100 uppercase** with `+0.08em` tracking at 21px (list items), 16px (nav, chips, buttons), and 14px (form labels, meta). Everything that's a label is thin engraved caps.
- **Inputs:** `input` esBuild 16px plain — fields stay sans.

## Layout

- **Header:** 80px bone bar — orange pixel-bolt wordmark left; Komuna caps nav (PLATFORM BLOG CAREERS CONTACT) center-right with an orange under-slash on the active item; orange-outlined "START BUILDING" capsule at the edge. A 48px announcement strip sits below: mono-caps news line + orange "READ MORE ›".
- **Hero:** left-aligned, asymmetric — the manifesto column (~730px max) starts a third of the way down the first viewport; pixel glyphs float in the margins.
- **Content grids:** three-column product tier grid (GroqMetal / GroqCore / GroqAssured) with hairline dividers and orange tier chips; blog grid of pixel-art card fields with category chips over the artwork.
- **Footer:** bone field with the colossal esBuild caps brand line, social icons, and the compact nav echoed at bottom.

## Elevation & Depth

Completely flat — **no shadows anywhere**. Depth is tonal and typographic: `#CECEBF` vs `#302B28` states in the manifesto, hairline `#CECEBF` dividers between grid cells, and the saturated category blocks against bone. Hover states swap color only (orange → `#E93B01`, gray → ink).

## Shapes

- **Capsules (`1000px`):** every button, chip, and tier label is a full capsule — outline or filled.
- **Small radii:** 5–8px on inputs, tags, and pixel chips (`--bdrs-inner` 5px, `--bdrs-control` ~8px); 10–24px on larger wells.
- **Pixel geometry:** artwork is strictly blocky — squares, dots, and L-tetromino circuit traces; nothing organic or photographic.

## Motion & Micro-interaction

- **Nearly still:** interaction motion is limited to `color` transitions at `150–250ms ease-in-out` — link and chip color swaps, nothing more.
- **The real animation is narrative:** the hero manifesto lines step from `#CECEBF` to `#302B28` (scroll/timed reveal), and pixel glyphs may drift — motion serves the story, not the chrome.
- No springs, no transforms on cards, no elevation changes — the site's confidence is typographic.

## Voice & Content Strategy

Manifesto-first engineering voice — claims stated as litany, products named like hardware.

- Hero copy is a progressive litany: "Every customer served. Every product sold. Every commit merged. Every agent task completed. That's inference." then "Training creates the possibility. Inference creates the value." — short declarative periods, each line a sentence.
- Labels are ALL-CAPS engraved: "START BUILDING", "READ MORE ›", "TERMS AND POLICIES", "INFRASTRUCTURE", "INFERENCE", "CONTROL", "PARTNERSHIP", "FUNDRAISING".
- Product naming is material/metallic: GroqMetal (infrastructure), GroqCore (inference), GroqAssured (enterprise controls) — "Build your perfect stack. Each includes the layers below."
- Proof is headline-scale fact: "GROQ CLOSES $350 MILLION SERIES A, BUILDING THE WORLD'S LEADING AI INFERENCE CLOUD", "PREMIER NEOCLOUD FOR FAST INFERENCE".
- CTAs are two-word imperatives in caps — "START BUILDING", "CONTACT US", "READ MORE ›" — always Komuna caps, always orange or ink.

## Components

- **button-outline:** Transparent capsule, `1px #F43E01` border, orange Komuna caps text, 32px tall, `10px 14px` padding — "START BUILDING" in nav and heroes. Hover fills `#F43E01`/`#E93B01`.
- **button-primary:** Filled orange capsule, cream Komuna caps, same 32px geometry.
- **chip-category:** Filled capsule (`#F43E01` for product tiers, `#53003F`/`#225C05` for blog categories), bone Komuna caps text, ~20–24px tall — "PARTNERSHIP", "INFRASTRUCTURE".
- **nav-link / nav-link-active:** Komuna 16px caps, `#69695D` rest → `#F43E01` active with a small orange under-slash tick.
- **announcement-bar:** Bone strip under nav, `#2D2F33` caps news text + orange "READ MORE ›" link.
- **text-manifesto:** esBuild 50px/500 stack in `#CECEBF`; the active/revealed lines flip to `#302B28` — the whole homepage pitch is one fading type stack.
- **input-field:** `#FAFAF8` well, `1px` hairline, 8px radius, esBuild 16px text, Komuna caps label above.
- **pixel-art:** Circuit-tetromino blocks in orange on bone (homepage) or category colors on pastel fields (blog cards) — pure decoration, never behind text.
- **tier-column:** Hairline-separated column — orange tier chip (INFRASTRUCTURE/INFERENCE/CONTROL), esBuild product name ("GroqMetal"), Aether description, Komuna caps feature list.

## Do's and Don'ts

- Do keep the canvas bone `#F3F3EE` and reserve `#F43E01` for action+brand — the site is one accent on concrete, not a colorful UI.
- Do set every label, chip, nav item, and form caption in Komuna uppercase hairline caps with `+0.08em` tracking — that engraved register is the brand's voice.
- Do use esBuild at weight 500 with `-0.03em` tracking for display type, and let Aether serif handle prose — three faces, three lanes.
- Do make every button a `1000px` capsule and every small field an 8px well; keep artwork pixelated and circuit-like.
- Do use the tertiary plum/magenta/indigo/green family only inside category-coded blog art and chips.
- Don't add shadows, gradients, or glass — depth is a `#CECEBF`→`#302B28` value flip, nothing else.
- Don't introduce a second accent color into chrome (buttons, links, nav) — everything interactive is orange or ink.
- Don't set headlines or labels in Aether; the serif is body copy only.
- Don't round text links or turn them into pills — links are plain esBuild text in orange.
- Don't use the manifesto's faint `#CECEBF` for real UI text — it's a pre-reveal state, not a readable color.
