---
version: "1.0.0"
name: Warp Design System
description: A blueprint-brutalist aesthetic for an agentic dev platform — white engineering paper under a faint dot grid, everything set in Azeret SemiMono or Matter, lowercase mono CTA labels, one electric blue that lives inside pixel-grid "factory" diagrams, and a single acid-lime pill for booking demos.
colors:
  primary: "#1A1522"
  on-primary: "#FFFFFF"
  secondary: "#EDF872"
  on-secondary: "#000000"
  tertiary: "#2A1EFF"
  on-tertiary: "#FFFFFF"
  neutral: "#1A152273"
  surface: "#FFFFFF"
  surface-dim: "#F6F5FB"
  on-surface: "#1A1522"
  on-surface-variant: "#1A1522B3"
  inverse-surface: "#211B2B"
  inverse-on-surface: "#D8D9DE"
  outline: "#00000012"
  accent:
    violet: "#8B5CF6"
typography:
  headline-display:
    fontFamily: Azeret SemiMono
    fontSize: 54px
    fontWeight: 400
    lineHeight: 1.18
  headline-lg:
    fontFamily: Azeret SemiMono
    fontSize: 34px
    fontWeight: 400
    lineHeight: 1.18
  headline-sm:
    fontFamily: Azeret SemiMono
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.35
  title-md:
    fontFamily: Matter
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: -0.02em
  body-md:
    fontFamily: Matter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: Matter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
  mono-md:
    fontFamily: Azeret SemiMono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
  label-caps:
    fontFamily: Azeret SemiMono
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.05em
  mono-xs:
    fontFamily: Azeret SemiMono
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.5
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 48px
  3xl: 56px
  gutter: 16px
  margin: 24px
  container-max: 1180px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.mono-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  button-accent:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.mono-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  nav-item:
    textColor: "{colors.on-surface}"
    typography: "{typography.label-caps}"
  nav-link:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.mono-md}"
  footer-link:
    textColor: "{colors.neutral}"
    typography: "{typography.mono-md}"
  figure-caption:
    textColor: "{colors.neutral}"
    typography: "{typography.mono-xs}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  badge-popular:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tertiary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  layer-band:
    backgroundColor: "{colors.accent.violet}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.mono-xs}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  code-block:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.code-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
---

## Overview

Warp builds "software factories" (agent infrastructure), and the site treats itself like an engineering artifact: everything is a figure, a spec, or a ledger entry. The mood is blueprint-brutalist — a huge monospace headline on white paper, a faint dot grid under the page, and a hero diagram of tiny pixels where electric-blue squares mark "working" factory tasks, labeled like a drawing (`[ fig. 1 — the factory ]`, `8 × 28 · live`, `224 tasks · 39 active · 1,425 PRs shipped`).

Chrome is restrained: a black announcement strip, a white nav of mono-cap items, and exactly two colored accents — electric blue `#2A1EFF` (diagrams, links, badges) and acid lime `#EDF872` (the "BOOK A DEMO" pill only). Type is the system: Azeret SemiMono carries every headline, nav item, button, and caption; Matter carries body text; JetBrains Mono carries code.

## Colors

Near-monochrome with two signature accents on a white ground.

