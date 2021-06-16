import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';

import {environment} from '../environments/environment';

import { Observable, throwError  } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

export class UsersService {
  USERS_URL = environment.usersURL;
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getUsers(): Observable<any> {
    return this.http.get(this.USERS_URL, this.httpOptions);
  }

  errorHandle(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
}

}
