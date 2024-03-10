import { Component } from '@angular/core';

@Component({
  selector: 'app-t-dashboard',
  templateUrl: './t-dashboard.component.html',
  styleUrl: './t-dashboard.component.css'
})
export class TDashboardComponent {

  public listaTareas = [
/*    {
      nombreTarea: 'Partitura Cielito Lindo',
      descrip_tarea: 'Repasar los acorde de la canción tradicional mexicana ',
      nombreCurso: 'GUITARRA',
      fecha: '2024-02-16 15:25',
      deadline: '2024-02-20 23:00',
      grade: 0
    },*/
    {
      nombreTarea: 'Completar el crucigrama',
      descrip_tarea: 'Completar la actividad solicitada hasta obtener el mejor tiempo posible',
      nombreCurso: 'PIANO',
      fecha: '2024-03-10 10:03',
      deadline: '2024-03-15 23:00',
      grade: 6.5
    },
  ]


  public listaCursos = [
    {
      course_name: 'VIOLÍN',
      level: 'Inicial',
      icon: 'assets/courses/violin.png',
      desc: 'El curso de violín es una experiencia integral que enseña técnicas de ejecución, lectura de partituras y expresión musical.'
    },
  ]

}
