import { Component } from '@angular/core';

@Component({
  selector: 'app-t-profile',
  templateUrl: './t-profile.component.html',
  styleUrl: './t-profile.component.css'
})
export class TProfileComponent {

  urlFotoUsuario: string = "assets/users/teacher.png"
  // urlFotoUsuario: string = "assets/users/helena2.jpg"
  correoMaestro: string = "marcoatupana@wayrawawa.com"

  public listaCursos = [
    {
      course_name: 'VIOLÍN',
      level: 'Inicial',
      icon: 'assets/courses/violin.png',
      desc: 'El curso de violín es una experiencia integral que enseña técnicas de ejecución, lectura de partituras y expresión musical.'
    },
  ]
}
