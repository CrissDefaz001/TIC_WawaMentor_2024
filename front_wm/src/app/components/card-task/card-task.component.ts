import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrl: './card-task.component.css'
})
export class CardTaskComponent implements OnInit{
  @Input()
  nombreTarea!: string

  @Input()
  nombreCurso!: string

  @Input()
  descrip_tarea!: string

  @Input()
  calificacion!: number

  ngOnInit(): void {
    console.log("INIT TAREAS")
  }

}
