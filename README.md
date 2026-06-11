# Portfolio

Live at [www.dineshkumar.design](https://www.dineshkumar.design). Static site deployed on Vercel from `main`.

## Live site files (repo root)

| Path | Purpose |
|---|---|
| `index.html` | Home |
| `about.html` | About |
| `chaos-to-clarity-case-study.html` | Case study |
| `dell-inc-case-study.html` | Case study |
| `loan-deboarding-case-study.html` | Case study |
| `realtime-inquiry-case-study.html` | Case study |
| `api/chat.js` | Folio chat serverless function |
| `ga.js` | GA4 analytics loader |
| `images/` | Only images referenced by live pages |
| `favicon*.png`, `apple-touch-icon.png`, `resume.pdf` | Assets |

## Not deployed (see `.vercelignore`)

| Path | Purpose |
|---|---|
| `_archive/backups/` | Pre-change snapshots of live pages, grouped by page |
| `_archive/experiments/` | Hero/navbar/card explorations, sandboxes, JSX prototypes |
| `_archive/audits/` | 2026 portfolio audit reports, mocks, and QA screenshots |
| `_archive/retired-pages/` | Pages removed from the live site (dell-ai v1) |
| `_archive/images-unused/` | Images no live page references |
| `docs/` | Working notes: site context, formula, briefs |

## Conventions

Edit live pages in place; snapshot to `_archive/backups/<page>/` only when needed. New experiments go straight to `_archive/experiments/`. Keep `images/` limited to assets the live site uses.
