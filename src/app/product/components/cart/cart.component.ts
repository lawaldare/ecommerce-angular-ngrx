import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardSelectors } from '../../state/product.selectors';
import { Product } from '../../services/product.service';

@Component({
  selector: 'dl-cart',
  templateUrl: './cart.component.html',
  styleUrls: [
    '../product-card/product-card.component.scss',
    './cart.component.scss',
  ],
})
export class CartComponent implements OnInit {
  cartItemProducts$ = this.store.select(DashboardSelectors.cartItemProducts);

  counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private store: Store) {}
  ngOnInit(): void {}

  changeQuantity(quantity: number, product: Product) {}
}
