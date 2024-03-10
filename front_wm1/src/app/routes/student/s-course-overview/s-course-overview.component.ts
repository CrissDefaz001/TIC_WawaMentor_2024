import { Component } from '@angular/core';

@Component({
  selector: 'app-s-course-overview',
  templateUrl: './s-course-overview.component.html',
  styleUrl: './s-course-overview.component.css'
})
export class SCourseOverviewComponent {

  nombreCurso = "VIOLÍN"
  items = [
    'Introducción a la lectura musical y el sistema de notación. ',
    'Reconocimiento de las notas en el pentagrama y su duración.',
    'Posición de manos'];

}
