import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
/**
 * Generated class for the HeaderhgComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-hg',
  templateUrl: 'headerhg.html'
})
export class HeaderhgComponent {

  text: string;

  constructor( public menuCtrl: MenuController ) {
    console.log('Hello HeaderhgComponent Component');
    this.text = 'Hello World';
  }

  openMenuUser() {
    this.menuCtrl.open('menuUser');
  }

}
