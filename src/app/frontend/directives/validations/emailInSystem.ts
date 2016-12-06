import {Directive, forwardRef} from "@angular/core";
import {AbstractControl, NG_ASYNC_VALIDATORS} from "@angular/forms";
import {UserService} from "../../../shared/services/user/user.service";
import {validate} from 'email-validator'

function validateEmailFactory(userService:UserService) {
    return (c:AbstractControl) => {
        return new Promise(resolve => {
            if (validate(c.value)) {
                userService.getUserByEmail(c.value)
                    .subscribe(email => {
                        //if the email exists then it is not ok
                        resolve(null);
                    }, (err)=> {
                        resolve({userExists: "no"});
                    });
            }
        });

    };
}
@Directive({
    selector: "[emailInSystem]",
    providers: [
        {provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(()=>EmailInSystem), multi: true}
    ]
})
export class EmailInSystem {

    validator:Function;

    constructor(userService:UserService) {
        this.validator = validateEmailFactory(userService);
    }

    validate(c:AbstractControl) {
        return this.validator(c);
    }
}