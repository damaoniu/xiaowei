import {Directive, Input, HostListener, ElementRef, Output,EventEmitter} from "@angular/core";
@Directive({
    selector:'[file-added]'
})
export class FileAddedDirective{
    @Input() fileHolder;
    @Output() fileHolderChange:EventEmitter<any>=new EventEmitter<any>();
    constructor(private  el:ElementRef){}
    @HostListener('change')
    public onFileAdded():any{
        this.fileHolder=this.el.nativeElement.files[0];
        this.fileHolderChange.emit(this.el.nativeElement.files[0])
    }
}