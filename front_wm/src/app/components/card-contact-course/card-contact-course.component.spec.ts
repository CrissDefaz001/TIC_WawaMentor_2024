import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContactCourseComponent } from './card-contact-course.component';

describe('CardContactCourseComponent', () => {
  let component: CardContactCourseComponent;
  let fixture: ComponentFixture<CardContactCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardContactCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardContactCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