- **Ink (#1A1522):** A plum-tinted near-black — headlines, body text at full strength, primary button fills, and the announcement bar. Text routinely uses its alphas: `B3` (70%) for body, `73` (45%) for captions/legends, `33` (20%) for ghosted grid pixels.
- **White / Paper (#FFFFFF):** The ground; `#F6F5FB` is the faint lavender wash behind alt sections and code wells.
- **Electric Blue (#2A1EFF):** The brand signal — diagram pixels ("working" tasks), links, the "POPULAR" badge, icon accents. Used at small doses against monochrome.
- **Acid Lime (#EDF872):** One pill only — "BOOK A DEMO" in the header. Nowhere else.
- **Violet (#8B5CF6):** Diagrammatic color — the "Open at every layer" stack bands render in violet tints (~90–50% fills) with mono captions.
- **Deep Plum (#211B2B):** Dark wells and code panels; text inside is `#D8D9DE`.
- **Hairline:** `black @7%` (`#00000012`) — every card, input, and panel border; `#BABABA` for chart frames.

## Typography

- **Azeret SemiMono** (400/500) is the brand voice: 54px regular headlines at 1.18 line-height ("The software factory infrastructure platform", "Measurement > Vibes"), 34px section heads, 18px sub-heads, 14px nav/button text, 11px figure captions, and 12px Medium UPPERCASE (+0.05em) for nav caps and badges.
- **Matter** (400/700) is the human voice: 16px/1.55 body at 70% ink, occasional 18–22px Bold titles (−0.02em).
- **JetBrains Mono** for code and terminal text (~16px), plus Hack in terminal chrome.
- Never bold the mono: hierarchy comes from size, caps, and color, not weight — display stays at 400.

## Layout

A `~1180px` centered column on white with the faint dot-grid underlay; 12px/16px are the dominant internal steps, 48–56px separates bands.

- **Hero:** left-aligned 54px mono headline + Matter lede + lowercase button pair (ink "request early access" / outline "download warp terminal") above a bordered `fig.` panel containing the pixel-factory diagram with a legend (`queued / working / waiting / shipped`).
- **Feature bands:** mono headline → short body → bordered artifact panel (code, chart, or diagram) with a `fig.` caption bar.
- **Pricing:** segmented pill toggle ("Warp Factories / Warp Agent") → three equal hairline cards; the promoted plan carries a tiny blue-bordered `POPULAR` chip; prices are large mono numerals.
- **Figures are content:** diagrams, charts, and code are always framed as engineering figures with bracketed mono captions and live counters.

## Elevation & Depth

Essentially flat: cards sit on `black @7%` hairlines with at most a whisper of shadow (`rgba(0,0,0,0.12) 0 1px 3px` on floating popovers). Depth cues are *diagrammatic* — nested `fig.` frames, alpha-stepped violet bands, and dot grids — not drops or glows.

## Shapes

Small corners: **4px** on buttons, chips, and code; **6–8px** on cards and framed panels; **9999px** on pills (the lime demo button, segmented toggles, icon buttons). The combination — sharp mono type, tiny radii, 1px hairlines — is the engineered feel; don't soften it.

## Motion & Micro-interaction

Calm: `color 0.3s ease` on links, `0.12–0.2s` color/border/opacity swaps on controls, `0.15s cubic-bezier(0.4,0,0.2,1)` on menus. The factory-pixel diagram animates states live (queued→working→shipped). Keep everything ≤300ms, transform/opacity/color only.

## Voice & Content Strategy

Engineering-ledger voice: terse, lowercase, spec-flavored. CTAs are lowercase verb phrases in mono — "request early access", "download warp terminal", "read the docs ↗" — while nav and badges go UPPERCASE mono caps. Headlines are sentence-case statements that can be dry or mathematical ("Measurement > Vibes", "Cutting our cost per PR from $80 to $30", "Control your coding agent chaos"). Everything is labeled like a figure: `[ fig. t4 · the factory ]`, `8 × 28 · live`. Body copy is lowercase too when it follows the brand register ("build on Warp: factories as code, any model or harness, with evals, benchmarks, and self-improvement built in.").

## Components

- **Primary button:** ink `#1A1522` fill, white lowercase mono label, 4px radius, compact (~30px tall).
- **Accent button (single-use):** acid-lime `#EDF872` pill, black mono-caps label — only ever "BOOK A DEMO".
- **Outline button:** white fill, 1px ink border, lowercase mono label, 4px radius ("read the docs ↗", "GET STARTED" nav pill).
- **Nav:** mono caps 12px/500 links (`PRODUCTS ∨`), wordmark at left, right-aligned `SIGN IN ∨` + lime pill + outline pill.
- **Cards:** white, `black @7%` hairline, 8px radius, ~24px padding; plan cards add mono title + description + large mono price + icon feature list.
- **Badge:** tiny bordered chip — mono caps 12px, `#2A1EFF` text + border for `POPULAR`.
- **Fig panel:** bordered frame containing a diagram/chart, with a bracketed mono caption (`[ fig. 1 — … ]`) and a live counter readout.
- **Segmented toggle:** pale pill track, active segment inverts to white/ink ("Warp Factories / Warp Agent").
- **Code/terminal panels:** `#211B2B` deep-plum well, JetBrains Mono ~16px, `#D8D9DE` text, 4px radius.
- **Announcement bar:** full-width ink strip, small white mono text with an underlined arrow link.

## Do's and Don'ts

- Do set all headlines in Azeret SemiMono at weight 400 — bold or sans headlines break the artifact feel.
- Do keep CTA labels lowercase mono; keep nav items and badges UPPERCASE mono caps.
- Do label diagrams like engineering figures — bracketed `[ fig. N — name ]` captions plus `count · status` readouts.
- Do restrict electric blue to diagram pixels, links, and small badges; restrict acid lime to the one demo pill.
- Do use alpha steps of `#1A1522` (70/45/20%) for body, captions, and ghost pixels rather than gray tokens.
- Do keep corners at 4–8px except pills; the system is not soft.
- Don't add shadows, gradients, or glass effects — depth is hairlines, alpha steps, and nested frames.
- Don't center-align long-form text; mono headlines may center, body stays left.
- Don't animate beyond ~300ms or animate layout properties.
- Note: white text on the `#8B5CF6` layer-band fills sits under 4.5:1 — those bands are diagram labels (tiny mono captions on tinted strips), not body text; keep the violet as measured.
