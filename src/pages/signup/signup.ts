import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import countries from './countries.js';
import { LoginProvider } from '../../providers/login/login';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  firstName: any;
  lastName: any;
  countries: any;
  profile: any = {};
  imgGif: any;

  createdUser: any = {status: 'null'};

  constructor(
    public navCtrl: NavController,
    public loginProvider: LoginProvider,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
    this.countries = countries;
    this.imgGif = 'assets/imgs/done.gif';
  }

  ionViewDidLoad() {
    this.countries = countries;
    this.imgGif = 'assets/imgs/done.gif';
  }

  ionViewWillUnload() {
    this.imgGif = '';
  }

  goBack() {
    this.navCtrl.pop();
  }

  actionSignUp() {
    const dataUser = {
      "email": this.profile.email,
      "profile": {
        "status": "Active",
        "first_name": this.profile.firstName,
        "last_name": this.profile.lastName,
        "role": "Individual Donor",
        "language": this.profile.lenguage,
      }
    }

    this.loginProvider.signUpUser(dataUser).then(
      result => {
        this.createdUser = result;

				console.log("signUpUser -> signUpUser -> signUpUser", this.createdUser.status)
        // save auth data on a json and save it
      },
      err => {
        this.createdUser = {status: "error"}
        console.log('error:', err);
        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Error-',
          buttons: ['OK']
        });
        alert.present();
      }
    );

  }

}
