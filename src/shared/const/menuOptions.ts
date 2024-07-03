import { menuOption } from "../models/menu-option/menuOption"

export const adminMenu: menuOption[] = [
    {
      name: "Home",
      routerLink: "",
    },
    {
      name: "Pokemon List",
      routerLink: "pokemon-list",
    },
    {
      name: "Manage Pokemon",
      routerLink: "pokemon-manage",
    }
  ]
  
  export const userMenu: menuOption[] = [
    {
      name: "Home",
      routerLink: "",
    },
    {
      name: "Pokemon List",
      routerLink: "pokemon-list",
    }
  ]