// Rebuilds site/pages/ from the approved Stitch export, in order.
// Idempotent: safe to re-run after editing any transform.
import { execFileSync } from 'node:child_process';

const steps = [
  'tools/extract.mjs',
  'tools/localize-images.mjs',
  'tools/clean-content.mjs',
  'tools/strip-pseudo-footers.mjs',
  'tools/fix-links.mjs',
  'tools/a11y-perf.mjs',
  'tools/forms-placeholder.mjs',
  'tools/drop-dead-scripts.mjs',
  'tools/drop-orphan-banner.mjs',
  'tools/drop-social-placeholder.mjs',
  'site/build.mjs',
];

for (const step of steps) {
  console.log(`\n=== ${step} ===`);
  execFileSync('node', [step], { stdio: 'inherit' });
}
