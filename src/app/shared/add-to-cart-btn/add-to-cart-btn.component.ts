import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from '../../product/model/product.model';

@Component({
  selector: 'app-add-to-cart-btn',
  templateUrl: './add-to-cart-btn.component.html',
  styleUrls: ['./add-to-cart-btn.component.scss']
})
export class AddToCartBtnComponent implements OnChanges {

  @Input()
  public product: Product;
  
  public showBtn: boolean = false;
  
  constructor() { }

  ngOnChanges() {
      this.showBtn = this.product.purchasingChannelCode === '0' || this.product.purchasingChannelCode === '1';
  }

  public onBtnClicked() {
      console.log('Add to cart: ', this.product);
  }

}