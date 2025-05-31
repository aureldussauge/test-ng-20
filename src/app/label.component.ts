import { Component, computed, input } from '@angular/core';

export type LabelType = 'Title' | 'Body';

const labelClassMap: Record<LabelType, string> = {
  Title: 'label--title',
  Body: 'label--body',
};

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[appLabel]',
  standalone: true,
  host: {
    '[class]': 'labelClass()',
  },
  template: `
    <ng-content></ng-content>
  `,
  styles: `
    :host {
      &.label--title {
        font-size: 3rem;
        font-weight: bold;
      }
      &.label--body {
        font-size: 1rem;
        color: gray;
      }
    }
  `,
})
export class LabelComponent {
  appLabel = input<LabelType>('Body');
  labelClass = computed(() => labelClassMap[this.appLabel()]);
}
