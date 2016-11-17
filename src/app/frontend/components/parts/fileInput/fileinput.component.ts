import {Component, forwardRef, Input} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";

@Component({
    selector:"file-input",
    templateUrl:'./fileInput.html',
    providers:[
        {provide:NG_VALUE_ACCESSOR,multi:true,useExisting:forwardRef(()=>FileInputComponent)}
    ]
})
export class FileInputComponent implements ControlValueAccessor{
    //Placeholders for the callbacks which are later providesd
    //by the Control Value Accessor
    @Input() type:string="image/*";
     _onTouch: (value: any) => void ;
    _onChange: (value: any) => void ;
    file:any;
    fileChanged(e){
        this.file =e;
        let fr = new FileReader();
        let that =this;
        fr.addEventListener('load',()=>{
            that._onChange({
                name:that.file.name,
                dataUrl:fr.result
            })
        })
        fr.readAsDataURL(this.file)


    }
    get value(): any {
        return this.file;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.file) {
            this.file = v;
            this._onChange(v);
        }
    }
    writeValue(obj:any):void {
        if(obj!=this.file){
            this.file=obj
        }
    }

    registerOnChange(fn:(value:any)=>void):void {
        this._onChange=fn
    }

    registerOnTouched(fn:(value:any)=>void):void {
        this._onTouch=fn;
    }

}