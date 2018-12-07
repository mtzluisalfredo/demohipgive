import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the BrowsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html'
})
export class BrowsePage {
  activeMenu: string;
  itemsLevels = [
    {
      name: 1,
      donors: false,
    },
    {
      name: 2,
      donors: true,
      amount: [1, 2, 3,4,5,],
    },
    {
      name: 3,
      donors: false,
    },
    {
      name: 4,
      donors: false,
    },
    {
      name: 5,
      donors: true,
      amount: [1, 2, 3],
    },
    {
      name: 6,
      donors: false,
    },
    {
      name: 7,
      donors: false,
    },
  ];

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public navParams: NavParams) {
    this.menu1Active();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowsePage');
  }
  openMenuTwo() {
    this.menu2Active();
    this.menuCtrl.open();
  }


  openMenuUser() {
    this.menuCtrl.open('menuUser');
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

  public getBackgroundStyle(index) {
    return 'assets/imgs/' + (index+1) + '.jpg';
  }

}
