import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Images } from './models/placeholder.model';
import { CrudService } from './services/crud.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = new Images();
  erro: any;
  // Card Info
  card_number: string;
  cvv: number;
  expiry_date: string;
  // Destination User ID
  destination_user_id: number;
  // Value of the Transaction
  value: any;
  title = 'Desafio Picpay Front-end';


  constructor(private crudService: CrudService, private http: HttpClient) {

    this.getter();
  }
  ngOnInit(): void {
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

  sendValue() {
    this.http.post('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', FormData)
      .subscribe(resposta =>
         console.log('Upload ok.')
         )
  }
}
