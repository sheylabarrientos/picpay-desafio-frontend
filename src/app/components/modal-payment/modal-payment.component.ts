import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import {Card} from '../../../models/card';
import {User} from '../../../models/user';

import {PaymentService} from '../../../services/payment.service.ts';

@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
  styleUrls: ['./modal-payment.component.scss']
})
export class ModalPaymentComponent implements OnInit {
constructor(
  private el: ElementRef,
  private formBuilder: FormBuilder,
  private payservice: PaymentService) { }

@Input() openModal = false;
@Input() user: User;

@Output() closeModal: EventEmitter<any> = new EventEmitter();
@Output() res: EventEmitter<any> = new EventEmitter();
@Output() Modal: EventEmitter<boolean> = new EventEmitter<boolean>();

loading = false;
cardForm: FormGroup;
cardSelectedObj: Card;

cards: Card[] = [
  // valid card
  {
    card_number: '1111111111111111',
    cvv: 789,
    expiry_date: '01/18',
    flag: 'master'
  },
  // invalid card
  {
    card_number: '4111111111111234',
    cvv: 123,
    expiry_date: '01/20',
    flag: 'visa'
  },
];

ngOnInit() {
  this.initForm();
  this.cardSelectedObj = this.cards[0];
}

cardSelected(event) {
  const card = event.target.value;
  this.cardForm.patchValue({ '{card}': card});
  this.cardSelectedObj = this.cards.find((element) => {
    return element.card_number === card;
  });
}

initForm() {
  this.cardForm = this.formBuilder.group({
    value: ['', [Validators.required, Validators.minLength(0.1), Validators.maxLength(5000)]],
    card: [this.cards[0].card_number, [Validators.required]]
  });
}

submitValues() {
    this.loading = true;
    if (!this.cardForm.valid) {
      return false;
    } else {
      const obj = {card: this.cardForm.controls.card.value, value: this.cardForm.controls.value.value};
      this.payservice.transaction(obj).subscribe((data) => {
          if (data.success) {
            this.loading = false;
            this.initForm();
            this.res.emit(true);
            this.closeModal.emit(true);
          } else {
            this.res.emit(false);
          }
      });
    }
}

clickout(e) {
  this.initForm();
  this.closeModal.emit(true);
}
}
