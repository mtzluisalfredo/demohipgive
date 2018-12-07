import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, MenuController, LoadingController, Platform } from 'ionic-angular';
import { ApiAppProvider } from '../../providers/api-app/api-app';

@IonicPage()
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {
  @ViewChild(Slides)
  slides: Slides;
  indexImg: any = './../../assets/imgs/photo_1.jpg';
  colors: string = '';
  totalItem: 0;
  dataProjects: any = [];
  page: number = 1;
  per_page: number = 5;
  total_pages: any;
  resultAPI: any = null;
  loader: any;
  isIos: any = false;

  constructor(
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiAppProvider: ApiAppProvider,
    public loadingCtrl: LoadingController,
    public plt: Platform,
  ) {
    // let status bar overlay webview
    // this.statusBar.overlaysWebView(true);
    if (this.plt.is('ios')) {
      // This will only print when on iOS
      console.log('I am an iOS device!');
      this.isIos = true;
    }
    // set status bar to white
    this.loader = this.loadingCtrl.create({
      content: 'Loading...'
    });
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

  doRefresh(refresher) {
    let resultAPI = null;
    this.apiAppProvider.getProjects(this.per_page, this.page).then(
      result => {
        if (Boolean(result)) {
          resultAPI = result;
          this.totalItem = resultAPI.total;
          if (resultAPI.data.length > 0) {

            const arrayTemp = this.dataProjects
            const newData = arrayTemp.concat(resultAPI.data);

            this.dataProjects = newData;
          }
          this.page = Number(resultAPI.page) + 1;
          this.total_pages = resultAPI.total_pages;
          refresher.complete();
        }
        refresher.complete();
      },
      err => {
        console.log('error:', err);
        // infiniteScroll.complete();
        refresher.complete();
      }

    );
    // refresher.complete();
  }

  setMyStyle() {
    let styles = {
      'background-image':
        'radial-gradient(farthest-side at 55% 65%, ' + this.colors + ')'
    };
    return styles;
  }

  ionViewDidLoad() {
    this.loader.dismiss();
  }

  slideChanged() {
    let imgPre = this.slides.getActiveIndex();

    this.indexImg =
      './../../assets/imgs/photo_' + (imgPre + 1).toString() + '.jpg';
  }

  doInfinite(infiniteScroll) {
    if (this.dataProjects.length < this.totalItem) {

      let resultAPI = null;
      this.apiAppProvider.getProjects(this.per_page, this.page).then(
        result => {
          if (Boolean(result)) {
            resultAPI = result;
            this.totalItem = resultAPI.total;
            if (resultAPI.data.length > 0) {

              const arrayTemp = this.dataProjects
              const newData = arrayTemp.concat(resultAPI.data);
              this.dataProjects = newData;
            }
            this.page = Number(resultAPI.page) + 1;
            this.total_pages = resultAPI.total_pages;
          }
          infiniteScroll.complete();
        },
        err => {
          console.log('error:', err);
          infiniteScroll.complete();
        }
      );
    }
    infiniteScroll.complete();
  }
}
