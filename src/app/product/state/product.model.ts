import { Product } from '../services/product.service';

export interface ProductListState {
  products?: Product[];
  selectedProduct?: Product;
  cartItemProducts?: Product[];
  numberOfItemsInCart: number;
}
