import {NgModule} from '@angular/core';
import {StartupPageService} from "./services/startup-page.service";
import {CommonModule} from "@angular/common";
import {AppNavigationService} from "./services/navigation.service";
import {DateDisplayComponent} from "./components/date-display/date-display.component";
import {IonicModule} from "ionic-angular";
import {ApiService} from "./services/api.service";
import {TimeLoggingService} from "./services/time-logging.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MockingHttpInterceptor} from "../../http-interceptors/mocking.interceptor";
import {TimeLogComponent} from "./components/time-log/time-log.component";

const components = [DateDisplayComponent, TimeLogComponent];
const services = [StartupPageService, AppNavigationService, ApiService, TimeLoggingService];
const modules = [CommonModule, IonicModule, HttpClientModule];
const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: MockingHttpInterceptor,
    multi: true
  }
];

@NgModule({
  imports: [modules],
  exports: [modules, components],
  declarations: [components],
  providers: [services, interceptors],
})
export class SharedModule {
}
