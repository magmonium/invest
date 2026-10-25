import { ApplicationConfig } from '@angular/core';
import { navProvidersGenerated } from './invest.provide';

/**
 * Nav widgets, user tabs and injection tokens.
 *
 * Nothing here is generated — the editor writes this file once and never again
 * (ADR 0029), so it is yours from the moment you unzip. The nav tree's own
 * registrations live in the generated file spread below, which Sync rewrites
 * on every push (ADR 0034); add hand registrations beside it, not inside it.
 *
 * The panels behind search, notifications, the user menu and settings come
 * from `@magmonium/one` itself and need no entry here — registering at one of
 * those NavIds replaces the library's panel (libs/one ADR 0016).
 */
export const appProviders: ApplicationConfig['providers'] = [
  ...navProvidersGenerated,
];
