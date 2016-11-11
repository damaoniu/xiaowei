import {Component, ViewEncapsulation, OnInit} from "@angular/core";
import {CartService} from "../../../shared/services/cartService/cart.service";
import {UserService} from "../../../shared/services/user/user.service";
import {OrderService} from "../../../shared/services/orders/order.service";
import {FormGroup, FormBuilder, Validators, AbstractControl} from "@angular/forms";
import {GeoNamesService} from "../../../shared/services/geonames.service";
import {FileUploader} from "ng2-file-upload/ng2-file-upload";
import {FileItem} from "ng2-file-upload/components/file-upload/file-item.class"
import {Config} from "../../../shared/services/config";

function requiredWhenOverSea(cart:CartService,c:AbstractControl){
    if(cart.hasOversea){
        return Validators.required;
    }
}

@Component({
    selector: "checkout",
    templateUrl: "./checkout.html",
    encapsulation: ViewEncapsulation.None
})

export class CheckoutComponent implements OnInit {
    customerInfoForm:FormGroup;
    public uploader:FileUploader = new FileUploader({url:Config.mediaServerUrl});
    countryOptions:Array<string> = [
        '中国', '加拿大'
    ];
    provinceOptions:Array<string> = [
        '四川', '重庆'
    ];
    cityOptions:Array<string> = [
        '四川', '重庆'
    ];
    idCardFront:any;
    idCardFrontUrl:string='';
    idCardFrontItem:FileItem;
    idCardBack:any;
    idCardBackUrl:string='';
    idCardBackItem:FileItem;



    constructor(private cartService:CartService, private userService:UserService,
                private orderService:OrderService, public fb:FormBuilder,
                private geoNameService:GeoNamesService) {
    }
    get user() {
        return this.userService.getUser();
    }

    get cart() {
        return this.cartService.getCart();
    }

    enableAddressEdit() {

    }
    idCardFrontChanged(e){
        let that=this;
        let fr = new FileReader();
            fr.addEventListener("load",function () {
                that.idCardFrontUrl=fr.result;
            })

        fr.readAsDataURL(e);

        // this.idCardFrontItem= new FileItem(this.uploader,e,this.uploader.options)
    }
    idCardBackChanged(e){
        let that=this;
        let fr = new FileReader();
        fr.addEventListener("load",function(){
            that.idCardBackUrl=fr.result
        })
        fr.readAsDataURL(e);
        // this.idCardBackItem= new FileItem(this.uploader,e,this.uploader.options)
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
            });
        this.customerInfoForm = this.fb.group({
            name: ['',Validators.required],
            cellphone: ['',Validators.required],
            homephone: ['',Validators.required],
            idNumber: ['',requiredWhenOverSea],
            address: this.fb.group({
                country: ['中国',Validators.required],
                province: ['北京',Validators.required],
                city: ['海淀',Validators.required],
                streetName: ['',Validators.required],
                buildingName: '',
                streetNumber: '',
                postcode: '',
                roomNumber: ''
            }),
            idCardFront:['',requiredWhenOverSea],
            idCardBack:['',requiredWhenOverSea],
        })
    }

}