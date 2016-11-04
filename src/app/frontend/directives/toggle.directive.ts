import {Directive, AfterContentInit, ElementRef} from "@angular/core";
declare var jQuery:any;
let $j=jQuery.noConflict();
@Directive({
    selector:'[toggle]'
})
export class ToggleDirective implements AfterContentInit{
    constructor(private el:ElementRef){}
    ngAfterContentInit():void {
        let that=this;
        if ($j(this.el.nativeElement).hasClass('open')){
            $j(this.el.nativeElement).slideDown(0);
        }
        $j(this.el.nativeElement).find('.collapse-block__title').on('click', function(e) {
            e.preventDefault;
            var speed = 300;
            var thisItem = $j(that.el.nativeElement),
                nextLevel = $j(this).next('.collapse-block__content');
            if (thisItem.hasClass('open')){
                thisItem.removeClass('open');
                nextLevel.slideUp(speed);
            }
            else {
                thisItem.addClass('open');
                nextLevel.slideDown(speed);
            }
        })
    }

}
