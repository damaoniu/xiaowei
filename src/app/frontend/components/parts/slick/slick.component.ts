import {
    Component, ChangeDetectionStrategy, Input, ElementRef, NgZone, ViewEncapsulation,
    ViewChild, Renderer,ComponentFactoryResolver
} from "@angular/core";
import {Observable} from "rxjs/Rx";
declare var jQuery:any;
let $j=jQuery.noConflict();
@Component({
    selector:"slickSlider",
    templateUrl:'./slick.html',
})
export class SlickSliderComponent{
    @Input() htmlTemplate;
    test='test';

}