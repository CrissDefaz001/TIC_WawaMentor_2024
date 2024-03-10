import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbMainComponent } from './components/navbars/nb-main/nb-main.component';
import { CardCourseComponent } from './components/card-course/card-course.component';
import { CardTaskComponent } from './components/card-task/card-task.component';
import { StudentCoursesComponent } from './users/student-courses/student-courses.component';
import { StudentTasksComponent } from './users/student-tasks/student-tasks.component';
import { S_dashboardComponent } from './routes/student/s_dashboard/s_dashboard.component';
import { NgOptimizedImage } from "@angular/common";
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {CoursesService} from "./services/http/courses.service";
import { LoginComponent } from './components/login/login.component';
import { RouteLoginComponent } from './routes/route-login/route-login.component';
import { RouteCourseStdComponent } from './routes/route-course-std/route-course-std.component';
import { RouteActivityComponent } from './routes/route-activity/route-activity.component';
import { RouteNotFoundComponent } from './routes/route-not-found/route-not-found.component';
import { CardCoursePresentationComponent } from './components/card-course-presentation/card-course-presentation.component';
import { S_courseComponent } from './routes/student/s_course/s_course.component';
import { CardContactCourseComponent } from './components/card-contact-course/card-contact-course.component';
import { CardContentCourseStdComponent } from './components/card-content-course-std/card-content-course-std.component';
import { CardCourseDetailsComponent } from './components/card-course-details/card-course-details.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { RouteFormComponent } from './routes/route-form/route-form.component';
import { TeacherProfileComponent } from './users/teacher-profile/teacher-profile.component';
import { T_profileComponent } from './routes/teacher/t_profile/t_profile.component';
import { RouteMainComponent } from './routes/route-main/route-main.component';
import { NbStudentComponent } from './components/navbars/nb-student/nb-student.component';
import { NbTeacherComponent } from './components/navbars/nb-teacher/nb-teacher.component';
import { RouteStudentComponent } from './routes/student/route-student/route-student.component';
import { RouteTeacherComponent } from './routes/teacher/route-teacher/route-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    NbMainComponent,
    CardCourseComponent,
    CardTaskComponent,
    StudentCoursesComponent,
    StudentTasksComponent,
    S_dashboardComponent,
    FooterComponent,
    LoginComponent,
    RouteLoginComponent,
    RouteCourseStdComponent,
    RouteActivityComponent,
    RouteNotFoundComponent,
    CardCoursePresentationComponent,
    S_courseComponent,
    CardContactCourseComponent,
    CardContentCourseStdComponent,
    CardCourseDetailsComponent,
    FormTestComponent,
    RouteFormComponent,
    TeacherProfileComponent,
    T_profileComponent,
    RouteMainComponent,
    NbStudentComponent,
    NbTeacherComponent,
    RouteStudentComponent,
    RouteTeacherComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        HttpClientModule
    ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
