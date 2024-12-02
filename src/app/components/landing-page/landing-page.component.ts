import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service'; // Servicio para obtener los productos
import { Product } from '../../models/product.model'; // Modelo del producto
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

  // Función para cargar productos usando el servicio
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
