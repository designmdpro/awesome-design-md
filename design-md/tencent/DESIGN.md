---
version: "1.0.0"
name: Tencent Design System
description: Corporate identity of Tencent's official site — a polished, gallery-like system pairing Haas Grotesk Display Latin type with the proprietary Tencent W7 CJK face, Tencent Blue accents, and large rounded media cards floating on white.
colors:
  primary: "#0052D9"
  on-primary: "#FFFFFF"
  secondary: "#000000"
  surface: "#FFFFFF"
  surface-container: "#F7F7F7"
  inverse-surface: "#00225A"
  on-inverse: "#FFFFFF"
  on-surface: "#000000"
  on-surface-variant: "#64676A"
typography:
  headline-display:
    fontFamily: "Tencent W7, Tencent W7CN, PingFang SC, sans-serif"
    fontSize: 85px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.003em
  headline-lg:
    fontFamily: "Haas Grot Disp Web, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: 46px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.005em
  headline-md:
    fontFamily: "Haas Grot Disp Web, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: 30px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.005em
  title-md:
    fontFamily: "Haas Grot Disp Web, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.005em
  body-md:
    fontFamily: "Haas Grot Disp Web, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.005em
  label-md:
    fontFamily: "Haas Grot Disp Web, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0.005em
  caption-sm:
    fontFamily: "Haas Grot Disp Web, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: 4px
  lg: 10px
  full: 9999px
spacing:
  xs: 8px
  sm: 10px
  md: 16px
  lg: 20px
  xl: 44px
  xxl: 92px
  container-max: 1200px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
  nav-link:
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  card-media:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.on-inverse}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
  link-arrow:
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
  caption:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.caption-sm}"
---

## Overview

Tencent's corporate site is calm, editorial, and gallery-scaled. The homepage is a sequence of large rounded-rectangle media panels — video and photography inset with a consistent ~10px radius on a pure white canvas — each carrying one enormous white Chinese statement set in the proprietary **Tencent W7** face ("以科技创新改变未来"). Latin display type uses **Haas Grotesk Display**. Color is nearly monochrome — black text, white field, mid-gray meta — with **Tencent Blue `#0052D9`** reserved for the logo, language switcher underline, links, and pill CTAs. A deep navy `#00225A` appears on darker showcase bands. The mood: a technology giant presented with museum-like restraint.

## Colors

- **Tencent Blue / Primary (#0052D9):** Brand links, logo, active language indicator, and pill CTAs. Saturated but disciplined — used at small doses.
- **Ink / Secondary (#000000):** True-black display and body text; the system's default voice.
- **Surface (#FFFFFF) / Container (#F7F7F7):** Pure white canvas; light gray for quiet content bands.
- **Inverse Surface (#00225A):** Deep navy for dark showcase sections with white text.
- **On-Surface Variant (#64676A):** Cool gray for meta text, secondary descriptions, and captions.

## Typography

Two proprietary voices share the page: **Tencent W7 / W7CN (700)** for giant Chinese brand statements, and **Haas Grot Disp Web (500–600)** for Latin display, headings, and all UI text.

- **Display:** Hero statements at 85px/700 in Tencent W7, white over media, with hairline +0.25px tracking.
- **Headlines:** Haas Grot at 46px/600 for section titles; 24–30px for card headings.
- **Body & labels:** 16px regular / 16px semibold; consistent +0.25px letter spacing across levels.
- **Meta:** 14px regular gray.

## Layout

A ~1200px centered content column inside generous page margins. Hero media panels are inset with uniform white gutters, not full-bleed — the rounded card floats in the canvas. Sections stack at a stately 44–92px vertical rhythm; inner padding runs 16–44px on a 4/8px base grid.

## Elevation & Depth

Flat — no shadows measured. Depth is created by media itself: photography and video inside 10px-radius panels, dark navy bands, and tonal alternation between white and `#F7F7F7` sections.

## Shapes

The signature shape is the **10px-radius media card** — every hero, feature image, and video sits inside it. Buttons and the language switcher are full pills (9999px); small utility elements take 4px. Overall geometry is soft-rectangular and consistent.

## Motion & Micro-interaction

Motion is quick and courteous: interactive feedback (color, background, border) at **150ms ease-in-out**; section reveals and hovers at **300–400ms ease/ease-out** on `all` or transform/opacity. Video heroes autoplay muted; scroll reveals fade content upward. Keep durations under 400ms for UI, reserve longer only for media crossfades.

## Voice & Content Strategy

Bilingual corporate voice — short declarative Chinese statements ("以科技创新改变未来", "用户为本，科技向善") with an English path. Navigation is institutional: 关于我们, 我们的创新, 我们的行动, 投资者, 新闻中心, 加入我们. Arrow-suffixed links ("关于我们 →") are the standard wayfinding device. Tone: benevolent scale — technology framed through people and society.

## Components

- **Nav:** White bar, blue Tencent wordmark left, black 16px links, trilingual switcher （简/EN/繁） with blue underline on the active locale.
- **Hero media card:** Full-width 10px-radius panel containing video/photography, overlaid 85px white headline, and a white arrow link.
- **Pill buttons:** Blue primary or white/ink ghost pills for inline CTAs.
- **News/content cards:** Rounded media thumbnail + ink title + gray meta caption.
- **Arrow link:** Text label + "→" glyph, used for every "learn more" affordance.

## Do's and Don'ts

- Do keep every media element inside the 10px-radius card; never bleed imagery to the viewport edge.
- Do set Chinese display copy in Tencent W7 and Latin in Haas Grot Disp.
- Do reserve Tencent Blue for logo, links, locale indicator, and pill CTAs only.
- Do alternate white and `#F7F7F7` sections; use `#00225A` sparingly for dark showcases.
- Do write concise declarative headlines with an arrow-link CTA beneath.
- Don't add drop shadows — separation is tonal.
- Don't use saturated secondary hues; the palette is near-monochrome plus one blue.
- Don't reduce letter spacing; the +0.25px tracking is part of the editorial feel.
- Don't use radii above ~10px on media — panels should read as consistent cards, not blobs.
