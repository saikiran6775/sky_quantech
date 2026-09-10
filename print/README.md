# SKY QUANTECH AI — printed brochure

`SKY-QUANTECH-AI-Brochure-A4-Trifold.pdf` is the file for the print vendor.

## Specification

| | |
|---|---|
| Format | A4 landscape tri-fold, 6 panels |
| Trim size | 297 × 210 mm |
| Bleed | 3 mm on all four sides |
| Page size in file | 313 × 226 mm (trim + bleed + 5 mm slug for the marks) |
| Pages | 2 — sheet 1 outside, sheet 2 inside |
| Panels | 3 per sheet, 99 mm each |
| Folds | at 99 mm and 198 mm from the left trim edge |
| Marks | long marks = trim, short marks = fold; both sit outside the bleed |
| Colour | RGB (see below) |
| Fonts | embedded (Plus Jakarta Sans, Inter, Menlo) |

## Panel order

Sheet 1, outside, left to right:

1. Our process and why clients choose us — the panel that folds in first
2. Back cover — contact details
3. **Front cover**

Sheet 2, inside, left to right: who we are · solutions · applied work.

## Two things to confirm with the vendor

**Colour.** The file is RGB. Most presses want CMYK, and the deep navy
(#001060) is the shade most likely to shift on conversion. Ask the vendor to
convert to their own profile and send a proof before the run.

**Fold allowance.** Panels are equal at 99 mm. For a roll fold, the panel that
tucks inside is usually cut 1–2 mm narrower. If the vendor's finishing needs
that, tell us the widths and we will re-issue.

## Rebuilding

`brochure.html` is the source. Serve this directory and print to PDF:

```bash
python3 -m http.server 8145 --directory print
```

Then, with the gstack browse tool:

```bash
browse goto http://localhost:8145/brochure.html
browse pdf print/SKY-QUANTECH-AI-Brochure-A4-Trifold.pdf \
  --width 313mm --height 226mm --margins 0 --print-background --prefer-css-page-size
```

The fonts load from Google Fonts, so the machine needs network access at build
time. All copy comes from the approved website content; nothing here was
invented for the brochure.
