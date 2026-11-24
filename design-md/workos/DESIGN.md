---
version: "1.0.0"
name: WorkOS Design System
description: A polished enterprise-readiness aesthetic — white paper surfaces, a periwinkle brand purple, pill-shaped everything, floating UI vignettes over aurora and pinstripe backdrops, and deep-navy developer sections lit by a neon mint accent.
colors:
  primary: "#6363F1"
  on-primary: "#FFFFFF"
  primary-hover: "#7777F3"
  primary-container: "#D8D9FA"
  secondary: "#23F0C3"
  on-secondary: "#030628"
  secondary-hover: "#4AF3CE"
  tertiary: "#D272FF"
  neutral: "#8F96BD"
  surface: "#FFFFFF"
  surface-dim: "#F9F9FB"
  surface-container: "#ECEFF1"
  on-surface: "#29363D"
  on-surface-variant: "#656B8A"
  inverse-surface: "#14182E"
  inverse-on-surface: "#C5CAE8"
  outline: "#E8EAED"
  success: "#00A255"
  aqua: "#D9FFFF"
typography:
  headline-display:
    fontFamily: Untitled Sans
    fontSize: 80px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.07em
  headline-lg:
    fontFamily: Untitled Sans
    fontSize: 38px
    fontWeight: 500
    lineHeight: 1.16
    letterSpacing: -0.05em
  headline-md:
    fontFamily: Untitled Sans
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.13
    letterSpacing: -0.05em
  headline-sm:
    fontFamily: Untitled Sans
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.05em
  title-md:
    fontFamily: Untitled Sans
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.33
  body-lg:
    fontFamily: Untitled Sans
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: -0.01em
  body-md:
    fontFamily: Untitled Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Untitled Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Untitled Sans
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
  label-sm:
    fontFamily: Untitled Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
  code-sm:
    fontFamily: IBM Plex Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: 4px
  md: 7px
  lg: 16px
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 40px
  3xl: 56px
  gutter: 20px
  margin: 56px
  container-max: 1200px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-accent:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
  button-accent-hover:
    backgroundColor: "{colors.secondary-hover}"
    textColor: "{colors.on-secondary}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  nav-link:
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
  footer-link:
    textColor: "{colors.neutral}"
    typography: "{typography.body-sm}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  input-default:
    backgroundColor: "{colors.surface-dim}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  badge-enabled:
    backgroundColor: "#00AE481A"
    textColor: "{colors.success}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  code-block:
    backgroundColor: "{colors.inverse-surface}"
    textColor: "{colors.aqua}"
    typography: "{typography.code-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
---

## Overview

WorkOS sells "Enterprise Ready" to developers, and the site looks the part: a bright, optimistic SaaS aesthetic with enough product realism to feel credible. The personality is friendly-professional — white space, periwinkle purple, and pill shapes soften what is fundamentally enterprise infrastructure (SSO, SCIM, RBAC).

The signature move is the **floating product vignette**: real UI cards (auth modals, feature toggles, admin portals) drift over decorative backdrops — vertical pinstripe fades, soft aurora washes in peach/lavender/blue — casting layered, purple-tinted shadows. Light marketing bands alternate with one deep-navy "developer" section where the palette inverts and a neon mint accent takes over CTAs. Buttons are always fully rounded pills; headlines are medium-weight, tightly tracked, and often carry a purple-to-blue gradient on the key phrase.

## Colors

A cool neutral ground with a single confident brand hue and two "special occasion" accents for dark sections and highlights.

