import { Component, OnInit } from '@angular/core';
import { Card } from './models/card';
import { User } from './models/user';
import { TransactionService } from './services/transaction.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Desafio Picpay Front-end';
  userSelected: User;
  users: User[];
  value: number;
  cards: Card[] = [
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];
  cardSelected: Card = this.cards[0];
  success: boolean;

  constructor(private userService: UserService, private transationService: TransactionService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  selectUser(user: User) {
    this.userSelected = user;
  }

  setValue(event: any) {
    this.value = Number(event.target.value);
  }

  actionMethod(event: any) {
    if (event.target.value === true) {
      this.value = this.value;
    }
  }

  setCard(event: any) {
    const cardNumber = event.target.value;

    for (const card of this.cards) {
      if (card.card_number === cardNumber) {
        this.cardSelected = card;
      }
    }
  }

  postPayment() {
    return this.transationService.postPayment({
      card_number: this.cardSelected.card_number,
      cvv: this.cardSelected.cvv,
      expiry_date: this.cardSelected.expiry_date,
      destination_user_id: this.userSelected.id,
      value: this.value
    }).subscribe((response) => {
      this.success = response.success;
    });
  }

  goBack() {
    this.userSelected = null;
    this.value = undefined;
    this.success = undefined;
  }
}
