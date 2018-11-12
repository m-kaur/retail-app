import { Component, Input, OnChanges } from '@angular/core';
import { Product } from '../../product/model/product.model';

@Component({
  selector: 'app-pickup-in-store-btn',
  templateUrl: './pickup-in-store-btn.component.html',
  styleUrls: ['./pickup-in-store-btn.component.scss']
})
export class PickupInStoreBtnComponent implements OnChanges {

    @Input()
    product: Product = new Product();

    public showBtn = false;

    constructor() { }

    ngOnChanges() {
        this.showBtn = this.product.purchasingChannelCode === '0' || this.product.purchasingChannelCode === '2';
    }

    public onBtnClicked() {
        console.log('Pick up in store: ', this.product);
    }

}
