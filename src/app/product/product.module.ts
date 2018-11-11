import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'products/:id',
        // canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
    ]),
    SharedModule
  ],
  declarations: [
    ProductDetailComponent
  ]
})
export class ProductModule { }
