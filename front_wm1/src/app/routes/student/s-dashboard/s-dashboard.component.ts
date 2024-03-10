import {Component, inject} from '@angular/core';

@Component({
  selector: 'app-s-dashboard',
  templateUrl: './s-dashboard.component.html',
  styleUrl: './s-dashboard.component.css'
})
export class SDashboardComponent {

  constructor() {
  }
  placeholderC = "Buscar Cursos";
  placeholderT = "Buscar Tareas";

  // Hora local


  public listaTareas = [
    {
      nombreTarea: 'Lectura recomendada',
      descrip_tarea: 'Revisar la literatura solicitada',
      nombreCurso: 'VIOLÍN',
      fecha: '2024-02-18 20:30',
      grade: 9.5
    },
    {
      nombreTarea: 'Partitura Cielito Lindo',
      descrip_tarea: 'Buscar los acorde de la canción tradicional mexicana ',
      nombreCurso: 'GUITARRA',
      fecha: '2024-02-16 15:25',
      grade: 0
    },
/*    {
      nombreTarea: 'Completar el crucigrama',
      descrip_tarea: 'Completar la actividad solicitada hasta obtener el mejor tiempo posible',
      nombreCurso: 'PIANO',
      fecha: '2024-02-15 10:03',
      grade: 6.5
    },*/
  ]


  public listaCursos = [
    {
      course_name: 'VIOLÍN',
      level: 'Inicial',
      icon: 'assets/courses/violin.png',
      desc: 'El curso de violín es una experiencia integral que enseña técnicas de ejecución, lectura de partituras y expresión musical.'
    },
    {
      course_name: 'PIANO',
      level: 'Intermedio',
      icon: 'assets/courses/piano.png',
      desc: 'El curso de piano realiza una introducción al mundo de los teclados y sus diferentes estilos.'
    },
    {
      course_name: 'GUITARRA',
      level: 'Avanzado',
      icon: 'assets/courses/guitar.png',
      desc: 'El curso de guitarra instruye al estudiante en técnicas de rasgueo, arpegios, punteo y lectura de partituras.'
    },
    {
      course_name: 'VIOLONCHELO',
      level: 'Inicial',
      icon: 'assets/courses/cello.png',
      desc: 'El curso de guitarra incluye una introducción al violonchelo y su importancia en el mbito musical.'
    },
  ]
}
