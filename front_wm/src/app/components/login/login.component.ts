import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  studentOrTeacher: boolean = false;
  constructor(
    private readonly _router: Router,
  ) {
  }
  ngOnInit(): void {
  }

/*  irAEstudiante(){
    this._router.navigate('/inicio/dashboard').then(x => x)
  }*/

}
