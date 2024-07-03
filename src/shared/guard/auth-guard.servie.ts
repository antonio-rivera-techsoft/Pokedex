import { Injectable, inject } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate{
    private auth = inject(AuthService);
    isLogged: boolean = false;
  canActivate():boolean{
    this.auth.isLogged().subscribe(l => this.isLogged = l);
    if(this.isLogged){
        return true;
    }
    return false;
  }
}