import { ProductListAction } from './../../state/product.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardSelectors } from '../../state/product.selectors';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'dl-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: [
    '../product-card/product-card.component.scss',
    './single-product.component.scss',
  ],
})
export class SingleProductComponent implements OnInit, OnDestroy {
  product$ = this.store.select(DashboardSelectors.selectedProduct);
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('productId');
      if (productId) {
        this.store.dispatch(
          ProductListAction.getSingleProduct({
            params: { productId: +productId },
          })
        );
      }
    });
  }

  addProductToCart(product: Product) {
    this.store.dispatch(
      ProductListAction.addProductToCart({
        params: { product },
      })
    );
    this.store.dispatch(ProductListAction.increaseNumberOfItemsInCart());
  }

  ngOnDestroy(): void {
    this.store.dispatch(ProductListAction.removeSelectedProduct());
  }
}
