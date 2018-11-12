import { Component, OnInit } from '@angular/core';
import { Product } from './model/product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  errorMessage = '';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
      },
      error => this.errorMessage = <any>error
    );
  }

}
