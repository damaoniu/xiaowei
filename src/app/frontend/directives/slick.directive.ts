import {AfterContentInit, ElementRef, Input, Directive, ViewChild} from "@angular/core";
declare var jQuery:any;
declare var window:any;
let $j=jQuery.noConflict();
@Directive({
    selector:"[slick]"
})
export class SlickDirective implements AfterContentInit{
    @Input('numberXl') numberXl:number;
    @Input('numberLg') numberLg:number;
    @Input('numberMd') numberMd:number;
    @Input('numberSm') numberSm:number;
    @Input('numberXs') numberXs:number;
    @Input('arrows') arrows:boolean;
    @Input('dots') dots:boolean;

    constructor(public el:ElementRef){}
    ngAfterContentInit():void {
        // Fix z-index problem on carousel hover
        function fixCarouselHover(carousel) {
            carousel.find('.slick-slide').bind( "mouseenter mouseleave",
                function( event ){
                    $j(this).find('.carousel-products').closest('.slick-slider').toggleClass('hover');
                }
            );
        }
        //initiate the carousel
        var windowW = window.innerWidth || $j(window).width();
        var slidesToShowXl = (this.numberXl > 0) ? this.numberXl : 6;
        var slidesToShowLg = (this.numberLg > 0) ? this.numberLg : 4;
        var slidesToShowMd = (this.numberMd > 0) ? this.numberMd : this.numberLg;
        var slidesToShowSm = (this.numberSm > 0) ? this.numberSm : this.numberMd;
        var slidesToShowXs = (this.numberXs > 0) ? this.numberXs : 1;

        var carousel = $j(this.el.nativeElement);
        var speed = 500;
        let options={
            slidesToShow: slidesToShowXl,
            slidesToScroll: 1,
            speed: speed,
            responsive: [{
                breakpoint: 1770,
                settings: {
                    slidesToShow: slidesToShowLg,
                    slidesToScroll: slidesToShowLg
                }
            },{
                breakpoint: 992,
                settings: {
                    slidesToShow: slidesToShowMd,
                    slidesToScroll: slidesToShowMd
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: slidesToShowSm,
                    slidesToScroll: slidesToShowSm
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: slidesToShowXs,
                    slidesToScroll: slidesToShowXs
                }
            }]
        };
        options['arrows']=this.arrows||true;
        options['dots']=this.dots||false;
        if (carousel.find('.carousel-products__button').length > 0) {
            options['prevArrow']=carousel.find('.carousel-products__button .btn-prev');
            options['nextArrow']=carousel.find('.carousel-products__button .btn-next');
        }
        else {
        }
        $j(carousel.find(".carousel-slides")).slick(options);


        fixCarouselHover($j(carousel.find(".carousel-slides")));
    }

}