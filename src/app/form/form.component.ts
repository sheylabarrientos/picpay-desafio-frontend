import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  //Form Control
  useProfileForm = new FormGroup({
    card_number: new FormControl('card_number'),
    cvv: new FormControl('cvv'),
    expiry_date: new FormControl('expiry_date'),
    destination_user_id: new FormControl('destination_user_id'),
    value: new FormControl('value')
  });
  constructor() { }

  ngOnInit() {
  }

}
