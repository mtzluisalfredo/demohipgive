import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from 'ionic-angular';

/**
 * Generated class for the StoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stories',
  templateUrl: 'stories.html'
})
export class StoriesPage {
  itemsLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  urlDemo: any = 'assets/imgs/'
  activeMenu: string;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public navParams: NavParams
  ) {
    this.itemsLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.menu1Active();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoriesPage');
    this.itemsLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  openMenuOne() {
    this.menu1Active();
    this.menuCtrl.open();
  }

  menu1Active() {
    this.activeMenu = 'menu1';
    this.menuCtrl.enable(true, 'menu1');
    this.menuCtrl.enable(false, 'menu2');
  }
  menu2Active() {
    this.activeMenu = 'menu2';
    this.menuCtrl.enable(false, 'menu1');
    this.menuCtrl.enable(true, 'menu2');
  }

  openMenuUser() {
    console.log("​StoriesPage -> openMenuUser -> openMenuUser")
    this.menuCtrl.open('menuUser');
  }

  public getBackgroundStyle(index) {
    return 'assets/imgs/' + (index+1) + '.jpg';
  }

  openDetail() {
    console.log("​StoriesPage -> openDetail -> openDetail")
    this.navCtrl.push('StoriesDetailPage');

  }
}
