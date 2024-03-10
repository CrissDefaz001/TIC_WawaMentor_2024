import { Component } from '@angular/core';

@Component({
  selector: 'app-t-course-overview',
  templateUrl: './t-course-overview.component.html',
  styleUrl: './t-course-overview.component.css'
})
export class TCourseOverviewComponent {

  nombreCurso = "VIOLÍN"
  items = [
    'Introducción a la lectura musical y el sistema de notación. ',
    'Reconocimiento de las notas en el pentagrama y su duración.',
    'Posición de manos'];


}
