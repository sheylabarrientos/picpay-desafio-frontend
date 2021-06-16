import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {User} from '../../../models/user';

@Component({
  selector: 'app-modal-payment-result',
  templateUrl: './modal-payment-result.component.html',
  styleUrls: ['./modal-payment-result.component.scss']
})
export class ModalPaymentResultComponent implements OnInit {

constructor() { }

@Input() openModalResult = false;
@Input() user: User;

@Output() closeModalResult: EventEmitter<any> = new EventEmitter();

ngOnInit() {}

clickout(event) {
  this.closeModalResult.emit(true);
}
}
