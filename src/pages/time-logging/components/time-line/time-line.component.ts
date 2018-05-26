import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'time-line',
  templateUrl: 'time-line.component.html'
})

export class TimeLineComponent implements OnInit {

  public times: number[];

  constructor() {
    this.times = [];
  }

  ngOnInit() {
    for (let i = 0; i < 24; i++) {
      this.times.push(i);
    }
  }
}
