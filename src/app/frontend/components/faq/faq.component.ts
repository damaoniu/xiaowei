import {Component, ViewEncapsulation, OnInit} from "@angular/core";
declare var jQuery:any;
let $j=jQuery.noConflict();
@Component({
    selector:"faq",
    templateUrl:"./faq.html",
    encapsulation:ViewEncapsulation.None
})
export class FaqComponent implements OnInit{
    ngOnInit():void {
        // Collapse Block (left column in listing)

        $j('.collapse-block__content').each(function() {
            if ($j(this).parent('.collapse-block').hasClass('open')){
                $j(this).slideDown(0);
            }
        })
        $j('.collapse-block__title').on('click', function(e) {
            e.preventDefault;
            var speed = 300;
            var thisItem = $j(this).parent(),
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