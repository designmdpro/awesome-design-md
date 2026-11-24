---
version: "1.0.0"
name: Webflow Design System
description: A bright, editorial marketing system where a crisp white canvas, near-black Visual Sans headlines, and a single confident Webflow blue (#146ef5) carry the interface — fluid clamp-based layout, tiny 4px/8px radii, and a full neutral gray ramp keep everything disciplined and enterprise-clean.
colors:
  primary: "#146ef5"
  on-primary: "#ffffff"
  primary-hover: "#0055d4"
  primary-light: "#3b89ff"
  primary-deep: "#006acc"
  primary-tint: "#e7f0fe"
  primary-text: "#1366e2"
  surface: "#ffffff"
  surface-secondary: "#f0f0f0"
  surface-dark: "#080808"
  on-surface: "#080808"
  on-surface-secondary: "#5a5a5a"
  on-surface-tertiary: "#757575"
  on-dark: "#ffffff"
  outline: "#d8d8d8"
  outline-variant: "#e0e0e0"
  gray-900: "#171717"
  gray-800: "#222222"
  gray-700: "#363636"
  gray-400: "#898989"
  gray-300: "#ababab"
  secondary:
    purple: "#7a3dff"
    pink: "#ed52cb"
    orange: "#ff6b00"
    red: "#ee1d36"
    yellow: "#ffae13"
    green: "#00d722"
typography:
  display:
    fontFamily: WF Visual Sans Variable
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: WF Visual Sans Variable
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.04
  headline-md:
    fontFamily: WF Visual Sans Variable
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.2
  headline-sm:
    fontFamily: WF Visual Sans Variable
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: WF Visual Sans Variable
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.4
  body-lg:
    fontFamily: WF Visual Sans Variable
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: WF Visual Sans Variable
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  label-lg:
    fontFamily: WF Visual Sans Variable
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.01em
  label-sm:
    fontFamily: WF Visual Sans Variable
    fontSize: 14.4px
    fontWeight: 500
    lineHeight: 1.4
rounded:
  xs: 2px
  sm: 4px
  md: 8px
  lg: 32px
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px
  gutter: 32px
  navbar: 68px
  container-max: 1440px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "16px 24px"
    height: 51px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.surface-secondary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "16px 24px"
    height: 51px
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    height: 51px
  announcement-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    height: 44px
  nav-header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    height: 68px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "24px"
  card-plan:
    backgroundColor: "{colors.surface-secondary}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "24px"
  card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
    padding: "24px"
  badge-new:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
  chip-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
  input-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.sm}"
    height: 48px
  divider:
    backgroundColor: "{colors.outline}"
    height: 1px
  divider-soft:
    backgroundColor: "{colors.outline-variant}"
    height: 1px
  chip-tinted:
    backgroundColor: "{colors.primary-tint}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
  link-accent:
    textColor: "{colors.primary-text}"
    typography: "{typography.body-lg}"
  card-dark-raised:
    backgroundColor: "{colors.gray-900}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
    padding: "24px"
  chip-dark:
    backgroundColor: "{colors.gray-800}"
    textColor: "{colors.gray-300}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
  toggle-off:
    backgroundColor: "{colors.gray-700}"
    rounded: "{rounded.full}"
  text-dark-secondary:
    textColor: "{colors.gray-300}"
    typography: "{typography.body-md}"
  text-placeholder:
    textColor: "{colors.gray-400}"
    typography: "{typography.body-lg}"
  icon-blue-light:
    textColor: "{colors.primary-light}"
  icon-blue-deep:
    textColor: "{colors.primary-deep}"
  text-secondary:
    textColor: "{colors.on-surface-secondary}"
    typography: "{typography.body-lg}"
  text-tertiary:
    textColor: "{colors.on-surface-tertiary}"
    typography: "{typography.body-md}"
  icon-purple:
    textColor: "{colors.secondary.purple}"
  icon-pink:
    textColor: "{colors.secondary.pink}"
  icon-orange:
    textColor: "{colors.secondary.orange}"
  icon-red:
    textColor: "{colors.secondary.red}"
  icon-yellow:
    textColor: "{colors.secondary.yellow}"
  icon-green:
    textColor: "{colors.secondary.green}"
---

## Overview

Webflow's marketing site is the antidote to dark-mode SaaS sameness — a bright white editorial canvas where near-black `#080808` headlines and a single disciplined brand blue (`#146ef5`, the logo color) do all the talking. There is no dark ambient theme, no glass, no gradients in chrome; color appears only as the blue action color, a 10% blue tint behind select panels, and a full secondary rainbow (purple, pink, orange, red, yellow, green) reserved strictly for product artwork and category icons.

The typeface is **WF Visual Sans Variable** — Webflow's own geometric grotesque (variable 100–900) — set big and tight: homepage H1s at **80px/83.2 weight 600** with -0.01em tracking. Layout is fluid by construction: a 1440px container with clamp() ramps that scale spacing continuously between 320px and 1440px viewports. Surfaces alternate white → light gray `#f0f0f0` → near-black `#080808` for inverted act breaks, giving pages a clear three-state rhythm.

