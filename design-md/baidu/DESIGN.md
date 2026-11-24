---
version: "1.0.0"
name: Baidu Design System
description: China's dominant search engine — a minimalist white search homepage with the giant pill query box and blue-violet 百度一下 button, expanding into a dense tabbed SERP of hairline cards, gray chips, and hot-rank lists.
colors:
  primary: "#4E6EF2"
  on-primary: "#FFFFFF"
  secondary: "#F5F6FA"
  on-secondary: "#222222"
  tertiary: "#FF6600"
  on-tertiary: "#FFFFFF"
  hot: "#FE2D46"
  surface: "#FFFFFF"
  on-surface: "#222222"
  on-surface-variant: "#9195A3"
  surface-container: "#F5F6FA"
  outline: "#DBDCE0"
  inverse-surface: "#222222"
  inverse-on-surface: "#FFFFFF"
typography:
  headline-lg:
    fontFamily: PingFang SC
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
  headline-md:
    fontFamily: PingFang SC
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
  body-md:
    fontFamily: PingFang SC
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: PingFang SC
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: PingFang SC
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.77
  label-sm:
    fontFamily: PingFang SC
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  button-lg:
    fontFamily: PingFang SC
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1
  input-lg:
    fontFamily: PingFang SC
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 15px
  xxl: 24px
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 9px
  md: 12px
  lg: 19px
  xl: 24px
  xxl: 32px
  section: 60px
  gutter: 18px
  margin: 24px
  container-max: 1200px
motion:
  state-change:
    duration: 200ms
    delay: 0ms
    timingFunction: ease
  focus-ring:
    duration: 240ms
    delay: 0ms
    timingFunction: ease
  surface-enter:
    duration: 250ms
    delay: 0ms
    timingFunction: ease
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
    height: 29px
  button-search:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
    height: 44px
  input-search:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.input-lg}"
    rounded: "{rounded.xxl}"
    padding: "{spacing.lg}"
    height: 56px
  nav-tab:
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  nav-tab-active:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  chip-related:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  card-result:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  badge-hot:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  rank-hot:
    textColor: "{colors.hot}"
    typography: "{typography.body-md}"
  link:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  footer-link:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-sm}"
---

## Overview

Baidu is the anti-portal: the homepage is a single centered ritual — logo, one enormous pill search box with the attached gradient "百度一下" button, an AI-assistant line, and a compact numbered 百度热搜 hot-list — floating in acres of white. The SERP then densifies into a tabbed results column plus a right rail of related searches and the hot list, all hairline-bordered white cards and gray chips.

The personality is functional-civic with a playful edge (the bear-paw logo, orange 热 badges). Imagery is essentially absent; the brand lives in the blue-violet action color and the giant search pill.

## Colors

