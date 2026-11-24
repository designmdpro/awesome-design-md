---
version: "1.0.0"
name: Xiaomi (mi.com) Design System
description: Visual language of Xiaomi's official site — a cinematic product-stage aesthetic where full-bleed pastel photography carries oversized white MiSans display type, an orange Mi accent for navigation and indicators, and alternating black/white product bands.
colors:
  primary: "#FF6900"
  on-primary: "#FFFFFF"
  secondary: "#000000"
  surface: "#FFFFFF"
  surface-container: "#FAFAFA"
  inverse-surface: "#000000"
  on-inverse: "#FFFFFF"
  on-surface: "#424242"
  on-surface-variant: "#757575"
  neutral: "#B0B0B0"
typography:
  headline-display:
    fontFamily: "MiSans, MI Lan Pro, PingFang SC, sans-serif"
    fontSize: 120px
    fontWeight: 400
    lineHeight: 1
  headline-lg:
    fontFamily: "MiSans, MI Lan Pro, PingFang SC, sans-serif"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.2
  headline-md:
    fontFamily: "MiSans, MI Lan Pro, PingFang SC, sans-serif"
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.3
  body-md:
    fontFamily: "MiSans, MI Lan Pro, PingFang SC, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "MiSans, MI Lan Pro, PingFang SC, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-sm:
    fontFamily: "MiSans, MI Lan Pro, PingFang SC, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  price-md:
    fontFamily: "MiSans, MI Lan Pro, PingFang SC, sans-serif"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1
rounded:
  none: 0px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  nav-link:
    textColor: "{colors.on-inverse}"
    typography: "{typography.body-sm}"
  nav-link-active:
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
  card-product:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.on-inverse}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  link-more:
    textColor: "{colors.on-inverse}"
    typography: "{typography.label-sm}"
  caption:
    textColor: "{colors.neutral}"
    typography: "{typography.label-sm}"
  body-muted:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-sm}"
---

## Overview

Xiaomi's official site (mi.com) is a product billboard at cinema scale. The homepage hero is a full-viewport pastel-sky photograph of the red YU7 electric SUV beside its celebrity ambassador, with a colossal translucent "YU7" set behind the car and a hairline nav floating above. Every element is set in **MiSans**, Xiaomi's own typeface, at light weights that let the photography dominate. **Mi orange `#FF6900`** appears only as the active nav item, the logo badge, price figures, and the carousel progress segment. Below the fold the page alternates black and white full-bleed product bands ("百变背屏应用卡" on black). The mood: premium restraint — technology presented like fashion editorial.

## Colors

- **Mi Orange / Primary (#FF6900, alt #FF6700):** The "mi" badge, active nav state, price numerals, and progress indicator. Tiny doses on an otherwise neutral canvas.
- **Ink / Secondary (#000000):** True black — both for dark product bands (with white type) and for headline text on light sections.
- **Surface (#FFFFFF) / Container (#FAFAFA):** Light canvas and near-white tiles.
- **Text ramp (#424242 / #757575 / #B0B0B0):** Warm-grayscale body, secondary, and caption grays on light sections; pure white text on dark bands and hero imagery.

## Typography

MiSans (400 regular / 500 medium) covers everything, including prices.

- **Display:** Product-letter heroes run ~120px — oversized, weightless, translucent over photography.
- **Headlines:** 30–40px on product bands, regular weight, white-on-black or ink-on-white.
- **Body:** 14–16px regular.
- **Labels/nav:** 12–14px — deliberately small so the imagery speaks.
- **Prices:** 22px MiSans regular in Mi orange.

## Layout

Edge-to-edge product photography bands — no card containers on heroes. The nav is a transparent bar whose links sit directly on imagery (white on the pastel hero). Content bands alternate: full-bleed light photo hero → black product section → white tiles. Inside bands, copy centers horizontally with wide margins; the carousel progress bar is a thin full-width track with a short orange active segment.

## Elevation & Depth

Flat and photographic — no shadows. Depth is inherent to the photography (soft sky gradients, product renders); UI chrome deliberately disappears.

## Shapes

**Zero radius** — no measured rounded corners on surfaces or buttons; everything is a clean rectangle, including CTAs and the logo badge (the "mi" squircle lives inside the mark itself, not the layout).

## Motion & Micro-interaction

Two speeds: micro-feedback (`all` at **100ms ease**) on nav/hover states, and slower surface transitions (`all` at **600ms ease**, opacity at 300ms) for carousel slides and image fades. Background-color transitions on promo modules run ~500ms. Keep everything ease, transform/opacity only — the aesthetic is a slow dissolve, never a bounce.

## Voice & Content Strategy

Sparse, confident Chinese: product names plus one benefit line ("百变背屏应用卡", "立即体验"), nav entries that read like a catalog （小米官网， 小米商城， 小米澎湃OS, 小米汽车， 小米影像， IoT, 有品）. The mission — "让全球每个人都能享受科技带来的美好生活" / "以人为中心，构建人车家全生态" — is the only long sentence on the page.

## Components

- **Nav:** Transparent bar over imagery — orange "mi" badge left, white 12–14px links, active item in orange; login/register and location at right.
- **Hero:** Full-bleed photo + giant ghosted product letters + "了解更多 ›" ghost link; carousel arrows at the side edges, thin progress track at the bottom with an orange segment.
- **Product band:** Black or white full-width section with centered 30–40px headline, a product render, and a small ghosted "立即体验" link.
- **Buttons:** Square-edge solid fills (orange for conversion) — no pills, no outlines.

## Do's and Don'ts

- Do set all type in MiSans at 400/500; no other families appear.
- Do keep the Mi orange to micro-accents — active states, prices, the progress bar.
- Do let photography fill the viewport edge-to-edge; overlay white type directly on it.
- Do alternate black and white product bands down the page.
- Do keep corners at 0px — rectangles only.
- Don't add shadows, borders, or card chrome to hero content.
- Don't use pills or rounded buttons.
- Don't oversize labels; small quiet type is the aesthetic — scale the imagery, not the UI.
- Don't introduce gradients or extra hues beyond orange on the neutral/black/white field.
- Note: white text on Mi Orange `#FF6900` measures ~3:1 — below the 4.5:1 ideal. The brand ships it anyway on the logo badge and CTA fills; keep orange elements to bold labels and marks, and note the classic logo variant `#FF6700` appears interchangeably.
