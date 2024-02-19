import { Module } from '@nestjs/common';
import { CourseStdTeaController } from '../../controllers/course-std-tea.controller';
import { CourseStdTeaService } from '../../services/course-std-tea.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseStdTeaEntity } from '../../entities/course-std-tea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseStdTeaEntity])],
  controllers: [CourseStdTeaController],
  providers: [CourseStdTeaService],
})
export class CourseStdTeaModule {}
