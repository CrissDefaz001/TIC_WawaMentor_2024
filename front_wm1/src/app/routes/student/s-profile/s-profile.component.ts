import { Component } from '@angular/core';

@Component({
  selector: 'app-s-profile',
  templateUrl: './s-profile.component.html',
  styleUrl: './s-profile.component.css'
})
export class SProfileComponent {

  correo: string = "helena@wayrawawa.com"

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


/*  datosCursoEst = [
    {
      curso: "Violin",
      nivel: "Inicial"
    },
    {
      curso: "Piano",
      nivel: "Intermedio"
    },
    {
      curso: "Guitarra",
      nivel: "Avanzado"
    }
  ]*/

}
