import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ProductComponent } from '../product/product.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent]
})
export class LandingPageComponent implements OnInit {
  products: Product[] = []; // Almacena los productos cargados

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts(); // Llamamos a la función para cargar productos
  }

 /**
   * Método que recibe la lista de los productos desde la API. Una vez recibidos se guardan en la variable data.
   * @param data Lista de productos obtenida de la API.
   */
  private loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error('Error al cargar los productos:', error);
      },
    });
  }
}
