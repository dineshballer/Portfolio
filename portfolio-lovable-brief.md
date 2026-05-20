# Portfolio Brief — for Lovable

A complete spec for rebuilding Dinesh Baller's portfolio. Hand this file to Lovable as the source of truth.

---

## 1. The big idea

A single-page portfolio for a senior product designer working in financial operations. The defining feature is the **hero chip rail**: five chips sit beneath the hero copy, and clicking each one rewrites the hero paragraph in place — five lenses on the same person, instead of five separate sections you scroll through.

Inspired by sanvithi.com's "WHO I AM / WHAT I CARE ABOUT" chip pattern, but evolved: hers anchor to sections, ours rewrite the hero so the visitor compares lenses without leaving the top of the page.

**Identity in one line:** Dinesh designs operational software — dashboards, internal tools, AI features — for the people running financial operations.

**Tone:** calm, confident, descriptive. Not punchy, not corny, not buzzword-y. No "AI-powered," no "4+ years," no "simplify complex workflows."

---

## 2. Page structure (top to bottom)

1. **Nav** — minimal: name on the left, "Work / Story / Résumé / Email" on the right.
2. **Hero** — name, descriptor sentence, chip rail (5 chips), footer line.
3. **Selected work** — five case study cards.
4. **About / Story** — short paragraph + résumé link.
5. **Footer** — email, LinkedIn, copyright.

---

## 3. Hero — the chip rail

### Layout

```
[ small label: PRODUCT DESIGNER ]

Dinesh Baller
{hero paragraph — swaps based on selected chip}

[ THE WORK ] [ THE OPERATORS ] [ THE APPROACH ] [ THE BACKSTORY ] [ RIGHT NOW ]

Now @Onity Group · Previously @Dell, @Red Hat
```

### Chip behavior

- Default selected state: `THE WORK`.
- Clicking another chip:
  - Crossfades the hero paragraph (180ms fade out, 12px upward translate on the new copy, 180ms fade in).
  - Updates an underline indicator beneath the active chip.
  - Persists the selected chip in URL hash (`#approach`, `#operators`, etc.) so the state is shareable.
- Hover state: subtle underline + chip background lightens.
- Chips are styled as small pill buttons — text, no icons. Active chip has a filled background; inactive chips are outlined only.

### The five chips and their hero copy

**1 · THE WORK** *(default)*
> Dinesh designs operational software — dashboards, internal tools, and AI features — for the people running financial operations. Most of his work lives inside the systems that move money, loans, and customer cases between teams.

**2 · THE OPERATORS**
> He designs for operators, not consumers. The analysts who reconcile loan releases, the account managers chasing inquiries across email threads, the sales reps stitching six tools together to answer one customer question. His job is making their day quieter.

**3 · THE APPROACH**
> Research-led, structure-first, shipped. He pushes for progress over pixels — clarifying the problem before drawing the screen, and getting something into production before perfecting the polish.

**4 · THE BACKSTORY**
> Now at Onity Group, designing for mortgage servicing operations. Previously at Dell, redesigning enterprise sales tooling and AI sales assistants. Before that, Red Hat. Roughly a decade of operational software across hardware, open source, and fintech.

**5 · RIGHT NOW**
> Designing release pipelines and real-time client portals in mortgage servicing. Quietly obsessed with what happens to a workflow when you stop treating exceptions as exceptions.

---

## 4. Selected work — five case study cards

Each card follows the same template:

```
[ chip: Project name · Company ]

I [verb] [thing] that [outcome / who it serves].

[ tag · tag · tag · tag ]

[ metric ]  [ metric ]
```

### Card 1 — Real-Time Inquiry Portal · Onity

**Title:**
> I designed a real-time portal where mortgage clients can track every inquiry, message teams inline, and skip the bi-weekly status meeting — cutting case resolution by 62% and giving account managers six hours of their week back.

**Tags:** `Enterprise SaaS ∙ Interaction Design ∙ Mortgage Servicing ∙ Shipped`

**Metrics:**
- `62%` Faster case resolution
- `6 hrs` Saved weekly per manager

**Card color:** deep ink blue, cream text.

### Card 2 — Loan Deboarding Portal · Onity

**Title:**
> I designed one release pipeline that absorbs how each client prepares its data — so analysts can validate, reconcile, and ship a loan release from a single record instead of stitching exceptions across spreadsheets.

**Tags:** `Enterprise SaaS ∙ Research-led ∙ Mortgage Servicing ∙ 0 to 1 ∙ Shipped`

**Metrics:**
- `9/9` Prototype users found status unaided
- `~6 hrs` Saved weekly per analyst

**Card color:** muted forest / mint, dark text.

### Card 3 — AI Sales Enablement · Dell

**Title:**
> I redesigned Dell's AI sales platform to fold six scattered tools into one conversational interface — lifting AI adoption by 85% and cutting support tickets by 55% across enterprise sales.

**Tags:** `AI Tools ∙ Enterprise SaaS ∙ Sales Enablement ∙ Shipped`

**Metrics:**
- `85%` AI adoption lift
- `55%` Support tickets reduced

**Card color:** deep moss green, cream text.

### Card 4 — Intelliassist (GEN-AI Chat) · Dell

**Title:**
> I built a GEN-AI sales chat that pulls product info, order data, and sales playbooks into one place — landing 92% task completion and replacing six separate tools for Dell's enterprise sales teams.

