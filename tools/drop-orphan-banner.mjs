// The export left a hidden "submission received" banner behind. Nothing drives
// it now, and a stale success message is exactly what must not ship.
import fs from 'node:fs';
import { parse } from 'node-html-parser';

const p = 'site/pages/contact.html';
const root = parse(fs.readFileSync(p, 'utf8'));
const el = root.getElementById('form-success-banner');
if (el) {
  el.remove();
  fs.writeFileSync(p, root.toString());
  console.log('removed orphan #form-success-banner');
} else {
  console.log('no orphan banner');
}
