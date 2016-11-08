import {
    Component, Input, ViewChild, ElementRef, AfterContentInit, AfterViewInit,
    ViewEncapsulation
} from "@angular/core";
import {Item} from "../../../../shared/services/cartService/item";
import {CartService} from "../../../../shared/services/cartService/cart.service";
declare var jQuery:any;
let $j=jQuery.noConflict();
@Component({
    selector:"addToCart",
    templateUrl:"./addToCart.html",
    encapsulation:ViewEncapsulation.None
})
export class AddToCart implements AfterViewInit{
    @Input('item') item:Item;
    @Input('showQty') showQty:boolean;
    @ViewChild('counter') counter:ElementRef;
    @ViewChild('plusButton') plusButton:ElementRef;
    @ViewChild('minusButton') minusButton:ElementRef;
    qty:number=0;
    constructor(public _cartService:CartService){
    }
    addToCart(quantity=1){
        this._cartService.addItem(this.item,quantity);
    }
    ngAfterViewInit():void {
        if(this.showQty){
            if ($j(this.counter.nativeElement).length > 0) {
                $j(this.minusButton.nativeElement).click(function () {
                    var $jinput = $j(this).parent().find('input');
                    var count = parseInt($jinput.val()) - 1;
                    count = count < 1 ? 1 : count;
                    $jinput.val(count);
                    $jinput.change();
                    return false;
                });
                $j(this.plusButton.nativeElement).click(function () {
                    var $jinput = $j(this).parent().find('input');
                    $jinput.val(parseInt($jinput.val()) + 1);
                    $jinput.change();
                    return false;
                });
            }
        }
    }
}