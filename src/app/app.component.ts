import { Component, OnInit, ViewChild } from '@angular/core';
import {User} from '../models/user';
import {UsersService} from '../services/users.service.ts';

import {ModalPaymentComponent} from '../app/components/modal-payment/modal-payment.component';
import {ModalPaymentResultComponent} from '../app/components/modal-payment-result/modal-payment-result.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
title = 'Desafio Picpay Front-end';
users: User[] = [];

backdrop = false;
modalPayment = false;
modalResult = false;
closeModalResult = false;

user: User;

storedTheme: string = localStorage.getItem('theme-color');

constructor(
  private usersService: UsersService) {
}

ngOnInit(): void {
  this.getUsers();
}

changeModal(contact?: User, status?: boolean): void {
  if (status) {
    this.modalPayment = true;
    this.user = contact;
    this.backdrop = !this.backdrop;
  } else {
    this.modalPayment = false;
  }
}

getUsers() {
  this.usersService.getUsers().subscribe((users) => {
    this.users = users;
  });
}

sucesso(e) {
  this.modalResult = true;
}

closeResult(e) {
  this.closeModalResult = true;
  this.modalResult = false;
}
}
