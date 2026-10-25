import { ApplicationConfig } from '@angular/core';
import { provideMagWcConfig, provideMagWcRoutes } from '@magmonium/one';
import { wcRoutes } from './wc.routes';
import { environment } from '../environments/environment';
import { appProviders } from './providers';
import { InvestWebComponent } from './wc';

// Read by the WC build (`appConfigPath` in the manifest), which mounts the app
// as a custom element rather than bootstrapping it. `bootstrap.ts` is the
// standalone path; this is the embedded one, and both must agree on providers.
export const appConfig: ApplicationConfig = provideMagWcConfig({
  backend: environment.url,
  authUrl: environment.authUrl,
  socketUrl: environment.socketUrl,
  routes: provideMagWcRoutes({
    component: InvestWebComponent,
    children: wcRoutes,
  }),
  providers: appProviders,
});
