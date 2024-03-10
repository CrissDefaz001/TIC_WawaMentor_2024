import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteLoginComponent } from './routes/misc/route-login/route-login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SRouteMain } from './routes/student/s-route-main/s-route.main';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SDashboardComponent } from './routes/student/s-dashboard/s-dashboard.component';
import { SCoursesListComponent } from './routes/student/s-courses-list/s-courses-list.component';
import { SProfileComponent } from './routes/student/s-profile/s-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import {NgOptimizedImage} from "@angular/common";
import { CardCourseComponent } from './components/card-course/card-course.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardActivityComponent } from './components/card-activity/card-activity.component';
import { SActivitiesListComponent } from './routes/student/s-activity/s-activities-list.component';
import { CardTaskComponent } from './components/card-task/card-task.component';
import { STasksListComponent } from './routes/student/s-tasks-list/s-tasks-list.component';
import {FormsModule} from "@angular/forms";
import { SRouteCourse } from './routes/student/s-route-course/s-route-course';
import { SCourseOverviewComponent } from './routes/student/s-course-overview/s-course-overview.component';
import { NavpillmenuComponent } from './components/navpillmenu/navpillmenu.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { TRouteMainComponent } from './routes/teacher/t-route-main/t-route-main.component';
import { TDashboardComponent } from './routes/teacher/t-dashboard/t-dashboard.component';
import { TProfileComponent } from './routes/teacher/t-profile/t-profile.component';
import { CardTaskTComponent } from './components/card-task-t/card-task-t.component';
import { TRouteCourseComponent } from './routes/teacher/t-route-course/t-route-course.component';
import { TCourseOverviewComponent } from './routes/teacher/t-course-overview/t-course-overview.component';
import { TCourseAttendaceComponent } from './routes/teacher/t-course-attendace/t-course-attendace.component';
import { SCourseLessonComponent } from './routes/student/s-course-lesson/s-course-lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteLoginComponent,
    NavbarComponent,
    SRouteMain,
    SidebarComponent,
    SDashboardComponent,
    SCoursesListComponent,
    SProfileComponent,
    SearchboxComponent,
    CardCourseComponent,
    FooterComponent,
    CardActivityComponent,
    SActivitiesListComponent,
    CardTaskComponent,
    STasksListComponent,
    SRouteCourse,
    SCourseOverviewComponent,
    NavpillmenuComponent,
    OffcanvasComponent,
    TRouteMainComponent,
    TDashboardComponent,
    TProfileComponent,
    CardTaskTComponent,
    TRouteCourseComponent,
    TCourseOverviewComponent,
    TCourseAttendaceComponent,
    SCourseLessonComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NgOptimizedImage,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
