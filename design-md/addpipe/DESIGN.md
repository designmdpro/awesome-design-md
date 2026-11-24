---
version: "1.0.0"
name: AddPipe Design System
description: A polished B2B media-recording platform identity using deep navy, cool pale-gray surfaces, vivid mint-green trial actions, and product-interface illustrations.
omitted:
  motion: No distinct motion pattern was established from the captured pages.
colors:
  primary: "#14213d"
  on-primary: "#ffffff"
  secondary: "#4ff2a0"
  on-secondary: "#14213d"
  surface: "#ffffff"
  surface-container: "#f5f7fa"
  on-surface: "#14213d"
  on-surface-variant: "#5a6b80"
  outline: "#dde3ea"
  error: "#e63946"
typography:
  headline-display:
    fontFamily: Source Sans 3
    fontSize: 48px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Source Sans 3
    fontSize: 36px
    fontWeight: 800
    lineHeight: 1.15
  headline-md:
    fontFamily: Source Sans 3
    fontSize: 22px
    fontWeight: 800
    lineHeight: 1.55
  headline-sm:
    fontFamily: Source Sans 3
    fontSize: 18px
    fontWeight: 800
    lineHeight: 1.25
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.55
  body-md:
    fontFamily: Source Sans 3
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
  label-md:
    fontFamily: Source Sans 3
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.55
  label-sm:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.55
    letterSpacing: 0.1em
rounded:
  sm: 8px
  md: 10px
  lg: 14px
  full: 999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 18px
  lg: 22px
  xl: 32px
  section: 80px
  gutter: 22px
  container-max: 1180px
components:
  nav:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    height: 77px
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    height: 38px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    height: 38px
  feature-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
  code-panel:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
  status:
    textColor: "{colors.error}"
    typography: "{typography.label-sm}"
---

## Overview

AddPipe presents browser-based video, audio, and screen recording as a dependable service for forms and applications. The page pairs bright white and cool-gray surfaces with deep navy text and a vivid mint-green trial action. A dark navy announcement strip sits above the white navigation. The hero uses large, tightly tracked type on the left and a detailed recording-product illustration on the right; below it, customer logos, process diagrams, code examples, and feature cards explain the platform.

## Colors

- **Primary `#14213d`:** Deep navy for headings, navigation text, dark feature panels, and code examples.
- **On-primary `#ffffff`:** White text over navy panels and announcement strips.
- **Secondary `#4ff2a0`:** Bright mint-green fill reserved for the free-trial action.
- **On-secondary `#14213d`:** Navy text on the mint call to action.
- **Surface `#ffffff`:** Navigation, cards, and primary content areas.
- **Surface-container `#f5f7fa`:** Cool light-gray background for hero and content sections.
- **On-surface `#14213d`:** Main body and heading text.
- **On-surface-variant `#5a6b80`:** Supporting paragraphs and helper copy.
- **Outline `#dde3ea`:** Fine boundaries around secondary actions and cards.
- **Error `#e63946`:** Small recording/status indicator, not a general accent.

Keep mint concentrated in the trial CTA and small status marks; navy and cool neutrals should dominate the rest of the interface.

## Typography

Source Sans 3 is the primary family, with occasional Manrope in compact labels. The hero headline is bold, large, and tightly tracked; body copy uses a comfortable 15px/23px rhythm, while explanatory hero text grows to about 22px/34px. Small category labels are uppercase, bold, and widely letter-spaced.

## Layout

A narrow navy announcement strip spans the top, followed by a white navigation row with the AddPipe mark, product links, and trial/demo actions. The hero is a two-column layout inside a centered container of approximately 1180px. The left column carries an oversized headline, supporting paragraph, paired CTAs, and brief trial note; the right column features a recording workflow illustration. Customer logos sit below the hero. Subsequent sections use process steps, side-by-side copy and demos, cards, code samples, and FAQ-style content.

Use a 4px underlying spacing unit, with frequent 8–22px local intervals and large section gaps. Keep the content aligned to a consistent 1180px desktop width.

## Elevation & Depth

Cards use light borders and soft shadows, while code and system diagrams use solid navy fields. Illustrations add depth through floating status pills, outlined controls, and overlapping recording panels. Avoid heavy shadows on plain text sections.

## Shapes

Buttons and feature cards use soft 8–14px rounding. The mint trial CTA is a compact rounded rectangle, not a pill. Small status chips and circular recording indicators may use full rounding. Keep large section backgrounds square-edged.

## Voice & Content Strategy

The copy is technical but accessible, describing concrete workflow outcomes. Examples include “directly to your website or app,” “One pipe from the user's camera to your bucket,” and “A recording client that works across browsers and devices.” CTAs use short action phrases such as “Start free trial” and “Book a demo.” Use direct sentences and clear technical labels rather than abstract slogans.

## Components

### Navigation and announcements

Use a slim dark announcement strip with a short security or platform update, followed by a white navigation bar. Keep menu labels simple and reserve the most saturated color for the trial CTA.

### Hero

Place the large navy headline and supporting copy on the left and a product workflow illustration on the right. Pair the mint “Start free trial” action with a restrained outlined demo action. A short reassurance line belongs beneath the buttons.

### Feature cards

Use white cards with soft corners, fine borders, and concise feature titles. Pair them with small explanatory copy or a visual demo. Maintain consistent card padding and avoid overloading a single card with multiple actions.

### Product demos and code

Use dark navy backgrounds for code examples and media-player mockups. Status indicators, recorder states, and waveform visuals should remain clearly legible against the dark surfaces.

## Do's and Don'ts

- Do anchor the interface in deep navy and cool neutral surfaces.
- Do reserve mint green for the primary free-trial action.
- Do pair large bold hero text with a concrete recording illustration.
- Do keep the announcement strip visually separate from the white navigation.
- Do use soft borders and shadows only on interactive cards and demo panels.
- Do keep the demo CTA outlined and secondary to the trial action.
- Don't spread mint green across large section backgrounds.
- Don't use the red recording status color for unrelated actions.
- Don't crowd the hero with multiple competing CTA colors.
- Don't turn technical explanations into dense, unstructured paragraphs.
