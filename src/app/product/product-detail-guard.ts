import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate( currentRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {

    const itemId = currentRoute.url[1].path;
    if ( /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(itemId) ) {
      alert('Invalid product Id');
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
