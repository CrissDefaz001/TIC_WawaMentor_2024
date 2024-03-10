import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent {

  // Agrega un placeholder según el item seleccionado del dashboard
  @Input()
  placeholderContent!: string

}
