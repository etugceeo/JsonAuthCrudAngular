import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userData:any;
  constructor(private builder: FormBuilder, private toastr:ToastrService,private service:AuthService,private router:Router) {
    sessionStorage.clear();
  }  
  loginForm = this.builder.group({
    username:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required),
  })

  login(){
    if(this.loginForm.valid){
      this.service.getById(this.loginForm.value.username).subscribe(res=>{
        this.userData = res;
        console.log(this.userData)
        if(this.userData.password === this.loginForm.value.password){
          if(this.userData.isActive){
            sessionStorage.setItem('username',this.userData.id)
            sessionStorage.setItem('role',this.userData.role)
            this.router.navigate([''])
          }else{
            this.toastr.error('Lütfen yönetici ile iletişime geçin','Aktif olmayan kullanıcı')
          }
        }else{
          this.toastr.error('Hatalı kimlik')
        }
      })
    }else{
      this.toastr.warning('Lütfen geçerli bilgi giriniz');
    }
  }

}
