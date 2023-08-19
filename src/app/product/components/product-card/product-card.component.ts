import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../../services/product.service';
import { Store } from '@ngrx/store';
import { ProductListAction } from '../../state/product.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'dl-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnChanges {
  @Input() product!: Product;

  stock!: string;

  constructor(private store: Store, private router: Router) {}

  ngOnChanges(changes: any): void {
    if (changes.product.currentValue) {
      this.stock = `Stock Left: ${this.product.rating.count ?? 0}`;
    }
  }

  addProductToCart(product: Product) {
    this.store.dispatch(
      ProductListAction.addProductToCart({
        params: { product },
      })
    );
    this.store.dispatch(ProductListAction.increaseNumberOfItemsInCart());
  }

  selectProduct(product: Product) {
    this.router.navigate(['/product', product.id]);
  }
}
