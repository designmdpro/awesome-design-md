---
version: alpha
name: Notion Design System
description: >-
  Notion's marketing system is a product-led, almost monochrome canvas — white
  surfaces, warm-gray neutrals, and ink-black type — where interaction is reserved
  for a single confident blue. Two typographic treatments ship side by side (an
  A/B-tested pair): a "neue" voice set in the variable Die Grotesk with
  pill-shaped ink CTAs, and a "classic" voice set in tightly-tracked NotionInter
  with rounded blue CTAs. Product-real UI mockups, hand-drawn doodles, and soft
  layered shadows provide all of the personality.
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  primary-hover: "#000000BF"
  accent: "#0075DE"
  on-accent: "#FFFFFF"
  accent-hover: "#005BAB"
  accent-strong: "#097FE8"
  accent-deep: "#00396B"
  accent-soft: "#E6F3FE"
  on-accent-soft: "#005BAB"
  accent-muted: "#F2F9FF"
  product-accent: "#2383E2"
  surface: "#FFFFFF"
  on-surface: "#000000F2"
  on-surface-variant: "#0000008A"
  surface-container: "#F6F5F4"
  surface-container-hover: "#DFDCD9"
  outline: "#0000001A"
  neutral-400: "#A39E98"
  neutral-500: "#78736F"
  neutral-600: "#615D59"
  neutral-800: "#31302E"
  error: "#F64932"
typography:
  body-md:
    fontFamily: NotionInter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  body-sm:
    fontFamily: NotionInter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0em
  label-md:
    fontFamily: NotionInter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0em
  label-sm:
    fontFamily: NotionInter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0em
  caption:
    fontFamily: NotionInter
    fontSize: 12px
    fontWeight: 420
    lineHeight: 1.45
    letterSpacing: 0em
  quote:
    fontFamily: Termoli
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  neue-headline-display:
    fontFamily: "Die Grotesk"
    fontSize: 80px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0em
    fontVariation: '"opsz" 42'
  neue-headline-lg:
    fontFamily: "Die Grotesk"
    fontSize: 54px
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: 0em
    fontVariation: '"opsz" 42'
  neue-headline-md:
    fontFamily: "Die Grotesk"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0em
    fontVariation: '"opsz" 30'
  neue-title-md:
    fontFamily: "Die Grotesk"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0em
    fontVariation: '"opsz" 6'
  neue-body-md:
    fontFamily: "Die Grotesk"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
    fontVariation: '"opsz" 6'
  neue-label-md:
    fontFamily: "Die Grotesk"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0em
    fontVariation: '"opsz" 6'
  neue-label-sm:
    fontFamily: "Die Grotesk"
    fontSize: 13px
    fontWeight: 420
    lineHeight: 1.54
    letterSpacing: 0em
    fontVariation: '"opsz" 6'
  classic-headline-display:
    fontFamily: NotionInter
    fontSize: 96px
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -0.048em
  classic-headline-lg:
    fontFamily: NotionInter
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.033em
  classic-headline-md:
    fontFamily: NotionInter
    fontSize: 54px
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: -0.035em
  classic-headline-sm:
    fontFamily: NotionInter
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.023em
  classic-title-md:
    fontFamily: NotionInter
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.27
    letterSpacing: -0.011em
  classic-body-lg:
    fontFamily: NotionInter
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: -0.006em
  sm-headline-display:
    fontFamily: NotionInter
    fontSize: 42px
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: -0.036em
rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  xxxl: 64px
  gutter: 24px
  margin: 24px
  container-max: 1344px
  content-max: 1100px
motion:
  state-change:
    duration: 150ms
    delay: 0ms
    timingFunction: cubic-bezier(0, 0, 0.58, 1)
  state-change-instant:
    duration: 20ms
    delay: 0ms
    timingFunction: cubic-bezier(0.45, 0, 0.55, 1)
  underline-fade:
    duration: 200ms
    delay: 0ms
    timingFunction: cubic-bezier(0.42, 0, 1, 1)
  surface-move:
    duration: 300ms
    delay: 0ms
    timingFunction: cubic-bezier(0.45, 0, 0.55, 1)
  surface-enter:
    duration: 540ms
    delay: 0ms
    timingFunction: cubic-bezier(0.16, 1, 0.3, 1)
  surface-crossfade:
    duration: 700ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0.8, 0.2, 1)
