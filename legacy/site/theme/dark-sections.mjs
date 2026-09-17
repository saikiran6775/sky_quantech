// Class tokens whose computed background is dark (verified in-browser across
// all nine pages). Elements carrying one get data-on-dark at build time so the
// contrast corrections in head.html can scope themselves to dark context.
export const DARK_BG_CLASSES = [
  'bg-primary', 'bg-primary-container', 'bg-deep-blue', 'bg-dark-blue',
  'bg-electric-blue', 'bg-brand-deep', 'bg-brand-dark', 'bg-brand-electric',
  'bg-brand-highlight', 'bg-secondary', 'bg-tertiary',
  'bg-blue-900', 'bg-blue-950', 'bg-slate-900',
  'bg-[#001060]', 'bg-[#001070]', 'bg-[#000830]', 'bg-[#000938]',
];

// Matches the token with or without a Tailwind opacity suffix (bg-primary/80).
const escaped = DARK_BG_CLASSES.map(c => c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
export const DARK_BG_RE = new RegExp(`^(?:${escaped.join('|')})(?:\\/\\d{1,3})?$`);

// Light-tinted container fills. Text on these must be dark, never white.
// Only near-opaque variants count: at low opacity (bg-secondary-container/20)
// the fill reads as the dark surface beneath it, and dark text would vanish.
const LIGHT_CHIP_RE = /^bg-secondary-container(?:\/(?:6\d|7\d|8\d|9\d|100))?$/;

// Exact class-token matching only. A substring selector would also catch
// `hover:bg-secondary-container`, applying the fix to an element's base state.
export function markContexts(root) {
  let dark = 0, chip = 0;
  for (const el of root.querySelectorAll('*')) {
    const cls = el.getAttribute('class');
    if (!cls) continue;
    const tokens = cls.split(/\s+/);
    if (tokens.some(c => DARK_BG_RE.test(c))) { el.setAttribute('data-on-dark', ''); dark++; }
    if (tokens.some(c => LIGHT_CHIP_RE.test(c))) { el.setAttribute('data-chip-light', ''); chip++; }
  }
  return { dark, chip };
}
