# Portfolio design notes (living reference)
Updated 2026-06-29. Captures Dinesh's design preferences, the hero direction, and the old design being replaced. Read this before any UI work.

## Visual system
- Base warm ivory `#fafaf7` (white surfaces `#fff`), ink `#171717`, soft inks `#4a4a4a` / `#6E675C`.
- Type: Hanken Grotesk, single family (headings 600, body 400, italic accents). Caveat for the wordmark only.
- Less is more. Neutral base + ONE accent used sparingly (one headline phrase, links, status dot, key numbers). Never two competing accents on the same surface.
- Icons: inline Lucide-style SVG (chips on cards, bare line on inline lists). NO emoji icons (replaced site-wide 2026-06-29). The one exception kept: the wave on the about hero.

## Accent color (DECIDING, in flux)
- Moving OFF the original forest green `#1F4D3E` (reads a bit dull / corporate-calm).
- CHOSEN 2026-06-29: **Cobalt `#1B54C0`** (soft `#E7EEFB`), applied site-wide this week ("cobalt for this week"). **Emerald `#0B7A53`** (soft `#E2F2EB`) is PARKED for later, Dinesh may revisit green.
- For reference: his resume uses a teal-green `#16a085`. Greens also considered: deep pine `#14523F`, bottle `#0B3D2E`. Non-green alts: indigo `#2E3A8C`, terracotta `#BE4A2B`.
- Color-psychology rationale: blue = trust/competence but generic and an "AI-default" risk; green = trust + growth + finance, more distinctive; a single sparing cobalt accent reads decisive/enterprise; emerald reads modern/fintech-fresh. Recruiters reward restraint (mostly neutral + one accent), which signals seniority.
- Accessibility: tune a slightly darker step for small-text links (emerald and terracotta are borderline AA as body text on white).
- Per-case-study tints can vary within the chosen family later (loan / RTI / IntelliAssist / Dell INC / design system).
- Applied to prod 2026-06-29: cobalt swapped for the old forest green `#1F4D3E` across all live files (`--accent` `#1B54C0`, `--accent-soft` `#E7EEFB`, darker hover `#1746A3`). Status greens (available / now dots, `#1d6e47`, `#28a868`) deliberately kept green.

## Hero direction (approved shape, awaiting color)
- KEEP the tab interaction. Tabs: **What I do · Who it's for · How I work · Where I've been** (renamed from "The path"; old "Now" tab dropped, its content folded in).
  - What I do: "I design B2B enterprise products that solve complex workflows, and I push for progress over pixels."
  - Who it's for: analysts, account managers, ops teams in mortgage / lending.
  - How I work: research-led, structure-first; sit in the workflow before drawing a screen.
  - Where I've been: Now at Onity. Dell and Red Hat before that.
- Fix the "stacked layers" feel: one small kicker ("Hi, I'm Dinesh, a senior product designer"), then the BIG changing line as the single focal point, tabs quiet underneath, chat pill with real breathing room. One subtle fade on tab switch.
- Sage chat default is "Ask me anything about Dinesh" (the job-description prompt is demoted to a later option; JD auto-detection still flips to recruiter mode).

## Reference heroes Dinesh likes (less-is-more)
Komal (GIZ India), "Great products must feel good", Shubham Tyagi (ET Money), Vishesh Patel, the Hindustan Times designer, Leah Kim (Toronto), Deepen (Bangalore). Shared pattern: near-neutral base, ink text, ONE accent phrase, a small "available / currently at X" pill, generous whitespace.

## Taste-skill (apply before UI work)
- Source: github.com/Leonxlnx/taste-skill, default skill `design-taste-frontend` (v2). Cloned + read 2026-06-29.
- Anti-slop: read the brief and state a one-line Design Read first; keep it calm; no emoji; no em dashes; distinctive type; avoid AI defaults (purple gradients, centered-over-mesh, three equal feature cards, Inter + slate). Dials VARIANCE / MOTION / DENSITY; for this portfolio keep them low (about 5 / 3 / 2, calm editorial).

## Hard nos / working style
- No em dashes anywhere in prose.
- No AI-tells: stacked negation/contrast ("not X, it's Y"), tricolon overload, "AI-powered", "seamless / elevate", round metrics without a baseline.
- No emoji icons (use SVG). No auto-backup files. Edit live files in place; never spin up v4 / new copies.
- Propose first (mockup / inline preview), implement in prod only after approval. Show previews inline (widgets) since Dinesh often cannot open files directly.

## Archived: the OLD hero (pre-2026-06-29)
Forest green `#1F4D3E` chip-rail hero with 5 lens chips (What I do / Who it's for / How I work / The path / Now), each rewriting a single line in place; greeting "Hi, I'm Dinesh." with a wavy underline, then the Sage chat morph pill. Felt crowded and stacked; being simplified into the hero direction above.

## Resume (now live as /resume.pdf, the "Grainger" version)
- Senior UX Designer | Product Designer. Houston, TX, open to relocation. dineshkravikumar@gmail.com · 857-210-9409 · dineshkumar.design · linkedin.com/in/dineshkravikumar.
- Onity Mortgage (Jul 2025 to present), Dell Technologies (Jun 2022 to Jul 2025), Red Hat co-op (Jul 2021 to Jan 2022), Freelance (2018 to 2019).
- Numbers used: RTI 62% faster resolution + 90% found status unaided; loan ~6 hrs/week saved per analyst; Dell IntelliAssist 55% fewer tickets + self-serve 92%; portal findability 40%; data-viz design system 70% fewer inconsistencies; dashboards 30% task-time; Red Hat 45% discoverability + WCAG AA with 50+ testers.
- CONSISTENCY FLAGS to resolve: resume says self-serve **92%** but the site + metrics-canon say **85%** (pick one). Resume says "Onity Mortgage"; the site says "Onity Group". Contact email on resume + site = dineshkravikumar@gmail.com (canon updated to match; the old dineshballer@gmail.com was Dinesh's personal Claude login, not his professional contact).
