import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { createCourseDto } from '../dto/create-Course.dto';
import { CourseService } from '../services/course.service';
import { CourseTest } from '../entities/course.entity';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}
  // Listar cursos, declarando que tipo de datos espera recibir, (arreglo de cursos)
  @Get()
  getUsers(): Promise<CourseTest[]> {
    return this.courseService.getCourses();
  }

  // Un solo curso
  @Get(':id_course')
  getCourseST(@Param('id_course', ParseIntPipe) id: number): Promise<CourseTest> {
    return this.courseService.getCourseByID(id);
  }

  // Crear curso
  @Post()
  createCourse(@Body() newCourse: createCourseDto): Promise<CourseTest> {
    // es asíncrono, así que debe haber un return
    return this.courseService.createCourse(newCourse);
  }
}
