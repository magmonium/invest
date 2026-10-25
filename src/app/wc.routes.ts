import { Route } from '@angular/router';
import { navRoutesGenerated } from './invest.router';

/**
 * The app's routes: the Nav tree's, plus whatever you add.
 *
 * Every Url Nav bound to a Page is already in the generated spread — the editor
 * owns that file and Sync rewrites it on every push (ADR 0034), so bind the Nav
 * rather than writing its route here. This file is yours and is never
 * regenerated: hand routes go beside the spread, and a Route that renders needs
 * a `data: { navId }` of its own so the store can name the page (ADR 0014).
 *
 * Feature Screens are not routed from the Nav tree — they emit into
 * `src/app/features/<feature>/ui/` and are `loadComponent`-able from here.
 */
export const wcRoutes: Route[] = [...navRoutesGenerated];
