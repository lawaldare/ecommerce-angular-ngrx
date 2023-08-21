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
    const productIndex = cartItems.findIndex((item) => item.id === product.id);
    cartItems.splice(productIndex, 1);
    acc = [...cartItems];
    let count = product.quantity + 1;
    obj = {
      ...product,
      quantity: count,
    };
    acc.splice(productIndex, 0, obj);
  } else {
    acc = [...cartItems];
    obj = {
      ...productAdded,
      quantity: 1,
    };
    acc.push(obj);
  }
  const filterItems = acc.filter((item) => item.quantity > 0);
  return filterItems;
};
const removeProductFromCart = (
  cartItems: Product[],
  productRemoved: Product
): Product[] => {
  let acc: Product[] = [];
  let obj: any = {};
  const productIndex = cartItems.findIndex(
    (item) => item.id === productRemoved.id
  );
  cartItems.splice(productIndex, 1);
  acc = [...cartItems];
  let count = productRemoved.quantity === 0 ? 0 : productRemoved.quantity - 1;
  obj = {
    ...productRemoved,
    quantity: count,
  };
  acc.splice(productIndex, 0, obj);
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
    ProductListAction.getSingleProductSuccess,
    (state: ProductListState, action): ProductListState => ({
      ...state,
      selectedProduct: action.params.product,
    })
  ),

  on(
    ProductListAction.removeSelectedProduct,
    (state: ProductListState, action): ProductListState => ({
      ...state,
      selectedProduct: undefined,
    })
  ),

  on(
    ProductListAction.removeCartItems,
    (state: ProductListState, action): ProductListState => ({
      ...state,
      cartItemProducts: undefined,
    })
  ),
  on(
    ProductListAction.resetNumberOfItemsInCart,
    (state: ProductListState, action): ProductListState => ({
      ...state,
      numberOfItemsInCart: 0,
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
    ProductListAction.removeProductFromCart,
    (state: ProductListState, action): ProductListState => {
      return {
        ...state,
        cartItemProducts: removeProductFromCart(
          [...(state.cartItemProducts ?? [])],
          action.params.product
        ),
      };
    }
  ),

  on(
    ProductListAction.increaseNumberOfItemsInCart,
    (state: ProductListState, action): ProductListState => {
      let updatedNumberOfItemsInCart = state.numberOfItemsInCart + 1;
      return {
        ...state,
        numberOfItemsInCart: updatedNumberOfItemsInCart,
      };
    }
  ),

  on(
    ProductListAction.decreaseNumberOfItemsInCart,
    (state: ProductListState, action): ProductListState => {
      let updatedNumberOfItemsInCart = state.numberOfItemsInCart - 1;
      if (updatedNumberOfItemsInCart < 0) {
        updatedNumberOfItemsInCart = 0;
      }
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
