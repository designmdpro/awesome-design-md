---
version: "1.0.0"
name: Apple Design System
description: Apple's storefront aesthetic — vast whitespace, edge-to-edge product photography, SF Pro typography at billboard sizes, pill-shaped blue CTAs, and a translucent frosted nav bar. Minimalism as luxury.
colors:
  primary: "#0071E3"
  on-primary: "#FFFFFF"
  secondary: "#0066CC"
  tertiary: "#2997FF"
  light:
    surface: "#FFFFFF"
    on-surface: "#1D1D1F"
    surface-container: "#F5F5F7"
    on-surface-variant: "#6E6E73"
  dark:
    surface: "#000000"
    on-surface: "#F5F5F7"
    surface-container: "#161617"
    on-surface-variant: "#A1A1A6"
typography:
  headline-display:
    fontFamily: SF Pro Display
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: SF Pro Display
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.07
    letterSpacing: -0.01em
  headline-md:
    fontFamily: SF Pro Display
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.1
  headline-sm:
    fontFamily: SF Pro Display
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.14
  body-lg:
    fontFamily: SF Pro Text
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.19
  body-md:
    fontFamily: SF Pro Text
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: -0.02em
  body-sm:
    fontFamily: SF Pro Text
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: -0.02em
  label-md:
    fontFamily: SF Pro Text
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.47
  label-sm:
    fontFamily: SF Pro Text
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: -0.01em
  caption:
    fontFamily: SF Pro Text
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: -0.01em
rounded:
  sm: 8px
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 24px
  xl: 48px
  xxl: 96px
  gutter: 12px
  margin: 22px
  container-max: 980px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 44px
    padding: "{spacing.lg}"
  button-primary-small:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    height: 36px
    padding: "{spacing.md}"
  button-secondary:
    backgroundColor: "{colors.light.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 44px
    padding: "{spacing.lg}"
  button-secondary-dark:
    backgroundColor: "{colors.dark.surface}"
    textColor: "{colors.tertiary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 44px
    padding: "{spacing.lg}"
  link-inline:
    textColor: "{colors.secondary}"
    typography: "{typography.body-md}"
  link-inline-dark:
    textColor: "{colors.tertiary}"
    typography: "{typography.body-md}"
  nav-link:
    textColor: "{colors.light.on-surface}"
    typography: "{typography.label-sm}"
    height: 44px
  tile-product:
    backgroundColor: "{colors.light.surface-container}"
    textColor: "{colors.light.on-surface}"
    typography: "{typography.headline-sm}"
  tile-product-dark:
    backgroundColor: "{colors.dark.surface}"
    textColor: "{colors.dark.on-surface}"
    typography: "{typography.headline-sm}"
  footer-link:
    textColor: "{colors.light.on-surface-variant}"
    typography: "{typography.label-sm}"
---

## Overview

Apple.com is the defining reference for product-first minimalism: an edge-to-edge wall of full-bleed product tiles, each pairing billboard-scale SF Pro type with immaculate hardware photography. There is almost no interface chrome — the product renders fill the viewport, text floats over or sits beside them, and the only persistent element is a 44px frosted-glass nav bar.

The personality is restrained, premium, and theatrical: alternating white (`#FFFFFF` / `#F5F5F7`) and pure-black product stages, one blue for every link and CTA, and copy so short it reads as captions. Nothing is decorated; everything is photographed.

## Colors

