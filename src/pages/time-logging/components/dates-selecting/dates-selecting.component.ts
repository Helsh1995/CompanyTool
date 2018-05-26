import {Component, OnInit} from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'dates-selecting',
  templateUrl: './dates-selecting.component.html'
})

export class DatesSelectingComponent implements OnInit {

  public currentDate: moment.Moment;
  public prevWeek: DayInWeek[];
  public currentWeek: DayInWeek[];
  public nextWeek: DayInWeek[];

  public currentMonth: string;

  constructor() {
    this.currentDate = moment();

    this.prevWeek = [];
    this.currentWeek = [];
    this.nextWeek = [];
  }

  ngOnInit() {
    this._changeVariables();
  }

  public selectDate(day: DayInWeek): void {
    this.currentDate = moment(`${day.date}-${day.month}`, 'DD-MMMM');
  }

  public goToPrevWeek(): void {
    this.currentDate.add(-1, 'w');
    this._changeVariables();
  }

  public goToNextWeek(): void {
    this.currentDate.add(1, 'w');
    this._changeVariables();
  }

  private _changeVariables(): void {
    this._setDates(this.currentDate);
    this._setCurrentMonth();
  }

  private _setDates(date: moment.Moment): void {
    this.currentWeek = this._getWeek(date.clone());
  }

  private _getWeek = (weekDate: moment.Moment): DayInWeek[] => {

    const startOfWeek = weekDate.clone().startOf('W');
    const endOfWeek = weekDate.clone().endOf('W');

    const days = [];
    let day = startOfWeek;

    while (day <= endOfWeek) {
      days.push(day);
      day = day.clone().add(1, 'd');
    }

    return days.map((d: moment.Moment) => {
      return {
        date: +d.format('DD'),
        day: d.format('dddd').substring(0, 3),
        month: d.format('MMMM')
      }
    });
  };

  private _setCurrentMonth(): void {

    const firstDayMonth = this.currentWeek[0].month;
    const lastDayMonth = this.currentWeek[this.currentWeek.length - 1].month;

    this.currentMonth = firstDayMonth == lastDayMonth ?
      firstDayMonth :
      `${firstDayMonth.substring(0, 3)} - ${lastDayMonth.substring(0, 3)}`;

  }


}

interface DayInWeek {
  date: number,
  day: string,
  month: string
}
