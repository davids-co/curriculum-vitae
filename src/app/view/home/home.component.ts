import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from 'src/app/utils/constans.util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  constants = CONSTANTS;
  selectedTimelineIndex: number = 0;
  selectedProjectIndex: number = 0;
  showCarousel = false;

  constructor() {
  }

  ngOnInit() {
  }

  onTimelineSelected(index: number) {
    this.selectedTimelineIndex = index;
  }

  selectProject(index: number) {
    this.selectedProjectIndex = index;
    this.showCarousel = true;
  }

  openCarousel() {
    this.showCarousel = true;
  }

  closeCarousel() {
    this.showCarousel = false;
  }

  onScroll(event: Event) {
    console.log("ehmm")
    event.stopPropagation();
  }
}

