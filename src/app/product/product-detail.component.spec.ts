import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { timer, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Product } from './model/product.model';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let productService: ProductService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      providers: [ProductService,
        {provide: HttpClient, useValue: {}}
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    productService = TestBed.get(ProductService);
    activatedRoute = TestBed.get(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a product`, async(() => {
    // const fakeProduct : Product = {
    //   itemId: 'string',
    //   title: 'string',
    //   images: [],
    //   features: [],
    //   offerPrice: 'string',
    //   purchasingChannelCode: 'string',
    //   promotions: [],
    //   customerReview: [],
    //   proReview: {},
    //   conReview: {},
    //   totalReviewCount: ''
    // };
    const fakeProduct : Product = new Product();
    fakeProduct.title = 'Product Title 1';
    
    spyOn(activatedRoute.snapshot.paramMap, 'get').and.returnValue('1840');
    spyOn(productService, 'getProduct').and.returnValue(timer(100).pipe(mapTo(fakeProduct)));
    // const productServiceSpy = spyOn(productService, 'getProduct').and.callFake( param => timer(100).pipe(mapTo(fakeProduct)) );
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.product.title).toEqual(fakeProduct.title);
      fixture.detectChanges();
      const compiled = fixture.debugElement;
      expect(compiled.queryAll(By.css('.title'))[0].nativeElement.textContent).toEqual(fakeProduct.title);
    });
  }) );

  
  it(`should increment/decrement the quantity`, () => {
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
  });

});
