import { Component } from '@angular/core';

@Component({
  selector: 'app-t-course-attendace',
  templateUrl: './t-course-attendace.component.html',
  styleUrl: './t-course-attendace.component.css'
})
export class TCourseAttendaceComponent {

  listaEstudiantes = [
    {
      id_user: 3,
      lastname: "Cumbal",
      firstname: "Sauri",
      photo_user: "assest/users/girl1.png"
    },
    {
      id_user: 2,
      lastname: "Flores",
      firstname: "Francisco",
      photo_user: "assest/users/boy3.png"
    },
    {
      id_user: 1,
      lastname: "Moncayo",
      firstname: "Helena",
      photo_user: "assest/users/helena2.jpg"
    },
    {
      id_user: 4,
      lastname: "Nicolalde",
      firstname: "Cori",
      photo_user: "assest/users/girl2.png"
    },

  ]





}
