// Contact-page corrections that the Stitch export cannot express:
//   1. The hero shipped two CTAs; only "Start a Conversation" is approved.
//   2. The info cards printed contact details as flat text. They become
//      build-time tokens so site.mjs stays the single source of truth and
//      the email/phone/website render as real mailto:, tel: and https: links.
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

// The map badge shipped a "pending confirmation" placeholder.
const coordFrom = '<span>COORDINATES: PENDING CONFIRMATION</span>';
if (html.includes(coordFrom)) {
  html = html.replace(coordFrom, '<span>COORDINATES: {{COORDINATES}}</span>');
  changed++;
}

// "LAT/LONG GRID ACTIVE" was decorative filler beneath the placeholder
// coordinates. With real coordinates it becomes a link to the map.
const gridFrom = "<p class=\"text-[11px] text-slate-400 font-mono mt-1.5\">LAT/LONG GRID ACTIVE</p>";
if (html.includes(gridFrom)) {
  html = html.replace(gridFrom, "<a class=\"inline-flex items-center gap-1 text-[11px] text-accent-blue hover:text-white font-mono mt-1.5 underline underline-offset-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue\" href=\"{{MAPS_URL}}\" target=\"_blank\" rel=\"noopener noreferrer\">\n<span>View on Google Maps</span>\n<svg class=\"w-3 h-3\" fill=\"none\" stroke=\"currentColor\" viewbox=\"0 0 24 24\" aria-hidden=\"true\">\n<path d=\"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"></path>\n</svg>\n</a>");
  changed++;
}

fs.writeFileSync(file, html);
console.log(`contact-cards: ${changed} correction(s) applied to ${file}`);
