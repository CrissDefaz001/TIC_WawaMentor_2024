import { Component } from '@angular/core';
import {SidebarOptions} from "../../../interfaces/sidebarOptions";

@Component({
  selector: 'app-t-route-course',
  templateUrl: './t-route-course.component.html',
  styleUrl: './t-route-course.component.css'
})
export class TRouteCourseComponent {

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
    {
      nombre: "Asistencia",
      ruta: "attendance",
      icono: "fas fas fa-list",
    },
  ]

}
