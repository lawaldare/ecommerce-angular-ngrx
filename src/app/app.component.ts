import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductListState } from './product/state/product.model';
import { ProductListAction } from './product/state/product.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<ProductListState>) {}
  ngOnInit(): void {
    this.store.dispatch(ProductListAction.getProductList());
  }
}
