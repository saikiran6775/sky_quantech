// Contact-page corrections that the Stitch export cannot express:
//   1. The hero shipped two CTAs; only "Start a Conversation" is approved.
//   2. The info cards printed contact details as flat text. They become
//      build-time tokens so site.mjs stays the single source of truth and
//      the email/phone/website render as real mailto:, tel: and https: links.
//   3. The map panel showed a placeholder coordinate and the filler line
//      "LAT/LONG GRID ACTIVE". It becomes a GPS marker that opens the map.
import fs from 'node:fs';

const file = 'site/pages/contact.html';
let html = fs.readFileSync(file, 'utf8');
let changed = 0;

// The secondary CTA pointed at #channels-info. The section id stays — it is a
// valid in-page target — but the button itself is gone.
const before = html;
html = html.replace(
  /\s*<a class="[^"]*" href="#channels-info">\s*<span>Direct Channels<\/span>\s*<\/a>/,
  '');
if (html !== before) changed++;

// Card values → tokens resolved by site/build.mjs from site.mjs.
const cards = [
  ['[Client Email]', '{{EMAIL_LINK}}'],
  ['[Client Phone]', '{{PHONE_LINKS_CARD}}'],
  ['[Company Website]', '{{WEBSITE_LINK}}'],
];
for (const [from, to] of cards) {
  const needle = `<p class="text-sm font-semibold text-slate-900 mt-0.5 font-mono">${from}</p>`;
  if (html.includes(needle)) {
    html = html.replace(needle, needle.replace(from, to));
    changed++;
  }
}

// The whole dark panel becomes one link: an animated GPS marker, the real
// coordinates, and the destination spelled out. Replacing the panel body
// wholesale keeps this idempotent whether the page is fresh from the export
// or already carries an earlier version of this block.
const MAP_PANEL = `<div class="h-40 bg-slate-900 relative flex items-center justify-center overflow-hidden">
<div class="absolute inset-0 grid-pattern-dark opacity-30"></div>

<a class="gps-marker relative z-10 flex flex-col items-center gap-2 px-4 text-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" href="{{MAPS_URL}}" target="_blank" rel="noopener noreferrer">
<span class="relative flex items-center justify-center w-10 h-10">
<span class="gps-ping absolute w-10 h-10 rounded-[9999px] bg-accent-blue/40"></span>
<span class="gps-ping gps-ping-delayed absolute w-10 h-10 rounded-[9999px] bg-accent-blue/40"></span>
<svg class="gps-pin relative w-7 h-7 text-highlight-blue" fill="currentColor" viewbox="0 0 24 24" aria-hidden="true">
<path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"></path>
</svg>
</span>
<span class="inline-flex items-center gap-1.5 text-accent-blue font-mono text-xs bg-deep-blue/80 px-2.5 py-1 rounded border border-blue-700/50">COORDINATES: {{COORDINATES}}</span>
<span class="gps-label inline-flex items-center gap-1 text-[11px] text-slate-300 font-mono underline underline-offset-2">
<span>View on Google Maps</span>
<svg class="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24" aria-hidden="true">
<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</span>
</a>
</div>
`;
const panelRe = /<div class="h-(?:32|40) bg-slate-900 relative flex items-center justify-center overflow-hidden">[\s\S]*?(?=<div class="p-4 bg-white">)/;
if (panelRe.test(html)) {
  html = html.replace(panelRe, MAP_PANEL);
  changed++;
}

// The location caption still carried a placeholder in the export.
if (html.includes('[Address to be provided]')) changed++;

fs.writeFileSync(file, html);
console.log(`contact-cards: ${changed} correction(s) applied to ${file}`);
