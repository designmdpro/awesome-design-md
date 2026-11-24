---
version: "1.0.0"
name: Google Search Design System
description: A radically minimalist, utility-first design language built around a single ritual — the search box. Vast white space, a quad-color brand mark, and pill-shaped interactive elements sit on a nearly flat canvas where depth comes from hairline borders and one soft shadow rather than heavy elevation. Google's Material 3 blues drive all action, and the typography pairs Google Sans headlines with quiet, readable body text in Google Sans Text and Roboto.
colors:
  primary: "#0b57d0"
  on-primary: "#ffffff"
  secondary: "#1a73e8"
  on-secondary: "#ffffff"
  secondary-container: "#d3e3fd"
  tertiary: "#fbbc04"
  link: "#1967d2"
  link-legacy: "#1a0dab"
  neutral: "#5f6368"
  on-surface-variant: "#3c4043"
  outline: "#dadce0"
  light:
    surface: "#ffffff"
    on-surface: "#202124"
    on-surface-strong: "#16171a"
    surface-container: "#f8f9fa"
    surface-container-low: "#f1f3f4"
    surface-tint-yellow: "#fef7e0"
    surface-tint-blue: "#e8f0fe"
  dark:
    surface: "#22242a"
    on-surface: "#e8eaf2"
    surface-container: "#363840"
    primary: "#c2e7ff"
    on-primary: "#001d35"
    surface-button: "#4d5156"
    on-surface-button: "#e8eaed"
typography:
  display:
    fontFamily: Google Sans
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.17
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Google Sans
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.22
    letterSpacing: -0.007em
  headline-md:
    fontFamily: Google Sans
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.29
  title-md:
    fontFamily: Google Sans Text
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
  body-lg:
    fontFamily: Google Sans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
  body-md:
    fontFamily: Google Sans Text
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.006em
  body-sm:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
  label-lg:
    fontFamily: Google Sans
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.03em
  label-md:
    fontFamily: Google Sans Text
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
  label-sm:
    fontFamily: Arial
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.85
  eyebrow:
    fontFamily: Google Sans Text
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.71
    letterSpacing: 0.036em
  input-search:
    fontFamily: Google Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.38
  display-sm:
    fontFamily: Google Sans
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.29
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 26px
  xl: 34px
  xxl: 48px
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  3xl: 60px
  4xl: 80px
  5xl: 120px
  gutter: 24px
  margin: 24px
  container-max: 1296px
  search-max: 688px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 10px
    height: 40px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-cta:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 50px
  button-secondary:
    backgroundColor: "{colors.light.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 50px
  button-quiet:
    backgroundColor: "{colors.light.surface-container}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 16px
    height: 36px
  button-quiet-hover:
    backgroundColor: "{colors.light.surface-container}"
    textColor: "{colors.light.on-surface}"
  search-box:
    backgroundColor: "{colors.light.surface}"
    textColor: "{colors.light.on-surface-strong}"
    typography: "{typography.input-search}"
    rounded: "{rounded.lg}"
    height: 52px
    width: "{spacing.search-max}"
  search-box-dark:
    backgroundColor: "{colors.dark.surface-container}"
    textColor: "{colors.dark.on-surface}"
    typography: "{typography.input-search}"
    rounded: "{rounded.lg}"
    height: 52px
  card:
    backgroundColor: "{colors.light.surface}"
    textColor: "{colors.light.on-surface}"
    typography: "{typography.title-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  chip-assist:
    backgroundColor: "{colors.light.surface}"
    textColor: "{colors.light.on-surface-strong}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
    height: 36px
  nav-link:
    backgroundColor: "{colors.light.surface}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: 12px
    height: 48px
  nav-link-active:
    backgroundColor: "{colors.light.surface}"
    textColor: "{colors.light.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: 12px
  link-default:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  link-legacy:
    textColor: "{colors.link-legacy}"
    typography: "{typography.body-sm}"
  eyebrow-label:
    textColor: "{colors.light.on-surface}"
    typography: "{typography.eyebrow}"
  footer:
    backgroundColor: "{colors.light.surface-container}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-sm}"
    padding: "{spacing.lg}"
  banner-tint-yellow:
    backgroundColor: "{colors.light.surface-tint-yellow}"
    textColor: "{colors.light.on-surface}"
    typography: "{typography.headline-md}"
    padding: "{spacing.4xl}"
  banner-tint-blue:
    backgroundColor: "{colors.light.surface-tint-blue}"
    textColor: "{colors.light.on-surface}"
    typography: "{typography.headline-md}"
    padding: "{spacing.4xl}"
  button-primary-dark:
    backgroundColor: "{colors.dark.primary}"
    textColor: "{colors.dark.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 10px
    height: 40px
  button-quiet-dark:
    backgroundColor: "{colors.dark.surface-button}"
    textColor: "{colors.dark.on-surface-button}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 16px
    height: 36px
---

## Overview

