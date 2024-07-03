import { Injectable } from '@angular/core';
import { menuOption } from '../../models/menu-option/menuOption';
import { adminMenu, userMenu } from '../../const/menuOptions';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  public getMenuByRole(role: string): Observable<menuOption[]> {
    if (role === 'admin') {
      return of(adminMenu)
    } 
    return of(userMenu)
  }
}
