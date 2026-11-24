#!/usr/bin/env node
// Sync the free DESIGN.md files from DesignMD Pro into design-md/.
//
// Source of truth is https://www.designmdpro.app/llms.txt, which the site
// regenerates about every hour. Each design system in its "## Design systems"
// section ends with "· free" or "· pro". Only free ones are complete files;
// pro ones are public previews and are never copied here.
//
// Usage:
//   node scripts/sync-designmdpro.mjs                 # fetch from the live site
//   node scripts/sync-designmdpro.mjs --llms FILE --md-dir DIR   # offline test
//
// Writes:
//   design-md/<slug>/DESIGN.md   complete file, byte for byte from the site
//   design-md/README.md          generated index
//   sync-summary.md              short summary used as the pull request body

import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const BASE = "https://www.designmdpro.app";
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const OUT = path.join(ROOT, "design-md");
const UA = "awesome-design-md-sync (+https://github.com/designmdpro/awesome-design-md)";

const args = process.argv.slice(2);
const opt = (name) => {
  const i = args.indexOf(name);
  return i === -1 ? null : args[i + 1];
};
const llmsFile = opt("--llms");
const mdDir = opt("--md-dir");

async function getText(url) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(url, { headers: { "user-agent": UA, accept: "text/markdown, text/plain" } });
    if (res.ok) return res.text();
    if (res.status < 500 || attempt === 3) throw new Error(`${url} -> HTTP ${res.status}`);
    await new Promise((r) => setTimeout(r, 2000 * attempt));
  }
}

export function parseLlms(text) {
  const start = text.indexOf("\n## Design systems");
  if (start === -1) throw new Error("llms.txt has no '## Design systems' section");
  const rest = text.slice(start + 1);
  const end = rest.indexOf("\n## ", 3);
  const section = end === -1 ? rest : rest.slice(0, end);

  const items = [];
  let category = "Other";
  const re = /^- \[(.+?)\]\(https:\/\/www\.designmdpro\.app\/websites\/([a-z0-9-]+)\.md\):\s*(.*)$/;
  for (const line of section.split("\n")) {
    if (line.startsWith("### ")) {
      category = line.slice(4).trim();
      continue;
    }
    const m = line.match(re);
    if (!m) continue;
    let [, name, slug, tail] = m;
    let tier = null;
    let description = tail.trim();
    const t = description.match(/(?:^|\s·\s?)(free|pro)$/);
    if (t) {
      tier = t[1];
      description = description.slice(0, t.index).trim();
    }
    items.push({ name, slug, category, description, tier });
  }
  if (items.length < 50) throw new Error(`Only parsed ${items.length} design systems; refusing to sync`);
  return items;
}

function isCompleteDesignMd(text) {
  // A free file starts with YAML front matter. A pro preview starts with
  // "# Name DESIGN.md" followed by a "Public preview" note.
  return text.startsWith("---\n") && !/^> Public preview\./m.test(text.slice(0, 600));
}

function oneLine(s, max = 140) {
  const clean = s.replace(/\s+/g, " ").replace(/\|/g, "\\|").trim();
  return clean.length > max ? clean.slice(0, max - 1).trimEnd() + "…" : clean;
}

function renderIndex(free) {
  const byCat = new Map();
  for (const item of free) {
    if (!byCat.has(item.category)) byCat.set(item.category, []);
    byCat.get(item.category).push(item);
  }
  const cats = [...byCat.keys()].sort((a, b) => (a === "Other") - (b === "Other") || a.localeCompare(b));

  let md = `# DESIGN.md Files\n\n`;
  md += `${free.length} complete DESIGN.md files extracted from real production websites. Copy one into your project root and ask your coding agent to follow it.\n\n`;
  md += `These files are synced weekly from the free tier of [DesignMD Pro](${BASE}), where each one also has a visual preview, revision history and CSS, Tailwind and shadcn exports. Please do not edit them here: open an issue instead.\n\n`;
  md += `\`\`\`sh\ncurl -o DESIGN.md https://raw.githubusercontent.com/designmdpro/awesome-design-md/main/design-md/linear/DESIGN.md\n\`\`\`\n\n`;
  for (const cat of cats) {
    md += `## ${cat}\n\n| Website | Style | Preview |\n| --- | --- | --- |\n`;
    for (const it of byCat.get(cat).sort((a, b) => a.name.localeCompare(b.name))) {
      const desc = it.description ? oneLine(it.description) : "";
      md += `| [${it.name}](${it.slug}/DESIGN.md) | ${desc} | [designmdpro.app](${BASE}/websites/${it.slug}) |\n`;
    }
    md += `\n`;
  }
  md += `---\n\nLike the rest of this repository, these files are released under CC0. Each file describes a public website for design reference and learning. Trademarks, logos, artwork and commercial fonts remain the property of their owners. Neither this repository nor DesignMD Pro is affiliated with or endorsed by any featured brand.\n`;
  return md;
}

async function main() {
  const llms = llmsFile ? await readFile(llmsFile, "utf8") : await getText(`${BASE}/llms.txt`);
  const all = parseLlms(llms);
  const listedFree = all.filter((i) => i.tier === "free");
  console.log(`Parsed ${all.length} design systems, ${listedFree.length} free.`);

  await mkdir(OUT, { recursive: true });
  const existing = new Set(
    (await readdir(OUT, { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name),
  );

  const added = [], updated = [], skipped = [], synced = [];
  for (const item of listedFree) {
    let text;
    try {
      text = mdDir
        ? await readFile(path.join(mdDir, `${item.slug}.md`), "utf8")
        : await getText(`${BASE}/websites/${item.slug}.md`);
    } catch (err) {
      skipped.push(`${item.slug} (${err.message})`);
      if (existing.has(item.slug)) synced.push(item); // keep the last good copy
      continue;
    }
    if (!isCompleteDesignMd(text)) {
      skipped.push(`${item.slug} (not a complete DESIGN.md)`);
      if (existing.has(item.slug)) synced.push(item);
      continue;
    }
    const file = path.join(OUT, item.slug, "DESIGN.md");
    const before = existsSync(file) ? await readFile(file, "utf8") : null;
    if (before !== text) {
      await mkdir(path.dirname(file), { recursive: true });
      await writeFile(file, text.endsWith("\n") ? text : text + "\n");
      (before === null ? added : updated).push(item.slug);
    }
    synced.push(item);
  }

  // A site that moved from free to pro (or was removed) leaves the folder.
  const keep = new Set(synced.map((i) => i.slug));
  const removed = [];
  for (const slug of existing) {
    if (!keep.has(slug)) {
      await rm(path.join(OUT, slug), { recursive: true, force: true });
      removed.push(slug);
    }
  }

  await writeFile(path.join(OUT, "README.md"), renderIndex(synced));

  const list = (xs) => (xs.length ? xs.map((x) => `- ${x}`).join("\n") : "- none");
  const summary =
    `Weekly sync from DesignMD Pro: ${synced.length} free DESIGN.md files.\n\n` +
    `### Added\n${list(added)}\n\n### Updated\n${list(updated)}\n\n### Removed\n${list(removed)}\n\n` +
    `### Skipped\n${list(skipped)}\n`;
  await writeFile(path.join(ROOT, "sync-summary.md"), summary);
  console.log(summary);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
