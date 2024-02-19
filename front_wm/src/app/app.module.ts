import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbMainComponent } from './components/navbars/nb-main/nb-main.component';
import { CardCourseComponent } from './components/card-course/card-course.component';
import { CardTaskComponent } from './components/card-task/card-task.component';
import { StudentCoursesComponent } from './users/student-courses/student-courses.component';
import { StudentTasksComponent } from './users/student-tasks/student-tasks.component';
import { RouteDashboardStdComponent } from './routes/route-dashboard-std/route-dashboard-std.component';
import { NgOptimizedImage } from "@angular/common";
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {CoursesService} from "./services/http/courses.service";
import { LoginComponent } from './components/login/login.component';
import { RouteLoginComponent } from './routes/route-login/route-login.component';
import { RouteCourseStdComponent } from './routes/route-course-std/route-course-std.component';
import { RouteHomeComponent } from './routes/route-home/route-home.component';
import { RouteActivityComponent } from './routes/route-activity/route-activity.component';
import { RouteNotFoundComponent } from './routes/route-not-found/route-not-found.component';
import { CardCoursePresentationComponent } from './components/card-course-presentation/card-course-presentation.component';
import { StudentCourseComponent } from './users/student-course/student-course.component';
import { CardContactCourseComponent } from './components/card-contact-course/card-contact-course.component';
import { CardContentCourseStdComponent } from './components/card-content-course-std/card-content-course-std.component';
import { CardCourseDetailsComponent } from './components/card-course-details/card-course-details.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { RouteFormComponent } from './routes/route-form/route-form.component';
import { ModalComponent } from './components/modal/modal.component';
import { TeacherProfileComponent } from './users/teacher-profile/teacher-profile.component';
import { RouteTeacherProfileComponent } from './routes/route-teacher-profile/route-teacher-profile.component';
import { RouteMainComponent } from './routes/route-main/route-main.component';
import { NbStudentComponent } from './components/navbars/nb-student/nb-student.component';
import { NbTeacherComponent } from './components/navbars/nb-teacher/nb-teacher.component';
import { RouteStudentComponent } from './routes/route-student/route-student.component';
import { RouteTeacherComponent } from './routes/route-teacher/route-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    NbMainComponent,
    CardCourseComponent,
    CardTaskComponent,
    StudentCoursesComponent,
    StudentTasksComponent,
    RouteDashboardStdComponent,
    FooterComponent,
    LoginComponent,
    RouteLoginComponent,
    RouteCourseStdComponent,
    RouteHomeComponent,
    RouteActivityComponent,
    RouteNotFoundComponent,
    CardCoursePresentationComponent,
    StudentCourseComponent,
    CardContactCourseComponent,
    CardContentCourseStdComponent,
    CardCourseDetailsComponent,
    FormTestComponent,
    RouteFormComponent,
    ModalComponent,
    TeacherProfileComponent,
    RouteTeacherProfileComponent,
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
