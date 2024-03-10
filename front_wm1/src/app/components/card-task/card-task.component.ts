import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrl: './card-task.component.css'
})
export class CardTaskComponent {
  @Input()
  nombreTarea!: string

  @Input()
  descrip_tarea!: string

  @Input()
  nombreCurso!: string

  @Input()
  grade!: number

  @Input()
  fecha!: string

}
