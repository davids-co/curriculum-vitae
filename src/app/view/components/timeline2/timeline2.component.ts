import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-timeline2',
  templateUrl: './timeline2.component.html',
  styleUrls: ['./timeline2.component.css']
})
export class Timeline2Component {
  @Input() timelineData: { role: string; date: string }[] = [];
  @Output() timelineSelected = new EventEmitter<number>();

  selectedPoint = -1;

  onPointClick(index: number): void {
    this.selectedPoint = index;
    this.timelineSelected.emit(index);
  }
}
