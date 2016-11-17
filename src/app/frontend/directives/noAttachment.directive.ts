import { forwardRef, Directive } from '@angular/core';
import {NG_VALIDATORS, Validator,AbstractControl} from "@angular/forms";
export const NO_ATTACHMENT_VALIDATOR = {provide:NG_VALIDATORS,
    useExisting: forwardRef(() => NoAttachmentValidator ),
    multi: true
}

@Directive({
    selector: '[noAttachmentValidator],[noAttachmentValidator][ngControl],[noAttachmentValidator][ngFormControl],[noAttachmentValidator][ngModel]',
    providers: [NO_ATTACHMENT_VALIDATOR]
})

export class NoAttachmentValidator implements Validator{
    public validate(control: AbstractControl) :{[key: string]: any} {
        let state=false,
            value = control.value,
            alreadyUsed = control.dirty;


        if(alreadyUsed && value.length == 0){
            state = true;
        }
        return state? null:{"inuse":state};
    }
}