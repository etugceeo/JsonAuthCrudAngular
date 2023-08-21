import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from '../main.component';
import { TabbarComponent } from 'src/app/tabbar/tabbar.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { UserlistingComponent } from 'src/app/userlisting/userlisting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeelistModule } from 'src/app/employeelist/employeelist.module';
import { EmployeelistRoutingModule } from 'src/app/employeelist/employeelist-routing.module';
import { EmployeelistComponent } from 'src/app/employeelist/employeelist.component';


@NgModule({
  declarations: [
    MainComponent,
    TabbarComponent,
    FooterComponent,
    //EmployeelistComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeelistRoutingModule,
    //EmployeelistModule
  ]
})
export class MainModule { 

}
