import { menuOption } from './../../models/menu-option/menuOption';
import { Observable } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';
import { MenuService } from '../../services/general/menu.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `
    @for(option of menuOptionsToShow; track option.name){
      <button width="10px">{{option.name}}</button>
    }
    <button (click)="cerrarSesion()" width="10px">Cerrar Sesion</button>
  `,
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
  private menu = inject(MenuService);
  private auth = inject(AuthService);
  userRole:string = "";
  menuOptionsToShow:menuOption[] = [];

  ngOnInit(): void {
    this.auth.getUserRole().subscribe((role: string) => this.userRole = role);
    this.menu.getMenuByRole(this.userRole).subscribe((menuOptions) => {
      this.menuOptionsToShow = menuOptions;
    });
  }

  cerrarSesion():void{
    this.auth.logOut();
  }

}
