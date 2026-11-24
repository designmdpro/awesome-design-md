---
version: "1.0.0"
name: Patagonia Design System
description: Rugged editorial-commerce system for Patagonia — near-monochrome chrome in proprietary Ridgeway Sans, Copernicus serif for storytelling, cinematic full-bleed outdoor photography, 30px pill CTAs, and a four-color activist palette reserved for Patagonia Action Works.
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  secondary: "#003DA5"
  on-secondary: "#FFFFFF"
  tertiary: "#FEB904"
  on-tertiary: "#000000"
  surface: "#FFFFFF"
  on-surface: "#000000"
  surface-container: "#F5F5F5"
  on-surface-variant: "#4A4A4A"
  inverse-surface: "#000000"
  inverse-on-surface: "#FFFFFF"
  outline: "#CCCCCC"
  error: "#B00020"
  on-error: "#FFFFFF"
typography:
  headline-display:
    fontFamily: Ridgeway Sans
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Ridgeway Sans
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Ridgeway Sans
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.02em
  serif-title:
    fontFamily: Copernicus
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.25
  body-lg:
    fontFamily: Ridgeway Sans
    fontSize: 20px
    fontWeight: 300
    lineHeight: 1.5
  body-md:
    fontFamily: Ridgeway Sans
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.5
  body-sm:
    fontFamily: Ridgeway Sans
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.5
  label-md:
    fontFamily: Ridgeway Sans
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.2
  label-sm:
    fontFamily: Ridgeway Sans
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.2
  eyebrow:
    fontFamily: Ridgeway Sans
    fontSize: 12px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0.08em
rounded:
  sm: 4px
  md: 8px
  pill: 30px
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 28px
  xl: 48px
  xxl: 80px
  gutter: 16px
  margin: 24px
  container-max: 1440px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.lg}"
    height: 48px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.lg}"
    height: 48px
  chip-action:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  card-media:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  card-action:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.headline-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  input-default:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
    height: 40px
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    padding: "{spacing.md}"
  promo-bar:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm}"
---

## Overview

Patagonia's system is utilitarian outdoor retail fused with activist publishing. The chrome is deliberately sober — black promo bar, white nav, text-link menus, monochrome product grids — so that the photography carries the emotion: climbers on granite, fly fishers in glacial rivers, sheep-dotted valleys. Headlines in the proprietary **Ridgeway Sans** sit directly on cinematic imagery ("Give 'em what they really want.", "Action Is Our Business"), while **Copernicus**, a bookish serif, appears wherever storytelling begins — the "patagonia Stories®" logotype and editorial card titles.

The palette is almost purely black-and-white until activism activates it: Patagonia Action Works paints its action cards in a categorical four-color system — purple, amber, royal blue, and green — the only saturated UI color on the site. Buttons are honest 30px pills in black or white; cards are modest 8px rectangles; the whole system reads as gear catalog meets environmental newspaper.

## Colors

