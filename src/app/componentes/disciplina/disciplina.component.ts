import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-disciplina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disciplina.component.html',
  styleUrl: './disciplina.component.css'
})
export class DisciplinaComponent {

  isExpanded = false;

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
    console.log(this.isExpanded); // Verifique se o valor está mudando
  }
  
}
