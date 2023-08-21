import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ReguserComponent } from './reguser/reguser.component'
import { LoginModule } from './login/login.module';
import { TabbarComponent } from './tabbar/tabbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { Toast, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ActivatedRouteSnapshot } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { authGuard } from './guard/auth.guard';
import { ReguserModule } from './reguser/reguser/reguser.module';
import { MainModule } from './main/main/main.module';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AdduserComponent } from './userlisting/adduser/adduser.component';




@NgModule({
  declarations: [
    AppComponent,
    //MainComponent,
    //UserlistingComponent,
    UpdateuserComponent,
    //ReguserComponent,
    //TabbarComponent,
    SidebarComponent,
    //FooterComponent,
    //EmployeelistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReguserModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
