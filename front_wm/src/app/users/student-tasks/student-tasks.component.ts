import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-student-tasks',
  templateUrl: './student-tasks.component.html',
  styleUrl: './student-tasks.component.css'
})
export class StudentTasksComponent implements OnInit{

  listaTareas: any[];

  // arreglo de ejemplo
  constructor() {
    this.listaTareas = [
      {
        nombreTarea: 'Posicion de manos',
        nombreCurso: 'Violin',
        grade: 9.5
      },
      {
        nombreTarea: 'Partitura Cielito Lindo & Routing',
        nombreCurso: 'Guitarra',
        grade: 8
      },
      {
        nombreTarea: 'Repaso de Tablatura',
        nombreCurso: 'Piano',
        grade: 6.5
      },
    ]
  }

  ngOnInit(): void {
  }

}
