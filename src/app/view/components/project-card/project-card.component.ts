import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProjectInterface } from 'src/app/models/project.interface';
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project!: ProjectInterface ;
  @Output() selectedCard = new EventEmitter<number>();

  onClick() {
    this.selectedCard.emit(this.project?.id);
  }
}