## Colors

- **Primary (`#146ef5`):** Webflow blue — the logo mark, all primary CTAs ("Start for free", "Get started", "Add plan"), toggle-on states, link accents, and the full-width announcement banner. Hover deepens to `#0055d4` (blue-600); `#3b89ff` (blue-400) and `#006acc` (blue-300) round out the ramp for gradients and illustration.
- **Primary tint/text:** derived from the site's `color-mix` tokens — 10% blue over the white surface resolves to `#E7F0FE` (tinted panels on blog/feature sections); 92% blue + 8% black resolves to `#1366E2` for blue text links.
- **Neutrals:** a complete gray ramp — `#080808` (black, primary text + dark sections), `#171717`/`#222`/`#363636` (dark grays), `#5a5a5a` (secondary body — the site's most-used gray at 73 counts), `#757575`, `#898989`, `#ababab`, `#d8d8d8` (borders), `#f0f0f0` (secondary surface: plan cards, "Talk to Sales" button), white.
- **Secondary rainbow:** purple `#7a3dff`, pink `#ed52cb`, orange `#ff6b00`, red `#ee1d36`, yellow `#ffae13`, green `#00d722` — artwork, icons, and illustration only, never interface chrome.
- **On-dark:** white primary + `#ababab` gray-300 secondary on `#080808` sections.

## Typography

- **Display:** `display` 80px / `headline-lg` 56px — weight **600**, line-height 1.04, -0.01em tracking on the largest size. Headlines are near-black, left-aligned or centered, and huge relative to the container — "Build for what's next", "Our pricing", "Creativity without constraints".
- **Headlines:** `headline-md` 40px and `headline-sm` 32px at weight 600, line-height 1.2 — section-level statements.
- **Title:** `title` 20px/28 weight 500 — card and feature titles ("Optimize for conversion", "Site plans").
- **Body:** `body-lg` 16px/25.6 (1.6) weight 400 — the workhorse; `body-md` 14px/22.4 for captions and secondary copy.
- **Labels:** `label-lg` ~16px weight 500 with -0.01em tracking — nav links, buttons; `label-sm` 14.4px (0.9rem)/1.4 weight 500 — input labels, badges.
- All in WF Visual Sans Variable with Arial fallback; the variable axis (100–900) means every weight is dialed precisely — 400 body, 500 UI, 600 display, no exceptions observed.

## Layout

- **Container:** 90rem (1440px) max; fluid ramp `--fluid-min: 20rem` (320px) → `--fluid-max: 90rem` drives every clamp().
- **Nav:** 68px (4.25rem) white top bar — logo + "Platform / Source / Solutions / Resources / Enterprise / Pricing" links left, "Log in", "Contact Sales" text buttons and a blue "Start for free" CTA right. A 44px blue announcement banner sits above it ("Meet Webflow Campaigns…").
- **Hero:** oversized `display` headline with a short 2-line subline and a CTA pair (blue + light-gray); homepage hero continues into a horizontally-scrolling bento rail of product cards with dotted guide borders.
- **Section spacing (fluid clamps):** small 3→5rem, medium 3→9rem, large 3→15rem, extra-large 10→28rem — whitespace scales smoothly with viewport.
- **Grid gaps (fluid):** xs .375→.5rem, sm .625→1rem, md 1.25→1.5rem, lg 1.75→2rem, xl 2.25→3rem, xxl 2.5→5rem; measured 16px/32px/24px dominate.
- **Breakpoints:** classic Webflow set — 991px (small desktop), 767px (tablet), 479px (mobile).
- **Pricing:** "Site plans" + "Platform plans" side-by-side groups — open gray-100 cards with `$`-big prices, black "NEW" pills, full-width blue "Add plan" buttons, and a blue yearly/monthly toggle.

## Elevation & Depth

- **Near-flat by default:** most surfaces rely on `#d8d8d8`/`#e0e0e0` 1px hairlines rather than shadow — cards, chips, inputs.
- **Occasional float shadows:** long multi-stop black shadows (`0 6px 13px rgba(0,0,0,.29)` + 24px/53px/95px/148px trailing stops) on floating product screenshots and hero imagery — the site's only real elevation moments.
- **Button bevel:** primary buttons carry subtle inset highlights (`inset 0 6px 12px rgba(255,255,255,.12)` + `inset 0 1px 1px rgba(255,255,255,.2)`) over a thin drop shadow — a quiet gloss that keeps the flat blue from feeling dead.
- **Card emphasis:** white cards on `#f0f0f0` wells (and vice versa) instead of shadow stacking.

## Shapes

- **Controls:** `sm` 4px (.25rem) — buttons, inputs, small chips; Webflow keeps controls notably squarish.
- **Cards:** `md` 8px (.5rem) — plan cards, feature cards, cookie consent, product frames (some use asymmetric `0 0 8px 8px` bottom rounding when they meet a container edge).
- **Pills/badges:** `full` — "NEW" badges, breadcrumb pills, "Made in Webflow" badge, avatar stacks.
- **Large surfaces:** `lg` 32px appears on big pricing/media panels; extreme values (1440px) are effectively circle/pill mechanics on decorative elements.

## Motion & Micro-interaction

- **Duration scale:** a fixed ladder — 150ms, 300ms, 450ms, 750ms, 1200ms, 1950ms, 3150ms (`--transition-duration-1…7`).
- **Easings:** `--inout-quad cubic-bezier(0.455,0.03,0.515,0.955)` is the house curve (75% of transitions); `--inout-cubic cubic-bezier(0.645,0.045,0.355,1)` powers link underline `background-size` reveals; `--inout-quart cubic-bezier(0.77,0,0.175,1)` and an out-quart `(0.165,0.84,0.44,1)` for buttons.
- **Typical:** `color 300ms inout-quad` on links/hovers, `opacity 450ms inout-quad` on reveals, `background-size 450ms inout-cubic` for nav link underlines, `transform 300ms` on chips.
- **Keyframe inventory is tiny** (`fadeIn`, `spin`, `spinner-spin`) — animation is restrained; marquee/scroll behaviors are script-driven, not CSS.

## Voice & Content Strategy

Confident, enterprise-aimed plain speech — "the agentic web platform for modern businesses". Headlines are short declaratives about capability, not features.

- H1s: "Build for what's next", "Our pricing", "Creativity without constraints" — 2–5 words, verb-led.
- Sublines sell team outcomes: "Webflow gives every team the tools to build, manage, and grow a website that drives real revenue."
- Feature titles are benefit-first: "Build and launch websites without filing a ticket", "Publish content without a developer", "Drive traffic from traditional search & LLMs".
- CTAs: "Start for free", "Get started — it's free", "Talk to Sales", "Add plan", "Talk to us".
- Persona framing appears inline: "What *marketing teams* love about Webflow" with an inline dropdown to swap the audience.

## Components

- **button-primary:** `#146ef5` face, white `label-lg` text, 4px radius, `16px 24px` padding, ~51px tall, gloss bevel + soft shadow; hover → `#0055d4`. "Start for free", "Get started — it's free", "Contact Sales", "Add plan".
- **button-secondary:** `#f0f0f0` gray fill, same metrics — "Talk to Sales" beside the hero CTA.
- **button-outline:** white face + `1px #d8d8d8` + 4px radius — inline chips and the "marketing teams" persona dropdown.
- **announcement-bar:** full-width `#146ef5` strip, white 14px text + arrow — product launches, sits above the nav.
- **nav-header:** 68px, white, `label-lg` black links with dropdown carets; blue CTA at far right.
- **card:** white, `1px #d8d8d8`, 8px radius, 24px padding — feature bento tiles, often with dotted guide rulers at the edges.
- **card-plan:** `#f0f0f0` well, 8px radius — plan name (title), one-line description, big `$` price, hairline feature list, full-width blue button; "NEW" black pill at top-right of new tiers.
- **card-dark:** `#080808` inverted act — white headline + gray-300 body — used for the product-demo showcase breaks.
- **badge-new:** black capsule, white `label-sm` — marks new tiers/features.
- **chip-pill:** white + hairline + `full` radius — breadcrumbs ("Design v"), "Made in Webflow" floating badge.
- **input-default:** white field, `1px #d8d8d8`, 4px radius, ~48px, 16px/1.5em; label 14.4px medium above it.
- **toggle:** blue `#146ef5` pill switch for billing period.
- **icon-\* (secondary rainbow):** feature/category icons pick one secondary color each — the only sanctioned use of the rainbow in chrome.

## Do's and Don'ts

- Do keep the canvas white — Webflow is a light-theme brand; `#080808` appears only as text and deliberate inverted sections.
- Do use `#146ef5` blue for actions only — CTA fills, toggles, links, the announcement bar — never as decoration.
- Do set display headlines at 80px/600/-0.01em and let the fluid clamps scale spacing between 320–1440px.
- Do keep controls at 4px and cards at 8px — this system is intentionally squared-off; pills are for badges only.
- Do separate surfaces with `1px #d8d8d8` hairlines or a white↔`#f0f0f0` fill swap before reaching for shadow.
- Do reserve the secondary rainbow for icons/artwork — chrome stays blue + neutral.
- Don't put white text on the primary-light `#3b89ff` or use blue-300/400 for body text — only `#146ef5`/`#0055d4` carry white type.
- Don't round buttons into capsules or soften cards past 8px.
- Don't add a dark ambient theme — dark `#080808` is a section accent, not a mode.
- Don't animate beyond the 150–450ms inout-quad feel; nothing on the marketing surface springs or bounces.
- Don't mix secondary text lighter than `#5a5a5a` for body copy — `#757575`/`#898989` are for captions and metadata only.
