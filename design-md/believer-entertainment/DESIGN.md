---
version: "1.0.0"
name: Believer Entertainment Design System
description: A cinematic game-studio identity built around deep navy, warm gold, illustrated worlds, and condensed all-caps display lettering.
omitted:
  - motion: No consistent motion language was established from the captured pages; only a brief clip-path state transition was measured.
colors:
  primary: "#1A3054"
  on-primary: "#FFFFFF"
  secondary: "#C28C3D"
  on-secondary: "#1A3054"
  tertiary: "#D9D9D9"
  surface: "#FFFFFF"
  on-surface: "#1A3054"
typography:
  display:
    fontFamily: Knockout HTF48-Featherweight
    fontSize: 96px
    fontWeight: 400
    lineHeight: 0.95
  headline-lg:
    fontFamily: Knockout HTF48-Featherweight
    fontSize: 67.5px
    fontWeight: 400
    lineHeight: 0.875
  headline-md:
    fontFamily: Knockout HTF48-Featherweight
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1
  headline-sm:
    fontFamily: Knockout HTF48-Featherweight
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.1
  body-lg:
    fontFamily: Open Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  nav:
    fontFamily: Montserrat
    fontSize: 22.5px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: 800
    lineHeight: 1.5
    letterSpacing: 0.02em
  caption:
    fontFamily: Open Sans
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  full: 9999px
spacing:
  xs: 9px
  sm: 18px
  md: 24px
  lg: 36px
  xl: 45px
  2xl: 72px
  content-max: 1440px
components:
  navigation:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.nav}"
    height: 180px
  button-navy:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    height: 54px
---

## Overview

Believer Entertainment presents itself as a game-world studio with a cinematic, aspirational visual voice. A deep navy masthead and gold insignia frame oversized, immersive fantasy artwork; the experience feels more like a game-world reveal than a conventional corporate site. Condensed uppercase display lettering carries the dramatic statements, while the supporting copy remains human and readable.

## Colors

Deep navy (`primary`) anchors the header, select content bands, and footer. Warm gold (`secondary`) is reserved for the logo, thin section rules, and emphatic calls to action. White and pale gray panels create contrast between the illustrated hero and the editorial story sections. Keep the gold accent sparing so it retains its ceremonial, emblem-like quality.

## Typography

Knockout HTF48 Featherweight is the signature display face: tall, condensed, uppercase, and used for large declarative headlines. Open Sans carries paragraph copy for comfortable reading over image and color fields. Montserrat is used for navigation and bold, uppercase action labels, adding a more geometric interface voice.

## Layout

The wide desktop header pairs the gold logo at left with a spacious navigation row at right. A full-bleed illustrated hero follows, using enormous translucent wordmark lettering layered over landscape art. Subsequent narrative sections alternate pale scenic backdrops, split image/text panels, dark navy bands, and a centered company statement. The composition is intentionally cinematic and varies section rhythm rather than using a repeated card grid.

## Elevation & Depth

Depth comes from large-scale artwork, foreground/background layering, and high-contrast color bands, not from card shadows. Gold rules and layered logo treatments define transitions between sections. Keep interface chrome flat and allow the illustration itself to establish atmosphere.

## Shapes

The main CTA treatment is angular and banner-like, with clipped or tapered sides rather than a conventional rounded rectangle. Most content areas are rectangular and edge-to-edge; the only measured fully rounded value belongs to a small utility control, not the page's core shape system.

## Motion & Micro-interaction

Keep interactions restrained and cinematic. The captured stylesheet indicates a very short clip-path transition of about 100ms; use it only for a clear reveal or shape-state change. Avoid adding gratuitous parallax, bouncing controls, or motion that competes with the painted scenes.

## Voice & Content Strategy

The voice is earnest, values-led, and addressed directly to players. Its copy uses purposeful declarations such as “WE BELIEVE IN GAMES,” “TO OUR ONE-DAY PLAYERS,” and “JOIN THE JOURNEY.” Use first-person plural for company commitments, speak to the player as a participant in a shared world, and keep recruitment prompts short and emphatic.

## Components

Navigation sits on a solid navy field with light, generously spaced labels. Major headings are large, condensed, and uppercase; body copy is separated into short paragraphs with a clear contrast from surrounding imagery. Gold calls to action use bold uppercase Montserrat lettering and clipped banner silhouettes. Split feature sections pair large artwork with concise text and a single action; avoid turning the editorial story into boxed cards.

## Do's and Don'ts

- Do use deep navy as the primary structural color and gold as a precise accent.
- Do let full-bleed, painterly game art dominate the hero and key section transitions.
- Do use condensed uppercase display type for major declarations.
- Do reserve Open Sans for readable narrative copy and Montserrat for navigation/actions.
- Do alternate image-led, pale editorial, and navy story sections to create cinematic pacing.
- Do use angular, banner-like silhouettes for prominent actions.
- Don't introduce a bright SaaS-style multicolor palette into the core interface.
- Don't put strong drop shadows or card frames around the major story panels.
- Don't crowd the hero with extra controls or supporting paragraphs.
- Don't use playful motion that competes with the illustrated worlds.
