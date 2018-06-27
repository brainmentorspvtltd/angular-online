import { CanActivate,Router } from "@angular/router";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthService implements CanActivate{

  roles:string[]=["admin","guest"];
  constructor(private router:Router){

  }
  canActivate(route, state){
  if(this.roles.indexOf(this.getCurrentRole())>=0){
  return true;
  }
  else {
    this.router.navigate(['/mobiles/8999']);
  }
  }
  getCurrentRole():string{
  return "admin";
  }
}