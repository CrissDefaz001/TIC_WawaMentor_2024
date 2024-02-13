import {Component, OnInit} from '@angular/core';
import {CoursesService} from "../../services/http/courses.service";
import {observable} from "rxjs";

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrl: './student-courses.component.css'
})
export class StudentCoursesComponent implements OnInit {

  listaCursos: any[];
  //listaCursos2 = observable<any>

  // arreglo de ejemplo
  constructor(
    private readonly __courseService: CoursesService
  ) {
    // Arreglo quemado de cursos
    this.listaCursos = [
      {
        id: 1,
        nombre: 'Violin',
        nivel: 'Inicial'
      },
      {
        id: 2,
        nombre: 'Piano',
        nivel: 'Intermedio'
      },
      {
        id: 3,
        nombre: 'Guitarra',
        nivel: 'Avanzado'
      },
      {
        id: 4,
        nombre: 'Violonchelo',
        nivel: 'Inicial'
      },
    ]
  }

  // funcion que devuelve un observable (como un try-catch)
  mensajeConsola(objeto:boolean){
    console.log("Cursos obtneidos")
    const observableCursos = this.__courseService.traerCursos()
    observableCursos.subscribe({complete: console.info})
  }
  ngOnInit(): void {
  }
}
