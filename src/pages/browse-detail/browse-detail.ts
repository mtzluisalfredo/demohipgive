import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ApiAppProvider } from './../../providers/api-app/api-app';
/**
 * Generated class for the BrowseDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-browse-detail',
  templateUrl: 'browse-detail.html',
})
export class BrowseDetailPage {
  @ViewChild(Slides)
  slides: Slides;
  imgIndex: any;
  dataProjects: any = [];
  indexImg: any = './../../assets/imgs/photo_1.jpg';

  colors: string = '';
  totalItem: 0;
  page: number = 1;
  per_page: number = 5;
  total_pages: any;
  resultAPI: any = null;
  loader: any;
  isIos: any = false;


  constructor(public navCtrl: NavController, public apiAppProvider: ApiAppProvider, public navParams: NavParams) {
    this.imgIndex = this.navParams.get('imgIndex');
    let resultAPI = null;
    this.apiAppProvider.getProjects(this.per_page, this.page).then(
      result => {
        if (Boolean(result)) {
          resultAPI = result;
          this.totalItem = resultAPI.total;
          this.dataProjects = resultAPI.data;
          this.page = Number(resultAPI.page) + 1;
          this.total_pages = resultAPI.total_pages;
        }
      },
      err => {
        console.log('error:', err);
        this.navCtrl.setRoot('LoginPage');
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowseDetailPage');
  }
  public getBackgroundStyle(index) {
    return 'assets/imgs/' + (index+1) + '.jpg';
  }
  pageBack() {
    this.navCtrl.pop()
  }

  slideChanged() {
    let imgPre = this.slides.getActiveIndex();

    this.indexImg =
      './../../assets/imgs/photo_' + (imgPre + 1).toString() + '.jpg';
  }

}
