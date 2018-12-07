import { Component, Input } from '@angular/core';

/**
 * Generated class for the ButtonHipgiveComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'button-hipgive',
  templateUrl: 'button-hipgive.html'
})
export class ButtonHipgiveComponent {
  @Input('text')
  text: string = '';
  @Input()
  public myCallback: Function = () => {};

  constructor() {
    console.log('Hello ButtonrepComponent Component');
  }

  ngOnChanges() {
    this.myCallback = this.myCallback;
    this.text = this.text;
  }
}
