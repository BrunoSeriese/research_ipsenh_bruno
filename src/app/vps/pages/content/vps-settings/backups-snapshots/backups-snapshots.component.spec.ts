import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupsSnapshotsComponent } from './backups-snapshots.component';

describe('BackupsSnapshotsComponent', () => {
  let component: BackupsSnapshotsComponent;
  let fixture: ComponentFixture<BackupsSnapshotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackupsSnapshotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupsSnapshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
