import {Directive, Input, ElementRef, OnInit} from "@angular/core";
declare var jQuery:any;
let $j = jQuery.noConflict();
@Directive({
    selector:'[countdown]'
})
export class CountDown implements OnInit{
    @Input() finalDate:string;
    constructor(private el:ElementRef){}
    ngOnInit():void {
        $j.countdown.setDefaults($j.countdown.regionalOptions['zh-CN']);
        $j(this.el.nativeElement).countdown({until: new Date(this.finalDate),  padZeroes: true});

    }

}