import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-task-t',
  templateUrl: './card-task-t.component.html',
  styleUrl: './card-task-t.component.css'
})
export class CardTaskTComponent {

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

  @Input()
  deadline!: string


}
