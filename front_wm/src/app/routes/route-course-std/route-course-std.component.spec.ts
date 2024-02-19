import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCourseStdComponent } from './route-course-std.component';

describe('RouteCourseStdComponent', () => {
  let component: RouteCourseStdComponent;
  let fixture: ComponentFixture<RouteCourseStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteCourseStdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteCourseStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
