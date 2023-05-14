import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultidimensionalCarouselComponent } from './multidimensional-carousel.component';

describe('MultidimensionalCarouselComponent', () => {
  let component: MultidimensionalCarouselComponent;
  let fixture: ComponentFixture<MultidimensionalCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultidimensionalCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultidimensionalCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
