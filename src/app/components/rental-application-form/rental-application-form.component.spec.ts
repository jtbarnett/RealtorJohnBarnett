import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalApplicationFormComponent } from './rental-application-form.component';

describe('RentalApplicationFormComponent', () => {
  let component: RentalApplicationFormComponent;
  let fixture: ComponentFixture<RentalApplicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalApplicationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
