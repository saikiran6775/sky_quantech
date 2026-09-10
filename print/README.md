# SKY QUANTECH AI — printed brochure

`SKY-QUANTECH-AI-Brochure-A4-Trifold.pdf` is the file for the print vendor.

## Specification

| | |
|---|---|
| Format | A4 landscape tri-fold, 6 panels |
| Trim size | 297 × 210 mm |
| Bleed | 3 mm on all four sides |
| Page size in file | 313 × 226 mm (trim + bleed + 5 mm slug carrying the marks) |
| Pages | 2 — sheet 1 outside, sheet 2 inside |
| Panels | 3 per sheet, 99 mm each |
| Folds | 99 mm and 198 mm from the left trim edge |
| Marks | long marks = trim, short marks = fold; both outside the bleed |
| Colour space | RGB (see below) |
| Fonts | embedded subsets — Plus Jakarta Sans, Inter, Menlo |
| Safe area | text and logos kept 10 mm from trim, 8 mm from folds |

## Panel order

Each sheet is labelled in the slug line above the trim, so the panels cannot be
mixed up on the press floor.

**Sheet 1 — outside**, left to right:

1. **Front cover** — logo, positioning line, OHE technical artwork
2. **Why choose us** — five differentiators, how we work
3. **Back cover** — contact details and QR code

**Sheet 2 — inside**, left to right:

4. **About** — who we are, and a compact "what we do"
5. **Industries** — the six industries
6. **Applied AI** — the three inspection projects

## QR code

Destination: `https://skyquantech.ai/`

Vector (`assets/qr-skyquantech.svg`), error correction level H, 37 modules,
printed at 26 mm — about 0.7 mm per module, comfortably above the scanning
threshold. It was decoded back out of the rendered PDF to confirm it resolves
to the URL above.

## Two things to settle with the vendor

**Colour.** The file is RGB. Chromium cannot produce a colour-managed CMYK or
PDF/X file, and a blind conversion would shift the brand navy (#001060), so the
file has deliberately been left in RGB rather than converted badly. Ask the
vendor to convert with their own press profile and send a proof. All source
artwork is vector or high resolution, so nothing is lost in their conversion.

**Fold direction.** Panels are equal at 99 mm, with the front cover on the left
of the outside sheet as specified. If the finishing line rolls the sheet (rather
than folding it as a Z), the panel that tucks inside is normally cut 1–2 mm
narrower, and the cover usually sits on the right of the outside sheet. Send the
panel widths and fold direction the press wants and the file can be re-imposed
in a few minutes.

## Image resolution

| Asset | Pixels | Printed | Effective |
|---|---|---|---|
| Logo | 1400 × 1351 | 33 mm | ~1070 dpi |
| About band | 1536 × 1024 | 99 mm | ~394 dpi |
| OHE artwork | vector | 79 mm | resolution independent |
| QR code | vector | 26 mm | resolution independent |

The Industries page photograph was deliberately **not** used: it is a collage
carrying its own small captions, which are illegible at the 46 mm this panel
allows. That panel uses a reversed type block instead.

## Source

```
print/
  brochure.html                        layout and copy
  assets/logo.png                      transparent, trimmed from the master logo
  assets/ohe-inspection.svg            vector artwork, from the website
  assets/qr-skyquantech.svg            vector QR
  assets/about.png  assets/industries.png
  README.md
```

Rebuild after editing `brochure.html`:

```bash
python3 -m http.server 8145 --directory print
browse goto http://localhost:8145/brochure.html
browse pdf print/SKY-QUANTECH-AI-Brochure-A4-Trifold.pdf \
  --width 313mm --height 226mm --margins 0 --print-background --prefer-css-page-size
```

Fonts load from Google Fonts, so the build machine needs network access. Every
line of copy comes from the approved website; nothing was written specially for
the brochure, and no certifications, clients, statistics or history appear.
