import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { ZoroModule } from '../zoro.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  PRODUCTLIST_STATE_KEY,
  productListReducer,
} from './state/product.reducer';
import { ProductListEffects } from './state/product.effects';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    CartComponent,
    SingleProductComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    ZoroModule,
    FormsModule,
    StoreModule.forFeature(PRODUCTLIST_STATE_KEY, productListReducer),
    EffectsModule.forFeature([ProductListEffects]),
  ],
})
export class ProductModule {}
