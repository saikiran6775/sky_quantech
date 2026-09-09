// Accessibility and loading-performance pass over the extracted pages.
//  - descriptive alt text for images the export left blank
//  - heading levels that never skip a rank
//  - intrinsic width/height (stops layout shift) + lazy loading below the fold
import fs from 'node:fs';
import { parse } from 'node-html-parser';

// Alt text keyed by the local filename, written from each image's page context.
const ALT = {
  'img-c936ff0396.jpg': 'Engineer reviewing inspection imagery on screen',
  'img-69a66ffa3b.jpg': 'Team working together at a workstation',
  'img-1e9c6c7276.jpg': 'Field equipment being inspected on site',
  'img-0580dd5d59.jpg': 'Healthcare staff working with digital records',
  'img-2c4f596e96.jpg': 'Students using digital learning tools',
  'img-1a47a2cb34.jpg': 'Industrial production line in operation',
  'img-218e2da628.jpg': 'Retail environment with digital point-of-sale systems',
  'img-8dc3413351.jpg': 'Finance team reviewing data on screen',
  'img-25cb89fd06.jpg': 'Public service office using digital systems',
  'img-7b20b12aca.jpg': 'Software and AI development work in progress',
};

// Minimal intrinsic-size reader for the two formats in the export.
function dimensions(file) {
  const b = fs.readFileSync(file);
  if (b.slice(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
    return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  }
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i < b.length) {
      if (b[i] !== 0xff) { i++; continue; }
      const marker = b[i + 1];
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
      }
      i += 2 + b.readUInt16BE(i + 2);
    }
  }
  return null;
}

const dimCache = new Map();
const stats = { alt: 0, headings: 0, dims: 0, lazy: 0 };

for (const file of fs.readdirSync('site/pages').filter(f => f.endsWith('.html'))) {
  const p = `site/pages/${file}`;
  const root = parse(fs.readFileSync(p, 'utf8'));

  // --- headings: never skip a rank ---
  let prev = 1; // the page <h1> lives in the content
  for (const h of root.querySelectorAll('h1,h2,h3,h4,h5,h6')) {
    const level = Number(h.tagName[1]);
    const fixed = level - prev > 1 ? prev + 1 : level;
    if (fixed !== level) {
      h.tagName = `h${fixed}`;
      stats.headings++;
    }
    prev = fixed;
  }

  // --- images ---
  const imgs = root.querySelectorAll('img');
  imgs.forEach((img, index) => {
    const src = img.getAttribute('src') || '';
    const name = src.split('/').pop();

    if (!(img.getAttribute('alt') || '').trim() && ALT[name]) {
      img.setAttribute('alt', ALT[name]);
      stats.alt++;
    }

    const local = `site/assets/img/${name}`;
    if (!img.getAttribute('width') && fs.existsSync(local)) {
      if (!dimCache.has(local)) dimCache.set(local, dimensions(local));
      const d = dimCache.get(local);
      if (d) {
        img.setAttribute('width', String(d.w));
        img.setAttribute('height', String(d.h));
        stats.dims++;
      }
    }

    // First image on the page is the likely LCP element; the rest defer.
    if (!img.getAttribute('loading')) {
      if (index === 0) {
        img.setAttribute('fetchpriority', 'high');
        img.setAttribute('decoding', 'async');
      } else {
        img.setAttribute('loading', 'lazy');
        img.setAttribute('decoding', 'async');
      }
      stats.lazy++;
    }
  });

  fs.writeFileSync(p, root.toString());
}

console.log(`alt added: ${stats.alt}   heading levels fixed: ${stats.headings}   dimensions added: ${stats.dims}   loading hints: ${stats.lazy}`);
