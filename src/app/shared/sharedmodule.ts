
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UtilsService} from "./services/utils.services";
import {DynamicComponentModule} from 'angular2-dynamic-component/index';
@NgModule({
    imports:[RouterModule,FormsModule,CommonModule],
    exports:[RouterModule,FormsModule,CommonModule,DynamicComponentModule],
    providers:[UtilsService]
})
export class SharedModule{

}

