import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseRootWebComponent } from '@magmonium/one';

/**
 * The app's frame: what every Screen renders inside. Extends
 * BaseRootWebComponent so the app behaves the same standalone and embedded in
 * the m-ui host.
 */
@Component({
  selector: 'invest-wc',
  imports: [RouterOutlet],
  template: `
    <main class="app-main">
      <router-outlet></router-outlet>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvestWebComponent extends BaseRootWebComponent {}
