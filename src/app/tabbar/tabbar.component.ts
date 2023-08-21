import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserlistingRoutingModule } from '../userlisting/userlisting/userlisting-routing.module';



@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent {
@Output() isShowUlist = new EventEmitter<any>();
constructor(private router:Router){}
gonderUserlist() {
  this.isShowUlist.emit(true);
}

goUser(){
  console.log("merhaba");
  
this.router.navigate(['/userlist'], {skipLocationChange:true})
}
goEmp(){
  console.log("fdgfd")
  this.router.navigate(['list'],{skipLocationChange:true})
}
}
