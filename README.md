# Awesome DESIGN.md [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A plain-text format that describes a visual design system so AI coding agents can build UI that matches it.

DESIGN.md pairs machine-readable design tokens (YAML front matter for colors, typography, spacing, radii and components) with human-readable rationale in Markdown. Drop one in a project root and agents such as Claude Code, Cursor, Codex or Google Stitch stop guessing how the UI should look.

This list collects the spec, tools, collections and agent integrations around the format. Looking for ready-to-use files instead? See [`design-md/`](design-md/), a folder of complete DESIGN.md files extracted from real websites.

## Contents

- [Specification](#specification)
- [Collections](#collections)
- [Directories](#directories)
- [Extraction Tools](#extraction-tools)
- [Validation and Export](#validation-and-export)
- [Agent Skills and MCP Servers](#agent-skills-and-mcp-servers)

## Specification

- [google-labs-code/design.md](https://github.com/google-labs-code/design.md) - The format specification from Google Labs, with a reference CLI to lint, diff and export DESIGN.md files.
- [@google/design.md](https://www.npmjs.com/package/@google/design.md) - npm package of the reference CLI (`npx @google/design.md lint DESIGN.md`).
- [Google Labs announcement](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/) - Google's announcement of the format and why it was open-sourced.

## Collections

Repositories that ship DESIGN.md files you can copy into a project.

- [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) - The largest community collection of brand DESIGN.md files, each with an HTML preview.
- [VoltAgent/official-design-md](https://github.com/VoltAgent/official-design-md) - DESIGN.md files that companies publish themselves.
- [VoltAgent/awesome-claude-design](https://github.com/VoltAgent/awesome-claude-design) - Design-system inspirations in DESIGN.md format, tuned for Claude Design.
- [kzhrknt/awesome-design-md-jp](https://github.com/kzhrknt/awesome-design-md-jp) - DESIGN.md files focused on Japanese typography and UI conventions.
- [Meliwat/awesome-ios-design-md](https://github.com/Meliwat/awesome-ios-design-md) - Mobile app design systems with SwiftUI, Jetpack Compose and Expo variants.
- [cola-runner/awesome-tui-design](https://github.com/cola-runner/awesome-tui-design) - DESIGN.md files for terminal user interfaces such as Lazygit, btop and k9s.
- [educlopez/design-bites](https://github.com/educlopez/design-bites) - Hand-picked DESIGN.md files for websites with a strong visual identity.
- [scroobius-pip/fudge-design-md](https://github.com/scroobius-pip/fudge-design-md) - DESIGN.md guides generated from captured website references.

## Directories

Searchable websites that host DESIGN.md files.

- [DesignMD Pro](https://www.designmdpro.app) - Directory of DESIGN.md files extracted from production websites, with revision history, a validator and token exporters. Maintained by the authors of this list.
- [getdesign.md](https://getdesign.md) - Web front end for the VoltAgent collection, with previews and requests for new sites.
- [TypeUI](https://www.typeui.sh/design-skills) - Registry of design skills available as DESIGN.md or SKILL.md, with a CLI to pull them into a project.

## Extraction Tools

Turn an existing website or design file into a DESIGN.md.

- [Dembrandt](https://github.com/dembrandt/dembrandt) - CLI that extracts a site's tokens, logo and typography, and can write a DESIGN.md (`--design-md`).
- [design-md-chrome](https://github.com/bergside/design-md-chrome) - Chrome extension that captures styles from the current page and generates a DESIGN.md.
- [design-md-figma](https://github.com/bergside/design-md-figma) - Figma plugin that turns local styles into DESIGN.md and SKILL.md files.
- [brandmd](https://github.com/yuvrajangadsingh/brandmd) - Extracts a website's design system into a DESIGN.md that passes the official linter.
- [insane-design](https://github.com/fivetaku/insane-design) - One-shot extractor that reads real CSS and outputs a DESIGN.md plus an interactive HTML report.
- [design-md-extractor](https://github.com/jpoindexter/design-md-extractor) - CLI and local GUI that produce a DESIGN.md, tokens and prompts from a URL.

## Validation and Export

- [DESIGN.md linter](https://github.com/google-labs-code/design.md#lint) - Checks token references, structure and WCAG contrast, with JSON output for agents.
- [DesignMD Pro validator](https://www.designmdpro.app/validator) - Browser-based DESIGN.md validator with contrast checks. Maintained by the authors of this list.

## Agent Skills and MCP Servers

- [oh-my-design](https://github.com/kwakseongjae/oh-my-design) - One command that installs graded DESIGN.md references and skills into Claude Code, Codex and Cursor.
- [anydesign](https://github.com/uxKero/anydesign) - Claude skill that builds a DESIGN.md from screenshots, websites or Figma files.
- [brand-to-design-md-skill](https://github.com/shaom/brand-to-design-md-skill) - Portable skill that turns a public brand URL into a source-aware DESIGN.md.
- [DesignMD Pro MCP server](https://www.designmdpro.app/integrations/mcp) - Streamable HTTP MCP server with `search_websites` and `get_design_md` tools, also listed in the [Claude connector directory](https://claude.ai/directory/designmdpro). Maintained by the authors of this list.

## Related Lists

- [awesome-design-skills](https://github.com/bergside/awesome-design-skills) - DESIGN.md and SKILL.md design skills for agentic tools.
- [awesome-claude-design](https://github.com/rohitg00/awesome-claude-design) - Prompts, remix recipes and community notes for Claude Design.

## Contributing

Contributions are welcome. Read the [contribution guidelines](contributing.md) first.

## Footnotes

The files in `design-md/` are synced from DesignMD Pro's free tier and, like the rest of this repository, are dedicated to the public domain under CC0. Every DESIGN.md describes a public website for reference and learning; trademarks, logos and commercial fonts remain the property of their owners, and this project is not affiliated with any featured brand.
