---
version: "1.0.0"
name: GitLab Design System
description: GitLab's marketing system is a dark, halftone-dotted DevOps aesthetic anchored by the tanuki brand gradient (orange #FC6D26 → magenta #E53C97 → purple #7759C2), GitLab Sans variable typography at custom 580/660 weights, GitLab Mono uppercase eyebrows, sharp 0px cards, and inverted white/black CTAs.
colors:
  primary: "#FC6D26"
  on-primary: "#FFFFFF"
  secondary: "#7759C2"
  on-secondary: "#FFFFFF"
  tertiary: "#E53C97"
  surface: "#FCFBFC"
  surface-container-low: "#F7F7F5"
  surface-container: "#F2F1F5"
  surface-container-high: "#E8E7EB"
  on-surface: "#18171D"
  on-surface-variant: "#74717A"
  inverse-surface: "#18171D"
  inverse-surface-container: "#28272D"
  inverse-surface-raised: "#35333B"
  inverse-on-surface: "#FCFBFC"
  inverse-on-surface-variant: "#A2A1A6"
  outline: "#D1D0D3"
  inverse-outline: "#45424D"
  accent: "#A989F5"
  error: "#E24329"
typography:
  headline-display:
    fontFamily: GitLab Sans
    fontSize: 96px
    fontWeight: 660
    lineHeight: 1.04
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: GitLab Sans
    fontSize: 64px
    fontWeight: 660
    lineHeight: 1.06
    letterSpacing: -0.03em
  headline-md:
    fontFamily: GitLab Sans
    fontSize: 40px
    fontWeight: 660
    lineHeight: 1.1
    letterSpacing: -0.02em
  title-lg:
    fontFamily: GitLab Sans
    fontSize: 24px
    fontWeight: 580
    lineHeight: 1.17
    letterSpacing: -0.02em
  title-md:
    fontFamily: GitLab Sans
    fontSize: 18px
    fontWeight: 660
    lineHeight: 1.56
  body-lg:
    fontFamily: GitLab Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.56
  body-md:
    fontFamily: GitLab Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: GitLab Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.57
  label-lg:
    fontFamily: GitLab Sans
    fontSize: 18px
    fontWeight: 660
    lineHeight: 1.25
  label-md:
    fontFamily: GitLab Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  mono-label:
    fontFamily: GitLab Mono
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
  mono-sm:
    fontFamily: GitLab Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  base: 8px
  xs: 6px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 96px
  gutter: 24px
  margin: 32px
  container-max: 1170px
components:
  button-primary:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  button-primary-inverse:
    backgroundColor: "{colors.inverse-on-surface}"
    textColor: "{colors.inverse-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  button-link:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  card-dark:
    backgroundColor: "{colors.inverse-surface-container}"
    textColor: "{colors.inverse-on-surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  card-dark-raised:
    backgroundColor: "{colors.inverse-surface-raised}"
    textColor: "{colors.inverse-on-surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  card-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  card-callout:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  nav-link:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  chip-tag:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs}"
  eyebrow-mono:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface-variant}"
    typography: "{typography.mono-sm}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"
  version-tag:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.accent}"
    typography: "{typography.mono-sm}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"
---

## Overview

GitLab's site is a **dark, editorial DevOps aesthetic**: near-black `#18171D` canvases textured with a faint halftone dot grid, monumental 96px headlines ("Speed you can trust, all the way to production"), and the signature **tanuki gradient** — orange `#FC6D26` → magenta `#E53C97` → purple `#7759C2` — washing CTA panels and product imagery backdrops. Pages alternate dark showcase sections with light `#FCFBFC` content bands (pricing is fully light). The mood is industrial and confident — vertical "BUILD WITH GITLAB" side rails, numbered feature indices (01/02/03), dimmed enterprise logo walls — aimed at platform engineering leaders in the "agentic software factory" era.

## Colors

- **GitLab Orange `#FC6D26` (primary):** the fox-logo brand color and gradient anchor — used in gradients, accent fills, and highlights rather than flat CTA fills.
- **Purple `#7759C2` (secondary):** links, check icons, the "Most popular" chip, version tags ("19.6"), and gradient tail; lighter `#A989F5` for on-dark text accents.
- **Magenta `#E53C97` (tertiary):** the gradient mid-stop; rarely used flat.
- **Brand gradient:** `linear-gradient(180deg, #FC6D26, #E53C97 50%, #7759C2)` — CTA panels, highlighted borders, glow fields behind screenshots.
- **Dark surfaces:** `#18171D` page, `#28272D`/`#35333B` raised cards; borders `#45424D` or white at 10–20%.
- **Light surfaces:** `#FCFBFC` page, `#F2F1F5`/`#E8E7EB` containers and callout strips; borders `#D1D0D3`.
- **Text:** `#FCFBFC` on dark / `#18171D` on light; muted `#A2A1A6` (dark) and `#74717A` (light).
- **Error/deep orange:** `#E24329`.

## Typography

Everything is **GitLab Sans** (variable, 100–900) — GitLab exploits the variable axis with unconventional weights: **660** for headlines and buttons, **580** for titles, **400** for body. **GitLab Mono** handles code and uppercase eyebrows.

