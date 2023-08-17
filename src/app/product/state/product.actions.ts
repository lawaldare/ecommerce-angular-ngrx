import { createAction, props } from '@ngrx/store';
import { Product } from '../services/product.service';

const GET_PRODUCT_LIST = '[Product List] Get product list';
const GET_PRODUCT_LIST_SUCCESS = `${GET_PRODUCT_LIST} success`;
const GET_PRODUCT_LIST_FAIL = `${GET_PRODUCT_LIST} fail`;

const ADD_PRODUCT_TO_CART = '[Product List] Add product to cart';

const INCREASE_NUMBER_OF_ITEMS_IN_CART =
  '[Product List] Increase number of items in cart';
const DECREASE_NUMBER_OF_ITEMS_IN_CART =
  '[Product List] Decrease number of items in cart';

export const ProductListEffect = {
  GET_PRODUCT_LIST,
};

export const ProductListAction = {
  getProductList: createAction(GET_PRODUCT_LIST),
  getProductListSuccess: createAction(
    GET_PRODUCT_LIST_SUCCESS,
    props<{ params: { products: Product[] } }>()
  ),
  getProductListFail: createAction(GET_PRODUCT_LIST_FAIL),

  addProductToCart: createAction(
    ADD_PRODUCT_TO_CART,
    props<{ params: { product: Product } }>()
  ),

  increaseNumberOfItemsInCart: createAction(INCREASE_NUMBER_OF_ITEMS_IN_CART),
  decreaseNumberOfItemsInCart: createAction(DECREASE_NUMBER_OF_ITEMS_IN_CART),
};
