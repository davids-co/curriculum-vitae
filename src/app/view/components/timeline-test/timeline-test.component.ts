import { Component, OnInit } from '@angular/core';



interface DataItem {
  id: number;
  company: string;
  role: string;
  date: {
    initial: string,
    final: string,
    total: string,
  },
  tags: string[],
  functions: string
}

@Component({
  selector: 'app-timeline-test',
  templateUrl: './timeline-test.component.html',
  styleUrls: ['./timeline-test.component.css']
})

export class TimelineTestComponent implements OnInit {
  currentEmployment=0;
  employments:DataItem[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
