import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  imports: [ CommonModule]
})
export class ProductItemComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');  // Obtén el ID del producto desde la URL

    if (productId) {
      // Llama al servicio para obtener el producto con ese ID
      this.productService.getProductById(productId).subscribe((data) => {
        this.product = data;  // Asigna el producto recibido a la propiedad
      });
    }
  }
}
