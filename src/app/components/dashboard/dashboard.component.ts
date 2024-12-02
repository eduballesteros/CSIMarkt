import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderDashboardComponent } from '../header-dashboard/header-dashboard.component';
import { ProductService , Product} from '../../services/product.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, HeaderDashboardComponent, ProductComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title="CSIMarkt -Dashboard"

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
