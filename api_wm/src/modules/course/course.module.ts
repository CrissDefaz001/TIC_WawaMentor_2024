import { Module } from '@nestjs/common';
import { CourseController } from '../../controllers/course.controller';
import { CourseService } from '../../services/course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseTest } from '../../entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseTest])],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
