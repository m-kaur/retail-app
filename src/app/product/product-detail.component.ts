import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from './model/product.model';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public errorMessage = '';
  public product: Product;
  public quantity = 1;
  public fiveStars: Array<number> = Array(5);

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {
  }

  ngOnInit() {
    const itemId = this.route.snapshot.paramMap.get('id');
    if (itemId) {
      this.getProduct(itemId);
    }
  }

  /**
   * Method to make service call to get product
   * @param itemId - item Id passed from url
   */
  public getProduct(itemId: string): void {
    this.productService.getProduct(itemId).subscribe(
      product => {
        this.product = product;
      },
      error => this.errorMessage = <any>error
    );
  }

  /**
   * Method to increase product quantity
   */
  public incQuantity(): void {
    this.quantity++;
  }

  /**
   * Method to decrease product quantity
   */
  public decQuantity(): void {
    this.quantity--;
  }

}
