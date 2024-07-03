import { Component, inject } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user:string = ''
  password:string = ''
  auth = inject(AuthService);

  login() {
    this.auth.login(this.user, this.password);
  }

}
