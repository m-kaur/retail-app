import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {PickupInStoreBtnComponent} from "./pickup-in-store-btn.component";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import { Product } from '../../product/model/product.model';

describe('PickupInStoreBtnComponent', () => {
    let component: PickupInStoreBtnComponent;
    let fixture: ComponentFixture<PickupInStoreBtnComponent>;
    let button: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule( {
            declarations: [ PickupInStoreBtnComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PickupInStoreBtnComponent);
        component = fixture.componentInstance;
        button = fixture.debugElement.query(By.css('button'));
    });

    it('hide button as default', () => {
        expect(component.showBtn).toBeFalsy();
    });

    it('show Pickup in store button if purchasing channel code is 0 or 2', () => {
        let product: Product = new Product();
        component.product = product;

        product.purchasingChannelCode = '0';
        component.ngOnChanges();
        expect(component.showBtn).toBeTruthy();

        product.purchasingChannelCode = '1';
        component.ngOnChanges();
        expect(component.showBtn).toBeFalsy();

        product.purchasingChannelCode = '6';
        component.ngOnChanges();
        expect(component.showBtn).toBeFalsy();

        product.purchasingChannelCode = '2';
        component.ngOnChanges();
        expect(component.showBtn).toBeTruthy();
    });

});
