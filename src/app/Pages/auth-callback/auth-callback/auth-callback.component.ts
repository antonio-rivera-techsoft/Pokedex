import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  standalone: false,
  templateUrl: './auth-callback.component.html',
  styleUrl: './auth-callback.component.scss'
})
export class AuthCallbackComponent implements OnInit{
  isLogged: boolean = false;
  constructor(private auth: AuthService, private router:Router) {
    this.checkSession();
  }

  ngOnInit(): void {
  }

  checkSession() {
    this.auth.isLogged().subscribe(l => this.isLogged = l);
    if(this.isLogged){
      this.router.navigate(['']);
    }
  }
}
