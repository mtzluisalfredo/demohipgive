import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrowseDetailPage } from './browse-detail';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    BrowseDetailPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BrowseDetailPage),
  ],
})
export class BrowseDetailPageModule {}
