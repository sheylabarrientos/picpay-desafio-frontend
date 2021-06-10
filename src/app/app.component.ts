import { Component } from '@angular/core';
import {User} from '../models/user';
import {UsersService} from '../services/users.service.ts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Desafio Picpay Front-end';

  users: User[] = [];

  constructor(
    private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  
  
  
  
  getUsers(){
    this.usersService.getUsers().subscribe((users) => {
      console.log(users);
     this.users = users;
    });
  }


}
