import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {AppNavigationService} from "../../modules/shared/services/navigation.service";
import {PAGE} from "../../utils/pages";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private appNavService: AppNavigationService) {
  }

  public login(): void {
    this.appNavService.pushPage(PAGE.TIME_LOGGING);
  }

}
