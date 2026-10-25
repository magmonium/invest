import '@angular/compiler';
import { bootstrapMagApp } from '@magmonium/one';
import { environment } from './environments/environment';
import { wcRoutes } from './app/wc.routes';
import { appProviders } from './app/providers';
import { InvestWebComponent } from './app/wc';

bootstrapMagApp({
  backend: environment.url,
  authUrl: environment.authUrl,
  socketUrl: environment.socketUrl,
  root: InvestWebComponent,
  children: wcRoutes,
  providers: appProviders,
});
