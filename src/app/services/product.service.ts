import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Ruta al archivo JSON en el mock
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);  // Devuelve un observable con un array de productos
  }

  // Método para agregar un producto (en una API real, sería una solicitud POST)
  addProduct(product: Product): Observable<Product> {
    return new Observable((observer) => {
      observer.next(product);  // Simula agregar el producto
      observer.complete();
    });
  }
}
