import { Component, OnInit, ViewEncapsulation, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import {Card} from '../../../models/card';
import {User} from '../../../models/user';

@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
  styleUrls: ['./modal-payment.component.scss']
})
export class ModalPaymentComponent implements OnInit {
  constructor(private el: ElementRef, private formBuilder: FormBuilder) { }

  @Input() openModal: boolean = false;
  @Input() user: User;
  theme = localStorage.getItem('theme-color');

  cardForm: FormGroup;
  
  cards: Card[] = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
      flag: "master"
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
      flag: "visa"
    },
  ]

  showLastNumbers(){
    this.cards.map((data) => {
      return data.card_number.slice(data.card_number.length - 5);
    });
  }

  ngOnInit() {
    this.cardForm = this.formBuilder.group({
      value: ['', [Validators.required, Validators.min(1)]],
      card: ['', [Validators.required]]
    })
  }

  

}
