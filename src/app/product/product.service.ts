import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {environment} from '../../environments/environment';
import { map, tap } from 'rxjs/operators';

import { Product } from './model/product.model';
import { CatalogEntryViewResponse } from '../common/model/CatalogEntryViewResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<CatalogEntryViewResponse>(`${environment.productApiUrl}`)
      .pipe(
        // tap( response => console.log("response: " + JSON.stringify(response)) ),
        map( response => response.CatalogEntryView ),
        map( catalogEntryViews => catalogEntryViews.map( viewEntity => new Product(viewEntity) ) )
      );
  }

  public getProduct(itemId: string): Observable<Product | undefined> {
    console.log("Get product for: " + itemId)
    return this.getProducts().pipe(
      map((products: Product[]) => products.find(p => p.itemId === itemId))
    );
  }

  public justGetProduct(): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products: Product[]) => products[0])
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
