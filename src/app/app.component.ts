import {Component, OnInit, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StartupPageService} from "../modules/shared/services/startup-page.service";
import {AppNavigationService} from "../modules/shared/services/navigation.service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  rootPage: any;

  @ViewChild(Nav) nav: Nav;

  constructor(private startupPageService: StartupPageService,
              private appNavigationService: AppNavigationService,
              private platform: Platform,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen) {
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.appNavigationService.init(this.nav);

      this.rootPage = this.startupPageService.getStartupPage();
    });
  }
}

