import {Component, Input} from '@angular/core';
import {SidebarOptions} from "../../interfaces/sidebarOptions";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input()
  datosSidebar!: SidebarOptions[];

}
