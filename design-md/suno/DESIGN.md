---
version: "1.0.0"
name: Suno Design System
description: A dark, cinematic music-product identity built on a warm near-black canvas, an ivory-and-strawberry type/color contrast, and glowing pink-to-orange gradient auras. Neue Montreal carries the interface while Editorial New supplies an editorial serif for hero statements; pill controls and translucent frosted cards keep the surface language soft and spacious.
colors:
  primary: "#fd429c"
  on-primary: "#ffffff"
  primary-deep: "#de1677"
  secondary: "#ff6a00"
  on-secondary: "#000000"
  tertiary: "#8b6efe"
  surface: "#101012"
  on-surface: "#f7f4ef"
  surface-bright: "#fcfbf9"
  surface-container: "#1c1c1f"
  surface-container-high: "#252529"
  on-surface-variant: "#c2c2c1"
  on-surface-muted: "#a3a3a3"
  inverse-surface: "#f7f4ef"
  inverse-on-surface: "#101012"
  outline: "#ffffff1a"
  outline-variant: "#ffffff26"
  error: "#f8441b"
  on-error: "#ffffff"
typography:
  display:
    fontFamily: Editorial New
    fontSize: 96px
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: -0.03em
  headline-display:
    fontFamily: Neue Montreal
    fontSize: 140px
    fontWeight: 500
    lineHeight: 0.87
    letterSpacing: -0.026em
  headline-lg:
    fontFamily: Neue Montreal
    fontSize: 72px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.013em
  headline-md:
    fontFamily: Editorial New
    fontSize: 66px
    fontWeight: 300
    lineHeight: 1.07
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Neue Montreal Book
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.33
  title-md:
    fontFamily: Neue Montreal
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.56
  body-lg:
    fontFamily: Neue Montreal Book
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: -0.01em
  body-md:
    fontFamily: Neue Montreal Book
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.56
  body-sm:
    fontFamily: Neue Montreal
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Neue Montreal
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.6
  label-sm:
    fontFamily: Neue Montreal
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
  caption:
    fontFamily: Neue Montreal Book
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: -0.01em
rounded:
  sm: 4px
  md: 12px
  lg: 20px
  xl: 24px
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 80px
  section: 120px
  gutter: 24px
  margin: 20px
  container-max: 1240px
motion:
  state-change:
    duration: 150ms
    delay: 0ms
    timingFunction: cubic-bezier(0.4, 0, 0.2, 1)
  surface-enter:
    duration: 300ms
    delay: 0ms
    timingFunction: cubic-bezier(0.4, 0, 0.2, 1)
  transform:
    duration: 300ms
    delay: 0ms
    timingFunction: cubic-bezier(0.4, 0, 0.2, 1)
  shimmer:
    duration: 500ms
    delay: 0ms
    timingFunction: cubic-bezier(0, 0, 0.2, 1)
components:
  button-primary:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
    height: 40px
  button-primary-hover:
    backgroundColor: "{colors.surface-bright}"
    textColor: "{colors.inverse-on-surface}"
  button-secondary:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
    height: 40px
  button-tertiary:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
    height: 36px
  button-create:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
    height: 40px
  button-create-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs}"
    height: 36px
  card-plan:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  card-track:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  input-prompt:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
  chip-tag:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  link-muted:
    backgroundColor: transparent
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-sm}"
    padding: "{spacing.xs}"
---

## Overview

Suno's marketing surface is a dark-stage aesthetic: a warm near-black canvas (`#101012`, the brand's `dumbo-50`) lit by drifting amethyst-to-pumpkin gradient "auras" that recall stage lighting and album art. The mood is premium, playful, and unmistakably musical — hero prompts rotate through user-like requests ("Make a country song about Jess being late") so the product demos itself in the headline. Density is low, type is large, and album-artwork cards supply almost all of the imagery; the interface chrome stays out of the way so the art and the glowing gradients carry the personality.

The audience is creators first, professionals second — the copy and pricing ladder scale from "free everyday songs" to commercial rights without ever feeling corporate. Everything interactive is a pill; every surface is either the black stage, a frosted translucent panel, or an inverted ivory slab.

