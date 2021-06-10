import { Component, OnInit, ViewChild } from '@angular/core';
import {User} from '../models/user';
import {UsersService} from '../services/users.service.ts'

import {ModalPaymentComponent} from '../app/components/modal-payment/modal-payment.component';
import {ModalPaymentResultComponent} from '../app/components/modal-payment-result/modal-payment-result.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  title = 'Desafio Picpay Front-end';
  users: User[] = [];

  //modals variables:
  backdrop: boolean = false;
  modal_payment = false;
  modal_result = false;

  user: User;

  storedTheme: string = localStorage.getItem('theme-color');

  constructor(
    private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }
  
  
  changeModalPayment(contact: User): void{
    this.user = contact;
    console.log(this.user)
    this.modal_payment = !this.modal_payment;
    this.backdrop = !this.backdrop;
  }

  changeModalResult(contact){
    this.modal_result = !this.modal_result;
    this.backdrop = !this.backdrop;
  }

  closeAll(){
    this.modal_payment = false;
    this.modal_result = false;
    this.backdrop = false;
  }


  changeTheme(){
    const theme = localStorage.getItem('theme-color');
    theme !== "black-theme" ? localStorage.setItem('theme-color', 'black-theme') : localStorage.setItem('theme-color', '')
    this.storedTheme = localStorage.getItem('theme-color');
  }


  getUsers(){
    this.usersService.getUsers().subscribe((users) => {
     this.users = users;
    });
  }


}
