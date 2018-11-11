import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupInStoreBtnComponent } from './pickup-in-store-btn/pickup-in-store-btn.component';
import { AddToCartBtnComponent } from './add-to-cart-btn/add-to-cart-btn.component';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  imports: [
    CommonModule,
    NgxGalleryModule
  ],
  declarations: [
    PickupInStoreBtnComponent,
    AddToCartBtnComponent,
    RatingStarComponent,
    ImageGalleryComponent
  ],
  exports: [
    PickupInStoreBtnComponent,
    AddToCartBtnComponent,
    RatingStarComponent,
    ImageGalleryComponent
  ]
})
export class SharedModule { }
