import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './model/product.model';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let activatedRoute: ActivatedRoute;
  const data: any = require('../../assets/item-data.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      providers: [ProductService],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.get(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a product`,
    inject([HttpTestingController, ProductService], (httpMock: HttpTestingController, productService: ProductService) => {
      const testProduct: Product = new Product();
      testProduct.title = 'Ninja™ Professional Blender with Single Serve Blending Cups';

      spyOn(activatedRoute.snapshot.paramMap, 'get').and.returnValue('1840');
      component.ngOnInit();

      const req = httpMock.expectOne('assets/item-data.json');
      expect(req.request.method).toEqual('GET');
      // setting fake data to be returned by the mock
      req.flush(data);

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.product.title).toEqual(testProduct.title);
        fixture.detectChanges();
        const compiled = fixture.debugElement;
        expect(compiled.queryAll(By.css('.title'))[0].nativeElement.textContent).toEqual(testProduct.title);
      });
    })
  );

  it(`should increment/decrement the quantity`,
    inject([HttpTestingController, ProductService], (httpMock: HttpTestingController, productService: ProductService) => {
      const testProduct: Product = new Product();
      testProduct.title = 'Ninja™ Professional Blender with Single Serve Blending Cups';

      spyOn(activatedRoute.snapshot.paramMap, 'get').and.returnValue('1840');
      component.ngOnInit();

      const req = httpMock.expectOne('assets/item-data.json');
      expect(req.request.method).toEqual('GET');
      req.flush(data);

      component.incQuantity();
      component.incQuantity();
      expect(component.quantity).toEqual(3);
      component.decQuantity();
      expect(component.quantity).toEqual(2);
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement;
        expect(compiled.queryAll(By.css('.quantity-number'))[0].nativeElement.querySelector('span').textContent).toEqual('2');
      });
    })
  );

});
