import { Component } from '@angular/core';
import {SidebarOptions} from "../../../interfaces/sidebarOptions";

@Component({
  selector: 'app-s-route-course',
  templateUrl: './s-route-course.html',
  styleUrl: './s-route-course.css'
})
export class SRouteCourse {

  listaOpcionesSidebarCourse: SidebarOptions[] = [
    {
      nombre: "Detalle de curso",
      ruta: "overview",
      icono: "fas fa-home",
    },
    {
      nombre: "Tareas",
      ruta: "tasks",
      icono: "fas fa-book-open",
    },
    {
      nombre: "Actividades",
      ruta: "activities",
      icono: "fas fa-stream",
    },
  ]

}
