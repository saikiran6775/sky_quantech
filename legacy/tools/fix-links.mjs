// Resolves dead links. An in-page anchor is kept only when its target id
// actually exists on that page; everything else routes to a real page.
import fs from 'node:fs';
import { parse } from 'node-html-parser';
import { nav } from '../site/data/site.mjs';

const page = Object.fromEntries(nav.map(n => [n.slug, n.href]));

// data-path / stray-anchor → destination page
const ROUTE = {
  home: page.index, about: page.about, solutions: page.solutions,
  industries: page.industries, 'why-us': page['why-us'], process: page.process,
  'case-studies': page['case-studies'], careers: page.careers, contact: page.contact,
  capabilities: page.solutions, consultation: page.contact, 'contact-form': page.contact,
  'enquiry-form': page.contact, 'channels-info': page.contact, 'industry-matrix': page.industries,
};

// Link text → destination, used when there is no data-path and no live anchor.
const BY_TEXT = [
  [/explore (our )?solutions|explore our capabilities|view all solution domains/i, page.solutions],
  [/explore industries/i, page.industries],
  [/why choose us/i, page['why-us']],
  [/explore (our )?work|explore case studies/i, page['case-studies']],
  [/explore careers/i, page.careers],
  [/talk to our experts|contact us|send an enquiry|inquire about/i, page.contact],
];

const report = [];
for (const file of fs.readdirSync('site/pages').filter(f => f.endsWith('.html'))) {
  const p = `site/pages/${file}`;
  const root = parse(fs.readFileSync(p, 'utf8'));
  const slug = file.replace('.html', '');

  const ids = new Set(root.querySelectorAll('[id]').map(n => n.getAttribute('id')));
  let kept = 0, routed = 0, unresolved = 0;

  for (const a of root.querySelectorAll('a')) {
    const href = a.getAttribute('href') || '';
    if (!href.startsWith('#')) continue;

    const frag = href.slice(1);
    if (frag && ids.has(frag)) { kept++; continue; }        // real in-page anchor

    const dp = a.getAttribute('data-path') || '';
    const text = a.structuredText.replace(/\s+/g, ' ').trim();
    let dest = ROUTE[dp] || ROUTE[frag] || null;
    if (!dest) { const hit = BY_TEXT.find(([re]) => re.test(text)); if (hit) dest = hit[1]; }

    if (dest) {
      // A link that would point at its own page becomes a no-op anchor to the top.
      a.setAttribute('href', dest === page[slug] ? '#main' : dest);
      a.removeAttribute('data-path');
      routed++;
    } else {
      unresolved++;
      report.push(`  UNRESOLVED ${file}: href="${href}" text="${text.slice(0, 50)}"`);
    }
  }

  fs.writeFileSync(p, root.toString());
  console.log(`${file.padEnd(20)} kept=${kept}  routed=${routed}  unresolved=${unresolved}`);
}
if (report.length) { console.log('\n' + report.join('\n')); }
