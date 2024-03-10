import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrl: './card-course.component.css'
})
export class CardCourseComponent implements OnInit{

  constructor(private readonly _router: Router) {
  }
  // Datos traidos del servidor para rellenar la tarjeta
  @Input()
  course_name!: string

  @Input()
  level!: string

  @Input()
  icon!: string

  @Input()
  id_course!: number

  @Input()
  desc!: string

  irACurso(){
    const ruta = ["student","course","overview"];
    //const ruta = ["courseview", idCurso];
    this._router.navigate(ruta).then(x => x)
  }

  ngOnInit(): void {
    console.log("INIT CURSOS")
  }

}
