import {NgModule} from '@angular/core';
import {StartupPageService} from "./services/startup-page.service";
import {CommonModule} from "@angular/common";
import {AppNavigationService} from "./services/navigation.service";
import {DateDisplayComponent} from "./components/date-display/date-display.component";
import {IonicModule} from "ionic-angular";

const components = [DateDisplayComponent];
const services = [StartupPageService, AppNavigationService];
const modules = [CommonModule, IonicModule];

@NgModule({
  imports: [modules],
  exports: [modules, components],
  declarations: [components],
  providers: [services],
})
export class SharedModule {
}
