---
version: alpha
name: Linear Design System
description: >-
  Linear's marketing site is a near-black, monochrome product stage: an almost
  pure #08090a canvas, cool off-white Inter Variable headlines set tight and
  heavy-but-not-bold (weight 510), a soft grey text ladder, and pill-shaped
  buttons where the primary action is an inverted off-white capsule. Color is
  rationed: the brand indigo appears only in toggles, focus rings and agent
  affordances, and status hues live inside realistic product UI mockups. Depth
  comes from 1px translucent hairlines and stepped dark surfaces, not shadows.
colors:
  primary: "#e5e5e6"
  primary-hover: "#ffffff"
  on-primary: "#08090a"
  secondary: "#141516"
  on-secondary: "#f7f8f8"
  tertiary: "#5e6ad2"
  on-tertiary: "#ffffff"
  accent: "#7170ff"
  background: "#08090a"
  surface: "#08090a"
  surface-container-low: "#0f1011"
  surface-container: "#141516"
  surface-container-high: "#191a1b"
  surface-container-highest: "#28282c"
  on-surface: "#f7f8f8"
  on-surface-variant: "#d0d6e0"
  on-surface-muted: "#8a8f98"
  on-surface-subtle: "#62666d"
  outline: "#23252a"
  outline-variant: "#ffffff14"
  error: "#eb5757"
typography:
  headline-display:
    fontFamily: Inter Variable
    fontSize: 72px
    fontWeight: 510
    lineHeight: 1
    letterSpacing: -0.022em
  headline-xl:
    fontFamily: Inter Variable
    fontSize: 64px
    fontWeight: 510
    lineHeight: 1
    letterSpacing: -0.022em
  headline-lg:
    fontFamily: Inter Variable
    fontSize: 48px
    fontWeight: 510
    lineHeight: 1
    letterSpacing: -0.022em
  headline-mobile:
    fontFamily: Inter Variable
    fontSize: 38px
    fontWeight: 510
    lineHeight: 1.1
    letterSpacing: -0.022em
  headline-md:
    fontFamily: Inter Variable
    fontSize: 24px
    fontWeight: 590
    lineHeight: 1.33
    letterSpacing: -0.012em
  title-md:
    fontFamily: Inter Variable
    fontSize: 20px
    fontWeight: 590
    lineHeight: 1.33
    letterSpacing: -0.012em
  body-lead:
    fontFamily: Inter Variable
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: -0.012em
  body-md:
    fontFamily: Inter Variable
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Inter Variable
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: -0.011em
  label-lg:
    fontFamily: Inter Variable
    fontSize: 16px
    fontWeight: 510
    lineHeight: 1.5
  label-md:
    fontFamily: Inter Variable
    fontSize: 13px
    fontWeight: 510
    lineHeight: 1.5
    letterSpacing: -0.01em
  label-sm:
    fontFamily: Inter Variable
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.01em
  caption:
    fontFamily: Inter Variable
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
  mono-md:
    fontFamily: Berkeley Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.71
  mono-sm:
    fontFamily: Berkeley Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 24px
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px
  section: 128px
  gutter: 32px
  margin: 24px
  header-height: 72px
  container-max: 1436px
motion:
  state-change:
    duration: 100ms
    timingFunction: cubic-bezier(0.25, 0.46, 0.45, 0.94)
  button-feedback:
    duration: 160ms
    timingFunction: cubic-bezier(0.25, 0.46, 0.45, 0.94)
  highlight-fade-out:
    duration: 150ms
    timingFunction: ease
  surface-enter:
    duration: 250ms
    timingFunction: cubic-bezier(0.25, 0.46, 0.45, 0.94)
  background-fade:
    duration: 400ms
    timingFunction: ease-out
  reveal:
    duration: 700ms
    timingFunction: cubic-bezier(0.32, 0.72, 0, 1)
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 32px
    padding: "{spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-primary-lg:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    height: 44px
    padding: 20px
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 40px
    padding: 14px
  button-secondary-hover:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-secondary}"
  button-brand:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 32px
    padding: "{spacing.md}"
  button-ghost:
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    height: 32px
    padding: "{spacing.md}"
  button-ghost-hover:
    backgroundColor: "{colors.surface-container-highest}"
    textColor: "{colors.on-surface}"
  nav:
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-sm}"
    height: "{spacing.header-height}"
  panel:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  issue-card:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  label-chip:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.caption}"
    rounded: "{rounded.xl}"
    height: 24px
  code-inline:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.mono-md}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xs}"
  link-accent:
    textColor: "{colors.accent}"
    typography: "{typography.label-md}"
  meta-mono:
    textColor: "{colors.on-surface-subtle}"
    typography: "{typography.mono-sm}"
  error-text:
    textColor: "{colors.error}"
    typography: "{typography.label-sm}"
  divider:
    backgroundColor: "{colors.outline}"
    height: 1px
  header-border:
    backgroundColor: "{colors.outline-variant}"
    height: 1px
