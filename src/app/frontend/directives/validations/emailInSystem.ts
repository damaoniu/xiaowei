import {Directive, forwardRef} from "@angular/core";
import {NG_VALIDATORS, FormControl} from "@angular/forms";
import {Http} from "@angular/http";
import {UserService} from "../../../shared/services/user/user.service";

function validateEmailFactory(userService:UserService) {
    return (c: FormControl) => {
        return new Promise( resolve => {
            userService.getUserByEmail(c.value)
                .subscribe(email => {
                    if (email == null) {
                        // need to return something if not ok
                        resolve(null);
                    } else {
                        // need to return null if ok

                        resolve({userExists: true});
                    }
                });
        });

    };
}
@Directive({
    selector:"[emailInSystem]",
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(()=>EmailInSystem), multi: true }
    ]
})
export class EmailInSystem{

    validator: Function;

    constructor(userService:UserService ) {
        this.validator = validateEmailFactory(userService);
    }

    validate(c: FormControl) {
        return this.validator(c);
    }
}