
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UtilsService} from "./services/utils.services";
@NgModule({
    imports:[RouterModule,FormsModule,CommonModule,],
    exports:[RouterModule,FormsModule,CommonModule],
    providers:[UtilsService]
})
export class SharedModule{

}

