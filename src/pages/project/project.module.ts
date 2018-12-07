import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectPage } from './project';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    ProjectPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectPage),
    ComponentsModule
  ],
})
export class ProjectPageModule { }
