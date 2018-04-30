import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TimeLoggingPage} from './time-logging';
import {SharedModule} from "../../modules/shared/shared.module";

@NgModule({
  declarations: [
    TimeLoggingPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeLoggingPage),
    SharedModule
  ],
})
export class TimeLoggingPageModule {
}
