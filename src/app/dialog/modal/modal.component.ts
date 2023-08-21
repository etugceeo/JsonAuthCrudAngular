import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent {
 @Input() show: boolean = false;
 @Input() perDelId : string = "";
}
