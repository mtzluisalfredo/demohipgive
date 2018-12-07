import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  email: any

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loginProvider: LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

  resetPassword() {
    console.log("email: " + this.email);
    this.loginProvider.resetPassword(this.email).then((result) => {
      console.log("result: " + result)
    }, (err) => {
      console.log('error:', err);
    });
  }

  public reset() {
    console.log('TCL: ResetPasswordPage -> publicreset -> reset');

  }

  goBack() {
    this.navCtrl.push('LoginPage')
  }

}
