import { NgModule } from '@angular/core';
import { RouterModule ,} from '@angular/router';


@NgModule({
  imports: [
      RouterModule.forChild([
        {
          path:"account",
          loadChildren:'app/account/account.module'
        }
      ])
  ],
  exports: [RouterModule],
  providers: []
})
export class UxvRoutingModule { }
