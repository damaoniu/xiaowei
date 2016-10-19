import {Component, OnInit, ViewEncapsulation, AfterContentInit} from "@angular/core";
declare  var jQuery:any;
declare  var window:any;
let $j=jQuery.noConflict();
@Component({
    selector:"front",
    templateUrl:"./front.html",
    encapsulation:ViewEncapsulation.None
})
export class FrontComponent implements OnInit,AfterContentInit{
    ngAfterContentInit():void {
        //initate the dropdowns
        // $j('.dropdown-toggle').dropdown();
    }
    ngOnInit(){
        //set content margin Top
        $j("#pageContentPart").css("margin-top",$j("#headerPart").outerHeight());
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



    }

}