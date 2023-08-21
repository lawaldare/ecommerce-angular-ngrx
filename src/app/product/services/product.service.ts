import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListAction } from '../state/product.actions';
import { Store } from '@ngrx/store';

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

  constructor(private http: HttpClient, private store: Store) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get(`${this.baseUrl}products`) as Observable<Product[]>;
  }
  getSingleProduct(productId: number): Observable<Product> {
    return this.http.get(`${this.baseUrl}products/${productId}`) as Observable<
      Product
    >;
  }

  updateQuatity(type: string, product: Product) {
    if (type === 'add') {
      this.store.dispatch(
        ProductListAction.addProductToCart({
          params: { product },
        })
      );
      this.store.dispatch(ProductListAction.increaseNumberOfItemsInCart());
    } else {
      console.log(product.quantity);
      if (product.quantity > 0) {
        this.store.dispatch(
          ProductListAction.removeProductFromCart({
            params: { product },
          })
        );
        this.store.dispatch(ProductListAction.decreaseNumberOfItemsInCart());
      } else {
        console.log('Do nothng');
      }
    }
  }
}
