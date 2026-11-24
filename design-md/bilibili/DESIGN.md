---
version: "1.0.0"
name: bilibili Design System
description: A dense, playful Chinese ACG video-feed identity — bilibili pink (#FF6699) and sky blue (#00AEEC) accents on a soft grey canvas, PingFang SC type, 6px-rounded thumbnails, and pill chips everywhere. The brand color lives in small high-energy doses, never large fills.
colors:
  primary: "#FF6699"
  on-primary: "#FFFFFF"
  secondary: "#00AEEC"
  on-secondary: "#FFFFFF"
  tertiary: "#FF7F24"
  tertiary-container: "#FFF0E3"
  surface: "#FFFFFF"
  on-surface: "#18191C"
  on-surface-variant: "#61666D"
  on-surface-muted: "#9499A0"
  surface-dim: "#F1F2F3"
  surface-container-low: "#F6F7F8"
  surface-placeholder: "#E7E7E7"
  outline: "#E3E5E7"
  outline-variant: "#F1F2F3"
typography:
  title-lg:
    fontFamily: PingFang SC
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
  title-md:
    fontFamily: PingFang SC
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.47
  title-sm:
    fontFamily: PingFang SC
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.43
  body-md:
    fontFamily: PingFang SC
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: PingFang SC
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
  label-md:
    fontFamily: PingFang SC
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
  label-sm:
    fontFamily: PingFang SC
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
rounded:
  sm: 2px
  md: 4px
  lg: 6px
  xl: 8px
  full: 9999px
spacing:
  base: 4px
  xs: 2px
  sm: 8px
  md: 10px
  lg: 16px
  xl: 24px
  xxl: 40px
  gutter: 20px
  margin: 24px
  container-max: 2560px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm}"
  chip-channel:
    backgroundColor: "{colors.surface-dim}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  card-video:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: "0px"
  card-video-thumb:
    backgroundColor: "{colors.surface-placeholder}"
    rounded: "{rounded.lg}"
    padding: "0px"
  tag-metric:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.tertiary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  input-search:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.sm}"
  nav-item:
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
    padding: "{spacing.sm}"
  meta-text:
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-sm}"
    padding: "0px"
---

## Overview

bilibili is a dense creator-video feed — the homepage is a wall of thumbnail cards under a decorative illustrated banner, with channel pills, a hero carousel, and a login nudge card. The brand personality is youthful, playful, and community-driven (ACG culture), but the UI itself is a disciplined neutral grid so the riotous user-generated thumbnails carry the color.

