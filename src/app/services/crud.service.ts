import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
  public getFotos():Observable<any> {
    return this.http.get(`https://www.mocky.io/v2/5d531c4f2e0000620081ddce`);
  }
}