components:
  button-ink:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.neue-label-md}"
    rounded: "{rounded.full}"
    height: 44px
    padding: "{spacing.lg}"
  button-ink-hover:
    backgroundColor: "{colors.primary-hover}"
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    height: 38px
    padding: "{spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.on-accent-soft}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    height: 38px
    padding: "{spacing.md}"
  button-secondary-hover:
    backgroundColor: "{colors.accent-muted}"
  button-tertiary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent-strong}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    height: 38px
    padding: "{spacing.md}"
  button-app-primary:
    backgroundColor: "{colors.product-accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    height: 40px
    width: 360px
  button-social:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral-800}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    height: 72px
    width: 112px
  icon-button:
    textColor: "{colors.neutral-400}"
    rounded: "{rounded.sm}"
    size: 24px
  link-primary:
    textColor: "{colors.accent}"
    typography: "{typography.body-md}"
  link-primary-hover:
    textColor: "{colors.accent-deep}"
  link-secondary:
    textColor: "{colors.neutral-500}"
    typography: "{typography.body-sm}"
  list-item:
    textColor: "{colors.neutral-600}"
    typography: "{typography.body-sm}"
    padding: "{spacing.sm}"
  nav:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    height: 64px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  card-accent:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  input-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    height: 40px
    padding: "{spacing.md}"
  badge-muted:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  badge-light:
    backgroundColor: "{colors.accent-muted}"
    textColor: "{colors.accent-strong}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  chip-highlight:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.on-surface}"
    typography: "{typography.classic-headline-display}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
---

## Overview

Notion's marketing design is **restrained, editorial, and product-led**. Pages are built on a pure-white canvas with warm-gray neutrals and near-black text; saturated color appears almost exclusively in product imagery, integration icons, and the single interaction blue. The feel is calm and confident — generous whitespace, centered composition, and one decisive action per view — while hand-drawn doodle arrows, face glyphs, and a Marshall McLuhan epigraph in the footer keep it human and unmistakably Notion.

The defining feature of the system is a **duo of typographic treatments**, both live in production behind A/B allocation:

