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
  listaCursos2: any[] = [];

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

  llenarData(){
    this.__courseService.traerCursos().subscribe( data => {
      this.listaCursos2 = data;
      console.log(this.listaCursos2) // imprime los datos
      }
    )
  }

  ngOnInit(): void {
    this.llenarData()
  }
}
