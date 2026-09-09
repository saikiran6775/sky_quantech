// Downloads the Stitch CDN images into site/assets/img and rewrites references.
// The CDN URLs are temporary, so shipping them would break the site later.
import fs from 'node:fs';
import crypto from 'node:crypto';
import { parse } from 'node-html-parser';

const DIR = 'site/assets/img';
fs.mkdirSync(DIR, { recursive: true });

const EXT = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp', 'image/gif': 'gif' };
const pages = fs.readdirSync('site/pages').filter(f => f.endsWith('.html')).map(f => `site/pages/${f}`);
const extra = ['stitch_sky_quantech_ai_website/sky_quantech_ai_corporate_homepage_locked_final/code.html'];

const urls = new Set();
for (const f of [...pages, ...extra]) {
  for (const m of fs.readFileSync(f, 'utf8').matchAll(/https:\/\/lh3\.googleusercontent\.com\/[A-Za-z0-9_/\-]+/g)) urls.add(m[0]);
}

const map = new Map();
const rows = [];
await Promise.all([...urls].map(async url => {
  const id = crypto.createHash('sha1').update(url).digest('hex').slice(0, 10);
  try {
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const type = (res.headers.get('content-type') || '').split(';')[0];
    const ext = EXT[type] || 'bin';
    const buf = Buffer.from(await res.arrayBuffer());
    const name = `img-${id}.${ext}`;
    fs.writeFileSync(`${DIR}/${name}`, buf);
    map.set(url, `assets/img/${name}`);
    rows.push({ file: name, kb: (buf.length / 1024).toFixed(0), type });
  } catch (e) {
    rows.push({ file: `FAILED ${id}`, kb: '-', type: e.message });
  }
}));

let rewritten = 0;
for (const f of pages) {
  let html = fs.readFileSync(f, 'utf8');
  for (const [url, local] of map) {
    if (html.includes(url)) { html = html.replaceAll(url, local); rewritten++; }
  }
  fs.writeFileSync(f, html);
}

console.table(rows.sort((a, b) => Number(b.kb) - Number(a.kb)));
console.log(`downloaded ${map.size}/${urls.size}, ${rewritten} page references rewritten`);
fs.writeFileSync('site/data/image-map.json', JSON.stringify(Object.fromEntries(map), null, 2));
