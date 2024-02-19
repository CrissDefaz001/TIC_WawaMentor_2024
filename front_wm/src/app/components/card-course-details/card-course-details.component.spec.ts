import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCourseDetailsComponent } from './card-course-details.component';

describe('CardCourseDetailsComponent', () => {
  let component: CardCourseDetailsComponent;
  let fixture: ComponentFixture<CardCourseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCourseDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
