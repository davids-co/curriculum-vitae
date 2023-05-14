import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobInterface } from 'src/app/models/job.interface';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  @Input() selectedIndex: number | null = null;
  @Input() timelineData: JobInterface[] = [];
  @Output() timelineSelected = new EventEmitter<number>();

  onPointClick(index: number): void {
    this.selectedIndex = index;
    this.timelineSelected.emit(index);
  }
}
