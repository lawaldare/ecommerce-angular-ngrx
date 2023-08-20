import { createAction, props } from '@ngrx/store';
import { Product } from '../services/product.service';

const GET_PRODUCT_LIST = '[Product List] Get product list';
const GET_PRODUCT_LIST_SUCCESS = `${GET_PRODUCT_LIST} success`;
const GET_PRODUCT_LIST_FAIL = `${GET_PRODUCT_LIST} fail`;

const GET_SINGLE_PRODUCT = '[Product List] Get single product';
const GET_SINGLE_PRODUCT_SUCCESS = `${GET_SINGLE_PRODUCT} success`;
const GET_SINGLE_PRODUCT_FAIL = `${GET_SINGLE_PRODUCT} fail`;

const ADD_PRODUCT_TO_CART = '[Product List] Add product to cart';

const REMOVE_PRODUCT_FROM_CART = '[Cart] Remove product from cart';

const REMOVE_SELECTED_PRODUCT = '[Cart] Remove selected product';

const REMOVE_CART_ITEMS = '[Receipt] Remove cart items';

const INCREASE_NUMBER_OF_ITEMS_IN_CART =
  '[Product List] Increase number of items in cart';
const DECREASE_NUMBER_OF_ITEMS_IN_CART =
  '[Product List] Decrease number of items in cart';

const RESET_NUMBER_OF_ITEMS_IN_CART = '[Receipt] Reset number of items in cart';

export const ProductListEffect = {
  GET_PRODUCT_LIST,
  GET_SINGLE_PRODUCT,
};

export const ProductListAction = {
  getProductList: createAction(GET_PRODUCT_LIST),
  getProductListSuccess: createAction(
    GET_PRODUCT_LIST_SUCCESS,
    props<{ params: { products: Product[] } }>()
  ),
  getProductListFail: createAction(GET_PRODUCT_LIST_FAIL),

  getSingleProduct: createAction(
    GET_SINGLE_PRODUCT,
    props<{ params: { productId: number } }>()
  ),
  getSingleProductSuccess: createAction(
    GET_SINGLE_PRODUCT_SUCCESS,
    props<{ params: { product: Product } }>()
  ),
  getSingleProductFail: createAction(GET_SINGLE_PRODUCT_FAIL),

  addProductToCart: createAction(
    ADD_PRODUCT_TO_CART,
    props<{ params: { product: Product } }>()
  ),

  removeProductFromCart: createAction(
    REMOVE_PRODUCT_FROM_CART,
    props<{ params: { product: Product } }>()
  ),

  increaseNumberOfItemsInCart: createAction(INCREASE_NUMBER_OF_ITEMS_IN_CART),
  decreaseNumberOfItemsInCart: createAction(DECREASE_NUMBER_OF_ITEMS_IN_CART),

  resetNumberOfItemsInCart: createAction(RESET_NUMBER_OF_ITEMS_IN_CART),

  removeSelectedProduct: createAction(REMOVE_SELECTED_PRODUCT),

  removeCartItems: createAction(REMOVE_CART_ITEMS),
};
