import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from './model/product.model';
import { ProductService } from './product.service';

@Component({
  //selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  errorMessage = '';
  product: Product = new Product();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      // const id = +param;
      this.getProduct(param);
    }
  }

  getProduct(itemId: string) {
    this.productService.getProduct(itemId).subscribe(
      product => {
        console.log(product);
        this.product = product;
      },
      error => this.errorMessage = <any>error);
  }

}