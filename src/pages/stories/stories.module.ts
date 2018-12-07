import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoriesPage } from './stories';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    StoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(StoriesPage),
    ComponentsModule,
  ],
})
export class StoriesPageModule {}
