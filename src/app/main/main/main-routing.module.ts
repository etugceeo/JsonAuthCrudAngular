import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistingComponent } from 'src/app/userlisting/userlisting.component';
import { MainComponent } from '../main.component';
import { authGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
  {path: "", component:MainComponent , pathMatch : 'full', children:[
    {path:"" , loadChildren:() => import('src/app/userlisting/userlisting/userlisting.module').then(x => x.UserlistingModule)},
    {path:"employeelist" , loadChildren:() => import('src/app/employeelist/employeelist.module').then(x => x.EmployeelistModule)},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {

}
