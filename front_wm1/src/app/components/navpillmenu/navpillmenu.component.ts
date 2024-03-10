import {Component, Input} from '@angular/core';
import {SidebarOptions} from "../../interfaces/sidebarOptions";

@Component({
  selector: 'app-navpillmenu',
  templateUrl: './navpillmenu.component.html',
  styleUrl: './navpillmenu.component.css'
})
export class NavpillmenuComponent {

  @Input()
  datosSidebar!: SidebarOptions[];

}