- **Baidu Blue-Violet / Primary (#4E6EF2):** Search submit, 登录 login pill, active tabs, links, and AI accents — rendered as a blue→violet gradient on the big button (shadow tints around `rgba(77,128,255,0.1–0.2)`).
- **Chip Gray / Secondary (#F5F6FA):** Related-search and suggestion chips, subtle fills.
- **Hot Orange / Tertiary (#FF6600):** Square 热 badges marking trending items.
- **Rank Red / Hot (#FE2D46):** The gradient red-orange of top-3 hot-search ranks (with `#F63051` siblings); lower ranks fall to gray.
- **Ink:** `#222222` titles and query text; `#9195A3` secondary, `#BBBBBB` footer/legal.
- **Outline (#DBDCE0):** Card and input hairlines — the search box glows blue on focus instead of relying on a strong border.

## Typography

Chinese UI set in **PingFang SC** over an Arial fallback (the measured stack is `"PingFang SC", Arial, sans-serif`; Latin-only fragments run Arial). Compact and list-oriented.

- **Headers:** `headline-lg` 20px/600 for answer cards ("design – 设计 常见释义"); `headline-md` 16px/600 for rail titles (百度热搜, 相关搜索).
- **Body:** `body-md` 14px result text; `body-sm` 13px descriptions.
- **Labels:** `label-md` 13px nav items at an airy 1.77 line-height; `label-sm` 12px meta/footer.
- **Action:** `button-lg` 17px/500 on the search button; `input-lg` 16px inside the query box.

## Layout

Homepage: dead-center column (~640px box) under the logo, hot-list constrained to the lower third. SERP: header bar (logo + compressed pill search) then a two-column split — results ≈2/3, related/hot rail ≈1/3 — inside ~1200px. Base rhythm ~4px; cards pad 19–24px; the homepage is vertically centered rather than top-aligned.

## Elevation & Depth

Flat white-on-white separated by `#DBDCE0` hairlines. The one expressive shadow is functional: a blue-tinted focus glow (`rgba(77,128,255,0.1) 0 10px 40px -8px`, `0 13px 18px -15px @0.2`) that blooms under the search box on focus — elevation as affordance, not decoration.

## Shapes

The pill rules: homepage search container ~24px (`xxl`), inner 百度一下 button ~15px (`xl`), login button full `999px`, chips at `md` 8px, and answer cards at `lg` 12px with square 4px (`sm`) 热 badges. Nothing is fully square except badges and thumbnails.

## Motion & Micro-interaction

Featherweight: 200ms `ease` color swaps on tabs/links (`state-change`), a 240ms `ease` box-shadow bloom on search focus (`focus-ring`), and 250ms `ease` opacity/transform reveals for suggestions and AI panels (`surface-enter`). The interface otherwise snaps — no looping or decorative animation.

## Voice & Content Strategy

- **Language:** All-Chinese; terse 2–4 character labels (新闻, 地图, 贴吧, 视频, 登录, 设置).
- **Signature label:** The search verb is branded — "百度一下" ("Baidu it"), never "搜索".
- **AI hook:** Assistant pitch as a sentence — "复杂问题就找文心助手，深入思考回答更优".
- **Meta:** Numbered hot-search entries keep headlines intact; rank color (red-orange→gray) signals heat, tiny 热 badge reinforces.
- **Legal:** Dense gray ICP/licensing footer in 12px — required boilerplate, visually muted.

## Components

- **`input-search`:** The hero control — white pill, 24px radius, 16px text, voice/image icons inside, with the attached gradient submit; blue focus glow on engage.
- **`button-search`:** 44px blue-violet gradient button (tokenized flat `primary`), 15px radius, 17px/500 white label — sits inside the pill's right cap.
- **`button-primary`:** 29px `#4E6EF2` 登录 pill in the header.
- **`nav-tab` / `nav-tab-active`:** 14px ink items (综合 文心 图片 资讯…); active turns Baidu Blue with a 2px underline.
- **`chip-related`:** `#F5F6FA` 8px-radius suggestion chips (相关搜索, 大家还在搜) with a small 🔍 glyph.
- **`card-result`:** White 12px-radius bordered answer/dictionary card with hairline outline.
- **`badge-hot`:** Tiny orange square 热 flag beside trending titles.
- **`rank-hot`:** Red-orange rank digits for positions 1–3 of the hot list.
- **`link` / `footer-link`:** Baidu-blue inline links; muted 12px `#BBB` legal links.

## Do's and Don'ts

- Do keep the homepage almost empty — logo, one pill, one button; resist adding chrome.
- Do render the primary action as the blue→violet gradient (flat `#4E6EF2` is the token approximation).
- Do keep hot ranks colored red→orange only for positions 1–3; gray for the rest.
- Do keep 热 badges small and square — they flag, they don't headline.
- Don't add shadows to cards; the only glow is the blue search-focus bloom.
- Don't use mid-grays for body text — `#222` on white is the reading standard; `#9195A3`/`#BBBBBB` are meta-only.
- Note: white on `#4E6EF2` measures ≈4.4:1 — the live brand pair; keep it for large 17px button labels but prefer darker text pairs for small print.
