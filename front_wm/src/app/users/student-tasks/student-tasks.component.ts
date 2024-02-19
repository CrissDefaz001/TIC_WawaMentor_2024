import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-student-tasks',
  templateUrl: './student-tasks.component.html',
  styleUrl: './student-tasks.component.css'
})
export class StudentTasksComponent implements OnInit{

  listaTareas: any[];

  // arreglo de ejemplo
  constructor() {
    this.listaTareas = [
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
        grade: '-'
      },
      {
        nombreTarea: 'Completar el crucigrama',
        descrip_tarea: 'Complete la siguiente actividad hasta obtener el mejor tiempo posible',
        nombreCurso: 'Piano',
        grade: 6.5
      },
    ]
  }

  ngOnInit(): void {
  }

}
