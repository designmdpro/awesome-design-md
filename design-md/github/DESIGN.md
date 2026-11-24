---
version: "1.0.0"
name: GitHub Design System
description: GitHub's marketing homepage uses a light "paper" theme — green-tinted gray surfaces on white, Mona Sans typography, a signature green primary action, small 6px controls, and colorful per-product accents drawn from the brand color scale.
colors:
  primary: "#08872B"
  on-primary: "#FFFFFF"
  secondary: "#0377FF"
  surface: "#FFFFFF"
  surface-container: "#F2F5F3"
  surface-container-high: "#E4EBE6"
  on-surface: "#000000"
  on-surface-variant: "#58635B"
  outline: "#B6BFB8"
  outline-variant: "#D2D9D4"
  surface-inverse: "#000000"
  on-surface-inverse: "#FFFFFF"
  tertiary:
    purple: "#C898FD"
    pink: "#FF80D2"
    sky: "#5FB9FF"
    mint: "#0FBF3E"
typography:
  headline-display:
    fontFamily: Mona Sans
    fontSize: 80px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Mona Sans
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Mona Sans
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.01em
  title-md:
    fontFamily: Mona Sans
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
  body-lg:
    fontFamily: Mona Sans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: Mona Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Mona Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
  code-md:
    fontFamily: Mona Sans Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: Mona Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  xl: 24px
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  gutter: 24px
  margin: 32px
  container-max: 1280px
motion:
  state-change:
    duration: 200ms
    delay: 0ms
    timingFunction: ease
  surface-enter:
    duration: 200ms
    delay: 0ms
    timingFunction: cubic-bezier(0.16, 1, 0.3, 1)
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    height: 43px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    height: 43px
  button-dark:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.on-surface-inverse}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
    height: 28px
  input-email:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    height: 43px
  input-search:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
    height: 36px
  card-product:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  chip-pill:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
    height: 42px
  nav-link:
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.sm}"
    height: 28px
  badge-copilot:
    backgroundColor: "{colors.tertiary.purple}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  badge-promo:
    backgroundColor: "{colors.tertiary.pink}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  badge-info:
    backgroundColor: "{colors.tertiary.sky}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  badge-success:
    backgroundColor: "{colors.tertiary.mint}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
---

## Overview

GitHub's homepage speaks to working developers with quiet confidence: a paper-white canvas, green-tinted grays, and product UI screenshots doing the persuading. The hero pairs a huge medium-weight headline ("Software still starts with you") with an inline email capture — green button, no ornament. Sections below showcase Copilot and the platform inside framed app mockups on a subtle blue-gray grid, separated by a rainbow-gradient hairline. Mood: precise, modern, human — engineering warmth rather than corporate gloss.

## Colors

- **Sign-up Green (#08872B):** The primary action color — "Sign up for GitHub" and key CTAs. Deeper than the neon scale greens (#0FBF3E, #23EA57) reserved for decorative accents.
- **Link Blue (#0377FF):** Inline links and informational accents.
- **Paper Neutrals (#F2F5F3, #E4EBE6, #D2D9D4, #B6BFB8):** A custom gray scale shifted slightly green — fills, borders, and the grid-tinted section backgrounds. Never use pure neutral grays.
- **Ink & Slate (#000000, #58635B):** Headline black plus a green-gray secondary for body text, captions, and borders on quiet controls.
- **Product Accents:** Playful saturated tones — Copilot purple (#C898FD), pink (#FF80D2), sky (#5FB9FF), mint (#0FBF3E) — used in the rainbow divider, eyebrow banners, and per-product illustration, never for core UI chrome.
- **Black:** The "Sign up" nav button and the dark footer band invert to solid black fills with white text.

## Typography

**Mona Sans** everywhere — a variable grotesque run at medium weights, tighter tracking as size grows. Display headlines hit ~80px at weight 500 with -0.03em tracking; section headers 32–48px; body 16–20px; UI labels 14px/500. Code and CLI snippets switch to **Mona Sans Mono**. Headlines are sentence case, plain-spoken.

## Layout

A centered 1280px column; hero is full-width and minimal. Product sections present framed app screenshots on a faint engineering-grid backdrop — the grid signals "built by developers" without a single drop shadow. The footer inverts to near-black with a multi-column link grid. Section rhythm: 40–64px vertical gaps, 24px gutters.

## Elevation & Depth

Almost flat: depth comes from the gray-scale steps and 1px #B6BFB8/#D2D9D4 borders. Interactive lift is minimal — buttons keep the same footprint and shift shade on hover. The app mockups sit inside bordered frames on the grid, not on shadows.

## Shapes

Controls use GitHub's classic 6px radius; inputs and sign-up controls share it. Marketing pills (filter chips, eyebrow banners) go fully rounded; nav dropdowns and large cards reach 24px. The mix is deliberate: crisp 6px for anything functional, pills for anything decorative/filter-like.

## Motion & Micro-interaction

Uniform 200ms transitions — `ease` for background/border color, and the GitHub signature `cubic-bezier(0.16,1,0.3,1)` spring-out curve for elements that surface or expand. No looping decoration; the Mascot peeking over the hero fold is the only whimsy.

## Voice & Content Strategy

Plain, confident, developer-native. Headlines are short declaratives ("Software still starts with you", "Let Copilot handle the models"). CTAs name the outcome: "Sign up for GitHub", "Download GitHub Copilot app", "Start Enterprise free trial". Stats are numeric and concrete ("800M+", "98%"). Sentence case throughout; no exclamation points.

## Components

- **Primary button:** Green fill (#08872B), white 14px/500 label, 6px radius, ~43px height — sign-up flows only.
- **Secondary/outline button:** White fill with a #D2D9D4 1px border, ink label, same sizing — for download/alternate actions.
- **Dark button:** Black fill, white label — nav "Sign up" and footer emphasis.
- **Email input:** Green-gray fill (#F2F5F3), no visible border until focus, 43px tall, sits inline with the primary button.
- **Search field:** White, #B6BFB8 border, 6px radius, keyboard-hint "/" badge.
- **Pill chips:** Fully rounded (#F2F5F3 fill) for tab-like filters such as "Review requests".
- **Product cards:** White 8px-radius cards pairing a UI screenshot with a product wordmark row — each tinted by its accent color.
- **Nav links:** 14px labels, pill hover fill, dropdown menus with 24px-radius containers.

## Do's and Don'ts

- Do use the green-tinted gray scale — pure grays (#EEE, #999) break the paper feel.
- Do reserve #08872B for the one primary action per view; decorative greens live in artwork.
- Do keep functional controls at 6px radius and pills at fully rounded — don't pick values in between.
- Do pair headlines in Mona Sans at weight 500 — not bold — with tight negative tracking at display sizes.
- Don't add drop shadows to cards or inputs; use hairline borders on paper surfaces.
- Don't use accent purples/pinks for links, errors, or button fills.
- Don't write marketing adjectives — short declaratives and concrete numbers only.
- Do keep the dark nav/footer bands as solid black — no charcoal gradients.
