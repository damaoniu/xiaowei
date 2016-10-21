import {Component, OnInit, ViewEncapsulation, OnDestroy, AfterContentInit} from "@angular/core";

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

  }

  ngAfterContentInit(){

  }
  ngOnDestroy(){
    $j('body').removeClass('loaded');
  }

}