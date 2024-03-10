import { Component, inject, Input } from '@angular/core';
import { NgbActiveOffcanvas } from "@ng-bootstrap/ng-bootstrap";
import {SidebarOptions} from "../../interfaces/sidebarOptions";
@Component({
  selector: 'app-offcanvas',
  template: `
    <div class="offcanvas-start" tabindex="-1"
         id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title"></h5>
        <button
          type="button"
          class="btn-close text-reset"
          aria-label="Close"
          (click)="activeOffcanvas.dismiss('Cross click')">
        </button>
      </div>
      <div class="offcanvas-body">
        <div><strong class="text-light">ESTUDIANTE</strong></div>
        <div ngbNav class="list-group list-group-flush mt-5 text-light">
          <div *ngFor="let x of datosOffCanvas">
            <div ngbNavItem>
              <a ngbNavLink routerLink="{{ x.ruta }}" class="list-group-item list-group-item-action">
                <i class="{{ x.icono }} fa-fw me-3 fs-6"></i>
                <span class="fs-6">{{ x.nombre }}</span>
              </a>
            </div>
          </div>
          <div ngbNavItem class="list-group-item">
            <button
              type="button"
              class="btn sec-color-wm ms-2"
              (click)="isCollapsed = !isCollapsed"
              [attr.aria-expanded]="!isCollapsed"
              aria-controls="collapseExample">
              <i class="fas fa-graduation-cap me-3"></i>
              Mis Cursos
            </button>
          </div>
            <div #collapse="ngbCollapse" [(ngbCollapse)]="!isCollapsed">
              <div ngbNav class="list-group list-group-flush text-light">
                <div *ngFor="let y of listaCursosEst">
                  <div ngbNavItem>
                    <a ngbNavLink routerLink="{{ y.ruta }}" class="list-group-item list-group-item-action">
                      <span class="fs-6">{{ y.curso }}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

        </div>

      </div>
    </div>
  `,
  styles: `
		/* Opening offcanvas as a component requires this style in order to scroll */
		:host {
			height: 100%;
			display: flex;
			flex-direction: column;
		}
	`,
})
export class OffcanvasComponent {
  activeOffcanvas = inject(NgbActiveOffcanvas);
  isCollapsed = false;

  @Input()
  nameMenu!: string;

  @Input()
  datosOffCanvas!: SidebarOptions[];

  // Cursos traidos de estudiante
  listaCursosEst = [
    {
      curso: "VIOLIN",
      ruta: "student/course/overview"
    },
    {
      curso: "PIANO",
      ruta: "student/course/overview"
    },
    {
      curso: "GUITARRA",
      ruta: "student/course/overview"
    },
    {
      curso: "VIOLONCHELO",
      ruta: "student/course/overview"
    }
  ]

}
