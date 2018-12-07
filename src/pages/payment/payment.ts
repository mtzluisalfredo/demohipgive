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
  subscribe: boolean = false;
  save: boolean = false;
  anonim: boolean = true;
  menu: string = '';
  code: number;
  expiration: number;
  number: number;

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

  updateSubscribe(){
		console.log("​PaymentPage -> updateSubscribe -> this.subscribe", this.subscribe);
  }

  updateSave(){
		console.log("​PaymentPage -> updateSave -> this.save", this.save);
  }

  addCard() {
		console.log("​PaymentPage -> addCard");

  }

  pageBack() {
    this.navCtrl.pop();
  }

}
