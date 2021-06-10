import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalPaymentComponent } from './components/modal-payment/modal-payment.component';
import { ModalPaymentResultComponent } from './components/modal-payment-result/modal-payment-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalPaymentComponent,
    ModalPaymentResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
