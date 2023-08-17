import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardSelectors } from '../../state/product.selectors';
import { tap } from 'rxjs';

@Component({
  selector: 'dl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  itemsCount: number | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(DashboardSelectors.numberOfItemsInCart)
      .subscribe((numberOfItems) => {
        this.itemsCount = numberOfItems;
      });
  }
}