- **Display:** 96px/660, −0.03em tracking, 1.04 line-height — massive, tight, sentence case.
- **Headlines:** 64px/660 section heads, 40px/660 mids, 24px/580 titles.
- **Body:** 16–18px/400 at 1.5–1.57 line-height.
- **Buttons:** 18px/**660** — semibold-plus labels ("Get free trial", "Buy Premium").
- **Mono:** 700-weight uppercase for h3 eyebrows ("BLOG"), 400 at 12px for card tags.

## Layout

**~1170px** container on an 8px base scale (6/12/16/24/48/96). Heroes break the grid deliberately: oversized headlines clip the viewport edge, CTAs sit in gradient panels, and content cards hang off asymmetric columns. Numbered index columns (01/02/03), stat walls (1M, 13x, 99%), and the vertical side-rail label give the pages an editorial, technical-spec feel. Pricing uses three equal cards on light `#FCFBFC` with the popular tier ringed by the gradient border.

## Elevation & Depth

**No drop shadows** — the stylesheet is literally shadow-free. Depth comes from tonal stepping (`#18171D` → `#28272D` → `#35333B`), translucent white fills at 10–15% on dark, 1px hairlines (`#45424D` dark / `#D1D0D3` light), and the gradient's own luminance. The halftone dot texture supplies surface interest without elevation.

## Shapes

Deliberately **sharp**: cards and hero tiles run `0px` corners; buttons and inputs get a modest **4px**; only tab pills (`8px 8px 0 0`) and rare promo chips soften to **8–16px**, with full pills (~120px) on occasional badges. The flat-edged geometry reads engineered and industrial.

## Motion & Micro-interaction

- **State changes:** `180ms ease-out` background/transform shifts; `200ms ease` color transitions.
- **Larger moves:** `300ms` at `cubic-bezier(0.7, 0, 0.3, 1)` — GitLab's steep signature curve — for hovers and reveals.
- The halftone field is static; the gradient panels and product screenshots carry the visual energy. No looping decorative motion observed.

## Voice & Content Strategy

- **Tone:** Punchy compound statements — "Speed you can trust, all the way to production", "Ship faster. Stay in control.", "One control plane", "Own what's next." Trust/control language dominates.
- **Capitalization:** Sentence case headlines and buttons; mono eyebrows and category tags in caps ("BLOG", "FINANCIAL SERVICES").
- **CTA grammar:** Direct verbs — "Get free trial", "Try for free", "Request a demo", "Buy Premium", "Talk to sales", "Get started".
- **Terminology:** "agentic software engineering", "Duo Agent Platform", "GitLab Credits", "compute minutes" — AI-era platform vocabulary, product names capitalized.

## Components

- **Button — primary (`button-primary`):** on light, `#18171D` fill + `#FCFBFC` 18px/660 label, 4px radius, 11px/16px padding, ~45–47px tall ("Buy Premium", nav "Get free trial"). On dark, inverts to `#FCFBFC` fill + `#18171D` text (`button-primary-inverse`, "Get free trial"/"Talk to sales").
- **Button — secondary (`button-secondary`):** white/transparent fill, 1px `#18171D` border, dark text ("Try for free", "Get started").
- **Button — gradient panel:** the hero "Try for free →" sits inside a `linear-gradient(180deg, #FC6D26, #E53C97, #7759C2)` tile, not a flat button — treat as a branded surface.
- **Button — link (`button-link`):** borderless purple `#7759C2` text; tertiary nav actions stay `#74717A`.
- **Card — dark (`card-dark`):** `#28272D` fill, sharp corners, hairline dark borders, 24px padding — feature tiles, "What's new" panels.
- **Card — light (`card-light`):** white/`#FCFBFC`, `0px` radius, `#D1D0D3` hairline; Premium tier gets the gradient outline.
- **Callout strip (`card-callout`):** `#F2F1F5` / peach-tinted strip inside pricing cards for credit notes.
- **Nav (`nav-link`):** 16px/400 ivory links on the dark bar (or `#74717A` on light) with carets; right side stacks "Request a demo" text-link + solid "Get free trial" + "Sign in".
- **Chip (`chip-tag`):** light container + purple text for "Most popular" and version labels.
- **Eyebrow (`eyebrow-mono`):** GitLab Mono caps — section labels like "BLOG", industry tags.

## Do's and Don'ts

- Do anchor the palette on the tanuki gradient (`#FC6D26 → #E53C97 → #7759C2`); use flat orange/purple only as accents derived from it.
- Do keep cards and tiles at 0px radius — sharp geometry is the system's industrial signature.
- Do use GitLab Sans variable weights 580/660 for headings and 660 for button labels — not standard 600/700.
- Don't add box shadows — depth is tonal stepping plus translucent hairlines only.
- Do pair dark `#18171D` heroes with light `#FCFBFC` content bands; pricing is fully light.
- Do use GitLab Mono uppercase sparingly — eyebrows, version numbers, and tags only.
- Do invert the primary CTA with the surface (dark button on light, white button on dark) rather than tinting it orange.
- Don't let secondary links compete with `#7759C2` — that purple means interactive.
