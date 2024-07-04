import { Injectable, inject } from '@angular/core';
import { Router } from "@angular/router";

import { Observable, of } from 'rxjs';

export const users: user[] = [
  {email: "prueba@email.com",password: "1234", role: "admin"},
  {email: "prueba2@email.com",password: "1234",role: "user"}
]
export interface user{
  email:string,
  password:string,
  role:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users:user[] = users;
  private router = inject(Router);
  constructor() { }

  isLogged():Observable<boolean>{
    let user = sessionStorage.getItem('userInfo');
    if(user){
      return of(true)
    }
    return of(false)
  }

  getUserRole(): Observable<string> {
    const userInfoString = sessionStorage.getItem('userInfo');
    if (userInfoString) {
      const user: user = JSON.parse(userInfoString);
      return of(user.role);
    }
    return of('defaultRole');
  }

  login(email:string, pass:string):Observable<boolean>{
    let findUser = this.users.find(user => user.email.toLowerCase() === email.toLowerCase() && user.password === pass);
    if(findUser){
      sessionStorage.setItem('userInfo',JSON.stringify(findUser))
      this.router.navigate(['/pokedex-list']);
      return of(true);
    }
    return of(false);
  }

  logOut(){
    sessionStorage.removeItem('userInfo');
    this.router.navigate(['/login']);
  }
}
