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
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {
  currentEmployment=0;
  employments:DataItem[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
