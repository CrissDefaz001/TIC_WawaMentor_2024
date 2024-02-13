import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseTest } from './course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseTest])],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
