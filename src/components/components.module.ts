import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ButtonHipgiveComponent } from './button-hipgive/button-hipgive';
import { InfoItemComponent } from './info-item/info-item';
import { ItemListComponent } from './item-list/item-list';
import { ProgressBarComponent } from './progress-bar/progress-bar';
@NgModule({
  declarations: [ButtonHipgiveComponent,
    InfoItemComponent,
    ItemListComponent,
    ProgressBarComponent],
  imports: [IonicModule],
  exports: [ButtonHipgiveComponent,
    InfoItemComponent,
    ItemListComponent,
    ProgressBarComponent]
})
export class ComponentsModule { }
