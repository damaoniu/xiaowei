import {
    Component, OnInit, ViewEncapsulation, AfterContentInit, AfterViewChecked, AfterViewInit,
    ElementRef, ViewChild, NgZone
} from "@angular/core";
declare  var jQuery:any;
declare  var window:any;
let $j=jQuery.noConflict();
@Component({
    selector:"front",
    templateUrl:"./front.html",
    encapsulation:ViewEncapsulation.None
})
export class FrontComponent implements OnInit,AfterContentInit,AfterViewInit{
    @ViewChild("header") header:ElementRef;
    constructor(public ngZone:NgZone){}
    ngOnInit(){
        //remove loader
        jQuery('body').addClass('loaded');
        // top menu(hover)
        jQuery(function($j) {
            "use strict";

            $j('.nav.navbar-nav li').hover(function(){
                $j(this).addClass('hover');
            },function(){
                $j(this).removeClass('hover');
            })

        });
        //newsletter modal
        if ($j('#newsletterModal').length) {
            var pause = $j('#newsletterModal').attr('data-pause');
            setTimeout(function() {
                $j('#newsletterModal').modal('show');
            }, pause);
        }
        //parallax
        if ($j('.content--parallax, .carusel--parallax').length) {
            $j('.content--parallax, .carusel--parallax').each(function() {
                var attr = $j(this).attr('data-image');
                $j(this).css({'background-image': 'url('+attr+')'});
            })
        }
        //search dropdwon
        $j('.search__open').on('click', function(e) {
            e.preventDefault();
            $j(this).parent('.search').addClass('open');
            $j(this).next('#search-dropdown, .search-dropdown').addClass('open');
            $j('header .badge').addClass('badge--hidden');
        });
        $j('.search__close').on('click', function(e) {
            e.preventDefault();
            $j(this).closest('.search').removeClass('open');
            $j(this).closest('#search-dropdown, .search-dropdown').removeClass('open');
            $j('header .badge').removeClass('badge--hidden');
        });

        //mobile menu

            if ($j("#off-canvas-menu").length > 0) {
                "use strict";
                $j(document).bind('cbox_open', function() {
                    $j('html').css({
                        overflow: 'hidden'
                    });
                }).bind('cbox_closed', function() {
                    $j('html').css({
                        overflow: ''
                    });
                });


                // check if RTL mode
                var colorBoxMenuPosL = ($j("body").hasClass('rtl')) ? 'none' : '0';
                var colorBoxMenuPosR = ($j("body").hasClass('rtl')) ? '0' : 'none';

                $j(".off-canvas-menu-toggle").colorbox({
                    inline: true,
                    opacity: 0.55,
                    transition: "none",
                    arrowKey: false,
                    width: "300",
                    height: "100%",
                    fixed: true,
                    className: 'canvas-menu',
                    top: 0,
                    right: colorBoxMenuPosR,
                    left: colorBoxMenuPosL,
                    colorBoxCartPos: 0
                })
            }


        $j(window).resize(function(){
            var $cboxClose = $j("#cboxClose");
            if($cboxClose.length && window.innerWidth > 1024 ) {
                $j("#cboxClose").trigger("click");
            }
        })



            $j("#off-canvas-menu .expander-list").find("ul").hide().end().find(" .expander").text("+").end().find(".active").each(function() {
                $j(this).parents("li ").each(function() {
                    var $jthis = $j(this),
                        $jul = $jthis.find("> ul"),

                        $jexpander = $jthis.find("> .name .expander");
                    $jul.show();

                    $jexpander.html("&minus;")
                })
            }).end().find(" .expander").each(function() {
                var $jthis = $j(this),
                    hide = $jthis.text() === "+",
                    $jul = $jthis.parent(".name").next("ul"),
                    $jname = $jthis.next("a");
                $jthis.click(function() {
                    if ($jul.css("display") ==
                        "block") $jul.slideUp("slow");
                    else $jul.slideDown("slow");
                    $j(this).html(hide ? "&minus;" : "+");
                    hide = !hide
                })
            })

    }
    ngAfterContentInit():void {
        //initate the dropdowns
        // $j('.dropdown-toggle').dropdown();
        //set content margin Top
    }
    ngAfterViewInit():void {
        this.ngZone.runOutsideAngular(()=>{
            console.log($j(this.header.nativeElement).height())
            $j("#pageContentPart").css("margin-top",$j(this.header.nativeElement).outerHeight());
        })
    }

}