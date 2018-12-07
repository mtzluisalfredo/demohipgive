import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { urlBase }  from './../urlBase';

@Injectable()
export class LoginProvider {
  constructor(private storage: Storage, public loadingCtrl: LoadingController,
    public http: HttpClient, public alertCtrl: AlertController) {
    console.log('Hello LoginProvider Provider', urlBase.staging);
  }

  loginUser(username, password) {

    const loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loading.present();

    return new Promise(resolve => {
      let data = {
        'email': username,
        'password': password
      };
      this.http.post(urlBase.staging + '/login', data).subscribe(res => {
        console.log('TCL: LoginProvider -> loginUser -> res', res);
        loading.dismiss();
        resolve(res);
      }, err => {
        console.log(err);
        console.log(err.message);
        console.log(err.status);
        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Incorrect username or password',
          buttons: ['OK']
        });
        alert.present();
        loading.dismiss();
      });
    });
  }

  resetPassword(email) {
    console.log("resetPassword()")
    const loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loading.present();

    return new Promise(resolve => {
      let data = {
        'email': email
      };
      this.http.post(urlBase.staging + '/resetPassword', data).subscribe(res => {
        loading.dismiss();
        console.log("kappa: " + res)
        const successAlert = this.alertCtrl.create({
          title: 'Success',
          subTitle: res.toString(),
          buttons: ['OK']
        });
        successAlert.present();
        resolve(res);
      }, err => {
        console.log(err);
        console.log(err.message);
        console.log(err.status);
        const errorAlert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Error sending email',
          buttons: ['OK']
        });
        errorAlert.present();
        loading.dismiss();
      });
    });
  }

  logOut() {
    return new Promise((resolve, reject) => {
      this.storage.get('user').then((val) => {
        if (val !== null) {
          const httpOptions = {
            headers: new HttpHeaders({
              'X-Auth-Token': val.token,
              'X-User-Id': val.id
            })
          };
          this.http.post(urlBase.staging + '/logout', {}, httpOptions).subscribe(data => {
            this.storage.remove('user');
            resolve(data);
          }, (err) => {
            console.log('ERROR:', err);
            reject(err);
          });
        }
      });
    });
  }

  loginFB(data) {
		console.log("​loginFB -> data", data)
    return new Promise((resolve, reject) => {
      this.http.post(urlBase.staging + '/users', data).subscribe(res => {
        resolve(res);
      }, (err) => {
        console.log('ERROR:', err);
        reject(err);
      });
    });
  }

  signUpUser(data){
    console.log("signUpUsersignUpUsersignUpUsersignUpUser -> data", data)
    return new Promise((resolve, reject) => {
      this.http.post(urlBase.staging + '/users', data).subscribe(res => {
        resolve(res);
      }, (err) => {
        console.log('ERROR:', err);
        reject(err);
      });
    });
  }

}
