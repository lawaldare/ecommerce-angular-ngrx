import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoroModule } from './zoro.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './product/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductModule } from './product/product.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReceiptComponent } from './components/receipt/receipt.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ReceiptComponent],
  imports: [
    ProductModule,
    BrowserModule,
    AppRoutingModule,
    ZoroModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: "Dare Lawal's store",
      maxAge: 100,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
