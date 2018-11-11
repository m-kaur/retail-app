import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from './model/product.model';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  errorMessage = '';
  product: Product = new Product();
  quantity: number = 1;
  public fiveStars: Array<number> = Array(5).fill(0).map((x,i)=>i);

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.getProduct(param);
    }
  }

  /**
   * Method to make service call to get product 
   * @param itemId 
   */
  getProduct(itemId: string) {
    this.productService.getProduct(itemId).subscribe(
      product => {
        this.product = product;
      },
      error => this.errorMessage = <any>error);
  }

  /**
   * Method to increase product quantity
   */
  incQuantity() {
    this.quantity++;
  }

  /**
   * Method to decrease product quantity
   */
  decQuantity() {
    this.quantity--;
  }

}