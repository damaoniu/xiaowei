import {
    Component, ViewChild, ElementRef, OnDestroy, Input
} from "@angular/core";
import {UserService} from "../../../../shared/services/user/user.service";
import {AuthenticationService} from "../../../../shared/services/authentication.service";
declare var jQuery:any;
let $j = jQuery.noConflict();
@Component({
    selector: "login-pop",
    templateUrl: "./login.html"
})
export class LoginComponent implements OnDestroy {
    @ViewChild('modal') modal:ElementRef;
    @Input() modalOnly:boolean;
    section:string = 'LOGIN';
    test = true;
    fetching:boolean = false;
    err:string;

    constructor(private userService:UserService, private authService:AuthenticationService) {
    }

    open() {
        $j(this.modal.nativeElement).appendTo('body');
        $j(this.modal.nativeElement).modal('show');
    }

    login(e, form) {
        e.preventDefault();
        this.fetching = true;
        this.err = null;
        this.authService.login(form.value).subscribe(data=> {
            $j('.modal').modal('hide');
            this.fetching = false;
        }, err=> {
            err=JSON.parse(err);
            this.fetching = false;
            this.err = err;

        });
    }

    createAccount(e, form) {
        e.preventDefault();
        this.fetching = true;
        this.err = null;
        this.userService.register(form)
            .subscribe(data=> {
                    this.fetching = false
                },
                err => {
                    this.fetching = false
                    this.err = err.message

                }
            );
    }

    forgotPass(e, form) {
        e.preventDefault();
        this.fetching = true;
        this.err = null;
        this.userService.forgotPass(form.value)
            .subscribe(data=> {
                this.fetching = false;

            }, err=> {
                this.fetching = false;
            });
    }

    loginWithWeichat() {

    }

    loginWithWeibo() {

    }

    ngOnDestroy():void {
        $j(this.modal.nativeElement).remove();
    }
}