---

## Overview

Linear presents itself as precision tooling for serious product teams. The marketing site is a dark, quiet stage built to show off the product UI. There's no gradient wash or illustration-heavy hero: a near-black canvas holds a huge left-aligned headline ("The product development system for teams and agents"), a single grey subline, and then a pixel-faithful, interactive replica of the Linear app that fills the viewport width. The emotional register is calm confidence: engineered, fast, and slightly austere.

The audience is product engineers, designers, and leads who live in tools all day. Content density is low on the marketing layer (big headlines, generous vertical rhythm with ~128px between sections) and very high inside the product mockups (13px UI text, 28px rows, kanban boards, timelines). That contrast between a sparse frame and a dense, real interface is the core of the identity.

Imagery comes in two kinds. One is realistic product UI (issues, threads, boards, roadmaps, diffs), rendered live in HTML. The other is thin-stroke isometric line drawings labeled like technical figures ("FIG 0.1", "FIG 0.2") in monospace. There's no stock photography; the only photos are small avatars inside the mockups. Customer logos appear as a monochrome white strip.

## Colors

The palette is almost entirely achromatic and slightly cool. Hue is a rare signal.

- **Inverted Off-white (`primary`, #e5e5e6)**: The main call to action ("Sign up", "Get started", "Open app") is an off-white pill with near-black text (`on-primary`, #08090a). On hover it brightens to pure white (`primary-hover`, #ffffff). This inversion is what makes the CTA stand out on a dark page.
- **Graphite (`secondary`, #141516)**: Secondary buttons ("Contact sales", "Download"). On the live site this is `rgba(255,255,255,0.05)` over the canvas plus a hairline inset ring, which composites to #141516.
- **Linear Indigo (`tertiary`, #5e6ad2)**: The brand color (`--color-brand-bg`). It's used sparingly: billing toggles on pricing, the send button in the Slack-thread mockup, the focus ring (`--focus-ring-color`), and @Linear agent mentions. **Lighter Indigo (`accent`, #7170ff, hover #828fff)** is the in-UI accent for links and highlights.
- **Canvas (`background`/`surface`, #08090a)**: The page background. A darker `#010102` (`--color-bg-marketing`) shows up behind some hero sections.
- **Surface ladder**: `surface-container-low` #0f1011 (app panels, cards), `surface-container` #141516, `surface-container-high` #191a1b (secondary button hover), `surface-container-highest` #28282c (ghost hover). Each step is only a few points brighter than the last.
- **Text ladder**: `on-surface` #f7f8f8 for headlines and primary text, `on-surface-variant` #d0d6e0 for secondary UI text, `on-surface-muted` #8a8f98 for nav links, sublines and body copy, and `on-surface-subtle` #62666d for metadata, mono labels and dates.
- **Lines**: `outline` #23252a for solid borders and dividers, `outline-variant` #ffffff14 (8% white) for the sticky header border and translucent hairlines.
- **Status hues** (inside product UI only): red/`error` #eb5757, green #27a644, blue #4ea7fc, yellow #f0bf00, orange #fc7840, teal #00b8cc. They appear as small dots, priority icons, and diff counts, never as large fills.

## Typography

There are two families. **Inter Variable** (self-hosted, `font-weight` 100–900) handles everything, with SF Pro Display / system UI as fallbacks. **Berkeley Mono** is used for code, issue IDs, figure labels ("FIG 0.2"), and dates ("NOV 12, 2026").

- **Weights are off-grid**: Linear uses variable-font weights 510 ("medium") and 590 ("semibold") instead of 500/600. Large headlines are set at 510, which reads as confident rather than bold. 680 exists but almost never appears on marketing pages.
- **Display headlines are tight**: 72/64/48px with `line-height: 1` and −0.022em tracking. They're left-aligned and often split across two lines ("Intake / and integrations"). On mobile the hero drops to 38px with 1.1 leading.
- **Section ledes** are large (24px/400, `body-lead`) in `on-surface-variant` and sit in the right column opposite the section title.
- **Body** is small and grey: 15px/1.6 in #8a8f98. UI and nav text is 13px (`label-sm`/`label-md`), matching the product's own UI scale.
- **Uppercase is rare**. It appears only on micro-labels like "POWERING THE COMPANIES BUILDING THE FUTURE" and mono dates. Headlines and buttons use sentence case.

## Layout

- **Container**: content spans up to 1436px (1344px + 46px outer padding per side), with an inner page padding of 32px on desktop and 24px on mobile (`--page-padding-inline`). Narrow prose caps at 624px.
- **Two-column section pattern**: each feature section puts a two-line headline in the left half and the lede plus a "Learn more →" link in the right half, then a full-bleed product mockup below. It ends with a "Features" row: a muted label on the left and two columns of "Name +" links on the right, separated by a vertical hairline.
- **Grid**: 12 columns. Pricing is four equal columns divided by vertical hairlines, not cards.
- **Rhythm**: 4px base unit. The most common values are 4, 8, 12 and 32px, and sections are spaced about 128px apart. Full-width hairlines separate sections.
- **Header**: 72px tall and sticky. It's transparent at the top of the page and gets a `#ffffff14` bottom border and a 20px backdrop blur once scrolled.
- **Breakpoints**: the main one is `max-width: 640px`. On mobile the nav collapses to Log in, Sign up and a hamburger, and columns stack. Hover styles are wrapped in `@media (any-hover: hover)`.

## Elevation & Depth

Depth comes from **tone and hairlines, not drop shadows**. The site's own `--shadow-low/medium/high` tokens are all set to `none` in dark mode. Layering works like this:

- Each raised surface is a slightly lighter step on the surface ladder (#08090a → #0f1011 → #141516 → #191a1b).
- Edges are 0.5–1px borders in translucent white (`rgba(255,255,255,0.05–0.12)`) or `inset 0 0 0 1px` rings.
- Secondary buttons use a layered "glass" stack: inset white rings at 3–4% opacity, a 1px black outer ring at 60%, and a soft 4px drop.
- The inverted primary button has a barely visible stacked shadow (`--shadow-stack-low`, max 8% black).
- Large mockups fade into the canvas with dark vignettes and masks instead of floating on shadows.

## Shapes

- **Pills everywhere for actions**: every button, nav item hit-area, and toggle uses `9999px`.
- **Small, consistent radii for UI**: 4px (inline code, small chips), 6px (diff cards), 8px (sidebar rows, menus), 12px (app panels, large containers), and 16px (label chips such as "Performance", "iOS").
- Avatars and status dots are circles. Section frames and pricing columns have square corners; only the content inside them is rounded.

## Motion & Micro-interaction

Motion is fast and subtle, built on the site's `--ease-out-quad` curve `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.

- **State change** (link and text color): 100ms (`--speed-quickTransition`). This is by far the most common transition.
- **Button feedback**: 160ms across border, background, color, shadow, filter and transform. On press, buttons scale to 0.97, and brand buttons brighten to 115% on hover via `filter`.
- **Surfaces** (menus, popovers): 250ms (`--speed-regularTransition`). Highlights fade out over 150ms.
- **Reveal**: content and SVG strokes ease in over 700ms with `cubic-bezier(0.32, 0.72, 0, 1)`. Hero content fades in after load, so the first mobile paint is just the header on a blank canvas. Figure illustrations draw their strokes in.
- Animations are gated behind `prefers-reduced-motion: no-preference`.

## Voice & Content Strategy

The copy is declarative, compact, and confident, with no exclamation marks and no hype adjectives beyond "modern" and "world-class." Headlines are noun phrases or short claims in sentence case: "The product development system for teams and agents", "A new species of product tool.", "Built for the future. Available today." Sublines are one plain sentence about purpose: "Purpose-built for planning and building products. Designed for the AI era."

- CTAs are two or three words, imperative or verb-led: "Sign up", "Get started", "Contact sales", "Open app", "Learn more →", "View all →". Arrows (→) mark navigation links rather than buttons.
- Feature names are product nouns in title case ("Triage", "Cycles", "Guided reviews", "Linear Agent").
- Technical framing is deliberate: "FIG 0.1" labels, monospace dates, and realistic issue IDs ("DRV-8852", "ENG-2085") in mockups. Sample content reads like real engineering work ("Render UI before `vehicle_state` sync…").
- AI and agents are presented as teammates working alongside humans, not as magic.

## Components

### Buttons

- **`button-primary`**: an off-white pill, 32px tall in the header and 40px in pricing, with 12–14px horizontal padding and 13px/510 text. It has a 1px border the same color as the fill. On hover it turns pure white; on press it scales to 0.97. **`button-primary-lg`**: 44px tall with 20px horizontal padding and 16px text, used for closing CTAs ("Get started").
- **`button-secondary`**: a graphite translucent pill with a blurred backdrop (4px) and a layered hairline ring. Text is #f7f8f8. On hover it moves to #191a1b. It's usually paired to the right of a primary ("Get started" · "Contact sales").
- **`button-brand`**: an indigo pill with white text, used rarely (the product's own primary action). Hover brightens the fill by 15% via `filter`.
- **`button-ghost`**: muted grey text with no fill. On hover it gets a #28282c fill and the text turns #f7f8f8. Used for the nav items "Product" and "Resources", which open mega-menus.
- Keyboard shortcut hints (`kbd`) can sit inside buttons as small 18px rounded-5px chips. They're hidden on touch devices.

### Navigation

`nav` is a 72px header with the Linear mark and wordmark on the left. Centered-right are 13px muted links (Product, Resources, Customers, Pricing, Now, Contact), then a 1px vertical divider, "Log in" as a ghost link, and "Sign up" as the inverted pill. The active page link is #f7f8f8. The header is transparent until you scroll, then shows its hairline and blur.

### Panels & cards

- **`panel`**: app-window containers in mockups. Fill is #0f1011, radius 12px, with a 0.5px translucent white border and an optional dark inset glow.
- **`issue-card`**: kanban and issue tiles. Fill is #0f1011, radius 8–9px, with a 0.5px `#ffffff14` border and about 12px padding. A mono issue ID sits above a 13px/510 title, followed by a row of status dots and label chips.
- **Pricing columns** aren't boxed. Each tier is a column separated by vertical hairlines, with horizontal hairlines between the price, billing and feature-list blocks, and check-circle icons on the feature list.

### Small elements

- **`label-chip`**: a 24px pill-ish chip (16px radius) with a 0.5px #2e2e32 border, a colored dot, and 12px text.
- **`code-inline`**: Berkeley Mono on a slightly raised tone with a 4px radius and a faint border.
- **`meta-mono`**: dates and figure labels in 12px mono, #62666d, often uppercase.
- **Toggle**: an indigo pill switch with a white knob ("Billed yearly").
- **`divider` / `header-border`**: 1px lines in #23252a or 8% white.

## Do's and Don'ts

- **Do** keep the canvas at #08090a. Raise surfaces by stepping through #0f1011, #141516 and #191a1b, never with drop shadows.
- **Do** make the primary CTA the inverted off-white pill (#e5e5e6 on #08090a). Reserve indigo #5e6ad2 for brand moments, toggles and focus rings, not for every button.
- **Do** set large headlines in Inter Variable at weight 510 with `line-height: 1` and −0.022em tracking. Don't use 700/bold for display text.
- **Do** use the four-step text ladder (#f7f8f8, #d0d6e0, #8a8f98, #62666d) to create hierarchy instead of size jumps or color.
- **Do** separate regions with 1px hairlines (#23252a or 8% white), including pricing tiers and section boundaries.
- **Do** make all actions pills (`9999px`) and keep UI radii in the 4–12px range. Don't mix in sharp-cornered buttons.
- **Do** keep transitions at 100–160ms ease-out-quad, with a 0.97 press scale. Avoid bouncy or long hover animations.
- **Don't** use saturated color as large fills. Status colors are dots, icons and small text only.
- **Don't** put body copy in #62666d. It only reaches about 3.4:1 on the canvas and is meant for metadata and decorative mono labels; use #8a8f98 or lighter for readable text.
- **Don't** use stock photography or glossy 3D. Show real product UI or thin-stroke line figures labeled in monospace.
