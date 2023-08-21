import { Injectable } from '@angular/core';
//import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree,CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
@Injectable({
  providedIn: 'root'
})

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
export class authGuard implements CanActivate{
  constructor( private toastr:ToastrService,private service:AuthService,private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.service.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['login'])
      return false;
    }
  }

  // CanActivate(
  //   route : ActivatedRouteSnapshot,
  //   state : RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
  //     if(this.service.isLoggedIn()){
  //       return true;
  //     }else{
  //       this.router.navigate(['login'])
  //       return false;
  //     }
    
  // }

  
}
