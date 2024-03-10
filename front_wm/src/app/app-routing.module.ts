import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouteLoginComponent} from "./routes/route-login/route-login.component";
import {S_dashboardComponent} from "./routes/student/s_dashboard/s_dashboard.component";
import {RouteCourseStdComponent} from "./routes/route-course-std/route-course-std.component";
import {RouteActivityComponent} from "./routes/route-activity/route-activity.component";
import {RouteNotFoundComponent} from "./routes/route-not-found/route-not-found.component";
import {RouteFormComponent} from "./routes/route-form/route-form.component";
import {T_profileComponent} from "./routes/teacher/t_profile/t_profile.component";
import {RouteStudentComponent} from "./routes/student/route-student/route-student.component";
import {RouteTeacherComponent} from "./routes/teacher/route-teacher/route-teacher.component";

const routes: Routes = [
  {
    component: RouteLoginComponent,
    path: 'login'
  },
  {
    component: RouteStudentComponent,
    path: 'student',
    children: [
      {
        component: S_dashboardComponent,
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
    ]
  },
  {
    component: RouteTeacherComponent,
    path: 'maestro',
    children: [
      {
        component: T_profileComponent,
        path: 'perfil'
      },
      {
        component: RouteFormComponent,
        path: 'register'
      },
    ]
  },

  {
    component: RouteNotFoundComponent,
    path: '**'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
