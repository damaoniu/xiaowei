import {Component, ViewEncapsulation, OnInit} from "@angular/core";
import {CartService} from "../../../shared/services/cartService/cart.service";
import {UserService} from "../../../shared/services/user/user.service";
import {OrderService} from "../../../shared/services/orders/order.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {GeoNamesService} from "../../../shared/services/geonames.service";
@Component({
    selector: "checkout",
    templateUrl: "./checkout.html",
    encapsulation: ViewEncapsulation.None
})
export class CheckoutComponent implements OnInit {
    customerInfoForm:FormGroup;
    countryOptions:Array<string> = [
        '中国', '加拿大'
    ];
    provinceOptions:Array<string> = [
        '四川', '重庆'
    ];
    cityOptions:Array<string> = [
        '四川', '重庆'
    ];

    constructor(private cartService:CartService, private userService:UserService,
                private orderService:OrderService, public fb:FormBuilder,
                private geoNameService:GeoNamesService) {
        this.customerInfoForm = this.fb.group({
            name: ['',Validators.required],
            cellphone: ['',Validators.required],
            homephone: ['',Validators.required],
            idNumber: '',
            address: this.fb.group({
                country: ['中国',Validators.required],
                province: ['北京',Validators.required],
                city: ['海淀',Validators.required],
                streetName: ['',Validators.required],
                buildingName: '',
                streetNumber: '',
                postcode: '',
                roomNumber: ''
            })
        })
    }

    get user() {
        return this.userService.getUser();
    }

    get cart() {
        return this.cartService.getCart();
    }

    enableAddressEdit() {

    }

    payCart() {
        if (this.customerInfoForm.valid) {
            this.orderService.payCart(this.cart, this.customerInfoForm.getRawValue())
                .subscribe(data=> {
                });
        }
    }

    countrySelected(e) {
        this.provinceOptions = ['aa', 'dd']

    }

    provinceSelected(e) {

    }

    citySelected(e) {

    }

    ngOnInit():void {
        this.geoNameService.getCountries()
            .subscribe(data=> {
                console.log("countrydata" + data)
            })
    }

}