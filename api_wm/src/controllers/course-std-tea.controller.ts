import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CourseStdTeaService } from '../services/course-std-tea.service';
import { CourseStdTeaEntity } from '../entities/course-std-tea.entity';
import { CreateCourseTSDto } from '../dto/create-course-t-s.dto';

@Controller('course-std')
export class CourseStdTeaController {
  constructor(private _courseSTService: CourseStdTeaService) {}

  @Get()
  getCoursesST(): Promise<CourseStdTeaEntity[]> {
    return this._courseSTService.getCoursesST();
  }

  // Obtiene cursos por usuario
  @Get(':id_user')
  getDataByIDCourse(
    @Param('id_user', ParseIntPipe) id: number,
  ): Promise<CourseStdTeaEntity[]> {
    return this._courseSTService.getDataByIDCourse(id);
  }

  @Post()
  createCourseST(@Body() newCourseST: CreateCourseTSDto) {
    return this._courseSTService.createCourseStdTea(newCourseST);
  }
}
