import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReguserRoutingModule } from './reguser-routing.module';
import { ReguserComponent } from '../reguser.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReguserComponent
  ],
  imports: [
    CommonModule,
    ReguserRoutingModule,
    ReactiveFormsModule
  ],
  // exports: [
  //   ReguserComponent
  // ]
})
export class ReguserModule { }
