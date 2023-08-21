import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistingComponent } from '../userlisting.component';
import { AdduserComponent } from '../adduser/adduser.component';


const routes: Routes = [
  {path: "", component:UserlistingComponent , pathMatch : 'full'},
  {path: "adduser", component:AdduserComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlistingRoutingModule { }
