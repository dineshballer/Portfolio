# Portfolio Context for Claude

Attach this file at the start of any new chat about Dinesh's portfolio. It contains everything Claude needs to pick up where the last conversation left off: design system, case study lineup, voice rules, and collaboration preferences.

---

## 1. Who this is for

**Dinesh Baller**, Senior Product Designer.

- Currently at **Onity Group** (mortgage servicing, financial operations)
- Previously at **Dell** and **Red Hat**
- Focus: operational software, dashboards, internal tools, AI features for enterprise teams
- Tagline he keeps: *"Pushing for progress over pixels"*
- Footer format: `Now @Onity Group · Previously @Dell, @Red Hat`

---

## 2. Working file

The single working file is `index.html` in this folder.

- Edit it in place. Do NOT spin up `hero-v4.html`, `index-new.html`, `hero-fresh.html`, etc. for each change request.
- Only create a new file when Dinesh explicitly asks for "a new version," "a fresh take," or a fundamentally different concept worth keeping side by side.
- If a rename is needed, ask first.

---

## 3. The concept (portfolio v2)

**Chip-rail hero with in-place copy swap.**

A row of 5 chips sits beneath the hero paragraph. Default selected = `THE WORK`. Clicking another chip crossfades the hero paragraph (180ms) with a 12px upward translate. Active chip has a filled background. State persists in URL hash (`#operators`, `#approach`, etc.) so the lens is shareable.

The 5 chips and their lenses:

1. `THE WORK` — what he designs (operational software for financial ops)
2. `THE OPERATORS` — who he designs for (analysts, AMs, ops teams, not "users")
3. `THE APPROACH` — how he works (research-led, structure-first, shipped)
4. `THE BACKSTORY` — career arc (Onity, Dell, Red Hat)
5. `RIGHT NOW` — current focus (mortgage servicing release pipelines, real-time portals)

Inspired by **sanvithi.com** structure, but visually distinct:

- Sanvi's chips are scroll-anchors only; ours are interactive (chip-swap mechanic)
- Sanvi uses pink/purple Framer-default; ours uses warm ivory + deep forest green
- Sanvi uses generic sans throughout; ours pairs Fraunces (display serif) + General Sans (body)
- Hero copy is descriptive and calm, not punchy, matching the Hanson Wu / Jessica Hsu reference style

Do not dilute the chip-swap mechanic back to scroll anchors. That is the differentiator.

---

## 4. Design system

### Type

Hard no on **Inter, Roboto, Arial, Satoshi, Space Grotesk**. All overused. Satoshi was already used in v1.

- **Display:** Fraunces (Google Fonts, variable serif). Name, hero paragraph, case study titles.
- **Body / UI:** General Sans (fontshare) or Geist. Chips, tags, metrics, body text.
- **Italic differentiator:** Fraunces italic on key phrases, used sparingly.

### Color

- Background: warm ivory `#F6F1E8`
- Ink (primary text): `#171717`
- Soft ink (secondary): `#5A5A55`
- Accent (sparingly: active chip, metric numbers, hover): deep forest green `#1F4D3E`
- Case study card surfaces use different muted tones (deep ink blue, muted mint, deep moss green, warm cream, soft peach) so the grid reads as a chord, not monotone.

### Motion

- One high-impact page-load moment: staggered reveal across name, paragraph, chip rail, footer (240ms stagger)
- Chip swap: 180ms crossfade + 12px upward translate on incoming paragraph
- Card hover: 8px lift + soft shadow, 220ms ease-out
- No carousels, no scroll-jacking, no parallax

### Layout

- Max content width: 1100px; max nav width: 1280px
- Vertical rhythm: 96px between major sections, 56px between subsections
- Case studies: vertical stack with alternating image-left / image-right flip
- Negative space is intentional; don't fill every column

### Hard nos (visual)

