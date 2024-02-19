import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTeacherProfileComponent } from './route-teacher-profile.component';

describe('RouteTeacherProfileComponent', () => {
  let component: RouteTeacherProfileComponent;
  let fixture: ComponentFixture<RouteTeacherProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteTeacherProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteTeacherProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