- **Brand Purple (#6363F1):** Primary CTA fills, the "AuthKit" wordmark accents, icon glyphs, and one half of the gradient headline. Hover lifts to **#7777F3**; pale tint **#D8D9FA** fills highlight chips and CTA banners.
- **Ink (#29363D):** The "black" of the system — a desaturated slate used for all headline and primary text.
- **Slate Lavender (#656B8A) / Muted Periwinkle (#8F96BD):** Body copy and tertiary text (eyebrow labels like "TRUSTED BY", footer links) — the grays lean visibly purple.
- **Paper surfaces:** White `#FFFFFF` cards on a barely-gray `#F9F9FB` section ground, with `#ECEFF1` cool-gray wells; all borders are 1px `#E8EAED` hairlines.
- **Deep Navy (#14182E → #192043 gradient, base #030628):** The developer/API section ground; text inverts to lavender `#C5CAE8` with brighter aqua `#D9FFFF` for code and links.
- **Neon Mint (#23F0C3):** The dark-section CTA and kicker accent ("Developer-first design" label, mint "Get started" button with a `0 0 14px` glow). Hover: `#4AF3CE`.
- **Aurora Pink (#D272FF):** Rare accent inside dark-section headlines and gradient text.
- **Success Green (#00A255):** "Enabled" status chips — ~10% green fill, 23% green border, pill shape.

## Typography

**Untitled Sans** (400/500) is the single UI face — a neutral grotesque used everywhere except code, which is **IBM Plex Mono**.

- **Headlines are medium weight, never bold.** The 80px hero tracks at −0.07em ("Your app, *Enterprise Ready.*"); section headlines run 24–38px all at −0.05em and 1.13–1.25 line-height. The tight tracking is the sophistication — preserve it.
- **Gradient text:** the money phrase inside an h1 ("Enterprise Ready.") is set in a purple→blue linear gradient via background-clip.
- **Body:** 19px/1.6 Slate Lavender for lede paragraphs, 16px/1.5 standard, 14px/1.5 for dense UI copy.
- **Mono:** IBM Plex Mono 14px for code chips (`npx workos@latest`), the docs dark code editor, and technical labels.

## Layout

Centered `1200px` container inside a generous 56px page padding, on a 4px spacing base. Sections alternate: white hero → light-gray feature bands → one full-bleed navy developer band → back to light, ending in a dense footer.

- **Hero:** left-aligned 80px headline + lede + pill CTAs, with the floating UI vignette occupying the right ~half.
- **Feature bands:** eyebrow pill (Brand Purple or Mint on dark) → headline-md → product screenshot/vignette → 2–3 column feature grid with icon + title + body-sm cells.
- **Pricing:** two oversized rounded cards — white "Pay as you go" vs inverted navy "Annual Credits" — rather than a many-tier table.

## Elevation & Depth

Depth is real but soft: signature shadows are **multi-layer, purple-tinted** stacks (e.g. `rgba(23,6,100,…)` over 5 stops, or the card stack `rgba(17,7,53,0.02–0.05)` reaching ~80px blur) — the tint keeps shadows chromatic, never gray. The primary button carries the same purple diffuse shadow plus a faint white-to-transparent top gradient (`linear-gradient(#ffffff1a, #fff0)`). On navy sections, elevation becomes glow: the mint button emits a `0 0 14px #23F0C3B3` halo with a 1px inner stroke `#19CBA4`.

## Shapes

Pills dominate: buttons, badges, nav "Sign in" chip, and segmented controls all use a full radius (implemented as `100px`). Cards and floating UI panels use **16px**; inputs and small inner elements use **4–7px**. The constant `100px` CTA radius is a brand signature — never render a WorkOS button with a small radius.

## Motion & Micro-interaction

Motion is minimal and ambient: `color 0.15s ease` on links, `border-color`/`background-color 0.2s ease` on controls. The hero toggle vignettes animate their state (toggle slides ~200ms), and decorative backdrops are static. No parallax or scroll-jacking; keep everything under ~200ms and prefer color/opacity/transform changes.

## Voice & Content Strategy

Crisp, outcome-first, and quietly confident — copy sells the business result, not the API. Headlines are short declaratives in sentence case: "Your app, Enterprise Ready.", "Transparent pricing that scales with your growth.", "The standard for modern auth". Sub-heads promise speed ("Start selling to enterprise customers with just a few lines of code", "Deploy in minutes"). CTAs are two-word verbs — "Get started", "View pricing", "Schedule a call" — and eyebrow labels use ALL-CAPS mono-style microcopy ("TRUSTED BY", "DEVELOPER-FIRST DESIGN").

## Components

- **Primary button:** Brand Purple pill (100px), white 16px/500 label, 12px×24px padding, purple-tinted diffuse shadow + faint top-light gradient; hover → `#7777F3`.
- **Accent button (dark sections only):** Neon Mint pill, navy `#030628` label, mint glow shadow; hover → `#4AF3CE`.
- **Secondary/ghost button:** white fill, 1px `#E8EAED` border, Brand Purple 14px label, pill ("Sign in"). Text links use Ink + a `›` chevron ("Talk to an expert ›", "Read the docs ›").
- **Status badge:** pill chip, ~10% tinted fill + ~23% tinted border; green for "Enabled", neutral for "Ready".
- **Cards:** white, 16px radius, hairline border, layered purple-tint shadow; feature cells add a small icon tile (soft purple gradient or Ink fill).
- **Inputs:** `#F9F9FB` fill, `#DDDDE3` 1px border, ~7px radius, 16px text; focus swaps to white fill + `#B9BBC6` border (User-Management widgets).
- **Code surfaces:** dark navy editor on navy sections, aqua/mint syntax text, IBM Plex Mono; inline docs chips are hairline-bordered pills with a `$` prompt and copy icon.
- **Nav:** transparent white bar, 14px Ink links with dropdown carets, ghost "Sign in" pill at right.

## Do's and Don'ts

- Do set every headline at weight 500 with −0.05em to −0.07em tracking — bold weights and loose tracking break the look.
- Do keep all CTAs fully pill-shaped (100px radius); the 4–7px range is for inputs and small UI parts only.
- Do apply the purple→blue gradient to one key phrase inside display headlines, not to whole sentences or body text.
- Do tint shadows toward navy/purple (`rgba(23,6,100,…)`); never use neutral gray shadow colors.
- Do use Neon Mint exclusively inside navy developer sections — on light surfaces the CTA is always Brand Purple.
- Don't add borders thicker than 1px, and keep the border color at `#E8EAED` (dark sections: `#2B335A`).
- Don't use pure black (`#000`) for text or backgrounds — the system's "black" is slate `#29363D` and its dark ground is `#14182E`.
- Don't animate longer than ~200ms or animate layout properties; the interface feels still and polished.
- Don't write title-case headlines or marketing exclamation points — sentence-case declaratives only.
- Note: two real brand pairings run under 4.5:1 contrast — white text on the `#7777F3` button hover, and green text inside the tinted "Enabled" status chip. They are deliberate, decorative states on the live site; keep them as specified rather than darkening the brand.
