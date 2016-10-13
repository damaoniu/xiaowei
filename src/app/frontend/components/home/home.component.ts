import {Component, OnInit, ViewEncapsulation, OnDestroy, AfterContentInit} from "@angular/core";
import {
    productCarousel, verticalCarousel, brandsCarousel, bannerCarouselShort, testimonialsAsid,
    bannerAsid
} from "../../utils"
declare  var jQuery:any;
declare  var window:any;


let $j=jQuery.noConflict();
@Component({
    selector:"home",
    templateUrl:"./home.html",
    styleUrls:[],
    encapsulation:ViewEncapsulation.None
})
export class Home implements OnInit,OnDestroy,AfterContentInit{
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

      //aside
      bannerAsid($j('.bannerAsid'),1,1,1,1,1);//banner
      testimonialsAsid($j('.testimonialsAsid'),1,1,1,1,1);//TESTIMONIALS
      productCarousel($j('#postsCarousel'),1,1,1,1,1);
    //product carousel
      productCarousel($j('#megaMenuCarousel2'),1,1,1,1,1);
      productCarousel($j('#carouselNew'),2,1,2,2,2);
      productCarousel($j('#carouselSale'),3,2,2,2,2);
      productCarousel($j('#carouselFeatured'),5,3,3,2,1);
      verticalCarousel($j('.vertical-carousel-1'),2,2,2,2,2,'verticalCarousel'));
      brandsCarousel($j('.brands-carousel'));
      bannerCarouselShort($j('.category-carousel'))

  }

  ngAfterContentInit(){
      // Revolution Slider
      var windowW = window.innerWidth || $j(window).width();
      var fullwidth;
      var fullscreen;

      jQuery(window).resize(sliderOptions);
      sliderOptions();
      function sliderOptions(){
          if (windowW > 767) {
              fullwidth = "off";
              fullscreen = "on";
          } else {
              fullwidth = "on";
              fullscreen = "off";
          }
      }
      jQuery('.tp-banner').show().revolution(
              {
                  dottedOverlay:"none",
                  delay:16000,
                  startwidth:2048,
                  startheight:900,
                  hideThumbs:200,
                  hideTimerBar:"on",

                  thumbWidth:100,
                  thumbHeight:50,
                  thumbAmount:5,

                  navigationType:"none",
                  navigationArrows:"",
                  navigationStyle:"",

                  touchenabled:"on",
                  onHoverStop:"on",

                  swipe_velocity: 0.7,
                  swipe_min_touches: 1,
                  swipe_max_touches: 1,
                  drag_block_vertical: false,

                  parallax:"mouse",
                  parallaxBgFreeze:"on",
                  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

                  keyboardNavigation:"off",

                  navigationHAlign:"center",
                  navigationVAlign:"bottom",
                  navigationHOffset:0,
                  navigationVOffset:20,

                  soloArrowLeftHalign:"left",
                  soloArrowLeftValign:"center",
                  soloArrowLeftHOffset:20,
                  soloArrowLeftVOffset:0,

                  soloArrowRightHalign:"right",
                  soloArrowRightValign:"center",
                  soloArrowRightHOffset:20,
                  soloArrowRightVOffset:0,

                  shadow:0,
                  fullWidth: fullwidth,
                  fullScreen: fullscreen,

                  spinner:"",
                  h_align:"left",

                  stopLoop:"off",
                  stopAfterLoops:-1,
                  stopAtSlide:-1,

                  shuffle:"off",

                  autoHeight:"off",
                  forceFullWidth:"off",


                  hideThumbsOnMobile:"off",
                  hideNavDelayOnMobile:1500,
                  hideBulletsOnMobile:"off",
                  hideArrowsOnMobile:"off",
                  hideThumbsUnderResolution:0,

                  hideSliderAtLimit:0,
                  hideCaptionAtLimit:0,
                  hideAllCaptionAtLilmit:0,
                  startWithSlide:0,
                  fullScreenOffsetContainer: "#header"
              });
  }
  ngOnDestroy(){
    $j('body').removeClass('loaded');
  }

}