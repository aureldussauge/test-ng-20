import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LabelComponent } from './label.component';

@Component({
  selector: 'app-home-route',
  imports: [LabelComponent],
  template: `
    <h3 class="useless-class" appLabel="Title">Bonjour</h3>
    <h3 class="useless-class" appLabel="Title">Bonjour</h3>
    <h3 class="useless-class" appLabel="Title">Bonjour</h3>
    <h3 class="useless-class" appLabel="Title">Bonjour</h3>
    <h3 class="useless-class" appLabel="Title">Bonjour</h3>
    <h3 class="useless-class" appLabel="Title">Bonjour</h3>
    <h3 class="useless-class" appLabel="Title">Bonjour</h3>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeRouteComponent {}
