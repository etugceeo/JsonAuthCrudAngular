import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlistingRoutingModule } from './userlisting-routing.module';
import { UserlistingComponent } from '../userlisting.component';
import { AdduserComponent } from '../adduser/adduser.component';
import { DialogModule } from 'src/app/dialog/dialog.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserlistingComponent,
    AdduserComponent
  ],
  imports: [
    CommonModule,
    UserlistingRoutingModule,
    DialogModule,
    FormsModule
  
  ]
})
export class UserlistingModule { }
