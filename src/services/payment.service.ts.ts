import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';

import {environment} from '../environments/environment';

import { Observable, throwError  } from 'rxjs';
import {retry, catchError} from 'rxjs/operators';

import { TransactionPayload } from 'src/models/transaction';


@Injectable({
    providedIn: 'root'
  })

export class UsersService { 
  TRANSACTION_URL = environment.transactionsURL;
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public transaction(data): Observable<TransactionPayload> {
    return this.http.post<TransactionPayload>(this.TRANSACTION_URL, JSON.stringify(data), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

  // Manipulação de erros
    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        } else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

}
