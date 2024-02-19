import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteActivityComponent } from './route-activity.component';

describe('RouteActivityComponent', () => {
  let component: RouteActivityComponent;
  let fixture: ComponentFixture<RouteActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
