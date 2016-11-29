import {
    Component, OnInit, ViewEncapsulation, AfterContentInit, AfterViewChecked, AfterViewInit,
    ElementRef, ViewChild, NgZone
} from "@angular/core";
import {Router, NavigationEnd, NavigationStart} from "@angular/router";
import {UserService} from "../shared/services/user/user.service";
import {AuthenticationService} from "../shared/services/authentication.service";
declare  var jQuery:any;
declare  var window:any;
let $j=jQuery.noConflict();
@Component({
    selector:"front",
    templateUrl:"./front.html",
    // styleUrls:["style.css","style-layout12.css"],
    encapsulation:ViewEncapsulation.None
})
export class FrontComponent implements OnInit,AfterContentInit,AfterViewInit{
    @ViewChild("header") header:ElementRef;
    constructor(public ngZone:NgZone, private router:Router,private authService:AuthenticationService){
        router.events.subscribe((event)=>{
            if(event instanceof NavigationEnd){
                $j("html, body").animate({ scrollTop: 0 }, "slow");
            }
            if(event instanceof NavigationStart){
                $j('.modal').modal('hide');
            }

        });
    }
    get user(){
        return this.authService.currentUser;
    }
    logout() {
        localStorage.removeItem('user');
        this.router.navigate(['']);
    }
    ngOnInit(){
        //remove loader
        $j('body').addClass('loaded');
        // top menu(hover)

        $j('.nav.navbar-nav li').hover(function(){
            $j(this).addClass('hover');
        },function(){
            $j(this).removeClass('hover');
        })

        //parallax
        if ($j('.content--parallax, .carusel--parallax').length) {
            $j('.content--parallax, .carusel--parallax').each(function() {
                var attr = $j(this).attr('data-image');
                $j(this).css({'background-image': 'url('+attr+')'});
            })
        }


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

        //back to top
        if ($j(".back-to-top").length > 0) {
            $j('.back-to-top').click(function() {
                $j('html, body').animate({scrollTop: 0},500);
                return false;
            })

            $j(window).scroll(function() {
                if ( $j(window).scrollTop() > 500) {$j(".back-to-top").stop(false).fadeIn(110)}
                else {$j(".back-to-top").stop(true).fadeOut(110)}
            })
        }

    }
    ngAfterContentInit():void {
        //initate the dropdowns
        // $j('.dropdown-toggle').dropdown();
        //set content margin Top
        // $j("#pageContentPart").css("margin-top",$j('#headerPart').outerHeight());
    }
    ngAfterViewInit():void {

    }

}