---
version: "1.0.0"
name: AddMe.fun Design System
description: A playful social-quiz publication built on deep plum surfaces, oversized condensed display type, neon-mint section labels, and warm yellow metadata accents.
colors:
  primary: "#FFD166"
  on-primary: "#1A0F2E"
  secondary: "#C9B8FF"
  on-secondary: "#1A0F2E"
  tertiary: "#00E5A0"
  on-tertiary: "#1A0F2E"
  surface: "#1A0F2E"
  on-surface: "#F5F0FF"
  surface-container: "#231836"
  on-surface-container: "#F5F0FF"
  muted: "#F6F0FF8C"
  subtle: "#F6F1FF59"
typography:
  headline-display:
    fontFamily: "Bebas Neue"
    fontSize: 88px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.06em
  headline-md:
    fontFamily: Barlow
    fontSize: 19.2px
    fontWeight: 700
    lineHeight: 1.3
  body-md:
    fontFamily: Barlow
    fontSize: 14.4px
    fontWeight: 400
    lineHeight: 1.6
  label-md:
    fontFamily: "Bebas Neue"
    fontSize: 22.4px
    fontWeight: 700
    lineHeight: 1.7
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Barlow
    fontSize: 12.5px
    fontWeight: 500
    lineHeight: 1.7
    letterSpacing: 0.04em
rounded:
  sm: 2px
spacing:
  xs: 8px
  sm: 12px
  md: 20px
  lg: 24px
  xl: 32px
  container-max: 1200px
components:
  site-title:
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-display}"
  section-label:
    textColor: "{colors.tertiary}"
    typography: "{typography.label-md}"
  article-card:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface-container}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
  article-category:
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  article-title:
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-md}"
  article-description:
    textColor: "{colors.muted}"
    typography: "{typography.body-md}"
  article-metadata:
    textColor: "{colors.subtle}"
    typography: "{typography.label-sm}"
---

## Overview

AddMe.fun is a social-quiz publication about friendship, conversation, and low-pressure ways to meet people. Its visual style is lively and editorial: a deep plum canvas, bold condensed display lettering, bright mint section labels, and warm yellow category accents frame an image-rich article list.

## Colors

Near-black plum is the dominant page surface, with a subtly lighter plum used behind article content. Pale lavender-white carries the main text. Neon mint marks section headings, while warm yellow is reserved for category labels and highlight accents. A soft lavender token rounds out the captured brand palette.

## Typography

Bebas Neue provides the distinctive condensed, uppercase display voice for the site name and section labels. Barlow handles article headlines, body copy, and metadata. Large display type is widely tracked; article titles are compact and bold, while summaries use regular-weight text with a relaxed line-height.

## Layout

The site uses a centered desktop container of about 1200px. A slim header places the wordmark on the left and the short tagline on the right; the main masthead centers the brand and its promise. The latest-articles section begins with a mint label and a fine divider, followed by a two-column grid of large image-led article cards.

## Elevation & Depth

There are no prominent shadows. Depth comes from dark-plum tonal differences between the page and article surfaces, plus large photographic thumbnails. Thin divider lines separate the section title from the content grid.

## Shapes

Article containers and category labels use very small 2px corner rounding. Keep the overall grid crisp and rectangular so the dense editorial content remains orderly.

## Motion & Micro-interaction

No transitions were observed in the captured styles. Keep any future hover feedback restrained and avoid adding motion that competes with the article imagery.

## Voice & Content Strategy

The voice is playful, specific, and socially reassuring. The short promise “Quizzes, prompts, and new friends—come play.” sits above long, witty article titles such as “The Weeknight Plus-One: A 10-Question Audit for Finding Your Local Backup Friend.” Preserve the conversational humor and practical social prompts.

## Components

Article cards pair a wide image with a compact yellow category marker, a bold light title, and a muted summary. The section title is condensed mint lettering beside a horizontal hairline. The two-column grid leaves each story enough room for its descriptive headline without resorting to heavy card chrome.

## Do's and Don'ts

- Do keep the deep plum background as the dominant surface.
- Do use mint for section labels and yellow for category metadata.
- Do use Bebas Neue for display headings and Barlow for readable article copy.
- Do let story photography lead each article card.
- Do keep card corners almost square and avoid prominent shadows.
- Do maintain a centered wide container and two-column article grid.
- Don't use a bright white page background that erases the editorial contrast.
- Don't reduce long, playful headlines to generic one-word labels.
- Don't add extra saturated colors that compete with mint and yellow.
