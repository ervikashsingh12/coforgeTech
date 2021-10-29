import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OtherOccupantsComponent } from './other-occupants.component';

describe('OtherOccupantsComponent', () => {
  let component: OtherOccupantsComponent;
  let fixture: ComponentFixture<OtherOccupantsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherOccupantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherOccupantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
