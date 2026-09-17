# Sky Quantech AI — Homepage v2 build plan (Apple × Neara)

Handoff for the next session. The React/Next rebuild (branch `redesign/react-next`)
is the current base — v1 is clean but the owner rates it "20% there." This plan takes
the **homepage** to the bar of the owner's references: **apple.com** and **neara.com**.

## Hard constraints (from the owner)
- **Do NOT change or edit the existing content/copy.** Reuse what already lives in
  `lib/site.ts` and the current pages. You may reuse a subset — using all of it is not
  required — but do not rewrite claims or invent company facts (no client names,
  metrics, certifications, headcount). Case-study items stay labelled "Illustrative".
- **Both themes always.** Every new section must look right in light AND dark (tokens
  in `app/globals.css`; never hard-code hex in components).
- Keep it accessible + responsive (375/768/1440), one `<h1>`/page, `npm run build` green.
- Motion is one or two orchestrated moments, not effects on everything (Apple restraint).

## What makes the references work
**Apple:** cinematic restraint — oversized type, full-bleed imagery, huge negative
space, scroll-driven reveals where sections pin/animate, near-zero chrome.

**Neara** (closest to our domain — grid/infrastructure digital twin):
- Giant headline + cinematic 3D hero of their actual domain (terrain + highlighted lines).
- **Numbered scrollytelling spine**: 01 See every asset → 02 Trace a failure → 03 Act,
  each paired with a **product-UI panel** (data readouts, health scores, status chips).
- "One model, from data to decisions": build → simulate → act.
- Solutions as an interactive 01–05 accordion with screenshots.
- Heavy REAL social proof (named utilities + hard numbers) — we cannot match this without
  real content, so build the frame honestly (capability-focused, no implied clients).

## Homepage v2 section plan
1. **Cinematic hero** — full-bleed `/vid/Drone_video.mp4`, oversized display headline
   (reuse existing hero copy), minimal chrome, subtle scan/telemetry overlay + corner
   ticks. Consider a light scrim for text legibility in both themes.
2. **Scrollytelling spine** — "01 Capture → 02 Analyze → 03 Act" (or Data → Processing →
   Intelligence → Action, which is already existing copy). Each step: existing inspection
   image + a **styled faux product-UI panel** (detection labels, health/again — visual
   only, clearly illustrative). Pin/scroll-trigger reveals like Neara's steps.
3. **Capabilities** — interactive accordion (01–04) from `capabilities` in `lib/site.ts`,
   with the existing service images. Elevated from the current static cards.
4. **Intelligent computing** — keep, but make the image treatment more cinematic.
5. **Industries** — keep grid (works well).
6. **Process** — the real 5-step sequence (numbered is legit here).
7. **Proof/credibility** — HONEST frame only: capability statements, "Illustrative"
   inspection domains from `case-studies`. No fabricated quotes/logos/metrics. Leave a
   clearly-marked slot for the owner's real content when supplied.
8. **CTA band** — keep.

## Motion techniques to use (sparingly, reduced-motion safe)
- Scroll-triggered reveals (already have `components/reveal.tsx`).
- One pinned/sticky scrollytelling section for the spine (IntersectionObserver or sticky
  + scroll progress). Keep it cheap; respect `prefers-reduced-motion`.
- Hero: the existing `.animate-scan` sweep is the signature moment.

## Faux product-UI panel kit (build once, reuse)
A small set of presentational components that look like inspection software: a window
chrome bar, status chips (Pass/Tier 2), a labelled image with detection boxes, a small
data table (pole/health-score style), a progress/utilization stat. Purely visual +
clearly illustrative — mirrors Neara's app panels without claiming real deployments.

## Where things live (recap)
- Routes: `app/<slug>/page.tsx`; home `app/page.tsx`.
- Content: `lib/site.ts` (single source of truth — reuse, don't edit facts).
- Tokens/motion: `app/globals.css`.
- Primitives: `components/ui/*`; shared: `components/*` (header, footer, hero, cta, reveal…).
- Assets: `public/img`, `public/vid`.
- Verify: `npm run build` (all static) → `npm run start` → `/browse`, both themes.

## Suggested execution order for the next session
1. Build the faux product-UI panel kit.
2. Rebuild the hero (cinematic, full-bleed).
3. Add the scrollytelling spine.
4. Convert capabilities to the accordion.
5. Add the honest proof frame.
6. QA both themes + responsive + build; screenshot; push to `redesign/react-next`.
7. Then roll the elevated patterns across interior pages.
