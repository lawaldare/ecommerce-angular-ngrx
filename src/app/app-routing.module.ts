import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { SingleProductComponent } from './product/components/single-product/single-product.component';
import { CartComponent } from './product/components/cart/cart.component';
import { ReceiptComponent } from './components/receipt/receipt.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:productId', component: SingleProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'receipt', component: ReceiptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
