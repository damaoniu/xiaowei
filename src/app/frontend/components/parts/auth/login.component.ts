import {
    Component, Directive, HostListener, trigger, state, style, transition,
    animate, OnInit, ViewChild, ElementRef, OnDestroy, Input
} from "@angular/core";
import {NgbModal, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
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

@Component({
    selector: 'login-modal',
    template: `
        <div [@loaded]="loaded" class="modal-header" style="display: none">
                <button type="button" class="close" (click)="activeModal.close()" aria-hidden="true"><span class="icon icon-clear"></span></button>
                <h4 class="modal-title text-center text-uppercase">Login form</h4>
        </div>
        <form [@loaded]="loaded" style="display: none">
                <div class="modal-body indent-bot-none">
                    <div class="form-group">
                        <div class="input-group">
						    <span class="input-group-addon">
						    	<span class="icon icon-person"></span>
						    </span>
                            <input type="text" id="LoginFormName" class="form-control" placeholder="Name:">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon">@</span>
                            <input type="password" id="LoginFormPass" class="form-control" placeholder="Password:">
                        </div>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="checkBox2">
                        <label for="checkBox2">
                            <span class="check"></span>
                            <span class="box"></span>
                            Remember me
                        </label>
                    </div>
                    <button type="button" class="btn btn--ys btn--full btn--lg">Login</button>
                    <div class="divider divider--xs"></div>
                    <button type="button" class="btn btn--ys btn--full btn--lg btn-blue"><span class="fa fa-facebook"></span> Login with Facebook</button>
                    <div class="divider divider--xs"></div>
                    <button type="button" class="btn btn--ys btn--full btn--lg btn-red"><span class="fa fa-google-plus"></span> Login with Google</button>
                    <div class="divider divider--xs"></div>
                    <ul class="list-arrow-right">
                        <li><a href="#">Forgot your username?</a></li>
                        <li><a href="#">Forgot your password?</a></li>
                        <li><a href="#">Create an account</a></li>
                    </ul>
                </div>
            </form>
    `,
    animations: [
        trigger('loaded', [
            state('notYet', style({
                display: 'none'
            })),
            state('yes', style({
                display: 'block'
            })),
            transition('notYet=>yes', animate("1000ms ease-in"))
        ])
    ]

})
export class LoginModal implements OnInit {
    loaded:string = 'notYet';

    constructor(public activeModal:NgbActiveModal) {
    }

    ngOnInit() {
        this.loaded = "yes";
    }
}

@Directive({
    selector: '[login-pop]'
})
export class LoginPopDirective {
    constructor(private modalService:NgbModal) {
    }

    @HostListener('click') onClick() {
        this.open();
    }

    open() {
        const modalRef = this.modalService.open(LoginModal, {windowClass: "white-modal"});
        modalRef.componentInstance.name = 'World';
    }
}
