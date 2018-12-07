import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { TabsPage } from './../tabs/tabs'; // change to home/login page

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  mymodel: string
  itemsLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  todo = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public loginProvider: LoginProvider) {
  }

  logForm() {
    console.log(this.todo)
  }

  ionViewWillEnter() {
    this.mymodel = "donations"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  public logout() {
    let alert = this.alertCtrl.create({
      title: 'Logout?',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            console.log("logout")
            this.loginProvider.logOut().then((result) => {
              this.navCtrl.push(TabsPage); // change to home/login page
            }, (err) => {
              console.log('error:', err);
            });
          }
        }
      ]
    });
    alert.present();
  }
}
