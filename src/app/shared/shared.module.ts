import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupInStoreBtnComponent } from './pickup-in-store-btn/pickup-in-store-btn.component';
import { AddToCartBtnComponent } from './add-to-cart-btn/add-to-cart-btn.component';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgxGalleryModule,
    RouterModule.forChild([
      { path: 'error', component: ErrorPageComponent }
    ])
  ],
  declarations: [
    PickupInStoreBtnComponent,
    AddToCartBtnComponent,
    RatingStarComponent,
    ImageGalleryComponent,
    ErrorPageComponent
  ],
  exports: [
    PickupInStoreBtnComponent,
    AddToCartBtnComponent,
    RatingStarComponent,
    ImageGalleryComponent
  ]
})
export class SharedModule { }

