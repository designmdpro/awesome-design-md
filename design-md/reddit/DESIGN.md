---
version: "1.0.0"
name: Reddit Design System
description: Reddit's logged-out feed is a dense, neutral content surface — white canvas, cool-gray fills, system sans at 14px, pill buttons and pill search, rounded post cards, with Orangered reserved strictly for primary actions and the Snoo mark.
colors:
  primary: "#D93900"
  on-primary: "#FFFFFF"
  primary-container: "#FF8717"
  secondary: "#115BCA"
  tertiary: "#FF4500"
  surface: "#FFFFFF"
  surface-dim: "#EDEFF1"
  surface-container-low: "#E5EBEE"
  on-surface: "#333D42"
  on-surface-strong: "#181C1F"
  on-surface-variant: "#5C6C74"
  outline: "#0000001A"
  outline-variant: "#00000033"
typography:
  title-lg:
    fontFamily: -apple-system
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.33
  title-md:
    fontFamily: -apple-system
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
  body-md:
    fontFamily: -apple-system
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
  body-sm:
    fontFamily: -apple-system
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
  label-md:
    fontFamily: -apple-system
    fontSize: 14px
    fontWeight: 600
    lineHeight: 2.71
  label-sm:
    fontFamily: -apple-system
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
  label-caps:
    fontFamily: -apple-system
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0.05em
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 48px
  gutter: 16px
  container-max: 1125px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
    height: 40px
  button-secondary:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface-strong}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
    height: 40px
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-strong}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
    height: 40px
  input-search:
    backgroundColor: "{colors.surface-dim}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
    height: 48px
  card-post:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  card-sidebar:
    backgroundColor: "{colors.surface-dim}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  action-pill:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  link-inline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-md}"
---

## Overview

Reddit's signed-out homepage is a working feed, not a brochure: a white top bar with the wordmark and a centered pill search, a three-column layout (signup sidebar / post feed / trending communities) capped around 1125px, and post cards whose media fills the frame. The aesthetic is utilitarian density — 14px system text, cool-gray chips, hairline-free tonal separation — energized only by Orangered. The redesign keeps the brand surprisingly quiet: orange appears on the primary "Log in" button, the Snoo icon, vote arrows, and little else.

## Colors

- **Orangered `#D93900` (brand heritage `#FF4500`, accent `#FF8717`):** `#D93900` fills the primary CTA; `#FF4500` is the classic brand hue seen in the wordmark/Snoo; `#FF8717` shows up in illustrations and award/upvote accents. On white, reserve orange for actions and icons.
- **Action blue `#115BCA`:** inline links ("user agreement", "privacy policy", community links) — used only for text links, never fills.
- **Ink scale:** `#181C1F` strong text, `#333D42` body, `#5C6C74` meta/secondary — cool grays, not warm.
- **Surfaces:** `#FFFFFF` canvas and cards, `#EDEFF1` sidebar/search fills, `#E5EBEE` secondary buttons and action pills.
- **Overlay slate `#5D81A2`:** media scrims and image placeholders.
- **Borders:** translucent black at ~10% (`#0000001A`) where needed; most separation is tonal.

## Typography

A system sans stack (-apple-system/Segoe UI/Roboto) — Reddit's UI is deliberately unbranded in type so content (all kinds of it) stays neutral.

- **Post title:** 18px/600, line-height 1.33 — the largest text on the page besides the sidebar heading.
- **Body:** 14px/400 for descriptions and comments chrome.
- **Labels:** 14px/600 for buttons; 12px/600 for meta rows and action pills.
- **Caps micro:** 12px/600 uppercase with slight tracking for "POPULAR COMMUNITIES"-style headers.

## Layout

Three columns inside ~1125px: a ~300px left card (signup pitch + SSO buttons over a Snoo illustration), a flexible center feed of post cards, and a ~300px right rail (community list, footer links). The top bar is 56–57px white with the pill search centered. Spacing runs a 4px grid — 8px card gaps, 12–16px card padding, 16px gutters. Feed density is high: vote pill + title + media + action row per card.

## Elevation & Depth

Flat and tonal — the only shadow measured is a faint inset ring on avatars. Separation comes from gray fills (`#EDEFF1`) on white, rounded card corners, and media scrims. Dropdowns/menus may use light elevation but the feed itself never lifts.

## Shapes

Aggressively pill-shaped at the action layer: buttons, search, vote clusters, and action chips are all **full radius (999px)**. Post cards and media containers use **16px** (top-only radii appear on sticky contexts). Small elements — badges, sort menus — drop to **4–8px**. The mix is distinctive: pill actions floating over softly squared content.

## Motion & Micro-interaction

Minimal: layout transitions (sidebar expand/collapse, max-width) run 250ms on `cubic-bezier(0.65, 0, 0.35, 1)`; hovers are instant fill swaps to `#E5EBEE`/`#EDEFF1`. The carousel chevrons fade in on card hover. Motion is functional — no entrances, no decoration.

## Voice & Content Strategy

Community-first and dryly direct. The signup card headlines the pitch — "Subscribe to the most authentic communities on the Internet" (localized) — then offers literal SSO buttons: "Continue with Google / Apple / phone number / email". Post titles are verbatim user copy; meta rows are compact facts ("r/whatisit · 7 hr ago", "7,412,024 members"). Footer/legal is tiny gray text. No marketing adjectives anywhere — the feed is the argument.

## Components

### Buttons

`button-primary` — Orangered pill, 40px, white 14px/600 ("Log in"). `button-secondary` — `#E5EBEE` gray pill ("Sign up" top bar; "Join" on communities is a smaller black/strong variant). `button-outline` — white pill with ~10% ink border for SSO options ("Continue with Google").

### Search

`input-search` — centered 48px pill on `#EDEFF1`, magnifier glyph + "Search Reddit" placeholder; on dark media contexts it renders on translucent white.

### Post card

`card-post` — white 16px-radius row: subreddit avatar + "r/name · time" meta (12px), 18px/600 title, media block (image/video with rounded corners and optional carousel chevrons), then a pill action row — upvote cluster with count, comment count pill, share pill (`action-pill` on `#E5EBEE`, 12px/600).

### Sidebar cards

`card-sidebar` — `#EDEFF1` 16px panels: left signup card with stacked `button-outline` SSO pills; right "Popular communities" list with 32px community avatars, name + member count in 12px meta.

## Do's and Don'ts

- **Do** keep Orangered for primary actions and brand marks only — the feed stays neutral so user media provides the color.
- **Do** use pill (999px) for every action: buttons, vote clusters, chips, search.
- **Do** hold the type scale tight (12/14/18px); density is the brand.
- **Do** separate with tonal gray fills, not borders or shadows.
- **Don't** recolor links away from `#115BCA` or fill them — links are text-only.
- **Don't** add gradients, custom fonts, or decorative graphics to chrome; illustration lives in the signup card only.
- **Don't** put white text on `#FF8717` — accent orange takes dark text; `#D93900` takes white.
