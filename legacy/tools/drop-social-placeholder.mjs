// No social accounts were supplied, and a visible "pending confirmation" note
// reads as unfinished. Remove the block; re-add it when accounts exist.
import fs from 'node:fs';
import { parse } from 'node-html-parser';

const p = 'site/pages/contact.html';
const root = parse(fs.readFileSync(p, 'utf8'));
const hit = root.querySelectorAll('*')
  .filter(n => /Official networks will be listed/.test(n.structuredText))
  .sort((a, b) => a.structuredText.length - b.structuredText.length)[0];

if (hit) {
  let target = hit;
  while (target.parentNode && target.tagName !== 'SECTION' && !/rounded|border|bg-/.test(target.getAttribute('class') || '')) {
    target = target.parentNode;
  }
  target.remove();
  fs.writeFileSync(p, root.toString());
  console.log('removed social-channels placeholder');
} else {
  console.log('no social placeholder');
}
