import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, AnimationTriggerMetadata } from '@angular/animations';
import { Animations } from '../../utils/animations.module'


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

interface Lookup {
  [key: string]: number;
}
let flag = false;
function getFlag(): boolean {
  return flag;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [Animations.slide("100ms", true)
  ]

})

export class HomeComponent implements OnInit {
  animationState = 'in';
  duration = 500;

  test = false;

  timelineArray = [
    { role: 'Frontend Developer', date: '2003 - 2006' },
    { role: 'Senior Frontend Developer', date: '2006 - 2010' },
    { role: 'Frontend Team Lead', date: '2010 - 2016' },
    { role: 'Frontend Architect', date: '2016 - Present' }
  ];

  selectedTimelineIndex: number | null = null;

  onTimelineSelected(index: number) {
    this.selectedTimelineIndex = index;
  }

  currentEmployment = 0;

  employments: DataItem[] = [
    {
      id: 0,
      date: {
        initial: "11/2021",
        final: "Present",
        total: "3 years"
      },
      company: "Proximate Apps",
      role: "Software Projects Leader",
      tags: ["AWS", "Node.js", "MySQL", "Angular", "TypeScript", "JavaScript", "Jira", "Kotlin"],
      functions: `• <b>Restructured development team</b>, defining technology stacks for team members to improve product quality and delivery times, resulting in <b>10% increase in productivity</b>.\n 
      • <b>Implemented a QA testing area</b> and best development practices, resulting in <b>20% reduction in bugs and 5% improvement in product quality</b>.\n
      • <b>Led technical execution of 18</b> mobile (Kotlin and Swift UI) and web (Angular an AngularJS) application <b>projects, improving timely delivery 10%</b>.\n
      • Managed cloud services infrastructure (AWS), <b>leading a WAPP to implement better practices</b> and improving the security of the company’s account, resulting in <b>18% increase in WAF test</b>.\n
      `
    },
    {
      id: 1,
      date: {
        initial: "04/2021",
        final: "11/2021",
        total: "7 months",
      },
      company: "Proximate Apps",
      role: "Development Team Leader",
      tags: ["AWS", "Node.js", "MySQL", "Angular", "TypeScript", "JavaScript", "Jira", "Kotlin"],
      functions: `• Designed, developed and implemented high-quality software applications using technologies such as <b>Kotlin, Angular and Node.js</b>, resulting in <b>7% increase in system reliability</b>.\n
      • Led technical execution of 8 mobile and web application projects some of them with more than <b>100k and 1M downloads</b>, contributing from in front-end and backend processes, <b>ensuring timely delivery and client satisfaction</b>.\n
      • Collaborated with cross-functional teams to identify and <b>prioritize development initiatives</b>, ensuring timely and efficient delivery of projects.\n
      • <b>Mentored and trained more than 10 junior developers</b>, improving team members' technical and soft skills.\n
      `
    },
    {
      id: 2,
      date: {
        initial: "07/2020",
        final: "04/2021",
        total: "9 months",
      },
      company: "Proximate Apps",
      role: "Software Development",
      tags: ["MySQL", "Angular", "TypeScript", "JavaScript", "Kotlin"],
      functions: `• Developed and maintained software applications using different languages such as <b>TypeScript, JavaScript and MySQL</b>, resulting in <b>8% increase in user satisfaction.</b>\n
      • Led the development team for 3 features of the mobile application of the Rosario University in Java, contributing to the development and <b>ensuring timely delivery by 80%</b>.\n
      • Developed and implemented the Android mobile application in Kotlin for Super Wow SAS, resulting in <b>17% reduction in bugs</b>.\n
      • Developed features for the Android mobile <b>application of Efecty, financial sector app with more than 1M downloads</b>.\n  
      • Conducted analysis and evaluation of customer requirements, <b>ensuring deliverables met client expectations</b>.\n
`
    },
    {
      id: 3,
      date: {
        initial: "11/2017",
        final: "07/2020",
        total: "2 years 8 months",
      },
      company: "Central Cervecera de Colombia",
      role: "Administrative Assistant",
      tags: ["Java", "Project Management", "MySQL", "Power BI", "Excel", "SAP"],
      functions: `• <b>Developed a geolocation dashboard</b> in Power BI that facilitated the planning of corporate route services and <b>generated savings of COP 360.000.000</b>.\n
      • Developed and implemented the budget control dashboard for all lines of operation in the area, identifying opportunities for improvement and cost reduction, resulting in a <b>10% reduction in expenses</b>.\n
      • Led the IT support team, implementing best practices and <b>reducing ANS and equipment replacement costs by 20%</b>.\n
      • <b>Supervised the disposal process of more than 150 tons of waste</b> during the construction phase of the brewery plant in Sesquilé, ensuring compliance with environmental regulations.\n
      `
    },
    {
      id: 4,
      date: {
        initial: "01/2017",
        final: "10/2017",
        total: "9 months",
      },
      company: "Sonda",
      role: "On-Site Support Analyst",
      tags: ["Java", "MySQL", "Power BI", "Excel", "SAP"],
      functions: `• <b>Developed a Java desktop application</b> that allowed the companies within Central Cervecera de Colombia to track their technological assets, resulting in a <b>more efficient and effective asset management process</b>.\n
      • <b>Created a financial reporting system</b> that allowed the IT department to track and report on their expenses, providing the management team with greater visibility and transparency into the department's operations.\n
      `

    },
    {
      id: 5,
      date: {
        initial: "03/2015",
        final: "01/2017",
        total: "1 year 10 months",
      },
      company: "HTS & High Tech Solutions",
      role: "Support Engineer",
      tags: ["Java", "ITIL", "Customer Service"],
      functions: `<b>Updated the technological equipment inventory</b> of the plant, more than 1000 devices, ensuring accurate tracking and monitoring of company assets.\n
      • <b>Updated the software of 40% of the plant's computer equipment</b>, improving the performance and security of devices.\n
      `
    }
  ];

