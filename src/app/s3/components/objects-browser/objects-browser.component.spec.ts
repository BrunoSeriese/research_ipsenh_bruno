import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsBrowserComponent } from './objects-browser.component';

describe('ObjectsBrowserComponent', () => {
  let component: ObjectsBrowserComponent;
  let fixture: ComponentFixture<ObjectsBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectsBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
