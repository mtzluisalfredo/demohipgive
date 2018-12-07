import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  LoadingController,
} from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { ApiAppProvider } from '../../providers/api-app/api-app';
import { TabsPage } from './../tabs/tabs';
import { Storage } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user: any;
  username: any;
  password: any;
  userFb: any;
  loader: any;
  resultFRResponse: any = {status: null}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public loginProvider: LoginProvider,
    public apiAppProvider: ApiAppProvider,
    private fb: Facebook,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
  ) {
    this.loader = this.loadingCtrl.create({
      content: 'Loading...'
    });

  }

  ionViewDidLoad() {
    // get user token
    this.storage.get('user').then(val => {
      console.log(val);
    });
  }

  // login form function
  login() {
    this.loginProvider.loginUser(this.username, this.password).then(
      result => {
        this.user = result;
        // save auth data on a json and save it
        let userData = {
          token: this.user.data.authToken,
          id: this.user.data.userId
        };
        this.storage.set('user', userData);
        localStorage.setItem('authToken', this.user.data.authToken);
        localStorage.setItem('userId', this.user.data.userId);
        this.navCtrl.setRoot(TabsPage);
      },
      err => {
        console.log('error:', err);
      }
    );
  }

  resetPassword() {
    this.navCtrl.push('ResetPasswordPage');
  }

  showLoading(type) {
    if (type) {
      this.loader.present();
    } else {
      if (this.loader) {
        this.loader.dismiss();
        this.loader = this.loadingCtrl.create({
          content: 'Loading...'
        });
      }

    }
  }

  loginFB() {
    this.showLoading(true);
    this.fb.login(['public_profile', 'email'])
      .then(res => {
				console.log("​LoginPage -> loginFB -> res", res)
        localStorage.setItem('responseFB', JSON.stringify(res));
        if (res.status === 'connected') {
          this.getInfo();
        };
      })
      .catch(e => {
        this.showLoading(false);
        console.log('Error logging into Facebook', e);
      });
  }

  getInfo() {
    this.fb.api('/me?fields=id,name,email,first_name,picture,last_name,gender', ['public_profile', 'email'])
      .then(data => {
        this.userFb = data;

        const dataProfile = JSON.parse(localStorage.getItem('responseFB'));
        const dataUser = {
          "email": this.userFb.email,
          "password": dataProfile.authResponse.userID,
          "username": this.userFb.email,
          "profile": {
            "status": "Active",
            "first_name": this.userFb.first_name,
            "last_name": this.userFb.last_name,
            "role": "Individual Donor",
            "language": "English",
            "account_type": "FB",
            "image": this.userFb.picture.data.url,
          }
        };

        this.loginProvider.loginFB(dataUser).then(
          result => {
            this.resultFRResponse = result;

            if(this.resultFRResponse.status === "success"){
              this.loginProvider.loginUser(this.userFb.email, dataProfile.authResponse.userID).then(
                result => {
                  this.user = result;
                  // save auth data on a json and save it
                  let userData = {
                    token: this.user.data.authToken,
                    id: this.user.data.userId
                  };

                  this.storage.set('user', userData);

                  localStorage.setItem('authToken', this.user.data.authToken);
                  localStorage.setItem('userId', this.user.data.userId);

                  this.loader.dismiss();
                  this.navCtrl.setRoot(TabsPage);
                }
              ).catch(
                err => {
                  this.loader.dismiss();
                  console.log('error:', err);
                }
              )
            }else {
              const alert = this.alertCtrl.create({
                title: 'Error',
                subTitle:'Incorrect data',
                buttons: ['OK']
              });
              alert.present();
            }
          },
          err => {
            console.log('error:', err);
            this.showLoading(false);
            const alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: 'Incorrect username or password',
              buttons: ['OK']
            });
            alert.present();
          }
        );
      })
      .catch(error => {
        this.showLoading(false);
        console.error(error);
      });
  }

}