- **Black (#000000):** Promo bar, primary pill CTAs ("Get Involved", "Volunteer", "Add to Bag"), all headline ink, the patagonia wordmark, and dark feature bands. Patagonia uses true black, not softened ink.
- **White (#FFFFFF):** Page ground, headline text on photography, secondary pill buttons, action-card text on blue/purple.
- **Light Gray (#F5F5F5, #CCCCCC, #4A4A4A):** Card wells, search fields, hairlines, and secondary text — the only neutrals in play.
- **Activist Purple (#500778):** "Organization" action cards and partner/grantee markers. White text.
- **Activist Amber (#FEB904):** "Volunteer" action cards — always with black text.
- **Activist Blue (#003DA5):** "Event" action cards. White text.
- **Activist Green (#32B67A):** "Petition" action cards — typically with black text.
- **Error (#B00020):** Form and checkout errors only; sale pricing stays black or muted.

## Typography

- **Ridgeway Sans** (proprietary, system-ui fallback) is the whole interface: weight 500 for headlines and buttons, weight 300 for body, nav, and micro-copy. Headline tracking tightens to -0.02em at 64px display size; body runs 16px/300 at 1.5.
- **Copernicus** (Palatino-class serif) is the storytelling face — story titles, the "patagonia Stories®" masthead, pull quotes — always regular weight, never UI chrome.
- **Eyebrows** are small uppercase or plain 12px Ridgeway kickers ("GIFT GUIDE") above hero headlines.
- Legacy storefront pages may still render **Avenir Next** — treat Ridgeway Sans as canonical.

## Layout

A classic full-width commerce grid on an 8px scale (~1440px max content). The header stacks a slim black promo bar ("Free Shipping on Orders Over $99" / "Earth Is Now Our Only Shareholder") over a white logo row and a text-link nav. Heroes are full-bleed images with left- or center-anchored eyebrow + 64px headline + short deck + pill button group. Below, content flows as horizontal image rails, product grids, and — on activism — a categorical rail of saturated action cards. Product listing cards keep tight metadata: name, colorway count, price.

## Elevation & Depth

Mostly flat with a Material-inflected lift: floating elements (dropdowns, toasts, sticky chips) use a triple-layer shadow `hsl(0 0% 0% / .14) 0 4px 5px, hsl(0 0% 0% / .12) 0 1px 10px, hsl(0 0% 0% / .2) 0 2px 4px -1px`. Imagery relies on photographic depth — subtle dark scrims keep white hero type legible without chrome.

## Shapes

Two shapes only: **30px pills** for buttons and category chips (Women's / Men's / Kids' & Baby / Packs & Gear), and **8px** for cards, media tiles, search fields, and color swatch tiles. Small categorical tags drop to 4px. There are no oversized radii, no sharp-cornered cards — the restraint matches the gear-catalog sobriety.

## Motion & Micro-interaction

Quiet, utilitarian motion on two custom curves: fast state changes at **200ms `cubic-bezier(0.235, 0, 0.05, 0.95)`**, structural moves at **300ms `cubic-bezier(0.38, 0.41, 0.27, 1)`**, and slow cinematic image zooms at ~800ms ease on hero and card hover. Color hovers swap at 200ms. Video heroes autoplay muted; otherwise nothing loops or decorates.

## Voice & Content Strategy

- **Tone of voice:** Plainspoken, dry-witted, and conviction-driven — commerce copy that reads like a field note. "Give 'em what they really want.", "Built for hard use and backed by our Ironclad Guarantee.", "Since 1985, we've used our business, voice and resources to build power in the grassroots environmental movement."
- **Capitalization:** Sentence case for headlines; Title Case only in nav categories ("Packs & Gear", "Food & Beer"); eyebrows in small caps or uppercase ("GIFT GUIDE").
- **Terminology:** Gear is functional and gender-led ("Men's", "Women's", "Kids' & Baby"); activism vocabulary is civic — "Take Action", "Get Involved", "Join Our Community", "Organization", "Petition", "Volunteer", "Event".
- **Signature statements:** "Earth Is Now Our Only Shareholder" and "1% for the Planet" recur as institutional lines in the promo bar and footer.
- **Editorial grammar:** Stories are credited with author names and read times ("Cochamó Por Siempre — 10 min Read"); product names are descriptive, never punny ("Men's Down Sweater Hoody").

## Components

- **Primary pill button:** `button-primary` — black 30px-radius pill, white 16px/500 label ("Get Involved", "Volunteer", "Add to Bag"), ~48px tall with 28px horizontal padding.
- **Secondary pill button:** `button-secondary` — white pill with 1px black hairline, black label ("Join Our Community", "Take Action", category chips over heroes).
- **Action tag:** `chip-action` — small 4px-radius solid tag (black or white variant) labeling card type ("Organization", "Volunteer", "Event", "Petition").
- **Media card:** `card-media` — 8px-radius image tile with a serif or sans title and short deck; story cards credit author + read time.
- **Action card:** `card-action` — saturated category-colored 8px tile (purple/amber/blue/green) with a small tag chip, bold title, and short description; the only place brand color fills large areas.
- **Search field:** `input-default` — 40px `#F5F5F5` pill in the nav with gray placeholder.
- **Nav bar:** `nav-bar` — white bar, wordmark left, text-link categories, icon buttons right; black promo bar above with small white copy.
- **Product card:** white tile, product shot on light gray, name + colorway + price; wishlist heart top-right.

## Do's and Don'ts

- Do let photography lead — imagery fills entire viewports; chrome stays monochrome and out of the way.
- Do reserve the activist four-color system exclusively for Patagonia Action Works content; shopping UI never uses purple, amber, blue, or green fills.
- Do keep buttons as 30px pills in black or white only — no colored CTAs.
- Do use Copernicus only for editorial moments (story titles, the Stories masthead, pull quotes); Ridgeway Sans carries all commerce UI.
- Do pair activist amber and green surfaces with black text, purple and blue with white text.
- Don't use gradients, glassmorphism, or heavy shadows — depth comes from photography and the Material-style card lift.
- Don't round cards beyond 8px or square buttons below their pill radius.
- Don't add decorative color to product pages; pricing, swatches, and grid metadata stay neutral.
- Don't write hype or urgency into copy — even sales and gift guides stay plainspoken and guarantee-focused.
- Don't all-caps long headlines; uppercase is reserved for small eyebrow kickers.
