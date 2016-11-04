import {Component, Input} from "@angular/core";
@Component({
    selector:'uxv-pagination',
    templateUrl:'./pagination.html'
})
export class PaginationComponent{
    @Input() itemCount:number;
    constructor(){}
}