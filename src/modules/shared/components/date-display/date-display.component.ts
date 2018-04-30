import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import * as moment from 'moment';
import {Slides} from "ionic-angular";

const DAYS_MARGIN = 7;
const MAX_DAYS_VISIBLE = 6;

@Component({
  selector: 'date-display',
  templateUrl: 'date-display.component.html'
})

export class DateDisplayComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(Slides) slides: Slides;

  @Input() selectedDate: moment.Moment = moment();
  @Output() selectedDateChange: EventEmitter<moment.Moment>;

  public dates: moment.Moment[];
  public slidesPerView: number;

  constructor() {
    this.dates = [];
    this.slidesPerView = 1;

    this.selectedDateChange = new EventEmitter<moment.Moment>();
  }

  ngOnInit() {
    this._getDates();

    window.addEventListener('resize', this._onResizeWindow);
  }

  ngAfterViewInit() {
    this._onResizeWindow();
    this._slideToSelectedDate();

    this.slides.lockSwipes(true);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this._onResizeWindow);
  }

  public selectDate(date: moment.Moment): void {
    this.selectedDate = date;
    this._getDates();
  }

  public swipeLeft(): void {
    this.selectedDate.add(-1, 'd');
    this._getDates();
  }

  public swipeRight(): void {
    this.selectedDate.add(1, 'd');
    this._getDates();
  }

  private _getDates(): void {
    this.dates = [];
    this.dates.push(...this._getDatesBefore());
    this.dates.push(this.selectedDate);
    this.dates.push(...this._getDatesAfter());

    this.dates.sort((a, b) => a.isBefore(b) ? -1 : 1);

    this._slideToSelectedDate();
    this.selectedDateChange.emit(this.selectedDate);
  }

  private _getDatesBefore(): moment.Moment[] {
    const dates: moment.Moment[] = [];

    for (let i = 1; i <= DAYS_MARGIN; i++) {
      dates.push(moment(this.selectedDate).add(-i, 'd'));
    }

    return dates;
  }

  private _getDatesAfter(): moment.Moment[] {
    const dates: moment.Moment[] = [];

    for (let i = 1; i <= DAYS_MARGIN; i++) {
      dates.push(moment(this.selectedDate).add(i, 'd'));
    }

    return dates;
  }

  private _onResizeWindow = () => {

    if (!this.slides) {
      return;
    }

    const slidesPerView = Math.floor(this.slides.renderedWidth / 150);

    this.slidesPerView = slidesPerView < MAX_DAYS_VISIBLE ? slidesPerView : MAX_DAYS_VISIBLE;
    this.slidesPerView = this.slidesPerView % 2 == 0 ? this.slidesPerView - 1 : this.slidesPerView; // only show uneven numbers

    this.slides.update();
    this.slides.resize();

  };

  private _slideToSelectedDate(): void {
    setTimeout(() => {
      const index = this.dates.findIndex(d => d.isSame(this.selectedDate, 'd'));

      this.slides.lockSwipes(false);
      this.slides.slideTo(index - Math.floor(this.slidesPerView / 2));
      this.slides.lockSwipes(true);

    }, 200);
  }

}
