import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeelistRoutingModule } from './employeelist-routing.module';
import { EmployeelistComponent } from './employeelist.component';


@NgModule({
  declarations: [
    EmployeelistComponent
  ],
  imports: [
    CommonModule,
    EmployeelistRoutingModule
  ]
})
export class EmployeelistModule { 
  
}
