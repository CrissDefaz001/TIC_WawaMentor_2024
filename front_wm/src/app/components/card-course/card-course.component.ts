import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrl: './card-course.component.css'
})
export class CardCourseComponent implements OnInit{
  @Input()
  nombreCurso!: string

  @Input()
  nivel!: string

  ngOnInit(): void {
    console.log("INIT CURSOS")
  }

}
