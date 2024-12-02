  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';

  export interface Product {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    imageUrl: string;
  }

  @Injectable({
    providedIn: 'root'
  })
  export class ProductService {

    // Actualiza la ruta al archivo JSON en 'public/mock-api/products.json'
    private apiUrl = '/mock-api/products.json';


    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiUrl);  // Realiza la petición HTTP con HttpClient
    }

    addProduct(product: Product): Observable<Product> {
      return new Observable((observer) => {
        observer.next(product);
        observer.complete();
      });
    }
  }
