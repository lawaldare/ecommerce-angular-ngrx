import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../services/product.service';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { ProductListAction, ProductListEffect } from './product.actions';

@Injectable()
export class ProductListEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private store: Store<any>
  ) {}

  getProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductListEffect.GET_PRODUCT_LIST),
      mergeMap(() =>
        this.productService.getAllProducts().pipe(
          map((response) =>
            ProductListAction.getProductListSuccess({
              params: { products: response },
            })
          ),
          catchError(() => of(ProductListAction.getProductListFail()))
        )
      )
    )
  );

  getSingleProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductListEffect.GET_SINGLE_PRODUCT),
      switchMap((action: any) =>
        this.productService.getSingleProduct(action.params.productId).pipe(
          map((response) =>
            ProductListAction.getSingleProductSuccess({
              params: { product: response },
            })
          ),
          catchError(() => of(ProductListAction.getSingleProductFail()))
        )
      )
    )
  );
}
