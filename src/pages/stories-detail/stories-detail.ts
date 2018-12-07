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
  imgIndex: any;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController, public navParams: NavParams) {
      this.imgIndex = this.navParams.get('imgIndex');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoriesDetailPage');
  }

  public getBackgroundStyle(index) {
    return 'assets/imgs/' + (index+1) + '.jpg';
  }

  pageBack() {
    this.navCtrl.pop()
  }

}
