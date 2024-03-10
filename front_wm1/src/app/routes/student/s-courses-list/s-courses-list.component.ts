import { Component } from '@angular/core';

@Component({
  selector: 'app-s-courses-list',
  templateUrl: './s-courses-list.component.html',
  styleUrl: './s-courses-list.component.css'
})
export class SCoursesListComponent {

  constructor() {
  }

  placeholder = "Buscar Cursos";

  // Lista de cursos
  public listaCursos = [
    {
      id_course: 1,
      course_name: 'VIOLÍN',
      level: 'Inicial',
      icon: 'assets/courses/violin.png',
      desc: 'El curso de violín es una experiencia integral que enseña técnicas de ejecución, lectura de partituras y expresión musical.'
    },
    {
      id_course: 2,
      course_name: 'PIANO',
      level: 'Intermedio',
      icon: 'assets/courses/piano.png',
      desc: 'El curso de piano realiza una introducción al mundo de los teclados y sus diferentes estilos.'
    },
    {
      id_course: 3,
      course_name: 'GUITARRA',
      level: 'Avanzado',
      icon: 'assets/courses/guitar.png',
      desc: 'El curso de guitarra instruye al estudiante en técnicas de rasgueo, arpegios, punteo y lectura de partituras.'
    },
    {
      id_course: 4,
      course_name: 'VIOLONCHELO',
      level: 'Inicial',
      icon: 'assets/courses/cello.png',
      desc: 'El curso de guitarra incluye una introducción al violonchelo y su importancia en el mbito musical.'
    },
  ]



}
