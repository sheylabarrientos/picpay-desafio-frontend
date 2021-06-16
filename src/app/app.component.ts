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
  closeModalResult = false;
  
  user: User;

  storedTheme: string = localStorage.getItem('theme-color');

  constructor(
    private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }
  
  changeModal(contact?: User, status?: boolean): void{
    if(status){
      this.modal_payment = true;
      this.user = contact;
      this.backdrop = !this.backdrop;
    }else{
      this.modal_payment = false;
    }
  }

  getUsers(){
    this.usersService.getUsers().subscribe((users) => {
     this.users = users;
    });
  }

  sucesso(e){
    this.modal_result = true;
  }

  closeResult(e){
    console.log(e)
    this.closeModalResult = true;
    this.modal_result = false
  }
}
