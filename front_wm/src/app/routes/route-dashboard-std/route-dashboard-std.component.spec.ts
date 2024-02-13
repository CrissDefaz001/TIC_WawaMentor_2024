import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDashboardStdComponent } from './route-dashboard-std.component';

describe('RouteDashboardStdComponent', () => {
  let component: RouteDashboardStdComponent;
  let fixture: ComponentFixture<RouteDashboardStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteDashboardStdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteDashboardStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
