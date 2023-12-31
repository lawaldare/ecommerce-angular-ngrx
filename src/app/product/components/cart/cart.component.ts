import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardSelectors } from '../../state/product.selectors';
import { Product, ProductService } from '../../services/product.service';
import { tap } from 'rxjs';
import { ProductListAction } from '../../state/product.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'dl-cart',
  templateUrl: './cart.component.html',
  styleUrls: [
    '../product-card/product-card.component.scss',
    './cart.component.scss',
  ],
})
export class CartComponent implements OnInit {
  cartItemProducts$ = this.store
    .select(DashboardSelectors.cartItemProducts)
    .pipe(
      tap((cartItems) => {
        this.totalAmount = cartItems?.reduce((totalAmount, item) => {
          const itemTotal = item.quantity * item.price;
          totalAmount = totalAmount + itemTotal;
          return totalAmount;
        }, 0);
      })
    );

  numberOfCartItems$ = this.store.select(
    DashboardSelectors.numberOfItemsInCart
  );

  totalAmount: number | undefined;

  counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private store: Store,
    public productService: ProductService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  proceed() {
    this.router.navigate(['/receipt']);
  }
}
