import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importar FormsModule para ngModel

@Component({
  selector: 'app-header-dashboard',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    CommonModule,  // Asegúrate de importar CommonModule para usar ngFor
    FormsModule   // Asegúrate de importar FormsModule para ngModel
  ],
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.css']
})
export class HeaderDashboardComponent {
  categories = ['Móvil', 'Tablet', 'Portátil'];  // Definir las categorías
  selectedCategory: string = '';  // La categoría seleccionada por defecto

  filterProducts() {
    console.log('Categoría seleccionada:', this.selectedCategory);
    // Lógica para filtrar los productos según la categoría seleccionada
  }
}
