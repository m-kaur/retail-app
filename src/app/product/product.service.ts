import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {environment} from "../../environments/environment";
import { catchError, tap, map } from 'rxjs/operators';

import { Product } from './model/product.model';
import { CatalogEntryViewRepository } from '../common/repositories/catalagEntryView.repository';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //private productUrl = 'api/products/products.json';

  constructor(private catalogEntryViewService: CatalogEntryViewRepository) { }

  getProducts(): Observable<Product[]> {
    return this.catalogEntryViewService.getCatalogEntryViews()
      .pipe(
        map( catalogEntryViews => catalogEntryViews.map( viewEntity => new Product(viewEntity) ) )
      );
  }

  getProduct(itemId : String): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products: Product[]) => products.find(p => p.itemId === itemId))
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
