import { Component, inject } from '@angular/core';
import { NgbOffcanvas } from "@ng-bootstrap/ng-bootstrap";
import { OffcanvasComponent } from "../offcanvas/offcanvas.component";
import {SidebarOptions} from "../../interfaces/sidebarOptions";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  // urlFotoUsuario: string = "assets/users/teacher.png"
  urlFotoUsuario: string = "assets/users/helena2.jpg"

  usuarioActual: string = "Helena Moncayo"

  listaOpcionesSidebar: SidebarOptions[] = [
    {
      nombre: "Dashboard",
      ruta: "student/dashboard",
      icono: "fas fa-tachometer-alt",
    },
    {
      nombre: "Mi perfil",
      ruta: "student/profile",
      icono: "fas fa-user-circle",
    },
/*    {
      nombre: "Mis Cursos",
      ruta: "student/courselist",
      icono: "fas fa-graduation-cap",
    },*/
  ]


  // Offcanvas
  private offcanvasService = inject(NgbOffcanvas);
  open() {
    const offcanvasRef = this.offcanvasService.open(OffcanvasComponent);
    // offcanvasRef.componentInstance.nameMenu = 'Estudiante';
    offcanvasRef.componentInstance.datosOffCanvas = this.listaOpcionesSidebar;
  }

}
