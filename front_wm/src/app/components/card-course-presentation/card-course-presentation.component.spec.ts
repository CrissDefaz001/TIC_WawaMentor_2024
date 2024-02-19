import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCoursePresentationComponent } from './card-course-presentation.component';

describe('CardCoursePresentationComponent', () => {
  let component: CardCoursePresentationComponent;
  let fixture: ComponentFixture<CardCoursePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCoursePresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCoursePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
