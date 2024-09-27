/**
 * Serviço responsável pelos métodos de autenticação da página de login
 */

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from '../../environments/environment';

const AUTH_API = environment.apiUrl+"auth/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  //
  // envia requisição POST de login
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

  //
  // envia requisição POST para registrar novo usuário
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

  // TODO - Implementar metodo de Logout no back-end
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout', { }, httpOptions);
  }
}