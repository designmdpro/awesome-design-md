---
version: "1.0.0"
name: Netlify Design System
description: A celebratory "apps come to life" aesthetic — warm paper off-whites under saturated rainbow-gradient collage illustrations, heavy tight-tracked Systemia headlines, IBM Plex Mono uppercase eyebrows, electric cyan pill CTAs with ink text, and big rounded cards ringed by warm hairlines.
colors:
  primary: "#01D4E5"
  on-primary: "#131619"
  secondary: "#065EFF"
  on-secondary: "#FFFFFF"
  success: "#3FB66B"
  success-soft: "#6DC788"
  accent-peach: "#FFBC8A"
  accent-lavender: "#ECEAFF"
  surface: "#FFFFFF"
  surface-paper: "#F7F6F4"
  surface-sunken: "#F0EEEA"
  surface-inverse: "#131619"
  surface-inverse-warm: "#56534C"
  on-surface: "#131619"
  on-surface-variant: "#56534C"
  on-surface-muted: "#736F67"
  on-surface-inverse: "#F4F7F9"
  outline: "#E7E5E0"
typography:
  headline-display:
    fontFamily: Systemia
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Systemia
    fontSize: 60px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Systemia
    fontSize: 45px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.04em
  headline-sm:
    fontFamily: Systemia
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.02em
  title-md:
    fontFamily: Systemia
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.02em
  quote:
    fontFamily: Systemia
    fontSize: 42px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.04em
  body-md:
    fontFamily: Systemia
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Systemia
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.35
  label-md:
    fontFamily: Systemia
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.3
  label-sm:
    fontFamily: Systemia
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.3
  eyebrow:
    fontFamily: IBM Plex Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.08em
  code:
    fontFamily: IBM Plex Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: 6px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 30px
  hero: 37px
  full: 360px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px
  gutter: 24px
  container-max: 1280px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
    height: 40px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
    height: 40px
  button-outline-dark:
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
    height: 40px
  button-quiet:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
    height: 39px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  card-plan:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  card-plan-featured:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  card-story:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.on-surface-inverse}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  card-paper:
    backgroundColor: "{colors.surface-paper}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
  prompt-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-md}"
    rounded: "{rounded.hero}"
    padding: "{spacing.md}"
  badge-popular:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.on-surface-inverse}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  eyebrow-label:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.eyebrow}"
  nav-header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    height: 72px
  announcement-bar:
    backgroundColor: "{colors.accent-peach}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    padding: "{spacing.xs}"
  chip-category:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
    height: 36px
  card-tinted:
    backgroundColor: "{colors.accent-lavender}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  chip-dark:
    backgroundColor: "{colors.surface-inverse-warm}"
    textColor: "{colors.on-surface-inverse}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  icon-check:
    textColor: "{colors.success}"
  status-dark:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.success-soft}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  caption-muted:
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body-sm}"
---

## Overview

Netlify's marketing site is a celebration — "Where apps come to life" — rendered as a warm-paper canvas (off-whites `#F7F6F4`/`#F0EEEA` and warm-gray ink `#56534C`) wrapped around saturated, festival-poster collage illustrations: geometric gradient blocks, tiny figures assembling apps on ladders, rainbow washes, and a giant gradient "Netlify" wordmark closing the footer. Type is a single custom grotesque, **Systemia**, run heavy (600–800) with aggressive -4% tracking and a line-height of exactly 1 — headline slabs that match the blocky illustration style.

The system balances that exuberance with discipline: one electric cyan `#01D4E5` carries every primary action (always with dark ink text, never white), hairline `#E7E5E0` warm-gray rules divide everything, and IBM Plex Mono uppercase eyebrows add an engineer's margin-note texture. Cards are big and soft (20–37px radii), pills run to a giant 360px radius, and the only dark surfaces are inverse story cards — the page never leaves its paper warmth for long.

## Colors

