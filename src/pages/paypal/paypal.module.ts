import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaypalPage } from './paypal';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    PaypalPage,
  ],
  imports: [
    IonicPageModule.forChild(PaypalPage),
    ComponentsModule,
  ],
})
export class PaypalPageModule {}
