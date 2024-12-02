import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';  // Asegúrate de que el servicio esté bien importado
import { ProductComponent } from '../product/product.component';
import { HeaderComponent } from "../header/header.component";  // Asegúrate de que ProductComponent esté correctamente importado

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent] // No necesitamos HttpClientModule aquí
  // No necesitamos HttpClientModule aquí
})
export class LandingPageComponent implements OnInit {
  products: Product[] = [];  // Especificamos el tipo de datos como Product[]

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Llamamos al servicio para obtener los productos al cargar el componente
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;  // Asignamos los productos obtenidos al array
      },
      (error) => {
        console.error('Error al cargar los productos', error);
      }
    );
  }
}
