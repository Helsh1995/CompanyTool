import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
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

  public selectedDate: moment.Moment;
  public dates: moment.Moment[];
  public slidesPerView: number;

  constructor() {
    this.selectedDate = moment();
    this.dates = [];
    this.slidesPerView = 1;
  }

  ngOnInit() {
    this._getDates();

    window.addEventListener('resize', this._onResizeWindow);

  }

  ngAfterViewInit() {
    this._onResizeWindow();
    this._slideToToday();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this._onResizeWindow);
  }

  private _getDates(): void {
    this.dates = [];
    this.dates.push(...this._getDatesBefore());
    this.dates.push(this.selectedDate);
    this.dates.push(...this._getDatesAfter());

    this.dates.sort((a, b) => a.isBefore(b) ? -1 : 1);
  }

  private _getDatesBefore(): moment.Moment[] {
    const dates: moment.Moment[] = [];

    for (let i = 1; i <= DAYS_MARGIN; i++) {
      dates.push(moment(this.selectedDate).add(i, 'd'));
    }

    return dates;

  }

  private _getDatesAfter(): moment.Moment[] {
    const dates: moment.Moment[] = [];

    for (let i = 1; i <= DAYS_MARGIN; i++) {
      dates.push(moment(this.selectedDate).subtract(i, 'd'));
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

  }

  private _slideToToday(): void {
    setTimeout(() => {
      const index = this.dates.findIndex(d => d.isSame(this.selectedDate, 'd'));

      setTimeout(() => {
        this.slides.slideTo(index - Math.floor(this.slidesPerView / 2));
      }, 500);

    }, 200);
  }

}
