import {Injectable} from "@angular/core";
import {PAGE} from "../../../utils/pages";

@Injectable()
export class StartupPageService {

  constructor() {
  }

  public getStartupPage(): string {

    // do some magic first

    return PAGE.LOGIN;
  }
}
