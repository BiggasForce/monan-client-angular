/**
 * Serviço responsável por salvar a sessão do usuário após fazer login
 */

import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  //
  // platformId: utilizado para verificar se o codigo é executado no navegador
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  //
  // limpar a sessão do usuário
  clean(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.sessionStorage.clear();
    }
  }

  //
  // salvar a sessão do usuário
  public saveUser(user: any): void {
    if (isPlatformBrowser(this.platformId)) {
      window.sessionStorage.removeItem(USER_KEY);
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  }

  //
  // recuperar usuário logado
  public getUser(): any {
    if (isPlatformBrowser(this.platformId)) {
      const user = window.sessionStorage.getItem(USER_KEY);
      if (user) {
        return JSON.parse(user);
      }
    }
    return {};
  }

  //
  // retorna se o usuário já está logado
  public isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const user = window.sessionStorage.getItem(USER_KEY);
      if (user != null) {
        return true;
      }
    }
    return false;
  }
}