- **"Neue"** — the newer voice: the variable **Die Grotesk** at weight 500 for huge headlines (80px hero) and all marketing copy, paired with **ink-black pill CTAs** (`9999px` radius) and tracking left at `normal`.
- **"Classic"** — the established voice: **NotionInter** (Notion's build of Inter) with heavy weights (600–700) and tight negative tracking (down to −0.048em at 96px), paired with **rounded blue CTAs** (8px radius, `#0075DE`).

Both share the same underlying "tatami" token architecture (a `--tatami-*` custom-property system): warm neutral ramp, alpha-black text scale, 4px spacing base, hairline borders, and layered ambient shadows. The product itself (`app.notion.com`) uses a third, denser register: `inter` at 14–15px with a brighter product blue (`#2383E2`) for actions and focus rings.

Imagery is always *real product UI* — fully rendered workspace replicas, not abstract illustrations — framed in browser windows, on sky-blue gradients, or stacked in a "Company OS" diagram. Hand-drawn arrows and doodle faces annotate the UI like a teacher circling a whiteboard.

## Colors

The palette is monochrome-first: warm grays and alpha-blended blacks carry nearly every element, while blue is rationed for interaction.

- **Ink (`primary` #000000):** The neue treatment's CTA fill and the effective brand color — logo, wordmark, and the near-black end of every headline. Hover fades to 75% black (`primary-hover`).
- **Interaction Blue (`accent` #0075DE):** The semantic action color — classic-treatment primary buttons, inline links, and focus rings. Darkens to `accent-hover` (#005BAB) on hover/press and `accent-deep` (#00396B) for link active/hover states.
- **Accent tints (`accent-soft` #E6F3FE, `accent-muted` #F2F9FF):** Light-blue fills for secondary buttons, "Recommended" plan cards, light badges, and the headline word-pill ("Think"). Secondary hover goes *lighter* (soft → muted).
- **Product Blue (`product-accent` #2383E2):** The brighter app-side blue used on `app.notion.com` for the Continue button and input focus rings. Do not use it for marketing links — that's `accent`'s job.
- **Text alphas (`on-surface` #000000F2, `on-surface-variant` #0000008A):** Headings and nav use 95% black; body copy, captions, and helper text use 54–90% blacks rather than flat grays.
- **Warm neutrals:** A warm-tinted gray ramp underpins the system — the site ships a full nine-step scale from #F9F9F8 to #191918. `surface-container` (#F6F5F4, the ramp's 200 step) is the workhorse surface — secondary fills, muted badges, ghost-hover states — with #DFDCD9 as its hover. The kept mid-steps serve distinct roles: `neutral-400` (#A39E98) for icons, `neutral-500` (#78736F) for muted links, `neutral-600` (#615D59) for list and secondary body text, `neutral-800` (#31302E) for strong text on tinted surfaces.
- **Hairline (`outline` #0000001A):** The standard 10% black border for cards, inputs, accordions, and dividers.
- **Error (`error` #F64932):** Reserved for destructive/error semantics; the token system also defines warning (#FF6D00) and success (#14832B) text hues plus a full 9-step ramp of red, orange, yellow, teal, blue, purple, green, pink, and brown — those live inside product illustrations and integration art, never as UI chrome.

No dark theme exists on the marketing site — `prefers-color-scheme: dark` leaves the page white. Do not invent one.

## Typography

Two self-hosted faces do all the marketing work; the product UI adds a third register. Weights are fractional where the variable fonts allow it (420, 450, 550 — the tokens' quiet middle ground between regular and medium).

- **Die Grotesk** (`neue` group): The display voice. Weight 500 at every size, tracking left at `normal`, line heights tight (1.0 display → 1.5 title). Its variable `opsz` axis is set per level (6 for text sizes, 30–42 for headlines); enable `"ss01"` and `"lnum"` features. Used for headlines, hero copy, feature descriptions, CTA labels, and top-nav links (13px/420).
- **NotionInter** (`classic` + body groups): The classic display voice *and* the default body/UI face. Headlines stack weight 600–700 with aggressive negative tracking that scales with size (−0.011em at 22px → −0.048em at 96px). Body, links, footer, and classic buttons use 400–500 at 14–16px with 1.43–1.5 line height.
- **Termoli** (`quote`): A variable serif reserved for editorial moments — the McLuhan pull-quote in the footer.
- **Notion app register:** `inter` at 14–15px/400–500 for inputs, buttons, and form copy on `app.notion.com`; embedded product mockups render a `system-ui` stack, so product imagery never inherits the marketing faces.
- **Other named faces** in the token system: `Lyon Text` (legacy serif), `NotionHand` (handwriting), `iA Writer Mono` (code), `Noto Sans Arabic/Hebrew` for script fallbacks.

Headline anatomy on classic pages: one idea per line, periods allowed ("One tool to run your company."), and a single **word-pill** inside the headline ("Jam", "Think") — a `rounded-full` chip in `accent-soft` (or lavender `#EADBFA`) with a colored dot, sized to the headline.

Responsive behavior: breakpoints at 600/840/1080/1280/1440px re-map typography per level; the mobile capture showed the classic display collapsing to 42px/600 (`sm.headline-display`).

## Layout

- **Canvas:** Full-bleed white with content centered in a `content-max` ~1100px column inside a `container-max` ~1344px shell; hero spans nearly full width before the product window appears.
- **Composition:** Centered hero (headline → subtext → CTA pair → product window), then alternating three-column feature rows, diagram sections ("Company OS" with integration chips orbiting a card), customer workspace carousel, and a final centered CTA band before the footer.
- **Spacing rhythm:** Strict 4px base; 8/16/24/32 are the everyday steps, 48–96px for section separation. Asymmetric paddings are normal (hero CTA 6×23px, classic buttons 6×15px, inputs 10×16px).
- **Grid moments:** 2×3 SSO button grid on login, 2-up pricing comparison cards, 5-up use-case icon rows, logo marquees that scroll edge-to-edge.
- **Responsive:** Five min-width breakpoints (600/840/1080/1280/1440). Mobile collapses to a single column; the mobile homepage may serve the classic treatment regardless of the desktop variant.

## Elevation & Depth

Depth is quiet and layered, never decorative:

- **Ambient card shadow:** A signature 4-stop shadow — `rgba(0,0,0,0.01) 0 0.175px 1.041px`, `rgba(0,0,0,0.02) 0 0.8px 2.925px`, `rgba(0,0,0,0.027) 0 2.025px 7.847px`, `rgba(0,0,0,0.04) 0 4px 18px` — extremely diffused, almost imperceptible, used on cards, popovers, and floating UI.
- **Hairlines over shadows:** Most separation comes from 1px `outline` borders or an inset ring (`oklch(0.19 0.04 86 / 0.11)` ≈ warm black at 11%, 1px inset) rather than drop shadows.
- **Tonal layering:** White cards sit on `surface-container` (#F6F5F4) bands; the recommended pricing plan inverts this — an `accent-soft` blue panel on white.
- **Focus depth:** Inputs signal focus with a double ring in `product-accent` — 1px border plus 1px inset box-shadow of the same color — not a blur.
- **Header:** A 64px nav with a hairline bottom shadow (`rgba(0,0,0,0) 0 1px 0` at rest) — separation stays sub-pixel until scroll.

## Shapes

- **Pills for moments of intent:** The neue CTA, the nav "Try Notion" button, language pickers, segmented-control tracks/thumbs, and headline word-chips are all `9999px` pills.
- **Rounded rectangles for structure:** Buttons, inputs, and SSO cards at 8px (`rounded.md`, 6px on app surfaces); cards and pricing panels at 12px (`rounded.lg`); 16px for larger floating surfaces. Small interactive hover states drop to 4px.
- **Organic interruptions:** Hand-drawn arrows, circled highlights, and doodle faces are deliberately imperfect — the only shapes allowed to break the geometry.
- **Never sharp-edged chrome:** Even 0px-radius elements (nav bar, some mock-UI rows) sit inside a rounded or hairline-bordered parent.

## Motion & Micro-interaction

Motion is fast, functional, and mostly confined to state feedback; spectacle lives in the embedded product animations (which carry their own "Pause animation" controls for accessibility).

- **State changes:** 150ms `cubic-bezier(0, 0, 0.58, 1)` for button `background-color`/`color`; a near-instant 20ms `state-change-instant` for pressed/active fills.
- **Link underlines:** `text-decoration-color` and `outline-color` fade over 200ms `cubic-bezier(0.42, 0, 1, 1)` — an accelerate-only curve, so feedback arrives decisively.
- **Movement:** `transform`/`translate` transitions run 300ms on a symmetric `cubic-bezier(0.45, 0, 0.55, 1)` — carousels, drawers, accordion travel.
- **Entrances:** Elements arriving on screen use ~540ms `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out — decelerate into place).
- **Ambient shifts:** Slow 700ms `cubic-bezier(0.2, 0.8, 0.2, 1)` background crossfades for section/theme transitions.
- **Restraint:** Nothing loops except the logo marquee and the hero's product animation; honor `prefers-reduced-motion` by freezing animation regions rather than removing content.

## Voice & Content Strategy

- **Tone of voice:** Confident, plain-spoken, and slightly playful. Short declarative sentences about outcomes, not features — "Notion turns your team's knowledge into the context your AI is missing." Playfulness surfaces as *product naming*, not adjectives: agents "Jam" and "Think" together.
- **Capitalization:** Sentence case everywhere — headlines ("A shared brain for your team and agents."), buttons ("Get Notion free"), menu items, even proper-noun-adjacent labels. Headlines end with periods; subheads usually don't.
- **Terminology:** "Workspace" for the product's container, "agents" for AI (never "bots"), "context" for knowledge ("All your context, in one place."), "Notion AI" / "Notion MCP" for features.
- **Button and action labels:** Outcome verb phrases — "Get Notion free", "Request a demo", "Contact Sales", "Get started", "Continue". Free-tier CTAs always lead; demo/sales CTAs ride second.
- **Proof points:** Customer names carry the persuasion — "The smartest teams already work this way." over logo walls (OpenAI, Figma, Ramp, Cursor, NVIDIA); stats are factual and spaced ("100M+ users in over 50 countries").
- **Helper and legal text:** Quiet 12–14px lines that explain, never upsell — "Use an organization email to easily collaborate with teammates." Links embed mid-sentence ("…agree to the Terms & Conditions and Privacy Policy.").

## Components

- **Ink pill CTA (`button-ink`, neue):** 44px-tall `rounded-full` pill, `primary` black fill, white `label-md` text, ~23px horizontal padding. Hover fades the fill to 75% black over 150ms; no border, no shadow. One per view.
- **Blue primary (`button-primary`, classic):** 36–38px, `accent` fill, white text, 8px radius, ~15px horizontal padding. Hover → `accent-hover` (#005BAB). The nav's persistent "Get Notion free" uses this at 36px.
- **Tint secondary (`button-secondary`):** `accent-soft` fill with `on-accent-soft` text; hover goes *lighter* to `accent-muted`. Pairs with `button-primary` in CTA rows ("Request a demo").
- **White tertiary (`button-tertiary`):** White fill, `accent-strong` (#097FE8) text, hairline `outline` border — used inside tinted panels ("Contact Sales" on the recommended card).
- **App primary (`button-app-primary`):** Full-width 40px, `product-accent` fill, 8px radius, Inter `label-sm` — the `app.notion.com` "Continue" action.
- **SSO cards (`button-social`):** 112×72 white tiles, 6px radius, hairline border, brand glyph above a `label-sm` name; arranged in a 2×3 grid (Google, ChatGPT, Apple, Microsoft, Passkey, SSO).
- **Inputs (`input-default`):** 40px, 8px radius, 10×16px padding, Inter 15px; label above, 14px helper text below. Focus = 1px `product-accent` border + matching inset ring.
- **Nav (`nav`):** 64px white bar. Classic variant: logo left, centered Product/Resources/Pricing links (16px/400, 4px-radius hover chips), "Log in" + blue "Get Notion free" right. Neue variant: centered logo, links left, "Pricing / Request a demo / Try Notion" right — links in Die Grotesk 13px/420.
- **Cards (`card`, `card-accent`):** 12px radius, 16–24px padding, `outline` hairline plus the ambient shadow. `card-accent` swaps white for `accent-soft` to mark the recommended plan; testimonial cards are the exception — full-bleed color-tinted photography (red/blue/amber) with white quote text.
- **Badges (`badge-muted`, `badge-light`):** Inline 12px/420 labels — muted gray for "Beta"-style tags, `accent-muted` + `accent-strong` text for "Recommended"-style emphasis.
- **Icon buttons (`icon-button`):** Borderless ~24px glyphs in `neutral-400`, 6px-radius hover chip in `surface-container`; used for carousel arrows, pause controls, and utility actions.
- **Secondary links (`link-secondary`):** `neutral-500` text, no underline until hover — "Sign up", "How they work", footer legal links.
- **List items (`list-item`):** `neutral-600` body-sm rows inside feature/pricing lists, separated by whitespace rather than rules.
- **Headline chip (`chip-highlight`):** A `rounded-full` word inside the hero headline, `accent-soft` (or lavender) fill with a saturated dot, set in the headline's own typeface.
- **Segmented control:** A `rounded-full` `surface-container` track containing white pill thumbs ("Pay monthly / Pay yearly"); selection is indicated by the thumb, never a color change.
- **Accordion/FAQ:** Rows separated by `outline` hairlines, no card; chevron travels 300ms.

## Do's and Don'ts

- Do keep the canvas white — every surface is `surface` or `surface-container`; there is no dark theme on the marketing site.
- Do use exactly one ink (`button-ink`) or blue (`button-primary`) CTA per view; secondary actions always take the tint (`button-secondary`) or hairline (`button-tertiary`) treatment.
- Don't mix the two treatments in one view: neue pairs Die Grotesk with black pill CTAs, classic pairs tracked NotionInter headlines with blue 8px CTAs.
- Do render product UI faithfully inside mockups — system-ui stack, app radii, real blue — and always provide the "Pause animation" control on animated regions.
- Don't add drop shadows beyond the ambient 4-stop card shadow; prefer `outline` hairlines and tonal layers for separation.
- Do use sentence case on everything, including buttons ("Get Notion free", not "Get Notion Free").
- Don't reach for the illustration hue ramps (red/orange/purple/etc.) for UI chrome — they belong to artwork, integration icons, and testimonial photography only.
- Do note real-world contrast: `accent-strong` (#097FE8) text on white and `product-accent` (#2383E2) under white text both measure ~3.9–4.1:1 — the site ships them anyway (app convention); prefer `accent`/`accent-hover` when you need strict AA.
- Don't invent gradients, glows, or glass effects — the only color field allowed behind chrome is the flat `accent-soft`/`accent-muted` tint.
- Do end headlines with periods and keep them to two lines max — "Join the new way of working."
