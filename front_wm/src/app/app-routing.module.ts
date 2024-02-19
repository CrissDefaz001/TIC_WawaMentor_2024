import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouteLoginComponent} from "./routes/route-login/route-login.component";
import {RouteDashboardStdComponent} from "./routes/route-dashboard-std/route-dashboard-std.component";
import {RouteCourseStdComponent} from "./routes/route-course-std/route-course-std.component";
import {RouteHomeComponent} from "./routes/route-home/route-home.component";
import {RouteActivityComponent} from "./routes/route-activity/route-activity.component";
import {RouteNotFoundComponent} from "./routes/route-not-found/route-not-found.component";
import {RouteFormComponent} from "./routes/route-form/route-form.component";
import {ModalComponent} from "./components/modal/modal.component";
import {RouteTeacherProfileComponent} from "./routes/route-teacher-profile/route-teacher-profile.component";
import {RouteMainComponent} from "./routes/route-main/route-main.component";
import {RouteStudentComponent} from "./routes/route-student/route-student.component";
import {RouteTeacherComponent} from "./routes/route-teacher/route-teacher.component";

const routes: Routes = [
  {
    component: RouteLoginComponent,
    path: 'login'
  },
  {
    component: RouteMainComponent,
    path: 'inicio'
  },
  {
    component: RouteStudentComponent,
    path: 'student',
    children: [
      {
        component: RouteDashboardStdComponent,
        path: 'dashboard'
      },
      {
        component: RouteActivityComponent,
        path: 'actividades'
      },
      {
        component: RouteCourseStdComponent,
        path: 'course'
      },
      {
        component: RouteActivityComponent,
        path: 'activity'
      },
/*      {
        path:'',
        redirectTo: "/student/dashboard",
      }*/
    ]
  },
 {
    component: RouteHomeComponent,
    path:''
  },
  {
    component: RouteTeacherComponent,
    path: 'maestro',
    children: [
      {
        component: RouteTeacherProfileComponent,
        path: 'perfil'
      },
    ]
  },
  {
    component: RouteFormComponent,
    path: 'register'
  },

  {
    component: RouteNotFoundComponent,
    path: '**'
  },
  {
    component: ModalComponent,
    path: 'modal'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
