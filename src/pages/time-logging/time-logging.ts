import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import * as moment from 'moment';
import {TimeLog} from "../../modules/shared/domains/time-log.domain";
import {TimeLoggingService} from "../../modules/shared/services/time-logging.service";

@IonicPage()
@Component({
  selector: 'page-time-logging',
  templateUrl: 'time-logging.html',
})
export class TimeLoggingPage {

  public selectedDate: moment.Moment;
  public timeLogs: TimeLog[];

  constructor(private timeLogginService: TimeLoggingService) {
    this.selectedDate = moment();
    this.timeLogs = [];
  }

  public onSelectedDateChanges(): void {
    this._getLogsForSelectedDate();
  }

  private _getLogsForSelectedDate(): void {
    this.timeLogs = [];
    this.timeLogginService.getTimeLogsForDate(this.selectedDate)
      .take(1)
      .subscribe(
        (result) => {
          this.timeLogs = result;
        },
        () => {
        });
  }

}
