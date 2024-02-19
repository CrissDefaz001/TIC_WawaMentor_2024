import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './modules/course/course.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { StudentModule } from './modules/student/student.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { CourseStdTeaModule } from './modules/course-std-tea/course-std-tea.module';
import { EventModule } from './modules/event/event.module';
import { EventTypeModule } from './modules/event-type/event-type.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'wawamentordb1',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // sincroniza tablas con la base
    }),
    CourseModule,
    UserModule,
    StudentModule,
    TeacherModule,
    CourseStdTeaModule,
    EventModule,
    EventTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
