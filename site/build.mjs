// Assembles every page from shared partials + per-page content.
// Run: node site/build.mjs   →   dist/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { company, contact, nav, primaryCta, seo } from './data/site.mjs';
import { forms } from './data/forms.config.mjs';
import { extend } from './theme/tailwind.theme.mjs';
import { markContexts } from './theme/dark-sections.mjs';
import { parse } from 'node-html-parser';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(ROOT, '..', 'dist');
const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8');

const headTpl = read('partials/head.html');
const headerTpl = read('partials/header.html');
const footerTpl = read('partials/footer.html');
const meta = JSON.parse(read('data/extracted.json'));

const ASSETS = 'assets';
const YEAR = new Date().getFullYear();

const linkBase = 'font-label-md text-label-md transition-colors py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight-blue focus-visible:ring-offset-2';
const activeDesktop = `${linkBase} text-deep-blue font-semibold relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-electric-blue`;
const idleDesktop = `${linkBase} text-text-secondary hover:text-electric-blue`;

function renderHeader(slug) {
  const desktop = nav.map(item => {
    const active = item.slug === slug;
    return `<a class="${active ? activeDesktop : idleDesktop}" href="${item.href}"${active ? ' aria-current="page"' : ''}>${item.label}</a>`;
  }).join('\n      ');

  const mobile = nav.map(item => {
    const active = item.slug === slug;
    const cls = active
      ? 'flex items-center px-space-sm py-space-sm rounded bg-surface-slate text-deep-blue font-semibold font-label-md text-label-md'
      : 'flex items-center px-space-sm py-space-sm rounded text-text-secondary hover:bg-surface-slate hover:text-electric-blue font-label-md text-label-md transition-colors';
    return `<li><a class="${cls}" href="${item.href}"${active ? ' aria-current="page"' : ''}>${item.label}</a></li>`;
  }).join('\n      ');

  return headerTpl
    .replaceAll('{{DESKTOP_NAV}}', desktop)
    .replaceAll('{{MOBILE_NAV}}', mobile)
    .replaceAll('{{HOME}}', nav[0].href)
    .replaceAll('{{CTA_HREF}}', primaryCta.href)
    .replaceAll('{{CTA_LABEL}}', primaryCta.label)
    .replaceAll('{{ASSETS}}', ASSETS);
}

function renderFooter() {
  const navLinks = nav
    .map(i => `<li><a class="hover:text-white transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight-blue" href="${i.href}">${i.label}</a></li>`)
    .join('\n          ');
  const services = company.services
    .map(s => `<li><a class="hover:text-white transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight-blue" href="/solutions.html">${s}</a></li>`)
    .join('\n          ');

  return footerTpl
    .replaceAll('{{FOOTER_NAV}}', navLinks)
    .replaceAll('{{FOOTER_SERVICES}}', services)
    .replaceAll('{{EMAIL}}', contact.email)
    .replaceAll('{{PHONE_TEL}}', contact.phone.replace(/[^\d+]/g, ''))
    .replaceAll('{{PHONE}}', contact.phone)
    .replaceAll('{{ADDRESS}}', contact.address)
    .replaceAll('{{WEBSITE}}', contact.website)
    .replaceAll('{{YEAR}}', String(YEAR))
    .replaceAll('{{ASSETS}}', ASSETS);
}

const themeJson = JSON.stringify(extend);

function renderHead(slug) {
  const s = seo[slug];
  if (!s) throw new Error(`No SEO entry for ${slug}`);
  return headTpl
    .replaceAll('{{TITLE}}', s.title)
    .replaceAll('{{DESCRIPTION}}', s.description)
    .replace('/*THEME*/', () => `{darkMode:"class",theme:{extend:${themeJson}}}`);
}

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(path.join(OUT, ASSETS), { recursive: true });

// Copy static assets (recursively).
fs.rmSync(path.join(OUT, ASSETS), { recursive: true, force: true });
fs.cpSync(path.join(ROOT, 'assets'), path.join(OUT, ASSETS), { recursive: true });

const built = [];
for (const item of nav) {
  const slug = item.slug;
  let content = read(`pages/${slug}.html`);
  // Shared form components.
  content = content.replace(/<div data-form-slot="(contact|careers)"><\/div>/g,
    (_, key) => read(`partials/form-${key}.html`));
  // Contact placeholders left in the Stitch bodies resolve from site.mjs, so
  // these values live in exactly one place.
  content = content
    .replaceAll('[Client Email]', contact.email)
    .replaceAll('[Client Phone]', contact.phone)
    .replaceAll('[Company Address]', contact.address)
    .replaceAll('[Address to be provided]', contact.address)
    .replaceAll('[Company Website]', contact.website);

  const needsForms = content.includes('data-form=');
  const mainClass = meta[slug]?.mainClass || 'w-full pt-20 bg-white';

  const pageJs = fs.existsSync(path.join(ROOT, `pages/${slug}.js`))
    ? `<script>\n${read(`pages/${slug}.js`)}\n</script>`
    : '';
  const pageCss = fs.existsSync(path.join(ROOT, `pages/${slug}.css`))
    ? `<style>\n${read(`pages/${slug}.css`)}\n</style>`
    : '';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
${renderHead(slug)}${pageCss}
</head>
<body class="bg-white font-body-md text-text-primary antialiased selection:bg-electric-blue selection:text-white">
${renderHeader(slug)}
<main class="${mainClass}" id="main">
${content}
</main>
${renderFooter()}
<script src="${ASSETS}/site.js" defer></script>
${needsForms ? `<script>window.SKY_FORMS=${JSON.stringify({ endpoint: forms.endpoint, method: forms.method, unconfiguredMessage: forms.unconfiguredMessage, resumeMaxBytes: forms.resume.maxBytes })};</script>
<script src="${ASSETS}/forms.js" defer></script>` : ''}
${pageJs}
</body>
</html>
`;
  // Tag dark-background elements so the contrast corrections can scope to them.
  const doc = parse(html, { blockTextElements: { script: true, style: true } });
  const marked = markContexts(doc);
  const finalHtml = '<!DOCTYPE html>\n' + doc.toString().replace(/^<!DOCTYPE html>\s*/i, '');

  const outFile = path.join(OUT, `${slug}.html`);
  fs.writeFileSync(outFile, finalHtml);
  built.push({ page: `${slug}.html`, kb: (finalHtml.length / 1024).toFixed(1), dark: marked.dark, chip: marked.chip });
}

console.table(built);
console.log(`Built ${built.length} pages → dist/`);
