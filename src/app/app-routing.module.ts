import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { ReguserComponent } from './reguser/reguser.component';
import { MainComponent } from './main/main.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { authGuard } from './guard/auth.guard';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  /*
  {path:'', component:MainComponent,canActivate:[authGuard]},
  {path:'main', component:MainComponent,canActivate:[authGuard]},
  {path : 'register', component:ReguserComponent},
  {path : 'login', component:LoginComponent},
  {path: 'userlist', component: UserlistingComponent}
  */
  //{path:'', component: UserlistingComponent,canActivate:[authGuard]},
  //{path:'', component:MainComponent,canActivate:[authGuard]},
  //{path : 'register', component:ReguserComponent},
  //{path : 'updateuser' , component:UpdateuserComponent},
  //{path : 'main', component:MainComponent,canActivate:[authGuard]},
  {path: 'login', loadChildren:() => import('../app/login/login.module').then(x => x.LoginModule)},
  {path: '', component:AppComponent, children: [
    {path:"" , loadChildren:() => import('../app/main/main/main.module').then(x => x.MainModule),canActivate:[authGuard]},
  ] }
  

  //{path: 'userlist', component: UserlistingComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
