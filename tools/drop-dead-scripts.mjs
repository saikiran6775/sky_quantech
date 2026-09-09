// The per-page scripts only drove the old header and the removed footers, and
// contact.js faked a successful submission. site.js and forms.js replace them.
import fs from 'node:fs';

for (const f of fs.readdirSync('site/pages').filter(x => x.endsWith('.js'))) {
  fs.rmSync(`site/pages/${f}`);
  console.log(`removed site/pages/${f}`);
}
