import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContentCourseStdComponent } from './card-content-course-std.component';

describe('CardContentCourseStdComponent', () => {
  let component: CardContentCourseStdComponent;
  let fixture: ComponentFixture<CardContentCourseStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardContentCourseStdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardContentCourseStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
