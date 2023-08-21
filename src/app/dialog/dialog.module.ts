import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    DialogRoutingModule
  ],
  exports: [
    ModalComponent
  ]
})
export class DialogModule { }
