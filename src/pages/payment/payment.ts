import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  showCard: boolean = false;
  menu: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  openPaypal() {
    this.menu = 'paypal';
    this.toggleCard();
  }

  openCreditCard() {
    this.menu = 'card';
    this.toggleCard();
  }
  toggleCard(){
    this.showCard = !this.showCard;
  }

  pageBack() {
    this.navCtrl.pop();
  }

}
