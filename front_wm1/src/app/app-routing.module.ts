import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouteLoginComponent} from "./routes/misc/route-login/route-login.component";
import {SRouteMain} from "./routes/student/s-route-main/s-route.main";
import {SDashboardComponent} from "./routes/student/s-dashboard/s-dashboard.component";
import {SCoursesListComponent} from "./routes/student/s-courses-list/s-courses-list.component";
import {SProfileComponent} from "./routes/student/s-profile/s-profile.component";
import {STasksListComponent} from "./routes/student/s-tasks-list/s-tasks-list.component";
import {SRouteCourse} from "./routes/student/s-route-course/s-route-course";
import {SCourseOverviewComponent} from "./routes/student/s-course-overview/s-course-overview.component";
import {SActivitiesListComponent} from "./routes/student/s-activity/s-activities-list.component";
import {TRouteMainComponent} from "./routes/teacher/t-route-main/t-route-main.component";
import {TDashboardComponent} from "./routes/teacher/t-dashboard/t-dashboard.component";
import {TProfileComponent} from "./routes/teacher/t-profile/t-profile.component";
import {TRouteCourseComponent} from "./routes/teacher/t-route-course/t-route-course.component";
import {TCourseOverviewComponent} from "./routes/teacher/t-course-overview/t-course-overview.component";
import {TCourseAttendaceComponent} from "./routes/teacher/t-course-attendace/t-course-attendace.component";
import {SCourseLessonComponent} from "./routes/student/s-course-lesson/s-course-lesson.component";

const routes: Routes = [
  {
    component: RouteLoginComponent,
    path:'login'
  },
  {
    component: SRouteMain,
    path:'student',
    children: [
      {
        component: SDashboardComponent,
        path:'dashboard'
      },
      {
        component: SProfileComponent,
        path:'profile'
      },
      {
        component: SCoursesListComponent,
        path:'courselist'
      },
      {
        component: SRouteCourse,
        path:'course',
        children: [
          {
            component: SCourseOverviewComponent,
            path: 'overview'
          },
          {
            component: STasksListComponent,
            path:'tasks'
          },
          {
            component: SActivitiesListComponent,
            path:'activities'
          },
          {
            component: SCourseLessonComponent,
            path: 'lesson'
          },
          {
            path:'',
            redirectTo: 'overview',
            pathMatch: 'full'
          },
        ]
      },
    ]
  },
  {
    component: TRouteMainComponent,
    path:'teacher',
    children: [
      {
        component: TDashboardComponent,
        path:'dashboard'
      },
      {
        component: TProfileComponent,
        path:'profile'
      },
      {
        component: TRouteCourseComponent,
        path:'course',
        children: [
          {
            component: TCourseOverviewComponent,
            path: 'overview'
          },
          {
            component: TCourseAttendaceComponent,
            path: 'attendance'
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
