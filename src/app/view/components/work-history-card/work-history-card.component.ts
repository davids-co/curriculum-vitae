
import { Component, Input } from '@angular/core';
import { JobInterface } from 'src/app/models/job.interface';

@Component({
  selector: 'app-work-history-card',
  templateUrl: './work-history-card.component.html',
  styleUrls: ['./work-history-card.component.css']
})
export class WorkHistoryCardComponent {
  @Input() workExperience!: JobInterface;
}