- **Primary cyan (`#01D4E5`):** Every primary action — "Sign up", "Start building", "Build now", "Explore enterprise" — and matching borders/underline accents. Ink `#131619` text sits on it; cyan is energetic, not corporate-blue.
- **Secondary blue (`#065EFF`):** Text links and secondary actions; the deeper companion to cyan.
- **Ink & warm grays (`#131619` / `#56534C` / `#736F67`):** Warm-tinted near-black for headlines and strong text; brown-gray `#56534C` for body (the site's workhorse, 300+ uses on pricing); `#736F67` for muted captions. The warmth is deliberate — cold grays are off-palette.
- **Paper surfaces (`#FFFFFF` / `#F7F6F4` / `#F0EEEA`):** Cards sit white; page sections alternate paper `#F7F6F4` and sunken `#F0EEEA`; borders are the same family's `#E7E5E0` hairline.
- **Status & highlight accents:** Green `#3FB66B`/`#6DC788` for the featured plan border and positive states; peach `#FFBC8A` for the announcement bar; lavender `#ECEAFF` for soft tinted cards.
- **Illustration spectrum:** Sky `#24A3E3`, teal `#00C7B7`, red `#E4002B`, and the full rainbow live inside artwork and customer-story color chips (`--color-icon-*` hue tokens) — saturated color is for art and categorization, not UI chrome.
- **Inverse:** `#131619` cards/sections carry `#F4F7F9` text; used sparingly for customer stories and code panels.

## Typography

- **One sans does everything:** Systemia (Netlify's custom grotesque, variable 100–900). Headlines run 600 weight — 80px display and 60px page titles at -3.2px/-2.4px tracking with line-height exactly 1.0; 45px dark-card titles, 32/26px sub-heads, all at the same tight -2% to -4% tracking. Occasional 800 weights on customer pages.
- **Body:** Systemia 400 at 16px/1.5 in warm gray; 14px/500 for dense UI labels.
- **Buttons & nav:** Systemia 500 at 15px — medium, not bold; the pills' shape carries the emphasis.
- **Eyebrow & code:** IBM Plex Mono — 12px uppercase at 0.08em tracking for section eyebrows and plan labels ("POPULAR" is a black pill, not mono); 13px for inline code and prompts.

## Layout

- **Framed hero:** The hero is a giant rounded card (`~37px` radius) inset on the paper field, holding the collage illustration + left-aligned type; sections below alternate white/paper bands with ~96px vertical rhythm inside a ~1280px container.
- **Subnav:** Secondary pages add a slim underline-tab row (Calculate your cost / Full feature comparison / FAQ) directly under the 72px header — quiet text tabs, not pills.
- **Feature rhythm:** Centered headline → alternating product-screenshot panels in gradient-bordered frames with mono captions → centered pull-quote at display scale → stats row → card grid → illustrated CTA band → footer with the enormous rainbow wordmark.
- **Density:** Airy and poster-like — few elements per viewport, each given room; `--space-card` is a fluid clamp up to large values.

## Elevation & Depth

- **Nearly flat:** Hairline `#E7E5E0` borders define cards; the only shadows are a soft warm-ink lift — `rgba(19,22,25,.06) 0 10px 20px -5px` on floating elements like the prompt input, and `rgba(19,22,25,.12) 0 12px 40px -12px` on popovers.
- **Depth by color, not shadow:** Gradient-bordered frames, tinted inner panels, and the collage art supply dimension; drop shadows stay rare and warm-tinted.
- **Featured emphasis:** The popular plan card gets a 5px solid green `#3FB66B` border and a black "POPULAR" pill — outline, not elevation.

## Shapes

- **Supersized pills:** `360px` is the house pill value (effectively full-round) — buttons, chips, badges, search triggers.
- **Big soft cards:** 20px standard, 30–37px on hero containers and the prompt-input card; the hero uses an elliptical radius (~52px/30px) for extra swoop.
- **Small work cards:** Customer-story and grid cards tighten to 6–16px.
- **Net effect:** Pill + rounded-rectangle vocabulary with zero sharp UI chrome except tiny 6px workhorse cards.

## Motion & Micro-interaction

- **State changes:** `state-change` — 100–200ms `cubic-bezier(.25,.1,.25,1)` on color and background-color for links, buttons, tabs.
- **Surface moves:** `surface-enter` — 600ms `cubic-bezier(.4,0,.2,1)` transforms and border-radius morphs on cards/containers (Netlify animates corner radii themselves).
- **Emphasis:** `scale-in` — 500ms `cubic-bezier(.22,1,.36,1)` scale on interactive highlights.
- **Scroll scenes:** `drift` — ~1.2s `cubic-bezier(.22,1,.36,1)` translates for the collage/parallax illustrations; slow, ease-out, and decorative-only.
- **Tone:** Motions are smooth and buoyant — nothing snappy-hard; easing favors the "emphasis/decelerate" family.

## Voice & Content Strategy

- **Tone of voice:** Warm, imaginative, human-scale. "Where apps come to life", "Go from day 1 to day 100 on one platform", "Turn your imagination into reality", "Focus on your app. Not everything around it". Statements are short and aspirational; technical proof rides along in quotes ("push a change, and within 30 seconds the site is completely rebuilt").
- **Capitalization:** Sentence case everywhere; mono eyebrows run uppercase; plan badge "POPULAR" uppercase.
- **Terminology:** Apps are "made/shared/run" — "Make it / Share it / Run it". Products: "Agent Runners", "Deploy Previews", "AI Gateway", "Netlify Drop". Customers are storytellers ("Anil built a sales agent in days").
- **Button labels:** Verb + value — "Start building", "Build now", "Sign up", "Contact sales", "Calculate your cost", "Explore enterprise", "See how it works".
- **Proof style:** Named people with roles ("Greg S., Senior Software Engineer"), quantified outcomes ("100 million users", "10 times a day"), logo strip, and big stat numerals (1B+ / 1.3M / 99.99%).

## Components

- **Primary pill:** `#01D4E5` fill + 2px cyan border, ink 15px/500 label, 360px radius, ~40px height, 17px side padding — "Sign up" is the reference.
- **Outline pill:** Transparent fill, 1px `#131619` border, same anatomy ("Contact sales", "Select plan", "Request a demo"); quieter variant uses `#E7E5E0` border or `#E7E5E0` fill ("Calculate your cost", "View docs").
- **Plan card:** White, 20px radius, 24px padding, hairline border; plan name + billing line + feature list + bottom pill button. Featured (Pro) card: 5px `#3FB66B` border + black "POPULAR" pill overlapping the top edge.
- **Prompt card:** White 37px-radius container with soft ink shadow — textarea prompt + cyan "Build it" action, mimicking the AI app-builder flow.
- **Story card (inverse):** `#131619` card, white 45px headline, brand-color accent chip (per-customer hue), photography inside the rounded frame.
- **Eyebrow chip:** IBM Plex Mono 12px uppercase `#56534C` label, sometimes on a cyan or paper chip, marking sections.
- **Nav:** White 72px header — logo + dropdown links left, search icon + Contact / Log in text links + cyan "Sign up" pill right; announcement bar above in peach gradient with an underline link and close X.
- **"Ask Netlify" FAB:** Cyan pill bottom-right with robot glyph — the AI assistant entry point.
- **Footer:** Paper background, compact link columns, then a full-width rainbow-gradient "Netlify" wordmark — the site's signature sign-off.

## Do's and Don'ts

- Do keep the base warm — `#F7F6F4`/`#56534C` paper tones, never cold gray or pure white pages for text areas.
- Do use one cyan action per view with ink text; outline pills (ink or `#E7E5E0` border) for everything secondary.
- Do run Systemia headlines heavy and tight (-3 to -4% tracking, line-height 1.0); don't add a second sans.
- Do use IBM Plex Mono uppercase for eyebrows, labels, and code — it's the "engineering margin note" texture.
- Do let illustration carry the color — saturated rainbow belongs in artwork, story chips, and the footer wordmark, not in UI fills.
- Don't put white text on the cyan CTA — the pair is always cyan + `#131619` ink.
- Don't add drop shadows beyond the soft warm-ink lifts; borders and color blocking do the structural work.
- Don't square the cards — minimum 20px radius on marketing surfaces, 360px on anything pill-shaped.
- Don't darken the page — inverse `#131619` sections are accents (story cards, code), never the canvas.
