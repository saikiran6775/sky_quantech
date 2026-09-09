// Some Stitch pages ship a footer built as a <section>, so the <footer> sweep
// missed it. Target the smallest element that owns the copyright line, then
// climb to the enclosing <section> only.
import fs from 'node:fs';
import { parse } from 'node-html-parser';

const SIGN = /all rights reserved/i;

for (const file of fs.readdirSync('site/pages').filter(f => f.endsWith('.html'))) {
  const p = `site/pages/${file}`;
  const root = parse(fs.readFileSync(p, 'utf8'));
  let removed = 0;

  for (;;) {
    // Deepest element whose own text carries the copyright.
    const owner = root.querySelectorAll('*')
      .filter(n => SIGN.test(n.structuredText))
      .sort((a, b) => a.structuredText.length - b.structuredText.length)[0];
    if (!owner) break;

    // Climb to the enclosing <section>; never past it.
    let target = owner;
    while (target.parentNode && target.tagName !== 'SECTION' && target.parentNode !== root) {
      target = target.parentNode;
    }
    const label = target.structuredText.replace(/\s+/g, ' ').trim();
    target.remove();
    removed++;
    console.log(`${file}: removed <${target.tagName?.toLowerCase()}> (${label.length} chars) — ${label.slice(0, 90)}…`);
  }

  if (removed) fs.writeFileSync(p, root.toString());
}
console.log('done');
