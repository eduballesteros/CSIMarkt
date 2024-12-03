import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderDashboardComponent } from '../header-dashboard/header-dashboard.component';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../product/product.component';
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

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  /**
   * Cargar los productos desde la API.
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
   * Filtrar productos según la categoría seleccionada.
   * @param category Categoría seleccionada.
   */
  onCategorySelected(category: string): void {
    if (category === '') {
      this.filteredProducts = this.products; // Mostrar todos los productos si no hay filtro
    } else {
      this.filteredProducts = this.products.filter((product) => product.category === category);
    }
  }
}
