import { Body, Controller, Get, Post } from '@nestjs/common';
import { createCourseDto } from './dto/create-Course.dto';
import { CourseService } from './course.service';
import { CourseTest } from './course.entity';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}
  // Listar cursos, declarando que tipo de datos espera recibir, (arreglo de cursos)
  @Get()
  getUsers(): Promise<CourseTest[]> {
    return this.courseService.getCourses();
  }

  // Crear curso
  @Post()
  createCourse(@Body() newCourse: createCourseDto): Promise<CourseTest> {
    // es asíncrono, así que debe haber un return
    return this.courseService.createCourse(newCourse);
  }
}
