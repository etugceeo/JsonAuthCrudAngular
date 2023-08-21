import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reguser',
  templateUrl: './reguser.component.html',
  styleUrls: ['./reguser.component.scss']
})
export class ReguserComponent {
  constructor(private builder: FormBuilder, private toastr:ToastrService,private service:AuthService,private router:Router) {

  }
  registerForm = this.builder.group({
    id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    name: this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.compose([Validators.required])),
    //En az sekiz ve en fazla 10 karakter, en az bir büyük harf, bir küçük harf, bir rakam ve bir özel
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    gender:this.builder.control('male'),
    role:this.builder.control(''),
    isActive:this.builder.control(false)
  
  })
  registration(){
    if(this.registerForm.valid){
      this.service.registerData(this.registerForm.value).subscribe((res=>{
        this.toastr.success('kullanıcıya erişimi etkinleştirmek için lütfen yönetici ile iletişime geçin','registration Successful');
        this.router.navigate(['login'])
      }))
    }else{
      this.toastr.warning('Lütfen geçerli bilgi giriniz!');
      console.log(this.registerForm)
    }
  }
}