  lines = Array(this.employments.length + 1);

  slideDirection = "right";
  isNextDate = false;
  state = 'active'
  onClickDate(id: number) {
    this.state = this.state === "active" ? "inactive" : "active";
    console.log(this.state);

    // flag != flag;
    // if (this.slideDirection == "right") {
    //   this.slideDirection = "left"
    // } else {
    //   this.slideDirection = "right"
    // }
    // this.isNextDate = id > this.currentEmployment;
    // this.currentEmployment = id;
    // perform other actions as needed
  }

  tagColors = [{ color: "rgba(251,192,3,1)", transparentColor: "rgba(251,192,3,0.2)" },
  { color: "rgba(123,220,141,1)", transparentColor: "rgba(123,220,141,0.2)" },
  { color: "rgba(245,14,2,1)", transparentColor: "rgba(245,14,2,0.2)" },
  { color: "rgba(112,48,160,1)", transparentColor: "rgba(112,48,160,0.2)" },
  { color: "rgba(52,176,240,1)", transparentColor: "rgba(52,176,240,0.2)" },
  { color: "rgba(220,77,220,1)", transparentColor: "rgba(220,77,220,0.2)" },
  { color: "rgba(85,212,216,1)", transparentColor: "rgba(85,212,216,0.2)" }]

  getColorTag(index: number):string {
    let tagColorIndex = 0;
    tagColorIndex= index;

    return this.tagColors[tagColorIndex].color;
  }

  getTransparentColorTag(index: number):string {
    let tagColorIndex = 0;
    tagColorIndex= index;

    return this.tagColors[tagColorIndex].transparentColor;
  }

  getBorderTag(index: number):string {
    let tagColorIndex = 0;
    tagColorIndex= index;
    return `${this.tagColors[tagColorIndex].color} 2px solid`
  }


  lookup: Lookup = {
    'false:a>b': 0,
    'true:a>b': 1,
    'false:a<b': 2,
    'true:a<b': 3
  };
  currentIndex = 0;
  goToPoint(id: number) {
    // const key = `${this.test}:${id > this.currentEmployment ? 'a>b' : 'a<b'}`;
    // const movementId = this.lookup[key];
    // this.test = movementId <= 1;
    // console.log(movementId);
    // this.state = this.state === "active" ? "inactive" : "active";
    // console.log(this.state);

    if (this.currentEmployment != id) {
      if (this.currentEmployment > id) {
        this.currentIndex = -1;

      } else {
        this.currentIndex = 1;
      }

      this.currentEmployment = id;
    }

    console.log(this.currentIndex);

  }

  prev() {
    this.currentIndex = this.currentIndex === 0 ? this.employments.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex = this.currentIndex === this.employments.length - 1 ? 0 : this.currentIndex + 1;
  }

  // minDate = this.employments.reduce((min: Date, item) => item.date < min ? item.date : min, this.employments[0].date);
  // maxDate = this.employments.reduce((max: Date, item) => item.date > max ? item.date : max, this.employments[0].date);



  getFractionsTimeLine(length: number): string[] {

    return [`0.5fr repeat(${length <= 0 ? 0 : length}, 1fr) 0.5fr `, `0.25fr repeat(${length <= 0 ? 0 : length + 1}, 1fr) 0.25fr`]
  }

  getFractionsTags(length: number): string {
    return `repeat(${length <= 0 ? 0 : length}, min-content)`
  }

  gridTemplateColumnsPoints = this.getFractionsTimeLine(this.employments.length)[0];
  gridTemplateColumnsLines = this.getFractionsTimeLine(this.employments.length)[1];
  gridTemplateColumnsTags = this.getFractionsTags(this.employments[this.currentEmployment].tags.length)


  constructor() {
    // console.log(this.getDiffInMs(this.minDate, this.maxDate));

    console.log(this.getDiffInMs(new Date("2020-01-01"), new Date("2010-01-01")));

    // console.log("Min Date:", this.minDate);
    // console.log("Max Date:", this.maxDate);

  }

  ngOnInit() {
  }


  //TODO: Esto debo pasarlo para utils
  getDiffInMs(dateOne: Date, dateTwo: Date): number {

    return dateOne > dateTwo ? Math.abs(dateOne.getTime() - dateTwo.getTime()) : Math.abs(dateTwo.getTime() - dateOne.getTime());
  }

}

