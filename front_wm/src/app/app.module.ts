import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarMainComponent } from './components/navbar-main/navbar-main.component';
import { NavbarSecondaryComponent } from './components/navbar-secondary/navbar-secondary.component';
import { CardCourseComponent } from './components/card-course/card-course.component';
import { CardTaskComponent } from './components/card-task/card-task.component';
import { StudentCoursesComponent } from './users/student-courses/student-courses.component';
import { StudentTasksComponent } from './users/student-tasks/student-tasks.component';
import { RouteDashboardStdComponent } from './routes/route-dashboard-std/route-dashboard-std.component';
import { NgOptimizedImage } from "@angular/common";
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {CoursesService} from "./services/http/courses.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarMainComponent,
    NavbarSecondaryComponent,
    CardCourseComponent,
    CardTaskComponent,
    StudentCoursesComponent,
    StudentTasksComponent,
    RouteDashboardStdComponent,
    FooterComponent
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
