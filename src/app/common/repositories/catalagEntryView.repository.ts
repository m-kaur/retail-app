import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { CatalogEntryViewResponse, CatalogEntryViewEntity } from '../model/CatalogEntryViewResponse';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogEntryViewRepository {

  constructor(private http: HttpClient) { }

  getCatalogEntryViews(): Observable<CatalogEntryViewEntity[]> {
    return this.http.get<CatalogEntryViewResponse>(`${environment.productApiUrl}`)
      .pipe(
        map( response => response.CatalogEntryView )
      );
  }

  getCatalogEntryView(itemId: String): Observable<CatalogEntryViewEntity | undefined> {
    return this.getCatalogEntryViews()
      .pipe(
        map( catalogEntryViews => catalogEntryViews.find(view => view.itemId === itemId) )
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
