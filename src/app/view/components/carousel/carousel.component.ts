import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnChanges {
  @Input() selectedIndex: number | null = null;
  @Input() timelineData: { role: string; date: string }[] = [];
  @ViewChild(NgbCarousel, { static: true }) carousel: NgbCarousel | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedIndex'] && this.carousel) {
      this.carousel.select('slide_' + this.selectedIndex);
    }
  }
}
