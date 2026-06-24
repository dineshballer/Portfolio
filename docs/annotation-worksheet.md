# Annotation worksheet — key screens (Loan + RTI)

How to use: fill the **Note:** line under each marker with the wording you want in the tooltip (1-2 sentences). Trim any markers you don't want, add ones I missed. Aim for 3-4 markers per screen so it stays clean. Each marker also has a short **Tag:** (the little label above the tooltip) you can keep or change.

Placement: these replace the existing static images in the solution sections, in place. The end-of-page "shipped screens" carousel stays a plain gallery.

Screens chosen (swap any you don't think are key):

---

## LOAN DEBOARDING

### 1. Release Dashboard  ·  `loan-hero-release-dashboard.png`
Section: "A tracked pipeline / The risky loans rise to the top"
- **M1** — the **"At Risk" summary card** (1 · SLA breach, needs action)
  - Tag: ___  ·  Note: ___
- **M2** — the **SLA column cell "Overdue · 8d"** (red)
  - Tag: ___  ·  Note: ___
- **M3** — the **status chips** (At Risk / Tagged / Scheduled / Released / Received)
  - Tag: ___  ·  Note: ___
- **M4** — the **"At Risk only" quick filter**
  - Tag: ___  ·  Note: ___
- (optional M5 — "Unassigned" owner on REL-2026-0045)

### 2. Bulk Upload Validation  ·  `loan-bulk-upload-validation.png`  (already approved in demo)
Section: "A confirmed submission / Validation moved to the door"
- **M1** — "13 columns detected · format OK" check  ·  Tag: Validation at the door  ·  Note: *The moment the file lands, the portal checks column structure against the expected template. 13 of 13 columns detected, format OK. A wrong report version or missing field is caught here, not three days later.*
- **M2** — "147 of 147 matched by loan number" check  ·  Tag: PAs auto-matched  ·  Note: *Every Purchase Advice is matched to a loan number on upload. 147 of 147 means nothing is orphaned downstream in reconciliation.*
- **M3** — green "Saved mapping recognized" banner  ·  Tag: Saved mapping recognized  ·  Note: *The portal recognizes the client's saved column mapping (Standard 15-day template), so repeat submitters skip remapping. One click to confirm or switch.*
- **M4** — "147 loans auto-detected" box  ·  Tag: Loan numbers parsed automatically  ·  Note: *147 loan numbers read straight from the spreadsheet, so the analyst never rekeys them.*
- (edit any of the above if you want)

### 3. Milestone Timeline  ·  `loan-milestone-timeline.png`
Section: "A tracked pipeline / Every milestone, timestamped on the record"
- **M1** — the **"Next step" banner** (Goodbye letter drafting, ETA Feb 21, no action needed from you)
  - Tag: ___  ·  Note: ___
- **M2** — the **milestone timeline with per-loan progress** (Goodbye Letter Sent, 7 / 14, in progress)
  - Tag: ___  ·  Note: ___
- **M3** — the **SLA timers** (Acknowledge / Tag = Done, Schedule = 2d left)
  - Tag: ___  ·  Note: ___
- **M4** — the **Actions** (Raise Exception / Escalate to Manager / Export Record)
  - Tag: ___  ·  Note: ___
- (optional M5 — loan-level view: per-loan stage + days in stage)

### 4. Reconciliation Snapshot  ·  `loan-reconciliation-snapshot.png`
Section: "A tracked pipeline / One source of truth after release"
- **M1** — **"5 of 6 transactions matched · 1 pending review · 83%"**
  - Tag: ___  ·  Note: ___
- **M2** — the **unmatched transaction** ("$1,320 · Needs review", red row)
  - Tag: ___  ·  Note: ___
- **M3** — the **Cash Flow Summary** tie-out (Reconciled total $1,847,253)
  - Tag: ___  ·  Note: ___
- **M4** — the **transaction match statuses** (Matched / Needs review)
  - Tag: ___  ·  Note: ___

---

## REAL-TIME INQUIRY

### 5. Inquiry Dashboard  ·  `rti-hero-dashboard.png`
Section: "Dashboard view / One screen, every case at a glance"
- **M1** — the **summary cards** (Open Inquiries / With Onity / Waiting on you / Total Cases)
  - Tag: ___  ·  Note: ___
- **M2** — the **"Waiting on you" card** (whose-court signal)
  - Tag: ___  ·  Note: ___
- **M3** — the **status chips** (With Onity / Waiting on you / Resolved)
  - Tag: ___  ·  Note: ___
- **M4** — the **Days column** (aging) and the **row expand chevron**
  - Tag: ___  ·  Note: ___

### 6. Case Overview (expanded)  ·  `rti-final-overview.png`
Section: "Final Design / Overview tab"
- **M1** — the **inline progress tracker** on the expanded row
  - Tag: ___  ·  Note: ___
- **M2** — the **Case Details panel** (Onity contact, team, ETA, loan #, borrower)
  - Tag: ___  ·  Note: ___
- **M3** — the **Timeline panel** (Submitted / Assigned / Message from Onity / Document uploaded)
  - Tag: ___  ·  Note: ___
- **M4** — the **tabs** (Overview / Conversation / Documents / Resolution & Escalation)
  - Tag: ___  ·  Note: ___

### 7. Progress Tracker  ·  `rti-progress-tracker.png`
Section: "Case detail view / Progress you can read at a glance"
- **M1** — the **4-stage tracker** (Submitted → Assigned → With Onity → Resolved)
  - Tag: ___  ·  Note: ___
- **M2** — the **current stage** ("With Onity · Next update by Oct 23")
  - Tag: ___  ·  Note: ___
- **M3** — the **ETA** ("Resolved · Est Oct 30")
  - Tag: ___  ·  Note: ___

### 8. Resolution & Escalation  ·  `rti-case-resolution.png`
Section: "Case detail view / A clear way to close, or escalate"
- **M1** — the **Outcome dropdown** ("Resolved — payment method updated")
  - Tag: ___  ·  Note: ___
- **M2** — the **Closing comment** field
  - Tag: ___  ·  Note: ___
- **M3** — the **Escalate vs Confirm & Close** buttons
  - Tag: ___  ·  Note: ___
- **M4** — the **"About Escalation" explainer** (AM notified, supervisor 24h, logged)
  - Tag: ___  ·  Note: ___

---

Reply with the notes (here in chat or filled into this file) and I'll build all eight in place. If you'd rather I draft a first pass for you to edit instead, just say so.
