import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { urlBase }  from './../urlBase';

@Injectable()
export class ApiAppProvider {

  constructor(
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public http: HttpClient,
    public alertCtrl: AlertController
  ) {
    console.log('Provider-API-app');
  }

  getCountries() {
    const userId = localStorage.getItem('userId')
    const authToken = localStorage.getItem('authToken')
    const headers = new HttpHeaders({
      'X-User-Id': userId,
      'X-Auth-Token': authToken,
    });
    const loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loading.present();

    return new Promise(resolve => {
      this.http.get(urlBase.staging + '/countries', { headers }).subscribe(
        res => {
          console.log('TCL: getStories -> getStories -> res', res);
          loading.dismiss();
          resolve(res);
        },
        err => {
          console.log(err);
          const alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Incorrect username or password',
            buttons: ['OK']
          });
          alert.present();
          loading.dismiss();
        }
      );
    });
  }

  getStories() {
    const userId = localStorage.getItem('userId')
    const authToken = localStorage.getItem('authToken')
    const headers = new HttpHeaders({
      'X-User-Id': userId,
      'X-Auth-Token': authToken,
    });
    const loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loading.present();

    return new Promise(resolve => {
      this.http.get(urlBase.staging + '/stories', { headers }).subscribe(
        res => {
          console.log('TCL: getStories -> getStories -> res', res);
          loading.dismiss();
          resolve(res);
        },
        err => {
          console.log(err);
          const alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Incorrect username or password',
            buttons: ['OK']
          });
          alert.present();
          loading.dismiss();
        }
      );
    });
  }

  getCategories() {
    const userId = localStorage.getItem('userId')
    const authToken = localStorage.getItem('authToken')
    const headers = new HttpHeaders({
      'X-User-Id': userId,
      'X-Auth-Token': authToken,
    });
    const loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loading.present();

    return new Promise(resolve => {
      this.http.get(urlBase.staging + '/categories', { headers }).subscribe(
        res => {
          console.log('TCL: ApiAppProvider -> loginUser -> res', res);
          loading.dismiss();
          resolve(res);
        },
        err => {
          console.log(err);
          const alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Incorrect username or password',
            buttons: ['OK']
          });
          alert.present();
          loading.dismiss();
        }
      );
    });
  }

  getProjects(per_page, page) {
    console.log('TCL: ApiAppProvider -> getProjects -> page, per_page', per_page, page);
    const userId = localStorage.getItem('userId')
    const authToken = localStorage.getItem('authToken')
    const headers = new HttpHeaders({
      'X-User-Id': userId,
      'X-Auth-Token': authToken,
    });
    console.log('TCL: ApiAppProvider -> getProjects -> headers', headers);
    const loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loading.present();

    return new Promise(resolve => {
      this.http.get(urlBase.staging + '/projects/?page='+page+'&perPage=' + per_page, { headers }).subscribe(
        res => {
          console.log('TCL: ApiAppProvider -> loginUser -> res', res);
          loading.dismiss();
          resolve(res);
        },
        err => {
          console.log(err);
          const alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Incorrect username or password',
            buttons: ['OK']
          });
          alert.present();
          loading.dismiss();
        }
      );
    });
  }
}
