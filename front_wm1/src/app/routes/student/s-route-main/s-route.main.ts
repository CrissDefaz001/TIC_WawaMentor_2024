import { Component } from '@angular/core';
import {SidebarOptions} from "../../../interfaces/sidebarOptions";

@Component({
  selector: 'app-s-route-main',
  templateUrl: './s-route.main.html',
  styleUrl: './s-route.main.css'
})
export class SRouteMain {

  offcanvasName = "estudiante";

  listaOpcionesSidebar: SidebarOptions[] = [
    {
      nombre: "Dashboard",
      ruta: "dashboard",
      icono: "fas fa-tachometer-alt",
    },
    {
      nombre: "Mi perfil",
      ruta: "profile",
      icono: "fas fa-user-circle",
    },
    {
      nombre: "Mis Cursos",
      ruta: "courselist",
      icono: "fas fa-graduation-cap",
    },
  ]

}
