import { resolve } from 'path';
import { container } from 'webpack';
import mfConfig from './module-federation.config';

const { ModuleFederationPlugin } = container;

// Default MF library type is `var`, which needs a JS identifier. App slugs
// are kebab-case (`m-ui`), so the plugin name must drop the hyphen.
const federationName = mfConfig.name.replace(/-/g, '_');

export default {
  output: {
    uniqueName: 'invest',
    publicPath: 'auto',
  },
  optimization: {
    // A remote's exposed module must land in one chunk the host can fetch.
    runtimeChunk: false,
  },
  // CORP so a COEP-isolated Run window can embed this preview; COOP/COEP so
  // the preview document itself is embeddable under require-corp parents.
  devServer: {
    allowedHosts: 'all',
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    },
  },
  resolve: {
    alias: {
      '@magmonium/sass': resolve(__dirname, 'node_modules/@magmonium/one/sass'),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: federationName,
      filename: 'remoteEntry.js',
      exposes: mfConfig.exposes,
      shared: mfConfig.shared,
    }),
  ],
};