- Purple gradients on white (AI cliché)
- Generic AI fonts (Inter, Roboto, Arial, Satoshi)
- Centered hero with CTA pill and stats row
- Decorative gradient blobs floating next to copy (Sanvi's Framer-default look)
- Floating decorative shapes with no compositional reason

---

## 5. Hero copy style

Reference portfolios Dinesh likes:

- **Hanson Wu:** *"Hanson Wu is a Principal Product Designer who blends strategic vision with thoughtful craft to create intuitive, impactful experiences."* Third-person, flowing, calm. Serif typeface.
- **Jessica Hsu:** *"Hi, I'm Jessica Hsu, a product designer who crafts experiences with intention."* Greeting + descriptor + italicized differentiator phrase. Subline names industry and values.

What to do:

- Calm, confident, descriptive sentences. Not dramatic. Not punchy.
- Specific to actual work: operational software, dashboards, internal tools, AI features.
- Industry context: mortgage servicing, financial operations (Onity), previously Dell + Red Hat.
- Fraunces italic for the differentiator phrase.

What to AVOID in hero copy:

- Hero-word stunts ("obvious", "fighting", "stick", "translate", and similar)
- "4+ years" or any experience numbers
- "AI-powered" (buzzword)
- "real teams" / "real problems" (corny)
- "simplify complex workflows" (explicit reject)
- Generic categories alone, like "UX designer for B2B and AI tools"
- Drama or self-deprecation

---

## 6. Case study lineup

Five case studies. Titles are written in Sanvi-style first-person: *"I [verb] [thing] that [outcome / who]."* Tags joined by `∙`. Two metrics on the card surface.

**1. Real-Time Inquiry Portal, Onity**

> I designed a real-time portal where mortgage clients can track every inquiry, message teams inline, and skip the bi-weekly status meeting, cutting case resolution by 62% and giving account managers six hours of their week back.

Tags: `Enterprise SaaS ∙ Interaction Design ∙ Mortgage Servicing ∙ Shipped`
Metrics: `62% faster resolution · 6 hrs saved weekly per AM`

**2. Loan Deboarding Portal, Onity**

> I designed one release pipeline that absorbs how each client prepares its data, so analysts can validate, reconcile, and ship a loan release from a single record instead of stitching exceptions across spreadsheets.

Tags: `Enterprise SaaS ∙ Research-led ∙ Mortgage Servicing ∙ 0 to 1 ∙ Shipped`
Metrics: `9/9 found status unaided · ~6 hrs saved weekly per analyst`

**3. AI Sales Enablement, Dell**

> I redesigned Dell's AI sales platform to fold six scattered tools into one conversational interface, lifting AI adoption by 85% and cutting support tickets by 55% across enterprise sales.

Tags: `AI Tools ∙ Enterprise SaaS ∙ Sales Enablement ∙ Shipped`
Metrics: `85% AI adoption lift · 55% tickets reduced`

**4. Intelliassist (GEN-AI Chat), Dell**

> I built a GEN-AI sales chat that pulls product info, order data, and sales playbooks into one place, landing 92% task completion and replacing six separate tools for Dell's enterprise sales teams.

Tags: `GenAI ∙ Conversational UI ∙ Enterprise SaaS ∙ Shipped`
Metrics: `92% task completion · 6+ tools replaced`

Note: Cards 3 and 4 are two angles on the same Dell AI product. Decision pending on whether to merge or pair them.

**5. Information Architecture, Dell INC**

> I led the redesign of Dell's Information Network Center, restructuring the IA so designers and researchers could finally find each other's work, with 40% better findability and 70% easier access across teams.

Tags: `IA ∙ Design Systems ∙ Research ∙ Shipped`
Metrics: `40% findability lift · 70% ease of access boost`

Rules for case studies: use these titles verbatim unless Dinesh edits them. Don't add "AI-powered" or "4+ years" or generic descriptors. Metrics belong on the card surface, not buried in the case study body.

---

## 7. Voice rules (apply everywhere)

**No em dashes.** Anywhere. Case studies, hero copy, AI chat prompts, card titles, body text, all of it.

Substitute with:

- Comma, if the clause is parenthetical
- Period + new sentence, if the dash was acting as a hard break
- Colon, if the clause introduces a list or expands a point
- Restructure entirely, if none of the above feel natural

This applies to the API chat system prompt too. When editing `api/chat.js`, rewrite any em dashes there, and include an explicit instruction in the system prompt: *"Never use em dashes in responses."*

---

## 8. How Dinesh likes to collaborate

### Starting points (structural mimicry)

When Dinesh asks for something "like [reference]" as a starting point, his intent is to see the reference's structure with his content, so he can direct changes from there. He is not asking for an opinion on whether the reference is the right model.

- Match the reference's layout and information density first (chips on top, one-line descriptor, whatever the reference does)
- Use Dinesh's content, not the reference's
- Keep type, color, and visual identity ours (IP-safe boundary)
- Save the senior-designer critique for AFTER he sees v0; let him direct iteration

### Iteration

- Edit the current working file in place. Don't create variant files for each change.
- One file, many edits.

### Preview, not code

After every change, end the response with a clickable `computer://` link to the affected file. Do not dump code snippets unless he explicitly asks "show me the code."

Example: `[View the page](computer:///Users/dinesh/Documents/Claude/Projects/Portfolio/index.html)`

For files that aren't directly renderable (api/chat.js, .css), still link them but note he'll need to view source. A 1-3 paragraph plain-English summary of what changed is welcome. Code blocks are not.

---

## 9. Frontend design principles (applies to all UI work)

Source: Anthropic's frontend-design skill.

Before generating UI, decide:

- **Purpose:** what problem does this interface solve, who uses it
- **Tone:** commit to one extreme (editorial, brutalist, luxury, organic, etc.). Don't pick "modern."
- **Constraints:** framework, performance, accessibility
- **Differentiation:** the ONE thing someone remembers

Then build: production-grade, visually striking, cohesive in POV, meticulously refined.

Aesthetic rules summary:

- Distinctive type pairings, not Inter / Roboto / Arial
- Cohesive color story with dominant + accent, not timid even palettes
- Atmosphere and depth over flat solid colors (gradient mesh, noise, grain, layered transparency)
- Unexpected layouts, asymmetry, intentional negative space
- One well-orchestrated motion moment beats five micro-interactions

Elegance comes from executing the vision well, not from playing it safe.

---

## 10. Quick-start checklist for a new chat

When picking this project back up, Claude should:

1. Read this file end to end
2. Open `index.html` to see current state
3. Confirm any pending decision (e.g. merge Dell cards 3 and 4)
4. Make changes in `index.html` in place
5. Reply with a 1-3 paragraph summary + a `computer://` link, no code blocks
6. Use no em dashes
