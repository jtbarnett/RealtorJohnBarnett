import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalApplicationComponent } from './rental-application.component';

describe('RentalApplicationComponent', () => {
  let component: RentalApplicationComponent;
  let fixture: ComponentFixture<RentalApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
