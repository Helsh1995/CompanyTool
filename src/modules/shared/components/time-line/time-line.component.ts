import {Component, Input, OnInit} from '@angular/core';
import {TimeLog} from "../../domains/time-log.domain";

const MIN_FROM = 0;
const MAX_UNTIL = 23;

@Component({
  selector: 'time-line',
  templateUrl: 'time-line.component.html'
})
export class TimeLineComponent implements OnInit {

  @Input() logs: TimeLog[] = [];

  @Input() from: number = MIN_FROM;
  @Input() until: number = MAX_UNTIL;

  public timeSlots: { from: number, until: number }[];

  constructor() {
    this.timeSlots = [];
  }

  ngOnInit(): void {
    this._initializeTimeSlots();
    this._makeSureHouresAreCorrect();
  }

  private _initializeTimeSlots(): void {
    for (let i = this.from; i < this.until; i++) {
      this.timeSlots.push({
        from: i,
        until: i + 1
      });

      if (i + 1 == this.until) {
        this.timeSlots.push({
          from: this.until,
          until: this.until == MAX_UNTIL ? 0 : this.until + 1
        });
      }
    }

    console.log(this.timeSlots);
  }

  private _makeSureHouresAreCorrect(): void {
    if (this.from < MIN_FROM) {
      this.from = MIN_FROM;
    }

    if (this.until > MAX_UNTIL) {
      this.until = MAX_UNTIL;
    }

    if (this.from > this.until) {
      this.from = MIN_FROM;
      this.until = MAX_UNTIL;
    }
  }

}
