import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TimeLoggingPage} from './time-logging';
import {SharedModule} from "../../modules/shared/shared.module";
import {TimeLineComponent} from "./components/time-line/time-line.component";
import {DatesSelectingComponent} from "./components/dates-selecting/dates-selecting.component";

const components = [TimeLineComponent, DatesSelectingComponent];

@NgModule({
  declarations: [
    TimeLoggingPage,
    components
  ],
  imports: [
    IonicPageModule.forChild(TimeLoggingPage),
    SharedModule
  ],
})
export class TimeLoggingPageModule {
}
