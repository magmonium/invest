/**
 * Magmonium CLI configuration — app mag_assets only.
 *
 * @magmonium/one assets are copied by npm run assets:one (see
 * scripts/copy-one-assets.cjs), not compiled here: the published package
 * already ships JSON, and mag-cli's copy exclude drops every *.json file.
 *
 * angular.json also maps the published package's assets folder →
 * assets/one as a belt-and-braces for builds that skip assets:compile.
 */
module.exports = {
  paths: [
    {
      source: 'mag_assets',
      output: 'public/assets',
      isRemote: true,
    },
  ],
};
