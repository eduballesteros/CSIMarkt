import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderDashboardComponent } from '../header-dashboard/header-dashboard.component';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../product-login/product-login.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, HeaderDashboardComponent, ProductComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title: string = "CSIMarkt - Dashboard";
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: string = '';

  constructor(private productService: ProductService) {}

  // Llamada al método loadProducts para cargar los productos de la API nada más inicializar el componente
  ngOnInit(): void {
    this.loadProducts();
  }

  /**
   * Método que recibe la lista de los productos desde la API. Una vez recibidos se guardan en la variable data.
   * @param data Lista de productos obtenida de la API.
   */
  private loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.filteredProducts = data;
      },
      error: (error: any) => console.error('Error al cargar los productos:', error),
    });
  }

  /**
   * Método que filtra por la categoría seleccionada.
   * @param category Categoría seleccionada.
   */
  onCategorySelected(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  /**
   * Método que filtra por un buscador, teniendo ya en cuenta el filtro aplicado anteriormente.
   * @param searchText Texto a buscar en los productos.
   */

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const searchText = inputElement.value.toLowerCase();
    this.applyFilters(searchText);
  }

  /**
   * Método que aplica el filtro por nombre y por cátegoria.
   * @param searchText Texto a buscar en los productos.
   */
  private applyFilters(searchText: string = ''): void {
    this.filteredProducts = this.products.filter(product => {
      const matchesName = product.name.toLowerCase().includes(searchText);
      const matchesCategory = this.selectedCategory ? product.category === this.selectedCategory : true;
      return matchesName && matchesCategory;
    });
  }
}

