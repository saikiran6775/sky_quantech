// Swaps the Stitch form markup for a build-time placeholder.
// String-based: the HTML serializer drops bare comment nodes.
import fs from 'node:fs';
import { parse } from 'node-html-parser';

for (const [page, key] of [['contact', 'contact'], ['careers', 'careers']]) {
  const p = `site/pages/${page}.html`;
  let html = fs.readFileSync(p, 'utf8');
  const form = parse(html).querySelector('form');
  if (!form) { console.log(`${page}: no form (already replaced?)`); continue; }

  const raw = form.outerHTML;
  const idx = html.indexOf(raw);
  if (idx === -1) { console.log(`${page}: could not locate form text`); continue; }

  html = html.slice(0, idx) + `<div data-form-slot="${key}"></div>` + html.slice(idx + raw.length);
  fs.writeFileSync(p, html);
  console.log(`${page}: form → <div data-form-slot="${key}">`);
}