- **CTA Blue (#0071E3):** The filled pill button color — "Learn more", "Shop iPhone", "Buy". Saturated and cool.
- **Link Blue (#0066CC):** Text links and outline-button strokes on light surfaces.
- **Sky Blue (#2997FF):** The same roles on black sections — brighter for dark-ground contrast.
- **Ink (#1D1D1F):** Headlines and body — never pure black on light.
- **Translucent inks:** Nav and footer text at `rgba(0,0,0,.8)`; secondary/legal at `rgba(0,0,0,.56)`.
- **Cloud (#F5F5F7):** The signature light-gray — promo ribbon, alternate tiles, the frosted nav backdrop at 80% alpha.
- **Graphite (#6E6E73 / #86868B):** Secondary text, footer links, footnotes.
- **Black (#000000):** Whole product sections — iPhone Pro-style dark tiles use it as the stage.
- **Hairline (#D2D2D7):** 1px separators in nav, footer, and legal rows.

## Typography

Two system faces with a hard size rule — **SF Pro Display** for anything ≥20px, **SF Pro Text** below.

- **Headlines:** SF Pro Display 600, at 40/56/80px with 1.05–1.14 leading and faintly negative tracking. Product names ("iPhone", "MacBook Neo") are the biggest type on the page.
- **Subheads:** 21px/400 SF Pro Text ("Meet the most powerful iPhone lineup ever.") under each display line.
- **Body:** 17px/400 on ~1.47 leading for copy; 14px/400–600 for tile copy and promo links.
- **Micro:** 12px for nav items, footnotes, legal — always `rgba(0,0,0,.56–.8)`, never solid gray.

## Layout

Full-width stacked tiles: each product gets a viewport-height panel — centered headline stack up top, hero render below — with a 2-up tile grid (12px gutters) under the fold. Text columns cap at 980px; imagery always bleeds to the edges. The global nav is a translucent 44px bar (10 12px links + search/bag icons) with an optional promo ribbon beneath it.

## Elevation & Depth

Flatness as luxury: no card shadows on tiles or buttons — separation is photographic (subject vs. ground) plus hairlines. The only elevation is the nav bar's frosted blur (`#F5F5F7` at 80% + backdrop-filter) and a rare soft shadow (`rgba(0,0,0,.22) 3px 5px 30px`) under floating carousel/promo elements.

## Shapes

- **Buttons:** perfect pills (980px radius) — every CTA from the 36px "Shop gifts" to the 44px "Learn more".
- **Tiles/cards:** sharp `0px` rectangles — product panels never round.
- **Controls:** small 8px radii only on inputs; 50% circles on carousel dots and icon wells.

## Motion & Micro-interaction

Buttery and invisible: ~400ms opacity fades, 320ms `cubic-bezier(0.4, 0, 0.6, 1)` color transitions on links/buttons, 250ms width eases on expanding fields (search). Scroll-driven cinematic reveals belong to the product photography, not the UI chrome. Nothing else moves.

## Voice & Content Strategy

- **Tone of voice:** Laconic superlatives — "Meet the most powerful iPhone lineup ever." Confident, warm, minimal punctuation; product names do the talking.
- **Capitalization:** Sentence case; "iPhone", "MacBook", "Apple Watch" keep brand caps mid-sentence.
- **Button grammar:** "Learn more" (filled) + "Buy" / "Shop iPhone" (outline or link) — always an explore-then-commit pair. Links carry a trailing chevron "›".
- **Promo grammar:** Ribbon copy compresses the deal — "Starting Black Friday, get an Apple Gift Card up to $300± when you buy an eligible product. Learn more ›"
- **Footnotes:** Disclaimers marked with dagger/symbol glyphs at 12px gray.

## Components

### Buttons & Links

`button-primary` — `#0071E3` pill, white 17px/400 label, 11px/21px padding — and `button-primary-small` (36px, 14px) cover every filled action. `button-secondary` is the matching outline pill (`#0066CC` text + 1px stroke, transparent fill); on black tiles it flips to `button-secondary-dark` with `#2997FF`. `link-inline`/`link-inline-dark` are the chevron-suffixed text links in the same blues.

### Product Tiles

`tile-product` and `tile-product-dark` are full-bleed panels — light `#F5F5F7` or black `#000` stage, centered 28–56px headline + 21px subhead + CTA pair + hero render. No borders, no radius, no cards.

### Navigation & Footer

`nav-link` — 12px `rgba(0,0,0,.8)` items in the 44px frosted bar. `footer-link` columns are 12px `rgba(0,0,0,.56)` lists under hairline section rules, grouped by "Shop and Learn", "Services", "About Apple".

## Do's and Don'ts

- Do give each product its own full-viewport stage — no two heroes share a screen.
- Don't add borders, shadows, or radii to product tiles; photography is the container.
- Do use `#0071E3` only on pills and `#0066CC`/`#2997FF` on text links — never swap light/dark blues.
- Don't set UI text smaller than 12px or darker than `rgba(0,0,0,.56)` for secondary copy.
- Do keep CTAs in explore/commit pairs ("Learn more" + "Buy"), centered under the headline stack.
- Don't write long copy — a headline, a subhead, and a CTA is the entire tile anatomy.
- Do hold SF Pro Display to 600 weight for headlines; lighter weights lose the billboard authority.
- Don't animate chrome — motion belongs to product imagery and subtle fades only.
