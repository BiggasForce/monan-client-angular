import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-tela-principal',
  standalone: true,
  imports: [],
  templateUrl: './tela-principal.component.html',
  styleUrl: './tela-principal.component.css'
})
export class TelaPrincipalComponent implements OnInit{
  usuarioAtual: any;

  constructor(private storageService: StorageService, 
              private authService: AuthService,
              private router: Router,
              @Inject(PLATFORM_ID) private platformId: Object
            ) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.usuarioAtual = this.storageService.getUser();
    }
    else{
      this.router.navigate(['']);
      if (isPlatformBrowser(this.platformId)) {
        alert('Faça login para continuar!');
      }
    }
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: data => {
        this.storageService.clean();
        if (isPlatformBrowser(this.platformId)) {
          window.location.reload();
        }
      },
      error: err => {
        // exibe mensagem de falha
        if (isPlatformBrowser(this.platformId)) {
          alert("Erro ao fazer Logout!")
        }
      }
    });
  }
}
