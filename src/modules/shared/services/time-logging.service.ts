import {Injectable} from '@angular/core';
import {TimeLog} from "../domains/time-log.domain";
import * as moment from "moment";
import {sprintf} from "sprintf-js";
import {ApiService} from "./api.service";
import {API_ENDPOINT} from "../../../utils/api_endpoints";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TimeLoggingService {

  private _timeLogs: { date: moment.Moment, timeLogs: TimeLog[] }[];

  constructor(private apiService: ApiService) {
    this._timeLogs = [];
  }

  public getTimeLogsForDate(date: moment.Moment): Observable<TimeLog[]> {

    const findLogsForDate = this._timeLogs.find(item => item.date.isSame(date));

    if (findLogsForDate) {
      return Observable.of(findLogsForDate.timeLogs);
    }

    return this.apiService
      .makeRequest("GET", sprintf(API_ENDPOINT.ALL_TIME_LOGS, date.format('DD-MM-YYYY')))
      .map((result) => JSON.parse(result).map((log) => new TimeLog(log)))
      .do((timeLogs) => this._timeLogs.push({date, timeLogs}));

  }

}
