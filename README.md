# sky_quantech

Marketing website for SKY QUANTECH AI Pvt. Ltd. — nine static pages covering AI
solutions, software development, automation and technology consulting.

The visual design came from Google Stitch and is approved and frozen. This repo
turns that export into a production site: shared components, one design system,
clean content, and an accessibility and performance pass.

## Build

```bash
npm install
node site/build.mjs      # assemble dist/ from site/
```

Serve the result:

```bash
python3 -m http.server 8099 --directory dist
```

To re-derive page content from the Stitch export and rebuild:

```bash
node tools/pipeline.mjs
```

## Layout

| Path | Role |
|---|---|
| `site/data/site.mjs` | Nav, company, services, SEO, contact details — single source of truth |
| `site/data/forms.config.mjs` | Form submission endpoint |
| `site/theme/` | The one Tailwind token set, plus dark-context marking |
| `site/partials/` | Head, header, footer, form components |
| `site/pages/` | Page content only, no chrome |
| `site/assets/` | Logo, scripts, images |
| `tools/` | Transforms that derive `site/pages/` from the export |
| `dist/` | Build output — the deployable site |
| `stitch_sky_quantech_ai_website/` | Original Stitch export (build input and reference) |

See `CLAUDE.md` for the working rules: the design is frozen, company facts are
never invented, and contact details live in one file.

## Status

The contact and careers forms validate but do not submit — no backend has been
configured. Set `endpoint` in `site/data/forms.config.mjs` to go live.
