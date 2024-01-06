import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageTableRowComponent } from './usage-table-row.component';

describe('UsageTableRowComponent', () => {
  let component: UsageTableRowComponent;
  let fixture: ComponentFixture<UsageTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageTableRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
