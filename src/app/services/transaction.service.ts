import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionPayload } from '../models/transaction-payload';
import { TransactionResponse } from '../models/transaction-response';

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
  url = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';
  constructor(private httpClient: HttpClient) { }

  postPayment(transactionPayload: TransactionPayload): Observable<TransactionResponse> {
    return this.httpClient.post<TransactionResponse>(this.url, transactionPayload);
  }
}
