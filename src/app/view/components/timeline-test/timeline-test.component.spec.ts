import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineTestComponent } from './timeline-test.component';

describe('TimelineComponent', () => {
  let component: TimelineTestComponent;
  let fixture: ComponentFixture<TimelineTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
