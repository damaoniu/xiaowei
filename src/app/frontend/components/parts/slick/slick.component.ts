import {
    Component, ChangeDetectionStrategy, Input, ElementRef, NgZone, ViewEncapsulation,
    ViewChild, Renderer, ComponentFactoryResolver, Directive, ViewContainerRef, OnInit
} from "@angular/core";
import {Observable} from "rxjs/Rx";
declare var jQuery:any;
let $j=jQuery.noConflict();

class SlickBase implements OnInit{
    @Input() products:Observable<any>;
    @Input() wrapperClass:string='';
    @ViewChild('slides') slides:ElementRef;
    @Input('numberXl') numberXl:number;
    @Input('numberLg') numberLg:number;
    @Input('numberMd') numberMd:number;
    @Input('numberSm') numberSm:number;
    @Input('numberXs') numberXs:number;
    @Input('arrows') arrows:boolean;
    @Input('dots') dots:boolean;
    constructor(private vc:ViewContainerRef){
    }
    ngOnInit(){
        let that=this;
        if(this.products){
            this.products.subscribe((data)=>{
                setTimeout(()=>{
                    that.buildSlick();
                })
            })
        }
    }
    buildSlick(){
        let that = this;
        // Fix z-index problem on carousel hover
        function fixCarouselHover(carousel) {
            carousel.find('.slick-slide').bind( "mouseenter mouseleave",
                function( event ){
                    $j(that.slides.nativeElement).closest('.slick-slider').toggleClass('hover');
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

        var carousel = $j(this.vc.element.nativeElement);
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



@Component({
    selector:'slick01',
    templateUrl:'./slick.01.html'
})
export class SlickO1 extends SlickBase{
    @Input() products:Observable<any>;
    @Input() title:string;
    @Input() wrapperClass:string='';
    @ViewChild('slides') slides:ElementRef;
    @Input('numberXl') numberXl:number;
    @Input('numberLg') numberLg:number;
    @Input('numberMd') numberMd:number;
    @Input('numberSm') numberSm:number;
    @Input('numberXs') numberXs:number;
    @Input('arrows') arrows:boolean;
    @Input('dots') dots:boolean;
}
@Component({
    selector:'slick02',
    templateUrl:'./slick.02.html'
})
export class SlickO2 extends SlickBase{
    @Input() products:Observable<any>;
    @Input() wrapperClass:string='';
    @ViewChild('slides') slides:ElementRef;
    @Input('numberXl') numberXl:number;
    @Input('numberLg') numberLg:number;
    @Input('numberMd') numberMd:number;
    @Input('numberSm') numberSm:number;
    @Input('numberXs') numberXs:number;
    @Input('arrows') arrows:boolean;
    @Input('dots') dots:boolean;
}

@Component({
    selector:'slick03',
    templateUrl:'./slick.03.html'
})
export class SlickO3 extends SlickBase{
    @Input() products:Observable<any>;
    @Input() wrapperClass:string='';
    @ViewChild('slides') slides:ElementRef;
    @Input('numberXl') numberXl:number;
    @Input('numberLg') numberLg:number;
    @Input('numberMd') numberMd:number;
    @Input('numberSm') numberSm:number;
    @Input('numberXs') numberXs:number;
    @Input('arrows') arrows:boolean;
    @Input('dots') dots:boolean;
}

@Component({
    selector:'slick04',
    templateUrl:'./slick.04.html'
})
export class SlickO4 extends SlickBase{
    @Input() products:Observable<any>;
    @Input() wrapperClass:string='';
    @ViewChild('slides') slides:ElementRef;
    @Input('numberXl') numberXl:number;
    @Input('numberLg') numberLg:number;
    @Input('numberMd') numberMd:number;
    @Input('numberSm') numberSm:number;
    @Input('numberXs') numberXs:number;
    @Input('arrows') arrows:boolean;
    @Input('dots') dots:boolean;
}


@Component({
    selector:"slickSlider",
    template:`<dynamic-html-outlet [htmlTemplate]="htmlTemplate"></dynamic-html-outlet>`,
})
export class SlickSliderComponent{
    @Input() htmlTemplate;
    @Input() slickStyle;
    test='test';

}