Google's design language is the most disciplined exercise in restraint on the web: a brand so confident it can afford a nearly empty page. The homepage is a ritual, not a layout — a quad-color wordmark, one pill-shaped search box, two quiet buttons, and hundreds of pixels of white space. Everything exists to serve the single action of searching, and nothing competes with it.

The personality is utilitarian, instant, and quietly friendly. Color is spent almost exclusively on the brand mark and on action: the Material 3 primary blue (`#0b57d0`, exposed in the site's own CSS as `--gm3-sys-color-primary`) fills the Sign-in pill, while the classic "Google Blue" (`#1a73e8`) drives calls-to-action and "Learn more" links on marketing surfaces. Depth is minimal — hairline `#dadce0` borders and a single soft shadow on the search box do all the work that drop shadows and gradients do elsewhere. On content pages (like "How Search works"), the system relaxes into Google's "glue" marketing framework: generous Google Sans headlines, flat white cards with 8px corners, pastel full-bleed banners, and flat illustration in soft blues. Full dark-mode support exists on google.com itself, where the canvas drops to `#22242a` and primary actions invert to light blue `#c2e7ff`.

## Colors

The palette is a white canvas, a family of blues for action, and grays for everything else. The quad-color brand mark (blue `#4285f4`, red, yellow `#fbbc04`, green) appears only as the logo image — those hues never leak into the UI chrome.

- **Primary — Google Action Blue (`#0b57d0`):** The Material 3 primary. Fills the Sign-in button and the highest-emphasis product action. In dark mode it inverts to Sky Blue (`#c2e7ff`) with dark navy text (`#001d35`).
- **Secondary — Google Blue (`#1a73e8`):** The classic CTA blue used on marketing surfaces ("Discover our approach", "Take a look") and for "Learn more" text buttons.
- **Link Blue (`#1967d2`):** Text links inside content pages. The legacy result-link blue (`#1a0dab`) still appears on google.com chrome.
- **Neutral (`#5f6368`):** Secondary text, icons, nav links, and the border on outlined buttons.
- **On-surface (`#202124`, strong `#16171a`):** Near-black text. The product chrome uses the slightly warmer `#16171a`; marketing pages use `#202124`.
- **Surface container (`#f8f9fa`):** The quiet gray of secondary buttons, the footer, and hover fills. Never used for large regions on the homepage — the canvas stays pure white.
- **Hairline (`#dadce0`):** The only border color that matters — search box, footer columns, expansion panels.
- **Tints:** Section banners break the white with pastel washes — Custard (`#fef7e0`, the "Search Through Time" spotlight) and Ice Blue (`#e8f0fe`, the safety banner), with `#d3e3fd` as a deeper blue container.

## Typography

Three families, each with a strict job. **Google Sans** (fallback Arial/Helvetica) owns display type, buttons, nav, and the search input. **Google Sans Text** owns body copy, card titles, and compact labels. **Roboto** (with Arial for the smallest footer text) survives in the google.com utility chrome.

- **Display:** Google Sans 48px/56 at weight 400 with −0.5px tracking ("Explore the world of Google Search"). Collapses to 28/36 below the 600px breakpoint. Headlines are never bold — size and space do the work.
- **Headlines:** 36/44 (−0.25px tracking) for feature sections, 28/36 for smaller heads, all weight 400.
- **Body:** Google Sans Text 16/24 with a faint 0.1px tracking; marketing subheads step up to Google Sans 20/28.
- **Labels:** Buttons and nav use Google Sans 16/24 medium with +0.5px tracking; the compact Sign-in label is Google Sans Text 14/18 medium.
- **Eyebrow:** Google Sans Text 14/24 medium, +0.5px tracking, always uppercase ("FEATURED TOPICS", "SPOTLIGHT").
- **Utility chrome:** Roboto 14px for top-nav and footer links on google.com; Arial 13px for the smallest footer text.

## Layout

Two layout philosophies coexist. The homepage is an unconstrained centered canvas: the search column is capped at 688px and everything else floats in whitespace — there is no grid to find. Marketing pages switch to a fixed-max-width grid: a 1296px container, an 8px spacing base with 24px as the dominant rhythm (paddings, gaps, card internals), and section breathing room of 60–120px. Cards align in 3–4 column rows with 24px gutters; the marketing framework's breakpoints are 600px, 1024px, and 1440px.

## Elevation & Depth

Near-flat. The interface is drawn with hairlines and tone, not shadow. The search box is the only routinely elevated element — a 1px `#dadce0` border plus a soft `rgba(31,31,31,0.08) 0 3px 10px` shadow that lifts it as the page's focal point. Cards are completely flat: white on white, no border, no shadow, separated by spacing and an image well. Hover elevation is reserved for primary actions — the Sign-in pill gains the Material level-1 shadow (`rgba(0,0,0,0.3) 0 1px 2px` + `rgba(0,0,0,0.15) 0 1px 3px 1px`), and quiet buttons pick up a 1px shadow and `#dadce0` border.

## Shapes

Pills are the signature. Every committed action is fully rounded: Sign-in (100px radius), marketing CTAs (48px), the AI Mode chip, and the 26px search box — softened from the older 24px. Content containment is much squarer: cards and the "Google Search"/"I'm Feeling Lucky" buttons use 8px, and small utility elements 4px. The rule is simple: the rounder the shape, the more interactive the element.

## Motion & Micro-interaction

Quick and invisible. State changes (hover, focus, color and background shifts) run at **200ms `ease`** — the most common transition on the site. Surfaces entering the screen (carousels, panels) slow to **300–400ms** with a decelerating `cubic-bezier(0.2, 0, 0, 1)` curve; exits and box-shadow fades sit around **250ms `ease`**. Nothing loops, nothing bounces, and the search box never animates for decoration.

## Voice & Content Strategy

- **Tone:** Austere and utilitarian on the product surface; plain-spoken and educational on marketing pages. No exclamation marks, no hype.
- **Capitalization:** Sentence case everywhere — "Google Search", "Sign in", "Search by voice", "Learn more". Eyebrow labels are the only uppercase text.
- **Button grammar:** Short verb phrases or product names — "Google Search", "I'm Feeling Lucky", "Discover our approach", "Take a look", "Watch video". Persistent text link is literally "Learn more", repeated on every card.
- **Terminology:** "Search" capitalized as a product name ("How Search works", "Google Search continues to improve results").
- **Microcopy:** Functional and terse — placeholder-free search input, icon buttons labeled by accessibility name ("Search by voice", "Search by image"), footer links as bare nouns ("Privacy", "Terms", "Settings").

## Components

- **Sign-in / primary button** (`button-primary`): pill, `#0b57d0` fill, white Google Sans Text 14/18 medium label, 40px min height, 10px 12px padding. Hover adds the level-1 shadow described in Elevation; dark mode swaps to `#c2e7ff`/`#001d35`.
- **Marketing CTA** (`button-cta`): same pill language at a larger scale — `#1a73e8` fill, white Google Sans 16/24 medium label with +0.5px tracking, 12px vertical / 24px horizontal padding, ~50px tall.
- **Outlined button** (`button-secondary`): white fill, `#1a73e8` label, 1px `#5f6368` border, same pill metrics as the CTA ("Dive into our history", "Watch video").
- **Quiet button** (`button-quiet`): `#f8f9fa` fill with matching border, `#3c4043` Google Sans 14px label, 8px radius, 0/16px padding, 36px tall. Hover darkens text to `#202124`, adds a `#dadce0` border and a 1px shadow. In dark mode: `#4d5156` fill, `#303134` border, `#e8eaed` text.
- **Search box** (`search-box`): the hero component — white pill, 1px `#dadce0` border, 26px radius, 52px tall, capped at 688px wide, with the soft shadow above. Inside: leading "+" affordance, Google Sans 16/22 input, and trailing voice/lens icon buttons plus a white "AI Mode" chip (100px radius, hairline border). Dark mode: `#363840` fill, `#4d5156` border, shadow removed.
- **Card** (`card`): flat white, 8px radius, no border, no shadow. Anatomy: Google Sans Text 16/24 medium title, optional 16/24 body in `#5f6368`, and a blue "Learn more" text action; media sits in a flush right or top well.
- **Nav**: text links only — Google Sans 16/24 medium, `#5f6368`; the active tab turns `#202124` with a small blue underline indicator. On google.com, the nav shrinks to Roboto 14px links plus an icon-only apps-grid button.
- **Eyebrow + section header**: uppercase eyebrow label above a 400-weight Google Sans headline, centered or left-aligned, followed by a pill CTA.
- **Tint banner**: full-bleed `#fef7e0` or `#e8f0fe` section with an inline illustration, headline, and one button — the only place large areas of non-white color appear.
- **Footer**: `#f8f9fa` band on both product and marketing pages; bare-noun links in Arial 13px (product) or Google Sans Text (marketing), separated by hairline `#dadce0` column rules on mobile.

## Do's and Don'ts

- Do keep the canvas pure white (`#ffffff`); gray is for chrome (footer, quiet buttons), never page backgrounds.
- Do reserve filled blue for one dominant action per view — the Sign-in pill is the only saturated element on the homepage.
- Do make every committed action a pill (search, buttons, chips); keep cards and quiet buttons at 8px.
- Do use hairline `#dadce0` borders instead of shadows for separation; only the search box and hovered primary buttons may cast a shadow.
- Do write labels in sentence case and keep them short enough to never wrap.
- Don't use bold headlines — Google Sans headings stay at weight 400; hierarchy comes from size.
- Don't add brand red/yellow/green to UI chrome; the quad-color palette lives only in the logo.
- Don't underline links by default or color body text blue — links are `#1967d2` and never share text color with headings.
- Don't animate decoratively or exceed ~400ms; state changes should feel instant at 200ms ease.
- Don't fill dark mode with pure black — the dark canvas is `#22242a` and primary actions invert to light blue `#c2e7ff`.
