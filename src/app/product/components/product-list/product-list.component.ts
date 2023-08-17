import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardSelectors } from '../../state/product.selectors';

@Component({
  selector: 'dl-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products$ = this.store.select(DashboardSelectors.products);
  constructor(private store: Store) {}
}
