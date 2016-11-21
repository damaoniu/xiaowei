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
    section:string='LOGIN';
    test=true;
    constructor(private userService:UserService, private authService:AuthenticationService){}

    open() {

        $j(this.modal.nativeElement).appendTo('body');
        $j(this.modal.nativeElement).modal('show');
        console.log('oo');
    }
    login(e,form){
        e.preventDefault();
        this.authService.login(form.value).subscribe(data=>{

        });
    }
    createAccount(e,form){
        e.preventDefault();
        this.userService.register(form)
            .subscribe(data=>{

            });
    }
    forgotPass(e,form){
        e.preventDefault();
        this.userService.forgotPass(form.value)
            .subscribe(data=>{

            });
    }
    loginWithWeichat(){

    }
    loginWithWeibo(){

    }
    ngOnDestroy():void {
        $j(this.modal.nativeElement).remove();
    }
}

