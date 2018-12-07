import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoriesDetailPage } from './stories-detail';
import { ComponentsModule } from './../../components/components.module';
@NgModule({
  declarations: [
    StoriesDetailPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(StoriesDetailPage),
  ],
})
export class StoriesDetailPageModule {}
