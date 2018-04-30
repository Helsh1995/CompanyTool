import {Component, Input} from '@angular/core';
import {TimeLog} from "../../domains/time-log.domain";

@Component({
  selector: 'time-log',
  templateUrl: 'time-log.component.html'
})
export class TimeLogComponent {

  @Input()timeLog: TimeLog;

  constructor() {
  }


}
