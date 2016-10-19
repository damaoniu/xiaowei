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

      //aside
      bannerAsid($j('.bannerAsid'));//banner
      testimonialsAsid($j('.testimonialsAsid'));//TESTIMONIALS
      productCarousel($j('#postsCarousel'),1,1,1,1,1);
    //product carousel
      productCarousel($j('#megaMenuCarousel2'),1,1,1,1,1);
      productCarousel($j('#carouselNew'),2,1,2,2,2);
      productCarousel($j('#carouselSale'),3,2,2,2,2);
      productCarousel($j('#carouselFeatured'),5,3,3,2,1);
      verticalCarousel($j('.vertical-carousel-1'),2);
      brandsCarousel($j('.brands-carousel'));
      bannerCarouselShort($j('.category-carousel'))

  }

  ngAfterContentInit(){
  }
  ngOnDestroy(){
    $j('body').removeClass('loaded');
  }

}