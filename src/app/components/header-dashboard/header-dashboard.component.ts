import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-dashboard',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.css']
})
export class HeaderDashboardComponent {
  @Output() categorySelected = new EventEmitter<string>(); // Para emitir la categoría seleccionada al padre
  categories = ['Móviles', 'Tablets', 'Portátiles', 'Ordenadores', 'Accesorios'];
  selectedCategory: string = '';

  /**
   * Método para emitir la categoría seleccionada.
   */
  onCategoryChange(): void {
    this.categorySelected.emit(this.selectedCategory); // Emitir la categoría al componente padre
  }
}
