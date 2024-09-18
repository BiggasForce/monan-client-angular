import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

const AUTH_API = 'http://localhost:8080/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(login: string, senha: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        login,
        senha
      },
      httpOptions
    );
}

  register(email: string, senha: string, nome: string, dataNascimento: Date): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      {
        email,
        senha,
        nome,
        dataNascimento
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout', { }, httpOptions);
  }
}