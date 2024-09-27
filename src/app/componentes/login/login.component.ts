import { Component, signal, Signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  login = ""
  senha = "";
  showLogin = false;
  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, 
              private storageService: StorageService, 
              private router: Router,
              @Inject(PLATFORM_ID) private platformId: Object) { }

  toggleLogin() {
    this.showLogin = !this.showLogin;
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;

      this.router.navigate(['/monan']);
    }
  }

  public logar(): void {
    this.authService.login(this.login, this.senha).subscribe({
      next: data => {
        this.storageService.saveUser(data.token);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;

        // exibe mensagem de falha
        if (isPlatformBrowser(this.platformId)) {
          alert("Não foi possível fazer login")
        }
      }
    });
  }

  reloadPage(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.location.reload();
    }
  }
}