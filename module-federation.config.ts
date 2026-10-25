/**
 * Exposes the app as a Module Federation remote, for when it is loaded by the
 * m-ui host rather than served on its own.
 *
 * `shared: {}` on purpose — the workspace's own remotes declare
 * `shared: () => false`, sharing nothing between host and remote. There is no
 * singleton graph here to get wrong.
 *
 * This is not what publishes to the Store. That path is `npm run build:wc`,
 * which is ngc + esbuild through `@magmonium/cli` and does not involve
 * Module Federation at all.
 */
export default {
  name: 'invest',
  exposes: {
    './App': './src/bootstrap.ts',
  },
  shared: {},
};
