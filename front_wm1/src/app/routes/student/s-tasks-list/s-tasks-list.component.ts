import { Component } from '@angular/core';

@Component({
  selector: 'app-s-tasks-list',
  templateUrl: './s-tasks-list.component.html',
  styleUrl: './s-tasks-list.component.css'
})
export class STasksListComponent {

  placeholder = "Buscar Tareas";

  public listaTareas = [
    {
      nombreTarea: 'Lectura recomendada',
      descrip_tarea: 'Revisar la literatura solicitada',
      nombreCurso: 'Violin',
      grade: 9.5
    },
    {
      nombreTarea: 'Partitura Cielito Lindo',
      descrip_tarea: 'Buscar los acorde de la canción tradicional mexicana ',
      nombreCurso: 'Guitarra',
      grade: 0
    },
    {
      nombreTarea: 'Completar el crucigrama',
      descrip_tarea: 'Complete la siguiente actividad hasta obtener el mejor tiempo posible',
      nombreCurso: 'Piano',
      grade: 6.5
    },
  ]

}
