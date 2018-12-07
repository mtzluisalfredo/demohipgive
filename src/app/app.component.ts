import { Component, ViewChild } from '@angular/core';
import { Platform, App, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from './../pages/tabs/tabs';
// import { ApiAppProvider } from '../../providers/api-app/api-app';
import { ApiAppProvider } from './../providers/api-app/api-app';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  itemsLevelsOne = [1, 2, 3, 4];
  itemsLevelsTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  resultCategories: any;
  resultCountries: any;
  brightness: number = 20;
  saturation: number = 0;
  warmth: number = 1300;
  structure: any = { lower: 33, upper: 60 };
  valuesRange: any;

  constructor(
    public app: App,
    public menuCtrl: MenuController,
    platform: Platform,
    public apiAppProvider: ApiAppProvider,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = 'WelcomePage';
      }
      statusBar.styleDefault();
      statusBar.backgroundColorByHexString('#f8f8f8');
      splashScreen.hide();
      var resultAPI = null;
      // this.apiAppProvider.getStories();
      if (authToken) {
        this.apiAppProvider.getCountries().then(
          result => {
            if (Boolean(result)) {
              resultAPI = result;
              this.resultCountries = resultAPI;
              resultAPI = null;
            }
          },
          err => {
            console.log('error:', err);
          }
        );
        this.apiAppProvider.getCategories().then(
          result => {
            if (Boolean(result)) {
              resultAPI = result;
              this.resultCategories = resultAPI;
              console.log(
                '​MyApp -> ionViewDidLoad -> this.resultCategories',
                this.resultCategories
              );
              resultAPI = null;
            }
          },
          err => {
            console.log('error:', err);
          }
        );
      }
    });
  }

  onChange(ev: any) {
    console.log('Changed', ev._value);
    this.valuesRange = ev._value;
  }

  updateCucumber() {
    console.log('​MyApp -> updateCucumber -> updateCucumber');
  }

  clearFilterOne() {
    console.log('​MyApp -> clearFilterOne -> clearFilterOne');
  }

  saveFilterOne() {
    console.log('​MyApp -> saveFilterOne -> saveFilterOne');
  }

  signOut() {
    console.log('​MyApp -> signOut -> signOut', '');
    localStorage.removeItem('authToken');
    localStorage.removeItem('key');
    this.menuCtrl.close('menuUser');
    this.nav.push('WelcomePage');
    this.app.getActiveNav().setRoot('WelcomePage');
  }
}
