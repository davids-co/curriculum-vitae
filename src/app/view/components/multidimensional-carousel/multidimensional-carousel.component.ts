import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProjectInterface } from 'src/app/models/project.interface';
import { CONSTANTS } from 'src/app/utils/constans.util';
@Component({
  selector: 'app-multidimensional-carousel',
  templateUrl: './multidimensional-carousel.component.html',
  styleUrls: ['./multidimensional-carousel.component.css']
})
export class MultidimensionalCarouselComponent implements OnInit {
  @Input() projects: ProjectInterface[] = [];
  @Input() selectedProjectId: number | null = null;
  @Output() closeCarousel = new EventEmitter<void>();

  currentIndex = 0;
  constants = CONSTANTS;

  ngOnInit(): void {
    this.currentIndex = this.selectedProjectId || 0;
  }

  previous() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.projects.length - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  handleSwipe(event: any) {
    const x = Math.abs(event.deltaX);
    const y = Math.abs(event.deltaY);

    if (x > y) {
      this.passSlide(event.deltaX);
    }
  }

  passSlide = (deltaX: number) => {
    if (deltaX > 0) {
      this.previous();
    } else {
      this.next();
    }
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  //TODO: Cambiar como se generan las animaciones. Se debe usar la clase empleada para esto.
  getItemStyle(index: number) {
    const position = index - this.currentIndex;
    return this.getAnimation(position);
  }

  getAnimation(position: number) {
    if (position === 0) {
      return { transform: 'translateX(0) scale(1)', opacity: 1 };
    } else if (position === 1 || position === -1) {
      return { transform: `translateX(${position * 100}%) scale(0.8)`, opacity: 0.6 };
    } else {
      return { transform: `translateX(${position * 100}%) scale(0.6)`, opacity: 0 };
    }
  }



}
