#!/usr/bin/env node
/**
 * Restore public/assets/one after mag-cli cleans public/assets.
 * Source is always node_modules/@magmonium/one/assets (ADR 0032).
 */
const fs = require('fs');
const path = require('path');

const dest = path.resolve('public/assets/one');
const src = path.resolve('node_modules/@magmonium/one/assets');

// Loud, not skipped. An app with no OneAssets still builds and still serves —
// it just 404s every theme, label, icon and option, which reads as a broken
// app rather than a missing step. That is exactly how a published
// `@magmonium/one` with no `assets/` in it reached a running Remote.
if (!fs.existsSync(src)) {
  console.error(
    '[copy-one-assets] node_modules/@magmonium/one/assets is missing.\n' +
      '  The installed @magmonium/one ships no OneAssets, so every\n' +
      '  /assets/one/* request would 404. Install a release that has them.'
  );
  process.exit(1);
}

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.cpSync(src, dest, { recursive: true });
console.log('[copy-one-assets]', path.relative(process.cwd(), src), '→ public/assets/one');
