import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPaymentResultComponent } from './modal-payment-result.component';

describe('ModalPaymentResultComponent', () => {
  let component: ModalPaymentResultComponent;
  let fixture: ComponentFixture<ModalPaymentResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPaymentResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPaymentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
