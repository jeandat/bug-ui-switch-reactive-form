import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-foo',
  template: `<div class="layout-row">
    <ui-switch [formControl]="switchControl"></ui-switch
    ><button class="toggle-button" type="button" (click)="toggleSwitch()">
      Toggle Switch
    </button>
  </div>`,
  styles: [
    `
      .layout-row {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
      }
      ui-switch {
        margin-left: 1rem;
        margin-right: 1rem;
      }
      .toggle-button {
        padding: 0.5rem 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooComponent {
  switchControl = new FormControl<boolean>(false);
  subs = new SubSink();

  constructor() {
    this.subs.sink = this.switchControl.valueChanges.subscribe((value) => {
      console.log('Switch value changed to %o', value);
    });
  }

  toggleSwitch() {
    this.switchControl.setValue(!this.switchControl.value, {
      emitEvent: false,
    });
  }
}
