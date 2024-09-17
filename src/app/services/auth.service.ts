import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// alterar para url do serviço em producao
const AUTH_API = 'http://localhost:8080/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(login: string, senha: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        login,
        senha,
      },
      httpOptions
    );
  }

  register(email: string, senha: string, nome: string, dataNascimento: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      {
        email,
        senha,
        nome,
        dataNascimento,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout', { }, httpOptions);
  }
}