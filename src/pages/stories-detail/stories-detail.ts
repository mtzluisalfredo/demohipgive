import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the StoriesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stories-detail',
  templateUrl: 'stories-detail.html',
})
export class StoriesDetailPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoriesDetailPage');
  }

  pageBack() {
    this.navCtrl.pop()
  }

  openMenuUser() {
    this.menuCtrl.open('menuUser');
  }
}
