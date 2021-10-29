import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApplyComponentComponent } from './apply-component.component';

describe('ApplyComponentComponent', () => {
  let component: ApplyComponentComponent;
  let fixture: ComponentFixture<ApplyComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
