import {Injectable} from "@angular/core";
import {NavController} from "ionic-angular";

@Injectable()
export class AppNavigationService {

  private _navController: NavController;

  constructor() {
  }

  public init(navController: NavController): void {
    this._navController = navController;
  }

  public pushPage(page: string): void {
    this._navController.push(page);
  }

  public popPage(): void {
    if (!this._navController.canGoBack()) {
      return;
    }

    this._navController.pop();

  }
}
