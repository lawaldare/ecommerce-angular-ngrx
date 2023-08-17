import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get(`${this.baseUrl}products`) as Observable<Product[]>;
  }
}
