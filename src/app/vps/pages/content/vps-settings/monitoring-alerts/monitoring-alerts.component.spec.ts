import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringAlertsComponent } from './monitoring-alerts.component';

describe('MonitoringAlertsComponent', () => {
  let component: MonitoringAlertsComponent;
  let fixture: ComponentFixture<MonitoringAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoringAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
