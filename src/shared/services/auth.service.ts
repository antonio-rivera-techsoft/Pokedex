import { Injectable } from '@angular/core';
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
  constructor() { }

  isLogged():Observable<boolean>{
    let user = sessionStorage.getItem('userInfo');
    if(user){
      return of(true)
    }
    return of(false)
  }

  login(email:string, pass:string){
    let findUser = this.users.find(user => user.email.toLowerCase() === email.toLowerCase() && user.password === pass);
    if(findUser){
      sessionStorage.setItem('userInfo',JSON.stringify(findUser))
    }
  }
}
