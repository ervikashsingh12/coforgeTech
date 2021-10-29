import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfirmMortgageComponent } from './confirm-mortgage.component';

describe('ConfirmMortgageComponent', () => {
  let component: ConfirmMortgageComponent;
  let fixture: ComponentFixture<ConfirmMortgageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmMortgageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmMortgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
