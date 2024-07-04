import { Injectable, inject } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate{
  private auth = inject(AuthService);
  private router = inject(Router);
  isLogged: boolean = false;

  canActivate():boolean{
    this.auth.isLogged().subscribe(l => this.isLogged = l);
    if(this.isLogged){
        return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
