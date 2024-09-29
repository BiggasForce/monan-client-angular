/**
 * Serviço para se comunicar com os end-points da aplicação que necessitam
 * de autenticação
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disciplina } from '../models/Disciplina';
import { Atividade } from '../models/Atividade';
import { environment } from '../../environments/environment';
import { PlanoAula } from '../models/PlanoAula';

const API_URL = environment.apiUrl+"monan/";

@Injectable({
  providedIn: 'root'  
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  //
  // alterar método para recuperar somente disciplinas do usuário
  getDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(API_URL + 'disciplinas/'+window.sessionStorage.getItem('auth-user'));
  }

  getAtividades(): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(API_URL + 'atividades/'+window.sessionStorage.getItem('auth-user'));
  }

  getPlanosAula(): Observable<PlanoAula[]> {
    return this.http.get<PlanoAula[]>(API_URL + 'planos-aula/'+window.sessionStorage.getItem('auth-user'));
  }
}