import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { CONSTANTS } from 'src/app/utils/constans.util';

@Component({
  selector: 'app-floating-bar',
  templateUrl: './floating-bar.component.html',
  styleUrls: ['./floating-bar.component.css']
})
export class FloatingBarComponent implements OnInit {
  sectionIds = ['about', 'employment', 'projects'];
  currentSection: string | null = null;

  constructor(
    private viewportScroller: ViewportScroller,
    private scrollDispatcher: ScrollDispatcher,
    private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.scrollDispatcher.scrolled().subscribe(() => {
      this.updateCurrentSection();
    });
    this.updateCurrentSection();
  }

  scrollToSection(sectionId: string) {
    const element = document.querySelector('#' + sectionId);
    if (element) {
      this.viewportScroller.scrollToAnchor(sectionId);
    }
  }

  updateCurrentSection() {
    const position = this.viewportScroller.getScrollPosition();
    const sections = this.sectionIds.map((id) => document.getElementById(id));

    const currentSectionIndex = sections.findIndex((section) => {
      return this.getSectionIndex(position, section!);
    });

    this.currentSection = currentSectionIndex >= 0 ? this.sectionIds[currentSectionIndex] : null;
    this.changeDetector.detectChanges();
  }

  getSectionIndex(position: [number, number], section: HTMLElement) {
    const sectionTop = (section as HTMLElement).offsetTop;
    const sectionHeight = (section as HTMLElement).offsetHeight;
    return position[1] + 250 >= sectionTop && position[1] + 250 <= sectionTop + sectionHeight;
  }
}
