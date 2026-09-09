// One-time extraction: pull page content out of the Stitch export into site/pages/.
// Drops every header and footer (the build supplies shared ones) and the
// per-page nav-highlighting scripts that the shared header replaces.
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'node-html-parser';

const SRC = 'stitch_sky_quantech_ai_website';
const MAP = {
  sky_quantech_ai_corporate_homepage_locked_final: 'index',
  sky_quantech_ai_about_us: 'about',
  sky_quantech_ai_solutions: 'solutions',
  sky_quantech_ai_industries_content_locked: 'industries',
  sky_quantech_ai_why_choose_us: 'why-us',
  sky_quantech_ai_process: 'process',
  sky_quantech_ai_case_studies: 'case-studies',
  sky_quantech_ai_careers: 'careers',
  sky_quantech_ai_contact: 'contact',
};

const meta = {};
const report = [];

for (const [dir, slug] of Object.entries(MAP)) {
  const html = fs.readFileSync(path.join(SRC, dir, 'code.html'), 'utf8');
  const root = parse(html, { blockTextElements: { script: true, style: true } });
  const body = root.querySelector('body');

  const removed = { header: 0, footer: 0, script: 0, style: 0 };
  body.querySelectorAll('header').forEach(n => { n.remove(); removed.header++; });
  body.querySelectorAll('footer').forEach(n => { n.remove(); removed.footer++; });

  // Page styles worth keeping (rare); nav scripts get dropped.
  const styles = [];
  body.querySelectorAll('style').forEach(n => { styles.push(n.innerHTML.trim()); n.remove(); removed.style++; });

  const scripts = [];
  body.querySelectorAll('script').forEach(n => {
    const src = n.getAttribute('src');
    const code = n.innerHTML.trim();
    const isNavPatch = /data-path|navLinks|aria-current/.test(code);
    if (!src && code && !isNavPatch) scripts.push(code);
    n.remove(); removed.script++;
  });

  const main = body.querySelector('main');
  const mainClass = main ? (main.getAttribute('class') || '') : '';
  const content = (main ? main.innerHTML : body.innerHTML).trim();

  fs.writeFileSync(`site/pages/${slug}.html`, content + '\n');
  if (scripts.length) fs.writeFileSync(`site/pages/${slug}.js`, scripts.join('\n\n') + '\n');
  if (styles.filter(Boolean).length) fs.writeFileSync(`site/pages/${slug}.css`, styles.filter(Boolean).join('\n\n') + '\n');

  meta[slug] = { source: dir, mainClass, hasScript: scripts.length > 0, hasStyle: styles.filter(Boolean).length > 0 };
  report.push({ slug, kb: (content.length / 1024).toFixed(1), ...removed, keptScripts: scripts.length });
}

fs.writeFileSync('site/data/extracted.json', JSON.stringify(meta, null, 2) + '\n');
console.table(report);
