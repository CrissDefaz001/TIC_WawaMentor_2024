import {Component, OnInit} from '@angular/core';
import {CoursesService} from "../../services/http/courses.service";

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrl: './student-courses.component.css'
})
export class StudentCoursesComponent implements OnInit {

  //listaCursos2: any[] = [];
  nivel: any;
  listaCursos = [
    {
      id: 1,
      course_name: 'Violin',
      course_desc: 'Inicial',
      icon: '../../../assets/images/courses/violin.png'
    },
/*    {
      id: 2,
      course_name: 'Piano',
      course_desc: 'Intermedio',
      icon: '../../../assets/images/courses/piano.png'
    },*/
    {
      id: 3,
      course_name: 'Guitarra',
      course_desc: 'Avanzado',
      icon: '../../../assets/images/courses/guitar.png'
    },/*    {
      id: 4,
      course_name: 'Violonchelo',
      course_desc: 'Inicial',
      icon: '../../../assets/images/courses/violonchelo.png'
    },*/

  ]



  // arreglo de ejemplo
  constructor(
    private readonly __courseService: CoursesService
  ) {
  }

/*  llenarData(){
    this.__courseService.traerCursos().subscribe( data => {
      this.listaCursos2 = data;
      console.log(this.listaCursos2) // imprime los datos
      }
    )
  }*/

  ngOnInit(): void {
   // this.llenarData()
  }
}
