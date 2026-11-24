#!/usr/bin/env node
// Weekly scout: find active GitHub projects about DESIGN.md that the list does
// not link yet, and write them to candidates.md for a human to review.
// Nothing is added to the README automatically.
//
// Needs GITHUB_TOKEN (the default Actions token is enough for search).

import { readFile, writeFile } from "node:fs/promises";

const QUERIES = [
  "DESIGN.md in:name,description,readme",
  "design-md in:name,description",
  "DESIGN.md skill in:name,description",
  "DESIGN.md mcp in:name,description",
  "DESIGN.md extract in:name,description",
];
const MIN_STARS = Number(process.env.MIN_STARS ?? 50);
const MAX_AGE_DAYS = 90;

const token = process.env.GITHUB_TOKEN;
if (!token) throw new Error("GITHUB_TOKEN is required");

const readme = (await readFile("README.md", "utf8")).toLowerCase();
const listed = (fullName) => readme.includes(`github.com/${fullName.toLowerCase()}`);
const since = new Date(Date.now() - MAX_AGE_DAYS * 864e5).toISOString().slice(0, 10);

const found = new Map();
for (const q of QUERIES) {
  const url = new URL("https://api.github.com/search/repositories");
  url.searchParams.set("q", `${q} stars:>=${MIN_STARS} pushed:>=${since} archived:false fork:false`);
  url.searchParams.set("sort", "stars");
  url.searchParams.set("per_page", "30");
  const res = await fetch(url, {
    headers: { authorization: `Bearer ${token}`, accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`search failed: ${res.status} ${await res.text()}`);
  for (const r of (await res.json()).items) {
    if (!listed(r.full_name) && r.full_name.toLowerCase() !== "designmdpro/awesome-design-md") {
      found.set(r.full_name, r);
    }
  }
  await new Promise((r) => setTimeout(r, 3000)); // stay under the search rate limit
}

const rows = [...found.values()].sort((a, b) => b.stargazers_count - a.stargazers_count);
let md = `Projects about DESIGN.md with at least ${MIN_STARS} stars, pushed since ${since}, not yet in the list.\n\n`;
md += `Check each against contributing.md. Close this issue when reviewed; a new one opens next week.\n\n`;
md += rows.length
  ? rows
      .map((r) => `- [ ] [${r.full_name}](${r.html_url}) ★${r.stargazers_count}, pushed ${r.pushed_at.slice(0, 10)}: ${(r.description ?? "").replace(/\s+/g, " ").slice(0, 160)}`)
      .join("\n")
  : "No new candidates this week.";
await writeFile("candidates.md", md + "\n");
console.log(`${rows.length} candidates`);
