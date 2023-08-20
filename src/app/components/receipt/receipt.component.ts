import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DashboardSelectors } from 'src/app/product/state/product.selectors';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'dl-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent {
  cartItemProducts$ = this.store.select(DashboardSelectors.cartItemProducts);
  @ViewChild('htmlData') htmlData!: ElementRef;

  constructor(private store: Store, private router: Router) {}
  ngOnInit(): void {}

  download() {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('receipt.pdf');
    });
  }
}
