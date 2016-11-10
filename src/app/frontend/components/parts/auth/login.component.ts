import {
    Component, ViewChild, ElementRef, OnDestroy, Input
} from "@angular/core";
declare var jQuery:any;
let $j = jQuery.noConflict();
@Component({
    selector: "login-pop",
    templateUrl: "./login.html"
})
export class LoginComponent implements OnDestroy {
    @ViewChild('modal') modal:ElementRef;
    @Input() modalOnly:boolean;

    constructor() {}

    open() {

        $j(this.modal.nativeElement).appendTo('body');
        $j(this.modal.nativeElement).modal('show');
        console.log('oo');
    }

    ngOnDestroy():void {
        $j(this.modal.nativeElement).remove();
    }
}

