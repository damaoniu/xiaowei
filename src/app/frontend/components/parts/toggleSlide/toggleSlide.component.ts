import {Component, ViewEncapsulation, OnInit, ViewChild, ElementRef, Renderer, Input, Output} from "@angular/core";
import {EventEmitter} from "@angular/forms/src/facade/async";
declare var jQuery:any;
let $j=jQuery.noConflict();
@Component({
    templateUrl:"./toggleSlide.html",
    selector:"slideToggle",
    encapsulation:ViewEncapsulation.None
})
export class SlideToggle implements OnInit{
    @ViewChild('title') title:ElementRef;
    @ViewChild('content') content:ElementRef;
    @Output('opened') opened:EventEmitter<any>=new EventEmitter<any>(false);
    @Input('open') open:boolean;
    speed:number=300;
    ngOnInit():void {
        if(this.open){
            this.renderer.setElementClass(this.el.nativeElement.querySelector('.collapse-block'),"open",true);
            $j(this.content.nativeElement).slideDown(this.speed);
        }
    }
    toggle($event){
        $event.preventDefault;
        var thisItem = $j(this.el.nativeElement).find('.collapse-block');
        if (thisItem.hasClass('open')){
            thisItem.removeClass('open');
            $j(this.content.nativeElement).slideUp(this.speed);
            this.opened.emit();
        }
        else {
            thisItem.addClass('open');
            $j(this.content.nativeElement).slideDown(this.speed);
            this.opened.emit()
        }
    }
    constructor(public renderer:Renderer, public el:ElementRef){}
}
