# gstack

Use the `/browse` skill from gstack for all web browsing. Never use `mcp__claude-in-chrome__*` tools.

Available gstack skills:

/office-hours, /plan-ceo-review, /plan-eng-review, /plan-design-review, /design-consultation, /design-shotgun, /design-html, /review, /ship, /land-and-deploy, /canary, /benchmark, /browse, /connect-chrome, /qa, /qa-only, /design-review, /setup-browser-cookies, /setup-deploy, /setup-gbrain, /retro, /investigate, /document-release, /document-generate, /codex, /cso, /autoplan, /plan-devex-review, /devex-review, /careful, /freeze, /guard, /unfreeze, /gstack-upgrade, /learn

# Sky Quantech AI — Marketing Website

Nine-page marketing site rebuilt (2026-09) on **Next.js 16 (App Router) + React 19 +
Tailwind v4 + shadcn-style primitives**, replacing the earlier static Google Stitch
generator. Distinctive navy design with first-class light **and** dark themes. The
retired generator is preserved under `legacy/` for reference only.

## Stack & build

```bash
npm run dev     # next dev (Turbopack)
npm run build   # next build — all routes prerender as static (SSG)
npm run start   # serve the production build
```

Deployed on Vercel (framework auto-detected as Next.js; see `vercel.json`).

## Layout

- `app/` — App Router. `layout.tsx` wires fonts, `ThemeProvider`, header + footer.
  One file per route: `app/<slug>/page.tsx` (home is `app/page.tsx`). Each exports
  `metadata` for SEO.
- `lib/site.ts` — **single source of truth** for nav, company, services, industries,
  process, differentiators and contact. Never hard-code these in a page.
- `lib/utils.ts` — `cn()` (clsx + tailwind-merge).
- `app/globals.css` — the design token system: light/dark CSS variables mapped into
  Tailwind via `@theme inline`, plus `.eyebrow`, `.grid-bg`, and the hero `.animate-scan`.
- `components/ui/` — shadcn-style primitives (`button`, `card`).
- `components/` — `site-header`, `site-footer`, `theme-provider`, `theme-toggle`,
  `reveal` (scroll animation), `container`, `section-heading`, `page-hero`,
  `cta-band`, `icon`, `lead-form`.
- `public/img`, `public/vid` — images and the hero video.

## Rules

- **Theme both ways.** Every change must look right in light and dark. Colors come
  from the CSS variables in `globals.css` (shadcn token names: `background`,
  `foreground`, `primary`, `accent`, `muted`, `border`, `ring`…). Don't hard-code
  hex in components — add or adjust a token instead.
- **One accent.** Electric blue (`--primary`) over a navy/ink base. No teal, purple,
  orange or rainbow gradients.
- **Type:** Space Grotesk for display/headings (`font-display`), Inter for body.
- **Never duplicate nav or footer** — they live in `components/site-header.tsx` /
  `site-footer.tsx`, rendered once by the root layout with active state from the path.
- **Never invent company facts.** No certifications, metrics, client names, job
  openings, social accounts, history or headcount. Contact details live in
  `lib/site.ts`. Case-study examples are labelled "Illustrative".
- **Forms must not fake success.** `components/lead-form.tsx` has no endpoint yet and
  reports honestly, pointing to the contact email.
- Numbered markers only where content is a real sequence (the Process steps).

## Verifying changes

`npm run build` (must pass, all routes static), then `npm run start` and use `/browse`.
Checks: no console errors, no horizontal overflow at 375/768/1440, both themes correct,
no broken images, every internal link resolves, one `<h1>` and one `<footer>` per page,
and the lead form shows its honest "not wired up" message.
