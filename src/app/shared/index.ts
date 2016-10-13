
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
@NgModule({
    imports:[RouterModule,FormsModule,CommonModule],
    exports:[RouterModule,FormsModule,CommonModule],
})
export class SharedModule{

}

