/**
 * Serviço para se comunicar com os end-points da aplicação que necessitam
 * de autenticação
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disciplina } from '../models/Disciplina';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl+"monan/";


@Injectable({
  providedIn: 'root'  
})
export class UserService {
  constructor(private http: HttpClient) {}

  //
  // alterar método para recuperar somente disciplinas do usuário
  getDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(API_URL + 'disciplinas');
  }

}