## Colors

The palette is a warm, near-black neutral ramp ("dumbo") topped by a single signature pink and its orange gradient partner, with jewel-tone accents reserved for plan tiers and functional states.

- **Strawberry (#fd429c, `primary`):** the brand accent — gradient fills for the "Create" CTA, active plan highlights, links and focus states. Deeper `#de1677` is the pressed/strong variant.
- **Pumpkin (#ff6a00, `secondary`):** second half of the signature aura and Create gradient; also marks Pro-tier accents and warm glows.
- **Stage Black (#101012, `surface`):** page background. Nearly black but warm; pure `#000000` appears only as overlay masks and video scrims.
- **Ivory (#f7f4ef, `on-surface` / `inverse-surface`):** primary text and — inverted — the fill of the top-level "Join Suno for free" pill. Never pure white for large fills; `#fcfbf9` is the brightest step.
- **Fog (`#ffffff0a` + hairlines `#ffffff1a`/`26`):** translucent white veils used for cards, chips, and ghost buttons instead of solid grays.
- **Dumbo mids (`#a3a3a3`, `#c2c2c1`):** secondary and tertiary text on dark.
- **Jewel accents:** amethyst `#8b6efe` (Premier/plan tints, aura primary), vermilion `#f8441b` (errors/alerts), grass `#4aab04` (success). These appear sparingly — they are plan-tier signals, not brand color.

## Typography

Two families split the voice. **Neue Montreal** (plus its "Book" cut for reading sizes) is the UI sans — geometric, medium-weight, tightly tracked. **Editorial New** is a high-fashion serif used only for the biggest statements: the 90–96px light headlines on marketing pages ("Music is who we are.") and 66px section titles.

- **Display:** Editorial New Light, 90–96px, ~1.08 line-height, -0.03em tracking — reserved for page-level hero statements.
- **Hero headline (sans):** Neue Montreal Medium at 72px/1.0 for interactive heroes; a 140px/0.87 display cut appears for single-word statements.
- **Section headlines:** 66px Editorial New or 24px Neue Montreal semibold depending on register — serif for emotion, sans for feature blocks.
- **Body:** Neue Montreal Book 18px/1.56 for paragraphs, 20px for lead copy; secondary text drops to `#a3a3a3`.
- **Labels/CTAs:** Neue Montreal Medium 15px — all buttons and nav items use this size; small metadata at 14px.

Tracking is negative only at display sizes; UI text stays at normal letterspacing.

## Layout

Centered, single-column storytelling on a ~1240px max container (`--max-width: 68.75rem` inside the app shell). Sections stack vertically with generous 80–120px rhythm; the homepage alternates full-bleed aura gradients with contained card rows.

- **Spacing scale:** 4px base; common stops 8, 16, 20, 24, 40, 64, 80, 120px. Section padding reaches `section` (120px) on marketing pages.
- **Nav:** floating top bar, ~64px row height, logo left, centered links, right-aligned "Log in" ghost pill + ivory primary pill.
- **Hero input:** the prompt composer is a wide (700px+) frosted panel with pill action cluster — the product UI is embedded directly in the marketing hero.
- **Cards:** track/album cards at ~200px square with 12px radius; pricing cards in a 4-up row at 24px radius.

## Elevation & Depth

Depth is **light, not shadow**. Cards and panels rely on translucent white fills (`#ffffff` at 4–10%) over the black stage plus a 1px white hairline (10–26%); the "Premier" plan card tints the same veil with pink. Real box-shadows are rare and reserved for floating elements (a soft `0 25px 50px -12px rgba(0,0,0,.25)` under menus). The signature depth cue is the **aura**: huge blurred amethyst/pumpkin radial gradients (`--aura-blur: 4rem`) behind sections, plus glow shadows like `0 0 56px -8px` in accent colors under CTAs.

## Shapes

A two-mode system: **pills and bubbles**. All buttons, chips, nav items, toggles, and icon buttons are fully rounded (`9999px`). Content surfaces use medium radii — 12px for track tiles and inputs, 20px for feature panels, 24px for pricing cards. Sharp corners are essentially absent; even the prompt composer and dropdown menus resolve to soft rectangles.

## Motion & Micro-interaction

Fast, standard-easing UI motion: color/background state changes run 75–150ms on `cubic-bezier(0.4, 0, 0.2, 1)`; transforms (hover lifts, menu slides) run 150–300ms on the same curve. Route transitions are tokenized (`--duration-exit`/`--duration-entrance` with translate offsets of .125–.25rem). Decorative motion is ambient only — slow aura drift, marquee rows of album art, shimmer/skeleton fills for loading, and a `hxc-shine-rotate` sweep on the premium Create button. Nothing bounces; motion stays smooth and musical rather than springy.

## Voice & Content Strategy

- **Tone of voice:** Warm, confident, and lightly playful — "Mind blowing song quality", "your next track is just a step away". Plain-spoken about capability, never technical about the model.
- **Capitalization:** Sentence case everywhere, including headlines ("Everything you need to make music your way", "Create everyday. Keep it all.").
- **Terminology:** songs are "tracks" or "songs", the model is "v6", the editor is "Suno Studio"; features get plain names — "Voices", "Stem separation", "Remix", "Custom models".
- **Button labels:** Outcome verbs — "Create", "Join Suno for free", "Get Pro", "Download on iPhone". The hero CTA is a single word inside the composer.
- **Demo-as-headline:** the h1 is literally a user prompt ("Make a jazz song about watering my plants"), rotating to show range — voice stays second-person and imaginative.
- **Plan naming:** Free / Pro / Premier / Platinum, each with a one-line benefit ("Turn any idea into a song. No cost").

## Components

- **Primary button (ivory pill):** `inverse-surface` fill, `inverse-on-surface` text, 40px tall, `label-md`, padding `8px 16px`. Used once per view for the top-level action ("Join Suno for free").
- **Create button (gradient pill):** same geometry as primary but filled with the strawberry→pumpkin gradient and a subtle rotating shine; reserved for the generation action itself.
- **Ghost/secondary buttons:** transparent or `fog` fill with ivory text; nav links are borderless text buttons with 6–8px padding.
- **Prompt composer:** the hero input — frosted dark panel (24px radius), 18px Book placeholder "Chat to make music", left-side "+" and "Advanced" chips, right-side die icon + gradient "Create" pill.
- **Pricing cards:** 24px-radius `fog` panels, 1px white hairline, plan name + price headline; Premier gets a pink-tinted veil and "Best Value" chip.
- **Track tiles:** square album-art cards (12px radius) with play-on-hover overlay, title + artist + play-count metadata beneath; "Remix" affordance on hover.
- **Nav:** 64px floating bar; dropdown triggers ("Products", "Resources") are pill buttons with chevrons; a circular pause control sits inside the hero for the ambient video.

## Do's and Don'ts

- Do keep the page background at `#101012` — never pure white or pure gray for Suno's dark stage.
- Do reserve the strawberry→pumpkin gradient for the single creation CTA; other actions stay ivory-on-black or ghost.
- Do set hero statements in Editorial New Light and UI copy in Neue Montreal — never swap the registers.
- Do use pill (`9999px`) geometry for every interactive element; rectangular inputs don't exist here.
- Don't introduce hard shadows — depth comes from translucent white fills, hairlines, and colored auras.
- Don't use the jewel accents (amethyst, vermilion, grass) decoratively; they signal plan tiers and system states only.
- Do keep button labels short outcome verbs ("Create", "Get Pro") at 15px medium.
- Don't crowd the layout — maintain the 80–120px section rhythm and let album art carry visual density.
- Do keep text ivory (`#f7f4ef`), not pure white; reserve `#fcfbf9`/`#ffffff` for the brightest accents.
- Don't mix light-mode surfaces in — the system is `color-scheme: dark` end to end.
- Do note the live "Create" button runs white 15px text on the strawberry gradient (~3.3:1) — keep the brand look, but never shrink that label further or reuse the pairing for long-form text.
