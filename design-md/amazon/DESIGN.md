---
version: "1.0.0"
name: Amazon Design System
description: High-density commerce design built around the yellow "Add to Cart" pill — squid-ink text on white cards, teal links, deal red for urgency, and a dark (seasonally orange-gradient) global nav.
colors:
  primary: "#FFD814"
  on-primary: "#0F1111"
  secondary: "#FFA41C"
  on-secondary: "#0F1111"
  tertiary: "#E67300"
  on-tertiary: "#FFFFFF"
  error: "#CC0C39"
  on-error: "#FFFFFF"
  success: "#007600"
  link: "#2162A1"
  neutral: "#F0F2F2"
  surface: "#FFFFFF"
  on-surface: "#0F1111"
  on-surface-variant: "#565959"
  surface-container: "#E3E6E6"
  outline: "#888C8C"
  outline-variant: "#D5D9D9"
  inverse-surface: "#131921"
  inverse-on-surface: "#FFFFFF"
typography:
  headline-lg:
    fontFamily: 'Amazon Ember'
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.33
  headline-md:
    fontFamily: 'Amazon Ember'
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.3
  title-lg:
    fontFamily: 'Amazon Ember'
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.35
  title-md:
    fontFamily: 'Amazon Ember'
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.33
  body-lg:
    fontFamily: 'Amazon Ember'
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.33
  body-md:
    fontFamily: 'Amazon Ember'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
  body-sm:
    fontFamily: 'Amazon Ember'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.38
  label-sm:
    fontFamily: 'Amazon Ember'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
  price-lg:
    fontFamily: 'Amazon Ember'
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.2
  price-sm:
    fontFamily: 'Amazon Ember'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.2
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  gutter: 18px
  margin: 18px
  container-max: 1600px
components:
  nav-bar:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.body-md}"
    height: 60px
    padding: "{spacing.sm}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
    height: 33px
  button-primary-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
    height: 33px
  input-search:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
    height: 40px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-deal:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  badge-deal:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-error}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  badge-choice:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  link:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  stock-label:
    textColor: "{colors.success}"
    typography: "{typography.body-md}"
  chip-filter:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
---

## Overview

Amazon is utilitarian retail maximalism: a dense, conversion-optimized grid where the product is the hero and every pixel argues for the click. The mood is busy but legible — white cards on a light gray canvas, a persistent dark global header (wrapped in a seasonal orange gradient during sales events), and a cascade of deals, badges, ratings, and prices. Trust is conveyed through information density: star ratings, "bought in past month" counters, delivery promises, and discount ribbons are part of the visual system, not afterthoughts.

Imagery is strictly photographic product shots on white or light-gray grounds inside softly rounded tiles. Nothing is illustrative or atmospheric; the brand voice is selection, price, and speed.

## Colors

