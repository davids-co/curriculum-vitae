import {
  Component,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  ViewChild,
  EventEmitter
} from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { JobInterface } from 'src/app/models/job.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnChanges {
  @Input() selectedIndex: number | null = null;
  @Input() timelineData: JobInterface[] = [];
  @Output() slideChanged = new EventEmitter<number>();
  @ViewChild(NgbCarousel) carousel: NgbCarousel | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedIndex'] && this.carousel) {
      this.carousel.select('slide_' + this.selectedIndex);
    }
  }

  onSlideChanged(slideId: any): void {
    const index = parseInt(slideId.current.replace('slide_', ''), 10);
    this.slideChanged.emit(index);
  }

  handleSwipe(event: any) {
    const x = Math.abs(event.deltaX);
    const y = Math.abs(event.deltaY);

    if (x > y) {
      this.passSlide(event.deltaX);
    }
  }

  passSlide = (deltaX: number) => {
    if (this.carousel) {
      if (deltaX > 0) {
        this.carousel.prev();
      } else {
        this.carousel.next();
      }
    }
  }
}
