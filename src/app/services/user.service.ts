import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/monan/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getHome(): Observable<any> {
    return this.http.get(API_URL + 'home', { responseType: 'text' });
  }

  //
  // Criar metodos para acessar os end-points da API
}