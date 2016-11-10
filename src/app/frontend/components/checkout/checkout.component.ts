import {Component, ViewEncapsulation, OnInit} from "@angular/core";
import {CartService} from "../../../shared/services/cartService/cart.service";
import {Cart} from "../parts/cart/cart.component";
import {UserService} from "../../../shared/services/user/user.service";
import {OrderService} from "../../../shared/services/orders/order.service";
import {FormGroup, FormBuilder} from "@angular/forms";
@Component({
    selector:"checkout",
    templateUrl:"./checkout.html",
    encapsulation:ViewEncapsulation.None
})
export class CheckoutComponent implements OnInit{
    customerInfoForm:FormGroup;
    countryOptions:Array<string>=[
        '中国','加拿大'
    ];
    provinceOptions:Array<string>=[
        '四川','重庆'
    ];

    constructor(private cartService:CartService,private userService:UserService,private orderService:OrderService,public fb:FormBuilder){
       this.customerInfoForm= this.fb.group({
            name:'',
            phoneNumber:'',
            backupPhoneNumber:'',
            id:'',
            address:this.fb.group({
                country:'',
                province:'',
                city:'',
                streetName:'',
                buildingName:'',
                streetNumber:'',
                postcode:'',
                roomNumber:''
            }),
           thisAddress:true

        })
    }
    get user(){
        return this.userService.getUser();
    }
    get cart(){
      return this.cartService.getCart();
    }
    enableAddressEdit(){

    }
    payCart(){
        this.orderService.payCart(this.cart)
            .subscribe(data=>{});
    }
    ngOnInit():void {
    }

}