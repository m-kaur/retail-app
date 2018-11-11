import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import { Product } from '../../product/model/product.model';
import { AddToCartBtnComponent } from './add-to-cart-btn.component';

describe('PickupInStoreBtnComponent', () => {
    let component: AddToCartBtnComponent;
    let fixture: ComponentFixture<AddToCartBtnComponent>;
    let button: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule( {
            declarations: [ AddToCartBtnComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddToCartBtnComponent);
        component = fixture.componentInstance;
        button = fixture.debugElement.query(By.css('button'));
    });

    it('hide button as default', () => {
        expect(component.showBtn).toBeFalsy();
    });

    it('show add to cart button if purchasing channel code is 0 or 1', () => {
        const product: Product = new Product();
        component.product = product;

        product.purchasingChannelCode = '0';
        component.ngOnChanges();
        expect(component.showBtn).toBeTruthy();

        product.purchasingChannelCode = '1';
        component.ngOnChanges();
        expect(component.showBtn).toBeTruthy();

        product.purchasingChannelCode = '2';
        component.ngOnChanges();
        expect(component.showBtn).toBeFalsy();
    });

});
