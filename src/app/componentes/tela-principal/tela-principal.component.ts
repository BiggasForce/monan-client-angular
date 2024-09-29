import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Disciplina } from '../../models/Disciplina';
import { Atividade } from '../../models/Atividade';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-principal.component.html',
  styleUrl: './tela-principal.component.css'
})
export class TelaPrincipalComponent implements OnInit{
  usuarioAtual: any;
  public listaDisciplinas: Disciplina[] = [];
  public listaAtividades: Atividade[] = [];

  constructor(private storageService: StorageService, 
              private authService: AuthService,
              private router: Router,
              private userService: UserService,
              @Inject(PLATFORM_ID) private platformId: Object
            ) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.usuarioAtual = this.storageService.getUser();

      this.buscarDisciplinas();
      this.buscarAtividades();
    }
    else{
      this.router.navigate(['']);
      if (isPlatformBrowser(this.platformId)) {
        alert('Faça login para continuar!');
      }
    }
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

  //
  //
  public buscarDisciplinas(){
    this.userService.getDisciplinas().subscribe({
      next: dados => {
        this.listaDisciplinas = dados;
      },
      error: err => {
        // tratar erros        
        console.log("Erro ao buscar disciplinas: "+err.error.mensagem);
      
      }
    });
  }

  public buscarAtividades(){
    this.userService.getAtividades().subscribe({
      next: dados => {
        this.listaAtividades = dados;
      },
      error: err => {
        // tratar erros        
        console.log("Erro ao buscar atividades: "+err.error.mensagem);
      
      }
    });
  }

  public goToPlanosAula(){
    this.router.navigate(['monan/planos-aula']);
  }
}
