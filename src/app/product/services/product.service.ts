import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ProductListAction } from '../state/product.actions';
import { Store } from '@ngrx/store';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';

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

  constructor(
    private http: HttpClient,
    private store: Store,
    public afAuth: AngularFireAuth
  ) {}

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

  signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    console.log(provider);
    // provider.addScope('profile');
    // provider.addScope('email');
    // const auth = getAuth();
    return this.authLoginWithProvider(provider).then((result) => {
      console.log(result);
    });
  }

  private authLoginWithProvider(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