Two brand accents do the work: **bilibili pink (#FF6699)** for the "投稿" upload button and logo moments, **sky blue (#00AEEC)** for the login action and interactive links. Everything else is cool light grey. Corners are small (2–8px), spacing is tight, and the feed is information-dense by design — this is a browse-and-snack surface, not a reading experience.

## Colors

- **bilibili Pink (#FF6699):** The signature accent — upload button, logo details, active/hover accents. Used in small doses only; never as a background fill.
- **Sky Blue (#00AEEC):** The secondary action color — the circular "登录" login button and inline interactive links.
- **Hot Orange (#FF7F24):** Content-status accent — "百万播放" (million-views) tags and trending badges, always as small text+border chips on white or on #FFF0E3 tint.
- **Page Grey (#F1F2F3):** Channel pills, search field tint, and content placeholders — the quiet workhorse surface.
- **White (#FFFFFF):** Cards, header content, and popover surfaces.
- **Ink (#18191C) / Greys (#61666D, #9499A0):** A three-step text ramp — titles, secondary copy, and view/date metadata.
- **Hairlines (#E3E5E7 / #F1F2F3):** Borders are barely-there greys; sections separate by whitespace and tonal steps, not lines.

## Typography

One family — **PingFang SC** (HarmonyOS, Helvetica Neue, Microsoft YaHei fallbacks) — at small, dense sizes. There is no display type; the biggest text on the page is ~16px navigation.

- **16px/400:** Primary nav items and section labels.
- **15px/400:** Video card titles, wrapped to two lines max (lh ~22px).
- **14px/600:** Popular-list item titles — the only semibold in the feed, reserved for ranked content.
- **14px/400:** Nav links, buttons, input text (lh ~22px).
- **13px/400:** Video meta (uploader, date) in #61666D.
- **12px/400:** Tags, badges, and dense list metadata in #9499A0.
- Weights stay at 400 almost everywhere; hierarchy comes from size and the grey ramp, not bold.

## Layout

A fluid, center-capped feed layout: full-width illustrated header banner (anime key art, seasonal) with the nav and a pill search bar floating on it, then a channel-pill row, a hero carousel + video card grid, and infinite card columns below.

- 4px base grid; common steps are 4/8/10/16/24.
- Video cards sit on a ~20px gutter grid; cards themselves are borderless white with 6px-radius thumbnails.
- The popular page swaps the grid for two-column ranked rows — thumbnail left, title/meta/tag right.
- Density is high by intent: dozens of titles above the fold, minimal empty space inside rows.

## Elevation & Depth

Essentially flat. The only shadow measured is an ultra-soft `0 0 40px rgba(0,0,0,.03)` ambient blur on floating cards/popovers — invisible at a glance. Separation is done with tonal steps (white card → #F1F2F3 pill → #E3E5E7 hairline) and by image masks on thumbnails, not by elevation.

## Shapes

- **2px:** Tiny metric tags and badges — almost square.
- **4px:** Channel pills and small chips.
- **6px:** The dominant radius — video thumbnails and cards everywhere.
- **8px:** Larger buttons ("换一换" refresh, search bar ends) and carousel corners.
- **50%/full:** The circular blue login button, category-tab icon discs, and avatar crops.

The rule: content surfaces (thumbs, cards) get 6–8px; action chips get 4px; tags stay nearly square at 2px. Nothing exceeds 8px except true circles.

## Motion & Micro-interaction

Quick, subtle, and mostly color-only — the page animates like an app, not a movie.

- **~200ms linear:** the dominant pattern — text and icon color flips on hover (nav items, links).
- **200–300ms ease:** background-color fills on pills/buttons, and all-property transitions on cards.
- Thumbnails may reveal a progress preview on hover; carousel slides crossfade. Nothing bounces, nothing springs.

## Voice & Content Strategy

- **Tone:** Casual, fandom-fluent Chinese — headers and tabs read like community shorthand ("综合热门", "每周必看", "入站必刷", "换一换").
- **Capitalization:** N/A (Chinese UI); Latin fragments like "bilibili" stay lowercase.
- **Button grammar:** Extremely terse — 2–4 character verbs ("投稿" upload, "登录" login, "换一换" refresh) or bare nouns.
- **Navigation voice:** Single-word channel names; copy is scannable label text, not sentences.
- **Metric language:** Compact counters with 万 units (e.g. "45.2万" views), duration badges on thumbnails, and status tags ("百万播放") attached to ranked items.

## Components

- **Primary button (投稿/upload):** bilibili pink #FF6699, white label, ~6px radius — the most saturated element in the header.
- **Secondary action (登录/login):** sky blue #00AEEC circle button with white glyph — a disc, not a bar.
- **Channel pill:** #F1F2F3 fill, #18191C 14px text, 4px radius — a single-row tag filter strip under the banner.
- **Search bar:** White/translucent pill on the banner, ~8px radius, grey placeholder text, trailing search-glyph button.
- **Video card:** Borderless; 6px-radius thumbnail with duration + view/danmaku badges, 15px two-line title in #18191C, 13px grey meta row.
- **Metric tag:** 2px-radius chip, #FF7F24 text + border (or #FF7F24 on #FFF0E3), 12px label — flags "百万播放"/"5万点赞" style milestones on ranked items.
- **Category tab:** Colored circular icon disc (pink/orange/blue per category) + 15px label + active underline.
- **Carousel:** Rounded hero slides with gradient caption mask and dot indicators.
- **Login nudge:** Sky-blue floating card with mascot art and a white CTA — the only saturated surface panel.

## Do's and Don'ts

- Do keep the canvas neutral — pink and blue are accents (buttons, links, logo), never section fills.
- Don't bold-feed titles; 400 weight with the ink/grey ramp is the whole hierarchy. Reserve 600 for ranked-list titles only.
- Do cap video titles at two lines and let thumbnails carry the page — cards have no borders or shadows.
- Don't use radii above 8px on rectangles; the system tops out at small rounding plus true circles.
- Do keep tags tiny and near-square (2px radius, 12px text, orange) — they are metadata chips, not buttons.
- Don't add drop shadows; lift surfaces with #F1F2F3 tonal steps and whitespace instead.
- Do keep motion to 200ms color/background shifts — the feed should feel instant.
- White labels on #FF6699 and #00AEEC sit below 4.5:1 — that is the shipped brand treatment for compact buttons; keep those labels short (2–4 glyphs) and never use the accent fills for body text.
- Do let the header banner be illustrative and seasonal — it's brand art, not a UI surface; nav text over it stays white.
- Don't introduce a third accent hue; pink + blue + the orange metric tag is the entire chromatic vocabulary.
