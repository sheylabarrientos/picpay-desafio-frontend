import { Component, OnInit, ViewChild } from '@angular/core';
import { Images } from './models/placeholder.model';
import { CrudService } from './services/crud.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = new Images();
  erro: any;
  el: any = document.querySelector('.modal_insert_data');
  title = 'Desafio Picpay Front-end';
  constructor(private crudService: CrudService) {
    this.getter();
  }
  ngOnInit() {

  }
  getter() {
    this.crudService.getFotos().subscribe(
      (data: Images) => {
        this.images = data;
        console.log("Data received..", data)
        console.log("The variable", this.images);
      }, (error: any) => {
        this.erro = error;
        console.error("ERROR:", error)
      });
  }
  openModal() {
    let element = document.querySelector('.modal_insert_data');
    element.classList.add('active')
  }
  closeModal() {
    let element = document.querySelector('.modal_insert_data');
    element.classList.remove('active')
  }
}