**Tags:** `GenAI ∙ Conversational UI ∙ Enterprise SaaS ∙ Shipped`

**Metrics:**
- `92%` Task completion
- `6+ tools` Replaced by one

**Card color:** warm cream / pale yellow, dark text.

*Note: Cards 3 and 4 are two angles on the same Dell AI product. Consider merging into one richer case study with both metric sets, or keep them paired as "the platform" and "the interface."*

### Card 5 — Information Architecture · Dell INC

**Title:**
> I led the redesign of Dell's Information Network Center, restructuring the IA so designers and researchers could finally find each other's work — 40% better findability and 70% easier access across teams.

**Tags:** `IA ∙ Design Systems ∙ Research ∙ Shipped`

**Metrics:**
- `40%` Findability lift
- `70%` Ease of access boost

**Card color:** soft peach / terracotta, dark text.

---

## 5. About / Story section

Short paragraph below the work grid:

> Dinesh has spent roughly a decade designing the software that keeps operational teams moving — loan releases at Onity, AI sales tooling at Dell, support and dashboards at Red Hat. He writes about the work occasionally, draws diagrams compulsively, and is most interested in the moment a workflow stops being held together by spreadsheets.

Two links beneath: `Résumé` and `Email`.

---

## 6. Design direction

### Typography

**Do not use Inter, Roboto, Arial, or Satoshi.** These are AI defaults and Dinesh has used Satoshi heavily already. Time to switch.

**Recommended pairing:**
- **Display:** *Fraunces* (variable serif from Google Fonts) — used for the name, hero paragraph, and case study titles. Slightly characterful, calm, not cold.
- **Body & UI:** *Geist* (Vercel's sans, available on fontshare) or *General Sans* (fontshare) — used for chips, tags, metrics, body text.

**Italic differentiator:** in the hero, the phrase *"for the people running financial operations"* in `THE WORK` chip can be set in Fraunces italic for emphasis.

### Color

**Don't use purple-gradient-on-white.** Pick a dominant + accent system with atmosphere:

- **Background:** warm ivory (`#F6F1E8`) — slightly creamier than `#FAFAF7`, less generic.
- **Ink:** near-black (`#171717`).
- **Soft ink:** `#5A5A55`.
- **Accent:** deep forest green (`#1F4D3E`) — used sparingly for hover states, the active chip, metric numbers, and one or two interaction details.
- **Card surfaces:** each case study card uses a different muted tone (see colors per card above) so the grid reads as a chord, not a monotone.

Optional: add a faint grain/noise texture to the page background for depth.

### Motion

- One high-impact moment on page load: hero copy reveals with a 240ms stagger across name → paragraph → chip rail → footer line.
- Chip swap: 180ms crossfade + 12px translate-up on the new paragraph.
- Case study cards: 8px lift + soft shadow on hover, 220ms ease-out.
- No carousel auto-play, no scroll-jacking, no parallax.

### Layout rules

- Max width: 1100px content, 1280px nav.
- Vertical rhythm: 96px between major sections, 56px between subsections.
- Cards arranged in a vertical stack with alternating flip (image left / image right) — same pattern as the existing `case-study-card-minimal.html`.
- Generous negative space; do not fill every column.

---

## 7. Nav

```
DINESH BALLER          Work    Story    Résumé    Email
```

- Sticky on scroll with a subtle background blur once the user scrolls past the hero.
- "Work" scrolls to the case studies grid. "Story" scrolls to the about paragraph. "Résumé" opens a PDF in a new tab. "Email" triggers `mailto:dineshballer@gmail.com`.

---

## 8. Footer

```
dineshballer@gmail.com    LinkedIn    Read.cv

© Dinesh Baller 2026. Built with care, shipped with intent.
```

---

## 9. Lovable build notes

- **Framework:** React with Tailwind (Lovable default).
- **State:** the active chip lives in a single piece of state at the page level; URL hash sync via `useEffect` listening to `window.location.hash`.
- **Accessibility:**
  - Chips must be `<button>` elements with `aria-pressed` reflecting active state.
  - Chip rail should be a `role="tablist"` with each chip as `role="tab"` and the hero paragraph as `role="tabpanel"` linked by `aria-controls`.
  - Keyboard: arrow keys move between chips, Enter/Space activates.
  - Color contrast: all text ≥ 4.5:1 against its background. Verify the cream backgrounds especially.
- **Performance:** preload Fraunces and the body sans. No analytics, no chat widgets, no cookie banners.

---

## 10. What to ask Lovable for first

Start with a single prompt covering:

> Build a single-page personal portfolio for a senior product designer. Hero contains a name, a paragraph of intro copy, and a horizontal rail of five "chip" buttons. Clicking a chip swaps the hero paragraph with a crossfade + 12px translate. Below the hero, a vertical stack of five case study cards with alternating image alignment. Use Fraunces for display and General Sans for body. Background ivory `#F6F1E8`, ink `#171717`, accent forest green `#1F4D3E`. The five chips and their paragraphs, and the five case studies with their titles, tags, and metrics, are all defined in the spec I'm pasting next.

Then paste sections 3 and 4 of this brief.

---

## 11. Reference patterns to study

- **sanvithi.com** — the chip rail mood and the first-person case study titles.
- **Hanson Wu (principal product designer)** — calm third-person voice in the hero.
- **Jessica Hsu** — italicized differentiator phrases.

Avoid imitating any of them literally. The goal is *recognizably Dinesh*, not *recognizably Sanvi*.
