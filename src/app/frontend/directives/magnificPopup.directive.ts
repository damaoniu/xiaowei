import {Directive, AfterContentInit, ElementRef} from "@angular/core";
declare var jQuery:any;
let $j=jQuery.noConflict();
@Directive({
    selector:"[magPop]"
})
export class MagnificPopUp implements AfterContentInit{
    constructor(public el:ElementRef){}
    ngAfterContentInit():void {
        $j(this.el.nativeElement).magnificPopup({
            disableOn: 767,
            type: 'iframe',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

}