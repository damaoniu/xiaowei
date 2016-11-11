import {Component} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";
@Component({
    selector:"file-input",
    templateUrl:'.fileInput.html',
    providers:[
        {provide:NG_VALUE_ACCESSOR,multi:true,useExisting:FileInputComponent}
    ]
})
export class FileInputComponent implements ControlValueAccessor{
    file:File;

    writeValue(obj:any):void {

    }

    registerOnChange(fn:any):void {
    }

    registerOnTouched(fn:any):void {
    }

}