- **Cart Yellow / Primary (#FFD814):** The famous "Add to Cart" pill — the single most important action on any page. Always paired with Squid Ink text.
- **Order Orange / Secondary (#FFA41C):** "Buy Now" one-click buttons and the rating-star orange. Sits one rung below yellow in the CTA hierarchy.
- **Deep Orange / Tertiary (#E67300):** Hover state for the yellow CTA; also the classic "Best Seller" ribbon orange.
- **Deal Red / Error (#CC0C39):** Discount percentages, "X% off" tiles, and coupon urgency — never used for decoration.
- **Stock Green / Success (#007600):** "In Stock" and delivery confirmations in the buy box.
- **Link Teal-Blue (#2162A1):** All text links — product titles, store links, "Join Prime" hooks.
- **Squid Ink (#0F1111):** Primary text; also the `badge-choice` ("Amazon's Choice") black chip.
- **Nav Ink / inverse-surface (#131921):** The global header and footer. Seasonally overlaid by an orange gradient (CSS vars `--nav-desktop-header-tbg #FF6200` → `--nav-desktop-header-bbg #FF9946`) — keep the ink base for non-campaign work.
- **Neutrals:** `#F0F2F2` page tint behind white cards; `#565959` secondary text; `#888C8C`/`#D5D9D9` borders.

## Typography

The system runs on **Amazon Ember** (with **Amazon Ember Modern Display** for the biggest card headlines); legacy templates fall back to Arial. Hierarchy is compact — nothing exceeds ~28px except hero campaign banners.

- **Headlines:** 21–24px bold (`headline-lg`, `headline-md`) for card titles and section headers.
- **Titles:** 15–17px bold for product titles and buy-box headings.
- **Body:** 14–15px (`body-md`, `body-lg`) — the default reading size for descriptions, delivery lines, and lists.
- **Labels:** 12–13px (`label-sm`, `body-sm`) gray metadata: ratings counts, "bought in past month", strikethrough list prices.
- **Price:** A distinctive 28px regular (`price-lg`) with a superscript cents fraction; the currency symbol and cents are visually subordinated.

## Layout

Fluid grid capped at `container-max` 1600px on a strict 4px base unit. The homepage and gateways are card carousels and deal tiles; search results are a 3-part split — left filter rail (~230px), results list, sponsored slots. The PDP splits into image gallery / detail column / fixed buy-box rail (~300px). Gutters run 16–18px; internal card padding 14–16px.

## Elevation & Depth

Shallow elevation only: cards float with a soft `rgba(15,17,17,0.15) 0 2px 5px` shadow; modals get `rgba(15,17,17,0.5) 0 0 14px`. Most surfaces rely on `#D5D9D9` hairline borders and the gray page tint for separation. Hover states darken fills rather than raise surfaces.

## Shapes

Two shape families: **pills** (`full`) for buy-box CTAs and search-scope buttons, and **soft rectangles** for everything else — cards at 12px (`lg`), filters and inputs at 4–8px (`sm`/`md`), thumbnail swatches at 4px with a 2px blue focus ring. The pill is the signature of the purchase funnel; keep it exclusive to buying actions.

## Motion & Micro-interaction

Nearly instant: the only observed transitions are `all 0.1s linear` on hover states and 0.1s ease visibility/opacity on flyouts (`state-change`, `overlay-enter`). Carousels translate via transform; nothing fades decoratively. Speed reads as responsiveness — do not add longer eases.

## Voice & Content Strategy

- **Tone:** Direct, transactional, benefit-first — "Get Fast, Free Shipping", "Free Returns", "In Stock".
- **Capitalization:** Title case for nav and headings; sentence case for body copy and delivery lines.
- **CTAs:** Verb-first and literal — "Add to cart", "Buy Now", "Join Prime", "Shop items". Outcome labels, never "Submit".
- **Urgency grammar:** Numeric urgency ("10:45:08" countdowns, "Only X left", "% off") rather than exclamation marks.
- **Social proof:** Counts in parentheses — "(48,812)" ratings, "100K+ bought in past month".

## Components

- **`nav-bar`:** Squid-ink bar with location, search, account, cart; seasonally reskinned with the orange gradient. Search is an attached input + scope dropdown + magnifier button group.
- **`button-primary` / `button-secondary`:** Pill CTAs — yellow Add-to-Cart, orange Buy-Now, ~33px tall, full-width inside the buy box. Hover shifts toward `tertiary` deep orange.
- **`input-search`:** White field, 4–8px radius, dark border on focus; attached to the nav search button.
- **`card` / `card-deal`:** 12px-radius white (or `#F0F2F2` deal) tiles carrying a bold headline, product thumbnails, and "X% off" red badges.
- **`badge-deal` / `badge-choice`:** Small flat chips — deal red for discounts, squid ink for "Amazon's Choice".
- **`chip-filter`:** White/grey outlined pills and square swatch buttons for variants and the filter rail.
- **`link`:** Teal-blue 14–15px; product titles render as multi-line links.
- **`stock-label`:** Green availability text inside the buy box.

## Do's and Don'ts

- Do keep exactly one yellow "Add to Cart" pill per buy box — yellow is sacred to the purchase action.
- Do pair deal red exclusively with real discounts; never tint headings or borders with it.
- Do use teal `#2162A1` for all links; the ink color is reserved for non-interactive text.
- Do keep cards at 12px radius and CTAs fully pill-shaped — do not mix the two radii families.
- Don't render the nav header in any color other than `#131921` (plus the sanctioned seasonal orange gradient).
- Don't add decorative illustration, gradients, or glass effects to product surfaces; photography is the only imagery.
- Do preserve density — filters, ratings, and delivery info stay visible rather than hidden behind progressive disclosure.
