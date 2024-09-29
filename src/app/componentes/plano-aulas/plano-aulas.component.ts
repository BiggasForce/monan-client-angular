import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PlanoAula } from '../../models/PlanoAula';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-plano-aulas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plano-aulas.component.html',
  styleUrl: './plano-aulas.component.css'
})
export class PlanoAulasComponent {
  usuarioAtual: any;
  public listaPlanosAula: PlanoAula[] = [];

  constructor(private storageService: StorageService, 
              private router: Router,
              private authService: AuthService,
              private userService: UserService,
              @Inject(PLATFORM_ID) private platformId: Object
            ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.usuarioAtual = this.storageService.getUser();

      this.buscarPlanosAula();
    }
    else{
      this.router.navigate(['']);
      if (isPlatformBrowser(this.platformId)) {
        alert('Faça login para continuar!');
      }
    }
  }

  public buscarPlanosAula()
  {
    this.userService.getPlanosAula().subscribe({
      next: dados => {
        this.listaPlanosAula = dados;
      },
      error: err => {
        // tratar erros        
        console.log("Erro ao buscar planos de aula: "+err.error.mensagem);
      
      }
    });
  }

  //
  // Método para fazer Logout no sistema
  public logout(): void {
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

  public goToTelaPrincipal(){
    this.router.navigate(['monan']);
  }
}

