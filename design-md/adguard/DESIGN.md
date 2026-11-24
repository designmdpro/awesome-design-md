---
version: "1.0.0"
name: AdGuard Design System
description: A clear privacy-product marketing system using Roboto, clean white surfaces, protective green actions, and large illustrated product heroes.
colors:
  primary: "#67B279"
  on-primary: "#FFFFFF"
  secondary: "#F08400"
  on-secondary: "#FFFFFF"
  hero: "#020512"
  on-hero: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#3B3F44"
  muted: "#6D757E"
typography:
  headline-lg:
    fontFamily: Roboto
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Roboto
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.25
  body-md:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Roboto
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.5
rounded:
  sm: 4px
  md: 8px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  section: 80px
  container-max: 1224px
components:
  hero:
    backgroundColor: "{colors.hero}"
    textColor: "{colors.on-hero}"
    typography: "{typography.body-md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
    height: 64px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
    height: 64px
  page-content:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  review-rating:
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
  secondary-copy:
    textColor: "{colors.muted}"
    typography: "{typography.body-md}"
---

## Overview

AdGuard presents a family of ad-blocking and privacy products through a broad, product-led marketing site. The homepage combines a compact white navigation bar, a promotional banner, and a spacious hero with bold copy, a short benefits list, green download action, and friendly illustrated protector imagery.

## Colors

White is the primary content surface, with charcoal-gray text and muted slate-gray supporting copy. A calm green identifies the main download and purchase actions. Warm orange is used for review stars and small highlights. The promotional strip is nearly black with white type.

## Typography

Roboto is used throughout. Headings are large, bold, and tightly spaced; body copy remains comfortably readable at about 16px. Navigation and buttons use moderate-weight labels without ornamental typography.

## Layout

The desktop layout uses a wide centered content area of roughly 1224px. A horizontal navigation bar groups product links, support destinations, purchase, language, and account actions. The hero is a two-column composition: headline, ratings, benefits, and calls to action on one side; a large illustrated character on the other. Lower sections use clear product-family bands, comparison content, reviews, FAQs, and news.

## Elevation & Depth

Product illustrations and softly raised content cards provide depth. Card shadows are broad and light rather than dark or dramatic. Preserve the generous white space around the main hero.

## Shapes

Buttons and cards use modest 8px rounding, with some compact controls closer to 4px. Keep the product interface clean and approachable.

## Motion & Micro-interaction

Observed hover and surface transitions are mostly 200–300ms ease, with occasional transform and filter changes. Keep feedback brief and functional.

## Voice & Content Strategy

The voice is confident and benefit-focused, explaining protection in familiar language. The hero promises, “Surf the Web ad-free and safely. Shields up!” Supporting bullets quickly state concrete outcomes such as blocking ads, saving traffic, and keeping sites functional.

## Components

The green primary download control is paired with a white outlined video action. Product previews and character illustrations make abstract privacy features tangible. Review counts and orange stars add social proof above the main message. Promotional offers use a high-contrast dark strip with a compact action.

## Do's and Don'ts

- Do keep the page bright, spacious, and product-led.
- Do use green for the key purchase or download action.
- Do pair large benefit headlines with short scannable lists.
- Do use product illustrations to explain different platforms.
- Do use orange sparingly for ratings and emphasis.
- Do keep the navigation horizontal and the main content within a wide centered container.
- Don't let promotional banners overpower the core product story.
- Don't add heavy shadows or dense decorative patterns.
- Don't use multiple competing accent colors for primary actions.
- Note that the observed white-on-green primary action may fall below WCAG AA contrast; retain the actual brand color as a fidelity caveat.
