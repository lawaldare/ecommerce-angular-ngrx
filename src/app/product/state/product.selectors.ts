import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductListState } from './product.model';
import { PRODUCTLIST_STATE_KEY } from './product.reducer';

const productListState = createFeatureSelector<ProductListState>(
  PRODUCTLIST_STATE_KEY
);

export const DashboardSelectors = {
  state: productListState,
  products: createSelector(productListState, (state) => state.products),
  cartItemProducts: createSelector(
    productListState,
    (state) => state.cartItemProducts
  ),
  numberOfItemsInCart: createSelector(
    productListState,
    (state) => state.numberOfItemsInCart
  ),
};
