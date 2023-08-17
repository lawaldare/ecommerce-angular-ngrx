import { Action, createReducer, on } from '@ngrx/store';
import { ProductListState } from './product.model';
import { ProductListAction } from './product.actions';
import { Product } from '../services/product.service';

export const PRODUCTLIST_STATE_KEY = 'product';

const updateCartItemProducts = (
  cartItems: Product[],
  productAdded: Product
): Product[] => {
  const product = cartItems.find((pro) => pro.id === productAdded.id);
  let acc: Product[] = [];
  let obj: any = {};
  if (product) {
    acc = cartItems.filter((pro) => pro.id !== productAdded.id);
    let count = product.quantity + 1;
    obj = {
      ...product,
      quantity: count,
    };
  } else {
    acc = [...cartItems];
    obj = {
      ...productAdded,
      quantity: 1,
    };
  }
  acc.push(obj);
  return acc;
};
const initialState: ProductListState = {
  numberOfItemsInCart: 0,
};

const reducer = createReducer(
  initialState,

  on(
    ProductListAction.getProductListSuccess,
    (state: ProductListState, action): ProductListState => ({
      ...state,
      products: action.params.products,
    })
  ),

  on(
    ProductListAction.addProductToCart,
    (state: ProductListState, action): ProductListState => {
      return {
        ...state,
        cartItemProducts: updateCartItemProducts(
          [...(state.cartItemProducts ?? [])],
          action.params.product
        ),
      };
    }
  ),

  on(
    ProductListAction.increaseNumberOfItemsInCart,
    (state: ProductListState, action): ProductListState => {
      const updatedNumberOfItemsInCart = state.numberOfItemsInCart + 1;
      return {
        ...state,
        numberOfItemsInCart: updatedNumberOfItemsInCart,
      };
    }
  ),

  on(
    ProductListAction.decreaseNumberOfItemsInCart,
    (state: ProductListState, action): ProductListState => {
      const updatedNumberOfItemsInCart = state.numberOfItemsInCart - 1;
      return {
        ...state,
        numberOfItemsInCart: updatedNumberOfItemsInCart,
      };
    }
  )
);

export function productListReducer(state: ProductListState, action: Action) {
  return reducer(state, action);
}
